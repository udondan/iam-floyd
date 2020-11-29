import * as statement from '../../lib';

// doc-start
const myStatement = new statement.Ec2();
myStatement.allow();
myStatement.toStartInstances();
myStatement.toStopInstances();
