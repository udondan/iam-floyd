import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cognito-sync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoSync extends PolicyStatement {
  public servicePrefix = 'cognito-sync';

  /**
   * Statement provider for service [cognito-sync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_BulkPublish.html
   */
  public toBulkPublish() {
    return this.to('BulkPublish');
  }

  /**
   * Deletes the specific dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Gets meta data about a dataset by identity and dataset name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Gets usage details (for example, data storage) about a particular identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityPoolUsage.html
   */
  public toDescribeIdentityPoolUsage() {
    return this.to('DescribeIdentityPoolUsage');
  }

  /**
   * Gets usage information for an identity, including number of datasets and data usage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityUsage.html
   */
  public toDescribeIdentityUsage() {
    return this.to('DescribeIdentityUsage');
  }

  /**
   * Get the status of the last BulkPublish operation for an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetBulkPublishDetails.html
   */
  public toGetBulkPublishDetails() {
    return this.to('GetBulkPublishDetails');
  }

  /**
   * Gets the events and the corresponding Lambda functions associated with an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetCognitoEvents.html
   */
  public toGetCognitoEvents() {
    return this.to('GetCognitoEvents');
  }

  /**
   * Gets the configuration settings of an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetIdentityPoolConfiguration.html
   */
  public toGetIdentityPoolConfiguration() {
    return this.to('GetIdentityPoolConfiguration');
  }

  /**
   * Lists datasets for an identity.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Gets a list of identity pools registered with Cognito.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListIdentityPoolUsage.html
   */
  public toListIdentityPoolUsage() {
    return this.to('ListIdentityPoolUsage');
  }

  /**
   * Gets paginated records, optionally changed after a particular sync count for a dataset and identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListRecords.html
   */
  public toListRecords() {
    return this.to('ListRecords');
  }

  /**
   * A permission that grants the ability to query records.
   *
   * Access Level: Read
   */
  public toQueryRecords() {
    return this.to('QueryRecords');
  }

  /**
   * Registers a device to receive push sync notifications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_RegisterDevice.html
   */
  public toRegisterDevice() {
    return this.to('RegisterDevice');
  }

  /**
   * Sets the AWS Lambda function for a given event type for an identity pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetCognitoEvents.html
   */
  public toSetCognitoEvents() {
    return this.to('SetCognitoEvents');
  }

  /**
   * A permission that grants ability to configure datasets.
   *
   * Access Level: Write
   */
  public toSetDatasetConfiguration() {
    return this.to('SetDatasetConfiguration');
  }

  /**
   * Sets the necessary configuration for push sync.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetIdentityPoolConfiguration.html
   */
  public toSetIdentityPoolConfiguration() {
    return this.to('SetIdentityPoolConfiguration');
  }

  /**
   * Subscribes to receive notifications when a dataset is modified by another device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SubscribeToDataset.html
   */
  public toSubscribeToDataset() {
    return this.to('SubscribeToDataset');
  }

  /**
   * Unsubscribes from receiving notifications when a dataset is modified by another device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UnsubscribeFromDataset.html
   */
  public toUnsubscribeFromDataset() {
    return this.to('UnsubscribeFromDataset');
  }

  /**
   * Posts updates to records and adds and deletes records for a dataset and user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UpdateRecords.html
   */
  public toUpdateRecords() {
    return this.to('UpdateRecords');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BulkPublish',
      'DeleteDataset',
      'RegisterDevice',
      'SetCognitoEvents',
      'SetDatasetConfiguration',
      'SetIdentityPoolConfiguration',
      'SubscribeToDataset',
      'UnsubscribeFromDataset',
      'UpdateRecords'
    ],
    Read: [
      'DescribeDataset',
      'DescribeIdentityPoolUsage',
      'DescribeIdentityUsage',
      'GetBulkPublishDetails',
      'GetCognitoEvents',
      'GetIdentityPoolConfiguration',
      'ListIdentityPoolUsage',
      'ListRecords',
      'QueryRecords'
    ],
    List: [
      'ListDatasets'
    ]
  };

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/synchronizing-data.html#understanding-datasets
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param identityId - Identifier for the identityId.
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataset(identityPoolId: string, identityId: string, datasetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:cognito-sync:${ region || '*' }:${ account || '*' }:identitypool/${ identityPoolId }/identity/${ identityId }/dataset/${ datasetName }`);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html#authenticated-and-unauthenticated-identities
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param identityId - Identifier for the identityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIdentity(identityPoolId: string, identityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:cognito-sync:${ region || '*' }:${ account || '*' }:identitypool/${ identityPoolId }/identity/${ identityId }`);
  }

  /**
   * Adds a resource of type identitypool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIdentitypool(identityPoolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:cognito-sync:${ region || '*' }:${ account || '*' }:identitypool/${ identityPoolId }`);
  }
}
