import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [quicksight](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonquicksight.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Quicksight extends PolicyStatement {
  public servicePrefix = 'quicksight';
  protected actionList: Actions = {
    "CreateAdmin": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "CreateAdmin enables the user to provision Amazon QuickSight administrators, authors, and readers.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateDashboard": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDashboard.html",
      "description": "Creates a dashboard from a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html",
      "description": "Create a QuickSight group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateGroupMembership": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html",
      "description": "Add a QuickSight user to a QuickSight group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true,
          "conditions": [
            "quicksight:UserName"
          ]
        }
      }
    },
    "CreateIAMPolicyAssignment": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html",
      "description": "Creates an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "CreateReader": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "CreateReader enables the user to provision Amazon QuickSight readers.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateTemplate": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html",
      "description": "Creates a template from an existing QuickSight analysis or template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTemplateAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html",
      "description": "Creates a template alias for a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "CreateTheme": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTheme.html",
      "description": "Creates a QuickSight theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateThemeAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html",
      "description": "Creates a theme alias for a theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "CreateUser enables the user to provision Amazon QuickSight authors and readers.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteDashboard": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html",
      "description": "Deletes a dashboard",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html",
      "description": "Remove a user group from QuickSight.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DeleteGroupMembership": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html",
      "description": "Remove a user from a group so that he/she is no longer a member of the group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true,
          "conditions": [
            "quicksight:UserName"
          ]
        }
      }
    },
    "DeleteIAMPolicyAssignment": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html",
      "description": "Update an existing assignment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "DeleteTemplate": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html",
      "description": "Deletes a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "DeleteTemplateAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html",
      "description": "Deletes the item that the specified template alias points to",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "DeleteTheme": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html",
      "description": "Deletes a theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "DeleteThemeAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html",
      "description": "Deletes the item that the specified theme alias points to",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html",
      "description": "Delete the QuickSight user that is associated with the identity of the IAM user/role making the call. The IAM user is not deleted as a result of this call.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteUserByPrincipalId": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html",
      "description": "Deletes a user identified by its principal ID.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DescribeDashboard": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html",
      "description": "Provides a summary for a dashboard",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DescribeDashboardPermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html",
      "description": "Describes read and write permissions for a dashboard",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DescribeGroup": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html",
      "description": "Return a QuickSight group’s description and ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DescribeIAMPolicyAssignment": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html",
      "description": "Describe an existing assignment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "DescribeTemplate": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html",
      "description": "Describes a template's metadata",
      "accessLevel": "Read",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "DescribeTemplateAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html",
      "description": "Describes the template alias for a template",
      "accessLevel": "Read",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "DescribeTemplatePermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html",
      "description": "Describes read and write permissions on a template",
      "accessLevel": "Read",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "DescribeTheme": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html",
      "description": "Describes a theme's metadata",
      "accessLevel": "Read",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "DescribeThemeAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html",
      "description": "Describes the theme alias for a theme",
      "accessLevel": "Read",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "DescribeThemePermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html",
      "description": "Describes read and write permissions on a theme",
      "accessLevel": "Read",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html",
      "description": "Return information about a user, given the user name.",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetAuthCode": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "Return an auth code representing a QuickSight user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetDashboardEmbedUrl": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html",
      "description": "Return a QuickSight dashboard embedding URL.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "GetGroupMapping": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "GetGroupMapping is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight.",
      "accessLevel": "Read"
    },
    "ListDashboardVersions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html",
      "description": "Lists all the versions of the dashboards in the QuickSight subscription",
      "accessLevel": "List",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "ListDashboards": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html",
      "description": "Lists dashboards in an AWS account",
      "accessLevel": "List",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "ListGroupMemberships": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html",
      "description": "Return a list of member users in a group.",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html",
      "description": "Get a list of all user groups in QuickSight.",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListIAMPolicyAssignments": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html",
      "description": "List all assignments in the current Amazon QuickSight account.",
      "accessLevel": "List",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "ListIAMPolicyAssignmentsForUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html",
      "description": "List all assignments assigned to a user and the groups it belongs",
      "accessLevel": "List",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html",
      "description": "List tags of a QuickSight resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "dashboard": {
          "required": false
        },
        "template": {
          "required": false
        },
        "theme": {
          "required": false
        }
      }
    },
    "ListTemplateAliases": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html",
      "description": "Lists all the aliases of a template",
      "accessLevel": "List",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "ListTemplateVersions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html",
      "description": "Lists all the versions of the templates in the current Amazon QuickSight account",
      "accessLevel": "List",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "ListTemplates": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html",
      "description": "Lists all the templates in the current Amazon QuickSight account",
      "accessLevel": "List",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "ListThemeAliases": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html",
      "description": "Lists all the aliases of a theme",
      "accessLevel": "List",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "ListThemeVersions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html",
      "description": "Lists all the versions of a theme",
      "accessLevel": "List",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "ListThemes": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html",
      "description": "Lists all the themes in the current Amazon QuickSight account",
      "accessLevel": "List",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "ListUserGroups": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html",
      "description": "Return a list of groups that a given user is a member of.",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html",
      "description": "Return a list of all of the QuickSight users belonging to this account.",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "RegisterUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html",
      "description": "Create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true,
          "conditions": [
            "quicksight:IamArn",
            "quicksight:SessionName"
          ]
        }
      }
    },
    "SearchDirectoryGroups": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.",
      "accessLevel": "Write"
    },
    "SetGroupMapping": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.",
      "accessLevel": "Write"
    },
    "Subscribe": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "Subscribe enables the user to subscribe to Amazon QuickSight. Enabling this action also allows the user to upgrade the subscription to Enterprise edition.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagResource.html",
      "description": "Add tags to a QuickSight resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dashboard": {
          "required": false
        },
        "template": {
          "required": false
        },
        "theme": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "Unsubscribe": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html",
      "description": "Unsubscribe enables the user to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight.",
      "accessLevel": "Write"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UntagResource.html",
      "description": "Remove tags from a QuickSight resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dashboard": {
          "required": false
        },
        "template": {
          "required": false
        },
        "theme": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDashboard": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html",
      "description": "Updates a dashboard in an AWS account",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "UpdateDashboardPermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html",
      "description": "Updates read and write permissions on a dashboard",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "UpdateDashboardPublishedVersion": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html",
      "description": "Updates the published version of a dashboard",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html",
      "description": "Change group description.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateIAMPolicyAssignment": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html",
      "description": "Update an existing assignment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assignment": {
          "required": true
        }
      }
    },
    "UpdateTemplate": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html",
      "description": "Updates a template from an existing Amazon QuickSight analysis or another template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "UpdateTemplateAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html",
      "description": "Updates the template alias of a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "UpdateTemplatePermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html",
      "description": "Updates the resource permissions for a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "template": {
          "required": true
        }
      }
    },
    "UpdateTheme": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html",
      "description": "Updates a theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "UpdateThemeAlias": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html",
      "description": "Updates the theme alias of a theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "UpdateThemePermissions": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html",
      "description": "Updates the resource permissions for a theme",
      "accessLevel": "Write",
      "resourceTypes": {
        "theme": {
          "required": true
        }
      }
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html",
      "description": "Updates an Amazon QuickSight user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_User.html",
      "arn": "arn:${Partition}:quicksight:${Region}:${Account}:user/${ResourceId}",
      "conditionKeys": []
    },
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Group.html",
      "arn": "arn:${Partition}:quicksight:${Region}:${Account}:group/${ResourceId}",
      "conditionKeys": []
    },
    "dashboard": {
      "name": "dashboard",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Dashboard.html",
      "arn": "arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "template": {
      "name": "template",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Template.html",
      "arn": "arn:${Partition}:quicksight:${Region}:${Account}:template/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "theme": {
      "name": "theme",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Theme.html",
      "arn": "arn:${Partition}:quicksight:${Region}:${Account}:theme/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "assignment": {
      "name": "assignment",
      "url": "https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IAMPolicyAssignment.html",
      "arn": "arn:${Partition}:quicksight::${Account}:assignment/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [quicksight](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonquicksight.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * CreateAdmin enables the user to provision Amazon QuickSight administrators, authors, and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public createAdmin() {
    this.add('quicksight:CreateAdmin');
    return this;
  }

  /**
   * Creates a dashboard from a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDashboard.html
   */
  public createDashboard() {
    this.add('quicksight:CreateDashboard');
    return this;
  }

  /**
   * Create a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html
   */
  public createGroup() {
    this.add('quicksight:CreateGroup');
    return this;
  }

  /**
   * Add a QuickSight user to a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html
   */
  public createGroupMembership() {
    this.add('quicksight:CreateGroupMembership');
    return this;
  }

  /**
   * Creates an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html
   */
  public createIAMPolicyAssignment() {
    this.add('quicksight:CreateIAMPolicyAssignment');
    return this;
  }

  /**
   * CreateReader enables the user to provision Amazon QuickSight readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public createReader() {
    this.add('quicksight:CreateReader');
    return this;
  }

  /**
   * Creates a template from an existing QuickSight analysis or template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html
   */
  public createTemplate() {
    this.add('quicksight:CreateTemplate');
    return this;
  }

  /**
   * Creates a template alias for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html
   */
  public createTemplateAlias() {
    this.add('quicksight:CreateTemplateAlias');
    return this;
  }

  /**
   * Creates a QuickSight theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTheme.html
   */
  public createTheme() {
    this.add('quicksight:CreateTheme');
    return this;
  }

  /**
   * Creates a theme alias for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html
   */
  public createThemeAlias() {
    this.add('quicksight:CreateThemeAlias');
    return this;
  }

  /**
   * CreateUser enables the user to provision Amazon QuickSight authors and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public createUser() {
    this.add('quicksight:CreateUser');
    return this;
  }

  /**
   * Deletes a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html
   */
  public deleteDashboard() {
    this.add('quicksight:DeleteDashboard');
    return this;
  }

  /**
   * Remove a user group from QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html
   */
  public deleteGroup() {
    this.add('quicksight:DeleteGroup');
    return this;
  }

  /**
   * Remove a user from a group so that he/she is no longer a member of the group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html
   */
  public deleteGroupMembership() {
    this.add('quicksight:DeleteGroupMembership');
    return this;
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html
   */
  public deleteIAMPolicyAssignment() {
    this.add('quicksight:DeleteIAMPolicyAssignment');
    return this;
  }

  /**
   * Deletes a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html
   */
  public deleteTemplate() {
    this.add('quicksight:DeleteTemplate');
    return this;
  }

  /**
   * Deletes the item that the specified template alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html
   */
  public deleteTemplateAlias() {
    this.add('quicksight:DeleteTemplateAlias');
    return this;
  }

  /**
   * Deletes a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html
   */
  public deleteTheme() {
    this.add('quicksight:DeleteTheme');
    return this;
  }

  /**
   * Deletes the item that the specified theme alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html
   */
  public deleteThemeAlias() {
    this.add('quicksight:DeleteThemeAlias');
    return this;
  }

  /**
   * Delete the QuickSight user that is associated with the identity of the IAM user/role making the call. The IAM user is not deleted as a result of this call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('quicksight:DeleteUser');
    return this;
  }

  /**
   * Deletes a user identified by its principal ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html
   */
  public deleteUserByPrincipalId() {
    this.add('quicksight:DeleteUserByPrincipalId');
    return this;
  }

  /**
   * Provides a summary for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html
   */
  public describeDashboard() {
    this.add('quicksight:DescribeDashboard');
    return this;
  }

  /**
   * Describes read and write permissions for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html
   */
  public describeDashboardPermissions() {
    this.add('quicksight:DescribeDashboardPermissions');
    return this;
  }

  /**
   * Return a QuickSight group’s description and ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html
   */
  public describeGroup() {
    this.add('quicksight:DescribeGroup');
    return this;
  }

  /**
   * Describe an existing assignment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html
   */
  public describeIAMPolicyAssignment() {
    this.add('quicksight:DescribeIAMPolicyAssignment');
    return this;
  }

  /**
   * Describes a template's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html
   */
  public describeTemplate() {
    this.add('quicksight:DescribeTemplate');
    return this;
  }

  /**
   * Describes the template alias for a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html
   */
  public describeTemplateAlias() {
    this.add('quicksight:DescribeTemplateAlias');
    return this;
  }

  /**
   * Describes read and write permissions on a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html
   */
  public describeTemplatePermissions() {
    this.add('quicksight:DescribeTemplatePermissions');
    return this;
  }

  /**
   * Describes a theme's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html
   */
  public describeTheme() {
    this.add('quicksight:DescribeTheme');
    return this;
  }

  /**
   * Describes the theme alias for a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html
   */
  public describeThemeAlias() {
    this.add('quicksight:DescribeThemeAlias');
    return this;
  }

  /**
   * Describes read and write permissions on a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html
   */
  public describeThemePermissions() {
    this.add('quicksight:DescribeThemePermissions');
    return this;
  }

  /**
   * Return information about a user, given the user name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html
   */
  public describeUser() {
    this.add('quicksight:DescribeUser');
    return this;
  }

  /**
   * Return an auth code representing a QuickSight user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public getAuthCode() {
    this.add('quicksight:GetAuthCode');
    return this;
  }

  /**
   * Return a QuickSight dashboard embedding URL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  public getDashboardEmbedUrl() {
    this.add('quicksight:GetDashboardEmbedUrl');
    return this;
  }

  /**
   * GetGroupMapping is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public getGroupMapping() {
    this.add('quicksight:GetGroupMapping');
    return this;
  }

  /**
   * Lists all the versions of the dashboards in the QuickSight subscription
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html
   */
  public listDashboardVersions() {
    this.add('quicksight:ListDashboardVersions');
    return this;
  }

  /**
   * Lists dashboards in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html
   */
  public listDashboards() {
    this.add('quicksight:ListDashboards');
    return this;
  }

  /**
   * Return a list of member users in a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html
   */
  public listGroupMemberships() {
    this.add('quicksight:ListGroupMemberships');
    return this;
  }

  /**
   * Get a list of all user groups in QuickSight.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html
   */
  public listGroups() {
    this.add('quicksight:ListGroups');
    return this;
  }

  /**
   * List all assignments in the current Amazon QuickSight account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html
   */
  public listIAMPolicyAssignments() {
    this.add('quicksight:ListIAMPolicyAssignments');
    return this;
  }

  /**
   * List all assignments assigned to a user and the groups it belongs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html
   */
  public listIAMPolicyAssignmentsForUser() {
    this.add('quicksight:ListIAMPolicyAssignmentsForUser');
    return this;
  }

  /**
   * List tags of a QuickSight resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('quicksight:ListTagsForResource');
    return this;
  }

  /**
   * Lists all the aliases of a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html
   */
  public listTemplateAliases() {
    this.add('quicksight:ListTemplateAliases');
    return this;
  }

  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html
   */
  public listTemplateVersions() {
    this.add('quicksight:ListTemplateVersions');
    return this;
  }

  /**
   * Lists all the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html
   */
  public listTemplates() {
    this.add('quicksight:ListTemplates');
    return this;
  }

  /**
   * Lists all the aliases of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html
   */
  public listThemeAliases() {
    this.add('quicksight:ListThemeAliases');
    return this;
  }

  /**
   * Lists all the versions of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html
   */
  public listThemeVersions() {
    this.add('quicksight:ListThemeVersions');
    return this;
  }

  /**
   * Lists all the themes in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html
   */
  public listThemes() {
    this.add('quicksight:ListThemes');
    return this;
  }

  /**
   * Return a list of groups that a given user is a member of.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html
   */
  public listUserGroups() {
    this.add('quicksight:ListUserGroups');
    return this;
  }

  /**
   * Return a list of all of the QuickSight users belonging to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('quicksight:ListUsers');
    return this;
  }

  /**
   * Create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html
   */
  public registerUser() {
    this.add('quicksight:RegisterUser');
    return this;
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public searchDirectoryGroups() {
    this.add('quicksight:SearchDirectoryGroups');
    return this;
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public setGroupMapping() {
    this.add('quicksight:SetGroupMapping');
    return this;
  }

  /**
   * Subscribe enables the user to subscribe to Amazon QuickSight. Enabling this action also allows the user to upgrade the subscription to Enterprise edition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public subscribe() {
    this.add('quicksight:Subscribe');
    return this;
  }

  /**
   * Add tags to a QuickSight resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('quicksight:TagResource');
    return this;
  }

  /**
   * Unsubscribe enables the user to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public unsubscribe() {
    this.add('quicksight:Unsubscribe');
    return this;
  }

  /**
   * Remove tags from a QuickSight resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('quicksight:UntagResource');
    return this;
  }

  /**
   * Updates a dashboard in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html
   */
  public updateDashboard() {
    this.add('quicksight:UpdateDashboard');
    return this;
  }

  /**
   * Updates read and write permissions on a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html
   */
  public updateDashboardPermissions() {
    this.add('quicksight:UpdateDashboardPermissions');
    return this;
  }

  /**
   * Updates the published version of a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html
   */
  public updateDashboardPublishedVersion() {
    this.add('quicksight:UpdateDashboardPublishedVersion');
    return this;
  }

  /**
   * Change group description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html
   */
  public updateGroup() {
    this.add('quicksight:UpdateGroup');
    return this;
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html
   */
  public updateIAMPolicyAssignment() {
    this.add('quicksight:UpdateIAMPolicyAssignment');
    return this;
  }

  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html
   */
  public updateTemplate() {
    this.add('quicksight:UpdateTemplate');
    return this;
  }

  /**
   * Updates the template alias of a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html
   */
  public updateTemplateAlias() {
    this.add('quicksight:UpdateTemplateAlias');
    return this;
  }

  /**
   * Updates the resource permissions for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html
   */
  public updateTemplatePermissions() {
    this.add('quicksight:UpdateTemplatePermissions');
    return this;
  }

  /**
   * Updates a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html
   */
  public updateTheme() {
    this.add('quicksight:UpdateTheme');
    return this;
  }

  /**
   * Updates the theme alias of a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html
   */
  public updateThemeAlias() {
    this.add('quicksight:UpdateThemeAlias');
    return this;
  }

  /**
   * Updates the resource permissions for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html
   */
  public updateThemePermissions() {
    this.add('quicksight:UpdateThemePermissions');
    return this;
  }

  /**
   * Updates an Amazon QuickSight user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html
   */
  public updateUser() {
    this.add('quicksight:UpdateUser');
    return this;
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_User.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUser(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:user/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Group.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Dashboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDashboard(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Template.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:template/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type theme to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Theme.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onTheme(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:theme/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assignment to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IAMPolicyAssignment.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssignment(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight::${Account}:assignment/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * IAM user ARN or role ARN.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIamArn(value: string | string[], operator?: string) {
    return this.if(`quicksight:IamArn`, value, operator || 'StringLike');
  }

  /**
   * The session name.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSessionName(value: string | string[], operator?: string) {
    return this.if(`quicksight:SessionName`, value, operator || 'StringLike');
  }

  /**
   * The user name.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserName(value: string | string[], operator?: string) {
    return this.if(`quicksight:UserName`, value, operator || 'StringLike');
  }
}
