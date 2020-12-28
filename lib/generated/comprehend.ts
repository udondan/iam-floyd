import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to detect the language or languages present in the list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectDominantLanguage.html
   */
  public toBatchDetectDominantLanguage() {
    return this.to('BatchDetectDominantLanguage');
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectEntities.html
   */
  public toBatchDetectEntities() {
    return this.to('BatchDetectEntities');
  }

  /**
   * Grants permission to detect the phrases in the list of text documents that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectKeyPhrases.html
   */
  public toBatchDetectKeyPhrases() {
    return this.to('BatchDetectKeyPhrases');
  }

  /**
   * Grants permission to detect the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSentiment.html
   */
  public toBatchDetectSentiment() {
    return this.to('BatchDetectSentiment');
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSyntax.html
   */
  public toBatchDetectSyntax() {
    return this.to('BatchDetectSyntax');
  }

  /**
   * Grants permission to create a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ClassifyDocument.html
   */
  public toClassifyDocument() {
    return this.to('ClassifyDocument');
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
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateDocumentClassifier.html
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
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEndpoint.html
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
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEntityRecognizer.html
   */
  public toCreateEntityRecognizer() {
    return this.to('CreateEntityRecognizer');
  }

  /**
   * Grants permission to delete a previously created document classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteDocumentClassifier.html
   */
  public toDeleteDocumentClassifier() {
    return this.to('DeleteDocumentClassifier');
  }

  /**
   * Grants permission to delete a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete a submitted entity recognizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEntityRecognizer.html
   */
  public toDeleteEntityRecognizer() {
    return this.to('DeleteEntityRecognizer');
  }

  /**
   * Grants permission to get the properties associated with a document classification job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassificationJob.html
   */
  public toDescribeDocumentClassificationJob() {
    return this.to('DescribeDocumentClassificationJob');
  }

  /**
   * Grants permission to get the properties associated with a document classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassifier.html
   */
  public toDescribeDocumentClassifier() {
    return this.to('DescribeDocumentClassifier');
  }

  /**
   * Grants permission to get the properties associated with a dominant language detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDominantLanguageDetectionJob.html
   */
  public toDescribeDominantLanguageDetectionJob() {
    return this.to('DescribeDominantLanguageDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a specific endpoint. Use this operation to get the status of an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
  }

  /**
   * Grants permission to get the properties associated with an entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntitiesDetectionJob.html
   */
  public toDescribeEntitiesDetectionJob() {
    return this.to('DescribeEntitiesDetectionJob');
  }

  /**
   * Grants permission to provide details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntityRecognizer.html
   */
  public toDescribeEntityRecognizer() {
    return this.to('DescribeEntityRecognizer');
  }

  /**
   * Grants permission to get the properties associated with an Events detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEventsDetectionJob.html
   */
  public toDescribeEventsDetectionJob() {
    return this.to('DescribeEventsDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a key phrases detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeKeyPhrasesDetectionJob.html
   */
  public toDescribeKeyPhrasesDetectionJob() {
    return this.to('DescribeKeyPhrasesDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a PII entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribePiiEntitiesDetectionJob.html
   */
  public toDescribePiiEntitiesDetectionJob() {
    return this.to('DescribePiiEntitiesDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a sentiment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeSentimentDetectionJob.html
   */
  public toDescribeSentimentDetectionJob() {
    return this.to('DescribeSentimentDetectionJob');
  }

  /**
   * Grants permission to get the properties associated with a topic detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTopicsDetectionJob.html
   */
  public toDescribeTopicsDetectionJob() {
    return this.to('DescribeTopicsDetectionJob');
  }

  /**
   * Grants permission to detect the language or languages present in the text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html
   */
  public toDetectDominantLanguage() {
    return this.to('DetectDominantLanguage');
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectEntities.html
   */
  public toDetectEntities() {
    return this.to('DetectEntities');
  }

  /**
   * Grants permission to detect the phrases in the text that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectKeyPhrases.html
   */
  public toDetectKeyPhrases() {
    return this.to('DetectKeyPhrases');
  }

  /**
   * Grants permission to detect the personally identifiable information entities ("Name", "SSN", "PIN", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html
   */
  public toDetectPiiEntities() {
    return this.to('DetectPiiEntities');
  }

  /**
   * Grants permission to detect the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html
   */
  public toDetectSentiment() {
    return this.to('DetectSentiment');
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html
   */
  public toDetectSyntax() {
    return this.to('DetectSyntax');
  }

  /**
   * Grants permission to get a list of the document classification jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassificationJobs.html
   */
  public toListDocumentClassificationJobs() {
    return this.to('ListDocumentClassificationJobs');
  }

  /**
   * Grants permission to get a list of the document classifiers that you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifiers.html
   */
  public toListDocumentClassifiers() {
    return this.to('ListDocumentClassifiers');
  }

  /**
   * Grants permission to get a list of the dominant language detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDominantLanguageDetectionJobs.html
   */
  public toListDominantLanguageDetectionJobs() {
    return this.to('ListDominantLanguageDetectionJobs');
  }

  /**
   * Grants permission to get a list of all existing endpoints that you've created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEndpoints.html
   */
  public toListEndpoints() {
    return this.to('ListEndpoints');
  }

  /**
   * Grants permission to get a list of the entity detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntitiesDetectionJobs.html
   */
  public toListEntitiesDetectionJobs() {
    return this.to('ListEntitiesDetectionJobs');
  }

  /**
   * Grants permission to get a list of the properties of all entity recognizers that you created, including recognizers currently in training
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizers.html
   */
  public toListEntityRecognizers() {
    return this.to('ListEntityRecognizers');
  }

  /**
   * Grants permission to get a list of Events detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEventsDetectionJobs.html
   */
  public toListEventsDetectionJobs() {
    return this.to('ListEventsDetectionJobs');
  }

  /**
   * Grants permission to get a list of key phrase detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListKeyPhrasesDetectionJobs.html
   */
  public toListKeyPhrasesDetectionJobs() {
    return this.to('ListKeyPhrasesDetectionJobs');
  }

  /**
   * Grants permission to get a list of PII entities detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListPiiEntitiesDetectionJobs.html
   */
  public toListPiiEntitiesDetectionJobs() {
    return this.to('ListPiiEntitiesDetectionJobs');
  }

  /**
   * Grants permission to get a list of sentiment detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListSentimentDetectionJobs.html
   */
  public toListSentimentDetectionJobs() {
    return this.to('ListSentimentDetectionJobs');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to get a list of the topic detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTopicsDetectionJobs.html
   */
  public toListTopicsDetectionJobs() {
    return this.to('ListTopicsDetectionJobs');
  }

  /**
   * Grants permission to start an asynchronous document classification job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDocumentClassificationJob.html
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
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDominantLanguageDetectionJob.html
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
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEntitiesDetectionJob.html
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
   * - .ifOutputKmsKey()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEventsDetectionJob.html
   */
  public toStartEventsDetectionJob() {
    return this.to('StartEventsDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous key phrase detection job for a collection of documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartKeyPhrasesDetectionJob.html
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
   * - .ifOutputKmsKey()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartPiiEntitiesDetectionJob.html
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
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartSentimentDetectionJob.html
   */
  public toStartSentimentDetectionJob() {
    return this.to('StartSentimentDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTopicsDetectionJob.html
   */
  public toStartTopicsDetectionJob() {
    return this.to('StartTopicsDetectionJob');
  }

  /**
   * Grants permission to stop a dominant language detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopDominantLanguageDetectionJob.html
   */
  public toStopDominantLanguageDetectionJob() {
    return this.to('StopDominantLanguageDetectionJob');
  }

  /**
   * Grants permission to stop an entity detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEntitiesDetectionJob.html
   */
  public toStopEntitiesDetectionJob() {
    return this.to('StopEntitiesDetectionJob');
  }

  /**
   * Grants permission to stop an Events detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEventsDetectionJob.html
   */
  public toStopEventsDetectionJob() {
    return this.to('StopEventsDetectionJob');
  }

  /**
   * Grants permission to stop a key phrase detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopKeyPhrasesDetectionJob.html
   */
  public toStopKeyPhrasesDetectionJob() {
    return this.to('StopKeyPhrasesDetectionJob');
  }

  /**
   * Grants permission to stop a PII entities detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopPiiEntitiesDetectionJob.html
   */
  public toStopPiiEntitiesDetectionJob() {
    return this.to('StopPiiEntitiesDetectionJob');
  }

  /**
   * Grants permission to stop a sentiment detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopSentimentDetectionJob.html
   */
  public toStopSentimentDetectionJob() {
    return this.to('StopSentimentDetectionJob');
  }

  /**
   * Grants permission to stop a previously created document classifier training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingDocumentClassifier.html
   */
  public toStopTrainingDocumentClassifier() {
    return this.to('StopTrainingDocumentClassifier');
  }

  /**
   * Grants permission to stop a previously created entity recognizer training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingEntityRecognizer.html
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
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_TagResource.html
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
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update information about the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchDetectDominantLanguage",
      "BatchDetectEntities",
      "BatchDetectKeyPhrases",
      "BatchDetectSentiment",
      "BatchDetectSyntax",
      "ClassifyDocument",
      "DescribeDocumentClassificationJob",
      "DescribeDocumentClassifier",
      "DescribeDominantLanguageDetectionJob",
      "DescribeEndpoint",
      "DescribeEntitiesDetectionJob",
      "DescribeEntityRecognizer",
      "DescribeEventsDetectionJob",
      "DescribeKeyPhrasesDetectionJob",
      "DescribePiiEntitiesDetectionJob",
      "DescribeSentimentDetectionJob",
      "DescribeTopicsDetectionJob",
      "DetectDominantLanguage",
      "DetectEntities",
      "DetectKeyPhrases",
      "DetectPiiEntities",
      "DetectSentiment",
      "DetectSyntax"
    ],
    "Write": [
      "CreateDocumentClassifier",
      "CreateEndpoint",
      "CreateEntityRecognizer",
      "DeleteDocumentClassifier",
      "DeleteEndpoint",
      "DeleteEntityRecognizer",
      "StartDocumentClassificationJob",
      "StartDominantLanguageDetectionJob",
      "StartEntitiesDetectionJob",
      "StartEventsDetectionJob",
      "StartKeyPhrasesDetectionJob",
      "StartPiiEntitiesDetectionJob",
      "StartSentimentDetectionJob",
      "StartTopicsDetectionJob",
      "StopDominantLanguageDetectionJob",
      "StopEntitiesDetectionJob",
      "StopEventsDetectionJob",
      "StopKeyPhrasesDetectionJob",
      "StopPiiEntitiesDetectionJob",
      "StopSentimentDetectionJob",
      "StopTrainingDocumentClassifier",
      "StopTrainingEntityRecognizer",
      "UpdateEndpoint"
    ],
    "List": [
      "ListDocumentClassificationJobs",
      "ListDocumentClassifiers",
      "ListDominantLanguageDetectionJobs",
      "ListEndpoints",
      "ListEntitiesDetectionJobs",
      "ListEntityRecognizers",
      "ListEventsDetectionJobs",
      "ListKeyPhrasesDetectionJobs",
      "ListPiiEntitiesDetectionJobs",
      "ListSentimentDetectionJobs",
      "ListTagsForResource",
      "ListTopicsDetectionJobs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type document-classifier to the statement
   *
   * @param documentClassifierName - Identifier for the documentClassifierName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifier(documentClassifierName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:document-classifier/${DocumentClassifierName}';
    arn = arn.replace('${DocumentClassifierName}', documentClassifierName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type document-classifier-endpoint to the statement
   *
   * @param documentClassifierEndpointName - Identifier for the documentClassifierEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifierEndpoint(documentClassifierEndpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:document-classifier-endpoint/${DocumentClassifierEndpointName}';
    arn = arn.replace('${DocumentClassifierEndpointName}', documentClassifierEndpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type entity-recognizer to the statement
   *
   * @param entityRecognizerName - Identifier for the entityRecognizerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizer(entityRecognizerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer/${EntityRecognizerName}';
    arn = arn.replace('${EntityRecognizerName}', entityRecognizerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type entity-recognizer-endpoint to the statement
   *
   * @param entityRecognizerEndpointName - Identifier for the entityRecognizerEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizerEndpoint(entityRecognizerEndpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer-endpoint/${EntityRecognizerEndpointName}';
    arn = arn.replace('${EntityRecognizerEndpointName}', entityRecognizerEndpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the output KMS key associated with the resource in the request.
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
   * - .toStartTopicsDetectionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifOutputKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the volume KMS key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifVolumeKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`VolumeKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the list of all VPC security group ids associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all VPC subnets associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys
   *
   * Applies to actions:
   * - .toCreateDocumentClassifier()
   * - .toCreateEntityRecognizer()
   * - .toStartDocumentClassificationJob()
   * - .toStartDominantLanguageDetectionJob()
   * - .toStartEntitiesDetectionJob()
   * - .toStartKeyPhrasesDetectionJob()
   * - .toStartSentimentDetectionJob()
   * - .toStartTopicsDetectionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSubnets(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSubnets`, value, operator || 'StringLike');
  }
}
