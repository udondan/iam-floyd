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

const region = 'us-east-1';
const mastodonUrl = 'https://awscommunity.social';
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
  const accessToken = await getAccessToken();
  // https://docs.joinmastodon.org/methods/statuses/#create
  const response = await fetch(`${mastodonUrl}/api/v1/statuses`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: data.message.Body,
      visibility: 'public',
    }),
  });
  const body = await response.text();
  log(body);
  if (!response.ok) {
    throw new Error(`Mastodon responded with ${response.status}: ${body}`);
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

async function getAccessToken(): Promise<string> {
  try {
    const data = await secretsManagerClient.send(
      new GetSecretValueCommand({ SecretId: process.env.credentials! }),
    );
    const credentials = JSON.parse(data.SecretString!) as Credentials;
    return credentials.access_token;
  } catch (err) {
    console.error('Error retrieving secret', err);
    throw err;
  }
}

function log(msg: string) {
  console.info(msg);
}
