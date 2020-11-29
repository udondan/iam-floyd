import * as statement from '../../lib';

// doc-start
const policy = {
  Version: '2012-10-17',
  Statement: [
    new statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag('Owner', '${aws:username}'),
    new statement.Ec2()
      .allow()
      .toStopInstances()
      .ifResourceTag('Owner', '${aws:username}'),
    new statement.Ec2() //
      .allow()
      .allListActions()
      .allReadActions(),
  ],
};
