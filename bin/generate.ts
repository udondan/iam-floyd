#!/usr/bin/env node
import { createIndex, createModules, getAwsServices } from '../lib/generator';

getAwsServices()
  .then(createModules)
  .then(createIndex)
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err) => {
    console.error(err);
  });
