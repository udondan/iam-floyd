import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [supportauthz](https://docs.aws.amazon.com/service-authorization/latest/reference/list_supportauthz.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Supportauthz extends PolicyStatement {
  public servicePrefix = 'supportauthz';

  /**
   * Statement provider for service [supportauthz](https://docs.aws.amazon.com/service-authorization/latest/reference/list_supportauthz.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a support permit
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_CreateSupportPermit.html
   */
  public toCreateSupportPermit() {
    return this.to('CreateSupportPermit');
  }

  /**
   * Grants permission to delete a support permit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_DeleteSupportPermit.html
   */
  public toDeleteSupportPermit() {
    return this.to('DeleteSupportPermit');
  }

  /**
   * Grants permission to retrieve details about a support action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_GetAction.html
   */
  public toGetAction() {
    return this.to('GetAction');
  }

  /**
   * Grants permission to retrieve a support permit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_GetSupportPermit.html
   */
  public toGetSupportPermit() {
    return this.to('GetSupportPermit');
  }

  /**
   * Grants permission to list available support actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_ListActions.html
   */
  public toListActions() {
    return this.to('ListActions');
  }

  /**
   * Grants permission to list support permit requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_ListSupportPermitRequests.html
   */
  public toListSupportPermitRequests() {
    return this.to('ListSupportPermitRequests');
  }

  /**
   * Grants permission to list support permits
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_ListSupportPermits.html
   */
  public toListSupportPermits() {
    return this.to('ListSupportPermits');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reject a support permit request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_RejectSupportPermitRequest.html
   */
  public toRejectSupportPermitRequest() {
    return this.to('RejectSupportPermitRequest');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/supportauthz/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to register a KMS key to use for a support permit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/support-authorization-getting-started.html
   */
  public toRegisterKey() {
    return this.to('RegisterKey');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSupportPermit',
      'DeleteSupportPermit',
      'RejectSupportPermitRequest',
      'TagResource',
      'UntagResource',
      'RegisterKey'
    ],
    Read: [
      'GetAction',
      'GetSupportPermit',
      'ListTagsForResource'
    ],
    List: [
      'ListActions',
      'ListSupportPermitRequests',
      'ListSupportPermits'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type supportpermit to the statement
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/support-authorization-permits.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSupportpermit(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:supportauthz:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:supportpermit/${ resourceId }`);
  }

  /**
   * Adds a resource of type supportpermitrequest to the statement
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/support-authorization-permit-requests.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSupportpermitrequest(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:supportauthz:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:supportpermitrequest/${ resourceId }`);
  }

  /**
   * Filters access by a tag key-value pair in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateSupportPermit()
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
   * Filters access by a tag key-value pair assigned to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteSupportPermit()
   * - .toGetSupportPermit()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - supportpermit
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateSupportPermit()
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
