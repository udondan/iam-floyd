import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to associate a resource with a configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_AssociateToConfiguration.html
   */
  public toAssociateToConfiguration() {
    return this.to('AssociateToConfiguration');
  }

  /**
   * Grants permission to create an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateChimeWebhookConfiguration.html
   */
  public toCreateChimeWebhookConfiguration() {
    return this.to('CreateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to create a custom action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateCustomAction.html
   */
  public toCreateCustomAction() {
    return this.to('CreateCustomAction');
  }

  /**
   * Grants permission to create an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateMicrosoftTeamsChannelConfiguration.html
   */
  public toCreateMicrosoftTeamsChannelConfiguration() {
    return this.to('CreateMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to create an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateSlackChannelConfiguration.html
   */
  public toCreateSlackChannelConfiguration() {
    return this.to('CreateSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteChimeWebhookConfiguration.html
   */
  public toDeleteChimeWebhookConfiguration() {
    return this.to('DeleteChimeWebhookConfiguration');
  }

  /**
   * Grants permission to delete a custom action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteCustomAction.html
   */
  public toDeleteCustomAction() {
    return this.to('DeleteCustomAction');
  }

  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsChannelConfiguration.html
   */
  public toDeleteMicrosoftTeamsChannelConfiguration() {
    return this.to('DeleteMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to delete the Microsoft Teams configured with AWS Chatbot in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsConfiguredTeam.html
   */
  public toDeleteMicrosoftTeamsConfiguredTeam() {
    return this.to('DeleteMicrosoftTeamsConfiguredTeam');
  }

  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams User Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsUserIdentity.html
   */
  public toDeleteMicrosoftTeamsUserIdentity() {
    return this.to('DeleteMicrosoftTeamsUserIdentity');
  }

  /**
   * Grants permission to delete an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackChannelConfiguration.html
   */
  public toDeleteSlackChannelConfiguration() {
    return this.to('DeleteSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an AWS Chatbot Slack User Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackUserIdentity.html
   */
  public toDeleteSlackUserIdentity() {
    return this.to('DeleteSlackUserIdentity');
  }

  /**
   * Grants permission to delete the Slack workspace authorization with AWS Chatbot, associated with an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackWorkspaceAuthorization.html
   */
  public toDeleteSlackWorkspaceAuthorization() {
    return this.to('DeleteSlackWorkspaceAuthorization');
  }

  /**
   * Grants permission to list all AWS Chatbot Chime Webhook Configurations in an AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeChimeWebhookConfigurations.html
   */
  public toDescribeChimeWebhookConfigurations() {
    return this.to('DescribeChimeWebhookConfigurations');
  }

  /**
   * Grants permission to list all AWS Chatbot Slack Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackChannelConfigurations.html
   */
  public toDescribeSlackChannelConfigurations() {
    return this.to('DescribeSlackChannelConfigurations');
  }

  /**
   * Grants permission to list all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  public toDescribeSlackChannels() {
    return this.to('DescribeSlackChannels');
  }

  /**
   * Grants permission to describe AWS Chatbot Slack User Identities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackUserIdentities.html
   */
  public toDescribeSlackUserIdentities() {
    return this.to('DescribeSlackUserIdentities');
  }

  /**
   * Grants permission to list all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackWorkspaces.html
   */
  public toDescribeSlackWorkspaces() {
    return this.to('DescribeSlackWorkspaces');
  }

  /**
   * Grants permission to disassociate a resource from a configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DisassociateFromConfiguration.html
   */
  public toDisassociateFromConfiguration() {
    return this.to('DisassociateFromConfiguration');
  }

  /**
   * Grants permission to retrieve AWS Chatbot account preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetAccountPreferences.html
   */
  public toGetAccountPreferences() {
    return this.to('GetAccountPreferences');
  }

  /**
   * Grants permission to get a custom action
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetCustomAction.html
   */
  public toGetCustomAction() {
    return this.to('GetCustomAction');
  }

  /**
   * Grants permission to get a single AWS Chatbot Microsoft Teams Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetMicrosoftTeamsChannelConfiguration.html
   */
  public toGetMicrosoftTeamsChannelConfiguration() {
    return this.to('GetMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to generate OAuth parameters to request Microsoft Teams OAuth code to be used by the AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  public toGetMicrosoftTeamsOauthParameters() {
    return this.to('GetMicrosoftTeamsOauthParameters');
  }

  /**
   * Grants permission to generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  public toGetSlackOauthParameters() {
    return this.to('GetSlackOauthParameters');
  }

  /**
   * Grants permission to list resources associated with a configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListAssociations.html
   */
  public toListAssociations() {
    return this.to('ListAssociations');
  }

  /**
   * Grants permission to list custom actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListCustomActions.html
   */
  public toListCustomActions() {
    return this.to('ListCustomActions');
  }

  /**
   * Grants permission to list all AWS Chatbot Microsoft Teams Channel Configurations in an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsChannelConfigurations.html
   */
  public toListMicrosoftTeamsChannelConfigurations() {
    return this.to('ListMicrosoftTeamsChannelConfigurations');
  }

  /**
   * Grants permission to list all Microsoft Teams connected to the AWS Account onboarded with AWS Chatbot service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsConfiguredTeams.html
   */
  public toListMicrosoftTeamsConfiguredTeams() {
    return this.to('ListMicrosoftTeamsConfiguredTeams');
  }

  /**
   * Grants permission to describe AWS Chatbot Microsoft Teams User Identities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsUserIdentities.html
   */
  public toListMicrosoftTeamsUserIdentities() {
    return this.to('ListMicrosoftTeamsUserIdentities');
  }

  /**
   * Grants permission to List all tags associated with the AWS Chatbot Channel Configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to redeem previously generated parameters with Microsoft APIs, to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  public toRedeemMicrosoftTeamsOauthCode() {
    return this.to('RedeemMicrosoftTeamsOauthCode');
  }

  /**
   * Grants permission to redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  public toRedeemSlackOauthCode() {
    return this.to('RedeemSlackOauthCode');
  }

  /**
   * Grants permission to create tags on AWS Chatbot Channel Configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags on AWS Chatbot Channel Configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update AWS Chatbot account preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateAccountPreferences.html
   */
  public toUpdateAccountPreferences() {
    return this.to('UpdateAccountPreferences');
  }

  /**
   * Grants permission to update an AWS Chatbot Chime Webhook Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateChimeWebhookConfiguration.html
   */
  public toUpdateChimeWebhookConfiguration() {
    return this.to('UpdateChimeWebhookConfiguration');
  }

  /**
   * Grants permission to update a custom action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateCustomAction.html
   */
  public toUpdateCustomAction() {
    return this.to('UpdateCustomAction');
  }

  /**
   * Grants permission to update an AWS Chatbot Microsoft Teams Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateMicrosoftTeamsChannelConfiguration.html
   */
  public toUpdateMicrosoftTeamsChannelConfiguration() {
    return this.to('UpdateMicrosoftTeamsChannelConfiguration');
  }

  /**
   * Grants permission to update an AWS Chatbot Slack Channel Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateSlackChannelConfiguration.html
   */
  public toUpdateSlackChannelConfiguration() {
    return this.to('UpdateSlackChannelConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateToConfiguration',
      'CreateChimeWebhookConfiguration',
      'CreateCustomAction',
      'CreateMicrosoftTeamsChannelConfiguration',
      'CreateSlackChannelConfiguration',
      'DeleteChimeWebhookConfiguration',
      'DeleteCustomAction',
      'DeleteMicrosoftTeamsChannelConfiguration',
      'DeleteMicrosoftTeamsConfiguredTeam',
      'DeleteMicrosoftTeamsUserIdentity',
      'DeleteSlackChannelConfiguration',
      'DeleteSlackUserIdentity',
      'DeleteSlackWorkspaceAuthorization',
      'DisassociateFromConfiguration',
      'RedeemMicrosoftTeamsOauthCode',
      'RedeemSlackOauthCode',
      'UpdateAccountPreferences',
      'UpdateChimeWebhookConfiguration',
      'UpdateCustomAction',
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
      'GetCustomAction',
      'GetMicrosoftTeamsChannelConfiguration',
      'GetMicrosoftTeamsOauthParameters',
      'GetSlackOauthParameters',
      'ListAssociations',
      'ListMicrosoftTeamsChannelConfigurations',
      'ListMicrosoftTeamsConfiguredTeams',
      'ListMicrosoftTeamsUserIdentities',
      'ListTagsForResource'
    ],
    List: [
      'ListCustomActions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ChatbotConfiguration to the statement
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   *
   * @param configurationType - Identifier for the configurationType.
   * @param chatbotConfigurationName - Identifier for the chatbotConfigurationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChatbotConfiguration(configurationType: string, chatbotConfigurationName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chatbot::${ account ?? this.defaultAccount }:chat-configuration/${ configurationType }/${ chatbotConfigurationName }`);
  }

  /**
   * Adds a resource of type custom-action to the statement
   *
   * https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   *
   * @param actionName - Identifier for the actionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomAction(actionName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chatbot::${ account ?? this.defaultAccount }:custom-action/${ actionName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateChimeWebhookConfiguration()
   * - .toCreateCustomAction()
   * - .toCreateMicrosoftTeamsChannelConfiguration()
   * - .toCreateSlackChannelConfiguration()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateToConfiguration()
   * - .toDeleteChimeWebhookConfiguration()
   * - .toDeleteCustomAction()
   * - .toDeleteMicrosoftTeamsChannelConfiguration()
   * - .toDeleteSlackChannelConfiguration()
   * - .toDisassociateFromConfiguration()
   * - .toGetCustomAction()
   * - .toGetMicrosoftTeamsChannelConfiguration()
   * - .toUpdateChimeWebhookConfiguration()
   * - .toUpdateCustomAction()
   * - .toUpdateMicrosoftTeamsChannelConfiguration()
   * - .toUpdateSlackChannelConfiguration()
   *
   * Applies to resource types:
   * - ChatbotConfiguration
   * - custom-action
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateChimeWebhookConfiguration()
   * - .toCreateCustomAction()
   * - .toCreateMicrosoftTeamsChannelConfiguration()
   * - .toCreateSlackChannelConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
