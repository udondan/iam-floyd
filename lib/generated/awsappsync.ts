import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [appsync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appsync extends PolicyStatement {
  public servicePrefix = 'appsync';
  protected actionList: Actions = {
    "CreateApiKey": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiKey.html",
      "description": "Creates a unique key that you can distribute to clients who are executing your API.",
      "accessLevel": "Write"
    },
    "CreateDataSource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDataSource.html",
      "description": "Creates a DataSource object.",
      "accessLevel": "Write"
    },
    "CreateFunction": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateFunction.html",
      "description": "Create a new Function object.",
      "accessLevel": "Write"
    },
    "CreateGraphqlApi": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateGraphqlApi.html",
      "description": "Creates a GraphqlApi object, which is the top level AppSync resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateResolver": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateResolver.html",
      "description": "Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.",
      "accessLevel": "Write"
    },
    "CreateType": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateType.html",
      "description": "Creates a Type object.",
      "accessLevel": "Write"
    },
    "DeleteApiKey": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiKey.html",
      "description": "Deletes an API key.",
      "accessLevel": "Write"
    },
    "DeleteDataSource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDataSource.html",
      "description": "Deletes a DataSource object.",
      "accessLevel": "Write"
    },
    "DeleteFunction": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteFunction.html",
      "description": "Deletes a Function object.",
      "accessLevel": "Write"
    },
    "DeleteGraphqlApi": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteGraphqlApi.html",
      "description": "Deletes a GraphqlApi object. This will also clean up every AppSync resource below that API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "graphqlapi": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteResolver": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteResolver.html",
      "description": "Deletes a Resolver object.",
      "accessLevel": "Write"
    },
    "DeleteType": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteType.html",
      "description": "Deletes a Type object.",
      "accessLevel": "Write"
    },
    "GetDataSource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSource.html",
      "description": "Retrieves a DataSource object.",
      "accessLevel": "Read"
    },
    "GetFunction": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetFunction.html",
      "description": "Retrieves a Function object.",
      "accessLevel": "Read"
    },
    "GetGraphqlApi": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApi.html",
      "description": "Retrieves a GraphqlApi object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "graphqlapi": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetIntrospectionSchema": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetIntrospectionSchema.html",
      "description": "Retrieves the introspection schema for a GraphQL API.",
      "accessLevel": "Read"
    },
    "GetResolver": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetResolver.html",
      "description": "Retrieves a Resolver object.",
      "accessLevel": "Read"
    },
    "GetSchemaCreationStatus": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSchemaCreationStatus.html",
      "description": "Retrieves the current status of a schema creation operation.",
      "accessLevel": "Read"
    },
    "GetType": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetType.html",
      "description": "Retrieves a Type object.",
      "accessLevel": "Read"
    },
    "GraphQL": {
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html",
      "description": "Sends a GraphQL query to a GraphQL API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "field": {
          "required": true
        },
        "graphqlapi": {
          "required": true
        }
      }
    },
    "ListApiKeys": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListApiKeys.html",
      "description": "Lists the API keys for a given API.",
      "accessLevel": "List"
    },
    "ListDataSources": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDataSources.html",
      "description": "Lists the data sources for a given API.",
      "accessLevel": "List"
    },
    "ListFunctions": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListFunctions.html",
      "description": "Lists the functions for a given API.",
      "accessLevel": "List"
    },
    "ListGraphqlApis": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListGraphqlApis.html",
      "description": "Lists your GraphQL APIs.",
      "accessLevel": "List"
    },
    "ListResolvers": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolvers.html",
      "description": "Lists the resolvers for a given API and type.",
      "accessLevel": "List"
    },
    "ListResolversByFunction": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolversByFunction.html",
      "description": "List the resolvers that are associated with a specific function.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTagsForResource.html",
      "description": "List the tags for a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "graphqlapi": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListTypes": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypes.html",
      "description": "Lists the types for a given API.",
      "accessLevel": "List"
    },
    "StartSchemaCreation": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaCreation.html",
      "description": "Adds a new schema to your GraphQL API. This operation is asynchronous - GetSchemaCreationStatus can show when it has completed.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_TagResource.html",
      "description": "Tag a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "graphqlapi": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UntagResource.html",
      "description": "Untag a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "graphqlapi": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApiKey": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiKey.html",
      "description": "Updates an API key for a given API.",
      "accessLevel": "Write"
    },
    "UpdateDataSource": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDataSource.html",
      "description": "Updates a DataSource object.",
      "accessLevel": "Write"
    },
    "UpdateFunction": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateFunction.html",
      "description": "Updates an existing Function object.",
      "accessLevel": "Write"
    },
    "UpdateGraphqlApi": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateGraphqlApi.html",
      "description": "Updates a GraphqlApi object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "graphqlapi": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateResolver": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateResolver.html",
      "description": "Updates a Resolver object.",
      "accessLevel": "Write"
    },
    "UpdateType": {
      "url": "https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateType.html",
      "description": "Updates a Type object.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "datasource": {
      "name": "datasource",
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/attaching-a-data-source.html",
      "arn": "arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/datasources/${DatasourceName}",
      "conditionKeys": []
    },
    "graphqlapi": {
      "name": "graphqlapi",
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html",
      "arn": "arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "field": {
      "name": "field",
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/configuring-resolvers.html",
      "arn": "arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/types/${TypeName}/fields/${FieldName}",
      "conditionKeys": []
    },
    "type": {
      "name": "type",
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/designing-your-schema.html#adding-a-root-query-type",
      "arn": "arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/types/${TypeName}",
      "conditionKeys": []
    },
    "function": {
      "name": "function",
      "url": "https://docs.aws.amazon.com/appsync/latest/devguide/pipeline-resolvers.html",
      "arn": "arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/functions/${FunctionId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [appsync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a unique key that you can distribute to clients who are executing your API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiKey.html
   */
  public toCreateApiKey() {
    this.add('appsync:CreateApiKey');
    return this;
  }

  /**
   * Creates a DataSource object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    this.add('appsync:CreateDataSource');
    return this;
  }

  /**
   * Create a new Function object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateFunction.html
   */
  public toCreateFunction() {
    this.add('appsync:CreateFunction');
    return this;
  }

  /**
   * Creates a GraphqlApi object, which is the top level AppSync resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateGraphqlApi.html
   */
  public toCreateGraphqlApi() {
    this.add('appsync:CreateGraphqlApi');
    return this;
  }

  /**
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateResolver.html
   */
  public toCreateResolver() {
    this.add('appsync:CreateResolver');
    return this;
  }

  /**
   * Creates a Type object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateType.html
   */
  public toCreateType() {
    this.add('appsync:CreateType');
    return this;
  }

  /**
   * Deletes an API key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiKey.html
   */
  public toDeleteApiKey() {
    this.add('appsync:DeleteApiKey');
    return this;
  }

  /**
   * Deletes a DataSource object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    this.add('appsync:DeleteDataSource');
    return this;
  }

  /**
   * Deletes a Function object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteFunction.html
   */
  public toDeleteFunction() {
    this.add('appsync:DeleteFunction');
    return this;
  }

  /**
   * Deletes a GraphqlApi object. This will also clean up every AppSync resource below that API.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteGraphqlApi.html
   */
  public toDeleteGraphqlApi() {
    this.add('appsync:DeleteGraphqlApi');
    return this;
  }

  /**
   * Deletes a Resolver object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteResolver.html
   */
  public toDeleteResolver() {
    this.add('appsync:DeleteResolver');
    return this;
  }

  /**
   * Deletes a Type object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteType.html
   */
  public toDeleteType() {
    this.add('appsync:DeleteType');
    return this;
  }

  /**
   * Retrieves a DataSource object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSource.html
   */
  public toGetDataSource() {
    this.add('appsync:GetDataSource');
    return this;
  }

  /**
   * Retrieves a Function object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetFunction.html
   */
  public toGetFunction() {
    this.add('appsync:GetFunction');
    return this;
  }

  /**
   * Retrieves a GraphqlApi object.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApi.html
   */
  public toGetGraphqlApi() {
    this.add('appsync:GetGraphqlApi');
    return this;
  }

  /**
   * Retrieves the introspection schema for a GraphQL API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetIntrospectionSchema.html
   */
  public toGetIntrospectionSchema() {
    this.add('appsync:GetIntrospectionSchema');
    return this;
  }

  /**
   * Retrieves a Resolver object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetResolver.html
   */
  public toGetResolver() {
    this.add('appsync:GetResolver');
    return this;
  }

  /**
   * Retrieves the current status of a schema creation operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSchemaCreationStatus.html
   */
  public toGetSchemaCreationStatus() {
    this.add('appsync:GetSchemaCreationStatus');
    return this;
  }

  /**
   * Retrieves a Type object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetType.html
   */
  public toGetType() {
    this.add('appsync:GetType');
    return this;
  }

  /**
   * Sends a GraphQL query to a GraphQL API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html
   */
  public toGraphQL() {
    this.add('appsync:GraphQL');
    return this;
  }

  /**
   * Lists the API keys for a given API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListApiKeys.html
   */
  public toListApiKeys() {
    this.add('appsync:ListApiKeys');
    return this;
  }

  /**
   * Lists the data sources for a given API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDataSources.html
   */
  public toListDataSources() {
    this.add('appsync:ListDataSources');
    return this;
  }

  /**
   * Lists the functions for a given API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListFunctions.html
   */
  public toListFunctions() {
    this.add('appsync:ListFunctions');
    return this;
  }

  /**
   * Lists your GraphQL APIs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListGraphqlApis.html
   */
  public toListGraphqlApis() {
    this.add('appsync:ListGraphqlApis');
    return this;
  }

  /**
   * Lists the resolvers for a given API and type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolvers.html
   */
  public toListResolvers() {
    this.add('appsync:ListResolvers');
    return this;
  }

  /**
   * List the resolvers that are associated with a specific function.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolversByFunction.html
   */
  public toListResolversByFunction() {
    this.add('appsync:ListResolversByFunction');
    return this;
  }

  /**
   * List the tags for a resource.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('appsync:ListTagsForResource');
    return this;
  }

  /**
   * Lists the types for a given API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypes.html
   */
  public toListTypes() {
    this.add('appsync:ListTypes');
    return this;
  }

  /**
   * Adds a new schema to your GraphQL API. This operation is asynchronous - GetSchemaCreationStatus can show when it has completed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaCreation.html
   */
  public toStartSchemaCreation() {
    this.add('appsync:StartSchemaCreation');
    return this;
  }

  /**
   * Tag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('appsync:TagResource');
    return this;
  }

  /**
   * Untag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('appsync:UntagResource');
    return this;
  }

  /**
   * Updates an API key for a given API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiKey.html
   */
  public toUpdateApiKey() {
    this.add('appsync:UpdateApiKey');
    return this;
  }

  /**
   * Updates a DataSource object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    this.add('appsync:UpdateDataSource');
    return this;
  }

  /**
   * Updates an existing Function object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateFunction.html
   */
  public toUpdateFunction() {
    this.add('appsync:UpdateFunction');
    return this;
  }

  /**
   * Updates a GraphqlApi object.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateGraphqlApi.html
   */
  public toUpdateGraphqlApi() {
    this.add('appsync:UpdateGraphqlApi');
    return this;
  }

  /**
   * Updates a Resolver object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateResolver.html
   */
  public toUpdateResolver() {
    this.add('appsync:UpdateResolver');
    return this;
  }

  /**
   * Updates a Type object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateType.html
   */
  public toUpdateType() {
    this.add('appsync:UpdateType');
    return this;
  }

  /**
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/attaching-a-data-source.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param datasourceName - Identifier for the datasourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatasource(graphQLAPIId: string, datasourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/datasources/${DatasourceName}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${DatasourceName}', datasourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type graphqlapi to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGraphqlapi(graphQLAPIId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type field to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/configuring-resolvers.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param typeName - Identifier for the typeName.
   * @param fieldName - Identifier for the fieldName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onField(graphQLAPIId: string, typeName: string, fieldName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/types/${TypeName}/fields/${FieldName}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${TypeName}', typeName);
    arn = arn.replace('${FieldName}', fieldName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type type to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/designing-your-schema.html#adding-a-root-query-type
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param typeName - Identifier for the typeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onType(graphQLAPIId: string, typeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/types/${TypeName}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${TypeName}', typeName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/pipeline-resolvers.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param functionId - Identifier for the functionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunction(graphQLAPIId: string, functionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}/functions/${FunctionId}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${FunctionId}', functionId);
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
   * - .toCreateGraphqlApi()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteGraphqlApi()
   * - .toGetGraphqlApi()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUpdateGraphqlApi()
   *
   * Applies to resource types:
   * - graphqlapi
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGraphqlApi()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
