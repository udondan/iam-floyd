import { PolicyStatementWithEffect } from './5-effect';

/**
 * A collection of Principal's
 */
export interface Principals {
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
  protected useNotPrincipals = false;
  protected myPrincipals: Principals = {};

  /**
   * Injects principals into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyPrincipals();
      return super.toJSON();
    }

    const mode = this.useNotPrincipals ? 'NotPrincipal' : 'Principal';
    const statement = super.toJSON();

    if (this.hasPrincipals()) {
      statement[mode] = this.myPrincipals;
    }

    return statement;
  }

  public toStatementJson(): any {
    this.cdkApplyPrincipals();
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  protected cdkApplyPrincipals() {}

  /**
   * Switches the statement to use [`notPrincipal`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html).
   */
  public notPrincipals() {
    this.useNotPrincipals = true;
    return this;
  }

  /**
   * Checks weather a principal was applied to the policy
   */
  public hasPrincipals(): boolean {
    return Object.keys(this.myPrincipals).length > 0;
  }

  /**
   * Adds a principal to the statement
   *
   * @param prefix One of **AWS**, **Federated**, **CanonicalUser** or **Service**
   * @param principal The principal string
   */
  protected addPrincipal(prefix: string, principal: string) {
    this.skipAutoResource = true;
    if (!(prefix in this.myPrincipals)) {
      this.myPrincipals[prefix] = [];
    }
    this.myPrincipals[prefix].push(principal);
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
   * Adds one or more account principals to the statement
   *
   * @param accounts ID of the AWS account
   */
  public forAccount(...accounts: string[]) {
    accounts.forEach((account) =>
      this.addPrincipal(
        PrincipalType.AWS,
        `arn:${PolicyStatementWithPrincipal.defaultPartition}:iam::${account}:root`
      )
    );
    return this;
  }

  /**
   * Adds one or more [federated](https://aws.amazon.com/identity/federation/) (web identity) principals to the statement
   *
   * @param providers ID of the AWS account
   */
  public forFederated(...providers: string[]) {
    providers.forEach((provider) =>
      this.addPrincipal(PrincipalType.FEDERATED, provider)
    );
    return this;
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
   * Adds one or more canonical user principals to the statement
   *
   * @param userIDs The user ID
   *
   * You can [find the canonical user ID](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId) for your AWS account in the AWS Management Console. The canonical user ID for an AWS account is specific to the account. You can retrieve the canonical user ID for your AWS account as either the root user or an IAM user.
   */
  public forCanonicalUser(...userIDs: string[]) {
    userIDs.forEach((userID) =>
      this.addPrincipal(PrincipalType.CANONICAL_USER, userID)
    );
    return this;
  }

  /**
   * Adds one or more federated SAML principals to the statement
   *
   * @param account ID of the AWS account
   * @param providerNames Name of the SAML provider
   */
  public forSaml(account: string, ...providerNames: string[]) {
    providerNames.forEach((providerName) =>
      this.forFederated(
        `arn:${PolicyStatementWithPrincipal.defaultPartition}:iam::${account}:saml-provider/${providerName}`
      )
    );
    return this;
  }

  /**
   * Adds one or more IAM user principals to the statement
   *
   * @param account ID of the AWS account
   * @param users Name of the IAM user
   */
  public forUser(account: string, ...users: string[]) {
    users.forEach((user) =>
      this.addPrincipal(
        PrincipalType.AWS,
        `arn:${PolicyStatementWithPrincipal.defaultPartition}:iam::${account}:user/${user}`
      )
    );
    return this;
  }

  /**
   * Adds one or more IAM role principals to the statement
   *
   * @param account ID of the AWS account
   * @param roles Name of the IAM role
   */
  public forRole(account: string, ...roles: string[]) {
    roles.forEach((role) =>
      this.addPrincipal(
        PrincipalType.AWS,
        `arn:${PolicyStatementWithPrincipal.defaultPartition}:iam::${account}:role/${role}`
      )
    );
    return this;
  }

  /**
   * Adds one or more specific assumed role session principals to the statement
   *
   * @param account ID of the AWS account
   * @param roleName Name of the IAM role
   * @param sessionNames Name of the session. You cannot use a wildcard (`*`) to mean *all sessions*. Principals must always name a specific session
   */
  public forAssumedRoleSession(
    account: string,
    roleName: string,
    ...sessionNames: string[]
  ) {
    sessionNames.forEach((sessionName) => {
      this.addPrincipal(
        PrincipalType.AWS,
        `arn:${PolicyStatementWithPrincipal.defaultPartition}:sts::${account}:assumed-role/${roleName}/${sessionName}`
      );
    });
    return this;
  }

  /**
   * Adds one or more service principals to the statement
   *
   * @param services Long version of the service name. Usually in the format: `long_service-name.amazonaws.com`
   *
   * The service principal is defined by the service. To learn the service principal for a service, see the documentation for that service. For some services, see [AWS Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html) and look for the services that have **Yes** in the **Service-Linked Role** column. Choose a **Yes** with a link to view the service-linked role documentation for that service. View the **Service-Linked Role Permissions** section for that service to view the service principal.
   */

  public forService(...services: string[]) {
    services.forEach((service) =>
      this.addPrincipal(PrincipalType.SERVICE, service)
    );
    return this;
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
