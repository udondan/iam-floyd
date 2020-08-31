// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import iam = require('@aws-cdk/aws-iam');

import { PolicyStatementWithResources } from './4-resources';

export { Effect } from '@aws-cdk/aws-iam';

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  public effect = iam.Effect.ALLOW;

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

    if (this.effect != iam.Effect.ALLOW) {
      statement.Effect = this.effect;
    }

    return statement;
  }

  /**
   * Allow the actions in this statement
   */
  public allow() {
    this.effect = iam.Effect.ALLOW;
    return this;
  }

  /**
   * Deny the actions in this statement
   */
  public deny() {
    this.effect = iam.Effect.DENY;
    return this;
  }
}
