import { AccessLevel } from '../access-level';
import { PolicyStatementWithCondition } from './2-conditions';

export interface Action {
  url: string;
  description: string;
  accessLevel: string;
  resourceTypes?: any;
  conditions?: string[];
  dependentActions?: string[];
}

export interface Actions {
  [key: string]: Action;
}

/**
 * Adds "action" functionality to the Policy Statement
 */
export class PolicyStatementWithActions extends PolicyStatementWithCondition {
  protected actionList: Actions = {};
  protected useNotActions = false;
  protected actions: string[] = [];

  /**
   * JSON-ify the policy statement
   *
   * Used when JSON.stringify() is called
   */

  public toJSON(): any {
    const mode = this.useNotActions ? 'NotAction' : 'Action';
    const statement = super.toJSON();

    if (this.hasActions()) {
      statement[mode] = this.actions;
    }

    return statement;
  }

  /**
   * Switches the statement to use [`NotAction`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html).
   */
  public notActions() {
    this.useNotActions = true;
    return this;
  }

  /**
   * Checks weather actions have been applied to the policy.
   */
  public hasActions(): boolean {
    return this.actions.length > 0;
  }

  /**
   * Adds actions by name.
   *
   * Depending on the "mode", actions will be either added to the list of [`Actions`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html) or [`NotActions`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html).
   *
   * The mode can be switched by calling `notActions()`.
   *
   * @param actions Actions that will be added to the statement.
   */
  protected add(action: string) {
    this.actions.push(action);
    return this;
  }

  /**
   * Adds actions to the statement, matching an `AccessLevel` or regular expression.
   *
   * When no value is passed, all actions of the service will be added.
   */
  public allActions(...rules: (AccessLevel | RegExp)[]) {
    if (rules.length) {
      rules.forEach((rule) => {
        for (const [name, action] of Object.entries(this.actionList)) {
          if (typeof rule === 'object') {
            //assume it's a regex
            if ((rule as RegExp).test(name)) {
              this.add(`${this.servicePrefix}:${name}`);
            }
          } else {
            // assume it's an AccessLevel
            if ((rule as AccessLevel) == action.accessLevel) {
              this.add(`${this.servicePrefix}:${name}`);
            }
          }
        }
      });
    } else {
      this.add(`${this.servicePrefix}:*`);
    }
    return this;
  }
}
