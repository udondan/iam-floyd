/**
 * Maps the coverage of the CDK variant to the committed files.
 *
 * `make cdk` swaps the `*.CDK.ts` files over the base files and changes some others, e.g. imports.
 * This writes the coverage of a swapped file to its `*.CDK.ts`, and maps the lines of every file
 * to the lines of the committed file (in HEAD), ignoring white space. Lines without a match are
 * left out.
 *
 * Usage: ts-node bin/coverage-cdk-lcov.ts <lcov.info>
 */
import { execFileSync } from 'child_process';
import * as fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: ts-node bin/coverage-cdk-lcov.ts <lcov.info>');
  process.exit(1);
}

const committed = new Set(
  execFileSync('git', ['ls-files'], { encoding: 'utf8' }).split('\n'),
);

/**
 * The committed file of a file of the CDK variant, e.g. `1-base.CDK.ts` for `1-base.ts`
 */
function committedFile(path: string): string | undefined {
  const cdk = path.replace(/\.ts$/, '.CDK.ts');
  if (committed.has(cdk)) {
    return cdk;
  }
  return committed.has(path) ? path : undefined;
}

/**
 * Maps the line numbers of `from` to those of `to` (both from 1), by the longest common subsequence
 * of the lines without white space
 */
function lineMap(from: string[], to: string[]): Map<number, number> {
  const a = from.map((line) => line.replace(/\s+/g, ''));
  const b = to.map((line) => line.replace(/\s+/g, ''));
  const lengths: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      lengths[i][j] =
        a[i] === b[j]
          ? lengths[i + 1][j + 1] + 1
          : Math.max(lengths[i + 1][j], lengths[i][j + 1]);
    }
  }
  const map = new Map<number, number>();
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      map.set(i + 1, j + 1);
      i++;
      j++;
    } else if (lengths[i + 1][j] >= lengths[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  return map;
}

const root = `${process.cwd()}/`;
const output: string[] = [];
for (const record of fs.readFileSync(file, 'utf8').split('end_of_record\n')) {
  const lines = record.split('\n').filter((line) => line.length);
  const source = lines.find((line) => line.startsWith('SF:'))?.slice(3);
  if (!source) {
    continue;
  }
  const path = source.startsWith(root) ? source.slice(root.length) : source;
  const target = committedFile(path);
  if (!target) {
    continue;
  }
  const map = lineMap(
    fs.readFileSync(path, 'utf8').split('\n'),
    execFileSync('git', ['show', `HEAD:${target}`], {
      encoding: 'utf8',
    }).split('\n'),
  );

  const mapped: string[] = [`SF:${target}`];
  const functions = new Set<string>();
  let [lf, lh, brf, brh, fnf, fnh] = [0, 0, 0, 0, 0, 0];
  for (const line of lines) {
    const [key, value] = [
      line.slice(0, line.indexOf(':')),
      line.slice(line.indexOf(':') + 1),
    ];
    const fields = value.split(',');
    if (key === 'FN') {
      const to = map.get(Number(fields[0]));
      if (to !== undefined) {
        functions.add(fields[1]);
        mapped.push(`FN:${to},${fields[1]}`);
      }
    } else if (key === 'FNDA') {
      if (functions.has(fields[1])) {
        fnf++;
        fnh += Number(fields[0]) > 0 ? 1 : 0;
        mapped.push(line);
      }
    } else if (key === 'DA') {
      const to = map.get(Number(fields[0]));
      if (to !== undefined) {
        lf++;
        lh += Number(fields[1]) > 0 ? 1 : 0;
        mapped.push(`DA:${to},${fields[1]}`);
      }
    } else if (key === 'BRDA') {
      const to = map.get(Number(fields[0]));
      if (to !== undefined) {
        brf++;
        brh += fields[3] !== '-' && Number(fields[3]) > 0 ? 1 : 0;
        mapped.push(`BRDA:${[to, ...fields.slice(1)].join(',')}`);
      }
    }
  }
  mapped.push(
    `FNF:${fnf}`,
    `FNH:${fnh}`,
    `LF:${lf}`,
    `LH:${lh}`,
    `BRF:${brf}`,
    `BRH:${brh}`,
  );
  output.push(`TN:\n${mapped.join('\n')}\nend_of_record\n`);
}
fs.writeFileSync(file, output.join(''));
