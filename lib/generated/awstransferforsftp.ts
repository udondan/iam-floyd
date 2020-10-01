import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [transfer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstransferforsftp.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transfer extends PolicyStatement {
  public servicePrefix = 'transfer';
  protected actionList: Actions = {
    "CreateServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateServer.html",
      "description": "Enables the caller to create a server.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateUser.html",
      "description": "Enables the caller to add a user associated with a server.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "server": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html",
      "description": "Enables the caller to delete a server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "DeleteSshPublicKey": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html",
      "description": "Enables the caller to delete an SSH public key from a user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html",
      "description": "Enables the caller to delete a user associated with a server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DescribeServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html",
      "description": "Enables the caller to describe a server.",
      "accessLevel": "Read",
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html",
      "description": "Enables the caller to describe a user associated with a server.",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ImportSshPublicKey": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html",
      "description": "Enables the caller to add an SSH public key to a user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListServers": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html",
      "description": "Enables the caller to list servers",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html",
      "description": "Enables the caller to list tags for a server or a user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "server": {
          "required": false
        },
        "user": {
          "required": false
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html",
      "description": "Enables the caller to list users associated with a server.",
      "accessLevel": "List",
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "StartServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html",
      "description": "Enables the caller to start a server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "StopServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html",
      "description": "Enables the caller to stop a server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_TagResource.html",
      "description": "Enables the caller to tag a server or a user.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "server": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "TestIdentityProvider": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html",
      "description": "Enables the caller to test a server's custom identity provider.",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html",
      "description": "Enables the caller to untag a server or a user.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "server": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateServer": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html",
      "description": "Enables the caller to update the configuration of a server",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "server": {
          "required": true
        }
      }
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateUser.html",
      "description": "Enables the caller to update the configuration of a user",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/users.html",
      "arn": "arn:${Partition}:transfer:${Region}:${Account}:user/${ServerId}/${Username}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "server": {
      "name": "server",
      "url": "https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html",
      "arn": "arn:${Partition}:transfer:${Region}:${Account}:server/${ServerId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [transfer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstransferforsftp.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Enables the caller to create a server.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateServer.html
   */
  public toCreateServer() {
    this.to('transfer:CreateServer');
    return this;
  }

  /**
   * Enables the caller to add a user associated with a server.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('transfer:CreateUser');
    return this;
  }

  /**
   * Enables the caller to delete a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html
   */
  public toDeleteServer() {
    this.to('transfer:DeleteServer');
    return this;
  }

  /**
   * Enables the caller to delete an SSH public key from a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html
   */
  public toDeleteSshPublicKey() {
    this.to('transfer:DeleteSshPublicKey');
    return this;
  }

  /**
   * Enables the caller to delete a user associated with a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('transfer:DeleteUser');
    return this;
  }

  /**
   * Enables the caller to describe a server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html
   */
  public toDescribeServer() {
    this.to('transfer:DescribeServer');
    return this;
  }

  /**
   * Enables the caller to describe a user associated with a server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('transfer:DescribeUser');
    return this;
  }

  /**
   * Enables the caller to add an SSH public key to a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html
   */
  public toImportSshPublicKey() {
    this.to('transfer:ImportSshPublicKey');
    return this;
  }

  /**
   * Enables the caller to list servers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html
   */
  public toListServers() {
    this.to('transfer:ListServers');
    return this;
  }

  /**
   * Enables the caller to list tags for a server or a user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('transfer:ListTagsForResource');
    return this;
  }

  /**
   * Enables the caller to list users associated with a server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html
   */
  public toListUsers() {
    this.to('transfer:ListUsers');
    return this;
  }

  /**
   * Enables the caller to start a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html
   */
  public toStartServer() {
    this.to('transfer:StartServer');
    return this;
  }

  /**
   * Enables the caller to stop a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html
   */
  public toStopServer() {
    this.to('transfer:StopServer');
    return this;
  }

  /**
   * Enables the caller to tag a server or a user.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TagResource.html
   */
  public toTagResource() {
    this.to('transfer:TagResource');
    return this;
  }

  /**
   * Enables the caller to test a server's custom identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html
   */
  public toTestIdentityProvider() {
    this.to('transfer:TestIdentityProvider');
    return this;
  }

  /**
   * Enables the caller to untag a server or a user.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('transfer:UntagResource');
    return this;
  }

  /**
   * Enables the caller to update the configuration of a server
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html
   */
  public toUpdateServer() {
    this.to('transfer:UpdateServer');
    return this;
  }

  /**
   * Enables the caller to update the configuration of a user
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateUser.html
   */
  public toUpdateUser() {
    this.to('transfer:UpdateUser');
    return this;
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/users.html
   *
   * @param serverId - Identifier for the serverId.
   * @param username - Identifier for the username.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(serverId: string, username: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:transfer:${Region}:${Account}:user/${ServerId}/${Username}';
    arn = arn.replace('${ServerId}', serverId);
    arn = arn.replace('${Username}', username);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type server to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html
   *
   * @param serverId - Identifier for the serverId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServer(serverId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:transfer:${Region}:${Account}:server/${ServerId}';
    arn = arn.replace('${ServerId}', serverId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
