import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permission to delete Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_DeleteReportDefinition.html
   */
  public toDeleteReportDefinition() {
    return this.to('DeleteReportDefinition');
  }

  /**
   * Grants permission to get Cost and Usage Report Definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_DescribeReportDefinitions.html
   */
  public toDescribeReportDefinitions() {
    return this.to('DescribeReportDefinitions');
  }

  /**
   * Grants permission to modify Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_ModifyReportDefinition.html
   */
  public toModifyReportDefinition() {
    return this.to('ModifyReportDefinition');
  }

  /**
   * Grants permission to write Cost and Usage Report Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_PutReportDefinition.html
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
   * https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html
   *
   * @param reportName - Identifier for the reportName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCur(reportName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cur.defaultPartition }:cur:${ region || '*' }:${ account || '*' }:definition/${ reportName }`);
  }
}
