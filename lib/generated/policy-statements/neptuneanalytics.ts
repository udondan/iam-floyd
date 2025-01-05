import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [neptune-graph](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptuneanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NeptuneGraph extends PolicyStatement {
  public servicePrefix = 'neptune-graph';

  /**
   * Statement provider for service [neptune-graph](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptuneanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an ongoing export task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Grants permission to cancel an ongoing import task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CancelImportTask.html
   */
  public toCancelImportTask() {
    return this.to('CancelImportTask');
  }

  /**
   * Grants permission to cancel a query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CancelQuery.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to create a new graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifPublicConnectivity()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CreateGraph.html
   */
  public toCreateGraph() {
    return this.to('CreateGraph');
  }

  /**
   * Grants permission to create a new snapshot from an existing graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CreateGraphSnapshot.html
   */
  public toCreateGraphSnapshot() {
    return this.to('CreateGraphSnapshot');
  }

  /**
   * Grants permission to create a new graph while importing data into the new graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifPublicConnectivity()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CreateGraphUsingImportTask.html
   */
  public toCreateGraphUsingImportTask() {
    return this.to('CreateGraphUsingImportTask');
  }

  /**
   * Grants permission to create a new private graph endpoint to access the graph from within a vpc
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateVpcEndpoint
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - route53:AssociateVPCWithHostedZone
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_CreatePrivateGraphEndpoint.html
   */
  public toCreatePrivateGraphEndpoint() {
    return this.to('CreatePrivateGraphEndpoint');
  }

  /**
   * Grants permission to delete data via query APIs on the graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ExecuteQuery.html
   */
  public toDeleteDataViaQuery() {
    return this.to('DeleteDataViaQuery');
  }

  /**
   * Grants permission to delete a graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_DeleteGraph.html
   */
  public toDeleteGraph() {
    return this.to('DeleteGraph');
  }

  /**
   * Grants permission to delete a snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_DeleteGraphSnapshot.html
   */
  public toDeleteGraphSnapshot() {
    return this.to('DeleteGraphSnapshot');
  }

  /**
   * Grants permission to delete a private graph endpoint of a graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - route53:DisassociateVPCFromHostedZone
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_DeletePrivateGraphEndpoint.html
   */
  public toDeletePrivateGraphEndpoint() {
    return this.to('DeletePrivateGraphEndpoint');
  }

  /**
   * Grants permission to get the engine status of the graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/#GetEngineStatus
   */
  public toGetEngineStatus() {
    return this.to('GetEngineStatus');
  }

  /**
   * Grants permission to get details about an export task
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetExportTask.html
   */
  public toGetExportTask() {
    return this.to('GetExportTask');
  }

  /**
   * Grants permission to get details about a graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetGraph.html
   */
  public toGetGraph() {
    return this.to('GetGraph');
  }

  /**
   * Grants permission to get details about a snapshot
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetGraphSnapshot.html
   */
  public toGetGraphSnapshot() {
    return this.to('GetGraphSnapshot');
  }

  /**
   * Grants permission to get the summary for the data in the graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetGraphSummary.html
   */
  public toGetGraphSummary() {
    return this.to('GetGraphSummary');
  }

  /**
   * Grants permission to get details about an import task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetImportTask.html
   */
  public toGetImportTask() {
    return this.to('GetImportTask');
  }

  /**
   * Grants permission to get details about a private graph endpoint of a graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetPrivateGraphEndpoint.html
   */
  public toGetPrivateGraphEndpoint() {
    return this.to('GetPrivateGraphEndpoint');
  }

  /**
   * Grants permission to check the status of a given query
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_GetQuery.html
   */
  public toGetQueryStatus() {
    return this.to('GetQueryStatus');
  }

  /**
   * Grants permission to get the statistics for the data in the graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/#GetStatisticsStatus
   */
  public toGetStatisticsStatus() {
    return this.to('GetStatisticsStatus');
  }

  /**
   * Grants permission to list the export tasks in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListExportTasks.html
   */
  public toListExportTasks() {
    return this.to('ListExportTasks');
  }

  /**
   * Grants permission to list the snapshots in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListGraphSnapshots.html
   */
  public toListGraphSnapshots() {
    return this.to('ListGraphSnapshots');
  }

  /**
   * Grants permission to list the graphs in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListGraphs.html
   */
  public toListGraphs() {
    return this.to('ListGraphs');
  }

  /**
   * Grants permission to list the import tasks in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListImportTasks.html
   */
  public toListImportTasks() {
    return this.to('ListImportTasks');
  }

  /**
   * Grants permission to list the private graph endpoints for a given graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListPrivateGraphEndpoints.html
   */
  public toListPrivateGraphEndpoints() {
    return this.to('ListPrivateGraphEndpoints');
  }

  /**
   * Grants permission to check the status of all active queries
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListQueries.html
   */
  public toListQueries() {
    return this.to('ListQueries');
  }

  /**
   * Grants permission to lists tag for a Neptune Analytics resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to read data via query APIs on the graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ExecuteQuery.html
   */
  public toReadDataViaQuery() {
    return this.to('ReadDataViaQuery');
  }

  /**
   * Grants permission to reset a graph which deletes all data within the graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ResetGraph.html
   */
  public toResetGraph() {
    return this.to('ResetGraph');
  }

  /**
   * Grants permission to create a new graph from an existing snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifPublicConnectivity()
   *
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_RestoreGraphFromSnapshot.html
   */
  public toRestoreGraphFromSnapshot() {
    return this.to('RestoreGraphFromSnapshot');
  }

  /**
   * Grants permission to export data from an existing graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_StartExportTask.html
   */
  public toStartExportTask() {
    return this.to('StartExportTask');
  }

  /**
   * Grants permission to import data into an existing graph
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_StartImportTask.html
   */
  public toStartImportTask() {
    return this.to('StartImportTask');
  }

  /**
   * Grants permission to tag a Neptune Analytics resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Neptune Analytics resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify a graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifPublicConnectivity()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_UpdateGraph.html
   */
  public toUpdateGraph() {
    return this.to('UpdateGraph');
  }

  /**
   * Grants permission to write data via query APIs on the graph
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/apiref/API_ExecuteQuery.html
   */
  public toWriteDataViaQuery() {
    return this.to('WriteDataViaQuery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelExportTask',
      'CancelImportTask',
      'CancelQuery',
      'CreateGraph',
      'CreateGraphSnapshot',
      'CreateGraphUsingImportTask',
      'CreatePrivateGraphEndpoint',
      'DeleteDataViaQuery',
      'DeleteGraph',
      'DeleteGraphSnapshot',
      'DeletePrivateGraphEndpoint',
      'ResetGraph',
      'RestoreGraphFromSnapshot',
      'StartExportTask',
      'StartImportTask',
      'UpdateGraph',
      'WriteDataViaQuery'
    ],
    Read: [
      'GetEngineStatus',
      'GetExportTask',
      'GetGraph',
      'GetGraphSnapshot',
      'GetGraphSummary',
      'GetImportTask',
      'GetPrivateGraphEndpoint',
      'GetQueryStatus',
      'GetStatisticsStatus',
      'ListExportTasks',
      'ListGraphSnapshots',
      'ListGraphs',
      'ListImportTasks',
      'ListPrivateGraphEndpoints',
      'ListQueries',
      'ListTagsForResource',
      'ReadDataViaQuery'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type graph to the statement
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-resources.html#graph
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGraph(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:neptune-graph:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:graph/${ resourceId }`);
  }

  /**
   * Adds a resource of type graph-snapshot to the statement
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-resources.html#graph-snapshot
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGraphSnapshot(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:neptune-graph:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:graph-snapshot/${ resourceId }`);
  }

  /**
   * Adds a resource of type import-task to the statement
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-resources.html#import-task
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onImportTask(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:neptune-graph:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:import-task/${ resourceId }`);
  }

  /**
   * Adds a resource of type export-task to the statement
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-resources.html#export-task
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExportTask(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:neptune-graph:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:export-task/${ resourceId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGraph()
   * - .toCreateGraphSnapshot()
   * - .toCreateGraphUsingImportTask()
   * - .toCreatePrivateGraphEndpoint()
   * - .toRestoreGraphFromSnapshot()
   * - .toStartExportTask()
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
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCancelExportTask()
   * - .toCancelQuery()
   * - .toCreateGraphSnapshot()
   * - .toCreatePrivateGraphEndpoint()
   * - .toDeleteDataViaQuery()
   * - .toDeleteGraph()
   * - .toDeleteGraphSnapshot()
   * - .toDeletePrivateGraphEndpoint()
   * - .toGetEngineStatus()
   * - .toGetExportTask()
   * - .toGetGraph()
   * - .toGetGraphSnapshot()
   * - .toGetGraphSummary()
   * - .toGetPrivateGraphEndpoint()
   * - .toGetQueryStatus()
   * - .toGetStatisticsStatus()
   * - .toListPrivateGraphEndpoints()
   * - .toListQueries()
   * - .toListTagsForResource()
   * - .toReadDataViaQuery()
   * - .toResetGraph()
   * - .toRestoreGraphFromSnapshot()
   * - .toStartExportTask()
   * - .toUpdateGraph()
   * - .toWriteDataViaQuery()
   *
   * Applies to resource types:
   * - graph
   * - graph-snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGraph()
   * - .toCreateGraphSnapshot()
   * - .toCreateGraphUsingImportTask()
   * - .toCreatePrivateGraphEndpoint()
   * - .toRestoreGraphFromSnapshot()
   * - .toStartExportTask()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value of the public connectivity parameter provided in the request or its default value, if unspecified. All access to graphs is IAM authenticated
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-condition-keys.html#publicconnectivity
   *
   * Applies to actions:
   * - .toCreateGraph()
   * - .toCreateGraphUsingImportTask()
   * - .toRestoreGraphFromSnapshot()
   * - .toUpdateGraph()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPublicConnectivity(value?: boolean) {
    return this.if(`PublicConnectivity`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
