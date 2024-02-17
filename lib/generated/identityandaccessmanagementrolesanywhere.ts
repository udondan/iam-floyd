import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [rolesanywhere](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementrolesanywhere.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rolesanywhere extends PolicyStatement {
  public servicePrefix = 'rolesanywhere';

  /**
   * Statement provider for service [rolesanywhere](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementrolesanywhere.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to create a trust anchor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateTrustAnchor.html
   */
  public toCreateTrustAnchor() {
    return this.to('CreateTrustAnchor');
  }

  /**
   * Grants permission to delete a certificate revocation list (crl)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DeleteCrl.html
   */
  public toDeleteCrl() {
    return this.to('DeleteCrl');
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete a trust anchor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DeleteTrustAnchor.html
   */
  public toDeleteTrustAnchor() {
    return this.to('DeleteTrustAnchor');
  }

  /**
   * Grants permission to disable a certificate revocation list (crl)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DisableCrl.html
   */
  public toDisableCrl() {
    return this.to('DisableCrl');
  }

  /**
   * Grants permission to disable a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DisableProfile.html
   */
  public toDisableProfile() {
    return this.to('DisableProfile');
  }

  /**
   * Grants permission to disable a trust anchor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_DisableTrustAnchor.html
   */
  public toDisableTrustAnchor() {
    return this.to('DisableTrustAnchor');
  }

  /**
   * Grants permission to enable a certificate revocation list (crl)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_EnableCrl.html
   */
  public toEnableCrl() {
    return this.to('EnableCrl');
  }

  /**
   * Grants permission to enable a profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_EnableProfile.html
   */
  public toEnableProfile() {
    return this.to('EnableProfile');
  }

  /**
   * Grants permission to enable a trust anchor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_EnableTrustAnchor.html
   */
  public toEnableTrustAnchor() {
    return this.to('EnableTrustAnchor');
  }

  /**
   * Grants permission to get a certificate revocation list (crl)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_GetCrl.html
   */
  public toGetCrl() {
    return this.to('GetCrl');
  }

  /**
   * Grants permission to get a profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to get a subject
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_GetSubject.html
   */
  public toGetSubject() {
    return this.to('GetSubject');
  }

  /**
   * Grants permission to get a trust anchor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_GetTrustAnchor.html
   */
  public toGetTrustAnchor() {
    return this.to('GetTrustAnchor');
  }

  /**
   * Grants permission to import a certificate revocation list (crl)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ImportCrl.html
   */
  public toImportCrl() {
    return this.to('ImportCrl');
  }

  /**
   * Grants permission to list certificate revocation lists (crls)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ListCrls.html
   */
  public toListCrls() {
    return this.to('ListCrls');
  }

  /**
   * Grants permission to list profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list subjects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ListSubjects.html
   */
  public toListSubjects() {
    return this.to('ListSubjects');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list trust anchors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ListTrustAnchors.html
   */
  public toListTrustAnchors() {
    return this.to('ListTrustAnchors');
  }

  /**
   * Grants permission to attach notification settings to a trust anchor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_PutNotificationSettings.html
   */
  public toPutNotificationSettings() {
    return this.to('PutNotificationSettings');
  }

  /**
   * Grants permission to reset custom notification settings to IAM Roles Anywhere defined default state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_ResetNotificationSettings.html
   */
  public toResetNotificationSettings() {
    return this.to('ResetNotificationSettings');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_TagResource.html
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
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a certificate revocation list (crl)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_UpdateCrl.html
   */
  public toUpdateCrl() {
    return this.to('UpdateCrl');
  }

  /**
   * Grants permission to update a profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Grants permission to update a trust anchor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_UpdateTrustAnchor.html
   */
  public toUpdateTrustAnchor() {
    return this.to('UpdateTrustAnchor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateProfile',
      'CreateTrustAnchor',
      'DeleteCrl',
      'DeleteProfile',
      'DeleteTrustAnchor',
      'DisableCrl',
      'DisableProfile',
      'DisableTrustAnchor',
      'EnableCrl',
      'EnableProfile',
      'EnableTrustAnchor',
      'ImportCrl',
      'PutNotificationSettings',
      'ResetNotificationSettings',
      'UpdateCrl',
      'UpdateProfile',
      'UpdateTrustAnchor'
    ],
    Read: [
      'GetCrl',
      'GetProfile',
      'GetSubject',
      'GetTrustAnchor'
    ],
    List: [
      'ListCrls',
      'ListProfiles',
      'ListSubjects',
      'ListTagsForResource',
      'ListTrustAnchors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type trust-anchor to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param trustAnchorId - Identifier for the trustAnchorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrustAnchor(trustAnchorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || this.defaultRegion }:${ account || this.defaultAccount }:trust-anchor/${ trustAnchorId }`);
  }

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || this.defaultRegion }:${ account || this.defaultAccount }:profile/${ profileId }`);
  }

  /**
   * Adds a resource of type subject to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param subjectId - Identifier for the subjectId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubject(subjectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || this.defaultRegion }:${ account || this.defaultAccount }:subject/${ subjectId }`);
  }

  /**
   * Adds a resource of type crl to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param crlId - Identifier for the crlId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCrl(crlId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || this.defaultRegion }:${ account || this.defaultAccount }:crl/${ crlId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProfile()
   * - .toCreateTrustAnchor()
   * - .toImportCrl()
   * - .toTagResource()
   * - .toUntagResource()
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
   * - trust-anchor
   * - profile
   * - subject
   * - crl
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
   * - .toCreateProfile()
   * - .toCreateTrustAnchor()
   * - .toImportCrl()
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
