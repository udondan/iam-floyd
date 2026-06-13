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
   * Grants permission to archive a managed agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toArchiveAgent() {
    return this.to('ArchiveAgent');
  }

  /**
   * Grants permission to archive a managed agent environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toArchiveEnvironment() {
    return this.to('ArchiveEnvironment');
  }

  /**
   * Grants permission to archive a memory store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toArchiveMemoryStore() {
    return this.to('ArchiveMemoryStore');
  }

  /**
   * Grants permission to archive a managed agent session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toArchiveSession() {
    return this.to('ArchiveSession');
  }

  /**
   * Grants permission to archive a credential vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toArchiveVault() {
    return this.to('ArchiveVault');
  }

  /**
   * Grants permission to archive a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
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
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
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
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html
   */
  public toCallWithBearerToken() {
    return this.to('CallWithBearerToken');
  }

  /**
   * Grants permission to cancel an in-progress batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCancelBatchInference() {
    return this.to('CancelBatchInference');
  }

  /**
   * Grants permission to count tokens for a message request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCountTokens() {
    return this.to('CountTokens');
  }

  /**
   * Grants permission to create a managed agent in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateAgent() {
    return this.to('CreateAgent');
  }

  /**
   * Grants permission to create a batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateBatchInference() {
    return this.to('CreateBatchInference');
  }

  /**
   * Grants permission to create a managed agent environment in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to upload a file to a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateFile() {
    return this.to('CreateFile');
  }

  /**
   * Grants permission to create a chat completion inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateInference() {
    return this.to('CreateInference');
  }

  /**
   * Grants permission to create a managed agent memory store in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateMemoryStore() {
    return this.to('CreateMemoryStore');
  }

  /**
   * Grants permission to create a managed agent session in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to create a skill in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateSkill() {
    return this.to('CreateSkill');
  }

  /**
   * Grants permission to create a user profile in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to create an enrollment URL for a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateUserProfileEnrollmentUrl() {
    return this.to('CreateUserProfileEnrollmentUrl');
  }

  /**
   * Grants permission to create a managed agent credential vault in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateVault() {
    return this.to('CreateVault');
  }

  /**
   * Grants permission to create a webhook in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateWebhook() {
    return this.to('CreateWebhook');
  }

  /**
   * Grants permission to create a workspace in an organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to delete a batch inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteBatchInference() {
    return this.to('DeleteBatchInference');
  }

  /**
   * Grants permission to delete a managed agent environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete a file from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteFile() {
    return this.to('DeleteFile');
  }

  /**
   * Grants permission to delete a memory store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteMemoryStore() {
    return this.to('DeleteMemoryStore');
  }

  /**
   * Grants permission to delete a managed agent session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Grants permission to delete a skill from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteSkill() {
    return this.to('DeleteSkill');
  }

  /**
   * Grants permission to delete a credential vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteVault() {
    return this.to('DeleteVault');
  }

  /**
   * Grants permission to delete a webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toDeleteWebhook() {
    return this.to('DeleteWebhook');
  }

  /**
   * Grants permission to retrieve the status of account setup and AWS Marketplace registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetAccountStatus() {
    return this.to('GetAccountStatus');
  }

  /**
   * Grants permission to retrieve details or versions of a managed agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetAgent() {
    return this.to('GetAgent');
  }

  /**
   * Grants permission to retrieve details of a batch inference request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetBatchInference() {
    return this.to('GetBatchInference');
  }

  /**
   * Grants permission to retrieve details of a managed agent environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to retrieve a file or its content from a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetFile() {
    return this.to('GetFile');
  }

  /**
   * Grants permission to retrieve details of a memory store, its memories, or its memory versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetMemoryStore() {
    return this.to('GetMemoryStore');
  }

  /**
   * Grants permission to retrieve information about a specific model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Grants permission to retrieve details, events, or resources of a managed agent session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to retrieve details of a skill or its versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetSkill() {
    return this.to('GetSkill');
  }

  /**
   * Grants permission to retrieve details of a user profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetUserProfile() {
    return this.to('GetUserProfile');
  }

  /**
   * Grants permission to retrieve details of a credential vault or its credentials
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetVault() {
    return this.to('GetVault');
  }

  /**
   * Grants permission to retrieve details of a webhook
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetWebhook() {
    return this.to('GetWebhook');
  }

  /**
   * Grants permission to retrieve details of a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toGetWorkspace() {
    return this.to('GetWorkspace');
  }

  /**
   * Grants permission to list managed agents in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListAgents() {
    return this.to('ListAgents');
  }

  /**
   * Grants permission to list batch inference requests in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListBatchInferences() {
    return this.to('ListBatchInferences');
  }

  /**
   * Grants permission to list managed agent environments in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list files in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListFiles() {
    return this.to('ListFiles');
  }

  /**
   * Grants permission to list managed agent memory stores in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListMemoryStores() {
    return this.to('ListMemoryStores');
  }

  /**
   * Grants permission to list available models in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list managed agent sessions in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list skills in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListSkills() {
    return this.to('ListSkills');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list user profiles in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListUserProfiles() {
    return this.to('ListUserProfiles');
  }

  /**
   * Grants permission to list managed agent credential vaults in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListVaults() {
    return this.to('ListVaults');
  }

  /**
   * Grants permission to list webhooks in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListWebhooks() {
    return this.to('ListWebhooks');
  }

  /**
   * Grants permission to list workspaces in an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to process work items in a self-hosted managed agent environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toProcessEnvironmentWork() {
    return this.to('ProcessEnvironmentWork');
  }

  /**
   * Grants permission to rotate the signing secret of a webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toRotateWebhookSecret() {
    return this.to('RotateWebhookSecret');
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
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
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
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a managed agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateAgent() {
    return this.to('UpdateAgent');
  }

  /**
   * Grants permission to update a managed agent environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update a memory store, mutate its memories, or redact a memory version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateMemoryStore() {
    return this.to('UpdateMemoryStore');
  }

  /**
   * Grants permission to update a managed agent session, append session events, or manage its resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateSession() {
    return this.to('UpdateSession');
  }

  /**
   * Grants permission to create or delete a skill version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateSkill() {
    return this.to('UpdateSkill');
  }

  /**
   * Grants permission to update a user profile in a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to update a credential vault or manage its stored credentials
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateVault() {
    return this.to('UpdateVault');
  }

  /**
   * Grants permission to update a webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateWebhook() {
    return this.to('UpdateWebhook');
  }

  /**
   * Grants permission to update a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-actions.html#iam-actions
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ArchiveAgent',
      'ArchiveEnvironment',
      'ArchiveMemoryStore',
      'ArchiveSession',
      'ArchiveVault',
      'ArchiveWorkspace',
      'AssumeConsole',
      'CancelBatchInference',
      'CountTokens',
      'CreateAgent',
      'CreateBatchInference',
      'CreateEnvironment',
      'CreateFile',
      'CreateInference',
      'CreateMemoryStore',
      'CreateSession',
      'CreateSkill',
      'CreateUserProfile',
      'CreateUserProfileEnrollmentUrl',
      'CreateVault',
      'CreateWebhook',
      'CreateWorkspace',
      'DeleteBatchInference',
      'DeleteEnvironment',
      'DeleteFile',
      'DeleteMemoryStore',
      'DeleteSession',
      'DeleteSkill',
      'DeleteVault',
      'DeleteWebhook',
      'ProcessEnvironmentWork',
      'RotateWebhookSecret',
      'UpdateAgent',
      'UpdateEnvironment',
      'UpdateMemoryStore',
      'UpdateSession',
      'UpdateSkill',
      'UpdateUserProfile',
      'UpdateVault',
      'UpdateWebhook',
      'UpdateWorkspace'
    ],
    List: [
      'CallWithBearerToken',
      'ListAgents',
      'ListBatchInferences',
      'ListEnvironments',
      'ListFiles',
      'ListMemoryStores',
      'ListModels',
      'ListSessions',
      'ListSkills',
      'ListUserProfiles',
      'ListVaults',
      'ListWebhooks',
      'ListWorkspaces'
    ],
    Read: [
      'GetAccountStatus',
      'GetAgent',
      'GetBatchInference',
      'GetEnvironment',
      'GetFile',
      'GetMemoryStore',
      'GetModel',
      'GetSession',
      'GetSkill',
      'GetUserProfile',
      'GetVault',
      'GetWebhook',
      'GetWorkspace',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/workspaces.html#workspaces
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-external-anthropic:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspace/${ resourceId }`);
  }

  /**
   * Filters access by the Short-term or Long-term bearer tokens
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-policies.html
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
   * Filters access by the use of the Claude Platform console
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-policies.html
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifCalledViaConsole(value?: boolean) {
    return this.if(`CalledViaConsole`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the Claude Platform role used for the console session
   *
   * https://docs.aws.amazon.com/claude-platform/latest/userguide/iam-policies.html
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

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateWorkspace()
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
   * - .toArchiveAgent()
   * - .toArchiveEnvironment()
   * - .toArchiveMemoryStore()
   * - .toArchiveSession()
   * - .toArchiveVault()
   * - .toArchiveWorkspace()
   * - .toCancelBatchInference()
   * - .toCountTokens()
   * - .toCreateAgent()
   * - .toCreateBatchInference()
   * - .toCreateEnvironment()
   * - .toCreateFile()
   * - .toCreateInference()
   * - .toCreateMemoryStore()
   * - .toCreateSession()
   * - .toCreateSkill()
   * - .toCreateUserProfile()
   * - .toCreateUserProfileEnrollmentUrl()
   * - .toCreateVault()
   * - .toCreateWebhook()
   * - .toDeleteBatchInference()
   * - .toDeleteEnvironment()
   * - .toDeleteFile()
   * - .toDeleteMemoryStore()
   * - .toDeleteSession()
   * - .toDeleteSkill()
   * - .toDeleteVault()
   * - .toDeleteWebhook()
   * - .toGetAgent()
   * - .toGetBatchInference()
   * - .toGetEnvironment()
   * - .toGetFile()
   * - .toGetMemoryStore()
   * - .toGetModel()
   * - .toGetSession()
   * - .toGetSkill()
   * - .toGetUserProfile()
   * - .toGetVault()
   * - .toGetWebhook()
   * - .toGetWorkspace()
   * - .toListAgents()
   * - .toListBatchInferences()
   * - .toListEnvironments()
   * - .toListFiles()
   * - .toListMemoryStores()
   * - .toListModels()
   * - .toListSessions()
   * - .toListSkills()
   * - .toListTagsForResource()
   * - .toListUserProfiles()
   * - .toListVaults()
   * - .toListWebhooks()
   * - .toProcessEnvironmentWork()
   * - .toRotateWebhookSecret()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAgent()
   * - .toUpdateEnvironment()
   * - .toUpdateMemoryStore()
   * - .toUpdateSession()
   * - .toUpdateSkill()
   * - .toUpdateUserProfile()
   * - .toUpdateVault()
   * - .toUpdateWebhook()
   * - .toUpdateWorkspace()
   *
   * Applies to resource types:
   * - workspace
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
   * - .toCreateWorkspace()
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
