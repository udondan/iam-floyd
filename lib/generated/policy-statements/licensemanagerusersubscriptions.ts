import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [license-manager-user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerusersubscriptions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class LicenseManagerUserSubscriptions extends PolicyStatement {
  public servicePrefix = 'license-manager-user-subscriptions';

  /**
   * Statement provider for service [license-manager-user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerusersubscriptions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a subscribed user to an instance launched with license manager user subscriptions products
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_AssociateUser.html
   */
  public toAssociateUser() {
    return this.to('AssociateUser');
  }

  /**
   * Grants permission to create a license server endpoint for a given server type for a given Identity Provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_CreateLicenseServerEndpoint.html
   */
  public toCreateLicenseServerEndpoint() {
    return this.to('CreateLicenseServerEndpoint');
  }

  /**
   * Grants permission to delete a license server endpoint for a given server type for a given Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_DeleteLicenseServerEndpoint.html
   */
  public toDeleteLicenseServerEndpoint() {
    return this.to('DeleteLicenseServerEndpoint');
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
   * Grants permission to list license server endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListLicenseServerEndpoints.html
   */
  public toListLicenseServerEndpoints() {
    return this.to('ListLicenseServerEndpoints');
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
   * Grants permission to list tags for a selected resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Grants permission to tag a selected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
      'CreateLicenseServerEndpoint',
      'DeleteLicenseServerEndpoint',
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
      'ListLicenseServerEndpoints',
      'ListProductSubscriptions',
      'ListUserAssociations'
    ],
    Read: [
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type identity-provider to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-provider.html
   *
   * @param identityProviderId - Identifier for the identityProviderId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentityProvider(identityProviderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager-user-subscriptions:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:identity-provider/${ identityProviderId }`);
  }

  /**
   * Adds a resource of type product-subscription to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/product-subscription.html
   *
   * @param productSubscriptionId - Identifier for the productSubscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProductSubscription(productSubscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager-user-subscriptions:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:product-subscription/${ productSubscriptionId }`);
  }

  /**
   * Adds a resource of type instance-user to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/instance-user.html
   *
   * @param instanceUserId - Identifier for the instanceUserId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceUser(instanceUserId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager-user-subscriptions:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance-user/${ instanceUserId }`);
  }

  /**
   * Adds a resource of type license-server-endpoint to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/license-server-endpoint.html
   *
   * @param licenseServerEndpointId - Identifier for the licenseServerEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLicenseServerEndpoint(licenseServerEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager-user-subscriptions:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:license-server-endpoint/${ licenseServerEndpointId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toAssociateUser()
   * - .toCreateLicenseServerEndpoint()
   * - .toRegisterIdentityProvider()
   * - .toStartProductSubscription()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to resource types:
   * - identity-provider
   * - product-subscription
   * - instance-user
   * - license-server-endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toAssociateUser()
   * - .toCreateLicenseServerEndpoint()
   * - .toRegisterIdentityProvider()
   * - .toStartProductSubscription()
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
