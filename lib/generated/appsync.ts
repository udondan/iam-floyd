import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [appsync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appsync extends PolicyStatement {
  public servicePrefix = 'appsync';

  /**
   * Statement provider for service [appsync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to attach a GraphQL API to a custom domain name in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_AssociateApi.html
   */
  public toAssociateApi() {
    return this.to('AssociateApi');
  }

  /**
   * Grants permission to create an API cache in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiCache.html
   */
  public toCreateApiCache() {
    return this.to('CreateApiCache');
  }

  /**
   * Grants permission to create a unique key that you can distribute to clients who are executing your API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiKey.html
   */
  public toCreateApiKey() {
    return this.to('CreateApiKey');
  }

  /**
   * Grants permission to create a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to create a custom domain name in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDomainName.html
   */
  public toCreateDomainName() {
    return this.to('CreateDomainName');
  }

  /**
   * Grants permission to create a new function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateFunction.html
   */
  public toCreateFunction() {
    return this.to('CreateFunction');
  }

  /**
   * Grants permission to create a GraphQL API, which is the top level AppSync resource
   *
   * Access Level: Write
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
    return this.to('CreateGraphqlApi');
  }

  /**
   * Grants permission to create a resolver. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateResolver.html
   */
  public toCreateResolver() {
    return this.to('CreateResolver');
  }

  /**
   * Grants permission to create a type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateType.html
   */
  public toCreateType() {
    return this.to('CreateType');
  }

  /**
   * Grants permission to delete an API cache in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiCache.html
   */
  public toDeleteApiCache() {
    return this.to('DeleteApiCache');
  }

  /**
   * Grants permission to delete an API key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiKey.html
   */
  public toDeleteApiKey() {
    return this.to('DeleteApiKey');
  }

  /**
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a custom domain name in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDomainName.html
   */
  public toDeleteDomainName() {
    return this.to('DeleteDomainName');
  }

  /**
   * Grants permission to delete a function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteFunction.html
   */
  public toDeleteFunction() {
    return this.to('DeleteFunction');
  }

  /**
   * Grants permission to delete a GraphQL Api. This will also clean up every AppSync resource below that API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteGraphqlApi.html
   */
  public toDeleteGraphqlApi() {
    return this.to('DeleteGraphqlApi');
  }

  /**
   * Grants permission to delete a resolver
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteResolver.html
   */
  public toDeleteResolver() {
    return this.to('DeleteResolver');
  }

  /**
   * Grants permission to delete a type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteType.html
   */
  public toDeleteType() {
    return this.to('DeleteType');
  }

  /**
   * Grants permission to dettach a GraphQL API to a custom domain name in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_DisassociateApi.html
   */
  public toDisassociateApi() {
    return this.to('DisassociateApi');
  }

  /**
   * Grants permission to flush an API cache in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_FlushApiCache.html
   */
  public toFlushApiCache() {
    return this.to('FlushApiCache');
  }

  /**
   * Grants permission to read custom domain name - GraphQL API association details in AppSync
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiAssociation.html
   */
  public toGetApiAssociation() {
    return this.to('GetApiAssociation');
  }

  /**
   * Grants permission to read information about an API cache in AppSync
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiCache.html
   */
  public toGetApiCache() {
    return this.to('GetApiCache');
  }

  /**
   * Grants permission to retrieve a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSource.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to read information about a custom domain name in AppSync
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDomainName.html
   */
  public toGetDomainName() {
    return this.to('GetDomainName');
  }

  /**
   * Grants permission to retrieve a function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetFunction.html
   */
  public toGetFunction() {
    return this.to('GetFunction');
  }

  /**
   * Grants permission to retrieve a GraphQL API
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApi.html
   */
  public toGetGraphqlApi() {
    return this.to('GetGraphqlApi');
  }

  /**
   * Grants permission to retrieve the introspection schema for a GraphQL API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetIntrospectionSchema.html
   */
  public toGetIntrospectionSchema() {
    return this.to('GetIntrospectionSchema');
  }

  /**
   * Grants permission to retrieve a resolver
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetResolver.html
   */
  public toGetResolver() {
    return this.to('GetResolver');
  }

  /**
   * Grants permission to retrieve the current status of a schema creation operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSchemaCreationStatus.html
   */
  public toGetSchemaCreationStatus() {
    return this.to('GetSchemaCreationStatus');
  }

  /**
   * Grants permission to retrieve a type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetType.html
   */
  public toGetType() {
    return this.to('GetType');
  }

  /**
   * Grants permission to send a GraphQL query to a GraphQL API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html
   */
  public toGraphQL() {
    return this.to('GraphQL');
  }

  /**
   * Grants permission to list the API keys for a given API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListApiKeys.html
   */
  public toListApiKeys() {
    return this.to('ListApiKeys');
  }

  /**
   * Grants permission to list the data sources for a given API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to enumerate custom domain names in AppSync
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDomainNames.html
   */
  public toListDomainNames() {
    return this.to('ListDomainNames');
  }

  /**
   * Grants permission to list the functions for a given API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListFunctions.html
   */
  public toListFunctions() {
    return this.to('ListFunctions');
  }

  /**
   * Grants permission to list GraphQL APIs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListGraphqlApis.html
   */
  public toListGraphqlApis() {
    return this.to('ListGraphqlApis');
  }

  /**
   * Grants permission to list the resolvers for a given API and type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolvers.html
   */
  public toListResolvers() {
    return this.to('ListResolvers');
  }

  /**
   * Grants permission to list the resolvers that are associated with a specific function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolversByFunction.html
   */
  public toListResolversByFunction() {
    return this.to('ListResolversByFunction');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the types for a given API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypes.html
   */
  public toListTypes() {
    return this.to('ListTypes');
  }

  /**
   * Grants permission to set a web ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_SetWebACL.html
   */
  public toSetWebACL() {
    return this.to('SetWebACL');
  }

  /**
   * Grants permission to add a new schema to your GraphQL API. This operation is asynchronous - GetSchemaCreationStatus can show when it has completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaCreation.html
   */
  public toStartSchemaCreation() {
    return this.to('StartSchemaCreation');
  }

  /**
   * Grants permission to tag a resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an API cache in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiCache.html
   */
  public toUpdateApiCache() {
    return this.to('UpdateApiCache');
  }

  /**
   * Grants permission to update an API key for a given API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiKey.html
   */
  public toUpdateApiKey() {
    return this.to('UpdateApiKey');
  }

  /**
   * Grants permission to update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update a custom domain name in AppSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDomainName.html
   */
  public toUpdateDomainName() {
    return this.to('UpdateDomainName');
  }

  /**
   * Grants permission to update an existing function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateFunction.html
   */
  public toUpdateFunction() {
    return this.to('UpdateFunction');
  }

  /**
   * Grants permission to update a GraphQL API
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
    return this.to('UpdateGraphqlApi');
  }

  /**
   * Grants permission to update a resolver
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateResolver.html
   */
  public toUpdateResolver() {
    return this.to('UpdateResolver');
  }

  /**
   * Grants permission to update a type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateType.html
   */
  public toUpdateType() {
    return this.to('UpdateType');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateApi',
      'CreateApiCache',
      'CreateApiKey',
      'CreateDataSource',
      'CreateDomainName',
      'CreateFunction',
      'CreateGraphqlApi',
      'CreateResolver',
      'CreateType',
      'DeleteApiCache',
      'DeleteApiKey',
      'DeleteDataSource',
      'DeleteDomainName',
      'DeleteFunction',
      'DeleteGraphqlApi',
      'DeleteResolver',
      'DeleteType',
      'DisassociateApi',
      'FlushApiCache',
      'GraphQL',
      'SetWebACL',
      'StartSchemaCreation',
      'UpdateApiCache',
      'UpdateApiKey',
      'UpdateDataSource',
      'UpdateDomainName',
      'UpdateFunction',
      'UpdateGraphqlApi',
      'UpdateResolver',
      'UpdateType'
    ],
    Read: [
      'GetApiAssociation',
      'GetApiCache',
      'GetDataSource',
      'GetDomainName',
      'GetFunction',
      'GetGraphqlApi',
      'GetIntrospectionSchema',
      'GetResolver',
      'GetSchemaCreationStatus',
      'GetType',
      'ListTagsForResource'
    ],
    List: [
      'ListApiKeys',
      'ListDataSources',
      'ListDomainNames',
      'ListFunctions',
      'ListGraphqlApis',
      'ListResolvers',
      'ListResolversByFunction',
      'ListTypes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:apis/${ graphQLAPIId }/datasources/${ datasourceName }`);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/appsync/latest/devguide/custom-domain-name.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:domainnames/${ domainName }`);
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
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:apis/${ graphQLAPIId }`);
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
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:apis/${ graphQLAPIId }/types/${ typeName }/fields/${ fieldName }`);
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
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:apis/${ graphQLAPIId }/types/${ typeName }`);
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
    return this.on(`arn:${ partition || 'aws' }:appsync:${ region || '*' }:${ account || '*' }:apis/${ graphQLAPIId }/functions/${ functionId }`);
  }
}
