import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service cassandra
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html
 */
export class Cassandra extends PolicyStatement {
  public servicePrefix = 'cassandra';
  public actions: Actions = {
    "Alter": {
      "url": "",
      "description": "Grants permission to alter a keyspace or table",
      "accessLevel": "Write",
      "resourceTypes": {
        "keyspace": {
          "required": false
        },
        "table": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Create": {
      "url": "",
      "description": "Grants permission to create a keyspace or table",
      "accessLevel": "Write",
      "resourceTypes": {
        "keyspace": {
          "required": false
        },
        "table": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Drop": {
      "url": "",
      "description": "Grants permission to drop a keyspace or table",
      "accessLevel": "Write",
      "resourceTypes": {
        "keyspace": {
          "required": false
        },
        "table": {
          "required": false
        }
      }
    },
    "Modify": {
      "url": "",
      "description": "Grants permission to INSERT, UPDATE or DELETE data in a table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "Restore": {
      "url": "",
      "description": "Grants permission to restore table from a backup",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Select": {
      "url": "",
      "description": "Grants permission to SELECT data from a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "",
      "description": "Grants permission to tag a keyspace or table",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "keyspace": {
          "required": false
        },
        "table": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "",
      "description": "Grants permission to untag a keyspace or table",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "keyspace": {
          "required": false
        },
        "table": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "keyspace": {
      "name": "keyspace",
      "url": "https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html",
      "arn": "arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "table": {
      "name": "table",
      "url": "https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html",
      "arn": "arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}/table/${TableName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service cassandra
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to alter a keyspace or table
   *
   * Access Level: Write
   */
  public alter() {
    this.add('cassandra:Alter');
    return this;
  }

  /**
   * Grants permission to create a keyspace or table
   *
   * Access Level: Write
   */
  public create() {
    this.add('cassandra:Create');
    return this;
  }

  /**
   * Grants permission to drop a keyspace or table
   *
   * Access Level: Write
   */
  public drop() {
    this.add('cassandra:Drop');
    return this;
  }

  /**
   * Grants permission to INSERT, UPDATE or DELETE data in a table
   *
   * Access Level: Write
   */
  public modify() {
    this.add('cassandra:Modify');
    return this;
  }

  /**
   * Grants permission to restore table from a backup
   *
   * Access Level: Write
   */
  public restore() {
    this.add('cassandra:Restore');
    return this;
  }

  /**
   * Grants permission to SELECT data from a table
   *
   * Access Level: Read
   */
  public select() {
    this.add('cassandra:Select');
    return this;
  }

  /**
   * Grants permission to tag a keyspace or table
   *
   * Access Level: Tagging
   */
  public tagResource() {
    this.add('cassandra:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a keyspace or table
   *
   * Access Level: Tagging
   */
  public untagResource() {
    this.add('cassandra:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type keyspace to the statement
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   *
   * @param keyspaceName - Identifier for the keyspaceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onKeyspace(keyspaceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}';
    arn = arn.replace('${KeyspaceName}', keyspaceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   *
   * @param keyspaceName - Identifier for the keyspaceName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onTable(keyspaceName: string, tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}/table/${TableName}';
    arn = arn.replace('${KeyspaceName}', keyspaceName);
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
