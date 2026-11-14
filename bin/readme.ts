#!/usr/bin/env node
/**
 * Writes the README of a package from README.md, with only the example and the installation of
 * its language (see lib/generator/readme.ts).
 *
 *   readme.ts <language> <package> <file>   writes the README of the package to the file
 *   readme.ts --jsii <language>             sets the readme of the jsii assembly in the working
 *                                           directory, before jsii-pacmak builds the package of
 *                                           cdk-iam-floyd in that language
 */
import * as fs from 'fs';
import { loadAssemblyFromFile } from '@jsii/spec';

import { writeJsii } from '../lib/generator/emit/jsii';
import {
  Language,
  languages,
  Package,
  packages,
  readme,
} from '../lib/generator/readme';

const usage =
  'Usage: readme.ts <language> <package> <file> | readme.ts --jsii <language>';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8')) as {
  version: string;
};
const args = process.argv.slice(2);
const jsii = args[0] === '--jsii';
const language = args[jsii ? 1 : 0];
const pkg = jsii ? 'cdk-iam-floyd' : args[1];
if (
  args.length !== (jsii ? 2 : 3) ||
  !(languages as readonly string[]).includes(language) ||
  !(packages as readonly string[]).includes(pkg)
) {
  console.error(usage);
  process.exit(1);
}

const markdown = readme(
  fs.readFileSync('README.md', 'utf8'),
  language as Language,
  pkg as Package,
  version,
);

if (jsii) {
  const assembly = loadAssemblyFromFile('.jsii', false);
  assembly.readme = { markdown };
  writeJsii('.', assembly as unknown as Record<string, unknown>);
} else {
  fs.writeFileSync(args[2], markdown);
}
