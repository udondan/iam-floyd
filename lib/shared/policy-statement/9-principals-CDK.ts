import { aws_iam as iam } from 'aws-cdk-lib';

import { PolicyStatementWithPrincipal, PrincipalType } from './8-principals';

/**
 * Adds CDK specific "principal" functionality to the Policy Statement
 */
export class PolicyStatementWithCDKPrincipal extends PolicyStatementWithPrincipal {
  protected cdkPrincipals: iam.IPrincipal[] = [];
  private cdkPrincipalsApplied = false;

  /**
   * Adds any number of CDK principals to the statement
   * @param principals Principals to add to the statement
   */
  public forCdkPrincipal(...principals: iam.IPrincipal[]) {
    this.skipAutoResource = true;
    this.cdkPrincipals.push(...principals);
    return this;
  }

  protected cdkApplyPrincipals() {
    if (!this.cdkPrincipalsApplied) {
      const mode = this.useNotPrincipal ? 'addNotPrincipals' : 'addPrincipals';
      // @ts-ignore only available after swapping 1-base
      this[mode](...this.cdkPrincipals);
      if (this.hasPrincipals()) {
        Object.keys(this.myPrincipals).forEach((prefix) => {
          switch (prefix) {
            case PrincipalType.aws:
              this.myPrincipals[prefix]?.forEach((arn) => {
                // @ts-ignore only available after swapping 1-base
                this[mode](new iam.ArnPrincipal(arn));
              });
              break;
            case PrincipalType.canonicalUser:
              this.myPrincipals[prefix]?.forEach((userId) => {
                // @ts-ignore only available after swapping 1-base
                this[mode](new iam.CanonicalUserPrincipal(userId));
              });
              break;
            case PrincipalType.federated:
              this.myPrincipals[prefix]?.forEach((provider) => {
                // @ts-ignore only available after swapping 1-base
                this[mode](new iam.FederatedPrincipal(provider, {}));
              });
              break;
            case PrincipalType.service:
              this.myPrincipals[prefix]?.forEach((service) => {
                // @ts-ignore only available after swapping 1-base
                this[mode](new iam.ServicePrincipal(service));
              });
              break;
            default:
              throw Error(`Unhandled principal type: ${prefix}`);
          }
        });
      }
      this.cdkPrincipalsApplied = true;
    }
  }
}
