import * as iam from '@aws-cdk/aws-iam';

export interface Action {
  url: string;
  description: string;
  accessLevel: string;
  resourceTypes?: any;
  conditions?: string[];
}

export interface Actions {
  [key: string]: Action;
}

/**
 * Access level classifications for the actions in a service
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level
 */
export enum AccessLevel {
  /**
   * Permission to list resources within the service to determine whether an object exists.
   *
   * Actions with this level of access can list objects but cannot see the contents of a resource.
   *
   * For example, the Amazon S3 action `ListBucket` has the List access level.
   */
  LIST = 'List',
  /**
   * Permission to read but not edit the contents and attributes of resources in the service.
   *
   * For example, the Amazon S3 actions `GetObject` and `GetBucketLocation` have the Read access level.
   */
  READ = 'Read',
  /**
   * Permission to create, delete, or modify resources in the service.
   *
   * For example, the Amazon S3 actions `CreateBucket`, `DeleteBucket` and `PutObject` have the Write access level.
   *
   * Write actions might also allow modifying a resource tag. However, an action that allows only changes to tags has the Tagging access level.
   */
  WRITE = 'Write',
  /**
   * Permission to grant or modify resource permissions in the service.
   *
   * For example, most IAM and AWS Organizations actions, as well as actions like the Amazon S3 actions `PutBucketPolicy` and `DeleteBucketPolicy` have the Permissions management access level.
   */
  PERMISSION_MANAGEMENT = 'Permissions management',
  /**
   * Permission to perform actions that only change the state of resource tags.
   *
   * For example, the IAM actions `TagRole` and `UntagRole` have the Tagging access level because they allow only tagging or untagging a role. However, the `CreateRole` action allows tagging a role resource when you create that role. Because the action does not only add a tag, it has the Write access level.
   */
  TAGGING = 'Tagging',
}

/**
 * Represents a statement in an IAM policy document.
 */
export class PolicyStatement extends iam.PolicyStatement {
  public actions: Actions = {};
  public add = this.addActions;
  public servicePrefix = '';

  /**
   * Adds actions to the statement, matching an `AccessLevel` or regular expression.
   *
   * When no value is passed, all actions of the service will be added.
   */
  public allActions(...rules: (AccessLevel | RegExp)[]) {
    if (rules.length) {
      rules.forEach((rule) => {
        for (const [name, action] of Object.entries(this.actions)) {
          if (typeof rule === 'object') {
            //assume it's a regex

            if ((rule as RegExp).test(name)) {
              this.add(`${this.servicePrefix}:${name}`);
            }
          } else {
            // assume it's an AccessLevel
            //TODO: support for resource types!

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

  /**
   * Changes all subsequent additions to be set as notAction
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
   */
  public not() {
    this.add = this.addNotActions;
    return this;
  }

  /**
   * Allow the actions in this statement
   */
  public allow() {
    this.effect = iam.Effect.ALLOW;
    return this;
  }

  /**
   * Deny the actions in this statement
   */
  public deny() {
    this.effect = iam.Effect.DENY;
    return this;
  }

  /**
   * Adds a condition to the statement
   */
  public withCondition(key: string, value: any) {
    this.addCondition(key, value);
    return this;
  }

  /**
   * Limit statement to specified resources.
   *
   * To allow all resources, pass `*`
   */
  public onResources(...arns: string[]) {
    this.addResources(...arns);
    return this;
  }

  /**
   * JSON-ify the policy statement
   *
   * Also adds `*` to the list of resources, if not was manually added
   *
   * Used when JSON.stringify() is called
   */
  public toStatementJson(): any {
    if (!this.hasResource) {
      this.addResources('*');
    }
    return super.toStatementJson();
  }
}

/**
 * Action provider for all services
 */
export class All extends PolicyStatement {
  /**
   * Adds all actions to the statement: `actions: '*'`
   */
  public allActions() {
    this.add('*');
    return this;
  }
}
