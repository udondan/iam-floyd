import iam = require('@aws-cdk/aws-iam');

import { PrincipalType } from './6-principals';
import { PolicyStatementWithCDKPrincipal } from './7-principals-CDK';

/**
 * Represents a statement in an IAM policy document.
 */
export class PolicyStatement extends PolicyStatementWithCDKPrincipal {
  protected cdkApplied = false; // internally used to check if resources, actions and conditions have already been applied to the policy

  /**
   * JSON-ify the policy statement.
   * This builds the acutal policy, as we previously have stored all the actions, resources etc in protected class properties
   *
   * Used when JSON.stringify() is called
   */
  public toStatementJson(): any {
    this.applyConditions();
    this.applyResources();
    this.applyActions();
    this.applyPrincipals();

    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  private applyConditions() {
    if (this.hasConditions()) {
      Object.keys(this.conditions).forEach((operator) => {
        Object.keys(this.conditions[operator]).forEach((key) => {
          const condition: any = {};
          condition[key] = this.conditions[operator][key];
          // @ts-ignore only available after swapping 1-base
          this.addCondition(operator, condition);
        });
      });
    }
  }

  private applyResources() {
    const self = this;
    const addResources = this.useNotResources
      ? // @ts-ignore only available after swapping 1-base
        this.addBotResources
      : // @ts-ignore only available after swapping 1-base
        this.addResources;
    addResources(
      ...this.resources.filter((elem, pos) => {
        return self.resources.indexOf(elem) == pos;
      })
    );
  }

  private applyActions() {
    const self = this;
    const addActions = this.useNotActions
      ? // @ts-ignore only available after swapping 1-base
        this.addNotActions
      : // @ts-ignore only available after swapping 1-base
        this.addActions;
    addActions(
      ...this.actions.filter((elem, pos) => {
        return self.actions.indexOf(elem) == pos;
      })
    );
  }

  private applyPrincipals() {
    const addPrincipals = this.useNotPrincipals
      ? // @ts-ignore only available after swapping 1-base
        this.addNotPrincipals
      : // @ts-ignore only available after swapping 1-base
        this.addPrincipals;
    addPrincipals(...this.cdkPrincipals);
    if (this.hasPrincipals()) {
      Object.keys(this.principals).forEach((prefix) => {
        switch (prefix) {
          case PrincipalType.AWS:
            this.principals[prefix].forEach((arn) => {
              // @ts-ignore only available after swapping 1-base
              addPrincipals(new iam.ArnPrincipal(arn));
            });
            break;
          case PrincipalType.CANONICAL_USER:
            this.principals[prefix].forEach((userId) => {
              // @ts-ignore only available after swapping 1-base
              addPrincipals(new iam.CanonicalUserPrincipal(userId));
            });
            break;
          case PrincipalType.FEDERATED:
            this.principals[prefix].forEach((provider) => {
              // @ts-ignore only available after swapping 1-base
              addPrincipals(new iam.FederatedPrincipal(provider, {}));
            });
            break;
          case PrincipalType.SERVICE:
            this.principals[prefix].forEach((service) => {
              // @ts-ignore only available after swapping 1-base
              addPrincipals(new iam.ServicePrincipal(service));
            });
            break;
          default:
            throw Error(`Unhandled principal type: ${prefix}`);
        }
      });
    }
  }
}
