import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsessionmanagermessagegatewayservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ssmmessages extends PolicyStatement {
  public servicePrefix = 'ssmmessages';
  protected actionList: Actions = {
    "CreateControlChannel": {
      "url": "",
      "description": "Registers a control channel for an instance to send control messages to Systems Manager service.",
      "accessLevel": "Write"
    },
    "CreateDataChannel": {
      "url": "",
      "description": "Registers a data channel for an instance to send data messages to Systems Manager service.",
      "accessLevel": "Write"
    },
    "OpenControlChannel": {
      "url": "",
      "description": "Opens a websocket connection for a registered control channel stream from an instance to Systems Manager service.",
      "accessLevel": "Write"
    },
    "OpenDataChannel": {
      "url": "",
      "description": "Opens a websocket connection for a registered data channel stream from an instance to Systems Manager service.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsessionmanagermessagegatewayservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Registers a control channel for an instance to send control messages to Systems Manager service.
   *
   * Access Level: Write
   */
  public toCreateControlChannel() {
    this.to('ssmmessages:CreateControlChannel');
    return this;
  }

  /**
   * Registers a data channel for an instance to send data messages to Systems Manager service.
   *
   * Access Level: Write
   */
  public toCreateDataChannel() {
    this.to('ssmmessages:CreateDataChannel');
    return this;
  }

  /**
   * Opens a websocket connection for a registered control channel stream from an instance to Systems Manager service.
   *
   * Access Level: Write
   */
  public toOpenControlChannel() {
    this.to('ssmmessages:OpenControlChannel');
    return this;
  }

  /**
   * Opens a websocket connection for a registered data channel stream from an instance to Systems Manager service.
   *
   * Access Level: Write
   */
  public toOpenDataChannel() {
    this.to('ssmmessages:OpenDataChannel');
    return this;
  }
}
