import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds cloudwatch logging option to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html
   */
  public toAddApplicationCloudWatchLoggingOption() {
    this.to('kinesisanalytics:AddApplicationCloudWatchLoggingOption');
    return this;
  }

  /**
   * Adds input to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    this.to('kinesisanalytics:AddApplicationInput');
    return this;
  }

  /**
   * Adds input processing configuration to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html
   */
  public toAddApplicationInputProcessingConfiguration() {
    this.to('kinesisanalytics:AddApplicationInputProcessingConfiguration');
    return this;
  }

  /**
   * Adds output to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    this.to('kinesisanalytics:AddApplicationOutput');
    return this;
  }

  /**
   * Adds reference data source to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    this.to('kinesisanalytics:AddApplicationReferenceDataSource');
    return this;
  }

  /**
   * Adds VPC configuration to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html
   */
  public toAddApplicationVpcConfiguration() {
    this.to('kinesisanalytics:AddApplicationVpcConfiguration');
    return this;
  }

  /**
   * Creates an application.
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
    this.to('kinesisanalytics:CreateApplication');
    return this;
  }

  /**
   * Creates a snapshot for an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html
   */
  public toCreateApplicationSnapshot() {
    this.to('kinesisanalytics:CreateApplicationSnapshot');
    return this;
  }

  /**
   * Deletes the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('kinesisanalytics:DeleteApplication');
    return this;
  }

  /**
   * Deletes the specified cloudwatch logging option of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html
   */
  public toDeleteApplicationCloudWatchLoggingOption() {
    this.to('kinesisanalytics:DeleteApplicationCloudWatchLoggingOption');
    return this;
  }

  /**
   * Deletes the specified input processing configuration of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html
   */
  public toDeleteApplicationInputProcessingConfiguration() {
    this.to('kinesisanalytics:DeleteApplicationInputProcessingConfiguration');
    return this;
  }

  /**
   * Deletes the specified output of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    this.to('kinesisanalytics:DeleteApplicationOutput');
    return this;
  }

  /**
   * Deletes the specified reference data source of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    this.to('kinesisanalytics:DeleteApplicationReferenceDataSource');
    return this;
  }

  /**
   * Deletes a snapshot for an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html
   */
  public toDeleteApplicationSnapshot() {
    this.to('kinesisanalytics:DeleteApplicationSnapshot');
    return this;
  }

  /**
   * Deletes the specified VPC configuration of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html
   */
  public toDeleteApplicationVpcConfiguration() {
    this.to('kinesisanalytics:DeleteApplicationVpcConfiguration');
    return this;
  }

  /**
   * Describes the specified application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    this.to('kinesisanalytics:DescribeApplication');
    return this;
  }

  /**
   * Describes an application snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html
   */
  public toDescribeApplicationSnapshot() {
    this.to('kinesisanalytics:DescribeApplicationSnapshot');
    return this;
  }

  /**
   * Discovers the input schema for the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    this.to('kinesisanalytics:DiscoverInputSchema');
    return this;
  }

  /**
   * Lists the snapshots for an application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html
   */
  public toListApplicationSnapshots() {
    this.to('kinesisanalytics:ListApplicationSnapshots');
    return this;
  }

  /**
   * List applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html
   */
  public toListApplications() {
    this.to('kinesisanalytics:ListApplications');
    return this;
  }

  /**
   * Fetch the tags associated with the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('kinesisanalytics:ListTagsForResource');
    return this;
  }

  /**
   * Starts the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html
   */
  public toStartApplication() {
    this.to('kinesisanalytics:StartApplication');
    return this;
  }

  /**
   * Stops the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html
   */
  public toStopApplication() {
    this.to('kinesisanalytics:StopApplication');
    return this;
  }

  /**
   * Add tags to the application.
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
    this.to('kinesisanalytics:TagResource');
    return this;
  }

  /**
   * Remove the specified tags from the application.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('kinesisanalytics:UntagResource');
    return this;
  }

  /**
   * Updates the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('kinesisanalytics:UpdateApplication');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddApplicationCloudWatchLoggingOption",
      "AddApplicationInput",
      "AddApplicationInputProcessingConfiguration",
      "AddApplicationOutput",
      "AddApplicationReferenceDataSource",
      "AddApplicationVpcConfiguration",
      "CreateApplication",
      "CreateApplicationSnapshot",
      "DeleteApplication",
      "DeleteApplicationCloudWatchLoggingOption",
      "DeleteApplicationInputProcessingConfiguration",
      "DeleteApplicationOutput",
      "DeleteApplicationReferenceDataSource",
      "DeleteApplicationSnapshot",
      "DeleteApplicationVpcConfiguration",
      "StartApplication",
      "StopApplication",
      "UpdateApplication"
    ],
    "Read": [
      "DescribeApplication",
      "DescribeApplicationSnapshot",
      "DiscoverInputSchema",
      "ListApplicationSnapshots",
      "ListTagsForResource"
    ],
    "List": [
      "ListApplications"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisanalytics:${Region}:${Account}:application/${ApplicationName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type KinesisanalyticsV2ActionsWrite = 'AddApplicationCloudWatchLoggingOption' | 'AddApplicationInput' | 'AddApplicationInputProcessingConfiguration' | 'AddApplicationOutput' | 'AddApplicationReferenceDataSource' | 'AddApplicationVpcConfiguration' | 'CreateApplication' | 'CreateApplicationSnapshot' | 'DeleteApplication' | 'DeleteApplicationCloudWatchLoggingOption' | 'DeleteApplicationInputProcessingConfiguration' | 'DeleteApplicationOutput' | 'DeleteApplicationReferenceDataSource' | 'DeleteApplicationSnapshot' | 'DeleteApplicationVpcConfiguration' | 'StartApplication' | 'StopApplication' | 'UpdateApplication';
export type KinesisanalyticsV2ActionsRead = 'DescribeApplication' | 'DescribeApplicationSnapshot' | 'DiscoverInputSchema' | 'ListApplicationSnapshots' | 'ListTagsForResource';
export type KinesisanalyticsV2ActionsList = 'ListApplications';
export type KinesisanalyticsV2ActionsTagging = 'TagResource' | 'UntagResource';
export type KinesisanalyticsV2Actions = KinesisanalyticsV2ActionsWrite | KinesisanalyticsV2ActionsRead | KinesisanalyticsV2ActionsList | KinesisanalyticsV2ActionsTagging;
