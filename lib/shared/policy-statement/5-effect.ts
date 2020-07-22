import { PolicyStatementWithResources } from './4-resources';

enum Effect {
  ALLOW = 'Allow',
  DENY = 'Deny',
}

/**
 * Adds "effect" functionality to the Policy Statement
 */
export class PolicyStatementWithEffect extends PolicyStatementWithResources {
  public effect = Effect.ALLOW;

  /**
   * JSON-ify the policy statement
   *
   * Used when JSON.stringify() is called
   */

  public toJSON(): any {
    const statement = super.toJSON();

    if (this.effect != Effect.ALLOW) {
      statement.Effect = this.effect;
    }

    return statement;
  }

  /**
   * Allow the actions in this statement
   */
  public allow() {
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
