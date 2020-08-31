import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iq-permission](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiqpermissions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class IqPermission extends PolicyStatement {
  public servicePrefix = 'iq-permission';
  protected actionList: Actions = {
    "ApproveAccessGrant": {
      "url": "https://aws.amazon.com/iq/",
      "description": "Grants permission to approve an access grant",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [iq-permission](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiqpermissions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve an access grant
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toApproveAccessGrant() {
    this.add('iq-permission:ApproveAccessGrant');
    return this;
  }
}
