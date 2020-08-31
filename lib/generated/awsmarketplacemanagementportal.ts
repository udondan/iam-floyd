import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-marketplace-management](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceManagement extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-management';
  protected actionList: Actions = {
    "uploadFiles": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions",
      "description": "Allows a user to access the File Upload page inside the AWS Marketplace Management Portal.",
      "accessLevel": "Write"
    },
    "viewMarketing": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions",
      "description": "Allows a user to access the Marketing page inside the AWS Marketplace Management Portal.",
      "accessLevel": "List"
    },
    "viewReports": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions",
      "description": "Allows a user to access the Reports page inside the AWS Marketplace Management Portal.",
      "accessLevel": "List"
    },
    "viewSettings": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions",
      "description": "Allows a user to access the Settings page inside the AWS Marketplace Management Portal.",
      "accessLevel": "List"
    },
    "viewSupport": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions",
      "description": "Allows a user to access the Customer Support Eligibility page inside the AWS Marketplace Management Portal.",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [aws-marketplace-management](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Allows a user to access the File Upload page inside the AWS Marketplace Management Portal.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions
   */
  public touploadFiles() {
    this.add('aws-marketplace-management:uploadFiles');
    return this;
  }

  /**
   * Allows a user to access the Marketing page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions
   */
  public toviewMarketing() {
    this.add('aws-marketplace-management:viewMarketing');
    return this;
  }

  /**
   * Allows a user to access the Reports page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions
   */
  public toviewReports() {
    this.add('aws-marketplace-management:viewReports');
    return this;
  }

  /**
   * Allows a user to access the Settings page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions
   */
  public toviewSettings() {
    this.add('aws-marketplace-management:viewSettings');
    return this;
  }

  /**
   * Allows a user to access the Customer Support Eligibility page inside the AWS Marketplace Management Portal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/controlling-access/marketplace-management-portal-user-access.html#detailed-management-portal-permissions
   */
  public toviewSupport() {
    this.add('aws-marketplace-management:viewSupport');
    return this;
  }
}
