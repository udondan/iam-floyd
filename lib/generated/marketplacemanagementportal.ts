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
  public toUploadFiles() {
    return this.to('uploadFiles');
  }

  /**
   * Allows access to the Marketing page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewMarketing() {
    return this.to('viewMarketing');
  }

  /**
   * Allows access to the Reports page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewReports() {
    return this.to('viewReports');
  }

  /**
   * Allows access to the Settings page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewSettings() {
    return this.to('viewSettings');
  }

  /**
   * Allows access to the Customer Support Eligibility page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  public toViewSupport() {
    return this.to('viewSupport');
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
