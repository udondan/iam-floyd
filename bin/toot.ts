import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';
import * as fs from 'fs';

const maxLength = 500;

const sqsClient = new SQSClient({ region: 'us-east-1' });

// The notes of the GitHub release, see toot.yml
function getChangelog() {
  const changelogFile = process.env.RELEASE_NOTES!;
  console.log(`reading ${changelogFile}`);
  const changelog = fs.readFileSync(changelogFile, 'utf8');
  return changelog.replace(/^---$/gm, '');
}

async function enqueueToot(content: string) {
  const data = await sqsClient.send(
    new SendMessageCommand({
      MessageBody: content,
      QueueUrl: process.env.AWS_SQS_URL!,
      MessageGroupId: 'Default',
    }),
  );
  console.log(data);
}

async function main() {
  const changelog = getChangelog();

  const toots: string[] = [];
  const split = changelog
    .split(/^(?=(?::warning: )?\*\*)/gm)
    .filter((content) => /^(?::warning: )?\*\*/.test(content));

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

  for (const content of toots) {
    console.log('tooting:');
    console.log(content);
    await enqueueToot(content);
    console.log('--------------');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
