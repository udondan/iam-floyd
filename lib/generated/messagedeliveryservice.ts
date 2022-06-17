import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to acknowledge a message, ensuring it will not be delivered again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toAcknowledgeMessage() {
    return this.to('AcknowledgeMessage');
  }

  /**
   * Grants permission to delete a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Grants permission to fail a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toFailMessage() {
    return this.to('FailMessage');
  }

  /**
   * Grants permission to route traffic to the correct endpoint based on the given destination for the messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Grants permission to deliver messages to clients/instances using long polling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toGetMessages() {
    return this.to('GetMessages');
  }

  /**
   * Grants permission to send replies from clients/instances to upstream service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  public toSendReply() {
    return this.to('SendReply');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcknowledgeMessage',
      'DeleteMessage',
      'FailMessage',
      'SendReply'
    ],
    Read: [
      'GetEndpoint',
      'GetMessages'
    ]
  };
}
