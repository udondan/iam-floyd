import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-portal](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsPortal extends PolicyStatement {
  public servicePrefix = 'aws-portal';
  protected actionList: Actions = {
    "ModifyAccount": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to modify Account Settings.",
      "accessLevel": "Write"
    },
    "ModifyBilling": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to modify billing settings.",
      "accessLevel": "Write"
    },
    "ModifyPaymentMethods": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to modify payment methods.",
      "accessLevel": "Write"
    },
    "ViewAccount": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to view account settings.",
      "accessLevel": "Read"
    },
    "ViewBilling": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to view billing pages in the console.",
      "accessLevel": "Read"
    },
    "ViewPaymentMethods": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to view payment methods.",
      "accessLevel": "Read"
    },
    "ViewUsage": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Allow or deny IAM users permission to view AWS usage reports.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [aws-portal](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Allow or deny IAM users permission to modify Account Settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyAccount() {
    this.to('aws-portal:ModifyAccount');
    return this;
  }

  /**
   * Allow or deny IAM users permission to modify billing settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyBilling() {
    this.to('aws-portal:ModifyBilling');
    return this;
  }

  /**
   * Allow or deny IAM users permission to modify payment methods.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyPaymentMethods() {
    this.to('aws-portal:ModifyPaymentMethods');
    return this;
  }

  /**
   * Allow or deny IAM users permission to view account settings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewAccount() {
    this.to('aws-portal:ViewAccount');
    return this;
  }

  /**
   * Allow or deny IAM users permission to view billing pages in the console.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewBilling() {
    this.to('aws-portal:ViewBilling');
    return this;
  }

  /**
   * Allow or deny IAM users permission to view payment methods.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewPaymentMethods() {
    this.to('aws-portal:ViewPaymentMethods');
    return this;
  }

  /**
   * Allow or deny IAM users permission to view AWS usage reports.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewUsage() {
    this.to('aws-portal:ViewUsage');
    return this;
  }
}
