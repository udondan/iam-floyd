import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [freetier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfreetier.html).
 *
 * @param options - Options for the statement
 */
export class Freetier extends PolicyStatement {
  public servicePrefix = 'freetier';

  /**
   * Statement provider for service [freetier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfreetier.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Allow or deny IAM users permission to get free tier alert preference (email address)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toGetFreeTierAlertPreference() {
    return this.to('GetFreeTierAlertPreference');
  }

  /**
   * Allow or deny IAM users permission to get free tier usage limits and MTD usage status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toGetFreeTierUsage() {
    return this.to('GetFreeTierUsage');
  }

  /**
   * Allow or deny IAM users permission to set free tier alert preference (email address)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toPutFreeTierAlertPreference() {
    return this.to('PutFreeTierAlertPreference');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetFreeTierAlertPreference',
      'GetFreeTierUsage'
    ],
    Write: [
      'PutFreeTierAlertPreference'
    ]
  };
}
