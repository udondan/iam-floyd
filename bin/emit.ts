#!/usr/bin/env node
import * as fs from 'fs';

import { emitConverterIndex } from '../lib/generator/emit/converter';
import { emitTypeScriptFromModels } from '../lib/generator/emit/typescript';

// after `make cdk`, the package is cdk-iam-floyd and the CDK variant is emitted
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')) as {
  name: string;
};
const cdk =
  process.argv.slice(2).includes('--cdk') ||
  packageJson.name === 'cdk-iam-floyd';

emitConverterIndex();
emitTypeScriptFromModels({ cdk })
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
