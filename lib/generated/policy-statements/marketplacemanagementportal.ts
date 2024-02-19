import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [aws-marketplace-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemanagementportal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceManagement extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-management';

  /**
   * Statement provider for service [aws-marketplace-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemanagementportal.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view additional seller notification recipients
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toGetAdditionalSellerNotificationRecipients() {
    return this.to('GetAdditionalSellerNotificationRecipients');
  }

  /**
   * Grants permission to view bank account verification status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toGetBankAccountVerificationDetails() {
    return this.to('GetBankAccountVerificationDetails');
  }

  /**
   * Grants permission to view secondary user account verification status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toGetSecondaryUserVerificationDetails() {
    return this.to('GetSecondaryUserVerificationDetails');
  }

  /**
   * Grants permission to view account verification status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toGetSellerVerificationDetails() {
    return this.to('GetSellerVerificationDetails');
  }

  /**
   * Grants permission to update additional seller notification recipients
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toPutAdditionalSellerNotificationRecipients() {
    return this.to('PutAdditionalSellerNotificationRecipients');
  }

  /**
   * Grants permission to update bank account verification status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toPutBankAccountVerificationDetails() {
    return this.to('PutBankAccountVerificationDetails');
  }

  /**
   * Grants permission to update secondary user account verification status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toPutSecondaryUserVerificationDetails() {
    return this.to('PutSecondaryUserVerificationDetails');
  }

  /**
   * Grants permission to update account verification status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toPutSellerVerificationDetails() {
    return this.to('PutSellerVerificationDetails');
  }

  /**
   * Allows access to the File Upload page inside the AWS Marketplace Management Portal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toUploadFiles() {
    return this.to('uploadFiles');
  }

  /**
   * Allows access to the Marketing page inside the AWS Marketplace Management Portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewMarketing() {
    return this.to('viewMarketing');
  }

  /**
   * Allows access to the Reports page inside the AWS Marketplace Management Portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewReports() {
    return this.to('viewReports');
  }

  /**
   * Allows access to the Settings page inside the AWS Marketplace Management Portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewSettings() {
    return this.to('viewSettings');
  }

  /**
   * Allows access to the Customer Support Eligibility page inside the AWS Marketplace Management Portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewSupport() {
    return this.to('viewSupport');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetAdditionalSellerNotificationRecipients',
      'GetBankAccountVerificationDetails',
      'GetSecondaryUserVerificationDetails',
      'GetSellerVerificationDetails'
    ],
    Write: [
      'PutAdditionalSellerNotificationRecipients',
      'PutBankAccountVerificationDetails',
      'PutSecondaryUserVerificationDetails',
      'PutSellerVerificationDetails',
      'uploadFiles'
    ],
    List: [
      'viewMarketing',
      'viewReports',
      'viewSettings',
      'viewSupport'
    ]
  };
}
