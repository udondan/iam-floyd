import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service account
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccounts.html
 */
export class Account extends PolicyStatement {
  public servicePrefix = 'account';
  public actions: Actions = {
    "DisableRegion": {
      "url": "",
      "description": "Grants permission to disable a region",
      "accessLevel": "Write",
      "conditions": [
        "account:TargetRegion"
      ]
    },
    "EnableRegion": {
      "url": "",
      "description": "Grants permission to enable a region",
      "accessLevel": "Write",
      "conditions": [
        "account:TargetRegion"
      ]
    },
    "ListRegions": {
      "url": "",
      "description": "Grants permission to list regions",
      "accessLevel": "List"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Grants permission to disable a region
   *
   * Access Level: Write
   */
  public disableRegion() {
    this.add('account:DisableRegion');
    return this;
  }

  /**
   * Grants permission to enable a region
   *
   * Access Level: Write
   */
  public enableRegion() {
    this.add('account:EnableRegion');
    return this;
  }

  /**
   * Grants permission to list regions
   *
   * Access Level: List
   */
  public listRegions() {
    this.add('account:ListRegions');
    return this;
  }
}
