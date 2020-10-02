import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [wam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wam extends PolicyStatement {
  public servicePrefix = 'wam';

  /**
   * Statement provider for service [wam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Allows the Amazon WAM packaging instance to access your application package catalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wam/latest/adminguide/iam.html
   */
  public toAuthenticatePackager() {
    this.to('wam:AuthenticatePackager');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AuthenticatePackager"
    ]
  };
}
