import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [textract](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontextract.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Textract extends PolicyStatement {
  public servicePrefix = 'textract';
  protected actionList: Actions = {
    "AnalyzeDocument": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html",
      "description": "Detects instances of real-world document entities within an image provided as input.",
      "accessLevel": "Read",
      "dependentActions": [
        "s3:GetObject"
      ]
    },
    "DetectDocumentText": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html",
      "description": "Detects text in document images.",
      "accessLevel": "Read",
      "dependentActions": [
        "s3:GetObject"
      ]
    },
    "GetDocumentAnalysis": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html",
      "description": "Returns information about a document analysis job.",
      "accessLevel": "Read"
    },
    "GetDocumentTextDetection": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html",
      "description": "Returns information about a document text detection job.",
      "accessLevel": "Read"
    },
    "StartDocumentAnalysis": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html",
      "description": "Starts an asynchronous job to detect instances of real-world document entities within an image or pdf provided as input.",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:GetObject"
      ]
    },
    "StartDocumentTextDetection": {
      "url": "https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html",
      "description": "Starts an asynchronous job to detect text in document images or pdfs.",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:GetObject"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [textract](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontextract.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Detects instances of real-world document entities within an image provided as input.
   *
   * Access Level: Read
   *
   * Dependent Actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html
   */
  public analyzeDocument() {
    this.add('textract:AnalyzeDocument');
    return this;
  }

  /**
   * Detects text in document images.
   *
   * Access Level: Read
   *
   * Dependent Actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html
   */
  public detectDocumentText() {
    this.add('textract:DetectDocumentText');
    return this;
  }

  /**
   * Returns information about a document analysis job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html
   */
  public getDocumentAnalysis() {
    this.add('textract:GetDocumentAnalysis');
    return this;
  }

  /**
   * Returns information about a document text detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html
   */
  public getDocumentTextDetection() {
    this.add('textract:GetDocumentTextDetection');
    return this;
  }

  /**
   * Starts an asynchronous job to detect instances of real-world document entities within an image or pdf provided as input.
   *
   * Access Level: Write
   *
   * Dependent Actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html
   */
  public startDocumentAnalysis() {
    this.add('textract:StartDocumentAnalysis');
    return this;
  }

  /**
   * Starts an asynchronous job to detect text in document images or pdfs.
   *
   * Access Level: Write
   *
   * Dependent Actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html
   */
  public startDocumentTextDetection() {
    this.add('textract:StartDocumentTextDetection');
    return this;
  }
}
