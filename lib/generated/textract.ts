import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [textract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html).
 *
 * @param options - Options for the statement
 */
export class Textract extends PolicyStatement {
  public servicePrefix = 'textract';

  /**
   * Statement provider for service [textract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to detect instances of real-world document entities within an image provided as input
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html
   */
  public toAnalyzeDocument() {
    return this.to('AnalyzeDocument');
  }

  /**
   * Grants permission to detect instances of real-world document entities within an image provided as input
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeExpense.html
   */
  public toAnalyzeExpense() {
    return this.to('AnalyzeExpense');
  }

  /**
   * Grants permission to detect relevant information from identity documents provided as input
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeID.html
   */
  public toAnalyzeID() {
    return this.to('AnalyzeID');
  }

  /**
   * Grants permission to detect text in document images
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html
   */
  public toDetectDocumentText() {
    return this.to('DetectDocumentText');
  }

  /**
   * Grants permission to return information about a document analysis job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html
   */
  public toGetDocumentAnalysis() {
    return this.to('GetDocumentAnalysis');
  }

  /**
   * Grants permission to return information about a document text detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html
   */
  public toGetDocumentTextDetection() {
    return this.to('GetDocumentTextDetection');
  }

  /**
   * Grants permission to return information about an expense analysis job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetExpenseAnalysis.html
   */
  public toGetExpenseAnalysis() {
    return this.to('GetExpenseAnalysis');
  }

  /**
   * Grants permission to retrieve page-level information regarding a lending analysis job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetLendingAnalysis.html
   */
  public toGetLendingAnalysis() {
    return this.to('GetLendingAnalysis');
  }

  /**
   * Grants permission to retrieve summarized information regarding a lending analysis job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetLendingAnalysisSummary.html
   */
  public toGetLendingAnalysisSummary() {
    return this.to('GetLendingAnalysisSummary');
  }

  /**
   * Grants permission to start an asynchronous job to detect instances of real-world document entities within an image or pdf provided as input
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html
   */
  public toStartDocumentAnalysis() {
    return this.to('StartDocumentAnalysis');
  }

  /**
   * Grants permission to start an asynchronous job to detect text in document images or pdfs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html
   */
  public toStartDocumentTextDetection() {
    return this.to('StartDocumentTextDetection');
  }

  /**
   * Grants permission to start an asynchronous job to detect instances of invoices or receipts within an image or pdf provided as input
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartExpenseAnalysis.html
   */
  public toStartExpenseAnalysis() {
    return this.to('StartExpenseAnalysis');
  }

  /**
   * Grants permission to start an asynchronous job for detection of entities in a lending document, takes a provided image or PDF as input
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_StartLendingAnalysis.html
   */
  public toStartLendingAnalysis() {
    return this.to('StartLendingAnalysis');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AnalyzeDocument',
      'AnalyzeExpense',
      'AnalyzeID',
      'DetectDocumentText',
      'GetDocumentAnalysis',
      'GetDocumentTextDetection',
      'GetExpenseAnalysis',
      'GetLendingAnalysis',
      'GetLendingAnalysisSummary'
    ],
    Write: [
      'StartDocumentAnalysis',
      'StartDocumentTextDetection',
      'StartExpenseAnalysis',
      'StartLendingAnalysis'
    ]
  };
}
