import { deploy, out } from '../../helper/typescript/typescript_test';
import { Operator, statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.Dynamodb()
      .allow()
      .toGetItem()
      .onTable('Thread')
      .ifAttributes(
        ['ID', 'Message', 'Tags'],
        new Operator().stringEquals().forAllValues()
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
