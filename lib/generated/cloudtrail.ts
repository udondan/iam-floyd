import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudtrail extends PolicyStatement {
  public servicePrefix = 'cloudtrail';

  /**
   * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more tags to a trail, up to a limit of 10
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to cancel a running query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CancelQuery.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to create an event data store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateEventDataStore.html
   */
  public toCreateEventDataStore() {
    return this.to('CreateEventDataStore');
  }

  /**
   * Grants permission to create a trail that specifies the settings for delivery of log data to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html
   */
  public toCreateTrail() {
    return this.to('CreateTrail');
  }

  /**
   * Grants permission to delete an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteEventDataStore.html
   */
  public toDeleteEventDataStore() {
    return this.to('DeleteEventDataStore');
  }

  /**
   * Grants permission to delete a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   */
  public toDeleteTrail() {
    return this.to('DeleteTrail');
  }

  /**
   * Grants permission to list details for the query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeQuery.html
   */
  public toDescribeQuery() {
    return this.to('DescribeQuery');
  }

  /**
   * Grants permission to list settings for the trails associated with the current region for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  public toDescribeTrails() {
    return this.to('DescribeTrails');
  }

  /**
   * Grants permission to list settings for the event data store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventDataStore.html
   */
  public toGetEventDataStore() {
    return this.to('GetEventDataStore');
  }

  /**
   * Grants permission to list settings for event selectors configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   */
  public toGetEventSelectors() {
    return this.to('GetEventSelectors');
  }

  /**
   * Grants permission to list CloudTrail Insights selectors that are configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   */
  public toGetInsightSelectors() {
    return this.to('GetInsightSelectors');
  }

  /**
   * Grants permission to fetch results of a complete query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Grants permission to list settings for the trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  public toGetTrail() {
    return this.to('GetTrail');
  }

  /**
   * Grants permission to retrieve a JSON-formatted list of information about the specified trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   */
  public toGetTrailStatus() {
    return this.to('GetTrailStatus');
  }

  /**
   * Grants permission to list event data stores associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListEventDataStores.html
   */
  public toListEventDataStores() {
    return this.to('ListEventDataStores');
  }

  /**
   * Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    return this.to('ListPublicKeys');
  }

  /**
   * Grants permission to list queries associated with an event data store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListQueries.html
   */
  public toListQueries() {
    return this.to('ListQueries');
  }

  /**
   * Grants permission to list the tags for trails or event data stores in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list trails associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  public toListTrails() {
    return this.to('ListTrails');
  }

  /**
   * Grants permission to look up API activity events captured by CloudTrail that create, update, or delete resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  public toLookupEvents() {
    return this.to('LookupEvents');
  }

  /**
   * Grants permission to create and update event selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   */
  public toPutEventSelectors() {
    return this.to('PutEventSelectors');
  }

  /**
   * Grants permission to create and update CloudTrail Insights selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   */
  public toPutInsightSelectors() {
    return this.to('PutInsightSelectors');
  }

  /**
   * Grants permission to remove tags from a trail
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to restore an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RestoreEventDataStore.html
   */
  public toRestoreEventDataStore() {
    return this.to('RestoreEventDataStore');
  }

  /**
   * Grants permission to start the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   */
  public toStartLogging() {
    return this.to('StartLogging');
  }

  /**
   * Grants permission to start a new query on a specified event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartQuery.html
   */
  public toStartQuery() {
    return this.to('StartQuery');
  }

  /**
   * Grants permission to stop the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   */
  public toStopLogging() {
    return this.to('StopLogging');
  }

  /**
   * Grants permission to update an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateEventDataStore.html
   */
  public toUpdateEventDataStore() {
    return this.to('UpdateEventDataStore');
  }

  /**
   * Grants permission to update the settings that specify delivery of log files
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   */
  public toUpdateTrail() {
    return this.to('UpdateTrail');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Write: [
      'CancelQuery',
      'CreateEventDataStore',
      'CreateTrail',
      'DeleteEventDataStore',
      'DeleteTrail',
      'PutEventSelectors',
      'PutInsightSelectors',
      'RestoreEventDataStore',
      'StartLogging',
      'StartQuery',
      'StopLogging',
      'UpdateEventDataStore',
      'UpdateTrail'
    ],
    Read: [
      'DescribeQuery',
      'DescribeTrails',
      'GetEventDataStore',
      'GetEventSelectors',
      'GetInsightSelectors',
      'GetQueryResults',
      'GetTrail',
      'GetTrailStatus',
      'ListPublicKeys',
      'ListTags',
      'LookupEvents'
    ],
    List: [
      'ListEventDataStores',
      'ListQueries',
      'ListTrails'
    ]
  };

  /**
   * Adds a resource of type trail to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html
   *
   * @param trailName - Identifier for the trailName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTrail(trailName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cloudtrail.defaultPartition }:cloudtrail:${ region || '*' }:${ account || '*' }:trail/${ trailName }`);
  }

  /**
   * Adds a resource of type eventdatastore to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html
   *
   * @param eventDataStoreId - Identifier for the eventDataStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventdatastore(eventDataStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cloudtrail.defaultPartition }:cloudtrail:${ region || '*' }:${ account || '*' }:eventdatastore/${ eventDataStoreId }`);
  }
}
