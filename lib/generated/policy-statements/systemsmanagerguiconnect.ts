import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [ssm-guiconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmGuiconnect extends PolicyStatement {
  public servicePrefix = 'ssm-guiconnect';

  /**
   * Statement provider for service [ssm-guiconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to terminate a GUI Connect connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  public toCancelConnection() {
    return this.to('CancelConnection');
  }

  /**
   * Grants permission to get the metadata for a GUI Connect connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to start a GUI Connect connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  public toStartConnection() {
    return this.to('StartConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelConnection',
      'StartConnection'
    ],
    Read: [
      'GetConnection'
    ]
  };
}
