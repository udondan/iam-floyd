import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cassandra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cassandra extends PolicyStatement {
  public servicePrefix = 'cassandra';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
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
   * Statement provider for service [cassandra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to alter a keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public alter() {
    this.add('cassandra:Alter');
    return this;
  }

  /**
   * Grants permission to create a keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public tagResource() {
    this.add('cassandra:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .alter()
   * - .create()
   * - .restore()
   * - .tagResource()
   * - .untagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - keyspace
   * - table
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .alter()
   * - .create()
   * - .restore()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
