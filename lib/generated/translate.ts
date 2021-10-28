import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [translate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Translate extends PolicyStatement {
  public servicePrefix = 'translate';

  /**
   * Statement provider for service [translate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Parallel Data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_CreateParallelData.html
   */
  public toCreateParallelData() {
    return this.to('CreateParallelData');
  }

  /**
   * Grants permission to delete a Parallel Data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_DeleteParallelData.html
   */
  public toDeleteParallelData() {
    return this.to('DeleteParallelData');
  }

  /**
   * Grants permission to delete a terminology
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_DeleteTerminology.html
   */
  public toDeleteTerminology() {
    return this.to('DeleteTerminology');
  }

  /**
   * Grants permission to get the properties associated with an asynchronous batch translation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_DescribeTextTranslationJob.html
   */
  public toDescribeTextTranslationJob() {
    return this.to('DescribeTextTranslationJob');
  }

  /**
   * Grants permission to get a Parallel Data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_GetParallelData.html
   */
  public toGetParallelData() {
    return this.to('GetParallelData');
  }

  /**
   * Grants permission to retrieve a terminology
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_GetTerminology.html
   */
  public toGetTerminology() {
    return this.to('GetTerminology');
  }

  /**
   * Grants permission to create or update a terminology, depending on whether or not one already exists for the given terminology name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ImportTerminology.html
   */
  public toImportTerminology() {
    return this.to('ImportTerminology');
  }

  /**
   * Grants permission to list Parallel Data associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ListParallelData.html
   */
  public toListParallelData() {
    return this.to('ListParallelData');
  }

  /**
   * Grants permission to list terminologies associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ListTerminologies.html
   */
  public toListTerminologies() {
    return this.to('ListTerminologies');
  }

  /**
   * Grants permission to list batch translation jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ListTextTranslationJobs.html
   */
  public toListTextTranslationJobs() {
    return this.to('ListTextTranslationJobs');
  }

  /**
   * Grants permission to start an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_StartTextTranslationJob.html
   */
  public toStartTextTranslationJob() {
    return this.to('StartTextTranslationJob');
  }

  /**
   * Grants permission to stop an asynchronous batch translation job that is in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_StopTextTranslationJob.html
   */
  public toStopTextTranslationJob() {
    return this.to('StopTextTranslationJob');
  }

  /**
   * Grants permission to translate text from a source language to a target language
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_TranslateText.html
   */
  public toTranslateText() {
    return this.to('TranslateText');
  }

  /**
   * Grants permission to update an existing Parallel Data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_UpdateParallelData.html
   */
  public toUpdateParallelData() {
    return this.to('UpdateParallelData');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateParallelData',
      'DeleteParallelData',
      'DeleteTerminology',
      'ImportTerminology',
      'StartTextTranslationJob',
      'StopTextTranslationJob',
      'UpdateParallelData'
    ],
    Read: [
      'DescribeTextTranslationJob',
      'GetParallelData',
      'GetTerminology',
      'TranslateText'
    ],
    List: [
      'ListParallelData',
      'ListTerminologies',
      'ListTextTranslationJobs'
    ]
  };
}
