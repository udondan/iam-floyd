import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [elasticbeanstalk](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticbeanstalk extends PolicyStatement {
  public servicePrefix = 'elasticbeanstalk';

  /**
   * Statement provider for service [elasticbeanstalk](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel in-progress environment configuration update or application version deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AbortEnvironmentUpdate.html
   */
  public toAbortEnvironmentUpdate() {
    return this.to('AbortEnvironmentUpdate');
  }

  /**
   * Grants permission to add tags to an Elastic Beanstalk resource and to update tag values
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to apply a scheduled managed action immediately
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ApplyEnvironmentManagedAction.html
   */
  public toApplyEnvironmentManagedAction() {
    return this.to('ApplyEnvironmentManagedAction');
  }

  /**
   * Grants permission to associate an operations role with an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AssociateEnvironmentOperationsRole.html
   */
  public toAssociateEnvironmentOperationsRole() {
    return this.to('AssociateEnvironmentOperationsRole');
  }

  /**
   * Grants permission to check CNAME availability
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CheckDNSAvailability.html
   */
  public toCheckDNSAvailability() {
    return this.to('CheckDNSAvailability');
  }

  /**
   * Grants permission to create or update a group of environments, each running a separate component of a single application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ComposeEnvironments.html
   */
  public toComposeEnvironments() {
    return this.to('ComposeEnvironments');
  }

  /**
   * Grants permission to create a new application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an application version for an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplicationVersion.html
   */
  public toCreateApplicationVersion() {
    return this.to('CreateApplicationVersion');
  }

  /**
   * Grants permission to create a configuration template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplication()
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromEnvironment()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateConfigurationTemplate.html
   */
  public toCreateConfigurationTemplate() {
    return this.to('CreateConfigurationTemplate');
  }

  /**
   * Grants permission to launch an environment for an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a new version of a custom platform
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreatePlatformVersion.html
   */
  public toCreatePlatformVersion() {
    return this.to('CreatePlatformVersion');
  }

  /**
   * Grants permission to create the Amazon S3 storage location for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateStorageLocation.html
   */
  public toCreateStorageLocation() {
    return this.to('CreateStorageLocation');
  }

  /**
   * Grants permission to delete an application along with all associated versions and configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an application version from an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplicationVersion.html
   */
  public toDeleteApplicationVersion() {
    return this.to('DeleteApplicationVersion');
  }

  /**
   * Grants permission to delete a configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteConfigurationTemplate.html
   */
  public toDeleteConfigurationTemplate() {
    return this.to('DeleteConfigurationTemplate');
  }

  /**
   * Grants permission to delete the draft configuration associated with the running environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteEnvironmentConfiguration.html
   */
  public toDeleteEnvironmentConfiguration() {
    return this.to('DeleteEnvironmentConfiguration');
  }

  /**
   * Grants permission to delete a version of a custom platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeletePlatformVersion.html
   */
  public toDeletePlatformVersion() {
    return this.to('DeletePlatformVersion');
  }

  /**
   * Grants permission to retrieve a list of account attributes, including resource quotas
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to retrieve a list of application versions stored in an AWS Elastic Beanstalk storage bucket
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplicationVersions.html
   */
  public toDescribeApplicationVersions() {
    return this.to('DescribeApplicationVersions');
  }

  /**
   * Grants permission to retrieve the descriptions of existing applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplications.html
   */
  public toDescribeApplications() {
    return this.to('DescribeApplications');
  }

  /**
   * Grants permission to retrieve descriptions of environment configuration options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationOptions.html
   */
  public toDescribeConfigurationOptions() {
    return this.to('DescribeConfigurationOptions');
  }

  /**
   * Grants permission to retrieve a description of the settings for a configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationSettings.html
   */
  public toDescribeConfigurationSettings() {
    return this.to('DescribeConfigurationSettings');
  }

  /**
   * Grants permission to retrieve information about the overall health of an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentHealth.html
   */
  public toDescribeEnvironmentHealth() {
    return this.to('DescribeEnvironmentHealth');
  }

  /**
   * Grants permission to retrieve a list of an environment's completed and failed managed actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActionHistory.html
   */
  public toDescribeEnvironmentManagedActionHistory() {
    return this.to('DescribeEnvironmentManagedActionHistory');
  }

  /**
   * Grants permission to retrieve a list of an environment's upcoming and in-progress managed actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActions.html
   */
  public toDescribeEnvironmentManagedActions() {
    return this.to('DescribeEnvironmentManagedActions');
  }

  /**
   * Grants permission to retrieve a list of AWS resources for an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentResources.html
   */
  public toDescribeEnvironmentResources() {
    return this.to('DescribeEnvironmentResources');
  }

  /**
   * Grants permission to retrieve descriptions for existing environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html
   */
  public toDescribeEnvironments() {
    return this.to('DescribeEnvironments');
  }

  /**
   * Grants permission to retrieve a list of event descriptions matching a set of criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to retrieve more detailed information about the health of environment instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeInstancesHealth.html
   */
  public toDescribeInstancesHealth() {
    return this.to('DescribeInstancesHealth');
  }

  /**
   * Grants permission to retrieve a description of a managed platform version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribePlatformVersion.html
   */
  public toDescribePlatformVersion() {
    return this.to('DescribePlatformVersion');
  }

  /**
   * Grants permission to disassociate an operations role with an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DisassociateEnvironmentOperationsRole.html
   */
  public toDisassociateEnvironmentOperationsRole() {
    return this.to('DisassociateEnvironmentOperationsRole');
  }

  /**
   * Grants permission to retrieve a list of the available solution stack names
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html
   */
  public toListAvailableSolutionStacks() {
    return this.to('ListAvailableSolutionStacks');
  }

  /**
   * Grants permission to retrieve a list of the available platform branches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformBranches.html
   */
  public toListPlatformBranches() {
    return this.to('ListPlatformBranches');
  }

  /**
   * Grants permission to retrieve a list of the available platforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformVersions.html
   */
  public toListPlatformVersions() {
    return this.to('ListPlatformVersions');
  }

  /**
   * Grants permission to retrieve a list of tags of an Elastic Beanstalk resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to submit instance statistics for enhanced health
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html#health-enhanced-authz
   */
  public toPutInstanceStatistics() {
    return this.to('PutInstanceStatistics');
  }

  /**
   * Grants permission to delete and recreate all of the AWS resources for an environment and to force a restart
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RebuildEnvironment.html
   */
  public toRebuildEnvironment() {
    return this.to('RebuildEnvironment');
  }

  /**
   * Grants permission to remove tags from an Elastic Beanstalk resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to initiate a request to compile information of the deployed environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RequestEnvironmentInfo.html
   */
  public toRequestEnvironmentInfo() {
    return this.to('RequestEnvironmentInfo');
  }

  /**
   * Grants permission to request an environment to restart the application container server running on each Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RestartAppServer.html
   */
  public toRestartAppServer() {
    return this.to('RestartAppServer');
  }

  /**
   * Grants permission to retrieve the compiled information from a RequestEnvironmentInfo request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RetrieveEnvironmentInfo.html
   */
  public toRetrieveEnvironmentInfo() {
    return this.to('RetrieveEnvironmentInfo');
  }

  /**
   * Grants permission to swap the CNAMEs of two environments
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromEnvironment()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_SwapEnvironmentCNAMEs.html
   */
  public toSwapEnvironmentCNAMEs() {
    return this.to('SwapEnvironmentCNAMEs');
  }

  /**
   * Grants permission to terminate an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_TerminateEnvironment.html
   */
  public toTerminateEnvironment() {
    return this.to('TerminateEnvironment');
  }

  /**
   * Grants permission to update an application with specified properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update the application version lifecycle policy associated with the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationResourceLifecycle.html
   */
  public toUpdateApplicationResourceLifecycle() {
    return this.to('UpdateApplicationResourceLifecycle');
  }

  /**
   * Grants permission to update an application version with specified properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationVersion.html
   */
  public toUpdateApplicationVersion() {
    return this.to('UpdateApplicationVersion');
  }

  /**
   * Grants permission to update a configuration template with specified properties or configuration option values
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplication()
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromEnvironment()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateConfigurationTemplate.html
   */
  public toUpdateConfigurationTemplate() {
    return this.to('UpdateConfigurationTemplate');
  }

  /**
   * Grants permission to update an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to add tags to an Elastic Beanstalk resource, remove tags, and to update tag values
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   */
  public toUpdateTagsForResource() {
    return this.to('UpdateTagsForResource');
  }

  /**
   * Grants permission to check the validity of a set of configuration settings for a configuration template or an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ValidateConfigurationSettings.html
   */
  public toValidateConfigurationSettings() {
    return this.to('ValidateConfigurationSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AbortEnvironmentUpdate',
      'ApplyEnvironmentManagedAction',
      'AssociateEnvironmentOperationsRole',
      'ComposeEnvironments',
      'CreateApplication',
      'CreateApplicationVersion',
      'CreateConfigurationTemplate',
      'CreateEnvironment',
      'CreatePlatformVersion',
      'CreateStorageLocation',
      'DeleteApplication',
      'DeleteApplicationVersion',
      'DeleteConfigurationTemplate',
      'DeleteEnvironmentConfiguration',
      'DeletePlatformVersion',
      'DisassociateEnvironmentOperationsRole',
      'PutInstanceStatistics',
      'RebuildEnvironment',
      'RestartAppServer',
      'SwapEnvironmentCNAMEs',
      'TerminateEnvironment',
      'UpdateApplication',
      'UpdateApplicationResourceLifecycle',
      'UpdateApplicationVersion',
      'UpdateConfigurationTemplate',
      'UpdateEnvironment'
    ],
    Tagging: [
      'AddTags',
      'RemoveTags',
      'UpdateTagsForResource'
    ],
    Read: [
      'CheckDNSAvailability',
      'DescribeAccountAttributes',
      'DescribeConfigurationOptions',
      'DescribeConfigurationSettings',
      'DescribeEnvironmentHealth',
      'DescribeEnvironmentManagedActionHistory',
      'DescribeEnvironmentManagedActions',
      'DescribeEnvironmentResources',
      'DescribeEvents',
      'DescribeInstancesHealth',
      'DescribePlatformVersion',
      'ListTagsForResource',
      'RequestEnvironmentInfo',
      'RetrieveEnvironmentInfo',
      'ValidateConfigurationSettings'
    ],
    List: [
      'DescribeApplicationVersions',
      'DescribeApplications',
      'DescribeEnvironments',
      'ListAvailableSolutionStacks',
      'ListPlatformBranches',
      'ListPlatformVersions'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationName }`);
  }

  /**
   * Adds a resource of type applicationversion to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param versionLabel - Identifier for the versionLabel.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onApplicationversion(applicationName: string, versionLabel: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:applicationversion/${ applicationName }/${ versionLabel }`);
  }

  /**
   * Adds a resource of type configurationtemplate to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onConfigurationtemplate(applicationName: string, templateName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configurationtemplate/${ applicationName }/${ templateName }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param environmentName - Identifier for the environmentName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onEnvironment(applicationName: string, environmentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ applicationName }/${ environmentName }`);
  }

  /**
   * Adds a resource of type solutionstack to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param solutionStackName - Identifier for the solutionStackName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSolutionstack(solutionStackName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }::solutionstack/${ solutionStackName }`);
  }

  /**
   * Adds a resource of type platform to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param platformNameWithVersion - Identifier for the platformNameWithVersion.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPlatform(platformNameWithVersion: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticbeanstalk:${ region ?? this.defaultRegion }::platform/${ platformNameWithVersion }`);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateApplication()
   * - .toCreateApplicationVersion()
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toCreatePlatformVersion()
   * - .toUpdateTagsForResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to resource types:
   * - application
   * - applicationversion
   * - configurationtemplate
   * - environment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateApplication()
   * - .toCreateApplicationVersion()
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toCreatePlatformVersion()
   * - .toRemoveTags()
   * - .toUpdateTagsForResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by an application as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toUpdateConfigurationTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromApplication(value: string | string[], operator?: Operator | string) {
    return this.if(`FromApplication`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by an application version as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromApplicationVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`FromApplicationVersion`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a configuration template as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromConfigurationTemplate(value: string | string[], operator?: Operator | string) {
    return this.if(`FromConfigurationTemplate`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by an environment as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toSwapEnvironmentCNAMEs()
   * - .toUpdateConfigurationTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`FromEnvironment`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a platform as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromPlatform(value: string | string[], operator?: Operator | string) {
    return this.if(`FromPlatform`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a solution stack as a dependency or a constraint on an input parameter
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFromSolutionStack(value: string | string[], operator?: Operator | string) {
    return this.if(`FromSolutionStack`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the application that contains the resource that the action operates on
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toAbortEnvironmentUpdate()
   * - .toApplyEnvironmentManagedAction()
   * - .toComposeEnvironments()
   * - .toCreateApplicationVersion()
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toDeleteApplicationVersion()
   * - .toDeleteConfigurationTemplate()
   * - .toDeleteEnvironmentConfiguration()
   * - .toDescribeApplicationVersions()
   * - .toDescribeConfigurationOptions()
   * - .toDescribeConfigurationSettings()
   * - .toDescribeEnvironmentManagedActionHistory()
   * - .toDescribeEnvironmentManagedActions()
   * - .toDescribeEnvironmentResources()
   * - .toDescribeEnvironments()
   * - .toDescribeEvents()
   * - .toRebuildEnvironment()
   * - .toRequestEnvironmentInfo()
   * - .toRestartAppServer()
   * - .toRetrieveEnvironmentInfo()
   * - .toSwapEnvironmentCNAMEs()
   * - .toTerminateEnvironment()
   * - .toUpdateApplicationVersion()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   * - .toValidateConfigurationSettings()
   *
   * Applies to resource types:
   * - applicationversion
   * - configurationtemplate
   * - environment
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifInApplication(value: string | string[], operator?: Operator | string) {
    return this.if(`InApplication`, value, operator ?? 'ArnLike');
  }
}
