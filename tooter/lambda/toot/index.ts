import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import {
  DeleteMessageCommand,
  Message,
  ReceiveMessageCommand,
  ReceiveMessageRequest,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { Handler } from 'aws-lambda';
import generator, { MegalodonInterface } from 'megalodon';

const region = 'us-east-1';
const sqsClient = new SQSClient({ region });
const secretsManagerClient = new SecretsManagerClient({ region });

const no_toots_msg = 'No Toots in queue';

interface Envelope {
  queue: string;
  message: Message;
}

export const handler: Handler = async (_event, _context, callback) => {
  await getTootFromQueue(process.env.queue!)
    .then(toot)
    .then(deleteTootFromQueue)
    .then((content) => {
      console.log('DONE');
      callback(null, content);
    })
    .catch((err: Error) => {
      if (err.message == no_toots_msg) {
        log(err.message);
        return callback(null, err.message);
      }
      callback(err);
    });
};

async function getTootFromQueue(queue: string): Promise<Envelope> {
  log('Fetching Toots from queue');

  const params: ReceiveMessageRequest = {
    QueueUrl: queue,
  };

  const receiveMessageCommand = new ReceiveMessageCommand(params);

  try {
    const data = await sqsClient.send(receiveMessageCommand);
    if (!data.Messages?.length) {
      throw new Error(no_toots_msg);
    }
    const message_1 = data.Messages[0];
    log(`Got Toots: ${message_1.Body!}`);
    return {
      queue: queue,
      message: message_1,
    };
  } catch (err) {
    log(`Error fetching Toots from queue ${err}`);
    throw err;
  }
}

function toot(data: Envelope): Promise<Envelope> {
  return new Promise(async (resolve, reject) => {
    console.log(`Tooting: ${data.message.Body}`);
    const mastodon = await authenticateMastodon();
    if (typeof data.message.Body !== 'string') {
      return reject(new Error('Message body is not a string'));
    }
    mastodon
      .postStatus(data.message.Body, {
        visibility: 'public',
      })
      .then((response) => {
        log(JSON.stringify(response));
        resolve(data);
      })
      .catch((err) => {
        log(JSON.stringify(err));
        reject(err);
      });
  });
}

async function deleteTootFromQueue(data: Envelope): Promise<void> {
  console.log(`Removing toot from queue: ${data.message.ReceiptHandle}`);

  const params = {
    QueueUrl: data.queue,
    ReceiptHandle: data.message.ReceiptHandle,
  };

  const deleteMessageCommand = new DeleteMessageCommand(params);

  try {
    await sqsClient.send(deleteMessageCommand);
    console.log('Toot removed from queue successfully');
  } catch (err) {
    console.error('Error removing Toot from queue', err);
    throw err;
  }
}

async function authenticateMastodon(): Promise<MegalodonInterface> {
  const params = {
    SecretId: process.env.credentials!,
  };

  const getSecretValueCommand = new GetSecretValueCommand(params);
  try {
    const data = await secretsManagerClient.send(getSecretValueCommand);
    const credentials = JSON.parse(data.SecretString);
    const client = generator(
      'mastodon',
      'https://awscommunity.social',
      credentials.access_token,
    );
    return client;
  } catch (err) {
    console.error('Error retrieving secret', err);
    throw err; // This preserves the call stack
  }
}

function log(msg: string) {
  console.info(msg);
}
