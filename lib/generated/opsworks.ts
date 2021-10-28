import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * Assign a registered instance to a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html
   */
  public toAssignInstance() {
    return this.to('AssignInstance');
  }

  /**
   * Assigns one of the stack's registered Amazon EBS volumes to a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html
   */
  public toAssignVolume() {
    return this.to('AssignVolume');
  }

  /**
   * Associates one of the stack's registered Elastic IP addresses with a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html
   */
  public toAssociateElasticIp() {
    return this.to('AssociateElasticIp');
  }

  /**
   * Attaches an Elastic Load Balancing load balancer to a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html
   */
  public toAttachElasticLoadBalancer() {
    return this.to('AttachElasticLoadBalancer');
  }

  /**
   * Creates a clone of a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html
   */
  public toCloneStack() {
    return this.to('CloneStack');
  }

  /**
   * Creates an app for a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Runs deployment or stack commands
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Creates an instance in a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Creates a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html
   */
  public toCreateLayer() {
    return this.to('CreateLayer');
  }

  /**
   * Creates a new stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    return this.to('CreateStack');
  }

  /**
   * Creates a new user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Deletes a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Deletes a specified instance, which terminates the associated Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Deletes a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html
   */
  public toDeleteLayer() {
    return this.to('DeleteLayer');
  }

  /**
   * Deletes a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    return this.to('DeleteStack');
  }

  /**
   * Deletes a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    return this.to('DeleteUserProfile');
  }

  /**
   * Deletes a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html
   */
  public toDeregisterEcsCluster() {
    return this.to('DeregisterEcsCluster');
  }

  /**
   * Deregisters a specified Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html
   */
  public toDeregisterElasticIp() {
    return this.to('DeregisterElasticIp');
  }

  /**
   * Deregister a registered Amazon EC2 or on-premises instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    return this.to('DeregisterInstance');
  }

  /**
   * Deregisters an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html
   */
  public toDeregisterRdsDbInstance() {
    return this.to('DeregisterRdsDbInstance');
  }

  /**
   * Deregisters an Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html
   */
  public toDeregisterVolume() {
    return this.to('DeregisterVolume');
  }

  /**
   * Describes the available AWS OpsWorks agent versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html
   */
  public toDescribeAgentVersions() {
    return this.to('DescribeAgentVersions');
  }

  /**
   * Requests a description of a specified set of apps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html
   */
  public toDescribeApps() {
    return this.to('DescribeApps');
  }

  /**
   * Describes the results of specified commands
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html
   */
  public toDescribeCommands() {
    return this.to('DescribeCommands');
  }

  /**
   * Requests a description of a specified set of deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html
   */
  public toDescribeDeployments() {
    return this.to('DescribeDeployments');
  }

  /**
   * Describes Amazon ECS clusters that are registered with a stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html
   */
  public toDescribeEcsClusters() {
    return this.to('DescribeEcsClusters');
  }

  /**
   * Describes Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html
   */
  public toDescribeElasticIps() {
    return this.to('DescribeElasticIps');
  }

  /**
   * Describes a stack's Elastic Load Balancing instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html
   */
  public toDescribeElasticLoadBalancers() {
    return this.to('DescribeElasticLoadBalancers');
  }

  /**
   * Requests a description of a set of instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    return this.to('DescribeInstances');
  }

  /**
   * Requests a description of one or more layers in a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html
   */
  public toDescribeLayers() {
    return this.to('DescribeLayers');
  }

  /**
   * Describes load-based auto scaling configurations for specified layers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html
   */
  public toDescribeLoadBasedAutoScaling() {
    return this.to('DescribeLoadBasedAutoScaling');
  }

  /**
   * Describes a user's SSH information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html
   */
  public toDescribeMyUserProfile() {
    return this.to('DescribeMyUserProfile');
  }

  /**
   * Describes the operating systems that are supported by AWS OpsWorks Stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeOperatingSystems.html
   */
  public toDescribeOperatingSystems() {
    return this.to('DescribeOperatingSystems');
  }

  /**
   * Describes the permissions for a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html
   */
  public toDescribePermissions() {
    return this.to('DescribePermissions');
  }

  /**
   * Describe an instance's RAID arrays
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html
   */
  public toDescribeRaidArrays() {
    return this.to('DescribeRaidArrays');
  }

  /**
   * Describes Amazon RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html
   */
  public toDescribeRdsDbInstances() {
    return this.to('DescribeRdsDbInstances');
  }

  /**
   * Describes AWS OpsWorks service errors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html
   */
  public toDescribeServiceErrors() {
    return this.to('DescribeServiceErrors');
  }

  /**
   * Requests a description of a stack's provisioning parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html
   */
  public toDescribeStackProvisioningParameters() {
    return this.to('DescribeStackProvisioningParameters');
  }

  /**
   * Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html
   */
  public toDescribeStackSummary() {
    return this.to('DescribeStackSummary');
  }

  /**
   * Requests a description of one or more stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    return this.to('DescribeStacks');
  }

  /**
   * Describes time-based auto scaling configurations for specified instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html
   */
  public toDescribeTimeBasedAutoScaling() {
    return this.to('DescribeTimeBasedAutoScaling');
  }

  /**
   * Describe specified users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html
   */
  public toDescribeUserProfiles() {
    return this.to('DescribeUserProfiles');
  }

  /**
   * Describes an instance's Amazon EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    return this.to('DescribeVolumes');
  }

  /**
   * Detaches a specified Elastic Load Balancing instance from its layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html
   */
  public toDetachElasticLoadBalancer() {
    return this.to('DetachElasticLoadBalancer');
  }

  /**
   * Disassociates an Elastic IP address from its instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html
   */
  public toDisassociateElasticIp() {
    return this.to('DisassociateElasticIp');
  }

  /**
   * Gets a generated host name for the specified layer, based on the current host name theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html
   */
  public toGetHostnameSuggestion() {
    return this.to('GetHostnameSuggestion');
  }

  /**
   * Grants RDP access to a Windows instance for a specified time period
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toGrantAccess() {
    return this.to('GrantAccess');
  }

  /**
   * Returns a list of tags that are applied to the specified stack or layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Reboots a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toRebootInstance() {
    return this.to('RebootInstance');
  }

  /**
   * Registers a specified Amazon ECS cluster with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html
   */
  public toRegisterEcsCluster() {
    return this.to('RegisterEcsCluster');
  }

  /**
   * Registers an Elastic IP address with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html
   */
  public toRegisterElasticIp() {
    return this.to('RegisterElasticIp');
  }

  /**
   * Registers instances with a specified stack that were created outside of AWS OpsWorks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    return this.to('RegisterInstance');
  }

  /**
   * Registers an Amazon RDS instance with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html
   */
  public toRegisterRdsDbInstance() {
    return this.to('RegisterRdsDbInstance');
  }

  /**
   * Registers an Amazon EBS volume with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html
   */
  public toRegisterVolume() {
    return this.to('RegisterVolume');
  }

  /**
   * Specify the load-based auto scaling configuration for a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html
   */
  public toSetLoadBasedAutoScaling() {
    return this.to('SetLoadBasedAutoScaling');
  }

  /**
   * Specifies a user's permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html
   */
  public toSetPermission() {
    return this.to('SetPermission');
  }

  /**
   * Specify the time-based auto scaling configuration for a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html
   */
  public toSetTimeBasedAutoScaling() {
    return this.to('SetTimeBasedAutoScaling');
  }

  /**
   * Starts a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html
   */
  public toStartInstance() {
    return this.to('StartInstance');
  }

  /**
   * Starts a stack's instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html
   */
  public toStartStack() {
    return this.to('StartStack');
  }

  /**
   * Stops a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html
   */
  public toStopInstance() {
    return this.to('StopInstance');
  }

  /**
   * Stops a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html
   */
  public toStopStack() {
    return this.to('StopStack');
  }

  /**
   * Apply tags to a specified stack or layer
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Unassigns a registered instance from all of it's layers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html
   */
  public toUnassignInstance() {
    return this.to('UnassignInstance');
  }

  /**
   * Unassigns an assigned Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html
   */
  public toUnassignVolume() {
    return this.to('UnassignVolume');
  }

  /**
   * Removes tags from a specified stack or layer
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Updates a registered Elastic IP address's name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html
   */
  public toUpdateElasticIp() {
    return this.to('UpdateElasticIp');
  }

  /**
   * Updates a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html
   */
  public toUpdateInstance() {
    return this.to('UpdateInstance');
  }

  /**
   * Updates a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html
   */
  public toUpdateLayer() {
    return this.to('UpdateLayer');
  }

  /**
   * Updates a user's SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html
   */
  public toUpdateMyUserProfile() {
    return this.to('UpdateMyUserProfile');
  }

  /**
   * Updates an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html
   */
  public toUpdateRdsDbInstance() {
    return this.to('UpdateRdsDbInstance');
  }

  /**
   * Updates a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    return this.to('UpdateStack');
  }

  /**
   * Updates a specified user profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Updates an Amazon EBS volume's name or mount point
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStack(stackId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:opsworks:${ region || '*' }:${ account || '*' }:stack/${ stackId }/`);
  }
}
