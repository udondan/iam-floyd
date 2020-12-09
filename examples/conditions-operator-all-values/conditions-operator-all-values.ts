import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.Dynamodb()
      .allow()
      .toGetItem()
      .onTable('Thread')
      .ifAttributes(
        ['ID', 'Message', 'Tags'],
        new statement.Operator().stringEquals().forAllValues()
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
