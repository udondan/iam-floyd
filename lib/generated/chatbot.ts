import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toCreateChimeWebhookConfiguration() {
    return this.to('CreateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to create an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toCreateMicrosoftTeamsChannelConfiguration() {
    return this.to('CreateMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to create an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toCreateSlackChannelConfiguration() {
    return this.to('CreateSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteChimeWebhookConfiguration() {
    return this.to('DeleteChimeWebhookConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteMicrosoftTeamsChannelConfiguration() {
    return this.to('DeleteMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to delete the Microsoft Teams configured with AWS Chatbot in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteMicrosoftTeamsConfiguredTeam() {
    return this.to('DeleteMicrosoftTeamsConfiguredTeam');
  }

  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams User Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteMicrosoftTeamsUserIdentity() {
    return this.to('DeleteMicrosoftTeamsUserIdentity');
  }

  /**
   * Grants permission to delete an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteSlackChannelConfiguration() {
    return this.to('DeleteSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Slack User Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteSlackUserIdentity() {
    return this.to('DeleteSlackUserIdentity');
  }

  /**
   * Grants permission to delete the Slack workspace authorization with AWS Chatbot, associated with an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDeleteSlackWorkspaceAuthorization() {
    return this.to('DeleteSlackWorkspaceAuthorization');
  }

  /**
   * Grants permission to list all AWS Chatbot Chime Webhook Configurations in an AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDescribeChimeWebhookConfigurations() {
    return this.to('DescribeChimeWebhookConfigurations');
  }

  /**
   * Grants permission to list all AWS Chatbot Slack Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDescribeSlackChannelConfigurations() {
    return this.to('DescribeSlackChannelConfigurations');
  }

  /**
   * Grants permission to list all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDescribeSlackChannels() {
    return this.to('DescribeSlackChannels');
  }

  /**
   * Grants permission to describe AWS Chatbot Slack User Identities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDescribeSlackUserIdentities() {
    return this.to('DescribeSlackUserIdentities');
  }

  /**
   * Grants permission to list all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toDescribeSlackWorkspaces() {
    return this.to('DescribeSlackWorkspaces');
  }

  /**
   * Grants permission to retrieve AWS Chatbot account preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toGetAccountPreferences() {
    return this.to('GetAccountPreferences');
  }

  /**
   * Grants permission to get a single AWS Chatbot Microsoft Teams Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toGetMicrosoftTeamsChannelConfiguration() {
    return this.to('GetMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to generate OAuth parameters to request Microsoft Teams OAuth code to be used by the AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toGetMicrosoftTeamsOauthParameters() {
    return this.to('GetMicrosoftTeamsOauthParameters');
  }

  /**
   * Grants permission to generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toGetSlackOauthParameters() {
    return this.to('GetSlackOauthParameters');
  }

  /**
   * Grants permission to list all AWS Chatbot Microsoft Teams Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toListMicrosoftTeamsChannelConfigurations() {
    return this.to('ListMicrosoftTeamsChannelConfigurations');
  }

  /**
   * Grants permission to list all Microsoft Teams connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toListMicrosoftTeamsConfiguredTeams() {
    return this.to('ListMicrosoftTeamsConfiguredTeams');
  }

  /**
   * Grants permission to describe AWS Chatbot Microsoft Teams User Identities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toListMicrosoftTeamsUserIdentities() {
    return this.to('ListMicrosoftTeamsUserIdentities');
  }

  /**
   * Grants permission to redeem previously generated parameters with Microsoft APIs, to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toRedeemMicrosoftTeamsOauthCode() {
    return this.to('RedeemMicrosoftTeamsOauthCode');
  }

  /**
   * Grants permission to redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toRedeemSlackOauthCode() {
    return this.to('RedeemSlackOauthCode');
  }

  /**
   * Grants permission to update AWS Chatbot account preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toUpdateAccountPreferences() {
    return this.to('UpdateAccountPreferences');
  }

  /**
   * Grants permission to update an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toUpdateChimeWebhookConfiguration() {
    return this.to('UpdateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to update an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toUpdateMicrosoftTeamsChannelConfiguration() {
    return this.to('UpdateMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to update an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  public toUpdateSlackChannelConfiguration() {
    return this.to('UpdateSlackChannelConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateChimeWebhookConfiguration',
      'CreateMicrosoftTeamsChannelConfiguration',
      'CreateSlackChannelConfiguration',
      'DeleteChimeWebhookConfiguration',
      'DeleteMicrosoftTeamsChannelConfiguration',
      'DeleteMicrosoftTeamsConfiguredTeam',
      'DeleteMicrosoftTeamsUserIdentity',
      'DeleteSlackChannelConfiguration',
      'DeleteSlackUserIdentity',
      'DeleteSlackWorkspaceAuthorization',
      'RedeemMicrosoftTeamsOauthCode',
      'RedeemSlackOauthCode',
      'UpdateAccountPreferences',
      'UpdateChimeWebhookConfiguration',
      'UpdateMicrosoftTeamsChannelConfiguration',
      'UpdateSlackChannelConfiguration'
    ],
    Read: [
      'DescribeChimeWebhookConfigurations',
      'DescribeSlackChannelConfigurations',
      'DescribeSlackChannels',
      'DescribeSlackUserIdentities',
      'DescribeSlackWorkspaces',
      'GetAccountPreferences',
      'GetMicrosoftTeamsChannelConfiguration',
      'GetMicrosoftTeamsOauthParameters',
      'GetSlackOauthParameters',
      'ListMicrosoftTeamsChannelConfigurations',
      'ListMicrosoftTeamsConfiguredTeams',
      'ListMicrosoftTeamsUserIdentities'
    ]
  };

  /**
   * Adds a resource of type ChatbotConfiguration to the statement
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   *
   * @param configurationType - Identifier for the configurationType.
   * @param chatbotConfigurationName - Identifier for the chatbotConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChatbotConfiguration(configurationType: string, chatbotConfigurationName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Chatbot.defaultPartition }:chatbot::${ account || '*' }:chat-configuration/${ configurationType }/${ chatbotConfigurationName }`);
  }
}
