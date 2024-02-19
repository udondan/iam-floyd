import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisanalytics extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';

  /**
   * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add input to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    return this.to('AddApplicationInput');
  }

  /**
   * Grants permission to add output to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    return this.to('AddApplicationOutput');
  }

  /**
   * Grants permission to add reference data source to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    return this.to('AddApplicationReferenceDataSource');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to delete the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete the specified output of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    return this.to('DeleteApplicationOutput');
  }

  /**
   * Grants permission to delete the specified reference data source of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    return this.to('DeleteApplicationReferenceDataSource');
  }

  /**
   * Grants permission to describe the specified application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to discover the input schema for the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    return this.to('DiscoverInputSchema');
  }

  /**
   * Grants permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas
   */
  public toGetApplicationState() {
    return this.to('GetApplicationState');
  }

  /**
   * Grants permission to list applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to fetch the tags associated with the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Grants permission to stop the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html
   */
  public toStopApplication() {
    return this.to('StopApplication');
  }

  /**
   * Grants permission to add tags to the application
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the application
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddApplicationInput',
      'AddApplicationOutput',
      'AddApplicationReferenceDataSource',
      'CreateApplication',
      'DeleteApplication',
      'DeleteApplicationOutput',
      'DeleteApplicationReferenceDataSource',
      'StartApplication',
      'StopApplication',
      'UpdateApplication'
    ],
    Read: [
      'DescribeApplication',
      'DiscoverInputSchema',
      'GetApplicationState',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kinesisanalytics:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationName }`);
  }

  /**
   * Filters access by set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
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
   * Filters access by tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - application
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
