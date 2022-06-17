import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [ses-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SesV2 extends PolicyStatement {
  public servicePrefix = 'ses';

  /**
   * Statement provider for service [ses-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSet.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
  }

  /**
   * Grants permission to create a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to create a contact list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html
   */
  public toCreateContactList() {
    return this.to('CreateContactList');
  }

  /**
   * Grants permission to create a new custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateCustomVerificationEmailTemplate.html
   */
  public toCreateCustomVerificationEmailTemplate() {
    return this.to('CreateCustomVerificationEmailTemplate');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDedicatedIpPool.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDeliverabilityTestReport.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentity.html
   */
  public toCreateEmailIdentity() {
    return this.to('CreateEmailIdentity');
  }

  /**
   * Grants permission to create the specified sending authorization policy for the given identity
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentityPolicy.html
   */
  public toCreateEmailIdentityPolicy() {
    return this.to('CreateEmailIdentityPolicy');
  }

  /**
   * Grants permission to create an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html
   */
  public toCreateEmailTemplate() {
    return this.to('CreateEmailTemplate');
  }

  /**
   * Grants permission to creates an import job for a data destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateImportJob.html
   */
  public toCreateImportJob() {
    return this.to('CreateImportJob');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSet.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Grants permission to delete a contact from a contact list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html
   */
  public toDeleteContact() {
    return this.to('DeleteContact');
  }

  /**
   * Grants permission to delete a contact list with all of its contacts
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html
   */
  public toDeleteContactList() {
    return this.to('DeleteContactList');
  }

  /**
   * Grants permission to delete an existing custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteCustomVerificationEmailTemplate.html
   */
  public toDeleteCustomVerificationEmailTemplate() {
    return this.to('DeleteCustomVerificationEmailTemplate');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteDedicatedIpPool.html
   */
  public toDeleteDedicatedIpPool() {
    return this.to('DeleteDedicatedIpPool');
  }

  /**
   * Grants permission to delete an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentity.html
   */
  public toDeleteEmailIdentity() {
    return this.to('DeleteEmailIdentity');
  }

  /**
   * Grants permission to delete the specified sending authorization policy for the given identity (an email address or a domain)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentityPolicy.html
   */
  public toDeleteEmailIdentityPolicy() {
    return this.to('DeleteEmailIdentityPolicy');
  }

  /**
   * Grants permission to delete an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html
   */
  public toDeleteEmailTemplate() {
    return this.to('DeleteEmailTemplate');
  }

  /**
   * Grants permission to remove an email address from the suppression list for your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html
   */
  public toDeleteSuppressedDestination() {
    return this.to('DeleteSuppressedDestination');
  }

  /**
   * Grants permission to get information about the email-sending status and capabilities for your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html
   */
  public toGetAccount() {
    return this.to('GetAccount');
  }

  /**
   * Grants permission to retrieve a list of the deny lists on which your dedicated IP addresses or tracked domains appear
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetBlacklistReports.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSet.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSetEventDestinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    return this.to('GetConfigurationSetEventDestinations');
  }

  /**
   * Grants permission to return a contact from a contact list
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html
   */
  public toGetContact() {
    return this.to('GetContact');
  }

  /**
   * Grants permission to return contact list metadata
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html
   */
  public toGetContactList() {
    return this.to('GetContactList');
  }

  /**
   * Grants permission to return the custom email verification template for the template name you specify
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetCustomVerificationEmailTemplate.html
   */
  public toGetCustomVerificationEmailTemplate() {
    return this.to('GetCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to get information about a dedicated IP address
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIp.html
   */
  public toGetDedicatedIp() {
    return this.to('GetDedicatedIp');
  }

  /**
   * Grants permission to list the dedicated IP addresses a dedicated IP pool
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIps.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityDashboardOptions.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityTestReport.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainDeliverabilityCampaign.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainStatisticsReport.html
   */
  public toGetDomainStatisticsReport() {
    return this.to('GetDomainStatisticsReport');
  }

  /**
   * Grants permission to get information about a specific identity
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentity.html
   */
  public toGetEmailIdentity() {
    return this.to('GetEmailIdentity');
  }

  /**
   * Grants permission to return the requested sending authorization policies for the given identity (an email address or a domain)
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentityPolicies.html
   */
  public toGetEmailIdentityPolicies() {
    return this.to('GetEmailIdentityPolicies');
  }

  /**
   * Grants permission to return the template object, which includes the subject line, HTML part, and text part for the template you specify
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html
   */
  public toGetEmailTemplate() {
    return this.to('GetEmailTemplate');
  }

  /**
   * Grants permission to provide information about an import job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetImportJob.html
   */
  public toGetImportJob() {
    return this.to('GetImportJob');
  }

  /**
   * Grants permission to retrieve information about a specific email address that's on the suppression list for your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetSuppressedDestination.html
   */
  public toGetSuppressedDestination() {
    return this.to('GetSuppressedDestination');
  }

  /**
   * Grants permission to list all of the configuration sets for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * Grants permission to list all of the contact lists available for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContactLists.html
   */
  public toListContactLists() {
    return this.to('ListContactLists');
  }

  /**
   * Grants permission to list the contacts present in a specific contact list
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContacts.html
   */
  public toListContacts() {
    return this.to('ListContacts');
  }

  /**
   * Grants permission to list all of the existing custom verification email templates for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListCustomVerificationEmailTemplates.html
   */
  public toListCustomVerificationEmailTemplates() {
    return this.to('ListCustomVerificationEmailTemplates');
  }

  /**
   * Grants permission to list all of the dedicated IP pools for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDedicatedIpPools.html
   */
  public toListDedicatedIpPools() {
    return this.to('ListDedicatedIpPools');
  }

  /**
   * Grants permission to retrieve the list of the predictive inbox placement tests that you've performed, regardless of their statuses, for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDeliverabilityTestReports.html
   */
  public toListDeliverabilityTestReports() {
    return this.to('ListDeliverabilityTestReports');
  }

  /**
   * Grants permission to list deliverability data for campaigns that used a specific domain to send email during a specified time range
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDomainDeliverabilityCampaigns.html
   */
  public toListDomainDeliverabilityCampaigns() {
    return this.to('ListDomainDeliverabilityCampaigns');
  }

  /**
   * Grants permission to list the email identities for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailIdentities.html
   */
  public toListEmailIdentities() {
    return this.to('ListEmailIdentities');
  }

  /**
   * Grants permission to list all of the email templates for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html
   */
  public toListEmailTemplates() {
    return this.to('ListEmailTemplates');
  }

  /**
   * Grants permission to list all of the import jobs for your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListImportJobs.html
   */
  public toListImportJobs() {
    return this.to('ListImportJobs');
  }

  /**
   * Grants permission to list email addresses that are on the suppression list for your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListSuppressedDestinations.html
   */
  public toListSuppressedDestinations() {
    return this.to('ListSuppressedDestinations');
  }

  /**
   * Grants permission to retrieve a list of the tags (keys and values) that are associated with a specific resource for your account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListTagsForResource.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  public toPutAccountDedicatedIpWarmupAttributes() {
    return this.to('PutAccountDedicatedIpWarmupAttributes');
  }

  /**
   * Grants permission to update your account details
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDetails.html
   */
  public toPutAccountDetails() {
    return this.to('PutAccountDetails');
  }

  /**
   * Grants permission to enable or disable the ability to send email for your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSendingAttributes.html
   */
  public toPutAccountSendingAttributes() {
    return this.to('PutAccountSendingAttributes');
  }

  /**
   * Grants permission to change the settings for the account-level suppression list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSuppressionAttributes.html
   */
  public toPutAccountSuppressionAttributes() {
    return this.to('PutAccountSuppressionAttributes');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetDeliveryOptions.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetReputationOptions.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSendingOptions.html
   */
  public toPutConfigurationSetSendingOptions() {
    return this.to('PutConfigurationSetSendingOptions');
  }

  /**
   * Grants permission to specify the account suppression list preferences for a particular configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSuppressionOptions.html
   */
  public toPutConfigurationSetSuppressionOptions() {
    return this.to('PutConfigurationSetSuppressionOptions');
  }

  /**
   * Grants permission to specify a custom domain to use for open and click tracking elements in email that you send for a particular configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetTrackingOptions.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpInPool.html
   */
  public toPutDedicatedIpInPool() {
    return this.to('PutDedicatedIpInPool');
  }

  /**
   * Grants permission to put Dedicated IP warm up attributes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpWarmupAttributes.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDeliverabilityDashboardOption.html
   */
  public toPutDeliverabilityDashboardOption() {
    return this.to('PutDeliverabilityDashboardOption');
  }

  /**
   * Grants permission to associate a configuration set with an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityConfigurationSetAttributes.html
   */
  public toPutEmailIdentityConfigurationSetAttributes() {
    return this.to('PutEmailIdentityConfigurationSetAttributes');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimAttributes.html
   */
  public toPutEmailIdentityDkimAttributes() {
    return this.to('PutEmailIdentityDkimAttributes');
  }

  /**
   * Grants permission to configure or change the DKIM authentication settings for an email domain identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html
   */
  public toPutEmailIdentityDkimSigningAttributes() {
    return this.to('PutEmailIdentityDkimSigningAttributes');
  }

  /**
   * Grants permission to enable or disable feedback forwarding for an email identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityFeedbackAttributes.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityMailFromAttributes.html
   */
  public toPutEmailIdentityMailFromAttributes() {
    return this.to('PutEmailIdentityMailFromAttributes');
  }

  /**
   * Grants permission to add an email address to the suppression list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutSuppressedDestination.html
   */
  public toPutSuppressedDestination() {
    return this.to('PutSuppressedDestination');
  }

  /**
   * Grants permission to compose an email message to multiple destinations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html
   */
  public toSendBulkEmail() {
    return this.to('SendBulkEmail');
  }

  /**
   * Grants permission to add an email address to the list of identities and attempts to verify it
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendCustomVerificationEmail.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to create a preview of the MIME content of an email when provided with a template and a set of replacement data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html
   */
  public toTestRenderEmailTemplate() {
    return this.to('TestRenderEmailTemplate');
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UntagResource.html
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
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
  }

  /**
   * Grants permission to update a contact's preferences for a list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Grants permission to update contact list metadata
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContactList.html
   */
  public toUpdateContactList() {
    return this.to('UpdateContactList');
  }

  /**
   * Grants permission to update an existing custom verification email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateCustomVerificationEmailTemplate.html
   */
  public toUpdateCustomVerificationEmailTemplate() {
    return this.to('UpdateCustomVerificationEmailTemplate');
  }

  /**
   * Grants permission to update the specified sending authorization policy for the given identity (an email address or a domain)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifApiVersion()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailIdentityPolicy.html
   */
  public toUpdateEmailIdentityPolicy() {
    return this.to('UpdateEmailIdentityPolicy');
  }

  /**
   * Grants permission to update an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApiVersion()
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailTemplate.html
   */
  public toUpdateEmailTemplate() {
    return this.to('UpdateEmailTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConfigurationSet',
      'CreateConfigurationSetEventDestination',
      'CreateContact',
      'CreateContactList',
      'CreateCustomVerificationEmailTemplate',
      'CreateDedicatedIpPool',
      'CreateDeliverabilityTestReport',
      'CreateEmailIdentity',
      'CreateEmailTemplate',
      'CreateImportJob',
      'DeleteConfigurationSet',
      'DeleteConfigurationSetEventDestination',
      'DeleteContact',
      'DeleteContactList',
      'DeleteCustomVerificationEmailTemplate',
      'DeleteDedicatedIpPool',
      'DeleteEmailIdentity',
      'DeleteEmailTemplate',
      'DeleteSuppressedDestination',
      'PutAccountDedicatedIpWarmupAttributes',
      'PutAccountDetails',
      'PutAccountSendingAttributes',
      'PutAccountSuppressionAttributes',
      'PutConfigurationSetDeliveryOptions',
      'PutConfigurationSetReputationOptions',
      'PutConfigurationSetSendingOptions',
      'PutConfigurationSetSuppressionOptions',
      'PutConfigurationSetTrackingOptions',
      'PutDedicatedIpInPool',
      'PutDedicatedIpWarmupAttributes',
      'PutDeliverabilityDashboardOption',
      'PutEmailIdentityConfigurationSetAttributes',
      'PutEmailIdentityDkimAttributes',
      'PutEmailIdentityDkimSigningAttributes',
      'PutEmailIdentityFeedbackAttributes',
      'PutEmailIdentityMailFromAttributes',
      'PutSuppressedDestination',
      'SendBulkEmail',
      'SendCustomVerificationEmail',
      'SendEmail',
      'TestRenderEmailTemplate',
      'UpdateConfigurationSetEventDestination',
      'UpdateContact',
      'UpdateContactList',
      'UpdateCustomVerificationEmailTemplate',
      'UpdateEmailTemplate'
    ],
    'Permissions management': [
      'CreateEmailIdentityPolicy',
      'DeleteEmailIdentityPolicy',
      'UpdateEmailIdentityPolicy'
    ],
    Read: [
      'GetAccount',
      'GetBlacklistReports',
      'GetConfigurationSet',
      'GetConfigurationSetEventDestinations',
      'GetContact',
      'GetContactList',
      'GetCustomVerificationEmailTemplate',
      'GetDedicatedIp',
      'GetDedicatedIps',
      'GetDeliverabilityDashboardOptions',
      'GetDeliverabilityTestReport',
      'GetDomainDeliverabilityCampaign',
      'GetDomainStatisticsReport',
      'GetEmailIdentity',
      'GetEmailIdentityPolicies',
      'GetEmailTemplate',
      'GetImportJob',
      'GetSuppressedDestination',
      'ListDomainDeliverabilityCampaigns',
      'ListSuppressedDestinations',
      'ListTagsForResource'
    ],
    List: [
      'ListConfigurationSets',
      'ListContactLists',
      'ListContacts',
      'ListCustomVerificationEmailTemplates',
      'ListDedicatedIpPools',
      'ListDeliverabilityTestReports',
      'ListEmailIdentities',
      'ListEmailTemplates',
      'ListImportJobs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:configuration-set/${ configurationSetName }`);
  }

  /**
   * Adds a resource of type contact-list to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ContactList.html
   *
   * @param contactListName - Identifier for the contactListName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactList(contactListName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:contact-list/${ contactListName }`);
  }

  /**
   * Adds a resource of type custom-verification-email-template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CustomVerificationEmailTemplateMetadata.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCustomVerificationEmailTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:custom-verification-email-template/${ templateName }`);
  }

  /**
   * Adds a resource of type dedicated-ip-pool to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DedicatedIp.html
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
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:dedicated-ip-pool/${ dedicatedIPPool }`);
  }

  /**
   * Adds a resource of type deliverability-test-report to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeliverabilityTestReport.html
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
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:deliverability-test-report/${ reportId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentity(identityName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:identity/${ identityName }`);
  }

  /**
   * Adds a resource of type import-job to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ImportJobSummary.html
   *
   * @param importJobId - Identifier for the importJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onImportJob(importJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:import-job/${ importJobId }`);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_Template.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SesV2.defaultPartition }:ses:${ region || '*' }:${ account || '*' }:template/${ templateName }`);
  }

  /**
   * Filters actions based on the SES API version
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys
   *
   * Applies to actions:
   * - .toCreateConfigurationSet()
   * - .toCreateConfigurationSetEventDestination()
   * - .toCreateContact()
   * - .toCreateContactList()
   * - .toCreateCustomVerificationEmailTemplate()
   * - .toCreateDedicatedIpPool()
   * - .toCreateDeliverabilityTestReport()
   * - .toCreateEmailIdentity()
   * - .toCreateEmailIdentityPolicy()
   * - .toCreateEmailTemplate()
   * - .toCreateImportJob()
   * - .toDeleteConfigurationSet()
   * - .toDeleteConfigurationSetEventDestination()
   * - .toDeleteContact()
   * - .toDeleteContactList()
   * - .toDeleteCustomVerificationEmailTemplate()
   * - .toDeleteDedicatedIpPool()
   * - .toDeleteEmailIdentity()
   * - .toDeleteEmailIdentityPolicy()
   * - .toDeleteEmailTemplate()
   * - .toDeleteSuppressedDestination()
   * - .toGetAccount()
   * - .toGetBlacklistReports()
   * - .toGetConfigurationSet()
   * - .toGetConfigurationSetEventDestinations()
   * - .toGetContact()
   * - .toGetContactList()
   * - .toGetCustomVerificationEmailTemplate()
   * - .toGetDedicatedIp()
   * - .toGetDedicatedIps()
   * - .toGetDeliverabilityDashboardOptions()
   * - .toGetDeliverabilityTestReport()
   * - .toGetDomainDeliverabilityCampaign()
   * - .toGetDomainStatisticsReport()
   * - .toGetEmailIdentity()
   * - .toGetEmailIdentityPolicies()
   * - .toGetEmailTemplate()
   * - .toGetImportJob()
   * - .toGetSuppressedDestination()
   * - .toListConfigurationSets()
   * - .toListContactLists()
   * - .toListContacts()
   * - .toListCustomVerificationEmailTemplates()
   * - .toListDedicatedIpPools()
   * - .toListDeliverabilityTestReports()
   * - .toListDomainDeliverabilityCampaigns()
   * - .toListEmailIdentities()
   * - .toListEmailTemplates()
   * - .toListImportJobs()
   * - .toListSuppressedDestinations()
   * - .toListTagsForResource()
   * - .toPutAccountDedicatedIpWarmupAttributes()
   * - .toPutAccountDetails()
   * - .toPutAccountSendingAttributes()
   * - .toPutAccountSuppressionAttributes()
   * - .toPutConfigurationSetDeliveryOptions()
   * - .toPutConfigurationSetReputationOptions()
   * - .toPutConfigurationSetSendingOptions()
   * - .toPutConfigurationSetSuppressionOptions()
   * - .toPutConfigurationSetTrackingOptions()
   * - .toPutDedicatedIpInPool()
   * - .toPutDedicatedIpWarmupAttributes()
   * - .toPutDeliverabilityDashboardOption()
   * - .toPutEmailIdentityConfigurationSetAttributes()
   * - .toPutEmailIdentityDkimAttributes()
   * - .toPutEmailIdentityDkimSigningAttributes()
   * - .toPutEmailIdentityFeedbackAttributes()
   * - .toPutEmailIdentityMailFromAttributes()
   * - .toPutSuppressedDestination()
   * - .toSendBulkEmail()
   * - .toSendCustomVerificationEmail()
   * - .toSendEmail()
   * - .toTagResource()
   * - .toTestRenderEmailTemplate()
   * - .toUntagResource()
   * - .toUpdateConfigurationSetEventDestination()
   * - .toUpdateContact()
   * - .toUpdateContactList()
   * - .toUpdateCustomVerificationEmailTemplate()
   * - .toUpdateEmailIdentityPolicy()
   * - .toUpdateEmailTemplate()
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
