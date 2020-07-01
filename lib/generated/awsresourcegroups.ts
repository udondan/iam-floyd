import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service resource-groups
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html
 */
export class ResourceGroups extends PolicyStatement {
  public servicePrefix = 'resource-groups';
  public actions: Actions = {
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html",
      "description": "Creates a group with a specified name, description, and resource query.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html",
      "description": "Deletes a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html",
      "description": "Gets information of a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroupQuery": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html",
      "description": "Gets the query associated with a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetTags": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html",
      "description": "Gets the tags associated with a specified resource group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroupResources": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html",
      "description": "Lists the resources that are member of a specified resource group",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html",
      "description": "Lists all resource groups",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "SearchResources": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html",
      "description": "Returns a list of AWS resource identifiers matching the given query",
      "accessLevel": "List"
    },
    "Tag": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html",
      "description": "Tags a specified resource group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Untag": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html",
      "description": "Removes tags associated with a specified resource group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html",
      "description": "Updates a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateGroupQuery": {
      "url": "https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html",
      "description": "Updates the query associated with a specified resource group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:resource-groups:${Region}:${Account}:group/${GroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service resource-groups
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates a group with a specified name, description, and resource query.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html
   */
  public createGroup() {
    this.add('resource-groups:CreateGroup');
    return this;
  }

  /**
   * Deletes a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html
   */
  public deleteGroup() {
    this.add('resource-groups:DeleteGroup');
    return this;
  }

  /**
   * Gets information of a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html
   */
  public getGroup() {
    this.add('resource-groups:GetGroup');
    return this;
  }

  /**
   * Gets the query associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html
   */
  public getGroupQuery() {
    this.add('resource-groups:GetGroupQuery');
    return this;
  }

  /**
   * Gets the tags associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html
   */
  public getTags() {
    this.add('resource-groups:GetTags');
    return this;
  }

  /**
   * Lists the resources that are member of a specified resource group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html
   */
  public listGroupResources() {
    this.add('resource-groups:ListGroupResources');
    return this;
  }

  /**
   * Lists all resource groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html
   */
  public listGroups() {
    this.add('resource-groups:ListGroups');
    return this;
  }

  /**
   * Returns a list of AWS resource identifiers matching the given query
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html
   */
  public searchResources() {
    this.add('resource-groups:SearchResources');
    return this;
  }

  /**
   * Tags a specified resource group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html
   */
  public tag() {
    this.add('resource-groups:Tag');
    return this;
  }

  /**
   * Removes tags associated with a specified resource group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html
   */
  public untag() {
    this.add('resource-groups:Untag');
    return this;
  }

  /**
   * Updates a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html
   */
  public updateGroup() {
    this.add('resource-groups:UpdateGroup');
    return this;
  }

  /**
   * Updates the query associated with a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   */
  public updateGroupQuery() {
    this.add('resource-groups:UpdateGroupQuery');
    return this;
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onGroup(groupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:resource-groups:${Region}:${Account}:group/${GroupName}';
    arn = arn.replace('${GroupName}', groupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
