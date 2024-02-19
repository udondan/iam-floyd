import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [m2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class M2 extends PolicyStatement {
  public servicePrefix = 'm2';

  /**
   * Statement provider for service [m2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel the execution of a batch job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_CancelBatchJobExecution.html
   */
  public toCancelBatchJobExecution() {
    return this.to('CancelBatchJobExecution');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create a data set import task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html
   */
  public toCreateDataSetImportTask() {
    return this.to('CreateDataSetImportTask');
  }

  /**
   * Grants permission to create a deployment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
   * - elasticloadbalancing:CreateListener
   * - elasticloadbalancing:CreateTargetGroup
   * - elasticloadbalancing:RegisterTargets
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to Create an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:CreateNetworkInterfacePermission
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcs
   * - ec2:ModifyNetworkInterfaceAttribute
   * - elasticfilesystem:DescribeMountTargets
   * - elasticloadbalancing:AddTags
   * - elasticloadbalancing:CreateLoadBalancer
   * - fsx:DescribeFileSystems
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticloadbalancing:DeleteListener
   * - elasticloadbalancing:DeleteTargetGroup
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an application from a runtime environment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticloadbalancing:DeleteListener
   * - elasticloadbalancing:DeleteTargetGroup
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteApplicationFromEnvironment.html
   */
  public toDeleteApplicationFromEnvironment() {
    return this.to('DeleteApplicationFromEnvironment');
  }

  /**
   * Grants permission to delete a runtime environment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticloadbalancing:DeleteLoadBalancer
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to retrieve an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to retrieve an application version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetApplicationVersion.html
   */
  public toGetApplicationVersion() {
    return this.to('GetApplicationVersion');
  }

  /**
   * Grants permission to retrieve a batch job execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetBatchJobExecution.html
   */
  public toGetBatchJobExecution() {
    return this.to('GetBatchJobExecution');
  }

  /**
   * Grants permission to retrieve data set details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDataSetDetails.html
   */
  public toGetDataSetDetails() {
    return this.to('GetDataSetDetails');
  }

  /**
   * Grants permission to retrieve a data set import task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDataSetImportTask.html
   */
  public toGetDataSetImportTask() {
    return this.to('GetDataSetImportTask');
  }

  /**
   * Grants permission to retrieve a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Grants permission to retrieve a runtime environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to create a signed Bluinsights url
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_GetSignedBluinsightsUrl.html
   */
  public toGetSignedBluinsightsUrl() {
    return this.to('GetSignedBluinsightsUrl');
  }

  /**
   * Grants permission to list the versions of an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListApplicationVersions.html
   */
  public toListApplicationVersions() {
    return this.to('ListApplicationVersions');
  }

  /**
   * Grants permission to list applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list batch job definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListBatchJobDefinitions.html
   */
  public toListBatchJobDefinitions() {
    return this.to('ListBatchJobDefinitions');
  }

  /**
   * Grants permission to list executions for a batch job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListBatchJobExecutions.html
   */
  public toListBatchJobExecutions() {
    return this.to('ListBatchJobExecutions');
  }

  /**
   * Grants permission to list data set import history
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDataSetImportHistory.html
   */
  public toListDataSetImportHistory() {
    return this.to('ListDataSetImportHistory');
  }

  /**
   * Grants permission to list data sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDataSets.html
   */
  public toListDataSets() {
    return this.to('ListDataSets');
  }

  /**
   * Grants permission to list deployments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to list engine versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListEngineVersions.html
   */
  public toListEngineVersions() {
    return this.to('ListEngineVersions');
  }

  /**
   * Grants permission to list runtime environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_StartApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Grants permission to start a batch job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_StartBatchJob.html
   */
  public toStartBatchJob() {
    return this.to('StartBatchJob');
  }

  /**
   * Grants permission to stop an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_StopApplication.html
   */
  public toStopApplication() {
    return this.to('StopApplication');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update a runtime environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/m2/latest/APIReference/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelBatchJobExecution',
      'CreateApplication',
      'CreateDataSetImportTask',
      'CreateDeployment',
      'CreateEnvironment',
      'DeleteApplication',
      'DeleteApplicationFromEnvironment',
      'DeleteEnvironment',
      'StartApplication',
      'StartBatchJob',
      'StopApplication',
      'UpdateApplication',
      'UpdateEnvironment'
    ],
    Read: [
      'GetApplication',
      'GetApplicationVersion',
      'GetBatchJobExecution',
      'GetDataSetDetails',
      'GetDataSetImportTask',
      'GetDeployment',
      'GetEnvironment',
      'GetSignedBluinsightsUrl',
      'ListApplicationVersions',
      'ListBatchJobDefinitions',
      'ListBatchJobExecutions',
      'ListDataSetImportHistory',
      'ListDataSets',
      'ListDeployments',
      'ListEngineVersions',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListEnvironments'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concept-m2.html#application-concept
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:m2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:app/${ applicationId }`);
  }

  /**
   * Adds a resource of type Environment to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concept-m2.html#environment-concept
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:m2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:env/${ environmentId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateEnvironment()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Application
   * - Environment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateEnvironment()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
