import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [appconfig](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appconfig extends PolicyStatement {
  public servicePrefix = 'appconfig';

  /**
   * Statement provider for service [appconfig](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
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
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.to('CreateApplication');
    return this;
  }

  /**
   * Grants permission to create a configuration profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html
   */
  public toCreateConfigurationProfile() {
    this.to('CreateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to create a deployment strategy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html
   */
  public toCreateDeploymentStrategy() {
    this.to('CreateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    this.to('CreateEnvironment');
    return this;
  }

  /**
   * Grants permission to create a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html
   */
  public toCreateHostedConfigurationVersion() {
    this.to('CreateHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('DeleteApplication');
    return this;
  }

  /**
   * Grants permission to delete a configuration profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html
   */
  public toDeleteConfigurationProfile() {
    this.to('DeleteConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to delete a deployment strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html
   */
  public toDeleteDeploymentStrategy() {
    this.to('DeleteDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    this.to('DeleteEnvironment');
    return this;
  }

  /**
   * Grants permission to delete a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html
   */
  public toDeleteHostedConfigurationVersion() {
    this.to('DeleteHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to view details about an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    this.to('GetApplication');
    return this;
  }

  /**
   * Grants permission to view details about a configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html
   */
  public toGetConfiguration() {
    this.to('GetConfiguration');
    return this;
  }

  /**
   * Grants permission to view details about a configuration profile
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html
   */
  public toGetConfigurationProfile() {
    this.to('GetConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to view details about a deployment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    this.to('GetDeployment');
    return this;
  }

  /**
   * Grants permission to view details about a deployment strategy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html
   */
  public toGetDeploymentStrategy() {
    this.to('GetDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to view details about an environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    this.to('GetEnvironment');
    return this;
  }

  /**
   * Grants permission to view details about a hosted configuration version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html
   */
  public toGetHostedConfigurationVersion() {
    this.to('GetHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to list the applications in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    this.to('ListApplications');
    return this;
  }

  /**
   * Grants permission to list the configuration profiles for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html
   */
  public toListConfigurationProfiles() {
    this.to('ListConfigurationProfiles');
    return this;
  }

  /**
   * Grants permission to list the deployment strategies for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html
   */
  public toListDeploymentStrategies() {
    this.to('ListDeploymentStrategies');
    return this;
  }

  /**
   * Grants permission to list the deployments for an environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    this.to('ListDeployments');
    return this;
  }

  /**
   * Grants permission to list the environments for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    this.to('ListEnvironments');
    return this;
  }

  /**
   * Grants permission to list the hosted configuration versions for a configuration profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html
   */
  public toListHostedConfigurationVersions() {
    this.to('ListHostedConfigurationVersions');
    return this;
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to initiate a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html
   */
  public toStartDeployment() {
    this.to('StartDeployment');
    return this;
  }

  /**
   * Grants permission to stop a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html
   */
  public toStopDeployment() {
    this.to('StopDeployment');
    return this;
  }

  /**
   * Grants permission to tag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permission to untag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('UpdateApplication');
    return this;
  }

  /**
   * Grants permission to modify a configuration profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html
   */
  public toUpdateConfigurationProfile() {
    this.to('UpdateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to modify a deployment strategy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html
   */
  public toUpdateDeploymentStrategy() {
    this.to('UpdateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to modify an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    this.to('UpdateEnvironment');
    return this;
  }

  /**
   * Grants permission to validate a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html
   */
  public toValidateConfiguration() {
    this.to('ValidateConfiguration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApplication",
      "CreateConfigurationProfile",
      "CreateDeploymentStrategy",
      "CreateEnvironment",
      "CreateHostedConfigurationVersion",
      "DeleteApplication",
      "DeleteConfigurationProfile",
      "DeleteDeploymentStrategy",
      "DeleteEnvironment",
      "DeleteHostedConfigurationVersion",
      "StartDeployment",
      "StopDeployment",
      "UpdateApplication",
      "UpdateConfigurationProfile",
      "UpdateDeploymentStrategy",
      "UpdateEnvironment",
      "ValidateConfiguration"
    ],
    "Read": [
      "GetApplication",
      "GetConfiguration",
      "GetConfigurationProfile",
      "GetDeployment",
      "GetDeploymentStrategy",
      "GetEnvironment",
      "GetHostedConfigurationVersion",
      "ListTagsForResource"
    ],
    "List": [
      "ListApplications",
      "ListConfigurationProfiles",
      "ListDeploymentStrategies",
      "ListDeployments",
      "ListEnvironments",
      "ListHostedConfigurationVersions"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-application.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-environment.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(applicationId: string, environmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type configurationprofile to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationprofile(applicationId: string, configurationProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${ConfigurationProfileId}', configurationProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentstrategy to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-deployment-strategy.html
   *
   * @param deploymentStrategyId - Identifier for the deploymentStrategyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentstrategy(deploymentStrategyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:deploymentstrategy/${DeploymentStrategyId}';
    arn = arn.replace('${DeploymentStrategyId}', deploymentStrategyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-deploying.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param deploymentNumber - Identifier for the deploymentNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(applicationId: string, environmentId: string, deploymentNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}/deployment/${DeploymentNumber}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${DeploymentNumber}', deploymentNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hostedconfigurationversion to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHostedconfigurationversion(applicationId: string, configurationProfileId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}/hostedconfigurationversion/${VersionNumber}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${ConfigurationProfileId}', configurationProfileId);
    arn = arn.replace('${VersionNumber}', versionNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
