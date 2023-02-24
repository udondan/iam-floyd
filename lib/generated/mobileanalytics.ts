import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html).
 *
 * @param options - Options for the statement
 */
export class Mobileanalytics extends PolicyStatement {
  public servicePrefix = 'mobileanalytics';

  /**
   * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
