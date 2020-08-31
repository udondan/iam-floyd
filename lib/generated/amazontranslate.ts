import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [translate](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Translate extends PolicyStatement {
  public servicePrefix = 'translate';
  protected actionList: Actions = {
    "DeleteTerminology": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_DeleteTerminology.html",
      "description": "A synchronous action that deletes a custom terminology.",
      "accessLevel": "Write"
    },
    "DescribeTextTranslationJob": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_DescribeTextTranslationJob.html",
      "description": "Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.",
      "accessLevel": "Read"
    },
    "GetTerminology": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_GetTerminology.html",
      "description": "Retrieves a custom terminology.",
      "accessLevel": "Read"
    },
    "ImportTerminology": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_ImportTerminology.html",
      "description": "Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name.",
      "accessLevel": "Write"
    },
    "ListTerminologies": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_ListTerminologies.html",
      "description": "Provides a list of custom terminologies associated with your account.",
      "accessLevel": "Read"
    },
    "ListTextTranslationJobs": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_ListTextTranslationJobs.html",
      "description": "Gets a list of the batch translation jobs that you have submitted.",
      "accessLevel": "Read"
    },
    "StartTextTranslationJob": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_StartTextTranslationJob.html",
      "description": "Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once.",
      "accessLevel": "Write"
    },
    "StopTextTranslationJob": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_StopTextTranslationJob.html",
      "description": "Stops an asynchronous batch translation job that is in progress.",
      "accessLevel": "Write"
    },
    "TranslateText": {
      "url": "https://docs.aws.amazon.com/translate/latest/dg/API_TranslateText.html",
      "description": "Translate text from a source language to a target language.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [translate](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html).
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
    this.add('translate:DeleteTerminology');
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
    this.add('translate:DescribeTextTranslationJob');
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
    this.add('translate:GetTerminology');
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
    this.add('translate:ImportTerminology');
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
    this.add('translate:ListTerminologies');
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
    this.add('translate:ListTextTranslationJobs');
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
    this.add('translate:StartTextTranslationJob');
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
    this.add('translate:StopTextTranslationJob');
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
    this.add('translate:TranslateText');
    return this;
  }
}
