import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [comprehend](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehend extends PolicyStatement {
  public servicePrefix = 'comprehend';

  /**
   * Statement provider for service [comprehend](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to detect the language or languages present in the list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectDominantLanguage.html
   */
  public toBatchDetectDominantLanguage() {
    return this.to('BatchDetectDominantLanguage');
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectEntities.html
   */
  public toBatchDetectEntities() {
    return this.to('BatchDetectEntities');
  }

  /**
   * Grants permission to detect the phrases in the list of text documents that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectKeyPhrases.html
   */
  public toBatchDetectKeyPhrases() {
    return this.to('BatchDetectKeyPhrases');
  }

  /**
   * Grants permission to detect the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectSentiment.html
   */
  public toBatchDetectSentiment() {
    return this.to('BatchDetectSentiment');
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectSyntax.html
   */
  public toBatchDetectSyntax() {
    return this.to('BatchDetectSyntax');
  }

  /**
   * Grants permission to detect the sentiments associated with specific entities (such as brands or products) within the given list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectTargetedSentiment.html
   */
  public toBatchDetectTargetedSentiment() {
    return this.to('BatchDetectTargetedSentiment');
  }

  /**
   * Grants permission to create a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ClassifyDocument.html
   */
  public toClassifyDocument() {
    return this.to('ClassifyDocument');
  }

  /**
   * Grants permission to classify the personally identifiable information within given documents in real-time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ContainsPiiEntities.html
   */
  public toContainsPiiEntities() {
    return this.to('ContainsPiiEntities');
  }

  /**
   * Grants permission to create a new dataset within a flywheel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create a new document classifier that you can use to categorize documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifModelKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateDocumentClassifier.html
   */
  public toCreateDocumentClassifier() {
    return this.to('CreateDocumentClassifier');
  }

  /**
   * Grants permission to create a model-specific endpoint for synchronous inference for a previously trained custom model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    return this.to('CreateEndpoint');
  }

  /**
   * Grants permission to create an entity recognizer using submitted files
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifModelKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateEntityRecognizer.html
   */
  public toCreateEntityRecognizer() {
    return this.to('CreateEntityRecognizer');
  }

  /**
   * Grants permission to create a new flywheel that you can use to train model versions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifModelKmsKey()
   * - .ifDataLakeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateFlywheel.html
   */
  public toCreateFlywheel() {
    return this.to('CreateFlywheel');
  }

  /**
   * Grants permission to delete a previously created document classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteDocumentClassifier.html
   */
  public toDeleteDocumentClassifier() {
    return this.to('DeleteDocumentClassifier');
  }

  /**
   * Grants permission to delete a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete a submitted entity recognizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteEntityRecognizer.html
   */
  public toDeleteEntityRecognizer() {
    return this.to('DeleteEntityRecognizer');
  }

  /**
   * Grants permission to Delete a flywheel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteFlywheel.html
   */
  public toDeleteFlywheel() {
    return this.to('DeleteFlywheel');
  }

  /**
   * Grants permission to remove policy on resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to get the properties associated with a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to get the properties associated with a document classification job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDocumentClassificationJob.html
   */
  public toDescribeDocumentClassificationJob() {
    return this.to('DescribeDocumentClassificationJob');
  }

  /**
   * Grants permission to get the properties associated with a document classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDocumentClassifier.html
   */
  public toDescribeDocumentClassifier() {
    return this.to('DescribeDocumentClassifier');
  }

  /**
   * Grants permission to get the properties associated with a dominant language detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDominantLanguageDetectionJob.html
   */
  public toDescribeDominantLanguageDetectionJob() {
    return this.to('DescribeDominantLanguageDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a specific endpoint. Use this operation to get the status of an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
  }

  /**
   * Grants permission to get the properties associated with an entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEntitiesDetectionJob.html
   */
  public toDescribeEntitiesDetectionJob() {
    return this.to('DescribeEntitiesDetectionJob');
  }

  /**
   * Grants permission to provide details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEntityRecognizer.html
   */
  public toDescribeEntityRecognizer() {
    return this.to('DescribeEntityRecognizer');
  }

  /**
   * Grants permission to get the properties associated with an Events detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEventsDetectionJob.html
   */
  public toDescribeEventsDetectionJob() {
    return this.to('DescribeEventsDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a flywheel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeFlywheel.html
   */
  public toDescribeFlywheel() {
    return this.to('DescribeFlywheel');
  }

  /**
   * Grants permission to get the properties associated with a flywheel iteration for a flywheel
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFlywheelIterationId()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeFlywheelIteration.html
   */
  public toDescribeFlywheelIteration() {
    return this.to('DescribeFlywheelIteration');
  }

  /**
   * Grants permission to get the properties associated with a key phrases detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeKeyPhrasesDetectionJob.html
   */
  public toDescribeKeyPhrasesDetectionJob() {
    return this.to('DescribeKeyPhrasesDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a PII entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribePiiEntitiesDetectionJob.html
   */
  public toDescribePiiEntitiesDetectionJob() {
    return this.to('DescribePiiEntitiesDetectionJob');
  }

  /**
   * Grants permission to read attached policy on resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    return this.to('DescribeResourcePolicy');
  }

  /**
   * Grants permission to get the properties associated with a sentiment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeSentimentDetectionJob.html
   */
  public toDescribeSentimentDetectionJob() {
    return this.to('DescribeSentimentDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a targeted sentiment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeTargetedSentimentDetectionJob.html
   */
  public toDescribeTargetedSentimentDetectionJob() {
    return this.to('DescribeTargetedSentimentDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a topic detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeTopicsDetectionJob.html
   */
  public toDescribeTopicsDetectionJob() {
    return this.to('DescribeTopicsDetectionJob');
  }

  /**
   * Grants permission to detect the language or languages present in the text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectDominantLanguage.html
   */
  public toDetectDominantLanguage() {
    return this.to('DetectDominantLanguage');
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectEntities.html
   */
  public toDetectEntities() {
    return this.to('DetectEntities');
  }

  /**
   * Grants permission to detect the phrases in the text that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectKeyPhrases.html
   */
  public toDetectKeyPhrases() {
    return this.to('DetectKeyPhrases');
  }

  /**
   * Grants permission to detect the personally identifiable information entities ("Name", "SSN", "PIN", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectPiiEntities.html
   */
  public toDetectPiiEntities() {
    return this.to('DetectPiiEntities');
  }

  /**
   * Grants permission to detect the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html
   */
  public toDetectSentiment() {
    return this.to('DetectSentiment');
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSyntax.html
   */
  public toDetectSyntax() {
    return this.to('DetectSyntax');
  }

  /**
   * Grants permission to detect the sentiments associated with specific entities (such as brands or products) in a document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectTargetedSentiment.html
   */
  public toDetectTargetedSentiment() {
    return this.to('DetectTargetedSentiment');
  }

  /**
   * Grants permission to import a trained Comprehend model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifModelKmsKey()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ImportModel.html
   */
  public toImportModel() {
    return this.to('ImportModel');
  }

  /**
   * Grants permission to get a list of the Datasets associated with a flywheel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to get a list of the document classification jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassificationJobs.html
   */
  public toListDocumentClassificationJobs() {
    return this.to('ListDocumentClassificationJobs');
  }

  /**
   * Grants permission to get a list of summaries of the document classifiers that you have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassifierSummaries.html
   */
  public toListDocumentClassifierSummaries() {
    return this.to('ListDocumentClassifierSummaries');
  }

  /**
   * Grants permission to get a list of the document classifiers that you have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassifiers.html
   */
  public toListDocumentClassifiers() {
    return this.to('ListDocumentClassifiers');
  }

  /**
   * Grants permission to get a list of the dominant language detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDominantLanguageDetectionJobs.html
   */
  public toListDominantLanguageDetectionJobs() {
    return this.to('ListDominantLanguageDetectionJobs');
  }

  /**
   * Grants permission to get a list of all existing endpoints that you've created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEndpoints.html
   */
  public toListEndpoints() {
    return this.to('ListEndpoints');
  }

  /**
   * Grants permission to get a list of the entity detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntitiesDetectionJobs.html
   */
  public toListEntitiesDetectionJobs() {
    return this.to('ListEntitiesDetectionJobs');
  }

  /**
   * Grants permission to get a list of summaries for the entity recognizers that you have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntityRecognizerSummaries.html
   */
  public toListEntityRecognizerSummaries() {
    return this.to('ListEntityRecognizerSummaries');
  }

  /**
   * Grants permission to get a list of the properties of all entity recognizers that you created, including recognizers currently in training
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntityRecognizers.html
   */
  public toListEntityRecognizers() {
    return this.to('ListEntityRecognizers');
  }

  /**
   * Grants permission to get a list of Events detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEventsDetectionJobs.html
   */
  public toListEventsDetectionJobs() {
    return this.to('ListEventsDetectionJobs');
  }

  /**
   * Grants permission to get a list of iterations associated for a flywheel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListFlywheelIterationHistory.html
   */
  public toListFlywheelIterationHistory() {
    return this.to('ListFlywheelIterationHistory');
  }

  /**
   * Grants permission to get a list of the flywheels that you have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListFlywheels.html
   */
  public toListFlywheels() {
    return this.to('ListFlywheels');
  }

  /**
   * Grants permission to get a list of key phrase detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListKeyPhrasesDetectionJobs.html
   */
  public toListKeyPhrasesDetectionJobs() {
    return this.to('ListKeyPhrasesDetectionJobs');
  }

  /**
   * Grants permission to get a list of PII entities detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListPiiEntitiesDetectionJobs.html
   */
  public toListPiiEntitiesDetectionJobs() {
    return this.to('ListPiiEntitiesDetectionJobs');
  }

  /**
   * Grants permission to get a list of sentiment detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListSentimentDetectionJobs.html
   */
  public toListSentimentDetectionJobs() {
    return this.to('ListSentimentDetectionJobs');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to get a list of targeted sentiment detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTargetedSentimentDetectionJobs.html
   */
  public toListTargetedSentimentDetectionJobs() {
    return this.to('ListTargetedSentimentDetectionJobs');
  }

  /**
   * Grants permission to get a list of the topic detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTopicsDetectionJobs.html
   */
  public toListTopicsDetectionJobs() {
    return this.to('ListTopicsDetectionJobs');
  }

  /**
   * Grants permission to attach policy to resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to start an asynchronous document classification job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDocumentClassificationJob.html
   */
  public toStartDocumentClassificationJob() {
    return this.to('StartDocumentClassificationJob');
  }

  /**
   * Grants permission to start an asynchronous dominant language detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDominantLanguageDetectionJob.html
   */
  public toStartDominantLanguageDetectionJob() {
    return this.to('StartDominantLanguageDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous entity detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEntitiesDetectionJob.html
   */
  public toStartEntitiesDetectionJob() {
    return this.to('StartEntitiesDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous Events detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifOutputKmsKey()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEventsDetectionJob.html
   */
  public toStartEventsDetectionJob() {
    return this.to('StartEventsDetectionJob');
  }

  /**
   * Grants permission to start a flywheel iteration for a flywheel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartFlywheelIteration.html
   */
  public toStartFlywheelIteration() {
    return this.to('StartFlywheelIteration');
  }

  /**
   * Grants permission to start an asynchronous key phrase detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartKeyPhrasesDetectionJob.html
   */
  public toStartKeyPhrasesDetectionJob() {
    return this.to('StartKeyPhrasesDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous PII entities detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifOutputKmsKey()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartPiiEntitiesDetectionJob.html
   */
  public toStartPiiEntitiesDetectionJob() {
    return this.to('StartPiiEntitiesDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous sentiment detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartSentimentDetectionJob.html
   */
  public toStartSentimentDetectionJob() {
    return this.to('StartSentimentDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous targeted sentiment detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTargetedSentimentDetectionJob.html
   */
  public toStartTargetedSentimentDetectionJob() {
    return this.to('StartTargetedSentimentDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTopicsDetectionJob.html
   */
  public toStartTopicsDetectionJob() {
    return this.to('StartTopicsDetectionJob');
  }

  /**
   * Grants permission to stop a dominant language detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopDominantLanguageDetectionJob.html
   */
  public toStopDominantLanguageDetectionJob() {
    return this.to('StopDominantLanguageDetectionJob');
  }

  /**
   * Grants permission to stop an entity detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopEntitiesDetectionJob.html
   */
  public toStopEntitiesDetectionJob() {
    return this.to('StopEntitiesDetectionJob');
  }

  /**
   * Grants permission to stop an Events detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopEventsDetectionJob.html
   */
  public toStopEventsDetectionJob() {
    return this.to('StopEventsDetectionJob');
  }

  /**
   * Grants permission to stop a key phrase detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopKeyPhrasesDetectionJob.html
   */
  public toStopKeyPhrasesDetectionJob() {
    return this.to('StopKeyPhrasesDetectionJob');
  }

  /**
   * Grants permission to stop a PII entities detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopPiiEntitiesDetectionJob.html
   */
  public toStopPiiEntitiesDetectionJob() {
    return this.to('StopPiiEntitiesDetectionJob');
  }

  /**
   * Grants permission to stop a sentiment detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopSentimentDetectionJob.html
   */
  public toStopSentimentDetectionJob() {
    return this.to('StopSentimentDetectionJob');
  }

  /**
   * Grants permission to stop a targeted sentiment detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTargetedSentimentDetectionJob.html
   */
  public toStopTargetedSentimentDetectionJob() {
    return this.to('StopTargetedSentimentDetectionJob');
  }

  /**
   * Grants permission to stop a previously created document classifier training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTrainingDocumentClassifier.html
   */
  public toStopTrainingDocumentClassifier() {
    return this.to('StopTrainingDocumentClassifier');
  }

  /**
   * Grants permission to stop a previously created entity recognizer training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTrainingEntityRecognizer.html
   */
  public toStopTrainingEntityRecognizer() {
    return this.to('StopTrainingEntityRecognizer');
  }

  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource with given key
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update information about the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Grants permission to Update a flywheel's configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVolumeKmsKey()
   * - .ifModelKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UpdateFlywheel.html
   */
  public toUpdateFlywheel() {
    return this.to('UpdateFlywheel');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchDetectDominantLanguage',
      'BatchDetectEntities',
      'BatchDetectKeyPhrases',
      'BatchDetectSentiment',
      'BatchDetectSyntax',
      'BatchDetectTargetedSentiment',
      'ClassifyDocument',
      'ContainsPiiEntities',
      'DescribeDataset',
      'DescribeDocumentClassificationJob',
      'DescribeDocumentClassifier',
      'DescribeDominantLanguageDetectionJob',
      'DescribeEndpoint',
      'DescribeEntitiesDetectionJob',
      'DescribeEntityRecognizer',
      'DescribeEventsDetectionJob',
      'DescribeFlywheel',
      'DescribeFlywheelIteration',
      'DescribeKeyPhrasesDetectionJob',
      'DescribePiiEntitiesDetectionJob',
      'DescribeResourcePolicy',
      'DescribeSentimentDetectionJob',
      'DescribeTargetedSentimentDetectionJob',
      'DescribeTopicsDetectionJob',
      'DetectDominantLanguage',
      'DetectEntities',
      'DetectKeyPhrases',
      'DetectPiiEntities',
      'DetectSentiment',
      'DetectSyntax',
      'DetectTargetedSentiment',
      'ListDatasets',
      'ListDocumentClassificationJobs',
      'ListDocumentClassifierSummaries',
      'ListDocumentClassifiers',
      'ListDominantLanguageDetectionJobs',
      'ListEndpoints',
      'ListEntitiesDetectionJobs',
      'ListEntityRecognizerSummaries',
      'ListEntityRecognizers',
      'ListEventsDetectionJobs',
      'ListFlywheelIterationHistory',
      'ListFlywheels',
      'ListKeyPhrasesDetectionJobs',
      'ListPiiEntitiesDetectionJobs',
      'ListSentimentDetectionJobs',
      'ListTagsForResource',
      'ListTargetedSentimentDetectionJobs',
      'ListTopicsDetectionJobs'
    ],
    Write: [
      'CreateDataset',
      'CreateDocumentClassifier',
      'CreateEndpoint',
      'CreateEntityRecognizer',
      'CreateFlywheel',
      'DeleteDocumentClassifier',
      'DeleteEndpoint',
      'DeleteEntityRecognizer',
      'DeleteFlywheel',
      'DeleteResourcePolicy',
      'ImportModel',
      'PutResourcePolicy',
      'StartDocumentClassificationJob',
      'StartDominantLanguageDetectionJob',
      'StartEntitiesDetectionJob',
      'StartEventsDetectionJob',
      'StartFlywheelIteration',
      'StartKeyPhrasesDetectionJob',
      'StartPiiEntitiesDetectionJob',
      'StartSentimentDetectionJob',
      'StartTargetedSentimentDetectionJob',
      'StartTopicsDetectionJob',
      'StopDominantLanguageDetectionJob',
      'StopEntitiesDetectionJob',
      'StopEventsDetectionJob',
      'StopKeyPhrasesDetectionJob',
      'StopPiiEntitiesDetectionJob',
      'StopSentimentDetectionJob',
      'StopTargetedSentimentDetectionJob',
      'StopTrainingDocumentClassifier',
      'StopTrainingEntityRecognizer',
      'UpdateEndpoint',
      'UpdateFlywheel'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type targeted-sentiment-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTargetedSentimentDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTargetedSentimentDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:targeted-sentiment-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type document-classifier to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification-training.html
   *
   * @param documentClassifierName - Identifier for the documentClassifierName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifier(documentClassifierName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:document-classifier/${ documentClassifierName }`);
  }

  /**
   * Adds a resource of type document-classifier-endpoint to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html
   *
   * @param documentClassifierEndpointName - Identifier for the documentClassifierEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifierEndpoint(documentClassifierEndpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:document-classifier-endpoint/${ documentClassifierEndpointName }`);
  }

  /**
   * Adds a resource of type entity-recognizer to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/training-recognizers.html
   *
   * @param entityRecognizerName - Identifier for the entityRecognizerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizer(entityRecognizerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:entity-recognizer/${ entityRecognizerName }`);
  }

  /**
   * Adds a resource of type entity-recognizer-endpoint to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html
   *
   * @param entityRecognizerEndpointName - Identifier for the entityRecognizerEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizerEndpoint(entityRecognizerEndpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:entity-recognizer-endpoint/${ entityRecognizerEndpointName }`);
  }

  /**
   * Adds a resource of type dominant-language-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDominantLanguageDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDominantLanguageDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:dominant-language-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type entities-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEntitiesDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntitiesDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:entities-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type pii-entities-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartPiiEntitiesDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPiiEntitiesDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:pii-entities-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type events-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEventsDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventsDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:events-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type key-phrases-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartKeyPhrasesDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKeyPhrasesDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:key-phrases-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type sentiment-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartSentimentDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSentimentDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:sentiment-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type topics-detection-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTopicsDetectionJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTopicsDetectionJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:topics-detection-job/${ jobId }`);
  }

  /**
   * Adds a resource of type document-classification-job to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDocumentClassificationJob.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassificationJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:document-classification-job/${ jobId }`);
  }

  /**
   * Adds a resource of type flywheel to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateFlywheel.html
   *
   * @param flywheelName - Identifier for the flywheelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlywheel(flywheelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:flywheel/${ flywheelName }`);
  }

  /**
   * Adds a resource of type flywheel-dataset to the statement
   *
   * https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateDataset.html
   *
   * @param flywheelName - Identifier for the flywheelName.
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlywheelDataset(flywheelName: string, datasetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Comprehend.defaultPartition }:comprehend:${ region || '*' }:${ account || '*' }:flywheel/${ flywheelName }/dataset/${ datasetName }`);
  }

  /**
   * Filters access by the DataLake Kms Key associated with the flywheel resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlywheel()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDataLakeKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`DataLakeKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by particular Iteration Id for a flywheel
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toDescribeFlywheelIteration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFlywheelIterationId(value: string | string[], operator?: Operator | string) {
    return this.if(`FlywheelIterationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the model KMS key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toCreateFlywheel()
   * - .toImportModel()
   * - .toUpdateFlywheel()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifModelKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`ModelKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the output KMS key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartEventsDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartPiiEntitiesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTargetedSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifOutputKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the volume KMS key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toCreateFlywheel()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTargetedSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   * - .toUpdateFlywheel()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifVolumeKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`VolumeKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the list of all VPC security group ids associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toCreateFlywheel()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTargetedSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   * - .toUpdateFlywheel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all VPC subnets associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toCreateFlywheel()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTargetedSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   * - .toUpdateFlywheel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSubnets(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSubnets`, value, operator || 'StringLike');
  }
}
