import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [mediastore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediastore extends PolicyStatement {
  public servicePrefix = 'mediastore';

  /**
   * Statement provider for service [mediastore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a container
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_CreateContainer.html
   */
  public toCreateContainer() {
    return this.to('CreateContainer');
  }

  /**
   * Grants permission to delete a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainer.html
   */
  public toDeleteContainer() {
    return this.to('DeleteContainer');
  }

  /**
   * Grants permission to delete the access policy of a container
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainerPolicy.html
   */
  public toDeleteContainerPolicy() {
    return this.to('DeleteContainerPolicy');
  }

  /**
   * Grants permission to delete the CORS policy from a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteCorsPolicy.html
   */
  public toDeleteCorsPolicy() {
    return this.to('DeleteCorsPolicy');
  }

  /**
   * Grants permission to delete the lifecycle policy from a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    return this.to('DeleteLifecyclePolicy');
  }

  /**
   * Grants permission to delete the metric policy from a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteMetricPolicy.html
   */
  public toDeleteMetricPolicy() {
    return this.to('DeleteMetricPolicy');
  }

  /**
   * Grants permission to delete an object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DeleteObject.html
   */
  public toDeleteObject() {
    return this.to('DeleteObject');
  }

  /**
   * Grants permission to retrieve details on a container
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DescribeContainer.html
   */
  public toDescribeContainer() {
    return this.to('DescribeContainer');
  }

  /**
   * Grants permission to retrieve metadata for an object
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DescribeObject.html
   */
  public toDescribeObject() {
    return this.to('DescribeObject');
  }

  /**
   * Grants permission to retrieve the access policy of a container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetContainerPolicy.html
   */
  public toGetContainerPolicy() {
    return this.to('GetContainerPolicy');
  }

  /**
   * Grants permission to retrieve the CORS policy of a container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetCorsPolicy.html
   */
  public toGetCorsPolicy() {
    return this.to('GetCorsPolicy');
  }

  /**
   * Grants permission to retrieve the lifecycle policy that is assigned to a container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    return this.to('GetLifecyclePolicy');
  }

  /**
   * Grants permission to retrieve the metric policy that is assigned to a container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetMetricPolicy.html
   */
  public toGetMetricPolicy() {
    return this.to('GetMetricPolicy');
  }

  /**
   * Grants permission to retrieve an object
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_GetObject.html
   */
  public toGetObject() {
    return this.to('GetObject');
  }

  /**
   * Grants permission to retrieve a list of containers in the current account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListContainers.html
   */
  public toListContainers() {
    return this.to('ListContainers');
  }

  /**
   * Grants permission to retrieve a list of objects and subfolders that are stored in a folder
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_ListItems.html
   */
  public toListItems() {
    return this.to('ListItems');
  }

  /**
   * Grants permission to list tags on a container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or replace the access policy of a container
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutContainerPolicy.html
   */
  public toPutContainerPolicy() {
    return this.to('PutContainerPolicy');
  }

  /**
   * Grants permission to add or modify the CORS policy of a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutCorsPolicy.html
   */
  public toPutCorsPolicy() {
    return this.to('PutCorsPolicy');
  }

  /**
   * Grants permission to add or modify the lifecycle policy that is assigned to a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutLifecyclePolicy.html
   */
  public toPutLifecyclePolicy() {
    return this.to('PutLifecyclePolicy');
  }

  /**
   * Grants permission to add or modify the metric policy that is assigned to a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutMetricPolicy.html
   */
  public toPutMetricPolicy() {
    return this.to('PutMetricPolicy');
  }

  /**
   * Grants permission to upload an object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_PutObject.html
   */
  public toPutObject() {
    return this.to('PutObject');
  }

  /**
   * Grants permission to start access logging on a container
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_StartAccessLogging.html
   */
  public toStartAccessLogging() {
    return this.to('StartAccessLogging');
  }

  /**
   * Grants permission to stop access logging on a container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_StopAccessLogging.html
   */
  public toStopAccessLogging() {
    return this.to('StopAccessLogging');
  }

  /**
   * Grants permission to add tags to a container
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a container
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateContainer',
      'DeleteContainer',
      'DeleteCorsPolicy',
      'DeleteLifecyclePolicy',
      'DeleteMetricPolicy',
      'DeleteObject',
      'PutCorsPolicy',
      'PutLifecyclePolicy',
      'PutMetricPolicy',
      'PutObject',
      'StartAccessLogging',
      'StopAccessLogging'
    ],
    'Permissions management': [
      'DeleteContainerPolicy',
      'PutContainerPolicy'
    ],
    List: [
      'DescribeContainer',
      'DescribeObject',
      'ListContainers',
      'ListItems'
    ],
    Read: [
      'GetContainerPolicy',
      'GetCorsPolicy',
      'GetLifecyclePolicy',
      'GetMetricPolicy',
      'GetObject',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type container to the statement
   *
   * https://docs.aws.amazon.com/mediastore/latest/ug/containers.html
   *
   * @param containerName - Identifier for the containerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContainer(containerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediastore.defaultPartition }:mediastore:${ region || '*' }:${ account || '*' }:container/${ containerName }`);
  }

  /**
   * Adds a resource of type object to the statement
   *
   * https://docs.aws.amazon.com/mediastore/latest/ug/objects.html
   *
   * @param containerName - Identifier for the containerName.
   * @param objectPath - Identifier for the objectPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onObject(containerName: string, objectPath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediastore.defaultPartition }:mediastore:${ region || '*' }:${ account || '*' }:container/${ containerName }/${ objectPath }`);
  }

  /**
   * Adds a resource of type folder to the statement
   *
   * https://docs.aws.amazon.com/mediastore/latest/ug/folders.html
   *
   * @param containerName - Identifier for the containerName.
   * @param folderPath - Identifier for the folderPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFolder(containerName: string, folderPath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediastore.defaultPartition }:mediastore:${ region || '*' }:${ account || '*' }:container/${ containerName }/${ folderPath }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateContainer()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - container
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateContainer()
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
