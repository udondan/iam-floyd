import * as iam from '@aws-cdk/aws-iam';

import { AccessLevel } from './access-level';

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

export interface ResourceTypes {
  [key: string]: ResourceType;
}

export interface ResourceType {
  name: string;
  url: string;
  arn: string;
  conditionKeys: string[];
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
  public if(key: string, value: any) {
    this.addCondition(key, value);
    return this;
  }

  /**
   * Limit statement to specified resources.
   *
   * To allow all resources, pass `*`
   */
  public on(...arns: string[]) {
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
