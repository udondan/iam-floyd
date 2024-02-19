import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [workspaces](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workspaces extends PolicyStatement {
  public servicePrefix = 'workspaces';

  /**
   * Statement provider for service [workspaces](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate connection aliases with directories
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateConnectionAlias.html
   */
  public toAssociateConnectionAlias() {
    return this.to('AssociateConnectionAlias');
  }

  /**
   * Grants permission to associate IP access control groups with directories
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html
   */
  public toAssociateIpGroups() {
    return this.to('AssociateIpGroups');
  }

  /**
   * Grants permission to associate a workspace application with a WorkSpace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateWorkspaceApplication.html
   */
  public toAssociateWorkspaceApplication() {
    return this.to('AssociateWorkspaceApplication');
  }

  /**
   * Grants permission to add rules to IP access control groups
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - workspaces:UpdateRulesOfIpGroup
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html
   */
  public toAuthorizeIpRules() {
    return this.to('AuthorizeIpRules');
  }

  /**
   * Grants permission to copy a WorkSpace image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - workspaces:DescribeWorkspaceImages
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CopyWorkspaceImage.html
   */
  public toCopyWorkspaceImage() {
    return this.to('CopyWorkspaceImage');
  }

  /**
   * Grants permission to create an Amazon Connect client add-in within a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectClientAddIn.html
   */
  public toCreateConnectClientAddIn() {
    return this.to('CreateConnectClientAddIn');
  }

  /**
   * Grants permission to create connection aliases for use with cross-Region redirection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectionAlias.html
   */
  public toCreateConnectionAlias() {
    return this.to('CreateConnectionAlias');
  }

  /**
   * Grants permission to create IP access control groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html
   */
  public toCreateIpGroup() {
    return this.to('CreateIpGroup');
  }

  /**
   * Grants permission to create one or more Standby WorkSpaces
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateStandbyWorkspaces.html
   */
  public toCreateStandbyWorkspaces() {
    return this.to('CreateStandbyWorkspaces');
  }

  /**
   * Grants permission to create tags for WorkSpaces resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Grants permission to create an updated WorkSpace image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateUpdatedWorkspaceImage.html
   */
  public toCreateUpdatedWorkspaceImage() {
    return this.to('CreateUpdatedWorkspaceImage');
  }

  /**
   * Grants permission to create a WorkSpace bundle
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - workspaces:CreateTags
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceBundle.html
   */
  public toCreateWorkspaceBundle() {
    return this.to('CreateWorkspaceBundle');
  }

  /**
   * Grants permission to create a new WorkSpace image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceImage.html
   */
  public toCreateWorkspaceImage() {
    return this.to('CreateWorkspaceImage');
  }

  /**
   * Grants permission to create one or more WorkSpaces
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html
   */
  public toCreateWorkspaces() {
    return this.to('CreateWorkspaces');
  }

  /**
   * Grants permission to delete AWS WorkSpaces Client branding data within a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteClientBranding.html
   */
  public toDeleteClientBranding() {
    return this.to('DeleteClientBranding');
  }

  /**
   * Grants permission to delete an Amazon Connect client add-in that is configured within a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectClientAddIn.html
   */
  public toDeleteConnectClientAddIn() {
    return this.to('DeleteConnectClientAddIn');
  }

  /**
   * Grants permission to delete connection aliases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectionAlias.html
   */
  public toDeleteConnectionAlias() {
    return this.to('DeleteConnectionAlias');
  }

  /**
   * Grants permission to delete IP access control groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html
   */
  public toDeleteIpGroup() {
    return this.to('DeleteIpGroup');
  }

  /**
   * Grants permission to delete tags from WorkSpaces resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to delete WorkSpace bundles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceBundle.html
   */
  public toDeleteWorkspaceBundle() {
    return this.to('DeleteWorkspaceBundle');
  }

  /**
   * Grants permission to delete WorkSpace images
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html
   */
  public toDeleteWorkspaceImage() {
    return this.to('DeleteWorkspaceImage');
  }

  /**
   * Grants permission to deploy all pending workspace applications on a WorkSpace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeployWorkspaceApplications.html
   */
  public toDeployWorkspaceApplications() {
    return this.to('DeployWorkspaceApplications');
  }

  /**
   * Grants permission to deregister directories from use with Amazon WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeregisterWorkspaceDirectory.html
   */
  public toDeregisterWorkspaceDirectory() {
    return this.to('DeregisterWorkspaceDirectory');
  }

  /**
   * Grants permission to retrieve the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html
   */
  public toDescribeAccount() {
    return this.to('DescribeAccount');
  }

  /**
   * Grants permission to retrieve modifications to the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html
   */
  public toDescribeAccountModifications() {
    return this.to('DescribeAccountModifications');
  }

  /**
   * Grants permission to retrieve information about resources associated with a WorkSpace application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplicationAssociations.html
   */
  public toDescribeApplicationAssociations() {
    return this.to('DescribeApplicationAssociations');
  }

  /**
   * Grants permission to obtain information about WorkSpace applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplications.html
   */
  public toDescribeApplications() {
    return this.to('DescribeApplications');
  }

  /**
   * Grants permission to retrieve information about resources associated with a WorkSpace bundle
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeBundleAssociations.html
   */
  public toDescribeBundleAssociations() {
    return this.to('DescribeBundleAssociations');
  }

  /**
   * Grants permission to retrieve AWS WorkSpaces Client branding data within a directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientBranding.html
   */
  public toDescribeClientBranding() {
    return this.to('DescribeClientBranding');
  }

  /**
   * Grants permission to retrieve information about WorkSpaces clients
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html
   */
  public toDescribeClientProperties() {
    return this.to('DescribeClientProperties');
  }

  /**
   * Grants permission to retrieve a list of Amazon Connect client add-ins that have been created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectClientAddIns.html
   */
  public toDescribeConnectClientAddIns() {
    return this.to('DescribeConnectClientAddIns');
  }

  /**
   * Grants permission to retrieve the permissions that the owners of connection aliases have granted to other AWS accounts for connection aliases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliasPermissions.html
   */
  public toDescribeConnectionAliasPermissions() {
    return this.to('DescribeConnectionAliasPermissions');
  }

  /**
   * Grants permission to retrieve a list that describes the connection aliases used for cross-Region redirection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html
   */
  public toDescribeConnectionAliases() {
    return this.to('DescribeConnectionAliases');
  }

  /**
   * Grants permission to retrieve information about resources associated with a WorkSpace image
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeImageAssociations.html
   */
  public toDescribeImageAssociations() {
    return this.to('DescribeImageAssociations');
  }

  /**
   * Grants permission to retrieve information about IP access control groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html
   */
  public toDescribeIpGroups() {
    return this.to('DescribeIpGroups');
  }

  /**
   * Grants permission to describe the tags for WorkSpaces resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to retrieve information about resources associated with a WorkSpace
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceAssociations.html
   */
  public toDescribeWorkspaceAssociations() {
    return this.to('DescribeWorkspaceAssociations');
  }

  /**
   * Grants permission to obtain information about WorkSpace bundles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html
   */
  public toDescribeWorkspaceBundles() {
    return this.to('DescribeWorkspaceBundles');
  }

  /**
   * Grants permission to retrieve information about directories that are registered with WorkSpaces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html
   */
  public toDescribeWorkspaceDirectories() {
    return this.to('DescribeWorkspaceDirectories');
  }

  /**
   * Grants permission to retrieve information about WorkSpace image permissions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html
   */
  public toDescribeWorkspaceImagePermissions() {
    return this.to('DescribeWorkspaceImagePermissions');
  }

  /**
   * Grants permission to retrieve information about WorkSpace images
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html
   */
  public toDescribeWorkspaceImages() {
    return this.to('DescribeWorkspaceImages');
  }

  /**
   * Grants permission to retrieve information about WorkSpace snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceSnapshots.html
   */
  public toDescribeWorkspaceSnapshots() {
    return this.to('DescribeWorkspaceSnapshots');
  }

  /**
   * Grants permission to obtain information about WorkSpaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html
   */
  public toDescribeWorkspaces() {
    return this.to('DescribeWorkspaces');
  }

  /**
   * Grants permission to obtain the connection status of WorkSpaces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html
   */
  public toDescribeWorkspacesConnectionStatus() {
    return this.to('DescribeWorkspacesConnectionStatus');
  }

  /**
   * Grants permission to disassociate connection aliases from directories
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateConnectionAlias.html
   */
  public toDisassociateConnectionAlias() {
    return this.to('DisassociateConnectionAlias');
  }

  /**
   * Grants permission to disassociate IP access control groups from directories
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html
   */
  public toDisassociateIpGroups() {
    return this.to('DisassociateIpGroups');
  }

  /**
   * Grants permission to disassociate a workspace application from a WorkSpace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateWorkspaceApplication.html
   */
  public toDisassociateWorkspaceApplication() {
    return this.to('DisassociateWorkspaceApplication');
  }

  /**
   * Grants permission to import AWS WorkSpaces Client branding data within a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ImportClientBranding.html
   */
  public toImportClientBranding() {
    return this.to('ImportClientBranding');
  }

  /**
   * Grants permission to import Bring Your Own License (BYOL) images into Amazon WorkSpaces
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeImages
   * - ec2:ModifyImageAttribute
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html
   */
  public toImportWorkspaceImage() {
    return this.to('ImportWorkspaceImage');
  }

  /**
   * Grants permission to list the available CIDR ranges for enabling Bring Your Own License (BYOL) for WorkSpaces accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html
   */
  public toListAvailableManagementCidrRanges() {
    return this.to('ListAvailableManagementCidrRanges');
  }

  /**
   * Grants permission to migrate WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_MigrateWorkspace.html
   */
  public toMigrateWorkspace() {
    return this.to('MigrateWorkspace');
  }

  /**
   * Grants permission to modify the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html
   */
  public toModifyAccount() {
    return this.to('ModifyAccount');
  }

  /**
   * Grants permission to modify the certificate-based authorization properties of a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyCertificateBasedAuthProperties.html
   */
  public toModifyCertificateBasedAuthProperties() {
    return this.to('ModifyCertificateBasedAuthProperties');
  }

  /**
   * Grants permission to modify the properties of WorkSpaces clients
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html
   */
  public toModifyClientProperties() {
    return this.to('ModifyClientProperties');
  }

  /**
   * Grants permission to modify the SAML properties of a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySamlProperties.html
   */
  public toModifySamlProperties() {
    return this.to('ModifySamlProperties');
  }

  /**
   * Grants permission to modify the self-service WorkSpace management capabilities for your users
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySelfservicePermissions.html
   */
  public toModifySelfservicePermissions() {
    return this.to('ModifySelfservicePermissions');
  }

  /**
   * Grants permission to specify which devices and operating systems users can use to access their WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceAccessProperties.html
   */
  public toModifyWorkspaceAccessProperties() {
    return this.to('ModifyWorkspaceAccessProperties');
  }

  /**
   * Grants permission to modify the default properties used to create WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceCreationProperties.html
   */
  public toModifyWorkspaceCreationProperties() {
    return this.to('ModifyWorkspaceCreationProperties');
  }

  /**
   * Grants permission to modify WorkSpace properties, including the running mode and the AutoStop period
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html
   */
  public toModifyWorkspaceProperties() {
    return this.to('ModifyWorkspaceProperties');
  }

  /**
   * Grants permission to modify the state of WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html
   */
  public toModifyWorkspaceState() {
    return this.to('ModifyWorkspaceState');
  }

  /**
   * Grants permission to reboot WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html
   */
  public toRebootWorkspaces() {
    return this.to('RebootWorkspaces');
  }

  /**
   * Grants permission to rebuild WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html
   */
  public toRebuildWorkspaces() {
    return this.to('RebuildWorkspaces');
  }

  /**
   * Grants permission to register directories for use with Amazon WorkSpaces
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RegisterWorkspaceDirectory.html
   */
  public toRegisterWorkspaceDirectory() {
    return this.to('RegisterWorkspaceDirectory');
  }

  /**
   * Grants permission to restore WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RestoreWorkspace.html
   */
  public toRestoreWorkspace() {
    return this.to('RestoreWorkspace');
  }

  /**
   * Grants permission to remove rules from IP access control groups
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - workspaces:UpdateRulesOfIpGroup
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html
   */
  public toRevokeIpRules() {
    return this.to('RevokeIpRules');
  }

  /**
   * Grants permission to start AutoStop WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html
   */
  public toStartWorkspaces() {
    return this.to('StartWorkspaces');
  }

  /**
   * Grants permission to stop AutoStop WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html
   */
  public toStopWorkspaces() {
    return this.to('StopWorkspaces');
  }

  /**
   * Grants permission to federated users to sign in by using their existing credentials and stream their workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserId()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_Stream.html
   */
  public toStream() {
    return this.to('Stream');
  }

  /**
   * Grants permission to terminate WorkSpaces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html
   */
  public toTerminateWorkspaces() {
    return this.to('TerminateWorkspaces');
  }

  /**
   * Grants permission to update an Amazon Connect client add-in. Use this action to update the name and endpoint URL of an Amazon Connect client add-in
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectClientAddIn.html
   */
  public toUpdateConnectClientAddIn() {
    return this.to('UpdateConnectClientAddIn');
  }

  /**
   * Grants permission to share or unshare connection aliases with other accounts
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectionAliasPermission.html
   */
  public toUpdateConnectionAliasPermission() {
    return this.to('UpdateConnectionAliasPermission');
  }

  /**
   * Grants permission to replace rules for IP access control groups
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - workspaces:AuthorizeIpRules
   * - workspaces:RevokeIpRules
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html
   */
  public toUpdateRulesOfIpGroup() {
    return this.to('UpdateRulesOfIpGroup');
  }

  /**
   * Grants permission to update the WorkSpace images used in WorkSpace bundles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceBundle.html
   */
  public toUpdateWorkspaceBundle() {
    return this.to('UpdateWorkspaceBundle');
  }

  /**
   * Grants permission to share or unshare WorkSpace images with other accounts by specifying whether other accounts have permission to copy the image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceImagePermission.html
   */
  public toUpdateWorkspaceImagePermission() {
    return this.to('UpdateWorkspaceImagePermission');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateConnectionAlias',
      'AssociateIpGroups',
      'AssociateWorkspaceApplication',
      'AuthorizeIpRules',
      'CopyWorkspaceImage',
      'CreateConnectClientAddIn',
      'CreateConnectionAlias',
      'CreateIpGroup',
      'CreateStandbyWorkspaces',
      'CreateUpdatedWorkspaceImage',
      'CreateWorkspaceBundle',
      'CreateWorkspaceImage',
      'CreateWorkspaces',
      'DeleteClientBranding',
      'DeleteConnectClientAddIn',
      'DeleteConnectionAlias',
      'DeleteIpGroup',
      'DeleteWorkspaceBundle',
      'DeleteWorkspaceImage',
      'DeployWorkspaceApplications',
      'DeregisterWorkspaceDirectory',
      'DisassociateConnectionAlias',
      'DisassociateIpGroups',
      'DisassociateWorkspaceApplication',
      'ImportClientBranding',
      'ImportWorkspaceImage',
      'MigrateWorkspace',
      'ModifyAccount',
      'ModifyCertificateBasedAuthProperties',
      'ModifyClientProperties',
      'ModifySamlProperties',
      'ModifyWorkspaceAccessProperties',
      'ModifyWorkspaceCreationProperties',
      'ModifyWorkspaceProperties',
      'ModifyWorkspaceState',
      'RebootWorkspaces',
      'RebuildWorkspaces',
      'RegisterWorkspaceDirectory',
      'RestoreWorkspace',
      'RevokeIpRules',
      'StartWorkspaces',
      'StopWorkspaces',
      'Stream',
      'TerminateWorkspaces',
      'UpdateConnectClientAddIn',
      'UpdateRulesOfIpGroup',
      'UpdateWorkspaceBundle'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    Read: [
      'DescribeAccount',
      'DescribeAccountModifications',
      'DescribeClientBranding',
      'DescribeConnectionAliasPermissions',
      'DescribeConnectionAliases',
      'DescribeIpGroups',
      'DescribeTags',
      'DescribeWorkspaceDirectories',
      'DescribeWorkspaceImagePermissions',
      'DescribeWorkspacesConnectionStatus'
    ],
    List: [
      'DescribeApplicationAssociations',
      'DescribeApplications',
      'DescribeBundleAssociations',
      'DescribeClientProperties',
      'DescribeConnectClientAddIns',
      'DescribeImageAssociations',
      'DescribeWorkspaceAssociations',
      'DescribeWorkspaceBundles',
      'DescribeWorkspaceImages',
      'DescribeWorkspaceSnapshots',
      'DescribeWorkspaces',
      'ListAvailableManagementCidrRanges'
    ],
    'Permissions management': [
      'ModifySelfservicePermissions',
      'UpdateConnectionAliasPermission',
      'UpdateWorkspaceImagePermission'
    ]
  };

  /**
   * Adds a resource of type directoryid to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/manage-workspaces-directory.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectoryid(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:directory/${ directoryId }`);
  }

  /**
   * Adds a resource of type workspacebundle to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html
   *
   * @param bundleId - Identifier for the bundleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspacebundle(bundleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspacebundle/${ bundleId }`);
  }

  /**
   * Adds a resource of type workspaceid to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp_workspace_management.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspaceid(workspaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspace/${ workspaceId }`);
  }

  /**
   * Adds a resource of type workspaceimage to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html
   *
   * @param imageId - Identifier for the imageId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspaceimage(imageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspaceimage/${ imageId }`);
  }

  /**
   * Adds a resource of type workspaceipgroup to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspaceipgroup(groupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspaceipgroup/${ groupId }`);
  }

  /**
   * Adds a resource of type connectionalias to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html
   *
   * @param connectionAliasId - Identifier for the connectionAliasId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnectionalias(connectionAliasId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connectionalias/${ connectionAliasId }`);
  }

  /**
   * Adds a resource of type workspaceapplication to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/application-bundle-management.html
   *
   * @param workSpaceApplicationId - Identifier for the workSpaceApplicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspaceapplication(workSpaceApplicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspaceapplication/${ workSpaceApplicationId }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyWorkspaceImage()
   * - .toCreateConnectionAlias()
   * - .toCreateIpGroup()
   * - .toCreateStandbyWorkspaces()
   * - .toCreateTags()
   * - .toCreateUpdatedWorkspaceImage()
   * - .toCreateWorkspaceBundle()
   * - .toCreateWorkspaceImage()
   * - .toCreateWorkspaces()
   * - .toDeleteTags()
   * - .toRegisterWorkspaceDirectory()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateWorkspaceApplication()
   * - .toDeployWorkspaceApplications()
   * - .toDescribeApplicationAssociations()
   * - .toDescribeBundleAssociations()
   * - .toDescribeImageAssociations()
   * - .toDescribeWorkspaceAssociations()
   * - .toDisassociateWorkspaceApplication()
   *
   * Applies to resource types:
   * - directoryid
   * - workspacebundle
   * - workspaceid
   * - workspaceimage
   * - workspaceipgroup
   * - connectionalias
   * - workspaceapplication
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCopyWorkspaceImage()
   * - .toCreateConnectionAlias()
   * - .toCreateIpGroup()
   * - .toCreateStandbyWorkspaces()
   * - .toCreateTags()
   * - .toCreateUpdatedWorkspaceImage()
   * - .toCreateWorkspaceBundle()
   * - .toCreateWorkspaceImage()
   * - .toCreateWorkspaces()
   * - .toDeleteTags()
   * - .toRegisterWorkspaceDirectory()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the Workspaces user
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   *
   * Applies to actions:
   * - .toStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`userId`, value, operator ?? 'StringLike');
  }
}
