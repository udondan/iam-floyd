import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.S3()
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
