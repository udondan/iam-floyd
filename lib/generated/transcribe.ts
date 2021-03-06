import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new custom language model.
   *
   * Access Level: Write
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
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe Medical handles transcription of an audio file.
   *
   * Access Level: Write
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
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
   *
   * Access Level: Write
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
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabularyFilter.html
   */
  public toCreateVocabularyFilter() {
    return this.to('CreateVocabularyFilter');
  }

  /**
   * Grants permission to delete a previously created custom language model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteLanguageModel.html
   */
  public toDeleteLanguageModel() {
    return this.to('DeleteLanguageModel');
  }

  /**
   * Grants permission to delete a previously submitted medical transcription job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalTranscriptionJob.html
   */
  public toDeleteMedicalTranscriptionJob() {
    return this.to('DeleteMedicalTranscriptionJob');
  }

  /**
   * Grants permission to delete a medical vocabulary from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalVocabulary.html
   */
  public toDeleteMedicalVocabulary() {
    return this.to('DeleteMedicalVocabulary');
  }

  /**
   * Grants permission to delete a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteTranscriptionJob.html
   */
  public toDeleteTranscriptionJob() {
    return this.to('DeleteTranscriptionJob');
  }

  /**
   * Grants permission to delete a vocabulary from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabulary.html
   */
  public toDeleteVocabulary() {
    return this.to('DeleteVocabulary');
  }

  /**
   * Grants permission to delete a vocabulary filter from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabularyFilter.html
   */
  public toDeleteVocabularyFilter() {
    return this.to('DeleteVocabularyFilter');
  }

  /**
   * Grants permission to return information about a custom language model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DescribeLanguageModel.html
   */
  public toDescribeLanguageModel() {
    return this.to('DescribeLanguageModel');
  }

  /**
   * Grants permission to return information about a medical transcription job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalTranscriptionJob.html
   */
  public toGetMedicalTranscriptionJob() {
    return this.to('GetMedicalTranscriptionJob');
  }

  /**
   * Grants permission to get information about a medical vocabulary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalVocabulary.html
   */
  public toGetMedicalVocabulary() {
    return this.to('GetMedicalVocabulary');
  }

  /**
   * Grants permission to return information about a transcription job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetTranscriptionJob.html
   */
  public toGetTranscriptionJob() {
    return this.to('GetTranscriptionJob');
  }

  /**
   * Grants permission to to get information about a vocabulary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabulary.html
   */
  public toGetVocabulary() {
    return this.to('GetVocabulary');
  }

  /**
   * Grants permission to get information about a vocabulary filter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabularyFilter.html
   */
  public toGetVocabularyFilter() {
    return this.to('GetVocabularyFilter');
  }

  /**
   * Grants permission to list custom language models.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListLanguageModels.html
   */
  public toListLanguageModels() {
    return this.to('ListLanguageModels');
  }

  /**
   * Grants permission to list medical transcription jobs with the specified status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalTranscriptionJobs.html
   */
  public toListMedicalTranscriptionJobs() {
    return this.to('ListMedicalTranscriptionJobs');
  }

  /**
   * Grants permission to return a list of medical vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalVocabularies.html
   */
  public toListMedicalVocabularies() {
    return this.to('ListMedicalVocabularies');
  }

  /**
   * Grants permission to list transcription jobs with the specified status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTranscriptionJobs.html
   */
  public toListTranscriptionJobs() {
    return this.to('ListTranscriptionJobs');
  }

  /**
   * Grants permission to return a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularies.html
   */
  public toListVocabularies() {
    return this.to('ListVocabularies');
  }

  /**
   * Grants permission to return a list of vocabulary filters that match the specified criteria. If no criteria are specified, returns the at most 5 vocabulary filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularyFilters.html
   */
  public toListVocabularyFilters() {
    return this.to('ListVocabularyFilters');
  }

  /**
   * Grants permission to start a protocol where audio is streamed to Transcribe Medical and the transcription results are streamed to your application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscription.html
   */
  public toStartMedicalStreamTranscription() {
    return this.to('StartMedicalStreamTranscription');
  }

  /**
   * Grants permission to start a WebSocket where audio is streamed to Transcribe Medical and the transcription results are streamed to your application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscriptionWebSocket.html
   */
  public toStartMedicalStreamTranscriptionWebSocket() {
    return this.to('StartMedicalStreamTranscriptionWebSocket');
  }

  /**
   * Grants permission to start an asynchronous job to transcribe medical speech to text.
   *
   * Access Level: Write
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
   * Grants permission to start a bidirectional HTTP2 stream to transcribe speech to text in real time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscription.html
   */
  public toStartStreamTranscription() {
    return this.to('StartStreamTranscription');
  }

  /**
   * Grants permission to start a websocket stream to transcribe speech to text in real time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscriptionWebSocket.html
   */
  public toStartStreamTranscriptionWebSocket() {
    return this.to('StartStreamTranscriptionWebSocket');
  }

  /**
   * Grants permission to start an asynchronous job to transcribe speech to text.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputBucketName()
   * - .ifOutputEncryptionKMSKeyId()
   * - .ifOutputKey()
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
   * Grants permission to update an existing medical vocabulary with new values. The UpdateMedicalVocabulary operation overwrites all of the existing information with the values that you provide in the request.
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
   * Grants permission to update an existing vocabulary with new values. The UpdateVocabulary operation overwrites all of the existing information with the values that you provide in the request.
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
   * Grants permission to update an existing vocabulary filter with new values. The UpdateVocabularyFilter operation overwrites all of the existing information with the values that you provide in the request.
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
    "Write": [
      "CreateLanguageModel",
      "CreateMedicalVocabulary",
      "CreateVocabulary",
      "CreateVocabularyFilter",
      "DeleteLanguageModel",
      "DeleteMedicalTranscriptionJob",
      "DeleteMedicalVocabulary",
      "DeleteTranscriptionJob",
      "DeleteVocabulary",
      "DeleteVocabularyFilter",
      "StartMedicalStreamTranscription",
      "StartMedicalStreamTranscriptionWebSocket",
      "StartMedicalTranscriptionJob",
      "StartStreamTranscription",
      "StartStreamTranscriptionWebSocket",
      "StartTranscriptionJob",
      "UpdateMedicalVocabulary",
      "UpdateVocabulary",
      "UpdateVocabularyFilter"
    ],
    "Read": [
      "DescribeLanguageModel",
      "GetMedicalTranscriptionJob",
      "GetMedicalVocabulary",
      "GetTranscriptionJob",
      "GetVocabulary",
      "GetVocabularyFilter"
    ],
    "List": [
      "ListLanguageModels",
      "ListMedicalTranscriptionJobs",
      "ListMedicalVocabularies",
      "ListTranscriptionJobs",
      "ListVocabularies",
      "ListVocabularyFilters"
    ]
  };

  /**
   * Enables you to control access based on the output bucket name included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputBucketName(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputBucketName`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the KMS key id included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputEncryptionKMSKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputEncryptionKMSKeyId`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the output key included in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html#amazontranscribe-policy-keys
   *
   * Applies to actions:
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputKey(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputKey`, value, operator || 'StringLike');
  }
}
