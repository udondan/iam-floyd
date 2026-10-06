// This file is used in the CDK variant of the package: cdk-iam-floyd
import { aws_iam } from 'aws-cdk-lib';

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends aws_iam.PolicyStatement {
  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';
}
