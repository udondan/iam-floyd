import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [frauddetector](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfrauddetector.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Frauddetector extends PolicyStatement {
  public servicePrefix = 'frauddetector';
  protected actionList: Actions = {
    "BatchCreateVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable",
      "description": "Creates a batch of variables.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "BatchGetVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable",
      "description": "Gets a batch of variables.",
      "accessLevel": "List",
      "resourceTypes": {
        "variable": {
          "required": false
        }
      }
    },
    "CreateDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion",
      "description": "Creates a detector version. The detector version starts in a DRAFT status.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateModel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel",
      "description": "Creates a model using the specified model type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion",
      "description": "Creates a version of the model using the specified model type and model id.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRule": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html",
      "description": "Creates a rule for use with the specified detector.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html",
      "description": "Creates a variable.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector",
      "description": "Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DeleteDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion",
      "description": "Deletes the detector version. You cannot delete detector versions that are in ACTIVE status.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector-version": {
          "required": true
        }
      }
    },
    "DeleteEvent": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent",
      "description": "Deletes the specified event.",
      "accessLevel": "Write"
    },
    "DeleteRule": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule",
      "description": "Deletes the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "DescribeDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector",
      "description": "Gets all versions for a specified detector.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DescribeModelVersions": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions",
      "description": "Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model-version": {
          "required": false
        }
      }
    },
    "GetDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion",
      "description": "Gets a particular detector version.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector-version": {
          "required": true
        }
      }
    },
    "GetDetectors": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors",
      "description": "Gets all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": false
        }
      }
    },
    "GetEntityTypes": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes",
      "description": "Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEntityTypesResponse as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "entity-type": {
          "required": false
        }
      }
    },
    "GetEventPrediction": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction",
      "description": "Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.",
      "accessLevel": "Read"
    },
    "GetEventTypes": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes",
      "description": "Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "event-type": {
          "required": false
        }
      }
    },
    "GetExternalModels": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels",
      "description": "Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "external-model": {
          "required": false
        }
      }
    },
    "GetKMSEncryptionKey": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey",
      "description": "Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.",
      "accessLevel": "Read"
    },
    "GetLabels": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels",
      "description": "Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "label": {
          "required": false
        }
      }
    },
    "GetModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion",
      "description": "Gets the details of the specified model version.",
      "accessLevel": "List",
      "resourceTypes": {
        "model-version": {
          "required": true
        }
      }
    },
    "GetModels": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels",
      "description": "Gets one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified.",
      "accessLevel": "List",
      "resourceTypes": {
        "model": {
          "required": false
        }
      }
    },
    "GetOutcomes": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes",
      "description": "Gets one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "outcome": {
          "required": false
        }
      }
    },
    "GetPrediction": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetPrediction",
      "description": "Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.",
      "accessLevel": "Read"
    },
    "GetRules": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html",
      "description": "Get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified.",
      "accessLevel": "List",
      "resourceTypes": {
        "rule": {
          "required": false
        }
      }
    },
    "GetVariables": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables",
      "description": "Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "variable": {
          "required": false
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html",
      "description": "Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "detector-version": {
          "required": false
        },
        "entity-type": {
          "required": false
        },
        "event-type": {
          "required": false
        },
        "external-model": {
          "required": false
        },
        "label": {
          "required": false
        },
        "model": {
          "required": false
        },
        "model-version": {
          "required": false
        },
        "outcome": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "variable": {
          "required": false
        }
      }
    },
    "PutDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html",
      "description": "Creates or updates a detector.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutEntityType": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEntityType.html",
      "description": "Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "entity-type": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutEventType": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEventType.html",
      "description": "Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-type": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutExternalModel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html",
      "description": "Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.",
      "accessLevel": "Write",
      "resourceTypes": {
        "external-model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutKMSEncryptionKey": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html",
      "description": "Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.",
      "accessLevel": "Write"
    },
    "PutLabel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutLabel.html",
      "description": "Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.",
      "accessLevel": "Write",
      "resourceTypes": {
        "label": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutOutcome": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html",
      "description": "Creates or updates an outcome.",
      "accessLevel": "Write",
      "resourceTypes": {
        "outcome": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_TagResource.html",
      "description": "Assigns tags to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "detector-version": {
          "required": false
        },
        "entity-type": {
          "required": false
        },
        "event-type": {
          "required": false
        },
        "external-model": {
          "required": false
        },
        "label": {
          "required": false
        },
        "model": {
          "required": false
        },
        "model-version": {
          "required": false
        },
        "outcome": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "variable": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UntagResource.html",
      "description": "Removes tags from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "detector-version": {
          "required": false
        },
        "entity-type": {
          "required": false
        },
        "event-type": {
          "required": false
        },
        "external-model": {
          "required": false
        },
        "label": {
          "required": false
        },
        "model": {
          "required": false
        },
        "model-version": {
          "required": false
        },
        "outcome": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "variable": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UpdateDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion",
      "description": "Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "UpdateDetectorVersionMetadata": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata",
      "description": "Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector-version": {
          "required": true
        }
      }
    },
    "UpdateDetectorVersionStatus": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus",
      "description": "Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector-version": {
          "required": true
        }
      }
    },
    "UpdateModel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel",
      "description": "Updates a model. You can update the description attribute using this action.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "UpdateModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion",
      "description": "Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateModelVersionStatus": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus",
      "description": "Updates the status of a model version.",
      "accessLevel": "Write"
    },
    "UpdateRuleMetadata": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html",
      "description": "Updates a rule's metadata. The description attribute can be updated.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "UpdateRuleVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html",
      "description": "Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html",
      "description": "Updates a variable.",
      "accessLevel": "Write",
      "resourceTypes": {
        "variable": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "detector": {
      "name": "detector",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:detector/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "detector-version": {
      "name": "detector-version",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:detector-version/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "entity-type": {
      "name": "entity-type",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:entity-type/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "external-model": {
      "name": "external-model",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:external-model/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "event-type": {
      "name": "event-type",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:event-type/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "label": {
      "name": "label",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:label/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "model": {
      "name": "model",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:model/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "model-version": {
      "name": "model-version",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:model-version/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "outcome": {
      "name": "outcome",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:outcome/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rule": {
      "name": "rule",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:rule/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "variable": {
      "name": "variable",
      "url": "",
      "arn": "arn:${Partition}:frauddetector:${Region}:${Account}:variable/${ResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [frauddetector](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfrauddetector.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a batch of variables.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable
   */
  public batchCreateVariable() {
    this.add('frauddetector:BatchCreateVariable');
    return this;
  }

  /**
   * Gets a batch of variables.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable
   */
  public batchGetVariable() {
    this.add('frauddetector:BatchGetVariable');
    return this;
  }

  /**
   * Creates a detector version. The detector version starts in a DRAFT status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion
   */
  public createDetectorVersion() {
    this.add('frauddetector:CreateDetectorVersion');
    return this;
  }

  /**
   * Creates a model using the specified model type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel
   */
  public createModel() {
    this.add('frauddetector:CreateModel');
    return this;
  }

  /**
   * Creates a version of the model using the specified model type and model id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion
   */
  public createModelVersion() {
    this.add('frauddetector:CreateModelVersion');
    return this;
  }

  /**
   * Creates a rule for use with the specified detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html
   */
  public createRule() {
    this.add('frauddetector:CreateRule');
    return this;
  }

  /**
   * Creates a variable.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html
   */
  public createVariable() {
    this.add('frauddetector:CreateVariable');
    return this;
  }

  /**
   * Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector
   */
  public deleteDetector() {
    this.add('frauddetector:DeleteDetector');
    return this;
  }

  /**
   * Deletes the detector version. You cannot delete detector versions that are in ACTIVE status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion
   */
  public deleteDetectorVersion() {
    this.add('frauddetector:DeleteDetectorVersion');
    return this;
  }

  /**
   * Deletes the specified event.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent
   */
  public deleteEvent() {
    this.add('frauddetector:DeleteEvent');
    return this;
  }

  /**
   * Deletes the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule
   */
  public deleteRule() {
    this.add('frauddetector:DeleteRule');
    return this;
  }

  /**
   * Gets all versions for a specified detector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector
   */
  public describeDetector() {
    this.add('frauddetector:DescribeDetector');
    return this;
  }

  /**
   * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions
   */
  public describeModelVersions() {
    this.add('frauddetector:DescribeModelVersions');
    return this;
  }

  /**
   * Gets a particular detector version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion
   */
  public getDetectorVersion() {
    this.add('frauddetector:GetDetectorVersion');
    return this;
  }

  /**
   * Gets all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors
   */
  public getDetectors() {
    this.add('frauddetector:GetDetectors');
    return this;
  }

  /**
   * Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEntityTypesResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes
   */
  public getEntityTypes() {
    this.add('frauddetector:GetEntityTypes');
    return this;
  }

  /**
   * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction
   */
  public getEventPrediction() {
    this.add('frauddetector:GetEventPrediction');
    return this;
  }

  /**
   * Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes
   */
  public getEventTypes() {
    this.add('frauddetector:GetEventTypes');
    return this;
  }

  /**
   * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels
   */
  public getExternalModels() {
    this.add('frauddetector:GetExternalModels');
    return this;
  }

  /**
   * Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey
   */
  public getKMSEncryptionKey() {
    this.add('frauddetector:GetKMSEncryptionKey');
    return this;
  }

  /**
   * Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels
   */
  public getLabels() {
    this.add('frauddetector:GetLabels');
    return this;
  }

  /**
   * Gets the details of the specified model version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion
   */
  public getModelVersion() {
    this.add('frauddetector:GetModelVersion');
    return this;
  }

  /**
   * Gets one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels
   */
  public getModels() {
    this.add('frauddetector:GetModels');
    return this;
  }

  /**
   * Gets one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes
   */
  public getOutcomes() {
    this.add('frauddetector:GetOutcomes');
    return this;
  }

  /**
   * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetPrediction
   */
  public getPrediction() {
    this.add('frauddetector:GetPrediction');
    return this;
  }

  /**
   * Get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html
   */
  public getRules() {
    this.add('frauddetector:GetRules');
    return this;
  }

  /**
   * Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables
   */
  public getVariables() {
    this.add('frauddetector:GetVariables');
    return this;
  }

  /**
   * Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('frauddetector:ListTagsForResource');
    return this;
  }

  /**
   * Creates or updates a detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html
   */
  public putDetector() {
    this.add('frauddetector:PutDetector');
    return this;
  }

  /**
   * Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEntityType.html
   */
  public putEntityType() {
    this.add('frauddetector:PutEntityType');
    return this;
  }

  /**
   * Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEventType.html
   */
  public putEventType() {
    this.add('frauddetector:PutEventType');
    return this;
  }

  /**
   * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html
   */
  public putExternalModel() {
    this.add('frauddetector:PutExternalModel');
    return this;
  }

  /**
   * Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html
   */
  public putKMSEncryptionKey() {
    this.add('frauddetector:PutKMSEncryptionKey');
    return this;
  }

  /**
   * Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutLabel.html
   */
  public putLabel() {
    this.add('frauddetector:PutLabel');
    return this;
  }

  /**
   * Creates or updates an outcome.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html
   */
  public putOutcome() {
    this.add('frauddetector:PutOutcome');
    return this;
  }

  /**
   * Assigns tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_TagResource.html
   */
  public tagResource() {
    this.add('frauddetector:TagResource');
    return this;
  }

  /**
   * Removes tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UntagResource.html
   */
  public untagResource() {
    this.add('frauddetector:UntagResource');
    return this;
  }

  /**
   * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion
   */
  public updateDetectorVersion() {
    this.add('frauddetector:UpdateDetectorVersion');
    return this;
  }

  /**
   * Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata
   */
  public updateDetectorVersionMetadata() {
    this.add('frauddetector:UpdateDetectorVersionMetadata');
    return this;
  }

  /**
   * Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus
   */
  public updateDetectorVersionStatus() {
    this.add('frauddetector:UpdateDetectorVersionStatus');
    return this;
  }

  /**
   * Updates a model. You can update the description attribute using this action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel
   */
  public updateModel() {
    this.add('frauddetector:UpdateModel');
    return this;
  }

  /**
   * Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion
   */
  public updateModelVersion() {
    this.add('frauddetector:UpdateModelVersion');
    return this;
  }

  /**
   * Updates the status of a model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus
   */
  public updateModelVersionStatus() {
    this.add('frauddetector:UpdateModelVersionStatus');
    return this;
  }

  /**
   * Updates a rule's metadata. The description attribute can be updated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html
   */
  public updateRuleMetadata() {
    this.add('frauddetector:UpdateRuleMetadata');
    return this;
  }

  /**
   * Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html
   */
  public updateRuleVersion() {
    this.add('frauddetector:UpdateRuleVersion');
    return this;
  }

  /**
   * Updates a variable.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html
   */
  public updateVariable() {
    this.add('frauddetector:UpdateVariable');
    return this;
  }

  /**
   * Adds a resource of type detector to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDetector(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:detector/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type detector-version to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDetectorVersion(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:detector-version/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type entity-type to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onEntityType(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:entity-type/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type external-model to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onExternalModel(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:external-model/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-type to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onEventType(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:event-type/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type label to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onLabel(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:label/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onModel(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:model/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model-version to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onModelVersion(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:model-version/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type outcome to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onOutcome(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:outcome/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRule(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:rule/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type variable to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onVariable(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:frauddetector:${Region}:${Account}:variable/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
