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
   * Grants permission to list the tags for trails in the current region
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
      'CreateTrail',
      'DeleteTrail',
      'PutEventSelectors',
      'PutInsightSelectors',
      'StartLogging',
      'StopLogging',
      'UpdateTrail'
    ],
    Read: [
      'DescribeTrails',
      'GetEventSelectors',
      'GetInsightSelectors',
      'GetTrail',
      'GetTrailStatus',
      'ListPublicKeys',
      'ListTags',
      'LookupEvents'
    ],
    List: [
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrail(trailName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:cloudtrail:${ region || '*' }:${ account || '*' }:trail/${ trailName }`);
  }
}
