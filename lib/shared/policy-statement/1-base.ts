// This file is used in the base variant of the package: iam-floyd

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase {
  public sid = '';

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  protected servicePrefix = '';

  constructor(sid?: string) {
    if (typeof sid !== 'undefined') {
      this.sid = sid;
    }
  }

  /**
   * JSON-ify the policy statement
   *
   * Used when JSON.stringify() is called
   */

  public toJSON(): any {
    const statement: any = {};

    if (this.sid.length) {
      statement.Sid = this.sid;
    }

    return statement;
  }
}
