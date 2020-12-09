import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.S3() //
      .allow()
      .allActions()
      .on(
        'arn:aws:s3:::example-bucket', //
        'arn:aws:s3:::another-bucket'
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
