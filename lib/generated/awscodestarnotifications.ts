import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codestar-notifications](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarnotifications.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodestarNotifications extends PolicyStatement {
  public servicePrefix = 'codestar-notifications';
  protected actionList: Actions = {
    "CreateNotificationRule": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html",
      "description": "Grants permission to create a notification rule for a resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    },
    "DeleteNotificationRule": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html",
      "description": "Grants permission to delete a notification rule for a resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    },
    "DeleteTarget": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html",
      "description": "Grants permission to delete a target for a notification rule",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeNotificationRule": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html",
      "description": "Grants permission to get information about a notification rule",
      "accessLevel": "Read",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    },
    "ListEventTypes": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html",
      "description": "Grants permission to list notifications event types",
      "accessLevel": "List"
    },
    "ListNotificationRules": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html",
      "description": "Grants permission to list notification rules in an AWS account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags attached to a notification rule resource ARN",
      "accessLevel": "List",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ListTargets": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html",
      "description": "Grants permission to list the notification rule targets for an AWS account",
      "accessLevel": "List",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Subscribe": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html",
      "description": "Grants permission to create an association between a notification rule and an Amazon SNS topic",
      "accessLevel": "Write",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to attach resource tags to a notification rule resource ARN",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "Unsubscribe": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html",
      "description": "Grants permission to remove an association between a notification rule and an Amazon SNS topic",
      "accessLevel": "Write",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to disassociate resource tags from a notification rule resource ARN",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateNotificationRule": {
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html",
      "description": "Grants permission to change a notification rule for a resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "notificationrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "codestar-notifications:NotificationsForResource"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "notificationrule": {
      "name": "notificationrule",
      "url": "https://docs.aws.amazon.com/codestar-notifications/latest/userguide/security_iam_service-with-iam.html",
      "arn": "arn:${Partition}:codestar-notifications:${Region}:${Account}:notificationrule/${NotificationRuleId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [codestar-notifications](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarnotifications.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html
   */
  public toCreateNotificationRule() {
    this.add('codestar-notifications:CreateNotificationRule');
    return this;
  }

  /**
   * Grants permission to delete a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html
   */
  public toDeleteNotificationRule() {
    this.add('codestar-notifications:DeleteNotificationRule');
    return this;
  }

  /**
   * Grants permission to delete a target for a notification rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html
   */
  public toDeleteTarget() {
    this.add('codestar-notifications:DeleteTarget');
    return this;
  }

  /**
   * Grants permission to get information about a notification rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html
   */
  public toDescribeNotificationRule() {
    this.add('codestar-notifications:DescribeNotificationRule');
    return this;
  }

  /**
   * Grants permission to list notifications event types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html
   */
  public toListEventTypes() {
    this.add('codestar-notifications:ListEventTypes');
    return this;
  }

  /**
   * Grants permission to list notification rules in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html
   */
  public toListNotificationRules() {
    this.add('codestar-notifications:ListNotificationRules');
    return this;
  }

  /**
   * Grants permission to list the tags attached to a notification rule resource ARN
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('codestar-notifications:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the notification rule targets for an AWS account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html
   */
  public toListTargets() {
    this.add('codestar-notifications:ListTargets');
    return this;
  }

  /**
   * Grants permission to create an association between a notification rule and an Amazon SNS topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html
   */
  public toSubscribe() {
    this.add('codestar-notifications:Subscribe');
    return this;
  }

  /**
   * Grants permission to attach resource tags to a notification rule resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('codestar-notifications:TagResource');
    return this;
  }

  /**
   * Grants permission to remove an association between a notification rule and an Amazon SNS topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html
   */
  public toUnsubscribe() {
    this.add('codestar-notifications:Unsubscribe');
    return this;
  }

  /**
   * Grants permission to disassociate resource tags from a notification rule resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('codestar-notifications:UntagResource');
    return this;
  }

  /**
   * Grants permission to change a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html
   */
  public toUpdateNotificationRule() {
    this.add('codestar-notifications:UpdateNotificationRule');
    return this;
  }

  /**
   * Adds a resource of type notificationrule to the statement
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/userguide/security_iam_service-with-iam.html
   *
   * @param notificationRuleId - Identifier for the notificationRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNotificationrule(notificationRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codestar-notifications:${Region}:${Account}:notificationrule/${NotificationRuleId}';
    arn = arn.replace('${NotificationRuleId}', notificationRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on the ARN of the resource for which notifications are configured
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/userguide/security_iam_id-based-policy-examples.html
   *
   * Applies to actions:
   * - .toCreateNotificationRule()
   * - .toDeleteNotificationRule()
   * - .toDescribeNotificationRule()
   * - .toSubscribe()
   * - .toUnsubscribe()
   * - .toUpdateNotificationRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifNotificationsForResource(value: string | string[], operator?: string) {
    return this.if(`codestar-notifications:NotificationsForResource`, value, operator || 'ArnEquals');
  }
}
