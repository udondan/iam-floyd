import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ses-mailmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservice-mailmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SesMailmanager extends PolicyStatement {
  public servicePrefix = 'ses';

  /**
   * Statement provider for service [ses-mailmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservice-mailmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure vended log delivery for Mail Manager resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/ses/latest/dg/eb-policies.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to create an addon instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAddonSubscriptionArn()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateAddonInstance.html
   */
  public toCreateAddonInstance() {
    return this.to('CreateAddonInstance');
  }

  /**
   * Grants permission to create an addon subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateAddonSubscription.html
   */
  public toCreateAddonSubscription() {
    return this.to('CreateAddonSubscription');
  }

  /**
   * Grants permission to create an address list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateAddressList.html
   */
  public toCreateAddressList() {
    return this.to('CreateAddressList');
  }

  /**
   * Grants permission to create an import job on an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateAddressListImportJob.html
   */
  public toCreateAddressListImportJob() {
    return this.to('CreateAddressListImportJob');
  }

  /**
   * Grants permission to create an archive
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateArchive.html
   */
  public toCreateArchive() {
    return this.to('CreateArchive');
  }

  /**
   * Grants permission to create an ingress point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifMailManagerRuleSetArn()
   * - .ifMailManagerTrafficPolicyArn()
   *
   * Dependent actions:
   * - ec2:DescribeVpcEndpoints
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateIngressPoint.html
   */
  public toCreateIngressPoint() {
    return this.to('CreateIngressPoint');
  }

  /**
   * Grants permission to create a SMTP relay
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateRelay.html
   */
  public toCreateRelay() {
    return this.to('CreateRelay');
  }

  /**
   * Grants permission to create a rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateRuleSet.html
   */
  public toCreateRuleSet() {
    return this.to('CreateRuleSet');
  }

  /**
   * Grants permission to create a traffic policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_CreateTrafficPolicy.html
   */
  public toCreateTrafficPolicy() {
    return this.to('CreateTrafficPolicy');
  }

  /**
   * Grants permission to delete an addon instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteAddonInstance.html
   */
  public toDeleteAddonInstance() {
    return this.to('DeleteAddonInstance');
  }

  /**
   * Grants permission to delete an addon subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteAddonSubscription.html
   */
  public toDeleteAddonSubscription() {
    return this.to('DeleteAddonSubscription');
  }

  /**
   * Grants permission to delete an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteAddressList.html
   */
  public toDeleteAddressList() {
    return this.to('DeleteAddressList');
  }

  /**
   * Grants permission to delete an archive
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteArchive.html
   */
  public toDeleteArchive() {
    return this.to('DeleteArchive');
  }

  /**
   * Grants permission to delete an ingress point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteIngressPoint.html
   */
  public toDeleteIngressPoint() {
    return this.to('DeleteIngressPoint');
  }

  /**
   * Grants permission to delete a SMTP relay
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteRelay.html
   */
  public toDeleteRelay() {
    return this.to('DeleteRelay');
  }

  /**
   * Grants permission to delete a rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteRuleSet.html
   */
  public toDeleteRuleSet() {
    return this.to('DeleteRuleSet');
  }

  /**
   * Grants permission to delete a traffic point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeleteTrafficPolicy.html
   */
  public toDeleteTrafficPolicy() {
    return this.to('DeleteTrafficPolicy');
  }

  /**
   * Grants permission to remove a member from an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_DeregisterMemberFromAddressList.html
   */
  public toDeregisterMemberFromAddressList() {
    return this.to('DeregisterMemberFromAddressList');
  }

  /**
   * Grants permission to get information about an addon instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetAddonInstance.html
   */
  public toGetAddonInstance() {
    return this.to('GetAddonInstance');
  }

  /**
   * Grants permission to get information about an addon subscription
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetAddonSubscription.html
   */
  public toGetAddonSubscription() {
    return this.to('GetAddonSubscription');
  }

  /**
   * Grants permission to get information about an address list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetAddressList.html
   */
  public toGetAddressList() {
    return this.to('GetAddressList');
  }

  /**
   * Grants permission to get information about an import job on an address list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetAddressListImportJob.html
   */
  public toGetAddressListImportJob() {
    return this.to('GetAddressListImportJob');
  }

  /**
   * Grants permission to get information about an archive
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchive.html
   */
  public toGetArchive() {
    return this.to('GetArchive');
  }

  /**
   * Grants permission to get information about an archive export
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchiveExport.html
   */
  public toGetArchiveExport() {
    return this.to('GetArchiveExport');
  }

  /**
   * Grants permission to retrieve archived message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchiveMessage.html
   */
  public toGetArchiveMessage() {
    return this.to('GetArchiveMessage');
  }

  /**
   * Grants permission to retrieve archived message content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchiveMessageContent.html
   */
  public toGetArchiveMessageContent() {
    return this.to('GetArchiveMessageContent');
  }

  /**
   * Grants permission to get information about a search
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchiveSearch.html
   */
  public toGetArchiveSearch() {
    return this.to('GetArchiveSearch');
  }

  /**
   * Grants permission to get information about search results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetArchiveSearchResults.html
   */
  public toGetArchiveSearchResults() {
    return this.to('GetArchiveSearchResults');
  }

  /**
   * Grants permission to get information about an ingress point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetIngressPoint.html
   */
  public toGetIngressPoint() {
    return this.to('GetIngressPoint');
  }

  /**
   * Grants permission to get information about a member in an address list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetMemberOfAddressList.html
   */
  public toGetMemberOfAddressList() {
    return this.to('GetMemberOfAddressList');
  }

  /**
   * Grants permission to get information about a SMTP relay
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetRelay.html
   */
  public toGetRelay() {
    return this.to('GetRelay');
  }

  /**
   * Grants permission to get information about a rule set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetRuleSet.html
   */
  public toGetRuleSet() {
    return this.to('GetRuleSet');
  }

  /**
   * Grants permission to get information about a traffic policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_GetTrafficPolicy.html
   */
  public toGetTrafficPolicy() {
    return this.to('GetTrafficPolicy');
  }

  /**
   * Grants permission to list all of the addon instances associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListAddonInstances.html
   */
  public toListAddonInstances() {
    return this.to('ListAddonInstances');
  }

  /**
   * Grants permission to list all of the addon subscriptions associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListAddonSubscriptions.html
   */
  public toListAddonSubscriptions() {
    return this.to('ListAddonSubscriptions');
  }

  /**
   * Grants permission to list all of the import jobs associated with an address list
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListAddressListImportJobs.html
   */
  public toListAddressListImportJobs() {
    return this.to('ListAddressListImportJobs');
  }

  /**
   * Grants permission to list all of the address lists associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListAddressLists.html
   */
  public toListAddressLists() {
    return this.to('ListAddressLists');
  }

  /**
   * Grants permission to list all of the archive exports associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListArchiveExports.html
   */
  public toListArchiveExports() {
    return this.to('ListArchiveExports');
  }

  /**
   * Grants permission to list all of the archive searches associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListArchiveSearches.html
   */
  public toListArchiveSearches() {
    return this.to('ListArchiveSearches');
  }

  /**
   * Grants permission to list all of the archives associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListArchives.html
   */
  public toListArchives() {
    return this.to('ListArchives');
  }

  /**
   * Grants permission to list all of the ingress points associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListIngressPoints.html
   */
  public toListIngressPoints() {
    return this.to('ListIngressPoints');
  }

  /**
   * Grants permission to list all of the members associated with an address list
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListMembersOfAddressList.html
   */
  public toListMembersOfAddressList() {
    return this.to('ListMembersOfAddressList');
  }

  /**
   * Grants permission to list all of the SMTP relays associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListRelays.html
   */
  public toListRelays() {
    return this.to('ListRelays');
  }

  /**
   * Grants permission to list all of the rule sets associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListRuleSets.html
   */
  public toListRuleSets() {
    return this.to('ListRuleSets');
  }

  /**
   * Grants permission to list all of the tags associated with the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all of the traffic policies associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_ListTrafficPolicies.html
   */
  public toListTrafficPolicies() {
    return this.to('ListTrafficPolicies');
  }

  /**
   * Grants permission to add a member to an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_RegisterMemberToAddressList.html
   */
  public toRegisterMemberToAddressList() {
    return this.to('RegisterMemberToAddressList');
  }

  /**
   * Grants permission to start an import job on an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StartAddressListImportJob.html
   */
  public toStartAddressListImportJob() {
    return this.to('StartAddressListImportJob');
  }

  /**
   * Grants permission to start an archive export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StartArchiveExport.html
   */
  public toStartArchiveExport() {
    return this.to('StartArchiveExport');
  }

  /**
   * Grants permission to start an archive search
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StartArchiveSearch.html
   */
  public toStartArchiveSearch() {
    return this.to('StartArchiveSearch');
  }

  /**
   * Grants permission to stop an ongoing import job on an address list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StopAddressListImportJob.html
   */
  public toStopAddressListImportJob() {
    return this.to('StopAddressListImportJob');
  }

  /**
   * Grants permission to stop archive export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StopArchiveExport.html
   */
  public toStopArchiveExport() {
    return this.to('StopArchiveExport');
  }

  /**
   * Grants permission to stop archive search
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_StopArchiveSearch.html
   */
  public toStopArchiveSearch() {
    return this.to('StopArchiveSearch');
  }

  /**
   * Grants permission to add one or more tags (keys and values) to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags (keys and values) from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an archive
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UpdateArchive.html
   */
  public toUpdateArchive() {
    return this.to('UpdateArchive');
  }

  /**
   * Grants permission to update an ingress point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifMailManagerTrafficPolicyArn()
   * - .ifMailManagerRuleSetArn()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UpdateIngressPoint.html
   */
  public toUpdateIngressPoint() {
    return this.to('UpdateIngressPoint');
  }

  /**
   * Grants permission to update a SMTP relay
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UpdateRelay.html
   */
  public toUpdateRelay() {
    return this.to('UpdateRelay');
  }

  /**
   * Grants permission to update a rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UpdateRuleSet.html
   */
  public toUpdateRuleSet() {
    return this.to('UpdateRuleSet');
  }

  /**
   * Grants permission to update a traffic policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_UpdateTrafficPolicy.html
   */
  public toUpdateTrafficPolicy() {
    return this.to('UpdateTrafficPolicy');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Write: [
      'CreateAddonInstance',
      'CreateAddonSubscription',
      'CreateAddressList',
      'CreateAddressListImportJob',
      'CreateArchive',
      'CreateIngressPoint',
      'CreateRelay',
      'CreateRuleSet',
      'CreateTrafficPolicy',
      'DeleteAddonInstance',
      'DeleteAddonSubscription',
      'DeleteAddressList',
      'DeleteArchive',
      'DeleteIngressPoint',
      'DeleteRelay',
      'DeleteRuleSet',
      'DeleteTrafficPolicy',
      'DeregisterMemberFromAddressList',
      'RegisterMemberToAddressList',
      'StartAddressListImportJob',
      'StartArchiveExport',
      'StartArchiveSearch',
      'StopAddressListImportJob',
      'StopArchiveExport',
      'StopArchiveSearch',
      'UpdateArchive',
      'UpdateIngressPoint',
      'UpdateRelay',
      'UpdateRuleSet',
      'UpdateTrafficPolicy'
    ],
    Read: [
      'GetAddonInstance',
      'GetAddonSubscription',
      'GetAddressList',
      'GetAddressListImportJob',
      'GetArchive',
      'GetArchiveExport',
      'GetArchiveMessage',
      'GetArchiveMessageContent',
      'GetArchiveSearch',
      'GetArchiveSearchResults',
      'GetIngressPoint',
      'GetMemberOfAddressList',
      'GetRelay',
      'GetRuleSet',
      'GetTrafficPolicy',
      'ListTagsForResource'
    ],
    List: [
      'ListAddonInstances',
      'ListAddonSubscriptions',
      'ListAddressListImportJobs',
      'ListAddressLists',
      'ListArchiveExports',
      'ListArchiveSearches',
      'ListArchives',
      'ListIngressPoints',
      'ListMembersOfAddressList',
      'ListRelays',
      'ListRuleSets',
      'ListTrafficPolicies'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type addon-instance to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_AddonInstance.html
   *
   * @param addonInstanceId - Identifier for the addonInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAddonInstance(addonInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:addon-instance/${ addonInstanceId }`);
  }

  /**
   * Adds a resource of type addon-subscription to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_AddonSubscription.html
   *
   * @param addonSubscriptionId - Identifier for the addonSubscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAddonSubscription(addonSubscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:addon-subscription/${ addonSubscriptionId }`);
  }

  /**
   * Adds a resource of type mailmanager-archive to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_Archive.html
   *
   * @param archiveId - Identifier for the archiveId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMailmanagerArchive(archiveId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-archive/${ archiveId }`);
  }

  /**
   * Adds a resource of type mailmanager-ingress-point to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_IngressPoint.html
   *
   * @param ingressPointId - Identifier for the ingressPointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifMailManagerIngressPointType()
   */
  public onMailmanagerIngressPoint(ingressPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-ingress-point/${ ingressPointId }`);
  }

  /**
   * Adds a resource of type mailmanager-smtp-relay to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_Relay.html
   *
   * @param relayId - Identifier for the relayId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMailmanagerSmtpRelay(relayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-smtp-relay/${ relayId }`);
  }

  /**
   * Adds a resource of type mailmanager-rule-set to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_RuleSet.html
   *
   * @param ruleSetId - Identifier for the ruleSetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMailmanagerRuleSet(ruleSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-rule-set/${ ruleSetId }`);
  }

  /**
   * Adds a resource of type mailmanager-traffic-policy to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_TrafficPolicy.html
   *
   * @param trafficPolicyId - Identifier for the trafficPolicyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMailmanagerTrafficPolicy(trafficPolicyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-traffic-policy/${ trafficPolicyId }`);
  }

  /**
   * Adds a resource of type mailmanager-address-list to the statement
   *
   * https://docs.aws.amazon.com/sesmailmanager/latest/APIReference/API_AddressList.html
   *
   * @param addressListId - Identifier for the addressListId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMailmanagerAddressList(addressListId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ses:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mailmanager-address-list/${ addressListId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAddonInstance()
   * - .toCreateAddonSubscription()
   * - .toCreateAddressList()
   * - .toCreateArchive()
   * - .toCreateIngressPoint()
   * - .toCreateRelay()
   * - .toCreateRuleSet()
   * - .toCreateTrafficPolicy()
   * - .toDeleteAddonInstance()
   * - .toDeleteAddonSubscription()
   * - .toDeleteArchive()
   * - .toDeleteIngressPoint()
   * - .toDeleteRelay()
   * - .toDeleteRuleSet()
   * - .toDeleteTrafficPolicy()
   * - .toGetAddonInstance()
   * - .toGetAddonSubscription()
   * - .toGetArchive()
   * - .toGetIngressPoint()
   * - .toGetRelay()
   * - .toGetRuleSet()
   * - .toGetTrafficPolicy()
   * - .toTagResource()
   * - .toUpdateArchive()
   * - .toUpdateIngressPoint()
   * - .toUpdateRelay()
   * - .toUpdateRuleSet()
   * - .toUpdateTrafficPolicy()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAddressListImportJob()
   * - .toDeleteAddressList()
   * - .toDeregisterMemberFromAddressList()
   * - .toGetAddressList()
   * - .toGetAddressListImportJob()
   * - .toGetMemberOfAddressList()
   * - .toListAddressListImportJobs()
   * - .toListMembersOfAddressList()
   * - .toRegisterMemberToAddressList()
   * - .toStartAddressListImportJob()
   * - .toStopAddressListImportJob()
   *
   * Applies to resource types:
   * - addon-instance
   * - addon-subscription
   * - mailmanager-archive
   * - mailmanager-ingress-point
   * - mailmanager-smtp-relay
   * - mailmanager-rule-set
   * - mailmanager-traffic-policy
   * - mailmanager-address-list
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAddonInstance()
   * - .toCreateAddonSubscription()
   * - .toCreateAddressList()
   * - .toCreateArchive()
   * - .toCreateIngressPoint()
   * - .toCreateRelay()
   * - .toCreateRuleSet()
   * - .toCreateTrafficPolicy()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by SES Addon Subscription ARN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsesmailmanager.html#amazonsesmailmanager-policy-keys
   *
   * Applies to actions:
   * - .toCreateAddonInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAddonSubscriptionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`AddonSubscriptionArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by SES Mail Manager ingress point type, for example OPEN or AUTH
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsesmailmanager.html#amazonsesmailmanager-policy-keys
   *
   * Applies to resource types:
   * - mailmanager-ingress-point
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMailManagerIngressPointType(value: string | string[], operator?: Operator | string) {
    return this.if(`MailManagerIngressPointType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by SES Mail Manager rule set ARN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsesmailmanager.html#amazonsesmailmanager-policy-keys
   *
   * Applies to actions:
   * - .toCreateIngressPoint()
   * - .toUpdateIngressPoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifMailManagerRuleSetArn(value: string | string[], operator?: Operator | string) {
    return this.if(`MailManagerRuleSetArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by SES Mail Manager traffic policy ARN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsesmailmanager.html#amazonsesmailmanager-policy-keys
   *
   * Applies to actions:
   * - .toCreateIngressPoint()
   * - .toUpdateIngressPoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifMailManagerTrafficPolicyArn(value: string | string[], operator?: Operator | string) {
    return this.if(`MailManagerTrafficPolicyArn`, value, operator ?? 'ArnLike');
  }
}
