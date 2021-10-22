import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to users to approve an incoming subscription request (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toAcceptAgreementApprovalRequest() {
    return this.to('AcceptAgreementApprovalRequest');
  }

  /**
   * Grants permission to users to cancel pending subscription requests for products that require subscription verification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toCancelAgreementRequest() {
    return this.to('CancelAgreementRequest');
  }

  /**
   * Grants permission to users to describe the metadata about the agreement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toDescribeAgreement() {
    return this.to('DescribeAgreement');
  }

  /**
   * Grants permission to users to view the details of their incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementApprovalRequest() {
    return this.to('GetAgreementApprovalRequest');
  }

  /**
   * Grants permission to users to view the details of their subscription requests for data products that require subscription verification
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementRequest() {
    return this.to('GetAgreementRequest');
  }

  /**
   * Grants permission to users to get a list of terms for an agreement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementTerms() {
    return this.to('GetAgreementTerms');
  }

  /**
   * Grants permission to users to list their incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementApprovalRequests() {
    return this.to('ListAgreementApprovalRequests');
  }

  /**
   * Grants permission to users to list their subscription requests for products that require subscription verification
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementRequests() {
    return this.to('ListAgreementRequests');
  }

  /**
   * Grants permission to users to decline an incoming subscription requests (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toRejectAgreementApprovalRequest() {
    return this.to('RejectAgreementApprovalRequest');
  }

  /**
   * Grants permission to users to search their agreements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSearchAgreements() {
    return this.to('SearchAgreements');
  }

  /**
   * Grants permission to users to subscribe to AWS Marketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Grants permission to users to remove subscriptions to AWS Marketplace products. Includes the ability to disable auto-renewal for an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Grants permission to users to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUpdateAgreementApprovalRequest() {
    return this.to('UpdateAgreementApprovalRequest');
  }

  /**
   * Grants permission to users to see their account's subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toViewSubscriptions() {
    return this.to('ViewSubscriptions');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptAgreementApprovalRequest",
      "CancelAgreementRequest",
      "RejectAgreementApprovalRequest",
      "Subscribe",
      "Unsubscribe",
      "UpdateAgreementApprovalRequest"
    ],
    "Read": [
      "DescribeAgreement",
      "GetAgreementApprovalRequest",
      "GetAgreementRequest"
    ],
    "List": [
      "GetAgreementTerms",
      "ListAgreementApprovalRequests",
      "ListAgreementRequests",
      "SearchAgreements",
      "ViewSubscriptions"
    ]
  };

  /**
   * Filters access by the type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgreementType(value: string | string[], operator?: Operator | string) {
    return this.if(`AgreementType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the party type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPartyType(value: string | string[], operator?: Operator | string) {
    return this.if(`PartyType`, value, operator || 'StringLike');
  }

  /**
   * Filters access to AWS Marketplace RedHat OpenShift products in the RedHat console, based on the ProductID of the product. Note: This condition key only applies to the RedHat console, and using it will not allow access to products in AWS Marketplace.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProductId(value: string | string[], operator?: Operator | string) {
    return this.if(`ProductId`, value, operator || 'StringLike');
  }
}
