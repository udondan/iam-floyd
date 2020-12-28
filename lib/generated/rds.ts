import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [rds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rds extends PolicyStatement {
  public servicePrefix = 'rds';

  /**
   * Statement provider for service [rds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an Identity and Access Management (IAM) role from an Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html
   */
  public toAddRoleToDBCluster() {
    return this.to('AddRoleToDBCluster');
  }

  /**
   * Grants permission to associate an AWS Identity and Access Management (IAM) role with a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html
   */
  public toAddRoleToDBInstance() {
    return this.to('AddRoleToDBInstance');
  }

  /**
   * Grants permission to add a source identifier to an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html
   */
  public toAddSourceIdentifierToSubscription() {
    return this.to('AddSourceIdentifierToSubscription');
  }

  /**
   * Grants permission to add metadata tags to an Amazon RDS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to apply a pending maintenance action to a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public toApplyPendingMaintenanceAction() {
    return this.to('ApplyPendingMaintenanceAction');
  }

  /**
   * Grants permission to enable ingress to a DBSecurityGroup using one of two forms of authorization
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html
   */
  public toAuthorizeDBSecurityGroupIngress() {
    return this.to('AuthorizeDBSecurityGroupIngress');
  }

  /**
   * Grants permission to backtrack a DB cluster to a specific time, without creating a new DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html
   */
  public toBacktrackDBCluster() {
    return this.to('BacktrackDBCluster');
  }

  /**
   * Grants permission to cancel an export task in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Grants permission to copy the specified DB cluster parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html
   */
  public toCopyDBClusterParameterGroup() {
    return this.to('CopyDBClusterParameterGroup');
  }

  /**
   * Grants permission to create a snapshot of a DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html
   */
  public toCopyDBClusterSnapshot() {
    return this.to('CopyDBClusterSnapshot');
  }

  /**
   * Grants permission to copy the specified DB parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html
   */
  public toCopyDBParameterGroup() {
    return this.to('CopyDBParameterGroup');
  }

  /**
   * Grants permission to copy the specified DB snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html
   */
  public toCopyDBSnapshot() {
    return this.to('CopyDBSnapshot');
  }

  /**
   * Grants permission to copy the specified option group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html
   */
  public toCopyOptionGroup() {
    return this.to('CopyOptionGroup');
  }

  /**
   * Grants permission to create a new Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifStorageEncrypted()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html
   */
  public toCreateDBCluster() {
    return this.to('CreateDBCluster');
  }

  /**
   * Grants permission to create a new custom endpoint and associates it with an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEndpointType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterEndpoint.html
   */
  public toCreateDBClusterEndpoint() {
    return this.to('CreateDBClusterEndpoint');
  }

  /**
   * Grants permission to create a new DB cluster parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html
   */
  public toCreateDBClusterParameterGroup() {
    return this.to('CreateDBClusterParameterGroup');
  }

  /**
   * Grants permission to create a snapshot of a DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html
   */
  public toCreateDBClusterSnapshot() {
    return this.to('CreateDBClusterSnapshot');
  }

  /**
   * Grants permission to create a new DB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html
   */
  public toCreateDBInstance() {
    return this.to('CreateDBInstance');
  }

  /**
   * Grants permission to create a DB instance that acts as a Read Replica of a source DB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html
   */
  public toCreateDBInstanceReadReplica() {
    return this.to('CreateDBInstanceReadReplica');
  }

  /**
   * Grants permission to create a new DB parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html
   */
  public toCreateDBParameterGroup() {
    return this.to('CreateDBParameterGroup');
  }

  /**
   * Grants permission to create a database proxy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxy.html
   */
  public toCreateDBProxy() {
    return this.to('CreateDBProxy');
  }

  /**
   * Grants permission to create a new DB security group. DB security groups control access to a DB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html
   */
  public toCreateDBSecurityGroup() {
    return this.to('CreateDBSecurityGroup');
  }

  /**
   * Grants permission to create a DBSnapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html
   */
  public toCreateDBSnapshot() {
    return this.to('CreateDBSnapshot');
  }

  /**
   * Grants permission to create a new DB subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html
   */
  public toCreateDBSubnetGroup() {
    return this.to('CreateDBSubnetGroup');
  }

  /**
   * Grants permission to create an RDS event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    return this.to('CreateEventSubscription');
  }

  /**
   * Grants permission to create an Aurora global database spread across multiple regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html
   */
  public toCreateGlobalCluster() {
    return this.to('CreateGlobalCluster');
  }

  /**
   * Grants permission to create a new option group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html
   */
  public toCreateOptionGroup() {
    return this.to('CreateOptionGroup');
  }

  /**
   * Grants permission to access a resource in the remote Region when executing cross-Region operations, such as cross-Region snapshot copy or cross-Region read replica creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   */
  public toCrossRegionCommunication() {
    return this.to('CrossRegionCommunication');
  }

  /**
   * Grants permission to delete a previously provisioned DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
   */
  public toDeleteDBCluster() {
    return this.to('DeleteDBCluster');
  }

  /**
   * Grants permission to delete a custom endpoint and removes it from an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html
   */
  public toDeleteDBClusterEndpoint() {
    return this.to('DeleteDBClusterEndpoint');
  }

  /**
   * Grants permission to delete a specified DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html
   */
  public toDeleteDBClusterParameterGroup() {
    return this.to('DeleteDBClusterParameterGroup');
  }

  /**
   * Grants permission to delete a DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html
   */
  public toDeleteDBClusterSnapshot() {
    return this.to('DeleteDBClusterSnapshot');
  }

  /**
   * Grants permission to delete a previously provisioned DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html
   */
  public toDeleteDBInstance() {
    return this.to('DeleteDBInstance');
  }

  /**
   * Grants permission to deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html
   */
  public toDeleteDBInstanceAutomatedBackup() {
    return this.to('DeleteDBInstanceAutomatedBackup');
  }

  /**
   * Grants permission to delete a specified DBParameterGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html
   */
  public toDeleteDBParameterGroup() {
    return this.to('DeleteDBParameterGroup');
  }

  /**
   * Grants permission to delete a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html
   */
  public toDeleteDBProxy() {
    return this.to('DeleteDBProxy');
  }

  /**
   * Grants permission to delete a DB security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html
   */
  public toDeleteDBSecurityGroup() {
    return this.to('DeleteDBSecurityGroup');
  }

  /**
   * Grants permission to delete a DBSnapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html
   */
  public toDeleteDBSnapshot() {
    return this.to('DeleteDBSnapshot');
  }

  /**
   * Grants permission to delete a DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html
   */
  public toDeleteDBSubnetGroup() {
    return this.to('DeleteDBSubnetGroup');
  }

  /**
   * Grants permission to delete an RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    return this.to('DeleteEventSubscription');
  }

  /**
   * Grants permission to delete a global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html
   */
  public toDeleteGlobalCluster() {
    return this.to('DeleteGlobalCluster');
  }

  /**
   * Grants permission to delete an existing option group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html
   */
  public toDeleteOptionGroup() {
    return this.to('DeleteOptionGroup');
  }

  /**
   * Grants permission to remove targets from a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html
   */
  public toDeregisterDBProxyTargets() {
    return this.to('DeregisterDBProxyTargets');
  }

  /**
   * Grants permission to list all of the attributes for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Lists the set of CA certificates provided by Amazon RDS for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html
   */
  public toDescribeCertificates() {
    return this.to('DescribeCertificates');
  }

  /**
   * Grants permission to return information about backtracks for a DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html
   */
  public toDescribeDBClusterBacktracks() {
    return this.to('DescribeDBClusterBacktracks');
  }

  /**
   * Grants permission to return information about endpoints for an Amazon Aurora DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html
   */
  public toDescribeDBClusterEndpoints() {
    return this.to('DescribeDBClusterEndpoints');
  }

  /**
   * Grants permission to return a list of DBClusterParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html
   */
  public toDescribeDBClusterParameterGroups() {
    return this.to('DescribeDBClusterParameterGroups');
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB cluster parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html
   */
  public toDescribeDBClusterParameters() {
    return this.to('DescribeDBClusterParameters');
  }

  /**
   * Grants permission to return a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html
   */
  public toDescribeDBClusterSnapshotAttributes() {
    return this.to('DescribeDBClusterSnapshotAttributes');
  }

  /**
   * Grants permission to return information about DB cluster snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html
   */
  public toDescribeDBClusterSnapshots() {
    return this.to('DescribeDBClusterSnapshots');
  }

  /**
   * Grants permission to return information about provisioned Aurora DB clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html
   */
  public toDescribeDBClusters() {
    return this.to('DescribeDBClusters');
  }

  /**
   * Grants permission to return a list of the available DB engines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html
   */
  public toDescribeDBEngineVersions() {
    return this.to('DescribeDBEngineVersions');
  }

  /**
   * Grants permission to return a list of automated backups for both current and deleted instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html
   */
  public toDescribeDBInstanceAutomatedBackups() {
    return this.to('DescribeDBInstanceAutomatedBackups');
  }

  /**
   * Grants permission to return information about provisioned RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html
   */
  public toDescribeDBInstances() {
    return this.to('DescribeDBInstances');
  }

  /**
   * Grants permission to return a list of DB log files for the DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html
   */
  public toDescribeDBLogFiles() {
    return this.to('DescribeDBLogFiles');
  }

  /**
   * Grants permission to return a list of DBParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html
   */
  public toDescribeDBParameterGroups() {
    return this.to('DescribeDBParameterGroups');
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html
   */
  public toDescribeDBParameters() {
    return this.to('DescribeDBParameters');
  }

  /**
   * Grants permission to view proxies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html
   */
  public toDescribeDBProxies() {
    return this.to('DescribeDBProxies');
  }

  /**
   * Grants permission to view database proxy target group details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html
   */
  public toDescribeDBProxyTargetGroups() {
    return this.to('DescribeDBProxyTargetGroups');
  }

  /**
   * Grants permission to view database proxy target details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html
   */
  public toDescribeDBProxyTargets() {
    return this.to('DescribeDBProxyTargets');
  }

  /**
   * Grants permission to return a list of DBSecurityGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html
   */
  public toDescribeDBSecurityGroups() {
    return this.to('DescribeDBSecurityGroups');
  }

  /**
   * Grants permission to return a list of DB snapshot attribute names and values for a manual DB snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html
   */
  public toDescribeDBSnapshotAttributes() {
    return this.to('DescribeDBSnapshotAttributes');
  }

  /**
   * Grants permission to return information about DB snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html
   */
  public toDescribeDBSnapshots() {
    return this.to('DescribeDBSnapshots');
  }

  /**
   * Grants permission to return a list of DBSubnetGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html
   */
  public toDescribeDBSubnetGroups() {
    return this.to('DescribeDBSubnetGroups');
  }

  /**
   * Grants permission to return the default engine and system parameter information for the cluster database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html
   */
  public toDescribeEngineDefaultClusterParameters() {
    return this.to('DescribeEngineDefaultClusterParameters');
  }

  /**
   * Grants permission to return the default engine and system parameter information for the specified database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public toDescribeEngineDefaultParameters() {
    return this.to('DescribeEngineDefaultParameters');
  }

  /**
   * Grants permission to display a list of categories for all event source types, or, if specified, for a specified source type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    return this.to('DescribeEventCategories');
  }

  /**
   * Grants permission to list all the subscription descriptions for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    return this.to('DescribeEventSubscriptions');
  }

  /**
   * Grants permission to return events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to return information about the export tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Grants permission to return information about Aurora global database clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html
   */
  public toDescribeGlobalClusters() {
    return this.to('DescribeGlobalClusters');
  }

  /**
   * Grants permission to describe all available options
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html
   */
  public toDescribeOptionGroupOptions() {
    return this.to('DescribeOptionGroupOptions');
  }

  /**
   * Grants permission to describe the available option groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html
   */
  public toDescribeOptionGroups() {
    return this.to('DescribeOptionGroups');
  }

  /**
   * Grants permission to return a list of orderable DB instance options for the specified engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html
   */
  public toDescribeOrderableDBInstanceOptions() {
    return this.to('DescribeOrderableDBInstanceOptions');
  }

  /**
   * Grants permission to return a list of resources (for example, DB instances) that have at least one pending maintenance action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html
   */
  public toDescribePendingMaintenanceActions() {
    return this.to('DescribePendingMaintenanceActions');
  }

  /**
   * Grants permission to return information about reserved DB instances for this account, or about a specified reserved DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html
   */
  public toDescribeReservedDBInstances() {
    return this.to('DescribeReservedDBInstances');
  }

  /**
   * Grants permission to list available reserved DB instance offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html
   */
  public toDescribeReservedDBInstancesOfferings() {
    return this.to('DescribeReservedDBInstancesOfferings');
  }

  /**
   * Grants permission to return a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html
   */
  public toDescribeSourceRegions() {
    return this.to('DescribeSourceRegions');
  }

  /**
   * Grants permission to list available modifications you can make to your DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html
   */
  public toDescribeValidDBInstanceModifications() {
    return this.to('DescribeValidDBInstanceModifications');
  }

  /**
   * Grants permission to download all or a portion of the specified log file, up to 1 MB in size
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html
   */
  public toDownloadDBLogFilePortion() {
    return this.to('DownloadDBLogFilePortion');
  }

  /**
   * Grants permission to force a failover for a DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html
   */
  public toFailoverDBCluster() {
    return this.to('FailoverDBCluster');
  }

  /**
   * Grants permission to list all tags on an Amazon RDS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to modify current cluster capacity for an Amazon Aurora Severless DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html
   */
  public toModifyCurrentDBClusterCapacity() {
    return this.to('ModifyCurrentDBClusterCapacity');
  }

  /**
   * Grants permission to modify a setting for an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html
   */
  public toModifyDBCluster() {
    return this.to('ModifyDBCluster');
  }

  /**
   * Grants permission to modify the properties of an endpoint in an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html
   */
  public toModifyDBClusterEndpoint() {
    return this.to('ModifyDBClusterEndpoint');
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html
   */
  public toModifyDBClusterParameterGroup() {
    return this.to('ModifyDBClusterParameterGroup');
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html
   */
  public toModifyDBClusterSnapshotAttribute() {
    return this.to('ModifyDBClusterSnapshotAttribute');
  }

  /**
   * Grants permission to modify settings for a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html
   */
  public toModifyDBInstance() {
    return this.to('ModifyDBInstance');
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html
   */
  public toModifyDBParameterGroup() {
    return this.to('ModifyDBParameterGroup');
  }

  /**
   * Grants permission to modify database proxy
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxy.html
   */
  public toModifyDBProxy() {
    return this.to('ModifyDBProxy');
  }

  /**
   * Grants permission to modify target group for a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html
   */
  public toModifyDBProxyTargetGroup() {
    return this.to('ModifyDBProxyTargetGroup');
  }

  /**
   * Grants permission to update a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html
   */
  public toModifyDBSnapshot() {
    return this.to('ModifyDBSnapshot');
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html
   */
  public toModifyDBSnapshotAttribute() {
    return this.to('ModifyDBSnapshotAttribute');
  }

  /**
   * Grants permission to modify an existing DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html
   */
  public toModifyDBSubnetGroup() {
    return this.to('ModifyDBSubnetGroup');
  }

  /**
   * Grants permission to modify an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    return this.to('ModifyEventSubscription');
  }

  /**
   * Grants permission to modify a setting for an Amazon Aurora global cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html
   */
  public toModifyGlobalCluster() {
    return this.to('ModifyGlobalCluster');
  }

  /**
   * Grants permission to modify an existing option group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html
   */
  public toModifyOptionGroup() {
    return this.to('ModifyOptionGroup');
  }

  /**
   * Grants permission to promote a Read Replica DB instance to a standalone DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html
   */
  public toPromoteReadReplica() {
    return this.to('PromoteReadReplica');
  }

  /**
   * Grants permission to promote a Read Replica DB cluster to a standalone DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html
   */
  public toPromoteReadReplicaDBCluster() {
    return this.to('PromoteReadReplicaDBCluster');
  }

  /**
   * Grants permission to purchase a reserved DB instance offering
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html
   */
  public toPurchaseReservedDBInstancesOffering() {
    return this.to('PurchaseReservedDBInstancesOffering');
  }

  /**
   * Grants permission to restart the database engine service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html
   */
  public toRebootDBInstance() {
    return this.to('RebootDBInstance');
  }

  /**
   * Grants permission to add targets to a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html
   */
  public toRegisterDBProxyTargets() {
    return this.to('RegisterDBProxyTargets');
  }

  /**
   * Grants permission to detach an Aurora secondary cluster from an Aurora global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html
   */
  public toRemoveFromGlobalCluster() {
    return this.to('RemoveFromGlobalCluster');
  }

  /**
   * Grants permission to disassociate an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html
   */
  public toRemoveRoleFromDBCluster() {
    return this.to('RemoveRoleFromDBCluster');
  }

  /**
   * Grants permission to disassociate an AWS Identity and Access Management (IAM) role from a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html
   */
  public toRemoveRoleFromDBInstance() {
    return this.to('RemoveRoleFromDBInstance');
  }

  /**
   * Grants permission to remove a source identifier from an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html
   */
  public toRemoveSourceIdentifierFromSubscription() {
    return this.to('RemoveSourceIdentifierFromSubscription');
  }

  /**
   * Grants permission to remove metadata tags from an Amazon RDS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html
   */
  public toResetDBClusterParameterGroup() {
    return this.to('ResetDBClusterParameterGroup');
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group to the engine/system default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html
   */
  public toResetDBParameterGroup() {
    return this.to('ResetDBParameterGroup');
  }

  /**
   * Grants permission to create an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifStorageEncrypted()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html
   */
  public toRestoreDBClusterFromS3() {
    return this.to('RestoreDBClusterFromS3');
  }

  /**
   * Grants permission to create a new DB cluster from a DB cluster snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromSnapshot.html
   */
  public toRestoreDBClusterFromSnapshot() {
    return this.to('RestoreDBClusterFromSnapshot');
  }

  /**
   * Grants permission to restore a DB cluster to an arbitrary point in time
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html
   */
  public toRestoreDBClusterToPointInTime() {
    return this.to('RestoreDBClusterToPointInTime');
  }

  /**
   * Grants permission to create a new DB instance from a DB snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html
   */
  public toRestoreDBInstanceFromDBSnapshot() {
    return this.to('RestoreDBInstanceFromDBSnapshot');
  }

  /**
   * Grants permission to create a new DB instance from an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromS3.html
   */
  public toRestoreDBInstanceFromS3() {
    return this.to('RestoreDBInstanceFromS3');
  }

  /**
   * Grants permission to restore a DB instance to an arbitrary point in time
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceToPointInTime.html
   */
  public toRestoreDBInstanceToPointInTime() {
    return this.to('RestoreDBInstanceToPointInTime');
  }

  /**
   * Grants permission to revoke ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html
   */
  public toRevokeDBSecurityGroupIngress() {
    return this.to('RevokeDBSecurityGroupIngress');
  }

  /**
   * Grants permission to start Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html
   */
  public toStartActivityStream() {
    return this.to('StartActivityStream');
  }

  /**
   * Starts the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html
   */
  public toStartDBCluster() {
    return this.to('StartDBCluster');
  }

  /**
   * Grants permission to start the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html
   */
  public toStartDBInstance() {
    return this.to('StartDBInstance');
  }

  /**
   * Grants permission to start a new Export task for a DB snapshot
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html
   */
  public toStartExportTask() {
    return this.to('StartExportTask');
  }

  /**
   * Grants permission to stop Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html
   */
  public toStopActivityStream() {
    return this.to('StopActivityStream');
  }

  /**
   * Grants permission to stop the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html
   */
  public toStopDBCluster() {
    return this.to('StopDBCluster');
  }

  /**
   * Grants permission to stop the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html
   */
  public toStopDBInstance() {
    return this.to('StopDBInstance');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddRoleToDBCluster",
      "AddRoleToDBInstance",
      "AddSourceIdentifierToSubscription",
      "ApplyPendingMaintenanceAction",
      "BacktrackDBCluster",
      "CancelExportTask",
      "CopyDBClusterParameterGroup",
      "CopyDBClusterSnapshot",
      "CopyDBParameterGroup",
      "CopyDBSnapshot",
      "CopyOptionGroup",
      "CreateDBCluster",
      "CreateDBClusterEndpoint",
      "CreateDBClusterParameterGroup",
      "CreateDBClusterSnapshot",
      "CreateDBInstance",
      "CreateDBInstanceReadReplica",
      "CreateDBParameterGroup",
      "CreateDBProxy",
      "CreateDBSecurityGroup",
      "CreateDBSnapshot",
      "CreateDBSubnetGroup",
      "CreateEventSubscription",
      "CreateGlobalCluster",
      "CreateOptionGroup",
      "CrossRegionCommunication",
      "DeleteDBCluster",
      "DeleteDBClusterEndpoint",
      "DeleteDBClusterParameterGroup",
      "DeleteDBClusterSnapshot",
      "DeleteDBInstance",
      "DeleteDBInstanceAutomatedBackup",
      "DeleteDBParameterGroup",
      "DeleteDBProxy",
      "DeleteDBSecurityGroup",
      "DeleteDBSnapshot",
      "DeleteDBSubnetGroup",
      "DeleteEventSubscription",
      "DeleteGlobalCluster",
      "DeleteOptionGroup",
      "DeregisterDBProxyTargets",
      "FailoverDBCluster",
      "ModifyCurrentDBClusterCapacity",
      "ModifyDBCluster",
      "ModifyDBClusterEndpoint",
      "ModifyDBClusterParameterGroup",
      "ModifyDBClusterSnapshotAttribute",
      "ModifyDBInstance",
      "ModifyDBParameterGroup",
      "ModifyDBProxy",
      "ModifyDBProxyTargetGroup",
      "ModifyDBSnapshot",
      "ModifyDBSnapshotAttribute",
      "ModifyDBSubnetGroup",
      "ModifyEventSubscription",
      "ModifyGlobalCluster",
      "ModifyOptionGroup",
      "PromoteReadReplica",
      "PromoteReadReplicaDBCluster",
      "PurchaseReservedDBInstancesOffering",
      "RebootDBInstance",
      "RegisterDBProxyTargets",
      "RemoveFromGlobalCluster",
      "RemoveRoleFromDBCluster",
      "RemoveRoleFromDBInstance",
      "RemoveSourceIdentifierFromSubscription",
      "ResetDBClusterParameterGroup",
      "ResetDBParameterGroup",
      "RestoreDBClusterFromS3",
      "RestoreDBClusterFromSnapshot",
      "RestoreDBClusterToPointInTime",
      "RestoreDBInstanceFromDBSnapshot",
      "RestoreDBInstanceFromS3",
      "RestoreDBInstanceToPointInTime",
      "RevokeDBSecurityGroupIngress",
      "StartActivityStream",
      "StartDBCluster",
      "StartDBInstance",
      "StartExportTask",
      "StopActivityStream",
      "StopDBCluster",
      "StopDBInstance"
    ],
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource"
    ],
    "Permissions management": [
      "AuthorizeDBSecurityGroupIngress"
    ],
    "List": [
      "DescribeAccountAttributes",
      "DescribeCertificates",
      "DescribeDBClusterBacktracks",
      "DescribeDBClusterEndpoints",
      "DescribeDBClusterParameterGroups",
      "DescribeDBClusterParameters",
      "DescribeDBClusterSnapshotAttributes",
      "DescribeDBClusterSnapshots",
      "DescribeDBClusters",
      "DescribeDBEngineVersions",
      "DescribeDBInstanceAutomatedBackups",
      "DescribeDBInstances",
      "DescribeDBLogFiles",
      "DescribeDBParameterGroups",
      "DescribeDBParameters",
      "DescribeDBProxies",
      "DescribeDBProxyTargetGroups",
      "DescribeDBProxyTargets",
      "DescribeDBSecurityGroups",
      "DescribeDBSnapshotAttributes",
      "DescribeDBSnapshots",
      "DescribeDBSubnetGroups",
      "DescribeEngineDefaultClusterParameters",
      "DescribeEngineDefaultParameters",
      "DescribeEventCategories",
      "DescribeEventSubscriptions",
      "DescribeEvents",
      "DescribeExportTasks",
      "DescribeGlobalClusters",
      "DescribeOptionGroupOptions",
      "DescribeOptionGroups",
      "DescribeOrderableDBInstanceOptions",
      "DescribePendingMaintenanceActions",
      "DescribeReservedDBInstances",
      "DescribeReservedDBInstancesOfferings",
      "DescribeSourceRegions",
      "DescribeValidDBInstanceModifications"
    ],
    "Read": [
      "DownloadDBLogFilePortion",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html
   *
   * @param dbClusterInstanceName - Identifier for the dbClusterInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterTag()
   */
  public onCluster(dbClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster:${DbClusterInstanceName}';
    arn = arn.replace('${DbClusterInstanceName}', dbClusterInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-endpoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.Endpoints.html
   *
   * @param dbClusterEndpoint - Identifier for the dbClusterEndpoint.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClusterEndpoint(dbClusterEndpoint: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-endpoint:${DbClusterEndpoint}';
    arn = arn.replace('${DbClusterEndpoint}', dbClusterEndpoint);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-pg to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   *
   * @param clusterParameterGroupName - Identifier for the clusterParameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterPgTag()
   */
  public onClusterPg(clusterParameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}';
    arn = arn.replace('${ClusterParameterGroupName}', clusterParameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-snapshot to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   *
   * @param clusterSnapshotName - Identifier for the clusterSnapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterSnapshotTag()
   */
  public onClusterSnapshot(clusterSnapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-snapshot:${ClusterSnapshotName}';
    arn = arn.replace('${ClusterSnapshotName}', clusterSnapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type db to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.html
   *
   * @param dbInstanceName - Identifier for the dbInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDatabaseClass()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifMultiAz()
   * - .ifPiops()
   * - .ifStorageEncrypted()
   * - .ifStorageSize()
   * - .ifVpc()
   * - .ifDbTag()
   */
  public onDb(dbInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}';
    arn = arn.replace('${DbInstanceName}', dbInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type es to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
   *
   * @param subscriptionName - Identifier for the subscriptionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEsTag()
   */
  public onEs(subscriptionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:es:${SubscriptionName}';
    arn = arn.replace('${SubscriptionName}', subscriptionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type global-cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.Aurora.GlobalDB.html
   *
   * @param globalCluster - Identifier for the globalCluster.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGlobalCluster(globalCluster: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds::${Account}:global-cluster:${GlobalCluster}';
    arn = arn.replace('${GlobalCluster}', globalCluster);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type og to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html
   *
   * @param optionGroupName - Identifier for the optionGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifOgTag()
   */
  public onOg(optionGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:og:${OptionGroupName}';
    arn = arn.replace('${OptionGroupName}', optionGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pg to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifPgTag()
   */
  public onPg(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type proxy to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param dbProxyId - Identifier for the dbProxyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProxy(dbProxyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:db-proxy:${DbProxyId}';
    arn = arn.replace('${DbProxyId}', dbProxyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ri to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html
   *
   * @param reservedDbInstanceName - Identifier for the reservedDbInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRiTag()
   */
  public onRi(reservedDbInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:ri:${ReservedDbInstanceName}';
    arn = arn.replace('${ReservedDbInstanceName}', reservedDbInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type secgrp to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSecgrpTag()
   */
  public onSecgrp(securityGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:secgrp:${SecurityGroupName}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   *
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSnapshotTag()
   */
  public onSnapshot(snapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:snapshot:${SnapshotName}';
    arn = arn.replace('${SnapshotName}', snapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subgrp to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSubgrpTag()
   */
  public onSubgrp(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:subgrp:${SubnetGroupName}';
    arn = arn.replace('${SubnetGroupName}', subnetGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type target to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param targetId - Identifier for the targetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTarget(targetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:target:${TargetId}';
    arn = arn.replace('${TargetId}', targetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type target-group to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param targetGroupId - Identifier for the targetGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTargetGroup(targetGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:target-group:${TargetGroupId}';
    arn = arn.replace('${TargetGroupId}', targetGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the type of DB instance class
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseClass(value: string | string[], operator?: Operator | string) {
    return this.if(`DatabaseClass`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseEngine(value: string | string[], operator?: Operator | string) {
    return this.if(`DatabaseEngine`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the user-defined name of the database on the DB instance
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseName(value: string | string[], operator?: Operator | string) {
    return this.if(`DatabaseName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of the endpoint. One of: READER, WRITER, CUSTOM
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBClusterEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`EndpointType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the value that specifies whether the DB instance runs in multiple Availability Zones. To indicate that the DB instance is using Multi-AZ, specify true
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifMultiAz(value?: boolean) {
    return this.if(`rds:MultiAz`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPiops(value: number | number[], operator?: Operator | string) {
    return this.if(`Piops`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifStorageEncrypted(value?: boolean) {
    return this.if(`rds:StorageEncrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the storage volume size (in GB)
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifStorageSize(value: number | number[], operator?: Operator | string) {
    return this.if(`StorageSize`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the value that specifies whether the DB instance runs in an Amazon Virtual Private Cloud (Amazon VPC). To indicate that the DB instance runs in an Amazon VPC, specify true
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifVpc(value?: boolean) {
    return this.if(`rds:Vpc`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the tag attached to a DB cluster parameter group
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster-pg
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterPgTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`cluster-pg-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB cluster snapshot
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster-snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterSnapshotTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`cluster-snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB cluster
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`cluster-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB instance
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`db-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to an event subscription
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - es
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEsTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`es-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB option group
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - og
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOgTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`og-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB parameter group
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - pg
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPgTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`pg-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the set of tag keys and values that can be used to tag a resource
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDBCluster()
   * - .toCreateDBClusterParameterGroup()
   * - .toCreateDBClusterSnapshot()
   * - .toCreateDBInstance()
   * - .toCreateDBInstanceReadReplica()
   * - .toCreateDBParameterGroup()
   * - .toCreateDBSecurityGroup()
   * - .toCreateDBSnapshot()
   * - .toCreateDBSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateOptionGroup()
   * - .toRemoveTagsFromResource()
   * - .toRestoreDBClusterFromS3()
   * - .toRestoreDBClusterFromSnapshot()
   * - .toRestoreDBClusterToPointInTime()
   * - .toRestoreDBInstanceFromDBSnapshot()
   * - .toRestoreDBInstanceFromS3()
   * - .toRestoreDBInstanceToPointInTime()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`req-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a reserved DB instance
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - ri
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRiTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ri-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB security group
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - secgrp
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecgrpTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB snapshot
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSnapshotTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a DB subnet group
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - subgrp
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubgrpTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`subgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }
}
