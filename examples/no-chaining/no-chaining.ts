import * as statement from 'iam-floyd';

// doc-start
const myStatement = new statement.Ec2();
myStatement.allow();
myStatement.toStartInstances();
myStatement.toStopInstances();
