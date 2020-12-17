import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iotfleethub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_fleethubforawsiotdevicemanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotfleethub extends PolicyStatement {
  public servicePrefix = 'iotfleethub';

  /**
   * Statement provider for service [iotfleethub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_fleethubforawsiotdevicemanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sso:CreateManagedApplicationInstance
   * - sso:DescribeRegisteredRegions
   */
  public toCreateApplication() {
    this.to('iotfleethub:CreateApplication');
    return this;
  }

  /**
   * Grants permission to create an dashboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateDashboard() {
    this.to('iotfleethub:CreateDashboard');
    return this;
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   */
  public toDeleteApplication() {
    this.to('iotfleethub:DeleteApplication');
    return this;
  }

  /**
   * Grants permission to delete an dashboard
   *
   * Access Level: Write
   */
  public toDeleteDashboard() {
    this.to('iotfleethub:DeleteDashboard');
    return this;
  }

  /**
   * Grants permission to describe an application
   *
   * Access Level: Read
   */
  public toDescribeApplication() {
    this.to('iotfleethub:DescribeApplication');
    return this;
  }

  /**
   * Grants permission to describe an dashboard
   *
   * Access Level: Read
   */
  public toDescribeDashboard() {
    this.to('iotfleethub:DescribeDashboard');
    return this;
  }

  /**
   * Grants permission to list all applications
   *
   * Access Level: List
   */
  public toListApplications() {
    this.to('iotfleethub:ListApplications');
    return this;
  }

  /**
   * Grants permission to list all dashboards
   *
   * Access Level: List
   */
  public toListDashboards() {
    this.to('iotfleethub:ListDashboards');
    return this;
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/APIReference/API_Operations.htmlAPI_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iotfleethub:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/iot/latest/APIReference/API_Operations.htmlAPI_TagResource.html
   */
  public toTagResource() {
    this.to('iotfleethub:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/APIReference/API_Operations.htmlAPI_UntagResource.html
   */
  public toUntagResource() {
    this.to('iotfleethub:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   */
  public toUpdateApplication() {
    this.to('iotfleethub:UpdateApplication');
    return this;
  }

  /**
   * Grants permission to update an dashboard
   *
   * Access Level: Write
   */
  public toUpdateDashboard() {
    this.to('iotfleethub:UpdateDashboard');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApplication",
      "CreateDashboard",
      "DeleteApplication",
      "DeleteDashboard",
      "UpdateApplication",
      "UpdateDashboard"
    ],
    "Read": [
      "DescribeApplication",
      "DescribeDashboard",
      "ListTagsForResource"
    ],
    "List": [
      "ListApplications",
      "ListDashboards"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotfleethub::${Account}:application/${ApplicationId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotfleethub::${Account}:dashboard/${DashboardId}';
    arn = arn.replace('${DashboardId}', dashboardId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
