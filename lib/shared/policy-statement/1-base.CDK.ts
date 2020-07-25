// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available after swapping 1-base
import iam = require('@aws-cdk/aws-iam');

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends iam.PolicyStatement {
  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  protected servicePrefix = '';
}
