// This file is used in the base variant of the package: iam-floyd
import { PolicyStatement } from '../policy-statement';

/**
 * Base class for the Policy
 */
export class PolicyBase {
  private floydStatements: PolicyStatement[] = [];

  /**
   * Adds statements to the policy
   */
  public addStatements(...statements: PolicyStatement[]): void {
    for (const statement of statements) {
      this.floydStatements.push(statement);
    }
  }

  /**
   * JSON-ify the policy
   */
  public toJSON(): any {
    const statements: any[] = [];
    for (const statement of this.floydStatements) {
      statements.push(statement.toJSON());
    }
    const policy: Record<string, any> = {};
    policy.Version = '2012-10-17';
    policy.Statement = statements;
    return policy;
  }

  /**
   * The statements of the policy
   */
  protected statementList(): PolicyStatement[] {
    return this.floydStatements;
  }

  /**
   * The JSON of a statement of the policy
   */
  protected statementJson(statement: PolicyStatement): Record<string, any> {
    return statement.toJSON();
  }

  /**
   * Whether the value contains a token, which is resolved only on deployment
   */
  protected isUnresolved(_value: any): boolean {
    return false;
  }
}
