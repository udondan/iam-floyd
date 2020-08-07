import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [athena](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Athena extends PolicyStatement {
  public servicePrefix = 'athena';
  protected actionList: Actions = {
    "BatchGetNamedQuery": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html",
      "description": "Grants permissions to get information about one or more named queries.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "BatchGetQueryExecution": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html",
      "description": "Grants permissions to get information about one or more query executions.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "CreateDataCatalog": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html",
      "description": "Grants permissions to create a datacatalog.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateNamedQuery": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html",
      "description": "Grants permissions to create a named query.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "CreateWorkGroup": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html",
      "description": "Grants permissions to create a workgroup.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDataCatalog": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html",
      "description": "Grants permissions to delete a datacatalog.",
      "accessLevel": "Write",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "DeleteNamedQuery": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html",
      "description": "Grants permissions to delete a named query specified.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "DeleteWorkGroup": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html",
      "description": "Grants permissions to delete a workgroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "GetDataCatalog": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html",
      "description": "Grants permissions to get a datacatalog.",
      "accessLevel": "Read",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "GetDatabase": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html",
      "description": "Grants permissions to get a database for a given datacatalog.",
      "accessLevel": "Read",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "GetNamedQuery": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html",
      "description": "Grants permissions to get information about the specified named query.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "GetQueryExecution": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html",
      "description": "Grants permissions to get information about the specified query execution.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "GetQueryResults": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html",
      "description": "Grants permissions to get the query results.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "GetQueryResultsStream": {
      "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies",
      "description": "Grants permissions to get the query results stream.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "GetTableMetadata": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ GetTableMetadata.html",
      "description": "Grants permissions to get a metadata about a table for a given datacatalog.",
      "accessLevel": "Read",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "GetWorkGroup": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html",
      "description": "Grants permissions to get a workgroup.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "ListDataCatalogs": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html",
      "description": "Grants permissions to return a list of datacatalogs for the specified AWS account.",
      "accessLevel": "List"
    },
    "ListDatabases": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html",
      "description": "Grants permissions to return a list of databases for a given datacatalog.",
      "accessLevel": "List",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "ListNamedQueries": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html",
      "description": "Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account.",
      "accessLevel": "List",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "ListQueryExecutions": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html",
      "description": "Grants permissions to return a list of query executions for the specified AWS account.",
      "accessLevel": "List",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "ListTableMetadata": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html",
      "description": "Grants permissions to return a list of table metadata in a database for a given datacatalog.",
      "accessLevel": "List",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permissions to return a list of tags for a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        },
        "workgroup": {
          "required": true
        }
      }
    },
    "ListWorkGroups": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html",
      "description": "Grants permissions to return a list of workgroups for the specified AWS account.",
      "accessLevel": "List"
    },
    "StartQueryExecution": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html",
      "description": "Grants permissions to start a query execution using an SQL query provided as a string.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "StopQueryExecution": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html",
      "description": "Grants permissions to stop the specified query execution.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html",
      "description": "Grants permissions to add a tag to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        },
        "workgroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html",
      "description": "Grants permissions to remove a tag from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        },
        "workgroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDataCatalog": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html",
      "description": "Grants permissions to update a datacatalog.",
      "accessLevel": "Write",
      "resourceTypes": {
        "datacatalog": {
          "required": true
        }
      }
    },
    "UpdateWorkGroup": {
      "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html",
      "description": "Grants permissions to update a workgroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workgroup": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "datacatalog": {
      "name": "datacatalog",
      "url": "https://docs.aws.amazon.com/athena/latest/ug/datacatalogs-example-policies.html",
      "arn": "arn:${Partition}:athena:${Region}:${Account}:datacatalog/${DataCatalogName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "workgroup": {
      "name": "workgroup",
      "url": "https://docs.aws.amazon.com/athena/latest/ug/example-policies-workgroup.html",
      "arn": "arn:${Partition}:athena:${Region}:${Account}:workgroup/${WorkGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [athena](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to get information about one or more named queries.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
   */
  public toBatchGetNamedQuery() {
    this.add('athena:BatchGetNamedQuery');
    return this;
  }

  /**
   * Grants permissions to get information about one or more query executions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
   */
  public toBatchGetQueryExecution() {
    this.add('athena:BatchGetQueryExecution');
    return this;
  }

  /**
   * Grants permissions to create a datacatalog.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html
   */
  public toCreateDataCatalog() {
    this.add('athena:CreateDataCatalog');
    return this;
  }

  /**
   * Grants permissions to create a named query.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
   */
  public toCreateNamedQuery() {
    this.add('athena:CreateNamedQuery');
    return this;
  }

  /**
   * Grants permissions to create a workgroup.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html
   */
  public toCreateWorkGroup() {
    this.add('athena:CreateWorkGroup');
    return this;
  }

  /**
   * Grants permissions to delete a datacatalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html
   */
  public toDeleteDataCatalog() {
    this.add('athena:DeleteDataCatalog');
    return this;
  }

  /**
   * Grants permissions to delete a named query specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
   */
  public toDeleteNamedQuery() {
    this.add('athena:DeleteNamedQuery');
    return this;
  }

  /**
   * Grants permissions to delete a workgroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
   */
  public toDeleteWorkGroup() {
    this.add('athena:DeleteWorkGroup');
    return this;
  }

  /**
   * Grants permissions to get a datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html
   */
  public toGetDataCatalog() {
    this.add('athena:GetDataCatalog');
    return this;
  }

  /**
   * Grants permissions to get a database for a given datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html
   */
  public toGetDatabase() {
    this.add('athena:GetDatabase');
    return this;
  }

  /**
   * Grants permissions to get information about the specified named query.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
   */
  public toGetNamedQuery() {
    this.add('athena:GetNamedQuery');
    return this;
  }

  /**
   * Grants permissions to get information about the specified query execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
   */
  public toGetQueryExecution() {
    this.add('athena:GetQueryExecution');
    return this;
  }

  /**
   * Grants permissions to get the query results.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    this.add('athena:GetQueryResults');
    return this;
  }

  /**
   * Grants permissions to get the query results stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetQueryResultsStream() {
    this.add('athena:GetQueryResultsStream');
    return this;
  }

  /**
   * Grants permissions to get a metadata about a table for a given datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ GetTableMetadata.html
   */
  public toGetTableMetadata() {
    this.add('athena:GetTableMetadata');
    return this;
  }

  /**
   * Grants permissions to get a workgroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
   */
  public toGetWorkGroup() {
    this.add('athena:GetWorkGroup');
    return this;
  }

  /**
   * Grants permissions to return a list of datacatalogs for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html
   */
  public toListDataCatalogs() {
    this.add('athena:ListDataCatalogs');
    return this;
  }

  /**
   * Grants permissions to return a list of databases for a given datacatalog.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    this.add('athena:ListDatabases');
    return this;
  }

  /**
   * Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
   */
  public toListNamedQueries() {
    this.add('athena:ListNamedQueries');
    return this;
  }

  /**
   * Grants permissions to return a list of query executions for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   */
  public toListQueryExecutions() {
    this.add('athena:ListQueryExecutions');
    return this;
  }

  /**
   * Grants permissions to return a list of table metadata in a database for a given datacatalog.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html
   */
  public toListTableMetadata() {
    this.add('athena:ListTableMetadata');
    return this;
  }

  /**
   * Grants permissions to return a list of tags for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('athena:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to return a list of workgroups for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
   */
  public toListWorkGroups() {
    this.add('athena:ListWorkGroups');
    return this;
  }

  /**
   * Grants permissions to start a query execution using an SQL query provided as a string.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   */
  public toStartQueryExecution() {
    this.add('athena:StartQueryExecution');
    return this;
  }

  /**
   * Grants permissions to stop the specified query execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   */
  public toStopQueryExecution() {
    this.add('athena:StopQueryExecution');
    return this;
  }

  /**
   * Grants permissions to add a tag to a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('athena:TagResource');
    return this;
  }

  /**
   * Grants permissions to remove a tag from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('athena:UntagResource');
    return this;
  }

  /**
   * Grants permissions to update a datacatalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html
   */
  public toUpdateDataCatalog() {
    this.add('athena:UpdateDataCatalog');
    return this;
  }

  /**
   * Grants permissions to update a workgroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
   */
  public toUpdateWorkGroup() {
    this.add('athena:UpdateWorkGroup');
    return this;
  }

  /**
   * Adds a resource of type datacatalog to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/datacatalogs-example-policies.html
   *
   * @param dataCatalogName - Identifier for the dataCatalogName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatacatalog(dataCatalogName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:athena:${Region}:${Account}:datacatalog/${DataCatalogName}';
    arn = arn.replace('${DataCatalogName}', dataCatalogName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/example-policies-workgroup.html
   *
   * @param workGroupName - Identifier for the workGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkgroup(workGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:athena:${Region}:${Account}:workgroup/${WorkGroupName}';
    arn = arn.replace('${WorkGroupName}', workGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDataCatalog()
   * - .toCreateWorkGroup()
   * - .toTagResource()
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - datacatalog
   * - workgroup
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDataCatalog()
   * - .toCreateWorkGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
