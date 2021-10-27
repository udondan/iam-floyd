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
   * Grants permission to add a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html
   */
  public toAddPermission() {
    return this.to('AddPermission');
  }

  /**
   * Grants permission to accept a phone number and indicate whether the phone holder has opted out of receiving SMS messages from your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html
   */
  public toCheckIfPhoneNumberIsOptedOut() {
    return this.to('CheckIfPhoneNumberIsOptedOut');
  }

  /**
   * Grants permission to verify an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
   */
  public toConfirmSubscription() {
    return this.to('ConfirmSubscription');
  }

  /**
   * Grants permission to create a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register
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
   * Grants permission to create an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html
   */
  public toCreatePlatformEndpoint() {
    return this.to('CreatePlatformEndpoint');
  }

  /**
   * Grants permission to add a destination phone number and send a one-time password (OTP) to that phone number for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreateSMSSandboxPhoneNumber.html
   */
  public toCreateSMSSandboxPhoneNumber() {
    return this.to('CreateSMSSandboxPhoneNumber');
  }

  /**
   * Grants permission to create a topic to which notifications can be published
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
   * Grants permission to delete the endpoint for a device and mobile app from Amazon SNS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete a platform application object for one of the supported push notification services, such as APNS and GCM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html
   */
  public toDeletePlatformApplication() {
    return this.to('DeletePlatformApplication');
  }

  /**
   * Grants permission to delete an AWS account's verified or pending phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteSMSSandboxPhoneNumber.html
   */
  public toDeleteSMSSandboxPhoneNumber() {
    return this.to('DeleteSMSSandboxPhoneNumber');
  }

  /**
   * Grants permission to delete a topic and all its subscriptions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html
   */
  public toDeleteTopic() {
    return this.to('DeleteTopic');
  }

  /**
   * Grants permission to retrieve the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html
   */
  public toGetEndpointAttributes() {
    return this.to('GetEndpointAttributes');
  }

  /**
   * Grants permission to retrieve the attributes of the platform application object for the supported push notification services, such as APNS and GCM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html
   */
  public toGetPlatformApplicationAttributes() {
    return this.to('GetPlatformApplicationAttributes');
  }

  /**
   * Grants permission to return the settings for sending SMS messages from your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html
   */
  public toGetSMSAttributes() {
    return this.to('GetSMSAttributes');
  }

  /**
   * Grants permission to retrieve the sandbox status for the calling account in the target region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSMSSandboxAccountStatus.html
   */
  public toGetSMSSandboxAccountStatus() {
    return this.to('GetSMSSandboxAccountStatus');
  }

  /**
   * Grants permission to return all of the properties of a subscription
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html
   */
  public toGetSubscriptionAttributes() {
    return this.to('GetSubscriptionAttributes');
  }

  /**
   * Grants permission to return all of the properties of a topic
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html
   */
  public toGetTopicAttributes() {
    return this.to('GetTopicAttributes');
  }

  /**
   * Grants permission to list the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html
   */
  public toListEndpointsByPlatformApplication() {
    return this.to('ListEndpointsByPlatformApplication');
  }

  /**
   * Grants permission to list all origination numbers, and their metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListOriginationNumbers.html
   */
  public toListOriginationNumbers() {
    return this.to('ListOriginationNumbers');
  }

  /**
   * Grants permission to return a list of phone numbers that are opted out, meaning you cannot send SMS messages to them
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html
   */
  public toListPhoneNumbersOptedOut() {
    return this.to('ListPhoneNumbersOptedOut');
  }

  /**
   * Grants permission to list the platform application objects for the supported push notification services, such as APNS and GCM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html
   */
  public toListPlatformApplications() {
    return this.to('ListPlatformApplications');
  }

  /**
   * Grants permission to list the calling account's current pending and verified destination phone numbers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSMSSandboxPhoneNumbers.html
   */
  public toListSMSSandboxPhoneNumbers() {
    return this.to('ListSMSSandboxPhoneNumbers');
  }

  /**
   * Grants permission to return a list of the requester's subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to return a list of the subscriptions to a specific topic
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html
   */
  public toListSubscriptionsByTopic() {
    return this.to('ListSubscriptionsByTopic');
  }

  /**
   * Grants permission to list all tags added to the specified Amazon SNS topic
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to return a list of the requester's topics
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html
   */
  public toListTopics() {
    return this.to('ListTopics');
  }

  /**
   * Grants permission to opt in a phone number that is currently opted out, which enables you to resume sending SMS messages to the number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html
   */
  public toOptInPhoneNumber() {
    return this.to('OptInPhoneNumber');
  }

  /**
   * Grants permission to send a message to all of a topic's subscribed endpoints
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Publish.html
   */
  public toPublish() {
    return this.to('Publish');
  }

  /**
   * Grants permission to remove a statement from a topic's access control policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Grants permission to set the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html
   */
  public toSetEndpointAttributes() {
    return this.to('SetEndpointAttributes');
  }

  /**
   * Grants permission to set the attributes of the platform application object for the supported push notification services, such as APNS and GCM
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
   * Grants permission to set the default settings for sending SMS messages and receiving daily SMS usage reports
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html
   */
  public toSetSMSAttributes() {
    return this.to('SetSMSAttributes');
  }

  /**
   * Grants permission to allow a subscription owner to set an attribute of the topic to a new value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html
   */
  public toSetSubscriptionAttributes() {
    return this.to('SetSubscriptionAttributes');
  }

  /**
   * Grants permission to allow a topic owner to set an attribute of the topic to a new value
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
   * Grants permission to prepare to subscribe an endpoint by sending the endpoint a confirmation message
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
   * Grants permission to add tags to the specified Amazon SNS topic
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
   * Grants permission to delete a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Grants permission to remove tags from the specified Amazon SNS topic
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

  /**
   * Grants permission to verify a destination phone number with a one-time password (OTP) for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_VerifySMSSandboxPhoneNumber.html
   */
  public toVerifySMSSandboxPhoneNumber() {
    return this.to('VerifySMSSandboxPhoneNumber');
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
      "GetSMSSandboxAccountStatus",
      "GetSubscriptionAttributes",
      "GetTopicAttributes",
      "ListPhoneNumbersOptedOut",
      "ListTagsForResource"
    ],
    "Write": [
      "ConfirmSubscription",
      "CreatePlatformApplication",
      "CreatePlatformEndpoint",
      "CreateSMSSandboxPhoneNumber",
      "CreateTopic",
      "DeleteEndpoint",
      "DeletePlatformApplication",
      "DeleteSMSSandboxPhoneNumber",
      "DeleteTopic",
      "OptInPhoneNumber",
      "Publish",
      "SetEndpointAttributes",
      "SetPlatformApplicationAttributes",
      "SetSMSAttributes",
      "SetSubscriptionAttributes",
      "SetTopicAttributes",
      "Subscribe",
      "Unsubscribe",
      "VerifySMSSandboxPhoneNumber"
    ],
    "List": [
      "ListEndpointsByPlatformApplication",
      "ListOriginationNumbers",
      "ListPlatformApplications",
      "ListSMSSandboxPhoneNumbers",
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
    return this.on(`arn:${ partition || 'aws' }:sns:${ region || '*' }:${ account || '*' }:${ topicName }`);
  }

  /**
   * Filters access based on the URL, email address, or ARN from a Subscribe request or a previously confirmed subscription
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
   * Filters access based on the protocol value from a Subscribe request or a previously confirmed subscription
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
