import { Callback, Context } from 'aws-lambda';
import AWS = require('aws-sdk');
import generator, { MegalodonInterface } from 'megalodon';

const sqs = new AWS.SQS();
const no_toots_msg = 'No Toots in queue';

interface Event {
  [key: string]: any;
}

interface Envelope {
  queue: string;
  message: AWS.SQS.Message;
}

export const handler = function (
  _event: Event = {},
  _context: Context,
  callback: Callback
) {
  getTootFromQueue(process.env.queue!)
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

function getTootFromQueue(queue: string): Promise<Envelope> {
  log('Fetching Toots from queue');
  return new Promise((resolve, reject) => {
    const params: AWS.SQS.ReceiveMessageRequest = {
      QueueUrl: queue,
    };
    sqs.receiveMessage(
      params,
      function (err: AWS.AWSError, data: AWS.SQS.ReceiveMessageResult) {
        if (err) return reject(err);
        if (typeof data.Messages === 'undefined' || !data.Messages.length) {
          return reject(new Error(no_toots_msg));
        }
        const message = data.Messages![0];
        log(`Got Toots: ${message.Body!}`);
        resolve({
          queue: queue,
          message: message,
        });
      }
    );
  });
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

function deleteTootFromQueue(data: Envelope): Promise<void> {
  console.log(`Removing toot from queue: ${data.message.ReceiptHandle}`);
  return new Promise((resolve, reject) => {
    const params: AWS.SQS.DeleteMessageRequest = {
      QueueUrl: data.queue,
      ReceiptHandle: data.message.ReceiptHandle!,
    };
    sqs.deleteMessage(params, function (err, _) {
      if (err) return reject(err);
      resolve();
    });
  });
}

function authenticateMastodon(): Promise<MegalodonInterface> {
  return new Promise((resolve, reject) => {
    const secretsmanager = new AWS.SecretsManager();
    const params: AWS.SecretsManager.GetSecretValueRequest = {
      SecretId: process.env.credentials!,
    };
    secretsmanager.getSecretValue(
      params,
      async function (
        err: AWS.AWSError,
        data: AWS.SecretsManager.GetSecretValueResponse
      ) {
        if (err) return reject(err);

        const credentials = JSON.parse(data.SecretString!);

        const client = generator(
          'mastodon',
          'https://awscommunity.social',
          credentials.access_token
        );

        resolve(client);
      }
    );
  });
}

function log(msg: string) {
  console.info(msg);
}
