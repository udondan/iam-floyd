import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [security-ir](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityincidentresponse.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SecurityIr extends PolicyStatement {
  public servicePrefix = 'security-ir';

  /**
   * Statement provider for service [security-ir](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityincidentresponse.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get member account details in batch
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_BatchGetMemberAccountDetails.html
   */
  public toBatchGetMemberAccountDetails() {
    return this.to('BatchGetMemberAccountDetails');
  }

  /**
   * Grants permission to cancel a membership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_CancelMembership.html
   */
  public toCancelMembership() {
    return this.to('CancelMembership');
  }

  /**
   * Grants permission to close a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_CloseCase.html
   */
  public toCloseCase() {
    return this.to('CloseCase');
  }

  /**
   * Grants permission to create a case
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_CreateCase.html
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Grants permission to create a case comment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_CreateCaseComment.html
   */
  public toCreateCaseComment() {
    return this.to('CreateCaseComment');
  }

  /**
   * Grants permission to create a membership
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:DescribeOrganization
   * - organizations:ListDelegatedAdministrators
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_CreateMembership.html
   */
  public toCreateMembership() {
    return this.to('CreateMembership');
  }

  /**
   * Grants permission to get a case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_GetCase.html
   */
  public toGetCase() {
    return this.to('GetCase');
  }

  /**
   * Grants permission to get a case attachment download URL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_GetCaseAttachmentDownloadUrl.html
   */
  public toGetCaseAttachmentDownloadUrl() {
    return this.to('GetCaseAttachmentDownloadUrl');
  }

  /**
   * Grants permission to get a case attachment upload URL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_GetCaseAttachmentUploadUrl.html
   */
  public toGetCaseAttachmentUploadUrl() {
    return this.to('GetCaseAttachmentUploadUrl');
  }

  /**
   * Grants permission to get a membership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_GetMembership.html
   */
  public toGetMembership() {
    return this.to('GetMembership');
  }

  /**
   * Grants permission to list case edits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_ListCaseEdits.html
   */
  public toListCaseEdits() {
    return this.to('ListCaseEdits');
  }

  /**
   * Grants permission to list cases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_ListCases.html
   */
  public toListCases() {
    return this.to('ListCases');
  }

  /**
   * Grants permission to list case comments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_ListComments.html
   */
  public toListComments() {
    return this.to('ListComments');
  }

  /**
   * Grants permission to list memberships
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_ListMemberships.html
   */
  public toListMemberships() {
    return this.to('ListMemberships');
  }

  /**
   * Grants permission to list the tags attached to the specified resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UpdateCase.html
   */
  public toUpdateCase() {
    return this.to('UpdateCase');
  }

  /**
   * Grants permission to update a case comment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UpdateCaseComment.html
   */
  public toUpdateCaseComment() {
    return this.to('UpdateCaseComment');
  }

  /**
   * Grants permission to update a case status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UpdateCaseStatus.html
   */
  public toUpdateCaseStatus() {
    return this.to('UpdateCaseStatus');
  }

  /**
   * Grants permission to update memberships
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UpdateMembership.html
   */
  public toUpdateMembership() {
    return this.to('UpdateMembership');
  }

  /**
   * Grants permission to update case resolver type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-ir/latest/APIReference/API_UpdateResolverType.html
   */
  public toUpdateResolverType() {
    return this.to('UpdateResolverType');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetMemberAccountDetails',
      'GetCase',
      'GetCaseAttachmentDownloadUrl',
      'GetMembership',
      'ListCaseEdits',
      'ListComments',
      'ListTagsForResource'
    ],
    Write: [
      'CancelMembership',
      'CloseCase',
      'CreateCase',
      'CreateCaseComment',
      'CreateMembership',
      'GetCaseAttachmentUploadUrl',
      'UpdateCase',
      'UpdateCaseComment',
      'UpdateCaseStatus',
      'UpdateMembership',
      'UpdateResolverType'
    ],
    List: [
      'ListCases',
      'ListMemberships'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type case to the statement
   *
   * https://docs.aws.amazon.com/security-ir/latest/userguide/case.html
   *
   * @param caseId - Identifier for the caseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCase(caseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:security-ir:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:case/${ caseId }`);
  }

  /**
   * Adds a resource of type membership to the statement
   *
   * https://docs.aws.amazon.com/security-ir/latest/userguide/select-a-membership-account.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMembership(membershipId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:security-ir:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCase()
   * - .toCreateMembership()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - case
   * - membership
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
   * - .toCreateCase()
   * - .toCreateMembership()
   * - .toListTagsForResource()
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
