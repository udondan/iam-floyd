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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a batch inference job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateBatchInferenceJob.html
   */
  public toCreateBatchInferenceJob() {
    this.to('personalize:CreateBatchInferenceJob');
    return this;
  }

  /**
   * Creates a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateCampaign.html
   */
  public toCreateCampaign() {
    this.to('personalize:CreateCampaign');
    return this;
  }

  /**
   * Creates a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDataset.html
   */
  public toCreateDataset() {
    this.to('personalize:CreateDataset');
    return this;
  }

  /**
   * Creates a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html
   */
  public toCreateDatasetGroup() {
    this.to('personalize:CreateDatasetGroup');
    return this;
  }

  /**
   * Creates a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html
   */
  public toCreateDatasetImportJob() {
    this.to('personalize:CreateDatasetImportJob');
    return this;
  }

  /**
   * Creates an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateEventTracker.html
   */
  public toCreateEventTracker() {
    this.to('personalize:CreateEventTracker');
    return this;
  }

  /**
   * Creates a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateFilter.html
   */
  public toCreateFilter() {
    this.to('personalize:CreateFilter');
    return this;
  }

  /**
   * Creates a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSchema.html
   */
  public toCreateSchema() {
    this.to('personalize:CreateSchema');
    return this;
  }

  /**
   * Creates a solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolution.html
   */
  public toCreateSolution() {
    this.to('personalize:CreateSolution');
    return this;
  }

  /**
   * Creates a solution version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolutionVersion.html
   */
  public toCreateSolutionVersion() {
    this.to('personalize:CreateSolutionVersion');
    return this;
  }

  /**
   * Deletes a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteCampaign.html
   */
  public toDeleteCampaign() {
    this.to('personalize:DeleteCampaign');
    return this;
  }

  /**
   * Deletes a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('personalize:DeleteDataset');
    return this;
  }

  /**
   * Deletes a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    this.to('personalize:DeleteDatasetGroup');
    return this;
  }

  /**
   * Deletes an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteEventTracker.html
   */
  public toDeleteEventTracker() {
    this.to('personalize:DeleteEventTracker');
    return this;
  }

  /**
   * Deletes a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteFilter.html
   */
  public toDeleteFilter() {
    this.to('personalize:DeleteFilter');
    return this;
  }

  /**
   * Deletes a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSchema.html
   */
  public toDeleteSchema() {
    this.to('personalize:DeleteSchema');
    return this;
  }

  /**
   * Deletes a solution including all versions of the solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSolution.html
   */
  public toDeleteSolution() {
    this.to('personalize:DeleteSolution');
    return this;
  }

  /**
   * Describes an algorithm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    this.to('personalize:DescribeAlgorithm');
    return this;
  }

  /**
   * Describes a batch inference job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeBatchInferenceJob.html
   */
  public toDescribeBatchInferenceJob() {
    this.to('personalize:DescribeBatchInferenceJob');
    return this;
  }

  /**
   * Describes a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeCampaign.html
   */
  public toDescribeCampaign() {
    this.to('personalize:DescribeCampaign');
    return this;
  }

  /**
   * Describes a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('personalize:DescribeDataset');
    return this;
  }

  /**
   * Describes a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    this.to('personalize:DescribeDatasetGroup');
    return this;
  }

  /**
   * Describes a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    this.to('personalize:DescribeDatasetImportJob');
    return this;
  }

  /**
   * Describes an event tracker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeEventTracker.html
   */
  public toDescribeEventTracker() {
    this.to('personalize:DescribeEventTracker');
    return this;
  }

  /**
   * Describes a feature transformation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFeatureTransformation.html
   */
  public toDescribeFeatureTransformation() {
    this.to('personalize:DescribeFeatureTransformation');
    return this;
  }

  /**
   * Describes a filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFilter.html
   */
  public toDescribeFilter() {
    this.to('personalize:DescribeFilter');
    return this;
  }

  /**
   * Describes a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeRecipe.html
   */
  public toDescribeRecipe() {
    this.to('personalize:DescribeRecipe');
    return this;
  }

  /**
   * Describes a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSchema.html
   */
  public toDescribeSchema() {
    this.to('personalize:DescribeSchema');
    return this;
  }

  /**
   * Describes a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolution.html
   */
  public toDescribeSolution() {
    this.to('personalize:DescribeSolution');
    return this;
  }

  /**
   * Describes a version of a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolutionVersion.html
   */
  public toDescribeSolutionVersion() {
    this.to('personalize:DescribeSolutionVersion');
    return this;
  }

  /**
   * Gets a re-ranked list of recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetPersonalizedRanking.html
   */
  public toGetPersonalizedRanking() {
    this.to('personalize:GetPersonalizedRanking');
    return this;
  }

  /**
   * Gets a list of recommendations from a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetRecommendations.html
   */
  public toGetRecommendations() {
    this.to('personalize:GetRecommendations');
    return this;
  }

  /**
   * Gets metrics for a solution version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_GetSolutionMetrics.html
   */
  public toGetSolutionMetrics() {
    this.to('personalize:GetSolutionMetrics');
    return this;
  }

  /**
   * Lists batch inference jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListBatchInferenceJobs.html
   */
  public toListBatchInferenceJobs() {
    this.to('personalize:ListBatchInferenceJobs');
    return this;
  }

  /**
   * Lists campaigns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListCampaigns.html
   */
  public toListCampaigns() {
    this.to('personalize:ListCampaigns');
    return this;
  }

  /**
   * Lists dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    this.to('personalize:ListDatasetGroups');
    return this;
  }

  /**
   * Lists dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    this.to('personalize:ListDatasetImportJobs');
    return this;
  }

  /**
   * Lists datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasets.html
   */
  public toListDatasets() {
    this.to('personalize:ListDatasets');
    return this;
  }

  /**
   * Lists event trackers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListEventTrackers.html
   */
  public toListEventTrackers() {
    this.to('personalize:ListEventTrackers');
    return this;
  }

  /**
   * Lists filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListFilters.html
   */
  public toListFilters() {
    this.to('personalize:ListFilters');
    return this;
  }

  /**
   * Lists recipes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListRecipes.html
   */
  public toListRecipes() {
    this.to('personalize:ListRecipes');
    return this;
  }

  /**
   * Lists schemas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSchemas.html
   */
  public toListSchemas() {
    this.to('personalize:ListSchemas');
    return this;
  }

  /**
   * Lists versions of a solution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutionVersions.html
   */
  public toListSolutionVersions() {
    this.to('personalize:ListSolutionVersions');
    return this;
  }

  /**
   * Lists solutions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutions.html
   */
  public toListSolutions() {
    this.to('personalize:ListSolutions');
    return this;
  }

  /**
   * Records real time event data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UBS_PutEvents.html
   */
  public toPutEvents() {
    this.to('personalize:PutEvents');
    return this;
  }

  /**
   * Ingest Items data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UBS_PutItems.html
   */
  public toPutItems() {
    this.to('personalize:PutItems');
    return this;
  }

  /**
   * Ingest Users data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UBS_PutUsers.html
   */
  public toPutUsers() {
    this.to('personalize:PutUsers');
    return this;
  }

  /**
   * Updates a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UpdateCampaign.html
   */
  public toUpdateCampaign() {
    this.to('personalize:UpdateCampaign');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateBatchInferenceJob",
      "CreateCampaign",
      "CreateDataset",
      "CreateDatasetGroup",
      "CreateDatasetImportJob",
      "CreateEventTracker",
      "CreateFilter",
      "CreateSchema",
      "CreateSolution",
      "CreateSolutionVersion",
      "DeleteCampaign",
      "DeleteDataset",
      "DeleteDatasetGroup",
      "DeleteEventTracker",
      "DeleteFilter",
      "DeleteSchema",
      "DeleteSolution",
      "PutEvents",
      "PutItems",
      "PutUsers",
      "UpdateCampaign"
    ],
    "Read": [
      "DescribeAlgorithm",
      "DescribeBatchInferenceJob",
      "DescribeCampaign",
      "DescribeDataset",
      "DescribeDatasetGroup",
      "DescribeDatasetImportJob",
      "DescribeEventTracker",
      "DescribeFeatureTransformation",
      "DescribeFilter",
      "DescribeRecipe",
      "DescribeSchema",
      "DescribeSolution",
      "DescribeSolutionVersion",
      "GetPersonalizedRanking",
      "GetRecommendations",
      "GetSolutionMetrics"
    ],
    "List": [
      "ListBatchInferenceJobs",
      "ListCampaigns",
      "ListDatasetGroups",
      "ListDatasetImportJobs",
      "ListDatasets",
      "ListEventTrackers",
      "ListFilters",
      "ListRecipes",
      "ListSchemas",
      "ListSolutionVersions",
      "ListSolutions"
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:schema/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:feature-transformation/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset-group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset-import-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:solution/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:campaign/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:event-tracker/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:recipe/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:algorithm/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:batch-inference-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:filter/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type PersonalizeActionsWrite = 'CreateBatchInferenceJob' | 'CreateCampaign' | 'CreateDataset' | 'CreateDatasetGroup' | 'CreateDatasetImportJob' | 'CreateEventTracker' | 'CreateFilter' | 'CreateSchema' | 'CreateSolution' | 'CreateSolutionVersion' | 'DeleteCampaign' | 'DeleteDataset' | 'DeleteDatasetGroup' | 'DeleteEventTracker' | 'DeleteFilter' | 'DeleteSchema' | 'DeleteSolution' | 'PutEvents' | 'PutItems' | 'PutUsers' | 'UpdateCampaign';
export type PersonalizeActionsRead = 'DescribeAlgorithm' | 'DescribeBatchInferenceJob' | 'DescribeCampaign' | 'DescribeDataset' | 'DescribeDatasetGroup' | 'DescribeDatasetImportJob' | 'DescribeEventTracker' | 'DescribeFeatureTransformation' | 'DescribeFilter' | 'DescribeRecipe' | 'DescribeSchema' | 'DescribeSolution' | 'DescribeSolutionVersion' | 'GetPersonalizedRanking' | 'GetRecommendations' | 'GetSolutionMetrics';
export type PersonalizeActionsList = 'ListBatchInferenceJobs' | 'ListCampaigns' | 'ListDatasetGroups' | 'ListDatasetImportJobs' | 'ListDatasets' | 'ListEventTrackers' | 'ListFilters' | 'ListRecipes' | 'ListSchemas' | 'ListSolutionVersions' | 'ListSolutions';
export type PersonalizeActions = PersonalizeActionsWrite | PersonalizeActionsRead | PersonalizeActionsList;
