// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import { Aws, aws_iam as iam } from 'aws-cdk-lib';

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends iam.PolicyStatement {
  /**
   * The default partition for ARNs (such as one of [aws, aws-us-gov, aws-cn]). In
   * CDK applications, this is a reference to the current partition, otherwise, 'aws'.
   */
  protected defaultPartition = Aws.PARTITION;

  /**
   * The default region for ARNs (such as one of [us-east-1, eu-central-1, ap-east-1]). In
   * CDK applications, this is a reference to the current region, otherwise, '*'.
   */
  protected readonly defaultRegion = Aws.REGION;
  protected readonly defaultAccount = Aws.ACCOUNT_ID;

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';
}
