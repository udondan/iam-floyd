import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [evidently](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Evidently extends PolicyStatement {
  public servicePrefix = 'evidently';

  /**
   * Statement provider for service [evidently](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to send a batched evaluate feature request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_BatchEvaluateFeature.html
   */
  public toBatchEvaluateFeature() {
    return this.to('BatchEvaluateFeature');
  }

  /**
   * Grants permission to create an experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html
   */
  public toCreateExperiment() {
    return this.to('CreateExperiment');
  }

  /**
   * Grants permission to create a feature
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateFeature.html
   */
  public toCreateFeature() {
    return this.to('CreateFeature');
  }

  /**
   * Grants permission to create a launch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html
   */
  public toCreateLaunch() {
    return this.to('CreateLaunch');
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
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteExperiment.html
   */
  public toDeleteExperiment() {
    return this.to('DeleteExperiment');
  }

  /**
   * Grants permission to delete a feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html
   */
  public toDeleteFeature() {
    return this.to('DeleteFeature');
  }

  /**
   * Grants permission to delete a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteLaunch.html
   */
  public toDeleteLaunch() {
    return this.to('DeleteLaunch');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to send an evaluate feature request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html
   */
  public toEvaluateFeature() {
    return this.to('EvaluateFeature');
  }

  /**
   * Grants permission to get experiment details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperiment.html
   */
  public toGetExperiment() {
    return this.to('GetExperiment');
  }

  /**
   * Grants permission to get experiment result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperimentResults.html
   */
  public toGetExperimentResults() {
    return this.to('GetExperimentResults');
  }

  /**
   * Grants permission to get feature details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetFeature.html
   */
  public toGetFeature() {
    return this.to('GetFeature');
  }

  /**
   * Grants permission to get launch details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetLaunch.html
   */
  public toGetLaunch() {
    return this.to('GetLaunch');
  }

  /**
   * Grants permission to get project details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetProject.html
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to list experiments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html
   */
  public toListExperiments() {
    return this.to('ListExperiments');
  }

  /**
   * Grants permission to list features
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html
   */
  public toListFeatures() {
    return this.to('ListFeatures');
  }

  /**
   * Grants permission to list launches
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html
   */
  public toListLaunches() {
    return this.to('ListLaunches');
  }

  /**
   * Grants permission to list projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list tags for resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to send performance events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_PutProjectEvents.html
   */
  public toPutProjectEvents() {
    return this.to('PutProjectEvents');
  }

  /**
   * Grants permission to start an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartExperiment.html
   */
  public toStartExperiment() {
    return this.to('StartExperiment');
  }

  /**
   * Grants permission to start a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartLaunch.html
   */
  public toStartLaunch() {
    return this.to('StartLaunch');
  }

  /**
   * Grants permission to stop an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html
   */
  public toStopExperiment() {
    return this.to('StopExperiment');
  }

  /**
   * Grants permission to stop a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html
   */
  public toStopLaunch() {
    return this.to('StopLaunch');
  }

  /**
   * Grants permission to tag resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html
   */
  public toUpdateExperiment() {
    return this.to('UpdateExperiment');
  }

  /**
   * Grants permission to update feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html
   */
  public toUpdateFeature() {
    return this.to('UpdateFeature');
  }

  /**
   * Grants permission to update a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html
   */
  public toUpdateLaunch() {
    return this.to('UpdateLaunch');
  }

  /**
   * Grants permission to update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to update project data delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html
   */
  public toUpdateProjectDataDelivery() {
    return this.to('UpdateProjectDataDelivery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchEvaluateFeature',
      'CreateExperiment',
      'CreateFeature',
      'CreateLaunch',
      'CreateProject',
      'DeleteExperiment',
      'DeleteFeature',
      'DeleteLaunch',
      'DeleteProject',
      'EvaluateFeature',
      'PutProjectEvents',
      'StartExperiment',
      'StartLaunch',
      'StopExperiment',
      'StopLaunch',
      'UpdateExperiment',
      'UpdateFeature',
      'UpdateLaunch',
      'UpdateProject',
      'UpdateProjectDataDelivery'
    ],
    Read: [
      'GetExperiment',
      'GetExperimentResults',
      'GetFeature',
      'GetLaunch',
      'GetProject',
      'ListExperiments',
      'ListFeatures',
      'ListLaunches',
      'ListProjects',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Project to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/projects.html
   *
   * @param ownerAccountId - Identifier for the ownerAccountId.
   * @param projectName - Identifier for the projectName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(ownerAccountId: string, projectName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:evidently:${ region || '*' }:${ ownerAccountId }:project/${ projectName }`);
  }

  /**
   * Adds a resource of type Feature to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/features.html
   *
   * @param ownerAccountId - Identifier for the ownerAccountId.
   * @param projectName - Identifier for the projectName.
   * @param featureName - Identifier for the featureName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFeature(ownerAccountId: string, projectName: string, featureName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:evidently:${ region || '*' }:${ ownerAccountId }:project/${ projectName }/feature/${ featureName }`);
  }

  /**
   * Adds a resource of type Experiment to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/experiments.html
   *
   * @param ownerAccountId - Identifier for the ownerAccountId.
   * @param projectName - Identifier for the projectName.
   * @param experimentName - Identifier for the experimentName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperiment(ownerAccountId: string, projectName: string, experimentName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:evidently:${ region || '*' }:${ ownerAccountId }:project/${ projectName }/experiment/${ experimentName }`);
  }

  /**
   * Adds a resource of type Launch to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/launches.html
   *
   * @param ownerAccountId - Identifier for the ownerAccountId.
   * @param projectName - Identifier for the projectName.
   * @param launchName - Identifier for the launchName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLaunch(ownerAccountId: string, projectName: string, launchName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:evidently:${ region || '*' }:${ ownerAccountId }:project/${ projectName }/launch/${ launchName }`);
  }
}
