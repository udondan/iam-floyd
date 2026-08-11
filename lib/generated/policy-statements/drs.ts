import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [drs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_drs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Drs extends PolicyStatement {
  public servicePrefix = 'drs';

  /**
   * Statement provider for service [drs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_drs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate CloudFormation stack with source network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_AssociateSourceNetworkStack.html
   */
  public toAssociateSourceNetworkStack() {
    return this.to('AssociateSourceNetworkStack');
  }

  /**
   * Grants permission to extend a source server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateExtendedSourceServer.html
   */
  public toCreateExtendedSourceServer() {
    return this.to('CreateExtendedSourceServer');
  }

  /**
   * Grants permission to create launch configuration template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateLaunchConfigurationTemplate.html
   */
  public toCreateLaunchConfigurationTemplate() {
    return this.to('CreateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to create replication configuration template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateReplicationConfigurationTemplate.html
   */
  public toCreateReplicationConfigurationTemplate() {
    return this.to('CreateReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to create a source network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateSourceNetwork.html
   */
  public toCreateSourceNetwork() {
    return this.to('CreateSourceNetwork');
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete a launch action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchAction.html
   */
  public toDeleteLaunchAction() {
    return this.to('DeleteLaunchAction');
  }

  /**
   * Grants permission to delete launch configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html
   */
  public toDeleteLaunchConfigurationTemplate() {
    return this.to('DeleteLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to delete recovery instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteRecoveryInstance.html
   */
  public toDeleteRecoveryInstance() {
    return this.to('DeleteRecoveryInstance');
  }

  /**
   * Grants permission to delete replication configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html
   */
  public toDeleteReplicationConfigurationTemplate() {
    return this.to('DeleteReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to delete source network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceNetwork.html
   */
  public toDeleteSourceNetwork() {
    return this.to('DeleteSourceNetwork');
  }

  /**
   * Grants permission to delete source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceServer.html
   */
  public toDeleteSourceServer() {
    return this.to('DeleteSourceServer');
  }

  /**
   * Grants permission to describe job log items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobLogItems.html
   */
  public toDescribeJobLogItems() {
    return this.to('DescribeJobLogItems');
  }

  /**
   * Grants permission to describe jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    return this.to('DescribeJobs');
  }

  /**
   * Grants permission to describe launch configuration template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html
   */
  public toDescribeLaunchConfigurationTemplates() {
    return this.to('DescribeLaunchConfigurationTemplates');
  }

  /**
   * Grants permission to describe recovery instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoveryInstances.html
   */
  public toDescribeRecoveryInstances() {
    return this.to('DescribeRecoveryInstances');
  }

  /**
   * Grants permission to describe recovery snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoverySnapshots.html
   */
  public toDescribeRecoverySnapshots() {
    return this.to('DescribeRecoverySnapshots');
  }

  /**
   * Grants permission to describe replication configuration template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html
   */
  public toDescribeReplicationConfigurationTemplates() {
    return this.to('DescribeReplicationConfigurationTemplates');
  }

  /**
   * Grants permission to describe source networks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceNetworks.html
   */
  public toDescribeSourceNetworks() {
    return this.to('DescribeSourceNetworks');
  }

  /**
   * Grants permission to describe source servers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceServers.html
   */
  public toDescribeSourceServers() {
    return this.to('DescribeSourceServers');
  }

  /**
   * Grants permission to disconnect recovery instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectRecoveryInstance.html
   */
  public toDisconnectRecoveryInstance() {
    return this.to('DisconnectRecoveryInstance');
  }

  /**
   * Grants permission to disconnect source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectSourceServer.html
   */
  public toDisconnectSourceServer() {
    return this.to('DisconnectSourceServer');
  }

  /**
   * Grants permission to export CloudFormation template which contains source network resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ExportSourceNetworkCfnTemplate.html
   */
  public toExportSourceNetworkCfnTemplate() {
    return this.to('ExportSourceNetworkCfnTemplate');
  }

  /**
   * Grants permission to get failback replication configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetFailbackReplicationConfiguration.html
   */
  public toGetFailbackReplicationConfiguration() {
    return this.to('GetFailbackReplicationConfiguration');
  }

  /**
   * Grants permission to get launch configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetLaunchConfiguration.html
   */
  public toGetLaunchConfiguration() {
    return this.to('GetLaunchConfiguration');
  }

  /**
   * Grants permission to get replication configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetReplicationConfiguration.html
   */
  public toGetReplicationConfiguration() {
    return this.to('GetReplicationConfiguration');
  }

  /**
   * Grants permission to initialize service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_InitializeService.html
   */
  public toInitializeService() {
    return this.to('InitializeService');
  }

  /**
   * Grants permission to list extensible source servers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListExtensibleSourceServers.html
   */
  public toListExtensibleSourceServers() {
    return this.to('ListExtensibleSourceServers');
  }

  /**
   * Grants permission to list launch actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListLaunchActions.html
   */
  public toListLaunchActions() {
    return this.to('ListLaunchActions');
  }

  /**
   * Grants permission to list staging accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListStagingAccounts.html
   */
  public toListStagingAccounts() {
    return this.to('ListStagingAccounts');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put a launch action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_PutLaunchAction.html
   */
  public toPutLaunchAction() {
    return this.to('PutLaunchAction');
  }

  /**
   * Grants permission to retry data replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_RetryDataReplication.html
   */
  public toRetryDataReplication() {
    return this.to('RetryDataReplication');
  }

  /**
   * Grants permission to reverse replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ReverseReplication.html
   */
  public toReverseReplication() {
    return this.to('ReverseReplication');
  }

  /**
   * Grants permission to start failback launch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartFailbackLaunch.html
   */
  public toStartFailbackLaunch() {
    return this.to('StartFailbackLaunch');
  }

  /**
   * Grants permission to start recovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartRecovery.html
   */
  public toStartRecovery() {
    return this.to('StartRecovery');
  }

  /**
   * Grants permission to start replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartReplication.html
   */
  public toStartReplication() {
    return this.to('StartReplication');
  }

  /**
   * Grants permission to start network recovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkRecovery.html
   */
  public toStartSourceNetworkRecovery() {
    return this.to('StartSourceNetworkRecovery');
  }

  /**
   * Grants permission to start network replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkReplication.html
   */
  public toStartSourceNetworkReplication() {
    return this.to('StartSourceNetworkReplication');
  }

  /**
   * Grants permission to stop failback
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopFailback.html
   */
  public toStopFailback() {
    return this.to('StopFailback');
  }

  /**
   * Grants permission to stop replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopReplication.html
   */
  public toStopReplication() {
    return this.to('StopReplication');
  }

  /**
   * Grants permission to stop network replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopSourceNetworkReplication.html
   */
  public toStopSourceNetworkReplication() {
    return this.to('StopSourceNetworkReplication');
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate recovery instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_TerminateRecoveryInstances.html
   */
  public toTerminateRecoveryInstances() {
    return this.to('TerminateRecoveryInstances');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update failback replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateFailbackReplicationConfiguration.html
   */
  public toUpdateFailbackReplicationConfiguration() {
    return this.to('UpdateFailbackReplicationConfiguration');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfiguration.html
   */
  public toUpdateLaunchConfiguration() {
    return this.to('UpdateLaunchConfiguration');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html
   */
  public toUpdateLaunchConfigurationTemplate() {
    return this.to('UpdateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to update replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfiguration.html
   */
  public toUpdateReplicationConfiguration() {
    return this.to('UpdateReplicationConfiguration');
  }

  /**
   * Grants permission to update replication configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html
   */
  public toUpdateReplicationConfigurationTemplate() {
    return this.to('UpdateReplicationConfigurationTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateSourceNetworkStack',
      'CreateExtendedSourceServer',
      'CreateLaunchConfigurationTemplate',
      'CreateReplicationConfigurationTemplate',
      'CreateSourceNetwork',
      'DeleteJob',
      'DeleteLaunchAction',
      'DeleteLaunchConfigurationTemplate',
      'DeleteRecoveryInstance',
      'DeleteReplicationConfigurationTemplate',
      'DeleteSourceNetwork',
      'DeleteSourceServer',
      'DisconnectRecoveryInstance',
      'DisconnectSourceServer',
      'ExportSourceNetworkCfnTemplate',
      'InitializeService',
      'PutLaunchAction',
      'RetryDataReplication',
      'ReverseReplication',
      'StartFailbackLaunch',
      'StartRecovery',
      'StartReplication',
      'StartSourceNetworkRecovery',
      'StartSourceNetworkReplication',
      'StopFailback',
      'StopReplication',
      'StopSourceNetworkReplication',
      'TagResource',
      'TerminateRecoveryInstances',
      'UntagResource',
      'UpdateFailbackReplicationConfiguration',
      'UpdateLaunchConfiguration',
      'UpdateLaunchConfigurationTemplate',
      'UpdateReplicationConfiguration',
      'UpdateReplicationConfigurationTemplate'
    ],
    Read: [
      'DescribeJobLogItems',
      'DescribeJobs',
      'DescribeLaunchConfigurationTemplates',
      'DescribeRecoveryInstances',
      'DescribeRecoverySnapshots',
      'DescribeReplicationConfigurationTemplates',
      'DescribeSourceNetworks',
      'DescribeSourceServers',
      'GetFailbackReplicationConfiguration',
      'GetLaunchConfiguration',
      'GetReplicationConfiguration',
      'ListExtensibleSourceServers',
      'ListLaunchActions',
      'ListStagingAccounts',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type JobResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/failback-overview.html
   *
   * @param jobID - Identifier for the jobID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobResource(jobID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobID }`);
  }

  /**
   * Adds a resource of type LaunchConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/default-drs-launch-settings.html
   *
   * @param launchConfigurationTemplateID - Identifier for the launchConfigurationTemplateID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLaunchConfigurationTemplateResource(launchConfigurationTemplateID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:launch-configuration-template/${ launchConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type RecoveryInstanceResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/recovery-instances.html
   *
   * @param recoveryInstanceID - Identifier for the recoveryInstanceID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEC2InstanceARN()
   */
  public onRecoveryInstanceResource(recoveryInstanceID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recovery-instance/${ recoveryInstanceID }`);
  }

  /**
   * Adds a resource of type ReplicationConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/replication-settings-template.html
   *
   * @param replicationConfigurationTemplateID - Identifier for the replicationConfigurationTemplateID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReplicationConfigurationTemplateResource(replicationConfigurationTemplateID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replication-configuration-template/${ replicationConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type SourceNetworkResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/source-networks.html
   *
   * @param sourceNetworkID - Identifier for the sourceNetworkID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSourceNetworkResource(sourceNetworkID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source-network/${ sourceNetworkID }`);
  }

  /**
   * Adds a resource of type SourceServerResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/source-servers.html
   *
   * @param sourceServerID - Identifier for the sourceServerID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSourceServerResource(sourceServerID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source-server/${ sourceServerID }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssociateSourceNetworkStack()
   * - .toCreateExtendedSourceServer()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateSourceNetwork()
   * - .toExportSourceNetworkCfnTemplate()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStartRecovery()
   * - .toStartSourceNetworkRecovery()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
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
   * - .toAssociateSourceNetworkStack()
   * - .toDeleteJob()
   * - .toDeleteLaunchAction()
   * - .toDeleteLaunchConfigurationTemplate()
   * - .toDeleteRecoveryInstance()
   * - .toDeleteReplicationConfigurationTemplate()
   * - .toDeleteSourceNetwork()
   * - .toDeleteSourceServer()
   * - .toDescribeJobLogItems()
   * - .toDescribeRecoverySnapshots()
   * - .toDisconnectRecoveryInstance()
   * - .toDisconnectSourceServer()
   * - .toExportSourceNetworkCfnTemplate()
   * - .toGetFailbackReplicationConfiguration()
   * - .toGetLaunchConfiguration()
   * - .toGetReplicationConfiguration()
   * - .toListLaunchActions()
   * - .toPutLaunchAction()
   * - .toRetryDataReplication()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStartRecovery()
   * - .toStartReplication()
   * - .toStartSourceNetworkRecovery()
   * - .toStartSourceNetworkReplication()
   * - .toStopFailback()
   * - .toStopReplication()
   * - .toStopSourceNetworkReplication()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
   * - .toUntagResource()
   * - .toUpdateFailbackReplicationConfiguration()
   * - .toUpdateLaunchConfiguration()
   * - .toUpdateLaunchConfigurationTemplate()
   * - .toUpdateReplicationConfiguration()
   * - .toUpdateReplicationConfigurationTemplate()
   *
   * Applies to resource types:
   * - JobResource
   * - LaunchConfigurationTemplateResource
   * - RecoveryInstanceResource
   * - ReplicationConfigurationTemplateResource
   * - SourceNetworkResource
   * - SourceServerResource
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
   * - .toAssociateSourceNetworkStack()
   * - .toCreateExtendedSourceServer()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateSourceNetwork()
   * - .toExportSourceNetworkCfnTemplate()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStartRecovery()
   * - .toStartSourceNetworkRecovery()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/supported-iam-actions-tagging.html
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
    return this.if(`CreateAction`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the EC2 instance the request originated from
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/security_iam_authentication.html
   *
   * Applies to actions:
   * - .toDeleteRecoveryInstance()
   * - .toDisconnectRecoveryInstance()
   * - .toGetFailbackReplicationConfiguration()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStopFailback()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
   * - .toUntagResource()
   * - .toUpdateFailbackReplicationConfiguration()
   *
   * Applies to resource types:
   * - RecoveryInstanceResource
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifEC2InstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`EC2InstanceARN`, value, operator ?? 'ArnLike');
  }
}
