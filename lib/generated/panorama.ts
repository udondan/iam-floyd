import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
   * Grants permission to register an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDevice.html
   */
  public toCreateDevice() {
    return this.to('CreateDevice');
  }

  /**
   * Grants permission to apply a software update to an AWS Panorama Appliance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDeviceUpdate.html
   */
  public toCreateDeviceUpdate() {
    return this.to('CreateDeviceUpdate');
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
   * Grants permission to view details about a software update for an AWS Panorama Appliance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDeviceUpdate.html
   */
  public toDescribeDeviceUpdate() {
    return this.to('DescribeDeviceUpdate');
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
   * Grants permission to retrieve a list of software updates for an AWS Panorama Appliance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListDeviceUpdates.html
   */
  public toListDeviceUpdates() {
    return this.to('ListDeviceUpdates');
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
   * Grants permission to retrieve a list of tags for a resource in AWS Panorama
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    return this.to('UpdateDevice');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApp",
      "CreateAppDeployment",
      "CreateAppVersion",
      "CreateDataSource",
      "CreateDeploymentConfiguration",
      "CreateDevice",
      "CreateDeviceUpdate",
      "CreateInputs",
      "CreateModel",
      "CreateStreams",
      "DeleteApp",
      "DeleteAppVersion",
      "DeleteDataSource",
      "DeleteDevice",
      "DeleteModel",
      "UpdateApp",
      "UpdateAppConfiguration",
      "UpdateDataSource",
      "UpdateDevice"
    ],
    "Read": [
      "DescribeApp",
      "DescribeAppDeployment",
      "DescribeAppVersion",
      "DescribeDataSource",
      "DescribeDevice",
      "DescribeDeviceUpdate",
      "DescribeModel",
      "DescribeSoftware",
      "GetDeploymentConfiguration",
      "GetInputs",
      "GetStreams",
      "GetWebSocketURL"
    ],
    "List": [
      "ListAppDeploymentOperations",
      "ListAppVersions",
      "ListApps",
      "ListDataSources",
      "ListDeploymentConfigurations",
      "ListDeviceUpdates",
      "ListDevices",
      "ListModels",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param deviceName - Identifier for the deviceName.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceName: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:panorama:${Region}:${AccountId}:device/${DeviceName}';
    arn = arn.replace('${DeviceName}', deviceName);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dataSource to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param deviceName - Identifier for the deviceName.
   * @param dataSourceName - Identifier for the dataSourceName.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(deviceName: string, dataSourceName: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:panorama:${Region}:${AccountId}:dataSource/${DeviceName}/${DataSourceName}';
    arn = arn.replace('${DeviceName}', deviceName);
    arn = arn.replace('${DataSourceName}', dataSourceName);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param modelName - Identifier for the modelName.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelName: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:panorama:${Region}:${AccountId}:model/${ModelName}';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type app to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApp(appName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:panorama:${Region}:${Account}:app/${AppName}';
    arn = arn.replace('${AppName}', appName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type appVersion to the statement
   *
   * https://docs.aws.amazon.com/panorama/latest/dev/
   *
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAppVersion(appName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:panorama:${Region}:${Account}:app/${AppName}:{AppVersion}';
    arn = arn.replace('${AppName}', appName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
