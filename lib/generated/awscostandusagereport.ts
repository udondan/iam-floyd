import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cur](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cur extends PolicyStatement {
  public servicePrefix = 'cur';
  protected actionList: Actions = {
    "DeleteReportDefinition": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/delete-report-definition.html",
      "description": "Delete Cost and Usage Report Definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "cur": {
          "required": true
        }
      }
    },
    "DescribeReportDefinitions": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html",
      "description": "Get Cost and Usage Report Definitions",
      "accessLevel": "Read"
    },
    "ModifyReportDefinition": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html",
      "description": "Modify Cost and Usage Report Definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "cur": {
          "required": true
        }
      }
    },
    "PutReportDefinition": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html",
      "description": "Write Cost and Usage Report Definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "cur": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "cur": {
      "name": "cur",
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports.html#enhanced-reports",
      "arn": "arn:${Partition}:cur:${Region}:${Account}:definition/${ReportName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [cur](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Delete Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/delete-report-definition.html
   */
  public toDeleteReportDefinition() {
    this.to('cur:DeleteReportDefinition');
    return this;
  }

  /**
   * Get Cost and Usage Report Definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html
   */
  public toDescribeReportDefinitions() {
    this.to('cur:DescribeReportDefinitions');
    return this;
  }

  /**
   * Modify Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html
   */
  public toModifyReportDefinition() {
    this.to('cur:ModifyReportDefinition');
    return this;
  }

  /**
   * Write Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html
   */
  public toPutReportDefinition() {
    this.to('cur:PutReportDefinition');
    return this;
  }

  /**
   * Adds a resource of type cur to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports.html#enhanced-reports
   *
   * @param reportName - Identifier for the reportName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCur(reportName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cur:${Region}:${Account}:definition/${ReportName}';
    arn = arn.replace('${ReportName}', reportName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
