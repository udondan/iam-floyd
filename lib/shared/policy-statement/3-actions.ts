import RegexParser = require('regex-parser');

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
   * @param action Actions that will be added to the statement.
   */
  public to(action: string) {
    this.actions.push(action);
    return this;
  }

  /**
   * Adds all actions of the statement provider to the statement, e.g. `actions: 'ec2:*'`
   */
  public allActions() {
    if (this.servicePrefix.length) {
      this.to(`${this.servicePrefix}:*`);
    } else {
      this.to('*');
    }
    return this;
  }

  /**
   * Adds all actions that match one of the given regular expressions.
   *
   * @param expressions One or more regular expressions. The regular expressions need to be in [Perl/JavaScript literal style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) and need to be passed as strings,
   * For example:
   * ```typescript
   * allMatchingActions('/vpn/i')
   * ```
   */
  public allMatchingActions(...expressions: string[]) {
    expressions.forEach((expression) => {
      for (const [name] of Object.entries(this.actionList)) {
        if (name.match(RegexParser(expression))) {
          this.to(`${this.servicePrefix}:${name}`);
        }
      }
    });
    return this;
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) LIST to the statement
   *
   * Permission to list resources within the service to determine whether an object exists.
   *
   * Actions with this level of access can list objects but cannot see the contents of a resource.
   *
   * For example, the Amazon S3 action `ListBucket` has the List access level.
   */
  public allListActions() {
    return this.addAccessLevel(AccessLevel.LIST);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) READ to the statement
   *
   * Permission to read but not edit the contents and attributes of resources in the service.
   *
   * For example, the Amazon S3 actions `GetObject` and `GetBucketLocation` have the Read access level.
   */
  public allReadActions() {
    return this.addAccessLevel(AccessLevel.READ);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) WRITE to the statement
   *
   * Permission to create, delete, or modify resources in the service.
   *
   * For example, the Amazon S3 actions `CreateBucket`, `DeleteBucket` and `PutObject` have the Write access level.
   *
   * Write actions might also allow modifying a resource tag. However, an action that allows only changes to tags has the Tagging access level.
   */
  public allWriteActions() {
    return this.addAccessLevel(AccessLevel.WRITE);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) PERMISSION MANAGEMENT to the statement
   *
   * Permission to grant or modify resource permissions in the service.
   *
   * For example, most IAM and AWS Organizations actions, as well as actions like the Amazon S3 actions `PutBucketPolicy` and `DeleteBucketPolicy` have the Permissions management access level.
   */
  public allPermissionManagementActions() {
    return this.addAccessLevel(AccessLevel.PERMISSION_MANAGEMENT);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) TAGGING to the statement
   *
   * Permission to perform actions that only change the state of resource tags.
   *
   * For example, the IAM actions `TagRole` and `UntagRole` have the Tagging access level because they allow only tagging or untagging a role. However, the `CreateRole` action allows tagging a role resource when you create that role. Because the action does not only add a tag, it has the Write access level.
   */
  public allTaggingActions() {
    return this.addAccessLevel(AccessLevel.TAGGING);
  }

  private addAccessLevel(accessLevel: AccessLevel) {
    for (const [name, action] of Object.entries(this.actionList)) {
      if (Object.values(AccessLevel).includes(accessLevel)) {
        if (accessLevel == action.accessLevel) {
          this.to(`${this.servicePrefix}:${name}`);
        }
      }
    }
    return this;
  }
}
