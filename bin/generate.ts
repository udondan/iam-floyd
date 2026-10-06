#!/usr/bin/env node
import {
  createModules,
  emitTypeScriptFromModels,
  getAwsServices,
} from '../lib/generator';
import { updateCdkRefs } from '../lib/generator/cdk-refs';
import { emitConverterIndex } from '../lib/generator/emit/converter';

getAwsServices()
  .then(createModules)
  .then(updateCdkRefs)
  .then(() => emitTypeScriptFromModels())
  .then(() => emitConverterIndex())
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
