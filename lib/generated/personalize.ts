import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [personalize](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Personalize extends PolicyStatement {
  public servicePrefix = 'personalize';

  /**
   * Statement provider for service [personalize](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a batch inference job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchInferenceJob.html
   */
  public toCreateBatchInferenceJob() {
    return this.to('CreateBatchInferenceJob');
  }

  /**
   * Grants permission to create a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to create a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create a dataset export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html
   */
  public toCreateDatasetExportJob() {
    return this.to('CreateDatasetExportJob');
  }

  /**
   * Grants permission to create a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html
   */
  public toCreateDatasetGroup() {
    return this.to('CreateDatasetGroup');
  }

  /**
   * Grants permission to create a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html
   */
  public toCreateDatasetImportJob() {
    return this.to('CreateDatasetImportJob');
  }

  /**
   * Grants permission to create an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html
   */
  public toCreateEventTracker() {
    return this.to('CreateEventTracker');
  }

  /**
   * Grants permission to create a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateFilter.html
   */
  public toCreateFilter() {
    return this.to('CreateFilter');
  }

  /**
   * Grants permission to create a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html
   */
  public toCreateSchema() {
    return this.to('CreateSchema');
  }

  /**
   * Grants permission to create a solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html
   */
  public toCreateSolution() {
    return this.to('CreateSolution');
  }

  /**
   * Grants permission to create a solution version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html
   */
  public toCreateSolutionVersion() {
    return this.to('CreateSolutionVersion');
  }

  /**
   * Grants permission to delete a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    return this.to('DeleteDatasetGroup');
  }

  /**
   * Grants permission to delete an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html
   */
  public toDeleteEventTracker() {
    return this.to('DeleteEventTracker');
  }

  /**
   * Grants permission to delete a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteFilter.html
   */
  public toDeleteFilter() {
    return this.to('DeleteFilter');
  }

  /**
   * Grants permission to delete a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html
   */
  public toDeleteSchema() {
    return this.to('DeleteSchema');
  }

  /**
   * Grants permission to delete a solution including all versions of the solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html
   */
  public toDeleteSolution() {
    return this.to('DeleteSolution');
  }

  /**
   * Grants permission to describe an algorithm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    return this.to('DescribeAlgorithm');
  }

  /**
   * Grants permission to describe a batch inference job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchInferenceJob.html
   */
  public toDescribeBatchInferenceJob() {
    return this.to('DescribeBatchInferenceJob');
  }

  /**
   * Grants permission to describe a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html
   */
  public toDescribeCampaign() {
    return this.to('DescribeCampaign');
  }

  /**
   * Grants permission to describe a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to describe a dataset export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html
   */
  public toDescribeDatasetExportJob() {
    return this.to('DescribeDatasetExportJob');
  }

  /**
   * Grants permission to describe a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    return this.to('DescribeDatasetGroup');
  }

  /**
   * Grants permission to describe a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    return this.to('DescribeDatasetImportJob');
  }

  /**
   * Grants permission to describe an event tracker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html
   */
  public toDescribeEventTracker() {
    return this.to('DescribeEventTracker');
  }

  /**
   * Grants permission to describe a feature transformation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFeatureTransformation.html
   */
  public toDescribeFeatureTransformation() {
    return this.to('DescribeFeatureTransformation');
  }

  /**
   * Grants permission to describe a filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFilter.html
   */
  public toDescribeFilter() {
    return this.to('DescribeFilter');
  }

  /**
   * Grants permission to describe a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html
   */
  public toDescribeRecipe() {
    return this.to('DescribeRecipe');
  }

  /**
   * Grants permission to describe a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html
   */
  public toDescribeSchema() {
    return this.to('DescribeSchema');
  }

  /**
   * Grants permission to describe a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html
   */
  public toDescribeSolution() {
    return this.to('DescribeSolution');
  }

  /**
   * Grants permission to describe a version of a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html
   */
  public toDescribeSolutionVersion() {
    return this.to('DescribeSolutionVersion');
  }

  /**
   * Grants permission to get a re-ranked list of recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html
   */
  public toGetPersonalizedRanking() {
    return this.to('GetPersonalizedRanking');
  }

  /**
   * Grants permission to get a list of recommendations from a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html
   */
  public toGetRecommendations() {
    return this.to('GetRecommendations');
  }

  /**
   * Grants permission to get metrics for a solution version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html
   */
  public toGetSolutionMetrics() {
    return this.to('GetSolutionMetrics');
  }

  /**
   * Grants permission to list batch inference jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html
   */
  public toListBatchInferenceJobs() {
    return this.to('ListBatchInferenceJobs');
  }

  /**
   * Grants permission to list campaigns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html
   */
  public toListCampaigns() {
    return this.to('ListCampaigns');
  }

  /**
   * Grants permission to list dataset export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetExportJobs.html
   */
  public toListDatasetExportJobs() {
    return this.to('ListDatasetExportJobs');
  }

  /**
   * Grants permission to list dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    return this.to('ListDatasetGroups');
  }

  /**
   * Grants permission to list dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    return this.to('ListDatasetImportJobs');
  }

  /**
   * Grants permission to list datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to list event trackers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html
   */
  public toListEventTrackers() {
    return this.to('ListEventTrackers');
  }

  /**
   * Grants permission to list filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListFilters.html
   */
  public toListFilters() {
    return this.to('ListFilters');
  }

  /**
   * Grants permission to list recipes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecipes.html
   */
  public toListRecipes() {
    return this.to('ListRecipes');
  }

  /**
   * Grants permission to list schemas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to list versions of a solution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html
   */
  public toListSolutionVersions() {
    return this.to('ListSolutionVersions');
  }

  /**
   * Grants permission to list solutions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html
   */
  public toListSolutions() {
    return this.to('ListSolutions');
  }

  /**
   * Grants permission to put real time event data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  /**
   * Grants permission to ingest Items data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutItems.html
   */
  public toPutItems() {
    return this.to('PutItems');
  }

  /**
   * Grants permission to ingest Users data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutUsers.html
   */
  public toPutUsers() {
    return this.to('PutUsers');
  }

  /**
   * Grants permission to stop a solution version creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_StopSolutionVersionCreation.html
   */
  public toStopSolutionVersionCreation() {
    return this.to('StopSolutionVersionCreation');
  }

  /**
   * Grants permission to update a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBatchInferenceJob',
      'CreateCampaign',
      'CreateDataset',
      'CreateDatasetExportJob',
      'CreateDatasetGroup',
      'CreateDatasetImportJob',
      'CreateEventTracker',
      'CreateFilter',
      'CreateSchema',
      'CreateSolution',
      'CreateSolutionVersion',
      'DeleteCampaign',
      'DeleteDataset',
      'DeleteDatasetGroup',
      'DeleteEventTracker',
      'DeleteFilter',
      'DeleteSchema',
      'DeleteSolution',
      'PutEvents',
      'PutItems',
      'PutUsers',
      'StopSolutionVersionCreation',
      'UpdateCampaign'
    ],
    Read: [
      'DescribeAlgorithm',
      'DescribeBatchInferenceJob',
      'DescribeCampaign',
      'DescribeDataset',
      'DescribeDatasetExportJob',
      'DescribeDatasetGroup',
      'DescribeDatasetImportJob',
      'DescribeEventTracker',
      'DescribeFeatureTransformation',
      'DescribeFilter',
      'DescribeRecipe',
      'DescribeSchema',
      'DescribeSolution',
      'DescribeSolutionVersion',
      'GetPersonalizedRanking',
      'GetRecommendations',
      'GetSolutionMetrics'
    ],
    List: [
      'ListBatchInferenceJobs',
      'ListCampaigns',
      'ListDatasetExportJobs',
      'ListDatasetGroups',
      'ListDatasetImportJobs',
      'ListDatasets',
      'ListEventTrackers',
      'ListFilters',
      'ListRecipes',
      'ListSchemas',
      'ListSolutionVersions',
      'ListSolutions'
    ]
  };

  /**
   * Adds a resource of type schema to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSchema(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:schema/${ resourceId }`);
  }

  /**
   * Adds a resource of type featureTransformation to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFeatureTransformation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:feature-transformation/${ resourceId }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:dataset/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetGroup to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatasetGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:dataset-group/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetImportJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatasetImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:dataset-import-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetExportJob to the statement
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/export-data.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatasetExportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:dataset-export-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type solution to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSolution(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:solution/${ resourceId }`);
  }

  /**
   * Adds a resource of type campaign to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCampaign(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:campaign/${ resourceId }`);
  }

  /**
   * Adds a resource of type eventTracker to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventTracker(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:event-tracker/${ resourceId }`);
  }

  /**
   * Adds a resource of type recipe to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRecipe(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:recipe/${ resourceId }`);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:algorithm/${ resourceId }`);
  }

  /**
   * Adds a resource of type batchInferenceJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBatchInferenceJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:batch-inference-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type filter to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFilter(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:personalize:${ region || '*' }:${ account || '*' }:filter/${ resourceId }`);
  }
}
