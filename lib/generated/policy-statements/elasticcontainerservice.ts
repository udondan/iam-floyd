import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ecs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ecs extends PolicyStatement {
  public servicePrefix = 'ecs';

  /**
   * Statement provider for service [ecs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html
   */
  public toCreateCapacityProvider() {
    return this.to('CreateCapacityProvider');
  }

  /**
   * Grants permission to create a new Amazon ECS cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCapacityProvider()
   * - .ifFargateEphemeralStorageKmsKey()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to run and maintain a desired number of tasks from a specified task definition via service creation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCapacityProvider()
   * - .ifTaskDefinition()
   * - .ifEnableEbsVolumes()
   * - .ifEnableExecuteCommand()
   * - .ifEnableServiceConnect()
   * - .ifNamespace()
   * - .ifEnableVpcLattice()
   * - .ifEnableEcsManagedTags()
   * - .ifPropagateTags()
   * - .ifAutoAssignPublicIp()
   * - .ifSubnet()
   * - .ifTaskCpu()
   * - .ifTaskMemory()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to create a new Amazon ECS task set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifService()
   * - .ifTaskDefinition()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   */
  public toCreateTaskSet() {
    return this.to('CreateTaskSet');
  }

  /**
   * Grants permission to modify the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountSetting()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  public toDeleteAccountSetting() {
    return this.to('DeleteAccountSetting');
  }

  /**
   * Grants permission to delete one or more custom attributes from an Amazon ECS resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    return this.to('DeleteAttributes');
  }

  /**
   * Grants permission to delete the specified capacity provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html
   */
  public toDeleteCapacityProvider() {
    return this.to('DeleteCapacityProvider');
  }

  /**
   * Grants permission to delete the specified cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete a specified service within a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete the specified task definitions by family and revision
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html
   */
  public toDeleteTaskDefinitions() {
    return this.to('DeleteTaskDefinitions');
  }

  /**
   * Grants permission to delete the specified task set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   */
  public toDeleteTaskSet() {
    return this.to('DeleteTaskSet');
  }

  /**
   * Grants permission to deregister an Amazon ECS container instance from the specified cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   */
  public toDeregisterContainerInstance() {
    return this.to('DeregisterContainerInstance');
  }

  /**
   * Grants permission to deregister the specified task definition by family and revision
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  public toDeregisterTaskDefinition() {
    return this.to('DeregisterTaskDefinition');
  }

  /**
   * Grants permission to describe one or more Amazon ECS capacity providers
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html
   */
  public toDescribeCapacityProviders() {
    return this.to('DescribeCapacityProviders');
  }

  /**
   * Grants permission to describes one or more of your clusters
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * Grants permission to describes Amazon ECS container instances
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   */
  public toDescribeContainerInstances() {
    return this.to('DescribeContainerInstances');
  }

  /**
   * Grants permission to describe one or more of your service deployments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html
   */
  public toDescribeServiceDeployments() {
    return this.to('DescribeServiceDeployments');
  }

  /**
   * Grants permission to describe one or more of your service revisions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceRevisions.html
   */
  public toDescribeServiceRevisions() {
    return this.to('DescribeServiceRevisions');
  }

  /**
   * Grants permission to describe the specified services running in your cluster
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Grants permission to describe a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  public toDescribeTaskDefinition() {
    return this.to('DescribeTaskDefinition');
  }

  /**
   * Grants permission to describe Amazon ECS task sets
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   */
  public toDescribeTaskSets() {
    return this.to('DescribeTaskSets');
  }

  /**
   * Grants permission to describe a specified task or tasks
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   */
  public toDescribeTasks() {
    return this.to('DescribeTasks');
  }

  /**
   * Grants permission to get an endpoint for the Amazon ECS agent to poll for updates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  public toDiscoverPollEndpoint() {
    return this.to('DiscoverPollEndpoint');
  }

  /**
   * Grants permission to run a command remotely on an Amazon ECS container
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifContainerName()
   * - .ifTask()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ExecuteCommand.html
   */
  public toExecuteCommand() {
    return this.to('ExecuteCommand');
  }

  /**
   * Grants permission to retrieve the protection status of tasks in an Amazon ECS service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html
   */
  public toGetTaskProtection() {
    return this.to('GetTaskProtection');
  }

  /**
   * Grants permission to list the account settings for an Amazon ECS resource for a specified principal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  public toListAccountSettings() {
    return this.to('ListAccountSettings');
  }

  /**
   * Grants permission to lists the attributes for Amazon ECS resources within a specified target type and cluster
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   */
  public toListAttributes() {
    return this.to('ListAttributes');
  }

  /**
   * Grants permission to get a list of existing clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to get a list of container instances in a specified cluster
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   */
  public toListContainerInstances() {
    return this.to('ListContainerInstances');
  }

  /**
   * Grants permission to get a list of service deployments for a specified service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServiceDeployments.html
   */
  public toListServiceDeployments() {
    return this.to('ListServiceDeployments');
  }

  /**
   * Grants permission to get a list of services that are running in a specified cluster
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to get a list of services that are running in a specified AWS Cloud Map Namespace
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServicesByNamespace.html
   */
  public toListServicesByNamespace() {
    return this.to('ListServicesByNamespace');
  }

  /**
   * Grants permission to get a list of tags for the specified resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to get a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitionFamilies.html
   */
  public toListTaskDefinitionFamilies() {
    return this.to('ListTaskDefinitionFamilies');
  }

  /**
   * Grants permission to get a list of task definitions that are registered to your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  public toListTaskDefinitions() {
    return this.to('ListTaskDefinitions');
  }

  /**
   * Grants permission to get a list of tasks for a specified cluster
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to an agent to connect with the Amazon ECS service to report status and get commands
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html
   */
  public toPoll() {
    return this.to('Poll');
  }

  /**
   * Grants permission to modify the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountSetting()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  public toPutAccountSetting() {
    return this.to('PutAccountSetting');
  }

  /**
   * Grants permission to modify the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountSetting()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  public toPutAccountSettingDefault() {
    return this.to('PutAccountSettingDefault');
  }

  /**
   * Grants permission to create or update an attribute on an Amazon ECS resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   */
  public toPutAttributes() {
    return this.to('PutAttributes');
  }

  /**
   * Grants permission to modify the available capacity providers and the default capacity provider strategy for a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCapacityProvider()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html
   */
  public toPutClusterCapacityProviders() {
    return this.to('PutClusterCapacityProviders');
  }

  /**
   * Grants permission to register an EC2 instance into the specified cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   */
  public toRegisterContainerInstance() {
    return this.to('RegisterContainerInstance');
  }

  /**
   * Grants permission to register a new task definition from the supplied family and containerDefinitions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifComputeCompatibility()
   * - .ifPrivileged()
   * - .ifTaskCpu()
   * - .ifTaskMemory()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   */
  public toRegisterTaskDefinition() {
    return this.to('RegisterTaskDefinition');
  }

  /**
   * Grants permission to start a task using random placement and the default Amazon ECS scheduler
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifEnableEbsVolumes()
   * - .ifEnableExecuteCommand()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   */
  public toRunTask() {
    return this.to('RunTask');
  }

  /**
   * Grants permission to start a new task from the specified task definition on the specified container instance or instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCluster()
   * - .ifContainerInstances()
   * - .ifEnableEbsVolumes()
   * - .ifEnableExecuteCommand()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   */
  public toStartTask() {
    return this.to('StartTask');
  }

  /**
   * Grants permission to start a telemetry session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch
   */
  public toStartTelemetrySession() {
    return this.to('StartTelemetrySession');
  }

  /**
   * Grants permission to stop an ongoing service deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopServiceDeployment.html
   */
  public toStopServiceDeployment() {
    return this.to('StopServiceDeployment');
  }

  /**
   * Grants permission to stop a running task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   */
  public toStopTask() {
    return this.to('StopTask');
  }

  /**
   * Grants permission to send an acknowledgement that attachments changed states
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   */
  public toSubmitAttachmentStateChanges() {
    return this.to('SubmitAttachmentStateChanges');
  }

  /**
   * Grants permission to send an acknowledgement that a container changed states
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   */
  public toSubmitContainerStateChange() {
    return this.to('SubmitContainerStateChange');
  }

  /**
   * Grants permission to send an acknowledgement that a task changed states
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   */
  public toSubmitTaskStateChange() {
    return this.to('SubmitTaskStateChange');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the specified capacity provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCapacityProvider.html
   */
  public toUpdateCapacityProvider() {
    return this.to('UpdateCapacityProvider');
  }

  /**
   * Grants permission to modify the configuration or settings to use for a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifFargateEphemeralStorageKmsKey()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  /**
   * Grants permission to modify the settings to use for a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html
   */
  public toUpdateClusterSettings() {
    return this.to('UpdateClusterSettings');
  }

  /**
   * Grants permission to update the Amazon ECS container agent on a specified container instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   */
  public toUpdateContainerAgent() {
    return this.to('UpdateContainerAgent');
  }

  /**
   * Grants permission to the user to modify the status of an Amazon ECS container instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   */
  public toUpdateContainerInstancesState() {
    return this.to('UpdateContainerInstancesState');
  }

  /**
   * Grants permission to modify the parameters of a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityProvider()
   * - .ifEnableEbsVolumes()
   * - .ifEnableExecuteCommand()
   * - .ifEnableServiceConnect()
   * - .ifNamespace()
   * - .ifTaskDefinition()
   * - .ifEnableVpcLattice()
   * - .ifEnableEcsManagedTags()
   * - .ifPropagateTags()
   * - .ifAutoAssignPublicIp()
   * - .ifSubnet()
   * - .ifTaskCpu()
   * - .ifTaskMemory()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to modify the primary task set used in a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   */
  public toUpdateServicePrimaryTaskSet() {
    return this.to('UpdateServicePrimaryTaskSet');
  }

  /**
   * Grants permission to modify the protection status of a task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html
   */
  public toUpdateTaskProtection() {
    return this.to('UpdateTaskProtection');
  }

  /**
   * Grants permission to update the specified task set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   */
  public toUpdateTaskSet() {
    return this.to('UpdateTaskSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCapacityProvider',
      'CreateCluster',
      'CreateService',
      'CreateTaskSet',
      'DeleteAccountSetting',
      'DeleteAttributes',
      'DeleteCapacityProvider',
      'DeleteCluster',
      'DeleteService',
      'DeleteTaskDefinitions',
      'DeleteTaskSet',
      'DeregisterContainerInstance',
      'DeregisterTaskDefinition',
      'DiscoverPollEndpoint',
      'ExecuteCommand',
      'Poll',
      'PutAccountSetting',
      'PutAccountSettingDefault',
      'PutAttributes',
      'PutClusterCapacityProviders',
      'RegisterContainerInstance',
      'RegisterTaskDefinition',
      'RunTask',
      'StartTask',
      'StartTelemetrySession',
      'StopServiceDeployment',
      'StopTask',
      'SubmitAttachmentStateChanges',
      'SubmitContainerStateChange',
      'SubmitTaskStateChange',
      'UpdateCapacityProvider',
      'UpdateCluster',
      'UpdateClusterSettings',
      'UpdateContainerAgent',
      'UpdateContainerInstancesState',
      'UpdateService',
      'UpdateServicePrimaryTaskSet',
      'UpdateTaskProtection',
      'UpdateTaskSet'
    ],
    Read: [
      'DescribeCapacityProviders',
      'DescribeClusters',
      'DescribeContainerInstances',
      'DescribeServiceDeployments',
      'DescribeServiceRevisions',
      'DescribeServices',
      'DescribeTaskDefinition',
      'DescribeTaskSets',
      'DescribeTasks',
      'GetTaskProtection',
      'ListAccountSettings',
      'ListTagsForResource'
    ],
    List: [
      'ListAttributes',
      'ListClusters',
      'ListContainerInstances',
      'ListServiceDeployments',
      'ListServices',
      'ListServicesByNamespace',
      'ListTaskDefinitionFamilies',
      'ListTaskDefinitions',
      'ListTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterName }`);
  }

  /**
   * Adds a resource of type container-instance to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-capacity.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param containerInstanceId - Identifier for the containerInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onContainerInstance(clusterName: string, containerInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:container-instance/${ clusterName }/${ containerInstanceId }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onService(clusterName: string, serviceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ clusterName }/${ serviceName }`);
  }

  /**
   * Adds a resource of type service-deployment to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-deployment.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param serviceDeploymentId - Identifier for the serviceDeploymentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifService()
   */
  public onServiceDeployment(clusterName: string, serviceName: string, serviceDeploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service-deployment/${ clusterName }/${ serviceName }/${ serviceDeploymentId }`);
  }

  /**
   * Adds a resource of type service-revision to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-revision.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param serviceRevisionId - Identifier for the serviceRevisionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCluster()
   * - .ifService()
   */
  public onServiceRevision(clusterName: string, serviceName: string, serviceRevisionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service-revision/${ clusterName }/${ serviceName }/${ serviceRevisionId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTask(clusterName: string, taskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:task/${ clusterName }/${ taskId }`);
  }

  /**
   * Adds a resource of type task-definition to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html
   *
   * @param taskDefinitionFamilyName - Identifier for the taskDefinitionFamilyName.
   * @param taskDefinitionRevisionNumber - Identifier for the taskDefinitionRevisionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskDefinition(taskDefinitionFamilyName: string, taskDefinitionRevisionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:task-definition/${ taskDefinitionFamilyName }:${ taskDefinitionRevisionNumber }`);
  }

  /**
   * Adds a resource of type capacity-provider to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-capacity-provider-console-v2.html
   *
   * @param capacityProviderName - Identifier for the capacityProviderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCapacityProvider(capacityProviderName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:capacity-provider/${ capacityProviderName }`);
  }

  /**
   * Adds a resource of type task-set to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-external.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param taskSetId - Identifier for the taskSetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskSet(clusterName: string, serviceName: string, taskSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:task-set/${ clusterName }/${ serviceName }/${ taskSetId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCapacityProvider()
   * - .toCreateCluster()
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toRegisterContainerInstance()
   * - .toRegisterTaskDefinition()
   * - .toRunTask()
   * - .toStartTask()
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toDeleteAttributes()
   * - .toDeleteCapacityProvider()
   * - .toDeleteCluster()
   * - .toDeleteService()
   * - .toDeleteTaskDefinitions()
   * - .toDeleteTaskSet()
   * - .toDeregisterContainerInstance()
   * - .toDescribeCapacityProviders()
   * - .toDescribeClusters()
   * - .toDescribeContainerInstances()
   * - .toDescribeServiceDeployments()
   * - .toDescribeServiceRevisions()
   * - .toDescribeServices()
   * - .toDescribeTaskSets()
   * - .toDescribeTasks()
   * - .toExecuteCommand()
   * - .toGetTaskProtection()
   * - .toListAttributes()
   * - .toListContainerInstances()
   * - .toListServiceDeployments()
   * - .toListTagsForResource()
   * - .toListTasks()
   * - .toPutAttributes()
   * - .toPutClusterCapacityProviders()
   * - .toRegisterContainerInstance()
   * - .toRegisterTaskDefinition()
   * - .toRunTask()
   * - .toStartTask()
   * - .toStopServiceDeployment()
   * - .toStopTask()
   * - .toSubmitAttachmentStateChanges()
   * - .toSubmitContainerStateChange()
   * - .toSubmitTaskStateChange()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCapacityProvider()
   * - .toUpdateCluster()
   * - .toUpdateClusterSettings()
   * - .toUpdateContainerAgent()
   * - .toUpdateContainerInstancesState()
   * - .toUpdateService()
   * - .toUpdateServicePrimaryTaskSet()
   * - .toUpdateTaskProtection()
   * - .toUpdateTaskSet()
   *
   * Applies to resource types:
   * - cluster
   * - container-instance
   * - service
   * - service-deployment
   * - service-revision
   * - task
   * - task-definition
   * - capacity-provider
   * - task-set
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCapacityProvider()
   * - .toCreateCluster()
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toRegisterContainerInstance()
   * - .toRegisterTaskDefinition()
   * - .toRunTask()
   * - .toStartTask()
   * - .toTagResource()
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-createaction
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to resource types:
   * - cluster
   * - container-instance
   * - service
   * - task
   * - task-definition
   * - capacity-provider
   * - task-set
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Amazon ECS account setting name
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDeleteAccountSetting()
   * - .toPutAccountSetting()
   * - .toPutAccountSettingDefault()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountSetting(value: string | string[], operator?: Operator | string) {
    return this.if(`account-setting`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the public IP assignment configuration of your Amazon ECS task or Amazon ECS service that uses awsvpc network mode
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAutoAssignPublicIp(value?: boolean) {
    return this.if(`auto-assign-public-ip`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of an Amazon ECS capacity provider
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toPutClusterCapacityProviders()
   * - .toRunTask()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCapacityProvider(value: string | string[], operator?: Operator | string) {
    return this.if(`capacity-provider`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the ARN of an Amazon ECS cluster
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toDeleteAttributes()
   * - .toDeleteService()
   * - .toDeleteTaskSet()
   * - .toDescribeContainerInstances()
   * - .toDescribeServiceDeployments()
   * - .toDescribeServiceRevisions()
   * - .toDescribeServices()
   * - .toDescribeTaskSets()
   * - .toDescribeTasks()
   * - .toExecuteCommand()
   * - .toGetTaskProtection()
   * - .toListServiceDeployments()
   * - .toListServices()
   * - .toListTasks()
   * - .toPoll()
   * - .toPutAttributes()
   * - .toRunTask()
   * - .toStartTask()
   * - .toStartTelemetrySession()
   * - .toStopServiceDeployment()
   * - .toStopTask()
   * - .toUpdateContainerAgent()
   * - .toUpdateContainerInstancesState()
   * - .toUpdateService()
   * - .toUpdateServicePrimaryTaskSet()
   * - .toUpdateTaskProtection()
   * - .toUpdateTaskSet()
   *
   * Applies to resource types:
   * - service-deployment
   * - service-revision
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCluster(value: string | string[], operator?: Operator | string) {
    return this.if(`cluster`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the required compatibilities field provided in the request
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toRegisterTaskDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComputeCompatibility(value: string | string[], operator?: Operator | string) {
    return this.if(`compute-compatibility`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of an Amazon ECS container instance
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toStartTask()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifContainerInstances(value: string | string[], operator?: Operator | string) {
    return this.if(`container-instances`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the name of an Amazon ECS container which is defined in the ECS task definition
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toExecuteCommand()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContainerName(value: string | string[], operator?: Operator | string) {
    return this.if(`container-name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Amazon ECS managed Amazon EBS volume capability of your ECS task or service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toRunTask()
   * - .toStartTask()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnableEbsVolumes(value: string | string[], operator?: Operator | string) {
    return this.if(`enable-ebs-volumes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the enableECSManagedTags configuration of your Amazon ECS task or Amazon ECS service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnableEcsManagedTags(value?: boolean) {
    return this.if(`enable-ecs-managed-tags`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toRunTask()
   * - .toStartTask()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnableExecuteCommand(value: string | string[], operator?: Operator | string) {
    return this.if(`enable-execute-command`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the enable field value in the Service Connect configuration
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnableServiceConnect(value: string | string[], operator?: Operator | string) {
    return this.if(`enable-service-connect`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the VPC lattice capability of your Amazon ECS service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnableVpcLattice(value: string | string[], operator?: Operator | string) {
    return this.if(`enable-vpc-lattice`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS KMS key id provided in the request
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateCluster()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFargateEphemeralStorageKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`fargate-ephemeral-storage-kms-key`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of AWS Cloud Map namespace which is defined in the Service Connect Configuration
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toListServicesByNamespace()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifNamespace(value: string | string[], operator?: Operator | string) {
    return this.if(`namespace`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the privileged field provided in the request
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toRegisterTaskDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrivileged(value: string | string[], operator?: Operator | string) {
    return this.if(`privileged`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag propagation configuration of your Amazon ECS task or Amazon ECS service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPropagateTags(value: string | string[], operator?: Operator | string) {
    return this.if(`propagate-tags`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of an Amazon ECS service
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateTaskSet()
   * - .toDeleteTaskSet()
   * - .toDescribeServiceDeployments()
   * - .toDescribeServiceRevisions()
   * - .toDescribeTaskSets()
   * - .toStopServiceDeployment()
   * - .toUpdateTaskSet()
   *
   * Applies to resource types:
   * - service-deployment
   * - service-revision
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`service`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the subnet configuration of your Amazon ECS task or Amazon ECS service that uses awsvpc network mode
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnet(value: string | string[], operator?: Operator | string) {
    return this.if(`subnet`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of an Amazon ECS task
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toExecuteCommand()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTask(value: string | string[], operator?: Operator | string) {
    return this.if(`task`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the task cpu, as an integer with 1024 = 1 vCPU, provided in the request
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toRegisterTaskDefinition()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifTaskCpu(value: number | number[], operator?: Operator | string) {
    return this.if(`task-cpu`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the ARN of an Amazon ECS task definition
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTaskDefinition(value: string | string[], operator?: Operator | string) {
    return this.if(`task-definition`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the task memory, as an integer representing MiB, provided in the request
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toRegisterTaskDefinition()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifTaskMemory(value: number | number[], operator?: Operator | string) {
    return this.if(`task-memory`, value, operator ?? 'NumericEquals');
  }
}
