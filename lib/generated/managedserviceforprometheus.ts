import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforprometheus.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Aps extends PolicyStatement {
  public servicePrefix = 'aps';

  /**
   * Statement provider for service [aps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforprometheus.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateWorkspace
   */
  public toCreateWorkspace() {
    this.to('aps:CreateWorkspace');
    return this;
  }

  /**
   * Grants permission to delete a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteWorkspace
   */
  public toDeleteWorkspace() {
    this.to('aps:DeleteWorkspace');
    return this;
  }

  /**
   * Grants permission to describe a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeWorkspace
   */
  public toDescribeWorkspace() {
    this.to('aps:DescribeWorkspace');
    return this;
  }

  /**
   * Grants permission to retrieve AMP workspace labels
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetLabels
   */
  public toGetLabels() {
    this.to('aps:GetLabels');
    return this;
  }

  /**
   * Grants permission to retrieve the metadata for AMP workspace metrics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetMetricMetadata
   */
  public toGetMetricMetadata() {
    this.to('aps:GetMetricMetadata');
    return this;
  }

  /**
   * Grants permission to retrieve AMP workspace time series data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetSeries
   */
  public toGetSeries() {
    this.to('aps:GetSeries');
    return this;
  }

  /**
   * Grants permission to list workspaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListWorkspaces
   */
  public toListWorkspaces() {
    this.to('aps:ListWorkspaces');
    return this;
  }

  /**
   * Grants permission to run a query on AMP workspace metrics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-QueryMetrics
   */
  public toQueryMetrics() {
    this.to('aps:QueryMetrics');
    return this;
  }

  /**
   * Grants permission to perform a remote write operation to initiate the streaming of metrics to AMP workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-RemoteWrite
   */
  public toRemoteWrite() {
    this.to('aps:RemoteWrite');
    return this;
  }

  /**
   * Grants permission to modify the alias of existing AMP workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UpdateWorkspaceAlias
   */
  public toUpdateWorkspaceAlias() {
    this.to('aps:UpdateWorkspaceAlias');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateWorkspace",
      "DeleteWorkspace",
      "RemoteWrite",
      "UpdateWorkspaceAlias"
    ],
    "Read": [
      "DescribeWorkspace",
      "GetLabels",
      "GetMetricMetadata",
      "GetSeries",
      "QueryMetrics"
    ],
    "List": [
      "ListWorkspaces"
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/security-iam.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:aps::${Region}:${Account}:workspace/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
