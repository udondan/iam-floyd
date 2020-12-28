import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [emr-containers](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EmrContainers extends PolicyStatement {
  public servicePrefix = 'emr-containers';

  /**
   * Statement provider for service [emr-containers](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a job run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CancelJobRun.html
   */
  public toCancelJobRun() {
    return this.to('CancelJobRun');
  }

  /**
   * Grants permission to create a virtual cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateVirtualCluster.html
   */
  public toCreateVirtualCluster() {
    return this.to('CreateVirtualCluster');
  }

  /**
   * Grants permission to delete a virtual cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteVirtualCluster.html
   */
  public toDeleteVirtualCluster() {
    return this.to('DeleteVirtualCluster');
  }

  /**
   * Grants permission to describe a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobRun.html
   */
  public toDescribeJobRun() {
    return this.to('DescribeJobRun');
  }

  /**
   * Grants permission to describe a virtual cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeVirtualCluster.html
   */
  public toDescribeVirtualCluster() {
    return this.to('DescribeVirtualCluster');
  }

  /**
   * Grants permission to list job runs associated with a virtual cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobRuns.html
   */
  public toListJobRuns() {
    return this.to('ListJobRuns');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list virtual clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListVirtualClusters.html
   */
  public toListVirtualClusters() {
    return this.to('ListVirtualClusters');
  }

  /**
   * Grants permission to start a job run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifExecutionRoleArn()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html
   */
  public toStartJobRun() {
    return this.to('StartJobRun');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_UnTagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelJobRun",
      "CreateVirtualCluster",
      "DeleteVirtualCluster",
      "StartJobRun"
    ],
    "Read": [
      "DescribeJobRun",
      "DescribeVirtualCluster"
    ],
    "List": [
      "ListJobRuns",
      "ListTagsForResource",
      "ListVirtualClusters"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type virtualCluster to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/virtual-cluster.html
   *
   * @param virtualClusterId - Identifier for the virtualClusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualCluster(virtualClusterId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:emr-containers:${Region}:${Account}:/virtualclusters/${VirtualClusterId}';
    arn = arn.replace('${VirtualClusterId}', virtualClusterId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type jobRun to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/job-runs.html
   *
   * @param virtualClusterId - Identifier for the virtualClusterId.
   * @param jobRunId - Identifier for the jobRunId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifExecutionRoleArn()
   */
  public onJobRun(virtualClusterId: string, jobRunId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:emr-containers:${Region}:${Account}:/virtualclusters/${VirtualClusterId}/jobruns/${JobRunId}';
    arn = arn.replace('${VirtualClusterId}', virtualClusterId);
    arn = arn.replace('${JobRunId}', jobRunId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on whether the execution role arn is provided with the action
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html
   *
   * Applies to actions:
   * - .toStartJobRun()
   *
   * Applies to resource types:
   * - jobRun
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExecutionRoleArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ExecutionRoleArn`, value, operator || 'StringLike');
  }
}
