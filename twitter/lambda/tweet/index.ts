import { Callback, Context } from 'aws-lambda';
import AWS = require('aws-sdk');
import Twit = require('twit');

const sqs = new AWS.SQS();
const no_tweets_msg = 'No Tweets in queue';

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
  getTweetFromQueue(process.env.queue!)
    .then(tweet)
    .then(deleteTweetFromQueue)
    .then((content) => {
      console.log('DONE');
      callback(null, content);
    })
    .catch((err: Error) => {
      if (err.message == no_tweets_msg) {
        log(err.message);
        return callback(null, err.message);
      }
      callback(err);
    });
};

function getTweetFromQueue(queue: string): Promise<Envelope> {
  log('Fetching Tweet from queue');
  return new Promise((resolve, reject) => {
    const params: AWS.SQS.ReceiveMessageRequest = {
      QueueUrl: queue,
    };
    sqs.receiveMessage(
      params,
      function (err: AWS.AWSError, data: AWS.SQS.ReceiveMessageResult) {
        if (err) return reject(err);
        if (typeof data.Messages === 'undefined' || !data.Messages.length) {
          return reject(new Error(no_tweets_msg));
        }
        const message = data.Messages![0];
        log(`Got Tweet: ${message.Body!}`);
        resolve({
          queue: queue,
          message: message,
        });
      }
    );
  });
}

function tweet(data: Envelope): Promise<Envelope> {
  return new Promise(async (resolve, reject) => {
    console.log(`Tweeting: ${data.message.Body}`);
    const twitter = await authenticateTwitter();
    /*
    twitter
      .post('statuses/update', { status: data.message.Body })
      .then((_: Twit.PromiseResponse) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
    */
    resolve(data);
  });
}

function deleteTweetFromQueue(data: Envelope): Promise<void> {
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

function authenticateTwitter(): Promise<Twit> {
  return new Promise((resolve, reject) => {
    const secretsmanager = new AWS.SecretsManager();
    const params: AWS.SecretsManager.GetSecretValueRequest = {
      SecretId: process.env.credentials!,
    };
    secretsmanager.getSecretValue(
      params,
      function (
        err: AWS.AWSError,
        data: AWS.SecretsManager.GetSecretValueResponse
      ) {
        if (err) return reject(err);

        const options = JSON.parse(data.SecretString!);
        options['timeout_ms'] = 60 * 1000;
        options['strictSSL'] = true;

        const twitter = new Twit(options);
        resolve(twitter);
      }
    );
  });
}

function log(msg: string) {
  console.info(msg);
}
