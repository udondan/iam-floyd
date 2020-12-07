import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [macie](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacieclassic.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Macie extends PolicyStatement {
  public servicePrefix = 'macie';

  /**
   * Statement provider for service [macie](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacieclassic.html).
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
    this.to('macie:AssociateMemberAccount');
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
    this.to('macie:AssociateS3Resources');
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
    this.to('macie:DisassociateMemberAccount');
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
    this.to('macie:DisassociateS3Resources');
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
    this.to('macie:ListMemberAccounts');
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
    this.to('macie:ListS3Resources');
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
    this.to('macie:UpdateS3Resources');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateMemberAccount",
      "AssociateS3Resources",
      "DisassociateMemberAccount",
      "DisassociateS3Resources",
      "UpdateS3Resources"
    ],
    "List": [
      "ListMemberAccounts",
      "ListS3Resources"
    ]
  };
}

export type MacieActionsWrite = 'AssociateMemberAccount' | 'AssociateS3Resources' | 'DisassociateMemberAccount' | 'DisassociateS3Resources' | 'UpdateS3Resources';
export type MacieActionsList = 'ListMemberAccounts' | 'ListS3Resources';
export type MacieActions = MacieActionsWrite | MacieActionsList;
