import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [workspaces-web](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesweb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WorkspacesWeb extends PolicyStatement {
  public servicePrefix = 'workspaces-web';

  /**
   * Statement provider for service [workspaces-web](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesweb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate browser settings to web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateBrowserSettings.html
   */
  public toAssociateBrowserSettings() {
    return this.to('AssociateBrowserSettings');
  }

  /**
   * Grants permission to associate network settings to web portals
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:CreateNetworkInterfacePermission
   * - ec2:CreateTags
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteNetworkInterfacePermission
   * - ec2:ModifyNetworkInterfaceAttribute
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateNetworkSettings.html
   */
  public toAssociateNetworkSettings() {
    return this.to('AssociateNetworkSettings');
  }

  /**
   * Grants permission to associate trust stores with web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateTrustStore.html
   */
  public toAssociateTrustStore() {
    return this.to('AssociateTrustStore');
  }

  /**
   * Grants permission to associate user settings with web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateUserSettings.html
   */
  public toAssociateUserSettings() {
    return this.to('AssociateUserSettings');
  }

  /**
   * Grants permission to create browser settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateBrowserSettings.html
   */
  public toCreateBrowserSettings() {
    return this.to('CreateBrowserSettings');
  }

  /**
   * Grants permission to create identity providers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateIdentityProvider.html
   */
  public toCreateIdentityProvider() {
    return this.to('CreateIdentityProvider');
  }

  /**
   * Grants permission to create network settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateNetworkSettings.html
   */
  public toCreateNetworkSettings() {
    return this.to('CreateNetworkSettings');
  }

  /**
   * Grants permission to create web portals
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreatePortal.html
   */
  public toCreatePortal() {
    return this.to('CreatePortal');
  }

  /**
   * Grants permission to create trust stores
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateTrustStore.html
   */
  public toCreateTrustStore() {
    return this.to('CreateTrustStore');
  }

  /**
   * Grants permission to create user settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserSettings.html
   */
  public toCreateUserSettings() {
    return this.to('CreateUserSettings');
  }

  /**
   * Grants permission to delete browser settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteBrowserSettings.html
   */
  public toDeleteBrowserSettings() {
    return this.to('DeleteBrowserSettings');
  }

  /**
   * Grants permission to delete identity providers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteIdentityProvider.html
   */
  public toDeleteIdentityProvider() {
    return this.to('DeleteIdentityProvider');
  }

  /**
   * Grants permission to delete network settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteNetworkSettings.html
   */
  public toDeleteNetworkSettings() {
    return this.to('DeleteNetworkSettings');
  }

  /**
   * Grants permission to delete web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeletePortal.html
   */
  public toDeletePortal() {
    return this.to('DeletePortal');
  }

  /**
   * Grants permission to delete trust stores
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteTrustStore.html
   */
  public toDeleteTrustStore() {
    return this.to('DeleteTrustStore');
  }

  /**
   * Grants permission to delete user settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteUserSettings.html
   */
  public toDeleteUserSettings() {
    return this.to('DeleteUserSettings');
  }

  /**
   * Grants permission to disassociate browser settings from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateBrowserSettings.html
   */
  public toDisassociateBrowserSettings() {
    return this.to('DisassociateBrowserSettings');
  }

  /**
   * Grants permission to disassociate network settings from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateNetworkSettings.html
   */
  public toDisassociateNetworkSettings() {
    return this.to('DisassociateNetworkSettings');
  }

  /**
   * Grants permission to disassociate trust stores from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateTrustStore.html
   */
  public toDisassociateTrustStore() {
    return this.to('DisassociateTrustStore');
  }

  /**
   * Grants permission to disassociate user settings from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateUserSettings.html
   */
  public toDisassociateUserSettings() {
    return this.to('DisassociateUserSettings');
  }

  /**
   * Grants permission to get details on browser settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetBrowserSettings.html
   */
  public toGetBrowserSettings() {
    return this.to('GetBrowserSettings');
  }

  /**
   * Grants permission to get details on identity providers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetIdentityProvider.html
   */
  public toGetIdentityProvider() {
    return this.to('GetIdentityProvider');
  }

  /**
   * Grants permission to get details on network settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetNetworkSettings.html
   */
  public toGetNetworkSettings() {
    return this.to('GetNetworkSettings');
  }

  /**
   * Grants permission to get details on web portals
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetPortal.html
   */
  public toGetPortal() {
    return this.to('GetPortal');
  }

  /**
   * Grants permission to get service provider metadata information for web portals
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetPortalServiceProviderMetadata.html
   */
  public toGetPortalServiceProviderMetadata() {
    return this.to('GetPortalServiceProviderMetadata');
  }

  /**
   * Grants permission to get details on trust stores
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetTrustStore.html
   */
  public toGetTrustStore() {
    return this.to('GetTrustStore');
  }

  /**
   * Grants permission to get certificates from trust stores
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetTrustStoreCertificate.html
   */
  public toGetTrustStoreCertificate() {
    return this.to('GetTrustStoreCertificate');
  }

  /**
   * Grants permission to get details on user settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetUserSettings.html
   */
  public toGetUserSettings() {
    return this.to('GetUserSettings');
  }

  /**
   * Grants permission to list browser settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListBrowserSettings.html
   */
  public toListBrowserSettings() {
    return this.to('ListBrowserSettings');
  }

  /**
   * Grants permission to list identity providers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListIdentityProviders.html
   */
  public toListIdentityProviders() {
    return this.to('ListIdentityProviders');
  }

  /**
   * Grants permission to list network settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListNetworkSettings.html
   */
  public toListNetworkSettings() {
    return this.to('ListNetworkSettings');
  }

  /**
   * Grants permission to list web portals
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListPortals.html
   */
  public toListPortals() {
    return this.to('ListPortals');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list certificates in a trust store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTrustStoreCertificates.html
   */
  public toListTrustStoreCertificates() {
    return this.to('ListTrustStoreCertificates');
  }

  /**
   * Grants permission to list trust stores
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTrustStores.html
   */
  public toListTrustStores() {
    return this.to('ListTrustStores');
  }

  /**
   * Grants permission to list user settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListUserSettings.html
   */
  public toListUserSettings() {
    return this.to('ListUserSettings');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update browser settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateBrowserSettings.html
   */
  public toUpdateBrowserSettings() {
    return this.to('UpdateBrowserSettings');
  }

  /**
   * Grants permission to update identity provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateIdentityProvider.html
   */
  public toUpdateIdentityProvider() {
    return this.to('UpdateIdentityProvider');
  }

  /**
   * Grants permission to update network settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateNetworkSettings.html
   */
  public toUpdateNetworkSettings() {
    return this.to('UpdateNetworkSettings');
  }

  /**
   * Grants permission to update web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdatePortal.html
   */
  public toUpdatePortal() {
    return this.to('UpdatePortal');
  }

  /**
   * Grants permission to update trust stores
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateTrustStore.html
   */
  public toUpdateTrustStore() {
    return this.to('UpdateTrustStore');
  }

  /**
   * Grants permission to update user settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateUserSettings.html
   */
  public toUpdateUserSettings() {
    return this.to('UpdateUserSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateBrowserSettings',
      'AssociateNetworkSettings',
      'AssociateTrustStore',
      'AssociateUserSettings',
      'CreateBrowserSettings',
      'CreateIdentityProvider',
      'CreateNetworkSettings',
      'CreatePortal',
      'CreateTrustStore',
      'CreateUserSettings',
      'DeleteBrowserSettings',
      'DeleteIdentityProvider',
      'DeleteNetworkSettings',
      'DeletePortal',
      'DeleteTrustStore',
      'DeleteUserSettings',
      'DisassociateBrowserSettings',
      'DisassociateNetworkSettings',
      'DisassociateTrustStore',
      'DisassociateUserSettings',
      'UpdateBrowserSettings',
      'UpdateIdentityProvider',
      'UpdateNetworkSettings',
      'UpdatePortal',
      'UpdateTrustStore',
      'UpdateUserSettings'
    ],
    Read: [
      'GetBrowserSettings',
      'GetIdentityProvider',
      'GetNetworkSettings',
      'GetPortal',
      'GetPortalServiceProviderMetadata',
      'GetTrustStore',
      'GetTrustStoreCertificate',
      'GetUserSettings',
      'ListBrowserSettings',
      'ListIdentityProviders',
      'ListNetworkSettings',
      'ListPortals',
      'ListTagsForResource',
      'ListTrustStoreCertificates',
      'ListTrustStores',
      'ListUserSettings'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type browserSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateBrowserSettings.html
   *
   * @param browserSettingsId - Identifier for the browserSettingsId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBrowserSettings(browserSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || WorkspacesWeb.defaultPartition }:workspaces-web:${ region || '*' }:${ account || '*' }:browserSettings/${ browserSettingsId }`);
  }

  /**
   * Adds a resource of type networkSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateNetworkSettings.html
   *
   * @param networkSettingsId - Identifier for the networkSettingsId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkSettings(networkSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || WorkspacesWeb.defaultPartition }:workspaces-web:${ region || '*' }:${ account || '*' }:networkSettings/${ networkSettingsId }`);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreatePortal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || WorkspacesWeb.defaultPartition }:workspaces-web:${ region || '*' }:${ account || '*' }:portal/${ portalId }`);
  }

  /**
   * Adds a resource of type trustStore to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateTrustStore.html
   *
   * @param trustStoreId - Identifier for the trustStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrustStore(trustStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || WorkspacesWeb.defaultPartition }:workspaces-web:${ region || '*' }:${ account || '*' }:trustStore/${ trustStoreId }`);
  }

  /**
   * Adds a resource of type userSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserSettings.html
   *
   * @param userSettingsId - Identifier for the userSettingsId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUserSettings(userSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || WorkspacesWeb.defaultPartition }:workspaces-web:${ region || '*' }:${ account || '*' }:userSettings/${ userSettingsId }`);
  }
}
