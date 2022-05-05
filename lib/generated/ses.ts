import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a receipt rule set by cloning an existing one
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html
   */
  public toCloneReceiptRuleSet() {
    return this.to('CloneReceiptRuleSet');
  }

  /**
   * Grants permission to create a new configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    return this.to('CreateConfigurationSet');
  }

  /**
   * Grants permission to create a configuration set event destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
  }

  /**
   * Grants permission to creates an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html
   */
  public toCreateConfigurationSetTrackingOptions() {
    return this.to('CreateConfigurationSetTrackingOptions');
  }

  /**
   * Grants permission to create a new custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html
   */
  public toCreateCustomVerificationEmailTemplate() {
    return this.to('CreateCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to create a new IP address filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html
   */
  public toCreateReceiptFilter() {
    return this.to('CreateReceiptFilter');
  }

  /**
   * Grants permission to create a receipt rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html
   */
  public toCreateReceiptRule() {
    return this.to('CreateReceiptRule');
  }

  /**
   * Grants permission to create an empty receipt rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html
   */
  public toCreateReceiptRuleSet() {
    return this.to('CreateReceiptRuleSet');
  }

  /**
   * Grants permission to creates an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    return this.to('CreateTemplate');
  }

  /**
   * Grants permission to delete an existing configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Grants permission to delete an event destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Grants permission to delete an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html
   */
  public toDeleteConfigurationSetTrackingOptions() {
    return this.to('DeleteConfigurationSetTrackingOptions');
  }

  /**
   * Grants permission to delete an existing custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html
   */
  public toDeleteCustomVerificationEmailTemplate() {
    return this.to('DeleteCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to delete the specified identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html
   */
  public toDeleteIdentity() {
    return this.to('DeleteIdentity');
  }

  /**
   * Grants permission to delete the specified sending authorization policy for the given identity (an email address or a domain)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html
   */
  public toDeleteIdentityPolicy() {
    return this.to('DeleteIdentityPolicy');
  }

  /**
   * Grants permission to delete the specified IP address filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html
   */
  public toDeleteReceiptFilter() {
    return this.to('DeleteReceiptFilter');
  }

  /**
   * Grants permission to delete the specified receipt rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html
   */
  public toDeleteReceiptRule() {
    return this.to('DeleteReceiptRule');
  }

  /**
   * Grants permission to delete the specified receipt rule set and all of the receipt rules it contains
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html
   */
  public toDeleteReceiptRuleSet() {
    return this.to('DeleteReceiptRuleSet');
  }

  /**
   * Grants permission to delete an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Grants permission to delete the specified email address from the list of verified addresses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html
   */
  public toDeleteVerifiedEmailAddress() {
    return this.to('DeleteVerifiedEmailAddress');
  }

  /**
   * Grants permission to return the metadata and receipt rules for the receipt rule set that is currently active
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html
   */
  public toDescribeActiveReceiptRuleSet() {
    return this.to('DescribeActiveReceiptRuleSet');
  }

  /**
   * Grants permission to return the details of the specified configuration set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html
   */
  public toDescribeConfigurationSet() {
    return this.to('DescribeConfigurationSet');
  }

  /**
   * Grants permission to return the details of the specified receipt rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html
   */
  public toDescribeReceiptRule() {
    return this.to('DescribeReceiptRule');
  }

  /**
   * Grants permission to return the details of the specified receipt rule set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html
   */
  public toDescribeReceiptRuleSet() {
    return this.to('DescribeReceiptRuleSet');
  }

  /**
   * Grants permission to return the email sending status of your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html
   */
  public toGetAccountSendingEnabled() {
    return this.to('GetAccountSendingEnabled');
  }

  /**
   * Grants permission to return the custom email verification template for the template name you specify
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html
   */
  public toGetCustomVerificationEmailTemplate() {
    return this.to('GetCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to return the current status of Easy DKIM signing for an entity
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html
   */
  public toGetIdentityDkimAttributes() {
    return this.to('GetIdentityDkimAttributes');
  }

  /**
   * Grants permission to return the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html
   */
  public toGetIdentityMailFromDomainAttributes() {
    return this.to('GetIdentityMailFromDomainAttributes');
  }

  /**
   * Grants permission to return a structure describing identity notification attributes for a list of verified identities (email addresses and/or domains),
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html
   */
  public toGetIdentityNotificationAttributes() {
    return this.to('GetIdentityNotificationAttributes');
  }

  /**
   * Grants permission to return the requested sending authorization policies for the given identity (an email address or a domain)
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html
   */
  public toGetIdentityPolicies() {
    return this.to('GetIdentityPolicies');
  }

  /**
   * Grants permission to return the verification status and (for domain identities) the verification token for a list of identities
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html
   */
  public toGetIdentityVerificationAttributes() {
    return this.to('GetIdentityVerificationAttributes');
  }

  /**
   * Grants permission to return the user's current sending limits
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html
   */
  public toGetSendQuota() {
    return this.to('GetSendQuota');
  }

  /**
   * Grants permission to returns the user's sending statistics
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html
   */
  public toGetSendStatistics() {
    return this.to('GetSendStatistics');
  }

  /**
   * Grants permission to return the template object, which includes the subject line, HTML par, and text part for the template you specify
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to list all of the configuration sets for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * Grants permission to list all of the existing custom verification email templates for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html
   */
  public toListCustomVerificationEmailTemplates() {
    return this.to('ListCustomVerificationEmailTemplates');
  }

  /**
   * Grants permission to list the email identities for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    return this.to('ListIdentities');
  }

  /**
   * Grants permission to list all of the email templates for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html
   */
  public toListIdentityPolicies() {
    return this.to('ListIdentityPolicies');
  }

  /**
   * Grants permission to list the IP address filters associated with your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html
   */
  public toListReceiptFilters() {
    return this.to('ListReceiptFilters');
  }

  /**
   * Grants permission to list the receipt rule sets that exist under your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html
   */
  public toListReceiptRuleSets() {
    return this.to('ListReceiptRuleSets');
  }

  /**
   * Grants permission to list the email templates present in your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to list all of the email addresses that have been verified in your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html
   */
  public toListVerifiedEmailAddresses() {
    return this.to('ListVerifiedEmailAddresses');
  }

  /**
   * Grants permission to add or update the delivery options for a configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   */
  public toPutConfigurationSetDeliveryOptions() {
    return this.to('PutConfigurationSetDeliveryOptions');
  }

  /**
   * Grants permission to add or update a sending authorization policy for the specified identity (an email address or a domain)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html
   */
  public toPutIdentityPolicy() {
    return this.to('PutIdentityPolicy');
  }

  /**
   * Grants permission to reorder the receipt rules within a receipt rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html
   */
  public toReorderReceiptRuleSet() {
    return this.to('ReorderReceiptRuleSet');
  }

  /**
   * Grants permission to generate and send a bounce message to the sender of an email you received through Amazon SES
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifFromAddress()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html
   */
  public toSendBounce() {
    return this.to('SendBounce');
  }

  /**
   * Grants permission to compose an email message to multiple destinations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
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
   * Grants permission to add an email address to the list of identities and attempts to verify it for your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
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
   * Grants permission to send an email message
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
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
   * Grants permission to send an email message, with header and content specified by the client
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
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
   * Grants permission to compose an email message using an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
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
   * Grants permission to set the specified receipt rule set as the active receipt rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html
   */
  public toSetActiveReceiptRuleSet() {
    return this.to('SetActiveReceiptRuleSet');
  }

  /**
   * Grants permission to enable or disable Easy DKIM signing of email sent from an identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html
   */
  public toSetIdentityDkimEnabled() {
    return this.to('SetIdentityDkimEnabled');
  }

  /**
   * Grants permission to enable or disable whether Amazon SES forwards bounce and complaint notifications for an identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html
   */
  public toSetIdentityFeedbackForwardingEnabled() {
    return this.to('SetIdentityFeedbackForwardingEnabled');
  }

  /**
   * Grants permission to set whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type for a given identity (an email address or a domain)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html
   */
  public toSetIdentityHeadersInNotificationsEnabled() {
    return this.to('SetIdentityHeadersInNotificationsEnabled');
  }

  /**
   * Grants permission to enable or disable the custom MAIL FROM domain setup for a verified identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html
   */
  public toSetIdentityMailFromDomain() {
    return this.to('SetIdentityMailFromDomain');
  }

  /**
   * Grants permission to set an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications for a verified identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html
   */
  public toSetIdentityNotificationTopic() {
    return this.to('SetIdentityNotificationTopic');
  }

  /**
   * Grants permission to set the position of the specified receipt rule in the receipt rule set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html
   */
  public toSetReceiptRulePosition() {
    return this.to('SetReceiptRulePosition');
  }

  /**
   * Grants permission to create a preview of the MIME content of an email when provided with a template and a set of replacement data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html
   */
  public toTestRenderTemplate() {
    return this.to('TestRenderTemplate');
  }

  /**
   * Grants permission to enable or disable email sending for your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html
   */
  public toUpdateAccountSendingEnabled() {
    return this.to('UpdateAccountSendingEnabled');
  }

  /**
   * Grants permission to update the event destination of a configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
  }

  /**
   * Grants permission to enable or disable the publishing of reputation metrics for emails sent using a specific configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html
   */
  public toUpdateConfigurationSetReputationMetricsEnabled() {
    return this.to('UpdateConfigurationSetReputationMetricsEnabled');
  }

  /**
   * Grants permission to enable or disable email sending for messages sent using a specific configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html
   */
  public toUpdateConfigurationSetSendingEnabled() {
    return this.to('UpdateConfigurationSetSendingEnabled');
  }

  /**
   * Grants permission to modify an association between a configuration set and a custom domain for open and click event tracking
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html
   */
  public toUpdateConfigurationSetTrackingOptions() {
    return this.to('UpdateConfigurationSetTrackingOptions');
  }

  /**
   * Grants permission to update an existing custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html
   */
  public toUpdateCustomVerificationEmailTemplate() {
    return this.to('UpdateCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to update a receipt rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html
   */
  public toUpdateReceiptRule() {
    return this.to('UpdateReceiptRule');
  }

  /**
   * Grants permission to update an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  /**
   * Grants permission to return a set of DKIM tokens for a domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html
   */
  public toVerifyDomainDkim() {
    return this.to('VerifyDomainDkim');
  }

  /**
   * Grants permission to verify a domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html
   */
  public toVerifyDomainIdentity() {
    return this.to('VerifyDomainIdentity');
  }

  /**
   * Grants permission to verify an email address
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html
   */
  public toVerifyEmailAddress() {
    return this.to('VerifyEmailAddress');
  }

  /**
   * Grants permission to verify an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html
   */
  public toVerifyEmailIdentity() {
    return this.to('VerifyEmailIdentity');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CloneReceiptRuleSet',
      'CreateConfigurationSet',
      'CreateConfigurationSetEventDestination',
      'CreateConfigurationSetTrackingOptions',
      'CreateCustomVerificationEmailTemplate',
      'CreateReceiptFilter',
      'CreateReceiptRule',
      'CreateReceiptRuleSet',
      'CreateTemplate',
      'DeleteConfigurationSet',
      'DeleteConfigurationSetEventDestination',
      'DeleteConfigurationSetTrackingOptions',
      'DeleteCustomVerificationEmailTemplate',
      'DeleteIdentity',
      'DeleteReceiptFilter',
      'DeleteReceiptRule',
      'DeleteReceiptRuleSet',
      'DeleteTemplate',
      'DeleteVerifiedEmailAddress',
      'PutConfigurationSetDeliveryOptions',
      'ReorderReceiptRuleSet',
      'SendBounce',
      'SendBulkTemplatedEmail',
      'SendCustomVerificationEmail',
      'SendEmail',
      'SendRawEmail',
      'SendTemplatedEmail',
      'SetActiveReceiptRuleSet',
      'SetIdentityDkimEnabled',
      'SetIdentityFeedbackForwardingEnabled',
      'SetIdentityHeadersInNotificationsEnabled',
      'SetIdentityMailFromDomain',
      'SetIdentityNotificationTopic',
      'SetReceiptRulePosition',
      'TestRenderTemplate',
      'UpdateAccountSendingEnabled',
      'UpdateConfigurationSetEventDestination',
      'UpdateConfigurationSetReputationMetricsEnabled',
      'UpdateConfigurationSetSendingEnabled',
      'UpdateConfigurationSetTrackingOptions',
      'UpdateCustomVerificationEmailTemplate',
      'UpdateReceiptRule',
      'UpdateTemplate',
      'VerifyDomainDkim',
      'VerifyDomainIdentity',
      'VerifyEmailAddress',
      'VerifyEmailIdentity'
    ],
    'Permissions management': [
      'DeleteIdentityPolicy',
      'PutIdentityPolicy'
    ],
    Read: [
      'DescribeActiveReceiptRuleSet',
      'DescribeConfigurationSet',
      'DescribeReceiptRule',
      'DescribeReceiptRuleSet',
      'GetAccountSendingEnabled',
      'GetCustomVerificationEmailTemplate',
      'GetIdentityDkimAttributes',
      'GetIdentityMailFromDomainAttributes',
      'GetIdentityNotificationAttributes',
      'GetIdentityPolicies',
      'GetIdentityVerificationAttributes',
      'GetSendQuota',
      'GetSendStatistics',
      'GetTemplate',
      'ListReceiptFilters',
      'ListReceiptRuleSets',
      'ListVerifiedEmailAddresses'
    ],
    List: [
      'ListConfigurationSets',
      'ListCustomVerificationEmailTemplates',
      'ListIdentities',
      'ListIdentityPolicies',
      'ListTemplates'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Ses.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:configuration-set/${ configurationSetName }`);
  }

  /**
   * Adds a resource of type custom-verification-email-template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_CustomVerificationEmailTemplate.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCustomVerificationEmailTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Ses.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:custom-verification-email-template/${ templateName }`);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_IdentityInfo.html
   *
   * @param identityName - Identifier for the identityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIdentity(identityName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Ses.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:identity/${ identityName }`);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference/API_Template.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Ses.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:template/${ templateName }`);
  }

  /**
   * Filters actions based on the SES API version
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
   *
   * Applies to actions:
   * - .toCloneReceiptRuleSet()
   * - .toCreateConfigurationSet()
   * - .toCreateConfigurationSetEventDestination()
   * - .toCreateConfigurationSetTrackingOptions()
   * - .toCreateCustomVerificationEmailTemplate()
   * - .toCreateReceiptFilter()
   * - .toCreateReceiptRule()
   * - .toCreateReceiptRuleSet()
   * - .toCreateTemplate()
   * - .toDeleteConfigurationSet()
   * - .toDeleteConfigurationSetEventDestination()
   * - .toDeleteConfigurationSetTrackingOptions()
   * - .toDeleteCustomVerificationEmailTemplate()
   * - .toDeleteIdentity()
   * - .toDeleteIdentityPolicy()
   * - .toDeleteReceiptFilter()
   * - .toDeleteReceiptRule()
   * - .toDeleteReceiptRuleSet()
   * - .toDeleteTemplate()
   * - .toDeleteVerifiedEmailAddress()
   * - .toDescribeActiveReceiptRuleSet()
   * - .toDescribeConfigurationSet()
   * - .toDescribeReceiptRule()
   * - .toDescribeReceiptRuleSet()
   * - .toGetAccountSendingEnabled()
   * - .toGetCustomVerificationEmailTemplate()
   * - .toGetIdentityDkimAttributes()
   * - .toGetIdentityMailFromDomainAttributes()
   * - .toGetIdentityNotificationAttributes()
   * - .toGetIdentityPolicies()
   * - .toGetIdentityVerificationAttributes()
   * - .toGetSendQuota()
   * - .toGetSendStatistics()
   * - .toGetTemplate()
   * - .toListConfigurationSets()
   * - .toListCustomVerificationEmailTemplates()
   * - .toListIdentities()
   * - .toListIdentityPolicies()
   * - .toListReceiptFilters()
   * - .toListReceiptRuleSets()
   * - .toListTemplates()
   * - .toListVerifiedEmailAddresses()
   * - .toPutConfigurationSetDeliveryOptions()
   * - .toPutIdentityPolicy()
   * - .toReorderReceiptRuleSet()
   * - .toSendBounce()
   * - .toSendBulkTemplatedEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toSendRawEmail()
   * - .toSendTemplatedEmail()
   * - .toSetActiveReceiptRuleSet()
   * - .toSetIdentityDkimEnabled()
   * - .toSetIdentityFeedbackForwardingEnabled()
   * - .toSetIdentityHeadersInNotificationsEnabled()
   * - .toSetIdentityMailFromDomain()
   * - .toSetIdentityNotificationTopic()
   * - .toSetReceiptRulePosition()
   * - .toTestRenderTemplate()
   * - .toUpdateAccountSendingEnabled()
   * - .toUpdateConfigurationSetEventDestination()
   * - .toUpdateConfigurationSetReputationMetricsEnabled()
   * - .toUpdateConfigurationSetSendingEnabled()
   * - .toUpdateConfigurationSetTrackingOptions()
   * - .toUpdateCustomVerificationEmailTemplate()
   * - .toUpdateReceiptRule()
   * - .toUpdateTemplate()
   * - .toVerifyDomainDkim()
   * - .toVerifyDomainIdentity()
   * - .toVerifyEmailAddress()
   * - .toVerifyEmailIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifApiVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`ApiVersion`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
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
   * Filters actions based on the "From" address of a message
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
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
   * Filters actions based on the "From" address that is used as the display name of a message
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
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
   * Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
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
