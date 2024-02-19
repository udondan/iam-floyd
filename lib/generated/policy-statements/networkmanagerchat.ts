import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [networkmanager-chat](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkmanagerchat.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NetworkmanagerChat extends PolicyStatement {
  public servicePrefix = 'networkmanager-chat';

  /**
   * Statement provider for service [networkmanager-chat](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkmanagerchat.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a response to a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toCancelMessageResponse() {
    return this.to('CancelMessageResponse');
  }

  /**
   * Grants permission to create a conversation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toCreateConversation() {
    return this.to('CreateConversation');
  }

  /**
   * Grants permission to delete a conversation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toDeleteConversation() {
    return this.to('DeleteConversation');
  }

  /**
   * Grants permission to list conversation messages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toListConversationMessages() {
    return this.to('ListConversationMessages');
  }

  /**
   * Grants permission to list conversations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to notify whether there is activity in a conversation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toNotifyConversationIsActive() {
    return this.to('NotifyConversationIsActive');
  }

  /**
   * Grants permission to send a conversation message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toSendConversationMessage() {
    return this.to('SendConversationMessage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelMessageResponse',
      'CreateConversation',
      'DeleteConversation',
      'NotifyConversationIsActive',
      'SendConversationMessage'
    ],
    List: [
      'ListConversationMessages',
      'ListConversations'
    ]
  };
}
