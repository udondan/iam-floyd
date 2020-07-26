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
  private useNotResources = false;
  protected resources: string[] = [];
  private cdkResourcesApplied = false;

  /**
   * Injects resources into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public XtoJSON(): any {
    console.log('PolicyStatementWithResources:toJSON');
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyResources();
      return super.toJSON();
    }
    const mode = this.useNotResources ? 'NotResource' : 'Resource';
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

  public XtoStatementJson(): any {
    console.log('PolicyStatementWithResources:toStatementJson');
    this.cdkApplyResources();

    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  private cdkApplyResources() {
    console.log('PolicyStatementWithResources:cdkApplyResources');
    if (!this.cdkResourcesApplied) {
      const self = this;
      const addResources = this.useNotResources
        ? // @ts-ignore only available after swapping 1-base
          this.addNotResources
        : // @ts-ignore only available after swapping 1-base
          this.addResources;
      addResources(
        ...this.resources.filter((elem, pos) => {
          return self.resources.indexOf(elem) == pos;
        })
      );
      this.cdkResourcesApplied = true;
    }
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
