import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [aws-marketplace](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplace extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html).
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
    this.to('aws-marketplace:AcceptAgreementApprovalRequest');
    return this;
  }

  /**
   * Allows users to cancel pending subscription requests for products that require subscription verification.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toCancelAgreementRequest() {
    this.to('aws-marketplace:CancelAgreementRequest');
    return this;
  }

  /**
   * Returns metadata about the agreement.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toDescribeAgreement() {
    this.to('aws-marketplace:DescribeAgreement');
    return this;
  }

  /**
   * Allows users to view the details of their incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementApprovalRequest() {
    this.to('aws-marketplace:GetAgreementApprovalRequest');
    return this;
  }

  /**
   * Allows users to view the details of their subscription requests for data products that require subscription verification.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementRequest() {
    this.to('aws-marketplace:GetAgreementRequest');
    return this;
  }

  /**
   * Returns a list of terms for an agreement.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toGetAgreementTerms() {
    this.to('aws-marketplace:GetAgreementTerms');
    return this;
  }

  /**
   * Allows users to list their incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementApprovalRequests() {
    this.to('aws-marketplace:ListAgreementApprovalRequests');
    return this;
  }

  /**
   * Allows users to list their subscription requests for products that require subscription verification.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toListAgreementRequests() {
    this.to('aws-marketplace:ListAgreementRequests');
    return this;
  }

  /**
   * Allows users to decline an incoming subscription requests (for providers who provide products that require subscription verification).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toRejectAgreementApprovalRequest() {
    this.to('aws-marketplace:RejectAgreementApprovalRequest');
    return this;
  }

  /**
   * Allows users to search their agreements.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSearchAgreements() {
    this.to('aws-marketplace:SearchAgreements');
    return this;
  }

  /**
   * Allows users to subscribe to AWS Marketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toSubscribe() {
    this.to('aws-marketplace:Subscribe');
    return this;
  }

  /**
   * Allows users to remove subscriptions to AWS Marketplace products. Includes the ability to disable auto-renewal for an existing subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUnsubscribe() {
    this.to('aws-marketplace:Unsubscribe');
    return this;
  }

  /**
   * Allows users to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toUpdateAgreementApprovalRequest() {
    this.to('aws-marketplace:UpdateAgreementApprovalRequest');
    return this;
  }

  /**
   * Allows users to see their account's subscriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  public toViewSubscriptions() {
    this.to('aws-marketplace:ViewSubscriptions');
    return this;
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
  public ifAgreementType(value: string | string[], operator?: string) {
    return this.if(`aws-marketplace:AgreementType`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the party type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPartyType(value: string | string[], operator?: string) {
    return this.if(`aws-marketplace:PartyType`, value, operator || 'StringLike');
  }
}
