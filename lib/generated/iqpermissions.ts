import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iq-permission](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class IqPermission extends PolicyStatement {
  public servicePrefix = 'iq-permission';

  /**
   * Statement provider for service [iq-permission](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html).
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
    this.to('iq-permission:ApproveAccessGrant');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApproveAccessGrant"
    ]
  };
}

export type IqPermissionActionsWrite = 'ApproveAccessGrant';
export type IqPermissionActions = IqPermissionActionsWrite;
