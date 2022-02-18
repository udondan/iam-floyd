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
   * Grants permission to create an experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_CreateExperiment.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/API_CreateFeature.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/API_CreateLaunch.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_DeleteExperiment.html
   */
  public toDeleteExperiment() {
    return this.to('DeleteExperiment');
  }

  /**
   * Grants permission to delete a feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_DeleteFeature.html
   */
  public toDeleteFeature() {
    return this.to('DeleteFeature');
  }

  /**
   * Grants permission to delete a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_DeleteLaunch.html
   */
  public toDeleteLaunch() {
    return this.to('DeleteLaunch');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to get experiment details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_GetExperiment.html
   */
  public toGetExperiment() {
    return this.to('GetExperiment');
  }

  /**
   * Grants permission to get experiment result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_GetExperimentResults.html
   */
  public toGetExperimentResults() {
    return this.to('GetExperimentResults');
  }

  /**
   * Grants permission to get feature details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_GetFeature.html
   */
  public toGetFeature() {
    return this.to('GetFeature');
  }

  /**
   * Grants permission to get launch details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_GetLaunch.html
   */
  public toGetLaunch() {
    return this.to('GetLaunch');
  }

  /**
   * Grants permission to get project details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_GetProject.html
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to list experiments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_ListExperiments.html
   */
  public toListExperiments() {
    return this.to('ListExperiments');
  }

  /**
   * Grants permission to list features
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_ListFeatures.html
   */
  public toListFeatures() {
    return this.to('ListFeatures');
  }

  /**
   * Grants permission to list launches
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_ListLaunches.html
   */
  public toListLaunches() {
    return this.to('ListLaunches');
  }

  /**
   * Grants permission to list projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list tags for resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_StartExperiment.html
   */
  public toStartExperiment() {
    return this.to('StartExperiment');
  }

  /**
   * Grants permission to start a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_StartLaunch.html
   */
  public toStartLaunch() {
    return this.to('StartLaunch');
  }

  /**
   * Grants permission to stop an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_StopExperiment.html
   */
  public toStopExperiment() {
    return this.to('StopExperiment');
  }

  /**
   * Grants permission to stop a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_StopLaunch.html
   */
  public toStopLaunch() {
    return this.to('StopLaunch');
  }

  /**
   * Grants permission to tag resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UpdateExperiment.html
   */
  public toUpdateExperiment() {
    return this.to('UpdateExperiment');
  }

  /**
   * Grants permission to update feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UpdateFeature.html
   */
  public toUpdateFeature() {
    return this.to('UpdateFeature');
  }

  /**
   * Grants permission to update a launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UpdateLaunch.html
   */
  public toUpdateLaunch() {
    return this.to('UpdateLaunch');
  }

  /**
   * Grants permission to update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to update project data delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evidently/latest/dg/API_UpdateProjectDataDelivery.html
   */
  public toUpdateProjectDataDelivery() {
    return this.to('UpdateProjectDataDelivery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateExperiment',
      'CreateFeature',
      'CreateLaunch',
      'CreateProject',
      'DeleteExperiment',
      'DeleteFeature',
      'DeleteLaunch',
      'DeleteProject',
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
   * https://docs.aws.amazon.com/evidently/latest/dg/projects.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/features.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/experiments.html
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
   * https://docs.aws.amazon.com/evidently/latest/dg/launches.html
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
