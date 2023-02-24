import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html).
 *
 * @param options - Options for the statement
 */
export class SesPinpoint extends PolicyStatement {
  public servicePrefix = 'ses';

  /**
   * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
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
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
  }

  /**
   * Grants permission to create a new pool of dedicated IP addresses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html
   */
  public toCreateDedicatedIpPool() {
    return this.to('CreateDedicatedIpPool');
  }

  /**
   * Grants permission to create a new predictive inbox placement test
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html
   */
  public toCreateDeliverabilityTestReport() {
    return this.to('CreateDeliverabilityTestReport');
  }

  /**
   * Grants permission to start the process of verifying an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html
   */
  public toCreateEmailIdentity() {
    return this.to('CreateEmailIdentity');
  }

  /**
   * Grants permission to delete an existing configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
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
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Grants permission to delete a dedicated IP pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
   */
  public toDeleteDedicatedIpPool() {
    return this.to('DeleteDedicatedIpPool');
  }

  /**
   * Grants permission to delete an email identity that you previously verified
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
   */
  public toDeleteEmailIdentity() {
    return this.to('DeleteEmailIdentity');
  }

  /**
   * Grants permission to get information about the email-sending status and capabilities
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
   */
  public toGetAccount() {
    return this.to('GetAccount');
  }

  /**
   * Grants permission to retrieve a list of the deny lists on which your dedicated IP addresses appear
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
   */
  public toGetBlacklistReports() {
    return this.to('GetBlacklistReports');
  }

  /**
   * Grants permission to get information about an existing configuration set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
   */
  public toGetConfigurationSet() {
    return this.to('GetConfigurationSet');
  }

  /**
   * Grants permission to retrieve a list of event destinations that are associated with a configuration set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    return this.to('GetConfigurationSetEventDestinations');
  }

  /**
   * Grants permission to get information about a dedicated IP address
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
   */
  public toGetDedicatedIp() {
    return this.to('GetDedicatedIp');
  }

  /**
   * Grants permission to list the dedicated IP addresses that are associated with your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
   */
  public toGetDedicatedIps() {
    return this.to('GetDedicatedIps');
  }

  /**
   * Grants permission to get the status of the Deliverability dashboard
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
   */
  public toGetDeliverabilityDashboardOptions() {
    return this.to('GetDeliverabilityDashboardOptions');
  }

  /**
   * Grants permission to retrieve the results of a predictive inbox placement test
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
   */
  public toGetDeliverabilityTestReport() {
    return this.to('GetDeliverabilityTestReport');
  }

  /**
   * Grants permission to retrieve all the deliverability data for a specific campaign
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainDeliverabilityCampaign.html
   */
  public toGetDomainDeliverabilityCampaign() {
    return this.to('GetDomainDeliverabilityCampaign');
  }

  /**
   * Grants permission to retrieve inbox placement and engagement rates for the domains that you use to send email
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
   */
  public toGetDomainStatisticsReport() {
    return this.to('GetDomainStatisticsReport');
  }

  /**
   * Grants permission to get information about a specific identity associated with your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
   */
  public toGetEmailIdentity() {
    return this.to('GetEmailIdentity');
  }

  /**
   * Grants permission to list all of the configuration sets associated with your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * Grants permission to list all of the dedicated IP pools that exist in your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
   */
  public toListDedicatedIpPools() {
    return this.to('ListDedicatedIpPools');
  }

  /**
   * Grants permission to retrieve a list of the predictive inbox placement tests that you've performed, regardless of their statuses
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
   */
  public toListDeliverabilityTestReports() {
    return this.to('ListDeliverabilityTestReports');
  }

  /**
   * Grants permission to retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDomainDeliverabilityCampaigns.html
   */
  public toListDomainDeliverabilityCampaigns() {
    return this.to('ListDomainDeliverabilityCampaigns');
  }

  /**
   * Grants permission to list all of the email identities that are associated with your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
   */
  public toListEmailIdentities() {
    return this.to('ListEmailIdentities');
  }

  /**
   * Grants permission to retrieve a list of the tags (keys and values) that are associated with a specific resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to enable or disable the automatic warm-up feature for dedicated IP addresses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  public toPutAccountDedicatedIpWarmupAttributes() {
    return this.to('PutAccountDedicatedIpWarmupAttributes');
  }

  /**
   * Grants permission to enable or disable the ability of your account to send email
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
   */
  public toPutAccountSendingAttributes() {
    return this.to('PutAccountSendingAttributes');
  }

  /**
   * Grants permission to associate a configuration set with a dedicated IP pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   */
  public toPutConfigurationSetDeliveryOptions() {
    return this.to('PutConfigurationSetDeliveryOptions');
  }

  /**
   * Grants permission to enable or disable collection of reputation metrics for emails that you send using a particular configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
   */
  public toPutConfigurationSetReputationOptions() {
    return this.to('PutConfigurationSetReputationOptions');
  }

  /**
   * Grants permission to enable or disable email sending for messages that use a particular configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
   */
  public toPutConfigurationSetSendingOptions() {
    return this.to('PutConfigurationSetSendingOptions');
  }

  /**
   * Grants permission to specify a custom domain to use for open and click tracking elements in email that you send using a particular configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
   */
  public toPutConfigurationSetTrackingOptions() {
    return this.to('PutConfigurationSetTrackingOptions');
  }

  /**
   * Grants permission to move a dedicated IP address to an existing dedicated IP pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
   */
  public toPutDedicatedIpInPool() {
    return this.to('PutDedicatedIpInPool');
  }

  /**
   * Grants permission to enable dedicated IP warm up attributes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
   */
  public toPutDedicatedIpWarmupAttributes() {
    return this.to('PutDedicatedIpWarmupAttributes');
  }

  /**
   * Grants permission to enable or disable the Deliverability dashboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
   */
  public toPutDeliverabilityDashboardOption() {
    return this.to('PutDeliverabilityDashboardOption');
  }

  /**
   * Grants permission to enable or disable DKIM authentication for an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
   */
  public toPutEmailIdentityDkimAttributes() {
    return this.to('PutEmailIdentityDkimAttributes');
  }

  /**
   * Grants permission to enable or disable feedback forwarding for an identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
   */
  public toPutEmailIdentityFeedbackAttributes() {
    return this.to('PutEmailIdentityFeedbackAttributes');
  }

  /**
   * Grants permission to enable or disable the custom MAIL FROM domain configuration for an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
   */
  public toPutEmailIdentityMailFromAttributes() {
    return this.to('PutEmailIdentityMailFromAttributes');
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
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html
   */
  public toSendEmail() {
    return this.to('SendEmail');
  }

  /**
   * Grants permission to add one or more tags (keys and values) to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags (keys and values) from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the configuration of an event destination for a configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConfigurationSet',
      'CreateConfigurationSetEventDestination',
      'CreateDedicatedIpPool',
      'CreateDeliverabilityTestReport',
      'CreateEmailIdentity',
      'DeleteConfigurationSet',
      'DeleteConfigurationSetEventDestination',
      'DeleteDedicatedIpPool',
      'DeleteEmailIdentity',
      'PutAccountDedicatedIpWarmupAttributes',
      'PutAccountSendingAttributes',
      'PutConfigurationSetDeliveryOptions',
      'PutConfigurationSetReputationOptions',
      'PutConfigurationSetSendingOptions',
      'PutConfigurationSetTrackingOptions',
      'PutDedicatedIpInPool',
      'PutDedicatedIpWarmupAttributes',
      'PutDeliverabilityDashboardOption',
      'PutEmailIdentityDkimAttributes',
      'PutEmailIdentityFeedbackAttributes',
      'PutEmailIdentityMailFromAttributes',
      'SendEmail',
      'UpdateConfigurationSetEventDestination'
    ],
    Read: [
      'GetAccount',
      'GetBlacklistReports',
      'GetConfigurationSet',
      'GetConfigurationSetEventDestinations',
      'GetDedicatedIp',
      'GetDedicatedIps',
      'GetDeliverabilityDashboardOptions',
      'GetDeliverabilityTestReport',
      'GetDomainDeliverabilityCampaign',
      'GetDomainStatisticsReport',
      'GetEmailIdentity',
      'ListDomainDeliverabilityCampaigns',
      'ListTagsForResource'
    ],
    List: [
      'ListConfigurationSets',
      'ListDedicatedIpPools',
      'ListDeliverabilityTestReports',
      'ListEmailIdentities'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type configuration-set to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:configuration-set/${ configurationSetName }`);
  }

  /**
   * Adds a resource of type dedicated-ip-pool to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DedicatedIp.html
   *
   * @param dedicatedIPPool - Identifier for the dedicatedIPPool.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDedicatedIpPool(dedicatedIPPool: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:dedicated-ip-pool/${ dedicatedIPPool }`);
  }

  /**
   * Adds a resource of type deliverability-test-report to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeliverabilityTestReport.html
   *
   * @param reportId - Identifier for the reportId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverabilityTestReport(reportId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:deliverability-test-report/${ reportId }`);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_IdentityInfo.html
   *
   * @param identityName - Identifier for the identityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentity(identityName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:identity/${ identityName }`);
  }

  /**
   * Filters actions based on the SES API version
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
   *
   * Applies to actions:
   * - .toCreateConfigurationSet()
   * - .toCreateConfigurationSetEventDestination()
   * - .toCreateDedicatedIpPool()
   * - .toCreateDeliverabilityTestReport()
   * - .toCreateEmailIdentity()
   * - .toDeleteConfigurationSet()
   * - .toDeleteConfigurationSetEventDestination()
   * - .toDeleteDedicatedIpPool()
   * - .toDeleteEmailIdentity()
   * - .toGetAccount()
   * - .toGetBlacklistReports()
   * - .toGetConfigurationSet()
   * - .toGetConfigurationSetEventDestinations()
   * - .toGetDedicatedIp()
   * - .toGetDedicatedIps()
   * - .toGetDeliverabilityDashboardOptions()
   * - .toGetDeliverabilityTestReport()
   * - .toGetDomainDeliverabilityCampaign()
   * - .toGetDomainStatisticsReport()
   * - .toGetEmailIdentity()
   * - .toListConfigurationSets()
   * - .toListDedicatedIpPools()
   * - .toListDeliverabilityTestReports()
   * - .toListDomainDeliverabilityCampaigns()
   * - .toListEmailIdentities()
   * - .toListTagsForResource()
   * - .toPutAccountDedicatedIpWarmupAttributes()
   * - .toPutAccountSendingAttributes()
   * - .toPutConfigurationSetDeliveryOptions()
   * - .toPutConfigurationSetReputationOptions()
   * - .toPutConfigurationSetSendingOptions()
   * - .toPutConfigurationSetTrackingOptions()
   * - .toPutDedicatedIpInPool()
   * - .toPutDedicatedIpWarmupAttributes()
   * - .toPutDeliverabilityDashboardOption()
   * - .toPutEmailIdentityDkimAttributes()
   * - .toPutEmailIdentityFeedbackAttributes()
   * - .toPutEmailIdentityMailFromAttributes()
   * - .toSendEmail()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateConfigurationSetEventDestination()
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
   * - .toSendEmail()
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
   * - .toSendEmail()
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
   * - .toSendEmail()
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
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecipients(value: string | string[], operator?: Operator | string) {
    return this.if(`Recipients`, value, operator || 'StringLike');
  }
}
