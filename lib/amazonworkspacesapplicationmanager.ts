import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service wam
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
 */
export class Wam extends PolicyStatement {
  public servicePrefix = 'wam';
  public actions : Actions = {
    "AuthenticatePackager": {
      "url": "https://docs.aws.amazon.com/wam/latest/adminguide/iam.html",
      "description": "Allows the Amazon WAM packaging instance to access your application package catalog.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes : ResourceTypes = {};

  /**
   * Allows the Amazon WAM packaging instance to access your application package catalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wam/latest/adminguide/iam.html
   */
  public authenticatePackager () {
    this.add('wam:AuthenticatePackager');
    return this;
  }
}
