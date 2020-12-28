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
    return this.to('AddPermission');
  }

  /**
   * Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html
   */
  public toCheckIfPhoneNumberIsOptedOut() {
    return this.to('CheckIfPhoneNumberIsOptedOut');
  }

  /**
   * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
   */
  public toConfirmSubscription() {
    return this.to('ConfirmSubscription');
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
    return this.to('CreatePlatformApplication');
  }

  /**
   * Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html
   */
  public toCreatePlatformEndpoint() {
    return this.to('CreatePlatformEndpoint');
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
    return this.to('CreateTopic');
  }

  /**
   * Deletes the endpoint for a device and mobile app from Amazon SNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Deletes a platform application object for one of the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html
   */
  public toDeletePlatformApplication() {
    return this.to('DeletePlatformApplication');
  }

  /**
   * Deletes a topic and all its subscriptions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html
   */
  public toDeleteTopic() {
    return this.to('DeleteTopic');
  }

  /**
   * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html
   */
  public toGetEndpointAttributes() {
    return this.to('GetEndpointAttributes');
  }

  /**
   * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html
   */
  public toGetPlatformApplicationAttributes() {
    return this.to('GetPlatformApplicationAttributes');
  }

  /**
   * Returns the settings for sending SMS messages from your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html
   */
  public toGetSMSAttributes() {
    return this.to('GetSMSAttributes');
  }

  /**
   * Returns all of the properties of a subscription.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html
   */
  public toGetSubscriptionAttributes() {
    return this.to('GetSubscriptionAttributes');
  }

  /**
   * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html
   */
  public toGetTopicAttributes() {
    return this.to('GetTopicAttributes');
  }

  /**
   * Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html
   */
  public toListEndpointsByPlatformApplication() {
    return this.to('ListEndpointsByPlatformApplication');
  }

  /**
   * Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html
   */
  public toListPhoneNumbersOptedOut() {
    return this.to('ListPhoneNumbersOptedOut');
  }

  /**
   * Lists the platform application objects for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html
   */
  public toListPlatformApplications() {
    return this.to('ListPlatformApplications');
  }

  /**
   * Returns a list of the requester's subscriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Returns a list of the subscriptions to a specific topic.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html
   */
  public toListSubscriptionsByTopic() {
    return this.to('ListSubscriptionsByTopic');
  }

  /**
   * List all tags added to the specified Amazon SNS topic.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html
   */
  public toListTopics() {
    return this.to('ListTopics');
  }

  /**
   * Opts in a phone number that is currently opted out, which enables you to resume sending SMS messages to the number.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html
   */
  public toOptInPhoneNumber() {
    return this.to('OptInPhoneNumber');
  }

  /**
   * Sends a message to all of a topic's subscribed endpoints.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Publish.html
   */
  public toPublish() {
    return this.to('Publish');
  }

  /**
   * Removes a statement from a topic's access control policy.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html
   */
  public toSetEndpointAttributes() {
    return this.to('SetEndpointAttributes');
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
    return this.to('SetPlatformApplicationAttributes');
  }

  /**
   * Set the default settings for sending SMS messages and receiving daily SMS usage reports.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html
   */
  public toSetSMSAttributes() {
    return this.to('SetSMSAttributes');
  }

  /**
   * Allows a subscription owner to set an attribute of the topic to a new value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html
   */
  public toSetSubscriptionAttributes() {
    return this.to('SetSubscriptionAttributes');
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
    return this.to('SetTopicAttributes');
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
    return this.to('Subscribe');
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
    return this.to('TagResource');
  }

  /**
   * Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
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
    return this.to('UntagResource');
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
    return this.if(`Endpoint`, value, operator || 'StringLike');
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
    return this.if(`Protocol`, value, operator || 'StringLike');
  }
}
