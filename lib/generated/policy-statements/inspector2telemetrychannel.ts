import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [inspector2-telemetry](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2telemetrychannel.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Inspector2Telemetry extends PolicyStatement {
  public servicePrefix = 'inspector2-telemetry';

  /**
   * Statement provider for service [inspector2-telemetry](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2telemetrychannel.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to notify heartbeat for an active telemetry session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_NotifyHeartbeat.html
   */
  public toNotifyHeartbeat() {
    return this.to('NotifyHeartbeat');
  }

  /**
   * Grants permission to send telemetry for an active telemetry session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_SendTelemetry.html
   */
  public toSendTelemetry() {
    return this.to('SendTelemetry');
  }

  /**
   * Grants permission to start a telemetry session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_StartSession.html
   */
  public toStartSession() {
    return this.to('StartSession');
  }

  /**
   * Grants permission to stop a telemetry session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_StopSession.html
   */
  public toStopSession() {
    return this.to('StopSession');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'NotifyHeartbeat',
      'SendTelemetry',
      'StartSession',
      'StopSession'
    ]
  };
}
