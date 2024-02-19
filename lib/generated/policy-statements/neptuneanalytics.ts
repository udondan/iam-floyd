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
   * Grants permission to cancel an ongoing import task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CancelImportTask
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CancelQuery
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
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraph
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraphSnapshot
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
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraphUsingImportTask
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreatePrivateGraphEndpoint
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteDataViaQuery
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteGraph
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteGraphSnapshot
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeletePrivateGraphEndpoint
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetEngineStatus
   */
  public toGetEngineStatus() {
    return this.to('GetEngineStatus');
  }

  /**
   * Grants permission to get details about a graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraph
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraphSnapshot
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraphSummary
   */
  public toGetGraphSummary() {
    return this.to('GetGraphSummary');
  }

  /**
   * Grants permission to get details about an import task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetImportTask
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetPrivateGraphEndpoint
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetQueryStatus
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetStatisticsStatus
   */
  public toGetStatisticsStatus() {
    return this.to('GetStatisticsStatus');
  }

  /**
   * Grants permission to list the snapshots in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListGraphSnapshots
   */
  public toListGraphSnapshots() {
    return this.to('ListGraphSnapshots');
  }

  /**
   * Grants permission to list the graphs in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListGraphs
   */
  public toListGraphs() {
    return this.to('ListGraphs');
  }

  /**
   * Grants permission to list the import tasks in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListImportTasks
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListPrivateGraphEndpoints
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListQueries
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListTagsForResource
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ReadDataViaQuery
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ResetGraph
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
   *
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#RestoreGraphFromSnapshot
   */
  public toRestoreGraphFromSnapshot() {
    return this.to('RestoreGraphFromSnapshot');
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#TagResource
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#UntagResource
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
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#UpdateGraph
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#WriteDataViaQuery
   */
  public toWriteDataViaQuery() {
    return this.to('WriteDataViaQuery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
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
      'UpdateGraph',
      'WriteDataViaQuery'
    ],
    Read: [
      'GetEngineStatus',
      'GetGraph',
      'GetGraphSnapshot',
      'GetGraphSummary',
      'GetImportTask',
      'GetPrivateGraphEndpoint',
      'GetQueryStatus',
      'GetStatisticsStatus',
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
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGraph()
   * - .toCreateGraphSnapshot()
   * - .toCreateGraphUsingImportTask()
   * - .toCreatePrivateGraphEndpoint()
   * - .toRestoreGraphFromSnapshot()
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCancelQuery()
   * - .toCreateGraphSnapshot()
   * - .toCreatePrivateGraphEndpoint()
   * - .toDeleteDataViaQuery()
   * - .toDeleteGraph()
   * - .toDeleteGraphSnapshot()
   * - .toDeletePrivateGraphEndpoint()
   * - .toGetEngineStatus()
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
   * https://docs.aws.amazon.com/neptune-analytics/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGraph()
   * - .toCreateGraphSnapshot()
   * - .toCreateGraphUsingImportTask()
   * - .toCreatePrivateGraphEndpoint()
   * - .toRestoreGraphFromSnapshot()
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
