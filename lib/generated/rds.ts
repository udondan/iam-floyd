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
    this.to('rds:AddRoleToDBCluster');
    return this;
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
    this.to('rds:AddRoleToDBInstance');
    return this;
  }

  /**
   * Grants permission to add a source identifier to an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html
   */
  public toAddSourceIdentifierToSubscription() {
    this.to('rds:AddSourceIdentifierToSubscription');
    return this;
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
    this.to('rds:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to apply a pending maintenance action to a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public toApplyPendingMaintenanceAction() {
    this.to('rds:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Grants permission to enable ingress to a DBSecurityGroup using one of two forms of authorization
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html
   */
  public toAuthorizeDBSecurityGroupIngress() {
    this.to('rds:AuthorizeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to backtrack a DB cluster to a specific time, without creating a new DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html
   */
  public toBacktrackDBCluster() {
    this.to('rds:BacktrackDBCluster');
    return this;
  }

  /**
   * Grants permission to cancel an export task in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    this.to('rds:CancelExportTask');
    return this;
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
    this.to('rds:CopyDBClusterParameterGroup');
    return this;
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
    this.to('rds:CopyDBClusterSnapshot');
    return this;
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
    this.to('rds:CopyDBParameterGroup');
    return this;
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
    this.to('rds:CopyDBSnapshot');
    return this;
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
    this.to('rds:CopyOptionGroup');
    return this;
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
    this.to('rds:CreateDBCluster');
    return this;
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
    this.to('rds:CreateDBClusterEndpoint');
    return this;
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
    this.to('rds:CreateDBClusterParameterGroup');
    return this;
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
    this.to('rds:CreateDBClusterSnapshot');
    return this;
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
    this.to('rds:CreateDBInstance');
    return this;
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
    this.to('rds:CreateDBInstanceReadReplica');
    return this;
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
    this.to('rds:CreateDBParameterGroup');
    return this;
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
    this.to('rds:CreateDBProxy');
    return this;
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
    this.to('rds:CreateDBSecurityGroup');
    return this;
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
    this.to('rds:CreateDBSnapshot');
    return this;
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
    this.to('rds:CreateDBSubnetGroup');
    return this;
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
    this.to('rds:CreateEventSubscription');
    return this;
  }

  /**
   * Grants permission to create an Aurora global database spread across multiple regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html
   */
  public toCreateGlobalCluster() {
    this.to('rds:CreateGlobalCluster');
    return this;
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
    this.to('rds:CreateOptionGroup');
    return this;
  }

  /**
   * Grants permission to access a resource in the remote Region when executing cross-Region operations, such as cross-Region snapshot copy or cross-Region read replica creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   */
  public toCrossRegionCommunication() {
    this.to('rds:CrossRegionCommunication');
    return this;
  }

  /**
   * Grants permission to delete a previously provisioned DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
   */
  public toDeleteDBCluster() {
    this.to('rds:DeleteDBCluster');
    return this;
  }

  /**
   * Grants permission to delete a custom endpoint and removes it from an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html
   */
  public toDeleteDBClusterEndpoint() {
    this.to('rds:DeleteDBClusterEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a specified DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html
   */
  public toDeleteDBClusterParameterGroup() {
    this.to('rds:DeleteDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to delete a DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html
   */
  public toDeleteDBClusterSnapshot() {
    this.to('rds:DeleteDBClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a previously provisioned DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html
   */
  public toDeleteDBInstance() {
    this.to('rds:DeleteDBInstance');
    return this;
  }

  /**
   * Grants permission to deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html
   */
  public toDeleteDBInstanceAutomatedBackup() {
    this.to('rds:DeleteDBInstanceAutomatedBackup');
    return this;
  }

  /**
   * Grants permission to delete a specified DBParameterGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html
   */
  public toDeleteDBParameterGroup() {
    this.to('rds:DeleteDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to delete a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html
   */
  public toDeleteDBProxy() {
    this.to('rds:DeleteDBProxy');
    return this;
  }

  /**
   * Grants permission to delete a DB security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html
   */
  public toDeleteDBSecurityGroup() {
    this.to('rds:DeleteDBSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a DBSnapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html
   */
  public toDeleteDBSnapshot() {
    this.to('rds:DeleteDBSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html
   */
  public toDeleteDBSubnetGroup() {
    this.to('rds:DeleteDBSubnetGroup');
    return this;
  }

  /**
   * Grants permission to delete an RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    this.to('rds:DeleteEventSubscription');
    return this;
  }

  /**
   * Grants permission to delete a global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html
   */
  public toDeleteGlobalCluster() {
    this.to('rds:DeleteGlobalCluster');
    return this;
  }

  /**
   * Grants permission to delete an existing option group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html
   */
  public toDeleteOptionGroup() {
    this.to('rds:DeleteOptionGroup');
    return this;
  }

  /**
   * Grants permission to remove targets from a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html
   */
  public toDeregisterDBProxyTargets() {
    this.to('rds:DeregisterDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to list all of the attributes for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.to('rds:DescribeAccountAttributes');
    return this;
  }

  /**
   * Lists the set of CA certificates provided by Amazon RDS for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html
   */
  public toDescribeCertificates() {
    this.to('rds:DescribeCertificates');
    return this;
  }

  /**
   * Grants permission to return information about backtracks for a DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html
   */
  public toDescribeDBClusterBacktracks() {
    this.to('rds:DescribeDBClusterBacktracks');
    return this;
  }

  /**
   * Grants permission to return information about endpoints for an Amazon Aurora DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html
   */
  public toDescribeDBClusterEndpoints() {
    this.to('rds:DescribeDBClusterEndpoints');
    return this;
  }

  /**
   * Grants permission to return a list of DBClusterParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html
   */
  public toDescribeDBClusterParameterGroups() {
    this.to('rds:DescribeDBClusterParameterGroups');
    return this;
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB cluster parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html
   */
  public toDescribeDBClusterParameters() {
    this.to('rds:DescribeDBClusterParameters');
    return this;
  }

  /**
   * Grants permission to return a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html
   */
  public toDescribeDBClusterSnapshotAttributes() {
    this.to('rds:DescribeDBClusterSnapshotAttributes');
    return this;
  }

  /**
   * Grants permission to return information about DB cluster snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html
   */
  public toDescribeDBClusterSnapshots() {
    this.to('rds:DescribeDBClusterSnapshots');
    return this;
  }

  /**
   * Grants permission to return information about provisioned Aurora DB clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html
   */
  public toDescribeDBClusters() {
    this.to('rds:DescribeDBClusters');
    return this;
  }

  /**
   * Grants permission to return a list of the available DB engines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html
   */
  public toDescribeDBEngineVersions() {
    this.to('rds:DescribeDBEngineVersions');
    return this;
  }

  /**
   * Grants permission to return a list of automated backups for both current and deleted instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html
   */
  public toDescribeDBInstanceAutomatedBackups() {
    this.to('rds:DescribeDBInstanceAutomatedBackups');
    return this;
  }

  /**
   * Grants permission to return information about provisioned RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html
   */
  public toDescribeDBInstances() {
    this.to('rds:DescribeDBInstances');
    return this;
  }

  /**
   * Grants permission to return a list of DB log files for the DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html
   */
  public toDescribeDBLogFiles() {
    this.to('rds:DescribeDBLogFiles');
    return this;
  }

  /**
   * Grants permission to return a list of DBParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html
   */
  public toDescribeDBParameterGroups() {
    this.to('rds:DescribeDBParameterGroups');
    return this;
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html
   */
  public toDescribeDBParameters() {
    this.to('rds:DescribeDBParameters');
    return this;
  }

  /**
   * Grants permission to view proxies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html
   */
  public toDescribeDBProxies() {
    this.to('rds:DescribeDBProxies');
    return this;
  }

  /**
   * Grants permission to view database proxy target group details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html
   */
  public toDescribeDBProxyTargetGroups() {
    this.to('rds:DescribeDBProxyTargetGroups');
    return this;
  }

  /**
   * Grants permission to view database proxy target details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html
   */
  public toDescribeDBProxyTargets() {
    this.to('rds:DescribeDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to return a list of DBSecurityGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html
   */
  public toDescribeDBSecurityGroups() {
    this.to('rds:DescribeDBSecurityGroups');
    return this;
  }

  /**
   * Grants permission to return a list of DB snapshot attribute names and values for a manual DB snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html
   */
  public toDescribeDBSnapshotAttributes() {
    this.to('rds:DescribeDBSnapshotAttributes');
    return this;
  }

  /**
   * Grants permission to return information about DB snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html
   */
  public toDescribeDBSnapshots() {
    this.to('rds:DescribeDBSnapshots');
    return this;
  }

  /**
   * Grants permission to return a list of DBSubnetGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html
   */
  public toDescribeDBSubnetGroups() {
    this.to('rds:DescribeDBSubnetGroups');
    return this;
  }

  /**
   * Grants permission to return the default engine and system parameter information for the cluster database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html
   */
  public toDescribeEngineDefaultClusterParameters() {
    this.to('rds:DescribeEngineDefaultClusterParameters');
    return this;
  }

  /**
   * Grants permission to return the default engine and system parameter information for the specified database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public toDescribeEngineDefaultParameters() {
    this.to('rds:DescribeEngineDefaultParameters');
    return this;
  }

  /**
   * Grants permission to display a list of categories for all event source types, or, if specified, for a specified source type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    this.to('rds:DescribeEventCategories');
    return this;
  }

  /**
   * Grants permission to list all the subscription descriptions for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    this.to('rds:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Grants permission to return events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.to('rds:DescribeEvents');
    return this;
  }

  /**
   * Grants permission to return information about the export tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    this.to('rds:DescribeExportTasks');
    return this;
  }

  /**
   * Grants permission to return information about Aurora global database clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html
   */
  public toDescribeGlobalClusters() {
    this.to('rds:DescribeGlobalClusters');
    return this;
  }

  /**
   * Grants permission to describe all available options
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html
   */
  public toDescribeOptionGroupOptions() {
    this.to('rds:DescribeOptionGroupOptions');
    return this;
  }

  /**
   * Grants permission to describe the available option groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html
   */
  public toDescribeOptionGroups() {
    this.to('rds:DescribeOptionGroups');
    return this;
  }

  /**
   * Grants permission to return a list of orderable DB instance options for the specified engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html
   */
  public toDescribeOrderableDBInstanceOptions() {
    this.to('rds:DescribeOrderableDBInstanceOptions');
    return this;
  }

  /**
   * Grants permission to return a list of resources (for example, DB instances) that have at least one pending maintenance action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html
   */
  public toDescribePendingMaintenanceActions() {
    this.to('rds:DescribePendingMaintenanceActions');
    return this;
  }

  /**
   * Grants permission to return information about reserved DB instances for this account, or about a specified reserved DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html
   */
  public toDescribeReservedDBInstances() {
    this.to('rds:DescribeReservedDBInstances');
    return this;
  }

  /**
   * Grants permission to list available reserved DB instance offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html
   */
  public toDescribeReservedDBInstancesOfferings() {
    this.to('rds:DescribeReservedDBInstancesOfferings');
    return this;
  }

  /**
   * Grants permission to return a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html
   */
  public toDescribeSourceRegions() {
    this.to('rds:DescribeSourceRegions');
    return this;
  }

  /**
   * Grants permission to list available modifications you can make to your DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html
   */
  public toDescribeValidDBInstanceModifications() {
    this.to('rds:DescribeValidDBInstanceModifications');
    return this;
  }

  /**
   * Grants permission to download all or a portion of the specified log file, up to 1 MB in size
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html
   */
  public toDownloadDBLogFilePortion() {
    this.to('rds:DownloadDBLogFilePortion');
    return this;
  }

  /**
   * Grants permission to force a failover for a DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html
   */
  public toFailoverDBCluster() {
    this.to('rds:FailoverDBCluster');
    return this;
  }

  /**
   * Grants permission to list all tags on an Amazon RDS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('rds:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to modify current cluster capacity for an Amazon Aurora Severless DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html
   */
  public toModifyCurrentDBClusterCapacity() {
    this.to('rds:ModifyCurrentDBClusterCapacity');
    return this;
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
    this.to('rds:ModifyDBCluster');
    return this;
  }

  /**
   * Grants permission to modify the properties of an endpoint in an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html
   */
  public toModifyDBClusterEndpoint() {
    this.to('rds:ModifyDBClusterEndpoint');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html
   */
  public toModifyDBClusterParameterGroup() {
    this.to('rds:ModifyDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html
   */
  public toModifyDBClusterSnapshotAttribute() {
    this.to('rds:ModifyDBClusterSnapshotAttribute');
    return this;
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
    this.to('rds:ModifyDBInstance');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html
   */
  public toModifyDBParameterGroup() {
    this.to('rds:ModifyDBParameterGroup');
    return this;
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
    this.to('rds:ModifyDBProxy');
    return this;
  }

  /**
   * Grants permission to modify target group for a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html
   */
  public toModifyDBProxyTargetGroup() {
    this.to('rds:ModifyDBProxyTargetGroup');
    return this;
  }

  /**
   * Grants permission to update a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html
   */
  public toModifyDBSnapshot() {
    this.to('rds:ModifyDBSnapshot');
    return this;
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html
   */
  public toModifyDBSnapshotAttribute() {
    this.to('rds:ModifyDBSnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to modify an existing DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html
   */
  public toModifyDBSubnetGroup() {
    this.to('rds:ModifyDBSubnetGroup');
    return this;
  }

  /**
   * Grants permission to modify an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    this.to('rds:ModifyEventSubscription');
    return this;
  }

  /**
   * Grants permission to modify a setting for an Amazon Aurora global cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html
   */
  public toModifyGlobalCluster() {
    this.to('rds:ModifyGlobalCluster');
    return this;
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
    this.to('rds:ModifyOptionGroup');
    return this;
  }

  /**
   * Grants permission to promote a Read Replica DB instance to a standalone DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html
   */
  public toPromoteReadReplica() {
    this.to('rds:PromoteReadReplica');
    return this;
  }

  /**
   * Grants permission to promote a Read Replica DB cluster to a standalone DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html
   */
  public toPromoteReadReplicaDBCluster() {
    this.to('rds:PromoteReadReplicaDBCluster');
    return this;
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
    this.to('rds:PurchaseReservedDBInstancesOffering');
    return this;
  }

  /**
   * Grants permission to restart the database engine service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html
   */
  public toRebootDBInstance() {
    this.to('rds:RebootDBInstance');
    return this;
  }

  /**
   * Grants permission to add targets to a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html
   */
  public toRegisterDBProxyTargets() {
    this.to('rds:RegisterDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to detach an Aurora secondary cluster from an Aurora global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html
   */
  public toRemoveFromGlobalCluster() {
    this.to('rds:RemoveFromGlobalCluster');
    return this;
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
    this.to('rds:RemoveRoleFromDBCluster');
    return this;
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
    this.to('rds:RemoveRoleFromDBInstance');
    return this;
  }

  /**
   * Grants permission to remove a source identifier from an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html
   */
  public toRemoveSourceIdentifierFromSubscription() {
    this.to('rds:RemoveSourceIdentifierFromSubscription');
    return this;
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
    this.to('rds:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html
   */
  public toResetDBClusterParameterGroup() {
    this.to('rds:ResetDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group to the engine/system default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html
   */
  public toResetDBParameterGroup() {
    this.to('rds:ResetDBParameterGroup');
    return this;
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
    this.to('rds:RestoreDBClusterFromS3');
    return this;
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
    this.to('rds:RestoreDBClusterFromSnapshot');
    return this;
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
    this.to('rds:RestoreDBClusterToPointInTime');
    return this;
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
    this.to('rds:RestoreDBInstanceFromDBSnapshot');
    return this;
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
    this.to('rds:RestoreDBInstanceFromS3');
    return this;
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
    this.to('rds:RestoreDBInstanceToPointInTime');
    return this;
  }

  /**
   * Grants permission to revoke ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html
   */
  public toRevokeDBSecurityGroupIngress() {
    this.to('rds:RevokeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to start Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html
   */
  public toStartActivityStream() {
    this.to('rds:StartActivityStream');
    return this;
  }

  /**
   * Starts the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html
   */
  public toStartDBCluster() {
    this.to('rds:StartDBCluster');
    return this;
  }

  /**
   * Grants permission to start the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html
   */
  public toStartDBInstance() {
    this.to('rds:StartDBInstance');
    return this;
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
    this.to('rds:StartExportTask');
    return this;
  }

  /**
   * Grants permission to stop Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html
   */
  public toStopActivityStream() {
    this.to('rds:StopActivityStream');
    return this;
  }

  /**
   * Grants permission to stop the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html
   */
  public toStopDBCluster() {
    this.to('rds:StopDBCluster');
    return this;
  }

  /**
   * Grants permission to stop the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html
   */
  public toStopDBInstance() {
    this.to('rds:StopDBInstance');
    return this;
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
    return this.if(`rds:DatabaseClass`, value, operator || 'StringLike');
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
    return this.if(`rds:DatabaseEngine`, value, operator || 'StringLike');
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
    return this.if(`rds:DatabaseName`, value, operator || 'StringLike');
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
    return this.if(`rds:EndpointType`, value, operator || 'StringLike');
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
    return this.if(`rds:Piops`, value, operator || 'NumericEquals');
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
    return this.if(`rds:StorageSize`, value, operator || 'NumericEquals');
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
    return this.if(`rds:cluster-pg-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:cluster-snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:cluster-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:db-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:es-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:og-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:pg-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:req-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:ri-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:secgrp-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`rds:subgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }
}
