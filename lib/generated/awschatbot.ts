import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [chatbot](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awschatbot.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Chatbot extends PolicyStatement {
  public servicePrefix = 'chatbot';

  /**
   * Statement provider for service [chatbot](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awschatbot.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toCreateChimeWebhookConfiguration() {
    this.to('chatbot:CreateChimeWebhookConfiguration');
    return this;
  }

  /**
   * Creates an AWS Chatbot Slack Channel Configuration.
   *
   * Access Level: Write
   */
  public toCreateSlackChannelConfiguration() {
    this.to('chatbot:CreateSlackChannelConfiguration');
    return this;
  }

  /**
   * Deletes an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toDeleteChimeWebhookConfiguration() {
    this.to('chatbot:DeleteChimeWebhookConfiguration');
    return this;
  }

  /**
   * Deletes an AWS Chatbot Slack Channel Configuration.
   *
   * Access Level: Write
   */
  public toDeleteSlackChannelConfiguration() {
    this.to('chatbot:DeleteSlackChannelConfiguration');
    return this;
  }

  /**
   * Lists all AWS Chatbot Chime Webhook Configurations in an AWS Account.
   *
   * Access Level: Read
   */
  public toDescribeChimeWebhookConfigurations() {
    this.to('chatbot:DescribeChimeWebhookConfigurations');
    return this;
  }

  /**
   * Lists all AWS Chatbot Slack Channel Configurations in an AWS account.
   *
   * Access Level: Read
   */
  public toDescribeSlackChannelConfigurations() {
    this.to('chatbot:DescribeSlackChannelConfigurations');
    return this;
  }

  /**
   * Lists all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toDescribeSlackChannels() {
    this.to('chatbot:DescribeSlackChannels');
    return this;
  }

  /**
   * Lists all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toDescribeSlackWorkspaces() {
    this.to('chatbot:DescribeSlackWorkspaces');
    return this;
  }

  /**
   * Generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toGetSlackOauthParameters() {
    this.to('chatbot:GetSlackOauthParameters');
    return this;
  }

  /**
   * Redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service.
   *
   * Access Level: Write
   */
  public toRedeemSlackOauthCode() {
    this.to('chatbot:RedeemSlackOauthCode');
    return this;
  }

  /**
   * Updates an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toUpdateChimeWebhookConfiguration() {
    this.to('chatbot:UpdateChimeWebhookConfiguration');
    return this;
  }

  /**
   * Updates an AWS Chatbot Slack Channel Configuration.
   *
   * Access Level: Write
   */
  public toUpdateSlackChannelConfiguration() {
    this.to('chatbot:UpdateSlackChannelConfiguration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateChimeWebhookConfiguration",
      "CreateSlackChannelConfiguration",
      "DeleteChimeWebhookConfiguration",
      "DeleteSlackChannelConfiguration",
      "RedeemSlackOauthCode",
      "UpdateChimeWebhookConfiguration",
      "UpdateSlackChannelConfiguration"
    ],
    "Read": [
      "DescribeChimeWebhookConfigurations",
      "DescribeSlackChannelConfigurations",
      "DescribeSlackChannels",
      "DescribeSlackWorkspaces",
      "GetSlackOauthParameters"
    ]
  };

  /**
   * Adds a resource of type ChatbotConfiguration to the statement
   *
   * @param resourceType - Identifier for the resourceType.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChatbotConfiguration(resourceType: string, resourceName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:chatbot::${Account}:${ResourceType}/${ResourceName}';
    arn = arn.replace('${ResourceType}', resourceType);
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
