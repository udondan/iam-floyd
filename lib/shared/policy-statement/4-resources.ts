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
  private useNotResource = false;
  protected floydResources: string[] = [];
  protected skipAutoResource = false;
  private cdkResourcesApplied = false;

  /**
   * Injects resources into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyResources();
      return super.toJSON();
    }
    const mode = this.useNotResource ? 'NotResource' : 'Resource';
    const statement = super.toJSON();
    const self = this;

    this.ensureResource();

    if (this.floydResources.length) {
      const resources = this.floydResources.filter((elem, pos) => {
        return self.floydResources.indexOf(elem) == pos;
      });
      statement[mode] = resources.length > 1 ? resources : resources[0];
    }

    return statement;
  }

  public toStatementJson(): any {
    this.ensureResource();
    this.cdkApplyResources();
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  public freeze() {
    // @ts-ignore only available after swapping 1-base
    if (!this.frozen) {
      this.cdkApplyResources();
    }
    return super.freeze();
  }

  private cdkApplyResources() {
    if (!this.cdkResourcesApplied) {
      const mode = this.useNotResource ? 'addNotResources' : 'addResources';
      const self = this;
      const uniqueResources = this.floydResources.filter((elem, pos) => {
        return self.floydResources.indexOf(elem) == pos;
      });
      // @ts-ignore only available after swapping 1-base
      this[mode](...uniqueResources);
      this.cdkResourcesApplied = true;
    }
  }

  /**
   * Switches the statement to use [`NotResource`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html).
   */
  public notResource() {
    this.useNotResource = true;
    return this;
  }

  /**
   * Checks weather any resource was applied to the policy.
   */
  public hasResources(): boolean {
    return this.floydResources.length > 0;
  }

  /**
   * Limit statement to specified resources.
   *
   * To allow all resources, pass `*`
   */
  public on(...arns: string[]) {
    this.floydResources.push(...arns);
    return this;
  }

  /**
   * Add all resources (`*`) to the statement
   *
   * This is the default behavior, unless the statement has principals.
   */
  public onAllResources() {
    this.floydResources.push('*');
    return this;
  }

  private ensureResource() {
    if (this.hasResources()) return;
    // @ts-ignore only available after swapping 1-base
    if (this.hasResource) return;
    // @ts-ignore only available after swapping 1-base
    if (this.hasPrincipal) return; //assume policies may not have resources
    if (this.skipAutoResource) return;

    // a statement requires resources. if none was added, we assume the user wants all resources
    this.onAllResources();
  }

  /**
   * Dummy method. Will be overridden by 6-principal.ts
   *
   * We just need it here so we can reference it in method `ensureResource`
   */
  public hasPrincipals(): boolean {
    return false;
  }
}
