import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to create a segment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html
   */
  public toCreateSegment() {
    return this.to('CreateSegment');
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
   * Grants permission to delete a segment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteSegment.html
   */
  public toDeleteSegment() {
    return this.to('DeleteSegment');
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
   * Grants permission to get segment details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetSegment.html
   */
  public toGetSegment() {
    return this.to('GetSegment');
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
   * Grants permission to list resources referencing a segment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListSegmentReferences.html
   */
  public toListSegmentReferences() {
    return this.to('ListSegmentReferences');
  }

  /**
   * Grants permission to list segments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListSegments.html
   */
  public toListSegments() {
    return this.to('ListSegments');
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
   * Grants permission to test a segment pattern
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TestSegmentPattern.html
   */
  public toTestSegmentPattern() {
    return this.to('TestSegmentPattern');
  }

  /**
   * Grants permission to untag resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
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
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
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
      'CreateSegment',
      'DeleteExperiment',
      'DeleteFeature',
      'DeleteLaunch',
      'DeleteProject',
      'DeleteSegment',
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
      'GetSegment',
      'ListExperiments',
      'ListFeatures',
      'ListLaunches',
      'ListProjects',
      'ListSegmentReferences',
      'ListSegments',
      'ListTagsForResource',
      'TestSegmentPattern'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Project to the statement
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_Project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:evidently:${ region || this.defaultRegion }:${ account || this.defaultAccount }:project/${ projectName }`);
  }

  /**
   * Adds a resource of type Feature to the statement
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_Feature.html
   *
   * @param projectName - Identifier for the projectName.
   * @param featureName - Identifier for the featureName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFeature(projectName: string, featureName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:evidently:${ region || this.defaultRegion }:${ account || this.defaultAccount }:project/${ projectName }/feature/${ featureName }`);
  }

  /**
   * Adds a resource of type Experiment to the statement
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_Experiment.html
   *
   * @param projectName - Identifier for the projectName.
   * @param experimentName - Identifier for the experimentName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperiment(projectName: string, experimentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:evidently:${ region || this.defaultRegion }:${ account || this.defaultAccount }:project/${ projectName }/experiment/${ experimentName }`);
  }

  /**
   * Adds a resource of type Launch to the statement
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_Launch.html
   *
   * @param projectName - Identifier for the projectName.
   * @param launchName - Identifier for the launchName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLaunch(projectName: string, launchName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:evidently:${ region || this.defaultRegion }:${ account || this.defaultAccount }:project/${ projectName }/launch/${ launchName }`);
  }

  /**
   * Adds a resource of type Segment to the statement
   *
   * https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_Segment.html
   *
   * @param segmentName - Identifier for the segmentName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSegment(segmentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:evidently:${ region || this.defaultRegion }:${ account || this.defaultAccount }:segment/${ segmentName }`);
  }

  /**
   * Filters access by the tags that are passed the request on behalf of the IAM principal
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateExperiment()
   * - .toCreateFeature()
   * - .toCreateLaunch()
   * - .toCreateProject()
   * - .toCreateSegment()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource that make the request on behalf of the IAM principal
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to resource types:
   * - Project
   * - Feature
   * - Experiment
   * - Launch
   * - Segment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request on behalf of the IAM principal
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateExperiment()
   * - .toCreateFeature()
   * - .toCreateLaunch()
   * - .toCreateProject()
   * - .toCreateSegment()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
