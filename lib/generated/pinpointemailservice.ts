import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SesPinpoint extends PolicyStatement {
  public servicePrefix = 'ses';

  /**
   * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html).
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
    return this.to('CreateConfigurationSet');
  }

  /**
   * Create an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
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
    return this.to('CreateDedicatedIpPool');
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
    return this.to('CreateDeliverabilityTestReport');
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
    return this.to('CreateEmailIdentity');
  }

  /**
   * Delete an existing configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Delete an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Delete a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
   */
  public toDeleteDedicatedIpPool() {
    return this.to('DeleteDedicatedIpPool');
  }

  /**
   * Deletes an email identity that you previously verified for use with Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
   */
  public toDeleteEmailIdentity() {
    return this.to('DeleteEmailIdentity');
  }

  /**
   * Obtain information about the email-sending status and capabilities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
   */
  public toGetAccount() {
    return this.to('GetAccount');
  }

  /**
   * Retrieve a list of the blacklists that your dedicated IP addresses appear on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
   */
  public toGetBlacklistReports() {
    return this.to('GetBlacklistReports');
  }

  /**
   * Get information about an existing configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
   */
  public toGetConfigurationSet() {
    return this.to('GetConfigurationSet');
  }

  /**
   * Retrieve a list of event destinations that are associated with a configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    return this.to('GetConfigurationSetEventDestinations');
  }

  /**
   * Get information about a dedicated IP address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
   */
  public toGetDedicatedIp() {
    return this.to('GetDedicatedIp');
  }

  /**
   * List the dedicated IP addresses that are associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
   */
  public toGetDedicatedIps() {
    return this.to('GetDedicatedIps');
  }

  /**
   * Show the status of the Deliverability dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
   */
  public toGetDeliverabilityDashboardOptions() {
    return this.to('GetDeliverabilityDashboardOptions');
  }

  /**
   * Retrieve the results of a predictive inbox placement test
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
   */
  public toGetDeliverabilityTestReport() {
    return this.to('GetDeliverabilityTestReport');
  }

  /**
   * Retrieve inbox placement and engagement rates for the domains that you use to send email
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
   */
  public toGetDomainStatisticsReport() {
    return this.to('GetDomainStatisticsReport');
  }

  /**
   * Provides information about a specific identity associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
   */
  public toGetEmailIdentity() {
    return this.to('GetEmailIdentity');
  }

  /**
   * List all of the configuration sets associated with your Amazon Pinpoint account in the current region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
   */
  public toListDedicatedIpPools() {
    return this.to('ListDedicatedIpPools');
  }

  /**
   * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
   */
  public toListDeliverabilityTestReports() {
    return this.to('ListDeliverabilityTestReports');
  }

  /**
   * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
   */
  public toListEmailIdentities() {
    return this.to('ListEmailIdentities');
  }

  /**
   * Retrieve a list of the tags (keys and values) that are associated with a specific resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Enable or disable the automatic warm-up feature for dedicated IP addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  public toPutAccountDedicatedIpWarmupAttributes() {
    return this.to('PutAccountDedicatedIpWarmupAttributes');
  }

  /**
   * Enable or disable the ability of your account to send email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
   */
  public toPutAccountSendingAttributes() {
    return this.to('PutAccountSendingAttributes');
  }

  /**
   * Associate a configuration set with a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   */
  public toPutConfigurationSetDeliveryOptions() {
    return this.to('PutConfigurationSetDeliveryOptions');
  }

  /**
   * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
   */
  public toPutConfigurationSetReputationOptions() {
    return this.to('PutConfigurationSetReputationOptions');
  }

  /**
   * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
   */
  public toPutConfigurationSetSendingOptions() {
    return this.to('PutConfigurationSetSendingOptions');
  }

  /**
   * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
   */
  public toPutConfigurationSetTrackingOptions() {
    return this.to('PutConfigurationSetTrackingOptions');
  }

  /**
   * Move a dedicated IP address to an existing dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
   */
  public toPutDedicatedIpInPool() {
    return this.to('PutDedicatedIpInPool');
  }

  /**
   * Put Dedicated IP warm up attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
   */
  public toPutDedicatedIpWarmupAttributes() {
    return this.to('PutDedicatedIpWarmupAttributes');
  }

  /**
   * Enable or disable the Deliverability dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
   */
  public toPutDeliverabilityDashboardOption() {
    return this.to('PutDeliverabilityDashboardOption');
  }

  /**
   * Used to enable or disable DKIM authentication for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
   */
  public toPutEmailIdentityDkimAttributes() {
    return this.to('PutEmailIdentityDkimAttributes');
  }

  /**
   * Used to enable or disable feedback forwarding for an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
   */
  public toPutEmailIdentityFeedbackAttributes() {
    return this.to('PutEmailIdentityFeedbackAttributes');
  }

  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
   */
  public toPutEmailIdentityMailFromAttributes() {
    return this.to('PutEmailIdentityMailFromAttributes');
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
    return this.to('SendEmail');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Update the configuration of an event destination for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
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
  public ifFeedbackAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`FeedbackAddress`, value, operator || 'StringLike');
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
  public ifFromAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`FromAddress`, value, operator || 'StringLike');
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
  public ifFromDisplayName(value: string | string[], operator?: Operator | string) {
    return this.if(`FromDisplayName`, value, operator || 'StringLike');
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
  public ifRecipients(value: string | string[], operator?: Operator | string) {
    return this.if(`Recipients`, value, operator || 'StringLike');
  }
}
