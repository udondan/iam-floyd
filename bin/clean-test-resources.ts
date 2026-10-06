import { cleanUp } from '../helper/typescript/typescript_test';

// Deletes the test policies and buckets of the examples that cancelled or failed runs left behind
cleanUp().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
