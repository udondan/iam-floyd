import { AccessLevel } from '../access-level';
import { AccessLevelList } from '../access-level';
import { compactActionNames } from '../compact';
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
  protected useNotAction = false;
  protected floydActions: string[] = [];
  private isCompact = false;

  /**
   * The actions of the statement, compacted if `compact()` was called, without duplicates and sorted
   */
  protected uniqueActions(): string[] {
    if (this.isCompact) {
      this.compactActions();
    }
    const self = this;
    return this.floydActions
      .filter((elem, pos) => {
        return self.floydActions.indexOf(elem) == pos;
      })
      .sort();
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
    if (this.servicePrefix.length && !action.includes(':')) {
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
   * Of the flags, only `i` (ignore case) and `y` (match at the start of the action name) have an effect, others are ignored. Without `i`, the match is case-sensitive. A string without slashes is used as the pattern itself.
   */
  public allMatchingActions(...expressions: string[]) {
    expressions.forEach((expression) => {
      const regex = parseRegex(expression);
      for (const [_, actions] of Object.entries(this.accessLevelList)) {
        actions.forEach((action) => {
          if (regex.test(action)) {
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
    return this.addAccessLevel(AccessLevel.list);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) READ to the statement
   *
   * Permission to read but not edit the contents and attributes of resources in the service.
   *
   * For example, the Amazon S3 actions `GetObject` and `GetBucketLocation` have the Read access level.
   */
  public allReadActions() {
    return this.addAccessLevel(AccessLevel.read);
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
    return this.addAccessLevel(AccessLevel.write);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) PERMISSION MANAGEMENT to the statement
   *
   * Permission to grant or modify resource permissions in the service.
   *
   * For example, most IAM and AWS Organizations actions, as well as actions like the Amazon S3 actions `PutBucketPolicy` and `DeleteBucketPolicy` have the Permissions management access level.
   */
  public allPermissionManagementActions() {
    return this.addAccessLevel(AccessLevel.permissionsManagement);
  }

  /**
   * Adds all actions with [access level](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level) TAGGING to the statement
   *
   * Permission to perform actions that only change the state of resource tags.
   *
   * For example, the IAM actions `TagRole` and `UntagRole` have the Tagging access level because they allow only tagging or untagging a role. However, the `CreateRole` action allows tagging a role resource when you create that role. Because the action does not only add a tag, it has the Write access level.
   */
  public allTaggingActions() {
    return this.addAccessLevel(AccessLevel.tagging);
  }

  private addAccessLevel(accessLevel: AccessLevel) {
    if (accessLevel in this.accessLevelList) {
      this.accessLevelList[accessLevel]?.forEach((action) => {
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

  /**
   * Replaces the actions of this service by wildcard patterns. Other actions, like `ec2:*` or actions of other services, are kept as they are.
   */
  private compactActions() {
    const prefix = `${this.servicePrefix}:`;
    const known = new Set<string>();
    for (const [_, actions] of Object.entries(this.accessLevelList)) {
      for (const action of actions) {
        known.add(action);
      }
    }

    const selected: string[] = [];
    const selectedSet = new Set<string>();
    const kept: string[] = [];
    for (const action of this.floydActions) {
      const name = action.substring(prefix.length);
      if (action.startsWith(prefix) && known.has(name)) {
        if (!selectedSet.has(name)) {
          selected.push(name);
          selectedSet.add(name);
        }
      } else {
        kept.push(action);
      }
    }

    const excluded: string[] = [];
    for (const name of known) {
      if (!selectedSet.has(name)) {
        excluded.push(name);
      }
    }

    for (const pattern of compactActionNames(selected, excluded)) {
      kept.push(`${prefix}${pattern}`);
    }
    this.floydActions = kept;
  }
}

/**
 * Parses a regular expression in literal style, e.g. `/vpn/i`. Input without slashes is used as pattern.
 *
 * Of the flags, only `i` (ignore case) and `y` (match at the start) have an effect on action names.
 */
function parseRegex(expression: string): RegExp {
  if (expression.length == 0) {
    throw new Error('Invalid regular expression format.');
  }
  let pattern = expression;
  let flags = '';
  const end = expression.lastIndexOf('/');
  if (expression.startsWith('/') && end > 1) {
    pattern = expression.substring(1, end);
    for (let i = end + 1; i < expression.length; i++) {
      const char = expression.substring(i, i + 1);
      if (!'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
        break;
      }
      flags = `${flags}${char}`;
    }
  }
  if (flags.includes('y')) {
    pattern = `^(?:${pattern})`;
  }
  return new RegExp(pattern, flags.includes('i') ? 'i' : '');
}
