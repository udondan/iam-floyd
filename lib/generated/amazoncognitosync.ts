import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cognito-sync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoSync extends PolicyStatement {
  public servicePrefix = 'cognito-sync';
  protected actionList: Actions = {
    "BulkPublish": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_BulkPublish.html",
      "description": "Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "DeleteDataset": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DeleteDataset.html",
      "description": "Deletes the specific dataset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DescribeDataset": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeDataset.html",
      "description": "Gets meta data about a dataset by identity and dataset name.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DescribeIdentityPoolUsage": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityPoolUsage.html",
      "description": "Gets usage details (for example, data storage) about a particular identity pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "DescribeIdentityUsage": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityUsage.html",
      "description": "Gets usage information for an identity, including number of datasets and data usage.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "GetBulkPublishDetails": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetBulkPublishDetails.html",
      "description": "Get the status of the last BulkPublish operation for an identity pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "GetCognitoEvents": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetCognitoEvents.html",
      "description": "Gets the events and the corresponding Lambda functions associated with an identity pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "GetIdentityPoolConfiguration": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetIdentityPoolConfiguration.html",
      "description": "Gets the configuration settings of an identity pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "ListDatasets": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListDatasets.html",
      "description": "Lists datasets for an identity.",
      "accessLevel": "List",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "ListIdentityPoolUsage": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListIdentityPoolUsage.html",
      "description": "Gets a list of identity pools registered with Cognito.",
      "accessLevel": "Read",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "ListRecords": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListRecords.html",
      "description": "Gets paginated records, optionally changed after a particular sync count for a dataset and identity.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "QueryRecords": {
      "url": "",
      "description": "A permission that grants the ability to query records.",
      "accessLevel": "Read"
    },
    "RegisterDevice": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_RegisterDevice.html",
      "description": "Registers a device to receive push sync notifications.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "SetCognitoEvents": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetCognitoEvents.html",
      "description": "Sets the AWS Lambda function for a given event type for an identity pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "SetDatasetConfiguration": {
      "url": "",
      "description": "A permission that grants ability to configure datasets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "SetIdentityPoolConfiguration": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetIdentityPoolConfiguration.html",
      "description": "Sets the necessary configuration for push sync.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identitypool": {
          "required": true
        }
      }
    },
    "SubscribeToDataset": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SubscribeToDataset.html",
      "description": "Subscribes to receive notifications when a dataset is modified by another device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "UnsubscribeFromDataset": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UnsubscribeFromDataset.html",
      "description": "Unsubscribes from receiving notifications when a dataset is modified by another device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "UpdateRecords": {
      "url": "https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UpdateRecords.html",
      "description": "Posts updates to records and adds and deletes records for a dataset and user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "dataset": {
      "name": "dataset",
      "url": "https://docs.aws.amazon.com/cognito/latest/developerguide/synchronizing-data.html#understanding-datasets",
      "arn": "arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}/identity/${IdentityId}/dataset/${DatasetName}",
      "conditionKeys": []
    },
    "identity": {
      "name": "identity",
      "url": "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html#authenticated-and-unauthenticated-identities",
      "arn": "arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}/identity/${IdentityId}",
      "conditionKeys": []
    },
    "identitypool": {
      "name": "identitypool",
      "url": "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html",
      "arn": "arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [cognito-sync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_BulkPublish.html
   */
  public toBulkPublish() {
    this.add('cognito-sync:BulkPublish');
    return this;
  }

  /**
   * Deletes the specific dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.add('cognito-sync:DeleteDataset');
    return this;
  }

  /**
   * Gets meta data about a dataset by identity and dataset name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.add('cognito-sync:DescribeDataset');
    return this;
  }

  /**
   * Gets usage details (for example, data storage) about a particular identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityPoolUsage.html
   */
  public toDescribeIdentityPoolUsage() {
    this.add('cognito-sync:DescribeIdentityPoolUsage');
    return this;
  }

  /**
   * Gets usage information for an identity, including number of datasets and data usage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityUsage.html
   */
  public toDescribeIdentityUsage() {
    this.add('cognito-sync:DescribeIdentityUsage');
    return this;
  }

  /**
   * Get the status of the last BulkPublish operation for an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetBulkPublishDetails.html
   */
  public toGetBulkPublishDetails() {
    this.add('cognito-sync:GetBulkPublishDetails');
    return this;
  }

  /**
   * Gets the events and the corresponding Lambda functions associated with an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetCognitoEvents.html
   */
  public toGetCognitoEvents() {
    this.add('cognito-sync:GetCognitoEvents');
    return this;
  }

  /**
   * Gets the configuration settings of an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetIdentityPoolConfiguration.html
   */
  public toGetIdentityPoolConfiguration() {
    this.add('cognito-sync:GetIdentityPoolConfiguration');
    return this;
  }

  /**
   * Lists datasets for an identity.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    this.add('cognito-sync:ListDatasets');
    return this;
  }

  /**
   * Gets a list of identity pools registered with Cognito.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListIdentityPoolUsage.html
   */
  public toListIdentityPoolUsage() {
    this.add('cognito-sync:ListIdentityPoolUsage');
    return this;
  }

  /**
   * Gets paginated records, optionally changed after a particular sync count for a dataset and identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListRecords.html
   */
  public toListRecords() {
    this.add('cognito-sync:ListRecords');
    return this;
  }

  /**
   * A permission that grants the ability to query records.
   *
   * Access Level: Read
   */
  public toQueryRecords() {
    this.add('cognito-sync:QueryRecords');
    return this;
  }

  /**
   * Registers a device to receive push sync notifications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_RegisterDevice.html
   */
  public toRegisterDevice() {
    this.add('cognito-sync:RegisterDevice');
    return this;
  }

  /**
   * Sets the AWS Lambda function for a given event type for an identity pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetCognitoEvents.html
   */
  public toSetCognitoEvents() {
    this.add('cognito-sync:SetCognitoEvents');
    return this;
  }

  /**
   * A permission that grants ability to configure datasets.
   *
   * Access Level: Write
   */
  public toSetDatasetConfiguration() {
    this.add('cognito-sync:SetDatasetConfiguration');
    return this;
  }

  /**
   * Sets the necessary configuration for push sync.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetIdentityPoolConfiguration.html
   */
  public toSetIdentityPoolConfiguration() {
    this.add('cognito-sync:SetIdentityPoolConfiguration');
    return this;
  }

  /**
   * Subscribes to receive notifications when a dataset is modified by another device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SubscribeToDataset.html
   */
  public toSubscribeToDataset() {
    this.add('cognito-sync:SubscribeToDataset');
    return this;
  }

  /**
   * Unsubscribes from receiving notifications when a dataset is modified by another device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UnsubscribeFromDataset.html
   */
  public toUnsubscribeFromDataset() {
    this.add('cognito-sync:UnsubscribeFromDataset');
    return this;
  }

  /**
   * Posts updates to records and adds and deletes records for a dataset and user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UpdateRecords.html
   */
  public toUpdateRecords() {
    this.add('cognito-sync:UpdateRecords');
    return this;
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/synchronizing-data.html#understanding-datasets
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param identityId - Identifier for the identityId.
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataset(identityPoolId: string, identityId: string, datasetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}/identity/${IdentityId}/dataset/${DatasetName}';
    arn = arn.replace('${IdentityPoolId}', identityPoolId);
    arn = arn.replace('${IdentityId}', identityId);
    arn = arn.replace('${DatasetName}', datasetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html#authenticated-and-unauthenticated-identities
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param identityId - Identifier for the identityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIdentity(identityPoolId: string, identityId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}/identity/${IdentityId}';
    arn = arn.replace('${IdentityPoolId}', identityPoolId);
    arn = arn.replace('${IdentityId}', identityId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type identitypool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIdentitypool(identityPoolId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cognito-sync:${Region}:${Account}:identitypool/${IdentityPoolId}';
    arn = arn.replace('${IdentityPoolId}', identityPoolId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
