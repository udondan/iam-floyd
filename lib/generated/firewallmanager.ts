import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to set the AWS Firewall Manager administrator account and enables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html
   */
  public toAssociateAdminAccount() {
    return this.to('AssociateAdminAccount');
  }

  /**
   * Grants permission to set the Firewall Manager administrator as a tenant administrator of a third-party firewall service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateThirdPartyFirewall.html
   */
  public toAssociateThirdPartyFirewall() {
    return this.to('AssociateThirdPartyFirewall');
  }

  /**
   * Grants permission to associate resources to an AWS Firewall Manager resource set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_BatchAssociateResource.html
   */
  public toBatchAssociateResource() {
    return this.to('BatchAssociateResource');
  }

  /**
   * Grants permission to disassociate resources from an AWS Firewall Manager resource set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_BatchDisassociateResource.html
   */
  public toBatchDisassociateResource() {
    return this.to('BatchDisassociateResource');
  }

  /**
   * Grants permission to permanently deletes an AWS Firewall Manager applications list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteAppsList.html
   */
  public toDeleteAppsList() {
    return this.to('DeleteAppsList');
  }

  /**
   * Grants permission to delete an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to notify the FM administrator about major FM events and errors across the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html
   */
  public toDeleteNotificationChannel() {
    return this.to('DeleteNotificationChannel');
  }

  /**
   * Grants permission to permanently delete an AWS Firewall Manager policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to permanently deletes an AWS Firewall Manager protocols list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteProtocolsList.html
   */
  public toDeleteProtocolsList() {
    return this.to('DeleteProtocolsList');
  }

  /**
   * Grants permission to permanently delete an AWS Firewall Manager resource set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteResourceSet.html
   */
  public toDeleteResourceSet() {
    return this.to('DeleteResourceSet');
  }

  /**
   * Grants permission to disassociate the account that has been set as the AWS Firewall Manager administrator account and and disables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html
   */
  public toDisassociateAdminAccount() {
    return this.to('DisassociateAdminAccount');
  }

  /**
   * Grants permission to disassociate a Firewall Manager administrator from a third-party firewall tenant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateThirdPartyFirewall.html
   */
  public toDisassociateThirdPartyFirewall() {
    return this.to('DisassociateThirdPartyFirewall');
  }

  /**
   * Grants permission to return the AWS Organizations account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html
   */
  public toGetAdminAccount() {
    return this.to('GetAdminAccount');
  }

  /**
   * Grants permission to return information about the specified account's administrative scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminScope.html
   */
  public toGetAdminScope() {
    return this.to('GetAdminScope');
  }

  /**
   * Grants permission to return information about the specified AWS Firewall Manager applications list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAppsList.html
   */
  public toGetAppsList() {
    return this.to('GetAppsList');
  }

  /**
   * Grants permission to retrieve detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html
   */
  public toGetComplianceDetail() {
    return this.to('GetComplianceDetail');
  }

  /**
   * Grants permission to retrieve information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html
   */
  public toGetNotificationChannel() {
    return this.to('GetNotificationChannel');
  }

  /**
   * Grants permission to retrieve information about the specified AWS Firewall Manager policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to retrieve policy-level attack summary information in the event of a potential DDoS attack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html
   */
  public toGetProtectionStatus() {
    return this.to('GetProtectionStatus');
  }

  /**
   * Grants permission to return information about the specified AWS Firewall Manager protocols list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtocolsList.html
   */
  public toGetProtocolsList() {
    return this.to('GetProtocolsList');
  }

  /**
   * Grants permission to retrieve information about the specified AWS Firewall Manager resource set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetResourceSet.html
   */
  public toGetResourceSet() {
    return this.to('GetResourceSet');
  }

  /**
   * Grants permission to retrieve the onboarding status of a Firewall Manager administrator account to third-party firewall vendor tenant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetThirdPartyFirewallAssociationStatus.html
   */
  public toGetThirdPartyFirewallAssociationStatus() {
    return this.to('GetThirdPartyFirewallAssociationStatus');
  }

  /**
   * Grants permission to retrieve violations for a resource based on the specified AWS Firewall Manager policy and AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetViolationDetails.html
   */
  public toGetViolationDetails() {
    return this.to('GetViolationDetails');
  }

  /**
   * Grants permission to return a AdminAccounts object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by AssociateAdminAccount
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAdminAccountsForOrganization.html
   */
  public toListAdminAccountsForOrganization() {
    return this.to('ListAdminAccountsForOrganization');
  }

  /**
   * Grants permission to list the accounts that are managing the specified AWS Organizations member account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAdminsManagingAccount.html
   */
  public toListAdminsManagingAccount() {
    return this.to('ListAdminsManagingAccount');
  }

  /**
   * Grants permission to return an array of AppsListDataSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAppsLists.html
   */
  public toListAppsLists() {
    return this.to('ListAppsLists');
  }

  /**
   * Grants permission to retrieve an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html
   */
  public toListComplianceStatus() {
    return this.to('ListComplianceStatus');
  }

  /**
   * Grants permission to retrieve an array of resources in the organization's accounts that are available to be associated with a resource set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    return this.to('ListDiscoveredResources');
  }

  /**
   * Grants permission to retrieve an array of member account ids if the caller is FMS admin account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html
   */
  public toListMemberAccounts() {
    return this.to('ListMemberAccounts');
  }

  /**
   * Grants permission to retrieve an array of PolicySummary objects in the response
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to return an array of ProtocolsListDataSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListProtocolsLists.html
   */
  public toListProtocolsLists() {
    return this.to('ListProtocolsLists');
  }

  /**
   * Grants permission to retrieve an array of resources that are currently associated to a resource set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListResourceSetResources.html
   */
  public toListResourceSetResources() {
    return this.to('ListResourceSetResources');
  }

  /**
   * Grants permission to retrieve an array of ResourceSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListResourceSets.html
   */
  public toListResourceSets() {
    return this.to('ListResourceSets');
  }

  /**
   * Grants permission to list Tags for a given resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListThirdPartyFirewallFirewallPolicies.html
   */
  public toListThirdPartyFirewallFirewallPolicies() {
    return this.to('ListThirdPartyFirewallFirewallPolicies');
  }

  /**
   * Grants permission to create or update an Firewall Manager administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutAdminAccount.html
   */
  public toPutAdminAccount() {
    return this.to('PutAdminAccount');
  }

  /**
   * Grants permission to create an AWS Firewall Manager applications list
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
    return this.to('PutAppsList');
  }

  /**
   * Grants permission to designate the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM administrator about major FM events and errors across the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html
   */
  public toPutNotificationChannel() {
    return this.to('PutNotificationChannel');
  }

  /**
   * Grants permission to create an AWS Firewall Manager policy
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
    return this.to('PutPolicy');
  }

  /**
   * Grants permission to creates an AWS Firewall Manager protocols list
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
    return this.to('PutProtocolsList');
  }

  /**
   * Grants permission to create an AWS Firewall Manager resource set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutResourceSet.html
   */
  public toPutResourceSet() {
    return this.to('PutResourceSet');
  }

  /**
   * Grants permission to add a Tag to a given resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a Tag from a given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateAdminAccount',
      'AssociateThirdPartyFirewall',
      'BatchAssociateResource',
      'BatchDisassociateResource',
      'DeleteAppsList',
      'DeleteNotificationChannel',
      'DeletePolicy',
      'DeleteProtocolsList',
      'DeleteResourceSet',
      'DisassociateAdminAccount',
      'DisassociateThirdPartyFirewall',
      'PutAdminAccount',
      'PutAppsList',
      'PutNotificationChannel',
      'PutPolicy',
      'PutProtocolsList',
      'PutResourceSet'
    ],
    Read: [
      'GetAdminAccount',
      'GetAdminScope',
      'GetAppsList',
      'GetComplianceDetail',
      'GetNotificationChannel',
      'GetPolicy',
      'GetProtectionStatus',
      'GetProtocolsList',
      'GetResourceSet',
      'GetThirdPartyFirewallAssociationStatus',
      'GetViolationDetails',
      'ListTagsForResource'
    ],
    List: [
      'ListAdminAccountsForOrganization',
      'ListAdminsManagingAccount',
      'ListAppsLists',
      'ListComplianceStatus',
      'ListDiscoveredResources',
      'ListMemberAccounts',
      'ListPolicies',
      'ListProtocolsLists',
      'ListResourceSetResources',
      'ListResourceSets',
      'ListThirdPartyFirewallFirewallPolicies'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fms:${ region || this.defaultRegion }:${ account || this.defaultAccount }:policy/${ id }`);
  }

  /**
   * Adds a resource of type applications-list to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AppsListData.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationsList(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fms:${ region || this.defaultRegion }:${ account || this.defaultAccount }:applications-list/${ id }`);
  }

  /**
   * Adds a resource of type protocols-list to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ProtocolsListData.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProtocolsList(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fms:${ region || this.defaultRegion }:${ account || this.defaultAccount }:protocols-list/${ id }`);
  }

  /**
   * Adds a resource of type resource-set to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ResourceSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourceSet(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fms:${ region || this.defaultRegion }:${ account || this.defaultAccount }:resource-set/${ id }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toPutAppsList()
   * - .toPutPolicy()
   * - .toPutProtocolsList()
   * - .toPutResourceSet()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeletePolicy()
   * - .toDeleteResourceSet()
   *
   * Applies to resource types:
   * - policy
   * - applications-list
   * - protocols-list
   * - resource-set
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toPutAppsList()
   * - .toPutPolicy()
   * - .toPutProtocolsList()
   * - .toPutResourceSet()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
