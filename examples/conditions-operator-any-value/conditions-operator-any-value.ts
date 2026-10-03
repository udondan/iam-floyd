import { deploy, out } from '../../helper/typescript/typescript_test';
import { Operator, Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Dynamodb()
      .deny()
      .toPutItem()
      .onTable('Thread')
      .ifAttributes(
        ['ID', 'PostDateTime'],
        new Operator().stringEquals().forAnyValue(),
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
