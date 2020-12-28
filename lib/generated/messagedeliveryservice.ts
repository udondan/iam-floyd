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
    return this.to('AcknowledgeMessage');
  }

  /**
   * Deletes a message
   *
   * Access Level: Write
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Fails a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   *
   * Access Level: Write
   */
  public toFailMessage() {
    return this.to('FailMessage');
  }

  /**
   * Routes traffic to the correct endpoint based on the given destination for the messages
   *
   * Access Level: Read
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Delivers messages to clients/instances using long polling
   *
   * Access Level: Read
   */
  public toGetMessages() {
    return this.to('GetMessages');
  }

  /**
   * Sends replies from clients/instances to upstream service
   *
   * Access Level: Write
   */
  public toSendReply() {
    return this.to('SendReply');
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
