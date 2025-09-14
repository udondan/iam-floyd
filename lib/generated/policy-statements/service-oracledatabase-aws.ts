import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [odb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservice-oracledatabase_aws.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Odb extends PolicyStatement {
  public servicePrefix = 'odb';

  /**
   * Statement provider for service [odb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservice-oracledatabase_aws.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to register the Amazon Web Services Marketplace token for your Amazon Web Services account to activate your Oracle Database@Amazon Web Services subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_AcceptMarketplaceRegistration.html
   */
  public toAcceptMarketplaceRegistration() {
    return this.to('AcceptMarketplaceRegistration');
  }

  /**
   * Grants permission to create a new Autonomous VM cluster in the specified Exadata infrastructure
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CreateCloudAutonomousVmCluster.html
   */
  public toCreateCloudAutonomousVmCluster() {
    return this.to('CreateCloudAutonomousVmCluster');
  }

  /**
   * Grants permission to create an Exadata infrastructure
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CreateCloudExadataInfrastructure.html
   */
  public toCreateCloudExadataInfrastructure() {
    return this.to('CreateCloudExadataInfrastructure');
  }

  /**
   * Grants permission to create a VM cluster on the specified Exadata infrastructure
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CreateCloudVmCluster.html
   */
  public toCreateCloudVmCluster() {
    return this.to('CreateCloudVmCluster');
  }

  /**
   * Grants permission to create a DB Node
   *
   * Access Level: Write
   */
  public toCreateDbNode() {
    return this.to('CreateDbNode');
  }

  /**
   * Grants permission to create an ODB network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CreateOdbNetwork.html
   */
  public toCreateOdbNetwork() {
    return this.to('CreateOdbNetwork');
  }

  /**
   * Grants permission to create an ODB Peering Connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CreateOdbPeeringConnection.html
   */
  public toCreateOdbPeeringConnection() {
    return this.to('CreateOdbPeeringConnection');
  }

  /**
   * Grants permission to create an Outbound Integration
   *
   * Access Level: Write
   */
  public toCreateOutboundIntegration() {
    return this.to('CreateOutboundIntegration');
  }

  /**
   * Grants permission to Deletes an Autonomous VM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DeleteCloudAutonomousVmCluster.html
   */
  public toDeleteCloudAutonomousVmCluster() {
    return this.to('DeleteCloudAutonomousVmCluster');
  }

  /**
   * Grants permission to delete a specified Exadata infrastructure. Before you use this operation, make sure to delete all of the VM clusters that are hosted on this Exadata infrastructure
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DeleteCloudExadataInfrastructure.html
   */
  public toDeleteCloudExadataInfrastructure() {
    return this.to('DeleteCloudExadataInfrastructure');
  }

  /**
   * Grants permission to delete a specified VM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DeleteCloudVmCluster.html
   */
  public toDeleteCloudVmCluster() {
    return this.to('DeleteCloudVmCluster');
  }

  /**
   * Grants permission to delete a DB Node
   *
   * Access Level: Write
   */
  public toDeleteDbNode() {
    return this.to('DeleteDbNode');
  }

  /**
   * Grants permission to delete the specified ODB network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DeleteOdbNetwork.html
   */
  public toDeleteOdbNetwork() {
    return this.to('DeleteOdbNetwork');
  }

  /**
   * Grants permission to delete the specified ODB Peering Connection. When you delete an ODB peering connection, the underlying VPC peering connection is also deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DeleteOdbPeeringConnection.html
   */
  public toDeleteOdbPeeringConnection() {
    return this.to('DeleteOdbPeeringConnection');
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to get information about a specific Autonomous VM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetCloudAutonomousVmCluster.html
   */
  public toGetCloudAutonomousVmCluster() {
    return this.to('GetCloudAutonomousVmCluster');
  }

  /**
   * Grants permission to get information about the specified Exadata infrastructure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetCloudExadataInfrastructure.html
   */
  public toGetCloudExadataInfrastructure() {
    return this.to('GetCloudExadataInfrastructure');
  }

  /**
   * Grants permission to retrieve information about unallocated resources in a specified Cloud Exadata Infrastructure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetCloudExadataInfrastructureUnallocatedResources.html
   */
  public toGetCloudExadataInfrastructureUnallocatedResources() {
    return this.to('GetCloudExadataInfrastructureUnallocatedResources');
  }

  /**
   * Grants permission to get information about the specified VM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetCloudVmCluster.html
   */
  public toGetCloudVmCluster() {
    return this.to('GetCloudVmCluster');
  }

  /**
   * Grants permission to get information about the specified DB node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetDbNode.html
   */
  public toGetDbNode() {
    return this.to('GetDbNode');
  }

  /**
   * Grants permission to get information about the specified database server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetDbServer.html
   */
  public toGetDbServer() {
    return this.to('GetDbServer');
  }

  /**
   * Grants permission to get the tenancy activation link and onboarding status for your Amazon Web Services account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetOciOnboardingStatus.html
   */
  public toGetOciOnboardingStatus() {
    return this.to('GetOciOnboardingStatus');
  }

  /**
   * Grants permission to get information about the specified ODB network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetOdbNetwork.html
   */
  public toGetOdbNetwork() {
    return this.to('GetOdbNetwork');
  }

  /**
   * Grants permission to get information about the specified ODB Peering connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_GetOdbPeeringConnection.html
   */
  public toGetOdbPeeringConnection() {
    return this.to('GetOdbPeeringConnection');
  }

  /**
   * Grants permission to get a resource policy
   *
   * Access Level: Read
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to initialize the ODB service for the first time in an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_InitializeService.html
   */
  public toInitializeService() {
    return this.to('InitializeService');
  }

  /**
   * Grants permission to list all Autonomous VMs in an Autonomous VM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListAutonomousVirtualMachines.html
   */
  public toListAutonomousVirtualMachines() {
    return this.to('ListAutonomousVirtualMachines');
  }

  /**
   * Grants permission to list all Autonomous VM clusters in a specified Cloud Exadata infrastructure
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListCloudAutonomousVmClusters.html
   */
  public toListCloudAutonomousVmClusters() {
    return this.to('ListCloudAutonomousVmClusters');
  }

  /**
   * Grants permission to list information about the Exadata infrastructures owned by your Amazon Web Services account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListCloudExadataInfrastructures.html
   */
  public toListCloudExadataInfrastructures() {
    return this.to('ListCloudExadataInfrastructures');
  }

  /**
   * Grants permission to list information about the VM clusters owned by your Amazon Web Services account or only the ones on the specified Exadata infrastructure
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListCloudVmClusters.html
   */
  public toListCloudVmClusters() {
    return this.to('ListCloudVmClusters');
  }

  /**
   * Grants permission to list information about the DB nodes for the specified VM cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListDbNodes.html
   */
  public toListDbNodes() {
    return this.to('ListDbNodes');
  }

  /**
   * Grants permission to list information about the database servers that belong to the specified Exadata infrastructure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListDbServers.html
   */
  public toListDbServers() {
    return this.to('ListDbServers');
  }

  /**
   * Grants permission to list information about the shapes that are available for an Exadata infrastructure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListDbSystemShapes.html
   */
  public toListDbSystemShapes() {
    return this.to('ListDbSystemShapes');
  }

  /**
   * Grants permission to list information about Oracle Grid Infrastructure (GI) software versions that are available for a VM cluster for the specified shape
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListGiVersions.html
   */
  public toListGiVersions() {
    return this.to('ListGiVersions');
  }

  /**
   * Grants permission to list information about the ODB networks owned by your Amazon Web Services account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListOdbNetworks.html
   */
  public toListOdbNetworks() {
    return this.to('ListOdbNetworks');
  }

  /**
   * Grants permission to list all ODB peering connections or those associated with a specific ODB network
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListOdbPeeringConnections.html
   */
  public toListOdbPeeringConnections() {
    return this.to('ListOdbPeeringConnections');
  }

  /**
   * Grants permission to list information about the system versions that are available for a VM cluster for the specified giVersion and shape
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListSystemVersions.html
   */
  public toListSystemVersions() {
    return this.to('ListSystemVersions');
  }

  /**
   * Grants permission to list information about the tags applied to this resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update a resource policy
   *
   * Access Level: Write
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to reboot the specified DB node in a VM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_RebootDbNode.html
   */
  public toRebootDbNode() {
    return this.to('RebootDbNode');
  }

  /**
   * Grants permission to start the specified DB node in a VM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_StartDbNode.html
   */
  public toStartDbNode() {
    return this.to('StartDbNode');
  }

  /**
   * Grants permission to stop the specified DB node in a VM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_StopDbNode.html
   */
  public toStopDbNode() {
    return this.to('StopDbNode');
  }

  /**
   * Grants permission to apply tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the properties of an Exadata infrastructure resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_UpdateCloudExadataInfrastructure.html
   */
  public toUpdateCloudExadataInfrastructure() {
    return this.to('UpdateCloudExadataInfrastructure');
  }

  /**
   * Grants permission to update properties of a specified ODB network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_UpdateOdbNetwork.html
   */
  public toUpdateOdbNetwork() {
    return this.to('UpdateOdbNetwork');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptMarketplaceRegistration',
      'CreateCloudAutonomousVmCluster',
      'CreateCloudExadataInfrastructure',
      'CreateCloudVmCluster',
      'CreateDbNode',
      'CreateOdbNetwork',
      'CreateOdbPeeringConnection',
      'CreateOutboundIntegration',
      'DeleteCloudAutonomousVmCluster',
      'DeleteCloudExadataInfrastructure',
      'DeleteCloudVmCluster',
      'DeleteDbNode',
      'DeleteOdbNetwork',
      'DeleteOdbPeeringConnection',
      'DeleteResourcePolicy',
      'InitializeService',
      'PutResourcePolicy',
      'RebootDbNode',
      'StartDbNode',
      'StopDbNode',
      'UpdateCloudExadataInfrastructure',
      'UpdateOdbNetwork'
    ],
    Read: [
      'GetCloudAutonomousVmCluster',
      'GetCloudExadataInfrastructure',
      'GetCloudExadataInfrastructureUnallocatedResources',
      'GetCloudVmCluster',
      'GetDbNode',
      'GetDbServer',
      'GetOciOnboardingStatus',
      'GetOdbNetwork',
      'GetOdbPeeringConnection',
      'GetResourcePolicy',
      'ListAutonomousVirtualMachines',
      'ListDbServers',
      'ListDbSystemShapes',
      'ListGiVersions',
      'ListSystemVersions',
      'ListTagsForResource'
    ],
    List: [
      'ListCloudAutonomousVmClusters',
      'ListCloudExadataInfrastructures',
      'ListCloudVmClusters',
      'ListDbNodes',
      'ListOdbNetworks',
      'ListOdbPeeringConnections'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cloud-autonomous-vm-cluster to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CloudAutonomousVmCluster.html
   *
   * @param cloudAutonomousVmClusterId - Identifier for the cloudAutonomousVmClusterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCloudAutonomousVmCluster(cloudAutonomousVmClusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cloud-autonomous-vm-cluster/${ cloudAutonomousVmClusterId }`);
  }

  /**
   * Adds a resource of type cloud-exadata-infrastructure to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CloudExadataInfrastructure.html
   *
   * @param cloudExadataInfrastructureId - Identifier for the cloudExadataInfrastructureId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCloudExadataInfrastructure(cloudExadataInfrastructureId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cloud-exadata-infrastructure/${ cloudExadataInfrastructureId }`);
  }

  /**
   * Adds a resource of type cloud-vm-cluster to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_CloudVmCluster.html
   *
   * @param cloudVmClusterId - Identifier for the cloudVmClusterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCloudVmCluster(cloudVmClusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cloud-vm-cluster/${ cloudVmClusterId }`);
  }

  /**
   * Adds a resource of type db-node to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_DbNode.html
   *
   * @param dbNodeId - Identifier for the dbNodeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbNode(dbNodeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:db-node/${ dbNodeId }`);
  }

  /**
   * Adds a resource of type odb-network to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_OdbNetwork.html
   *
   * @param odbNetworkId - Identifier for the odbNetworkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOdbNetwork(odbNetworkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:odb-network/${ odbNetworkId }`);
  }

  /**
   * Adds a resource of type odb-peering-connection to the statement
   *
   * https://docs.aws.amazon.com/odb/latest/APIReference/API_OdbPeeringConnection.html
   *
   * @param odbPeeringConnectionId - Identifier for the odbPeeringConnectionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOdbPeeringConnection(odbPeeringConnectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:odb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:odb-peering-connection/${ odbPeeringConnectionId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCloudAutonomousVmCluster()
   * - .toCreateCloudExadataInfrastructure()
   * - .toCreateCloudVmCluster()
   * - .toCreateOdbNetwork()
   * - .toCreateOdbPeeringConnection()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - cloud-autonomous-vm-cluster
   * - cloud-exadata-infrastructure
   * - cloud-vm-cluster
   * - db-node
   * - odb-network
   * - odb-peering-connection
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCloudAutonomousVmCluster()
   * - .toCreateCloudExadataInfrastructure()
   * - .toCreateCloudVmCluster()
   * - .toCreateOdbNetwork()
   * - .toCreateOdbPeeringConnection()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
