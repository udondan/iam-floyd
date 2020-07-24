// This file is used in the CDK variant of the package: cdk-iam-floyd
import iam = require('@aws-cdk/aws-iam');

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends iam.PolicyStatement {
  protected cdkApplied = false; // internally used to check if principals, resources, actions and conditions have already been applied to the policy

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  protected servicePrefix = '';
}
