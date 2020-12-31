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
  const version = process.env.VERSION;
  const changelogFile = `CHANGELOG/v${version}.md`;
  console.log(`reading ${changelogFile}`);
  const changelog = fs.readFileSync(changelogFile, 'utf8');
  return changelog;
}

function tweet(content: string) {
  twitter.post(
    'statuses/update',
    { status: content },
    function (err, data, response) {
      console.log(data, err, response);
    }
  );
}

function main() {
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

  tweets.forEach((content) => {
    console.log(content);
    console.log('-----------------');
    if (false) {
      tweet(changelog);
    }
  });
}

main();
