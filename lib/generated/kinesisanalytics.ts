import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisanalytics extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';

  /**
   * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Adds input to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    return this.to('AddApplicationInput');
  }

  /**
   * Adds output to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    return this.to('AddApplicationOutput');
  }

  /**
   * Adds reference data source to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    return this.to('AddApplicationReferenceDataSource');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Deletes the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Deletes the specified output of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    return this.to('DeleteApplicationOutput');
  }

  /**
   * Deletes the specified reference data source of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    return this.to('DeleteApplicationReferenceDataSource');
  }

  /**
   * Describes the specified application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Discovers the input schema for the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    return this.to('DiscoverInputSchema');
  }

  /**
   * Grant permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas
   */
  public toGetApplicationState() {
    return this.to('GetApplicationState');
  }

  /**
   * List applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Fetch the tags associated with the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Starts the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartsApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Stops the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html
   */
  public toStopApplication() {
    return this.to('StopApplication');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Remove the specified tags from the application.
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
   * Updates the application.
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kinesisanalytics:${ region || '*' }:${ account || '*' }:application/${ applicationName }`);
  }
}
