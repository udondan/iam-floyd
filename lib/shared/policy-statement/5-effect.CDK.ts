// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import { aws_iam as iam } from 'aws-cdk-lib';

import { PolicyStatementWithResources } from './4-resources';

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  /**
   * Injects effect into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      return super.toJSON();
    }
    const statement = super.toJSON();

    // @ts-ignore only available after swapping 1-base
    statement.Effect = this.effect;

    return statement;
  }

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
