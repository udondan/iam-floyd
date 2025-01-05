import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [workspaces-web](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacessecurebrowser.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WorkspacesWeb extends PolicyStatement {
  public servicePrefix = 'workspaces-web';

  /**
   * Statement provider for service [workspaces-web](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacessecurebrowser.html).
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
   * Grants permission to associate ip access settings with web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateIpAccessSettings.html
   */
  public toAssociateIpAccessSettings() {
    return this.to('AssociateIpAccessSettings');
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
   * Grants permission to associate user access logging settings with web portals
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kinesis:PutRecord
   * - kinesis:PutRecords
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateUserAccessLoggingSettings.html
   */
  public toAssociateUserAccessLoggingSettings() {
    return this.to('AssociateUserAccessLoggingSettings');
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
   * Grants permission to create ip access settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateIpAccessSettings.html
   */
  public toCreateIpAccessSettings() {
    return this.to('CreateIpAccessSettings');
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
   * Grants permission to create user access logging settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserAccessLoggingSettings.html
   */
  public toCreateUserAccessLoggingSettings() {
    return this.to('CreateUserAccessLoggingSettings');
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
   * Grants permission to delete ip access settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteIpAccessSettings.html
   */
  public toDeleteIpAccessSettings() {
    return this.to('DeleteIpAccessSettings');
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
   * Grants permission to delete user access logging settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteUserAccessLoggingSettings.html
   */
  public toDeleteUserAccessLoggingSettings() {
    return this.to('DeleteUserAccessLoggingSettings');
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
   * Grants permission to disassociate ip access logging from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateIpAccessSettings.html
   */
  public toDisassociateIpAccessSettings() {
    return this.to('DisassociateIpAccessSettings');
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
   * Grants permission to disassociate user access logging settings from web portals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateUserAccessLoggingSettings.html
   */
  public toDisassociateUserAccessLoggingSettings() {
    return this.to('DisassociateUserAccessLoggingSettings');
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
   * Grants permission to expire a session from a specific portal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ExpireSession.html
   */
  public toExpireSession() {
    return this.to('ExpireSession');
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
   * Grants permission to get details on ip access settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetIpAccessSettings.html
   */
  public toGetIpAccessSettings() {
    return this.to('GetIpAccessSettings');
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
   * Grants permission to get information about a particular session for a portal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
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
   * Grants permission to get details on user access logging settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetUserAccessLoggingSettings.html
   */
  public toGetUserAccessLoggingSettings() {
    return this.to('GetUserAccessLoggingSettings');
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
   * Grants permission to list ip access settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListIpAccessSettings.html
   */
  public toListIpAccessSettings() {
    return this.to('ListIpAccessSettings');
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
   * Grants permission to list sessions for a Portal using optional filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
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
   * Grants permission to list user access logging settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListUserAccessLoggingSettings.html
   */
  public toListUserAccessLoggingSettings() {
    return this.to('ListUserAccessLoggingSettings');
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
   * Grants permission to update ip access settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateIpAccessSettings.html
   */
  public toUpdateIpAccessSettings() {
    return this.to('UpdateIpAccessSettings');
  }

  /**
   * Grants permission to update network settings
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
   * Grants permission to update user access logging settings
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kinesis:PutRecord
   * - kinesis:PutRecords
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateUserAccessLoggingSettings.html
   */
  public toUpdateUserAccessLoggingSettings() {
    return this.to('UpdateUserAccessLoggingSettings');
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
      'AssociateIpAccessSettings',
      'AssociateNetworkSettings',
      'AssociateTrustStore',
      'AssociateUserAccessLoggingSettings',
      'AssociateUserSettings',
      'CreateBrowserSettings',
      'CreateIdentityProvider',
      'CreateIpAccessSettings',
      'CreateNetworkSettings',
      'CreatePortal',
      'CreateTrustStore',
      'CreateUserAccessLoggingSettings',
      'CreateUserSettings',
      'DeleteBrowserSettings',
      'DeleteIdentityProvider',
      'DeleteIpAccessSettings',
      'DeleteNetworkSettings',
      'DeletePortal',
      'DeleteTrustStore',
      'DeleteUserAccessLoggingSettings',
      'DeleteUserSettings',
      'DisassociateBrowserSettings',
      'DisassociateIpAccessSettings',
      'DisassociateNetworkSettings',
      'DisassociateTrustStore',
      'DisassociateUserAccessLoggingSettings',
      'DisassociateUserSettings',
      'ExpireSession',
      'UpdateBrowserSettings',
      'UpdateIdentityProvider',
      'UpdateIpAccessSettings',
      'UpdateNetworkSettings',
      'UpdatePortal',
      'UpdateTrustStore',
      'UpdateUserAccessLoggingSettings',
      'UpdateUserSettings'
    ],
    Read: [
      'GetBrowserSettings',
      'GetIdentityProvider',
      'GetIpAccessSettings',
      'GetNetworkSettings',
      'GetPortal',
      'GetPortalServiceProviderMetadata',
      'GetSession',
      'GetTrustStore',
      'GetTrustStoreCertificate',
      'GetUserAccessLoggingSettings',
      'GetUserSettings',
      'ListBrowserSettings',
      'ListIdentityProviders',
      'ListIpAccessSettings',
      'ListNetworkSettings',
      'ListPortals',
      'ListSessions',
      'ListTagsForResource',
      'ListTrustStoreCertificates',
      'ListTrustStores',
      'ListUserAccessLoggingSettings',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBrowserSettings(browserSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:browserSettings/${ browserSettingsId }`);
  }

  /**
   * Adds a resource of type identityProvider to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateIdentityProvider.html
   *
   * @param portalId - Identifier for the portalId.
   * @param identityProviderId - Identifier for the identityProviderId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIdentityProvider(portalId: string, identityProviderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:identityProvider/${ portalId }/${ identityProviderId }`);
  }

  /**
   * Adds a resource of type networkSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateNetworkSettings.html
   *
   * @param networkSettingsId - Identifier for the networkSettingsId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkSettings(networkSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:networkSettings/${ networkSettingsId }`);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreatePortal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:portal/${ portalId }`);
  }

  /**
   * Adds a resource of type trustStore to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateTrustStore.html
   *
   * @param trustStoreId - Identifier for the trustStoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrustStore(trustStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:trustStore/${ trustStoreId }`);
  }

  /**
   * Adds a resource of type userSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserSettings.html
   *
   * @param userSettingsId - Identifier for the userSettingsId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUserSettings(userSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:userSettings/${ userSettingsId }`);
  }

  /**
   * Adds a resource of type userAccessLoggingSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserAccessLoggingSettings.html
   *
   * @param userAccessLoggingSettingsId - Identifier for the userAccessLoggingSettingsId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUserAccessLoggingSettings(userAccessLoggingSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:userAccessLoggingSettings/${ userAccessLoggingSettingsId }`);
  }

  /**
   * Adds a resource of type ipAccessSettings to the statement
   *
   * https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateIpAccessSettings.html
   *
   * @param ipAccessSettingsId - Identifier for the ipAccessSettingsId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIpAccessSettings(ipAccessSettingsId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-web:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ipAccessSettings/${ ipAccessSettingsId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBrowserSettings()
   * - .toCreateIpAccessSettings()
   * - .toCreateNetworkSettings()
   * - .toCreatePortal()
   * - .toCreateTrustStore()
   * - .toCreateUserAccessLoggingSettings()
   * - .toCreateUserSettings()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - browserSettings
   * - networkSettings
   * - portal
   * - trustStore
   * - userSettings
   * - userAccessLoggingSettings
   * - ipAccessSettings
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateBrowserSettings()
   * - .toCreateIpAccessSettings()
   * - .toCreateNetworkSettings()
   * - .toCreatePortal()
   * - .toCreateTrustStore()
   * - .toCreateUserAccessLoggingSettings()
   * - .toCreateUserSettings()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
