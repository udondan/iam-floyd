import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('AssociateCreatedArtifact');
  }

  /**
   * Associate a given ADS resource to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   */
  public toAssociateDiscoveredResource() {
    return this.to('AssociateDiscoveredResource');
  }

  /**
   * Create a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html
   */
  public toCreateHomeRegionControl() {
    return this.to('CreateHomeRegionControl');
  }

  /**
   * Create a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   */
  public toCreateProgressUpdateStream() {
    return this.to('CreateProgressUpdateStream');
  }

  /**
   * Delete a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   */
  public toDeleteProgressUpdateStream() {
    return this.to('DeleteProgressUpdateStream');
  }

  /**
   * Get an Application Discovery Service Application's state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  public toDescribeApplicationState() {
    return this.to('DescribeApplicationState');
  }

  /**
   * List Home Region Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html
   */
  public toDescribeHomeRegionControls() {
    return this.to('DescribeHomeRegionControls');
  }

  /**
   * Describe a MigrationTask
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   */
  public toDescribeMigrationTask() {
    return this.to('DescribeMigrationTask');
  }

  /**
   * Disassociate a given AWS artifact from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   */
  public toDisassociateCreatedArtifact() {
    return this.to('DisassociateCreatedArtifact');
  }

  /**
   * Disassociate a given ADS resource from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   */
  public toDisassociateDiscoveredResource() {
    return this.to('DisassociateDiscoveredResource');
  }

  /**
   * Get the Migration Hub Home Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html
   */
  public toGetHomeRegion() {
    return this.to('GetHomeRegion');
  }

  /**
   * Import a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   */
  public toImportMigrationTask() {
    return this.to('ImportMigrationTask');
  }

  /**
   * List Application statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListApplicationStates.html
   */
  public toListApplicationStates() {
    return this.to('ListApplicationStates');
  }

  /**
   * List associated created artifacts for a MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   */
  public toListCreatedArtifacts() {
    return this.to('ListCreatedArtifacts');
  }

  /**
   * List associated ADS resources from MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    return this.to('ListDiscoveredResources');
  }

  /**
   * List MigrationTasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  public toListMigrationTasks() {
    return this.to('ListMigrationTasks');
  }

  /**
   * List ProgressUpdateStreams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  public toListProgressUpdateStreams() {
    return this.to('ListProgressUpdateStreams');
  }

  /**
   * Update an Application Discovery Service Application's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  public toNotifyApplicationState() {
    return this.to('NotifyApplicationState');
  }

  /**
   * Notify latest MigrationTask state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   */
  public toNotifyMigrationTaskState() {
    return this.to('NotifyMigrationTaskState');
  }

  /**
   * Put ResourceAttributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
   */
  public toPutResourceAttributes() {
    return this.to('PutResourceAttributes');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateCreatedArtifact',
      'AssociateDiscoveredResource',
      'CreateHomeRegionControl',
      'CreateProgressUpdateStream',
      'DeleteProgressUpdateStream',
      'DisassociateCreatedArtifact',
      'DisassociateDiscoveredResource',
      'ImportMigrationTask',
      'NotifyApplicationState',
      'NotifyMigrationTaskState',
      'PutResourceAttributes'
    ],
    Read: [
      'DescribeApplicationState',
      'DescribeMigrationTask',
      'GetHomeRegion'
    ],
    List: [
      'DescribeHomeRegionControls',
      'ListApplicationStates',
      'ListCreatedArtifacts',
      'ListDiscoveredResources',
      'ListMigrationTasks',
      'ListProgressUpdateStreams'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProgressUpdateStream(stream: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mgh.defaultPartition }:mgh:${ region || '*' }:${ account || '*' }:progressUpdateStream/${ stream }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMigrationTask(stream: string, task: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mgh.defaultPartition }:mgh:${ region || '*' }:${ account || '*' }:progressUpdateStream/${ stream }/migrationTask/${ task }`);
  }
}
