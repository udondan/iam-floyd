import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launch-wizard.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launch-wizard.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to delete a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_DeleteDeployment.html
   */
  public toDeleteDeployment() {
    return this.to('DeleteDeployment');
  }

  /**
   * Grants permission to get a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Grants permission to get a version of a deployment pattern
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetDeploymentPatternVersion.html
   */
  public toGetDeploymentPatternVersion() {
    return this.to('GetDeploymentPatternVersion');
  }

  /**
   * Grants permission to get a workload
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkload.html
   */
  public toGetWorkload() {
    return this.to('GetWorkload');
  }

  /**
   * Grants permission to get a deployment pattern
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkloadDeploymentPattern.html
   */
  public toGetWorkloadDeploymentPattern() {
    return this.to('GetWorkloadDeploymentPattern');
  }

  /**
   * Grants permission to list the events that occured during a deployment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListDeploymentEvents.html
   */
  public toListDeploymentEvents() {
    return this.to('ListDeploymentEvents');
  }

  /**
   * Grants permission to list the versions of a deployment pattern
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListDeploymentPatternVersions.html
   */
  public toListDeploymentPatternVersions() {
    return this.to('ListDeploymentPatternVersions');
  }

  /**
   * Grants permission to list deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to list tags for a LaunchWizard resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the deployment patterns of a workload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html
   */
  public toListWorkloadDeploymentPatterns() {
    return this.to('ListWorkloadDeploymentPatterns');
  }

  /**
   * Grants permission to list workloads
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html
   */
  public toListWorkloads() {
    return this.to('ListWorkloads');
  }

  /**
   * Grants permission to tag a LaunchWizard resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a LaunchWizard resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_UpdateDeployment.html
   */
  public toUpdateDeployment() {
    return this.to('UpdateDeployment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDeployment',
      'DeleteDeployment',
      'TagResource',
      'UntagResource',
      'UpdateDeployment'
    ],
    Read: [
      'GetDeployment',
      'GetDeploymentPatternVersion',
      'GetWorkload',
      'GetWorkloadDeploymentPattern',
      'ListTagsForResource'
    ],
    List: [
      'ListDeploymentEvents',
      'ListDeploymentPatternVersions',
      'ListDeployments',
      'ListWorkloadDeploymentPatterns',
      'ListWorkloads'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/launchwizard/Resources/Deployment.html
   *
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(deploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:launchwizard:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:deployment/${ deploymentId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDeployment()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateDeployment()
   * - .toDeleteDeployment()
   * - .toGetDeployment()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDeployment()
   *
   * Applies to resource types:
   * - deployment
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
   * - .toCreateDeployment()
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
