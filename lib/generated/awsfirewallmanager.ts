import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [fms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fms extends PolicyStatement {
  public servicePrefix = 'fms';

  /**
   * Statement provider for service [fms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Sets the AWS Firewall Manager administrator account and enables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html
   */
  public toAssociateAdminAccount() {
    this.to('fms:AssociateAdminAccount');
    return this;
  }

  /**
   * Grants permission to permanently deletes an AWS Firewall Manager applications list.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteAppsList.html
   */
  public toDeleteAppsList() {
    this.to('fms:DeleteAppsList');
    return this;
  }

  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to notify the FM administrator about major FM events and errors across the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html
   */
  public toDeleteNotificationChannel() {
    this.to('fms:DeleteNotificationChannel');
    return this;
  }

  /**
   * Permanently deletes an AWS Firewall Manager policy.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('fms:DeletePolicy');
    return this;
  }

  /**
   * Grants permission to permanently deletes an AWS Firewall Manager protocols list.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteProtocolsList.html
   */
  public toDeleteProtocolsList() {
    this.to('fms:DeleteProtocolsList');
    return this;
  }

  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account and and disables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html
   */
  public toDisassociateAdminAccount() {
    this.to('fms:DisassociateAdminAccount');
    return this;
  }

  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html
   */
  public toGetAdminAccount() {
    this.to('fms:GetAdminAccount');
    return this;
  }

  /**
   * Grants permission to return information about the specified AWS Firewall Manager applications list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAppsList.html
   */
  public toGetAppsList() {
    this.to('fms:GetAppsList');
    return this;
  }

  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html
   */
  public toGetComplianceDetail() {
    this.to('fms:GetComplianceDetail');
    return this;
  }

  /**
   * Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html
   */
  public toGetNotificationChannel() {
    this.to('fms:GetNotificationChannel');
    return this;
  }

  /**
   * Returns information about the specified AWS Firewall Manager policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('fms:GetPolicy');
    return this;
  }

  /**
   * Returns policy-level attack summary information in the event of a potential DDoS attack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html
   */
  public toGetProtectionStatus() {
    this.to('fms:GetProtectionStatus');
    return this;
  }

  /**
   * Grants permission to return information about the specified AWS Firewall Manager protocols list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtocolsList.html
   */
  public toGetProtocolsList() {
    this.to('fms:GetProtocolsList');
    return this;
  }

  /**
   * Grants permission to return an array of AppsListDataSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAppsLists.html
   */
  public toListAppsLists() {
    this.to('fms:ListAppsLists');
    return this;
  }

  /**
   * Returns an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html
   */
  public toListComplianceStatus() {
    this.to('fms:ListComplianceStatus');
    return this;
  }

  /**
   * Returns an array of member account ids if the caller is FMS admin account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html
   */
  public toListMemberAccounts() {
    this.to('fms:ListMemberAccounts');
    return this;
  }

  /**
   * Returns an array of PolicySummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    this.to('fms:ListPolicies');
    return this;
  }

  /**
   * Grants permission to return an array of ProtocolsListDataSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListProtocolsLists.html
   */
  public toListProtocolsLists() {
    this.to('fms:ListProtocolsLists');
    return this;
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('fms:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to create an AWS Firewall Manager applications list.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutAppsList.html
   */
  public toPutAppsList() {
    this.to('fms:PutAppsList');
    return this;
  }

  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM administrator about major FM events and errors across the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html
   */
  public toPutNotificationChannel() {
    this.to('fms:PutNotificationChannel');
    return this;
  }

  /**
   * Creates an AWS Firewall Manager policy.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutPolicy.html
   */
  public toPutPolicy() {
    this.to('fms:PutPolicy');
    return this;
  }

  /**
   * Grants permission to creates an AWS Firewall Manager protocols list.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutProtocolsList.html
   */
  public toPutProtocolsList() {
    this.to('fms:PutProtocolsList');
    return this;
  }

  /**
   * Adds a Tag to a given resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('fms:TagResource');
    return this;
  }

  /**
   * Removes a Tag from a given resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('fms:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateAdminAccount",
      "DeleteAppsList",
      "DeleteNotificationChannel",
      "DeletePolicy",
      "DeleteProtocolsList",
      "DisassociateAdminAccount",
      "PutAppsList",
      "PutNotificationChannel",
      "PutPolicy",
      "PutProtocolsList"
    ],
    "Read": [
      "GetAdminAccount",
      "GetAppsList",
      "GetComplianceDetail",
      "GetNotificationChannel",
      "GetPolicy",
      "GetProtectionStatus",
      "GetProtocolsList",
      "ListTagsForResource"
    ],
    "List": [
      "ListAppsLists",
      "ListComplianceStatus",
      "ListMemberAccounts",
      "ListPolicies",
      "ListProtocolsLists"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fms:${Region}:${Account}:policy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type applications-list to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AppsListData.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationsList(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fms:${Region}:${Account}:applications-list/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type protocols-list to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ProtocolsListData.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProtocolsList(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fms:${Region}:${Account}:protocols-list/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
