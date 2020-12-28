import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.
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
   * Creates a new Amazon ECS cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityProvider()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Runs and maintains a desired number of tasks from a specified task definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifTaskDefinition()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Creates a new Amazon ECS task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   * - .ifTaskDefinition()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   */
  public toCreateTaskSet() {
    return this.to('CreateTaskSet');
  }

  /**
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  public toDeleteAccountSetting() {
    return this.to('DeleteAccountSetting');
  }

  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    return this.to('DeleteAttributes');
  }

  /**
   * Deletes the specified capacity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html
   */
  public toDeleteCapacityProvider() {
    return this.to('DeleteCapacityProvider');
  }

  /**
   * Deletes the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Deletes a specified service within a cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Deletes the specified task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   */
  public toDeleteTaskSet() {
    return this.to('DeleteTaskSet');
  }

  /**
   * Deregisters an Amazon ECS container instance from the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   */
  public toDeregisterContainerInstance() {
    return this.to('DeregisterContainerInstance');
  }

  /**
   * Deregisters the specified task definition by family and revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  public toDeregisterTaskDefinition() {
    return this.to('DeregisterTaskDefinition');
  }

  /**
   * Describes one or more Amazon ECS capacity providers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html
   */
  public toDescribeCapacityProviders() {
    return this.to('DescribeCapacityProviders');
  }

  /**
   * Describes one or more of your clusters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * Describes Amazon ECS container instances.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   */
  public toDescribeContainerInstances() {
    return this.to('DescribeContainerInstances');
  }

  /**
   * Describes the specified services running in your cluster.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  public toDescribeTaskDefinition() {
    return this.to('DescribeTaskDefinition');
  }

  /**
   * Describes Amazon ECS task sets.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   */
  public toDescribeTaskSets() {
    return this.to('DescribeTaskSets');
  }

  /**
   * Describes a specified task or tasks.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   */
  public toDescribeTasks() {
    return this.to('DescribeTasks');
  }

  /**
   * Returns an endpoint for the Amazon ECS agent to poll for updates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  public toDiscoverPollEndpoint() {
    return this.to('DiscoverPollEndpoint');
  }

  /**
   * Lists the account settings for an Amazon ECS resource for a specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  public toListAccountSettings() {
    return this.to('ListAccountSettings');
  }

  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   */
  public toListAttributes() {
    return this.to('ListAttributes');
  }

  /**
   * Returns a list of existing clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Returns a list of container instances in a specified cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   */
  public toListContainerInstances() {
    return this.to('ListContainerInstances');
  }

  /**
   * Lists the services that are running in a specified cluster.
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
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public toListTaskDefinitionFamilies() {
    return this.to('ListTaskDefinitionFamilies');
  }

  /**
   * Returns a list of task definitions that are registered to your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  public toListTaskDefinitions() {
    return this.to('ListTaskDefinitions');
  }

  /**
   * Returns a list of tasks for a specified cluster.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to an agent to connect with the Amazon ECS service to report status and get commands.
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
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  public toPutAccountSetting() {
    return this.to('PutAccountSetting');
  }

  /**
   * Modifies the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  public toPutAccountSettingDefault() {
    return this.to('PutAccountSettingDefault');
  }

  /**
   * Create or update an attribute on an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   */
  public toPutAttributes() {
    return this.to('PutAttributes');
  }

  /**
   * Modifies the available capacity providers and the default capacity provider strategy for a cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityProvider()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html
   */
  public toPutClusterCapacityProviders() {
    return this.to('PutClusterCapacityProviders');
  }

  /**
   * Registers an EC2 instance into the specified cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   */
  public toRegisterContainerInstance() {
    return this.to('RegisterContainerInstance');
  }

  /**
   * Registers a new task definition from the supplied family and containerDefinitions.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   */
  public toRegisterTaskDefinition() {
    return this.to('RegisterTaskDefinition');
  }

  /**
   * Start a task using random placement and the default Amazon ECS scheduler.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   */
  public toRunTask() {
    return this.to('RunTask');
  }

  /**
   * Starts a new task from the specified task definition on the specified container instance or instances.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifContainerInstances()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   */
  public toStartTask() {
    return this.to('StartTask');
  }

  /**
   * Grants permission to start a telemetry session.
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
   * Stops a running task.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   */
  public toStopTask() {
    return this.to('StopTask');
  }

  /**
   * Sent to acknowledge that attachments changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   */
  public toSubmitAttachmentStateChanges() {
    return this.to('SubmitAttachmentStateChanges');
  }

  /**
   * Sent to acknowledge that a container changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   */
  public toSubmitContainerStateChange() {
    return this.to('SubmitContainerStateChange');
  }

  /**
   * Sent to acknowledge that a task changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   */
  public toSubmitTaskStateChange() {
    return this.to('SubmitTaskStateChange');
  }

  /**
   * Tags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Untags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Modifies the settings to use for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html
   */
  public toUpdateClusterSettings() {
    return this.to('UpdateClusterSettings');
  }

  /**
   * Updates the Amazon ECS container agent on a specified container instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   */
  public toUpdateContainerAgent() {
    return this.to('UpdateContainerAgent');
  }

  /**
   * Enables the user to modify the status of an Amazon ECS container instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   */
  public toUpdateContainerInstancesState() {
    return this.to('UpdateContainerInstancesState');
  }

  /**
   * Modifies the parameters of a service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifTaskDefinition()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Modifies the primary task set used in a service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   */
  public toUpdateServicePrimaryTaskSet() {
    return this.to('UpdateServicePrimaryTaskSet');
  }

  /**
   * Updates the specified task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   */
  public toUpdateTaskSet() {
    return this.to('UpdateTaskSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCapacityProvider",
      "CreateCluster",
      "CreateService",
      "CreateTaskSet",
      "DeleteAccountSetting",
      "DeleteAttributes",
      "DeleteCapacityProvider",
      "DeleteCluster",
      "DeleteService",
      "DeleteTaskSet",
      "DeregisterContainerInstance",
      "DeregisterTaskDefinition",
      "DiscoverPollEndpoint",
      "Poll",
      "PutAccountSetting",
      "PutAccountSettingDefault",
      "PutAttributes",
      "PutClusterCapacityProviders",
      "RegisterContainerInstance",
      "RegisterTaskDefinition",
      "RunTask",
      "StartTask",
      "StartTelemetrySession",
      "StopTask",
      "SubmitAttachmentStateChanges",
      "SubmitContainerStateChange",
      "SubmitTaskStateChange",
      "UpdateClusterSettings",
      "UpdateContainerAgent",
      "UpdateContainerInstancesState",
      "UpdateService",
      "UpdateServicePrimaryTaskSet",
      "UpdateTaskSet"
    ],
    "Read": [
      "DescribeCapacityProviders",
      "DescribeClusters",
      "DescribeContainerInstances",
      "DescribeServices",
      "DescribeTaskDefinition",
      "DescribeTaskSets",
      "DescribeTasks"
    ],
    "List": [
      "ListAccountSettings",
      "ListAttributes",
      "ListClusters",
      "ListContainerInstances",
      "ListServices",
      "ListTagsForResource",
      "ListTaskDefinitionFamilies",
      "ListTaskDefinitions",
      "ListTasks"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:cluster/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type container-instance to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html
   *
   * @param containerInstanceId - Identifier for the containerInstanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onContainerInstance(containerInstanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:container-instance/${ContainerInstanceId}';
    arn = arn.replace('${ContainerInstanceId}', containerInstanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onService(serviceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:service/${ServiceName}';
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   *
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTask(taskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task/${TaskId}';
    arn = arn.replace('${TaskId}', taskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task-definition to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html
   *
   * @param taskDefinitionFamilyName - Identifier for the taskDefinitionFamilyName.
   * @param taskDefinitionRevisionNumber - Identifier for the taskDefinitionRevisionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskDefinition(taskDefinitionFamilyName: string, taskDefinitionRevisionNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task-definition/${TaskDefinitionFamilyName}:${TaskDefinitionRevisionNumber}';
    arn = arn.replace('${TaskDefinitionFamilyName}', taskDefinitionFamilyName);
    arn = arn.replace('${TaskDefinitionRevisionNumber}', taskDefinitionRevisionNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type capacity-provider to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity_provider_definitions.html
   *
   * @param capacityProviderName - Identifier for the capacityProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCapacityProvider(capacityProviderName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:capacity-provider/${CapacityProviderName}';
    arn = arn.replace('${CapacityProviderName}', capacityProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task-set to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_sets.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param taskSetId - Identifier for the taskSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskSet(clusterName: string, serviceName: string, taskSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task-set/${ClusterName}/${ServiceName}/${TaskSetId}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${TaskSetId}', taskSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource.
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
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The ARN of an Amazon ECS capacity provider.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateService()
   * - .toPutClusterCapacityProviders()
   * - .toRunTask()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCapacityProvider(value: string | string[], operator?: Operator | string) {
    return this.if(`capacity-provider`, value, operator || 'ArnLike');
  }

  /**
   * The ARN of an Amazon ECS cluster.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toDeleteAttributes()
   * - .toDeleteService()
   * - .toDeleteTaskSet()
   * - .toDescribeContainerInstances()
   * - .toDescribeServices()
   * - .toDescribeTaskSets()
   * - .toDescribeTasks()
   * - .toListServices()
   * - .toListTasks()
   * - .toPoll()
   * - .toPutAttributes()
   * - .toRunTask()
   * - .toStartTask()
   * - .toStartTelemetrySession()
   * - .toStopTask()
   * - .toUpdateContainerAgent()
   * - .toUpdateContainerInstancesState()
   * - .toUpdateService()
   * - .toUpdateServicePrimaryTaskSet()
   * - .toUpdateTaskSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCluster(value: string | string[], operator?: Operator | string) {
    return this.if(`cluster`, value, operator || 'ArnLike');
  }

  /**
   * The ARN of an Amazon ECS container instance.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toStartTask()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifContainerInstances(value: string | string[], operator?: Operator | string) {
    return this.if(`container-instances`, value, operator || 'ArnLike');
  }

  /**
   * The ARN of an Amazon ECS service.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateTaskSet()
   * - .toDeleteTaskSet()
   * - .toDescribeTaskSets()
   * - .toUpdateTaskSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`service`, value, operator || 'ArnLike');
  }

  /**
   * The ARN of an Amazon ECS task definition.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
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
    return this.if(`task-definition`, value, operator || 'ArnLike');
  }
}
