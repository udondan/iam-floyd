import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ec2messages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2messages extends PolicyStatement {
  public servicePrefix = 'ec2messages';

  /**
   * Statement provider for service [ec2messages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Acknowledges a message, ensuring it will not be delivered again
   *
   * Access Level: Write
   */
  public toAcknowledgeMessage() {
    this.to('ec2messages:AcknowledgeMessage');
    return this;
  }

  /**
   * Deletes a message
   *
   * Access Level: Write
   */
  public toDeleteMessage() {
    this.to('ec2messages:DeleteMessage');
    return this;
  }

  /**
   * Fails a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   *
   * Access Level: Write
   */
  public toFailMessage() {
    this.to('ec2messages:FailMessage');
    return this;
  }

  /**
   * Routes traffic to the correct endpoint based on the given destination for the messages
   *
   * Access Level: Read
   */
  public toGetEndpoint() {
    this.to('ec2messages:GetEndpoint');
    return this;
  }

  /**
   * Delivers messages to clients/instances using long polling
   *
   * Access Level: Read
   */
  public toGetMessages() {
    this.to('ec2messages:GetMessages');
    return this;
  }

  /**
   * Sends replies from clients/instances to upstream service
   *
   * Access Level: Write
   */
  public toSendReply() {
    this.to('ec2messages:SendReply');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcknowledgeMessage",
      "DeleteMessage",
      "FailMessage",
      "SendReply"
    ],
    "Read": [
      "GetEndpoint",
      "GetMessages"
    ]
  };
}

export type Ec2messagesActionsWrite = 'AcknowledgeMessage' | 'DeleteMessage' | 'FailMessage' | 'SendReply';
export type Ec2messagesActionsRead = 'GetEndpoint' | 'GetMessages';
export type Ec2messagesActions = Ec2messagesActionsWrite | Ec2messagesActionsRead;
