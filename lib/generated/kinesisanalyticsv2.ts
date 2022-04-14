import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [kinesisanalytics-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalyticsv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class KinesisanalyticsV2 extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';

  /**
   * Statement provider for service [kinesisanalytics-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalyticsv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add cloudwatch logging option to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html
   */
  public toAddApplicationCloudWatchLoggingOption() {
    return this.to('AddApplicationCloudWatchLoggingOption');
  }

  /**
   * Grants permission to add input to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    return this.to('AddApplicationInput');
  }

  /**
   * Grants permission to add input processing configuration to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html
   */
  public toAddApplicationInputProcessingConfiguration() {
    return this.to('AddApplicationInputProcessingConfiguration');
  }

  /**
   * Grants permission to add output to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    return this.to('AddApplicationOutput');
  }

  /**
   * Grants permission to add reference data source to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    return this.to('AddApplicationReferenceDataSource');
  }

  /**
   * Grants permission to add VPC configuration to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html
   */
  public toAddApplicationVpcConfiguration() {
    return this.to('AddApplicationVpcConfiguration');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create and return a URL that you can use to connect to an application's extension
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationPresignedUrl.html
   */
  public toCreateApplicationPresignedUrl() {
    return this.to('CreateApplicationPresignedUrl');
  }

  /**
   * Grants permission to create a snapshot for an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html
   */
  public toCreateApplicationSnapshot() {
    return this.to('CreateApplicationSnapshot');
  }

  /**
   * Grants permission to delete the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete the specified cloudwatch logging option of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html
   */
  public toDeleteApplicationCloudWatchLoggingOption() {
    return this.to('DeleteApplicationCloudWatchLoggingOption');
  }

  /**
   * Grants permission to delete the specified input processing configuration of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html
   */
  public toDeleteApplicationInputProcessingConfiguration() {
    return this.to('DeleteApplicationInputProcessingConfiguration');
  }

  /**
   * Grants permission to delete the specified output of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    return this.to('DeleteApplicationOutput');
  }

  /**
   * Grants permission to delete the specified reference data source of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    return this.to('DeleteApplicationReferenceDataSource');
  }

  /**
   * Grants permission to delete a snapshot for an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html
   */
  public toDeleteApplicationSnapshot() {
    return this.to('DeleteApplicationSnapshot');
  }

  /**
   * Grants permission to delete the specified VPC configuration of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html
   */
  public toDeleteApplicationVpcConfiguration() {
    return this.to('DeleteApplicationVpcConfiguration');
  }

  /**
   * Grants permission to describe the specified application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to describe an application snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html
   */
  public toDescribeApplicationSnapshot() {
    return this.to('DescribeApplicationSnapshot');
  }

  /**
   * Grants permission to describe the application version of an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationVersion.html
   */
  public toDescribeApplicationVersion() {
    return this.to('DescribeApplicationVersion');
  }

  /**
   * Grants permission to discover the input schema for the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    return this.to('DiscoverInputSchema');
  }

  /**
   * Grants permission to list the snapshots for an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html
   */
  public toListApplicationSnapshots() {
    return this.to('ListApplicationSnapshots');
  }

  /**
   * Grants permission to list application versions of an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationVersions.html
   */
  public toListApplicationVersions() {
    return this.to('ListApplicationVersions');
  }

  /**
   * Grants permission to list applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to fetch the tags associated with the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to perform rollback operation on an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_RollbackApplication.html
   */
  public toRollbackApplication() {
    return this.to('RollbackApplication');
  }

  /**
   * Grants permission to start the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Grants permission to stop the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html
   */
  public toStopApplication() {
    return this.to('StopApplication');
  }

  /**
   * Grants permission to add tags to the application
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the application
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update the maintenance configuration of an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplicationMaintenanceConfiguration.html
   */
  public toUpdateApplicationMaintenanceConfiguration() {
    return this.to('UpdateApplicationMaintenanceConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddApplicationCloudWatchLoggingOption',
      'AddApplicationInput',
      'AddApplicationInputProcessingConfiguration',
      'AddApplicationOutput',
      'AddApplicationReferenceDataSource',
      'AddApplicationVpcConfiguration',
      'CreateApplication',
      'CreateApplicationSnapshot',
      'DeleteApplication',
      'DeleteApplicationCloudWatchLoggingOption',
      'DeleteApplicationInputProcessingConfiguration',
      'DeleteApplicationOutput',
      'DeleteApplicationReferenceDataSource',
      'DeleteApplicationSnapshot',
      'DeleteApplicationVpcConfiguration',
      'RollbackApplication',
      'StartApplication',
      'StopApplication',
      'UpdateApplication',
      'UpdateApplicationMaintenanceConfiguration'
    ],
    Read: [
      'CreateApplicationPresignedUrl',
      'DescribeApplication',
      'DescribeApplicationSnapshot',
      'DescribeApplicationVersion',
      'DiscoverInputSchema',
      'ListApplicationSnapshots',
      'ListApplicationVersions',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/how-it-works.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || KinesisanalyticsV2.defaultPartition }:kinesisanalytics:${ region || '*' }:${ account || '*' }:application/${ applicationName }`);
  }
}
