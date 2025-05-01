import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  public toCancelConnection() {
    return this.to('CancelConnection');
  }

  /**
   * Grants permission to remove GUI Connect connection recording preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteConnectionRecordingPreferences.html
   */
  public toDeleteConnectionRecordingPreferences() {
    return this.to('DeleteConnectionRecordingPreferences');
  }

  /**
   * Grants permission to get the metadata for a GUI Connect connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get GUI Connect connection recording preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionRecordingPreferences.html
   */
  public toGetConnectionRecordingPreferences() {
    return this.to('GetConnectionRecordingPreferences');
  }

  /**
   * Grants permission to list the metadata for GUI Connect connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to start a GUI Connect connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  public toStartConnection() {
    return this.to('StartConnection');
  }

  /**
   * Grants permission to update GUI Connect connection recording preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateConnectionRecordingPreferences.html
   */
  public toUpdateConnectionRecordingPreferences() {
    return this.to('UpdateConnectionRecordingPreferences');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelConnection',
      'DeleteConnectionRecordingPreferences',
      'StartConnection',
      'UpdateConnectionRecordingPreferences'
    ],
    Read: [
      'GetConnection',
      'GetConnectionRecordingPreferences'
    ],
    List: [
      'ListConnections'
    ]
  };
}
