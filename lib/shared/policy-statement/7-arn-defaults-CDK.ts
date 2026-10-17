import { Aws } from 'aws-cdk-lib';

import { PolicyStatementWithArnDefaults } from './6-arn-defaults';

/**
 * Adds "arn defaults" functionality to the Policy Statement
 */
export class PolicyStatementWithArnDefaultsForCdk extends PolicyStatementWithArnDefaults {
  /**
   * The default partition for ARNs (such as one of [`aws`, `aws-us-gov`,
   * `aws-cn`]). This is a reference to the partition of the stack.
   */
  protected defaultPartition = Aws.PARTITION;

  /**
   * The default region for ARNs (such as `us-east-1`, `eu-central-1`,
   * `ap-east-1`, ...). This is a reference to the region of the stack.
   */
  protected defaultRegion = Aws.REGION;

  /**
   * The default region for ARNs (such as `us-east-1`, `eu-central-1`,
   * `ap-east-1`, ...). This is a reference to the current account of the stack.
   */
  protected defaultAccount = Aws.ACCOUNT_ID;
}
