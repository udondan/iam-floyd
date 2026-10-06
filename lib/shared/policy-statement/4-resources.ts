import { PolicyStatementWithActions } from './3-actions';

export type ResourceTypes = Record<string, ResourceType>;

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
  protected useNotResource = false;
  protected floydResources: string[] = [];
  protected skipAutoResource = false;

  /**
   * The resources of the statement without duplicates
   */
  protected uniqueResources(): string[] {
    return this.floydResources.filter(
      (elem, pos) => this.floydResources.indexOf(elem) == pos,
    );
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

  protected ensureResource() {
    if (this.hasResources()) return;
    if (this.skipAutoResource) return; // statements with principals may not have resources

    // a statement requires resources. if none was added, we assume the user wants all resources
    this.onAllResources();
  }
}
