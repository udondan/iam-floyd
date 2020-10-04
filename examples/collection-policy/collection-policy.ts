import * as statement from 'iam-floyd';

// doc-start
const policy = {
  Version: '2012-10-17',
  Statement: [...new statement.Collection().nameOfTheCollection()],
};
