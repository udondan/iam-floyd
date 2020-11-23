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
    this.to('AddFacetToObject');
    return this;
  }

  /**
   * Copies input published schema into Directory with same name and version as that of published schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html
   */
  public toApplySchema() {
    this.to('ApplySchema');
    return this;
  }

  /**
   * Attaches an existing object to another existing object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html
   */
  public toAttachObject() {
    this.to('AttachObject');
    return this;
  }

  /**
   * Attaches a policy object to any other object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    this.to('AttachPolicy');
    return this;
  }

  /**
   * Attaches the specified object to the specified index.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html
   */
  public toAttachToIndex() {
    this.to('AttachToIndex');
    return this;
  }

  /**
   * Attaches a typed link b/w a source & target object reference.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html
   */
  public toAttachTypedLink() {
    this.to('AttachTypedLink');
    return this;
  }

  /**
   * Performs all the read operations in a batch. Each individual operation inside BatchRead needs to be granted permissions explicitly.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html
   */
  public toBatchRead() {
    this.to('BatchRead');
    return this;
  }

  /**
   * Performs all the write operations in a batch. Each individual operation inside BatchWrite needs to be granted permissions explicitly.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html
   */
  public toBatchWrite() {
    this.to('BatchWrite');
    return this;
  }

  /**
   * Creates a Directory by copying the published schema into the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html
   */
  public toCreateDirectory() {
    this.to('CreateDirectory');
    return this;
  }

  /**
   * Creates a new Facet in a schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html
   */
  public toCreateFacet() {
    this.to('CreateFacet');
    return this;
  }

  /**
   * Creates an index object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html
   */
  public toCreateIndex() {
    this.to('CreateIndex');
    return this;
  }

  /**
   * Creates an object in a Directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html
   */
  public toCreateObject() {
    this.to('CreateObject');
    return this;
  }

  /**
   * Creates a new schema in a development state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html
   */
  public toCreateSchema() {
    this.to('CreateSchema');
    return this;
  }

  /**
   * Creates a new Typed Link facet in a schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html
   */
  public toCreateTypedLinkFacet() {
    this.to('CreateTypedLinkFacet');
    return this;
  }

  /**
   * Deletes a directory. Only disabled directories can be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html
   */
  public toDeleteDirectory() {
    this.to('DeleteDirectory');
    return this;
  }

  /**
   * Deletes a given Facet. All attributes and Rules associated with the facet will be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html
   */
  public toDeleteFacet() {
    this.to('DeleteFacet');
    return this;
  }

  /**
   * Deletes an object and its associated attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html
   */
  public toDeleteObject() {
    this.to('DeleteObject');
    return this;
  }

  /**
   * Deletes a given schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html
   */
  public toDeleteSchema() {
    this.to('DeleteSchema');
    return this;
  }

  /**
   * Deletes a given TypedLink Facet. All attributes and Rules associated with the facet will be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html
   */
  public toDeleteTypedLinkFacet() {
    this.to('DeleteTypedLinkFacet');
    return this;
  }

  /**
   * Detaches the specified object from the specified index.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html
   */
  public toDetachFromIndex() {
    this.to('DetachFromIndex');
    return this;
  }

  /**
   * Detaches a given object from the parent object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html
   */
  public toDetachObject() {
    this.to('DetachObject');
    return this;
  }

  /**
   * Detaches a policy from an object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    this.to('DetachPolicy');
    return this;
  }

  /**
   * Detaches a given typed link b/w given source and target object reference.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html
   */
  public toDetachTypedLink() {
    this.to('DetachTypedLink');
    return this;
  }

  /**
   * Disables the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html
   */
  public toDisableDirectory() {
    this.to('DisableDirectory');
    return this;
  }

  /**
   * Enables the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html
   */
  public toEnableDirectory() {
    this.to('EnableDirectory');
    return this;
  }

  /**
   * Retrieves metadata about a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html
   */
  public toGetDirectory() {
    this.to('GetDirectory');
    return this;
  }

  /**
   * Gets details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html
   */
  public toGetFacet() {
    this.to('GetFacet');
    return this;
  }

  /**
   * Retrieves attributes that are associated with a typed link.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html
   */
  public toGetLinkAttributes() {
    this.to('GetLinkAttributes');
    return this;
  }

  /**
   * Retrieves attributes within a facet that are associated with an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html
   */
  public toGetObjectAttributes() {
    this.to('GetObjectAttributes');
    return this;
  }

  /**
   * Retrieves metadata about an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html
   */
  public toGetObjectInformation() {
    this.to('GetObjectInformation');
    return this;
  }

  /**
   * Retrieves a JSON representation of the schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html
   */
  public toGetSchemaAsJson() {
    this.to('GetSchemaAsJson');
    return this;
  }

  /**
   * Returns identity attributes order information associated with a given typed link facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html
   */
  public toGetTypedLinkFacetInformation() {
    this.to('GetTypedLinkFacetInformation');
    return this;
  }

  /**
   * Lists schemas applied to a directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html
   */
  public toListAppliedSchemaArns() {
    this.to('ListAppliedSchemaArns');
    return this;
  }

  /**
   * Lists indices attached to an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html
   */
  public toListAttachedIndices() {
    this.to('ListAttachedIndices');
    return this;
  }

  /**
   * Retrieves the ARNs of schemas in the development state.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html
   */
  public toListDevelopmentSchemaArns() {
    this.to('ListDevelopmentSchemaArns');
    return this;
  }

  /**
   * Lists directories created within an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html
   */
  public toListDirectories() {
    this.to('ListDirectories');
    return this;
  }

  /**
   * Retrieves attributes attached to the facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html
   */
  public toListFacetAttributes() {
    this.to('ListFacetAttributes');
    return this;
  }

  /**
   * Retrieves the names of facets that exist in a schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html
   */
  public toListFacetNames() {
    this.to('ListFacetNames');
    return this;
  }

  /**
   * Returns a paginated list of all incoming TypedLinks for a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html
   */
  public toListIncomingTypedLinks() {
    this.to('ListIncomingTypedLinks');
    return this;
  }

  /**
   * Lists objects attached to the specified index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html
   */
  public toListIndex() {
    this.to('ListIndex');
    return this;
  }

  /**
   * Lists all attributes associated with an object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html
   */
  public toListObjectAttributes() {
    this.to('ListObjectAttributes');
    return this;
  }

  /**
   * Returns a paginated list of child objects associated with a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html
   */
  public toListObjectChildren() {
    this.to('ListObjectChildren');
    return this;
  }

  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html
   */
  public toListObjectParentPaths() {
    this.to('ListObjectParentPaths');
    return this;
  }

  /**
   * Lists parent objects associated with a given object in pagination fashion.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html
   */
  public toListObjectParents() {
    this.to('ListObjectParents');
    return this;
  }

  /**
   * Returns policies attached to an object in pagination fashion.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html
   */
  public toListObjectPolicies() {
    this.to('ListObjectPolicies');
    return this;
  }

  /**
   * Returns a paginated list of all outgoing TypedLinks for a given object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html
   */
  public toListOutgoingTypedLinks() {
    this.to('ListOutgoingTypedLinks');
    return this;
  }

  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html
   */
  public toListPolicyAttachments() {
    this.to('ListPolicyAttachments');
    return this;
  }

  /**
   * Retrieves published schema ARNs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html
   */
  public toListPublishedSchemaArns() {
    this.to('ListPublishedSchemaArns');
    return this;
  }

  /**
   * Returns tags for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Returns a paginated list of attributes associated with typed link facet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html
   */
  public toListTypedLinkFacetAttributes() {
    this.to('ListTypedLinkFacetAttributes');
    return this;
  }

  /**
   * Returns a paginated list of typed link facet names that exist in a schema.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html
   */
  public toListTypedLinkFacetNames() {
    this.to('ListTypedLinkFacetNames');
    return this;
  }

  /**
   * Lists all policies from the root of the Directory to the object specified.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html
   */
  public toLookupPolicy() {
    this.to('LookupPolicy');
    return this;
  }

  /**
   * Publishes a development schema with a version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html
   */
  public toPublishSchema() {
    this.to('PublishSchema');
    return this;
  }

  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html
   */
  public toPutSchemaFromJson() {
    this.to('PutSchemaFromJson');
    return this;
  }

  /**
   * Removes the specified facet from the specified object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html
   */
  public toRemoveFacetFromObject() {
    this.to('RemoveFacetFromObject');
    return this;
  }

  /**
   * Adds tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Removes tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Adds/Updates/Deletes existing Attributes, Rules, or ObjectType of a Facet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html
   */
  public toUpdateFacet() {
    this.to('UpdateFacet');
    return this;
  }

  /**
   * Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its IdentityAttributeOrder.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html
   */
  public toUpdateLinkAttributes() {
    this.to('UpdateLinkAttributes');
    return this;
  }

  /**
   * Updates a given object's attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html
   */
  public toUpdateObjectAttributes() {
    this.to('UpdateObjectAttributes');
    return this;
  }

  /**
   * Updates the schema name with a new name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html
   */
  public toUpdateSchema() {
    this.to('UpdateSchema');
    return this;
  }

  /**
   * Adds/Updates/Deletes existing Attributes, Rules, identity attribute order of a TypedLink Facet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html
   */
  public toUpdateTypedLinkFacet() {
    this.to('UpdateTypedLinkFacet');
    return this;
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
