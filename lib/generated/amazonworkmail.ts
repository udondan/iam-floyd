import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [workmail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workmail extends PolicyStatement {
  public servicePrefix = 'workmail';
  protected actionList: Actions = {
    "AddMembersToGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Adds a list of members (users or groups) to a group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "AssociateDelegateToResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html",
      "description": "Adds a member (user or group) to the resource's set of delegates.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "AssociateMemberToGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html",
      "description": "Adds a member (user or group) to the group's set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html",
      "description": "Adds an alias to the set of a given member (user or group) of WorkMail.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html",
      "description": "Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateInboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html",
      "description": "Create an inbound email flow rule which will apply to all email sent to an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateMailDomain": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html",
      "description": "Creates a mail domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateMailUser": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html",
      "description": "Creates a user in the directory and the WorkMail storage but does not enable the user for mail.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateOrganization": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html",
      "description": "Creates an organization, either using an existing directory or creates a new directory on-the-fly. Also creates and enables the complementary mail domain. Optionally creates KMS key",
      "accessLevel": "Write"
    },
    "CreateOutboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html",
      "description": "Create an outbound email flow rule which will apply to all email sent from an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html",
      "description": "Creates a new WorkMail resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateSmtpGateway": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html",
      "description": "Register an SMTP device against a WorkMail organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html",
      "description": "Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteAccessControlRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html",
      "description": "Deletes an access control rule for the specified WorkMail organization.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteAlias": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html",
      "description": "Remove one or more specified aliases from a set of aliases for a given user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html",
      "description": "Deletes a group from WorkMail.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteInboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html",
      "description": "Remove an inbound email flow rule to no longer apply to emails sent to an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteMailDomain": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html",
      "description": "Removes an unused mail domain from an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteMailboxPermissions": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html",
      "description": "Deletes permissions granted to a member (user or group).",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteMobileDevice": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device",
      "description": "Removes a mobile device from a user",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteOrganization": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html",
      "description": "Removes an organization from an account, either removing the directory from directory services or leaving it available for re-use",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteOutboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html",
      "description": "Remove an outbound email flow rule to no longer apply to emails sent from an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html",
      "description": "Deletes the specified resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteRetentionPolicy": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html",
      "description": "Deletes the retention policy based on the supplied organization and policy identifiers.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteSmtpGateway": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html",
      "description": "Remove an SMTP device from an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html",
      "description": "Deletes a user from WorkMail and all subsequent systems. The action cannot be undone.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DeregisterFromWorkMail": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html",
      "description": "Mark a user, group, or resource as no longer used in WorkMail.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeDirectories": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html",
      "description": "Shows a list of directories available for use in creating an organization",
      "accessLevel": "List"
    },
    "DescribeGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html",
      "description": "Returns the data available for the group.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeInboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions",
      "description": "Returns the details of an inbound mail flow rule configured for an organization",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeKmsKeys": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html",
      "description": "Shows a list of KMS Keys available for use in creating an organization",
      "accessLevel": "List"
    },
    "DescribeMailDomains": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html",
      "description": "Shows the details of all mail domains associated with the organization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeMailGroups": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Shows the details of all groups associated with the organization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeMailUsers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html",
      "description": "Shows the details of all users associated with the orgaization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeOrganization": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html",
      "description": "Provides more information regarding a given organization based on its identifier.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeOrganizations": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html",
      "description": "Shows a summary of all organizations associated with the account",
      "accessLevel": "List"
    },
    "DescribeOutboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound",
      "description": "Returns the details of an outbound mail flow rule configured for an organization",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html",
      "description": "Returns the data available for the resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeSmtpGateway": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html",
      "description": "Returns the details of an SMTP device registered against an organization",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html",
      "description": "Provides information regarding the user.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DisableMailGroups": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html",
      "description": "Disable a mail group when it is not being used and, to allow it to be deleted",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DisableMailUsers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox",
      "description": "Disable a user mailbox when it is no longer being used, and to allow it to be deleted",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DisassociateDelegateFromResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html",
      "description": "Removes a member from the resource's set of delegates.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "DisassociateMemberFromGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html",
      "description": "Removes a member from a group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "EnableMailDomain": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html",
      "description": "Enable a mail domain in the organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "EnableMailGroups": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html",
      "description": "Enable a mail group after it has been created to allow it to receive mail",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "EnableMailUsers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user",
      "description": "Enable a user's mailbox after it has been created to allow it to receive mail",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetAccessControlEffect": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html",
      "description": "Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetDefaultRetentionPolicy": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html",
      "description": "Retrieves the retention policy associated at an organizational level.",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetJournalingRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html",
      "description": "Returns journaling and fallback email addresses configured for email journaling",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMailDomainDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html",
      "description": "Get the details of the mail domain",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMailGroupDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Get the details of the mail group",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMailUserDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html",
      "description": "Get the details of the user's mailbox and account",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMailboxDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html",
      "description": "Returns the details of the user's mailbox.",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMobileDeviceDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html",
      "description": "Get the details of the mobile device",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMobileDevicesForUser": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html",
      "description": "Get a list of the mobile devices associated with the user",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "GetMobilePolicyDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html",
      "description": "Get the details of the mobile device policy associated with the organization",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListAccessControlRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html",
      "description": "Lists the access control rules for the specified organization.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListAliases": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html",
      "description": "Creates a paginated call to list the aliases associated with a given entity.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListGroupMembers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html",
      "description": "Returns an overview of the members of a group. Users and groups can be members of a group.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html",
      "description": "Returns summaries of the organization's groups.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListInboundMailFlowRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions",
      "description": "Returns a list of inbound mail flow rules configured for an organization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListMailboxPermissions": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html",
      "description": "Lists the mailbox permissions associated with a user, group, or resource mailbox.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListMembersInMailGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Get a list of all the members in a mail group",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListOrganizations": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html",
      "description": "Returns summaries of the customer's non-deleted organizations.",
      "accessLevel": "List"
    },
    "ListOutboundMailFlowRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound",
      "description": "Returns a list of outbound mail flow rules configured for an organization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListResourceDelegates": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html",
      "description": "Lists the delegates associated with a resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListResources": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html",
      "description": "Returns summaries of the organization's resources.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListSmtpGateways": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html",
      "description": "Returns a list of SMTP devices registered against the organization",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags applied to an Amazon WorkMail organization resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html",
      "description": "Returns summaries of the organization's users.",
      "accessLevel": "List",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "PutAccessControlRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html",
      "description": "Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "PutMailboxPermissions": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html",
      "description": "Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "PutRetentionPolicy": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html",
      "description": "Adds or updates the retention policy for the specified organization.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "RegisterToWorkMail": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html",
      "description": "Registers an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "RemoveMembersFromGroup": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Remove members from a mail group",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ResetPassword": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html",
      "description": "Allows the administrator to reset the password for a user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "ResetUserPassword": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password",
      "description": "Reset the password for a user's account",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SearchMembers": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html",
      "description": "Prefix search to find a specific user in a mail group",
      "accessLevel": "Read",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetAdmin": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html",
      "description": "Mark a user as being an administrator",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetDefaultMailDomain": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html",
      "description": "Set the default mail domain for the organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetJournalingRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html",
      "description": "Set journaling and fallback email addresses for email journaling",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetMailGroupDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html",
      "description": "Set the details of the mail group which has just been created",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetMailUserDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html",
      "description": "Set the details for the user account which has just been created",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "SetMobilePolicyDetails": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html",
      "description": "Set the details of a mobile policy associated with the organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag the specified Amazon WorkMail organization resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "TestInboundMailFlowRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html",
      "description": "Test what inbound rules will apply to an email with a given sender and recipient",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "TestOutboundMailFlowRules": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html",
      "description": "Test what outbound rules will apply to an email with a given sender and recipient",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag the specified Amazon WorkMail organization resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdateInboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html",
      "description": "Update the details of an inbound email flow rule which will apply to all email sent to an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdateMailboxQuota": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html",
      "description": "Updates the maximum size (in MB) of the user's mailbox.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdateOutboundMailFlowRule": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html",
      "description": "Update the details of an outbound email flow rule which will apply to all email sent from an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdatePrimaryEmailAddress": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html",
      "description": "Updates the primary email for a user, group, or resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdateResource": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html",
      "description": "Updates data for the resource. To retrieve the latest information, it must be preceded by a DescribeResource call.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "UpdateSmtpGateway": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html",
      "description": "Update the details of an existing SMTP device registered against an organization",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    },
    "WipeMobileDevice": {
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device",
      "description": "Remotely wipe the mobile device associated with a user's account",
      "accessLevel": "Write",
      "resourceTypes": {
        "organization": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "organization": {
      "name": "organization",
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html",
      "arn": "arn:${Partition}:workmail:${Region}:${Account}:organization/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
  public addMembersToGroup() {
    this.add('workmail:AddMembersToGroup');
    return this;
  }

  /**
   * Adds a member (user or group) to the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html
   */
  public associateDelegateToResource() {
    this.add('workmail:AssociateDelegateToResource');
    return this;
  }

  /**
   * Adds a member (user or group) to the group's set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html
   */
  public associateMemberToGroup() {
    this.add('workmail:AssociateMemberToGroup');
    return this;
  }

  /**
   * Adds an alias to the set of a given member (user or group) of WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html
   */
  public createAlias() {
    this.add('workmail:CreateAlias');
    return this;
  }

  /**
   * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html
   */
  public createGroup() {
    this.add('workmail:CreateGroup');
    return this;
  }

  /**
   * Create an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public createInboundMailFlowRule() {
    this.add('workmail:CreateInboundMailFlowRule');
    return this;
  }

  /**
   * Creates a mail domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public createMailDomain() {
    this.add('workmail:CreateMailDomain');
    return this;
  }

  /**
   * Creates a user in the directory and the WorkMail storage but does not enable the user for mail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public createMailUser() {
    this.add('workmail:CreateMailUser');
    return this;
  }

  /**
   * Creates an organization, either using an existing directory or creates a new directory on-the-fly. Also creates and enables the complementary mail domain. Optionally creates KMS key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public createOrganization() {
    this.add('workmail:CreateOrganization');
    return this;
  }

  /**
   * Create an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   */
  public createOutboundMailFlowRule() {
    this.add('workmail:CreateOutboundMailFlowRule');
    return this;
  }

  /**
   * Creates a new WorkMail resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html
   */
  public createResource() {
    this.add('workmail:CreateResource');
    return this;
  }

  /**
   * Register an SMTP device against a WorkMail organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public createSmtpGateway() {
    this.add('workmail:CreateSmtpGateway');
    return this;
  }

  /**
   * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html
   */
  public createUser() {
    this.add('workmail:CreateUser');
    return this;
  }

  /**
   * Deletes an access control rule for the specified WorkMail organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html
   */
  public deleteAccessControlRule() {
    this.add('workmail:DeleteAccessControlRule');
    return this;
  }

  /**
   * Remove one or more specified aliases from a set of aliases for a given user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html
   */
  public deleteAlias() {
    this.add('workmail:DeleteAlias');
    return this;
  }

  /**
   * Deletes a group from WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html
   */
  public deleteGroup() {
    this.add('workmail:DeleteGroup');
    return this;
  }

  /**
   * Remove an inbound email flow rule to no longer apply to emails sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public deleteInboundMailFlowRule() {
    this.add('workmail:DeleteInboundMailFlowRule');
    return this;
  }

  /**
   * Removes an unused mail domain from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html
   */
  public deleteMailDomain() {
    this.add('workmail:DeleteMailDomain');
    return this;
  }

  /**
   * Deletes permissions granted to a member (user or group).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html
   */
  public deleteMailboxPermissions() {
    this.add('workmail:DeleteMailboxPermissions');
    return this;
  }

  /**
   * Removes a mobile device from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device
   */
  public deleteMobileDevice() {
    this.add('workmail:DeleteMobileDevice');
    return this;
  }

  /**
   * Removes an organization from an account, either removing the directory from directory services or leaving it available for re-use
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html
   */
  public deleteOrganization() {
    this.add('workmail:DeleteOrganization');
    return this;
  }

  /**
   * Remove an outbound email flow rule to no longer apply to emails sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   */
  public deleteOutboundMailFlowRule() {
    this.add('workmail:DeleteOutboundMailFlowRule');
    return this;
  }

  /**
   * Deletes the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html
   */
  public deleteResource() {
    this.add('workmail:DeleteResource');
    return this;
  }

  /**
   * Deletes the retention policy based on the supplied organization and policy identifiers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public deleteRetentionPolicy() {
    this.add('workmail:DeleteRetentionPolicy');
    return this;
  }

  /**
   * Remove an SMTP device from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public deleteSmtpGateway() {
    this.add('workmail:DeleteSmtpGateway');
    return this;
  }

  /**
   * Deletes a user from WorkMail and all subsequent systems. The action cannot be undone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('workmail:DeleteUser');
    return this;
  }

  /**
   * Mark a user, group, or resource as no longer used in WorkMail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html
   */
  public deregisterFromWorkMail() {
    this.add('workmail:DeregisterFromWorkMail');
    return this;
  }

  /**
   * Shows a list of directories available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public describeDirectories() {
    this.add('workmail:DescribeDirectories');
    return this;
  }

  /**
   * Returns the data available for the group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html
   */
  public describeGroup() {
    this.add('workmail:DescribeGroup');
    return this;
  }

  /**
   * Returns the details of an inbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public describeInboundMailFlowRule() {
    this.add('workmail:DescribeInboundMailFlowRule');
    return this;
  }

  /**
   * Shows a list of KMS Keys available for use in creating an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  public describeKmsKeys() {
    this.add('workmail:DescribeKmsKeys');
    return this;
  }

  /**
   * Shows the details of all mail domains associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public describeMailDomains() {
    this.add('workmail:DescribeMailDomains');
    return this;
  }

  /**
   * Shows the details of all groups associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public describeMailGroups() {
    this.add('workmail:DescribeMailGroups');
    return this;
  }

  /**
   * Shows the details of all users associated with the orgaization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public describeMailUsers() {
    this.add('workmail:DescribeMailUsers');
    return this;
  }

  /**
   * Provides more information regarding a given organization based on its identifier.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html
   */
  public describeOrganization() {
    this.add('workmail:DescribeOrganization');
    return this;
  }

  /**
   * Shows a summary of all organizations associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   */
  public describeOrganizations() {
    this.add('workmail:DescribeOrganizations');
    return this;
  }

  /**
   * Returns the details of an outbound mail flow rule configured for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public describeOutboundMailFlowRule() {
    this.add('workmail:DescribeOutboundMailFlowRule');
    return this;
  }

  /**
   * Returns the data available for the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html
   */
  public describeResource() {
    this.add('workmail:DescribeResource');
    return this;
  }

  /**
   * Returns the details of an SMTP device registered against an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public describeSmtpGateway() {
    this.add('workmail:DescribeSmtpGateway');
    return this;
  }

  /**
   * Provides information regarding the user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html
   */
  public describeUser() {
    this.add('workmail:DescribeUser');
    return this;
  }

  /**
   * Disable a mail group when it is not being used and, to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html
   */
  public disableMailGroups() {
    this.add('workmail:DisableMailGroups');
    return this;
  }

  /**
   * Disable a user mailbox when it is no longer being used, and to allow it to be deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox
   */
  public disableMailUsers() {
    this.add('workmail:DisableMailUsers');
    return this;
  }

  /**
   * Removes a member from the resource's set of delegates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html
   */
  public disassociateDelegateFromResource() {
    this.add('workmail:DisassociateDelegateFromResource');
    return this;
  }

  /**
   * Removes a member from a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html
   */
  public disassociateMemberFromGroup() {
    this.add('workmail:DisassociateMemberFromGroup');
    return this;
  }

  /**
   * Enable a mail domain in the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   */
  public enableMailDomain() {
    this.add('workmail:EnableMailDomain');
    return this;
  }

  /**
   * Enable a mail group after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html
   */
  public enableMailGroups() {
    this.add('workmail:EnableMailGroups');
    return this;
  }

  /**
   * Enable a user's mailbox after it has been created to allow it to receive mail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user
   */
  public enableMailUsers() {
    this.add('workmail:EnableMailUsers');
    return this;
  }

  /**
   * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html
   */
  public getAccessControlEffect() {
    this.add('workmail:GetAccessControlEffect');
    return this;
  }

  /**
   * Retrieves the retention policy associated at an organizational level.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html
   */
  public getDefaultRetentionPolicy() {
    this.add('workmail:GetDefaultRetentionPolicy');
    return this;
  }

  /**
   * Returns journaling and fallback email addresses configured for email journaling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public getJournalingRules() {
    this.add('workmail:GetJournalingRules');
    return this;
  }

  /**
   * Get the details of the mail domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   */
  public getMailDomainDetails() {
    this.add('workmail:GetMailDomainDetails');
    return this;
  }

  /**
   * Get the details of the mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public getMailGroupDetails() {
    this.add('workmail:GetMailGroupDetails');
    return this;
  }

  /**
   * Get the details of the user's mailbox and account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public getMailUserDetails() {
    this.add('workmail:GetMailUserDetails');
    return this;
  }

  /**
   * Returns the details of the user's mailbox.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html
   */
  public getMailboxDetails() {
    this.add('workmail:GetMailboxDetails');
    return this;
  }

  /**
   * Get the details of the mobile device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public getMobileDeviceDetails() {
    this.add('workmail:GetMobileDeviceDetails');
    return this;
  }

  /**
   * Get a list of the mobile devices associated with the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   */
  public getMobileDevicesForUser() {
    this.add('workmail:GetMobileDevicesForUser');
    return this;
  }

  /**
   * Get the details of the mobile device policy associated with the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public getMobilePolicyDetails() {
    this.add('workmail:GetMobilePolicyDetails');
    return this;
  }

  /**
   * Lists the access control rules for the specified organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html
   */
  public listAccessControlRules() {
    this.add('workmail:ListAccessControlRules');
    return this;
  }

  /**
   * Creates a paginated call to list the aliases associated with a given entity.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html
   */
  public listAliases() {
    this.add('workmail:ListAliases');
    return this;
  }

  /**
   * Returns an overview of the members of a group. Users and groups can be members of a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html
   */
  public listGroupMembers() {
    this.add('workmail:ListGroupMembers');
    return this;
  }

  /**
   * Returns summaries of the organization's groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html
   */
  public listGroups() {
    this.add('workmail:ListGroups');
    return this;
  }

  /**
   * Returns a list of inbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   */
  public listInboundMailFlowRules() {
    this.add('workmail:ListInboundMailFlowRules');
    return this;
  }

  /**
   * Lists the mailbox permissions associated with a user, group, or resource mailbox.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html
   */
  public listMailboxPermissions() {
    this.add('workmail:ListMailboxPermissions');
    return this;
  }

  /**
   * Get a list of all the members in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public listMembersInMailGroup() {
    this.add('workmail:ListMembersInMailGroup');
    return this;
  }

  /**
   * Returns summaries of the customer's non-deleted organizations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html
   */
  public listOrganizations() {
    this.add('workmail:ListOrganizations');
    return this;
  }

  /**
   * Returns a list of outbound mail flow rules configured for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   */
  public listOutboundMailFlowRules() {
    this.add('workmail:ListOutboundMailFlowRules');
    return this;
  }

  /**
   * Lists the delegates associated with a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html
   */
  public listResourceDelegates() {
    this.add('workmail:ListResourceDelegates');
    return this;
  }

  /**
   * Returns summaries of the organization's resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html
   */
  public listResources() {
    this.add('workmail:ListResources');
    return this;
  }

  /**
   * Returns a list of SMTP devices registered against the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public listSmtpGateways() {
    this.add('workmail:ListSmtpGateways');
    return this;
  }

  /**
   * Grants permission to list the tags applied to an Amazon WorkMail organization resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('workmail:ListTagsForResource');
    return this;
  }

  /**
   * Returns summaries of the organization's users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('workmail:ListUsers');
    return this;
  }

  /**
   * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html
   */
  public putAccessControlRule() {
    this.add('workmail:PutAccessControlRule');
    return this;
  }

  /**
   * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html
   */
  public putMailboxPermissions() {
    this.add('workmail:PutMailboxPermissions');
    return this;
  }

  /**
   * Adds or updates the retention policy for the specified organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html
   */
  public putRetentionPolicy() {
    this.add('workmail:PutRetentionPolicy');
    return this;
  }

  /**
   * Registers an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html
   */
  public registerToWorkMail() {
    this.add('workmail:RegisterToWorkMail');
    return this;
  }

  /**
   * Remove members from a mail group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public removeMembersFromGroup() {
    this.add('workmail:RemoveMembersFromGroup');
    return this;
  }

  /**
   * Allows the administrator to reset the password for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html
   */
  public resetPassword() {
    this.add('workmail:ResetPassword');
    return this;
  }

  /**
   * Reset the password for a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password
   */
  public resetUserPassword() {
    this.add('workmail:ResetUserPassword');
    return this;
  }

  /**
   * Prefix search to find a specific user in a mail group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   */
  public searchMembers() {
    this.add('workmail:SearchMembers');
    return this;
  }

  /**
   * Mark a user as being an administrator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   */
  public setAdmin() {
    this.add('workmail:SetAdmin');
    return this;
  }

  /**
   * Set the default mail domain for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html
   */
  public setDefaultMailDomain() {
    this.add('workmail:SetDefaultMailDomain');
    return this;
  }

  /**
   * Set journaling and fallback email addresses for email journaling
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   */
  public setJournalingRules() {
    this.add('workmail:SetJournalingRules');
    return this;
  }

  /**
   * Set the details of the mail group which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html
   */
  public setMailGroupDetails() {
    this.add('workmail:SetMailGroupDetails');
    return this;
  }

  /**
   * Set the details for the user account which has just been created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   */
  public setMailUserDetails() {
    this.add('workmail:SetMailUserDetails');
    return this;
  }

  /**
   * Set the details of a mobile policy associated with the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   */
  public setMobilePolicyDetails() {
    this.add('workmail:SetMobilePolicyDetails');
    return this;
  }

  /**
   * Grants permission to tag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('workmail:TagResource');
    return this;
  }

  /**
   * Test what inbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public testInboundMailFlowRules() {
    this.add('workmail:TestInboundMailFlowRules');
    return this;
  }

  /**
   * Test what outbound rules will apply to an email with a given sender and recipient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   */
  public testOutboundMailFlowRules() {
    this.add('workmail:TestOutboundMailFlowRules');
    return this;
  }

  /**
   * Grants permission to untag the specified Amazon WorkMail organization resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('workmail:UntagResource');
    return this;
  }

  /**
   * Update the details of an inbound email flow rule which will apply to all email sent to an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public updateInboundMailFlowRule() {
    this.add('workmail:UpdateInboundMailFlowRule');
    return this;
  }

  /**
   * Updates the maximum size (in MB) of the user's mailbox.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html
   */
  public updateMailboxQuota() {
    this.add('workmail:UpdateMailboxQuota');
    return this;
  }

  /**
   * Update the details of an outbound email flow rule which will apply to all email sent from an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   */
  public updateOutboundMailFlowRule() {
    this.add('workmail:UpdateOutboundMailFlowRule');
    return this;
  }

  /**
   * Updates the primary email for a user, group, or resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html
   */
  public updatePrimaryEmailAddress() {
    this.add('workmail:UpdatePrimaryEmailAddress');
    return this;
  }

  /**
   * Updates data for the resource. To retrieve the latest information, it must be preceded by a DescribeResource call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html
   */
  public updateResource() {
    this.add('workmail:UpdateResource');
    return this;
  }

  /**
   * Update the details of an existing SMTP device registered against an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   */
  public updateSmtpGateway() {
    this.add('workmail:UpdateSmtpGateway');
    return this;
  }

  /**
   * Remotely wipe the mobile device associated with a user's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device
   */
  public wipeMobileDevice() {
    this.add('workmail:WipeMobileDevice');
    return this;
  }

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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
