import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service iq-permission
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiqpermissions.html
 */
export class IqPermission extends PolicyStatement {
  public servicePrefix = 'iq-permission';
  public actions: Actions = {
    "ApproveAccessGrant": {
      "url": "https://aws.amazon.com/iq/",
      "description": "Grants permission to approve an access grant",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service iq-permission
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiqpermissions.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to approve an access grant
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public approveAccessGrant() {
    this.add('iq-permission:ApproveAccessGrant');
    return this;
  }
}
