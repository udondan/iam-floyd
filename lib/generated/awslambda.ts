import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service lambda
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html
 */
export class Lambda extends PolicyStatement {
  public servicePrefix = 'lambda';
  public actions: Actions = {
    "AddLayerVersionPermission": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html",
      "description": "Grants permission to add permissions to the resource-based policy of a version of an AWS Lambda layer",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "AddPermission": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html",
      "description": "Grants permission to give an AWS service or another account permission to use an AWS Lambda function",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "function": {
          "required": true
        }
      },
      "conditions": [
        "lambda:Principal"
      ]
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html",
      "description": "Grants permission to create an alias for a Lambda function version",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "CreateEventSourceMapping": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html",
      "description": "Grants permission to create a mapping between an event source and an AWS Lambda function",
      "accessLevel": "Write",
      "conditions": [
        "lambda:FunctionArn"
      ]
    },
    "CreateFunction": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html",
      "description": "Grants permission to create an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      },
      "conditions": [
        "lambda:Layer"
      ]
    },
    "DeleteAlias": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html",
      "description": "Grants permission to delete an AWS Lambda function alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "DeleteEventSourceMapping": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html",
      "description": "Grants permission to delete an AWS Lambda event source mapping",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventSourceMapping": {
          "required": true
        }
      },
      "conditions": [
        "lambda:FunctionArn"
      ]
    },
    "DeleteFunction": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html",
      "description": "Grants permission to delete an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "DeleteFunctionConcurrency": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html",
      "description": "Grants permission to remove a concurrent execution limit from an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "DeleteFunctionEventInvokeConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html",
      "description": "Grants permission to delete the configuration for asynchronous invocation for an AWS Lambda function, version, or alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "DeleteLayerVersion": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html",
      "description": "Grants permission to delete a version of an AWS Lambda layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "DeleteProvisionedConcurrencyConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html",
      "description": "Grants permission to delete the provisioned concurrency configuration for an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function alias": {
          "required": false
        },
        "function version": {
          "required": false
        }
      }
    },
    "DisableReplication": {
      "url": "",
      "description": "Grants permission to disable replication for a Lambda@Edge function",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "EnableReplication": {
      "url": "",
      "description": "Grants permission to enable replication for a Lambda@Edge function",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetAccountSettings": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html",
      "description": "Grants permission to view details about an account's limits and usage in an AWS Region",
      "accessLevel": "Read"
    },
    "GetAlias": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html",
      "description": "Grants permission to view details about an AWS Lambda function alias",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetEventSourceMapping": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html",
      "description": "Grants permission to view details about an AWS Lambda event source mapping",
      "accessLevel": "Read",
      "resourceTypes": {
        "eventSourceMapping": {
          "required": true
        }
      },
      "conditions": [
        "lambda:FunctionArn"
      ]
    },
    "GetFunction": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html",
      "description": "Grants permission to view details about an AWS Lambda function",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetFunctionConcurrency": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html",
      "description": "Grants permission to view details about the reserved concurrency configuration for a function",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetFunctionConfiguration": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html",
      "description": "Grants permission to view details about the version-specific settings of an AWS Lambda function or version",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetFunctionEventInvokeConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html",
      "description": "Grants permission to view the configuration for asynchronous invocation for a function, version, or alias",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetLayerVersion": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html",
      "description": "Grants permission to view details about a version of an AWS Lambda layer",
      "accessLevel": "Read",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "GetLayerVersionByArn": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html",
      "description": "Grants permission to view details about a version of an AWS Lambda layer",
      "accessLevel": "Read",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "GetLayerVersionPolicy": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html",
      "description": "Grants permission to view the resource-based policy for a version of an AWS Lambda layer",
      "accessLevel": "Read",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html",
      "description": "Grants permission to view the resource-based policy for an AWS Lambda function, version, or alias",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "GetProvisionedConcurrencyConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html",
      "description": "Grants permission to view the provisioned concurrency configuration for an AWS Lambda function's alias or version",
      "accessLevel": "Read",
      "resourceTypes": {
        "function alias": {
          "required": false
        },
        "function version": {
          "required": false
        }
      }
    },
    "InvokeAsync": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html",
      "description": "(Deprecated) Grants permission to invoke a function asynchronously",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "InvokeFunction": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html",
      "description": "Grants permission to invoke an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "ListAliases": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html",
      "description": "Grants permission to retrieve a list of aliases for an AWS Lambda function",
      "accessLevel": "List",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "ListEventSourceMappings": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html",
      "description": "Grants permission to retrieve a list of AWS Lambda event source mappings",
      "accessLevel": "List"
    },
    "ListFunctionEventInvokeConfigs": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html",
      "description": "Grants permission to retrieve a list of configurations for asynchronous invocation for a function",
      "accessLevel": "List",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "ListFunctions": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html",
      "description": "Grants permission to retrieve a list of AWS Lambda functions, with the version-specific configuration of each function",
      "accessLevel": "List"
    },
    "ListLayerVersions": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html",
      "description": "Grants permission to retrieve a list of versions of an AWS Lambda layer",
      "accessLevel": "List"
    },
    "ListLayers": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html",
      "description": "Grants permission to retrieve a list of AWS Lambda layers, with details about the latest version of each layer",
      "accessLevel": "List"
    },
    "ListProvisionedConcurrencyConfigs": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html",
      "description": "Grants permission to retrieve a list of provisioned concurrency configurations for an AWS Lambda function",
      "accessLevel": "List",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html",
      "description": "Grants permission to retrieve a list of tags for an AWS Lambda function",
      "accessLevel": "Read",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "ListVersionsByFunction": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html",
      "description": "Grants permission to retrieve a list of versions for an AWS Lambda function",
      "accessLevel": "List",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "PublishLayerVersion": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html",
      "description": "Grants permission to create an AWS Lambda layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "layer": {
          "required": true
        }
      }
    },
    "PublishVersion": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html",
      "description": "Grants permission to create an AWS Lambda function version",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "PutFunctionConcurrency": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html",
      "description": "Grants permission to configure reserved concurrency for an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "PutFunctionEventInvokeConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html",
      "description": "Grants permission to configures options for asynchronous invocation on an AWS Lambda function, version, or alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "PutProvisionedConcurrencyConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html",
      "description": "Grants permission to configure provisioned concurrency for an AWS Lambda function's alias or version",
      "accessLevel": "Write",
      "resourceTypes": {
        "function alias": {
          "required": false
        },
        "function version": {
          "required": false
        }
      }
    },
    "RemoveLayerVersionPermission": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html",
      "description": "Grants permission to remove a statement from the permissions policy for a version of an AWS Lambda layer",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "layerVersion": {
          "required": true
        }
      }
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html",
      "description": "Grants permission to revoke function-use permission from an AWS service or another account",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "function": {
          "required": true
        }
      },
      "conditions": [
        "lambda:Principal"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html",
      "description": "Grants permission to add tags to an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html",
      "description": "Grants permission to remove tags from an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "UpdateAlias": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html",
      "description": "Grants permission to update the configuration of an AWS Lambda function's alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "UpdateEventSourceMapping": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html",
      "description": "Grants permission to update the configuration of an AWS Lambda event source mapping",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventSourceMapping": {
          "required": true
        }
      },
      "conditions": [
        "lambda:FunctionArn"
      ]
    },
    "UpdateFunctionCode": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html",
      "description": "Grants permission to update the code of an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    },
    "UpdateFunctionConfiguration": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html",
      "description": "Grants permission to modify the version-specific settings of an AWS Lambda function",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      },
      "conditions": [
        "lambda:Layer"
      ]
    },
    "UpdateFunctionEventInvokeConfig": {
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html",
      "description": "Grants permission to modify the configuration for asynchronous invocation for an AWS Lambda function, version, or alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "function": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "function": {
      "name": "function",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}",
      "conditionKeys": []
    },
    "function version": {
      "name": "function version",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Version}",
      "conditionKeys": []
    },
    "function alias": {
      "name": "function alias",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Alias}",
      "conditionKeys": []
    },
    "layer": {
      "name": "layer",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}",
      "conditionKeys": []
    },
    "layerVersion": {
      "name": "layerVersion",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}:${LayerVersion}",
      "conditionKeys": []
    },
    "eventSourceMapping": {
      "name": "eventSourceMapping",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html",
      "arn": "arn:${Partition}:lambda:${Region}:${Account}:event-source-mapping:${UUID}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service lambda
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to add permissions to the resource-based policy of a version of an AWS Lambda layer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html
   */
  public addLayerVersionPermission() {
    this.add('lambda:AddLayerVersionPermission');
    return this;
  }

  /**
   * Grants permission to give an AWS service or another account permission to use an AWS Lambda function
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html
   */
  public addPermission() {
    this.add('lambda:AddPermission');
    return this;
  }

  /**
   * Grants permission to create an alias for a Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html
   */
  public createAlias() {
    this.add('lambda:CreateAlias');
    return this;
  }

  /**
   * Grants permission to create a mapping between an event source and an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html
   */
  public createEventSourceMapping() {
    this.add('lambda:CreateEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html
   */
  public createFunction() {
    this.add('lambda:CreateFunction');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda function alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html
   */
  public deleteAlias() {
    this.add('lambda:DeleteAlias');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda event source mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html
   */
  public deleteEventSourceMapping() {
    this.add('lambda:DeleteEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html
   */
  public deleteFunction() {
    this.add('lambda:DeleteFunction');
    return this;
  }

  /**
   * Grants permission to remove a concurrent execution limit from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html
   */
  public deleteFunctionConcurrency() {
    this.add('lambda:DeleteFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to delete the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html
   */
  public deleteFunctionEventInvokeConfig() {
    this.add('lambda:DeleteFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to delete a version of an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html
   */
  public deleteLayerVersion() {
    this.add('lambda:DeleteLayerVersion');
    return this;
  }

  /**
   * Grants permission to delete the provisioned concurrency configuration for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html
   */
  public deleteProvisionedConcurrencyConfig() {
    this.add('lambda:DeleteProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * Grants permission to disable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public disableReplication() {
    this.add('lambda:DisableReplication');
    return this;
  }

  /**
   * Grants permission to enable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public enableReplication() {
    this.add('lambda:EnableReplication');
    return this;
  }

  /**
   * Grants permission to view details about an account's limits and usage in an AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html
   */
  public getAccountSettings() {
    this.add('lambda:GetAccountSettings');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda function alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html
   */
  public getAlias() {
    this.add('lambda:GetAlias');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda event source mapping
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html
   */
  public getEventSourceMapping() {
    this.add('lambda:GetEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html
   */
  public getFunction() {
    this.add('lambda:GetFunction');
    return this;
  }

  /**
   * Grants permission to view details about the reserved concurrency configuration for a function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html
   */
  public getFunctionConcurrency() {
    this.add('lambda:GetFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to view details about the version-specific settings of an AWS Lambda function or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
   */
  public getFunctionConfiguration() {
    this.add('lambda:GetFunctionConfiguration');
    return this;
  }

  /**
   * Grants permission to view the configuration for asynchronous invocation for a function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html
   */
  public getFunctionEventInvokeConfig() {
    this.add('lambda:GetFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to view details about a version of an AWS Lambda layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html
   */
  public getLayerVersion() {
    this.add('lambda:GetLayerVersion');
    return this;
  }

  /**
   * Grants permission to view details about a version of an AWS Lambda layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html
   */
  public getLayerVersionByArn() {
    this.add('lambda:GetLayerVersionByArn');
    return this;
  }

  /**
   * Grants permission to view the resource-based policy for a version of an AWS Lambda layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html
   */
  public getLayerVersionPolicy() {
    this.add('lambda:GetLayerVersionPolicy');
    return this;
  }

  /**
   * Grants permission to view the resource-based policy for an AWS Lambda function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html
   */
  public getPolicy() {
    this.add('lambda:GetPolicy');
    return this;
  }

  /**
   * Grants permission to view the provisioned concurrency configuration for an AWS Lambda function's alias or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html
   */
  public getProvisionedConcurrencyConfig() {
    this.add('lambda:GetProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * (Deprecated) Grants permission to invoke a function asynchronously
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html
   */
  public invokeAsync() {
    this.add('lambda:InvokeAsync');
    return this;
  }

  /**
   * Grants permission to invoke an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
   */
  public invokeFunction() {
    this.add('lambda:InvokeFunction');
    return this;
  }

  /**
   * Grants permission to retrieve a list of aliases for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html
   */
  public listAliases() {
    this.add('lambda:ListAliases');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda event source mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html
   */
  public listEventSourceMappings() {
    this.add('lambda:ListEventSourceMappings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of configurations for asynchronous invocation for a function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html
   */
  public listFunctionEventInvokeConfigs() {
    this.add('lambda:ListFunctionEventInvokeConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda functions, with the version-specific configuration of each function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html
   */
  public listFunctions() {
    this.add('lambda:ListFunctions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions of an AWS Lambda layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html
   */
  public listLayerVersions() {
    this.add('lambda:ListLayerVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda layers, with details about the latest version of each layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html
   */
  public listLayers() {
    this.add('lambda:ListLayers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of provisioned concurrency configurations for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html
   */
  public listProvisionedConcurrencyConfigs() {
    this.add('lambda:ListProvisionedConcurrencyConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags for an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html
   */
  public listTags() {
    this.add('lambda:ListTags');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html
   */
  public listVersionsByFunction() {
    this.add('lambda:ListVersionsByFunction');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html
   */
  public publishLayerVersion() {
    this.add('lambda:PublishLayerVersion');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html
   */
  public publishVersion() {
    this.add('lambda:PublishVersion');
    return this;
  }

  /**
   * Grants permission to configure reserved concurrency for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html
   */
  public putFunctionConcurrency() {
    this.add('lambda:PutFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to configures options for asynchronous invocation on an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html
   */
  public putFunctionEventInvokeConfig() {
    this.add('lambda:PutFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to configure provisioned concurrency for an AWS Lambda function's alias or version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html
   */
  public putProvisionedConcurrencyConfig() {
    this.add('lambda:PutProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * Grants permission to remove a statement from the permissions policy for a version of an AWS Lambda layer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html
   */
  public removeLayerVersionPermission() {
    this.add('lambda:RemoveLayerVersionPermission');
    return this;
  }

  /**
   * Grants permission to revoke function-use permission from an AWS service or another account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html
   */
  public removePermission() {
    this.add('lambda:RemovePermission');
    return this;
  }

  /**
   * Grants permission to add tags to an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html
   */
  public tagResource() {
    this.add('lambda:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html
   */
  public untagResource() {
    this.add('lambda:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the configuration of an AWS Lambda function's alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html
   */
  public updateAlias() {
    this.add('lambda:UpdateAlias');
    return this;
  }

  /**
   * Grants permission to update the configuration of an AWS Lambda event source mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html
   */
  public updateEventSourceMapping() {
    this.add('lambda:UpdateEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to update the code of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html
   */
  public updateFunctionCode() {
    this.add('lambda:UpdateFunctionCode');
    return this;
  }

  /**
   * Grants permission to modify the version-specific settings of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html
   */
  public updateFunctionConfiguration() {
    this.add('lambda:UpdateFunctionConfiguration');
    return this;
  }

  /**
   * Grants permission to modify the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html
   */
  public updateFunctionEventInvokeConfig() {
    this.add('lambda:UpdateFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunction(functionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type function version to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionVersion(functionName: string, version: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Version}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Version}', version);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type function alias to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param alias - Identifier for the alias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionAlias(functionName: string, alias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Alias}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Alias}', alias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type layer to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param layerName - Identifier for the layerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLayer(layerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}';
    arn = arn.replace('${LayerName}', layerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type layerVersion to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param layerName - Identifier for the layerName.
   * @param layerVersion - Identifier for the layerVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLayerVersion(layerName: string, layerVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}:${LayerVersion}';
    arn = arn.replace('${LayerName}', layerName);
    arn = arn.replace('${LayerVersion}', layerVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type eventSourceMapping to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventSourceMapping(uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:event-source-mapping:${UUID}';
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the ARN of an AWS Lambda function
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFunctionArn(value: string | string[], operator?: string) {
    return this.if(`lambda:FunctionArn`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the ARN of an AWS Lambda layer
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLayer(value: string | string[], operator?: string) {
    return this.if(`lambda:Layer`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the AWS service or account that can invoke a function
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipal(value: string | string[], operator?: string) {
    return this.if(`lambda:Principal`, value, operator || 'StringLike');
  }
}
