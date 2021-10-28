import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cur](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cur extends PolicyStatement {
  public servicePrefix = 'cur';

  /**
   * Statement provider for service [cur](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
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
    return this.to('DeleteReportDefinition');
  }

  /**
   * Get Cost and Usage Report Definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html
   */
  public toDescribeReportDefinitions() {
    return this.to('DescribeReportDefinitions');
  }

  /**
   * Modify Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html
   */
  public toModifyReportDefinition() {
    return this.to('ModifyReportDefinition');
  }

  /**
   * Write Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html
   */
  public toPutReportDefinition() {
    return this.to('PutReportDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteReportDefinition',
      'ModifyReportDefinition',
      'PutReportDefinition'
    ],
    Read: [
      'DescribeReportDefinitions'
    ]
  };

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
    return this.on(`arn:${ partition || 'aws' }:cur:${ region || '*' }:${ account || '*' }:definition/${ reportName }`);
  }
}
