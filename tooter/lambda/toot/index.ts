import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import {
  DeleteMessageCommand,
  Message,
  ReceiveMessageCommand,
  SQSClient,
} from '@aws-sdk/client-sqs';
import generator, { MegalodonInterface } from 'megalodon';

const region = 'us-east-1';
const sqsClient = new SQSClient({ region });
const secretsManagerClient = new SecretsManagerClient({ region });

const noTootsMsg = 'No Toots in queue';

interface Envelope {
  queue: string;
  message: Message;
}

interface Credentials {
  access_token: string;
}

export async function handler(): Promise<string> {
  const envelope = await getTootFromQueue(process.env.queue!);
  if (!envelope) {
    log(noTootsMsg);
    return noTootsMsg;
  }
  await toot(envelope);
  await deleteTootFromQueue(envelope);
  console.log('DONE');
  return 'DONE';
}

async function getTootFromQueue(queue: string): Promise<Envelope | undefined> {
  log('Fetching Toots from queue');

  try {
    const data = await sqsClient.send(
      new ReceiveMessageCommand({ QueueUrl: queue }),
    );
    if (!data.Messages?.length) {
      return undefined;
    }
    const message = data.Messages[0];
    log(`Got Toots: ${message.Body!}`);
    return { queue, message };
  } catch (err) {
    console.error('Error fetching Toots from queue', err);
    throw err;
  }
}

async function toot(data: Envelope) {
  if (typeof data.message.Body !== 'string') {
    throw new Error('Message body is not a string');
  }
  console.log(`Tooting: ${data.message.Body}`);
  const mastodon = await authenticateMastodon();
  try {
    const response = await mastodon.postStatus(data.message.Body, {
      visibility: 'public',
    });
    log(JSON.stringify(response));
  } catch (err) {
    log(JSON.stringify(err));
    throw err;
  }
}

async function deleteTootFromQueue(data: Envelope): Promise<void> {
  console.log(`Removing toot from queue: ${data.message.ReceiptHandle}`);

  try {
    await sqsClient.send(
      new DeleteMessageCommand({
        QueueUrl: data.queue,
        ReceiptHandle: data.message.ReceiptHandle,
      }),
    );
    console.log('Toot removed from queue successfully');
  } catch (err) {
    console.error('Error removing Toot from queue', err);
    throw err;
  }
}

async function authenticateMastodon(): Promise<MegalodonInterface> {
  try {
    const data = await secretsManagerClient.send(
      new GetSecretValueCommand({ SecretId: process.env.credentials! }),
    );
    const credentials = JSON.parse(data.SecretString!) as Credentials;
    return generator(
      'mastodon',
      'https://awscommunity.social',
      credentials.access_token,
    );
  } catch (err) {
    console.error('Error retrieving secret', err);
    throw err;
  }
}

function log(msg: string) {
  console.info(msg);
}
