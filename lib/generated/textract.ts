import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [textract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Textract extends PolicyStatement {
  public servicePrefix = 'textract';

  /**
   * Statement provider for service [textract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html).
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
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html
   */
  public toAnalyzeDocument() {
    this.to('AnalyzeDocument');
    return this;
  }

  /**
   * Detects text in document images.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html
   */
  public toDetectDocumentText() {
    this.to('DetectDocumentText');
    return this;
  }

  /**
   * Returns information about a document analysis job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html
   */
  public toGetDocumentAnalysis() {
    this.to('GetDocumentAnalysis');
    return this;
  }

  /**
   * Returns information about a document text detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html
   */
  public toGetDocumentTextDetection() {
    this.to('GetDocumentTextDetection');
    return this;
  }

  /**
   * Starts an asynchronous job to detect instances of real-world document entities within an image or pdf provided as input.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html
   */
  public toStartDocumentAnalysis() {
    this.to('StartDocumentAnalysis');
    return this;
  }

  /**
   * Starts an asynchronous job to detect text in document images or pdfs.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html
   */
  public toStartDocumentTextDetection() {
    this.to('StartDocumentTextDetection');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "AnalyzeDocument",
      "DetectDocumentText",
      "GetDocumentAnalysis",
      "GetDocumentTextDetection"
    ],
    "Write": [
      "StartDocumentAnalysis",
      "StartDocumentTextDetection"
    ]
  };
}
