import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates the specified IP access control group with the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html
   */
  public toAssociateIpGroups() {
    this.to('AssociateIpGroups');
    return this;
  }

  /**
   * Adds one or more rules to the specified IP access control group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html
   */
  public toAuthorizeIpRules() {
    this.to('AuthorizeIpRules');
    return this;
  }

  /**
   * Creates an IP access control group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html
   */
  public toCreateIpGroup() {
    this.to('CreateIpGroup');
    return this;
  }

  /**
   * Creates tags for a WorkSpace.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html
   */
  public toCreateTags() {
    this.to('CreateTags');
    return this;
  }

  /**
   * Creates one or more WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html
   */
  public toCreateWorkspaces() {
    this.to('CreateWorkspaces');
    return this;
  }

  /**
   * Deletes the specified IP access control group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html
   */
  public toDeleteIpGroup() {
    this.to('DeleteIpGroup');
    return this;
  }

  /**
   * Deletes tags from a Workspace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.to('DeleteTags');
    return this;
  }

  /**
   * Deletes the specified workspace image.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html
   */
  public toDeleteWorkspaceImage() {
    this.to('DeleteWorkspaceImage');
    return this;
  }

  /**
   * Retrieves a list that describes the configuration of bring your own license (BYOL) for the specified account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html
   */
  public toDescribeAccount() {
    this.to('DescribeAccount');
    return this;
  }

  /**
   * Retrieves a list that describes modifications to the configuration of bring your own license (BYOL) for the specified account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html
   */
  public toDescribeAccountModifications() {
    this.to('DescribeAccountModifications');
    return this;
  }

  /**
   * Describe client properties about the specified resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html
   */
  public toDescribeClientProperties() {
    this.to('DescribeClientProperties');
    return this;
  }

  /**
   * Retrieves information about the IP access control groups of your account in the region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html
   */
  public toDescribeIpGroups() {
    this.to('DescribeIpGroups');
    return this;
  }

  /**
   * Describes tags for a WorkSpace.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('DescribeTags');
    return this;
  }

  /**
   * Obtains information about the WorkSpace bundles that are available to your account in the specified region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html
   */
  public toDescribeWorkspaceBundles() {
    this.to('DescribeWorkspaceBundles');
    return this;
  }

  /**
   * Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html
   */
  public toDescribeWorkspaceDirectories() {
    this.to('DescribeWorkspaceDirectories');
    return this;
  }

  /**
   * Retrieves a list that describes one or more specified images.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html
   */
  public toDescribeWorkspaceImages() {
    this.to('DescribeWorkspaceImages');
    return this;
  }

  /**
   * Obtains information about the specified WorkSpaces.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html
   */
  public toDescribeWorkspaces() {
    this.to('DescribeWorkspaces');
    return this;
  }

  /**
   * Describes the connection status of a specified WorkSpace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html
   */
  public toDescribeWorkspacesConnectionStatus() {
    this.to('DescribeWorkspacesConnectionStatus');
    return this;
  }

  /**
   * Disassociates the specified IP access control group from the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html
   */
  public toDisassociateIpGroups() {
    this.to('DisassociateIpGroups');
    return this;
  }

  /**
   * Import a licensed EC2 image to into Amazon WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html
   */
  public toImportWorkspaceImage() {
    this.to('ImportWorkspaceImage');
    return this;
  }

  /**
   * List available CIDR ranges for a CIDR range constraint.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html
   */
  public toListAvailableManagementCidrRanges() {
    this.to('ListAvailableManagementCidrRanges');
    return this;
  }

  /**
   * Modify the configuration of bring your own license (BYOL) for the specified account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html
   */
  public toModifyAccount() {
    this.to('ModifyAccount');
    return this;
  }

  /**
   * Modify the client properties of a specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html
   */
  public toModifyClientProperties() {
    this.to('ModifyClientProperties');
    return this;
  }

  /**
   * Modifies the WorkSpace properties, including the running mode and AutoStop time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html
   */
  public toModifyWorkspaceProperties() {
    this.to('ModifyWorkspaceProperties');
    return this;
  }

  /**
   * Modify the state of specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html
   */
  public toModifyWorkspaceState() {
    this.to('ModifyWorkspaceState');
    return this;
  }

  /**
   * Reboots the specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html
   */
  public toRebootWorkspaces() {
    this.to('RebootWorkspaces');
    return this;
  }

  /**
   * Rebuilds the specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html
   */
  public toRebuildWorkspaces() {
    this.to('RebuildWorkspaces');
    return this;
  }

  /**
   * Removes one or more rules from the specified IP access control group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html
   */
  public toRevokeIpRules() {
    this.to('RevokeIpRules');
    return this;
  }

  /**
   * Starts the specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html
   */
  public toStartWorkspaces() {
    this.to('StartWorkspaces');
    return this;
  }

  /**
   * Stops the specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html
   */
  public toStopWorkspaces() {
    this.to('StopWorkspaces');
    return this;
  }

  /**
   * Terminates the specified WorkSpaces.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html
   */
  public toTerminateWorkspaces() {
    this.to('TerminateWorkspaces');
    return this;
  }

  /**
   * Replaces the current rules of the specified IP access control group with the specified rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html
   */
  public toUpdateRulesOfIpGroup() {
    this.to('UpdateRulesOfIpGroup');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateIpGroups",
      "AuthorizeIpRules",
      "CreateIpGroup",
      "CreateWorkspaces",
      "DeleteIpGroup",
      "DeleteTags",
      "DeleteWorkspaceImage",
      "DisassociateIpGroups",
      "ImportWorkspaceImage",
      "ModifyAccount",
      "ModifyClientProperties",
      "ModifyWorkspaceProperties",
      "ModifyWorkspaceState",
      "RebootWorkspaces",
      "RebuildWorkspaces",
      "RevokeIpRules",
      "StartWorkspaces",
      "StopWorkspaces",
      "TerminateWorkspaces",
      "UpdateRulesOfIpGroup"
    ],
    "Tagging": [
      "CreateTags"
    ],
    "List": [
      "DescribeAccount",
      "DescribeAccountModifications",
      "DescribeClientProperties",
      "DescribeIpGroups",
      "DescribeTags",
      "DescribeWorkspaceBundles",
      "DescribeWorkspaceDirectories",
      "DescribeWorkspaceImages",
      "DescribeWorkspaces",
      "ListAvailableManagementCidrRanges"
    ],
    "Read": [
      "DescribeWorkspacesConnectionStatus"
    ]
  };

  /**
   * Adds a resource of type workspacebundle to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html
   *
   * @param bundleId - Identifier for the bundleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspacebundle(bundleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:workspaces:${Region}:${Account}:workspacebundle/${BundleId}';
    arn = arn.replace('${BundleId}', bundleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workspaceipgroup to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspaceipgroup(groupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:workspaces:${Region}:${Account}:workspaceipgroup/${GroupId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type directoryid to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/manage-workspaces-directory.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDirectoryid(directoryId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:workspaces:${Region}:${Account}:directory/${DirectoryId}';
    arn = arn.replace('${DirectoryId}', directoryId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workspaceid to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp_workspace_management.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspaceid(workspaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:workspaces:${Region}:${Account}:workspace/${WorkspaceId}';
    arn = arn.replace('${WorkspaceId}', workspaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
