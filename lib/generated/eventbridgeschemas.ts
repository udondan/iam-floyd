import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [schemas](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Schemas extends PolicyStatement {
  public servicePrefix = 'schemas';

  /**
   * Statement provider for service [schemas](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Creates an event schema discoverer. Once created, your events will be automatically map into corresponding schema documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer
   */
  public toCreateDiscoverer() {
    return this.to('CreateDiscoverer');
  }

  /**
   * Create a new schema registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   */
  public toCreateRegistry() {
    return this.to('CreateRegistry');
  }

  /**
   * Create a new schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   */
  public toCreateSchema() {
    return this.to('CreateSchema');
  }

  /**
   * Deletes discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   */
  public toDeleteDiscoverer() {
    return this.to('DeleteDiscoverer');
  }

  /**
   * Deletes an existing registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   */
  public toDeleteRegistry() {
    return this.to('DeleteRegistry');
  }

  /**
   * Delete the resource-based policy attached to a given registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Deletes an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   */
  public toDeleteSchema() {
    return this.to('DeleteSchema');
  }

  /**
   * Deletes a specific version of schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   */
  public toDeleteSchemaVersion() {
    return this.to('DeleteSchemaVersion');
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   */
  public toDescribeCodeBinding() {
    return this.to('DescribeCodeBinding');
  }

  /**
   * Retrieves discoverer metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   */
  public toDescribeDiscoverer() {
    return this.to('DescribeDiscoverer');
  }

  /**
   * Describes an existing registry metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   */
  public toDescribeRegistry() {
    return this.to('DescribeRegistry');
  }

  /**
   * Retrieves an existing schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   */
  public toDescribeSchema() {
    return this.to('DescribeSchema');
  }

  /**
   * Allows exporting AWS registry or discovered schemas in OpenAPI 3 format to JSONSchema format.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#ExportSchema
   */
  public toExportSchema() {
    return this.to('ExportSchema');
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   */
  public toGetCodeBindingSource() {
    return this.to('GetCodeBindingSource');
  }

  /**
   * Retrieves schema for the provided list of sample events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  public toGetDiscoveredSchema() {
    return this.to('GetDiscoveredSchema');
  }

  /**
   * Retrieves the resource-based policy attached to a given registry.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Lists all the discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   */
  public toListDiscoverers() {
    return this.to('ListDiscoverers');
  }

  /**
   * List all discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   */
  public toListRegistries() {
    return this.to('ListRegistries');
  }

  /**
   * List all versions of a schema.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   */
  public toListSchemaVersions() {
    return this.to('ListSchemaVersions');
  }

  /**
   * List all schemas.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * This action lists tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Generates code for specific schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   */
  public toPutCodeBinding() {
    return this.to('PutCodeBinding');
  }

  /**
   * Attach resource-based policy to the specific registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Searches schemas based on specified keywords in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   */
  public toSearchSchemas() {
    return this.to('SearchSchemas');
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   */
  public toStartDiscoverer() {
    return this.to('StartDiscoverer');
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   */
  public toStopDiscoverer() {
    return this.to('StopDiscoverer');
  }

  /**
   * This action tags an resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * This action removes a tag from on a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates an existing discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   */
  public toUpdateDiscoverer() {
    return this.to('UpdateDiscoverer');
  }

  /**
   * Updates an existing registry metadata in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   */
  public toUpdateRegistry() {
    return this.to('UpdateRegistry');
  }

  /**
   * Updates an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema
   */
  public toUpdateSchema() {
    return this.to('UpdateSchema');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDiscoverer',
      'CreateRegistry',
      'CreateSchema',
      'DeleteDiscoverer',
      'DeleteRegistry',
      'DeleteResourcePolicy',
      'DeleteSchema',
      'DeleteSchemaVersion',
      'PutCodeBinding',
      'PutResourcePolicy',
      'StartDiscoverer',
      'StopDiscoverer',
      'UpdateDiscoverer',
      'UpdateRegistry',
      'UpdateSchema'
    ],
    Read: [
      'DescribeCodeBinding',
      'DescribeDiscoverer',
      'DescribeRegistry',
      'DescribeSchema',
      'ExportSchema',
      'GetCodeBindingSource',
      'GetDiscoveredSchema',
      'GetResourcePolicy'
    ],
    List: [
      'ListDiscoverers',
      'ListRegistries',
      'ListSchemaVersions',
      'ListSchemas',
      'ListTagsForResource',
      'SearchSchemas'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type discoverer to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   *
   * @param discovererId - Identifier for the discovererId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiscoverer(discovererId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Schemas.defaultPartition }:schemas:${ region || '*' }:${ account || '*' }:discoverer/${ discovererId }`);
  }

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   *
   * @param registryName - Identifier for the registryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Schemas.defaultPartition }:schemas:${ region || '*' }:${ account || '*' }:registry/${ registryName }`);
  }

  /**
   * Adds a resource of type schema to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   *
   * @param registryName - Identifier for the registryName.
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchema(registryName: string, schemaName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Schemas.defaultPartition }:schemas:${ region || '*' }:${ account || '*' }:schema/${ registryName }/${ schemaName }`);
  }
}
