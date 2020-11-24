import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Allows access to the File Upload page inside the AWS Marketplace Management Portal.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public touploadFiles() {
    this.to('aws-marketplace-management:uploadFiles');
    return this;
  }

  /**
   * Allows access to the Marketing page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toviewMarketing() {
    this.to('aws-marketplace-management:viewMarketing');
    return this;
  }

  /**
   * Allows access to the Reports page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toviewReports() {
    this.to('aws-marketplace-management:viewReports');
    return this;
  }

  /**
   * Allows access to the Settings page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toviewSettings() {
    this.to('aws-marketplace-management:viewSettings');
    return this;
  }

  /**
   * Allows access to the Customer Support Eligibility page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toviewSupport() {
    this.to('aws-marketplace-management:viewSupport');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "uploadFiles"
    ],
    "List": [
      "viewMarketing",
      "viewReports",
      "viewSettings",
      "viewSupport"
    ]
  };
}
