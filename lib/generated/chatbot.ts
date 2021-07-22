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
   * Creates an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toCreateChimeWebhookConfiguration() {
    return this.to('CreateChimeWebhookConfiguration');
  }

  /**
   * Creates an AWS Chatbot Slack Channel Configuration.
   *
   * Access Level: Write
   */
  public toCreateSlackChannelConfiguration() {
    return this.to('CreateSlackChannelConfiguration');
  }

  /**
   * Deletes an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toDeleteChimeWebhookConfiguration() {
    return this.to('DeleteChimeWebhookConfiguration');
  }

  /**
   * Deletes an AWS Chatbot Slack Channel Configuration.
   *
   * Access Level: Write
   */
  public toDeleteSlackChannelConfiguration() {
    return this.to('DeleteSlackChannelConfiguration');
  }

  /**
   * Lists all AWS Chatbot Chime Webhook Configurations in an AWS Account.
   *
   * Access Level: Read
   */
  public toDescribeChimeWebhookConfigurations() {
    return this.to('DescribeChimeWebhookConfigurations');
  }

  /**
   * Lists all AWS Chatbot Slack Channel Configurations in an AWS account.
   *
   * Access Level: Read
   */
  public toDescribeSlackChannelConfigurations() {
    return this.to('DescribeSlackChannelConfigurations');
  }

  /**
   * Lists all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toDescribeSlackChannels() {
    return this.to('DescribeSlackChannels');
  }

  /**
   * Lists all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toDescribeSlackWorkspaces() {
    return this.to('DescribeSlackWorkspaces');
  }

  /**
   * Generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service.
   *
   * Access Level: Read
   */
  public toGetSlackOauthParameters() {
    return this.to('GetSlackOauthParameters');
  }

  /**
   * Redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service.
   *
   * Access Level: Write
   */
  public toRedeemSlackOauthCode() {
    return this.to('RedeemSlackOauthCode');
  }

  /**
   * Updates an AWS Chatbot Chime Webhook Configuration.
   *
   * Access Level: Write
   */
  public toUpdateChimeWebhookConfiguration() {
    return this.to('UpdateChimeWebhookConfiguration');
  }

  /**
   * Updates an AWS Chatbot Slack Channel Configuration.
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
