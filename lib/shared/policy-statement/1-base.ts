// This file is used in the base variant of the package: iam-floyd

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase {
  /**
   * The default partition for ARNs (such as one of [aws, aws-us-gov, aws-cn]).
   * In CDK applications, this is a reference to the current partition,
   * otherwise, 'aws'.
   */
  protected readonly defaultPartition = 'aws';

  /**
   * The default region for ARNs (such as one of [us-east-1, eu-central-1,
   * ap-east-1]). In CDK applications, this is a reference to the current
   * region, otherwise, '*'.
   */
  protected readonly defaultRegion = '*';

  /**
   * The default account for ARNs. In CDK applications, this is a reference to
   * the current account, otherwise, '*'.
   */
  protected readonly defaultAccount = '*';

  public sid = '';

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';

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
