import { PolicyStatementWithPrincipal } from './8-principals';

/**
 * Represents a statement in an IAM policy document
 */
export class PolicyStatement extends PolicyStatementWithPrincipal {
  /**
   * JSON-ify the policy statement
   */
  public toJSON(): any {
    const statement: Record<string, any> = {};

    if (this.sid.length) {
      statement.Sid = this.sid;
    }

    if (this.hasConditions()) {
      statement.Condition = this.floydConditions;
    }

    if (this.hasActions()) {
      const actions = this.uniqueActions();
      const mode = this.useNotAction ? 'NotAction' : 'Action';
      statement[mode] = actions.length > 1 ? actions : actions[0];
    }

    this.ensureResource();
    if (this.hasResources()) {
      const resources = this.uniqueResources();
      const mode = this.useNotResource ? 'NotResource' : 'Resource';
      statement[mode] = resources.length > 1 ? resources : resources[0];
    }

    statement.Effect = this.effect;

    if (this.hasPrincipals()) {
      const mode = this.useNotPrincipal ? 'NotPrincipal' : 'Principal';
      statement[mode] = this.myPrincipals;
    }

    return statement;
  }
}
