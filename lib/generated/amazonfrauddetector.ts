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
      "accessLevel": "Write"
    },
    "BatchGetVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable",
      "description": "Gets a batch of variables.",
      "accessLevel": "List"
    },
    "CreateDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion",
      "description": "Creates a detector version. The detector version starts in a DRAFT status.",
      "accessLevel": "Write"
    },
    "CreateModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion",
      "description": "Creates a version of the model using the specified model type.",
      "accessLevel": "Write"
    },
    "CreateRule": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html",
      "description": "Creates a rule for use with the specified detector.",
      "accessLevel": "Write"
    },
    "CreateVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html",
      "description": "Creates a variable.",
      "accessLevel": "Write"
    },
    "DeleteDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector",
      "description": "Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.",
      "accessLevel": "Write"
    },
    "DeleteDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion",
      "description": "Deletes the detector version. You cannot delete detector versions that are in ACTIVE status.",
      "accessLevel": "Write"
    },
    "DeleteEvent": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent",
      "description": "Deletes the specified event.",
      "accessLevel": "Write"
    },
    "DeleteRuleVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRuleVersion",
      "description": "Deletes the rule version. You cannot delete a rule version if it is used by an ACTIVE or INACTIVE detector version.",
      "accessLevel": "Write"
    },
    "DescribeDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector",
      "description": "Gets all versions for a specified detector.",
      "accessLevel": "Read"
    },
    "DescribeModelVersions": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions",
      "description": "Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.",
      "accessLevel": "Read"
    },
    "GetDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion",
      "description": "Gets a particular detector version.",
      "accessLevel": "List"
    },
    "GetDetectors": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors",
      "description": "Gets all of detectors. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List"
    },
    "GetExternalModels": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels",
      "description": "Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List"
    },
    "GetModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion",
      "description": "Gets a model version.",
      "accessLevel": "List"
    },
    "GetModels": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels",
      "description": "Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.",
      "accessLevel": "List"
    },
    "GetOutcomes": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes",
      "description": "Gets one or more outcomes. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.",
      "accessLevel": "List"
    },
    "GetPrediction": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetPrediction",
      "description": "Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.",
      "accessLevel": "Read"
    },
    "GetRules": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html",
      "description": "Gets all rules available for the specified detector.",
      "accessLevel": "List"
    },
    "GetVariables": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables",
      "description": "Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.",
      "accessLevel": "List"
    },
    "PutDetector": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html",
      "description": "Creates or updates a detector.",
      "accessLevel": "Write"
    },
    "PutExternalModel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html",
      "description": "Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.",
      "accessLevel": "Write"
    },
    "PutModel": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutModel",
      "description": "Creates or updates a model.",
      "accessLevel": "Write"
    },
    "PutOutcome": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html",
      "description": "Creates or updates an outcome.",
      "accessLevel": "Write"
    },
    "UpdateDetectorVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion",
      "description": "Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a DRAFT detector version.",
      "accessLevel": "Write"
    },
    "UpdateDetectorVersionMetadata": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata",
      "description": "Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).",
      "accessLevel": "Write"
    },
    "UpdateDetectorVersionStatus": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus",
      "description": "Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.",
      "accessLevel": "Write"
    },
    "UpdateModelVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion",
      "description": "Updates a model version. You can update the description and status attributes using this action.",
      "accessLevel": "Write"
    },
    "UpdateRuleMetadata": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html",
      "description": "Updates a rule's metadata.",
      "accessLevel": "Write"
    },
    "UpdateRuleVersion": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html",
      "description": "Updates a rule version resulting in a new rule version.",
      "accessLevel": "Write"
    },
    "UpdateVariable": {
      "url": "https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html",
      "description": "Updates a variable.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

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
   * Creates a version of the model using the specified model type.
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
   * Deletes the rule version. You cannot delete a rule version if it is used by an ACTIVE or INACTIVE detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRuleVersion
   */
  public deleteRuleVersion() {
    this.add('frauddetector:DeleteRuleVersion');
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
   * Gets all of detectors. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.
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
   * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.
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
   * Gets a model version.
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
   * Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.
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
   * Gets one or more outcomes. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.
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
   * Gets all rules available for the specified detector.
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
   * Creates or updates a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutModel
   */
  public putModel() {
    this.add('frauddetector:PutModel');
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
   * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a DRAFT detector version.
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
   * Updates a model version. You can update the description and status attributes using this action.
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
   * Updates a rule's metadata.
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
   * Updates a rule version resulting in a new rule version.
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
}
