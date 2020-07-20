import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [schemas](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridgeschemas.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Schemas extends PolicyStatement {
  public servicePrefix = 'schemas';
  protected actionList: Actions = {
    "CreateDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer",
      "description": "Creates an event schema discoverer. Once created, your events will be automatically map into corresponding schema documents",
      "accessLevel": "Write",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "CreateRegistry": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry",
      "description": "Create a new schema registry in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "CreateSchema": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema",
      "description": "Create a new schema in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DeleteDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer",
      "description": "Deletes discoverer in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "DeleteRegistry": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry",
      "description": "Deletes an existing registry in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "DeleteResourcePolicy": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy",
      "description": "Delete the resource-based policy attached to a given registry.",
      "accessLevel": "Write",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "DeleteSchema": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema",
      "description": "Deletes an existing schema in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DeleteSchemaVersion": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion",
      "description": "Deletes a specific version of schema in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DescribeCodeBinding": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding",
      "description": "Retrieves metadata for generated code for specific schema in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DescribeDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer",
      "description": "Retrieves discoverer metadata in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "DescribeRegistry": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry",
      "description": "Describes an existing registry metadata in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "DescribeSchema": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema",
      "description": "Retrieves an existing schema in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "GetCodeBindingSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource",
      "description": "Retrieves metadata for generated code for specific schema in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "GetDiscoveredSchema": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema",
      "description": "Retrieves schema for the provided list of sample events.",
      "accessLevel": "Read"
    },
    "GetResourcePolicy": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy",
      "description": "Retrieves the resource-based policy attached to a given registry.",
      "accessLevel": "Read",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "ListDiscoverers": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers",
      "description": "Lists all the discoverers in your account.",
      "accessLevel": "List",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "ListRegistries": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries",
      "description": "List all discoverers in your account.",
      "accessLevel": "List",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "ListSchemaVersions": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions",
      "description": "List all versions of a schema.",
      "accessLevel": "List",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "ListSchemas": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas",
      "description": "List all schemas.",
      "accessLevel": "List",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource",
      "description": "This action lists tags for a resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "discoverer": {
          "required": true
        },
        "registry": {
          "required": true
        },
        "schema": {
          "required": true
        }
      }
    },
    "PutCodeBinding": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding",
      "description": "Generates code for specific schema in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "PutResourcePolicy": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy",
      "description": "Attach resource-based policy to the specific registry.",
      "accessLevel": "Write",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "SearchSchemas": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas",
      "description": "Searches schemas based on specified keywords in your account.",
      "accessLevel": "List",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "StartDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer",
      "description": "Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account",
      "accessLevel": "Write",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "StopDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer",
      "description": "Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account",
      "accessLevel": "Write",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource",
      "description": "This action tags an resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "discoverer": {
          "required": true
        },
        "registry": {
          "required": true
        },
        "schema": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource",
      "description": "This action removes a tag from on a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "discoverer": {
          "required": true
        },
        "registry": {
          "required": true
        },
        "schema": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDiscoverer": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer",
      "description": "Updates an existing discoverer in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "discoverer": {
          "required": true
        }
      }
    },
    "UpdateRegistry": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry",
      "description": "Updates an existing registry metadata in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "registry": {
          "required": true
        }
      }
    },
    "UpdateSchema": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema",
      "description": "Updates an existing schema in your account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "discoverer": {
      "name": "discoverer",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html",
      "arn": "arn:${Partition}:schemas:${Region}:${Account}:discoverer/${DiscovererId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "registry": {
      "name": "registry",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html",
      "arn": "arn:${Partition}:schemas:${Region}:${Account}:registry/${RegistryName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "schema": {
      "name": "schema",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html",
      "arn": "arn:${Partition}:schemas:${Region}:${Account}:schema/${RegistryName}/${SchemaName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
  public createDiscoverer() {
    this.add('schemas:CreateDiscoverer');
    return this;
  }

  /**
   * Create a new schema registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   */
  public createRegistry() {
    this.add('schemas:CreateRegistry');
    return this;
  }

  /**
   * Create a new schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   */
  public createSchema() {
    this.add('schemas:CreateSchema');
    return this;
  }

  /**
   * Deletes discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   */
  public deleteDiscoverer() {
    this.add('schemas:DeleteDiscoverer');
    return this;
  }

  /**
   * Deletes an existing registry in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   */
  public deleteRegistry() {
    this.add('schemas:DeleteRegistry');
    return this;
  }

  /**
   * Delete the resource-based policy attached to a given registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   */
  public deleteResourcePolicy() {
    this.add('schemas:DeleteResourcePolicy');
    return this;
  }

  /**
   * Deletes an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   */
  public deleteSchema() {
    this.add('schemas:DeleteSchema');
    return this;
  }

  /**
   * Deletes a specific version of schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   */
  public deleteSchemaVersion() {
    this.add('schemas:DeleteSchemaVersion');
    return this;
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   */
  public describeCodeBinding() {
    this.add('schemas:DescribeCodeBinding');
    return this;
  }

  /**
   * Retrieves discoverer metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   */
  public describeDiscoverer() {
    this.add('schemas:DescribeDiscoverer');
    return this;
  }

  /**
   * Describes an existing registry metadata in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   */
  public describeRegistry() {
    this.add('schemas:DescribeRegistry');
    return this;
  }

  /**
   * Retrieves an existing schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   */
  public describeSchema() {
    this.add('schemas:DescribeSchema');
    return this;
  }

  /**
   * Retrieves metadata for generated code for specific schema in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   */
  public getCodeBindingSource() {
    this.add('schemas:GetCodeBindingSource');
    return this;
  }

  /**
   * Retrieves schema for the provided list of sample events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  public getDiscoveredSchema() {
    this.add('schemas:GetDiscoveredSchema');
    return this;
  }

  /**
   * Retrieves the resource-based policy attached to a given registry.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   */
  public getResourcePolicy() {
    this.add('schemas:GetResourcePolicy');
    return this;
  }

  /**
   * Lists all the discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   */
  public listDiscoverers() {
    this.add('schemas:ListDiscoverers');
    return this;
  }

  /**
   * List all discoverers in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   */
  public listRegistries() {
    this.add('schemas:ListRegistries');
    return this;
  }

  /**
   * List all versions of a schema.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   */
  public listSchemaVersions() {
    this.add('schemas:ListSchemaVersions');
    return this;
  }

  /**
   * List all schemas.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   */
  public listSchemas() {
    this.add('schemas:ListSchemas');
    return this;
  }

  /**
   * This action lists tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   */
  public listTagsForResource() {
    this.add('schemas:ListTagsForResource');
    return this;
  }

  /**
   * Generates code for specific schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   */
  public putCodeBinding() {
    this.add('schemas:PutCodeBinding');
    return this;
  }

  /**
   * Attach resource-based policy to the specific registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   */
  public putResourcePolicy() {
    this.add('schemas:PutResourcePolicy');
    return this;
  }

  /**
   * Searches schemas based on specified keywords in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   */
  public searchSchemas() {
    this.add('schemas:SearchSchemas');
    return this;
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   */
  public startDiscoverer() {
    this.add('schemas:StartDiscoverer');
    return this;
  }

  /**
   * Starts the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   */
  public stopDiscoverer() {
    this.add('schemas:StopDiscoverer');
    return this;
  }

  /**
   * This action tags an resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource
   */
  public tagResource() {
    this.add('schemas:TagResource');
    return this;
  }

  /**
   * This action removes a tag from on a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource
   */
  public untagResource() {
    this.add('schemas:UntagResource');
    return this;
  }

  /**
   * Updates an existing discoverer in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   */
  public updateDiscoverer() {
    this.add('schemas:UpdateDiscoverer');
    return this;
  }

  /**
   * Updates an existing registry metadata in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   */
  public updateRegistry() {
    this.add('schemas:UpdateRegistry');
    return this;
  }

  /**
   * Updates an existing schema in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema
   */
  public updateSchema() {
    this.add('schemas:UpdateSchema');
    return this;
  }

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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
