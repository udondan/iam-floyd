import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslaunchwizard.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslaunchwizard.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an additional node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toCreateAdditionalNode() {
    return this.to('CreateAdditionalNode');
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
   * Grants permission to create an application settings set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toCreateSettingsSet() {
    return this.to('CreateSettingsSet');
  }

  /**
   * Grants permission to delete an additional node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDeleteAdditionalNode() {
    return this.to('DeleteAdditionalNode');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
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
   * Grants permission to delete a settings set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDeleteSettingsSet() {
    return this.to('DeleteSettingsSet');
  }

  /**
   * Grants permission to describe an additional node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeAdditionalNode() {
    return this.to('DescribeAdditionalNode');
  }

  /**
   * Grants permission to describe provisioning applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisionedApp() {
    return this.to('DescribeProvisionedApp');
  }

  /**
   * Grants permission to describe provisioning events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisioningEvents() {
    return this.to('DescribeProvisioningEvents');
  }

  /**
   * Grants permission to describe an application settings set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeSettingsSet() {
    return this.to('DescribeSettingsSet');
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
   * Grants permission to get infrastructure suggestion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetInfrastructureSuggestion() {
    return this.to('GetInfrastructureSuggestion');
  }

  /**
   * Grants permission to get customer's ip address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetIpAddress() {
    return this.to('GetIpAddress');
  }

  /**
   * Grants permission to get resource cost estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetResourceCostEstimate() {
    return this.to('GetResourceCostEstimate');
  }

  /**
   * Grants permission to get recommendation for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetResourceRecommendation() {
    return this.to('GetResourceRecommendation');
  }

  /**
   * Grants permission to get a settings set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetSettingsSet() {
    return this.to('GetSettingsSet');
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
   * Grants permission to get a workload's asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetWorkloadAsset() {
    return this.to('GetWorkloadAsset');
  }

  /**
   * Grants permission to get workload assets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetWorkloadAssets() {
    return this.to('GetWorkloadAssets');
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
   * Grants permission to list additional nodes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListAdditionalNodes() {
    return this.to('ListAdditionalNodes');
  }

  /**
   * Grants permission to list the allowed resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListAllowedResources() {
    return this.to('ListAllowedResources');
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
   * Grants permission to list provisioning applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListProvisionedApps() {
    return this.to('ListProvisionedApps');
  }

  /**
   * Grants permission to list the cost estimates of resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListResourceCostEstimates() {
    return this.to('ListResourceCostEstimates');
  }

  /**
   * Grants permission to list settings sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListSettingsSets() {
    return this.to('ListSettingsSets');
  }

  /**
   * Grants permission to list tags for a LaunchWizard resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list deployment options of a given workload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListWorkloadDeploymentOptions() {
    return this.to('ListWorkloadDeploymentOptions');
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
   * Grants permission to create a settings set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toPutSettingsSet() {
    return this.to('PutSettingsSet');
  }

  /**
   * Grants permission to start a provisioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toStartProvisioning() {
    return this.to('StartProvisioning');
  }

  /**
   * Grants permission to tag a LaunchWizard resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a LaunchWizard resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application settings set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toUpdateSettingsSet() {
    return this.to('UpdateSettingsSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAdditionalNode',
      'CreateDeployment',
      'CreateSettingsSet',
      'DeleteAdditionalNode',
      'DeleteApp',
      'DeleteDeployment',
      'DeleteSettingsSet',
      'PutSettingsSet',
      'StartProvisioning',
      'UpdateSettingsSet'
    ],
    Read: [
      'DescribeAdditionalNode',
      'DescribeProvisionedApp',
      'DescribeProvisioningEvents',
      'DescribeSettingsSet',
      'GetDeployment',
      'GetInfrastructureSuggestion',
      'GetIpAddress',
      'GetResourceCostEstimate',
      'GetResourceRecommendation',
      'GetSettingsSet',
      'GetWorkload',
      'GetWorkloadAsset',
      'GetWorkloadAssets',
      'GetWorkloadDeploymentPattern',
      'ListTagsForResource'
    ],
    List: [
      'ListAdditionalNodes',
      'ListAllowedResources',
      'ListDeploymentEvents',
      'ListDeployments',
      'ListProvisionedApps',
      'ListResourceCostEstimates',
      'ListSettingsSets',
      'ListWorkloadDeploymentOptions',
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
   * Filters access based on the presence of tag key-value pairs in the request
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
   * Filters access based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteDeployment()
   * - .toGetDeployment()
   * - .toListTagsForResource()
   * - .toTagResource()
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
   * Filters access based on the presence of tag keys in the request
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
