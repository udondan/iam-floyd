import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('CreateApplication');
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
    return this.to('CreateConfigurationProfile');
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
    return this.to('CreateDeploymentStrategy');
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
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html
   */
  public toCreateHostedConfigurationVersion() {
    return this.to('CreateHostedConfigurationVersion');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete a configuration profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html
   */
  public toDeleteConfigurationProfile() {
    return this.to('DeleteConfigurationProfile');
  }

  /**
   * Grants permission to delete a deployment strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html
   */
  public toDeleteDeploymentStrategy() {
    return this.to('DeleteDeploymentStrategy');
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html
   */
  public toDeleteHostedConfigurationVersion() {
    return this.to('DeleteHostedConfigurationVersion');
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
    return this.to('GetApplication');
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
    return this.to('GetConfiguration');
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
    return this.to('GetConfigurationProfile');
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
    return this.to('GetDeployment');
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
    return this.to('GetDeploymentStrategy');
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
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to view details about a hosted configuration version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html
   */
  public toGetHostedConfigurationVersion() {
    return this.to('GetHostedConfigurationVersion');
  }

  /**
   * Grants permission to retrieve a deployed configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html
   */
  public toGetLatestConfiguration() {
    return this.to('GetLatestConfiguration');
  }

  /**
   * Grants permission to list the applications in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list the configuration profiles for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html
   */
  public toListConfigurationProfiles() {
    return this.to('ListConfigurationProfiles');
  }

  /**
   * Grants permission to list the deployment strategies for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html
   */
  public toListDeploymentStrategies() {
    return this.to('ListDeploymentStrategies');
  }

  /**
   * Grants permission to list the deployments for an environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to list the environments for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list the hosted configuration versions for a configuration profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html
   */
  public toListHostedConfigurationVersions() {
    return this.to('ListHostedConfigurationVersions');
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
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a configuration session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html
   */
  public toStartConfigurationSession() {
    return this.to('StartConfigurationSession');
  }

  /**
   * Grants permission to initiate a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to stop a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html
   */
  public toStopDeployment() {
    return this.to('StopDeployment');
  }

  /**
   * Grants permission to tag an appconfig resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an appconfig resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
    return this.to('UpdateApplication');
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
    return this.to('UpdateConfigurationProfile');
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
    return this.to('UpdateDeploymentStrategy');
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
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to validate a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html
   */
  public toValidateConfiguration() {
    return this.to('ValidateConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'CreateConfigurationProfile',
      'CreateDeploymentStrategy',
      'CreateEnvironment',
      'CreateHostedConfigurationVersion',
      'DeleteApplication',
      'DeleteConfigurationProfile',
      'DeleteDeploymentStrategy',
      'DeleteEnvironment',
      'DeleteHostedConfigurationVersion',
      'StartConfigurationSession',
      'StartDeployment',
      'StopDeployment',
      'UpdateApplication',
      'UpdateConfigurationProfile',
      'UpdateDeploymentStrategy',
      'UpdateEnvironment',
      'ValidateConfiguration'
    ],
    Read: [
      'GetApplication',
      'GetConfiguration',
      'GetConfigurationProfile',
      'GetDeployment',
      'GetDeploymentStrategy',
      'GetEnvironment',
      'GetHostedConfigurationVersion',
      'GetLatestConfiguration',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListConfigurationProfiles',
      'ListDeploymentStrategies',
      'ListDeployments',
      'ListEnvironments',
      'ListHostedConfigurationVersions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-application.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-environment.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(applicationId: string, environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }/environment/${ environmentId }`);
  }

  /**
   * Adds a resource of type configurationprofile to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationprofile(applicationId: string, configurationProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }/configurationprofile/${ configurationProfileId }`);
  }

  /**
   * Adds a resource of type deploymentstrategy to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html
   *
   * @param deploymentStrategyId - Identifier for the deploymentStrategyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentstrategy(deploymentStrategyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:deploymentstrategy/${ deploymentStrategyId }`);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-deploying.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param deploymentNumber - Identifier for the deploymentNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(applicationId: string, environmentId: string, deploymentNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }/environment/${ environmentId }/deployment/${ deploymentNumber }`);
  }

  /**
   * Adds a resource of type hostedconfigurationversion to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHostedconfigurationversion(applicationId: string, configurationProfileId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }/configurationprofile/${ configurationProfileId }/hostedconfigurationversion/${ versionNumber }`);
  }

  /**
   * Adds a resource of type configuration to the statement
   *
   * https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguration(applicationId: string, environmentId: string, configurationProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appconfig.defaultPartition }:appconfig:${ region || '*' }:${ account || '*' }:application/${ applicationId }/environment/${ environmentId }/configuration/${ configurationProfileId }`);
  }
}
