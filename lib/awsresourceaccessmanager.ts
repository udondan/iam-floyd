import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service ram
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourceaccessmanager.html
 */
export class Ram extends PolicyStatement {
  public servicePrefix = 'ram';
  public actions : Actions = {
    "AcceptResourceShareInvitation": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html",
      "description": "Accept the specified resource share invitation",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share-invitation": {
          "required": true
        }
      },
      "conditions": [
        "ram:ShareOwnerAccountId"
      ]
    },
    "AssociateResourceShare": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html",
      "description": "Associates resource(s) and/or principal(s) to a resource share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:ResourceShareName",
        "ram:AllowsExternalPrincipals",
        "ram:Principal",
        "ram:RequestedResourceType",
        "ram:ResourceArn"
      ]
    },
    "AssociateResourceSharePermission": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html",
      "description": "Associate a Permission with a Resource Share",
      "accessLevel": "Write",
      "resourceTypes": {
        "permission": {
          "required": true
        },
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:AllowsExternalPrincipals",
        "ram:ResourceShareName",
        "ram:PermissionArn"
      ]
    },
    "CreateResourceShare": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html",
      "description": "Create resource share with provided resource(s) and/or principal(s)",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "ram:RequestedResourceType",
        "ram:ResourceArn",
        "ram:RequestedAllowsExternalPrincipals",
        "ram:Principal"
      ]
    },
    "DeleteResourceShare": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html",
      "description": "Delete resource share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:ResourceShareName",
        "ram:AllowsExternalPrincipals"
      ]
    },
    "DisassociateResourceShare": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html",
      "description": "Disassociates resource(s) and/or principal(s) from a resource share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:ResourceShareName",
        "ram:AllowsExternalPrincipals",
        "ram:Principal",
        "ram:RequestedResourceType",
        "ram:ResourceArn"
      ]
    },
    "DisassociateResourceSharePermission": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html",
      "description": "Disassociate a Permission from a Resource Share",
      "accessLevel": "Write",
      "resourceTypes": {
        "permission": {
          "required": true
        },
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:AllowsExternalPrincipals",
        "ram:ResourceShareName",
        "ram:PermissionArn"
      ]
    },
    "EnableSharingWithAwsOrganization": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_EnableSharingWithAwsOrganization.html",
      "description": "Grants permission to access customer's organization and create a SLR in the customer's account",
      "accessLevel": "Write"
    },
    "GetPermission": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html",
      "description": "Gets the contents of an AWS RAM permission",
      "accessLevel": "Read",
      "resourceTypes": {
        "permission": {
          "required": true
        }
      },
      "conditions": [
        "ram:PermissionArn"
      ]
    },
    "GetResourcePolicies": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html",
      "description": "Gets the policies for the specified resources that you own and have shared",
      "accessLevel": "Read"
    },
    "GetResourceShareAssociations": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html",
      "description": "Get a set of resource share associations from a provided list or with a specified status of the specified type",
      "accessLevel": "Read"
    },
    "GetResourceShareInvitations": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html",
      "description": "Get resource share invitations by the specified invitation arn or those for the resource share",
      "accessLevel": "Read"
    },
    "GetResourceShares": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html",
      "description": "Get a set of resource shares from a provided list or with a specified status",
      "accessLevel": "Read"
    },
    "ListPendingInvitationResources": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html",
      "description": "Lists the resources in a resource share that is shared with you but that the invitation is still pending for",
      "accessLevel": "Read",
      "resourceTypes": {
        "resource-share-invitation": {
          "required": true
        }
      }
    },
    "ListPermissions": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html",
      "description": "Lists the AWS RAM permissions",
      "accessLevel": "List"
    },
    "ListPrincipals": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html",
      "description": "Lists the principals that you have shared resources with or that have shared resources with you",
      "accessLevel": "List"
    },
    "ListResourceSharePermissions": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html",
      "description": "List the Permissions associated with a Resource Share",
      "accessLevel": "List",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:ResourceShareName",
        "ram:AllowsExternalPrincipals"
      ]
    },
    "ListResources": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html",
      "description": "Lists the resources that you added to a resource shares or the resources that are shared with you",
      "accessLevel": "List"
    },
    "RejectResourceShareInvitation": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html",
      "description": "Reject the specified resource share invitation",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share-invitation": {
          "required": true
        }
      },
      "conditions": [
        "ram:ShareOwnerAccountId"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html",
      "description": "Tag the specified resources share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html",
      "description": "Untag the specified resource share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateResourceShare": {
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html",
      "description": "Update attributes of the resource share",
      "accessLevel": "Write",
      "resourceTypes": {
        "resource-share": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ram:ResourceShareName",
        "ram:AllowsExternalPrincipals",
        "ram:RequestedAllowsExternalPrincipals"
      ]
    }
  };
  public resourceTypes : ResourceTypes = {
    "resource-share": {
      "name": "resource-share",
      "arn": "arn:${Partition}:ram:${Region}:${Account}:resource-share/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ram:AllowsExternalPrincipals",
        "ram:ResourceShareName"
      ]
    },
    "resource-share-invitation": {
      "name": "resource-share-invitation",
      "arn": "arn:${Partition}:ram:${Region}:${Account}:resource-share-invitation/${ResourcePath}",
      "conditionKeys": []
    },
    "permission": {
      "name": "permission",
      "arn": "arn:${Partition}:ram:${Region}:${Account}:permission/${ResourcePath}",
      "conditionKeys": [
        "ram:PermissionArn"
      ]
    }
  };

  /**
   * Accept the specified resource share invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html
   */
  public acceptResourceShareInvitation () {
    this.add('ram:AcceptResourceShareInvitation');
    return this;
  }

  /**
   * Associates resource(s) and/or principal(s) to a resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html
   */
  public associateResourceShare () {
    this.add('ram:AssociateResourceShare');
    return this;
  }

  /**
   * Associate a Permission with a Resource Share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html
   */
  public associateResourceSharePermission () {
    this.add('ram:AssociateResourceSharePermission');
    return this;
  }

  /**
   * Create resource share with provided resource(s) and/or principal(s)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html
   */
  public createResourceShare () {
    this.add('ram:CreateResourceShare');
    return this;
  }

  /**
   * Delete resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html
   */
  public deleteResourceShare () {
    this.add('ram:DeleteResourceShare');
    return this;
  }

  /**
   * Disassociates resource(s) and/or principal(s) from a resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html
   */
  public disassociateResourceShare () {
    this.add('ram:DisassociateResourceShare');
    return this;
  }

  /**
   * Disassociate a Permission from a Resource Share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html
   */
  public disassociateResourceSharePermission () {
    this.add('ram:DisassociateResourceSharePermission');
    return this;
  }

  /**
   * Grants permission to access customer's organization and create a SLR in the customer's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_EnableSharingWithAwsOrganization.html
   */
  public enableSharingWithAwsOrganization () {
    this.add('ram:EnableSharingWithAwsOrganization');
    return this;
  }

  /**
   * Gets the contents of an AWS RAM permission
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html
   */
  public getPermission () {
    this.add('ram:GetPermission');
    return this;
  }

  /**
   * Gets the policies for the specified resources that you own and have shared
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html
   */
  public getResourcePolicies () {
    this.add('ram:GetResourcePolicies');
    return this;
  }

  /**
   * Get a set of resource share associations from a provided list or with a specified status of the specified type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html
   */
  public getResourceShareAssociations () {
    this.add('ram:GetResourceShareAssociations');
    return this;
  }

  /**
   * Get resource share invitations by the specified invitation arn or those for the resource share
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html
   */
  public getResourceShareInvitations () {
    this.add('ram:GetResourceShareInvitations');
    return this;
  }

  /**
   * Get a set of resource shares from a provided list or with a specified status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html
   */
  public getResourceShares () {
    this.add('ram:GetResourceShares');
    return this;
  }

  /**
   * Lists the resources in a resource share that is shared with you but that the invitation is still pending for
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html
   */
  public listPendingInvitationResources () {
    this.add('ram:ListPendingInvitationResources');
    return this;
  }

  /**
   * Lists the AWS RAM permissions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html
   */
  public listPermissions () {
    this.add('ram:ListPermissions');
    return this;
  }

  /**
   * Lists the principals that you have shared resources with or that have shared resources with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html
   */
  public listPrincipals () {
    this.add('ram:ListPrincipals');
    return this;
  }

  /**
   * List the Permissions associated with a Resource Share
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html
   */
  public listResourceSharePermissions () {
    this.add('ram:ListResourceSharePermissions');
    return this;
  }

  /**
   * Lists the resources that you added to a resource shares or the resources that are shared with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html
   */
  public listResources () {
    this.add('ram:ListResources');
    return this;
  }

  /**
   * Reject the specified resource share invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html
   */
  public rejectResourceShareInvitation () {
    this.add('ram:RejectResourceShareInvitation');
    return this;
  }

  /**
   * Tag the specified resources share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('ram:TagResource');
    return this;
  }

  /**
   * Untag the specified resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('ram:UntagResource');
    return this;
  }

  /**
   * Update attributes of the resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html
   */
  public updateResourceShare () {
    this.add('ram:UpdateResourceShare');
    return this;
  }
}
