import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [finspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Finspace extends PolicyStatement {
  public servicePrefix = 'finspace';

  /**
   * Statement provider for service [finspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to connect to a kdb cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/interacting-with-kdb-clusters.html
   */
  public toConnectKxCluster() {
    return this.to('ConnectKxCluster');
  }

  /**
   * Grants permission to create a FinSpace environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a changeset for a kdb database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxChangeset.html
   */
  public toCreateKxChangeset() {
    return this.to('CreateKxChangeset');
  }

  /**
   * Grants permission to create a cluster in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:DescribeSubnets
   * - finspace:MountKxDatabase
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxCluster.html
   */
  public toCreateKxCluster() {
    return this.to('CreateKxCluster');
  }

  /**
   * Grants permission to create a kdb database in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxDatabase.html
   */
  public toCreateKxDatabase() {
    return this.to('CreateKxDatabase');
  }

  /**
   * Grants permission to create a dataview in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxDataview.html
   */
  public toCreateKxDataview() {
    return this.to('CreateKxDataview');
  }

  /**
   * Grants permission to create a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxEnvironment.html
   */
  public toCreateKxEnvironment() {
    return this.to('CreateKxEnvironment');
  }

  /**
   * Grants permission to create a scaling group in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxScalingGroup.html
   */
  public toCreateKxScalingGroup() {
    return this.to('CreateKxScalingGroup');
  }

  /**
   * Grants permission to create a user in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxUser.html
   */
  public toCreateKxUser() {
    return this.to('CreateKxUser');
  }

  /**
   * Grants permission to create a volume in a managed kdb environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxVolume.html
   */
  public toCreateKxVolume() {
    return this.to('CreateKxVolume');
  }

  /**
   * Grants permission to create a FinSpace user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete a kdb cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxCluster.html
   */
  public toDeleteKxCluster() {
    return this.to('DeleteKxCluster');
  }

  /**
   * Grants permission to delete a kdb database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxDatabase.html
   */
  public toDeleteKxDatabase() {
    return this.to('DeleteKxDatabase');
  }

  /**
   * Grants permission to delete a dataview in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxDataview.html
   */
  public toDeleteKxDataview() {
    return this.to('DeleteKxDataview');
  }

  /**
   * Grants permission to delete a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxEnvironment.html
   */
  public toDeleteKxEnvironment() {
    return this.to('DeleteKxEnvironment');
  }

  /**
   * Grants permission to delete a scaling group in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxScalingGroup.html
   */
  public toDeleteKxScalingGroup() {
    return this.to('DeleteKxScalingGroup');
  }

  /**
   * Grants permission to delete a kdb user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxUser.html
   */
  public toDeleteKxUser() {
    return this.to('DeleteKxUser');
  }

  /**
   * Grants permission to delete a volume in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxVolume.html
   */
  public toDeleteKxVolume() {
    return this.to('DeleteKxVolume');
  }

  /**
   * Grants permission to describe a FinSpace environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to describe a changeset for a kdb database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxChangeset.html
   */
  public toGetKxChangeset() {
    return this.to('GetKxChangeset');
  }

  /**
   * Grants permission to describe a cluster in a managed kdb environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxCluster.html
   */
  public toGetKxCluster() {
    return this.to('GetKxCluster');
  }

  /**
   * Grants permission to retrieve a connection string for kdb clusters
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - finspace:ConnectKxCluster
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxConnectionString.html
   */
  public toGetKxConnectionString() {
    return this.to('GetKxConnectionString');
  }

  /**
   * Grants permission to describe a kdb database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxDatabase.html
   */
  public toGetKxDatabase() {
    return this.to('GetKxDatabase');
  }

  /**
   * Grants permission to describe a databiew in a managed kdb environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxDataview.html
   */
  public toGetKxDataview() {
    return this.to('GetKxDataview');
  }

  /**
   * Grants permission to describe a managed kdb environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxEnvironment.html
   */
  public toGetKxEnvironment() {
    return this.to('GetKxEnvironment');
  }

  /**
   * Grants permission to describe a scaling group in a managed kdb environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxScalingGroup.html
   */
  public toGetKxScalingGroup() {
    return this.to('GetKxScalingGroup');
  }

  /**
   * Grants permission to describe a kdb user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxUser.html
   */
  public toGetKxUser() {
    return this.to('GetKxUser');
  }

  /**
   * Grants permission to describe a volume in a managed kdb environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxVolume.html
   */
  public toGetKxVolume() {
    return this.to('GetKxVolume');
  }

  /**
   * Grants permission to request status of the loading of sample data bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toGetLoadSampleDataSetGroupIntoEnvironmentStatus() {
    return this.to('GetLoadSampleDataSetGroupIntoEnvironmentStatus');
  }

  /**
   * Grants permission to describe a FinSpace user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to list FinSpace environments in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list changesets for a kdb database
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxChangesets.html
   */
  public toListKxChangesets() {
    return this.to('ListKxChangesets');
  }

  /**
   * Grants permission to list cluster nodes in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxClusterNodes.html
   */
  public toListKxClusterNodes() {
    return this.to('ListKxClusterNodes');
  }

  /**
   * Grants permission to list clusters in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxClusters.html
   */
  public toListKxClusters() {
    return this.to('ListKxClusters');
  }

  /**
   * Grants permission to list kdb databases in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxDatabases.html
   */
  public toListKxDatabases() {
    return this.to('ListKxDatabases');
  }

  /**
   * Grants permission to list dataviews in a database
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxDataviews.html
   */
  public toListKxDataviews() {
    return this.to('ListKxDataviews');
  }

  /**
   * Grants permission to list managed kdb environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxEnvironments.html
   */
  public toListKxEnvironments() {
    return this.to('ListKxEnvironments');
  }

  /**
   * Grants permission to list scaling groups in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxScalingGroups.html
   */
  public toListKxScalingGroups() {
    return this.to('ListKxScalingGroups');
  }

  /**
   * Grants permission to list users in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxUsers.html
   */
  public toListKxUsers() {
    return this.to('ListKxUsers');
  }

  /**
   * Grants permission to list volumes in a managed kdb environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxVolumes.html
   */
  public toListKxVolumes() {
    return this.to('ListKxVolumes');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list FinSpace users in an environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to load sample data bundle into your FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toLoadSampleDataSetGroupIntoEnvironment() {
    return this.to('LoadSampleDataSetGroupIntoEnvironment');
  }

  /**
   * Grants permission to mount a database to a kdb cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-managed-kdb-db.html
   */
  public toMountKxDatabase() {
    return this.to('MountKxDatabase');
  }

  /**
   * Grants permission to reset the password for a FinSpace user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update code configuration for a cluster in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxClusterCodeConfiguration.html
   */
  public toUpdateKxClusterCodeConfiguration() {
    return this.to('UpdateKxClusterCodeConfiguration');
  }

  /**
   * Grants permission to update databases for a cluster in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxClusterDatabases.html
   */
  public toUpdateKxClusterDatabases() {
    return this.to('UpdateKxClusterDatabases');
  }

  /**
   * Grants permission to update a kdb database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxDatabase.html
   */
  public toUpdateKxDatabase() {
    return this.to('UpdateKxDatabase');
  }

  /**
   * Grants permission to update a dataview in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxDataview.html
   */
  public toUpdateKxDataview() {
    return this.to('UpdateKxDataview');
  }

  /**
   * Grants permission to update a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxEnvironment.html
   */
  public toUpdateKxEnvironment() {
    return this.to('UpdateKxEnvironment');
  }

  /**
   * Grants permission to update the network for a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxEnvironmentNetwork.html
   */
  public toUpdateKxEnvironmentNetwork() {
    return this.to('UpdateKxEnvironmentNetwork');
  }

  /**
   * Grants permission to update a kdb user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxUser.html
   */
  public toUpdateKxUser() {
    return this.to('UpdateKxUser');
  }

  /**
   * Grants permission to update a volume in a managed kdb environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxVolume.html
   */
  public toUpdateKxVolume() {
    return this.to('UpdateKxVolume');
  }

  /**
   * Grants permission to update a FinSpace user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ConnectKxCluster',
      'CreateEnvironment',
      'CreateKxChangeset',
      'CreateKxCluster',
      'CreateKxDatabase',
      'CreateKxDataview',
      'CreateKxEnvironment',
      'CreateKxScalingGroup',
      'CreateKxUser',
      'CreateKxVolume',
      'CreateUser',
      'DeleteEnvironment',
      'DeleteKxCluster',
      'DeleteKxDatabase',
      'DeleteKxDataview',
      'DeleteKxEnvironment',
      'DeleteKxScalingGroup',
      'DeleteKxUser',
      'DeleteKxVolume',
      'LoadSampleDataSetGroupIntoEnvironment',
      'MountKxDatabase',
      'ResetUserPassword',
      'UpdateEnvironment',
      'UpdateKxClusterCodeConfiguration',
      'UpdateKxClusterDatabases',
      'UpdateKxDatabase',
      'UpdateKxDataview',
      'UpdateKxEnvironment',
      'UpdateKxEnvironmentNetwork',
      'UpdateKxUser',
      'UpdateKxVolume',
      'UpdateUser'
    ],
    Read: [
      'GetEnvironment',
      'GetKxChangeset',
      'GetKxCluster',
      'GetKxConnectionString',
      'GetKxDatabase',
      'GetKxDataview',
      'GetKxEnvironment',
      'GetKxScalingGroup',
      'GetKxUser',
      'GetKxVolume',
      'GetLoadSampleDataSetGroupIntoEnvironmentStatus',
      'GetUser'
    ],
    List: [
      'ListEnvironments',
      'ListKxChangesets',
      'ListKxClusterNodes',
      'ListKxClusters',
      'ListKxDatabases',
      'ListKxDataviews',
      'ListKxEnvironments',
      'ListKxScalingGroups',
      'ListKxUsers',
      'ListKxVolumes',
      'ListTagsForResource',
      'ListUsers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:user/${ userId }`);
  }

  /**
   * Adds a resource of type kxEnvironment to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }`);
  }

  /**
   * Adds a resource of type kxUser to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxUser(environmentId: string, userName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxUser/${ userName }`);
  }

  /**
   * Adds a resource of type kxCluster to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param kxCluster - Identifier for the kxCluster.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxCluster(environmentId: string, kxCluster: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxCluster/${ kxCluster }`);
  }

  /**
   * Adds a resource of type kxDatabase to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param kxDatabase - Identifier for the kxDatabase.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxDatabase(environmentId: string, kxDatabase: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxDatabase/${ kxDatabase }`);
  }

  /**
   * Adds a resource of type kxScalingGroup to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param kxScalingGroup - Identifier for the kxScalingGroup.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxScalingGroup(environmentId: string, kxScalingGroup: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxScalingGroup/${ kxScalingGroup }`);
  }

  /**
   * Adds a resource of type kxDataview to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param kxDatabase - Identifier for the kxDatabase.
   * @param kxDataview - Identifier for the kxDataview.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxDataview(environmentId: string, kxDatabase: string, kxDataview: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxDatabase/${ kxDatabase }/kxDataview/${ kxDataview }`);
  }

  /**
   * Adds a resource of type kxVolume to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param kxVolume - Identifier for the kxVolume.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKxVolume(environmentId: string, kxVolume: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:finspace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:kxEnvironment/${ environmentId }/kxVolume/${ kxVolume }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toCreateKxCluster()
   * - .toCreateKxDatabase()
   * - .toCreateKxDataview()
   * - .toCreateKxEnvironment()
   * - .toCreateKxScalingGroup()
   * - .toCreateKxUser()
   * - .toCreateKxVolume()
   * - .toCreateUser()
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
   * Applies to resource types:
   * - environment
   * - user
   * - kxEnvironment
   * - kxUser
   * - kxCluster
   * - kxDatabase
   * - kxScalingGroup
   * - kxDataview
   * - kxVolume
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
   * - .toCreateEnvironment()
   * - .toCreateKxCluster()
   * - .toCreateKxDatabase()
   * - .toCreateKxDataview()
   * - .toCreateKxEnvironment()
   * - .toCreateKxScalingGroup()
   * - .toCreateKxUser()
   * - .toCreateKxVolume()
   * - .toCreateUser()
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
