import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [account](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccounts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Account extends PolicyStatement {
  public servicePrefix = 'account';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [account](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccounts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to disable a region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   */
  public toDisableRegion() {
    this.add('account:DisableRegion');
    return this;
  }

  /**
   * Grants permission to enable a region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   */
  public toEnableRegion() {
    this.add('account:EnableRegion');
    return this;
  }

  /**
   * Grants permission to list regions
   *
   * Access Level: List
   */
  public toListRegions() {
    this.add('account:ListRegions');
    return this;
  }

  /**
   * Filters access by a list of regions
   *
   * Applies to actions:
   * - .toDisableRegion()
   * - .toEnableRegion()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetRegion(value: string | string[], operator?: string) {
    return this.if(`account:TargetRegion`, value, operator || 'StringLike');
  }
}
