import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Autoscaling extends PolicyStatement {
  public servicePrefix = 'autoscaling';

  /**
   * Statement provider for service [autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Attaches one or more EC2 instances to the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html
   */
  public toAttachInstances() {
    return this.to('AttachInstances');
  }

  /**
   * Attaches one or more target groups to the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetGroupARNs()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html
   */
  public toAttachLoadBalancerTargetGroups() {
    return this.to('AttachLoadBalancerTargetGroups');
  }

  /**
   * Attaches one or more load balancers to the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLoadBalancerNames()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html
   */
  public toAttachLoadBalancers() {
    return this.to('AttachLoadBalancers');
  }

  /**
   * Deletes the specified scheduled actions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
   */
  public toBatchDeleteScheduledAction() {
    return this.to('BatchDeleteScheduledAction');
  }

  /**
   * Creates or updates multiple scheduled scaling actions for an Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html
   */
  public toBatchPutScheduledUpdateGroupAction() {
    return this.to('BatchPutScheduledUpdateGroupAction');
  }

  /**
   * Grants permission to cancel an instance refresh operation in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CancelInstanceRefresh.html
   */
  public toCancelInstanceRefresh() {
    return this.to('CancelInstanceRefresh');
  }

  /**
   * Completes the lifecycle action for the specified token or instance with the specified result.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
   */
  public toCompleteLifecycleAction() {
    return this.to('CompleteLifecycleAction');
  }

  /**
   * Creates an Auto Scaling group with the specified name and attributes.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   * - .ifLaunchConfigurationName()
   * - .ifLaunchTemplateVersionSpecified()
   * - .ifLoadBalancerNames()
   * - .ifMaxSize()
   * - .ifMinSize()
   * - .ifTargetGroupARNs()
   * - .ifVPCZoneIdentifiers()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html
   */
  public toCreateAutoScalingGroup() {
    return this.to('CreateAutoScalingGroup');
  }

  /**
   * Creates a launch configuration.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifImageId()
   * - .ifInstanceType()
   * - .ifSpotPrice()
   * - .ifMetadataHttpTokens()
   * - .ifMetadataHttpPutResponseHopLimit()
   * - .ifMetadataHttpEndpoint()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html
   */
  public toCreateLaunchConfiguration() {
    return this.to('CreateLaunchConfiguration');
  }

  /**
   * Creates or updates tags for the specified Auto Scaling group.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html
   */
  public toCreateOrUpdateTags() {
    return this.to('CreateOrUpdateTags');
  }

  /**
   * Deletes the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
   */
  public toDeleteAutoScalingGroup() {
    return this.to('DeleteAutoScalingGroup');
  }

  /**
   * Deletes the specified launch configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
   */
  public toDeleteLaunchConfiguration() {
    return this.to('DeleteLaunchConfiguration');
  }

  /**
   * Deletes the specified lifecycle hook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
   */
  public toDeleteLifecycleHook() {
    return this.to('DeleteLifecycleHook');
  }

  /**
   * Deletes the specified notification.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Deletes the specified Auto Scaling policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Deletes the specified scheduled action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
  }

  /**
   * Deletes the specified tags.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Describes the current Auto Scaling resource limits for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
  }

  /**
   * Describes the policy adjustment types for use with PutScalingPolicy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
   */
  public toDescribeAdjustmentTypes() {
    return this.to('DescribeAdjustmentTypes');
  }

  /**
   * Describes one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
   */
  public toDescribeAutoScalingGroups() {
    return this.to('DescribeAutoScalingGroups');
  }

  /**
   * Describes one or more Auto Scaling instances. If a list is not provided, the call describes all instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
   */
  public toDescribeAutoScalingInstances() {
    return this.to('DescribeAutoScalingInstances');
  }

  /**
   * Describes the notification types that are supported by Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html
   */
  public toDescribeAutoScalingNotificationTypes() {
    return this.to('DescribeAutoScalingNotificationTypes');
  }

  /**
   * Grants permission to describe one or more instance refreshes for an Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeInstanceRefreshes.html
   */
  public toDescribeInstanceRefreshes() {
    return this.to('DescribeInstanceRefreshes');
  }

  /**
   * Describes one or more launch configurations. If you omit the list of names, then the call describes all launch configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
   */
  public toDescribeLaunchConfigurations() {
    return this.to('DescribeLaunchConfigurations');
  }

  /**
   * Describes the available types of lifecycle hooks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
   */
  public toDescribeLifecycleHookTypes() {
    return this.to('DescribeLifecycleHookTypes');
  }

  /**
   * Describes the lifecycle hooks for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
   */
  public toDescribeLifecycleHooks() {
    return this.to('DescribeLifecycleHooks');
  }

  /**
   * Describes the target groups for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
   */
  public toDescribeLoadBalancerTargetGroups() {
    return this.to('DescribeLoadBalancerTargetGroups');
  }

  /**
   * Describes the load balancers for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    return this.to('DescribeLoadBalancers');
  }

  /**
   * Describes the available CloudWatch metrics for Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
   */
  public toDescribeMetricCollectionTypes() {
    return this.to('DescribeMetricCollectionTypes');
  }

  /**
   * Describes the notification actions associated with the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
   */
  public toDescribeNotificationConfigurations() {
    return this.to('DescribeNotificationConfigurations');
  }

  /**
   * Describes the policies for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
   */
  public toDescribePolicies() {
    return this.to('DescribePolicies');
  }

  /**
   * Describes one or more scaling activities for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    return this.to('DescribeScalingActivities');
  }

  /**
   * Describes the scaling process types for use with ResumeProcesses and SuspendProcesses.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
   */
  public toDescribeScalingProcessTypes() {
    return this.to('DescribeScalingProcessTypes');
  }

  /**
   * Describes the actions scheduled for your Auto Scaling group that haven't run.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    return this.to('DescribeScheduledActions');
  }

  /**
   * Describes the specified tags.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Describes the termination policies supported by Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
   */
  public toDescribeTerminationPolicyTypes() {
    return this.to('DescribeTerminationPolicyTypes');
  }

  /**
   * Removes one or more instances from the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
   */
  public toDetachInstances() {
    return this.to('DetachInstances');
  }

  /**
   * Detaches one or more target groups from the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetGroupARNs()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html
   */
  public toDetachLoadBalancerTargetGroups() {
    return this.to('DetachLoadBalancerTargetGroups');
  }

  /**
   * Removes one or more load balancers from the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLoadBalancerNames()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html
   */
  public toDetachLoadBalancers() {
    return this.to('DetachLoadBalancers');
  }

  /**
   * Disables monitoring of the specified metrics for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
   */
  public toDisableMetricsCollection() {
    return this.to('DisableMetricsCollection');
  }

  /**
   * Enables monitoring of the specified metrics for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
   */
  public toEnableMetricsCollection() {
    return this.to('EnableMetricsCollection');
  }

  /**
   * Moves the specified instances into Standby mode.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
   */
  public toEnterStandby() {
    return this.to('EnterStandby');
  }

  /**
   * Executes the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
   */
  public toExecutePolicy() {
    return this.to('ExecutePolicy');
  }

  /**
   * Moves the specified instances out of Standby mode.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
   */
  public toExitStandby() {
    return this.to('ExitStandby');
  }

  /**
   * Creates or updates a lifecycle hook for the specified Auto Scaling Group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
   */
  public toPutLifecycleHook() {
    return this.to('PutLifecycleHook');
  }

  /**
   * Configures an Auto Scaling group to send notifications when specified events take place.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
   */
  public toPutNotificationConfiguration() {
    return this.to('PutNotificationConfiguration');
  }

  /**
   * Creates or updates a policy for an Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    return this.to('PutScalingPolicy');
  }

  /**
   * Creates or updates a scheduled scaling action for an Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifMaxSize()
   * - .ifMinSize()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html
   */
  public toPutScheduledUpdateGroupAction() {
    return this.to('PutScheduledUpdateGroupAction');
  }

  /**
   * Records a heartbeat for the lifecycle action associated with the specified token or instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
   */
  public toRecordLifecycleActionHeartbeat() {
    return this.to('RecordLifecycleActionHeartbeat');
  }

  /**
   * Resumes the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
   */
  public toResumeProcesses() {
    return this.to('ResumeProcesses');
  }

  /**
   * Sets the size of the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
   */
  public toSetDesiredCapacity() {
    return this.to('SetDesiredCapacity');
  }

  /**
   * Sets the health status of the specified instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
   */
  public toSetInstanceHealth() {
    return this.to('SetInstanceHealth');
  }

  /**
   * Updates the instance protection settings of the specified instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html
   */
  public toSetInstanceProtection() {
    return this.to('SetInstanceProtection');
  }

  /**
   * Grants permission to start a new instance refresh operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_StartInstanceRefresh.html
   */
  public toStartInstanceRefresh() {
    return this.to('StartInstanceRefresh');
  }

  /**
   * Suspends the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
   */
  public toSuspendProcesses() {
    return this.to('SuspendProcesses');
  }

  /**
   * Terminates the specified instance and optionally adjusts the desired group size.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
   */
  public toTerminateInstanceInAutoScalingGroup() {
    return this.to('TerminateInstanceInAutoScalingGroup');
  }

  /**
   * Updates the configuration for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   * - .ifLaunchConfigurationName()
   * - .ifLaunchTemplateVersionSpecified()
   * - .ifMaxSize()
   * - .ifMinSize()
   * - .ifVPCZoneIdentifiers()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html
   */
  public toUpdateAutoScalingGroup() {
    return this.to('UpdateAutoScalingGroup');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AttachInstances",
      "AttachLoadBalancerTargetGroups",
      "AttachLoadBalancers",
      "BatchDeleteScheduledAction",
      "BatchPutScheduledUpdateGroupAction",
      "CancelInstanceRefresh",
      "CompleteLifecycleAction",
      "CreateLaunchConfiguration",
      "DeleteAutoScalingGroup",
      "DeleteLaunchConfiguration",
      "DeleteLifecycleHook",
      "DeleteNotificationConfiguration",
      "DeletePolicy",
      "DeleteScheduledAction",
      "DetachInstances",
      "DetachLoadBalancerTargetGroups",
      "DetachLoadBalancers",
      "DisableMetricsCollection",
      "EnableMetricsCollection",
      "EnterStandby",
      "ExecutePolicy",
      "ExitStandby",
      "PutLifecycleHook",
      "PutNotificationConfiguration",
      "PutScalingPolicy",
      "PutScheduledUpdateGroupAction",
      "RecordLifecycleActionHeartbeat",
      "ResumeProcesses",
      "SetDesiredCapacity",
      "SetInstanceHealth",
      "SetInstanceProtection",
      "StartInstanceRefresh",
      "SuspendProcesses",
      "TerminateInstanceInAutoScalingGroup",
      "UpdateAutoScalingGroup"
    ],
    "Tagging": [
      "CreateAutoScalingGroup",
      "CreateOrUpdateTags",
      "DeleteTags"
    ],
    "List": [
      "DescribeAccountLimits",
      "DescribeAdjustmentTypes",
      "DescribeAutoScalingGroups",
      "DescribeAutoScalingInstances",
      "DescribeAutoScalingNotificationTypes",
      "DescribeInstanceRefreshes",
      "DescribeLaunchConfigurations",
      "DescribeLifecycleHookTypes",
      "DescribeLifecycleHooks",
      "DescribeLoadBalancerTargetGroups",
      "DescribeLoadBalancers",
      "DescribeMetricCollectionTypes",
      "DescribeNotificationConfigurations",
      "DescribePolicies",
      "DescribeScalingActivities",
      "DescribeScalingProcessTypes",
      "DescribeScheduledActions",
      "DescribeTerminationPolicyTypes"
    ],
    "Read": [
      "DescribeTags"
    ]
  };

  /**
   * Adds a resource of type autoScalingGroup to the statement
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   *
   * @param groupId - Identifier for the groupId.
   * @param groupFriendlyName - Identifier for the groupFriendlyName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   */
  public onAutoScalingGroup(groupId: string, groupFriendlyName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:autoscaling:${Region}:${Account}:autoScalingGroup:${GroupId}:autoScalingGroupName/${GroupFriendlyName}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${GroupFriendlyName}', groupFriendlyName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type launchConfiguration to the statement
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   *
   * @param id - Identifier for the id.
   * @param launchConfigurationName - Identifier for the launchConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLaunchConfiguration(id: string, launchConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:autoscaling:${Region}:${Account}:launchConfiguration:${Id}:launchConfigurationName/${LaunchConfigurationName}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${LaunchConfigurationName}', launchConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The AMI used to create the instance.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageId(value: string | string[], operator?: Operator | string) {
    return this.if(`ImageId`, value, operator || 'StringLike');
  }

  /**
   * The type of instance, in terms of the hardware resources available.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceType(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceType`, value, operator || 'StringLike');
  }

  /**
   * The types of instances, in terms of the hardware resources available.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceTypes`, value, operator || 'StringLike');
  }

  /**
   * The name of a launch configuration.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLaunchConfigurationName(value: string | string[], operator?: Operator | string) {
    return this.if(`LaunchConfigurationName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether users can specify any version of a launch template or only the Latest or Default version
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifLaunchTemplateVersionSpecified(value?: boolean) {
    return this.if(`autoscaling:LaunchTemplateVersionSpecified`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The name of the load balancer.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachLoadBalancers()
   * - .toCreateAutoScalingGroup()
   * - .toDetachLoadBalancers()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLoadBalancerNames(value: string | string[], operator?: Operator | string) {
    return this.if(`LoadBalancerNames`, value, operator || 'StringLike');
  }

  /**
   * The maximum scaling size.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toPutScheduledUpdateGroupAction()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxSize(value: number | number[], operator?: Operator | string) {
    return this.if(`MaxSize`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by whether the HTTP endpoint is enabled for the instance metadata service.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpEndpoint(value: string | string[], operator?: Operator | string) {
    return this.if(`MetadataHttpEndpoint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allowed number of hops when calling the instance metadata service.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMetadataHttpPutResponseHopLimit(value: number | number[], operator?: Operator | string) {
    return this.if(`MetadataHttpPutResponseHopLimit`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by whether tokens are required when calling the instance metadata service (optional or required)
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpTokens(value: string | string[], operator?: Operator | string) {
    return this.if(`MetadataHttpTokens`, value, operator || 'StringLike');
  }

  /**
   * The minimum scaling size.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toPutScheduledUpdateGroupAction()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMinSize(value: number | number[], operator?: Operator | string) {
    return this.if(`MinSize`, value, operator || 'NumericEquals');
  }

  /**
   * The value of a tag attached to a resource.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachInstances()
   * - .toAttachLoadBalancerTargetGroups()
   * - .toAttachLoadBalancers()
   * - .toBatchDeleteScheduledAction()
   * - .toBatchPutScheduledUpdateGroupAction()
   * - .toCancelInstanceRefresh()
   * - .toCompleteLifecycleAction()
   * - .toCreateAutoScalingGroup()
   * - .toCreateOrUpdateTags()
   * - .toDeleteAutoScalingGroup()
   * - .toDeleteLifecycleHook()
   * - .toDeleteNotificationConfiguration()
   * - .toDeletePolicy()
   * - .toDeleteScheduledAction()
   * - .toDeleteTags()
   * - .toDetachInstances()
   * - .toDetachLoadBalancerTargetGroups()
   * - .toDetachLoadBalancers()
   * - .toDisableMetricsCollection()
   * - .toEnableMetricsCollection()
   * - .toEnterStandby()
   * - .toExecutePolicy()
   * - .toExitStandby()
   * - .toPutLifecycleHook()
   * - .toPutNotificationConfiguration()
   * - .toPutScalingPolicy()
   * - .toPutScheduledUpdateGroupAction()
   * - .toRecordLifecycleActionHeartbeat()
   * - .toResumeProcesses()
   * - .toSetDesiredCapacity()
   * - .toSetInstanceHealth()
   * - .toSetInstanceProtection()
   * - .toStartInstanceRefresh()
   * - .toSuspendProcesses()
   * - .toTerminateInstanceInAutoScalingGroup()
   * - .toUpdateAutoScalingGroup()
   *
   * Applies to resource types:
   * - autoScalingGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The spot price associated with an instance.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateLaunchConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSpotPrice(value: number | number[], operator?: Operator | string) {
    return this.if(`SpotPrice`, value, operator || 'NumericEquals');
  }

  /**
   * The ARN of a target group.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachLoadBalancerTargetGroups()
   * - .toCreateAutoScalingGroup()
   * - .toDetachLoadBalancerTargetGroups()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTargetGroupARNs(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetGroupARNs`, value, operator || 'ArnLike');
  }

  /**
   * The identifier of a VPC zone.
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toUpdateAutoScalingGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVPCZoneIdentifiers(value: string | string[], operator?: Operator | string) {
    return this.if(`VPCZoneIdentifiers`, value, operator || 'StringLike');
  }
}
