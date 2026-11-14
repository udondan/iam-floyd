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
const root = `${process.cwd()}/`;

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

/**
 * The state of the mapping of a record
 */
interface Mapping {
  map: Map<number, number>;
  functions: Set<string>;
  totals: Record<'lf' | 'lh' | 'brf' | 'brh' | 'fnf' | 'fnh', number>;
  mapped: string[];
}
type LineMapper = (mapping: Mapping, fields: string[], line: string) => void;

const hit = (count: string) => (Number(count) > 0 ? 1 : 0);

const mapFunction: LineMapper = (mapping, fields) => {
  const to = mapping.map.get(Number(fields[0]));
  if (to !== undefined) {
    mapping.functions.add(fields[1]);
    mapping.mapped.push(`FN:${to},${fields[1]}`);
  }
};

const mapFunctionHits: LineMapper = (mapping, fields, line) => {
  if (mapping.functions.has(fields[1])) {
    mapping.totals.fnf++;
    mapping.totals.fnh += hit(fields[0]);
    mapping.mapped.push(line);
  }
};

const mapLineHits: LineMapper = (mapping, fields) => {
  const to = mapping.map.get(Number(fields[0]));
  if (to !== undefined) {
    mapping.totals.lf++;
    mapping.totals.lh += hit(fields[1]);
    mapping.mapped.push(`DA:${to},${fields[1]}`);
  }
};

const mapBranchHits: LineMapper = (mapping, fields) => {
  const to = mapping.map.get(Number(fields[0]));
  if (to !== undefined) {
    mapping.totals.brf++;
    mapping.totals.brh += hit(fields[3]);
    mapping.mapped.push(`BRDA:${[to, ...fields.slice(1)].join(',')}`);
  }
};

/**
 * Maps a line of a record by its key, `fields` are the values after the colon
 */
const lineMappers: Record<string, LineMapper | undefined> = {
  FN: mapFunction,
  FNDA: mapFunctionHits,
  DA: mapLineHits,
  BRDA: mapBranchHits,
};
/**
 * Maps a record to the committed file, undefined if the file is not committed
 */
function mapRecord(record: string): string | undefined {
  const lines = record.split('\n').filter((line) => line.length);
  const source = lines.find((line) => line.startsWith('SF:'))?.slice(3);
  if (!source) {
    return undefined;
  }
  const path = source.startsWith(root) ? source.slice(root.length) : source;
  const target = committedFile(path);
  if (!target) {
    return undefined;
  }
  const mapping: Mapping = {
    map: lineMap(
      fs.readFileSync(path, 'utf8').split('\n'),
      execFileSync('git', ['show', `HEAD:${target}`], {
        encoding: 'utf8',
      }).split('\n'),
    ),
    functions: new Set<string>(),
    totals: { lf: 0, lh: 0, brf: 0, brh: 0, fnf: 0, fnh: 0 },
    mapped: [`SF:${target}`],
  };
  for (const line of lines) {
    const separator = line.indexOf(':');
    lineMappers[line.slice(0, separator)]?.(
      mapping,
      line.slice(separator + 1).split(','),
      line,
    );
  }
  const { lf, lh, brf, brh, fnf, fnh } = mapping.totals;
  mapping.mapped.push(
    `FNF:${fnf}`,
    `FNH:${fnh}`,
    `LF:${lf}`,
    `LH:${lh}`,
    `BRF:${brf}`,
    `BRH:${brh}`,
  );
  return `TN:\n${mapping.mapped.join('\n')}\nend_of_record\n`;
}

const output: string[] = [];
for (const record of fs.readFileSync(file, 'utf8').split('end_of_record\n')) {
  const mapped = mapRecord(record);
  if (mapped) {
    output.push(mapped);
  }
}
fs.writeFileSync(file, output.join(''));
