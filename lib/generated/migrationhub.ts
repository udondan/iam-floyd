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
   * Grants permission to associate a given AWS artifact to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
   */
  public toAssociateCreatedArtifact() {
    return this.to('AssociateCreatedArtifact');
  }

  /**
   * Grants permission to associate a given ADS resource to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   */
  public toAssociateDiscoveredResource() {
    return this.to('AssociateDiscoveredResource');
  }

  /**
   * Grants permission to create a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_CreateHomeRegionControl.html
   */
  public toCreateHomeRegionControl() {
    return this.to('CreateHomeRegionControl');
  }

  /**
   * Grants permission to create a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   */
  public toCreateProgressUpdateStream() {
    return this.to('CreateProgressUpdateStream');
  }

  /**
   * Grants permission to delete a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DeleteHomeRegionControl.html
   */
  public toDeleteHomeRegionControl() {
    return this.to('DeleteHomeRegionControl');
  }

  /**
   * Grants permission to delete a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   */
  public toDeleteProgressUpdateStream() {
    return this.to('DeleteProgressUpdateStream');
  }

  /**
   * Grants permission to get an Application Discovery Service Application's state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  public toDescribeApplicationState() {
    return this.to('DescribeApplicationState');
  }

  /**
   * Grants permission to list Home Region Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DescribeHomeRegionControls.html
   */
  public toDescribeHomeRegionControls() {
    return this.to('DescribeHomeRegionControls');
  }

  /**
   * Grants permission to describe a MigrationTask
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   */
  public toDescribeMigrationTask() {
    return this.to('DescribeMigrationTask');
  }

  /**
   * Grants permission to disassociate a given AWS artifact from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   */
  public toDisassociateCreatedArtifact() {
    return this.to('DisassociateCreatedArtifact');
  }

  /**
   * Grants permission to disassociate a given ADS resource from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   */
  public toDisassociateDiscoveredResource() {
    return this.to('DisassociateDiscoveredResource');
  }

  /**
   * Grants permission to get the Migration Hub Home Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_GetHomeRegion.html
   */
  public toGetHomeRegion() {
    return this.to('GetHomeRegion');
  }

  /**
   * Grants permission to import a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   */
  public toImportMigrationTask() {
    return this.to('ImportMigrationTask');
  }

  /**
   * Grants permission to list Application statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListApplicationStates.html
   */
  public toListApplicationStates() {
    return this.to('ListApplicationStates');
  }

  /**
   * Grants permission to list associated created artifacts for a MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   */
  public toListCreatedArtifacts() {
    return this.to('ListCreatedArtifacts');
  }

  /**
   * Grants permission to list associated ADS resources from MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    return this.to('ListDiscoveredResources');
  }

  /**
   * Grants permission to list MigrationTasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  public toListMigrationTasks() {
    return this.to('ListMigrationTasks');
  }

  /**
   * Grants permission to to list ProgressUpdateStreams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  public toListProgressUpdateStreams() {
    return this.to('ListProgressUpdateStreams');
  }

  /**
   * Grants permission to update an Application Discovery Service Application's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  public toNotifyApplicationState() {
    return this.to('NotifyApplicationState');
  }

  /**
   * Grants permission to notify latest MigrationTask state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   */
  public toNotifyMigrationTaskState() {
    return this.to('NotifyMigrationTaskState');
  }

  /**
   * Grants permission to put ResourceAttributes
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
      'DeleteHomeRegionControl',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProgressUpdateStream(stream: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:mgh:${ region || this.defaultRegion }:${ account || this.defaultAccount }:progressUpdateStream/${ stream }`);
  }

  /**
   * Adds a resource of type migrationTask to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html
   *
   * @param stream - Identifier for the stream.
   * @param task - Identifier for the task.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMigrationTask(stream: string, task: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:mgh:${ region || this.defaultRegion }:${ account || this.defaultAccount }:progressUpdateStream/${ stream }/migrationTask/${ task }`);
  }
}
