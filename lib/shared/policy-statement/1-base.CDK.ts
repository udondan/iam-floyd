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
  protected static readonly defaultPartition = Aws.PARTITION;

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';
}
