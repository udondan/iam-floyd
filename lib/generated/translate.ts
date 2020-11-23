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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * A synchronous action that deletes a custom terminology.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_DeleteTerminology.html
   */
  public toDeleteTerminology() {
    this.to('DeleteTerminology');
    return this;
  }

  /**
   * Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_DescribeTextTranslationJob.html
   */
  public toDescribeTextTranslationJob() {
    this.to('DescribeTextTranslationJob');
    return this;
  }

  /**
   * Retrieves a custom terminology.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_GetTerminology.html
   */
  public toGetTerminology() {
    this.to('GetTerminology');
    return this;
  }

  /**
   * Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ImportTerminology.html
   */
  public toImportTerminology() {
    this.to('ImportTerminology');
    return this;
  }

  /**
   * Provides a list of custom terminologies associated with your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ListTerminologies.html
   */
  public toListTerminologies() {
    this.to('ListTerminologies');
    return this;
  }

  /**
   * Gets a list of the batch translation jobs that you have submitted.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_ListTextTranslationJobs.html
   */
  public toListTextTranslationJobs() {
    this.to('ListTextTranslationJobs');
    return this;
  }

  /**
   * Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_StartTextTranslationJob.html
   */
  public toStartTextTranslationJob() {
    this.to('StartTextTranslationJob');
    return this;
  }

  /**
   * Stops an asynchronous batch translation job that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_StopTextTranslationJob.html
   */
  public toStopTextTranslationJob() {
    this.to('StopTextTranslationJob');
    return this;
  }

  /**
   * Translate text from a source language to a target language.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/dg/API_TranslateText.html
   */
  public toTranslateText() {
    this.to('TranslateText');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteTerminology",
      "ImportTerminology",
      "StartTextTranslationJob",
      "StopTextTranslationJob"
    ],
    "Read": [
      "DescribeTextTranslationJob",
      "GetTerminology",
      "ListTerminologies",
      "ListTextTranslationJobs",
      "TranslateText"
    ]
  };
}
