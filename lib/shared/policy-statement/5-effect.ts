import { PolicyStatementWithResources } from './4-resources';

/**
 * Policy effects
 */
export enum Effect {
  ALLOW = 'Allow',
  DENY = 'Deny',
}

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  public effect = Effect.ALLOW;

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

    if (this.effect != Effect.ALLOW || this.explicitAllow) {
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
    this.effect = Effect.ALLOW;
    return this;
  }

  /**
   * Deny the actions in this statement
   */
  public deny() {
    this.effect = Effect.DENY;
    return this;
  }
}
