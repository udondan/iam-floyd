import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobileanalytics extends PolicyStatement {
  public servicePrefix = 'mobileanalytics';

  /**
   * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grant access to financial metrics for an app
   *
   * Access Level: Read
   */
  public toGetFinancialReports() {
    return this.to('GetFinancialReports');
  }

  /**
   * Grant access to standard metrics for an app
   *
   * Access Level: Read
   */
  public toGetReports() {
    return this.to('GetReports');
  }

  /**
   * The PutEvents operation records one or more events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobileanalytics/latest/ug/PutEvents.html
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetFinancialReports',
      'GetReports'
    ],
    Write: [
      'PutEvents'
    ]
  };
}
