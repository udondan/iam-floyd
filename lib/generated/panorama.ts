import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [panorama](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html).
 *
 * @param options - Options for the statement
 */
export class Panorama extends PolicyStatement {
  public servicePrefix = 'panorama';

  /**
   * Statement provider for service [panorama](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create an AWS Panorama Application Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_CreateApplicationInstance.html
   */
  public toCreateApplicationInstance() {
    return this.to('CreateApplicationInstance');
  }

  /**
   * Grants permission to create a job for an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_CreateJobForDevices.html
   */
  public toCreateJobForDevices() {
    return this.to('CreateJobForDevices');
  }

  /**
   * Grants permission to create an AWS Panorama Node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_CreateNodeFromTemplateJob.html
   */
  public toCreateNodeFromTemplateJob() {
    return this.to('CreateNodeFromTemplateJob');
  }

  /**
   * Grants permission to create an AWS Panorama Package
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackage.html
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create an AWS Panorama Package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackageImportJob.html
   */
  public toCreatePackageImportJob() {
    return this.to('CreatePackageImportJob');
  }

  /**
   * Grants permission to deregister an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Grants permission to delete an AWS Panorama Package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DeletePackage.html
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to deregister an AWS Panorama package version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DeregisterPackageVersion.html
   */
  public toDeregisterPackageVersion() {
    return this.to('DeregisterPackageVersion');
  }

  /**
   * Grants permission to view details about an AWS Panorama application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstance.html
   */
  public toDescribeApplicationInstance() {
    return this.to('DescribeApplicationInstance');
  }

  /**
   * Grants permission to view details about an AWS Panorama application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstanceDetails.html
   */
  public toDescribeApplicationInstanceDetails() {
    return this.to('DescribeApplicationInstanceDetails');
  }

  /**
   * Grants permission to view details about an AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to view job details for an AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDeviceJob.html
   */
  public toDescribeDeviceJob() {
    return this.to('DescribeDeviceJob');
  }

  /**
   * Grants permission to view details about an AWS Panorama application node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNode.html
   */
  public toDescribeNode() {
    return this.to('DescribeNode');
  }

  /**
   * Grants permission to view details about AWS Panorama application node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNodeFromTemplateJob.html
   */
  public toDescribeNodeFromTemplateJob() {
    return this.to('DescribeNodeFromTemplateJob');
  }

  /**
   * Grants permission to view details about an AWS Panorama package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackage.html
   */
  public toDescribePackage() {
    return this.to('DescribePackage');
  }

  /**
   * Grants permission to view details about an AWS Panorama package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageImportJob.html
   */
  public toDescribePackageImportJob() {
    return this.to('DescribePackageImportJob');
  }

  /**
   * Grants permission to view details about an AWS Panorama package version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageVersion.html
   */
  public toDescribePackageVersion() {
    return this.to('DescribePackageVersion');
  }

  /**
   * Grants permission to view details about a software version for the AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
   */
  public toDescribeSoftware() {
    return this.to('DescribeSoftware');
  }

  /**
   * Grants permission to generate a WebSocket endpoint for communication with AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
   */
  public toGetWebSocketURL() {
    return this.to('GetWebSocketURL');
  }

  /**
   * Grants permission to retrieve a list of application instance dependencies in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceDependencies.html
   */
  public toListApplicationInstanceDependencies() {
    return this.to('ListApplicationInstanceDependencies');
  }

  /**
   * Grants permission to retrieve a list of node instances of application instances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceNodeInstances.html
   */
  public toListApplicationInstanceNodeInstances() {
    return this.to('ListApplicationInstanceNodeInstances');
  }

  /**
   * Grants permission to retrieve a list of application instances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstances.html
   */
  public toListApplicationInstances() {
    return this.to('ListApplicationInstances');
  }

  /**
   * Grants permission to retrieve a list of appliances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to retrieve a list of jobs for an AWS Panorama Appliance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListDevicesJobs.html
   */
  public toListDevicesJobs() {
    return this.to('ListDevicesJobs');
  }

  /**
   * Grants permission to retrieve a list of Nodes for an AWS Panorama Appliance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListNodeFromTemplateJobs.html
   */
  public toListNodeFromTemplateJobs() {
    return this.to('ListNodeFromTemplateJobs');
  }

  /**
   * Grants permission to retrieve a list of nodes in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListNodes.html
   */
  public toListNodes() {
    return this.to('ListNodes');
  }

  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListPackageImportJobs.html
   */
  public toListPackageImportJobs() {
    return this.to('ListPackageImportJobs');
  }

  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListPackages.html
   */
  public toListPackages() {
    return this.to('ListPackages');
  }

  /**
   * Grants permission to retrieve a list of tags for a resource in AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_ProvisionDevice.html
   */
  public toProvisionDevice() {
    return this.to('ProvisionDevice');
  }

  /**
   * Grants permission to register an AWS Panorama package version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_RegisterPackageVersion.html
   */
  public toRegisterPackageVersion() {
    return this.to('RegisterPackageVersion');
  }

  /**
   * Grants permission to remove an AWS Panorama application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_RemoveApplicationInstance.html
   */
  public toRemoveApplicationInstance() {
    return this.to('RemoveApplicationInstance');
  }

  /**
   * Grants permission to signal camera nodes in an application instance to pause or resume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_SignalApplicationInstanceNodeInstances.html
   */
  public toSignalApplicationInstanceNodeInstances() {
    return this.to('SignalApplicationInstanceNodeInstances');
  }

  /**
   * Grants permission to add tags to a resource in AWS Panorama
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource in AWS Panorama
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify basic settings for an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/api/API_UpdateDeviceMetadata.html
   */
  public toUpdateDeviceMetadata() {
    return this.to('UpdateDeviceMetadata');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplicationInstance',
      'CreateJobForDevices',
      'CreateNodeFromTemplateJob',
      'CreatePackage',
      'CreatePackageImportJob',
      'DeleteDevice',
      'DeletePackage',
      'DeregisterPackageVersion',
      'ProvisionDevice',
      'RegisterPackageVersion',
      'RemoveApplicationInstance',
      'SignalApplicationInstanceNodeInstances',
      'UpdateDeviceMetadata'
    ],
    Read: [
      'DescribeApplicationInstance',
      'DescribeApplicationInstanceDetails',
      'DescribeDevice',
      'DescribeDeviceJob',
      'DescribeNode',
      'DescribeNodeFromTemplateJob',
      'DescribePackage',
      'DescribePackageImportJob',
      'DescribePackageVersion',
      'DescribeSoftware',
      'GetWebSocketURL',
      'ListTagsForResource'
    ],
    List: [
      'ListApplicationInstanceDependencies',
      'ListApplicationInstanceNodeInstances',
      'ListApplicationInstances',
      'ListDevices',
      'ListDevicesJobs',
      'ListNodeFromTemplateJobs',
      'ListNodes',
      'ListPackageImportJobs',
      'ListPackages'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/gettingstarted-concepts.html#gettingstarted-concepts-appliance
   *
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:device/${ deviceId }`);
  }

  /**
   * Adds a resource of type package to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/gettingstarted-concepts.html#gettingstarted-concepts-node
   *
   * @param packageId - Identifier for the packageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackage(packageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:package/${ packageId }`);
  }

  /**
   * Adds a resource of type applicationInstance to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/gettingstarted-concepts.html#gettingstarted-concepts-application
   *
   * @param applicationInstanceId - Identifier for the applicationInstanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationInstance(applicationInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:applicationInstance/${ applicationInstanceId }`);
  }
}
