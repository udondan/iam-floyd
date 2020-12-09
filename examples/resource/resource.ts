import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.S3()
      .allow()
      .allActions()
      .onBucket('example-bucket')
      .onObject('example-bucket', 'some/path/*')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
