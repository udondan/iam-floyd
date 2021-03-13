import AWS = require('aws-sdk');
import fs = require('fs');

const maxLength = 280;

const sqs = new AWS.SQS({ region: 'us-east-1' });

function getChangelog() {
  let version = process.env.CHANGELOG || false;
  if (!version) {
    version = fs.readFileSync('VERSION', 'utf8').trim();
  }

  const changelogFile = `CHANGELOG/v${version}.md`;
  console.log(`reading ${changelogFile}`);
  const changelog = fs.readFileSync(changelogFile, 'utf8');
  return changelog;
}

function enqueueTweet(content: string) {
  return new Promise((resolve, reject) => {
    const params: AWS.SQS.SendMessageRequest = {
      MessageBody: content,
      QueueUrl: process.env.AWS_SQS_URL!,
      MessageGroupId: 'Default',
    };
    sqs.sendMessage(
      params,
      function (err: AWS.AWSError, data: AWS.SQS.SendMessageResult) {
        if (err) return reject(err);
        console.log(data);
        resolve(data);
      }
    );
  });
}

async function main() {
  const changelog = getChangelog();

  const tweets: string[] = [];
  const split = changelog
    .split(/^(?=(?::warning:)?\*\*)/gm)
    .filter((content) => content.match(/^(?::warning: )?\*\*/));

  split.forEach((content) => {
    content = content.trim().split('**').join('').split(':warning:').join('⚠️');
    if (content.length > maxLength) {
      const contentSplit = content.split(/\n+/);
      const headline = contentSplit.shift();
      let tmpContent = '';
      contentSplit.forEach((line) => {
        if (
          headline!.length + tmpContent.length + line.length + 3 >
          maxLength
        ) {
          tweets.push(`${headline}\n\n${tmpContent.trim()}`);
          tmpContent = '';
        }
        tmpContent += `${line}\n`;
      });
      if (tmpContent.length) {
        tweets.push(`${headline}\n\n${tmpContent.trim()}`);
      }
    } else {
      tweets.push(content);
    }
  });

  for (let content of tweets) {
    console.log('tweeting:');
    console.log(content);
    await enqueueTweet(content).catch((err) => {
      console.error(err);
      process.exit(1);
    });
    console.log('--------------');
  }
}

main();
