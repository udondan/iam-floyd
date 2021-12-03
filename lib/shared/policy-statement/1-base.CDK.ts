// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import { aws_iam as iam } from 'aws-cdk-lib';

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase extends iam.PolicyStatement {
  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';
}
