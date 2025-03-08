import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [gameliftstreams](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongameliftstreams.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Gameliftstreams extends PolicyStatement {
  public servicePrefix = 'gameliftstreams';

  /**
   * Statement provider for service [gameliftstreams](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongameliftstreams.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to attach a StreamGroup remote location
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeRegions
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AddStreamGroupLocations.html
   */
  public toAddStreamGroupLocations() {
    return this.to('AddStreamGroupLocations');
  }

  /**
   * Grants permission to associate Applications to a StreamGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AssociateApplications.html
   */
  public toAssociateApplications() {
    return this.to('AssociateApplications');
  }

  /**
   * Grants permission to create application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - gameliftstreams:TagResource
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create a StreamGroup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - gameliftstreams:TagResource
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateStreamGroup.html
   */
  public toCreateStreamGroup() {
    return this.to('CreateStreamGroup');
  }

  /**
   * Grants permission to create a stream session connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateStreamSessionConnection.html
   */
  public toCreateStreamSessionConnection() {
    return this.to('CreateStreamSessionConnection');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete a StreamGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_DeleteStreamGroup.html
   */
  public toDeleteStreamGroup() {
    return this.to('DeleteStreamGroup');
  }

  /**
   * Grants permission to disassociate Applications from a StreamGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_DisassociateApplications.html
   */
  public toDisassociateApplications() {
    return this.to('DisassociateApplications');
  }

  /**
   * Grants permission to export stream session files that your application generates
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ExportStreamSessionFiles.html
   */
  public toExportStreamSessionFiles() {
    return this.to('ExportStreamSessionFiles');
  }

  /**
   * Grants permission to get an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants `permission` to get a StreamGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamGroup.html
   */
  public toGetStreamGroup() {
    return this.to('GetStreamGroup');
  }

  /**
   * Grants permission to get a stream session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html
   */
  public toGetStreamSession() {
    return this.to('GetStreamSession');
  }

  /**
   * Grants permission to list applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list StreamGroups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListStreamGroups.html
   */
  public toListStreamGroups() {
    return this.to('ListStreamGroups');
  }

  /**
   * Grants permission to list stream sessions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListStreamSessions.html
   */
  public toListStreamSessions() {
    return this.to('ListStreamSessions');
  }

  /**
   * Grants permission to list stream sessions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListStreamSessionsByAccount.html
   */
  public toListStreamSessionsByAccount() {
    return this.to('ListStreamSessionsByAccount');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to detach a StreamGroup remote location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_RemoveStreamGroupLocations.html
   */
  public toRemoveStreamGroupLocations() {
    return this.to('RemoveStreamGroupLocations');
  }

  /**
   * Grants permission to create a stream session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_StartStreamSession.html
   */
  public toStartStreamSession() {
    return this.to('StartStreamSession');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate a stream session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TerminateStreamSession.html
   */
  public toTerminateStreamSession() {
    return this.to('TerminateStreamSession');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update a StreamGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html
   */
  public toUpdateStreamGroup() {
    return this.to('UpdateStreamGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddStreamGroupLocations',
      'AssociateApplications',
      'CreateApplication',
      'CreateStreamGroup',
      'CreateStreamSessionConnection',
      'DeleteApplication',
      'DeleteStreamGroup',
      'DisassociateApplications',
      'ExportStreamSessionFiles',
      'RemoveStreamGroupLocations',
      'StartStreamSession',
      'TerminateStreamSession',
      'UpdateApplication',
      'UpdateStreamGroup'
    ],
    Read: [
      'GetApplication',
      'GetStreamGroup',
      'GetStreamSession',
      'ListStreamSessions',
      'ListStreamSessionsByAccount',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListStreamGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/applications.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:gameliftstreams:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type stream group to the statement
   *
   * https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/stream-groups.html
   *
   * @param streamGroupId - Identifier for the streamGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamGroup(streamGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:gameliftstreams:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:streamgroup/${ streamGroupId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateStreamGroup()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - application
   * - stream group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateStreamGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
