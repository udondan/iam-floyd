import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [workspaces](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workspaces extends PolicyStatement {
  public servicePrefix = 'workspaces';
  protected actionList: Actions = {
    "AssociateIpGroups": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html",
      "description": "Associates the specified IP access control group with the specified directory.",
      "accessLevel": "Write"
    },
    "AuthorizeIpRules": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html",
      "description": "Adds one or more rules to the specified IP access control group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceipgroup": {
          "required": true
        }
      }
    },
    "CreateIpGroup": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html",
      "description": "Creates an IP access control group.",
      "accessLevel": "Write"
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html",
      "description": "Creates tags for a WorkSpace.",
      "accessLevel": "Tagging"
    },
    "CreateWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html",
      "description": "Creates one or more WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directoryid": {
          "required": true
        },
        "workspacebundle": {
          "required": true
        }
      }
    },
    "DeleteIpGroup": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html",
      "description": "Deletes the specified IP access control group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceipgroup": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html",
      "description": "Deletes tags from a Workspace.",
      "accessLevel": "Write"
    },
    "DeleteWorkspaceImage": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html",
      "description": "Deletes the specified workspace image.",
      "accessLevel": "Write"
    },
    "DescribeAccount": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html",
      "description": "Retrieves a list that describes the configuration of bring your own license (BYOL) for the specified account.",
      "accessLevel": "List"
    },
    "DescribeAccountModifications": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html",
      "description": "Retrieves a list that describes modifications to the configuration of bring your own license (BYOL) for the specified account.",
      "accessLevel": "List"
    },
    "DescribeClientProperties": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html",
      "description": "Describe client properties about the specified resources.",
      "accessLevel": "List",
      "resourceTypes": {
        "directoryid": {
          "required": true
        }
      }
    },
    "DescribeIpGroups": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html",
      "description": "Retrieves information about the IP access control groups of your account in the region.",
      "accessLevel": "List",
      "resourceTypes": {
        "workspaceipgroup": {
          "required": true
        }
      }
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html",
      "description": "Describes tags for a WorkSpace.",
      "accessLevel": "List"
    },
    "DescribeWorkspaceBundles": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html",
      "description": "Obtains information about the WorkSpace bundles that are available to your account in the specified region.",
      "accessLevel": "List",
      "resourceTypes": {
        "workspacebundle": {
          "required": true
        }
      }
    },
    "DescribeWorkspaceDirectories": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html",
      "description": "Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account.",
      "accessLevel": "List"
    },
    "DescribeWorkspaceImages": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html",
      "description": "Retrieves a list that describes one or more specified images.",
      "accessLevel": "List"
    },
    "DescribeWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html",
      "description": "Obtains information about the specified WorkSpaces.",
      "accessLevel": "List"
    },
    "DescribeWorkspacesConnectionStatus": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html",
      "description": "Describes the connection status of a specified WorkSpace.",
      "accessLevel": "Read"
    },
    "DisassociateIpGroups": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html",
      "description": "Disassociates the specified IP access control group from the specified directory.",
      "accessLevel": "Write"
    },
    "ImportWorkspaceImage": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html",
      "description": "Import a licensed EC2 image to into Amazon WorkSpaces.",
      "accessLevel": "Write"
    },
    "ListAvailableManagementCidrRanges": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html",
      "description": "List available CIDR ranges for a CIDR range constraint.",
      "accessLevel": "List"
    },
    "ModifyAccount": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html",
      "description": "Modify the configuration of bring your own license (BYOL) for the specified account.",
      "accessLevel": "Write"
    },
    "ModifyClientProperties": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html",
      "description": "Modify the client properties of a specified resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directoryid": {
          "required": true
        }
      }
    },
    "ModifyWorkspaceProperties": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html",
      "description": "Modifies the WorkSpace properties, including the running mode and AutoStop time.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "ModifyWorkspaceState": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html",
      "description": "Modify the state of specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "RebootWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html",
      "description": "Reboots the specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "RebuildWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html",
      "description": "Rebuilds the specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "RevokeIpRules": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html",
      "description": "Removes one or more rules from the specified IP access control group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceipgroup": {
          "required": true
        }
      }
    },
    "StartWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html",
      "description": "Starts the specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "StopWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html",
      "description": "Stops the specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "TerminateWorkspaces": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html",
      "description": "Terminates the specified WorkSpaces.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceid": {
          "required": true
        }
      }
    },
    "UpdateRulesOfIpGroup": {
      "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html",
      "description": "Replaces the current rules of the specified IP access control group with the specified rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workspaceipgroup": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "workspacebundle": {
      "name": "workspacebundle",
      "url": "https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html",
      "arn": "arn:${Partition}:workspaces:${Region}:${Account}:workspacebundle/${BundleId}",
      "conditionKeys": []
    },
    "workspaceipgroup": {
      "name": "workspaceipgroup",
      "url": "https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html",
      "arn": "arn:${Partition}:workspaces:${Region}:${Account}:workspaceipgroup/${GroupId}",
      "conditionKeys": []
    },
    "directoryid": {
      "name": "directoryid",
      "url": "https://docs.aws.amazon.com/workspaces/latest/adminguide/manage-workspaces-directory.html",
      "arn": "arn:${Partition}:workspaces:${Region}:${Account}:directory/${DirectoryId}",
      "conditionKeys": []
    },
    "workspaceid": {
      "name": "workspaceid",
      "url": "https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp_workspace_management.html",
      "arn": "arn:${Partition}:workspaces:${Region}:${Account}:workspace/${WorkspaceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [workspaces](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html).
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
    this.to('workspaces:AssociateIpGroups');
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
    this.to('workspaces:AuthorizeIpRules');
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
    this.to('workspaces:CreateIpGroup');
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
    this.to('workspaces:CreateTags');
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
    this.to('workspaces:CreateWorkspaces');
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
    this.to('workspaces:DeleteIpGroup');
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
    this.to('workspaces:DeleteTags');
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
    this.to('workspaces:DeleteWorkspaceImage');
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
    this.to('workspaces:DescribeAccount');
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
    this.to('workspaces:DescribeAccountModifications');
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
    this.to('workspaces:DescribeClientProperties');
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
    this.to('workspaces:DescribeIpGroups');
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
    this.to('workspaces:DescribeTags');
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
    this.to('workspaces:DescribeWorkspaceBundles');
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
    this.to('workspaces:DescribeWorkspaceDirectories');
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
    this.to('workspaces:DescribeWorkspaceImages');
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
    this.to('workspaces:DescribeWorkspaces');
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
    this.to('workspaces:DescribeWorkspacesConnectionStatus');
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
    this.to('workspaces:DisassociateIpGroups');
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
    this.to('workspaces:ImportWorkspaceImage');
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
    this.to('workspaces:ListAvailableManagementCidrRanges');
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
    this.to('workspaces:ModifyAccount');
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
    this.to('workspaces:ModifyClientProperties');
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
    this.to('workspaces:ModifyWorkspaceProperties');
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
    this.to('workspaces:ModifyWorkspaceState');
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
    this.to('workspaces:RebootWorkspaces');
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
    this.to('workspaces:RebuildWorkspaces');
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
    this.to('workspaces:RevokeIpRules');
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
    this.to('workspaces:StartWorkspaces');
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
    this.to('workspaces:StopWorkspaces');
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
    this.to('workspaces:TerminateWorkspaces');
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
    this.to('workspaces:UpdateRulesOfIpGroup');
    return this;
  }

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
