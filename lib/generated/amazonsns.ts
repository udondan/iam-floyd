import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sns](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sns extends PolicyStatement {
  public servicePrefix = 'sns';
  protected actionList: Actions = {
    "AddPermission": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html",
      "description": "Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "CheckIfPhoneNumberIsOptedOut": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html",
      "description": "Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account.",
      "accessLevel": "Read"
    },
    "ConfirmSubscription": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html",
      "description": "Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "CreatePlatformApplication": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html",
      "description": "Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register.",
      "accessLevel": "Write"
    },
    "CreatePlatformEndpoint": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html",
      "description": "Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS.",
      "accessLevel": "Write"
    },
    "CreateTopic": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html",
      "description": "Creates a topic to which notifications can be published.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "DeleteEndpoint": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html",
      "description": "Deletes the endpoint for a device and mobile app from Amazon SNS.",
      "accessLevel": "Write"
    },
    "DeletePlatformApplication": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html",
      "description": "Deletes a platform application object for one of the supported push notification services, such as APNS and GCM.",
      "accessLevel": "Write"
    },
    "DeleteTopic": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html",
      "description": "Deletes a topic and all its subscriptions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "GetEndpointAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html",
      "description": "Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS.",
      "accessLevel": "Read"
    },
    "GetPlatformApplicationAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html",
      "description": "Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM.",
      "accessLevel": "Read"
    },
    "GetSMSAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html",
      "description": "Returns the settings for sending SMS messages from your account.",
      "accessLevel": "Read"
    },
    "GetSubscriptionAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html",
      "description": "Returns all of the properties of a subscription.",
      "accessLevel": "Read"
    },
    "GetTopicAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html",
      "description": "Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "ListEndpointsByPlatformApplication": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html",
      "description": "Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS.",
      "accessLevel": "List"
    },
    "ListPhoneNumbersOptedOut": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html",
      "description": "Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.",
      "accessLevel": "Read"
    },
    "ListPlatformApplications": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html",
      "description": "Lists the platform application objects for the supported push notification services, such as APNS and GCM.",
      "accessLevel": "List"
    },
    "ListSubscriptions": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html",
      "description": "Returns a list of the requester's subscriptions.",
      "accessLevel": "List"
    },
    "ListSubscriptionsByTopic": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html",
      "description": "Returns a list of the subscriptions to a specific topic.",
      "accessLevel": "List",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html",
      "description": "List all tags added to the specified Amazon SNS topic.",
      "accessLevel": "Read",
      "resourceTypes": {
        "topic": {
          "required": false
        }
      }
    },
    "ListTopics": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html",
      "description": "Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100.",
      "accessLevel": "List"
    },
    "OptInPhoneNumber": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html",
      "description": "Opts in a phone number that is currently opted out, which enables you to resume sending SMS messages to the number.",
      "accessLevel": "Write"
    },
    "Publish": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_Publish.html",
      "description": "Sends a message to all of a topic's subscribed endpoints.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html",
      "description": "Removes a statement from a topic's access control policy.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "SetEndpointAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html",
      "description": "Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS.",
      "accessLevel": "Write"
    },
    "SetPlatformApplicationAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html",
      "description": "Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM.",
      "accessLevel": "Write"
    },
    "SetSMSAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html",
      "description": "Set the default settings for sending SMS messages and receiving daily SMS usage reports.",
      "accessLevel": "Write"
    },
    "SetSubscriptionAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html",
      "description": "Allows a subscription owner to set an attribute of the topic to a new value.",
      "accessLevel": "Write"
    },
    "SetTopicAttributes": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html",
      "description": "Allows a topic owner to set an attribute of the topic to a new value.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "Subscribe": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html",
      "description": "Prepares to subscribe an endpoint by sending the endpoint a confirmation message.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      },
      "conditions": [
        "sns:Endpoint",
        "sns:Protocol"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html",
      "description": "Add tags to the specified Amazon SNS topic.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "topic": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Unsubscribe": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html",
      "description": "Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required.",
      "accessLevel": "Write"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html",
      "description": "Remove tags from the specified Amazon SNS topic.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "topic": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "topic": {
      "name": "topic",
      "url": "https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html",
      "arn": "arn:${Partition}:sns:${Region}:${Account}:${TopicName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [sns](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html).
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
    this.add('sns:AddPermission');
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
    this.add('sns:CheckIfPhoneNumberIsOptedOut');
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
    this.add('sns:ConfirmSubscription');
    return this;
  }

  /**
   * Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html
   */
  public toCreatePlatformApplication() {
    this.add('sns:CreatePlatformApplication');
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
    this.add('sns:CreatePlatformEndpoint');
    return this;
  }

  /**
   * Creates a topic to which notifications can be published.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html
   */
  public toCreateTopic() {
    this.add('sns:CreateTopic');
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
    this.add('sns:DeleteEndpoint');
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
    this.add('sns:DeletePlatformApplication');
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
    this.add('sns:DeleteTopic');
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
    this.add('sns:GetEndpointAttributes');
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
    this.add('sns:GetPlatformApplicationAttributes');
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
    this.add('sns:GetSMSAttributes');
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
    this.add('sns:GetSubscriptionAttributes');
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
    this.add('sns:GetTopicAttributes');
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
    this.add('sns:ListEndpointsByPlatformApplication');
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
    this.add('sns:ListPhoneNumbersOptedOut');
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
    this.add('sns:ListPlatformApplications');
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
    this.add('sns:ListSubscriptions');
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
    this.add('sns:ListSubscriptionsByTopic');
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
    this.add('sns:ListTagsForResource');
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
    this.add('sns:ListTopics');
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
    this.add('sns:OptInPhoneNumber');
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
    this.add('sns:Publish');
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
    this.add('sns:RemovePermission');
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
    this.add('sns:SetEndpointAttributes');
    return this;
  }

  /**
   * Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html
   */
  public toSetPlatformApplicationAttributes() {
    this.add('sns:SetPlatformApplicationAttributes');
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
    this.add('sns:SetSMSAttributes');
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
    this.add('sns:SetSubscriptionAttributes');
    return this;
  }

  /**
   * Allows a topic owner to set an attribute of the topic to a new value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html
   */
  public toSetTopicAttributes() {
    this.add('sns:SetTopicAttributes');
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
    this.add('sns:Subscribe');
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
    this.add('sns:TagResource');
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
    this.add('sns:Unsubscribe');
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
    this.add('sns:UntagResource');
    return this;
  }

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
  public ifEndpoint(value: string | string[], operator?: string) {
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
  public ifProtocol(value: string | string[], operator?: string) {
    return this.if(`sns:Protocol`, value, operator || 'StringLike');
  }
}
