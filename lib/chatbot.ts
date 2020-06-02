import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service chatbot
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awschatbot.html
 */
export class Chatbot extends PolicyStatement {
    public servicePrefix = 'chatbot';
    public actions : Actions = { "CreateChimeWebhookConfiguration": { "url": "", "description": "Creates an AWS Chatbot Chime Webhook Configuration.", "accessLevel": "Write" }, "CreateSlackChannelConfiguration": { "url": "", "description": "Creates an AWS Chatbot Slack Channel Configuration.", "accessLevel": "Write" }, "DeleteChimeWebhookConfiguration": { "url": "", "description": "Deletes an AWS Chatbot Chime Webhook Configuration.", "accessLevel": "Write" }, "DeleteSlackChannelConfiguration": { "url": "", "description": "Deletes an AWS Chatbot Slack Channel Configuration.", "accessLevel": "Write" }, "DescribeChimeWebhookConfigurations": { "url": "", "description": "Lists all AWS Chatbot Chime Webhook Configurations in an AWS Account.", "accessLevel": "Read" }, "DescribeSlackChannelConfigurations": { "url": "", "description": "Lists all AWS Chatbot Slack Channel Configurations in an AWS account.", "accessLevel": "Read" }, "DescribeSlackChannels": { "url": "", "description": "Lists all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service.", "accessLevel": "Read" }, "DescribeSlackWorkspaces": { "url": "", "description": "Lists all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service.", "accessLevel": "Read" }, "GetSlackOauthParameters": { "url": "", "description": "Generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service.", "accessLevel": "Read" }, "RedeemSlackOauthCode": { "url": "", "description": "Redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service.", "accessLevel": "Write" }, "UpdateChimeWebhookConfiguration": { "url": "", "description": "Updates an AWS Chatbot Chime Webhook Configuration.", "accessLevel": "Write" }, "UpdateSlackChannelConfiguration": { "url": "", "description": "Updates an AWS Chatbot Slack Channel Configuration.", "accessLevel": "Write" } };

    /**
     * Creates an AWS Chatbot Chime Webhook Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public createChimeWebhookConfiguration () {
        this.add('chatbot:CreateChimeWebhookConfiguration');
        return this;
    }

    /**
     * Creates an AWS Chatbot Slack Channel Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public createSlackChannelConfiguration () {
        this.add('chatbot:CreateSlackChannelConfiguration');
        return this;
    }

    /**
     * Deletes an AWS Chatbot Chime Webhook Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public deleteChimeWebhookConfiguration () {
        this.add('chatbot:DeleteChimeWebhookConfiguration');
        return this;
    }

    /**
     * Deletes an AWS Chatbot Slack Channel Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public deleteSlackChannelConfiguration () {
        this.add('chatbot:DeleteSlackChannelConfiguration');
        return this;
    }

    /**
     * Lists all AWS Chatbot Chime Webhook Configurations in an AWS Account.
     *
     * Access Level: Read
     *
     *
     */
    public describeChimeWebhookConfigurations () {
        this.add('chatbot:DescribeChimeWebhookConfigurations');
        return this;
    }

    /**
     * Lists all AWS Chatbot Slack Channel Configurations in an AWS account.
     *
     * Access Level: Read
     *
     *
     */
    public describeSlackChannelConfigurations () {
        this.add('chatbot:DescribeSlackChannelConfigurations');
        return this;
    }

    /**
     * Lists all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service.
     *
     * Access Level: Read
     *
     *
     */
    public describeSlackChannels () {
        this.add('chatbot:DescribeSlackChannels');
        return this;
    }

    /**
     * Lists all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service.
     *
     * Access Level: Read
     *
     *
     */
    public describeSlackWorkspaces () {
        this.add('chatbot:DescribeSlackWorkspaces');
        return this;
    }

    /**
     * Generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service.
     *
     * Access Level: Read
     *
     *
     */
    public getSlackOauthParameters () {
        this.add('chatbot:GetSlackOauthParameters');
        return this;
    }

    /**
     * Redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service.
     *
     * Access Level: Write
     *
     *
     */
    public redeemSlackOauthCode () {
        this.add('chatbot:RedeemSlackOauthCode');
        return this;
    }

    /**
     * Updates an AWS Chatbot Chime Webhook Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public updateChimeWebhookConfiguration () {
        this.add('chatbot:UpdateChimeWebhookConfiguration');
        return this;
    }

    /**
     * Updates an AWS Chatbot Slack Channel Configuration.
     *
     * Access Level: Write
     *
     *
     */
    public updateSlackChannelConfiguration () {
        this.add('chatbot:UpdateSlackChannelConfiguration');
        return this;
    }
}
