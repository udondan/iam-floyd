import { deploy, out } from '../../helper/typescript/typescript_test';
import { Operator, statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag(
        'Environment',
        ['Production', 'Staging', 'Dev'],
        new Operator().stringEquals().ifExists()
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
