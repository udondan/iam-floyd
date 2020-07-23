import { PolicyStatementWithActions } from './3-actions';

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
 * Adds "resource" functionality to the Policy Statement
 */
export class PolicyStatementWithResources extends PolicyStatementWithActions {
  protected useNotResources = false;
  protected resources: string[] = [];

  /**
   * JSON-ify the policy statement
   *
   * Used when JSON.stringify() is called
   */

  public toJSON(): any {
    const mode = this.useNotActions ? 'NotResource' : 'Resource';
    const statement = super.toJSON();
    const self = this;

    if (!this.hasResources()) {
      // a statement requires resources. if none was added, we assume the user wants all resources
      this.resources.push('*');
    }

    statement[mode] = this.resources.filter((elem, pos) => {
      return self.resources.indexOf(elem) == pos;
    });

    return statement;
  }

  /**
   * Switches the statement to use [`NotResource`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html).
   */
  public notResources() {
    this.useNotResources = true;
    return this;
  }

  /**
   * Checks weather any resource was applied to the policy.
   */
  public hasResources(): boolean {
    return this.resources.length > 0;
  }

  /**
   * Limit statement to specified resources.
   *
   * To allow all resources, pass `*`
   */
  public on(...arns: string[]) {
    this.resources.push(...arns);
    return this;
  }
}
