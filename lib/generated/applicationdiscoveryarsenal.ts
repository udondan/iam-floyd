import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [arsenal](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';

  /**
   * Statement provider for service [arsenal](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to register AWS provided data collectors to the Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy
   */
  public toRegisterOnPremisesAgent() {
    this.to('arsenal:RegisterOnPremisesAgent');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "RegisterOnPremisesAgent"
    ]
  };
}
