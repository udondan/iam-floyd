import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [events](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridge.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Events extends PolicyStatement {
  public servicePrefix = 'events';
  protected actionList: Actions = {
    "ActivateEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html",
      "description": "Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "CreateEventBus": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html",
      "description": "Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your own custom applications and services, or it can be a partner event bus which can be matched to a partner event source.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-bus": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePartnerEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreatePartnerEventSource.html",
      "description": "Called by an AWS partner to create a partner event source.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "DeactivateEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeactivateEventSource.html",
      "description": "Called by an AWS partner to create a partner event source.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "DeleteEventBus": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource",
      "description": "Deletes the specified custom event bus or partner event bus. All rules associated with this event bus are also deleted. You can't delete your account's default event bus.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-bus": {
          "required": true
        }
      }
    },
    "DeletePartnerEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource",
      "description": "Called by an AWS partner to delete a partner event source.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "DeleteRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html",
      "description": "Deletes a rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "DescribeEventBus": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html",
      "description": "Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event-bus": {
          "required": false
        }
      }
    },
    "DescribeEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html",
      "description": "Describes the details of the specified partner event source that is shared with your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "DescribePartnerEventSource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribePartnerEventSource.html",
      "description": "Called by an AWS partner describe the details of the specified partner event source that they have created.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "DescribeRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html",
      "description": "Describes the details of the specified rule.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "DisableRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html",
      "description": "Disables a rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "EnableRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html",
      "description": "Enables a rule. If the rule does not exist, the operation fails.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "ListEventBuses": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventBuses.html",
      "description": "Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.",
      "accessLevel": "List"
    },
    "ListEventSources": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventSources.html",
      "description": "Lists the event sources shared with this account.",
      "accessLevel": "List"
    },
    "ListPartnerEventSourceAccounts": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSourceAccounts.html",
      "description": "Called by an AWS partner to display the AWS account ID that the specified partner event source is associated with.",
      "accessLevel": "List",
      "resourceTypes": {
        "event-source": {
          "required": true
        }
      }
    },
    "ListPartnerEventSources": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSources.html",
      "description": "Called by an AWS partner to list all the partner event sources that they have created.",
      "accessLevel": "List"
    },
    "ListRuleNamesByTarget": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRuleNamesByTarget.html",
      "description": "Lists the names of the rules that the given target is put to.",
      "accessLevel": "List"
    },
    "ListRules": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRules.html",
      "description": "Lists the Amazon EventBridge rules in your account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTagsForResource.html",
      "description": "This action lists tags for an Amazon EventBridge resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "event-bus": {
          "required": false
        },
        "rule": {
          "required": false
        }
      }
    },
    "ListTargetsByRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html",
      "description": "Lists of targets assigned to the rule.",
      "accessLevel": "List",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "PutEvents": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html",
      "description": "Sends custom events to Amazon EventBridge so that they can be matched to rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "event-bus": {
          "required": true
        }
      }
    },
    "PutPartnerEvents": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPartnerEvents.html",
      "description": "Sends custom events to Amazon EventBridge so that they can be matched to rules.",
      "accessLevel": "Write"
    },
    "PutPermission": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html",
      "description": "Running PutPermission permits the specified AWS account to put events to your account's default event bus.",
      "accessLevel": "Write"
    },
    "PutRule": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRule.html",
      "description": "Creates or updates a rule. Rules are enabled by default, or based on value of the State parameter.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      },
      "conditions": [
        "events:detail.userIdentity.principalId",
        "events:detail-type",
        "events:source",
        "events:detail.service",
        "events:detail.eventTypeCode",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutTargets": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html",
      "description": "Adds target(s) to a rule. Targets are the resources that can be invoked when a rule is triggered.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      },
      "conditions": [
        "events:TargetArn"
      ]
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html",
      "description": "Revokes the permission of another AWS account to be able to put events to your default event bus.",
      "accessLevel": "Write"
    },
    "RemoveTargets": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html",
      "description": "Removes target(s) from a rule so that when the rule is triggered, those targets will no longer be invoked.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html",
      "description": "This action tags an Amazon EventBridge resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "event-bus": {
          "required": false
        },
        "rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "TestEventPattern": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TestEventPattern.html",
      "description": "Tests whether an event pattern matches the provided event.",
      "accessLevel": "Read"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html",
      "description": "This action removes a tag from an Amazon EventBridge resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "event-bus": {
          "required": false
        },
        "rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "event-source": {
      "name": "event-source",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format",
      "arn": "arn:${Partition}:events:${Region}::event-source/${EventSourceName}",
      "conditionKeys": []
    },
    "event-bus": {
      "name": "event-bus",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format",
      "arn": "arn:${Partition}:events:${Region}:${Account}:event-bus/${EventBusName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rule": {
      "name": "rule",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format",
      "arn": "arn:${Partition}:events:${Region}:${Account}:rule/${RuleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [events](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridge.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html
   */
  public toActivateEventSource() {
    this.add('events:ActivateEventSource');
    return this;
  }

  /**
   * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your own custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html
   */
  public toCreateEventBus() {
    this.add('events:CreateEventBus');
    return this;
  }

  /**
   * Called by an AWS partner to create a partner event source.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreatePartnerEventSource.html
   */
  public toCreatePartnerEventSource() {
    this.add('events:CreatePartnerEventSource');
    return this;
  }

  /**
   * Called by an AWS partner to create a partner event source.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeactivateEventSource.html
   */
  public toDeactivateEventSource() {
    this.add('events:DeactivateEventSource');
    return this;
  }

  /**
   * Deletes the specified custom event bus or partner event bus. All rules associated with this event bus are also deleted. You can't delete your account's default event bus.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   */
  public toDeleteEventBus() {
    this.add('events:DeleteEventBus');
    return this;
  }

  /**
   * Called by an AWS partner to delete a partner event source.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   */
  public toDeletePartnerEventSource() {
    this.add('events:DeletePartnerEventSource');
    return this;
  }

  /**
   * Deletes a rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    this.add('events:DeleteRule');
    return this;
  }

  /**
   * Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html
   */
  public toDescribeEventBus() {
    this.add('events:DescribeEventBus');
    return this;
  }

  /**
   * Describes the details of the specified partner event source that is shared with your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html
   */
  public toDescribeEventSource() {
    this.add('events:DescribeEventSource');
    return this;
  }

  /**
   * Called by an AWS partner describe the details of the specified partner event source that they have created.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribePartnerEventSource.html
   */
  public toDescribePartnerEventSource() {
    this.add('events:DescribePartnerEventSource');
    return this;
  }

  /**
   * Describes the details of the specified rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html
   */
  public toDescribeRule() {
    this.add('events:DescribeRule');
    return this;
  }

  /**
   * Disables a rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html
   */
  public toDisableRule() {
    this.add('events:DisableRule');
    return this;
  }

  /**
   * Enables a rule. If the rule does not exist, the operation fails.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html
   */
  public toEnableRule() {
    this.add('events:EnableRule');
    return this;
  }

  /**
   * Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventBuses.html
   */
  public toListEventBuses() {
    this.add('events:ListEventBuses');
    return this;
  }

  /**
   * Lists the event sources shared with this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventSources.html
   */
  public toListEventSources() {
    this.add('events:ListEventSources');
    return this;
  }

  /**
   * Called by an AWS partner to display the AWS account ID that the specified partner event source is associated with.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSourceAccounts.html
   */
  public toListPartnerEventSourceAccounts() {
    this.add('events:ListPartnerEventSourceAccounts');
    return this;
  }

  /**
   * Called by an AWS partner to list all the partner event sources that they have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSources.html
   */
  public toListPartnerEventSources() {
    this.add('events:ListPartnerEventSources');
    return this;
  }

  /**
   * Lists the names of the rules that the given target is put to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRuleNamesByTarget.html
   */
  public toListRuleNamesByTarget() {
    this.add('events:ListRuleNamesByTarget');
    return this;
  }

  /**
   * Lists the Amazon EventBridge rules in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    this.add('events:ListRules');
    return this;
  }

  /**
   * This action lists tags for an Amazon EventBridge resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('events:ListTagsForResource');
    return this;
  }

  /**
   * Lists of targets assigned to the rule.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html
   */
  public toListTargetsByRule() {
    this.add('events:ListTargetsByRule');
    return this;
  }

  /**
   * Sends custom events to Amazon EventBridge so that they can be matched to rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html
   */
  public toPutEvents() {
    this.add('events:PutEvents');
    return this;
  }

  /**
   * Sends custom events to Amazon EventBridge so that they can be matched to rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPartnerEvents.html
   */
  public toPutPartnerEvents() {
    this.add('events:PutPartnerEvents');
    return this;
  }

  /**
   * Running PutPermission permits the specified AWS account to put events to your account's default event bus.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html
   */
  public toPutPermission() {
    this.add('events:PutPermission');
    return this;
  }

  /**
   * Creates or updates a rule. Rules are enabled by default, or based on value of the State parameter.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDetailUserIdentityPrincipalId()
   * - .ifDetailType()
   * - .ifSource()
   * - .ifDetailService()
   * - .ifDetailEventTypeCode()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRule.html
   */
  public toPutRule() {
    this.add('events:PutRule');
    return this;
  }

  /**
   * Adds target(s) to a rule. Targets are the resources that can be invoked when a rule is triggered.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetArn()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html
   */
  public toPutTargets() {
    this.add('events:PutTargets');
    return this;
  }

  /**
   * Revokes the permission of another AWS account to be able to put events to your default event bus.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.add('events:RemovePermission');
    return this;
  }

  /**
   * Removes target(s) from a rule so that when the rule is triggered, those targets will no longer be invoked.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html
   */
  public toRemoveTargets() {
    this.add('events:RemoveTargets');
    return this;
  }

  /**
   * This action tags an Amazon EventBridge resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('events:TagResource');
    return this;
  }

  /**
   * Tests whether an event pattern matches the provided event.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TestEventPattern.html
   */
  public toTestEventPattern() {
    this.add('events:TestEventPattern');
    return this;
  }

  /**
   * This action removes a tag from an Amazon EventBridge resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('events:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type event-source to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param eventSourceName - Identifier for the eventSourceName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventSource(eventSourceName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}::event-source/${EventSourceName}';
    arn = arn.replace('${EventSourceName}', eventSourceName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-bus to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param eventBusName - Identifier for the eventBusName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventBus(eventBusName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:event-bus/${EventBusName}';
    arn = arn.replace('${EventBusName}', eventBusName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:rule/${RuleName}';
    arn = arn.replace('${RuleName}', ruleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEventBus()
   * - .toPutRule()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - event-bus
   * - rule
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateEventBus()
   * - .toPutRule()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * The ARN of a target that can be put to a rule.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-targets
   *
   * Applies to actions:
   * - .toPutTargets()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifTargetArn(value: string | string[], operator?: string) {
    return this.if(`events:TargetArn`, value, operator || 'ArnEquals');
  }

  /**
   * Matches the literal string of the detail-type filed of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-pattern-detail-type
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailType(value: string | string[], operator?: string) {
    return this.if(`events:detail-type`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.eventTypeCode field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-type-code
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailEventTypeCode(value: string | string[], operator?: string) {
    return this.if(`events:detail.eventTypeCode`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.service field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-service
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailService(value: string | string[], operator?: string) {
    return this.if(`events:detail.service`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.useridentity.principalid field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#consume-specific-events
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailUserIdentityPrincipalId(value: string | string[], operator?: string) {
    return this.if(`events:detail.userIdentity.principalId`, value, operator || 'StringLike');
  }

  /**
   * The AWS service or AWS partner event source that generated the event. Matches the literal string of the source field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSource(value: string | string[], operator?: string) {
    return this.if(`events:source`, value, operator || 'StringLike');
  }
}
