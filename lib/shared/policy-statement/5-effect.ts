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
