import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [invoicing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinvoicingservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Invoicing extends PolicyStatement {
  public servicePrefix = 'invoicing';

  /**
   * Statement provider for service [invoicing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinvoicingservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get invoice profile details for an account in your organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_BatchGetInvoiceProfile.html
   */
  public toBatchGetInvoiceProfile() {
    return this.to('BatchGetInvoiceProfile');
  }

  /**
   * Grants permission to create an invoice unit for your organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_CreateInvoiceUnit.html
   */
  public toCreateInvoiceUnit() {
    return this.to('CreateInvoiceUnit');
  }

  /**
   * Grants permission to update an invoice unit for your organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_DeleteInvoiceUnit.html
   */
  public toDeleteInvoiceUnit() {
    return this.to('DeleteInvoiceUnit');
  }

  /**
   * Grants permission to get Invoice Email Delivery Preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetInvoiceEmailDeliveryPreferences() {
    return this.to('GetInvoiceEmailDeliveryPreferences');
  }

  /**
   * Grants permission to get Invoice PDF
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetInvoicePDF() {
    return this.to('GetInvoicePDF');
  }

  /**
   * Grants permission to get invoice units for your organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_GetInvoiceUnit.html
   */
  public toGetInvoiceUnit() {
    return this.to('GetInvoiceUnit');
  }

  /**
   * Grants permission to get Invoice summary information for your account or linked account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListInvoiceSummaries() {
    return this.to('ListInvoiceSummaries');
  }

  /**
   * Grants permission to list invoice units for your organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ListInvoiceUnits.html
   */
  public toListInvoiceUnits() {
    return this.to('ListInvoiceUnits');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put Invoice Email Delivery Preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toPutInvoiceEmailDeliveryPreferences() {
    return this.to('PutInvoiceEmailDeliveryPreferences');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an invoice unit for your organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_UpdateInvoiceUnit.html
   */
  public toUpdateInvoiceUnit() {
    return this.to('UpdateInvoiceUnit');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetInvoiceProfile',
      'GetInvoiceEmailDeliveryPreferences',
      'GetInvoicePDF',
      'GetInvoiceUnit',
      'ListInvoiceSummaries',
      'ListTagsForResource'
    ],
    Write: [
      'CreateInvoiceUnit',
      'DeleteInvoiceUnit',
      'PutInvoiceEmailDeliveryPreferences',
      'UpdateInvoiceUnit'
    ],
    List: [
      'ListInvoiceUnits'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type invoice-unit to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_InvoiceUnit.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInvoiceUnit(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:invoicing::${ account ?? this.defaultAccount }:invoice-unit/${ identifier }`);
  }

  /**
   * Filters access by allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateInvoiceUnit()
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
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteInvoiceUnit()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateInvoiceUnit()
   *
   * Applies to resource types:
   * - invoice-unit
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateInvoiceUnit()
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
