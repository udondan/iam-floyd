import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add cross-account permissions to a Signing Profile
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_AddProfilePermission.html
   */
  public toAddProfilePermission() {
    this.to('signer:AddProfilePermission');
    return this;
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
    this.to('signer:CancelSigningProfile');
    return this;
  }

  /**
   * Grants permission to return information about a specific Signing Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   */
  public toDescribeSigningJob() {
    this.to('signer:DescribeSigningJob');
    return this;
  }

  /**
   * Grants permission to return information about a specific Signing Platform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  public toGetSigningPlatform() {
    this.to('signer:GetSigningPlatform');
    return this;
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
    this.to('signer:GetSigningProfile');
    return this;
  }

  /**
   * Grants permission to list the cross-account permissions associated with a Signing Profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListProfilePermissions.html
   */
  public toListProfilePermissions() {
    this.to('signer:ListProfilePermissions');
    return this;
  }

  /**
   * Grants permission to list all Signing Jobs in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  public toListSigningJobs() {
    this.to('signer:ListSigningJobs');
    return this;
  }

  /**
   * Grants permission to list all available Signing Platforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  public toListSigningPlatforms() {
    this.to('signer:ListSigningPlatforms');
    return this;
  }

  /**
   * Grants permission to list all Signing Profiles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  public toListSigningProfiles() {
    this.to('signer:ListSigningProfiles');
    return this;
  }

  /**
   * Grants permission to list the tags associated with a Signing Profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('signer:ListTagsForResource');
    return this;
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
    this.to('signer:PutSigningProfile');
    return this;
  }

  /**
   * Grants permission to remove cross-account permissions from a Signing Profile
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifProfileVersion()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_RemoveProfilePermission.html
   */
  public toRemoveProfilePermission() {
    this.to('signer:RemoveProfilePermission');
    return this;
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
    this.to('signer:RevokeSignature');
    return this;
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
    this.to('signer:RevokeSigningProfile');
    return this;
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
    this.to('signer:StartSigningJob');
    return this;
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
    this.to('signer:TagResource');
    return this;
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
    this.to('signer:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AddProfilePermission",
      "ListProfilePermissions",
      "RemoveProfilePermission"
    ],
    "Write": [
      "CancelSigningProfile",
      "PutSigningProfile",
      "RevokeSignature",
      "RevokeSigningProfile",
      "StartSigningJob"
    ],
    "Read": [
      "DescribeSigningJob",
      "GetSigningPlatform",
      "GetSigningProfile",
      "ListTagsForResource"
    ],
    "List": [
      "ListSigningJobs",
      "ListSigningPlatforms",
      "ListSigningProfiles"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type signing-profile to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html
   *
   * @param profileName - Identifier for the profileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSigningProfile(profileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}:${Account}:/signing-profiles/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type signing-job to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/gs-job.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSigningJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}:${Account}:/signing-jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on the version of the Signing Profile
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html
   *
   * Applies to actions:
   * - .toAddProfilePermission()
   * - .toCancelSigningProfile()
   * - .toGetSigningProfile()
   * - .toRemoveProfilePermission()
   * - .toRevokeSignature()
   * - .toRevokeSigningProfile()
   * - .toStartSigningJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProfileVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`signer:ProfileVersion`, value, operator || 'StringLike');
  }
}

export type SignerActionsPermissionsManagement = 'AddProfilePermission' | 'ListProfilePermissions' | 'RemoveProfilePermission';
export type SignerActionsWrite = 'CancelSigningProfile' | 'PutSigningProfile' | 'RevokeSignature' | 'RevokeSigningProfile' | 'StartSigningJob';
export type SignerActionsRead = 'DescribeSigningJob' | 'GetSigningPlatform' | 'GetSigningProfile' | 'ListTagsForResource';
export type SignerActionsList = 'ListSigningJobs' | 'ListSigningPlatforms' | 'ListSigningProfiles';
export type SignerActionsTagging = 'TagResource' | 'UntagResource';
export type SignerActions = SignerActionsPermissionsManagement | SignerActionsWrite | SignerActionsRead | SignerActionsList | SignerActionsTagging;
