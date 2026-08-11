import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [bcm-dashboards](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementdashboards.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BcmDashboards extends PolicyStatement {
  public servicePrefix = 'bcm-dashboards';

  /**
   * Statement provider for service [bcm-dashboards](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementdashboards.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_CreateDashboard.html
   */
  public toCreateDashboard() {
    return this.to('CreateDashboard');
  }

  /**
   * Grants permission to create a scheduled report
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_CreateScheduledReport.html
   */
  public toCreateScheduledReport() {
    return this.to('CreateScheduledReport');
  }

  /**
   * Grants permission to delete a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    return this.to('DeleteDashboard');
  }

  /**
   * Grants permission to delete a scheduled report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_DeleteScheduledReport.html
   */
  public toDeleteScheduledReport() {
    return this.to('DeleteScheduledReport');
  }

  /**
   * Grants permission to execute a scheduled report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_ExecuteScheduledReport.html
   */
  public toExecuteScheduledReport() {
    return this.to('ExecuteScheduledReport');
  }

  /**
   * Grants permission to get dashboard information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_GetDashboard.html
   */
  public toGetDashboard() {
    return this.to('GetDashboard');
  }

  /**
   * Grants permission to get the resource policy for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get scheduled report information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_GetScheduledReport.html
   */
  public toGetScheduledReport() {
    return this.to('GetScheduledReport');
  }

  /**
   * Grants permission to list information about all of the dashboards for a user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_ListDashboards.html
   */
  public toListDashboards() {
    return this.to('ListDashboards');
  }

  /**
   * Grants permission to list information about all of the scheduled reports for a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_ListScheduledReports.html
   */
  public toListScheduledReports() {
    return this.to('ListScheduledReports');
  }

  /**
   * Grants permission to list all of the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create a tag for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    return this.to('UpdateDashboard');
  }

  /**
   * Grants permission to update an existing scheduled report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_bcmDashboards_UpdateScheduledReport.html
   */
  public toUpdateScheduledReport() {
    return this.to('UpdateScheduledReport');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDashboard',
      'CreateScheduledReport',
      'DeleteDashboard',
      'DeleteScheduledReport',
      'ExecuteScheduledReport',
      'UpdateDashboard',
      'UpdateScheduledReport'
    ],
    Read: [
      'GetDashboard',
      'GetResourcePolicy',
      'GetScheduledReport',
      'ListDashboards',
      'ListTagsForResource'
    ],
    List: [
      'ListScheduledReports'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onDashboard(dashboardName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-dashboards::${ account ?? this.defaultAccount }:dashboard/${ dashboardName }`);
  }

  /**
   * Adds a resource of type scheduled-report to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/
   *
   * @param scheduledReportName - Identifier for the scheduledReportName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onScheduledReport(scheduledReportName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-dashboards::${ account ?? this.defaultAccount }:scheduled-report/${ scheduledReportName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to actions:
   * - .toCreateScheduledReport()
   *
   * Applies to resource types:
   * - dashboard
   * - scheduled-report
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateScheduledReport()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - dashboard
   * - scheduled-report
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
