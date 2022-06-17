import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [panorama](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Panorama extends PolicyStatement {
  public servicePrefix = 'panorama';

  /**
   * Statement provider for service [panorama](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an AWS Panorama application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to deploy an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateAppDeployment.html
   */
  public toCreateAppDeployment() {
    return this.to('CreateAppDeployment');
  }

  /**
   * Grants permission to create a version of an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateAppVersion.html
   */
  public toCreateAppVersion() {
    return this.to('CreateAppVersion');
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateApplicationInstance.html
   */
  public toCreateApplicationInstance() {
    return this.to('CreateApplicationInstance');
  }

  /**
   * Grants permission to create an AWS Panorama datasource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to configure a deployment for an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDeploymentConfiguration.html
   */
  public toCreateDeploymentConfiguration() {
    return this.to('CreateDeploymentConfiguration');
  }

  /**
   * Grants permission to generate a list of cameras on the same network as an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateInputList.html
   */
  public toCreateInputs() {
    return this.to('CreateInputs');
  }

  /**
   * Grants permission to create a job for an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateJobForDevices.html
   */
  public toCreateJobForDevices() {
    return this.to('CreateJobForDevices');
  }

  /**
   * Grants permission to import a machine learning model into AWS Panorama
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateModel.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to create an AWS Panorama Node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateNodeFromTemplateJob.html
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreatePackage.html
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create an AWS Panorama Package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreatePackageImportJob.html
   */
  public toCreatePackageImportJob() {
    return this.to('CreatePackageImportJob');
  }

  /**
   * Grants permission to generate a list of streams available to an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateStreamsList.html
   */
  public toCreateStreams() {
    return this.to('CreateStreams');
  }

  /**
   * Grants permission to delete an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete a version of an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteAppVersion.html
   */
  public toDeleteAppVersion() {
    return this.to('DeleteAppVersion');
  }

  /**
   * Grants permission to delete an AWS Panorama datasource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to deregister an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Grants permission to delete a machine learning model from AWS Panorama
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteModel.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to delete an AWS Panorama Package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeletePackage.html
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to deregister an AWS Panorama Package Version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DeregisterPackageVersion.html
   */
  public toDeregisterPackageVersion() {
    return this.to('DeregisterPackageVersion');
  }

  /**
   * Grants permission to view details about an AWS Panorama application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApp.html
   */
  public toDescribeApp() {
    return this.to('DescribeApp');
  }

  /**
   * Grants permission to view details about a deployment for an AWS Panorama application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeAppDeployment.html
   */
  public toDescribeAppDeployment() {
    return this.to('DescribeAppDeployment');
  }

  /**
   * Grants permission to view details about a version of an AWS Panorama application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeAppVersion.html
   */
  public toDescribeAppVersion() {
    return this.to('DescribeAppVersion');
  }

  /**
   * Grants permission to view details about an AWS Panorama Application Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApplicationInstance.html
   */
  public toDescribeApplicationInstance() {
    return this.to('DescribeApplicationInstance');
  }

  /**
   * Grants permission to view details about an AWS Panorama Application Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApplicationInstanceDetails.html
   */
  public toDescribeApplicationInstanceDetails() {
    return this.to('DescribeApplicationInstanceDetails');
  }

  /**
   * Grants permission to view details about a datasource in AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    return this.to('DescribeDataSource');
  }

  /**
   * Grants permission to view details about an AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to view job details for an AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDeviceJob.html
   */
  public toDescribeDeviceJob() {
    return this.to('DescribeDeviceJob');
  }

  /**
   * Grants permission to view details about a machine learning model in AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeModel.html
   */
  public toDescribeModel() {
    return this.to('DescribeModel');
  }

  /**
   * Grants permission to view details about an AWS Panorama Node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeNode.html
   */
  public toDescribeNode() {
    return this.to('DescribeNode');
  }

  /**
   * Grants permission to view details about AWS Panorama Node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeNodeFromTemplateJob.html
   */
  public toDescribeNodeFromTemplateJob() {
    return this.to('DescribeNodeFromTemplateJob');
  }

  /**
   * Grants permission to view details about an AWS Panorama Package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackage.html
   */
  public toDescribePackage() {
    return this.to('DescribePackage');
  }

  /**
   * Grants permission to view details about an AWS Panorama Package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackageImportJob.html
   */
  public toDescribePackageImportJob() {
    return this.to('DescribePackageImportJob');
  }

  /**
   * Grants permission to view details about an AWS Panorama Package Version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackageVersion.html
   */
  public toDescribePackageVersion() {
    return this.to('DescribePackageVersion');
  }

  /**
   * Grants permission to view details about a software version for the AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeSoftware.html
   */
  public toDescribeSoftware() {
    return this.to('DescribeSoftware');
  }

  /**
   * Grants permission to view details about a deployment configuration for an AWS Panorama application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_GetDeploymentConfiguration.html
   */
  public toGetDeploymentConfiguration() {
    return this.to('GetDeploymentConfiguration');
  }

  /**
   * Grants permission to retrieve a list of cameras generated with CreateInputs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_GetInputList.html
   */
  public toGetInputs() {
    return this.to('GetInputs');
  }

  /**
   * Grants permission to retrieve a list of streams generated with CreateStreams
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_GetStreamsList.html
   */
  public toGetStreams() {
    return this.to('GetStreams');
  }

  /**
   * Grants permission to generate a WebSocket endpoint for communication with AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_GetWebSocketURL.html
   */
  public toGetWebSocketURL() {
    return this.to('GetWebSocketURL');
  }

  /**
   * Grants permission to retrieve a list of deployments for an AWS Panorama application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListAppDeploymentOperations.html
   */
  public toListAppDeploymentOperations() {
    return this.to('ListAppDeploymentOperations');
  }

  /**
   * Grants permission to retrieve a list of application versions in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListAppVersions.html
   */
  public toListAppVersions() {
    return this.to('ListAppVersions');
  }

  /**
   * Grants permission to retrieve a list of application instance dependencies in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstanceDependencies.html
   */
  public toListApplicationInstanceDependencies() {
    return this.to('ListApplicationInstanceDependencies');
  }

  /**
   * Grants permission to retrieve a list of node instances of application instances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstanceNodeInstances.html
   */
  public toListApplicationInstanceNodeInstances() {
    return this.to('ListApplicationInstanceNodeInstances');
  }

  /**
   * Grants permission to retrieve a list of application instances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstances.html
   */
  public toListApplicationInstances() {
    return this.to('ListApplicationInstances');
  }

  /**
   * Grants permission to retrieve a list of applications in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListApps.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to retrieve a list of datasources in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to retrieve a list of deployment configurations in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListDeploymentConfigurations.html
   */
  public toListDeploymentConfigurations() {
    return this.to('ListDeploymentConfigurations');
  }

  /**
   * Grants permission to retrieve a list of appliances in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to retrieve a list of jobs for an AWS Panorama Appliance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListDevicesJobs.html
   */
  public toListDevicesJobs() {
    return this.to('ListDevicesJobs');
  }

  /**
   * Grants permission to retrieve a list of models in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListModels.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to retrieve a list of Nodes for an AWS Panorama Appliance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListNodeFromTemplateJobs.html
   */
  public toListNodeFromTemplateJobs() {
    return this.to('ListNodeFromTemplateJobs');
  }

  /**
   * Grants permission to retrieve a list of nodes in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListNodes.html
   */
  public toListNodes() {
    return this.to('ListNodes');
  }

  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListPackageImportJobs.html
   */
  public toListPackageImportJobs() {
    return this.to('ListPackageImportJobs');
  }

  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListPackages.html
   */
  public toListPackages() {
    return this.to('ListPackages');
  }

  /**
   * Grants permission to retrieve a list of tags for a resource in AWS Panorama
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListTagsForResource.html
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ProvisionDevice.html
   */
  public toProvisionDevice() {
    return this.to('ProvisionDevice');
  }

  /**
   * Grants permission to register an AWS Panorama Package Version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_RegisterPackageVersion.html
   */
  public toRegisterPackageVersion() {
    return this.to('RegisterPackageVersion');
  }

  /**
   * Grants permission to remove an AWS Panorama Application Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_RemoveApplicationInstance.html
   */
  public toRemoveApplicationInstance() {
    return this.to('RemoveApplicationInstance');
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_TagResource.html
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateApp.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Grants permission to modify the version-specific configuration of an AWS Panorama application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateAppConfiguration.html
   */
  public toUpdateAppConfiguration() {
    return this.to('UpdateAppConfiguration');
  }

  /**
   * Grants permission to modify an AWS Panorama datasource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to modify basic settings for an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateDeviceMetadata.html
   */
  public toUpdateDeviceMetadata() {
    return this.to('UpdateDeviceMetadata');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApp',
      'CreateAppDeployment',
      'CreateAppVersion',
      'CreateApplicationInstance',
      'CreateDataSource',
      'CreateDeploymentConfiguration',
      'CreateInputs',
      'CreateJobForDevices',
      'CreateModel',
      'CreateNodeFromTemplateJob',
      'CreatePackage',
      'CreatePackageImportJob',
      'CreateStreams',
      'DeleteApp',
      'DeleteAppVersion',
      'DeleteDataSource',
      'DeleteDevice',
      'DeleteModel',
      'DeletePackage',
      'DeregisterPackageVersion',
      'ProvisionDevice',
      'RegisterPackageVersion',
      'RemoveApplicationInstance',
      'UpdateApp',
      'UpdateAppConfiguration',
      'UpdateDataSource',
      'UpdateDeviceMetadata'
    ],
    Read: [
      'DescribeApp',
      'DescribeAppDeployment',
      'DescribeAppVersion',
      'DescribeApplicationInstance',
      'DescribeApplicationInstanceDetails',
      'DescribeDataSource',
      'DescribeDevice',
      'DescribeDeviceJob',
      'DescribeModel',
      'DescribeNode',
      'DescribeNodeFromTemplateJob',
      'DescribePackage',
      'DescribePackageImportJob',
      'DescribePackageVersion',
      'DescribeSoftware',
      'GetDeploymentConfiguration',
      'GetInputs',
      'GetStreams',
      'GetWebSocketURL',
      'ListTagsForResource'
    ],
    List: [
      'ListAppDeploymentOperations',
      'ListAppVersions',
      'ListApplicationInstanceDependencies',
      'ListApplicationInstanceNodeInstances',
      'ListApplicationInstances',
      'ListApps',
      'ListDataSources',
      'ListDeploymentConfigurations',
      'ListDevices',
      'ListDevicesJobs',
      'ListModels',
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
   * https://docs.aws.amazon.com/panorama/latest/dev/
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
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:device/${ deviceId }`);
  }

  /**
   * Adds a resource of type package to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
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
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:package/${ packageId }`);
  }

  /**
   * Adds a resource of type applicationInstance to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
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
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:applicationInstance/${ applicationInstanceId }`);
  }

  /**
   * Adds a resource of type dataSource to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param deviceId - Identifier for the deviceId.
   * @param dataSourceName - Identifier for the dataSourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(deviceId: string, dataSourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:dataSource/${ deviceId }/${ dataSourceName }`);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:model/${ modelName }`);
  }

  /**
   * Adds a resource of type app to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApp(appName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:app/${ appName }`);
  }

  /**
   * Adds a resource of type appVersion to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param appName - Identifier for the appName.
   * @param appVersion - Identifier for the appVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAppVersion(appName: string, appVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Panorama.defaultPartition }:panorama:${ region || '*' }:${ account || '*' }:app/${ appName }:${ appVersion }`);
  }
}
