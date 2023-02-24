// This file is used in the base variant of the package: iam-floyd

/**
 * Properties for a Policy Statement
 *
 * If a string is passed, it will be used as the Sid.
 */
export type PolicyStatementProps = string | {
  /**
   * A unique identifier for the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html
   * @default - No Sid
   */
  readonly sid?: string;

  /**
   * The default partition for resource ARNs
   *
   * @default - aws
   */
  readonly defaultPartition?: 'aws' | 'aws-cn' | 'aws-us-gov';
};

/**
 * Base class for the Policy Statement
 */
export class PolicyStatementBase {
  /**
   * The default partition for ARNs (such as one of [aws, aws-us-gov, aws-cn]). In
   * CDK applications, this is a reference to the current partition, otherwise, 'aws'.
   */
  protected readonly defaultPartition: 'aws' | 'aws-cn' | 'aws-us-gov' = 'aws';

  public sid = '';

  /**
   * Holds the prefix of the service actions, e.g. `ec2`
   */
  public servicePrefix = '';

  constructor(options?: PolicyStatementProps) {
    if (typeof options === 'string') {
      this.sid = options;
    } else if (typeof options === 'object') {
      this.sid = options.sid || '';
      if (options.defaultPartition) {
        this.defaultPartition = options.defaultPartition;
      }
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
