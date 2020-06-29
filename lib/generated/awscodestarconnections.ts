import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service codestar-connections
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html
 */
export class CodestarConnections extends PolicyStatement {
  public servicePrefix = 'codestar-connections';
  public actions: Actions = {
    "CreateConnection": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html",
      "description": "Grants permission to create a Connection resource",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-connections:ProviderType"
      ]
    },
    "DeleteConnection": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html",
      "description": "Grants permission to delete a Connection resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      }
    },
    "GetConnection": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html",
      "description": "Grants permission to get details about a Connection resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      }
    },
    "GetIndividualAccessToken": {
      "url": "",
      "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
      "accessLevel": "Read",
      "conditions": [
        "codestar-connections:ProviderType"
      ]
    },
    "GetInstallationUrl": {
      "url": "",
      "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
      "accessLevel": "Read",
      "conditions": [
        "codestar-connections:ProviderType"
      ]
    },
    "ListConnections": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html",
      "description": "Grants permission to list Connection resources",
      "accessLevel": "List",
      "conditions": [
        "codestar-connections:ProviderTypeFilter"
      ]
    },
    "ListInstallationTargets": {
      "url": "",
      "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html",
      "description": "Gets the set of key-value pairs that are used to manage the resource",
      "accessLevel": "List",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      }
    },
    "PassConnection": {
      "url": "",
      "description": "Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      },
      "conditions": [
        "codestar-connections:PassedToService"
      ]
    },
    "StartOAuthHandshake": {
      "url": "",
      "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
      "accessLevel": "Read",
      "conditions": [
        "codestar-connections:ProviderType"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html",
      "description": "Adds to or modifies the tags of the given resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html",
      "description": "Removes tags from an AWS resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateConnectionInstallation": {
      "url": "",
      "description": "Grants permission to update a Connection resource with an installation of the CodeStar Connections App",
      "accessLevel": "Write",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      },
      "conditions": [
        "codestar-connections:InstallationId"
      ]
    },
    "UseConnection": {
      "url": "",
      "description": "Grants permission to use a Connection resource to call provider actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "Connection": {
          "required": true
        }
      },
      "conditions": [
        "codestar-connections:FullRepositoryId",
        "codestar-connections:ProviderAction",
        "codestar-connections:ProviderPermissionsRequired"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "Connection": {
      "name": "Connection",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/connections.html/API_Connection.html",
      "arn": "arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service codestar-connections
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to create a Connection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html
   */
  public createConnection() {
    this.add('codestar-connections:CreateConnection');
    return this;
  }

  /**
   * Grants permission to delete a Connection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html
   */
  public deleteConnection() {
    this.add('codestar-connections:DeleteConnection');
    return this;
  }

  /**
   * Grants permission to get details about a Connection resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html
   */
  public getConnection() {
    this.add('codestar-connections:GetConnection');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   */
  public getIndividualAccessToken() {
    this.add('codestar-connections:GetIndividualAccessToken');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   */
  public getInstallationUrl() {
    this.add('codestar-connections:GetInstallationUrl');
    return this;
  }

  /**
   * Grants permission to list Connection resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html
   */
  public listConnections() {
    this.add('codestar-connections:ListConnections');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: List
   */
  public listInstallationTargets() {
    this.add('codestar-connections:ListInstallationTargets');
    return this;
  }

  /**
   * Gets the set of key-value pairs that are used to manage the resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('codestar-connections:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
   *
   * Access Level: Read
   */
  public passConnection() {
    this.add('codestar-connections:PassConnection');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   */
  public startOAuthHandshake() {
    this.add('codestar-connections:StartOAuthHandshake');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('codestar-connections:TagResource');
    return this;
  }

  /**
   * Removes tags from an AWS resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('codestar-connections:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a Connection resource with an installation of the CodeStar Connections App
   *
   * Access Level: Write
   */
  public updateConnectionInstallation() {
    this.add('codestar-connections:UpdateConnectionInstallation');
    return this;
  }

  /**
   * Grants permission to use a Connection resource to call provider actions
   *
   * Access Level: Read
   */
  public useConnection() {
    this.add('codestar-connections:UseConnection');
    return this;
  }

  /**
   * Adds a resource of type Connection to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections.html/API_Connection.html
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnection(connectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId}';
    arn = arn.replace('${ConnectionId}', connectionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the branch name that is passed in the request. Applies only to UseConnection requests for access to a specific repository branch
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBranchName(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:BranchName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the repository that is passed in the request. Applies only to UseConnection requests for access to a specific repository
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFullRepositoryId(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:FullRepositoryId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeStar Connections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions-handshake
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstallationId(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:InstallationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the owner of the third-party repository. Applies only to UseConnection requests for access to repositories owned by a specific user
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOwnerId(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:OwnerId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the service to which the principal is allowed to pass a Connection
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-passconnection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:PassedToService`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the provider action in a UseConnection request such as ListRepositories. See documentation for all valid values
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use-provider
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderAction(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:ProviderAction`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the write permissions of a provider action in a UseConnection request. Valid types include read_only and read_write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderPermissionsRequired(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:ProviderPermissionsRequired`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of third-party provider passed in the request
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderType(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:ProviderType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of third-party provider used to filter results
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderTypeFilter(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:ProviderTypeFilter`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the repository name that is passed in the request. Applies only to UseConnection requests for creating new repositories
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepositoryName(value: string | string[], operator?: string) {
    return this.if(`codestar-connections:RepositoryName`, value, operator || 'StringLike');
  }
}
