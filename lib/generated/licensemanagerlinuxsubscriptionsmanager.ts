import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [license-manager-linux-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerlinuxsubscriptionsmanager.html).
 *
 * @param options - Options for the statement
 */
export class LicenseManagerLinuxSubscriptions extends PolicyStatement {
  public servicePrefix = 'license-manager-linux-subscriptions';

  /**
   * Statement provider for service [license-manager-linux-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerlinuxsubscriptionsmanager.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to get the service settings for Linux subscriptions in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    return this.to('GetServiceSettings');
  }

  /**
   * Grants permission to list all instances with Linux subscriptions in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLinuxSubscriptionInstances.html
   */
  public toListLinuxSubscriptionInstances() {
    return this.to('ListLinuxSubscriptionInstances');
  }

  /**
   * Grants permission to list all Linux subscriptions in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLinuxSubscriptions.html
   */
  public toListLinuxSubscriptions() {
    return this.to('ListLinuxSubscriptions');
  }

  /**
   * Grants permission to update the service settings for Linux subscriptions in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    return this.to('UpdateServiceSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'GetServiceSettings',
      'ListLinuxSubscriptionInstances',
      'ListLinuxSubscriptions',
      'UpdateServiceSettings'
    ]
  };
}
