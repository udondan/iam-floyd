import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [account](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccounts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Account extends PolicyStatement {
  public servicePrefix = 'account';

  /**
   * Statement provider for service [account](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccounts.html).
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
    this.to('account:DisableRegion');
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
    this.to('account:EnableRegion');
    return this;
  }

  /**
   * Grants permission to list regions
   *
   * Access Level: List
   */
  public toListRegions() {
    this.to('account:ListRegions');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DisableRegion",
      "EnableRegion"
    ],
    "List": [
      "ListRegions"
    ]
  };

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
  public ifTargetRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`account:TargetRegion`, value, operator || 'StringLike');
  }
}
