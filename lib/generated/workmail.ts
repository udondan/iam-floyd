import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [workmail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workmail extends PolicyStatement {
  public servicePrefix = 'workmail';

  /**
   * Statement provider for service [workmail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a list of members (users or groups) to a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toAddMembersToGroup() {
    return this.to('AddMembersToGroup');
  }

  /**
   * Grants permission to add a member (user or group) to the resource's set of delegates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html
   */
  public toAssociateDelegateToResource() {
    return this.to('AssociateDelegateToResource');
  }

  /**
   * Grants permission to add a member (user or group) to the group's set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html
   */
  public toAssociateMemberToGroup() {
    return this.to('AssociateMemberToGroup');
  }

  /**
   * Grants permission to cancel a currently running mailbox export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CancelMailboxExportJob.html
   */
  public toCancelMailboxExportJob() {
    return this.to('CancelMailboxExportJob');
  }

  /**
   * Grants permission to add an alias to the set of a given member (user or group) of WorkMail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Grants permission to create a group that can be used in WorkMail by calling the RegisterToWorkMail operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateInboundMailFlowRule() {
    return this.to('CreateInboundMailFlowRule');
  }

  /**
   * Grants permission to create a mail domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toCreateMailDomain() {
    return this.to('CreateMailDomain');
  }

  /**
   * Grants permission to create a user in the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toCreateMailUser() {
    return this.to('CreateMailUser');
  }

  /**
   * Grants permission to create a new mobile device access rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateMobileDeviceAccessRule.html
   */
  public toCreateMobileDeviceAccessRule() {
    return this.to('CreateMobileDeviceAccessRule');
  }

  /**
   * Grants permission to create a new Amazon WorkMail organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateOrganization.html
   */
  public toCreateOrganization() {
    return this.to('CreateOrganization');
  }

  /**
   * Grants permission to create an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateOutboundMailFlowRule() {
    return this.to('CreateOutboundMailFlowRule');
  }

  /**
   * Grants permission to create a new WorkMail resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html
   */
  public toCreateResource() {
    return this.to('CreateResource');
  }

  /**
   * Grants permission to register an SMTP gateway to a WorkMail organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toCreateSmtpGateway() {
    return this.to('CreateSmtpGateway');
  }

  /**
   * Grants permission to create a user, which can be enabled afterwards by calling the RegisterToWorkMail operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete an access control rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html
   */
  public toDeleteAccessControlRule() {
    return this.to('DeleteAccessControlRule');
  }

  /**
   * Grants permission to remove one or more specified aliases from a set of aliases for a given user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Grants permission to delete a group from WorkMail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to remove an inbound email flow rule to no longer apply to emails sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteInboundMailFlowRule() {
    return this.to('DeleteInboundMailFlowRule');
  }

  /**
   * Grants permission to remove an unused mail domain from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html
   */
  public toDeleteMailDomain() {
    return this.to('DeleteMailDomain');
  }

  /**
   * Grants permission to delete permissions granted to a member (user or group)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html
   */
  public toDeleteMailboxPermissions() {
    return this.to('DeleteMailboxPermissions');
  }

  /**
   * Grants permission to remove a mobile device from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device
   */
  public toDeleteMobileDevice() {
    return this.to('DeleteMobileDevice');
  }

  /**
   * Grants permission to delete a mobile device access override
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMobileDeviceAccessOverride.html
   */
  public toDeleteMobileDeviceAccessOverride() {
    return this.to('DeleteMobileDeviceAccessOverride');
  }

  /**
   * Grants permission to delete a mobile device access rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMobileDeviceAccessRule.html
   */
  public toDeleteMobileDeviceAccessRule() {
    return this.to('DeleteMobileDeviceAccessRule');
  }

  /**
   * Grants permission to delete an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteOrganization.html
   */
  public toDeleteOrganization() {
    return this.to('DeleteOrganization');
  }

  /**
   * Grants permission to remove an outbound email flow rule so that it no longer applies to emails sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteOutboundMailFlowRule() {
    return this.to('DeleteOutboundMailFlowRule');
  }

  /**
   * Grants permission to delete the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html
   */
  public toDeleteResource() {
    return this.to('DeleteResource');
  }

  /**
   * Grants permission to delete the retention policy based on the supplied organization and policy identifiers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    return this.to('DeleteRetentionPolicy');
  }

  /**
   * Grants permission to remove an SMTP gateway from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDeleteSmtpGateway() {
    return this.to('DeleteSmtpGateway');
  }

  /**
   * Grants permission to delete a user from WorkMail and all subsequent systems
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to mark a user, group, or resource as no longer used in WorkMail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html
   */
  public toDeregisterFromWorkMail() {
    return this.to('DeregisterFromWorkMail');
  }

  /**
   * Grants permission to deregister a mail domain from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterMailDomain.html
   */
  public toDeregisterMailDomain() {
    return this.to('DeregisterMailDomain');
  }

  /**
   * Grants permission to show a list of directories available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeDirectories() {
    return this.to('DescribeDirectories');
  }

  /**
   * Grants permission to read the details for a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to read the settings in a DMARC policy for a specified organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeInboundDmarcSettings.html
   */
  public toDescribeInboundDmarcSettings() {
    return this.to('DescribeInboundDmarcSettings');
  }

  /**
   * Grants permission to read the details of an inbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toDescribeInboundMailFlowRule() {
    return this.to('DescribeInboundMailFlowRule');
  }

  /**
   * Grants permission to show a list of KMS Keys available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeKmsKeys() {
    return this.to('DescribeKmsKeys');
  }

  /**
   * Grants permission to show the details of all mail domains associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toDescribeMailDomains() {
    return this.to('DescribeMailDomains');
  }

  /**
   * Grants permission to show the details of all groups associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toDescribeMailGroups() {
    return this.to('DescribeMailGroups');
  }

  /**
   * Grants permission to show the details of all users associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toDescribeMailUsers() {
    return this.to('DescribeMailUsers');
  }

  /**
   * Grants permission to retrieve details of a mailbox export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeMailboxExportJob.html
   */
  public toDescribeMailboxExportJob() {
    return this.to('DescribeMailboxExportJob');
  }

  /**
   * Grants permission to read details of an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html
   */
  public toDescribeOrganization() {
    return this.to('DescribeOrganization');
  }

  /**
   * Grants permission to show a summary of all organizations associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   */
  public toDescribeOrganizations() {
    return this.to('DescribeOrganizations');
  }

  /**
   * Grants permission to read the details of an outbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toDescribeOutboundMailFlowRule() {
    return this.to('DescribeOutboundMailFlowRule');
  }

  /**
   * Grants permission to read the details for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html
   */
  public toDescribeResource() {
    return this.to('DescribeResource');
  }

  /**
   * Grants permission to read the details of an SMTP gateway registered to an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDescribeSmtpGateway() {
    return this.to('DescribeSmtpGateway');
  }

  /**
   * Grants permission to read details for a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to disable a mail group when it is not being used, in order to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html
   */
  public toDisableMailGroups() {
    return this.to('DisableMailGroups');
  }

  /**
   * Grants permission to disable a user mailbox when it is no longer being used, in order to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox
   */
  public toDisableMailUsers() {
    return this.to('DisableMailUsers');
  }

  /**
   * Grants permission to remove a member from the resource's set of delegates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html
   */
  public toDisassociateDelegateFromResource() {
    return this.to('DisassociateDelegateFromResource');
  }

  /**
   * Grants permission to remove a member from a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html
   */
  public toDisassociateMemberFromGroup() {
    return this.to('DisassociateMemberFromGroup');
  }

  /**
   * Grants permission to enable a mail domain in the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toEnableMailDomain() {
    return this.to('EnableMailDomain');
  }

  /**
   * Grants permission to enable a mail group after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html
   */
  public toEnableMailGroups() {
    return this.to('EnableMailGroups');
  }

  /**
   * Grants permission to enable a user's mailbox after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user
   */
  public toEnableMailUsers() {
    return this.to('EnableMailUsers');
  }

  /**
   * Grants permission to get the effects of access control rules as they apply to a specified IPv4 address, access protocol action, or user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html
   */
  public toGetAccessControlEffect() {
    return this.to('GetAccessControlEffect');
  }

  /**
   * Grants permission to retrieve the retention policy associated at an organizational level
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html
   */
  public toGetDefaultRetentionPolicy() {
    return this.to('GetDefaultRetentionPolicy');
  }

  /**
   * Grants permission to read the configured journaling and fallback email addresses for email journaling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toGetJournalingRules() {
    return this.to('GetJournalingRules');
  }

  /**
   * Grants permission to retrieve details of a given mail domain in an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailDomain.html
   */
  public toGetMailDomain() {
    return this.to('GetMailDomain');
  }

  /**
   * Grants permission to get the details of the mail domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toGetMailDomainDetails() {
    return this.to('GetMailDomainDetails');
  }

  /**
   * Grants permission to get the details of the mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toGetMailGroupDetails() {
    return this.to('GetMailGroupDetails');
  }

  /**
   * Grants permission to get the details of the user's mailbox and account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toGetMailUserDetails() {
    return this.to('GetMailUserDetails');
  }

  /**
   * Grants permission to read the details of the user's mailbox
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html
   */
  public toGetMailboxDetails() {
    return this.to('GetMailboxDetails');
  }

  /**
   * Grants permission to simulate the effect of the mobile device access rules for the given attributes of a sample access event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMobileDeviceAccessEffect.html
   */
  public toGetMobileDeviceAccessEffect() {
    return this.to('GetMobileDeviceAccessEffect');
  }

  /**
   * Grants permission to retrieve a mobile device access override
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMobileDeviceAccessOverride.html
   */
  public toGetMobileDeviceAccessOverride() {
    return this.to('GetMobileDeviceAccessOverride');
  }

  /**
   * Grants permission to get the details of the mobile device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDeviceDetails() {
    return this.to('GetMobileDeviceDetails');
  }

  /**
   * Grants permission to get a list of the mobile devices associated with the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDevicesForUser() {
    return this.to('GetMobileDevicesForUser');
  }

  /**
   * Grants permission to get the details of the mobile device policy associated with the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toGetMobilePolicyDetails() {
    return this.to('GetMobilePolicyDetails');
  }

  /**
   * Grants permission to list the access control rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html
   */
  public toListAccessControlRules() {
    return this.to('ListAccessControlRules');
  }

  /**
   * Grants permission to list the aliases associated with a given entity
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Grants permission to read an overview of the members of a group. Users and groups can be members of a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html
   */
  public toListGroupMembers() {
    return this.to('ListGroupMembers');
  }

  /**
   * Grants permission to list summaries of the organization's groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list inbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toListInboundMailFlowRules() {
    return this.to('ListInboundMailFlowRules');
  }

  /**
   * Grants permission to list the mail domains for a given organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailDomains.html
   */
  public toListMailDomains() {
    return this.to('ListMailDomains');
  }

  /**
   * Grants permission to list mailbox export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxExportJobs.html
   */
  public toListMailboxExportJobs() {
    return this.to('ListMailboxExportJobs');
  }

  /**
   * Grants permission to list the mailbox permissions associated with a user, group, or resource mailbox
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html
   */
  public toListMailboxPermissions() {
    return this.to('ListMailboxPermissions');
  }

  /**
   * Grants permission to get a list of all the members in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toListMembersInMailGroup() {
    return this.to('ListMembersInMailGroup');
  }

  /**
   * Grants permission to list the mobile device access overrides
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMobileDeviceAccessOverrides.html
   */
  public toListMobileDeviceAccessOverrides() {
    return this.to('ListMobileDeviceAccessOverrides');
  }

  /**
   * Grants permission to list the mobile device access rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMobileDeviceAccessRules.html
   */
  public toListMobileDeviceAccessRules() {
    return this.to('ListMobileDeviceAccessRules');
  }

  /**
   * Grants permission to list the non-deleted organizations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html
   */
  public toListOrganizations() {
    return this.to('ListOrganizations');
  }

  /**
   * Grants permission to list outbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toListOutboundMailFlowRules() {
    return this.to('ListOutboundMailFlowRules');
  }

  /**
   * Grants permission to list the delegates associated with a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html
   */
  public toListResourceDelegates() {
    return this.to('ListResourceDelegates');
  }

  /**
   * Grants permission to list the organization's resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to list SMTP gateways registered to the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toListSmtpGateways() {
    return this.to('ListSmtpGateways');
  }

  /**
   * Grants permission to list the tags applied to an Amazon WorkMail organization resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the organization's users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to add a new access control rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html
   */
  public toPutAccessControlRule() {
    return this.to('PutAccessControlRule');
  }

  /**
   * Grants permission to enable or disable a DMARC policy for a given organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutInboundDmarcSettings.html
   */
  public toPutInboundDmarcSettings() {
    return this.to('PutInboundDmarcSettings');
  }

  /**
   * Grants permission to set permissions for a user, group, or resource, replacing any existing permissions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html
   */
  public toPutMailboxPermissions() {
    return this.to('PutMailboxPermissions');
  }

  /**
   * Grants permission to add or update a mobile device access override
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMobileDeviceAccessOverride.html
   */
  public toPutMobileDeviceAccessOverride() {
    return this.to('PutMobileDeviceAccessOverride');
  }

  /**
   * Grants permission to add or update the retention policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    return this.to('PutRetentionPolicy');
  }

  /**
   * Grants permission to register a new mail domain in an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterMailDomain.html
   */
  public toRegisterMailDomain() {
    return this.to('RegisterMailDomain');
  }

  /**
   * Grants permission to register an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html
   */
  public toRegisterToWorkMail() {
    return this.to('RegisterToWorkMail');
  }

  /**
   * Grants permission to remove members from a mail group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toRemoveMembersFromGroup() {
    return this.to('RemoveMembersFromGroup');
  }

  /**
   * Grants permission to allow the administrator to reset the password for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html
   */
  public toResetPassword() {
    return this.to('ResetPassword');
  }

  /**
   * Grants permission to reset the password for a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Grants permission to perform a prefix search to find a specific user in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toSearchMembers() {
    return this.to('SearchMembers');
  }

  /**
   * Grants permission to mark a user as being an administrator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toSetAdmin() {
    return this.to('SetAdmin');
  }

  /**
   * Grants permission to set the default mail domain for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html
   */
  public toSetDefaultMailDomain() {
    return this.to('SetDefaultMailDomain');
  }

  /**
   * Grants permission to set journaling and fallback email addresses for email journaling
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toSetJournalingRules() {
    return this.to('SetJournalingRules');
  }

  /**
   * Grants permission to set the details of the mail group which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html
   */
  public toSetMailGroupDetails() {
    return this.to('SetMailGroupDetails');
  }

  /**
   * Grants permission to set the details for the user account which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toSetMailUserDetails() {
    return this.to('SetMailUserDetails');
  }

  /**
   * Grants permission to set the details of a mobile policy associated with the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toSetMobilePolicyDetails() {
    return this.to('SetMobilePolicyDetails');
  }

  /**
   * Grants permission to start a new mailbox export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_StartMailboxExportJob.html
   */
  public toStartMailboxExportJob() {
    return this.to('StartMailboxExportJob');
  }

  /**
   * Grants permission to tag the specified Amazon WorkMail organization resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test what inbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestInboundMailFlowRules() {
    return this.to('TestInboundMailFlowRules');
  }

  /**
   * Grants permission to test what outbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestOutboundMailFlowRules() {
    return this.to('TestOutboundMailFlowRules');
  }

  /**
   * Grants permission to untag the specified Amazon WorkMail organization resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update which domain is the default domain for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateDefaultMailDomain.html
   */
  public toUpdateDefaultMailDomain() {
    return this.to('UpdateDefaultMailDomain');
  }

  /**
   * Grants permission to update the details of an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateInboundMailFlowRule() {
    return this.to('UpdateInboundMailFlowRule');
  }

  /**
   * Grants permission to update the maximum size (in MB) of the user's mailbox
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html
   */
  public toUpdateMailboxQuota() {
    return this.to('UpdateMailboxQuota');
  }

  /**
   * Grants permission to update a mobile device access rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMobileDeviceAccessRule.html
   */
  public toUpdateMobileDeviceAccessRule() {
    return this.to('UpdateMobileDeviceAccessRule');
  }

  /**
   * Grants permission to update the details of an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateOutboundMailFlowRule() {
    return this.to('UpdateOutboundMailFlowRule');
  }

  /**
   * Grants permission to update the primary email for a user, group, or resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html
   */
  public toUpdatePrimaryEmailAddress() {
    return this.to('UpdatePrimaryEmailAddress');
  }

  /**
   * Grants permission to update details for the resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  /**
   * Grants permission to update the details of an existing SMTP gateway registered to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toUpdateSmtpGateway() {
    return this.to('UpdateSmtpGateway');
  }

  /**
   * Grants permission to remotely wipe the mobile device associated with a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device
   */
  public toWipeMobileDevice() {
    return this.to('WipeMobileDevice');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddMembersToGroup',
      'AssociateDelegateToResource',
      'AssociateMemberToGroup',
      'CancelMailboxExportJob',
      'CreateAlias',
      'CreateGroup',
      'CreateInboundMailFlowRule',
      'CreateMailDomain',
      'CreateMailUser',
      'CreateMobileDeviceAccessRule',
      'CreateOrganization',
      'CreateOutboundMailFlowRule',
      'CreateResource',
      'CreateSmtpGateway',
      'CreateUser',
      'DeleteAccessControlRule',
      'DeleteAlias',
      'DeleteGroup',
      'DeleteInboundMailFlowRule',
      'DeleteMailDomain',
      'DeleteMailboxPermissions',
      'DeleteMobileDevice',
      'DeleteMobileDeviceAccessOverride',
      'DeleteMobileDeviceAccessRule',
      'DeleteOrganization',
      'DeleteOutboundMailFlowRule',
      'DeleteResource',
      'DeleteRetentionPolicy',
      'DeleteSmtpGateway',
      'DeleteUser',
      'DeregisterFromWorkMail',
      'DeregisterMailDomain',
      'DisableMailGroups',
      'DisableMailUsers',
      'DisassociateDelegateFromResource',
      'DisassociateMemberFromGroup',
      'EnableMailDomain',
      'EnableMailGroups',
      'EnableMailUsers',
      'PutAccessControlRule',
      'PutInboundDmarcSettings',
      'PutMailboxPermissions',
      'PutMobileDeviceAccessOverride',
      'PutRetentionPolicy',
      'RegisterMailDomain',
      'RegisterToWorkMail',
      'RemoveMembersFromGroup',
      'ResetPassword',
      'ResetUserPassword',
      'SetAdmin',
      'SetDefaultMailDomain',
      'SetJournalingRules',
      'SetMailGroupDetails',
      'SetMailUserDetails',
      'SetMobilePolicyDetails',
      'StartMailboxExportJob',
      'TestInboundMailFlowRules',
      'TestOutboundMailFlowRules',
      'UpdateDefaultMailDomain',
      'UpdateInboundMailFlowRule',
      'UpdateMailboxQuota',
      'UpdateMobileDeviceAccessRule',
      'UpdateOutboundMailFlowRule',
      'UpdatePrimaryEmailAddress',
      'UpdateResource',
      'UpdateSmtpGateway',
      'WipeMobileDevice'
    ],
    List: [
      'DescribeDirectories',
      'DescribeGroup',
      'DescribeKmsKeys',
      'DescribeMailDomains',
      'DescribeMailGroups',
      'DescribeMailUsers',
      'DescribeOrganization',
      'DescribeOrganizations',
      'DescribeResource',
      'DescribeUser',
      'ListAliases',
      'ListGroupMembers',
      'ListGroups',
      'ListInboundMailFlowRules',
      'ListMailDomains',
      'ListMailboxExportJobs',
      'ListMailboxPermissions',
      'ListOrganizations',
      'ListOutboundMailFlowRules',
      'ListResourceDelegates',
      'ListResources',
      'ListSmtpGateways',
      'ListTagsForResource',
      'ListUsers'
    ],
    Read: [
      'DescribeInboundDmarcSettings',
      'DescribeInboundMailFlowRule',
      'DescribeMailboxExportJob',
      'DescribeOutboundMailFlowRule',
      'DescribeSmtpGateway',
      'GetAccessControlEffect',
      'GetDefaultRetentionPolicy',
      'GetJournalingRules',
      'GetMailDomain',
      'GetMailDomainDetails',
      'GetMailGroupDetails',
      'GetMailUserDetails',
      'GetMailboxDetails',
      'GetMobileDeviceAccessEffect',
      'GetMobileDeviceAccessOverride',
      'GetMobileDeviceDetails',
      'GetMobileDevicesForUser',
      'GetMobilePolicyDetails',
      'ListAccessControlRules',
      'ListMembersInMailGroup',
      'ListMobileDeviceAccessOverrides',
      'ListMobileDeviceAccessRules',
      'SearchMembers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type organization to the statement
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganization(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:workmail:${ region || '*' }:${ account || '*' }:organization/${ resourceId }`);
  }
}
