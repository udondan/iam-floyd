import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2() //
  .deny()
  .allMatchingActions('/vpn/i');
