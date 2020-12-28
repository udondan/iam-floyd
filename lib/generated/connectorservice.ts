import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [awsconnector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Awsconnector extends PolicyStatement {
  public servicePrefix = 'awsconnector';

  /**
   * Statement provider for service [awsconnector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Retrieves all health metrics that were published from the Server Migration Connector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public toGetConnectorHealth() {
    return this.to('GetConnectorHealth');
  }

  /**
   * Registers AWS Connector with AWS Connector Service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public toRegisterConnector() {
    return this.to('RegisterConnector');
  }

  /**
   * Validates Server Migration Connector Id that was registered with AWS Connector Service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public toValidateConnectorId() {
    return this.to('ValidateConnectorId');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "GetConnectorHealth",
      "ValidateConnectorId"
    ],
    "Write": [
      "RegisterConnector"
    ]
  };
}
