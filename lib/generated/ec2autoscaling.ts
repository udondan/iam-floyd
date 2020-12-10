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
    this.to('autoscaling:AttachInstances');
    return this;
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
    this.to('autoscaling:AttachLoadBalancerTargetGroups');
    return this;
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
    this.to('autoscaling:AttachLoadBalancers');
    return this;
  }

  /**
   * Deletes the specified scheduled actions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
   */
  public toBatchDeleteScheduledAction() {
    this.to('autoscaling:BatchDeleteScheduledAction');
    return this;
  }

  /**
   * Creates or updates multiple scheduled scaling actions for an Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html
   */
  public toBatchPutScheduledUpdateGroupAction() {
    this.to('autoscaling:BatchPutScheduledUpdateGroupAction');
    return this;
  }

  /**
   * Grants permission to cancel an instance refresh operation in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CancelInstanceRefresh.html
   */
  public toCancelInstanceRefresh() {
    this.to('autoscaling:CancelInstanceRefresh');
    return this;
  }

  /**
   * Completes the lifecycle action for the specified token or instance with the specified result.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
   */
  public toCompleteLifecycleAction() {
    this.to('autoscaling:CompleteLifecycleAction');
    return this;
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
    this.to('autoscaling:CreateAutoScalingGroup');
    return this;
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
    this.to('autoscaling:CreateLaunchConfiguration');
    return this;
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
    this.to('autoscaling:CreateOrUpdateTags');
    return this;
  }

  /**
   * Deletes the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
   */
  public toDeleteAutoScalingGroup() {
    this.to('autoscaling:DeleteAutoScalingGroup');
    return this;
  }

  /**
   * Deletes the specified launch configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
   */
  public toDeleteLaunchConfiguration() {
    this.to('autoscaling:DeleteLaunchConfiguration');
    return this;
  }

  /**
   * Deletes the specified lifecycle hook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
   */
  public toDeleteLifecycleHook() {
    this.to('autoscaling:DeleteLifecycleHook');
    return this;
  }

  /**
   * Deletes the specified notification.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    this.to('autoscaling:DeleteNotificationConfiguration');
    return this;
  }

  /**
   * Deletes the specified Auto Scaling policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('autoscaling:DeletePolicy');
    return this;
  }

  /**
   * Deletes the specified scheduled action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    this.to('autoscaling:DeleteScheduledAction');
    return this;
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
    this.to('autoscaling:DeleteTags');
    return this;
  }

  /**
   * Describes the current Auto Scaling resource limits for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    this.to('autoscaling:DescribeAccountLimits');
    return this;
  }

  /**
   * Describes the policy adjustment types for use with PutScalingPolicy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
   */
  public toDescribeAdjustmentTypes() {
    this.to('autoscaling:DescribeAdjustmentTypes');
    return this;
  }

  /**
   * Describes one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
   */
  public toDescribeAutoScalingGroups() {
    this.to('autoscaling:DescribeAutoScalingGroups');
    return this;
  }

  /**
   * Describes one or more Auto Scaling instances. If a list is not provided, the call describes all instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
   */
  public toDescribeAutoScalingInstances() {
    this.to('autoscaling:DescribeAutoScalingInstances');
    return this;
  }

  /**
   * Describes the notification types that are supported by Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html
   */
  public toDescribeAutoScalingNotificationTypes() {
    this.to('autoscaling:DescribeAutoScalingNotificationTypes');
    return this;
  }

  /**
   * Grants permission to describe one or more instance refreshes for an Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeInstanceRefreshes.html
   */
  public toDescribeInstanceRefreshes() {
    this.to('autoscaling:DescribeInstanceRefreshes');
    return this;
  }

  /**
   * Describes one or more launch configurations. If you omit the list of names, then the call describes all launch configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
   */
  public toDescribeLaunchConfigurations() {
    this.to('autoscaling:DescribeLaunchConfigurations');
    return this;
  }

  /**
   * Describes the available types of lifecycle hooks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
   */
  public toDescribeLifecycleHookTypes() {
    this.to('autoscaling:DescribeLifecycleHookTypes');
    return this;
  }

  /**
   * Describes the lifecycle hooks for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
   */
  public toDescribeLifecycleHooks() {
    this.to('autoscaling:DescribeLifecycleHooks');
    return this;
  }

  /**
   * Describes the target groups for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
   */
  public toDescribeLoadBalancerTargetGroups() {
    this.to('autoscaling:DescribeLoadBalancerTargetGroups');
    return this;
  }

  /**
   * Describes the load balancers for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    this.to('autoscaling:DescribeLoadBalancers');
    return this;
  }

  /**
   * Describes the available CloudWatch metrics for Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
   */
  public toDescribeMetricCollectionTypes() {
    this.to('autoscaling:DescribeMetricCollectionTypes');
    return this;
  }

  /**
   * Describes the notification actions associated with the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
   */
  public toDescribeNotificationConfigurations() {
    this.to('autoscaling:DescribeNotificationConfigurations');
    return this;
  }

  /**
   * Describes the policies for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
   */
  public toDescribePolicies() {
    this.to('autoscaling:DescribePolicies');
    return this;
  }

  /**
   * Describes one or more scaling activities for the specified Auto Scaling group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    this.to('autoscaling:DescribeScalingActivities');
    return this;
  }

  /**
   * Describes the scaling process types for use with ResumeProcesses and SuspendProcesses.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
   */
  public toDescribeScalingProcessTypes() {
    this.to('autoscaling:DescribeScalingProcessTypes');
    return this;
  }

  /**
   * Describes the actions scheduled for your Auto Scaling group that haven't run.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    this.to('autoscaling:DescribeScheduledActions');
    return this;
  }

  /**
   * Describes the specified tags.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('autoscaling:DescribeTags');
    return this;
  }

  /**
   * Describes the termination policies supported by Auto Scaling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
   */
  public toDescribeTerminationPolicyTypes() {
    this.to('autoscaling:DescribeTerminationPolicyTypes');
    return this;
  }

  /**
   * Removes one or more instances from the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
   */
  public toDetachInstances() {
    this.to('autoscaling:DetachInstances');
    return this;
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
    this.to('autoscaling:DetachLoadBalancerTargetGroups');
    return this;
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
    this.to('autoscaling:DetachLoadBalancers');
    return this;
  }

  /**
   * Disables monitoring of the specified metrics for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
   */
  public toDisableMetricsCollection() {
    this.to('autoscaling:DisableMetricsCollection');
    return this;
  }

  /**
   * Enables monitoring of the specified metrics for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
   */
  public toEnableMetricsCollection() {
    this.to('autoscaling:EnableMetricsCollection');
    return this;
  }

  /**
   * Moves the specified instances into Standby mode.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
   */
  public toEnterStandby() {
    this.to('autoscaling:EnterStandby');
    return this;
  }

  /**
   * Executes the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
   */
  public toExecutePolicy() {
    this.to('autoscaling:ExecutePolicy');
    return this;
  }

  /**
   * Moves the specified instances out of Standby mode.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
   */
  public toExitStandby() {
    this.to('autoscaling:ExitStandby');
    return this;
  }

  /**
   * Creates or updates a lifecycle hook for the specified Auto Scaling Group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
   */
  public toPutLifecycleHook() {
    this.to('autoscaling:PutLifecycleHook');
    return this;
  }

  /**
   * Configures an Auto Scaling group to send notifications when specified events take place.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
   */
  public toPutNotificationConfiguration() {
    this.to('autoscaling:PutNotificationConfiguration');
    return this;
  }

  /**
   * Creates or updates a policy for an Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    this.to('autoscaling:PutScalingPolicy');
    return this;
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
    this.to('autoscaling:PutScheduledUpdateGroupAction');
    return this;
  }

  /**
   * Records a heartbeat for the lifecycle action associated with the specified token or instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
   */
  public toRecordLifecycleActionHeartbeat() {
    this.to('autoscaling:RecordLifecycleActionHeartbeat');
    return this;
  }

  /**
   * Resumes the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
   */
  public toResumeProcesses() {
    this.to('autoscaling:ResumeProcesses');
    return this;
  }

  /**
   * Sets the size of the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
   */
  public toSetDesiredCapacity() {
    this.to('autoscaling:SetDesiredCapacity');
    return this;
  }

  /**
   * Sets the health status of the specified instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
   */
  public toSetInstanceHealth() {
    this.to('autoscaling:SetInstanceHealth');
    return this;
  }

  /**
   * Updates the instance protection settings of the specified instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html
   */
  public toSetInstanceProtection() {
    this.to('autoscaling:SetInstanceProtection');
    return this;
  }

  /**
   * Grants permission to start a new instance refresh operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_StartInstanceRefresh.html
   */
  public toStartInstanceRefresh() {
    this.to('autoscaling:StartInstanceRefresh');
    return this;
  }

  /**
   * Suspends the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
   */
  public toSuspendProcesses() {
    this.to('autoscaling:SuspendProcesses');
    return this;
  }

  /**
   * Terminates the specified instance and optionally adjusts the desired group size.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
   */
  public toTerminateInstanceInAutoScalingGroup() {
    this.to('autoscaling:TerminateInstanceInAutoScalingGroup');
    return this;
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
    this.to('autoscaling:UpdateAutoScalingGroup');
    return this;
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
    return this.if(`autoscaling:ImageId`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:InstanceType`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:InstanceTypes`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:LaunchConfigurationName`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:LoadBalancerNames`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:MaxSize`, value, operator || 'NumericEquals');
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
    return this.if(`autoscaling:MetadataHttpEndpoint`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:MetadataHttpPutResponseHopLimit`, value, operator || 'NumericEquals');
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
    return this.if(`autoscaling:MetadataHttpTokens`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:MinSize`, value, operator || 'NumericEquals');
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
    return this.if(`autoscaling:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`autoscaling:SpotPrice`, value, operator || 'NumericEquals');
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
    return this.if(`autoscaling:TargetGroupARNs`, value, operator || 'ArnLike');
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
    return this.if(`autoscaling:VPCZoneIdentifiers`, value, operator || 'StringLike');
  }
}

export type AutoscalingActionsWrite = 'AttachInstances' | 'AttachLoadBalancerTargetGroups' | 'AttachLoadBalancers' | 'BatchDeleteScheduledAction' | 'BatchPutScheduledUpdateGroupAction' | 'CancelInstanceRefresh' | 'CompleteLifecycleAction' | 'CreateLaunchConfiguration' | 'DeleteAutoScalingGroup' | 'DeleteLaunchConfiguration' | 'DeleteLifecycleHook' | 'DeleteNotificationConfiguration' | 'DeletePolicy' | 'DeleteScheduledAction' | 'DetachInstances' | 'DetachLoadBalancerTargetGroups' | 'DetachLoadBalancers' | 'DisableMetricsCollection' | 'EnableMetricsCollection' | 'EnterStandby' | 'ExecutePolicy' | 'ExitStandby' | 'PutLifecycleHook' | 'PutNotificationConfiguration' | 'PutScalingPolicy' | 'PutScheduledUpdateGroupAction' | 'RecordLifecycleActionHeartbeat' | 'ResumeProcesses' | 'SetDesiredCapacity' | 'SetInstanceHealth' | 'SetInstanceProtection' | 'StartInstanceRefresh' | 'SuspendProcesses' | 'TerminateInstanceInAutoScalingGroup' | 'UpdateAutoScalingGroup';
export type AutoscalingActionsTagging = 'CreateAutoScalingGroup' | 'CreateOrUpdateTags' | 'DeleteTags';
export type AutoscalingActionsList = 'DescribeAccountLimits' | 'DescribeAdjustmentTypes' | 'DescribeAutoScalingGroups' | 'DescribeAutoScalingInstances' | 'DescribeAutoScalingNotificationTypes' | 'DescribeInstanceRefreshes' | 'DescribeLaunchConfigurations' | 'DescribeLifecycleHookTypes' | 'DescribeLifecycleHooks' | 'DescribeLoadBalancerTargetGroups' | 'DescribeLoadBalancers' | 'DescribeMetricCollectionTypes' | 'DescribeNotificationConfigurations' | 'DescribePolicies' | 'DescribeScalingActivities' | 'DescribeScalingProcessTypes' | 'DescribeScheduledActions' | 'DescribeTerminationPolicyTypes';
export type AutoscalingActionsRead = 'DescribeTags';
export type AutoscalingActions = AutoscalingActionsWrite | AutoscalingActionsTagging | AutoscalingActionsList | AutoscalingActionsRead;
