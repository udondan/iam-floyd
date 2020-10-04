import * as statement from 'iam-floyd';

// doc-start
new statement.Sts()
  .deny()
  .notPrincipals()
  .toAssumeRole()
  .forUser('1234567890', 'Bob');
