import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to attach one or more EC2 instances to the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html
   */
  public toAttachInstances() {
    return this.to('AttachInstances');
  }

  /**
   * Grants permission to attach one or more target groups to the specified Auto Scaling group
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
   * Grants permission to attach one or more load balancers to the specified Auto Scaling group
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
   * Grants permission to attach one or more traffic sources to an Auto Scaling group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTrafficSourceIdentifiers()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachTrafficSources.html
   */
  public toAttachTrafficSources() {
    return this.to('AttachTrafficSources');
  }

  /**
   * Grants permission to delete the specified scheduled actions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
   */
  public toBatchDeleteScheduledAction() {
    return this.to('BatchDeleteScheduledAction');
  }

  /**
   * Grants permission to create or update multiple scheduled scaling actions for an Auto Scaling group
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
   * Grants permission to complete the lifecycle action for the specified token or instance with the specified result
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
   */
  public toCompleteLifecycleAction() {
    return this.to('CompleteLifecycleAction');
  }

  /**
   * Grants permission to create an Auto Scaling group with the specified name and attributes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityReservationIds()
   * - .ifCapacityReservationResourceGroupArns()
   * - .ifInstanceTypes()
   * - .ifLaunchConfigurationName()
   * - .ifLaunchTemplateVersionSpecified()
   * - .ifLoadBalancerNames()
   * - .ifMaxSize()
   * - .ifMinSize()
   * - .ifTargetGroupARNs()
   * - .ifTrafficSourceIdentifiers()
   * - .ifVPCZoneIdentifiers()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html
   */
  public toCreateAutoScalingGroup() {
    return this.to('CreateAutoScalingGroup');
  }

  /**
   * Grants permission to create a launch configuration
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
   * Grants permission to create or update tags for the specified Auto Scaling group
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
   * Grants permission to delete the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
   */
  public toDeleteAutoScalingGroup() {
    return this.to('DeleteAutoScalingGroup');
  }

  /**
   * Grants permission to delete the specified launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
   */
  public toDeleteLaunchConfiguration() {
    return this.to('DeleteLaunchConfiguration');
  }

  /**
   * Grants permission to deletes the specified lifecycle hook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
   */
  public toDeleteLifecycleHook() {
    return this.to('DeleteLifecycleHook');
  }

  /**
   * Grants permission to delete the specified notification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Grants permission to delete the specified Auto Scaling policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to delete the specified scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
  }

  /**
   * Grants permission to delete the specified tags
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
   * Grants permission to delete the warm pool associated with the Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteWarmPool.html
   */
  public toDeleteWarmPool() {
    return this.to('DeleteWarmPool');
  }

  /**
   * Grants permission to describe the current Auto Scaling resource limits for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
  }

  /**
   * Grants permission to describe the policy adjustment types for use with PutScalingPolicy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
   */
  public toDescribeAdjustmentTypes() {
    return this.to('DescribeAdjustmentTypes');
  }

  /**
   * Grants permission to describe one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
   */
  public toDescribeAutoScalingGroups() {
    return this.to('DescribeAutoScalingGroups');
  }

  /**
   * Grants permission to describe one or more Auto Scaling instances. If a list is not provided, the call describes all instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
   */
  public toDescribeAutoScalingInstances() {
    return this.to('DescribeAutoScalingInstances');
  }

  /**
   * Grants permission to describe the notification types that are supported by Auto Scaling
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
   * Grants permission to describe one or more launch configurations. If you omit the list of names, then the call describes all launch configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
   */
  public toDescribeLaunchConfigurations() {
    return this.to('DescribeLaunchConfigurations');
  }

  /**
   * Grants permission to describe the available types of lifecycle hooks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
   */
  public toDescribeLifecycleHookTypes() {
    return this.to('DescribeLifecycleHookTypes');
  }

  /**
   * Grants permission to describe the lifecycle hooks for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
   */
  public toDescribeLifecycleHooks() {
    return this.to('DescribeLifecycleHooks');
  }

  /**
   * Grants permission to describe the target groups for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
   */
  public toDescribeLoadBalancerTargetGroups() {
    return this.to('DescribeLoadBalancerTargetGroups');
  }

  /**
   * Grants permission to describe the load balancers for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    return this.to('DescribeLoadBalancers');
  }

  /**
   * Grants permission to describe the available CloudWatch metrics for Auto Scaling
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
   */
  public toDescribeMetricCollectionTypes() {
    return this.to('DescribeMetricCollectionTypes');
  }

  /**
   * Grants permission to describe the notification actions associated with the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
   */
  public toDescribeNotificationConfigurations() {
    return this.to('DescribeNotificationConfigurations');
  }

  /**
   * Grants permission to describe the policies for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
   */
  public toDescribePolicies() {
    return this.to('DescribePolicies');
  }

  /**
   * Grants permission to describe one or more scaling activities for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    return this.to('DescribeScalingActivities');
  }

  /**
   * Grants permission to describe the scaling process types for use with ResumeProcesses and SuspendProcesses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
   */
  public toDescribeScalingProcessTypes() {
    return this.to('DescribeScalingProcessTypes');
  }

  /**
   * Grants permission to describe the actions scheduled for your Auto Scaling group that haven't run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    return this.to('DescribeScheduledActions');
  }

  /**
   * Grants permission to describe the specified tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to describe the termination policies supported by Auto Scaling
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
   */
  public toDescribeTerminationPolicyTypes() {
    return this.to('DescribeTerminationPolicyTypes');
  }

  /**
   * Grants permission to describe the target groups for the specified Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTrafficSources.html
   */
  public toDescribeTrafficSources() {
    return this.to('DescribeTrafficSources');
  }

  /**
   * Grants permission to describe the warm pool associated with the Auto Scaling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeWarmPool.html
   */
  public toDescribeWarmPool() {
    return this.to('DescribeWarmPool');
  }

  /**
   * Grants permission to remove one or more instances from the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
   */
  public toDetachInstances() {
    return this.to('DetachInstances');
  }

  /**
   * Grants permission to detach one or more target groups from the specified Auto Scaling group
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
   * Grants permission to remove one or more load balancers from the specified Auto Scaling group
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
   * Grants permission to detach one or more traffic sources from an Auto Scaling group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTrafficSourceIdentifiers()
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachTrafficSources.html
   */
  public toDetachTrafficSources() {
    return this.to('DetachTrafficSources');
  }

  /**
   * Grants permission to disable monitoring of the specified metrics for the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
   */
  public toDisableMetricsCollection() {
    return this.to('DisableMetricsCollection');
  }

  /**
   * Grants permission to enable monitoring of the specified metrics for the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
   */
  public toEnableMetricsCollection() {
    return this.to('EnableMetricsCollection');
  }

  /**
   * Grants permission to move the specified instances into Standby mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
   */
  public toEnterStandby() {
    return this.to('EnterStandby');
  }

  /**
   * Grants permission to execute the specified policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
   */
  public toExecutePolicy() {
    return this.to('ExecutePolicy');
  }

  /**
   * Grants permission to move the specified instances out of Standby mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
   */
  public toExitStandby() {
    return this.to('ExitStandby');
  }

  /**
   * Grants permission to retrieve the forecast data for a predictive scaling policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_GetPredictiveScalingForecast.html
   */
  public toGetPredictiveScalingForecast() {
    return this.to('GetPredictiveScalingForecast');
  }

  /**
   * Grants permission to create or update a lifecycle hook for the specified Auto Scaling Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
   */
  public toPutLifecycleHook() {
    return this.to('PutLifecycleHook');
  }

  /**
   * Grants permission to configure an Auto Scaling group to send notifications when specified events take place
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
   */
  public toPutNotificationConfiguration() {
    return this.to('PutNotificationConfiguration');
  }

  /**
   * Grants permission to create or update a policy for an Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    return this.to('PutScalingPolicy');
  }

  /**
   * Grants permission to create or update a scheduled scaling action for an Auto Scaling group
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
   * Grants permission to create or update the warm pool associated with the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutWarmPool.html
   */
  public toPutWarmPool() {
    return this.to('PutWarmPool');
  }

  /**
   * Grants permission to record a heartbeat for the lifecycle action associated with the specified token or instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
   */
  public toRecordLifecycleActionHeartbeat() {
    return this.to('RecordLifecycleActionHeartbeat');
  }

  /**
   * Grants permission to resume the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
   */
  public toResumeProcesses() {
    return this.to('ResumeProcesses');
  }

  /**
   * Grants permission to rollback an instance refresh operation in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RollbackInstanceRefresh.html
   */
  public toRollbackInstanceRefresh() {
    return this.to('RollbackInstanceRefresh');
  }

  /**
   * Grants permission to set the size of the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
   */
  public toSetDesiredCapacity() {
    return this.to('SetDesiredCapacity');
  }

  /**
   * Grants permission to set the health status of the specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
   */
  public toSetInstanceHealth() {
    return this.to('SetInstanceHealth');
  }

  /**
   * Grants permission to update the instance protection settings of the specified instances
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
   * Grants permission to suspend the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
   */
  public toSuspendProcesses() {
    return this.to('SuspendProcesses');
  }

  /**
   * Grants permission to terminate the specified instance and optionally adjust the desired group size
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
   */
  public toTerminateInstanceInAutoScalingGroup() {
    return this.to('TerminateInstanceInAutoScalingGroup');
  }

  /**
   * Grants permission to update the configuration for the specified Auto Scaling group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityReservationIds()
   * - .ifCapacityReservationResourceGroupArns()
   * - .ifInstanceTypes()
   * - .ifLaunchConfigurationName()
   * - .ifLaunchTemplateVersionSpecified()
   * - .ifMaxSize()
   * - .ifMinSize()
   * - .ifVPCZoneIdentifiers()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html
   */
  public toUpdateAutoScalingGroup() {
    return this.to('UpdateAutoScalingGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AttachInstances',
      'AttachLoadBalancerTargetGroups',
      'AttachLoadBalancers',
      'AttachTrafficSources',
      'BatchDeleteScheduledAction',
      'BatchPutScheduledUpdateGroupAction',
      'CancelInstanceRefresh',
      'CompleteLifecycleAction',
      'CreateAutoScalingGroup',
      'CreateLaunchConfiguration',
      'DeleteAutoScalingGroup',
      'DeleteLaunchConfiguration',
      'DeleteLifecycleHook',
      'DeleteNotificationConfiguration',
      'DeletePolicy',
      'DeleteScheduledAction',
      'DeleteWarmPool',
      'DetachInstances',
      'DetachLoadBalancerTargetGroups',
      'DetachLoadBalancers',
      'DetachTrafficSources',
      'DisableMetricsCollection',
      'EnableMetricsCollection',
      'EnterStandby',
      'ExecutePolicy',
      'ExitStandby',
      'PutLifecycleHook',
      'PutNotificationConfiguration',
      'PutScalingPolicy',
      'PutScheduledUpdateGroupAction',
      'PutWarmPool',
      'RecordLifecycleActionHeartbeat',
      'ResumeProcesses',
      'RollbackInstanceRefresh',
      'SetDesiredCapacity',
      'SetInstanceHealth',
      'SetInstanceProtection',
      'StartInstanceRefresh',
      'SuspendProcesses',
      'TerminateInstanceInAutoScalingGroup',
      'UpdateAutoScalingGroup'
    ],
    Tagging: [
      'CreateOrUpdateTags',
      'DeleteTags'
    ],
    List: [
      'DescribeAccountLimits',
      'DescribeAdjustmentTypes',
      'DescribeAutoScalingGroups',
      'DescribeAutoScalingInstances',
      'DescribeAutoScalingNotificationTypes',
      'DescribeInstanceRefreshes',
      'DescribeLaunchConfigurations',
      'DescribeLifecycleHookTypes',
      'DescribeLifecycleHooks',
      'DescribeLoadBalancerTargetGroups',
      'DescribeLoadBalancers',
      'DescribeMetricCollectionTypes',
      'DescribeNotificationConfigurations',
      'DescribePolicies',
      'DescribeScalingActivities',
      'DescribeScalingProcessTypes',
      'DescribeScheduledActions',
      'DescribeTerminationPolicyTypes',
      'DescribeTrafficSources',
      'DescribeWarmPool',
      'GetPredictiveScalingForecast'
    ],
    Read: [
      'DescribeTags'
    ]
  };

  /**
   * Adds a resource of type autoScalingGroup to the statement
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   *
   * @param groupId - Identifier for the groupId.
   * @param groupFriendlyName - Identifier for the groupFriendlyName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   */
  public onAutoScalingGroup(groupId: string, groupFriendlyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:autoscaling:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:autoScalingGroup:${ groupId }:autoScalingGroupName/${ groupFriendlyName }`);
  }

  /**
   * Adds a resource of type launchConfiguration to the statement
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   *
   * @param id - Identifier for the id.
   * @param launchConfigurationName - Identifier for the launchConfigurationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLaunchConfiguration(id: string, launchConfigurationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:autoscaling:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:launchConfiguration:${ id }:launchConfigurationName/${ launchConfigurationName }`);
  }

  /**
   * Filters access based on the Capacity Reservation IDs
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
  public ifCapacityReservationIds(value: string | string[], operator?: Operator | string) {
    return this.if(`CapacityReservationIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the ARN of a Capacity Reservation resource group
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
  public ifCapacityReservationResourceGroupArns(value: string | string[], operator?: Operator | string) {
    return this.if(`CapacityReservationResourceGroupArns`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the AMI ID for the launch configuration
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
    return this.if(`ImageId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the instance type for the launch configuration
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
    return this.if(`InstanceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the instance types present as overrides to a launch template for a mixed instances policy. Use it to qualify which instance types can be explicitly defined in the policy
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
    return this.if(`InstanceTypes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the name of a launch configuration
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
    return this.if(`LaunchConfigurationName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on whether users can specify any version of a launch template or only the Latest or Default version
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
    return this.if(`LaunchTemplateVersionSpecified`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access based on the name of the load balancer
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
    return this.if(`LoadBalancerNames`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the maximum scaling size in the request
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
    return this.if(`MaxSize`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access based on whether the HTTP endpoint is enabled for the instance metadata service
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
    return this.if(`MetadataHttpEndpoint`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the allowed number of hops when calling the instance metadata service
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
    return this.if(`MetadataHttpPutResponseHopLimit`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access based on whether tokens are required when calling the instance metadata service (optional or required)
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
    return this.if(`MetadataHttpTokens`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the minimum scaling size in the request
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
    return this.if(`MinSize`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachInstances()
   * - .toAttachLoadBalancerTargetGroups()
   * - .toAttachLoadBalancers()
   * - .toAttachTrafficSources()
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
   * - .toDeleteWarmPool()
   * - .toDetachInstances()
   * - .toDetachLoadBalancerTargetGroups()
   * - .toDetachLoadBalancers()
   * - .toDetachTrafficSources()
   * - .toDisableMetricsCollection()
   * - .toEnableMetricsCollection()
   * - .toEnterStandby()
   * - .toExecutePolicy()
   * - .toExitStandby()
   * - .toPutLifecycleHook()
   * - .toPutNotificationConfiguration()
   * - .toPutScalingPolicy()
   * - .toPutScheduledUpdateGroupAction()
   * - .toPutWarmPool()
   * - .toRecordLifecycleActionHeartbeat()
   * - .toResumeProcesses()
   * - .toRollbackInstanceRefresh()
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
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the price for Spot Instances for the launch configuration
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
    return this.if(`SpotPrice`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access based on the ARN of a target group
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
    return this.if(`TargetGroupARNs`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access based on the identifiers of the traffic sources
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachTrafficSources()
   * - .toCreateAutoScalingGroup()
   * - .toDetachTrafficSources()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTrafficSourceIdentifiers(value: string | string[], operator?: Operator | string) {
    return this.if(`TrafficSourceIdentifiers`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the identifier of a VPC zone
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
    return this.if(`VPCZoneIdentifiers`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toCreateOrUpdateTags()
   * - .toDeleteTags()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toAttachInstances()
   * - .toAttachLoadBalancerTargetGroups()
   * - .toAttachLoadBalancers()
   * - .toAttachTrafficSources()
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
   * - .toDeleteWarmPool()
   * - .toDetachInstances()
   * - .toDetachLoadBalancerTargetGroups()
   * - .toDetachLoadBalancers()
   * - .toDetachTrafficSources()
   * - .toDisableMetricsCollection()
   * - .toEnableMetricsCollection()
   * - .toEnterStandby()
   * - .toExecutePolicy()
   * - .toExitStandby()
   * - .toPutLifecycleHook()
   * - .toPutNotificationConfiguration()
   * - .toPutScalingPolicy()
   * - .toPutScheduledUpdateGroupAction()
   * - .toPutWarmPool()
   * - .toRecordLifecycleActionHeartbeat()
   * - .toResumeProcesses()
   * - .toRollbackInstanceRefresh()
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
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys
   *
   * Applies to actions:
   * - .toCreateAutoScalingGroup()
   * - .toCreateOrUpdateTags()
   * - .toDeleteTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
