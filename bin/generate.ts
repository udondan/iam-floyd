#!/usr/bin/env node
import { createIndex, createModules, getAwsServices, indexManagedPolicies } from '../lib/generator';

getAwsServices()
  .then(createModules)
  .then(createIndex)
  .then(indexManagedPolicies)
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
