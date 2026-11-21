#!/usr/bin/env node
import { indexServicePrincipals } from '../lib/generator';

indexServicePrincipals()
  .then(() => {
    console.log('ALL DONE');
  })
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
