import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aws-marketplace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplace extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplace.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve an incoming subscription request (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toAcceptAgreementApprovalRequest() {
    return this.to('AcceptAgreementApprovalRequest');
  }

  /**
   * Grants permission to accept an agreement cancellation request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toAcceptAgreementCancellationRequest() {
    return this.to('AcceptAgreementCancellationRequest');
  }

  /**
   * Grants permission to accept a payment request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toAcceptAgreementPaymentRequest() {
    return this.to('AcceptAgreementPaymentRequest');
  }

  /**
   * Grants permission to accept an agreement request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAgreementType()
   * - .ifProductId()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toAcceptAgreementRequest() {
    return this.to('AcceptAgreementRequest');
  }

  /**
   * Grants permission to create a billing adjustment request against an agreement
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toBatchCreateBillingAdjustmentRequest() {
    return this.to('BatchCreateBillingAdjustmentRequest');
  }

  /**
   * Grants permission to cancel agreements
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toCancelAgreement() {
    return this.to('CancelAgreement');
  }

  /**
   * Grants permission to cancel a pending agreement cancellation request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toCancelAgreementCancellationRequest() {
    return this.to('CancelAgreementCancellationRequest');
  }

  /**
   * Grants permission to cancel a payment request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toCancelAgreementPaymentRequest() {
    return this.to('CancelAgreementPaymentRequest');
  }

  /**
   * Grants permission to cancel pending subscription requests for products that require subscription verification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toCancelAgreementRequest() {
    return this.to('CancelAgreementRequest');
  }

  /**
   * Grants permission to create an agreement request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAgreementType()
   * - .ifProductId()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toCreateAgreementRequest() {
    return this.to('CreateAgreementRequest');
  }

  /**
   * Grants permission to describe the metadata about the agreement
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toDescribeAgreement() {
    return this.to('DescribeAgreement');
  }

  /**
   * Grants permission to view the details of incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementApprovalRequest() {
    return this.to('GetAgreementApprovalRequest');
  }

  /**
   * Grants permission to view the details of an agreement cancellation request
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementCancellationRequest() {
    return this.to('GetAgreementCancellationRequest');
  }

  /**
   * Grants permission to get the entitlements associated with an agreement
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementEntitlements() {
    return this.to('GetAgreementEntitlements');
  }

  /**
   * Grants permission to view details for a payment request
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementPaymentRequest() {
    return this.to('GetAgreementPaymentRequest');
  }

  /**
   * Grants permission to view the details of subscription requests for data products that require subscription verification
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementRequest() {
    return this.to('GetAgreementRequest');
  }

  /**
   * Grants permission to get a list of terms for an agreement
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetAgreementTerms() {
    return this.to('GetAgreementTerms');
  }

  /**
   * Grants permission to view the details of a billing adjustment request
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toGetBillingAdjustmentRequest() {
    return this.to('GetBillingAdjustmentRequest');
  }

  /**
   * Grants permission to list incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementApprovalRequests() {
    return this.to('ListAgreementApprovalRequests');
  }

  /**
   * Grants permission to list agreement cancellation requests
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementCancellationRequests() {
    return this.to('ListAgreementCancellationRequests');
  }

  /**
   * Grants permission to list charges associated with an agreement
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementCharges() {
    return this.to('ListAgreementCharges');
  }

  /**
   * Grants permission to list invoice line items for an agreement
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementInvoiceLineItems() {
    return this.to('ListAgreementInvoiceLineItems');
  }

  /**
   * Grants permission to list payment requests for an agreement
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementPaymentRequests() {
    return this.to('ListAgreementPaymentRequests');
  }

  /**
   * Grants permission to list subscription requests for products that require subscription verification
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListAgreementRequests() {
    return this.to('ListAgreementRequests');
  }

  /**
   * Grants permission to list billing adjustment requests
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListBillingAdjustmentRequests() {
    return this.to('ListBillingAdjustmentRequests');
  }

  /**
   * Grants permission to list details of the entitlements associated with an agreement. Note that this action is not applicable to Marketplace purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toListEntitlementDetails() {
    return this.to('ListEntitlementDetails');
  }

  /**
   * Grants permission to decline an incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toRejectAgreementApprovalRequest() {
    return this.to('RejectAgreementApprovalRequest');
  }

  /**
   * Grants permission to reject an agreement cancellation request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toRejectAgreementCancellationRequest() {
    return this.to('RejectAgreementCancellationRequest');
  }

  /**
   * Grants permission to reject a payment request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toRejectAgreementPaymentRequest() {
    return this.to('RejectAgreementPaymentRequest');
  }

  /**
   * Grants permission to search agreements
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toSearchAgreements() {
    return this.to('SearchAgreements');
  }

  /**
   * Grants permission to send an agreement cancellation request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toSendAgreementCancellationRequest() {
    return this.to('SendAgreementCancellationRequest');
  }

  /**
   * Grants permission to send a payment request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPartyType()
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toSendAgreementPaymentRequest() {
    return this.to('SendAgreementPaymentRequest');
  }

  /**
   * Grants permission to subscribe to AWS Marketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Grants permission to unsubscribe from AWS Marketplace products. Includes the ability to disable auto-renewal for an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Grants permission to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toUpdateAgreementApprovalRequest() {
    return this.to('UpdateAgreementApprovalRequest');
  }

  /**
   * Grants permission to update purchase orders for charges associated with an agreement
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAgreementType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toUpdatePurchaseOrders() {
    return this.to('UpdatePurchaseOrders');
  }

  /**
   * Grants permission to view account's subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   */
  public toViewSubscriptions() {
    return this.to('ViewSubscriptions');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAgreementApprovalRequest',
      'AcceptAgreementCancellationRequest',
      'AcceptAgreementPaymentRequest',
      'AcceptAgreementRequest',
      'BatchCreateBillingAdjustmentRequest',
      'CancelAgreement',
      'CancelAgreementCancellationRequest',
      'CancelAgreementPaymentRequest',
      'CancelAgreementRequest',
      'CreateAgreementRequest',
      'RejectAgreementApprovalRequest',
      'RejectAgreementCancellationRequest',
      'RejectAgreementPaymentRequest',
      'SendAgreementCancellationRequest',
      'SendAgreementPaymentRequest',
      'Subscribe',
      'Unsubscribe',
      'UpdateAgreementApprovalRequest',
      'UpdatePurchaseOrders'
    ],
    Read: [
      'DescribeAgreement',
      'GetAgreementApprovalRequest',
      'GetAgreementCancellationRequest',
      'GetAgreementEntitlements',
      'GetAgreementPaymentRequest',
      'GetAgreementRequest',
      'GetBillingAdjustmentRequest',
      'ListEntitlementDetails'
    ],
    List: [
      'GetAgreementTerms',
      'ListAgreementApprovalRequests',
      'ListAgreementCancellationRequests',
      'ListAgreementCharges',
      'ListAgreementInvoiceLineItems',
      'ListAgreementPaymentRequests',
      'ListAgreementRequests',
      'ListBillingAdjustmentRequests',
      'SearchAgreements',
      'ViewSubscriptions'
    ]
  };

  /**
   * Filters access by the type of the agreement
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   *
   * Applies to actions:
   * - .toAcceptAgreementCancellationRequest()
   * - .toAcceptAgreementPaymentRequest()
   * - .toAcceptAgreementRequest()
   * - .toBatchCreateBillingAdjustmentRequest()
   * - .toCancelAgreement()
   * - .toCancelAgreementCancellationRequest()
   * - .toCancelAgreementPaymentRequest()
   * - .toCreateAgreementRequest()
   * - .toDescribeAgreement()
   * - .toGetAgreementCancellationRequest()
   * - .toGetAgreementEntitlements()
   * - .toGetAgreementPaymentRequest()
   * - .toGetAgreementTerms()
   * - .toGetBillingAdjustmentRequest()
   * - .toListAgreementCancellationRequests()
   * - .toListAgreementCharges()
   * - .toListAgreementInvoiceLineItems()
   * - .toListAgreementPaymentRequests()
   * - .toListBillingAdjustmentRequests()
   * - .toRejectAgreementCancellationRequest()
   * - .toRejectAgreementPaymentRequest()
   * - .toSearchAgreements()
   * - .toSendAgreementCancellationRequest()
   * - .toSendAgreementPaymentRequest()
   * - .toUpdatePurchaseOrders()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgreementType(value: string | string[], operator?: Operator | string) {
    return this.if(`AgreementType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the party type of the agreement
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   *
   * Applies to actions:
   * - .toAcceptAgreementCancellationRequest()
   * - .toAcceptAgreementPaymentRequest()
   * - .toBatchCreateBillingAdjustmentRequest()
   * - .toCancelAgreementCancellationRequest()
   * - .toCancelAgreementPaymentRequest()
   * - .toDescribeAgreement()
   * - .toGetAgreementCancellationRequest()
   * - .toGetAgreementPaymentRequest()
   * - .toGetAgreementTerms()
   * - .toGetBillingAdjustmentRequest()
   * - .toListAgreementCancellationRequests()
   * - .toListAgreementInvoiceLineItems()
   * - .toListAgreementPaymentRequests()
   * - .toListBillingAdjustmentRequests()
   * - .toRejectAgreementCancellationRequest()
   * - .toRejectAgreementPaymentRequest()
   * - .toSearchAgreements()
   * - .toSendAgreementCancellationRequest()
   * - .toSendAgreementPaymentRequest()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPartyType(value: string | string[], operator?: Operator | string) {
    return this.if(`PartyType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by product id for AWS Marketplace purchases
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.html
   *
   * Applies to actions:
   * - .toAcceptAgreementRequest()
   * - .toCreateAgreementRequest()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProductId(value: string | string[], operator?: Operator | string) {
    return this.if(`ProductId`, value, operator ?? 'StringLike');
  }
}
