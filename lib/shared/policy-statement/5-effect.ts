import { PolicyStatementWithResources } from './4-resources';

/**
 * Policy effects
 */
export enum Effect {
  allow = 'Allow',
  deny = 'Deny',
}

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  public effect = Effect.allow;

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
    statement.Effect = this.effect;
    return statement;
  }

  /**
   * Allow the actions in this statement
   */
  public allow() {
    this.effect = Effect.allow;
    return this;
  }

  /**
   * Deny the actions in this statement
   */
  public deny() {
    this.effect = Effect.deny;
    return this;
  }
}
