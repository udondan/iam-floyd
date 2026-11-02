import { deploy, out } from '../../helper/typescript/typescript_test';
import { Operator, Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Dynamodb()
      .allow()
      .toGetItem()
      .onTable('Thread')
      .ifAttributes(
        ['ID', 'Message', 'Tags'],
        new Operator().stringEquals().forAllValues(),
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
