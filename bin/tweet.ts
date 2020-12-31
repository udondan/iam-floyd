import fs = require('fs');
import Twit = require('twit');

const maxLength = 280;

const twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY!,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET!,
  access_token: process.env.TWITTER_ACCESS_TOKEN!,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

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

function tweet(content: string) {
  return twitter.post('statuses/update', { status: content });
}

async function main() {
  const changelog = getChangelog();

  const tweets: string[] = [];
  const split = changelog
    .split(/^(?=(?::warning:)?\*\*)/gm)
    .filter((content) => content.match(/^(?::warning: )?\*\*/));

  split.forEach((content) => {
    content = content.trim().split('**').join('').replace(':warning:', '⚠️');
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
    await tweet(content);
    console.log('--------------');
  }
}

main();
