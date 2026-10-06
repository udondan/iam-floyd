// This file is used in the CDK variant of the package: cdk-iam-floyd
import { PolicyStatementWithCDKPrincipal } from './9-principals-CDK';

/**
 * Represents a statement in an IAM policy document
 */
export class PolicyStatement extends PolicyStatementWithCDKPrincipal {
  private cdkConditionsApplied = false;
  private cdkActionsApplied = false;
  private cdkResourcesApplied = false;

  /**
   * JSON-ify the policy statement
   */
  public toJSON(): any {
    this.cdkApply();
    // @ts-ignore only available after swapping 1-base
    return super.toJSON();
  }

  public toStatementJson(): any {
    this.cdkApply(true);
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  public freeze() {
    // @ts-ignore only available after swapping 1-base
    if (!this.frozen) {
      this.cdkApply(true);
    }
    // @ts-ignore only available after swapping 1-base
    return super.freeze();
  }

  protected ensureResource() {
    // @ts-ignore only available after swapping 1-base
    if (this.hasResource) return;
    // @ts-ignore only available after swapping 1-base
    if (this.hasPrincipal) return; // statements with principals may not have resources
    super.ensureResource();
  }

  /**
   * Adds the principals, resources, actions and conditions to the CDK statement
   *
   * @param withDefaultResource Adds all resources (`*`) if the statement has no resources and no principals
   */
  private cdkApply(withDefaultResource = false) {
    this.cdkApplyPrincipals();

    if (withDefaultResource) {
      this.ensureResource();
    }

    if (!this.cdkResourcesApplied) {
      const resources = this.uniqueResources();
      if (this.useNotResource) {
        // @ts-ignore only available after swapping 1-base
        this.addNotResources(...resources);
      } else {
        // @ts-ignore only available after swapping 1-base
        this.addResources(...resources);
      }
      this.cdkResourcesApplied = true;
    }

    if (!this.cdkActionsApplied) {
      const actions = this.uniqueActions();
      if (this.useNotAction) {
        // @ts-ignore only available after swapping 1-base
        this.addNotActions(...actions);
      } else {
        // @ts-ignore only available after swapping 1-base
        this.addActions(...actions);
      }
      this.cdkActionsApplied = true;
    }

    if (this.hasConditions() && !this.cdkConditionsApplied) {
      Object.keys(this.floydConditions).forEach((operator) => {
        Object.keys(this.floydConditions[operator]).forEach((key) => {
          const condition: any = {};
          condition[key] = this.floydConditions[operator][key];
          // @ts-ignore only available after swapping 1-base
          this.addCondition(operator, condition);
        });
      });
      this.cdkConditionsApplied = true;
    }
  }
}
