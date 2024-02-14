import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.Dynamodb()
      .deny()
      .toPutItem()
      .onTable('Thread')
      .ifAttributes(
        ['ID', 'PostDateTime'],
        new statement.Operator().stringEquals().forAnyValue(),
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
