import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [macie](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacieclassic.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Macie extends PolicyStatement {
  public servicePrefix = 'macie';
  protected actionList: Actions = {
    "AssociateMemberAccount": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_AssociateMemberAccount.html",
      "description": "Enables the user to associate a specified AWS account with Amazon Macie as a member account.",
      "accessLevel": "Write"
    },
    "AssociateS3Resources": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_AssociateS3Resources.html",
      "description": "Enables the user to associate specified S3 resources with Amazon Macie for monitoring and data classification.",
      "accessLevel": "Write",
      "conditions": [
        "aws:SourceArn"
      ]
    },
    "DisassociateMemberAccount": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_DisassociateMemberAccount.html",
      "description": "Enables the user to remove the specified member account from Amazon Macie.",
      "accessLevel": "Write"
    },
    "DisassociateS3Resources": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_DisassociateS3Resources.html",
      "description": "Enables the user to remove specified S3 resources from being monitored by Amazon Macie.",
      "accessLevel": "Write",
      "conditions": [
        "aws:SourceArn"
      ]
    },
    "ListMemberAccounts": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_ListMemberAccounts.html",
      "description": "Enables the user to list all Amazon Macie member accounts for the current Macie master account.",
      "accessLevel": "List"
    },
    "ListS3Resources": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_ListS3Resources.html",
      "description": "Enables the user to list all the S3 resources associated with Amazon Macie.",
      "accessLevel": "List"
    },
    "UpdateS3Resources": {
      "url": "https://docs.aws.amazon.com/macie/1.0/APIReference/API_UpdateS3Resources.html",
      "description": "Enables the user to update the classification types for the specified S3 resources.",
      "accessLevel": "Write",
      "conditions": [
        "aws:SourceArn"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [macie](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacieclassic.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Enables the user to associate a specified AWS account with Amazon Macie as a member account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_AssociateMemberAccount.html
   */
  public toAssociateMemberAccount() {
    this.add('macie:AssociateMemberAccount');
    return this;
  }

  /**
   * Enables the user to associate specified S3 resources with Amazon Macie for monitoring and data classification.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsSourceArn()
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_AssociateS3Resources.html
   */
  public toAssociateS3Resources() {
    this.add('macie:AssociateS3Resources');
    return this;
  }

  /**
   * Enables the user to remove the specified member account from Amazon Macie.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_DisassociateMemberAccount.html
   */
  public toDisassociateMemberAccount() {
    this.add('macie:DisassociateMemberAccount');
    return this;
  }

  /**
   * Enables the user to remove specified S3 resources from being monitored by Amazon Macie.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsSourceArn()
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_DisassociateS3Resources.html
   */
  public toDisassociateS3Resources() {
    this.add('macie:DisassociateS3Resources');
    return this;
  }

  /**
   * Enables the user to list all Amazon Macie member accounts for the current Macie master account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_ListMemberAccounts.html
   */
  public toListMemberAccounts() {
    this.add('macie:ListMemberAccounts');
    return this;
  }

  /**
   * Enables the user to list all the S3 resources associated with Amazon Macie.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_ListS3Resources.html
   */
  public toListS3Resources() {
    this.add('macie:ListS3Resources');
    return this;
  }

  /**
   * Enables the user to update the classification types for the specified S3 resources.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsSourceArn()
   *
   * https://docs.aws.amazon.com/macie/1.0/APIReference/API_UpdateS3Resources.html
   */
  public toUpdateS3Resources() {
    this.add('macie:UpdateS3Resources');
    return this;
  }

  /**
   * Allow access to the specified actions only when the request operates on the specified aws resource
   *
   * Applies to actions:
   * - .toAssociateS3Resources()
   * - .toDisassociateS3Resources()
   * - .toUpdateS3Resources()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifAwsSourceArn(value: string | string[], operator?: string) {
    return this.if(`aws:SourceArn`, value, operator || 'ArnEquals');
  }
}
