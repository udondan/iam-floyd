import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [awsconnector](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconnectorservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Awsconnector extends PolicyStatement {
  public servicePrefix = 'awsconnector';
  protected actionList: Actions = {
    "GetConnectorHealth": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions",
      "description": "Retrieves all health metrics that were published from the Server Migration Connector.",
      "accessLevel": "Read"
    },
    "RegisterConnector": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions",
      "description": "Registers AWS Connector with AWS Connector Service.",
      "accessLevel": "Write"
    },
    "ValidateConnectorId": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions",
      "description": "Validates Server Migration Connector Id that was registered with AWS Connector Service.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [awsconnector](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconnectorservice.html).
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
    this.to('awsconnector:GetConnectorHealth');
    return this;
  }

  /**
   * Registers AWS Connector with AWS Connector Service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public toRegisterConnector() {
    this.to('awsconnector:RegisterConnector');
    return this;
  }

  /**
   * Validates Server Migration Connector Id that was registered with AWS Connector Service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public toValidateConnectorId() {
    this.to('awsconnector:ValidateConnectorId');
    return this;
  }
}
