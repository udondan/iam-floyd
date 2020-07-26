import iam from '../iam';
import { PolicyStatementWithEffect } from './5-effect';

interface Principals {
  [key: string]: string[];
}

export enum PrincipalType {
  AWS = 'AWS',
  FEDERATED = 'Federated',
  CANONICAL_USER = 'CanonicalUser',
  SERVICE = 'Service',
}

/**
 * Adds "principal" functionality to the Policy Statement
 */
export class PolicyStatementWithPrincipal extends PolicyStatementWithEffect {
  private useNotPrincipals = false;
  protected principals: Principals = {};
  private cdkPrincipalsApplied = false;
  protected cdkPrincipals: any[] = [];

  /**
   * Injects principals into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    console.log('PolicyStatementWithPrincipal:toJSON');
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyPrincipals();
      return super.toJSON();
    }
    const mode = this.useNotPrincipals ? 'NotPrincipal' : 'Principal';
    const statement = super.toJSON();

    if (this.hasPrincipals()) {
      statement[mode] = this.principals;
    }

    return statement;
  }

  public toStatementJson(): any {
    console.log('PolicyStatementWithPrincipal:toStatementJson');
    this.cdkApplyPrincipals();

    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  private cdkApplyPrincipals() {
    console.log('PolicyStatementWithPrincipal:cdkApplyPrincipals');
    if (!this.cdkPrincipalsApplied) {
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
      this.cdkPrincipalsApplied = true;
    }
  }

  /**
   * Checks weather a principal was applied to the policy
   */
  public hasPrincipals(): boolean {
    return Object.keys(this.principals).length > 0;
  }

  /**
   * Adds a principal to the statement
   *
   * @param prefix One of **AWS**, **Federated**, **CanonicalUser** or **Service**
   * @param principal The principal string
   */
  protected addPrincipal(prefix: string, principal: string) {
    if (!(prefix in this.principals)) {
      this.principals[prefix] = [];
    }
    this.principals[prefix].push(principal);
    return this;
  }

  /**
   * Adds any principal to the statement
   *
   * @param arn The ARN of the principal
   * @param prefix One of **AWS**, **Federated**, **CanonicalUser** or **Service** - Default: **AWS**
   */
  public for(arn: string, prefix?: string) {
    return this.addPrincipal(prefix || PrincipalType.AWS, arn);
  }

  /**
   * Adds an account principal to the statement
   *
   * @param account ID of the AWS account
   */
  public forAccount(account: string) {
    return this.addPrincipal(PrincipalType.AWS, `arn:aws:iam::${account}:root`);
  }

  /**
   * Adds a [federated](https://aws.amazon.com/identity/federation/) (web identity) principal to the statement
   *
   * @param provider ID of the AWS account
   */
  public forFederated(provider: string) {
    return this.addPrincipal(PrincipalType.FEDERATED, provider);
  }

  /**
   * Adds a federated [AWS Cognito](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_cognito.html) principal to the statement
   */
  public forFederatedCognito() {
    return this.forFederated('cognito-identity.amazonaws.com');
  }

  /**
   * Adds a federated [Amazon](https://login.amazon.com/) principal to the statement
   */
  public forFederatedAmazon() {
    return this.forFederated('www.amazon.com');
  }

  /**
   * Adds a federated [Facebook](https://developers.facebook.com/docs/facebook-login) principal to the statement
   */
  public forFederatedFacebook() {
    return this.forFederated('graph.facebook.com');
  }

  /**
   * Adds a federated [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect) principal to the statement
   */

  public forFederatedGoogle() {
    return this.forFederated('accounts.google.com');
  }

  /**
   * Adds a canonical user principal to the statement
   *
   * @param userID The user ID
   *
   * You can [find the canonical user ID](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId) for your AWS account in the AWS Management Console. The canonical user ID for an AWS account is specific to the account. You can retrieve the canonical user ID for your AWS account as either the root user or an IAM user.
   */
  public forCanonicalUser(userID: string) {
    return this.addPrincipal(PrincipalType.CANONICAL_USER, userID);
  }

  /**
   * Adds federated SAML principal to the statement
   *
   * @param account ID of the AWS account
   * @param providerName Name of the SAML provider
   */
  public forSaml(account: string, providerName: string) {
    return this.forFederated(
      `arn:aws:iam::${account}:saml-provider/${providerName}`
    );
  }

  /**
   * Adds an IAM user principal to the statement
   *
   * @param account ID of the AWS account
   * @param user Name of the IAM user
   */
  public forUser(account: string, user: string) {
    return this.addPrincipal(
      PrincipalType.AWS,
      `arn:aws:iam::${account}:user/${user}`
    );
  }

  /**
   * Adds an IAM role principal to the statement
   *
   * @param account ID of the AWS account
   * @param role Name of the IAM role
   */
  public forRole(account: string, role: string) {
    return this.addPrincipal(
      PrincipalType.AWS,
      `arn:aws:iam::${account}:role/${role}`
    );
  }

  /**
   * Adds a specific assumed role session principal to the statement
   *
   * @param account ID of the AWS account
   * @param roleName Name of the IAM role
   * @param sessionName Name of the session. You cannot use a wildcard (`*`) to mean *all sessions*. Principals must always name a specific session
   */
  public forAssumedRoleSession(
    account: string,
    roleName: string,
    sessionName: string
  ) {
    return this.addPrincipal(
      PrincipalType.AWS,
      `arn:aws:sts::${account}:assumed-role/${roleName}/${sessionName}`
    );
  }

  /**
   * Adds a service principal to the statement
   *
   * @param service Long version of the service name. Usually in the format: `long_service-name.amazonaws.com`
   *
   * The service principal is defined by the service. To learn the service principal for a service, see the documentation for that service. For some services, see [AWS Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html) and look for the services that have **Yes** in the **Service-Linked Role** column. Choose a **Yes** with a link to view the service-linked role documentation for that service. View the **Service-Linked Role Permissions** section for that service to view the service principal.
   */

  public forService(service: string) {
    return this.addPrincipal(PrincipalType.SERVICE, service);
  }

  /**
   * Grants public asses
   *
   * **EVERYONE IN THE WORLD HAS ACCESS**
   *
   * We strongly recommend that you do not use a wildcard in the Principal element in a role's trust policy unless you otherwise restrict access through a Condition element in the policy. Otherwise, any IAM user in any account in your partition can access the role.
   */
  public forPublic() {
    return this.addPrincipal(PrincipalType.AWS, '*');
  }
}
