import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobileanalytics extends PolicyStatement {
  public servicePrefix = 'mobileanalytics';
  protected actionList: Actions = {
    "GetFinancialReports": {
      "url": "",
      "description": "Grant access to financial metrics for an app",
      "accessLevel": "Read"
    },
    "GetReports": {
      "url": "",
      "description": "Grant access to standard metrics for an app",
      "accessLevel": "Read"
    },
    "PutEvents": {
      "url": "https://docs.aws.amazon.com/mobileanalytics/latest/ug/PutEvents.html",
      "description": "The PutEvents operation records one or more events",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [mobileanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grant access to financial metrics for an app
   *
   * Access Level: Read
   */
  public toGetFinancialReports() {
    this.add('mobileanalytics:GetFinancialReports');
    return this;
  }

  /**
   * Grant access to standard metrics for an app
   *
   * Access Level: Read
   */
  public toGetReports() {
    this.add('mobileanalytics:GetReports');
    return this;
  }

  /**
   * The PutEvents operation records one or more events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobileanalytics/latest/ug/PutEvents.html
   */
  public toPutEvents() {
    this.add('mobileanalytics:PutEvents');
    return this;
  }
}
