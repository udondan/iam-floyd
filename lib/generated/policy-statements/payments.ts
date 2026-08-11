import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [payments](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Payments extends PolicyStatement {
  public servicePrefix = 'payments';

  /**
   * Statement provider for service [payments](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept financing application terms provided by a lender
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toAcceptFinancingApplicationTerms() {
    return this.to('AcceptFinancingApplicationTerms');
  }

  /**
   * Grants permission to create a financing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toCreateFinancingApplication() {
    return this.to('CreateFinancingApplication');
  }

  /**
   * Grants permission to create a payment instrument
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toCreatePaymentInstrument() {
    return this.to('CreatePaymentInstrument');
  }

  /**
   * Grants permission to delete a payment instrument
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDeletePaymentInstrument() {
    return this.to('DeletePaymentInstrument');
  }

  /**
   * Grants permission to get information about a financing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetFinancingApplication() {
    return this.to('GetFinancingApplication');
  }

  /**
   * Grants permission to get information about a financing line
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetFinancingLine() {
    return this.to('GetFinancingLine');
  }

  /**
   * Grants permission to get information about a financing line withdrawal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetFinancingLineWithdrawal() {
    return this.to('GetFinancingLineWithdrawal');
  }

  /**
   * Grants permission to get information about a financing option
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toGetFinancingOption() {
    return this.to('GetFinancingOption');
  }

  /**
   * Grants permission to get information about a payment instrument
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetPaymentInstrument() {
    return this.to('GetPaymentInstrument');
  }

  /**
   * Grants permission to get payment status of invoices
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetPaymentStatus() {
    return this.to('GetPaymentStatus');
  }

  /**
   * Grants permission to list financing application metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListFinancingApplications() {
    return this.to('ListFinancingApplications');
  }

  /**
   * Grants permission to list financing line withdrawals metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListFinancingLineWithdrawals() {
    return this.to('ListFinancingLineWithdrawals');
  }

  /**
   * Grants permission to list financing line metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListFinancingLines() {
    return this.to('ListFinancingLines');
  }

  /**
   * Grants permission to list payment instrument metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListPaymentInstruments() {
    return this.to('ListPaymentInstruments');
  }

  /**
   * Grants permission to get payment preferences (preferred payment currency, preferred payment method, etc.)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListPaymentPreferences() {
    return this.to('ListPaymentPreferences');
  }

  /**
   * Grants permission to list information about payment options
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListPaymentProgramOptions() {
    return this.to('ListPaymentProgramOptions');
  }

  /**
   * Grants permission to list information about payment program eligibility and enrolment status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toListPaymentProgramStatus() {
    return this.to('ListPaymentProgramStatus');
  }

  /**
   * Grants permission to list tags on a payment resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to make a payment, authenticate a payment, verify a payment method, and generate a funding request document for Advance Pay
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toMakePayment() {
    return this.to('MakePayment');
  }

  /**
   * Grants permission to tag a payment resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a payment resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a financing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security_iam_id-based-policy-examples.html#billing-permissions-ref
   */
  public toUpdateFinancingApplication() {
    return this.to('UpdateFinancingApplication');
  }

  /**
   * Grants permission to update a payment instrument
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdatePaymentInstrument() {
    return this.to('UpdatePaymentInstrument');
  }

  /**
   * Grants permission to update payment preferences (preferred payment currency, preferred payment method, etc.)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdatePaymentPreferences() {
    return this.to('UpdatePaymentPreferences');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptFinancingApplicationTerms',
      'CreateFinancingApplication',
      'CreatePaymentInstrument',
      'DeletePaymentInstrument',
      'MakePayment',
      'UpdateFinancingApplication',
      'UpdatePaymentInstrument',
      'UpdatePaymentPreferences'
    ],
    Read: [
      'GetFinancingApplication',
      'GetFinancingLine',
      'GetFinancingLineWithdrawal',
      'GetFinancingOption',
      'GetPaymentStatus'
    ],
    List: [
      'GetPaymentInstrument',
      'ListFinancingApplications',
      'ListFinancingLineWithdrawals',
      'ListFinancingLines',
      'ListPaymentInstruments',
      'ListPaymentPreferences',
      'ListPaymentProgramOptions',
      'ListPaymentProgramStatus',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type payment-instrument to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPaymentInstrument(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:payments::${ account ?? this.defaultAccount }:payment-instrument:${ resourceId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreatePaymentInstrument()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - payment-instrument
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreatePaymentInstrument()
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
