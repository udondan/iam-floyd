import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [repostspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsre_postprivate.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Repostspace extends PolicyStatement {
  public servicePrefix = 'repostspace';

  /**
   * Statement provider for service [repostspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsre_postprivate.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new private re:Post in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_CreateSpace.html
   */
  public toCreateSpace() {
    return this.to('CreateSpace');
  }

  /**
   * Grants permission to delete a private re:Post from your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_DeleteSpace.html
   */
  public toDeleteSpace() {
    return this.to('DeleteSpace');
  }

  /**
   * Grants permission to remove an administrator to a private re:Post in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_DeregisterAdmin.html
   */
  public toDeregisterAdmin() {
    return this.to('DeregisterAdmin');
  }

  /**
   * Grants permission to get the description for a private re:Post in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_GetSpace.html
   */
  public toGetSpace() {
    return this.to('GetSpace');
  }

  /**
   * Grants permission to list all private re:Posts in your account
   *
   * Access Level: Read
   */
  public toListSpaces() {
    return this.to('ListSpaces');
  }

  /**
   * Grants permission to list the tags associated with a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add an administrator to a private re:post in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_RegisterAdmin.html
   */
  public toRegisterAdmin() {
    return this.to('RegisterAdmin');
  }

  /**
   * Grants permission to send invites to users of a private re:Post in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_SendInvites.html
   */
  public toSendInvites() {
    return this.to('SendInvites');
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
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a private re:Post in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/repostprivate/latest/APIReference/API_UpdateSpace.html
   */
  public toUpdateSpace() {
    return this.to('UpdateSpace');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSpace',
      'DeleteSpace',
      'DeregisterAdmin',
      'RegisterAdmin',
      'SendInvites',
      'UpdateSpace'
    ],
    Read: [
      'GetSpace',
      'ListSpaces',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type space to the statement
   *
   * https://docs.aws.amazon.com/repostprivate/latest/UserGuide/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSpace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:repostspace:${ region || this.defaultRegion }:${ account || this.defaultAccount }:space/${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateSpace()
   * - .toListTagsForResource()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - space
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateSpace()
   * - .toListTagsForResource()
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
