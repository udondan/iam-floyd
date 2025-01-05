import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcases.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalSupportCases extends PolicyStatement {
  public servicePrefix = 'elemental-support-cases';

  /**
   * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcases.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a comment to a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toAddCaseComment() {
    return this.to('AddCaseComment');
  }

  /**
   * Grants permission to verify whether the caller has the permissions to perform support case operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCheckCasePermission() {
    return this.to('CheckCasePermission');
  }

  /**
   * Grants permission to complete a multipart file upload to a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCompleteMultipartUpload() {
    return this.to('CompleteMultipartUpload');
  }

  /**
   * Grants permission to create a support case
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Grants permission to create a cli command to allow a file upload to a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateS3CLIUploadCommand() {
    return this.to('CreateS3CLIUploadCommand');
  }

  /**
   * Grants permission to download a file from a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateS3DownloadUrl() {
    return this.to('CreateS3DownloadUrl');
  }

  /**
   * Grants permission to describe a support case in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCase() {
    return this.to('GetCase');
  }

  /**
   * Grants permission to verify whether the caller has the permissions to perform support case operations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCasePermission() {
    return this.to('GetCasePermission');
  }

  /**
   * Grants permission to list the support cases in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCases() {
    return this.to('GetCases');
  }

  /**
   * Grants permission to retrieve cached case user data for use in the Console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetUICache() {
    return this.to('GetUICache');
  }

  /**
   * Grants permission to list tags on a support case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListTagsForCase() {
    return this.to('ListTagsForCase');
  }

  /**
   * Grants permission to start a multipart file upload to a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toStartMultipartUpload() {
    return this.to('StartMultipartUpload');
  }

  /**
   * Grants permission to add a tag on a support case
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toTagCase() {
    return this.to('TagCase');
  }

  /**
   * Grants permission to remove a tag on a support case
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUntagCase() {
    return this.to('UntagCase');
  }

  /**
   * Grants permission to update a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateCase() {
    return this.to('UpdateCase');
  }

  /**
   * Grants permission to update a support case status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateCaseStatus() {
    return this.to('UpdateCaseStatus');
  }

  /**
   * Grants permission to update a multipart file upload to a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateMultipartUpload() {
    return this.to('UpdateMultipartUpload');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddCaseComment',
      'CheckCasePermission',
      'CompleteMultipartUpload',
      'CreateCase',
      'CreateS3CLIUploadCommand',
      'CreateS3DownloadUrl',
      'StartMultipartUpload',
      'UpdateCase',
      'UpdateCaseStatus',
      'UpdateMultipartUpload'
    ],
    Read: [
      'GetCase',
      'GetCasePermission',
      'GetCases',
      'GetUICache',
      'ListTagsForCase'
    ],
    Tagging: [
      'TagCase',
      'UntagCase'
    ]
  };

  /**
   * Adds a resource of type case to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCase(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elemental-support-cases::${ account ?? this.defaultAccount }:case/${ resourceId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCase()
   * - .toTagCase()
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
   * - case
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
   * - .toCreateCase()
   * - .toTagCase()
   * - .toUntagCase()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
