import * as statement from '../../lib';

// doc-start
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifEncrypted()
  .ifInstanceType(['t3.micro', 't3.nano'])
  .ifAssociatePublicIpAddress(false)
  .ifAwsRequestTag('Owner', 'John');
