import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service ses
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
 */
export class Ses extends PolicyStatement {
  public servicePrefix = 'ses';
  public actions: Actions = {
    "CloneReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html",
      "description": "Creates a receipt rule set by cloning an existing one",
      "accessLevel": "Write"
    },
    "CreateConfigurationSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html",
      "description": "Creates a new configuration set",
      "accessLevel": "Write"
    },
    "CreateConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html",
      "description": "Creates a configuration set event destination",
      "accessLevel": "Write"
    },
    "CreateConfigurationSetTrackingOptions": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html",
      "description": "Creates an association between a configuration set and a custom domain for open and click event tracking",
      "accessLevel": "Write"
    },
    "CreateCustomVerificationEmailTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html",
      "description": "Creates a new custom verification email template",
      "accessLevel": "Write"
    },
    "CreateReceiptFilter": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html",
      "description": "Creates a new IP address filter",
      "accessLevel": "Write"
    },
    "CreateReceiptRule": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html",
      "description": "Creates a receipt rule",
      "accessLevel": "Write"
    },
    "CreateReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html",
      "description": "Creates an empty receipt rule set",
      "accessLevel": "Write"
    },
    "CreateTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html",
      "description": "Creates an email template",
      "accessLevel": "Write"
    },
    "DeleteConfigurationSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html",
      "description": "Deletes the configuration set",
      "accessLevel": "Write"
    },
    "DeleteConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html",
      "description": "Deletes a configuration set event destination",
      "accessLevel": "Write"
    },
    "DeleteConfigurationSetTrackingOptions": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html",
      "description": "Deletes an association between a configuration set and a custom domain for open and click event tracking",
      "accessLevel": "Write"
    },
    "DeleteCustomVerificationEmailTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html",
      "description": "Deletes an existing custom verification email template",
      "accessLevel": "Write"
    },
    "DeleteIdentity": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html",
      "description": "Deletes the specified identity (an email address or a domain) from the list of verified identities",
      "accessLevel": "Write"
    },
    "DeleteIdentityPolicy": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html",
      "description": "Deletes the specified identity (an email address or a domain) from the list of verified identities",
      "accessLevel": "Write"
    },
    "DeleteReceiptFilter": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html",
      "description": "Deletes the specified IP address filter",
      "accessLevel": "Write"
    },
    "DeleteReceiptRule": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html",
      "description": "Deletes the specified receipt rule",
      "accessLevel": "Write"
    },
    "DeleteReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html",
      "description": "Deletes the specified receipt rule set and all of the receipt rules it contains",
      "accessLevel": "Write"
    },
    "DeleteTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html",
      "description": "Deletes an email template",
      "accessLevel": "Write"
    },
    "DeleteVerifiedEmailAddress": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html",
      "description": "Deletes the specified email address from the list of verified addresses",
      "accessLevel": "Write"
    },
    "DescribeActiveReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html",
      "description": "Returns the metadata and receipt rules for the receipt rule set that is currently active",
      "accessLevel": "Read"
    },
    "DescribeConfigurationSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html",
      "description": "Returns the details of the specified configuration set",
      "accessLevel": "Read"
    },
    "DescribeReceiptRule": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html",
      "description": "Returns the details of the specified receipt rule",
      "accessLevel": "Read"
    },
    "DescribeReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html",
      "description": "Returns the details of the specified receipt rule set",
      "accessLevel": "Read"
    },
    "GetAccountSendingEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html",
      "description": "Returns the email sending status of the Amazon SES account for the current region",
      "accessLevel": "Read"
    },
    "GetCustomVerificationEmailTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html",
      "description": "Returns the custom email verification template for the template name you specify",
      "accessLevel": "Read"
    },
    "GetIdentityDkimAttributes": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html",
      "description": "Returns the current status of Easy DKIM signing for an entity",
      "accessLevel": "Read"
    },
    "GetIdentityMailFromDomainAttributes": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html",
      "description": "Returns the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)",
      "accessLevel": "Read"
    },
    "GetIdentityNotificationAttributes": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html",
      "description": "Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes",
      "accessLevel": "Read"
    },
    "GetIdentityPolicies": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html",
      "description": "Returns the requested sending authorization policies for the given identity (an email address or a domain)",
      "accessLevel": "Read"
    },
    "GetIdentityVerificationAttributes": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html",
      "description": "Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity",
      "accessLevel": "Read"
    },
    "GetSendQuota": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html",
      "description": "Returns the user's current sending limits",
      "accessLevel": "Read"
    },
    "GetSendStatistics": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html",
      "description": "Returns the user's sending statistics. The result is a list of data points, representing the last two weeks of sending activity",
      "accessLevel": "Read"
    },
    "GetTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html",
      "description": "Returns the template object (which includes the Subject line, HTML part and text part) for the template you specify",
      "accessLevel": "Read"
    },
    "ListConfigurationSets": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html",
      "description": "Returns a list of the configuration sets associated with your Amazon SES account in the current AWS Region",
      "accessLevel": "List"
    },
    "ListCustomVerificationEmailTemplates": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html",
      "description": "Lists the existing custom verification email templates for your account in the current AWS Region",
      "accessLevel": "List"
    },
    "ListIdentities": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html",
      "description": "Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status",
      "accessLevel": "List"
    },
    "ListIdentityPolicies": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html",
      "description": "Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain)",
      "accessLevel": "List"
    },
    "ListReceiptFilters": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html",
      "description": "Lists the IP address filters associated with your AWS account",
      "accessLevel": "List"
    },
    "ListReceiptRuleSets": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html",
      "description": "Lists the receipt rule sets that exist under your AWS account",
      "accessLevel": "List"
    },
    "ListTemplates": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html",
      "description": "Lists the email templates present in your Amazon SES account in the current AWS Region",
      "accessLevel": "List"
    },
    "ListVerifiedEmailAddresses": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html",
      "description": "Returns a list containing all of the email addresses that have been verified",
      "accessLevel": "List"
    },
    "PutIdentityPolicy": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html",
      "description": "Adds or updates a sending authorization policy for the specified identity (an email address or a domain)",
      "accessLevel": "Write"
    },
    "ReorderReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html",
      "description": "Reorders the receipt rules within a receipt rule set",
      "accessLevel": "Write"
    },
    "SendBounce": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html",
      "description": "Generates and sends a bounce message to the sender of an email you received through Amazon SES",
      "accessLevel": "Write",
      "conditions": [
        "ses:FromAddress"
      ]
    },
    "SendBulkTemplatedEmail": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html",
      "description": "Composes an email message to multiple destinations",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "SendCustomVerificationEmail": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendCustomVerificationEmail.html",
      "description": "Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "SendEmail": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html",
      "description": "Composes an email message based on input data, and then immediately queues the message for sending",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "SendRawEmail": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html",
      "description": "Sends an email message, with header and content specified by the client",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "SendTemplatedEmail": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html",
      "description": "Composes an email message using an email template and immediately queues it for sending",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "SetActiveReceiptRuleSet": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html",
      "description": "Sets the specified receipt rule set as the active receipt rule set",
      "accessLevel": "Write"
    },
    "SetIdentityDkimEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html",
      "description": "Enables or disables Easy DKIM signing of email sent from an identity",
      "accessLevel": "Write"
    },
    "SetIdentityFeedbackForwardingEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html",
      "description": "Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email",
      "accessLevel": "Write"
    },
    "SetIdentityHeadersInNotificationsEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html",
      "description": "Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type",
      "accessLevel": "Write"
    },
    "SetIdentityMailFromDomain": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html",
      "description": "Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain)",
      "accessLevel": "Write"
    },
    "SetIdentityNotificationTopic": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html",
      "description": "Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source",
      "accessLevel": "Write"
    },
    "SetReceiptRulePosition": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html",
      "description": "Sets the position of the specified receipt rule in the receipt rule set",
      "accessLevel": "Write"
    },
    "TestRenderTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html",
      "description": "Creates a preview of the MIME content of an email when provided with a template and a set of replacement data",
      "accessLevel": "Write"
    },
    "UpdateAccountSendingEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html",
      "description": "Enables or disables email sending across your entire Amazon SES account in the current AWS Region",
      "accessLevel": "Write"
    },
    "UpdateConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html",
      "description": "Updates the event destination of a configuration set",
      "accessLevel": "Write"
    },
    "UpdateConfigurationSetReputationMetricsEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html",
      "description": "Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region",
      "accessLevel": "Write"
    },
    "UpdateConfigurationSetSendingEnabled": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html",
      "description": "Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region",
      "accessLevel": "Write"
    },
    "UpdateConfigurationSetTrackingOptions": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html",
      "description": "Modifies an association between a configuration set and a custom domain for open and click event tracking",
      "accessLevel": "Write"
    },
    "UpdateCustomVerificationEmailTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html",
      "description": "Updates an existing custom verification email template",
      "accessLevel": "Write"
    },
    "UpdateReceiptRule": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html",
      "description": "Updates a receipt rule",
      "accessLevel": "Write"
    },
    "UpdateTemplate": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html",
      "description": "Updates an email template",
      "accessLevel": "Write"
    },
    "VerifyDomainDkim": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html",
      "description": "Returns a set of DKIM tokens for a domain",
      "accessLevel": "Read"
    },
    "VerifyDomainIdentity": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html",
      "description": "Verifies a domain",
      "accessLevel": "Read"
    },
    "VerifyEmailAddress": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html",
      "description": "Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second",
      "accessLevel": "Read"
    },
    "VerifyEmailIdentity": {
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html",
      "description": "Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {
    "configuration-set": {
      "name": "configuration-set",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}",
      "conditionKeys": []
    },
    "custom-verification-email-template": {
      "name": "custom-verification-email-template",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_CustomVerificationEmailTemplate.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:custom-verification-email-template/${CustomVerificationEmailTemplateName}",
      "conditionKeys": []
    },
    "event-destination": {
      "name": "event-destination",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_EventDestination.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}:event-destination/${EventDestinationName}",
      "conditionKeys": []
    },
    "identity": {
      "name": "identity",
      "url": "",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:identity/${IdentityName}",
      "conditionKeys": []
    },
    "receipt-filter": {
      "name": "receipt-filter",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptFilter.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:receipt-filter/${ReceiptFilterName}",
      "conditionKeys": []
    },
    "receipt-rule": {
      "name": "receipt-rule",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptRule.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:receipt-rule-set/${ReceiptRuleSetName}:receipt-rule/${ReceiptRuleName}",
      "conditionKeys": []
    },
    "receipt-rule-set": {
      "name": "receipt-rule-set",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptRuleSetMetadata.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:receipt-rule-set/${ReceiptRuleSetName}",
      "conditionKeys": []
    },
    "template": {
      "name": "template",
      "url": "https://docs.aws.amazon.com/ses/latest/APIReference/API_Template.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:template/${TemplateName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service ses
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates a receipt rule set by cloning an existing one
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html
   */
  public cloneReceiptRuleSet() {
    this.add('ses:CloneReceiptRuleSet');
    return this;
  }

  /**
   * Creates a new configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html
   */
  public createConfigurationSet() {
    this.add('ses:CreateConfigurationSet');
    return this;
  }

  /**
   * Creates a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public createConfigurationSetEventDestination() {
    this.add('ses:CreateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Creates an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html
   */
  public createConfigurationSetTrackingOptions() {
    this.add('ses:CreateConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Creates a new custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html
   */
  public createCustomVerificationEmailTemplate() {
    this.add('ses:CreateCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Creates a new IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html
   */
  public createReceiptFilter() {
    this.add('ses:CreateReceiptFilter');
    return this;
  }

  /**
   * Creates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html
   */
  public createReceiptRule() {
    this.add('ses:CreateReceiptRule');
    return this;
  }

  /**
   * Creates an empty receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html
   */
  public createReceiptRuleSet() {
    this.add('ses:CreateReceiptRuleSet');
    return this;
  }

  /**
   * Creates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html
   */
  public createTemplate() {
    this.add('ses:CreateTemplate');
    return this;
  }

  /**
   * Deletes the configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public deleteConfigurationSet() {
    this.add('ses:DeleteConfigurationSet');
    return this;
  }

  /**
   * Deletes a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public deleteConfigurationSetEventDestination() {
    this.add('ses:DeleteConfigurationSetEventDestination');
    return this;
  }

  /**
   * Deletes an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html
   */
  public deleteConfigurationSetTrackingOptions() {
    this.add('ses:DeleteConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Deletes an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html
   */
  public deleteCustomVerificationEmailTemplate() {
    this.add('ses:DeleteCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html
   */
  public deleteIdentity() {
    this.add('ses:DeleteIdentity');
    return this;
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html
   */
  public deleteIdentityPolicy() {
    this.add('ses:DeleteIdentityPolicy');
    return this;
  }

  /**
   * Deletes the specified IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html
   */
  public deleteReceiptFilter() {
    this.add('ses:DeleteReceiptFilter');
    return this;
  }

  /**
   * Deletes the specified receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html
   */
  public deleteReceiptRule() {
    this.add('ses:DeleteReceiptRule');
    return this;
  }

  /**
   * Deletes the specified receipt rule set and all of the receipt rules it contains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html
   */
  public deleteReceiptRuleSet() {
    this.add('ses:DeleteReceiptRuleSet');
    return this;
  }

  /**
   * Deletes an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html
   */
  public deleteTemplate() {
    this.add('ses:DeleteTemplate');
    return this;
  }

  /**
   * Deletes the specified email address from the list of verified addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html
   */
  public deleteVerifiedEmailAddress() {
    this.add('ses:DeleteVerifiedEmailAddress');
    return this;
  }

  /**
   * Returns the metadata and receipt rules for the receipt rule set that is currently active
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html
   */
  public describeActiveReceiptRuleSet() {
    this.add('ses:DescribeActiveReceiptRuleSet');
    return this;
  }

  /**
   * Returns the details of the specified configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html
   */
  public describeConfigurationSet() {
    this.add('ses:DescribeConfigurationSet');
    return this;
  }

  /**
   * Returns the details of the specified receipt rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html
   */
  public describeReceiptRule() {
    this.add('ses:DescribeReceiptRule');
    return this;
  }

  /**
   * Returns the details of the specified receipt rule set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html
   */
  public describeReceiptRuleSet() {
    this.add('ses:DescribeReceiptRuleSet');
    return this;
  }

  /**
   * Returns the email sending status of the Amazon SES account for the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html
   */
  public getAccountSendingEnabled() {
    this.add('ses:GetAccountSendingEnabled');
    return this;
  }

  /**
   * Returns the custom email verification template for the template name you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html
   */
  public getCustomVerificationEmailTemplate() {
    this.add('ses:GetCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Returns the current status of Easy DKIM signing for an entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html
   */
  public getIdentityDkimAttributes() {
    this.add('ses:GetIdentityDkimAttributes');
    return this;
  }

  /**
   * Returns the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html
   */
  public getIdentityMailFromDomainAttributes() {
    this.add('ses:GetIdentityMailFromDomainAttributes');
    return this;
  }

  /**
   * Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html
   */
  public getIdentityNotificationAttributes() {
    this.add('ses:GetIdentityNotificationAttributes');
    return this;
  }

  /**
   * Returns the requested sending authorization policies for the given identity (an email address or a domain)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html
   */
  public getIdentityPolicies() {
    this.add('ses:GetIdentityPolicies');
    return this;
  }

  /**
   * Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html
   */
  public getIdentityVerificationAttributes() {
    this.add('ses:GetIdentityVerificationAttributes');
    return this;
  }

  /**
   * Returns the user's current sending limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html
   */
  public getSendQuota() {
    this.add('ses:GetSendQuota');
    return this;
  }

  /**
   * Returns the user's sending statistics. The result is a list of data points, representing the last two weeks of sending activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html
   */
  public getSendStatistics() {
    this.add('ses:GetSendStatistics');
    return this;
  }

  /**
   * Returns the template object (which includes the Subject line, HTML part and text part) for the template you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html
   */
  public getTemplate() {
    this.add('ses:GetTemplate');
    return this;
  }

  /**
   * Returns a list of the configuration sets associated with your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html
   */
  public listConfigurationSets() {
    this.add('ses:ListConfigurationSets');
    return this;
  }

  /**
   * Lists the existing custom verification email templates for your account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html
   */
  public listCustomVerificationEmailTemplates() {
    this.add('ses:ListCustomVerificationEmailTemplates');
    return this;
  }

  /**
   * Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html
   */
  public listIdentities() {
    this.add('ses:ListIdentities');
    return this;
  }

  /**
   * Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html
   */
  public listIdentityPolicies() {
    this.add('ses:ListIdentityPolicies');
    return this;
  }

  /**
   * Lists the IP address filters associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html
   */
  public listReceiptFilters() {
    this.add('ses:ListReceiptFilters');
    return this;
  }

  /**
   * Lists the receipt rule sets that exist under your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html
   */
  public listReceiptRuleSets() {
    this.add('ses:ListReceiptRuleSets');
    return this;
  }

  /**
   * Lists the email templates present in your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html
   */
  public listTemplates() {
    this.add('ses:ListTemplates');
    return this;
  }

  /**
   * Returns a list containing all of the email addresses that have been verified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html
   */
  public listVerifiedEmailAddresses() {
    this.add('ses:ListVerifiedEmailAddresses');
    return this;
  }

  /**
   * Adds or updates a sending authorization policy for the specified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html
   */
  public putIdentityPolicy() {
    this.add('ses:PutIdentityPolicy');
    return this;
  }

  /**
   * Reorders the receipt rules within a receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html
   */
  public reorderReceiptRuleSet() {
    this.add('ses:ReorderReceiptRuleSet');
    return this;
  }

  /**
   * Generates and sends a bounce message to the sender of an email you received through Amazon SES
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html
   */
  public sendBounce() {
    this.add('ses:SendBounce');
    return this;
  }

  /**
   * Composes an email message to multiple destinations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html
   */
  public sendBulkTemplatedEmail() {
    this.add('ses:SendBulkTemplatedEmail');
    return this;
  }

  /**
   * Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendCustomVerificationEmail.html
   */
  public sendCustomVerificationEmail() {
    this.add('ses:SendCustomVerificationEmail');
    return this;
  }

  /**
   * Composes an email message based on input data, and then immediately queues the message for sending
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html
   */
  public sendEmail() {
    this.add('ses:SendEmail');
    return this;
  }

  /**
   * Sends an email message, with header and content specified by the client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html
   */
  public sendRawEmail() {
    this.add('ses:SendRawEmail');
    return this;
  }

  /**
   * Composes an email message using an email template and immediately queues it for sending
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html
   */
  public sendTemplatedEmail() {
    this.add('ses:SendTemplatedEmail');
    return this;
  }

  /**
   * Sets the specified receipt rule set as the active receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html
   */
  public setActiveReceiptRuleSet() {
    this.add('ses:SetActiveReceiptRuleSet');
    return this;
  }

  /**
   * Enables or disables Easy DKIM signing of email sent from an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html
   */
  public setIdentityDkimEnabled() {
    this.add('ses:SetIdentityDkimEnabled');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html
   */
  public setIdentityFeedbackForwardingEnabled() {
    this.add('ses:SetIdentityFeedbackForwardingEnabled');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html
   */
  public setIdentityHeadersInNotificationsEnabled() {
    this.add('ses:SetIdentityHeadersInNotificationsEnabled');
    return this;
  }

  /**
   * Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html
   */
  public setIdentityMailFromDomain() {
    this.add('ses:SetIdentityMailFromDomain');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html
   */
  public setIdentityNotificationTopic() {
    this.add('ses:SetIdentityNotificationTopic');
    return this;
  }

  /**
   * Sets the position of the specified receipt rule in the receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html
   */
  public setReceiptRulePosition() {
    this.add('ses:SetReceiptRulePosition');
    return this;
  }

  /**
   * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html
   */
  public testRenderTemplate() {
    this.add('ses:TestRenderTemplate');
    return this;
  }

  /**
   * Enables or disables email sending across your entire Amazon SES account in the current AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html
   */
  public updateAccountSendingEnabled() {
    this.add('ses:UpdateAccountSendingEnabled');
    return this;
  }

  /**
   * Updates the event destination of a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public updateConfigurationSetEventDestination() {
    this.add('ses:UpdateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html
   */
  public updateConfigurationSetReputationMetricsEnabled() {
    this.add('ses:UpdateConfigurationSetReputationMetricsEnabled');
    return this;
  }

  /**
   * Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html
   */
  public updateConfigurationSetSendingEnabled() {
    this.add('ses:UpdateConfigurationSetSendingEnabled');
    return this;
  }

  /**
   * Modifies an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html
   */
  public updateConfigurationSetTrackingOptions() {
    this.add('ses:UpdateConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Updates an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html
   */
  public updateCustomVerificationEmailTemplate() {
    this.add('ses:UpdateCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Updates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html
   */
  public updateReceiptRule() {
    this.add('ses:UpdateReceiptRule');
    return this;
  }

  /**
   * Updates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html
   */
  public updateTemplate() {
    this.add('ses:UpdateTemplate');
    return this;
  }

  /**
   * Returns a set of DKIM tokens for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html
   */
  public verifyDomainDkim() {
    this.add('ses:VerifyDomainDkim');
    return this;
  }

  /**
   * Verifies a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html
   */
  public verifyDomainIdentity() {
    this.add('ses:VerifyDomainIdentity');
    return this;
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html
   */
  public verifyEmailAddress() {
    this.add('ses:VerifyEmailAddress');
    return this;
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html
   */
  public verifyEmailIdentity() {
    this.add('ses:VerifyEmailIdentity');
    return this;
  }

  /**
   * Adds a resource of type configuration-set to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}';
    arn = arn.replace('${ConfigurationSetName}', configurationSetName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type custom-verification-email-template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CustomVerificationEmailTemplate.html
   *
   * @param customVerificationEmailTemplateName - Identifier for the customVerificationEmailTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCustomVerificationEmailTemplate(customVerificationEmailTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:custom-verification-email-template/${CustomVerificationEmailTemplateName}';
    arn = arn.replace('${CustomVerificationEmailTemplateName}', customVerificationEmailTemplateName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-destination to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_EventDestination.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param eventDestinationName - Identifier for the eventDestinationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventDestination(configurationSetName: string, eventDestinationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}:event-destination/${EventDestinationName}';
    arn = arn.replace('${ConfigurationSetName}', configurationSetName);
    arn = arn.replace('${EventDestinationName}', eventDestinationName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * @param identityName - Identifier for the identityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIdentity(identityName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:identity/${IdentityName}';
    arn = arn.replace('${IdentityName}', identityName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type receipt-filter to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptFilter.html
   *
   * @param receiptFilterName - Identifier for the receiptFilterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReceiptFilter(receiptFilterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:receipt-filter/${ReceiptFilterName}';
    arn = arn.replace('${ReceiptFilterName}', receiptFilterName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type receipt-rule to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptRule.html
   *
   * @param receiptRuleSetName - Identifier for the receiptRuleSetName.
   * @param receiptRuleName - Identifier for the receiptRuleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReceiptRule(receiptRuleSetName: string, receiptRuleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:receipt-rule-set/${ReceiptRuleSetName}:receipt-rule/${ReceiptRuleName}';
    arn = arn.replace('${ReceiptRuleSetName}', receiptRuleSetName);
    arn = arn.replace('${ReceiptRuleName}', receiptRuleName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type receipt-rule-set to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReceiptRuleSetMetadata.html
   *
   * @param receiptRuleSetName - Identifier for the receiptRuleSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReceiptRuleSet(receiptRuleSetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:receipt-rule-set/${ReceiptRuleSetName}';
    arn = arn.replace('${ReceiptRuleSetName}', receiptRuleSetName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_Template.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:template/${TemplateName}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFeedbackAddress(value: string | string[], operator?: string) {
    return this.if(`ses:FeedbackAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address of a message.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromAddress(value: string | string[], operator?: string) {
    return this.if(`ses:FromAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address that is used as the display name of a message.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromDisplayName(value: string | string[], operator?: string) {
    return this.if(`ses:FromDisplayName`, value, operator || 'StringLike');
  }

  /**
   * The recipient addresses of a message, which include the "To", "CC", and "BCC" addresses.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecipients(value: string | string[], operator?: string) {
    return this.if(`ses:Recipients`, value, operator || 'StringLike');
  }
}
