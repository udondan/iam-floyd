import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [frauddetector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Frauddetector extends PolicyStatement {
  public servicePrefix = 'frauddetector';

  /**
   * Statement provider for service [frauddetector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html).
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable
   */
  public toBatchCreateVariable() {
    return this.to('BatchCreateVariable');
  }

  /**
   * Gets a batch of variables.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable
   */
  public toBatchGetVariable() {
    return this.to('BatchGetVariable');
  }

  /**
   * Creates a detector version. The detector version starts in a DRAFT status.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion
   */
  public toCreateDetectorVersion() {
    return this.to('CreateDetectorVersion');
  }

  /**
   * Creates a model using the specified model type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Creates a version of the model using the specified model type and model id.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion
   */
  public toCreateModelVersion() {
    return this.to('CreateModelVersion');
  }

  /**
   * Creates a rule for use with the specified detector.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
  }

  /**
   * Creates a variable.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html
   */
  public toCreateVariable() {
    return this.to('CreateVariable');
  }

  /**
   * Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector
   */
  public toDeleteDetector() {
    return this.to('DeleteDetector');
  }

  /**
   * Deletes the detector version. You cannot delete detector versions that are in ACTIVE status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion
   */
  public toDeleteDetectorVersion() {
    return this.to('DeleteDetectorVersion');
  }

  /**
   * Deletes an entity type. You cannot delete an entity type that is included in an event type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEntityType
   */
  public toDeleteEntityType() {
    return this.to('DeleteEntityType');
  }

  /**
   * Deletes the specified event.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent
   */
  public toDeleteEvent() {
    return this.to('DeleteEvent');
  }

  /**
   * Deletes an event type. You cannot delete an event type that is used in a detector or a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventType
   */
  public toDeleteEventType() {
    return this.to('DeleteEventType');
  }

  /**
   * Removes a SageMaker model from Amazon Fraud Detector. You can remove an Amazon SageMaker model if it is not associated with a detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteExternalModel
   */
  public toDeleteExternalModel() {
    return this.to('DeleteExternalModel');
  }

  /**
   * Deletes a label. You cannot delete labels that are included in an event type in Amazon Fraud Detector. You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteLabel
   */
  public toDeleteLabel() {
    return this.to('DeleteLabel');
  }

  /**
   * Deletes a model. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModel
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Deletes a model version. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModelVersion
   */
  public toDeleteModelVersion() {
    return this.to('DeleteModelVersion');
  }

  /**
   * Deletes an outcome. You cannot delete an outcome that is used in a rule version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteOutcome
   */
  public toDeleteOutcome() {
    return this.to('DeleteOutcome');
  }

  /**
   * Deletes the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Deletes a variable. You cannot delete variables that are included in an event type in Amazon Fraud Detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteVariable
   */
  public toDeleteVariable() {
    return this.to('DeleteVariable');
  }

  /**
   * Gets all versions for a specified detector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector
   */
  public toDescribeDetector() {
    return this.to('DescribeDetector');
  }

  /**
   * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions
   */
  public toDescribeModelVersions() {
    return this.to('DescribeModelVersions');
  }

  /**
   * Gets a particular detector version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion
   */
  public toGetDetectorVersion() {
    return this.to('GetDetectorVersion');
  }

  /**
   * Gets all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors
   */
  public toGetDetectors() {
    return this.to('GetDetectors');
  }

  /**
   * Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEntityTypesResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes
   */
  public toGetEntityTypes() {
    return this.to('GetEntityTypes');
  }

  /**
   * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction
   */
  public toGetEventPrediction() {
    return this.to('GetEventPrediction');
  }

  /**
   * Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes
   */
  public toGetEventTypes() {
    return this.to('GetEventTypes');
  }

  /**
   * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels
   */
  public toGetExternalModels() {
    return this.to('GetExternalModels');
  }

  /**
   * Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey
   */
  public toGetKMSEncryptionKey() {
    return this.to('GetKMSEncryptionKey');
  }

  /**
   * Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels
   */
  public toGetLabels() {
    return this.to('GetLabels');
  }

  /**
   * Gets the details of the specified model version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion
   */
  public toGetModelVersion() {
    return this.to('GetModelVersion');
  }

  /**
   * Gets one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels
   */
  public toGetModels() {
    return this.to('GetModels');
  }

  /**
   * Gets one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes
   */
  public toGetOutcomes() {
    return this.to('GetOutcomes');
  }

  /**
   * Get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html
   */
  public toGetRules() {
    return this.to('GetRules');
  }

  /**
   * Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables
   */
  public toGetVariables() {
    return this.to('GetVariables');
  }

  /**
   * Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Creates or updates a detector.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html
   */
  public toPutDetector() {
    return this.to('PutDetector');
  }

  /**
   * Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEntityType.html
   */
  public toPutEntityType() {
    return this.to('PutEntityType');
  }

  /**
   * Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEventType.html
   */
  public toPutEventType() {
    return this.to('PutEventType');
  }

  /**
   * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html
   */
  public toPutExternalModel() {
    return this.to('PutExternalModel');
  }

  /**
   * Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html
   */
  public toPutKMSEncryptionKey() {
    return this.to('PutKMSEncryptionKey');
  }

  /**
   * Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutLabel.html
   */
  public toPutLabel() {
    return this.to('PutLabel');
  }

  /**
   * Creates or updates an outcome.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html
   */
  public toPutOutcome() {
    return this.to('PutOutcome');
  }

  /**
   * Assigns tags to a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes tags from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion
   */
  public toUpdateDetectorVersion() {
    return this.to('UpdateDetectorVersion');
  }

  /**
   * Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata
   */
  public toUpdateDetectorVersionMetadata() {
    return this.to('UpdateDetectorVersionMetadata');
  }

  /**
   * Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus
   */
  public toUpdateDetectorVersionStatus() {
    return this.to('UpdateDetectorVersionStatus');
  }

  /**
   * Updates a model. You can update the description attribute using this action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel
   */
  public toUpdateModel() {
    return this.to('UpdateModel');
  }

  /**
   * Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion
   */
  public toUpdateModelVersion() {
    return this.to('UpdateModelVersion');
  }

  /**
   * Updates the status of a model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus
   */
  public toUpdateModelVersionStatus() {
    return this.to('UpdateModelVersionStatus');
  }

  /**
   * Updates a rule's metadata. The description attribute can be updated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html
   */
  public toUpdateRuleMetadata() {
    return this.to('UpdateRuleMetadata');
  }

  /**
   * Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html
   */
  public toUpdateRuleVersion() {
    return this.to('UpdateRuleVersion');
  }

  /**
   * Updates a variable.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html
   */
  public toUpdateVariable() {
    return this.to('UpdateVariable');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchCreateVariable",
      "CreateDetectorVersion",
      "CreateModel",
      "CreateModelVersion",
      "CreateRule",
      "CreateVariable",
      "DeleteDetector",
      "DeleteDetectorVersion",
      "DeleteEntityType",
      "DeleteEvent",
      "DeleteEventType",
      "DeleteExternalModel",
      "DeleteLabel",
      "DeleteModel",
      "DeleteModelVersion",
      "DeleteOutcome",
      "DeleteRule",
      "DeleteVariable",
      "PutDetector",
      "PutEntityType",
      "PutEventType",
      "PutExternalModel",
      "PutKMSEncryptionKey",
      "PutLabel",
      "PutOutcome",
      "UpdateDetectorVersion",
      "UpdateDetectorVersionMetadata",
      "UpdateDetectorVersionStatus",
      "UpdateModel",
      "UpdateModelVersion",
      "UpdateModelVersionStatus",
      "UpdateRuleMetadata",
      "UpdateRuleVersion",
      "UpdateVariable"
    ],
    "List": [
      "BatchGetVariable",
      "GetDetectorVersion",
      "GetDetectors",
      "GetEntityTypes",
      "GetEventTypes",
      "GetExternalModels",
      "GetLabels",
      "GetModelVersion",
      "GetModels",
      "GetOutcomes",
      "GetRules",
      "GetVariables",
      "ListTagsForResource"
    ],
    "Read": [
      "DescribeDetector",
      "DescribeModelVersions",
      "GetEventPrediction",
      "GetKMSEncryptionKey"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type detector to the statement
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
