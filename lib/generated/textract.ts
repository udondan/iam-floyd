import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
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
   * Grants permission to create an Amazon Textract adapter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_CreateAdapter.html
   */
  public toCreateAdapter() {
    return this.to('CreateAdapter');
  }

  /**
   * Grants permission to create an Amazon Textract adapter version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_CreateAdapterVersion.html
   */
  public toCreateAdapterVersion() {
    return this.to('CreateAdapterVersion');
  }

  /**
   * Grants permission to delete an Amazon Textract adapter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_DeleteAdapter.html
   */
  public toDeleteAdapter() {
    return this.to('DeleteAdapter');
  }

  /**
   * Grants permission to delete an Amazon Textract adapter version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_DeleteAdapterVersion.html
   */
  public toDeleteAdapterVersion() {
    return this.to('DeleteAdapterVersion');
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
   * Grants permission to get an Amazon Textract adapter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetAdapter.html
   */
  public toGetAdapter() {
    return this.to('GetAdapter');
  }

  /**
   * Grants permission to get an Amazon Textract adapter version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_GetAdapterVersion.html
   */
  public toGetAdapterVersion() {
    return this.to('GetAdapterVersion');
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
   * Grants permission to list Amazon Textract adapter versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_ListAdapterVersions.html
   */
  public toListAdapterVersions() {
    return this.to('ListAdapterVersions');
  }

  /**
   * Grants permission to list Amazon Textract adapters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_ListAdapters.html
   */
  public toListAdapters() {
    return this.to('ListAdapters');
  }

  /**
   * Grants permission to return a list of tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update Amazon Textract adapter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_UpdateAdapter.html
   */
  public toUpdateAdapter() {
    return this.to('UpdateAdapter');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AnalyzeDocument',
      'AnalyzeExpense',
      'AnalyzeID',
      'DetectDocumentText',
      'GetAdapter',
      'GetAdapterVersion',
      'GetDocumentAnalysis',
      'GetDocumentTextDetection',
      'GetExpenseAnalysis',
      'GetLendingAnalysis',
      'GetLendingAnalysisSummary',
      'ListAdapterVersions',
      'ListAdapters',
      'ListTagsForResource'
    ],
    Write: [
      'CreateAdapter',
      'CreateAdapterVersion',
      'DeleteAdapter',
      'DeleteAdapterVersion',
      'StartDocumentAnalysis',
      'StartDocumentTextDetection',
      'StartExpenseAnalysis',
      'StartLendingAnalysis',
      'UpdateAdapter'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type adapter to the statement
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AdapterOverview.html
   *
   * @param adapterId - Identifier for the adapterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAdapter(adapterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:textract:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/adapters/${ adapterId }`);
  }

  /**
   * Adds a resource of type adapterversion to the statement
   *
   * https://docs.aws.amazon.com/textract/latest/dg/API_AdapterVersionOverview.html
   *
   * @param adapterId - Identifier for the adapterId.
   * @param adapterVersion - Identifier for the adapterVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAdapterversion(adapterId: string, adapterVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:textract:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/adapters/${ adapterId }/versions/${ adapterVersion }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAdapter()
   * - .toCreateAdapterVersion()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - adapter
   * - adapterversion
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAdapter()
   * - .toCreateAdapterVersion()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
