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
   * Grants permission to create a procurement portal preference
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_CreateProcurementPortalPreference.html
   */
  public toCreateProcurementPortalPreference() {
    return this.to('CreateProcurementPortalPreference');
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
   * Grants permission to delete a procurement portal preference
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_DeleteProcurementPortalPreference.html
   */
  public toDeleteProcurementPortalPreference() {
    return this.to('DeleteProcurementPortalPreference');
  }

  /**
   * Grants permission to get Invoice Correction
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_GetInvoiceCorrection.html
   */
  public toGetInvoiceCorrection() {
    return this.to('GetInvoiceCorrection');
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
   * Grants permission to get downloadable Invoice document pre-signed URL with supplemental documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_GetInvoicePDF.html
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
   * Grants permission to get a procurement portal preference
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_GetProcurementPortalPreference.html
   */
  public toGetProcurementPortalPreference() {
    return this.to('GetProcurementPortalPreference');
  }

  /**
   * Grants permission to list Invoice Corrections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ListInvoiceCorrections.html
   */
  public toListInvoiceCorrections() {
    return this.to('ListInvoiceCorrections');
  }

  /**
   * Grants permission to get Invoice summary information for your account or linked account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ListInvoiceSummaries.html
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
   * Grants permission to list procurement portal preferences for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ListProcurementPortalPreferences.html
   */
  public toListProcurementPortalPreferences() {
    return this.to('ListProcurementPortalPreferences');
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
   * Grants permission to update a procurement portal preference
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_PutProcurementPortalPreference.html
   */
  public toPutProcurementPortalPreference() {
    return this.to('PutProcurementPortalPreference');
  }

  /**
   * Grants permission to start Invoice Correction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_StartInvoiceCorrection.html
   */
  public toStartInvoiceCorrection() {
    return this.to('StartInvoiceCorrection');
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

  /**
   * Grants permission to update the status for a procurement portal preference
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_UpdateProcurementPortalPreferenceStatus.html
   */
  public toUpdateProcurementPortalPreferenceStatus() {
    return this.to('UpdateProcurementPortalPreferenceStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetInvoiceProfile',
      'GetInvoiceCorrection',
      'GetInvoiceEmailDeliveryPreferences',
      'GetInvoicePDF',
      'GetInvoiceUnit',
      'GetProcurementPortalPreference',
      'ListInvoiceSummaries',
      'ListTagsForResource'
    ],
    Write: [
      'CreateInvoiceUnit',
      'CreateProcurementPortalPreference',
      'DeleteInvoiceUnit',
      'DeleteProcurementPortalPreference',
      'PutInvoiceEmailDeliveryPreferences',
      'PutProcurementPortalPreference',
      'StartInvoiceCorrection',
      'UpdateInvoiceUnit',
      'UpdateProcurementPortalPreferenceStatus'
    ],
    List: [
      'ListInvoiceCorrections',
      'ListInvoiceUnits',
      'ListProcurementPortalPreferences'
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
   * Adds a resource of type procurement-portal-preference to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_invoicing_ProcurementPortalPreference.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProcurementPortalPreference(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:invoicing::${ account ?? this.defaultAccount }:procurement-portal-preference/${ identifier }`);
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
   * - .toCreateProcurementPortalPreference()
   * - .toDeleteInvoiceUnit()
   * - .toDeleteProcurementPortalPreference()
   * - .toListTagsForResource()
   * - .toPutProcurementPortalPreference()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateInvoiceUnit()
   * - .toUpdateProcurementPortalPreferenceStatus()
   *
   * Applies to resource types:
   * - invoice-unit
   * - procurement-portal-preference
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
