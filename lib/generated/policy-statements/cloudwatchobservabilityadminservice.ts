import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [observabilityadmin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityadminservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Observabilityadmin extends PolicyStatement {
  public servicePrefix = 'observabilityadmin';

  /**
   * Statement provider for service [observabilityadmin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityadminservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve the Telemetry Config feature status for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_GetTelemetryEvaluationStatus.html
   */
  public toGetTelemetryEvaluationStatus() {
    return this.to('GetTelemetryEvaluationStatus');
  }

  /**
   * Grants permission to retrieve the Telemetry Config feature status for the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_GetTelemetryEvaluationStatusForOrganization.html
   */
  public toGetTelemetryEvaluationStatusForOrganization() {
    return this.to('GetTelemetryEvaluationStatusForOrganization');
  }

  /**
   * Grants permission to retrieve telemetry configurations for resources associated with the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_ListResourceTelemetry.html
   */
  public toListResourceTelemetry() {
    return this.to('ListResourceTelemetry');
  }

  /**
   * Grants permission to retrieve telemetry configurations for resources associated with accounts in the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_ListResourceTelemetryForOrganization.html
   */
  public toListResourceTelemetryForOrganization() {
    return this.to('ListResourceTelemetryForOrganization');
  }

  /**
   * Grants permission to start the Telemetry Config feature for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_StartTelemetryEvaluation.html
   */
  public toStartTelemetryEvaluation() {
    return this.to('StartTelemetryEvaluation');
  }

  /**
   * Grants permission to start the Telemetry Config feature for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_StartTelemetryEvaluationForOrganization.html
   */
  public toStartTelemetryEvaluationForOrganization() {
    return this.to('StartTelemetryEvaluationForOrganization');
  }

  /**
   * Grants permission to stop the Telemetry Config feature for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_StopTelemetryEvaluation.html
   */
  public toStopTelemetryEvaluation() {
    return this.to('StopTelemetryEvaluation');
  }

  /**
   * Grants permission to stop the Telemetry Config feature for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ObservabilityAdmin/latest/APIReference/API_StopTelemetryEvaluationForOrganization.html
   */
  public toStopTelemetryEvaluationForOrganization() {
    return this.to('StopTelemetryEvaluationForOrganization');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetTelemetryEvaluationStatus',
      'GetTelemetryEvaluationStatusForOrganization',
      'ListResourceTelemetry',
      'ListResourceTelemetryForOrganization'
    ],
    Write: [
      'StartTelemetryEvaluation',
      'StartTelemetryEvaluationForOrganization',
      'StopTelemetryEvaluation',
      'StopTelemetryEvaluationForOrganization'
    ]
  };
}
