import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to create an event schema discoverer. Once created, your events will be automatically map into corresponding schema documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer
   */
  public toCreateDiscoverer() {
    return this.to('CreateDiscoverer');
  }

  /**
   * Grants permission to create a new schema registry in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   */
  public toCreateRegistry() {
    return this.to('CreateRegistry');
  }

  /**
   * Grants permission to create a new schema in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   */
  public toCreateSchema() {
    return this.to('CreateSchema');
  }

  /**
   * Grants permission to delete discoverer in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   */
  public toDeleteDiscoverer() {
    return this.to('DeleteDiscoverer');
  }

  /**
   * Grants permission to delete an existing registry in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   */
  public toDeleteRegistry() {
    return this.to('DeleteRegistry');
  }

  /**
   * Grants permission to delete the resource-based policy attached to a given registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete an existing schema in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   */
  public toDeleteSchema() {
    return this.to('DeleteSchema');
  }

  /**
   * Grants permission to delete a specific version of schema in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   */
  public toDeleteSchemaVersion() {
    return this.to('DeleteSchemaVersion');
  }

  /**
   * Grants permission to retrieve metadata for generated code for specific schema in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   */
  public toDescribeCodeBinding() {
    return this.to('DescribeCodeBinding');
  }

  /**
   * Grants permission to retrieve discoverer metadata in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   */
  public toDescribeDiscoverer() {
    return this.to('DescribeDiscoverer');
  }

  /**
   * Grants permission to describe an existing registry metadata in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   */
  public toDescribeRegistry() {
    return this.to('DescribeRegistry');
  }

  /**
   * Grants permission to retrieve an existing schema in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   */
  public toDescribeSchema() {
    return this.to('DescribeSchema');
  }

  /**
   * Grants permission to export the AWS registry or discovered schemas in OpenAPI 3 format to JSONSchema format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#ExportSchema
   */
  public toExportSchema() {
    return this.to('ExportSchema');
  }

  /**
   * Grants permission to retrieve metadata for generated code for specific schema in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   */
  public toGetCodeBindingSource() {
    return this.to('GetCodeBindingSource');
  }

  /**
   * Grants permission to retrieve a schema for the provided list of sample events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  public toGetDiscoveredSchema() {
    return this.to('GetDiscoveredSchema');
  }

  /**
   * Grants permission to retrieve the resource-based policy attached to a given registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to list all discoverers in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   */
  public toListDiscoverers() {
    return this.to('ListDiscoverers');
  }

  /**
   * Grants permission to list all registries in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   */
  public toListRegistries() {
    return this.to('ListRegistries');
  }

  /**
   * Grants permission to list all versions of a schema
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   */
  public toListSchemaVersions() {
    return this.to('ListSchemaVersions');
  }

  /**
   * Grants permission to list all schemas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to lists tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to generate code for specific schema in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   */
  public toPutCodeBinding() {
    return this.to('PutCodeBinding');
  }

  /**
   * Grants permission to attach a resource-based policy to a given registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to search schemas based on specified keywords in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   */
  public toSearchSchemas() {
    return this.to('SearchSchemas');
  }

  /**
   * Grants permission to start the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   */
  public toStartDiscoverer() {
    return this.to('StartDiscoverer');
  }

  /**
   * Grants permission to stop the specified discoverer. Once stopped the discoverer will no longer register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   */
  public toStopDiscoverer() {
    return this.to('StopDiscoverer');
  }

  /**
   * Grants permission to tag a resource
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
   * Grants permission to remove a tag from a resource
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
   * Grants permission to update an existing discoverer in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   */
  public toUpdateDiscoverer() {
    return this.to('UpdateDiscoverer');
  }

  /**
   * Grants permission to update an existing registry metadata in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   */
  public toUpdateRegistry() {
    return this.to('UpdateRegistry');
  }

  /**
   * Grants permission to update an existing schema in your account
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
      'GetResourcePolicy',
      'ListTagsForResource'
    ],
    List: [
      'ListDiscoverers',
      'ListRegistries',
      'ListSchemaVersions',
      'ListSchemas',
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
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-schema.html
   *
   * @param discovererId - Identifier for the discovererId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiscoverer(discovererId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:schemas:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:discoverer/${ discovererId }`);
  }

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-schema.html
   *
   * @param registryName - Identifier for the registryName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:schemas:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registry/${ registryName }`);
  }

  /**
   * Adds a resource of type schema to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-schema.html
   *
   * @param registryName - Identifier for the registryName.
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchema(registryName: string, schemaName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:schemas:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:schema/${ registryName }/${ schemaName }`);
  }

  /**
   * Filters access by allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDiscoverer()
   * - .toCreateRegistry()
   * - .toCreateSchema()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - discoverer
   * - registry
   * - schema
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDiscoverer()
   * - .toCreateRegistry()
   * - .toCreateSchema()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
