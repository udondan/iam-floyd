import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [greengrass-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class GreengrassV2 extends PolicyStatement {
  public servicePrefix = 'greengrass';

  /**
   * Statement provider for service [greengrass-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a deployment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:CancelJob
   * - iot:DeleteThingShadow
   * - iot:DescribeJob
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   * - iot:GetThingShadow
   * - iot:UpdateJob
   * - iot:UpdateThingShadow
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CancelDeployment.html
   */
  public toCancelDeployment() {
    return this.to('CancelDeployment');
  }

  /**
   * Grants permission to create a component
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateComponentVersion.html
   */
  public toCreateComponentVersion() {
    return this.to('CreateComponentVersion');
  }

  /**
   * Grants permission to create a deployment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iot:CancelJob
   * - iot:CreateJob
   * - iot:DeleteThingShadow
   * - iot:DescribeJob
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   * - iot:GetThingShadow
   * - iot:UpdateJob
   * - iot:UpdateThingShadow
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to delete a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete a AWS IoT Greengrass core device, which is an AWS IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the AWS IoT thing
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeJobExecution
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteCoreDevice.html
   */
  public toDeleteCoreDevice() {
    return this.to('DeleteCoreDevice');
  }

  /**
   * Grants permission to retrieve metadata for a version of a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DescribeComponent.html
   */
  public toDescribeComponent() {
    return this.to('DescribeComponent');
  }

  /**
   * Grants permission to get the recipe for a version of a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to get the pre-signed URL to download a public component artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponentVersionArtifact.html
   */
  public toGetComponentVersionArtifact() {
    return this.to('GetComponentVersionArtifact');
  }

  /**
   * Grants permission to retrieves metadata for a AWS IoT Greengrass core device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetCoreDevice.html
   */
  public toGetCoreDevice() {
    return this.to('GetCoreDevice');
  }

  /**
   * Grants permission to get a deployment
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iot:DescribeJob
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   * - iot:GetThingShadow
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Grants permission to retrieve a paginated list of all versions for a component
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponentVersions.html
   */
  public toListComponentVersions() {
    return this.to('ListComponentVersions');
  }

  /**
   * Grants permission to retrieve a paginated list of component summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to retrieve a paginated list of AWS IoT Greengrass core devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListCoreDevices.html
   */
  public toListCoreDevices() {
    return this.to('ListCoreDevices');
  }

  /**
   * Grants permission to retrieves a paginated list of deployments
   *
   * Access Level: List
   *
   * Dependent actions:
   * - iot:DescribeJob
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   * - iot:GetThingShadow
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core devices
   *
   * Access Level: List
   *
   * Dependent actions:
   * - iot:DescribeJob
   * - iot:DescribeJobExecution
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   * - iot:GetThingShadow
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListEffectiveDeployments.html
   */
  public toListEffectiveDeployments() {
    return this.to('ListEffectiveDeployments');
  }

  /**
   * Grants permission to retrieve a paginated list of the components that a AWS IoT Greengrass core device runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListInstalledComponents.html
   */
  public toListInstalledComponents() {
    return this.to('ListInstalledComponents');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list components that meet the component, version, and platform requirements of a deployment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ResolveComponentCandidates.html
   */
  public toResolveComponentCandidates() {
    return this.to('ResolveComponentCandidates');
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
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelDeployment',
      'CreateComponentVersion',
      'CreateDeployment',
      'DeleteComponent',
      'DeleteCoreDevice'
    ],
    Read: [
      'DescribeComponent',
      'GetComponent',
      'GetComponentVersionArtifact',
      'GetCoreDevice',
      'GetDeployment'
    ],
    List: [
      'ListComponentVersions',
      'ListComponents',
      'ListCoreDevices',
      'ListDeployments',
      'ListEffectiveDeployments',
      'ListInstalledComponents',
      'ListTagsForResource',
      'ResolveComponentCandidates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type component to the statement
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Component.html
   *
   * @param componentName - Identifier for the componentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponent(componentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:components:${ componentName }`);
  }

  /**
   * Adds a resource of type componentVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Component.html
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponentVersion(componentName: string, componentVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:components:${ componentName }:versions:${ componentVersion }`);
  }

  /**
   * Adds a resource of type coreDevice to the statement
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CoreDevice.html
   *
   * @param coreDeviceThingName - Identifier for the coreDeviceThingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCoreDevice(coreDeviceThingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:coreDevices:${ coreDeviceThingName }`);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Deployment.html
   *
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(deploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:deployments:${ deploymentId }`);
  }
}
