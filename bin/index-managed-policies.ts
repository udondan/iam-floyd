#!/usr/bin/env node
import { indexManagedPolicies } from '../lib/generator';

indexManagedPolicies()
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
