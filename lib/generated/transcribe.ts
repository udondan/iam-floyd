import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [transcribe](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranscribe.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transcribe extends PolicyStatement {
  public servicePrefix = 'transcribe';

  /**
   * Statement provider for service [transcribe](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranscribe.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateCallAnalyticsCategory.html
   */
  public toCreateCallAnalyticsCategory() {
    return this.to('CreateCallAnalyticsCategory');
  }

  /**
   * Grants permission to create a new custom language model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateLanguageModel.html
   */
  public toCreateLanguageModel() {
    return this.to('CreateLanguageModel');
  }

  /**
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe Medical handles transcription of an audio file
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateMedicalVocabulary.html
   */
  public toCreateMedicalVocabulary() {
    return this.to('CreateMedicalVocabulary');
  }

  /**
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabulary.html
   */
  public toCreateVocabulary() {
    return this.to('CreateVocabulary');
  }

  /**
   * Grants permission to create a new vocabulary filter that you can use to filter out words from the transcription of an audio file generated by Amazon Transcribe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabularyFilter.html
   */
  public toCreateVocabularyFilter() {
    return this.to('CreateVocabularyFilter');
  }

  /**
   * Grants permission to delete a call analytics category using its name from Amazon Transcribe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteCallAnalyticsCategory.html
   */
  public toDeleteCallAnalyticsCategory() {
    return this.to('DeleteCallAnalyticsCategory');
  }

  /**
   * Grants permission to delete a previously submitted call analytics job along with any other generated results such as the transcription, models, and so on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteCallAnalyticsJob.html
   */
  public toDeleteCallAnalyticsJob() {
    return this.to('DeleteCallAnalyticsJob');
  }

  /**
   * Grants permission to delete a previously created custom language model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteLanguageModel.html
   */
  public toDeleteLanguageModel() {
    return this.to('DeleteLanguageModel');
  }

  /**
   * Grants permission to delete a previously submitted Medical Scribe job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalScribeJob.html
   */
  public toDeleteMedicalScribeJob() {
    return this.to('DeleteMedicalScribeJob');
  }

  /**
   * Grants permission to delete a previously submitted medical transcription job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalTranscriptionJob.html
   */
  public toDeleteMedicalTranscriptionJob() {
    return this.to('DeleteMedicalTranscriptionJob');
  }

  /**
   * Grants permission to delete a medical vocabulary from Amazon Transcribe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalVocabulary.html
   */
  public toDeleteMedicalVocabulary() {
    return this.to('DeleteMedicalVocabulary');
  }

  /**
   * Grants permission to delete a previously submitted transcription job along with any other generated results such as the transcription, models, and so on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteTranscriptionJob.html
   */
  public toDeleteTranscriptionJob() {
    return this.to('DeleteTranscriptionJob');
  }

  /**
   * Grants permission to delete a vocabulary from Amazon Transcribe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabulary.html
   */
  public toDeleteVocabulary() {
    return this.to('DeleteVocabulary');
  }

  /**
   * Grants permission to delete a vocabulary filter from Amazon Transcribe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabularyFilter.html
   */
  public toDeleteVocabularyFilter() {
    return this.to('DeleteVocabularyFilter');
  }

  /**
   * Grants permission to return information about a custom language model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DescribeLanguageModel.html
   */
  public toDescribeLanguageModel() {
    return this.to('DescribeLanguageModel');
  }

  /**
   * Grants permission to retrieve information about a call analytics category
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetCallAnalyticsCategory.html
   */
  public toGetCallAnalyticsCategory() {
    return this.to('GetCallAnalyticsCategory');
  }

  /**
   * Grants permission to return information about a call analytics job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetCallAnalyticsJob.html
   */
  public toGetCallAnalyticsJob() {
    return this.to('GetCallAnalyticsJob');
  }

  /**
   * Grants permission to return information about a Medical Scribe job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalScribeJob.html
   */
  public toGetMedicalScribeJob() {
    return this.to('GetMedicalScribeJob');
  }

  /**
   * Grants permission to return information about a medical transcription job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalTranscriptionJob.html
   */
  public toGetMedicalTranscriptionJob() {
    return this.to('GetMedicalTranscriptionJob');
  }

  /**
   * Grants permission to get information about a medical vocabulary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalVocabulary.html
   */
  public toGetMedicalVocabulary() {
    return this.to('GetMedicalVocabulary');
  }

  /**
   * Grants permission to return information about a transcription job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetTranscriptionJob.html
   */
  public toGetTranscriptionJob() {
    return this.to('GetTranscriptionJob');
  }

  /**
   * Grants permission to to get information about a vocabulary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabulary.html
   */
  public toGetVocabulary() {
    return this.to('GetVocabulary');
  }

  /**
   * Grants permission to get information about a vocabulary filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabularyFilter.html
   */
  public toGetVocabularyFilter() {
    return this.to('GetVocabularyFilter');
  }

  /**
   * Grants permission to list call analytics categories that has been created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListCallAnalyticsCategories.html
   */
  public toListCallAnalyticsCategories() {
    return this.to('ListCallAnalyticsCategories');
  }

  /**
   * Grants permission to list call analytics jobs with the specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListCallAnalyticsJobs.html
   */
  public toListCallAnalyticsJobs() {
    return this.to('ListCallAnalyticsJobs');
  }

  /**
   * Grants permission to list custom language models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListLanguageModels.html
   */
  public toListLanguageModels() {
    return this.to('ListLanguageModels');
  }

  /**
   * Grants permission to list Medical Scribe jobs with the specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalScribeJobs.html
   */
  public toListMedicalScribeJobs() {
    return this.to('ListMedicalScribeJobs');
  }

  /**
   * Grants permission to list medical transcription jobs with the specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalTranscriptionJobs.html
   */
  public toListMedicalTranscriptionJobs() {
    return this.to('ListMedicalTranscriptionJobs');
  }

  /**
   * Grants permission to return a list of medical vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalVocabularies.html
   */
  public toListMedicalVocabularies() {
    return this.to('ListMedicalVocabularies');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list transcription jobs with the specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTranscriptionJobs.html
   */
  public toListTranscriptionJobs() {
    return this.to('ListTranscriptionJobs');
  }

  /**
   * Grants permission to return a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularies.html
   */
  public toListVocabularies() {
    return this.to('ListVocabularies');
  }

  /**
   * Grants permission to return a list of vocabulary filters that match the specified criteria. If no criteria are specified, returns the at most 5 vocabulary filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularyFilters.html
   */
  public toListVocabularyFilters() {
    return this.to('ListVocabularyFilters');
  }

  /**
   * Grants permission to start an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputEncryptionKMSKeyId()
   * - .ifOutputLocation()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartCallAnalyticsJob.html
   */
  public toStartCallAnalyticsJob() {
    return this.to('StartCallAnalyticsJob');
  }

  /**
   * Grants permission to start a protocol where audio is streamed to Transcribe Call Analytics and the transcription results are streamed to your application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartCallAnalyticsStreamTranscription.html
   */
  public toStartCallAnalyticsStreamTranscription() {
    return this.to('StartCallAnalyticsStreamTranscription');
  }

  /**
   * Grants permission to start a WebSocket where audio is streamed to Transcribe Call Analytics and the transcription results are streamed to your application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartCallAnalyticsStreamTranscriptionWebSocket.html
   */
  public toStartCallAnalyticsStreamTranscriptionWebSocket() {
    return this.to('StartCallAnalyticsStreamTranscriptionWebSocket');
  }

  /**
   * Grants permission to start an asynchronous job to transcribe patient-clinician conversations and generates clinical notes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputBucketName()
   * - .ifOutputEncryptionKMSKeyId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartMedicalScribeJob.html
   */
  public toStartMedicalScribeJob() {
    return this.to('StartMedicalScribeJob');
  }

  /**
   * Grants permission to start a protocol where audio is streamed to Transcribe Medical and the transcription results are streamed to your application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscription.html
   */
  public toStartMedicalStreamTranscription() {
    return this.to('StartMedicalStreamTranscription');
  }

  /**
   * Grants permission to start a WebSocket where audio is streamed to Transcribe Medical and the transcription results are streamed to your application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscriptionWebSocket.html
   */
  public toStartMedicalStreamTranscriptionWebSocket() {
    return this.to('StartMedicalStreamTranscriptionWebSocket');
  }

  /**
   * Grants permission to start an asynchronous job to transcribe medical speech to text
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputBucketName()
   * - .ifOutputEncryptionKMSKeyId()
   * - .ifOutputKey()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartMedicalTranscriptionJob.html
   */
  public toStartMedicalTranscriptionJob() {
    return this.to('StartMedicalTranscriptionJob');
  }

  /**
   * Grants permission to start a bidirectional HTTP2 stream to transcribe speech to text in real time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscription.html
   */
  public toStartStreamTranscription() {
    return this.to('StartStreamTranscription');
  }

  /**
   * Grants permission to start a websocket stream to transcribe speech to text in real time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscriptionWebSocket.html
   */
  public toStartStreamTranscriptionWebSocket() {
    return this.to('StartStreamTranscriptionWebSocket');
  }

  /**
   * Grants permission to start an asynchronous job to transcribe speech to text
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputBucketName()
   * - .ifOutputEncryptionKMSKeyId()
   * - .ifOutputKey()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html
   */
  public toStartTranscriptionJob() {
    return this.to('StartTranscriptionJob');
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
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_TagResource.html
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
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the call analytics category with new values. The UpdateCallAnalyticsCategory operation overwrites all of the existing information with the values that you provide in the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateCallAnalyticsCategory.html
   */
  public toUpdateCallAnalyticsCategory() {
    return this.to('UpdateCallAnalyticsCategory');
  }

  /**
   * Grants permission to update an existing medical vocabulary with new values. The UpdateMedicalVocabulary operation overwrites all of the existing information with the values that you provide in the request
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateMedicalVocabulary.html
   */
  public toUpdateMedicalVocabulary() {
    return this.to('UpdateMedicalVocabulary');
  }

  /**
   * Grants permission to update an existing vocabulary with new values. The UpdateVocabulary operation overwrites all of the existing information with the values that you provide in the request
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabulary.html
   */
  public toUpdateVocabulary() {
    return this.to('UpdateVocabulary');
  }

  /**
   * Grants permission to update an existing vocabulary filter with new values. The UpdateVocabularyFilter operation overwrites all of the existing information with the values that you provide in the request
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabularyFilter.html
   */
  public toUpdateVocabularyFilter() {
    return this.to('UpdateVocabularyFilter');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCallAnalyticsCategory',
      'CreateLanguageModel',
      'CreateMedicalVocabulary',
      'CreateVocabulary',
      'CreateVocabularyFilter',
      'DeleteCallAnalyticsCategory',
      'DeleteCallAnalyticsJob',
      'DeleteLanguageModel',
      'DeleteMedicalScribeJob',
      'DeleteMedicalTranscriptionJob',
      'DeleteMedicalVocabulary',
      'DeleteTranscriptionJob',
      'DeleteVocabulary',
      'DeleteVocabularyFilter',
      'StartCallAnalyticsJob',
      'StartCallAnalyticsStreamTranscription',
      'StartCallAnalyticsStreamTranscriptionWebSocket',
      'StartMedicalScribeJob',
      'StartMedicalStreamTranscription',
      'StartMedicalStreamTranscriptionWebSocket',
      'StartMedicalTranscriptionJob',
      'StartStreamTranscription',
      'StartStreamTranscriptionWebSocket',
      'StartTranscriptionJob',
      'UpdateCallAnalyticsCategory',
      'UpdateMedicalVocabulary',
      'UpdateVocabulary',
      'UpdateVocabularyFilter'
    ],
    Read: [
      'DescribeLanguageModel',
      'GetCallAnalyticsCategory',
      'GetCallAnalyticsJob',
      'GetMedicalScribeJob',
      'GetMedicalTranscriptionJob',
      'GetMedicalVocabulary',
      'GetTranscriptionJob',
      'GetVocabulary',
      'GetVocabularyFilter',
      'ListTagsForResource'
    ],
    List: [
      'ListCallAnalyticsCategories',
      'ListCallAnalyticsJobs',
      'ListLanguageModels',
      'ListMedicalScribeJobs',
      'ListMedicalTranscriptionJobs',
      'ListMedicalVocabularies',
      'ListTranscriptionJobs',
      'ListVocabularies',
      'ListVocabularyFilters'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type transcriptionjob to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_TranscriptionJob.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTranscriptionjob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:transcription-job/${ jobName }`);
  }

  /**
   * Adds a resource of type vocabulary to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabulary.html
   *
   * @param vocabularyName - Identifier for the vocabularyName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVocabulary(vocabularyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:vocabulary/${ vocabularyName }`);
  }

  /**
   * Adds a resource of type vocabularyfilter to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabularyFilter.html
   *
   * @param vocabularyFilterName - Identifier for the vocabularyFilterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVocabularyfilter(vocabularyFilterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:vocabulary-filter/${ vocabularyFilterName }`);
  }

  /**
   * Adds a resource of type languagemodel to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_LanguageModel.html
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLanguagemodel(modelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:language-model/${ modelName }`);
  }

  /**
   * Adds a resource of type medicaltranscriptionjob to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_MedicalTranscriptionJob.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMedicaltranscriptionjob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:medical-transcription-job/${ jobName }`);
  }

  /**
   * Adds a resource of type medicalvocabulary to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateMedicalVocabulary.html
   *
   * @param vocabularyName - Identifier for the vocabularyName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMedicalvocabulary(vocabularyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:medical-vocabulary/${ vocabularyName }`);
  }

  /**
   * Adds a resource of type callanalyticsjob to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CallAnalyticsJob.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCallanalyticsjob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:analytics-job/${ jobName }`);
  }

  /**
   * Adds a resource of type callanalyticscategory to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateCallAnalyticsCategory.html
   *
   * @param categoryName - Identifier for the categoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCallanalyticscategory(categoryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:analytics-category/${ categoryName }`);
  }

  /**
   * Adds a resource of type medicalscribejob to the statement
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_MedicalScribeJob.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMedicalscribejob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Transcribe.defaultPartition }:transcribe:${ region || '*' }:${ account || '*' }:medical-scribe-job/${ jobName }`);
  }

  /**
   * Filters access by requiring tag values present in a resource creation request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateLanguageModel()
   * - .toCreateMedicalVocabulary()
   * - .toCreateVocabulary()
   * - .toCreateVocabularyFilter()
   * - .toStartMedicalScribeJob()
   * - .toStartMedicalTranscriptionJob()
   * - .toStartTranscriptionJob()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring tag value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to resource types:
   * - transcriptionjob
   * - vocabulary
   * - vocabularyfilter
   * - languagemodel
   * - medicaltranscriptionjob
   * - medicalvocabulary
   * - medicalscribejob
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateLanguageModel()
   * - .toCreateMedicalVocabulary()
   * - .toCreateVocabulary()
   * - .toCreateVocabularyFilter()
   * - .toStartMedicalScribeJob()
   * - .toStartMedicalTranscriptionJob()
   * - .toStartTranscriptionJob()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the output bucket name included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartMedicalScribeJob()
   * - .toStartMedicalTranscriptionJob()
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputBucketName(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputBucketName`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the KMS key id included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartCallAnalyticsJob()
   * - .toStartMedicalScribeJob()
   * - .toStartMedicalTranscriptionJob()
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputEncryptionKMSKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputEncryptionKMSKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the output key included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartMedicalTranscriptionJob()
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputKey(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputKey`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the output location included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartCallAnalyticsJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputLocation`, value, operator || 'StringLike');
  }
}
