import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [clouddirectory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Clouddirectory extends PolicyStatement {
  public servicePrefix = 'clouddirectory';

  /**
   * Statement provider for service [clouddirectory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a new Facet to an object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AddFacetToObject.html
   */
  public toAddFacetToObject() {
    return this.to('AddFacetToObject');
  }

  /**
   * Copies input published schema into Directory with same name and version as that of published schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html
   */
  public toApplySchema() {
    return this.to('ApplySchema');
  }

  /**
   * Attaches an existing object to another existing object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html
   */
  public toAttachObject() {
    return this.to('AttachObject');
  }

  /**
   * Attaches a policy object to any other object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    return this.to('AttachPolicy');
  }

  /**
   * Attaches the specified object to the specified index.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html
   */
  public toAttachToIndex() {
    return this.to('AttachToIndex');
  }

  /**
   * Attaches a typed link b/w a source & target object reference.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html
   */
  public toAttachTypedLink() {
    return this.to('AttachTypedLink');
  }

  /**
   * Performs all the read operations in a batch. Each individual operation inside BatchRead needs to be granted permissions explicitly.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html
   */
  public toBatchRead() {
    return this.to('BatchRead');
  }

  /**
   * Performs all the write operations in a batch. Each individual operation inside BatchWrite needs to be granted permissions explicitly.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html
   */
  public toBatchWrite() {
    return this.to('BatchWrite');
  }

  /**
   * Creates a Directory by copying the published schema into the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html
   */
  public toCreateDirectory() {
    return this.to('CreateDirectory');
  }

  /**
   * Creates a new Facet in a schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html
   */
  public toCreateFacet() {
    return this.to('CreateFacet');
  }

  /**
   * Creates an index object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html
   */
  public toCreateIndex() {
    return this.to('CreateIndex');
  }

  /**
   * Creates an object in a Directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html
   */
  public toCreateObject() {
    return this.to('CreateObject');
  }

  /**
   * Creates a new schema in a development state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html
   */
  public toCreateSchema() {
    return this.to('CreateSchema');
  }

  /**
   * Creates a new Typed Link facet in a schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html
   */
  public toCreateTypedLinkFacet() {
    return this.to('CreateTypedLinkFacet');
  }

  /**
   * Deletes a directory. Only disabled directories can be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html
   */
  public toDeleteDirectory() {
    return this.to('DeleteDirectory');
  }

  /**
   * Deletes a given Facet. All attributes and Rules associated with the facet will be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html
   */
  public toDeleteFacet() {
    return this.to('DeleteFacet');
  }

  /**
   * Deletes an object and its associated attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html
   */
  public toDeleteObject() {
    return this.to('DeleteObject');
  }

  /**
   * Deletes a given schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html
   */
  public toDeleteSchema() {
    return this.to('DeleteSchema');
  }

  /**
   * Deletes a given TypedLink Facet. All attributes and Rules associated with the facet will be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html
   */
  public toDeleteTypedLinkFacet() {
    return this.to('DeleteTypedLinkFacet');
  }

  /**
   * Detaches the specified object from the specified index.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html
   */
  public toDetachFromIndex() {
    return this.to('DetachFromIndex');
  }

  /**
   * Detaches a given object from the parent object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html
   */
  public toDetachObject() {
    return this.to('DetachObject');
  }

  /**
   * Detaches a policy from an object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    return this.to('DetachPolicy');
  }

  /**
   * Detaches a given typed link b/w given source and target object reference.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html
   */
  public toDetachTypedLink() {
    return this.to('DetachTypedLink');
  }

  /**
   * Disables the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html
   */
  public toDisableDirectory() {
    return this.to('DisableDirectory');
  }

  /**
   * Enables the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html
   */
  public toEnableDirectory() {
    return this.to('EnableDirectory');
  }

  /**
   * Retrieves metadata about a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html
   */
  public toGetDirectory() {
    return this.to('GetDirectory');
  }

  /**
   * Gets details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html
   */
  public toGetFacet() {
    return this.to('GetFacet');
  }

  /**
   * Retrieves attributes that are associated with a typed link.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html
   */
  public toGetLinkAttributes() {
    return this.to('GetLinkAttributes');
  }

  /**
   * Retrieves attributes within a facet that are associated with an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html
   */
  public toGetObjectAttributes() {
    return this.to('GetObjectAttributes');
  }

  /**
   * Retrieves metadata about an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html
   */
  public toGetObjectInformation() {
    return this.to('GetObjectInformation');
  }

  /**
   * Retrieves a JSON representation of the schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html
   */
  public toGetSchemaAsJson() {
    return this.to('GetSchemaAsJson');
  }

  /**
   * Returns identity attributes order information associated with a given typed link facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html
   */
  public toGetTypedLinkFacetInformation() {
    return this.to('GetTypedLinkFacetInformation');
  }

  /**
   * Lists schemas applied to a directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html
   */
  public toListAppliedSchemaArns() {
    return this.to('ListAppliedSchemaArns');
  }

  /**
   * Lists indices attached to an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html
   */
  public toListAttachedIndices() {
    return this.to('ListAttachedIndices');
  }

  /**
   * Retrieves the ARNs of schemas in the development state.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html
   */
  public toListDevelopmentSchemaArns() {
    return this.to('ListDevelopmentSchemaArns');
  }

  /**
   * Lists directories created within an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html
   */
  public toListDirectories() {
    return this.to('ListDirectories');
  }

  /**
   * Retrieves attributes attached to the facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html
   */
  public toListFacetAttributes() {
    return this.to('ListFacetAttributes');
  }

  /**
   * Retrieves the names of facets that exist in a schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html
   */
  public toListFacetNames() {
    return this.to('ListFacetNames');
  }

  /**
   * Returns a paginated list of all incoming TypedLinks for a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html
   */
  public toListIncomingTypedLinks() {
    return this.to('ListIncomingTypedLinks');
  }

  /**
   * Lists objects attached to the specified index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html
   */
  public toListIndex() {
    return this.to('ListIndex');
  }

  /**
   * Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListManagedSchemaArns.html
   */
  public toListManagedSchemaArns() {
    return this.to('ListManagedSchemaArns');
  }

  /**
   * Lists all attributes associated with an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html
   */
  public toListObjectAttributes() {
    return this.to('ListObjectAttributes');
  }

  /**
   * Returns a paginated list of child objects associated with a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html
   */
  public toListObjectChildren() {
    return this.to('ListObjectChildren');
  }

  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html
   */
  public toListObjectParentPaths() {
    return this.to('ListObjectParentPaths');
  }

  /**
   * Lists parent objects associated with a given object in pagination fashion.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html
   */
  public toListObjectParents() {
    return this.to('ListObjectParents');
  }

  /**
   * Returns policies attached to an object in pagination fashion.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html
   */
  public toListObjectPolicies() {
    return this.to('ListObjectPolicies');
  }

  /**
   * Returns a paginated list of all outgoing TypedLinks for a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html
   */
  public toListOutgoingTypedLinks() {
    return this.to('ListOutgoingTypedLinks');
  }

  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html
   */
  public toListPolicyAttachments() {
    return this.to('ListPolicyAttachments');
  }

  /**
   * Retrieves published schema ARNs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html
   */
  public toListPublishedSchemaArns() {
    return this.to('ListPublishedSchemaArns');
  }

  /**
   * Returns tags for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns a paginated list of attributes associated with typed link facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html
   */
  public toListTypedLinkFacetAttributes() {
    return this.to('ListTypedLinkFacetAttributes');
  }

  /**
   * Returns a paginated list of typed link facet names that exist in a schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html
   */
  public toListTypedLinkFacetNames() {
    return this.to('ListTypedLinkFacetNames');
  }

  /**
   * Lists all policies from the root of the Directory to the object specified.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html
   */
  public toLookupPolicy() {
    return this.to('LookupPolicy');
  }

  /**
   * Publishes a development schema with a version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html
   */
  public toPublishSchema() {
    return this.to('PublishSchema');
  }

  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html
   */
  public toPutSchemaFromJson() {
    return this.to('PutSchemaFromJson');
  }

  /**
   * Removes the specified facet from the specified object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html
   */
  public toRemoveFacetFromObject() {
    return this.to('RemoveFacetFromObject');
  }

  /**
   * Adds tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Adds/Updates/Deletes existing Attributes, Rules, or ObjectType of a Facet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html
   */
  public toUpdateFacet() {
    return this.to('UpdateFacet');
  }

  /**
   * Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its IdentityAttributeOrder.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html
   */
  public toUpdateLinkAttributes() {
    return this.to('UpdateLinkAttributes');
  }

  /**
   * Updates a given object's attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html
   */
  public toUpdateObjectAttributes() {
    return this.to('UpdateObjectAttributes');
  }

  /**
   * Updates the schema name with a new name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html
   */
  public toUpdateSchema() {
    return this.to('UpdateSchema');
  }

  /**
   * Adds/Updates/Deletes existing Attributes, Rules, identity attribute order of a TypedLink Facet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html
   */
  public toUpdateTypedLinkFacet() {
    return this.to('UpdateTypedLinkFacet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddFacetToObject",
      "ApplySchema",
      "AttachObject",
      "AttachPolicy",
      "AttachToIndex",
      "AttachTypedLink",
      "BatchWrite",
      "CreateDirectory",
      "CreateFacet",
      "CreateIndex",
      "CreateObject",
      "CreateSchema",
      "CreateTypedLinkFacet",
      "DeleteDirectory",
      "DeleteFacet",
      "DeleteObject",
      "DeleteSchema",
      "DeleteTypedLinkFacet",
      "DetachFromIndex",
      "DetachObject",
      "DetachPolicy",
      "DetachTypedLink",
      "DisableDirectory",
      "EnableDirectory",
      "PublishSchema",
      "PutSchemaFromJson",
      "RemoveFacetFromObject",
      "UpdateFacet",
      "UpdateLinkAttributes",
      "UpdateObjectAttributes",
      "UpdateSchema",
      "UpdateTypedLinkFacet"
    ],
    "Read": [
      "BatchRead",
      "GetDirectory",
      "GetFacet",
      "GetLinkAttributes",
      "GetObjectAttributes",
      "GetObjectInformation",
      "GetSchemaAsJson",
      "GetTypedLinkFacetInformation",
      "ListAttachedIndices",
      "ListFacetAttributes",
      "ListFacetNames",
      "ListIncomingTypedLinks",
      "ListIndex",
      "ListObjectAttributes",
      "ListObjectChildren",
      "ListObjectParentPaths",
      "ListObjectParents",
      "ListObjectPolicies",
      "ListOutgoingTypedLinks",
      "ListPolicyAttachments",
      "ListTagsForResource",
      "ListTypedLinkFacetAttributes",
      "ListTypedLinkFacetNames",
      "LookupPolicy"
    ],
    "List": [
      "ListAppliedSchemaArns",
      "ListDevelopmentSchemaArns",
      "ListDirectories",
      "ListManagedSchemaArns",
      "ListPublishedSchemaArns"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type appliedSchema to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   *
   * @param directoryId - Identifier for the directoryId.
   * @param schemaName - Identifier for the schemaName.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAppliedSchema(directoryId: string, schemaName: string, version: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:clouddirectory:${Region}:${Account}:directory/${DirectoryId}/schema/${SchemaName}/${Version}';
    arn = arn.replace('${DirectoryId}', directoryId);
    arn = arn.replace('${SchemaName}', schemaName);
    arn = arn.replace('${Version}', version);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type developmentSchema to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   *
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDevelopmentSchema(schemaName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:clouddirectory:${Region}:${Account}:schema/development/${SchemaName}';
    arn = arn.replace('${SchemaName}', schemaName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type directory to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:clouddirectory:${Region}:${Account}:directory/${DirectoryId}';
    arn = arn.replace('${DirectoryId}', directoryId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type publishedSchema to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   *
   * @param schemaName - Identifier for the schemaName.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPublishedSchema(schemaName: string, version: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:clouddirectory:${Region}:${Account}:schema/published/${SchemaName}/${Version}';
    arn = arn.replace('${SchemaName}', schemaName);
    arn = arn.replace('${Version}', version);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
