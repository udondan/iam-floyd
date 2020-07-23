import iam = require('@aws-cdk/aws-iam');

import { PolicyStatementWithPrincipal } from './6-principals';

/**
 * Adds CDK specific "principal" functionality to the Policy Statement
 */
export class PolicyStatementWithCDKPrincipal extends PolicyStatementWithPrincipal {
  protected cdkPrincipals: iam.IPrincipal[] = [];

  /**
   * Adds any number of CDK principals to the statement
   * @param principals Principals to add to the statement
   */
  public forCdkPrincipal(...principals: iam.IPrincipal[]) {
    this.cdkPrincipals.push(...principals);
    return this;
  }
}
