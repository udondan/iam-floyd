import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a list of members (users or groups) to a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toAddMembersToGroup() {
    return this.to('AddMembersToGroup');
  }

  /**
   * Adds a member (user or group) to the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html
   */
  public toAssociateDelegateToResource() {
    return this.to('AssociateDelegateToResource');
  }

  /**
   * Adds a member (user or group) to the group's set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html
   */
  public toAssociateMemberToGroup() {
    return this.to('AssociateMemberToGroup');
  }

  /**
   * Cancels a currently running mailbox export job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CancelMailboxExportJob.html
   */
  public toCancelMailboxExportJob() {
    return this.to('CancelMailboxExportJob');
  }

  /**
   * Adds an alias to the set of a given member (user or group) of WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Create an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateInboundMailFlowRule() {
    return this.to('CreateInboundMailFlowRule');
  }

  /**
   * Creates a mail domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toCreateMailDomain() {
    return this.to('CreateMailDomain');
  }

  /**
   * Creates a user in the directory and the WorkMail storage but does not enable the user for mail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toCreateMailUser() {
    return this.to('CreateMailUser');
  }

  /**
   * Creates a new Amazon WorkMail organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateOrganization.html
   */
  public toCreateOrganization() {
    return this.to('CreateOrganization');
  }

  /**
   * Create an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateOutboundMailFlowRule() {
    return this.to('CreateOutboundMailFlowRule');
  }

  /**
   * Creates a new WorkMail resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html
   */
  public toCreateResource() {
    return this.to('CreateResource');
  }

  /**
   * Register an SMTP device against a WorkMail organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toCreateSmtpGateway() {
    return this.to('CreateSmtpGateway');
  }

  /**
   * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Deletes an access control rule for the specified WorkMail organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html
   */
  public toDeleteAccessControlRule() {
    return this.to('DeleteAccessControlRule');
  }

  /**
   * Remove one or more specified aliases from a set of aliases for a given user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Deletes a group from WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Remove an inbound email flow rule to no longer apply to emails sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteInboundMailFlowRule() {
    return this.to('DeleteInboundMailFlowRule');
  }

  /**
   * Removes an unused mail domain from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html
   */
  public toDeleteMailDomain() {
    return this.to('DeleteMailDomain');
  }

  /**
   * Deletes permissions granted to a member (user or group).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html
   */
  public toDeleteMailboxPermissions() {
    return this.to('DeleteMailboxPermissions');
  }

  /**
   * Removes a mobile device from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device
   */
  public toDeleteMobileDevice() {
    return this.to('DeleteMobileDevice');
  }

  /**
   * Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteOrganization.html
   */
  public toDeleteOrganization() {
    return this.to('DeleteOrganization');
  }

  /**
   * Remove an outbound email flow rule to no longer apply to emails sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteOutboundMailFlowRule() {
    return this.to('DeleteOutboundMailFlowRule');
  }

  /**
   * Deletes the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html
   */
  public toDeleteResource() {
    return this.to('DeleteResource');
  }

  /**
   * Deletes the retention policy based on the supplied organization and policy identifiers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    return this.to('DeleteRetentionPolicy');
  }

  /**
   * Remove an SMTP device from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDeleteSmtpGateway() {
    return this.to('DeleteSmtpGateway');
  }

  /**
   * Deletes a user from WorkMail and all subsequent systems. The action cannot be undone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Mark a user, group, or resource as no longer used in WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html
   */
  public toDeregisterFromWorkMail() {
    return this.to('DeregisterFromWorkMail');
  }

  /**
   * Shows a list of directories available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeDirectories() {
    return this.to('DescribeDirectories');
  }

  /**
   * Returns the data available for the group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Returns the details of an inbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toDescribeInboundMailFlowRule() {
    return this.to('DescribeInboundMailFlowRule');
  }

  /**
   * Shows a list of KMS Keys available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeKmsKeys() {
    return this.to('DescribeKmsKeys');
  }

  /**
   * Shows the details of all mail domains associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toDescribeMailDomains() {
    return this.to('DescribeMailDomains');
  }

  /**
   * Shows the details of all groups associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toDescribeMailGroups() {
    return this.to('DescribeMailGroups');
  }

  /**
   * Shows the details of all users associated with the orgaization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toDescribeMailUsers() {
    return this.to('DescribeMailUsers');
  }

  /**
   * Retrieve details of a mailbox export job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeMailboxExportJob.html
   */
  public toDescribeMailboxExportJob() {
    return this.to('DescribeMailboxExportJob');
  }

  /**
   * Provides more information regarding a given organization based on its identifier.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html
   */
  public toDescribeOrganization() {
    return this.to('DescribeOrganization');
  }

  /**
   * Shows a summary of all organizations associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   */
  public toDescribeOrganizations() {
    return this.to('DescribeOrganizations');
  }

  /**
   * Returns the details of an outbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toDescribeOutboundMailFlowRule() {
    return this.to('DescribeOutboundMailFlowRule');
  }

  /**
   * Returns the data available for the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html
   */
  public toDescribeResource() {
    return this.to('DescribeResource');
  }

  /**
   * Returns the details of an SMTP device registered against an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDescribeSmtpGateway() {
    return this.to('DescribeSmtpGateway');
  }

  /**
   * Provides information regarding the user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Disable a mail group when it is not being used and, to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html
   */
  public toDisableMailGroups() {
    return this.to('DisableMailGroups');
  }

  /**
   * Disable a user mailbox when it is no longer being used, and to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox
   */
  public toDisableMailUsers() {
    return this.to('DisableMailUsers');
  }

  /**
   * Removes a member from the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html
   */
  public toDisassociateDelegateFromResource() {
    return this.to('DisassociateDelegateFromResource');
  }

  /**
   * Removes a member from a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html
   */
  public toDisassociateMemberFromGroup() {
    return this.to('DisassociateMemberFromGroup');
  }

  /**
   * Enable a mail domain in the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toEnableMailDomain() {
    return this.to('EnableMailDomain');
  }

  /**
   * Enable a mail group after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html
   */
  public toEnableMailGroups() {
    return this.to('EnableMailGroups');
  }

  /**
   * Enable a user's mailbox after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user
   */
  public toEnableMailUsers() {
    return this.to('EnableMailUsers');
  }

  /**
   * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html
   */
  public toGetAccessControlEffect() {
    return this.to('GetAccessControlEffect');
  }

  /**
   * Retrieves the retention policy associated at an organizational level.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html
   */
  public toGetDefaultRetentionPolicy() {
    return this.to('GetDefaultRetentionPolicy');
  }

  /**
   * Returns journaling and fallback email addresses configured for email journaling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toGetJournalingRules() {
    return this.to('GetJournalingRules');
  }

  /**
   * Get the details of the mail domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toGetMailDomainDetails() {
    return this.to('GetMailDomainDetails');
  }

  /**
   * Get the details of the mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toGetMailGroupDetails() {
    return this.to('GetMailGroupDetails');
  }

  /**
   * Get the details of the user's mailbox and account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toGetMailUserDetails() {
    return this.to('GetMailUserDetails');
  }

  /**
   * Returns the details of the user's mailbox.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html
   */
  public toGetMailboxDetails() {
    return this.to('GetMailboxDetails');
  }

  /**
   * Get the details of the mobile device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDeviceDetails() {
    return this.to('GetMobileDeviceDetails');
  }

  /**
   * Get a list of the mobile devices associated with the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDevicesForUser() {
    return this.to('GetMobileDevicesForUser');
  }

  /**
   * Get the details of the mobile device policy associated with the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toGetMobilePolicyDetails() {
    return this.to('GetMobilePolicyDetails');
  }

  /**
   * Lists the access control rules for the specified organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html
   */
  public toListAccessControlRules() {
    return this.to('ListAccessControlRules');
  }

  /**
   * Creates a paginated call to list the aliases associated with a given entity.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Returns an overview of the members of a group. Users and groups can be members of a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html
   */
  public toListGroupMembers() {
    return this.to('ListGroupMembers');
  }

  /**
   * Returns summaries of the organization's groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Returns a list of inbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toListInboundMailFlowRules() {
    return this.to('ListInboundMailFlowRules');
  }

  /**
   * List mailbox export jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxExportJobs.html
   */
  public toListMailboxExportJobs() {
    return this.to('ListMailboxExportJobs');
  }

  /**
   * Lists the mailbox permissions associated with a user, group, or resource mailbox.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html
   */
  public toListMailboxPermissions() {
    return this.to('ListMailboxPermissions');
  }

  /**
   * Get a list of all the members in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toListMembersInMailGroup() {
    return this.to('ListMembersInMailGroup');
  }

  /**
   * Returns summaries of the customer's non-deleted organizations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html
   */
  public toListOrganizations() {
    return this.to('ListOrganizations');
  }

  /**
   * Returns a list of outbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toListOutboundMailFlowRules() {
    return this.to('ListOutboundMailFlowRules');
  }

  /**
   * Lists the delegates associated with a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html
   */
  public toListResourceDelegates() {
    return this.to('ListResourceDelegates');
  }

  /**
   * Returns summaries of the organization's resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Returns a list of SMTP devices registered against the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toListSmtpGateways() {
    return this.to('ListSmtpGateways');
  }

  /**
   * Grants permission to list the tags applied to an Amazon WorkMail organization resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns summaries of the organization's users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html
   */
  public toPutAccessControlRule() {
    return this.to('PutAccessControlRule');
  }

  /**
   * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html
   */
  public toPutMailboxPermissions() {
    return this.to('PutMailboxPermissions');
  }

  /**
   * Adds or updates the retention policy for the specified organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    return this.to('PutRetentionPolicy');
  }

  /**
   * Registers an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html
   */
  public toRegisterToWorkMail() {
    return this.to('RegisterToWorkMail');
  }

  /**
   * Remove members from a mail group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toRemoveMembersFromGroup() {
    return this.to('RemoveMembersFromGroup');
  }

  /**
   * Allows the administrator to reset the password for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html
   */
  public toResetPassword() {
    return this.to('ResetPassword');
  }

  /**
   * Reset the password for a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Prefix search to find a specific user in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toSearchMembers() {
    return this.to('SearchMembers');
  }

  /**
   * Mark a user as being an administrator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toSetAdmin() {
    return this.to('SetAdmin');
  }

  /**
   * Set the default mail domain for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html
   */
  public toSetDefaultMailDomain() {
    return this.to('SetDefaultMailDomain');
  }

  /**
   * Set journaling and fallback email addresses for email journaling
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toSetJournalingRules() {
    return this.to('SetJournalingRules');
  }

  /**
   * Set the details of the mail group which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html
   */
  public toSetMailGroupDetails() {
    return this.to('SetMailGroupDetails');
  }

  /**
   * Set the details for the user account which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toSetMailUserDetails() {
    return this.to('SetMailUserDetails');
  }

  /**
   * Set the details of a mobile policy associated with the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toSetMobilePolicyDetails() {
    return this.to('SetMobilePolicyDetails');
  }

  /**
   * Start a new mailbox export job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_StartMailboxExportJob.html
   */
  public toStartMailboxExportJob() {
    return this.to('StartMailboxExportJob');
  }

  /**
   * Grants permission to tag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Test what inbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestInboundMailFlowRules() {
    return this.to('TestInboundMailFlowRules');
  }

  /**
   * Test what outbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestOutboundMailFlowRules() {
    return this.to('TestOutboundMailFlowRules');
  }

  /**
   * Grants permission to untag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Update the details of an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateInboundMailFlowRule() {
    return this.to('UpdateInboundMailFlowRule');
  }

  /**
   * Updates the maximum size (in MB) of the user's mailbox.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html
   */
  public toUpdateMailboxQuota() {
    return this.to('UpdateMailboxQuota');
  }

  /**
   * Update the details of an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateOutboundMailFlowRule() {
    return this.to('UpdateOutboundMailFlowRule');
  }

  /**
   * Updates the primary email for a user, group, or resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html
   */
  public toUpdatePrimaryEmailAddress() {
    return this.to('UpdatePrimaryEmailAddress');
  }

  /**
   * Updates data for the resource. To retrieve the latest information, it must be preceded by a DescribeResource call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  /**
   * Update the details of an existing SMTP device registered against an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toUpdateSmtpGateway() {
    return this.to('UpdateSmtpGateway');
  }

  /**
   * Remotely wipe the mobile device associated with a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device
   */
  public toWipeMobileDevice() {
    return this.to('WipeMobileDevice');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddMembersToGroup",
      "AssociateDelegateToResource",
      "AssociateMemberToGroup",
      "CancelMailboxExportJob",
      "CreateAlias",
      "CreateGroup",
      "CreateInboundMailFlowRule",
      "CreateMailDomain",
      "CreateMailUser",
      "CreateOrganization",
      "CreateOutboundMailFlowRule",
      "CreateResource",
      "CreateSmtpGateway",
      "CreateUser",
      "DeleteAccessControlRule",
      "DeleteAlias",
      "DeleteGroup",
      "DeleteInboundMailFlowRule",
      "DeleteMailDomain",
      "DeleteMailboxPermissions",
      "DeleteMobileDevice",
      "DeleteOrganization",
      "DeleteOutboundMailFlowRule",
      "DeleteResource",
      "DeleteRetentionPolicy",
      "DeleteSmtpGateway",
      "DeleteUser",
      "DeregisterFromWorkMail",
      "DisableMailGroups",
      "DisableMailUsers",
      "DisassociateDelegateFromResource",
      "DisassociateMemberFromGroup",
      "EnableMailDomain",
      "EnableMailGroups",
      "EnableMailUsers",
      "PutAccessControlRule",
      "PutMailboxPermissions",
      "PutRetentionPolicy",
      "RegisterToWorkMail",
      "RemoveMembersFromGroup",
      "ResetPassword",
      "ResetUserPassword",
      "SetAdmin",
      "SetDefaultMailDomain",
      "SetJournalingRules",
      "SetMailGroupDetails",
      "SetMailUserDetails",
      "SetMobilePolicyDetails",
      "StartMailboxExportJob",
      "TestInboundMailFlowRules",
      "TestOutboundMailFlowRules",
      "UpdateInboundMailFlowRule",
      "UpdateMailboxQuota",
      "UpdateOutboundMailFlowRule",
      "UpdatePrimaryEmailAddress",
      "UpdateResource",
      "UpdateSmtpGateway",
      "WipeMobileDevice"
    ],
    "List": [
      "DescribeDirectories",
      "DescribeGroup",
      "DescribeKmsKeys",
      "DescribeMailDomains",
      "DescribeMailGroups",
      "DescribeMailUsers",
      "DescribeOrganization",
      "DescribeOrganizations",
      "DescribeResource",
      "DescribeUser",
      "ListAccessControlRules",
      "ListAliases",
      "ListGroupMembers",
      "ListGroups",
      "ListInboundMailFlowRules",
      "ListMailboxExportJobs",
      "ListMailboxPermissions",
      "ListOrganizations",
      "ListOutboundMailFlowRules",
      "ListResourceDelegates",
      "ListResources",
      "ListSmtpGateways",
      "ListTagsForResource",
      "ListUsers"
    ],
    "Read": [
      "DescribeInboundMailFlowRule",
      "DescribeMailboxExportJob",
      "DescribeOutboundMailFlowRule",
      "DescribeSmtpGateway",
      "GetAccessControlEffect",
      "GetDefaultRetentionPolicy",
      "GetJournalingRules",
      "GetMailDomainDetails",
      "GetMailGroupDetails",
      "GetMailUserDetails",
      "GetMailboxDetails",
      "GetMobileDeviceDetails",
      "GetMobileDevicesForUser",
      "GetMobilePolicyDetails",
      "ListMembersInMailGroup",
      "SearchMembers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:workmail:${Region}:${Account}:organization/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
