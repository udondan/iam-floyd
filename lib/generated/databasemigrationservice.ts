import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [dms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dms extends PolicyStatement {
  public servicePrefix = 'dms';

  /**
   * Statement provider for service [dms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add metadata tags to DMS resources, including replication instances, endpoints, security groups, and migration tasks
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.to('dms:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to apply a pending maintenance action to a resource (for example, to a replication instance)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public toApplyPendingMaintenanceAction() {
    this.to('dms:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Grants permission to cancel a single premigration assessment run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelReplicationTaskAssessmentRun.html
   */
  public toCancelReplicationTaskAssessmentRun() {
    this.to('dms:CancelReplicationTaskAssessmentRun');
    return this;
  }

  /**
   * Grants permission to create an endpoint using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    this.to('dms:CreateEndpoint');
    return this;
  }

  /**
   * Grants permission to create an AWS DMS event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    this.to('dms:CreateEventSubscription');
    return this;
  }

  /**
   * Grants permission to create a replication instance using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html
   */
  public toCreateReplicationInstance() {
    this.to('dms:CreateReplicationInstance');
    return this;
  }

  /**
   * Grants permission to create a replication subnet group given a list of the subnet IDs in a VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html
   */
  public toCreateReplicationSubnetGroup() {
    this.to('dms:CreateReplicationSubnetGroup');
    return this;
  }

  /**
   * Grants permission to create a replication task using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html
   */
  public toCreateReplicationTask() {
    this.to('dms:CreateReplicationTask');
    return this;
  }

  /**
   * Grants permission to delete the specified certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    this.to('dms:DeleteCertificate');
    return this;
  }

  /**
   * Grants permission to delete the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.to('dms:DeleteEndpoint');
    return this;
  }

  /**
   * Grants permission to delete an AWS DMS event subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    this.to('dms:DeleteEventSubscription');
    return this;
  }

  /**
   * Grants permission to delete the specified replication instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html
   */
  public toDeleteReplicationInstance() {
    this.to('dms:DeleteReplicationInstance');
    return this;
  }

  /**
   * Grants permission to deletes a subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html
   */
  public toDeleteReplicationSubnetGroup() {
    this.to('dms:DeleteReplicationSubnetGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html
   */
  public toDeleteReplicationTask() {
    this.to('dms:DeleteReplicationTask');
    return this;
  }

  /**
   * Grants permission to delete the record of a single premigration assessment run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTaskAssessmentRun.html
   */
  public toDeleteReplicationTaskAssessmentRun() {
    this.to('dms:DeleteReplicationTaskAssessmentRun');
    return this;
  }

  /**
   * Grants permission to list all of the AWS DMS attributes for a customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.to('dms:DescribeAccountAttributes');
    return this;
  }

  /**
   * Grants permission to list individual assessments that you can specify for a new premigration assessment run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeApplicableIndividualAssessments.html
   */
  public toDescribeApplicableIndividualAssessments() {
    this.to('dms:DescribeApplicableIndividualAssessments');
    return this;
  }

  /**
   * Grants permission to provide a description of the certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html
   */
  public toDescribeCertificates() {
    this.to('dms:DescribeCertificates');
    return this;
  }

  /**
   * Grants permission to describe the status of the connections that have been made between the replication instance and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html
   */
  public toDescribeConnections() {
    this.to('dms:DescribeConnections');
    return this;
  }

  /**
   * Grants permission to return information about the type of endpoints available
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html
   */
  public toDescribeEndpointTypes() {
    this.to('dms:DescribeEndpointTypes');
    return this;
  }

  /**
   * Grants permission to return information about the endpoints for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    this.to('dms:DescribeEndpoints');
    return this;
  }

  /**
   * Grants permission to list categories for all event source types, or, if specified, for a specified source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    this.to('dms:DescribeEventCategories');
    return this;
  }

  /**
   * Grants permission to list all the event subscriptions for a customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    this.to('dms:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Grants permission to list events for a given source identifier and source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.to('dms:DescribeEvents');
    return this;
  }

  /**
   * Grants permission to return information about the replication instance types that can be created in the specified region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html
   */
  public toDescribeOrderableReplicationInstances() {
    this.to('dms:DescribeOrderableReplicationInstances');
    return this;
  }

  /**
   * Grants permission to returns the status of the RefreshSchemas operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html
   */
  public toDescribeRefreshSchemasStatus() {
    this.to('dms:DescribeRefreshSchemasStatus');
    return this;
  }

  /**
   * Grants permission to return information about the task logs for the specified task
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html
   */
  public toDescribeReplicationInstanceTaskLogs() {
    this.to('dms:DescribeReplicationInstanceTaskLogs');
    return this;
  }

  /**
   * Grants permission to return information about replication instances for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html
   */
  public toDescribeReplicationInstances() {
    this.to('dms:DescribeReplicationInstances');
    return this;
  }

  /**
   * Grants permission to return information about the replication subnet groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html
   */
  public toDescribeReplicationSubnetGroups() {
    this.to('dms:DescribeReplicationSubnetGroups');
    return this;
  }

  /**
   * Grants permission to return the latest task assessment results from Amazon S3
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html
   */
  public toDescribeReplicationTaskAssessmentResults() {
    this.to('dms:DescribeReplicationTaskAssessmentResults');
    return this;
  }

  /**
   * Grants permission to return a paginated list of premigration assessment runs based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentRuns.html
   */
  public toDescribeReplicationTaskAssessmentRuns() {
    this.to('dms:DescribeReplicationTaskAssessmentRuns');
    return this;
  }

  /**
   * Grants permission to return a paginated list of individual assessments based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskIndividualAssessments.html
   */
  public toDescribeReplicationTaskIndividualAssessments() {
    this.to('dms:DescribeReplicationTaskIndividualAssessments');
    return this;
  }

  /**
   * Grants permission to return information about replication tasks for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html
   */
  public toDescribeReplicationTasks() {
    this.to('dms:DescribeReplicationTasks');
    return this;
  }

  /**
   * Grants permission to return information about the schema for the specified endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html
   */
  public toDescribeSchemas() {
    this.to('dms:DescribeSchemas');
    return this;
  }

  /**
   * Grants permission to return table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html
   */
  public toDescribeTableStatistics() {
    this.to('dms:DescribeTableStatistics');
    return this;
  }

  /**
   * Grants permission to upload the specified certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html
   */
  public toImportCertificate() {
    this.to('dms:ImportCertificate');
    return this;
  }

  /**
   * Grants permission to list all tags for an AWS DMS resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('dms:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to modify the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html
   */
  public toModifyEndpoint() {
    this.to('dms:ModifyEndpoint');
    return this;
  }

  /**
   * Grants permission to modify an existing AWS DMS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    this.to('dms:ModifyEventSubscription');
    return this;
  }

  /**
   * Grants permission to modify the replication instance to apply new settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html
   */
  public toModifyReplicationInstance() {
    this.to('dms:ModifyReplicationInstance');
    return this;
  }

  /**
   * Grants permission to modify the settings for the specified replication subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html
   */
  public toModifyReplicationSubnetGroup() {
    this.to('dms:ModifyReplicationSubnetGroup');
    return this;
  }

  /**
   * Grants permission to modify the specified replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html
   */
  public toModifyReplicationTask() {
    this.to('dms:ModifyReplicationTask');
    return this;
  }

  /**
   * Grants permission to reboot a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html
   */
  public toRebootReplicationInstance() {
    this.to('dms:RebootReplicationInstance');
    return this;
  }

  /**
   * Grants permission to populate the schema for the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html
   */
  public toRefreshSchemas() {
    this.to('dms:RefreshSchemas');
    return this;
  }

  /**
   * Grants permission to reload the target database table with the source data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html
   */
  public toReloadTables() {
    this.to('dms:ReloadTables');
    return this;
  }

  /**
   * Grants permission to remove metadata tags from a DMS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.to('dms:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to start the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html
   */
  public toStartReplicationTask() {
    this.to('dms:StartReplicationTask');
    return this;
  }

  /**
   * Grants permission to start the replication task assessment for unsupported data types in the source database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html
   */
  public toStartReplicationTaskAssessment() {
    this.to('dms:StartReplicationTaskAssessment');
    return this;
  }

  /**
   * Grants permission to start a new premigration assessment run for one or more individual assessments of a migration task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html
   */
  public toStartReplicationTaskAssessmentRun() {
    this.to('dms:StartReplicationTaskAssessmentRun');
    return this;
  }

  /**
   * Grants permission to stop the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html
   */
  public toStopReplicationTask() {
    this.to('dms:StopReplicationTask');
    return this;
  }

  /**
   * Grants permission to test the connection between the replication instance and the endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html
   */
  public toTestConnection() {
    this.to('dms:TestConnection');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource"
    ],
    "Write": [
      "ApplyPendingMaintenanceAction",
      "CancelReplicationTaskAssessmentRun",
      "CreateEndpoint",
      "CreateEventSubscription",
      "CreateReplicationInstance",
      "CreateReplicationSubnetGroup",
      "CreateReplicationTask",
      "DeleteCertificate",
      "DeleteEndpoint",
      "DeleteEventSubscription",
      "DeleteReplicationInstance",
      "DeleteReplicationSubnetGroup",
      "DeleteReplicationTask",
      "DeleteReplicationTaskAssessmentRun",
      "ImportCertificate",
      "ModifyEndpoint",
      "ModifyEventSubscription",
      "ModifyReplicationInstance",
      "ModifyReplicationSubnetGroup",
      "ModifyReplicationTask",
      "RebootReplicationInstance",
      "RefreshSchemas",
      "ReloadTables",
      "StartReplicationTask",
      "StartReplicationTaskAssessment",
      "StartReplicationTaskAssessmentRun",
      "StopReplicationTask"
    ],
    "Read": [
      "DescribeAccountAttributes",
      "DescribeApplicableIndividualAssessments",
      "DescribeCertificates",
      "DescribeConnections",
      "DescribeEndpointTypes",
      "DescribeEndpoints",
      "DescribeEventCategories",
      "DescribeEventSubscriptions",
      "DescribeEvents",
      "DescribeOrderableReplicationInstances",
      "DescribeRefreshSchemasStatus",
      "DescribeReplicationInstanceTaskLogs",
      "DescribeReplicationInstances",
      "DescribeReplicationSubnetGroups",
      "DescribeReplicationTaskAssessmentResults",
      "DescribeReplicationTaskAssessmentRuns",
      "DescribeReplicationTaskIndividualAssessments",
      "DescribeReplicationTasks",
      "DescribeSchemas",
      "DescribeTableStatistics",
      "TestConnection"
    ],
    "List": [
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type Certificate to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Certificate.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCertTag()
   */
  public onCertificate(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:cert:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Endpoint to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Endpoint.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEndpointTag()
   */
  public onEndpoint(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:endpoint:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type EventSubscription to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_EventSubscription.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEsTag()
   */
  public onEventSubscription(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:es:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationInstance to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRepTag()
   */
  public onReplicationInstance(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:rep:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationSubnetGroup to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationSubnetGroup.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSubgrpTag()
   */
  public onReplicationSubnetGroup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:subgrp:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationTask to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTask.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifTaskTag()
   */
  public onReplicationTask(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:task:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationTaskAssessmentRun to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskAssessmentRun.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReplicationTaskAssessmentRun(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:assessment-run:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationTaskIndividualAssessment to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskIndividualAssessment.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReplicationTaskIndividualAssessment(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:individual-assessment:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on the presence of tag keys in the request for Certificate
   *
   * Applies to resource types:
   * - Certificate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:cert-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request for Endpoint
   *
   * Applies to resource types:
   * - Endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:endpoint-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request for EventSubscription
   *
   * Applies to resource types:
   * - EventSubscription
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEsTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:es-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request for ReplicationInstance
   *
   * Applies to resource types:
   * - ReplicationInstance
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:rep-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag key-value pairs in the request
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:req-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request for ReplicationSubnetGroup
   *
   * Applies to resource types:
   * - ReplicationSubnetGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubgrpTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:subgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request for ReplicationTask
   *
   * Applies to resource types:
   * - ReplicationTask
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`dms:task-tag/${ tagKey }`, value, operator || 'StringLike');
  }
}
