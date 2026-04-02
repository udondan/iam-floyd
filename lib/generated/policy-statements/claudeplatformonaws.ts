import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aws-external-anthropic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_claudeplatformonaws.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsExternalAnthropic extends PolicyStatement {
  public servicePrefix = 'aws-external-anthropic';

  /**
   * Statement provider for service [aws-external-anthropic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_claudeplatformonaws.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to archive a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toArchiveWorkspace() {
    return this.to('ArchiveWorkspace');
  }

  /**
   * Grants permission to assume console access on Claude Platform
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapability()
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toAssumeConsole() {
    return this.to('AssumeConsole');
  }

  /**
   * Grants permission to make API calls using bearer token authentication
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifBearerTokenType()
   */
  public toCallWithBearerToken() {
    return this.to('CallWithBearerToken');
  }

  /**
   * Grants permission to cancel an in-progress batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCancelBatchInference() {
    return this.to('CancelBatchInference');
  }

  /**
   * Grants permission to count tokens for a message request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCountTokens() {
    return this.to('CountTokens');
  }

  /**
   * Grants permission to create a batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateBatchInference() {
    return this.to('CreateBatchInference');
  }

  /**
   * Grants permission to upload a file to a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateFile() {
    return this.to('CreateFile');
  }

  /**
   * Grants permission to create a chat completion inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateInference() {
    return this.to('CreateInference');
  }

  /**
   * Grants permission to create a skill in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateSkill() {
    return this.to('CreateSkill');
  }

  /**
   * Grants permission to create a user profile in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to create a workspace in an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to delete a batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toDeleteBatchInference() {
    return this.to('DeleteBatchInference');
  }

  /**
   * Grants permission to delete a file from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toDeleteFile() {
    return this.to('DeleteFile');
  }

  /**
   * Grants permission to delete a skill from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toDeleteSkill() {
    return this.to('DeleteSkill');
  }

  /**
   * Grants permission to retrieve the status of account setup and AWS Marketplace registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetAccountStatus() {
    return this.to('GetAccountStatus');
  }

  /**
   * Grants permission to retrieve details of a batch inference request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetBatchInference() {
    return this.to('GetBatchInference');
  }

  /**
   * Grants permission to retrieve a file or its content from a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetFile() {
    return this.to('GetFile');
  }

  /**
   * Grants permission to retrieve information about a specific model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Grants permission to retrieve details of a skill or its versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetSkill() {
    return this.to('GetSkill');
  }

  /**
   * Grants permission to retrieve details of a user profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetUserProfile() {
    return this.to('GetUserProfile');
  }

  /**
   * Grants permission to retrieve details of a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toGetWorkspace() {
    return this.to('GetWorkspace');
  }

  /**
   * Grants permission to list batch inference requests in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListBatchInferences() {
    return this.to('ListBatchInferences');
  }

  /**
   * Grants permission to list files in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListFiles() {
    return this.to('ListFiles');
  }

  /**
   * Grants permission to list available models in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list skills in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListSkills() {
    return this.to('ListSkills');
  }

  /**
   * Grants permission to list user profiles in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListUserProfiles() {
    return this.to('ListUserProfiles');
  }

  /**
   * Grants permission to list workspaces in an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to create or delete a skill version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toUpdateSkill() {
    return this.to('UpdateSkill');
  }

  /**
   * Grants permission to update a user profile in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to update a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/#welcome
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ArchiveWorkspace',
      'AssumeConsole',
      'CancelBatchInference',
      'CountTokens',
      'CreateBatchInference',
      'CreateFile',
      'CreateInference',
      'CreateSkill',
      'CreateUserProfile',
      'CreateWorkspace',
      'DeleteBatchInference',
      'DeleteFile',
      'DeleteSkill',
      'UpdateSkill',
      'UpdateUserProfile',
      'UpdateWorkspace'
    ],
    List: [
      'CallWithBearerToken',
      'ListBatchInferences',
      'ListFiles',
      'ListModels',
      'ListSkills',
      'ListUserProfiles',
      'ListWorkspaces'
    ],
    Read: [
      'GetAccountStatus',
      'GetBatchInference',
      'GetFile',
      'GetModel',
      'GetSkill',
      'GetUserProfile',
      'GetWorkspace'
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/#Workspace
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-external-anthropic:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspace/${ resourceId }`);
  }

  /**
   * Filters access by the Short-term or Long-term bearer tokens
   *
   * https://docs.aws.amazon.com/
   *
   * Applies to actions:
   * - .toCallWithBearerToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBearerTokenType(value: string | string[], operator?: Operator | string) {
    return this.if(`BearerTokenType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Claude Platform role used for the console session
   *
   * https://docs.aws.amazon.com/
   *
   * Applies to actions:
   * - .toAssumeConsole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCapability(value: string | string[], operator?: Operator | string) {
    return this.if(`Capability`, value, operator ?? 'StringLike');
  }
}
