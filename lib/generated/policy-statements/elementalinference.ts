import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [elemental-inference](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalinference.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalInference extends PolicyStatement {
  public servicePrefix = 'elemental-inference';

  /**
   * Statement provider for service [elemental-inference](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalinference.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a feed with an AWS resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_AssociateFeed.html
   */
  public toAssociateFeed() {
    return this.to('AssociateFeed');
  }

  /**
   * Grants permission to create a new feed
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_CreateFeed.html
   */
  public toCreateFeed() {
    return this.to('CreateFeed');
  }

  /**
   * Grants permission to delete a feed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_DeleteFeed.html
   */
  public toDeleteFeed() {
    return this.to('DeleteFeed');
  }

  /**
   * Grants permission to disassociate a feed from an AWS resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_DisassociateFeed.html
   */
  public toDisassociateFeed() {
    return this.to('DisassociateFeed');
  }

  /**
   * Grants permission to get feed details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_GetFeed.html
   */
  public toGetFeed() {
    return this.to('GetFeed');
  }

  /**
   * Grants permission to retrieve metadata for a specific feed output
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_GetMetadata.html
   */
  public toGetMetadata() {
    return this.to('GetMetadata');
  }

  /**
   * Grants permission to list feeds in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_ListFeeds.html
   */
  public toListFeeds() {
    return this.to('ListFeeds');
  }

  /**
   * Grants permission to list tags on a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to upload media data for a specified feed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_PutMedia.html
   */
  public toPutMedia() {
    return this.to('PutMedia');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update feed configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/APIReference/API_UpdateFeed.html
   */
  public toUpdateFeed() {
    return this.to('UpdateFeed');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFeed',
      'CreateFeed',
      'DeleteFeed',
      'DisassociateFeed',
      'PutMedia',
      'UpdateFeed'
    ],
    Read: [
      'GetFeed',
      'GetMetadata',
      'ListTagsForResource'
    ],
    List: [
      'ListFeeds'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type feed to the statement
   *
   * https://docs.aws.amazon.com/elemental-inference/latest/userguide/elemental-inference-configuration.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFeed(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elemental-inference:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:feed/${ id }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateFeed()
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - feed
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateFeed()
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
