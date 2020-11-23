import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ssmmessages extends PolicyStatement {
  public servicePrefix = 'ssmmessages';

  /**
   * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html).
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
    this.to('CreateControlChannel');
    return this;
  }

  /**
   * Registers a data channel for an instance to send data messages to Systems Manager service.
   *
   * Access Level: Write
   */
  public toCreateDataChannel() {
    this.to('CreateDataChannel');
    return this;
  }

  /**
   * Opens a websocket connection for a registered control channel stream from an instance to Systems Manager service.
   *
   * Access Level: Write
   */
  public toOpenControlChannel() {
    this.to('OpenControlChannel');
    return this;
  }

  /**
   * Opens a websocket connection for a registered data channel stream from an instance to Systems Manager service.
   *
   * Access Level: Write
   */
  public toOpenDataChannel() {
    this.to('OpenDataChannel');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateControlChannel",
      "CreateDataChannel",
      "OpenControlChannel",
      "OpenDataChannel"
    ]
  };
}
