import * as statement from '../../lib';

// doc-start
const policy = {
  Version: '2012-10-17',
  Statement: [...new statement.Collection().allowEc2InstanceDeleteByOwner()],
};
