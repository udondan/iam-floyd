import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service arsenal
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';
  public actions : Actions = {
    "RegisterOnPremisesAgent": {
      "url": "https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy",
      "description": "Grants permission to register AWS provided data collectors to the Application Discovery Service",
      "accessLevel": "Write"
    }
  };
  public resourceTypes : ResourceTypes = {};

  /**
   * Grants permission to register AWS provided data collectors to the Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy
   */
  public registerOnPremisesAgent () {
    this.add('arsenal:RegisterOnPremisesAgent');
    return this;
  }
}
