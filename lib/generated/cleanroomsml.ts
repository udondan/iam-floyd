import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cleanrooms-ml](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanroomsml.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CleanroomsMl extends PolicyStatement {
  public servicePrefix = 'cleanrooms-ml';

  /**
   * Statement provider for service [cleanrooms-ml](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanroomsml.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an audience model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateAudienceModel.html
   */
  public toCreateAudienceModel() {
    return this.to('CreateAudienceModel');
  }

  /**
   * Grants permission to create a configured audience model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredAudienceModel.html
   */
  public toCreateConfiguredAudienceModel() {
    return this.to('CreateConfiguredAudienceModel');
  }

  /**
   * Grants permission to create a training dataset, or seed audience. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateTrainingDataset.html
   */
  public toCreateTrainingDataset() {
    return this.to('CreateTrainingDataset');
  }

  /**
   * Grants permission to delete the specified audience generation job, and removes all data associated with the job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceGenerationJob.html
   */
  public toDeleteAudienceGenerationJob() {
    return this.to('DeleteAudienceGenerationJob');
  }

  /**
   * Grants permission to delete the specified audience generation job, and removes all data associated with the job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceModel.html
   */
  public toDeleteAudienceModel() {
    return this.to('DeleteAudienceModel');
  }

  /**
   * Grants permission to delete the specified configured audience model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModel.html
   */
  public toDeleteConfiguredAudienceModel() {
    return this.to('DeleteConfiguredAudienceModel');
  }

  /**
   * Grants permission to delete the specified configured audience model policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModelPolicy.html
   */
  public toDeleteConfiguredAudienceModelPolicy() {
    return this.to('DeleteConfiguredAudienceModelPolicy');
  }

  /**
   * Grants permission to delete a training dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteTrainingDataset.html
   */
  public toDeleteTrainingDataset() {
    return this.to('DeleteTrainingDataset');
  }

  /**
   * Grants permission to return information about an audience generation job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceGenerationJob.html
   */
  public toGetAudienceGenerationJob() {
    return this.to('GetAudienceGenerationJob');
  }

  /**
   * Grants permission to return information about an audience model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceModel.html
   */
  public toGetAudienceModel() {
    return this.to('GetAudienceModel');
  }

  /**
   * Grants permission to return information about a configured audience model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModel.html
   */
  public toGetConfiguredAudienceModel() {
    return this.to('GetConfiguredAudienceModel');
  }

  /**
   * Grants permission to return information about a configured audience model policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModelPolicy.html
   */
  public toGetConfiguredAudienceModelPolicy() {
    return this.to('GetConfiguredAudienceModelPolicy');
  }

  /**
   * Grants permission to return information about a training dataset
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainingDataset.html
   */
  public toGetTrainingDataset() {
    return this.to('GetTrainingDataset');
  }

  /**
   * Grants permission to return a list of the audience export jobs
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceExportJobs.html
   */
  public toListAudienceExportJobs() {
    return this.to('ListAudienceExportJobs');
  }

  /**
   * Grants permission to return a list of audience generation jobs
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceGenerationJobs.html
   */
  public toListAudienceGenerationJobs() {
    return this.to('ListAudienceGenerationJobs');
  }

  /**
   * Grants permission to return a list of audience models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceModels.html
   */
  public toListAudienceModels() {
    return this.to('ListAudienceModels');
  }

  /**
   * Grants permission to return a list of configured audience models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredAudienceModels.html
   */
  public toListConfiguredAudienceModels() {
    return this.to('ListConfiguredAudienceModels');
  }

  /**
   * Grants permission to return a list of tags for a provided resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to return a list of training datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainingDatasets.html
   */
  public toListTrainingDatasets() {
    return this.to('ListTrainingDatasets');
  }

  /**
   * Grants permission to create or update the resource policy for a configured audience model
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_PutConfiguredAudienceModelPolicy.html
   */
  public toPutConfiguredAudienceModelPolicy() {
    return this.to('PutConfiguredAudienceModelPolicy');
  }

  /**
   * Grants permission to export an audience of a specified size after you have generated an audience
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceExportJob.html
   */
  public toStartAudienceExportJob() {
    return this.to('StartAudienceExportJob');
  }

  /**
   * Grants permission to start the audience generation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceGenerationJob.html
   */
  public toStartAudienceGenerationJob() {
    return this.to('StartAudienceGenerationJob');
  }

  /**
   * Grants permission to tag a specific resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a specific resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UntagResource.html
   */
  public toUnTagResource() {
    return this.to('UnTagResource');
  }

  /**
   * Grants permission to update a configured audience model.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UpdateConfiguredAudienceModel.html
   */
  public toUpdateConfiguredAudienceModel() {
    return this.to('UpdateConfiguredAudienceModel');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAudienceModel',
      'CreateConfiguredAudienceModel',
      'CreateTrainingDataset',
      'DeleteAudienceGenerationJob',
      'DeleteAudienceModel',
      'DeleteConfiguredAudienceModel',
      'DeleteConfiguredAudienceModelPolicy',
      'DeleteTrainingDataset',
      'StartAudienceExportJob',
      'StartAudienceGenerationJob',
      'UpdateConfiguredAudienceModel'
    ],
    Read: [
      'GetAudienceGenerationJob',
      'GetAudienceModel',
      'GetConfiguredAudienceModel',
      'GetConfiguredAudienceModelPolicy',
      'GetTrainingDataset'
    ],
    List: [
      'ListAudienceExportJobs',
      'ListAudienceGenerationJobs',
      'ListAudienceModels',
      'ListConfiguredAudienceModels',
      'ListTagsForResource',
      'ListTrainingDatasets'
    ],
    'Permissions management': [
      'PutConfiguredAudienceModelPolicy'
    ],
    Tagging: [
      'TagResource',
      'UnTagResource'
    ]
  };

  /**
   * Adds a resource of type trainingdataset to the statement
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_TrainingDatasetSummary.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrainingdataset(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cleanrooms-ml:${ region || this.defaultRegion }:${ account || this.defaultAccount }:training-dataset/${ resourceId }`);
  }

  /**
   * Adds a resource of type audiencemodel to the statement
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_AudienceModelSummary.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAudiencemodel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cleanrooms-ml:${ region || this.defaultRegion }:${ account || this.defaultAccount }:audience-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type configuredaudiencemodel to the statement
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ConfiguredAudienceModelSummary.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredaudiencemodel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cleanrooms-ml:${ region || this.defaultRegion }:${ account || this.defaultAccount }:configured-audience-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type audiencegenerationjob to the statement
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_AudienceGenerationJobSummary.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAudiencegenerationjob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cleanrooms-ml:${ region || this.defaultRegion }:${ account || this.defaultAccount }:audience-generation-job/${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAudienceModel()
   * - .toCreateConfiguredAudienceModel()
   * - .toCreateTrainingDataset()
   * - .toDeleteAudienceGenerationJob()
   * - .toDeleteAudienceModel()
   * - .toDeleteConfiguredAudienceModel()
   * - .toDeleteConfiguredAudienceModelPolicy()
   * - .toDeleteTrainingDataset()
   * - .toGetAudienceGenerationJob()
   * - .toGetAudienceModel()
   * - .toGetConfiguredAudienceModel()
   * - .toGetConfiguredAudienceModelPolicy()
   * - .toGetTrainingDataset()
   * - .toListAudienceExportJobs()
   * - .toListAudienceGenerationJobs()
   * - .toStartAudienceExportJob()
   * - .toStartAudienceGenerationJob()
   * - .toTagResource()
   * - .toUpdateConfiguredAudienceModel()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUnTagResource()
   *
   * Applies to resource types:
   * - trainingdataset
   * - audiencemodel
   * - configuredaudiencemodel
   * - audiencegenerationjob
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAudienceModel()
   * - .toCreateConfiguredAudienceModel()
   * - .toCreateTrainingDataset()
   * - .toDeleteAudienceGenerationJob()
   * - .toDeleteAudienceModel()
   * - .toDeleteConfiguredAudienceModel()
   * - .toDeleteConfiguredAudienceModelPolicy()
   * - .toDeleteTrainingDataset()
   * - .toGetAudienceGenerationJob()
   * - .toGetAudienceModel()
   * - .toGetConfiguredAudienceModel()
   * - .toGetConfiguredAudienceModelPolicy()
   * - .toGetTrainingDataset()
   * - .toListAudienceExportJobs()
   * - .toListAudienceGenerationJobs()
   * - .toListTagsForResource()
   * - .toStartAudienceExportJob()
   * - .toStartAudienceGenerationJob()
   * - .toTagResource()
   * - .toUnTagResource()
   * - .toUpdateConfiguredAudienceModel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by clean rooms collaboration id
   *
   * https://docs.aws.amazon.com/TBD
   *
   * Applies to actions:
   * - .toStartAudienceGenerationJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCollaborationId(value: string | string[], operator?: Operator | string) {
    return this.if(`CollaborationId`, value, operator || 'StringLike');
  }
}
