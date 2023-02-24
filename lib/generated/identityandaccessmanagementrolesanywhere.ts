import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [rolesanywhere](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementrolesanywhere.html).
 *
 * @param options - Options for the statement
 */
export class Rolesanywhere extends PolicyStatement {
  public servicePrefix = 'rolesanywhere';

  /**
   * Statement provider for service [rolesanywhere](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementrolesanywhere.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrustAnchor(trustAnchorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || '*' }:${ account || '*' }:trust-anchor/${ trustAnchorId }`);
  }

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || '*' }:${ account || '*' }:profile/${ profileId }`);
  }

  /**
   * Adds a resource of type subject to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param subjectId - Identifier for the subjectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubject(subjectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || '*' }:${ account || '*' }:subject/${ subjectId }`);
  }

  /**
   * Adds a resource of type crl to the statement
   *
   * https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html#first-time-user
   *
   * @param crlId - Identifier for the crlId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCrl(crlId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:rolesanywhere:${ region || '*' }:${ account || '*' }:crl/${ crlId }`);
  }
}
