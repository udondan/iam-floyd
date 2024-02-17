import { PolicyStatementWithEffect } from './5-effect';

/**
 * Adds "arn defaults" functionality to the Policy Statement
 */
export class PolicyStatementWithArnDefaults extends PolicyStatementWithEffect {
  /**
   * The default partition for ARNs (such as one of [`aws`, `aws-us-gov`,
   * `aws-cn`]). Defaults to `aws`.
   */
  protected defaultPartition = 'aws';

  /**
   * The default region for ARNs (such as `us-east-1`, `eu-central-1`,
   * `ap-east-1`, ...). Defaults to `*`.
   */
  protected defaultRegion = '*';

  /**
   * The default account for ARNs. Defaults to `*`.
   */
  protected defaultAccount = '*';

  /**
   * Sets the default partition, region and account for ARNs of this statement
   *
   * @param partition Default partition for ARNs, e.g. `aws`, `aws-us-gov`, `aws-cn`
   * @param region Default region for ARNs, e.g. `us-east-1`, `eu-central-1`, `ap-east-1`
   * @param account Default account ID for ARN, e.g. `123456789012`
   */

  public in(partition: string, region?: string, account?: string) {
    this.defaultPartition = partition;
    if (region) this.defaultRegion = region;
    if (account) this.defaultAccount = account;
    return this;
  }

  /**
   * Sets the default partition for ARNs of this statement
   * @param partition Default partition for ARNs, e.g. `aws`, `aws-us-gov`, `aws-cn`
   * @returns this
   */

  public inPartition(partition: string) {
    this.defaultPartition = partition;
    return this;
  }

  /**
   * Sets the default region for ARNs of this statement
   * @param region Default region for ARNs, e.g. `us-east-1`, `eu-central-1`, `ap-east-1`
   * @returns this
   */
  public inRegion(region: string) {
    this.defaultRegion = region;
    return this;
  }

  /**
   * Sets the default account for ARNs of this statement
   * @param account Default account ID for ARN, e.g. `123456789012`
   * @returns this
   */
  public inAccount(account: string) {
    this.defaultAccount = account;
    return this;
  }
}
