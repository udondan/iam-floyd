import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [workmail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workmail extends PolicyStatement {
  public servicePrefix = 'workmail';

  /**
   * Statement provider for service [workmail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html).
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
    this.to('workmail:AddMembersToGroup');
    return this;
  }

  /**
   * Adds a member (user or group) to the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html
   */
  public toAssociateDelegateToResource() {
    this.to('workmail:AssociateDelegateToResource');
    return this;
  }

  /**
   * Adds a member (user or group) to the group's set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html
   */
  public toAssociateMemberToGroup() {
    this.to('workmail:AssociateMemberToGroup');
    return this;
  }

  /**
   * Adds an alias to the set of a given member (user or group) of WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html
   */
  public toCreateAlias() {
    this.to('workmail:CreateAlias');
    return this;
  }

  /**
   * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.to('workmail:CreateGroup');
    return this;
  }

  /**
   * Create an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateInboundMailFlowRule() {
    this.to('workmail:CreateInboundMailFlowRule');
    return this;
  }

  /**
   * Creates a mail domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toCreateMailDomain() {
    this.to('workmail:CreateMailDomain');
    return this;
  }

  /**
   * Creates a user in the directory and the WorkMail storage but does not enable the user for mail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toCreateMailUser() {
    this.to('workmail:CreateMailUser');
    return this;
  }

  /**
   * Creates an organization, either using an existing directory or creates a new directory on-the-fly. Also creates and enables the complementary mail domain. Optionally creates KMS key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toCreateOrganization() {
    this.to('workmail:CreateOrganization');
    return this;
  }

  /**
   * Create an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public toCreateOutboundMailFlowRule() {
    this.to('workmail:CreateOutboundMailFlowRule');
    return this;
  }

  /**
   * Creates a new WorkMail resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html
   */
  public toCreateResource() {
    this.to('workmail:CreateResource');
    return this;
  }

  /**
   * Register an SMTP device against a WorkMail organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toCreateSmtpGateway() {
    this.to('workmail:CreateSmtpGateway');
    return this;
  }

  /**
   * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('workmail:CreateUser');
    return this;
  }

  /**
   * Deletes an access control rule for the specified WorkMail organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html
   */
  public toDeleteAccessControlRule() {
    this.to('workmail:DeleteAccessControlRule');
    return this;
  }

  /**
   * Remove one or more specified aliases from a set of aliases for a given user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    this.to('workmail:DeleteAlias');
    return this;
  }

  /**
   * Deletes a group from WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.to('workmail:DeleteGroup');
    return this;
  }

  /**
   * Remove an inbound email flow rule to no longer apply to emails sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteInboundMailFlowRule() {
    this.to('workmail:DeleteInboundMailFlowRule');
    return this;
  }

  /**
   * Removes an unused mail domain from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html
   */
  public toDeleteMailDomain() {
    this.to('workmail:DeleteMailDomain');
    return this;
  }

  /**
   * Deletes permissions granted to a member (user or group).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html
   */
  public toDeleteMailboxPermissions() {
    this.to('workmail:DeleteMailboxPermissions');
    return this;
  }

  /**
   * Removes a mobile device from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device
   */
  public toDeleteMobileDevice() {
    this.to('workmail:DeleteMobileDevice');
    return this;
  }

  /**
   * Removes an organization from an account, either removing the directory from directory services or leaving it available for re-use
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html
   */
  public toDeleteOrganization() {
    this.to('workmail:DeleteOrganization');
    return this;
  }

  /**
   * Remove an outbound email flow rule to no longer apply to emails sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public toDeleteOutboundMailFlowRule() {
    this.to('workmail:DeleteOutboundMailFlowRule');
    return this;
  }

  /**
   * Deletes the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html
   */
  public toDeleteResource() {
    this.to('workmail:DeleteResource');
    return this;
  }

  /**
   * Deletes the retention policy based on the supplied organization and policy identifiers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    this.to('workmail:DeleteRetentionPolicy');
    return this;
  }

  /**
   * Remove an SMTP device from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDeleteSmtpGateway() {
    this.to('workmail:DeleteSmtpGateway');
    return this;
  }

  /**
   * Deletes a user from WorkMail and all subsequent systems. The action cannot be undone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('workmail:DeleteUser');
    return this;
  }

  /**
   * Mark a user, group, or resource as no longer used in WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html
   */
  public toDeregisterFromWorkMail() {
    this.to('workmail:DeregisterFromWorkMail');
    return this;
  }

  /**
   * Shows a list of directories available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeDirectories() {
    this.to('workmail:DescribeDirectories');
    return this;
  }

  /**
   * Returns the data available for the group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    this.to('workmail:DescribeGroup');
    return this;
  }

  /**
   * Returns the details of an inbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toDescribeInboundMailFlowRule() {
    this.to('workmail:DescribeInboundMailFlowRule');
    return this;
  }

  /**
   * Shows a list of KMS Keys available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public toDescribeKmsKeys() {
    this.to('workmail:DescribeKmsKeys');
    return this;
  }

  /**
   * Shows the details of all mail domains associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toDescribeMailDomains() {
    this.to('workmail:DescribeMailDomains');
    return this;
  }

  /**
   * Shows the details of all groups associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toDescribeMailGroups() {
    this.to('workmail:DescribeMailGroups');
    return this;
  }

  /**
   * Shows the details of all users associated with the orgaization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toDescribeMailUsers() {
    this.to('workmail:DescribeMailUsers');
    return this;
  }

  /**
   * Provides more information regarding a given organization based on its identifier.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html
   */
  public toDescribeOrganization() {
    this.to('workmail:DescribeOrganization');
    return this;
  }

  /**
   * Shows a summary of all organizations associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   */
  public toDescribeOrganizations() {
    this.to('workmail:DescribeOrganizations');
    return this;
  }

  /**
   * Returns the details of an outbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toDescribeOutboundMailFlowRule() {
    this.to('workmail:DescribeOutboundMailFlowRule');
    return this;
  }

  /**
   * Returns the data available for the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html
   */
  public toDescribeResource() {
    this.to('workmail:DescribeResource');
    return this;
  }

  /**
   * Returns the details of an SMTP device registered against an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toDescribeSmtpGateway() {
    this.to('workmail:DescribeSmtpGateway');
    return this;
  }

  /**
   * Provides information regarding the user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('workmail:DescribeUser');
    return this;
  }

  /**
   * Disable a mail group when it is not being used and, to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html
   */
  public toDisableMailGroups() {
    this.to('workmail:DisableMailGroups');
    return this;
  }

  /**
   * Disable a user mailbox when it is no longer being used, and to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox
   */
  public toDisableMailUsers() {
    this.to('workmail:DisableMailUsers');
    return this;
  }

  /**
   * Removes a member from the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html
   */
  public toDisassociateDelegateFromResource() {
    this.to('workmail:DisassociateDelegateFromResource');
    return this;
  }

  /**
   * Removes a member from a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html
   */
  public toDisassociateMemberFromGroup() {
    this.to('workmail:DisassociateMemberFromGroup');
    return this;
  }

  /**
   * Enable a mail domain in the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public toEnableMailDomain() {
    this.to('workmail:EnableMailDomain');
    return this;
  }

  /**
   * Enable a mail group after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html
   */
  public toEnableMailGroups() {
    this.to('workmail:EnableMailGroups');
    return this;
  }

  /**
   * Enable a user's mailbox after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user
   */
  public toEnableMailUsers() {
    this.to('workmail:EnableMailUsers');
    return this;
  }

  /**
   * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html
   */
  public toGetAccessControlEffect() {
    this.to('workmail:GetAccessControlEffect');
    return this;
  }

  /**
   * Retrieves the retention policy associated at an organizational level.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html
   */
  public toGetDefaultRetentionPolicy() {
    this.to('workmail:GetDefaultRetentionPolicy');
    return this;
  }

  /**
   * Returns journaling and fallback email addresses configured for email journaling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toGetJournalingRules() {
    this.to('workmail:GetJournalingRules');
    return this;
  }

  /**
   * Get the details of the mail domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public toGetMailDomainDetails() {
    this.to('workmail:GetMailDomainDetails');
    return this;
  }

  /**
   * Get the details of the mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toGetMailGroupDetails() {
    this.to('workmail:GetMailGroupDetails');
    return this;
  }

  /**
   * Get the details of the user's mailbox and account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toGetMailUserDetails() {
    this.to('workmail:GetMailUserDetails');
    return this;
  }

  /**
   * Returns the details of the user's mailbox.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html
   */
  public toGetMailboxDetails() {
    this.to('workmail:GetMailboxDetails');
    return this;
  }

  /**
   * Get the details of the mobile device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDeviceDetails() {
    this.to('workmail:GetMobileDeviceDetails');
    return this;
  }

  /**
   * Get a list of the mobile devices associated with the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public toGetMobileDevicesForUser() {
    this.to('workmail:GetMobileDevicesForUser');
    return this;
  }

  /**
   * Get the details of the mobile device policy associated with the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toGetMobilePolicyDetails() {
    this.to('workmail:GetMobilePolicyDetails');
    return this;
  }

  /**
   * Lists the access control rules for the specified organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html
   */
  public toListAccessControlRules() {
    this.to('workmail:ListAccessControlRules');
    return this;
  }

  /**
   * Creates a paginated call to list the aliases associated with a given entity.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    this.to('workmail:ListAliases');
    return this;
  }

  /**
   * Returns an overview of the members of a group. Users and groups can be members of a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html
   */
  public toListGroupMembers() {
    this.to('workmail:ListGroupMembers');
    return this;
  }

  /**
   * Returns summaries of the organization's groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('workmail:ListGroups');
    return this;
  }

  /**
   * Returns a list of inbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public toListInboundMailFlowRules() {
    this.to('workmail:ListInboundMailFlowRules');
    return this;
  }

  /**
   * Lists the mailbox permissions associated with a user, group, or resource mailbox.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html
   */
  public toListMailboxPermissions() {
    this.to('workmail:ListMailboxPermissions');
    return this;
  }

  /**
   * Get a list of all the members in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toListMembersInMailGroup() {
    this.to('workmail:ListMembersInMailGroup');
    return this;
  }

  /**
   * Returns summaries of the customer's non-deleted organizations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html
   */
  public toListOrganizations() {
    this.to('workmail:ListOrganizations');
    return this;
  }

  /**
   * Returns a list of outbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public toListOutboundMailFlowRules() {
    this.to('workmail:ListOutboundMailFlowRules');
    return this;
  }

  /**
   * Lists the delegates associated with a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html
   */
  public toListResourceDelegates() {
    this.to('workmail:ListResourceDelegates');
    return this;
  }

  /**
   * Returns summaries of the organization's resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    this.to('workmail:ListResources');
    return this;
  }

  /**
   * Returns a list of SMTP devices registered against the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toListSmtpGateways() {
    this.to('workmail:ListSmtpGateways');
    return this;
  }

  /**
   * Grants permission to list the tags applied to an Amazon WorkMail organization resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('workmail:ListTagsForResource');
    return this;
  }

  /**
   * Returns summaries of the organization's users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('workmail:ListUsers');
    return this;
  }

  /**
   * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html
   */
  public toPutAccessControlRule() {
    this.to('workmail:PutAccessControlRule');
    return this;
  }

  /**
   * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html
   */
  public toPutMailboxPermissions() {
    this.to('workmail:PutMailboxPermissions');
    return this;
  }

  /**
   * Adds or updates the retention policy for the specified organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    this.to('workmail:PutRetentionPolicy');
    return this;
  }

  /**
   * Registers an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html
   */
  public toRegisterToWorkMail() {
    this.to('workmail:RegisterToWorkMail');
    return this;
  }

  /**
   * Remove members from a mail group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toRemoveMembersFromGroup() {
    this.to('workmail:RemoveMembersFromGroup');
    return this;
  }

  /**
   * Allows the administrator to reset the password for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html
   */
  public toResetPassword() {
    this.to('workmail:ResetPassword');
    return this;
  }

  /**
   * Reset the password for a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password
   */
  public toResetUserPassword() {
    this.to('workmail:ResetUserPassword');
    return this;
  }

  /**
   * Prefix search to find a specific user in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public toSearchMembers() {
    this.to('workmail:SearchMembers');
    return this;
  }

  /**
   * Mark a user as being an administrator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public toSetAdmin() {
    this.to('workmail:SetAdmin');
    return this;
  }

  /**
   * Set the default mail domain for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html
   */
  public toSetDefaultMailDomain() {
    this.to('workmail:SetDefaultMailDomain');
    return this;
  }

  /**
   * Set journaling and fallback email addresses for email journaling
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public toSetJournalingRules() {
    this.to('workmail:SetJournalingRules');
    return this;
  }

  /**
   * Set the details of the mail group which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html
   */
  public toSetMailGroupDetails() {
    this.to('workmail:SetMailGroupDetails');
    return this;
  }

  /**
   * Set the details for the user account which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public toSetMailUserDetails() {
    this.to('workmail:SetMailUserDetails');
    return this;
  }

  /**
   * Set the details of a mobile policy associated with the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public toSetMobilePolicyDetails() {
    this.to('workmail:SetMobilePolicyDetails');
    return this;
  }

  /**
   * Grants permission to tag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('workmail:TagResource');
    return this;
  }

  /**
   * Test what inbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestInboundMailFlowRules() {
    this.to('workmail:TestInboundMailFlowRules');
    return this;
  }

  /**
   * Test what outbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public toTestOutboundMailFlowRules() {
    this.to('workmail:TestOutboundMailFlowRules');
    return this;
  }

  /**
   * Grants permission to untag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('workmail:UntagResource');
    return this;
  }

  /**
   * Update the details of an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateInboundMailFlowRule() {
    this.to('workmail:UpdateInboundMailFlowRule');
    return this;
  }

  /**
   * Updates the maximum size (in MB) of the user's mailbox.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html
   */
  public toUpdateMailboxQuota() {
    this.to('workmail:UpdateMailboxQuota');
    return this;
  }

  /**
   * Update the details of an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public toUpdateOutboundMailFlowRule() {
    this.to('workmail:UpdateOutboundMailFlowRule');
    return this;
  }

  /**
   * Updates the primary email for a user, group, or resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html
   */
  public toUpdatePrimaryEmailAddress() {
    this.to('workmail:UpdatePrimaryEmailAddress');
    return this;
  }

  /**
   * Updates data for the resource. To retrieve the latest information, it must be preceded by a DescribeResource call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html
   */
  public toUpdateResource() {
    this.to('workmail:UpdateResource');
    return this;
  }

  /**
   * Update the details of an existing SMTP device registered against an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public toUpdateSmtpGateway() {
    this.to('workmail:UpdateSmtpGateway');
    return this;
  }

  /**
   * Remotely wipe the mobile device associated with a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device
   */
  public toWipeMobileDevice() {
    this.to('workmail:WipeMobileDevice');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddMembersToGroup",
      "AssociateDelegateToResource",
      "AssociateMemberToGroup",
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
