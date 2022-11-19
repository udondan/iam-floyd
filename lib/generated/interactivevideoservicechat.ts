import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [ivschat](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ivschat extends PolicyStatement {
  public servicePrefix = 'ivschat';

  /**
   * Statement provider for service [ivschat](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an encrypted token that is used to establish an individual WebSocket connection to a room
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateChatToken.html
   */
  public toCreateChatToken() {
    return this.to('CreateChatToken');
  }

  /**
   * Grants permission to create a logging configuration that allows clients to record room messages
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html
   */
  public toCreateLoggingConfiguration() {
    return this.to('CreateLoggingConfiguration');
  }

  /**
   * Grants permission to create a room that allows clients to connect and pass messages
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html
   */
  public toCreateRoom() {
    return this.to('CreateRoom');
  }

  /**
   * Grants permission to delete the logging configuration for a specified logging configuration ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Grants permission to send an event to a specific room which directs clients to delete a specific message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteMessage.html
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Grants permission to delete the room for a specified room ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteRoom.html
   */
  public toDeleteRoom() {
    return this.to('DeleteRoom');
  }

  /**
   * Grants permission to disconnect all connections using a specified user ID from a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DisconnectUser.html
   */
  public toDisconnectUser() {
    return this.to('DisconnectUser');
  }

  /**
   * Grants permission to get the logging configuration for a specified logging configuration ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    return this.to('GetLoggingConfiguration');
  }

  /**
   * Grants permission to get the room configuration for a specified room ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetRoom.html
   */
  public toGetRoom() {
    return this.to('GetRoom');
  }

  /**
   * Grants permission to get summary information about logging configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    return this.to('ListLoggingConfigurations');
  }

  /**
   * Grants permission to get summary information about rooms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListRooms.html
   */
  public toListRooms() {
    return this.to('ListRooms');
  }

  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to send an event to a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_SendEvent.html
   */
  public toSendEvent() {
    return this.to('SendEvent');
  }

  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the logging configuration for a specified logging configuration ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateLoggingConfiguration.html
   */
  public toUpdateLoggingConfiguration() {
    return this.to('UpdateLoggingConfiguration');
  }

  /**
   * Grants permission to update the room configuration for a specified room ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateRoom.html
   */
  public toUpdateRoom() {
    return this.to('UpdateRoom');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateChatToken',
      'CreateLoggingConfiguration',
      'CreateRoom',
      'DeleteLoggingConfiguration',
      'DeleteMessage',
      'DeleteRoom',
      'DisconnectUser',
      'SendEvent',
      'UpdateLoggingConfiguration',
      'UpdateRoom'
    ],
    Read: [
      'GetLoggingConfiguration',
      'GetRoom',
      'ListTagsForResource'
    ],
    List: [
      'ListLoggingConfigurations',
      'ListRooms'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Room to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_Room.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoom(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Ivschat.defaultPartition }:ivschat::${ account || '*' }:room/${ resourceId }`);
  }

  /**
   * Adds a resource of type Logging-Configuration to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_LoggingConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLoggingConfiguration(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Ivschat.defaultPartition }:ivschat::${ account || '*' }:logging-configuration/${ resourceId }`);
  }
}
