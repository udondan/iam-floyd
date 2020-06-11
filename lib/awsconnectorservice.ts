import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service awsconnector
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconnectorservice.html
 */
export class Awsconnector extends PolicyStatement {
  public servicePrefix = 'awsconnector';
  public actions : Actions = {
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

  /**
   * Retrieves all health metrics that were published from the Server Migration Connector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public getConnectorHealth () {
    this.add('awsconnector:GetConnectorHealth');
    return this;
  }

  /**
   * Registers AWS Connector with AWS Connector Service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public registerConnector () {
    this.add('awsconnector:RegisterConnector');
    return this;
  }

  /**
   * Validates Server Migration Connector Id that was registered with AWS Connector Service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  public validateConnectorId () {
    this.add('awsconnector:ValidateConnectorId');
    return this;
  }
}
