import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
 *
 * @param options - Options for the statement
 */
export class Kinesisanalytics extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';

  /**
   * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add input to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    return this.to('AddApplicationInput');
  }

  /**
   * Grants permission to add output to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    return this.to('AddApplicationOutput');
  }

  /**
   * Grants permission to add reference data source to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    return this.to('AddApplicationReferenceDataSource');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to delete the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete the specified output of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    return this.to('DeleteApplicationOutput');
  }

  /**
   * Grants permission to delete the specified reference data source of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    return this.to('DeleteApplicationReferenceDataSource');
  }

  /**
   * Grants permission to describe the specified application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to discover the input schema for the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    return this.to('DiscoverInputSchema');
  }

  /**
   * Grants permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas
   */
  public toGetApplicationState() {
    return this.to('GetApplicationState');
  }

  /**
   * Grants permission to list applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to fetch the tags associated with the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Grants permission to stop the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddApplicationInput',
      'AddApplicationOutput',
      'AddApplicationReferenceDataSource',
      'CreateApplication',
      'DeleteApplication',
      'DeleteApplicationOutput',
      'DeleteApplicationReferenceDataSource',
      'StartApplication',
      'StopApplication',
      'UpdateApplication'
    ],
    Read: [
      'DescribeApplication',
      'DiscoverInputSchema',
      'GetApplicationState',
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html
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
    return this.on(`arn:${ partition || this.defaultPartition }:kinesisanalytics:${ region || '*' }:${ account || '*' }:application/${ applicationName }`);
  }
}
