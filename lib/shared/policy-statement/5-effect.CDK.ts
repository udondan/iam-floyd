// This file is used in the CDK variant of the package: cdk-iam-floyd
// @ts-ignore only available running bin/mkcdk
import iam = require('@aws-cdk/aws-iam');

import { PolicyStatementWithResources } from './4-resources';

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  /** When `true`, an "Effect: Allow" will be put into the policy statement.
   * By default it will be omitted, since `Allow` is the default anyway.
   * */
  protected explicitAllow = false;

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
    if (this.effect != iam.Effect.ALLOW || this.explicitAllow) {
      // @ts-ignore only available after swapping 1-base
      statement.Effect = this.effect;
    }

    return statement;
  }

  /**
   * Allow the actions in this statement
   *
   * The default `Effect` is `Allow`. Therefore by default the `Effect` key
   * will not be present in the statement. To enforce the `Effect` key, pass
   * `true` as argument.
   *
   * @param explicit Enforce the `Effect` key to be present in the statement
   */
  public allow(explicit?: boolean) {
    this.explicitAllow = explicit || false;
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
