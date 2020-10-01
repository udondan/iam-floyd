import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [appsync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appsync extends PolicyStatement {
  public servicePrefix = 'appsync';

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
    this.to('appsync:CreateApiKey');
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
    this.to('appsync:CreateDataSource');
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
    this.to('appsync:CreateFunction');
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
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateGraphqlApi.html
   */
  public toCreateGraphqlApi() {
    this.to('appsync:CreateGraphqlApi');
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
    this.to('appsync:CreateResolver');
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
    this.to('appsync:CreateType');
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
    this.to('appsync:DeleteApiKey');
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
    this.to('appsync:DeleteDataSource');
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
    this.to('appsync:DeleteFunction');
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
    this.to('appsync:DeleteGraphqlApi');
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
    this.to('appsync:DeleteResolver');
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
    this.to('appsync:DeleteType');
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
    this.to('appsync:GetDataSource');
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
    this.to('appsync:GetFunction');
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
    this.to('appsync:GetGraphqlApi');
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
    this.to('appsync:GetIntrospectionSchema');
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
    this.to('appsync:GetResolver');
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
    this.to('appsync:GetSchemaCreationStatus');
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
    this.to('appsync:GetType');
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
    this.to('appsync:GraphQL');
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
    this.to('appsync:ListApiKeys');
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
    this.to('appsync:ListDataSources');
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
    this.to('appsync:ListFunctions');
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
    this.to('appsync:ListGraphqlApis');
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
    this.to('appsync:ListResolvers');
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
    this.to('appsync:ListResolversByFunction');
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
    this.to('appsync:ListTagsForResource');
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
    this.to('appsync:ListTypes');
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
    this.to('appsync:StartSchemaCreation');
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
    this.to('appsync:TagResource');
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
    this.to('appsync:UntagResource');
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
    this.to('appsync:UpdateApiKey');
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
    this.to('appsync:UpdateDataSource');
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
    this.to('appsync:UpdateFunction');
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
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateGraphqlApi.html
   */
  public toUpdateGraphqlApi() {
    this.to('appsync:UpdateGraphqlApi');
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
    this.to('appsync:UpdateResolver');
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
    this.to('appsync:UpdateType');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApiKey",
      "CreateDataSource",
      "CreateFunction",
      "CreateResolver",
      "CreateType",
      "DeleteApiKey",
      "DeleteDataSource",
      "DeleteFunction",
      "DeleteGraphqlApi",
      "DeleteResolver",
      "DeleteType",
      "GraphQL",
      "StartSchemaCreation",
      "UpdateApiKey",
      "UpdateDataSource",
      "UpdateFunction",
      "UpdateGraphqlApi",
      "UpdateResolver",
      "UpdateType"
    ],
    "Tagging": [
      "CreateGraphqlApi",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetDataSource",
      "GetFunction",
      "GetGraphqlApi",
      "GetIntrospectionSchema",
      "GetResolver",
      "GetSchemaCreationStatus",
      "GetType",
      "ListTagsForResource"
    ],
    "List": [
      "ListApiKeys",
      "ListDataSources",
      "ListFunctions",
      "ListGraphqlApis",
      "ListResolvers",
      "ListResolversByFunction",
      "ListTypes"
    ]
  };

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
}
