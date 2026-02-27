import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [bedrock-mantle](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockpoweredbyawsmantle.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BedrockMantle extends PolicyStatement {
  public servicePrefix = 'bedrock-mantle';

  /**
   * Statement provider for service [bedrock-mantle](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockpoweredbyawsmantle.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to archive a specific project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toArchiveProject() {
    return this.to('ArchiveProject');
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
   * Grants permission to cancel an in-progress fine tuning job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFineTuningJob()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCancelFineTuningJob() {
    return this.to('CancelFineTuningJob');
  }

  /**
   * Grants permission to cancel an in-progress inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCancelInference() {
    return this.to('CancelInference');
  }

  /**
   * Grants permission to create a file in a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCreateFile() {
    return this.to('CreateFile');
  }

  /**
   * Grants permission to create a fine tuning job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifModel()
   * - .ifFiles()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCreateFineTuningJob() {
    return this.to('CreateFineTuningJob');
  }

  /**
   * Grants permission to create a chat completion inference request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTier()
   * - .ifModel()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCreateInference() {
    return this.to('CreateInference');
  }

  /**
   * Grants permission to create a project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete a specific file
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFiles()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toDeleteFile() {
    return this.to('DeleteFile');
  }

  /**
   * Grants permission to delete a specific inference request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toDeleteInference() {
    return this.to('DeleteInference');
  }

  /**
   * Grants permission to retrieve information about a specific file
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFiles()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toGetFile() {
    return this.to('GetFile');
  }

  /**
   * Grants permission to retrieve details of a specific fine tuning job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFineTuningJob()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toGetFineTuningJob() {
    return this.to('GetFineTuningJob');
  }

  /**
   * Grants permission to retrieve details of a specific inference request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toGetInference() {
    return this.to('GetInference');
  }

  /**
   * Grants permission to retrieve information about a specific model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Grants permission to retrieve details of a specific project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to list all available files in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toListFiles() {
    return this.to('ListFiles');
  }

  /**
   * Grants permission to list all available fine tuning jobs in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toListFineTuningJobs() {
    return this.to('ListFineTuningJobs');
  }

  /**
   * Grants permission to list all available models in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
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
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a specific project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/#welcome
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ArchiveProject',
      'CancelFineTuningJob',
      'CancelInference',
      'CreateFile',
      'CreateFineTuningJob',
      'CreateInference',
      'CreateProject',
      'DeleteFile',
      'DeleteInference',
      'UpdateProject'
    ],
    List: [
      'CallWithBearerToken',
      'ListFiles',
      'ListFineTuningJobs',
      'ListModels',
      'ListProjects'
    ],
    Read: [
      'GetFile',
      'GetFineTuningJob',
      'GetInference',
      'GetModel',
      'GetProject',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html#Project
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-mantle:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ resourceId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProject()
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
   * - .toArchiveProject()
   * - .toCancelFineTuningJob()
   * - .toCancelInference()
   * - .toCreateFile()
   * - .toCreateFineTuningJob()
   * - .toCreateInference()
   * - .toCreateProject()
   * - .toDeleteFile()
   * - .toDeleteInference()
   * - .toGetFile()
   * - .toGetFineTuningJob()
   * - .toGetInference()
   * - .toGetModel()
   * - .toGetProject()
   * - .toListFiles()
   * - .toListFineTuningJobs()
   * - .toListModels()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateProject()
   *
   * Applies to resource types:
   * - project
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
   * - .toCreateProject()
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
   * Filters access by the Short-term or Long-term bearer tokens
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockmantle.html#amazonbedrockmantle-policy-keys
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
   * Filters access by the specified file identifiers
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockmantle.html#amazonbedrockmantle-policy-keys
   *
   * Applies to actions:
   * - .toCreateFineTuningJob()
   * - .toDeleteFile()
   * - .toGetFile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFiles(value: string | string[], operator?: Operator | string) {
    return this.if(`Files`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified fine-tuning job identifier
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockmantle.html#amazonbedrockmantle-policy-keys
   *
   * Applies to actions:
   * - .toCancelFineTuningJob()
   * - .toGetFineTuningJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFineTuningJob(value: string | string[], operator?: Operator | string) {
    return this.if(`FineTuningJob`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified Model
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockmantle.html#amazonbedrockmantle-policy-keys
   *
   * Applies to actions:
   * - .toCreateFineTuningJob()
   * - .toCreateInference()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifModel(value: string | string[], operator?: Operator | string) {
    return this.if(`Model`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified ServiceTier
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockmantle.html#amazonbedrockmantle-policy-keys
   *
   * Applies to actions:
   * - .toCreateInference()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceTier(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceTier`, value, operator ?? 'StringLike');
  }
}
