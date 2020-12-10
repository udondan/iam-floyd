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
    this.to('ses:CloneReceiptRuleSet');
    return this;
  }

  /**
   * Creates a new configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    this.to('ses:CreateConfigurationSet');
    return this;
  }

  /**
   * Creates a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    this.to('ses:CreateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Creates an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html
   */
  public toCreateConfigurationSetTrackingOptions() {
    this.to('ses:CreateConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Creates a new custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html
   */
  public toCreateCustomVerificationEmailTemplate() {
    this.to('ses:CreateCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Creates a new IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html
   */
  public toCreateReceiptFilter() {
    this.to('ses:CreateReceiptFilter');
    return this;
  }

  /**
   * Creates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html
   */
  public toCreateReceiptRule() {
    this.to('ses:CreateReceiptRule');
    return this;
  }

  /**
   * Creates an empty receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html
   */
  public toCreateReceiptRuleSet() {
    this.to('ses:CreateReceiptRuleSet');
    return this;
  }

  /**
   * Creates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    this.to('ses:CreateTemplate');
    return this;
  }

  /**
   * Deletes the configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    this.to('ses:DeleteConfigurationSet');
    return this;
  }

  /**
   * Deletes a configuration set event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    this.to('ses:DeleteConfigurationSetEventDestination');
    return this;
  }

  /**
   * Deletes an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html
   */
  public toDeleteConfigurationSetTrackingOptions() {
    this.to('ses:DeleteConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Deletes an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html
   */
  public toDeleteCustomVerificationEmailTemplate() {
    this.to('ses:DeleteCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html
   */
  public toDeleteIdentity() {
    this.to('ses:DeleteIdentity');
    return this;
  }

  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html
   */
  public toDeleteIdentityPolicy() {
    this.to('ses:DeleteIdentityPolicy');
    return this;
  }

  /**
   * Deletes the specified IP address filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html
   */
  public toDeleteReceiptFilter() {
    this.to('ses:DeleteReceiptFilter');
    return this;
  }

  /**
   * Deletes the specified receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html
   */
  public toDeleteReceiptRule() {
    this.to('ses:DeleteReceiptRule');
    return this;
  }

  /**
   * Deletes the specified receipt rule set and all of the receipt rules it contains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html
   */
  public toDeleteReceiptRuleSet() {
    this.to('ses:DeleteReceiptRuleSet');
    return this;
  }

  /**
   * Deletes an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    this.to('ses:DeleteTemplate');
    return this;
  }

  /**
   * Deletes the specified email address from the list of verified addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html
   */
  public toDeleteVerifiedEmailAddress() {
    this.to('ses:DeleteVerifiedEmailAddress');
    return this;
  }

  /**
   * Returns the metadata and receipt rules for the receipt rule set that is currently active
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html
   */
  public toDescribeActiveReceiptRuleSet() {
    this.to('ses:DescribeActiveReceiptRuleSet');
    return this;
  }

  /**
   * Returns the details of the specified configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html
   */
  public toDescribeConfigurationSet() {
    this.to('ses:DescribeConfigurationSet');
    return this;
  }

  /**
   * Returns the details of the specified receipt rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html
   */
  public toDescribeReceiptRule() {
    this.to('ses:DescribeReceiptRule');
    return this;
  }

  /**
   * Returns the details of the specified receipt rule set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html
   */
  public toDescribeReceiptRuleSet() {
    this.to('ses:DescribeReceiptRuleSet');
    return this;
  }

  /**
   * Returns the email sending status of the Amazon SES account for the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html
   */
  public toGetAccountSendingEnabled() {
    this.to('ses:GetAccountSendingEnabled');
    return this;
  }

  /**
   * Returns the custom email verification template for the template name you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html
   */
  public toGetCustomVerificationEmailTemplate() {
    this.to('ses:GetCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Returns the current status of Easy DKIM signing for an entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html
   */
  public toGetIdentityDkimAttributes() {
    this.to('ses:GetIdentityDkimAttributes');
    return this;
  }

  /**
   * Returns the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html
   */
  public toGetIdentityMailFromDomainAttributes() {
    this.to('ses:GetIdentityMailFromDomainAttributes');
    return this;
  }

  /**
   * Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html
   */
  public toGetIdentityNotificationAttributes() {
    this.to('ses:GetIdentityNotificationAttributes');
    return this;
  }

  /**
   * Returns the requested sending authorization policies for the given identity (an email address or a domain)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html
   */
  public toGetIdentityPolicies() {
    this.to('ses:GetIdentityPolicies');
    return this;
  }

  /**
   * Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html
   */
  public toGetIdentityVerificationAttributes() {
    this.to('ses:GetIdentityVerificationAttributes');
    return this;
  }

  /**
   * Returns the user's current sending limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html
   */
  public toGetSendQuota() {
    this.to('ses:GetSendQuota');
    return this;
  }

  /**
   * Returns the user's sending statistics. The result is a list of data points, representing the last two weeks of sending activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html
   */
  public toGetSendStatistics() {
    this.to('ses:GetSendStatistics');
    return this;
  }

  /**
   * Returns the template object (which includes the Subject line, HTML part and text part) for the template you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    this.to('ses:GetTemplate');
    return this;
  }

  /**
   * Returns a list of the configuration sets associated with your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    this.to('ses:ListConfigurationSets');
    return this;
  }

  /**
   * Lists the existing custom verification email templates for your account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html
   */
  public toListCustomVerificationEmailTemplates() {
    this.to('ses:ListCustomVerificationEmailTemplates');
    return this;
  }

  /**
   * Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    this.to('ses:ListIdentities');
    return this;
  }

  /**
   * Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html
   */
  public toListIdentityPolicies() {
    this.to('ses:ListIdentityPolicies');
    return this;
  }

  /**
   * Lists the IP address filters associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html
   */
  public toListReceiptFilters() {
    this.to('ses:ListReceiptFilters');
    return this;
  }

  /**
   * Lists the receipt rule sets that exist under your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html
   */
  public toListReceiptRuleSets() {
    this.to('ses:ListReceiptRuleSets');
    return this;
  }

  /**
   * Lists the email templates present in your Amazon SES account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    this.to('ses:ListTemplates');
    return this;
  }

  /**
   * Returns a list containing all of the email addresses that have been verified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html
   */
  public toListVerifiedEmailAddresses() {
    this.to('ses:ListVerifiedEmailAddresses');
    return this;
  }

  /**
   * Adds or updates a sending authorization policy for the specified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html
   */
  public toPutIdentityPolicy() {
    this.to('ses:PutIdentityPolicy');
    return this;
  }

  /**
   * Reorders the receipt rules within a receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html
   */
  public toReorderReceiptRuleSet() {
    this.to('ses:ReorderReceiptRuleSet');
    return this;
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
    this.to('ses:SendBounce');
    return this;
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
    this.to('ses:SendBulkTemplatedEmail');
    return this;
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
    this.to('ses:SendCustomVerificationEmail');
    return this;
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
    this.to('ses:SendEmail');
    return this;
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
    this.to('ses:SendRawEmail');
    return this;
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
    this.to('ses:SendTemplatedEmail');
    return this;
  }

  /**
   * Sets the specified receipt rule set as the active receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html
   */
  public toSetActiveReceiptRuleSet() {
    this.to('ses:SetActiveReceiptRuleSet');
    return this;
  }

  /**
   * Enables or disables Easy DKIM signing of email sent from an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html
   */
  public toSetIdentityDkimEnabled() {
    this.to('ses:SetIdentityDkimEnabled');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html
   */
  public toSetIdentityFeedbackForwardingEnabled() {
    this.to('ses:SetIdentityFeedbackForwardingEnabled');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html
   */
  public toSetIdentityHeadersInNotificationsEnabled() {
    this.to('ses:SetIdentityHeadersInNotificationsEnabled');
    return this;
  }

  /**
   * Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html
   */
  public toSetIdentityMailFromDomain() {
    this.to('ses:SetIdentityMailFromDomain');
    return this;
  }

  /**
   * Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html
   */
  public toSetIdentityNotificationTopic() {
    this.to('ses:SetIdentityNotificationTopic');
    return this;
  }

  /**
   * Sets the position of the specified receipt rule in the receipt rule set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html
   */
  public toSetReceiptRulePosition() {
    this.to('ses:SetReceiptRulePosition');
    return this;
  }

  /**
   * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html
   */
  public toTestRenderTemplate() {
    this.to('ses:TestRenderTemplate');
    return this;
  }

  /**
   * Enables or disables email sending across your entire Amazon SES account in the current AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html
   */
  public toUpdateAccountSendingEnabled() {
    this.to('ses:UpdateAccountSendingEnabled');
    return this;
  }

  /**
   * Updates the event destination of a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    this.to('ses:UpdateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html
   */
  public toUpdateConfigurationSetReputationMetricsEnabled() {
    this.to('ses:UpdateConfigurationSetReputationMetricsEnabled');
    return this;
  }

  /**
   * Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html
   */
  public toUpdateConfigurationSetSendingEnabled() {
    this.to('ses:UpdateConfigurationSetSendingEnabled');
    return this;
  }

  /**
   * Modifies an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html
   */
  public toUpdateConfigurationSetTrackingOptions() {
    this.to('ses:UpdateConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Updates an existing custom verification email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html
   */
  public toUpdateCustomVerificationEmailTemplate() {
    this.to('ses:UpdateCustomVerificationEmailTemplate');
    return this;
  }

  /**
   * Updates a receipt rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html
   */
  public toUpdateReceiptRule() {
    this.to('ses:UpdateReceiptRule');
    return this;
  }

  /**
   * Updates an email template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    this.to('ses:UpdateTemplate');
    return this;
  }

  /**
   * Returns a set of DKIM tokens for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html
   */
  public toVerifyDomainDkim() {
    this.to('ses:VerifyDomainDkim');
    return this;
  }

  /**
   * Verifies a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html
   */
  public toVerifyDomainIdentity() {
    this.to('ses:VerifyDomainIdentity');
    return this;
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html
   */
  public toVerifyEmailAddress() {
    this.to('ses:VerifyEmailAddress');
    return this;
  }

  /**
   * Verifies an email address. This action causes a confirmation email message to be sent to the specified address. This action is throttled at one request per second
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html
   */
  public toVerifyEmailIdentity() {
    this.to('ses:VerifyEmailIdentity');
    return this;
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
    return this.if(`ses:FeedbackAddress`, value, operator || 'StringLike');
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
    return this.if(`ses:FromAddress`, value, operator || 'StringLike');
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
    return this.if(`ses:FromDisplayName`, value, operator || 'StringLike');
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
    return this.if(`ses:Recipients`, value, operator || 'StringLike');
  }
}

export type SesActionsWrite = 'CloneReceiptRuleSet' | 'CreateConfigurationSet' | 'CreateConfigurationSetEventDestination' | 'CreateConfigurationSetTrackingOptions' | 'CreateCustomVerificationEmailTemplate' | 'CreateReceiptFilter' | 'CreateReceiptRule' | 'CreateReceiptRuleSet' | 'CreateTemplate' | 'DeleteConfigurationSet' | 'DeleteConfigurationSetEventDestination' | 'DeleteConfigurationSetTrackingOptions' | 'DeleteCustomVerificationEmailTemplate' | 'DeleteIdentity' | 'DeleteIdentityPolicy' | 'DeleteReceiptFilter' | 'DeleteReceiptRule' | 'DeleteReceiptRuleSet' | 'DeleteTemplate' | 'DeleteVerifiedEmailAddress' | 'PutIdentityPolicy' | 'ReorderReceiptRuleSet' | 'SendBounce' | 'SendBulkTemplatedEmail' | 'SendCustomVerificationEmail' | 'SendEmail' | 'SendRawEmail' | 'SendTemplatedEmail' | 'SetActiveReceiptRuleSet' | 'SetIdentityDkimEnabled' | 'SetIdentityFeedbackForwardingEnabled' | 'SetIdentityHeadersInNotificationsEnabled' | 'SetIdentityMailFromDomain' | 'SetIdentityNotificationTopic' | 'SetReceiptRulePosition' | 'TestRenderTemplate' | 'UpdateAccountSendingEnabled' | 'UpdateConfigurationSetEventDestination' | 'UpdateConfigurationSetReputationMetricsEnabled' | 'UpdateConfigurationSetSendingEnabled' | 'UpdateConfigurationSetTrackingOptions' | 'UpdateCustomVerificationEmailTemplate' | 'UpdateReceiptRule' | 'UpdateTemplate';
export type SesActionsRead = 'DescribeActiveReceiptRuleSet' | 'DescribeConfigurationSet' | 'DescribeReceiptRule' | 'DescribeReceiptRuleSet' | 'GetAccountSendingEnabled' | 'GetCustomVerificationEmailTemplate' | 'GetIdentityDkimAttributes' | 'GetIdentityMailFromDomainAttributes' | 'GetIdentityNotificationAttributes' | 'GetIdentityPolicies' | 'GetIdentityVerificationAttributes' | 'GetSendQuota' | 'GetSendStatistics' | 'GetTemplate' | 'VerifyDomainDkim' | 'VerifyDomainIdentity' | 'VerifyEmailAddress' | 'VerifyEmailIdentity';
export type SesActionsList = 'ListConfigurationSets' | 'ListCustomVerificationEmailTemplates' | 'ListIdentities' | 'ListIdentityPolicies' | 'ListReceiptFilters' | 'ListReceiptRuleSets' | 'ListTemplates' | 'ListVerifiedEmailAddresses';
export type SesActions = SesActionsWrite | SesActionsRead | SesActionsList;
