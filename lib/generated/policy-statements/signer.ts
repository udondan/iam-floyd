import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [signer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Signer extends PolicyStatement {
  public servicePrefix = 'signer';

  /**
   * Statement provider for service [signer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add cross-account permissions to a Signing Profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_AddProfilePermission.html
   */
  public toAddProfilePermission() {
    return this.to('AddProfilePermission');
  }

  /**
   * Grants permission to change the state of a Signing Profile to CANCELED
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html
   */
  public toCancelSigningProfile() {
    return this.to('CancelSigningProfile');
  }

  /**
   * Grants permission to return information about a specific Signing Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   */
  public toDescribeSigningJob() {
    return this.to('DescribeSigningJob');
  }

  /**
   * Grants permission to query revocation info of signing resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetRevocationStatus.html
   */
  public toGetRevocationStatus() {
    return this.to('GetRevocationStatus');
  }

  /**
   * Grants permission to return information about a specific Signing Platform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  public toGetSigningPlatform() {
    return this.to('GetSigningPlatform');
  }

  /**
   * Grants permission to return information about a specific Signing Profile
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html
   */
  public toGetSigningProfile() {
    return this.to('GetSigningProfile');
  }

  /**
   * Grants permission to list the cross-account permissions associated with a Signing Profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListProfilePermissions.html
   */
  public toListProfilePermissions() {
    return this.to('ListProfilePermissions');
  }

  /**
   * Grants permission to list all Signing Jobs in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  public toListSigningJobs() {
    return this.to('ListSigningJobs');
  }

  /**
   * Grants permission to list all available Signing Platforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  public toListSigningPlatforms() {
    return this.to('ListSigningPlatforms');
  }

  /**
   * Grants permission to list all Signing Profiles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  public toListSigningProfiles() {
    return this.to('ListSigningProfiles');
  }

  /**
   * Grants permission to list the tags associated with a Signing Profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create a new Signing Profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html
   */
  public toPutSigningProfile() {
    return this.to('PutSigningProfile');
  }

  /**
   * Grants permission to remove cross-account permissions from a Signing Profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_RemoveProfilePermission.html
   */
  public toRemoveProfilePermission() {
    return this.to('RemoveProfilePermission');
  }

  /**
   * Grants permission to change the state of a Signing Job to REVOKED
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_RevokeSignature.html
   */
  public toRevokeSignature() {
    return this.to('RevokeSignature');
  }

  /**
   * Grants permission to change the state of a Signing Profile to REVOKED
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_RevokeSigningProfile.html
   */
  public toRevokeSigningProfile() {
    return this.to('RevokeSigningProfile');
  }

  /**
   * Grants permission to initiate a Signing Job on the provided payload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_SignPayload.html
   */
  public toSignPayload() {
    return this.to('SignPayload');
  }

  /**
   * Grants permission to initiate a Signing Job on the provided code
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html
   */
  public toStartSigningJob() {
    return this.to('StartSigningJob');
  }

  /**
   * Grants permission to add one or more tags to a Signing Profile
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a Signing Profile
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AddProfilePermission',
      'RemoveProfilePermission'
    ],
    Write: [
      'CancelSigningProfile',
      'PutSigningProfile',
      'RevokeSignature',
      'RevokeSigningProfile',
      'SignPayload',
      'StartSigningJob'
    ],
    Read: [
      'DescribeSigningJob',
      'GetRevocationStatus',
      'GetSigningPlatform',
      'GetSigningProfile',
      'ListProfilePermissions',
      'ListTagsForResource'
    ],
    List: [
      'ListSigningJobs',
      'ListSigningPlatforms',
      'ListSigningProfiles'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type signing-profile to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html
   *
   * @param profileName - Identifier for the profileName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSigningProfile(profileName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:signer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/signing-profiles/${ profileName }`);
  }

  /**
   * Adds a resource of type signing-job to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/gs-job.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSigningJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:signer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/signing-jobs/${ jobId }`);
  }

  /**
   * Filters access by allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toPutSigningProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - signing-profile
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toPutSigningProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by version of the Signing Profile
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html
   *
   * Applies to actions:
   * - .toCancelSigningProfile()
   * - .toGetSigningProfile()
   * - .toRevokeSignature()
   * - .toRevokeSigningProfile()
   * - .toSignPayload()
   * - .toStartSigningJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProfileVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`ProfileVersion`, value, operator ?? 'StringLike');
  }
}
