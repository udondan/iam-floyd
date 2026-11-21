// This file is used in the CDK variant of the package: cdk-iam-floyd
import { aws_iam as iam } from 'aws-cdk-lib';

import { PolicyStatementWithResources } from './4-resources';

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  /**
   * Allow the actions in this statement
   */
  public allow() {
    // @ts-ignore only available after swapping 1-base
    this.effect = iam.Effect.ALLOW;
    return this;
  }

  /**
   * Deny the actions in this statement
   */
  public deny() {
    // @ts-ignore only available after swapping 1-base
    this.effect = iam.Effect.DENY;
    return this;
  }
}
