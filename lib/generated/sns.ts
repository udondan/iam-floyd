import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [sns](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sns extends PolicyStatement {
  public servicePrefix = 'sns';

  /**
   * Statement provider for service [sns](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html
   */
  public toAddPermission() {
    this.to('sns:AddPermission');
    return this;
  }

  /**
   * Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html
   */
  public toCheckIfPhoneNumberIsOptedOut() {
    this.to('sns:CheckIfPhoneNumberIsOptedOut');
    return this;
  }

  /**
   * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
   */
  public toConfirmSubscription() {
    this.to('sns:ConfirmSubscription');
    return this;
  }

  /**
   * Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html
   */
  public toCreatePlatformApplication() {
    this.to('sns:CreatePlatformApplication');
    return this;
  }

  /**
   * Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html
   */
  public toCreatePlatformEndpoint() {
    this.to('sns:CreatePlatformEndpoint');
    return this;
  }

  /**
   * Creates a topic to which notifications can be published.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html
   */
  public toCreateTopic() {
    this.to('sns:CreateTopic');
    return this;
  }

  /**
   * Deletes the endpoint for a device and mobile app from Amazon SNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.to('sns:DeleteEndpoint');
    return this;
  }

  /**
   * Deletes a platform application object for one of the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html
   */
  public toDeletePlatformApplication() {
    this.to('sns:DeletePlatformApplication');
    return this;
  }

  /**
   * Deletes a topic and all its subscriptions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html
   */
  public toDeleteTopic() {
    this.to('sns:DeleteTopic');
    return this;
  }

  /**
   * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html
   */
  public toGetEndpointAttributes() {
    this.to('sns:GetEndpointAttributes');
    return this;
  }

  /**
   * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html
   */
  public toGetPlatformApplicationAttributes() {
    this.to('sns:GetPlatformApplicationAttributes');
    return this;
  }

  /**
   * Returns the settings for sending SMS messages from your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html
   */
  public toGetSMSAttributes() {
    this.to('sns:GetSMSAttributes');
    return this;
  }

  /**
   * Returns all of the properties of a subscription.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html
   */
  public toGetSubscriptionAttributes() {
    this.to('sns:GetSubscriptionAttributes');
    return this;
  }

  /**
   * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html
   */
  public toGetTopicAttributes() {
    this.to('sns:GetTopicAttributes');
    return this;
  }

  /**
   * Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html
   */
  public toListEndpointsByPlatformApplication() {
    this.to('sns:ListEndpointsByPlatformApplication');
    return this;
  }

  /**
   * Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html
   */
  public toListPhoneNumbersOptedOut() {
    this.to('sns:ListPhoneNumbersOptedOut');
    return this;
  }

  /**
   * Lists the platform application objects for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html
   */
  public toListPlatformApplications() {
    this.to('sns:ListPlatformApplications');
    return this;
  }

  /**
   * Returns a list of the requester's subscriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html
   */
  public toListSubscriptions() {
    this.to('sns:ListSubscriptions');
    return this;
  }

  /**
   * Returns a list of the subscriptions to a specific topic.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html
   */
  public toListSubscriptionsByTopic() {
    this.to('sns:ListSubscriptionsByTopic');
    return this;
  }

  /**
   * List all tags added to the specified Amazon SNS topic.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('sns:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html
   */
  public toListTopics() {
    this.to('sns:ListTopics');
    return this;
  }

  /**
   * Opts in a phone number that is currently opted out, which enables you to resume sending SMS messages to the number.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html
   */
  public toOptInPhoneNumber() {
    this.to('sns:OptInPhoneNumber');
    return this;
  }

  /**
   * Sends a message to all of a topic's subscribed endpoints.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Publish.html
   */
  public toPublish() {
    this.to('sns:Publish');
    return this;
  }

  /**
   * Removes a statement from a topic's access control policy.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.to('sns:RemovePermission');
    return this;
  }

  /**
   * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html
   */
  public toSetEndpointAttributes() {
    this.to('sns:SetEndpointAttributes');
    return this;
  }

  /**
   * Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html
   */
  public toSetPlatformApplicationAttributes() {
    this.to('sns:SetPlatformApplicationAttributes');
    return this;
  }

  /**
   * Set the default settings for sending SMS messages and receiving daily SMS usage reports.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html
   */
  public toSetSMSAttributes() {
    this.to('sns:SetSMSAttributes');
    return this;
  }

  /**
   * Allows a subscription owner to set an attribute of the topic to a new value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html
   */
  public toSetSubscriptionAttributes() {
    this.to('sns:SetSubscriptionAttributes');
    return this;
  }

  /**
   * Allows a topic owner to set an attribute of the topic to a new value.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html
   */
  public toSetTopicAttributes() {
    this.to('sns:SetTopicAttributes');
    return this;
  }

  /**
   * Prepares to subscribe an endpoint by sending the endpoint a confirmation message.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEndpoint()
   * - .ifProtocol()
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html
   */
  public toSubscribe() {
    this.to('sns:Subscribe');
    return this;
  }

  /**
   * Add tags to the specified Amazon SNS topic.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.to('sns:TagResource');
    return this;
  }

  /**
   * Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
   */
  public toUnsubscribe() {
    this.to('sns:Unsubscribe');
    return this;
  }

  /**
   * Remove tags from the specified Amazon SNS topic.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('sns:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AddPermission",
      "RemovePermission"
    ],
    "Read": [
      "CheckIfPhoneNumberIsOptedOut",
      "GetEndpointAttributes",
      "GetPlatformApplicationAttributes",
      "GetSMSAttributes",
      "GetSubscriptionAttributes",
      "GetTopicAttributes",
      "ListPhoneNumbersOptedOut",
      "ListTagsForResource"
    ],
    "Write": [
      "ConfirmSubscription",
      "CreatePlatformApplication",
      "CreatePlatformEndpoint",
      "CreateTopic",
      "DeleteEndpoint",
      "DeletePlatformApplication",
      "DeleteTopic",
      "OptInPhoneNumber",
      "Publish",
      "SetEndpointAttributes",
      "SetPlatformApplicationAttributes",
      "SetSMSAttributes",
      "SetSubscriptionAttributes",
      "SetTopicAttributes",
      "Subscribe",
      "Unsubscribe"
    ],
    "List": [
      "ListEndpointsByPlatformApplication",
      "ListPlatformApplications",
      "ListSubscriptions",
      "ListSubscriptionsByTopic",
      "ListTopics"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html
   *
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopic(topicName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sns:${Region}:${Account}:${TopicName}';
    arn = arn.replace('${TopicName}', topicName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The URL, email address, or ARN from a Subscribe request or a previously confirmed subscription.
   *
   * https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19
   *
   * Applies to actions:
   * - .toSubscribe()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpoint(value: string | string[], operator?: Operator | string) {
    return this.if(`sns:Endpoint`, value, operator || 'StringLike');
  }

  /**
   * The protocol value from a Subscribe request or a previously confirmed subscription.
   *
   * https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19
   *
   * Applies to actions:
   * - .toSubscribe()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProtocol(value: string | string[], operator?: Operator | string) {
    return this.if(`sns:Protocol`, value, operator || 'StringLike');
  }
}

export type SnsActionsPermissionsManagement = 'AddPermission' | 'RemovePermission';
export type SnsActionsRead = 'CheckIfPhoneNumberIsOptedOut' | 'GetEndpointAttributes' | 'GetPlatformApplicationAttributes' | 'GetSMSAttributes' | 'GetSubscriptionAttributes' | 'GetTopicAttributes' | 'ListPhoneNumbersOptedOut' | 'ListTagsForResource';
export type SnsActionsWrite = 'ConfirmSubscription' | 'CreatePlatformApplication' | 'CreatePlatformEndpoint' | 'CreateTopic' | 'DeleteEndpoint' | 'DeletePlatformApplication' | 'DeleteTopic' | 'OptInPhoneNumber' | 'Publish' | 'SetEndpointAttributes' | 'SetPlatformApplicationAttributes' | 'SetSMSAttributes' | 'SetSubscriptionAttributes' | 'SetTopicAttributes' | 'Subscribe' | 'Unsubscribe';
export type SnsActionsList = 'ListEndpointsByPlatformApplication' | 'ListPlatformApplications' | 'ListSubscriptions' | 'ListSubscriptionsByTopic' | 'ListTopics';
export type SnsActionsTagging = 'TagResource' | 'UntagResource';
export type SnsActions = SnsActionsPermissionsManagement | SnsActionsRead | SnsActionsWrite | SnsActionsList | SnsActionsTagging;
