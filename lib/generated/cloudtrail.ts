import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('cloudtrail:AddTags');
    return this;
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
    this.to('cloudtrail:CreateTrail');
    return this;
  }

  /**
   * Grants permission to delete a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   */
  public toDeleteTrail() {
    this.to('cloudtrail:DeleteTrail');
    return this;
  }

  /**
   * Grants permission to list settings for the trails associated with the current region for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  public toDescribeTrails() {
    this.to('cloudtrail:DescribeTrails');
    return this;
  }

  /**
   * Grants permission to list settings for event selectors configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   */
  public toGetEventSelectors() {
    this.to('cloudtrail:GetEventSelectors');
    return this;
  }

  /**
   * Grants permission to list CloudTrail Insights selectors that are configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   */
  public toGetInsightSelectors() {
    this.to('cloudtrail:GetInsightSelectors');
    return this;
  }

  /**
   * Grants permission to list settings for the trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  public toGetTrail() {
    this.to('cloudtrail:GetTrail');
    return this;
  }

  /**
   * Grants permission to retrieve a JSON-formatted list of information about the specified trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   */
  public toGetTrailStatus() {
    this.to('cloudtrail:GetTrailStatus');
    return this;
  }

  /**
   * Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    this.to('cloudtrail:ListPublicKeys');
    return this;
  }

  /**
   * Grants permission to list the tags for trails in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.to('cloudtrail:ListTags');
    return this;
  }

  /**
   * Grants permission to list trails associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  public toListTrails() {
    this.to('cloudtrail:ListTrails');
    return this;
  }

  /**
   * Grants permission to look up API activity events captured by CloudTrail that create, update, or delete resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  public toLookupEvents() {
    this.to('cloudtrail:LookupEvents');
    return this;
  }

  /**
   * Grants permission to create and update event selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   */
  public toPutEventSelectors() {
    this.to('cloudtrail:PutEventSelectors');
    return this;
  }

  /**
   * Grants permission to create and update CloudTrail Insights selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   */
  public toPutInsightSelectors() {
    this.to('cloudtrail:PutInsightSelectors');
    return this;
  }

  /**
   * Grants permission to remove tags from a trail
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    this.to('cloudtrail:RemoveTags');
    return this;
  }

  /**
   * Grants permission to start the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   */
  public toStartLogging() {
    this.to('cloudtrail:StartLogging');
    return this;
  }

  /**
   * Grants permission to stop the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   */
  public toStopLogging() {
    this.to('cloudtrail:StopLogging');
    return this;
  }

  /**
   * Grants permission to update the settings that specify delivery of log files
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   */
  public toUpdateTrail() {
    this.to('cloudtrail:UpdateTrail');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Write": [
      "CreateTrail",
      "DeleteTrail",
      "PutEventSelectors",
      "PutInsightSelectors",
      "StartLogging",
      "StopLogging",
      "UpdateTrail"
    ],
    "Read": [
      "DescribeTrails",
      "GetEventSelectors",
      "GetInsightSelectors",
      "GetTrail",
      "GetTrailStatus",
      "ListPublicKeys",
      "ListTags",
      "LookupEvents"
    ],
    "List": [
      "ListTrails"
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
    var arn = 'arn:${Partition}:cloudtrail:${Region}:${Account}:trail/${TrailName}';
    arn = arn.replace('${TrailName}', trailName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type CloudtrailActionsTagging = 'AddTags' | 'RemoveTags';
export type CloudtrailActionsWrite = 'CreateTrail' | 'DeleteTrail' | 'PutEventSelectors' | 'PutInsightSelectors' | 'StartLogging' | 'StopLogging' | 'UpdateTrail';
export type CloudtrailActionsRead = 'DescribeTrails' | 'GetEventSelectors' | 'GetInsightSelectors' | 'GetTrail' | 'GetTrailStatus' | 'ListPublicKeys' | 'ListTags' | 'LookupEvents';
export type CloudtrailActionsList = 'ListTrails';
export type CloudtrailActions = CloudtrailActionsTagging | CloudtrailActionsWrite | CloudtrailActionsRead | CloudtrailActionsList;
