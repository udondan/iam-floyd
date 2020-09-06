import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codestar](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codestar extends PolicyStatement {
  public servicePrefix = 'codestar';
  protected actionList: Actions = {
    "AssociateTeamMember": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html",
      "description": "Adds a user to the team for an AWS CodeStar project.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html",
      "description": "Creates a project with minimal structure, customer policies, and no resources.",
      "accessLevel": "Permissions management",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUserProfile": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html",
      "description": "Creates a profile for a user that includes user preferences, display name, and email.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteExtendedAccess": {
      "url": "",
      "description": "Grants access to extended delete APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html",
      "description": "Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteUserProfile": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html",
      "description": "Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DescribeProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html",
      "description": "Describes a project and its resources.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeUserProfile": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html",
      "description": "Describes a user in AWS CodeStar and the user attributes across all projects.",
      "accessLevel": "Read"
    },
    "DisassociateTeamMember": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html",
      "description": "Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "GetExtendedAccess": {
      "url": "",
      "description": "Grants access to extended read APIs.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html",
      "description": "Lists all projects in CodeStar associated with your AWS account.",
      "accessLevel": "List"
    },
    "ListResources": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html",
      "description": "Lists all resources associated with a project in CodeStar.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListTagsForProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html",
      "description": "Lists the tags associated with a project in CodeStar.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListTeamMembers": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html",
      "description": "Lists all team members associated with a project.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListUserProfiles": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html",
      "description": "Lists user profiles in AWS CodeStar.",
      "accessLevel": "List"
    },
    "PutExtendedAccess": {
      "url": "",
      "description": "Grants access to extended write APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "TagProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html",
      "description": "Adds tags to a project in CodeStar.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html",
      "description": "Removes tags from a project in CodeStar.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html",
      "description": "Updates a project in CodeStar.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateTeamMember": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html",
      "description": "Updates team member attributes within a CodeStar project.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateUserProfile": {
      "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html",
      "description": "Updates a profile for a user that includes user preferences, display name, and email.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/codestar/latest/userguide/working-with-projects.html",
      "arn": "arn:${Partition}:codestar:${Region}:${Account}:project/${ProjectId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "user": {
      "name": "user",
      "url": "",
      "arn": "arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}",
      "conditionKeys": [
        "iam:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [codestar](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a user to the team for an AWS CodeStar project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html
   */
  public toAssociateTeamMember() {
    this.add('codestar:AssociateTeamMember');
    return this;
  }

  /**
   * Creates a project with minimal structure, customer policies, and no resources.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    this.add('codestar:CreateProject');
    return this;
  }

  /**
   * Creates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    this.add('codestar:CreateUserProfile');
    return this;
  }

  /**
   * Grants access to extended delete APIs.
   *
   * Access Level: Write
   */
  public toDeleteExtendedAccess() {
    this.add('codestar:DeleteExtendedAccess');
    return this;
  }

  /**
   * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.add('codestar:DeleteProject');
    return this;
  }

  /**
   * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    this.add('codestar:DeleteUserProfile');
    return this;
  }

  /**
   * Describes a project and its resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.add('codestar:DescribeProject');
    return this;
  }

  /**
   * Describes a user in AWS CodeStar and the user attributes across all projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    this.add('codestar:DescribeUserProfile');
    return this;
  }

  /**
   * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
   */
  public toDisassociateTeamMember() {
    this.add('codestar:DisassociateTeamMember');
    return this;
  }

  /**
   * Grants access to extended read APIs.
   *
   * Access Level: Read
   */
  public toGetExtendedAccess() {
    this.add('codestar:GetExtendedAccess');
    return this;
  }

  /**
   * Lists all projects in CodeStar associated with your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.add('codestar:ListProjects');
    return this;
  }

  /**
   * Lists all resources associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    this.add('codestar:ListResources');
    return this;
  }

  /**
   * Lists the tags associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
   */
  public toListTagsForProject() {
    this.add('codestar:ListTagsForProject');
    return this;
  }

  /**
   * Lists all team members associated with a project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
   */
  public toListTeamMembers() {
    this.add('codestar:ListTeamMembers');
    return this;
  }

  /**
   * Lists user profiles in AWS CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    this.add('codestar:ListUserProfiles');
    return this;
  }

  /**
   * Grants access to extended write APIs.
   *
   * Access Level: Write
   */
  public toPutExtendedAccess() {
    this.add('codestar:PutExtendedAccess');
    return this;
  }

  /**
   * Adds tags to a project in CodeStar.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html
   */
  public toTagProject() {
    this.add('codestar:TagProject');
    return this;
  }

  /**
   * Removes tags from a project in CodeStar.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html
   */
  public toUntagProject() {
    this.add('codestar:UntagProject');
    return this;
  }

  /**
   * Updates a project in CodeStar.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.add('codestar:UpdateProject');
    return this;
  }

  /**
   * Updates team member attributes within a CodeStar project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
   */
  public toUpdateTeamMember() {
    this.add('codestar:UpdateTeamMember');
    return this;
  }

  /**
   * Updates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    this.add('codestar:UpdateUserProfile');
    return this;
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codestar/latest/userguide/working-with-projects.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codestar:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Applies to resource types:
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
