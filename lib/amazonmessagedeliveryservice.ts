import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ec2messages
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmessagedeliveryservice.html
 */
export class Ec2messages extends PolicyStatement {
  public servicePrefix = 'ec2messages';
  public actions : Actions = {
    "AcknowledgeMessage": {
      "url": "",
      "description": "Acknowledges a message, ensuring it will not be delivered again",
      "accessLevel": "Write"
    },
    "DeleteMessage": {
      "url": "",
      "description": "Deletes a message",
      "accessLevel": "Write"
    },
    "FailMessage": {
      "url": "",
      "description": "Fails a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again",
      "accessLevel": "Write"
    },
    "GetEndpoint": {
      "url": "",
      "description": "Routes traffic to the correct endpoint based on the given destination for the messages",
      "accessLevel": "Read"
    },
    "GetMessages": {
      "url": "",
      "description": "Delivers messages to clients/instances using long polling",
      "accessLevel": "Read"
    },
    "SendReply": {
      "url": "",
      "description": "Sends replies from clients/instances to upstream service",
      "accessLevel": "Write"
    }
  };

  /**
   * Acknowledges a message, ensuring it will not be delivered again
   *
   * Access Level: Write
   *
   *
   */
  public acknowledgeMessage () {
    this.add('ec2messages:AcknowledgeMessage');
    return this;
  }

  /**
   * Deletes a message
   *
   * Access Level: Write
   *
   *
   */
  public deleteMessage () {
    this.add('ec2messages:DeleteMessage');
    return this;
  }

  /**
   * Fails a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   *
   * Access Level: Write
   *
   *
   */
  public failMessage () {
    this.add('ec2messages:FailMessage');
    return this;
  }

  /**
   * Routes traffic to the correct endpoint based on the given destination for the messages
   *
   * Access Level: Read
   *
   *
   */
  public getEndpoint () {
    this.add('ec2messages:GetEndpoint');
    return this;
  }

  /**
   * Delivers messages to clients/instances using long polling
   *
   * Access Level: Read
   *
   *
   */
  public getMessages () {
    this.add('ec2messages:GetMessages');
    return this;
  }

  /**
   * Sends replies from clients/instances to upstream service
   *
   * Access Level: Write
   *
   *
   */
  public sendReply () {
    this.add('ec2messages:SendReply');
    return this;
  }
}
