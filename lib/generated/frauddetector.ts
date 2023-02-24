import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [frauddetector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html).
 *
 * @param options - Options for the statement
 */
export class Frauddetector extends PolicyStatement {
  public servicePrefix = 'frauddetector';

  /**
   * Statement provider for service [frauddetector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a batch of variables
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable.html
   */
  public toBatchCreateVariable() {
    return this.to('BatchCreateVariable');
  }

  /**
   * Grants permission to get a batch of variables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable.html
   */
  public toBatchGetVariable() {
    return this.to('BatchGetVariable');
  }

  /**
   * Grants permission to cancel the specified batch import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchImportJob.html
   */
  public toCancelBatchImportJob() {
    return this.to('CancelBatchImportJob');
  }

  /**
   * Grants permission to cancel the specified batch prediction job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchPredictionJob.html
   */
  public toCancelBatchPredictionJob() {
    return this.to('CancelBatchPredictionJob');
  }

  /**
   * Grants permission to create a batch import job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchImportJob.html
   */
  public toCreateBatchImportJob() {
    return this.to('CreateBatchImportJob');
  }

  /**
   * Grants permission to create a batch prediction job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchPredictionJob.html
   */
  public toCreateBatchPredictionJob() {
    return this.to('CreateBatchPredictionJob');
  }

  /**
   * Grants permission to create a detector version. The detector version starts in a DRAFT status
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion.html
   */
  public toCreateDetectorVersion() {
    return this.to('CreateDetectorVersion');
  }

  /**
   * Grants permission to create a list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateList.html
   */
  public toCreateList() {
    return this.to('CreateList');
  }

  /**
   * Grants permission to create a model using the specified model type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to create a version of the model using the specified model type and model id
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion.html
   */
  public toCreateModelVersion() {
    return this.to('CreateModelVersion');
  }

  /**
   * Grants permission to create a rule for use with the specified detector
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
   * Grants permission to create a variable
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
   * Grants permission to delete a batch import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchImportJob.html
   */
  public toDeleteBatchImportJob() {
    return this.to('DeleteBatchImportJob');
  }

  /**
   * Grants permission to delete a batch prediction job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchPredictionJob.html
   */
  public toDeleteBatchPredictionJob() {
    return this.to('DeleteBatchPredictionJob');
  }

  /**
   * Grants permission to delete the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector.html
   */
  public toDeleteDetector() {
    return this.to('DeleteDetector');
  }

  /**
   * Grants permission to delete the detector version. You cannot delete detector versions that are in ACTIVE status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion.html
   */
  public toDeleteDetectorVersion() {
    return this.to('DeleteDetectorVersion');
  }

  /**
   * Grants permission to delete an entity type. You cannot delete an entity type that is included in an event type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEntityType.html
   */
  public toDeleteEntityType() {
    return this.to('DeleteEntityType');
  }

  /**
   * Grants permission to deletes the specified event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent.html
   */
  public toDeleteEvent() {
    return this.to('DeleteEvent');
  }

  /**
   * Grants permission to delete an event type. You cannot delete an event type that is used in a detector or a model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventType.html
   */
  public toDeleteEventType() {
    return this.to('DeleteEventType');
  }

  /**
   * Grants permission to delete events for the specified event type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventsByEventType.html
   */
  public toDeleteEventsByEventType() {
    return this.to('DeleteEventsByEventType');
  }

  /**
   * Grants permission to remove a SageMaker model from Amazon Fraud Detector. You can remove an Amazon SageMaker model if it is not associated with a detector version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteExternalModel.html
   */
  public toDeleteExternalModel() {
    return this.to('DeleteExternalModel');
  }

  /**
   * Grants permission to delete a label. You cannot delete labels that are included in an event type in Amazon Fraud Detector. You cannot delete a label assigned to an event ID. You must first delete the relevant event ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteLabel.html
   */
  public toDeleteLabel() {
    return this.to('DeleteLabel');
  }

  /**
   * Grants permission to delete a list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteList.html
   */
  public toDeleteList() {
    return this.to('DeleteList');
  }

  /**
   * Grants permission to delete a model. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModel.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to delete a model version. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModelVersion.html
   */
  public toDeleteModelVersion() {
    return this.to('DeleteModelVersion');
  }

  /**
   * Grants permission to delete an outcome. You cannot delete an outcome that is used in a rule version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteOutcome.html
   */
  public toDeleteOutcome() {
    return this.to('DeleteOutcome');
  }

  /**
   * Grants permission to delete the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a variable. You cannot delete variables that are included in an event type in Amazon Fraud Detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteVariable.html
   */
  public toDeleteVariable() {
    return this.to('DeleteVariable');
  }

  /**
   * Grants permission to get all versions for a specified detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector.html
   */
  public toDescribeDetector() {
    return this.to('DescribeDetector');
  }

  /**
   * Grants permission to get all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions.html
   */
  public toDescribeModelVersions() {
    return this.to('DescribeModelVersions');
  }

  /**
   * Grants permission to get all batch import jobs or a specific job if you specify a job ID
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchImportJobs.html
   */
  public toGetBatchImportJobs() {
    return this.to('GetBatchImportJobs');
  }

  /**
   * Grants permission to get all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchPredictionJobs.html
   */
  public toGetBatchPredictionJobs() {
    return this.to('GetBatchPredictionJobs');
  }

  /**
   * Grants permission to get a specific event type DeleteEventsByEventType API execution status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDeleteEventsByEventTypeStatus.html
   */
  public toGetDeleteEventsByEventTypeStatus() {
    return this.to('GetDeleteEventsByEventTypeStatus');
  }

  /**
   * Grants permission to get a particular detector version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion.html
   */
  public toGetDetectorVersion() {
    return this.to('GetDetectorVersion');
  }

  /**
   * Grants permission to get all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors.html
   */
  public toGetDetectors() {
    return this.to('GetDetectors');
  }

  /**
   * Grants permission to get all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEntityTypesResponse as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes.html
   */
  public toGetEntityTypes() {
    return this.to('GetEntityTypes');
  }

  /**
   * Grants permission to get the details of the specified event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEvent.html
   */
  public toGetEvent() {
    return this.to('GetEvent');
  }

  /**
   * Grants permission to evaluate an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction.html
   */
  public toGetEventPrediction() {
    return this.to('GetEventPrediction');
  }

  /**
   * Grants permission to get more details of a particular prediction
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPredictionMetadata.html
   */
  public toGetEventPredictionMetadata() {
    return this.to('GetEventPredictionMetadata');
  }

  /**
   * Grants permission to get all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes.html
   */
  public toGetEventTypes() {
    return this.to('GetEventTypes');
  }

  /**
   * Grants permission to get the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels.html
   */
  public toGetExternalModels() {
    return this.to('GetExternalModels');
  }

  /**
   * Grants permission to get the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey.html
   */
  public toGetKMSEncryptionKey() {
    return this.to('GetKMSEncryptionKey');
  }

  /**
   * Grants permission to get all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels.html
   */
  public toGetLabels() {
    return this.to('GetLabels');
  }

  /**
   * Grants permission to get elements of a list
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetListElements.html
   */
  public toGetListElements() {
    return this.to('GetListElements');
  }

  /**
   * Grants permission to get metadata about lists
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetListsMetadata.html
   */
  public toGetListsMetadata() {
    return this.to('GetListsMetadata');
  }

  /**
   * Grants permission to get the details of the specified model version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion.html
   */
  public toGetModelVersion() {
    return this.to('GetModelVersion');
  }

  /**
   * Grants permission to get one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels.html
   */
  public toGetModels() {
    return this.to('GetModels');
  }

  /**
   * Grants permission to get one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes.html
   */
  public toGetOutcomes() {
    return this.to('GetOutcomes');
  }

  /**
   * Grants permission to get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html
   */
  public toGetRules() {
    return this.to('GetRules');
  }

  /**
   * Grants permission to get all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables.html
   */
  public toGetVariables() {
    return this.to('GetVariables');
  }

  /**
   * Grants permission to get a list of past predictions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html
   */
  public toListEventPredictions() {
    return this.to('ListEventPredictions');
  }

  /**
   * Grants permission to list all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update a detector
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
   * Grants permission to create or update an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account
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
   * Grants permission to create or update an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications
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
   * Grants permission to create or update an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables
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
   * Grants permission to specify the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html
   */
  public toPutKMSEncryptionKey() {
    return this.to('PutKMSEncryptionKey');
  }

  /**
   * Grants permission to create or update label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector
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
   * Grants permission to create or update an outcome
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
   * Grants permission to send event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_SendEvent.html
   */
  public toSendEvent() {
    return this.to('SendEvent');
  }

  /**
   * Grants permission to assign tags to a resource
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
   * Grants permission to remove tags from a resource
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
   * Grants permission to update a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion.html
   */
  public toUpdateDetectorVersion() {
    return this.to('UpdateDetectorVersion');
  }

  /**
   * Grants permission to update the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata.html
   */
  public toUpdateDetectorVersionMetadata() {
    return this.to('UpdateDetectorVersionMetadata');
  }

  /**
   * Grants permission to update the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus.html
   */
  public toUpdateDetectorVersionStatus() {
    return this.to('UpdateDetectorVersionStatus');
  }

  /**
   * Grants permission to update an existing event record's label value
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateEventLabel.html
   */
  public toUpdateEventLabel() {
    return this.to('UpdateEventLabel');
  }

  /**
   * Grants permission to update a list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateList.html
   */
  public toUpdateList() {
    return this.to('UpdateList');
  }

  /**
   * Grants permission to update a model. You can update the description attribute using this action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel.html
   */
  public toUpdateModel() {
    return this.to('UpdateModel');
  }

  /**
   * Grants permission to update a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion.html
   */
  public toUpdateModelVersion() {
    return this.to('UpdateModelVersion');
  }

  /**
   * Grants permission to update the status of a model version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus.html
   */
  public toUpdateModelVersionStatus() {
    return this.to('UpdateModelVersionStatus');
  }

  /**
   * Grants permission to update a rule's metadata. The description attribute can be updated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html
   */
  public toUpdateRuleMetadata() {
    return this.to('UpdateRuleMetadata');
  }

  /**
   * Grants permission to update a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...)
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
   * Grants permission to update a variable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html
   */
  public toUpdateVariable() {
    return this.to('UpdateVariable');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchCreateVariable',
      'CancelBatchImportJob',
      'CancelBatchPredictionJob',
      'CreateBatchImportJob',
      'CreateBatchPredictionJob',
      'CreateDetectorVersion',
      'CreateList',
      'CreateModel',
      'CreateModelVersion',
      'CreateRule',
      'CreateVariable',
      'DeleteBatchImportJob',
      'DeleteBatchPredictionJob',
      'DeleteDetector',
      'DeleteDetectorVersion',
      'DeleteEntityType',
      'DeleteEvent',
      'DeleteEventType',
      'DeleteEventsByEventType',
      'DeleteExternalModel',
      'DeleteLabel',
      'DeleteList',
      'DeleteModel',
      'DeleteModelVersion',
      'DeleteOutcome',
      'DeleteRule',
      'DeleteVariable',
      'PutDetector',
      'PutEntityType',
      'PutEventType',
      'PutExternalModel',
      'PutKMSEncryptionKey',
      'PutLabel',
      'PutOutcome',
      'SendEvent',
      'UpdateDetectorVersion',
      'UpdateDetectorVersionMetadata',
      'UpdateDetectorVersionStatus',
      'UpdateEventLabel',
      'UpdateList',
      'UpdateModel',
      'UpdateModelVersion',
      'UpdateModelVersionStatus',
      'UpdateRuleMetadata',
      'UpdateRuleVersion',
      'UpdateVariable'
    ],
    List: [
      'BatchGetVariable',
      'GetBatchImportJobs',
      'GetBatchPredictionJobs',
      'GetDetectors',
      'GetEntityTypes',
      'GetEventTypes',
      'GetExternalModels',
      'GetLabels',
      'GetListsMetadata',
      'GetModels',
      'GetOutcomes',
      'GetRules',
      'GetVariables',
      'ListEventPredictions'
    ],
    Read: [
      'DescribeDetector',
      'DescribeModelVersions',
      'GetDeleteEventsByEventTypeStatus',
      'GetDetectorVersion',
      'GetEvent',
      'GetEventPrediction',
      'GetEventPredictionMetadata',
      'GetKMSEncryptionKey',
      'GetListElements',
      'GetModelVersion',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type batch-prediction to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBatchPrediction(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:batch-prediction/${ resourcePath }`);
  }

  /**
   * Adds a resource of type detector to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetector(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:detector/${ resourcePath }`);
  }

  /**
   * Adds a resource of type detector-version to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetectorVersion(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:detector-version/${ resourcePath }`);
  }

  /**
   * Adds a resource of type entity-type to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityType(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:entity-type/${ resourcePath }`);
  }

  /**
   * Adds a resource of type external-model to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExternalModel(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:external-model/${ resourcePath }`);
  }

  /**
   * Adds a resource of type event-type to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventType(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:event-type/${ resourcePath }`);
  }

  /**
   * Adds a resource of type label to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLabel(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:label/${ resourcePath }`);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:model/${ resourcePath }`);
  }

  /**
   * Adds a resource of type model-version to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelVersion(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:model-version/${ resourcePath }`);
  }

  /**
   * Adds a resource of type outcome to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOutcome(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:outcome/${ resourcePath }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:rule/${ resourcePath }`);
  }

  /**
   * Adds a resource of type variable to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVariable(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:variable/${ resourcePath }`);
  }

  /**
   * Adds a resource of type batch-import to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBatchImport(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:batch-import/${ resourcePath }`);
  }

  /**
   * Adds a resource of type list to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onList(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:frauddetector:${ region || '*' }:${ account || '*' }:list/${ resourcePath }`);
  }
}
