import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to register a control channel for an instance to send control messages to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toCreateControlChannel() {
    return this.to('CreateControlChannel');
  }

  /**
   * Grants permission to register a data channel for an instance to send data messages to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toCreateDataChannel() {
    return this.to('CreateDataChannel');
  }

  /**
   * Grants permission to open a websocket connection for a registered control channel stream from an instance to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toOpenControlChannel() {
    return this.to('OpenControlChannel');
  }

  /**
   * Grants permission to open a websocket connection for a registered data channel stream from an instance to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toOpenDataChannel() {
    return this.to('OpenDataChannel');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateControlChannel',
      'CreateDataChannel',
      'OpenControlChannel',
      'OpenDataChannel'
    ]
  };
}
