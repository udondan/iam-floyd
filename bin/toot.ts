import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';
import * as fs from 'fs';

const maxLength = 500;

const sqsClient = new SQSClient({ region: 'us-east-1' });

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

function enqueueToot(content: string) {
  return new Promise(async (resolve, reject) => {
    const params = {
      MessageBody: content,
      QueueUrl: process.env.AWS_SQS_URL!,
      MessageGroupId: 'Default',
    };

    try {
      const data = await sqsClient.send(new SendMessageCommand(params));
      console.log(data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}

async function main() {
  const changelog = getChangelog();

  const toots: string[] = [];
  const split = changelog
    .split(/^(?=(?::warning: )?\*\*)/gm)
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
          toots.push(`${headline}\n\n${tmpContent.trim()}`);
          tmpContent = '';
        }
        tmpContent += `${line}\n`;
      });
      if (tmpContent.length) {
        toots.push(`${headline}\n\n${tmpContent.trim()}`);
      }
    } else {
      toots.push(content);
    }
  });

  for (let content of toots) {
    console.log('tooting:');
    console.log(content);
    await enqueueToot(content).catch((err: any) => {
      console.error(err);
      process.exit(1);
    });
    console.log('--------------');
  }
}

main();
