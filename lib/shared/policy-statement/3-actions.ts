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
 *
 * @internal
 */
export class PolicyStatementWithActions extends PolicyStatementWithCondition {
  protected actionList: Actions = {};
  private useNotActions = false;
  protected actions: string[] = [];
  private cdkActionsApplied = false;

  /**
   * Injects actions into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyActions();
      return super.toJSON();
    }
    const mode = this.useNotActions ? 'NotAction' : 'Action';
    const statement = super.toJSON();
    const self = this;

    if (this.hasActions()) {
      statement[mode] = this.actions.filter((elem, pos) => {
        return self.actions.indexOf(elem) == pos;
      });
    }

    return statement;
  }

  public toStatementJson(): any {
    this.cdkApplyActions();
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  private cdkApplyActions() {
    if (!this.cdkActionsApplied) {
      const mode = this.useNotActions ? 'addNotActions' : 'addActions';
      const self = this;
      const uniqueActions = this.actions.filter((elem, pos) => {
        return self.actions.indexOf(elem) == pos;
      });
      // @ts-ignore only available after swapping 1-base
      this[mode](...uniqueActions);
    }
    this.cdkActionsApplied = true;
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
  public add(action: string) {
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
