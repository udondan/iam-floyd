import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [opsworks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Opsworks extends PolicyStatement {
  public servicePrefix = 'opsworks';

  /**
   * Statement provider for service [opsworks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to assign a registered instance to a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html
   */
  public toAssignInstance() {
    return this.to('AssignInstance');
  }

  /**
   * Grants permission to assign one of the stack's registered Amazon EBS volumes to a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html
   */
  public toAssignVolume() {
    return this.to('AssignVolume');
  }

  /**
   * Grants permission to associate one of the stack's registered Elastic IP addresses with a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html
   */
  public toAssociateElasticIp() {
    return this.to('AssociateElasticIp');
  }

  /**
   * Grants permission to attach an Elastic Load Balancing load balancer to a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html
   */
  public toAttachElasticLoadBalancer() {
    return this.to('AttachElasticLoadBalancer');
  }

  /**
   * Grants permission to create a clone of a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html
   */
  public toCloneStack() {
    return this.to('CloneStack');
  }

  /**
   * Grants permission to create an app for a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to run deployment or stack commands
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to create an instance in a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to create a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html
   */
  public toCreateLayer() {
    return this.to('CreateLayer');
  }

  /**
   * Grants permission to create a new stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    return this.to('CreateStack');
  }

  /**
   * Grants permission to create a new user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to delete a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete a specified instance, which terminates the associated Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html
   */
  public toDeleteLayer() {
    return this.to('DeleteLayer');
  }

  /**
   * Grants permission to delete a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    return this.to('DeleteStack');
  }

  /**
   * Grants permission to delete a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    return this.to('DeleteUserProfile');
  }

  /**
   * Grants permission to delete a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html
   */
  public toDeregisterEcsCluster() {
    return this.to('DeregisterEcsCluster');
  }

  /**
   * Grants permission to deregister a specified Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html
   */
  public toDeregisterElasticIp() {
    return this.to('DeregisterElasticIp');
  }

  /**
   * Grants permission to deregister a registered Amazon EC2 or on-premises instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    return this.to('DeregisterInstance');
  }

  /**
   * Grants permission to deregister an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html
   */
  public toDeregisterRdsDbInstance() {
    return this.to('DeregisterRdsDbInstance');
  }

  /**
   * Grants permission to deregister an Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html
   */
  public toDeregisterVolume() {
    return this.to('DeregisterVolume');
  }

  /**
   * Grants permission to describe the available AWS OpsWorks agent versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html
   */
  public toDescribeAgentVersions() {
    return this.to('DescribeAgentVersions');
  }

  /**
   * Grants permission to request a description of a specified set of apps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html
   */
  public toDescribeApps() {
    return this.to('DescribeApps');
  }

  /**
   * Grants permission to describe the results of specified commands
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html
   */
  public toDescribeCommands() {
    return this.to('DescribeCommands');
  }

  /**
   * Grants permission to request a description of a specified set of deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html
   */
  public toDescribeDeployments() {
    return this.to('DescribeDeployments');
  }

  /**
   * Grants permission to describe Amazon ECS clusters that are registered with a stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html
   */
  public toDescribeEcsClusters() {
    return this.to('DescribeEcsClusters');
  }

  /**
   * Grants permission to describe Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html
   */
  public toDescribeElasticIps() {
    return this.to('DescribeElasticIps');
  }

  /**
   * Grants permission to describe a stack's Elastic Load Balancing instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html
   */
  public toDescribeElasticLoadBalancers() {
    return this.to('DescribeElasticLoadBalancers');
  }

  /**
   * Grants permission to request a description of a set of instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    return this.to('DescribeInstances');
  }

  /**
   * Grants permission to request a description of one or more layers in a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html
   */
  public toDescribeLayers() {
    return this.to('DescribeLayers');
  }

  /**
   * Grants permission to describe load-based auto scaling configurations for specified layers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html
   */
  public toDescribeLoadBasedAutoScaling() {
    return this.to('DescribeLoadBasedAutoScaling');
  }

  /**
   * Grants permission to describe a user's SSH information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html
   */
  public toDescribeMyUserProfile() {
    return this.to('DescribeMyUserProfile');
  }

  /**
   * Grants permission to describe the operating systems that are supported by AWS OpsWorks Stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeOperatingSystems.html
   */
  public toDescribeOperatingSystems() {
    return this.to('DescribeOperatingSystems');
  }

  /**
   * Grants permission to describe the permissions for a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html
   */
  public toDescribePermissions() {
    return this.to('DescribePermissions');
  }

  /**
   * Grants permission to describe an instance's RAID arrays
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html
   */
  public toDescribeRaidArrays() {
    return this.to('DescribeRaidArrays');
  }

  /**
   * Grants permission to describe Amazon RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html
   */
  public toDescribeRdsDbInstances() {
    return this.to('DescribeRdsDbInstances');
  }

  /**
   * Grants permission to describe AWS OpsWorks service errors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html
   */
  public toDescribeServiceErrors() {
    return this.to('DescribeServiceErrors');
  }

  /**
   * Grants permission to request a description of a stack's provisioning parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html
   */
  public toDescribeStackProvisioningParameters() {
    return this.to('DescribeStackProvisioningParameters');
  }

  /**
   * Grants permission to describe the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html
   */
  public toDescribeStackSummary() {
    return this.to('DescribeStackSummary');
  }

  /**
   * Grants permission to request a description of one or more stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    return this.to('DescribeStacks');
  }

  /**
   * Grants permission to describe time-based auto scaling configurations for specified instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html
   */
  public toDescribeTimeBasedAutoScaling() {
    return this.to('DescribeTimeBasedAutoScaling');
  }

  /**
   * Grants permission to describe specified users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html
   */
  public toDescribeUserProfiles() {
    return this.to('DescribeUserProfiles');
  }

  /**
   * Grants permission to describe an instance's Amazon EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    return this.to('DescribeVolumes');
  }

  /**
   * Grants permission to detache a specified Elastic Load Balancing instance from its layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html
   */
  public toDetachElasticLoadBalancer() {
    return this.to('DetachElasticLoadBalancer');
  }

  /**
   * Grants permission to disassociate an Elastic IP address from its instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html
   */
  public toDisassociateElasticIp() {
    return this.to('DisassociateElasticIp');
  }

  /**
   * Grants permission to get a generated host name for the specified layer, based on the current host name theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html
   */
  public toGetHostnameSuggestion() {
    return this.to('GetHostnameSuggestion');
  }

  /**
   * Grants permission to grant RDP access to a Windows instance for a specified time period
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toGrantAccess() {
    return this.to('GrantAccess');
  }

  /**
   * Grants permission to return a list of tags that are applied to the specified stack or layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to reboot a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toRebootInstance() {
    return this.to('RebootInstance');
  }

  /**
   * Grants permission to register a specified Amazon ECS cluster with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html
   */
  public toRegisterEcsCluster() {
    return this.to('RegisterEcsCluster');
  }

  /**
   * Grants permission to register an Elastic IP address with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html
   */
  public toRegisterElasticIp() {
    return this.to('RegisterElasticIp');
  }

  /**
   * Grants permission to register instances with a specified stack that were created outside of AWS OpsWorks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    return this.to('RegisterInstance');
  }

  /**
   * Grants permission to register an Amazon RDS instance with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html
   */
  public toRegisterRdsDbInstance() {
    return this.to('RegisterRdsDbInstance');
  }

  /**
   * Grants permission to register an Amazon EBS volume with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html
   */
  public toRegisterVolume() {
    return this.to('RegisterVolume');
  }

  /**
   * Grants permission to specify the load-based auto scaling configuration for a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html
   */
  public toSetLoadBasedAutoScaling() {
    return this.to('SetLoadBasedAutoScaling');
  }

  /**
   * Grants permission to specify a user's permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html
   */
  public toSetPermission() {
    return this.to('SetPermission');
  }

  /**
   * Grants permission to specify the time-based auto scaling configuration for a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html
   */
  public toSetTimeBasedAutoScaling() {
    return this.to('SetTimeBasedAutoScaling');
  }

  /**
   * Grants permission to start a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html
   */
  public toStartInstance() {
    return this.to('StartInstance');
  }

  /**
   * Grants permission to start a stack's instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html
   */
  public toStartStack() {
    return this.to('StartStack');
  }

  /**
   * Grants permission to stop a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html
   */
  public toStopInstance() {
    return this.to('StopInstance');
  }

  /**
   * Grants permission to stop a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html
   */
  public toStopStack() {
    return this.to('StopStack');
  }

  /**
   * Grants permission to apply tags to a specified stack or layer
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to unassign a registered instance from all of it's layers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html
   */
  public toUnassignInstance() {
    return this.to('UnassignInstance');
  }

  /**
   * Grants permission to unassign an assigned Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html
   */
  public toUnassignVolume() {
    return this.to('UnassignVolume');
  }

  /**
   * Grants permission to remove tags from a specified stack or layer
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Grants permission to update a registered Elastic IP address's name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html
   */
  public toUpdateElasticIp() {
    return this.to('UpdateElasticIp');
  }

  /**
   * Grants permission to update a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html
   */
  public toUpdateInstance() {
    return this.to('UpdateInstance');
  }

  /**
   * Grants permission to update a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html
   */
  public toUpdateLayer() {
    return this.to('UpdateLayer');
  }

  /**
   * Grants permission to update a user's SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html
   */
  public toUpdateMyUserProfile() {
    return this.to('UpdateMyUserProfile');
  }

  /**
   * Grants permission to update an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html
   */
  public toUpdateRdsDbInstance() {
    return this.to('UpdateRdsDbInstance');
  }

  /**
   * Grants permission to update a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    return this.to('UpdateStack');
  }

  /**
   * Grants permission to update a specified user profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to update an Amazon EBS volume's name or mount point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html
   */
  public toUpdateVolume() {
    return this.to('UpdateVolume');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssignInstance',
      'AssignVolume',
      'AssociateElasticIp',
      'AttachElasticLoadBalancer',
      'CloneStack',
      'CreateApp',
      'CreateDeployment',
      'CreateInstance',
      'CreateLayer',
      'CreateStack',
      'CreateUserProfile',
      'DeleteApp',
      'DeleteInstance',
      'DeleteLayer',
      'DeleteStack',
      'DeleteUserProfile',
      'DeregisterEcsCluster',
      'DeregisterElasticIp',
      'DeregisterInstance',
      'DeregisterRdsDbInstance',
      'DeregisterVolume',
      'DetachElasticLoadBalancer',
      'DisassociateElasticIp',
      'GrantAccess',
      'RebootInstance',
      'RegisterEcsCluster',
      'RegisterElasticIp',
      'RegisterInstance',
      'RegisterRdsDbInstance',
      'RegisterVolume',
      'SetLoadBasedAutoScaling',
      'SetTimeBasedAutoScaling',
      'StartInstance',
      'StartStack',
      'StopInstance',
      'StopStack',
      'UnassignInstance',
      'UnassignVolume',
      'UpdateApp',
      'UpdateElasticIp',
      'UpdateInstance',
      'UpdateLayer',
      'UpdateMyUserProfile',
      'UpdateRdsDbInstance',
      'UpdateStack',
      'UpdateVolume'
    ],
    List: [
      'DescribeAgentVersions',
      'DescribeApps',
      'DescribeCommands',
      'DescribeDeployments',
      'DescribeEcsClusters',
      'DescribeElasticIps',
      'DescribeElasticLoadBalancers',
      'DescribeInstances',
      'DescribeLayers',
      'DescribeLoadBasedAutoScaling',
      'DescribeMyUserProfile',
      'DescribeOperatingSystems',
      'DescribePermissions',
      'DescribeRaidArrays',
      'DescribeRdsDbInstances',
      'DescribeServiceErrors',
      'DescribeStackProvisioningParameters',
      'DescribeStackSummary',
      'DescribeStacks',
      'DescribeTimeBasedAutoScaling',
      'DescribeUserProfiles',
      'DescribeVolumes',
      'ListTags'
    ],
    Read: [
      'GetHostnameSuggestion'
    ],
    'Permissions management': [
      'SetPermission',
      'UpdateUserProfile'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks.html
   *
   * @param stackId - Identifier for the stackId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStack(stackId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:opsworks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stack/${ stackId }/`);
  }
}
