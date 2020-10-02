import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [comprehend](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehend extends PolicyStatement {
  public servicePrefix = 'comprehend';

  /**
   * Statement provider for service [comprehend](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html).
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
    this.to('comprehend:BatchDetectDominantLanguage');
    return this;
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectEntities.html
   */
  public toBatchDetectEntities() {
    this.to('comprehend:BatchDetectEntities');
    return this;
  }

  /**
   * Grants permission to detect the phrases in the list of text documents that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectKeyPhrases.html
   */
  public toBatchDetectKeyPhrases() {
    this.to('comprehend:BatchDetectKeyPhrases');
    return this;
  }

  /**
   * Grants permission to detect the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSentiment.html
   */
  public toBatchDetectSentiment() {
    this.to('comprehend:BatchDetectSentiment');
    return this;
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a list of text documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSyntax.html
   */
  public toBatchDetectSyntax() {
    this.to('comprehend:BatchDetectSyntax');
    return this;
  }

  /**
   * Grants permission to create a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ClassifyDocument.html
   */
  public toClassifyDocument() {
    this.to('comprehend:ClassifyDocument');
    return this;
  }

  /**
   * Grants permission to create a new document classifier that you can use to categorize documents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateDocumentClassifier.html
   */
  public toCreateDocumentClassifier() {
    this.to('comprehend:CreateDocumentClassifier');
    return this;
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
    this.to('comprehend:CreateEndpoint');
    return this;
  }

  /**
   * Grants permission to create an entity recognizer using submitted files
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEntityRecognizer.html
   */
  public toCreateEntityRecognizer() {
    this.to('comprehend:CreateEntityRecognizer');
    return this;
  }

  /**
   * Grants permission to delete a previously created document classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteDocumentClassifier.html
   */
  public toDeleteDocumentClassifier() {
    this.to('comprehend:DeleteDocumentClassifier');
    return this;
  }

  /**
   * Grants permission to delete a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.to('comprehend:DeleteEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a submitted entity recognizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEntityRecognizer.html
   */
  public toDeleteEntityRecognizer() {
    this.to('comprehend:DeleteEntityRecognizer');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a document classification job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassificationJob.html
   */
  public toDescribeDocumentClassificationJob() {
    this.to('comprehend:DescribeDocumentClassificationJob');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a document classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassifier.html
   */
  public toDescribeDocumentClassifier() {
    this.to('comprehend:DescribeDocumentClassifier');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a dominant language detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDominantLanguageDetectionJob.html
   */
  public toDescribeDominantLanguageDetectionJob() {
    this.to('comprehend:DescribeDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a specific endpoint. Use this operation to get the status of an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    this.to('comprehend:DescribeEndpoint');
    return this;
  }

  /**
   * Grants permission to get the properties associated with an entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntitiesDetectionJob.html
   */
  public toDescribeEntitiesDetectionJob() {
    this.to('comprehend:DescribeEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to provide details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntityRecognizer.html
   */
  public toDescribeEntityRecognizer() {
    this.to('comprehend:DescribeEntityRecognizer');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a key phrases detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeKeyPhrasesDetectionJob.html
   */
  public toDescribeKeyPhrasesDetectionJob() {
    this.to('comprehend:DescribeKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a PII entities detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribePiiEntitiesDetectionJob.html
   */
  public toDescribePiiEntitiesDetectionJob() {
    this.to('comprehend:DescribePiiEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a sentiment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeSentimentDetectionJob.html
   */
  public toDescribeSentimentDetectionJob() {
    this.to('comprehend:DescribeSentimentDetectionJob');
    return this;
  }

  /**
   * Grants permission to get the properties associated with a topic detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTopicsDetectionJob.html
   */
  public toDescribeTopicsDetectionJob() {
    this.to('comprehend:DescribeTopicsDetectionJob');
    return this;
  }

  /**
   * Grants permission to detect the language or languages present in the text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html
   */
  public toDetectDominantLanguage() {
    this.to('comprehend:DetectDominantLanguage');
    return this;
  }

  /**
   * Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectEntities.html
   */
  public toDetectEntities() {
    this.to('comprehend:DetectEntities');
    return this;
  }

  /**
   * Grants permission to detect the phrases in the text that are most indicative of the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectKeyPhrases.html
   */
  public toDetectKeyPhrases() {
    this.to('comprehend:DetectKeyPhrases');
    return this;
  }

  /**
   * Grants permission to detect the personally identifiable information entities ("Name", "SSN", "PIN", etc) within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html
   */
  public toDetectPiiEntities() {
    this.to('comprehend:DetectPiiEntities');
    return this;
  }

  /**
   * Grants permission to detect the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html
   */
  public toDetectSentiment() {
    this.to('comprehend:DetectSentiment');
    return this;
  }

  /**
   * Grants permission to detect syntactic information (like Part of Speech, Tokens) in a text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html
   */
  public toDetectSyntax() {
    this.to('comprehend:DetectSyntax');
    return this;
  }

  /**
   * Grants permission to get a list of the document classification jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassificationJobs.html
   */
  public toListDocumentClassificationJobs() {
    this.to('comprehend:ListDocumentClassificationJobs');
    return this;
  }

  /**
   * Grants permission to get a list of the document classifiers that you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifiers.html
   */
  public toListDocumentClassifiers() {
    this.to('comprehend:ListDocumentClassifiers');
    return this;
  }

  /**
   * Grants permission to get a list of the dominant language detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDominantLanguageDetectionJobs.html
   */
  public toListDominantLanguageDetectionJobs() {
    this.to('comprehend:ListDominantLanguageDetectionJobs');
    return this;
  }

  /**
   * Grants permission to get a list of all existing endpoints that you've created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEndpoints.html
   */
  public toListEndpoints() {
    this.to('comprehend:ListEndpoints');
    return this;
  }

  /**
   * Grants permission to get a list of the entity detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntitiesDetectionJobs.html
   */
  public toListEntitiesDetectionJobs() {
    this.to('comprehend:ListEntitiesDetectionJobs');
    return this;
  }

  /**
   * Grants permission to get a list of the properties of all entity recognizers that you created, including recognizers currently in training
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizers.html
   */
  public toListEntityRecognizers() {
    this.to('comprehend:ListEntityRecognizers');
    return this;
  }

  /**
   * Grants permission to get a list of key phrase detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListKeyPhrasesDetectionJobs.html
   */
  public toListKeyPhrasesDetectionJobs() {
    this.to('comprehend:ListKeyPhrasesDetectionJobs');
    return this;
  }

  /**
   * Grants permission to get a list of PII entities detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListPiiEntitiesDetectionJobs.html
   */
  public toListPiiEntitiesDetectionJobs() {
    this.to('comprehend:ListPiiEntitiesDetectionJobs');
    return this;
  }

  /**
   * Grants permission to get a list of sentiment detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListSentimentDetectionJobs.html
   */
  public toListSentimentDetectionJobs() {
    this.to('comprehend:ListSentimentDetectionJobs');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('comprehend:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to get a list of the topic detection jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTopicsDetectionJobs.html
   */
  public toListTopicsDetectionJobs() {
    this.to('comprehend:ListTopicsDetectionJobs');
    return this;
  }

  /**
   * Grants permission to start an asynchronous document classification job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDocumentClassificationJob.html
   */
  public toStartDocumentClassificationJob() {
    this.to('comprehend:StartDocumentClassificationJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous dominant language detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDominantLanguageDetectionJob.html
   */
  public toStartDominantLanguageDetectionJob() {
    this.to('comprehend:StartDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous entity detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEntitiesDetectionJob.html
   */
  public toStartEntitiesDetectionJob() {
    this.to('comprehend:StartEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous key phrase detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartKeyPhrasesDetectionJob.html
   */
  public toStartKeyPhrasesDetectionJob() {
    this.to('comprehend:StartKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous PII entities detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartPiiEntitiesDetectionJob.html
   */
  public toStartPiiEntitiesDetectionJob() {
    this.to('comprehend:StartPiiEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous sentiment detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartSentimentDetectionJob.html
   */
  public toStartSentimentDetectionJob() {
    this.to('comprehend:StartSentimentDetectionJob');
    return this;
  }

  /**
   * Grants permission to start an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTopicsDetectionJob.html
   */
  public toStartTopicsDetectionJob() {
    this.to('comprehend:StartTopicsDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop a dominant language detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopDominantLanguageDetectionJob.html
   */
  public toStopDominantLanguageDetectionJob() {
    this.to('comprehend:StopDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop an entity detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEntitiesDetectionJob.html
   */
  public toStopEntitiesDetectionJob() {
    this.to('comprehend:StopEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop a key phrase detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopKeyPhrasesDetectionJob.html
   */
  public toStopKeyPhrasesDetectionJob() {
    this.to('comprehend:StopKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop a PII entities detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopPiiEntitiesDetectionJob.html
   */
  public toStopPiiEntitiesDetectionJob() {
    this.to('comprehend:StopPiiEntitiesDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop a sentiment detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopSentimentDetectionJob.html
   */
  public toStopSentimentDetectionJob() {
    this.to('comprehend:StopSentimentDetectionJob');
    return this;
  }

  /**
   * Grants permission to stop a previously created document classifier training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingDocumentClassifier.html
   */
  public toStopTrainingDocumentClassifier() {
    this.to('comprehend:StopTrainingDocumentClassifier');
    return this;
  }

  /**
   * Grants permission to stop a previously created entity recognizer training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingEntityRecognizer.html
   */
  public toStopTrainingEntityRecognizer() {
    this.to('comprehend:StopTrainingEntityRecognizer');
    return this;
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
    this.to('comprehend:TagResource');
    return this;
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
    this.to('comprehend:UntagResource');
    return this;
  }

  /**
   * Grants permission to update information about the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    this.to('comprehend:UpdateEndpoint');
    return this;
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
      "StartKeyPhrasesDetectionJob",
      "StartPiiEntitiesDetectionJob",
      "StartSentimentDetectionJob",
      "StartTopicsDetectionJob",
      "StopDominantLanguageDetectionJob",
      "StopEntitiesDetectionJob",
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
}
