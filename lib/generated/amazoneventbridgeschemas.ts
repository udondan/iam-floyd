import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [schemas](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridgeschemas.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Schemas extends PolicyStatement {
  public servicePrefix = 'schemas';

  /**
   * Statement provider for service [schemas](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridgeschemas.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('schemas:CreateDiscoverer');
    return this;
  }

  /**
   * Create a new schema registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   */
  public toCreateRegistry() {
    this.to('schemas:CreateRegistry');
    return this;
  }

  /**
   * Create a new schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   */
  public toCreateSchema() {
    this.to('schemas:CreateSchema');
    return this;
  }

  /**
   * Deletes discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   */
  public toDeleteDiscoverer() {
    this.to('schemas:DeleteDiscoverer');
    return this;
  }

  /**
   * Deletes an existing registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   */
  public toDeleteRegistry() {
    this.to('schemas:DeleteRegistry');
    return this;
  }

  /**
   * Delete the resource-based policy attached to a given registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   */
  public toDeleteResourcePolicy() {
    this.to('schemas:DeleteResourcePolicy');
    return this;
  }

  /**
   * Deletes an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   */
  public toDeleteSchema() {
    this.to('schemas:DeleteSchema');
    return this;
  }

  /**
   * Deletes a specific version of schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   */
  public toDeleteSchemaVersion() {
    this.to('schemas:DeleteSchemaVersion');
    return this;
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   */
  public toDescribeCodeBinding() {
    this.to('schemas:DescribeCodeBinding');
    return this;
  }

  /**
   * Retrieves discoverer metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   */
  public toDescribeDiscoverer() {
    this.to('schemas:DescribeDiscoverer');
    return this;
  }

  /**
   * Describes an existing registry metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   */
  public toDescribeRegistry() {
    this.to('schemas:DescribeRegistry');
    return this;
  }

  /**
   * Retrieves an existing schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   */
  public toDescribeSchema() {
    this.to('schemas:DescribeSchema');
    return this;
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   */
  public toGetCodeBindingSource() {
    this.to('schemas:GetCodeBindingSource');
    return this;
  }

  /**
   * Retrieves schema for the provided list of sample events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  public toGetDiscoveredSchema() {
    this.to('schemas:GetDiscoveredSchema');
    return this;
  }

  /**
   * Retrieves the resource-based policy attached to a given registry.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   */
  public toGetResourcePolicy() {
    this.to('schemas:GetResourcePolicy');
    return this;
  }

  /**
   * Lists all the discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   */
  public toListDiscoverers() {
    this.to('schemas:ListDiscoverers');
    return this;
  }

  /**
   * List all discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   */
  public toListRegistries() {
    this.to('schemas:ListRegistries');
    return this;
  }

  /**
   * List all versions of a schema.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   */
  public toListSchemaVersions() {
    this.to('schemas:ListSchemaVersions');
    return this;
  }

  /**
   * List all schemas.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   */
  public toListSchemas() {
    this.to('schemas:ListSchemas');
    return this;
  }

  /**
   * This action lists tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    this.to('schemas:ListTagsForResource');
    return this;
  }

  /**
   * Generates code for specific schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   */
  public toPutCodeBinding() {
    this.to('schemas:PutCodeBinding');
    return this;
  }

  /**
   * Attach resource-based policy to the specific registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   */
  public toPutResourcePolicy() {
    this.to('schemas:PutResourcePolicy');
    return this;
  }

  /**
   * Searches schemas based on specified keywords in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   */
  public toSearchSchemas() {
    this.to('schemas:SearchSchemas');
    return this;
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   */
  public toStartDiscoverer() {
    this.to('schemas:StartDiscoverer');
    return this;
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   */
  public toStopDiscoverer() {
    this.to('schemas:StopDiscoverer');
    return this;
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
    this.to('schemas:TagResource');
    return this;
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
    this.to('schemas:UntagResource');
    return this;
  }

  /**
   * Updates an existing discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   */
  public toUpdateDiscoverer() {
    this.to('schemas:UpdateDiscoverer');
    return this;
  }

  /**
   * Updates an existing registry metadata in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   */
  public toUpdateRegistry() {
    this.to('schemas:UpdateRegistry');
    return this;
  }

  /**
   * Updates an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema
   */
  public toUpdateSchema() {
    this.to('schemas:UpdateSchema');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDiscoverer",
      "CreateRegistry",
      "CreateSchema",
      "DeleteDiscoverer",
      "DeleteRegistry",
      "DeleteResourcePolicy",
      "DeleteSchema",
      "DeleteSchemaVersion",
      "PutCodeBinding",
      "PutResourcePolicy",
      "StartDiscoverer",
      "StopDiscoverer",
      "UpdateDiscoverer",
      "UpdateRegistry",
      "UpdateSchema"
    ],
    "Read": [
      "DescribeCodeBinding",
      "DescribeDiscoverer",
      "DescribeRegistry",
      "DescribeSchema",
      "GetCodeBindingSource",
      "GetDiscoveredSchema",
      "GetResourcePolicy"
    ],
    "List": [
      "ListDiscoverers",
      "ListRegistries",
      "ListSchemaVersions",
      "ListSchemas",
      "ListTagsForResource",
      "SearchSchemas"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiscoverer(discovererId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:schemas:${Region}:${Account}:discoverer/${DiscovererId}';
    arn = arn.replace('${DiscovererId}', discovererId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   *
   * @param registryName - Identifier for the registryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:schemas:${Region}:${Account}:registry/${RegistryName}';
    arn = arn.replace('${RegistryName}', registryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchema(registryName: string, schemaName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:schemas:${Region}:${Account}:schema/${RegistryName}/${SchemaName}';
    arn = arn.replace('${RegistryName}', registryName);
    arn = arn.replace('${SchemaName}', schemaName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
