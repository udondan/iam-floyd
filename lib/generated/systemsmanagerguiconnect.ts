import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [ssm-guiconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html).
 *
 * @param options - Options for the statement
 */
export class SsmGuiconnect extends PolicyStatement {
  public servicePrefix = 'ssm-guiconnect';

  /**
   * Statement provider for service [ssm-guiconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to terminate a GUI Connect session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  public toCancelConnection() {
    return this.to('CancelConnection');
  }

  /**
   * Grants permission to get the metadata for a GUI Connect session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to start a GUI Connect session
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
