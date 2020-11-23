import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [databrew](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgluedatabrew.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Databrew extends PolicyStatement {
  public servicePrefix = 'databrew';

  /**
   * Statement provider for service [databrew](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgluedatabrew.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete one or more recipe versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_BatchDeleteRecipeVersion.html
   */
  public toBatchDeleteRecipeVersion() {
    this.to('BatchDeleteRecipeVersion');
    return this;
  }

  /**
   * Grants permission to create a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateDataset.html
   */
  public toCreateDataset() {
    this.to('CreateDataset');
    return this;
  }

  /**
   * Grants permission to create a profile job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateProfileJob.html
   */
  public toCreateProfileJob() {
    this.to('CreateProfileJob');
    return this;
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
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    this.to('CreateProject');
    return this;
  }

  /**
   * Grants permission to create a recipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateRecipe.html
   */
  public toCreateRecipe() {
    this.to('CreateRecipe');
    return this;
  }

  /**
   * Grants permission to create a recipe job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateRecipeJob.html
   */
  public toCreateRecipeJob() {
    this.to('CreateRecipeJob');
    return this;
  }

  /**
   * Grants permission to create a schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_CreateSchedule.html
   */
  public toCreateSchedule() {
    this.to('CreateSchedule');
    return this;
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('DeleteDataset');
    return this;
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteJob.html
   */
  public toDeleteJob() {
    this.to('DeleteJob');
    return this;
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('DeleteProject');
    return this;
  }

  /**
   * Grants permission to delete a recipe version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteRecipeVersion.html
   */
  public toDeleteRecipeVersion() {
    this.to('DeleteRecipeVersion');
    return this;
  }

  /**
   * Grants permission to delete a schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteSchedule.html
   */
  public toDeleteSchedule() {
    this.to('DeleteSchedule');
    return this;
  }

  /**
   * Grants permission to view details about a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('DescribeDataset');
    return this;
  }

  /**
   * Grants permission to view details about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeJob.html
   */
  public toDescribeJob() {
    this.to('DescribeJob');
    return this;
  }

  /**
   * Grants permission to view details about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.to('DescribeProject');
    return this;
  }

  /**
   * Grants permission to view details about a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeRecipe.html
   */
  public toDescribeRecipe() {
    this.to('DescribeRecipe');
    return this;
  }

  /**
   * Grants permission to view details about a schedule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeSchedule.html
   */
  public toDescribeSchedule() {
    this.to('DescribeSchedule');
    return this;
  }

  /**
   * Grants permission to list datasets in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListDatasets.html
   */
  public toListDatasets() {
    this.to('ListDatasets');
    return this;
  }

  /**
   * Grants permission to list job runs for a given job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobRuns.html
   */
  public toListJobRuns() {
    this.to('ListJobRuns');
    return this;
  }

  /**
   * Grants permission to list jobs in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobs.html
   */
  public toListJobs() {
    this.to('ListJobs');
    return this;
  }

  /**
   * Grants permission to list projects in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListProjects.html
   */
  public toListProjects() {
    this.to('ListProjects');
    return this;
  }

  /**
   * Grants permission to list versions in your recipe
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipeVersions.html
   */
  public toListRecipeVersions() {
    this.to('ListRecipeVersions');
    return this;
  }

  /**
   * Grants permission to list recipes in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipes.html
   */
  public toListRecipes() {
    this.to('ListRecipes');
    return this;
  }

  /**
   * Grants permission to list schedules in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListSchedules.html
   */
  public toListSchedules() {
    this.to('ListSchedules');
    return this;
  }

  /**
   * Grants permission to retrieve tags associated with a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to publish a major verison of a recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_PublishRecipe.html
   */
  public toPublishRecipe() {
    this.to('PublishRecipe');
    return this;
  }

  /**
   * Grants permission to submit an action to the interactive session for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_SendProjectSessionAction.html
   */
  public toSendProjectSessionAction() {
    this.to('SendProjectSessionAction');
    return this;
  }

  /**
   * Grants permission to start running a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StartJobRun.html
   */
  public toStartJobRun() {
    this.to('StartJobRun');
    return this;
  }

  /**
   * Grants permission to start an interactive session for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StartProjectSession.html
   */
  public toStartProjectSession() {
    this.to('StartProjectSession');
    return this;
  }

  /**
   * Grants permission to stop a job run for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StopJobRun.html
   */
  public toStopJobRun() {
    this.to('StopJobRun');
    return this;
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to modify a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateDataset.html
   */
  public toUpdateDataset() {
    this.to('UpdateDataset');
    return this;
  }

  /**
   * Grants permission to modify a profile job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProfileJob.html
   */
  public toUpdateProfileJob() {
    this.to('UpdateProfileJob');
    return this;
  }

  /**
   * Grants permission to modify a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.to('UpdateProject');
    return this;
  }

  /**
   * Grants permission to modify a recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipe.html
   */
  public toUpdateRecipe() {
    this.to('UpdateRecipe');
    return this;
  }

  /**
   * Grants permission to modify a recipe job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipeJob.html
   */
  public toUpdateRecipeJob() {
    this.to('UpdateRecipeJob');
    return this;
  }

  /**
   * Grants permission to modify a schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateSchedule.html
   */
  public toUpdateSchedule() {
    this.to('UpdateSchedule');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDeleteRecipeVersion",
      "CreateDataset",
      "CreateProfileJob",
      "CreateProject",
      "CreateRecipe",
      "CreateRecipeJob",
      "CreateSchedule",
      "DeleteDataset",
      "DeleteJob",
      "DeleteProject",
      "DeleteRecipeVersion",
      "DeleteSchedule",
      "PublishRecipe",
      "SendProjectSessionAction",
      "StartJobRun",
      "StartProjectSession",
      "StopJobRun",
      "UpdateDataset",
      "UpdateProfileJob",
      "UpdateProject",
      "UpdateRecipe",
      "UpdateRecipeJob",
      "UpdateSchedule"
    ],
    "Read": [
      "DescribeDataset",
      "DescribeJob",
      "DescribeProject",
      "DescribeRecipe",
      "DescribeSchedule"
    ],
    "List": [
      "ListDatasets",
      "ListJobRuns",
      "ListJobs",
      "ListProjects",
      "ListRecipeVersions",
      "ListRecipes",
      "ListSchedules",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Project to the statement
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/projects.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:databrew::${Account}:project/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Dataset to the statement
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/datasets.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:databrew::${Account}:dataset/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Recipe to the statement
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/recipes.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecipe(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:databrew::${Account}:recipe/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Job to the statement
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/jobs.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:databrew::${Account}:job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Schedule to the statement
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/jobs.html#jobs.scheduling
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchedule(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:databrew::${Account}:schedule/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
