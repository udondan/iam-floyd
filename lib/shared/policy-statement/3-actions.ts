import substrings from '@udondan/common-substrings';
import RegexParser = require('regex-parser');

import { AccessLevel } from '../access-level';
import { AccessLevelList } from '../access-level';
import { PolicyStatementWithCondition } from './2-conditions';

export interface Action {
  url: string;
  description: string;
  accessLevel: string;
  resourceTypes?: any;
  conditions?: string[];
  dependentActions?: string[];
}

/**
 * Adds "action" functionality to the Policy Statement
 */
export class PolicyStatementWithActions extends PolicyStatementWithCondition {
  protected accessLevelList: AccessLevelList = {};
  private useNotAction = false;
  protected floydActions: string[] = [];
  private cdkActionsApplied = false;
  private isCompact = false;

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
    const mode = this.useNotAction ? 'NotAction' : 'Action';
    const statement = super.toJSON();
    const self = this;

    if (this.hasActions()) {
      if (this.isCompact) {
        this.compactActions();
      }
      const actions = this.floydActions
        .filter((elem, pos) => {
          return self.floydActions.indexOf(elem) == pos;
        })
        .sort();
      statement[mode] = actions.length > 1 ? actions : actions[0];
    }

    return statement;
  }

  public toStatementJson(): any {
    this.cdkApplyActions();
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  public freeze() {
    // @ts-ignore only available after swapping 1-base
    if (!this.frozen) {
      this.cdkApplyActions();
    }
    return super.freeze();
  }

  private cdkApplyActions() {
    if (!this.cdkActionsApplied) {
      const mode = this.useNotAction ? 'addNotActions' : 'addActions';
      const self = this;
      if (this.isCompact) {
        this.compactActions();
      }
      const uniqueActions = this.floydActions
        .filter((elem, pos) => {
          return self.floydActions.indexOf(elem) == pos;
        })
        .sort();
      // @ts-ignore only available after swapping 1-base
      this[mode](...uniqueActions);
    }
    this.cdkActionsApplied = true;
  }

  /**
   * Switches the statement to use [`NotAction`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html).
   */
  public notAction() {
    this.useNotAction = true;
    return this;
  }

  /**
   * Checks weather actions have been applied to the policy.
   */
  public hasActions(): boolean {
    return this.floydActions.length > 0;
  }

  /**
   * Adds actions by name.
   *
   * Depending on the "mode", actions will be either added to the list of [`Actions`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html) or [`NotAction`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html).
   *
   * The mode can be switched by calling `notAction()`.
   *
   * If the action does not contain a colon, the action will be prefixed with the service prefix of the class, e.g. `ec2:`
   *
   * @param action Actions that will be added to the statement.
   */
  public to(action: string) {
    if (this.servicePrefix.length && action.indexOf(':') < 0) {
      action = `${this.servicePrefix}:${action}`;
    }

    this.floydActions.push(action);
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
      for (const [_, actions] of Object.entries(this.accessLevelList)) {
        actions.forEach((action) => {
          if (action.match(RegexParser(expression))) {
            this.to(`${this.servicePrefix}:${action}`);
          }
        });
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
    if (accessLevel in this.accessLevelList) {
      this.accessLevelList[accessLevel].forEach((action) => {
        this.to(`${this.servicePrefix}:${action}`);
      });
    }
    return this;
  }

  /**
   * Condense action list down to a list of patterns.
   *
   * Using this method can help to reduce the policy size.
   *
   * For example, all actions with access level `list` could be reduced to a small pattern `List*`.
   */
  public compact() {
    this.isCompact = true;
    return this;
  }

  private compactActions() {
    // actions that will be included, service prefix is removed
    const includeActions = this.floydActions.map((elem) => {
      return elem.substring(elem.indexOf(':') + 1);
    });

    // actions that will not be included, the opposite of includeActions
    const excludeActions: string[] = [];
    for (const [_, actions] of Object.entries(this.accessLevelList)) {
      actions.forEach((action) => {
        if (!includeActions.includes(action)) {
          excludeActions.push(`^${action}$`);
        }
      });
    }

    // will contain the index of elements that are covered by substrings
    let covered: number[] = [];

    const subs = substrings(
      includeActions.map((action) => {
        return `^${action}$`;
      }),
      {
        minLength: 3,
        minOccurrence: 2,
      },
    )
      .filter((sub) => {
        // remove all substrings, that match an action we have not selected
        for (const action of excludeActions) {
          if (action.includes(sub.name)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        // sort list by the number of matches
        if (a.source.length < b.source.length) return 1;
        if (a.source.length > b.source.length) return -1;
        return 0;
      })
      .filter((sub) => {
        // removes substrings, that have already been covered by other substrings
        const sources = sub.source.filter((source) => {
          return !covered.includes(source);
        });
        if (sources.length > 1) {
          //add list of sources to the global list of covered actions
          covered = covered.concat(sources);
          return true;
        }
        return false;
      });

    // stores the list of patterns
    const compactActionList: string[] = [];
    subs.forEach((sub) => {
      compactActionList.push(
        `${this.servicePrefix}:*${sub.name}*`
          .replace('*^', '')
          .replace('$*', ''),
      );
      sub.source.forEach((source) => {
        includeActions[source] = ''; // invalidate, will be filtered later
      });
    });

    includeActions
      .filter((action) => {
        // remove elements that have been covered by patterns, we invalidated them above
        return action.length > 0;
      })
      .forEach((action) => {
        // add actions that have not been covered by patterns to the new action list
        compactActionList.push(`${this.servicePrefix}:${action}`);
      });

    // we're done. override action list
    this.floydActions = compactActionList;
  }
}
