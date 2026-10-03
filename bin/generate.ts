#!/usr/bin/env node
import {
  createModules,
  emitTypeScriptFromModels,
  getAwsServices,
} from '../lib/generator';

getAwsServices()
  .then(createModules)
  .then(() => emitTypeScriptFromModels())
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
