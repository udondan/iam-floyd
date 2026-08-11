import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to cancel a trained model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CancelTrainedModel.html
   */
  public toCancelTrainedModel() {
    return this.to('CancelTrainedModel');
  }

  /**
   * Grants permission to cancel a trained model inference job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CancelTrainedModelInferenceJob.html
   */
  public toCancelTrainedModelInferenceJob() {
    return this.to('CancelTrainedModelInferenceJob');
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
   * Grants permission to create a configured model algorithm
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredModelAlgorithm.html
   */
  public toCreateConfiguredModelAlgorithm() {
    return this.to('CreateConfiguredModelAlgorithm');
  }

  /**
   * Grants permission to create a configured model algorithm association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredModelAlgorithmAssociation.html
   */
  public toCreateConfiguredModelAlgorithmAssociation() {
    return this.to('CreateConfiguredModelAlgorithmAssociation');
  }

  /**
   * Grants permission to create an ML input channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateMLInputChannel.html
   */
  public toCreateMLInputChannel() {
    return this.to('CreateMLInputChannel');
  }

  /**
   * Grants permission to create a trained model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateTrainedModel.html
   */
  public toCreateTrainedModel() {
    return this.to('CreateTrainedModel');
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
   * Grants permission to delete a configured model algorithm
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredModelAlgorithm.html
   */
  public toDeleteConfiguredModelAlgorithm() {
    return this.to('DeleteConfiguredModelAlgorithm');
  }

  /**
   * Grants permission to delete a configured model algorithm association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredModelAlgorithmAssociation.html
   */
  public toDeleteConfiguredModelAlgorithmAssociation() {
    return this.to('DeleteConfiguredModelAlgorithmAssociation');
  }

  /**
   * Grants permission to delete an ML configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteMLConfiguration.html
   */
  public toDeleteMLConfiguration() {
    return this.to('DeleteMLConfiguration');
  }

  /**
   * Grants permission to delete all data associated with the ML input channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteMLInputChannelData.html
   */
  public toDeleteMLInputChannelData() {
    return this.to('DeleteMLInputChannelData');
  }

  /**
   * Grants permission to delete all output associated with the trained model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteTrainedModelOutput.html
   */
  public toDeleteTrainedModelOutput() {
    return this.to('DeleteTrainedModelOutput');
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
   * Grants permission to return information about a configured model algorithm association created by any member in the collaboration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationConfiguredModelAlgorithmAssociation.html
   */
  public toGetCollaborationConfiguredModelAlgorithmAssociation() {
    return this.to('GetCollaborationConfiguredModelAlgorithmAssociation');
  }

  /**
   * Grants permission to return information about an ML input channel created by any member in the collaboration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationMLInputChannel.html
   */
  public toGetCollaborationMLInputChannel() {
    return this.to('GetCollaborationMLInputChannel');
  }

  /**
   * Grants permission to return information about a trained model created by any member in the collaboration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationTrainedModel.html
   */
  public toGetCollaborationTrainedModel() {
    return this.to('GetCollaborationTrainedModel');
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
   * Grants permission to return information about a configured model algorithm
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredModelAlgorithm.html
   */
  public toGetConfiguredModelAlgorithm() {
    return this.to('GetConfiguredModelAlgorithm');
  }

  /**
   * Grants permission to return information about a configured model algorithm association
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredModelAlgorithmAssociation.html
   */
  public toGetConfiguredModelAlgorithmAssociation() {
    return this.to('GetConfiguredModelAlgorithmAssociation');
  }

  /**
   * Grants permission to return information about an ML configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetMLConfiguration.html
   */
  public toGetMLConfiguration() {
    return this.to('GetMLConfiguration');
  }

  /**
   * Grants permission to return information about an ML input channel
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetMLInputChannel.html
   */
  public toGetMLInputChannel() {
    return this.to('GetMLInputChannel');
  }

  /**
   * Grants permission to return information about a trained model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainedModel.html
   */
  public toGetTrainedModel() {
    return this.to('GetTrainedModel');
  }

  /**
   * Grants permission to return information about a trained model inference job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainedModelInferenceJob.html
   */
  public toGetTrainedModelInferenceJob() {
    return this.to('GetTrainedModelInferenceJob');
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
   * Grants permission to return a list of configured model algorithms created by any member in the collaboration
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationConfiguredModelAlgorithmAssociations.html
   */
  public toListCollaborationConfiguredModelAlgorithmAssociations() {
    return this.to('ListCollaborationConfiguredModelAlgorithmAssociations');
  }

  /**
   * Grants permission to return a list of ML input channels created by any member in the collaboration
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationMLInputChannels.html
   */
  public toListCollaborationMLInputChannels() {
    return this.to('ListCollaborationMLInputChannels');
  }

  /**
   * Grants permission to return a list of trained model export jobs started by any member in the collaboration
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModelExportJobs.html
   */
  public toListCollaborationTrainedModelExportJobs() {
    return this.to('ListCollaborationTrainedModelExportJobs');
  }

  /**
   * Grants permission to return a list of trained model inference jobs started by any member in the collaboration
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModelInferenceJobs.html
   */
  public toListCollaborationTrainedModelInferenceJobs() {
    return this.to('ListCollaborationTrainedModelInferenceJobs');
  }

  /**
   * Grants permission to return a list of trained models created by any member in the collaboration
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCollaborationId()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModels.html
   */
  public toListCollaborationTrainedModels() {
    return this.to('ListCollaborationTrainedModels');
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
   * Grants permission to return a list of configured model algorithm associations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredModelAlgorithmAssociations.html
   */
  public toListConfiguredModelAlgorithmAssociations() {
    return this.to('ListConfiguredModelAlgorithmAssociations');
  }

  /**
   * Grants permission to return a list of configured model algorithms
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredModelAlgorithms.html
   */
  public toListConfiguredModelAlgorithms() {
    return this.to('ListConfiguredModelAlgorithms');
  }

  /**
   * Grants permission to return a list of ML input channels
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListMLInputChannels.html
   */
  public toListMLInputChannels() {
    return this.to('ListMLInputChannels');
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
   * Grants permission to return a list of trained model inference jobs
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainedModelInferenceJobs.html
   */
  public toListTrainedModelInferenceJobs() {
    return this.to('ListTrainedModelInferenceJobs');
  }

  /**
   * Grants permission to return a list of trained model versions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainedModelVersions.html
   */
  public toListTrainedModelVersions() {
    return this.to('ListTrainedModelVersions');
  }

  /**
   * Grants permission to return a list of trained models
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainedModels.html
   */
  public toListTrainedModels() {
    return this.to('ListTrainedModels');
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
   * Grants permission to put an ML configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_PutMLConfiguration.html
   */
  public toPutMLConfiguration() {
    return this.to('PutMLConfiguration');
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
   * Grants permission to start a trained model export job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartTrainedModelExportJob.html
   */
  public toStartTrainedModelExportJob() {
    return this.to('StartTrainedModelExportJob');
  }

  /**
   * Grants permission to start a trained model inference job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartTrainedModelInferenceJob.html
   */
  public toStartTrainedModelInferenceJob() {
    return this.to('StartTrainedModelInferenceJob');
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
      'CancelTrainedModel',
      'CancelTrainedModelInferenceJob',
      'CreateAudienceModel',
      'CreateConfiguredAudienceModel',
      'CreateConfiguredModelAlgorithm',
      'CreateConfiguredModelAlgorithmAssociation',
      'CreateMLInputChannel',
      'CreateTrainedModel',
      'CreateTrainingDataset',
      'DeleteAudienceGenerationJob',
      'DeleteAudienceModel',
      'DeleteConfiguredAudienceModel',
      'DeleteConfiguredAudienceModelPolicy',
      'DeleteConfiguredModelAlgorithm',
      'DeleteConfiguredModelAlgorithmAssociation',
      'DeleteMLConfiguration',
      'DeleteMLInputChannelData',
      'DeleteTrainedModelOutput',
      'DeleteTrainingDataset',
      'PutMLConfiguration',
      'StartAudienceExportJob',
      'StartAudienceGenerationJob',
      'StartTrainedModelExportJob',
      'StartTrainedModelInferenceJob',
      'UpdateConfiguredAudienceModel'
    ],
    Read: [
      'GetAudienceGenerationJob',
      'GetAudienceModel',
      'GetCollaborationConfiguredModelAlgorithmAssociation',
      'GetCollaborationMLInputChannel',
      'GetCollaborationTrainedModel',
      'GetConfiguredAudienceModel',
      'GetConfiguredAudienceModelPolicy',
      'GetConfiguredModelAlgorithm',
      'GetConfiguredModelAlgorithmAssociation',
      'GetMLConfiguration',
      'GetMLInputChannel',
      'GetTrainedModel',
      'GetTrainedModelInferenceJob',
      'GetTrainingDataset'
    ],
    List: [
      'ListAudienceExportJobs',
      'ListAudienceGenerationJobs',
      'ListAudienceModels',
      'ListCollaborationConfiguredModelAlgorithmAssociations',
      'ListCollaborationMLInputChannels',
      'ListCollaborationTrainedModelExportJobs',
      'ListCollaborationTrainedModelInferenceJobs',
      'ListCollaborationTrainedModels',
      'ListConfiguredAudienceModels',
      'ListConfiguredModelAlgorithmAssociations',
      'ListConfiguredModelAlgorithms',
      'ListMLInputChannels',
      'ListTagsForResource',
      'ListTrainedModelInferenceJobs',
      'ListTrainedModelVersions',
      'ListTrainedModels',
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
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrainingdataset(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:training-dataset/${ resourceId }`);
  }

  /**
   * Adds a resource of type audiencemodel to the statement
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:audience-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type configuredaudiencemodel to the statement
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configured-audience-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type audiencegenerationjob to the statement
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:audience-generation-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type ConfiguredModelAlgorithm to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredModelAlgorithm(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configured-model-algorithm/${ resourceId }`);
  }

  /**
   * Adds a resource of type ConfiguredModelAlgorithmAssociation to the statement
   *
   * @param membershipId - Identifier for the membershipId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredModelAlgorithmAssociation(membershipId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/configured-model-algorithm-association/${ resourceId }`);
  }

  /**
   * Adds a resource of type MLInputChannel to the statement
   *
   * @param membershipId - Identifier for the membershipId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMLInputChannel(membershipId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/ml-input-channel/${ resourceId }`);
  }

  /**
   * Adds a resource of type TrainedModel to the statement
   *
   * @param membershipId - Identifier for the membershipId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrainedModel(membershipId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/trained-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type TrainedModelInferenceJob to the statement
   *
   * @param membershipId - Identifier for the membershipId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrainedModelInferenceJob(membershipId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms-ml:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/trained-model-inference-job/${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCancelTrainedModel()
   * - .toCancelTrainedModelInferenceJob()
   * - .toCreateAudienceModel()
   * - .toCreateConfiguredAudienceModel()
   * - .toCreateConfiguredModelAlgorithm()
   * - .toCreateConfiguredModelAlgorithmAssociation()
   * - .toCreateMLInputChannel()
   * - .toCreateTrainedModel()
   * - .toCreateTrainingDataset()
   * - .toDeleteAudienceGenerationJob()
   * - .toDeleteAudienceModel()
   * - .toDeleteConfiguredAudienceModel()
   * - .toDeleteConfiguredAudienceModelPolicy()
   * - .toDeleteConfiguredModelAlgorithm()
   * - .toDeleteConfiguredModelAlgorithmAssociation()
   * - .toDeleteMLConfiguration()
   * - .toDeleteMLInputChannelData()
   * - .toDeleteTrainedModelOutput()
   * - .toDeleteTrainingDataset()
   * - .toGetAudienceGenerationJob()
   * - .toGetAudienceModel()
   * - .toGetCollaborationConfiguredModelAlgorithmAssociation()
   * - .toGetCollaborationMLInputChannel()
   * - .toGetCollaborationTrainedModel()
   * - .toGetConfiguredAudienceModel()
   * - .toGetConfiguredAudienceModelPolicy()
   * - .toGetConfiguredModelAlgorithm()
   * - .toGetConfiguredModelAlgorithmAssociation()
   * - .toGetMLConfiguration()
   * - .toGetMLInputChannel()
   * - .toGetTrainedModel()
   * - .toGetTrainedModelInferenceJob()
   * - .toGetTrainingDataset()
   * - .toListAudienceExportJobs()
   * - .toListAudienceGenerationJobs()
   * - .toListCollaborationConfiguredModelAlgorithmAssociations()
   * - .toListCollaborationMLInputChannels()
   * - .toListCollaborationTrainedModelExportJobs()
   * - .toListCollaborationTrainedModelInferenceJobs()
   * - .toListCollaborationTrainedModels()
   * - .toListConfiguredModelAlgorithmAssociations()
   * - .toListConfiguredModelAlgorithms()
   * - .toListMLInputChannels()
   * - .toListTrainedModelInferenceJobs()
   * - .toListTrainedModelVersions()
   * - .toListTrainedModels()
   * - .toPutMLConfiguration()
   * - .toStartAudienceExportJob()
   * - .toStartAudienceGenerationJob()
   * - .toStartTrainedModelExportJob()
   * - .toStartTrainedModelInferenceJob()
   * - .toTagResource()
   * - .toUpdateConfiguredAudienceModel()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
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
   * - ConfiguredModelAlgorithm
   * - ConfiguredModelAlgorithmAssociation
   * - MLInputChannel
   * - TrainedModel
   * - TrainedModelInferenceJob
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCancelTrainedModel()
   * - .toCancelTrainedModelInferenceJob()
   * - .toCreateAudienceModel()
   * - .toCreateConfiguredAudienceModel()
   * - .toCreateConfiguredModelAlgorithm()
   * - .toCreateConfiguredModelAlgorithmAssociation()
   * - .toCreateMLInputChannel()
   * - .toCreateTrainedModel()
   * - .toCreateTrainingDataset()
   * - .toDeleteAudienceGenerationJob()
   * - .toDeleteAudienceModel()
   * - .toDeleteConfiguredAudienceModel()
   * - .toDeleteConfiguredAudienceModelPolicy()
   * - .toDeleteConfiguredModelAlgorithm()
   * - .toDeleteConfiguredModelAlgorithmAssociation()
   * - .toDeleteMLConfiguration()
   * - .toDeleteMLInputChannelData()
   * - .toDeleteTrainedModelOutput()
   * - .toDeleteTrainingDataset()
   * - .toGetAudienceGenerationJob()
   * - .toGetAudienceModel()
   * - .toGetCollaborationConfiguredModelAlgorithmAssociation()
   * - .toGetCollaborationMLInputChannel()
   * - .toGetCollaborationTrainedModel()
   * - .toGetConfiguredAudienceModel()
   * - .toGetConfiguredAudienceModelPolicy()
   * - .toGetConfiguredModelAlgorithm()
   * - .toGetConfiguredModelAlgorithmAssociation()
   * - .toGetMLConfiguration()
   * - .toGetMLInputChannel()
   * - .toGetTrainedModel()
   * - .toGetTrainedModelInferenceJob()
   * - .toGetTrainingDataset()
   * - .toListAudienceExportJobs()
   * - .toListAudienceGenerationJobs()
   * - .toListCollaborationConfiguredModelAlgorithmAssociations()
   * - .toListCollaborationMLInputChannels()
   * - .toListCollaborationTrainedModelExportJobs()
   * - .toListCollaborationTrainedModelInferenceJobs()
   * - .toListCollaborationTrainedModels()
   * - .toListConfiguredModelAlgorithmAssociations()
   * - .toListConfiguredModelAlgorithms()
   * - .toListMLInputChannels()
   * - .toListTagsForResource()
   * - .toListTrainedModelInferenceJobs()
   * - .toListTrainedModelVersions()
   * - .toListTrainedModels()
   * - .toPutMLConfiguration()
   * - .toStartAudienceExportJob()
   * - .toStartAudienceGenerationJob()
   * - .toStartTrainedModelExportJob()
   * - .toStartTrainedModelInferenceJob()
   * - .toTagResource()
   * - .toUnTagResource()
   * - .toUpdateConfiguredAudienceModel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Clean rooms collaboration id
   *
   * https://docs.aws.amazon.com/TBD
   *
   * Applies to actions:
   * - .toGetCollaborationConfiguredModelAlgorithmAssociation()
   * - .toGetCollaborationMLInputChannel()
   * - .toGetCollaborationTrainedModel()
   * - .toListCollaborationConfiguredModelAlgorithmAssociations()
   * - .toListCollaborationMLInputChannels()
   * - .toListCollaborationTrainedModelExportJobs()
   * - .toListCollaborationTrainedModelInferenceJobs()
   * - .toListCollaborationTrainedModels()
   * - .toStartAudienceGenerationJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCollaborationId(value: string | string[], operator?: Operator | string) {
    return this.if(`CollaborationId`, value, operator ?? 'StringLike');
  }
}
