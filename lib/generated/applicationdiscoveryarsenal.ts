import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [arsenal](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';
  protected actionList: Actions = {
    "RegisterOnPremisesAgent": {
      "url": "https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy",
      "description": "Grants permission to register AWS provided data collectors to the Application Discovery Service",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
  public registerOnPremisesAgent() {
    this.add('arsenal:RegisterOnPremisesAgent');
    return this;
  }
}
