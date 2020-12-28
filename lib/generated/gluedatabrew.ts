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
    return this.to('BatchDeleteRecipeVersion');
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
    return this.to('CreateDataset');
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
    return this.to('CreateProfileJob');
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
    return this.to('CreateProject');
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
    return this.to('CreateRecipe');
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
    return this.to('CreateRecipeJob');
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
    return this.to('CreateSchedule');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a recipe version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteRecipeVersion.html
   */
  public toDeleteRecipeVersion() {
    return this.to('DeleteRecipeVersion');
  }

  /**
   * Grants permission to delete a schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteSchedule.html
   */
  public toDeleteSchedule() {
    return this.to('DeleteSchedule');
  }

  /**
   * Grants permission to view details about a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to view details about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeJob.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Grants permission to view details about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to view details about a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeRecipe.html
   */
  public toDescribeRecipe() {
    return this.to('DescribeRecipe');
  }

  /**
   * Grants permission to view details about a schedule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeSchedule.html
   */
  public toDescribeSchedule() {
    return this.to('DescribeSchedule');
  }

  /**
   * Grants permission to list datasets in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to list job runs for a given job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobRuns.html
   */
  public toListJobRuns() {
    return this.to('ListJobRuns');
  }

  /**
   * Grants permission to list jobs in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list projects in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list versions in your recipe
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipeVersions.html
   */
  public toListRecipeVersions() {
    return this.to('ListRecipeVersions');
  }

  /**
   * Grants permission to list recipes in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipes.html
   */
  public toListRecipes() {
    return this.to('ListRecipes');
  }

  /**
   * Grants permission to list schedules in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListSchedules.html
   */
  public toListSchedules() {
    return this.to('ListSchedules');
  }

  /**
   * Grants permission to retrieve tags associated with a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish a major verison of a recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_PublishRecipe.html
   */
  public toPublishRecipe() {
    return this.to('PublishRecipe');
  }

  /**
   * Grants permission to submit an action to the interactive session for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_SendProjectSessionAction.html
   */
  public toSendProjectSessionAction() {
    return this.to('SendProjectSessionAction');
  }

  /**
   * Grants permission to start running a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StartJobRun.html
   */
  public toStartJobRun() {
    return this.to('StartJobRun');
  }

  /**
   * Grants permission to start an interactive session for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StartProjectSession.html
   */
  public toStartProjectSession() {
    return this.to('StartProjectSession');
  }

  /**
   * Grants permission to stop a job run for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_StopJobRun.html
   */
  public toStopJobRun() {
    return this.to('StopJobRun');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateDataset.html
   */
  public toUpdateDataset() {
    return this.to('UpdateDataset');
  }

  /**
   * Grants permission to modify a profile job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProfileJob.html
   */
  public toUpdateProfileJob() {
    return this.to('UpdateProfileJob');
  }

  /**
   * Grants permission to modify a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to modify a recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipe.html
   */
  public toUpdateRecipe() {
    return this.to('UpdateRecipe');
  }

  /**
   * Grants permission to modify a recipe job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipeJob.html
   */
  public toUpdateRecipeJob() {
    return this.to('UpdateRecipeJob');
  }

  /**
   * Grants permission to modify a schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateSchedule.html
   */
  public toUpdateSchedule() {
    return this.to('UpdateSchedule');
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
