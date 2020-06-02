import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ses
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html
 */
export class SesPinpoint extends PolicyStatement {
    public servicePrefix = 'ses';
    public actions : Actions = { "CreateConfigurationSet": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html", "description": "Create a configuration set. Configuration sets are groups of rules that you can apply to the emails you send using Amazon Pinpoint", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "CreateConfigurationSetEventDestination": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html", "description": "Create an event destination", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "CreateDedicatedIpPool": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html", "description": "Create a new pool of dedicated IP addresses", "accessLevel": "Write", "resourceTypes": { "dedicated-ip-pool": { "required": true } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "CreateDeliverabilityTestReport": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html", "description": "Create a new predictive inbox placement test.", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "CreateEmailIdentity": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html", "description": "Verifies an email identity for use with Amazon Pinpoint", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "DeleteConfigurationSet": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html", "description": "Delete an existing configuration set", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "DeleteConfigurationSetEventDestination": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html", "description": "Delete an event destination", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "DeleteDedicatedIpPool": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html", "description": "Delete a dedicated IP pool", "accessLevel": "Write", "resourceTypes": { "dedicated-ip-pool": { "required": true } } }, "DeleteEmailIdentity": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html", "description": "Deletes an email identity that you previously verified for use with Amazon Pinpoint", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } } }, "GetAccount": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html", "description": "Obtain information about the email-sending status and capabilities", "accessLevel": "Read" }, "GetBlacklistReports": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html", "description": "Retrieve a list of the blacklists that your dedicated IP addresses appear on", "accessLevel": "Read" }, "GetConfigurationSet": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html", "description": "Get information about an existing configuration set", "accessLevel": "Read", "resourceTypes": { "configuration-set": { "required": true } } }, "GetConfigurationSetEventDestinations": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html", "description": "Retrieve a list of event destinations that are associated with a configuration set", "accessLevel": "Read", "resourceTypes": { "configuration-set": { "required": true } } }, "GetDedicatedIp": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html", "description": "Get information about a dedicated IP address", "accessLevel": "Read" }, "GetDedicatedIps": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html", "description": "List the dedicated IP addresses that are associated with your Amazon Pinpoint account", "accessLevel": "Read", "resourceTypes": { "dedicated-ip-pool": { "required": true } } }, "GetDeliverabilityDashboardOptions": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html", "description": "Show the status of the Deliverability dashboard", "accessLevel": "Read" }, "GetDeliverabilityTestReport": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html", "description": "Retrieve the results of a predictive inbox placement test", "accessLevel": "Read", "resourceTypes": { "deliverability-test-report": { "required": true } } }, "GetDomainStatisticsReport": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html", "description": "Retrieve inbox placement and engagement rates for the domains that you use to send email", "accessLevel": "Read", "resourceTypes": { "identity": { "required": true } } }, "GetEmailIdentity": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html", "description": "Provides information about a specific identity associated with your Amazon Pinpoint account", "accessLevel": "Read", "resourceTypes": { "identity": { "required": true } } }, "ListConfigurationSets": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html", "description": "List all of the configuration sets associated with your Amazon Pinpoint account in the current region", "accessLevel": "List" }, "ListDedicatedIpPools": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html", "description": "List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region", "accessLevel": "List" }, "ListDeliverabilityTestReports": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html", "description": "Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses", "accessLevel": "List" }, "ListEmailIdentities": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html", "description": "Returns a list of all of the email identities that are associated with your Amazon Pinpoint account", "accessLevel": "List" }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html", "description": "Retrieve a list of the tags (keys and values) that are associated with a specific resource.", "accessLevel": "Read", "resourceTypes": { "configuration-set": { "required": false }, "dedicated-ip-pool": { "required": false }, "deliverability-test-report": { "required": false }, "identity": { "required": false } } }, "PutAccountDedicatedIpWarmupAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html", "description": "Enable or disable the automatic warm-up feature for dedicated IP addresses", "accessLevel": "Write" }, "PutAccountSendingAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html", "description": "Enable or disable the ability of your account to send email", "accessLevel": "Write" }, "PutConfigurationSetDeliveryOptions": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html", "description": "Associate a configuration set with a dedicated IP pool", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "PutConfigurationSetReputationOptions": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html", "description": "Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "PutConfigurationSetSendingOptions": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html", "description": "Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "PutConfigurationSetTrackingOptions": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html", "description": "Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } }, "PutDedicatedIpInPool": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html", "description": "Move a dedicated IP address to an existing dedicated IP pool", "accessLevel": "Write", "resourceTypes": { "dedicated-ip-pool": { "required": true } } }, "PutDedicatedIpWarmupAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html", "description": "Put Dedicated IP warm up attributes", "accessLevel": "Write" }, "PutDeliverabilityDashboardOption": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html", "description": "Enable or disable the Deliverability dashboard", "accessLevel": "Write" }, "PutEmailIdentityDkimAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html", "description": "Used to enable or disable DKIM authentication for an email identity", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } } }, "PutEmailIdentityFeedbackAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html", "description": "Used to enable or disable feedback forwarding for an identity", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } } }, "PutEmailIdentityMailFromAttributes": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html", "description": "Used to enable or disable the custom Mail-From domain configuration for an email identity", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } } }, "SendEmail": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html", "description": "Sends an email message", "accessLevel": "Write", "resourceTypes": { "identity": { "required": true } }, "conditions": ["ses:FeedbackAddress", "ses:FromAddress", "ses:FromDisplayName", "ses:Recipients"] }, "TagResource": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html", "description": "Add one or more tags (keys and values) to a specified resource.", "accessLevel": "Tagging", "resourceTypes": { "configuration-set": { "required": false }, "dedicated-ip-pool": { "required": false }, "deliverability-test-report": { "required": false }, "identity": { "required": false } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html", "description": "Remove one or more tags (keys and values) from a specified resource.", "accessLevel": "Tagging", "resourceTypes": { "configuration-set": { "required": false }, "dedicated-ip-pool": { "required": false }, "deliverability-test-report": { "required": false }, "identity": { "required": false } }, "conditions": ["aws:TagKeys"] }, "UpdateConfigurationSetEventDestination": { "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html", "description": "Update the configuration of an event destination for a configuration set", "accessLevel": "Write", "resourceTypes": { "configuration-set": { "required": true } } } };

    /**
     * Create a configuration set. Configuration sets are groups of rules that you can apply to the emails you send using Amazon Pinpoint
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
     */
    public createConfigurationSet () {
        this.add('ses:CreateConfigurationSet');
        return this;
    }

    /**
     * Create an event destination
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
     */
    public createConfigurationSetEventDestination () {
        this.add('ses:CreateConfigurationSetEventDestination');
        return this;
    }

    /**
     * Create a new pool of dedicated IP addresses
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html
     */
    public createDedicatedIpPool () {
        this.add('ses:CreateDedicatedIpPool');
        return this;
    }

    /**
     * Create a new predictive inbox placement test.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html
     */
    public createDeliverabilityTestReport () {
        this.add('ses:CreateDeliverabilityTestReport');
        return this;
    }

    /**
     * Verifies an email identity for use with Amazon Pinpoint
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html
     */
    public createEmailIdentity () {
        this.add('ses:CreateEmailIdentity');
        return this;
    }

    /**
     * Delete an existing configuration set
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
     */
    public deleteConfigurationSet () {
        this.add('ses:DeleteConfigurationSet');
        return this;
    }

    /**
     * Delete an event destination
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
     */
    public deleteConfigurationSetEventDestination () {
        this.add('ses:DeleteConfigurationSetEventDestination');
        return this;
    }

    /**
     * Delete a dedicated IP pool
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
     */
    public deleteDedicatedIpPool () {
        this.add('ses:DeleteDedicatedIpPool');
        return this;
    }

    /**
     * Deletes an email identity that you previously verified for use with Amazon Pinpoint
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
     */
    public deleteEmailIdentity () {
        this.add('ses:DeleteEmailIdentity');
        return this;
    }

    /**
     * Obtain information about the email-sending status and capabilities
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
     */
    public getAccount () {
        this.add('ses:GetAccount');
        return this;
    }

    /**
     * Retrieve a list of the blacklists that your dedicated IP addresses appear on
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
     */
    public getBlacklistReports () {
        this.add('ses:GetBlacklistReports');
        return this;
    }

    /**
     * Get information about an existing configuration set
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
     */
    public getConfigurationSet () {
        this.add('ses:GetConfigurationSet');
        return this;
    }

    /**
     * Retrieve a list of event destinations that are associated with a configuration set
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
     */
    public getConfigurationSetEventDestinations () {
        this.add('ses:GetConfigurationSetEventDestinations');
        return this;
    }

    /**
     * Get information about a dedicated IP address
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
     */
    public getDedicatedIp () {
        this.add('ses:GetDedicatedIp');
        return this;
    }

    /**
     * List the dedicated IP addresses that are associated with your Amazon Pinpoint account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
     */
    public getDedicatedIps () {
        this.add('ses:GetDedicatedIps');
        return this;
    }

    /**
     * Show the status of the Deliverability dashboard
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
     */
    public getDeliverabilityDashboardOptions () {
        this.add('ses:GetDeliverabilityDashboardOptions');
        return this;
    }

    /**
     * Retrieve the results of a predictive inbox placement test
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
     */
    public getDeliverabilityTestReport () {
        this.add('ses:GetDeliverabilityTestReport');
        return this;
    }

    /**
     * Retrieve inbox placement and engagement rates for the domains that you use to send email
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
     */
    public getDomainStatisticsReport () {
        this.add('ses:GetDomainStatisticsReport');
        return this;
    }

    /**
     * Provides information about a specific identity associated with your Amazon Pinpoint account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
     */
    public getEmailIdentity () {
        this.add('ses:GetEmailIdentity');
        return this;
    }

    /**
     * List all of the configuration sets associated with your Amazon Pinpoint account in the current region
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
     */
    public listConfigurationSets () {
        this.add('ses:ListConfigurationSets');
        return this;
    }

    /**
     * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
     */
    public listDedicatedIpPools () {
        this.add('ses:ListDedicatedIpPools');
        return this;
    }

    /**
     * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
     */
    public listDeliverabilityTestReports () {
        this.add('ses:ListDeliverabilityTestReports');
        return this;
    }

    /**
     * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
     */
    public listEmailIdentities () {
        this.add('ses:ListEmailIdentities');
        return this;
    }

    /**
     * Retrieve a list of the tags (keys and values) that are associated with a specific resource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('ses:ListTagsForResource');
        return this;
    }

    /**
     * Enable or disable the automatic warm-up feature for dedicated IP addresses
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
     */
    public putAccountDedicatedIpWarmupAttributes () {
        this.add('ses:PutAccountDedicatedIpWarmupAttributes');
        return this;
    }

    /**
     * Enable or disable the ability of your account to send email
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
     */
    public putAccountSendingAttributes () {
        this.add('ses:PutAccountSendingAttributes');
        return this;
    }

    /**
     * Associate a configuration set with a dedicated IP pool
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
     */
    public putConfigurationSetDeliveryOptions () {
        this.add('ses:PutConfigurationSetDeliveryOptions');
        return this;
    }

    /**
     * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
     */
    public putConfigurationSetReputationOptions () {
        this.add('ses:PutConfigurationSetReputationOptions');
        return this;
    }

    /**
     * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
     */
    public putConfigurationSetSendingOptions () {
        this.add('ses:PutConfigurationSetSendingOptions');
        return this;
    }

    /**
     * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
     */
    public putConfigurationSetTrackingOptions () {
        this.add('ses:PutConfigurationSetTrackingOptions');
        return this;
    }

    /**
     * Move a dedicated IP address to an existing dedicated IP pool
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
     */
    public putDedicatedIpInPool () {
        this.add('ses:PutDedicatedIpInPool');
        return this;
    }

    /**
     * Put Dedicated IP warm up attributes
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
     */
    public putDedicatedIpWarmupAttributes () {
        this.add('ses:PutDedicatedIpWarmupAttributes');
        return this;
    }

    /**
     * Enable or disable the Deliverability dashboard
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
     */
    public putDeliverabilityDashboardOption () {
        this.add('ses:PutDeliverabilityDashboardOption');
        return this;
    }

    /**
     * Used to enable or disable DKIM authentication for an email identity
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
     */
    public putEmailIdentityDkimAttributes () {
        this.add('ses:PutEmailIdentityDkimAttributes');
        return this;
    }

    /**
     * Used to enable or disable feedback forwarding for an identity
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
     */
    public putEmailIdentityFeedbackAttributes () {
        this.add('ses:PutEmailIdentityFeedbackAttributes');
        return this;
    }

    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
     */
    public putEmailIdentityMailFromAttributes () {
        this.add('ses:PutEmailIdentityMailFromAttributes');
        return this;
    }

    /**
     * Sends an email message
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html
     */
    public sendEmail () {
        this.add('ses:SendEmail');
        return this;
    }

    /**
     * Add one or more tags (keys and values) to a specified resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('ses:TagResource');
        return this;
    }

    /**
     * Remove one or more tags (keys and values) from a specified resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('ses:UntagResource');
        return this;
    }

    /**
     * Update the configuration of an event destination for a configuration set
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
     */
    public updateConfigurationSetEventDestination () {
        this.add('ses:UpdateConfigurationSetEventDestination');
        return this;
    }
}
