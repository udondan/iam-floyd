import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [clouddirectory](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Clouddirectory extends PolicyStatement {
  public servicePrefix = 'clouddirectory';
  protected actionList: Actions = {
    "AddFacetToObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AddFacetToObject.html",
      "description": "Adds a new Facet to an object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ApplySchema": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html",
      "description": "Copies input published schema into Directory with same name and version as that of published schema.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "AttachObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html",
      "description": "Attaches an existing object to another existing object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "AttachPolicy": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html",
      "description": "Attaches a policy object to any other object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "AttachToIndex": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html",
      "description": "Attaches the specified object to the specified index.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "AttachTypedLink": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html",
      "description": "Attaches a typed link b/w a source & target object reference.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "BatchRead": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html",
      "description": "Performs all the read operations in a batch. Each individual operation inside BatchRead needs to be granted permissions explicitly.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "BatchWrite": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html",
      "description": "Performs all the write operations in a batch. Each individual operation inside BatchWrite needs to be granted permissions explicitly.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html",
      "description": "Creates a Directory by copying the published schema into the directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "publishedSchema": {
          "required": true
        }
      }
    },
    "CreateFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html",
      "description": "Creates a new Facet in a schema.",
      "accessLevel": "Write",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        }
      }
    },
    "CreateIndex": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html",
      "description": "Creates an index object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html",
      "description": "Creates an object in a Directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateSchema": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html",
      "description": "Creates a new schema in a development state.",
      "accessLevel": "Write"
    },
    "CreateTypedLinkFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html",
      "description": "Creates a new Typed Link facet in a schema.",
      "accessLevel": "Write",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        }
      }
    },
    "DeleteDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html",
      "description": "Deletes a directory. Only disabled directories can be deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html",
      "description": "Deletes a given Facet. All attributes and Rules associated with the facet will be deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        }
      }
    },
    "DeleteObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html",
      "description": "Deletes an object and its associated attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteSchema": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html",
      "description": "Deletes a given schema.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "DeleteTypedLinkFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html",
      "description": "Deletes a given TypedLink Facet. All attributes and Rules associated with the facet will be deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        }
      }
    },
    "DetachFromIndex": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html",
      "description": "Detaches the specified object from the specified index.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DetachObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html",
      "description": "Detaches a given object from the parent object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DetachPolicy": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html",
      "description": "Detaches a policy from an object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DetachTypedLink": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html",
      "description": "Detaches a given typed link b/w given source and target object reference.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DisableDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html",
      "description": "Disables the specified directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "EnableDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html",
      "description": "Enables the specified directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html",
      "description": "Retrieves metadata about a directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html",
      "description": "Gets details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "GetLinkAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html",
      "description": "Retrieves attributes that are associated with a typed link.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetObjectAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html",
      "description": "Retrieves attributes within a facet that are associated with an object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetObjectInformation": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html",
      "description": "Retrieves metadata about an object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetSchemaAsJson": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html",
      "description": "Retrieves a JSON representation of the schema.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "GetTypedLinkFacetInformation": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html",
      "description": "Returns identity attributes order information associated with a given typed link facet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "ListAppliedSchemaArns": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html",
      "description": "Lists schemas applied to a directory.",
      "accessLevel": "List",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListAttachedIndices": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html",
      "description": "Lists indices attached to an object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListDevelopmentSchemaArns": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html",
      "description": "Retrieves the ARNs of schemas in the development state.",
      "accessLevel": "List"
    },
    "ListDirectories": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html",
      "description": "Lists directories created within an account.",
      "accessLevel": "List"
    },
    "ListFacetAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html",
      "description": "Retrieves attributes attached to the facet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "ListFacetNames": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html",
      "description": "Retrieves the names of facets that exist in a schema.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "ListIncomingTypedLinks": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html",
      "description": "Returns a paginated list of all incoming TypedLinks for a given object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListIndex": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html",
      "description": "Lists objects attached to the specified index.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListObjectAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html",
      "description": "Lists all attributes associated with an object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListObjectChildren": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html",
      "description": "Returns a paginated list of child objects associated with a given object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListObjectParentPaths": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html",
      "description": "Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListObjectParents": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html",
      "description": "Lists parent objects associated with a given object in pagination fashion.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListObjectPolicies": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html",
      "description": "Returns policies attached to an object in pagination fashion.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListOutgoingTypedLinks": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html",
      "description": "Returns a paginated list of all outgoing TypedLinks for a given object.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListPolicyAttachments": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html",
      "description": "Returns all of the ObjectIdentifiers to which a given policy is attached.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListPublishedSchemaArns": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html",
      "description": "Retrieves published schema ARNs.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html",
      "description": "Returns tags for a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListTypedLinkFacetAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html",
      "description": "Returns a paginated list of attributes associated with typed link facet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "ListTypedLinkFacetNames": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html",
      "description": "Returns a paginated list of typed link facet names that exist in a schema.",
      "accessLevel": "Read",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        },
        "publishedSchema": {
          "required": true
        }
      }
    },
    "LookupPolicy": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html",
      "description": "Lists all policies from the root of the Directory to the object specified.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "PublishSchema": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html",
      "description": "Publishes a development schema with a version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        }
      }
    },
    "PutSchemaFromJson": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html",
      "description": "Allows a schema to be updated using JSON upload. Only available for development schemas.",
      "accessLevel": "Write"
    },
    "RemoveFacetFromObject": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html",
      "description": "Removes the specified facet from the specified object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html",
      "description": "Adds tags to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html",
      "description": "Removes tags from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html",
      "description": "Adds/Updates/Deletes existing Attributes, Rules, or ObjectType of a Facet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "appliedSchema": {
          "required": true
        },
        "developmentSchema": {
          "required": true
        }
      }
    },
    "UpdateLinkAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html",
      "description": "Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its IdentityAttributeOrder.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateObjectAttributes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html",
      "description": "Updates a given object's attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateSchema": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html",
      "description": "Updates the schema name with a new name.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        }
      }
    },
    "UpdateTypedLinkFacet": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html",
      "description": "Adds/Updates/Deletes existing Attributes, Rules, identity attribute order of a TypedLink Facet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "developmentSchema": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "appliedSchema": {
      "name": "appliedSchema",
      "url": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory",
      "arn": "arn:${Partition}:clouddirectory:${Region}:${Account}:directory/${DirectoryId}/schema/${SchemaName}/${Version}",
      "conditionKeys": []
    },
    "developmentSchema": {
      "name": "developmentSchema",
      "url": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory",
      "arn": "arn:${Partition}:clouddirectory:${Region}:${Account}:schema/development/${SchemaName}",
      "conditionKeys": []
    },
    "directory": {
      "name": "directory",
      "url": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory",
      "arn": "arn:${Partition}:clouddirectory:${Region}:${Account}:directory/${DirectoryId}",
      "conditionKeys": []
    },
    "publishedSchema": {
      "name": "publishedSchema",
      "url": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory",
      "arn": "arn:${Partition}:clouddirectory:${Region}:${Account}:schema/published/${SchemaName}/${Version}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [clouddirectory](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html).
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
    this.add('clouddirectory:AddFacetToObject');
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
    this.add('clouddirectory:ApplySchema');
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
    this.add('clouddirectory:AttachObject');
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
    this.add('clouddirectory:AttachPolicy');
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
    this.add('clouddirectory:AttachToIndex');
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
    this.add('clouddirectory:AttachTypedLink');
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
    this.add('clouddirectory:BatchRead');
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
    this.add('clouddirectory:BatchWrite');
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
    this.add('clouddirectory:CreateDirectory');
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
    this.add('clouddirectory:CreateFacet');
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
    this.add('clouddirectory:CreateIndex');
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
    this.add('clouddirectory:CreateObject');
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
    this.add('clouddirectory:CreateSchema');
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
    this.add('clouddirectory:CreateTypedLinkFacet');
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
    this.add('clouddirectory:DeleteDirectory');
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
    this.add('clouddirectory:DeleteFacet');
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
    this.add('clouddirectory:DeleteObject');
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
    this.add('clouddirectory:DeleteSchema');
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
    this.add('clouddirectory:DeleteTypedLinkFacet');
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
    this.add('clouddirectory:DetachFromIndex');
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
    this.add('clouddirectory:DetachObject');
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
    this.add('clouddirectory:DetachPolicy');
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
    this.add('clouddirectory:DetachTypedLink');
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
    this.add('clouddirectory:DisableDirectory');
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
    this.add('clouddirectory:EnableDirectory');
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
    this.add('clouddirectory:GetDirectory');
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
    this.add('clouddirectory:GetFacet');
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
    this.add('clouddirectory:GetLinkAttributes');
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
    this.add('clouddirectory:GetObjectAttributes');
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
    this.add('clouddirectory:GetObjectInformation');
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
    this.add('clouddirectory:GetSchemaAsJson');
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
    this.add('clouddirectory:GetTypedLinkFacetInformation');
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
    this.add('clouddirectory:ListAppliedSchemaArns');
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
    this.add('clouddirectory:ListAttachedIndices');
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
    this.add('clouddirectory:ListDevelopmentSchemaArns');
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
    this.add('clouddirectory:ListDirectories');
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
    this.add('clouddirectory:ListFacetAttributes');
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
    this.add('clouddirectory:ListFacetNames');
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
    this.add('clouddirectory:ListIncomingTypedLinks');
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
    this.add('clouddirectory:ListIndex');
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
    this.add('clouddirectory:ListObjectAttributes');
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
    this.add('clouddirectory:ListObjectChildren');
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
    this.add('clouddirectory:ListObjectParentPaths');
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
    this.add('clouddirectory:ListObjectParents');
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
    this.add('clouddirectory:ListObjectPolicies');
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
    this.add('clouddirectory:ListOutgoingTypedLinks');
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
    this.add('clouddirectory:ListPolicyAttachments');
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
    this.add('clouddirectory:ListPublishedSchemaArns');
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
    this.add('clouddirectory:ListTagsForResource');
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
    this.add('clouddirectory:ListTypedLinkFacetAttributes');
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
    this.add('clouddirectory:ListTypedLinkFacetNames');
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
    this.add('clouddirectory:LookupPolicy');
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
    this.add('clouddirectory:PublishSchema');
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
    this.add('clouddirectory:PutSchemaFromJson');
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
    this.add('clouddirectory:RemoveFacetFromObject');
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
    this.add('clouddirectory:TagResource');
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
    this.add('clouddirectory:UntagResource');
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
    this.add('clouddirectory:UpdateFacet');
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
    this.add('clouddirectory:UpdateLinkAttributes');
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
    this.add('clouddirectory:UpdateObjectAttributes');
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
    this.add('clouddirectory:UpdateSchema');
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
    this.add('clouddirectory:UpdateTypedLinkFacet');
    return this;
  }

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
