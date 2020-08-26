import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-marketplace](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplace extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';
  protected actionList: Actions = {
    "AcceptAgreementApprovalRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to approve an incoming subscription request (for providers who provide products that require subscription verification).",
      "accessLevel": "Write"
    },
    "CancelAgreementRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to cancel pending subscription requests for products that require subscription verification.",
      "accessLevel": "Write"
    },
    "DescribeAgreement": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Returns metadata about the agreement.",
      "accessLevel": "Read"
    },
    "GetAgreementApprovalRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to view the details of their incoming subscription requests (for providers who provide products that require subscription verification).",
      "accessLevel": "Read"
    },
    "GetAgreementRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to view the details of their subscription requests for data products that require subscription verification.",
      "accessLevel": "Read"
    },
    "GetAgreementTerms": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Returns a list of terms for an agreement.",
      "accessLevel": "List"
    },
    "ListAgreementApprovalRequests": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to list their incoming subscription requests (for providers who provide products that require subscription verification).",
      "accessLevel": "List"
    },
    "ListAgreementRequests": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to list their subscription requests for products that require subscription verification.",
      "accessLevel": "List"
    },
    "RejectAgreementApprovalRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to decline an incoming subscription requests (for providers who provide products that require subscription verification).",
      "accessLevel": "Write"
    },
    "SearchAgreements": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to search their agreements.",
      "accessLevel": "List"
    },
    "Subscribe": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to subscribe to AWS Marketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription.",
      "accessLevel": "Write"
    },
    "Unsubscribe": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to remove subscriptions to AWS Marketplace products. Includes the ability to disable auto-renewal for an existing subscription.",
      "accessLevel": "Write"
    },
    "UpdateAgreementApprovalRequest": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification).",
      "accessLevel": "Write"
    },
    "ViewSubscriptions": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/ControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions",
      "description": "Allows users to see their account's subscriptions.",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
    this.add('aws-marketplace:AcceptAgreementApprovalRequest');
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
    this.add('aws-marketplace:CancelAgreementRequest');
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
    this.add('aws-marketplace:DescribeAgreement');
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
    this.add('aws-marketplace:GetAgreementApprovalRequest');
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
    this.add('aws-marketplace:GetAgreementRequest');
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
    this.add('aws-marketplace:GetAgreementTerms');
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
    this.add('aws-marketplace:ListAgreementApprovalRequests');
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
    this.add('aws-marketplace:ListAgreementRequests');
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
    this.add('aws-marketplace:RejectAgreementApprovalRequest');
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
    this.add('aws-marketplace:SearchAgreements');
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
    this.add('aws-marketplace:Subscribe');
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
    this.add('aws-marketplace:Unsubscribe');
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
    this.add('aws-marketplace:UpdateAgreementApprovalRequest');
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
    this.add('aws-marketplace:ViewSubscriptions');
    return this;
  }

  /**
   * Enables you to control access based on the type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgreementType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws-marketplace:AgreementType`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the party type of the agreement.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPartyType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws-marketplace:PartyType`, value, operator || 'StringLike');
  }
}
