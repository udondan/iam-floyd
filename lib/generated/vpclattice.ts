import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [vpc-lattice](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonvpclattice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class VpcLattice extends PolicyStatement {
  public servicePrefix = 'vpc-lattice';

  /**
   * Statement provider for service [vpc-lattice](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonvpclattice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an access log subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - logs:CreateLogDelivery
   * - logs:GetLogDelivery
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateAccessLogSubscription.html
   */
  public toCreateAccessLogSubscription() {
    return this.to('CreateAccessLogSubscription');
  }

  /**
   * Grants permission to create a listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProtocol()
   * - .ifTargetGroupArns()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateListener.html
   */
  public toCreateListener() {
    return this.to('CreateListener');
  }

  /**
   * Grants permission to create a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetGroupArns()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
  }

  /**
   * Grants permission to create a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to create a service network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetwork.html
   */
  public toCreateServiceNetwork() {
    return this.to('CreateServiceNetwork');
  }

  /**
   * Grants permission to create a service network and service association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNetworkArn()
   * - .ifServiceArn()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetworkServiceAssociation.html
   */
  public toCreateServiceNetworkServiceAssociation() {
    return this.to('CreateServiceNetworkServiceAssociation');
  }

  /**
   * Grants permission to create a service network and VPC association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifServiceNetworkArn()
   * - .ifSecurityGroupIds()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetworkVpcAssociation.html
   */
  public toCreateServiceNetworkVpcAssociation() {
    return this.to('CreateServiceNetworkVpcAssociation');
  }

  /**
   * Grants permission to create a target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateTargetGroup.html
   */
  public toCreateTargetGroup() {
    return this.to('CreateTargetGroup');
  }

  /**
   * Grants permission to delete an access log subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - logs:DeleteLogDelivery
   * - logs:GetLogDelivery
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteAccessLogSubscription.html
   */
  public toDeleteAccessLogSubscription() {
    return this.to('DeleteAccessLogSubscription');
  }

  /**
   * Grants permission to delete an auth policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteAuthPolicy.html
   */
  public toDeleteAuthPolicy() {
    return this.to('DeleteAuthPolicy');
  }

  /**
   * Grants permission to delete a listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteListener.html
   */
  public toDeleteListener() {
    return this.to('DeleteListener');
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete a service network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetwork.html
   */
  public toDeleteServiceNetwork() {
    return this.to('DeleteServiceNetwork');
  }

  /**
   * Grants permission to delete a service network service association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNetworkArn()
   * - .ifServiceArn()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetworkServiceAssociation.html
   */
  public toDeleteServiceNetworkServiceAssociation() {
    return this.to('DeleteServiceNetworkServiceAssociation');
  }

  /**
   * Grants permission to delete a service network and VPC association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifServiceNetworkArn()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetworkVpcAssociation.html
   */
  public toDeleteServiceNetworkVpcAssociation() {
    return this.to('DeleteServiceNetworkVpcAssociation');
  }

  /**
   * Grants permission to delete a target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteTargetGroup.html
   */
  public toDeleteTargetGroup() {
    return this.to('DeleteTargetGroup');
  }

  /**
   * Grants permission to deregister targets from a target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeregisterTargets.html
   */
  public toDeregisterTargets() {
    return this.to('DeregisterTargets');
  }

  /**
   * Grants permission to get information about an access log subscription
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - logs:GetLogDelivery
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetAccessLogSubscription.html
   */
  public toGetAccessLogSubscription() {
    return this.to('GetAccessLogSubscription');
  }

  /**
   * Grants permission to get information about an auth policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetAuthPolicy.html
   */
  public toGetAuthPolicy() {
    return this.to('GetAuthPolicy');
  }

  /**
   * Grants permission to get information about a listener
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetListener.html
   */
  public toGetListener() {
    return this.to('GetListener');
  }

  /**
   * Grants permission to get information about a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get information about a rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Grants permission to get information about a service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to get information about a service network
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetwork.html
   */
  public toGetServiceNetwork() {
    return this.to('GetServiceNetwork');
  }

  /**
   * Grants permission to get information about a service network and service association
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceNetworkArn()
   * - .ifServiceArn()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetworkServiceAssociation.html
   */
  public toGetServiceNetworkServiceAssociation() {
    return this.to('GetServiceNetworkServiceAssociation');
  }

  /**
   * Grants permission to get information about a service network and VPC association
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifServiceNetworkArn()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetworkVpcAssociation.html
   */
  public toGetServiceNetworkVpcAssociation() {
    return this.to('GetServiceNetworkVpcAssociation');
  }

  /**
   * Grants permission to get information about a target group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetTargetGroup.html
   */
  public toGetTargetGroup() {
    return this.to('GetTargetGroup');
  }

  /**
   * Grants permission to list some or all access log subscriptions about a service network or a service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListAccessLogSubscriptions.html
   */
  public toListAccessLogSubscriptions() {
    return this.to('ListAccessLogSubscriptions');
  }

  /**
   * Grants permission to list some or all listeners
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListListeners.html
   */
  public toListListeners() {
    return this.to('ListListeners');
  }

  /**
   * Grants permission to list some or all rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to list some or all service network and service associations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServiceNetworkArn()
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworkServiceAssociations.html
   */
  public toListServiceNetworkServiceAssociations() {
    return this.to('ListServiceNetworkServiceAssociations');
  }

  /**
   * Grants permission to list some or all service network and VPC associations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifServiceNetworkArn()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworkVpcAssociations.html
   */
  public toListServiceNetworkVpcAssociations() {
    return this.to('ListServiceNetworkVpcAssociations');
  }

  /**
   * Grants permission to list the service networks owned by a caller account or shared with the caller account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworks.html
   */
  public toListServiceNetworks() {
    return this.to('ListServiceNetworks');
  }

  /**
   * Grants permission to list the services owned by a caller account or shared with the caller account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags for a vpc-lattice resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list some or all target groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTargetGroups.html
   */
  public toListTargetGroups() {
    return this.to('ListTargetGroups');
  }

  /**
   * Grants permission to list some or all targets in a target group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTargets.html
   */
  public toListTargets() {
    return this.to('ListTargets');
  }

  /**
   * Grants permission to create or update the auth policy for a service network or a service
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_PutAuthPolicy.html
   */
  public toPutAuthPolicy() {
    return this.to('PutAuthPolicy');
  }

  /**
   * Grants permission to create a resource policy for a service network or a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to register targets to a target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_RegisterTargets.html
   */
  public toRegisterTargets() {
    return this.to('RegisterTargets');
  }

  /**
   * Grants permission to tag a vpc-lattice resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a vpc-lattice resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an access log subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - logs:GetLogDelivery
   * - logs:UpdateLogDelivery
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateAccessLogSubscription.html
   */
  public toUpdateAccessLogSubscription() {
    return this.to('UpdateAccessLogSubscription');
  }

  /**
   * Grants permission to update a listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetGroupArns()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateListener.html
   */
  public toUpdateListener() {
    return this.to('UpdateListener');
  }

  /**
   * Grants permission to update a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetGroupArns()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Grants permission to update a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to update a service network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateServiceNetwork.html
   */
  public toUpdateServiceNetwork() {
    return this.to('UpdateServiceNetwork');
  }

  /**
   * Grants permission to update a service network and VPC association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifServiceNetworkArn()
   * - .ifSecurityGroupIds()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateServiceNetworkVpcAssociation.html
   */
  public toUpdateServiceNetworkVpcAssociation() {
    return this.to('UpdateServiceNetworkVpcAssociation');
  }

  /**
   * Grants permission to update a target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateTargetGroup.html
   */
  public toUpdateTargetGroup() {
    return this.to('UpdateTargetGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccessLogSubscription',
      'CreateListener',
      'CreateRule',
      'CreateService',
      'CreateServiceNetwork',
      'CreateServiceNetworkServiceAssociation',
      'CreateServiceNetworkVpcAssociation',
      'CreateTargetGroup',
      'DeleteAccessLogSubscription',
      'DeleteListener',
      'DeleteResourcePolicy',
      'DeleteRule',
      'DeleteService',
      'DeleteServiceNetwork',
      'DeleteServiceNetworkServiceAssociation',
      'DeleteServiceNetworkVpcAssociation',
      'DeleteTargetGroup',
      'DeregisterTargets',
      'PutResourcePolicy',
      'RegisterTargets',
      'UpdateAccessLogSubscription',
      'UpdateListener',
      'UpdateRule',
      'UpdateService',
      'UpdateServiceNetwork',
      'UpdateServiceNetworkVpcAssociation',
      'UpdateTargetGroup'
    ],
    'Permissions management': [
      'DeleteAuthPolicy',
      'PutAuthPolicy'
    ],
    Read: [
      'GetAccessLogSubscription',
      'GetAuthPolicy',
      'GetListener',
      'GetResourcePolicy',
      'GetRule',
      'GetService',
      'GetServiceNetwork',
      'GetServiceNetworkServiceAssociation',
      'GetServiceNetworkVpcAssociation',
      'GetTargetGroup',
      'ListTagsForResource'
    ],
    List: [
      'ListAccessLogSubscriptions',
      'ListListeners',
      'ListRules',
      'ListServiceNetworkServiceAssociations',
      'ListServiceNetworkVpcAssociations',
      'ListServiceNetworks',
      'ListServices',
      'ListTargetGroups',
      'ListTargets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ServiceNetwork to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html
   *
   * @param serviceNetworkId - Identifier for the serviceNetworkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAuthType()
   */
  public onServiceNetwork(serviceNetworkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:servicenetwork/${ serviceNetworkId }`);
  }

  /**
   * Adds a resource of type Service to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAuthType()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:service/${ serviceId }`);
  }

  /**
   * Adds a resource of type ServiceNetworkVpcAssociation to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations
   *
   * @param serviceNetworkVpcAssociationId - Identifier for the serviceNetworkVpcAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifSecurityGroupIds()
   * - .ifServiceNetworkArn()
   * - .ifVpcId()
   */
  public onServiceNetworkVpcAssociation(serviceNetworkVpcAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:servicenetworkvpcassociation/${ serviceNetworkVpcAssociationId }`);
  }

  /**
   * Adds a resource of type ServiceNetworkServiceAssociation to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-service-associations
   *
   * @param serviceNetworkServiceAssociationId - Identifier for the serviceNetworkServiceAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifServiceArn()
   * - .ifServiceNetworkArn()
   */
  public onServiceNetworkServiceAssociation(serviceNetworkServiceAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:servicenetworkserviceassociation/${ serviceNetworkServiceAssociationId }`);
  }

  /**
   * Adds a resource of type TargetGroup to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html
   *
   * @param targetGroupId - Identifier for the targetGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifVpcId()
   */
  public onTargetGroup(targetGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:targetgroup/${ targetGroupId }`);
  }

  /**
   * Adds a resource of type Listener to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifProtocol()
   * - .ifTargetGroupArns()
   */
  public onListener(serviceId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:service/${ serviceId }/listener/${ listenerId }`);
  }

  /**
   * Adds a resource of type Rule to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules
   *
   * @param serviceId - Identifier for the serviceId.
   * @param listenerId - Identifier for the listenerId.
   * @param ruleId - Identifier for the ruleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifTargetGroupArns()
   */
  public onRule(serviceId: string, listenerId: string, ruleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:service/${ serviceId }/listener/${ listenerId }/rule/${ ruleId }`);
  }

  /**
   * Adds a resource of type AccessLogSubscription to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html
   *
   * @param accessLogSubscriptionId - Identifier for the accessLogSubscriptionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onAccessLogSubscription(accessLogSubscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || VpcLattice.defaultPartition }:vpc-lattice:${ region || '*' }:${ account || '*' }:accesslogsubscription/${ accessLogSubscriptionId }`);
  }

  /**
   * Filters access by the auth type specified in the request
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateServiceNetwork()
   * - .toUpdateService()
   * - .toUpdateServiceNetwork()
   *
   * Applies to resource types:
   * - ServiceNetwork
   * - Service
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`AuthType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the protocol specified in the request
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateListener()
   *
   * Applies to resource types:
   * - Listener
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProtocol(value: string | string[], operator?: Operator | string) {
    return this.if(`Protocol`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the IDs of security groups
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateServiceNetworkVpcAssociation()
   * - .toUpdateServiceNetworkVpcAssociation()
   *
   * Applies to resource types:
   * - ServiceNetworkVpcAssociation
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of a service
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateServiceNetworkServiceAssociation()
   * - .toDeleteServiceNetworkServiceAssociation()
   * - .toGetServiceNetworkServiceAssociation()
   * - .toListServiceNetworkServiceAssociations()
   *
   * Applies to resource types:
   * - ServiceNetworkServiceAssociation
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of a service network
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateServiceNetworkServiceAssociation()
   * - .toCreateServiceNetworkVpcAssociation()
   * - .toDeleteServiceNetworkServiceAssociation()
   * - .toDeleteServiceNetworkVpcAssociation()
   * - .toGetServiceNetworkServiceAssociation()
   * - .toGetServiceNetworkVpcAssociation()
   * - .toListServiceNetworkServiceAssociations()
   * - .toListServiceNetworkVpcAssociations()
   * - .toUpdateServiceNetworkVpcAssociation()
   *
   * Applies to resource types:
   * - ServiceNetworkVpcAssociation
   * - ServiceNetworkServiceAssociation
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceNetworkArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceNetworkArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARNs of target groups
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateListener()
   * - .toCreateRule()
   * - .toUpdateListener()
   * - .toUpdateRule()
   *
   * Applies to resource types:
   * - Listener
   * - Rule
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTargetGroupArns(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetGroupArns`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ID of a virtual private cloud (VPC)
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/
   *
   * Applies to actions:
   * - .toCreateServiceNetworkVpcAssociation()
   * - .toCreateTargetGroup()
   * - .toDeleteServiceNetworkVpcAssociation()
   * - .toGetServiceNetworkVpcAssociation()
   * - .toListServiceNetworkVpcAssociations()
   * - .toUpdateServiceNetworkVpcAssociation()
   *
   * Applies to resource types:
   * - ServiceNetworkVpcAssociation
   * - TargetGroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcId(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcId`, value, operator || 'StringLike');
  }
}
