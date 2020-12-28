import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ses](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonses.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ses extends PolicyStatement {
  public servicePrefix = 'ses';

  /**
   * Statement provider for service [ses](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonses.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a receipt rule set by cloning an existing one
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html
   */
  public toCloneReceiptRuleSet() {
    return this.to('CloneReceiptRuleSet');
  }

  /**
   * Creates a new configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    return this.to('CreateConfigurationSet');
  }

  /**
   * Creates a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
  }

  /**
   * Creates an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html
   */
  public toCreateConfigurationSetTrackingOptions() {
    return this.to('CreateConfigurationSetTrackingOptions');
  }

  /**
   * Creates a new custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html
   */
  public toCreateCustomVerificationEmailTemplate() {
    return this.to('CreateCustomVerificationEmailTemplate');
  }

  /**
   * Creates a new IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html
   */
  public toCreateReceiptFilter() {
    return this.to('CreateReceiptFilter');
  }

  /**
   * Creates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html
   */
  public toCreateReceiptRule() {
    return this.to('CreateReceiptRule');
  }

  /**
   * Creates an empty receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html
   */
  public toCreateReceiptRuleSet() {
    return this.to('CreateReceiptRuleSet');
  }

  /**
   * Creates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    return this.to('CreateTemplate');
  }

  /**
   * Deletes the configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Deletes a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Deletes an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html
   */
  public toDeleteConfigurationSetTrackingOptions() {
    return this.to('DeleteConfigurationSetTrackingOptions');
  }

  /**
   * Deletes an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html
   */
  public toDeleteCustomVerificationEmailTemplate() {
    return this.to('DeleteCustomVerificationEmailTemplate');
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html
   */
  public toDeleteIdentity() {
    return this.to('DeleteIdentity');
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html
   */
  public toDeleteIdentityPolicy() {
    return this.to('DeleteIdentityPolicy');
  }

  /**
   * Deletes the specified IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html
   */
  public toDeleteReceiptFilter() {
    return this.to('DeleteReceiptFilter');
  }

  /**
   * Deletes the specified receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html
   */
  public toDeleteReceiptRule() {
    return this.to('DeleteReceiptRule');
  }

  /**
   * Deletes the specified receipt rule set and all of the receipt rules it contains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html
   */
  public toDeleteReceiptRuleSet() {
    return this.to('DeleteReceiptRuleSet');
  }

  /**
   * Deletes an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Deletes the specified email address from the list of verified addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html
   */
  public toDeleteVerifiedEmailAddress() {
    return this.to('DeleteVerifiedEmailAddress');
  }

  /**
   * Returns the metadata and receipt rules for the receipt rule set that is currently active
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html
   */
  public toDescribeActiveReceiptRuleSet() {
    return this.to('DescribeActiveReceiptRuleSet');
  }

  /**
   * Returns the details of the specified configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html
   */
  public toDescribeConfigurationSet() {
    return this.to('DescribeConfigurationSet');
  }

  /**
   * Returns the details of the specified receipt rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html
   */
  public toDescribeReceiptRule() {
    return this.to('DescribeReceiptRule');
  }

  /**
   * Returns the details of the specified receipt rule set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html
   */
  public toDescribeReceiptRuleSet() {
    return this.to('DescribeReceiptRuleSet');
  }

  /**
   * Returns the email sending status of the Amazon SES account for the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html
   */
  public toGetAccountSendingEnabled() {
    return this.to('GetAccountSendingEnabled');
  }

  /**
   * Returns the custom email verification template for the template name you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html
   */
  public toGetCustomVerificationEmailTemplate() {
    return this.to('GetCustomVerificationEmailTemplate');
  }

  /**
   * Returns the current status of Easy DKIM signing for an entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html
   */
  public toGetIdentityDkimAttributes() {
    return this.to('GetIdentityDkimAttributes');
  }

  /**
   * Returns the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html
   */
  public toGetIdentityMailFromDomainAttributes() {
    return this.to('GetIdentityMailFromDomainAttributes');
  }

  /**
   * Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html
   */
  public toGetIdentityNotificationAttributes() {
    return this.to('GetIdentityNotificationAttributes');
  }

  /**
   * Returns the requested sending authorization policies for the given identity (an email address or a domain)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html
   */
  public toGetIdentityPolicies() {
    return this.to('GetIdentityPolicies');
  }

  /**
   * Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html
   */
  public toGetIdentityVerificationAttributes() {
    return this.to('GetIdentityVerificationAttributes');
  }

  /**
   * Returns the user's current sending limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html
   */
  public toGetSendQuota() {
    return this.to('GetSendQuota');
  }

  /**
   * Returns the user's sending statistics. The result is a list of data points, representing the last two weeks of sending activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html
   */
  public toGetSendStatistics() {
    return this.to('GetSendStatistics');
  }

  /**
   * Returns the template object (which includes the Subject line, HTML part and text part) for the template you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Returns a list of the configuration sets associated with your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * Lists the existing custom verification email templates for your account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html
   */
  public toListCustomVerificationEmailTemplates() {
    return this.to('ListCustomVerificationEmailTemplates');
  }

  /**
   * Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    return this.to('ListIdentities');
  }

  /**
   * Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html
   */
  public toListIdentityPolicies() {
    return this.to('ListIdentityPolicies');
  }

  /**
   * Lists the IP address filters associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html
   */
  public toListReceiptFilters() {
    return this.to('ListReceiptFilters');
  }

  /**
   * Lists the receipt rule sets that exist under your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html
   */
  public toListReceiptRuleSets() {
    return this.to('ListReceiptRuleSets');
  }

  /**
   * Lists the email templates present in your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Returns a list containing all of the email addresses that have been verified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html
   */
  public toListVerifiedEmailAddresses() {
    return this.to('ListVerifiedEmailAddresses');
  }

  /**
   * Adds or updates a sending authorization policy for the specified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html
   */
  public toPutIdentityPolicy() {
    return this.to('PutIdentityPolicy');
  }

  /**
   * Reorders the receipt rules within a receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html
   */
  public toReorderReceiptRuleSet() {
    return this.to('ReorderReceiptRuleSet');
  }

  /**
   * Generates and sends a bounce message to the sender of an email you received through Amazon SES
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromAddress()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html
   */
  public toSendBounce() {
    return this.to('SendBounce');
  }

  /**
   * Composes an email message to multiple destinations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html
   */
  public toSendBulkTemplatedEmail() {
    return this.to('SendBulkTemplatedEmail');
  }

  /**
   * Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendCustomVerificationEmail.html
   */
  public toSendCustomVerificationEmail() {
    return this.to('SendCustomVerificationEmail');
  }

  /**
   * Composes an email message based on input data, and then immediately queues the message for sending
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html
   */
  public toSendEmail() {
    return this.to('SendEmail');
  }

  /**
   * Sends an email message, with header and content specified by the client
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html
   */
  public toSendRawEmail() {
    return this.to('SendRawEmail');
  }

  /**
   * Composes an email message using an email template and immediately queues it for sending
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html
   */
  public toSendTemplatedEmail() {
    return this.to('SendTemplatedEmail');
  }

  /**
   * Sets the specified receipt rule set as the active receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html
   */
  public toSetActiveReceiptRuleSet() {
    return this.to('SetActiveReceiptRuleSet');
  }

  /**
   * Enables or disables Easy DKIM signing of email sent from an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html
   */
  public toSetIdentityDkimEnabled() {
    return this.to('SetIdentityDkimEnabled');
  }

  /**
   * Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html
   */
  public toSetIdentityFeedbackForwardingEnabled() {
    return this.to('SetIdentityFeedbackForwardingEnabled');
  }

  /**
   * Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html
   */
  public toSetIdentityHeadersInNotificationsEnabled() {
    return this.to('SetIdentityHeadersInNotificationsEnabled');
  }

  /**
   * Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html
   */
  public toSetIdentityMailFromDomain() {
    return this.to('SetIdentityMailFromDomain');
  }

  /**
   * Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html
   */
  public toSetIdentityNotificationTopic() {
    return this.to('SetIdentityNotificationTopic');
  }

  /**
   * Sets the position of the specified receipt rule in the receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html
   */
  public toSetReceiptRulePosition() {
    return this.to('SetReceiptRulePosition');
  }

  /**
   * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html
   */
  public toTestRenderTemplate() {
    return this.to('TestRenderTemplate');
  }

  /**
   * Enables or disables email sending across your entire Amazon SES account in the current AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html
   */
  public toUpdateAccountSendingEnabled() {
    return this.to('UpdateAccountSendingEnabled');
  }

  /**
   * Updates the event destination of a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
  }

  /**
   * Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html
   */
  public toUpdateConfigurationSetReputationMetricsEnabled() {
    return this.to('UpdateConfigurationSetReputationMetricsEnabled');
  }

  /**
   * Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html
   */
  public toUpdateConfigurationSetSendingEnabled() {
    return this.to('UpdateConfigurationSetSendingEnabled');
  }

  /**
   * Modifies an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html
   */
  public toUpdateConfigurationSetTrackingOptions() {
    return this.to('UpdateConfigurationSetTrackingOptions');
  }

  /**
   * Updates an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html
   */
  public toUpdateCustomVerificationEmailTemplate() {
    return this.to('UpdateCustomVerificationEmailTemplate');
  }

  /**
   * Updates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html
   */
  public toUpdateReceiptRule() {
    return this.to('UpdateReceiptRule');
  }

  /**
   * Updates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  /**
   * Returns a set of DKIM tokens for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html
   */
  public toVerifyDomainDkim() {
    return this.to('VerifyDomainDkim');
  }

  /**
   * Verifies a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html
   */
  public toVerifyDomainIdentity() {
    return this.to('VerifyDomainIdentity');
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html
   */
  public toVerifyEmailAddress() {
    return this.to('VerifyEmailAddress');
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html
   */
  public toVerifyEmailIdentity() {
    return this.to('VerifyEmailIdentity');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CloneReceiptRuleSet",
      "CreateConfigurationSet",
      "CreateConfigurationSetEventDestination",
      "CreateConfigurationSetTrackingOptions",
      "CreateCustomVerificationEmailTemplate",
      "CreateReceiptFilter",
      "CreateReceiptRule",
      "CreateReceiptRuleSet",
      "CreateTemplate",
      "DeleteConfigurationSet",
      "DeleteConfigurationSetEventDestination",
      "DeleteConfigurationSetTrackingOptions",
      "DeleteCustomVerificationEmailTemplate",
      "DeleteIdentity",
      "DeleteIdentityPolicy",
      "DeleteReceiptFilter",
      "DeleteReceiptRule",
      "DeleteReceiptRuleSet",
      "DeleteTemplate",
      "DeleteVerifiedEmailAddress",
      "PutIdentityPolicy",
      "ReorderReceiptRuleSet",
      "SendBounce",
      "SendBulkTemplatedEmail",
      "SendCustomVerificationEmail",
      "SendEmail",
      "SendRawEmail",
      "SendTemplatedEmail",
      "SetActiveReceiptRuleSet",
      "SetIdentityDkimEnabled",
      "SetIdentityFeedbackForwardingEnabled",
      "SetIdentityHeadersInNotificationsEnabled",
      "SetIdentityMailFromDomain",
      "SetIdentityNotificationTopic",
      "SetReceiptRulePosition",
      "TestRenderTemplate",
      "UpdateAccountSendingEnabled",
      "UpdateConfigurationSetEventDestination",
      "UpdateConfigurationSetReputationMetricsEnabled",
      "UpdateConfigurationSetSendingEnabled",
      "UpdateConfigurationSetTrackingOptions",
      "UpdateCustomVerificationEmailTemplate",
      "UpdateReceiptRule",
      "UpdateTemplate"
    ],
    "Read": [
      "DescribeActiveReceiptRuleSet",
      "DescribeConfigurationSet",
      "DescribeReceiptRule",
      "DescribeReceiptRuleSet",
      "GetAccountSendingEnabled",
      "GetCustomVerificationEmailTemplate",
      "GetIdentityDkimAttributes",
      "GetIdentityMailFromDomainAttributes",
      "GetIdentityNotificationAttributes",
      "GetIdentityPolicies",
      "GetIdentityVerificationAttributes",
      "GetSendQuota",
      "GetSendStatistics",
      "GetTemplate",
      "VerifyDomainDkim",
      "VerifyDomainIdentity",
      "VerifyEmailAddress",
      "VerifyEmailIdentity"
    ],
    "List": [
      "ListConfigurationSets",
      "ListCustomVerificationEmailTemplates",
      "ListIdentities",
      "ListIdentityPolicies",
      "ListReceiptFilters",
      "ListReceiptRuleSets",
      "ListTemplates",
      "ListVerifiedEmailAddresses"
    ]
  };

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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * Applies to actions:
   * - .toSendBulkTemplatedEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toSendRawEmail()
   * - .toSendTemplatedEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFeedbackAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`FeedbackAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address of a message.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * Applies to actions:
   * - .toSendBounce()
   * - .toSendBulkTemplatedEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toSendRawEmail()
   * - .toSendTemplatedEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`FromAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address that is used as the display name of a message.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * Applies to actions:
   * - .toSendBulkTemplatedEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toSendRawEmail()
   * - .toSendTemplatedEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromDisplayName(value: string | string[], operator?: Operator | string) {
    return this.if(`FromDisplayName`, value, operator || 'StringLike');
  }

  /**
   * The recipient addresses of a message, which include the "To", "CC", and "BCC" addresses.
   *
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html#email-header
   *
   * Applies to actions:
   * - .toSendBulkTemplatedEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toSendRawEmail()
   * - .toSendTemplatedEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecipients(value: string | string[], operator?: Operator | string) {
    return this.if(`Recipients`, value, operator || 'StringLike');
  }
}
