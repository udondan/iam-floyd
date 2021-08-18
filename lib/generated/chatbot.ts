import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [chatbot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Chatbot extends PolicyStatement {
  public servicePrefix = 'chatbot';

  /**
   * Statement provider for service [chatbot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   */
  public toCreateChimeWebhookConfiguration() {
    return this.to('CreateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to create an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   */
  public toCreateSlackChannelConfiguration() {
    return this.to('CreateSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   */
  public toDeleteChimeWebhookConfiguration() {
    return this.to('DeleteChimeWebhookConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   */
  public toDeleteSlackChannelConfiguration() {
    return this.to('DeleteSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete the Slack workspace authorization with AWS Chatbot, associated with an AWS account
   *
   * Access Level: Write
   */
  public toDeleteSlackWorkspaceAuthorization() {
    return this.to('DeleteSlackWorkspaceAuthorization');
  }

  /**
   * Grants permission to list all AWS Chatbot Chime Webhook Configurations in an AWS Account
   *
   * Access Level: Read
   */
  public toDescribeChimeWebhookConfigurations() {
    return this.to('DescribeChimeWebhookConfigurations');
  }

  /**
   * Grants permission to list all AWS Chatbot Slack Channel Configurations in an AWS account
   *
   * Access Level: Read
   */
  public toDescribeSlackChannelConfigurations() {
    return this.to('DescribeSlackChannelConfigurations');
  }

  /**
   * Grants permission to list all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   */
  public toDescribeSlackChannels() {
    return this.to('DescribeSlackChannels');
  }

  /**
   * Grants permission to list all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   */
  public toDescribeSlackWorkspaces() {
    return this.to('DescribeSlackWorkspaces');
  }

  /**
   * Grants permission to generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service
   *
   * Access Level: Read
   */
  public toGetSlackOauthParameters() {
    return this.to('GetSlackOauthParameters');
  }

  /**
   * Grants permission to redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * Access Level: Write
   */
  public toRedeemSlackOauthCode() {
    return this.to('RedeemSlackOauthCode');
  }

  /**
   * Grants permission to update an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   */
  public toUpdateChimeWebhookConfiguration() {
    return this.to('UpdateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to update an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   */
  public toUpdateSlackChannelConfiguration() {
    return this.to('UpdateSlackChannelConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateChimeWebhookConfiguration",
      "CreateSlackChannelConfiguration",
      "DeleteChimeWebhookConfiguration",
      "DeleteSlackChannelConfiguration",
      "DeleteSlackWorkspaceAuthorization",
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
   * @param chatbotConfigurationName - Identifier for the chatbotConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChatbotConfiguration(chatbotConfigurationName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:chatbot::${Account}:chat-configuration/${ChatbotConfigurationName}';
    arn = arn.replace('${ChatbotConfigurationName}', chatbotConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
