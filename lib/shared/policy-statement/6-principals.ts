import { PolicyStatementWithEffect } from './5-effect';

interface Principal {
  [key: string]: String;
}

interface Principals {
  [key: string]: Principal;
}

/**
 * Adds "principal" functionality to the Policy Statement
 */
export class PolicyStatementWithPrincipal extends PolicyStatementWithEffect {
  protected useNotPrincipals = false;
  protected principals: Principals = {};

  /**
   * JSON-ify the policy statement
   *
   * Used when JSON.stringify() is called
   */
  public toJSON(): any {
    const mode = this.useNotPrincipals ? 'NotPrincipal' : 'Principal';
    const statement = super.toJSON();

    if (this.hasPrincipals()) {
      statement[mode] = this.principals;
    }

    return statement;
  }

  /**
   * Checks weather a principal was applied to the policy.
   */
  public hasPrincipals(): boolean {
    return Object.keys(this.principals).length > 0;
  }

  public for() {} //takes ARN
  public forAccount() {}
  public forFederated() {}
  public forFederatedCognito() {}
  public forFederatedAmazon() {}
  public forFederatedFacebook() {}
  public forFederatedGoogle() {}
  public forCanonicalUser() {}
  public forUser() {}
  public forSaml() {}
  public forRole() {}
  public forRoleSession() {}
  public forPublic() {}
}
