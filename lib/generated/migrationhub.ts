import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mgh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mgh extends PolicyStatement {
  public servicePrefix = 'mgh';

  /**
   * Statement provider for service [mgh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associate a given AWS artifact to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
   */
  public toAssociateCreatedArtifact() {
    this.to('mgh:AssociateCreatedArtifact');
    return this;
  }

  /**
   * Associate a given ADS resource to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   */
  public toAssociateDiscoveredResource() {
    this.to('mgh:AssociateDiscoveredResource');
    return this;
  }

  /**
   * Create a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html
   */
  public toCreateHomeRegionControl() {
    this.to('mgh:CreateHomeRegionControl');
    return this;
  }

  /**
   * Create a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   */
  public toCreateProgressUpdateStream() {
    this.to('mgh:CreateProgressUpdateStream');
    return this;
  }

  /**
   * Delete a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   */
  public toDeleteProgressUpdateStream() {
    this.to('mgh:DeleteProgressUpdateStream');
    return this;
  }

  /**
   * Get an Application Discovery Service Application's state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  public toDescribeApplicationState() {
    this.to('mgh:DescribeApplicationState');
    return this;
  }

  /**
   * List Home Region Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html
   */
  public toDescribeHomeRegionControls() {
    this.to('mgh:DescribeHomeRegionControls');
    return this;
  }

  /**
   * Describe a MigrationTask
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   */
  public toDescribeMigrationTask() {
    this.to('mgh:DescribeMigrationTask');
    return this;
  }

  /**
   * Disassociate a given AWS artifact from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   */
  public toDisassociateCreatedArtifact() {
    this.to('mgh:DisassociateCreatedArtifact');
    return this;
  }

  /**
   * Disassociate a given ADS resource from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   */
  public toDisassociateDiscoveredResource() {
    this.to('mgh:DisassociateDiscoveredResource');
    return this;
  }

  /**
   * Get the Migration Hub Home Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html
   */
  public toGetHomeRegion() {
    this.to('mgh:GetHomeRegion');
    return this;
  }

  /**
   * Import a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   */
  public toImportMigrationTask() {
    this.to('mgh:ImportMigrationTask');
    return this;
  }

  /**
   * List associated created artifacts for a MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   */
  public toListCreatedArtifacts() {
    this.to('mgh:ListCreatedArtifacts');
    return this;
  }

  /**
   * List associated ADS resources from MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    this.to('mgh:ListDiscoveredResources');
    return this;
  }

  /**
   * List MigrationTasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  public toListMigrationTasks() {
    this.to('mgh:ListMigrationTasks');
    return this;
  }

  /**
   * List ProgressUpdateStreams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  public toListProgressUpdateStreams() {
    this.to('mgh:ListProgressUpdateStreams');
    return this;
  }

  /**
   * Update an Application Discovery Service Application's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  public toNotifyApplicationState() {
    this.to('mgh:NotifyApplicationState');
    return this;
  }

  /**
   * Notify latest MigrationTask state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   */
  public toNotifyMigrationTaskState() {
    this.to('mgh:NotifyMigrationTaskState');
    return this;
  }

  /**
   * Put ResourceAttributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
   */
  public toPutResourceAttributes() {
    this.to('mgh:PutResourceAttributes');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateCreatedArtifact",
      "AssociateDiscoveredResource",
      "CreateHomeRegionControl",
      "CreateProgressUpdateStream",
      "DeleteProgressUpdateStream",
      "DisassociateCreatedArtifact",
      "DisassociateDiscoveredResource",
      "ImportMigrationTask",
      "NotifyApplicationState",
      "NotifyMigrationTaskState",
      "PutResourceAttributes"
    ],
    "Read": [
      "DescribeApplicationState",
      "DescribeMigrationTask",
      "GetHomeRegion"
    ],
    "List": [
      "DescribeHomeRegionControls",
      "ListCreatedArtifacts",
      "ListDiscoveredResources",
      "ListMigrationTasks",
      "ListProgressUpdateStreams"
    ]
  };

  /**
   * Adds a resource of type progressUpdateStream to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ProgressUpdateStreamSummary.html
   *
   * @param stream - Identifier for the stream.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProgressUpdateStream(stream: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}';
    arn = arn.replace('${Stream}', stream);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type migrationTask to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html
   *
   * @param stream - Identifier for the stream.
   * @param task - Identifier for the task.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMigrationTask(stream: string, task: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}/migrationTask/${Task}';
    arn = arn.replace('${Stream}', stream);
    arn = arn.replace('${Task}', task);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type MghActionsWrite = 'AssociateCreatedArtifact' | 'AssociateDiscoveredResource' | 'CreateHomeRegionControl' | 'CreateProgressUpdateStream' | 'DeleteProgressUpdateStream' | 'DisassociateCreatedArtifact' | 'DisassociateDiscoveredResource' | 'ImportMigrationTask' | 'NotifyApplicationState' | 'NotifyMigrationTaskState' | 'PutResourceAttributes';
export type MghActionsRead = 'DescribeApplicationState' | 'DescribeMigrationTask' | 'GetHomeRegion';
export type MghActionsList = 'DescribeHomeRegionControls' | 'ListCreatedArtifacts' | 'ListDiscoveredResources' | 'ListMigrationTasks' | 'ListProgressUpdateStreams';
export type MghActions = MghActionsWrite | MghActionsRead | MghActionsList;
