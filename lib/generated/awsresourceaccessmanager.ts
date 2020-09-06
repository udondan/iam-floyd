import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ram](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourceaccessmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ram extends PolicyStatement {
  public servicePrefix = 'ram';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
    "resource-share": {
      "name": "resource-share",
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShare.html",
      "arn": "arn:${Partition}:ram:${Region}:${Account}:resource-share/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ram:AllowsExternalPrincipals",
        "ram:ResourceShareName"
      ]
    },
    "resource-share-invitation": {
      "name": "resource-share-invitation",
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShareInvitation.html",
      "arn": "arn:${Partition}:ram:${Region}:${Account}:resource-share-invitation/${ResourcePath}",
      "conditionKeys": []
    },
    "permission": {
      "name": "permission",
      "url": "https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html",
      "arn": "arn:${Partition}:ram::${Account}:permission/${ResourcePath}",
      "conditionKeys": [
        "ram:PermissionArn"
      ]
    }
  };

  /**
   * Statement provider for service [ram](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourceaccessmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Accept the specified resource share invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html
   */
  public toAcceptResourceShareInvitation() {
    this.add('ram:AcceptResourceShareInvitation');
    return this;
  }

  /**
   * Associates resource(s) and/or principal(s) to a resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifPrincipal()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html
   */
  public toAssociateResourceShare() {
    this.add('ram:AssociateResourceShare');
    return this;
  }

  /**
   * Associate a Permission with a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   * - .ifPermissionArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html
   */
  public toAssociateResourceSharePermission() {
    this.add('ram:AssociateResourceSharePermission');
    return this;
  }

  /**
   * Create resource share with provided resource(s) and/or principal(s)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   * - .ifRequestedAllowsExternalPrincipals()
   * - .ifPrincipal()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html
   */
  public toCreateResourceShare() {
    this.add('ram:CreateResourceShare');
    return this;
  }

  /**
   * Delete resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html
   */
  public toDeleteResourceShare() {
    this.add('ram:DeleteResourceShare');
    return this;
  }

  /**
   * Disassociates resource(s) and/or principal(s) from a resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifPrincipal()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html
   */
  public toDisassociateResourceShare() {
    this.add('ram:DisassociateResourceShare');
    return this;
  }

  /**
   * Disassociate a Permission from a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   * - .ifPermissionArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html
   */
  public toDisassociateResourceSharePermission() {
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
  public toEnableSharingWithAwsOrganization() {
    this.add('ram:EnableSharingWithAwsOrganization');
    return this;
  }

  /**
   * Gets the contents of an AWS RAM permission
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPermissionArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html
   */
  public toGetPermission() {
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
  public toGetResourcePolicies() {
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
  public toGetResourceShareAssociations() {
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
  public toGetResourceShareInvitations() {
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
  public toGetResourceShares() {
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
  public toListPendingInvitationResources() {
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
  public toListPermissions() {
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
  public toListPrincipals() {
    this.add('ram:ListPrincipals');
    return this;
  }

  /**
   * List the Permissions associated with a Resource Share
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html
   */
  public toListResourceSharePermissions() {
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
  public toListResources() {
    this.add('ram:ListResources');
    return this;
  }

  /**
   * Reject the specified resource share invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html
   */
  public toRejectResourceShareInvitation() {
    this.add('ram:RejectResourceShareInvitation');
    return this;
  }

  /**
   * Tag the specified resources share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('ram:TagResource');
    return this;
  }

  /**
   * Untag the specified resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('ram:UntagResource');
    return this;
  }

  /**
   * Update attributes of the resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifRequestedAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html
   */
  public toUpdateResourceShare() {
    this.add('ram:UpdateResourceShare');
    return this;
  }

  /**
   * Adds a resource of type resource-share to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShare.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   */
  public onResourceShare(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram:${Region}:${Account}:resource-share/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resource-share-invitation to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShareInvitation.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourceShareInvitation(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram:${Region}:${Account}:resource-share-invitation/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type permission to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifPermissionArn()
   */
  public onPermission(resourcePath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram::${Account}:permission/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Indicates that the action can only be performed on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toAssociateResourceSharePermission()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toDisassociateResourceSharePermission()
   * - .toListResourceSharePermissions()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAllowsExternalPrincipals(value?: boolean) {
    return this.if(`ram:AllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Indicates that the action can only be performed on a resource using the specified Permission ARN.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceSharePermission()
   * - .toDisassociateResourceSharePermission()
   * - .toGetPermission()
   *
   * Applies to resource types:
   * - permission
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifPermissionArn(value: string | string[], operator?: string) {
    return this.if(`ram:PermissionArn`, value, operator || 'ArnEquals');
  }

  /**
   * Principals with the specified format can be associated to or disassociated from a resource share
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipal(value: string | string[], operator?: string) {
    return this.if(`ram:Principal`, value, operator || 'StringLike');
  }

  /**
   * The request must have the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toCreateResourceShare()
   * - .toUpdateResourceShare()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestedAllowsExternalPrincipals(value?: boolean) {
    return this.if(`ram:RequestedAllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Indicates that the action can only be performed on the specified resource type
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestedResourceType(value: string | string[], operator?: string) {
    return this.if(`ram:RequestedResourceType`, value, operator || 'StringLike');
  }

  /**
   * Indicates that the action can only be performed on a resource with the specified ARN.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifResourceArn(value: string | string[], operator?: string) {
    return this.if(`ram:ResourceArn`, value, operator || 'ArnEquals');
  }

  /**
   * Indicates that the action can only be performed on a resource share with the specified name.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toAssociateResourceSharePermission()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toDisassociateResourceSharePermission()
   * - .toListResourceSharePermissions()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceShareName(value: string | string[], operator?: string) {
    return this.if(`ram:ResourceShareName`, value, operator || 'StringLike');
  }

  /**
   * Indicates that the action can only be performed on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner’s account ID.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAcceptResourceShareInvitation()
   * - .toRejectResourceShareInvitation()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifShareOwnerAccountId(value: string | string[], operator?: string) {
    return this.if(`ram:ShareOwnerAccountId`, value, operator || 'StringLike');
  }
}
