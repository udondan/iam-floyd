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
   * Allows users to approve an incoming subscription request (for providers who provide products that require subscription verification).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toAcceptAgreementApprovalRequest() {
    return this.to('AcceptAgreementApprovalRequest');
  }

  /**
   * Allows users to cancel pending subscription requests for products that require subscription verification.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toCancelAgreementRequest() {
    return this.to('CancelAgreementRequest');
  }

  /**
   * Returns metadata about the agreement.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toDescribeAgreement() {
    return this.to('DescribeAgreement');
  }

  /**
   * Allows users to view the details of their incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementApprovalRequest() {
    return this.to('GetAgreementApprovalRequest');
  }

  /**
   * Allows users to view the details of their subscription requests for data products that require subscription verification.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementRequest() {
    return this.to('GetAgreementRequest');
  }

  /**
   * Returns a list of terms for an agreement.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementTerms() {
    return this.to('GetAgreementTerms');
  }

  /**
   * Allows users to list their incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementApprovalRequests() {
    return this.to('ListAgreementApprovalRequests');
  }

  /**
   * Allows users to list their subscription requests for products that require subscription verification.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementRequests() {
    return this.to('ListAgreementRequests');
  }

  /**
   * Allows users to decline an incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toRejectAgreementApprovalRequest() {
    return this.to('RejectAgreementApprovalRequest');
  }

  /**
   * Allows users to search their agreements.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSearchAgreements() {
    return this.to('SearchAgreements');
  }

  /**
   * Allows users to subscribe to AWSMarketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Allows users to remove subscriptions to AWSMarketplace products. Includes the ability to disable auto-renewal for an existing subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Allows users to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUpdateAgreementApprovalRequest() {
    return this.to('UpdateAgreementApprovalRequest');
  }

  /**
   * Allows users to see their account's subscriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
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
   * Enables you to control access based on the type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgreementType(value: string | string[], operator?: Operator | string) {
    return this.if(`AgreementType`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the party type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPartyType(value: string | string[], operator?: Operator | string) {
    return this.if(`PartyType`, value, operator || 'StringLike');
  }
}
