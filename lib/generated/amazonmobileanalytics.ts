import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service mobileanalytics
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html
 */
export class Mobileanalytics extends PolicyStatement {
  public servicePrefix = 'mobileanalytics';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service mobileanalytics
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grant access to financial metrics for an app
   *
   * Access Level: Read
   */
  public getFinancialReports() {
    this.add('mobileanalytics:GetFinancialReports');
    return this;
  }

  /**
   * Grant access to standard metrics for an app
   *
   * Access Level: Read
   */
  public getReports() {
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
  public putEvents() {
    this.add('mobileanalytics:PutEvents');
    return this;
  }
}
