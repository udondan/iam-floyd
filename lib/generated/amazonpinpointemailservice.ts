import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SesPinpoint extends PolicyStatement {
  public servicePrefix = 'ses-pinpoint';

  /**
   * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a configuration set. Configuration sets are groups of rules that you can apply to the emails you send using Amazon Pinpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    this.to('ses-pinpoint:CreateConfigurationSet');
    return this;
  }

  /**
   * Create an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    this.to('ses-pinpoint:CreateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Create a new pool of dedicated IP addresses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html
   */
  public toCreateDedicatedIpPool() {
    this.to('ses-pinpoint:CreateDedicatedIpPool');
    return this;
  }

  /**
   * Create a new predictive inbox placement test.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html
   */
  public toCreateDeliverabilityTestReport() {
    this.to('ses-pinpoint:CreateDeliverabilityTestReport');
    return this;
  }

  /**
   * Verifies an email identity for use with Amazon Pinpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html
   */
  public toCreateEmailIdentity() {
    this.to('ses-pinpoint:CreateEmailIdentity');
    return this;
  }

  /**
   * Delete an existing configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    this.to('ses-pinpoint:DeleteConfigurationSet');
    return this;
  }

  /**
   * Delete an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    this.to('ses-pinpoint:DeleteConfigurationSetEventDestination');
    return this;
  }

  /**
   * Delete a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
   */
  public toDeleteDedicatedIpPool() {
    this.to('ses-pinpoint:DeleteDedicatedIpPool');
    return this;
  }

  /**
   * Deletes an email identity that you previously verified for use with Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
   */
  public toDeleteEmailIdentity() {
    this.to('ses-pinpoint:DeleteEmailIdentity');
    return this;
  }

  /**
   * Obtain information about the email-sending status and capabilities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
   */
  public toGetAccount() {
    this.to('ses-pinpoint:GetAccount');
    return this;
  }

  /**
   * Retrieve a list of the blacklists that your dedicated IP addresses appear on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
   */
  public toGetBlacklistReports() {
    this.to('ses-pinpoint:GetBlacklistReports');
    return this;
  }

  /**
   * Get information about an existing configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
   */
  public toGetConfigurationSet() {
    this.to('ses-pinpoint:GetConfigurationSet');
    return this;
  }

  /**
   * Retrieve a list of event destinations that are associated with a configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    this.to('ses-pinpoint:GetConfigurationSetEventDestinations');
    return this;
  }

  /**
   * Get information about a dedicated IP address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
   */
  public toGetDedicatedIp() {
    this.to('ses-pinpoint:GetDedicatedIp');
    return this;
  }

  /**
   * List the dedicated IP addresses that are associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
   */
  public toGetDedicatedIps() {
    this.to('ses-pinpoint:GetDedicatedIps');
    return this;
  }

  /**
   * Show the status of the Deliverability dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
   */
  public toGetDeliverabilityDashboardOptions() {
    this.to('ses-pinpoint:GetDeliverabilityDashboardOptions');
    return this;
  }

  /**
   * Retrieve the results of a predictive inbox placement test
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
   */
  public toGetDeliverabilityTestReport() {
    this.to('ses-pinpoint:GetDeliverabilityTestReport');
    return this;
  }

  /**
   * Retrieve inbox placement and engagement rates for the domains that you use to send email
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
   */
  public toGetDomainStatisticsReport() {
    this.to('ses-pinpoint:GetDomainStatisticsReport');
    return this;
  }

  /**
   * Provides information about a specific identity associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
   */
  public toGetEmailIdentity() {
    this.to('ses-pinpoint:GetEmailIdentity');
    return this;
  }

  /**
   * List all of the configuration sets associated with your Amazon Pinpoint account in the current region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    this.to('ses-pinpoint:ListConfigurationSets');
    return this;
  }

  /**
   * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
   */
  public toListDedicatedIpPools() {
    this.to('ses-pinpoint:ListDedicatedIpPools');
    return this;
  }

  /**
   * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
   */
  public toListDeliverabilityTestReports() {
    this.to('ses-pinpoint:ListDeliverabilityTestReports');
    return this;
  }

  /**
   * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
   */
  public toListEmailIdentities() {
    this.to('ses-pinpoint:ListEmailIdentities');
    return this;
  }

  /**
   * Retrieve a list of the tags (keys and values) that are associated with a specific resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ses-pinpoint:ListTagsForResource');
    return this;
  }

  /**
   * Enable or disable the automatic warm-up feature for dedicated IP addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  public toPutAccountDedicatedIpWarmupAttributes() {
    this.to('ses-pinpoint:PutAccountDedicatedIpWarmupAttributes');
    return this;
  }

  /**
   * Enable or disable the ability of your account to send email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
   */
  public toPutAccountSendingAttributes() {
    this.to('ses-pinpoint:PutAccountSendingAttributes');
    return this;
  }

  /**
   * Associate a configuration set with a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   */
  public toPutConfigurationSetDeliveryOptions() {
    this.to('ses-pinpoint:PutConfigurationSetDeliveryOptions');
    return this;
  }

  /**
   * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
   */
  public toPutConfigurationSetReputationOptions() {
    this.to('ses-pinpoint:PutConfigurationSetReputationOptions');
    return this;
  }

  /**
   * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
   */
  public toPutConfigurationSetSendingOptions() {
    this.to('ses-pinpoint:PutConfigurationSetSendingOptions');
    return this;
  }

  /**
   * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
   */
  public toPutConfigurationSetTrackingOptions() {
    this.to('ses-pinpoint:PutConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Move a dedicated IP address to an existing dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
   */
  public toPutDedicatedIpInPool() {
    this.to('ses-pinpoint:PutDedicatedIpInPool');
    return this;
  }

  /**
   * Put Dedicated IP warm up attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
   */
  public toPutDedicatedIpWarmupAttributes() {
    this.to('ses-pinpoint:PutDedicatedIpWarmupAttributes');
    return this;
  }

  /**
   * Enable or disable the Deliverability dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
   */
  public toPutDeliverabilityDashboardOption() {
    this.to('ses-pinpoint:PutDeliverabilityDashboardOption');
    return this;
  }

  /**
   * Used to enable or disable DKIM authentication for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
   */
  public toPutEmailIdentityDkimAttributes() {
    this.to('ses-pinpoint:PutEmailIdentityDkimAttributes');
    return this;
  }

  /**
   * Used to enable or disable feedback forwarding for an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
   */
  public toPutEmailIdentityFeedbackAttributes() {
    this.to('ses-pinpoint:PutEmailIdentityFeedbackAttributes');
    return this;
  }

  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
   */
  public toPutEmailIdentityMailFromAttributes() {
    this.to('ses-pinpoint:PutEmailIdentityMailFromAttributes');
    return this;
  }

  /**
   * Sends an email message
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html
   */
  public toSendEmail() {
    this.to('ses-pinpoint:SendEmail');
    return this;
  }

  /**
   * Add one or more tags (keys and values) to a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('ses-pinpoint:TagResource');
    return this;
  }

  /**
   * Remove one or more tags (keys and values) from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('ses-pinpoint:UntagResource');
    return this;
  }

  /**
   * Update the configuration of an event destination for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    this.to('ses-pinpoint:UpdateConfigurationSetEventDestination');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateConfigurationSet",
      "CreateConfigurationSetEventDestination",
      "CreateDedicatedIpPool",
      "CreateDeliverabilityTestReport",
      "CreateEmailIdentity",
      "DeleteConfigurationSet",
      "DeleteConfigurationSetEventDestination",
      "DeleteDedicatedIpPool",
      "DeleteEmailIdentity",
      "PutAccountDedicatedIpWarmupAttributes",
      "PutAccountSendingAttributes",
      "PutConfigurationSetDeliveryOptions",
      "PutConfigurationSetReputationOptions",
      "PutConfigurationSetSendingOptions",
      "PutConfigurationSetTrackingOptions",
      "PutDedicatedIpInPool",
      "PutDedicatedIpWarmupAttributes",
      "PutDeliverabilityDashboardOption",
      "PutEmailIdentityDkimAttributes",
      "PutEmailIdentityFeedbackAttributes",
      "PutEmailIdentityMailFromAttributes",
      "SendEmail",
      "UpdateConfigurationSetEventDestination"
    ],
    "Read": [
      "GetAccount",
      "GetBlacklistReports",
      "GetConfigurationSet",
      "GetConfigurationSetEventDestinations",
      "GetDedicatedIp",
      "GetDedicatedIps",
      "GetDeliverabilityDashboardOptions",
      "GetDeliverabilityTestReport",
      "GetDomainStatisticsReport",
      "GetEmailIdentity",
      "ListTagsForResource"
    ],
    "List": [
      "ListConfigurationSets",
      "ListDedicatedIpPools",
      "ListDeliverabilityTestReports",
      "ListEmailIdentities"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type configuration-set to the statement
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Adds a resource of type dedicated-ip-pool to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DedicatedIp.html
   *
   * @param customVerificationEmailTemplateName - Identifier for the customVerificationEmailTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDedicatedIpPool(customVerificationEmailTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:dedicated-ip-pool/${CustomVerificationEmailTemplateName}';
    arn = arn.replace('${CustomVerificationEmailTemplateName}', customVerificationEmailTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deliverability-test-report to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeliverabilityTestReport.html
   *
   * @param customVerificationEmailTemplateName - Identifier for the customVerificationEmailTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverabilityTestReport(customVerificationEmailTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:deliverability-test-report/${CustomVerificationEmailTemplateName}';
    arn = arn.replace('${CustomVerificationEmailTemplateName}', customVerificationEmailTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-destination to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_EventDestination.html
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
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_IdentityInfo.html
   *
   * @param identityName - Identifier for the identityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * The "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding.
   *
   * Applies to actions:
   * - .toSendEmail()
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
   * Applies to actions:
   * - .toSendEmail()
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
   * Applies to actions:
   * - .toSendEmail()
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
   * Applies to actions:
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecipients(value: string | string[], operator?: string) {
    return this.if(`ses:Recipients`, value, operator || 'StringLike');
  }
}
