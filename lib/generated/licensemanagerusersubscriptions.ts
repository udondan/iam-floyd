import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [license-manager-user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerusersubscriptions.html).
 *
 * @param options - Options for the statement
 */
export class LicenseManagerUserSubscriptions extends PolicyStatement {
  public servicePrefix = 'license-manager-user-subscriptions';

  /**
   * Statement provider for service [license-manager-user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerusersubscriptions.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate a subscribed user to an instance launched with license manager user subscriptions products
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_AssociateUser.html
   */
  public toAssociateUser() {
    return this.to('AssociateUser');
  }

  /**
   * Grants permission to deregister Microsoft Active Directory with license-manager-user-subscriptions for a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_DeregisterIdentityProvider.html
   */
  public toDeregisterIdentityProvider() {
    return this.to('DeregisterIdentityProvider');
  }

  /**
   * Grants permission to disassociate a subscribed user from an instance launched with license manager user subscriptions products
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_DisassociateUser.html
   */
  public toDisassociateUser() {
    return this.to('DisassociateUser');
  }

  /**
   * Grants permission to list all the identity providers on license manager user subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListIdentityProviders.html
   */
  public toListIdentityProviders() {
    return this.to('ListIdentityProviders');
  }

  /**
   * Grants permission to list all the instances launched with license manager user subscription products
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to lists all the product subscriptions for a product and identity provider
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListProductSubscriptions.html
   */
  public toListProductSubscriptions() {
    return this.to('ListProductSubscriptions');
  }

  /**
   * Grants permission to list all the users associated to an instance launched for a product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListUserAssociations.html
   */
  public toListUserAssociations() {
    return this.to('ListUserAssociations');
  }

  /**
   * Grants permission to registers Microsoft Active Directory with license-manager-user-subscriptions for a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_RegisterIdentityProvider.html
   */
  public toRegisterIdentityProvider() {
    return this.to('RegisterIdentityProvider');
  }

  /**
   * Grants permission to start product subscription for a user on a registered active directory for a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_StartProductSubscription.html
   */
  public toStartProductSubscription() {
    return this.to('StartProductSubscription');
  }

  /**
   * Grants permission to stop product subscription for a user on a registered active directory for a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_StopProductSubscription.html
   */
  public toStopProductSubscription() {
    return this.to('StopProductSubscription');
  }

  /**
   * Grants permission to update the identity provider configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_UpdateIdentityProviderSettings.html
   */
  public toUpdateIdentityProviderSettings() {
    return this.to('UpdateIdentityProviderSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateUser',
      'DeregisterIdentityProvider',
      'DisassociateUser',
      'RegisterIdentityProvider',
      'StartProductSubscription',
      'StopProductSubscription',
      'UpdateIdentityProviderSettings'
    ],
    List: [
      'ListIdentityProviders',
      'ListInstances',
      'ListProductSubscriptions',
      'ListUserAssociations'
    ]
  };
}
