import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [iotfleethub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotfleethub extends PolicyStatement {
  public servicePrefix = 'iotfleethub';

  /**
   * Statement provider for service [iotfleethub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
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
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to describe an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to list all applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'DeleteApplication',
      'UpdateApplication'
    ],
    Read: [
      'DescribeApplication',
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
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ApplicationSummary.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotfleethub.defaultPartition }:iotfleethub:${ region || '*' }:${ account || '*' }:application/${ applicationId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
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
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags attached to the resource
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
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions by the tag keys in the request
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
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
