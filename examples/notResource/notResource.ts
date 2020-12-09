import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.S3()
      .allow()
      .notResources()
      .toDeleteBucket()
      .onBucket('example-bucket')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
