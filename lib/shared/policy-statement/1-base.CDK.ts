// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import { Aws, aws_iam as iam } from 'aws-cdk-lib';

export type PolicyStatementProps = iam.PolicyStatementProps & {

  /**
   * The default partition for resource ARNs
   *
   * @default - aws
   */
  defaultPartition?: 'aws' | 'aws-cn' | 'aws-us-gov';
};

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends iam.PolicyStatement {
  /**
   * The default partition for ARNs (such as one of [aws, aws-us-gov, aws-cn]). In
   * CDK applications, this is a reference to the current partition, otherwise, 'aws'.
   */
  protected readonly defaultPartition = Aws.PARTITION;

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';

  constructor(options?: PolicyStatementProps) {
    super(options);
    if (options.defaultPartition) {
      this.defaultPartition = options.defaultPartition;
    }
  }
}
