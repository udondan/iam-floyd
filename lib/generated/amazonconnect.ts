import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [connect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Connect extends PolicyStatement {
  public servicePrefix = 'connect';
  protected actionList: Actions = {
    "AssociateRoutingProfileQueues": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateRoutingProfileQueues.html",
      "description": "Grants permissions to associate queues with a routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        },
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateContactFlow": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html",
      "description": "Grants permissions to create a contact flow in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact-flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.",
      "accessLevel": "Write",
      "dependentActions": [
        "ds:CreateAlias",
        "ds:DeleteDirectory",
        "ds:DescribeDirectories",
        "firehose:DescribeDeliveryStream",
        "firehose:ListDeliveryStreams",
        "iam:CreateServiceLinkedRole",
        "kinesis:DescribeStream",
        "kinesis:ListStreams",
        "kms:CreateGrant",
        "kms:DescribeKey",
        "kms:ListAliases",
        "kms:RetireGrant",
        "s3:CreateBucket",
        "s3:GetBucketLocation",
        "s3:ListAllMyBuckets"
      ]
    },
    "CreateRoutingProfile": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRoutingProfile.html",
      "description": "Grants permission to create a routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        },
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html",
      "description": "Grants permission to create a user for the specified Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        },
        "security-profile": {
          "required": true
        },
        "user": {
          "required": true
        },
        "hierarchy-group": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html",
      "description": "Grants permissions to delete a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeContactFlow": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html",
      "description": "Grants permissions to describe a contact flow in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "contact-flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.",
      "accessLevel": "Read",
      "dependentActions": [
        "firehose:DescribeDeliveryStream",
        "firehose:ListDeliveryStreams",
        "kinesis:DescribeStream",
        "kinesis:ListStreams",
        "kms:DescribeKey",
        "kms:ListAliases",
        "s3:ListAllMyBuckets"
      ],
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "DescribeRoutingProfile": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html",
      "description": "Grants permissions to describe a routing profile in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html",
      "description": "Grants permissions to describe a user in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeUserHierarchyGroup": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html",
      "description": "Grants permissions to describe a hierarchy group for an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "hierarchy-group": {
          "required": true
        }
      }
    },
    "DescribeUserHierarchyStructure": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html",
      "description": "Grants permissions to describe the hierarchy structure for an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "DestroyInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed.",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "DisassociateRoutingProfileQueues": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateRoutingProfileQueues.html",
      "description": "Grants permissions to disassociate queues from a routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetContactAttributes": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html",
      "description": "Grants permissions to retrieve the contact attributes for the specified contact.",
      "accessLevel": "Read",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "GetCurrentMetricData": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html",
      "description": "Grants permissions to retrieve current metric data for the queues in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "GetFederationToken": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html",
      "description": "Allows federation into an instance when using SAML-based authentication for identity management.",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "GetFederationTokens": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to federate in to an Amazon Connect instance (Log in as administrator functionality in the AWS console).",
      "accessLevel": "Write",
      "dependentActions": [
        "connect:DescribeInstance",
        "connect:ListInstances",
        "ds:DescribeDirectories"
      ],
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "GetMetricData": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html",
      "description": "Grants permissions to retrieve historical metric data for queues in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ListContactFlows": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html",
      "description": "Grants permissions to list contact flow resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListHoursOfOperations": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html",
      "description": "Grants permissions to list hours of operation resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListInstances": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to view the Amazon Connect instances associated with an AWS account.",
      "accessLevel": "List"
    },
    "ListPhoneNumbers": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html",
      "description": "Grants permissions to list phone number resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListPrompts": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPrompts.html",
      "description": "Grants permissions to list prompt resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListQueues": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html",
      "description": "Grants permissions to list queue resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListRoutingProfileQueues": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfileQueues.html",
      "description": "Grants permissions to list queue resources in a routing profile in an Amazon Connect instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListRoutingProfiles": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html",
      "description": "Grants permissions to list routing profile resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListSecurityProfiles": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html",
      "description": "Grants permissions to list security profile resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permissions to list tags for an Amazon Connect resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "contact-flow": {
          "required": false
        },
        "routing-profile": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListUserHierarchyGroups": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html",
      "description": "Grants permissions to list the hierarchy group resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html",
      "description": "Grants permissions to list user resources in an Amazon Connect instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ModifyInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to modify configuration settings for an existing Amazon Connect instance. The associated required actions grant permission modify the settings for the instance.",
      "accessLevel": "Write",
      "dependentActions": [
        "firehose:DescribeDeliveryStream",
        "firehose:ListDeliveryStreams",
        "kinesis:DescribeStream",
        "kinesis:ListStreams",
        "kms:CreateGrant",
        "kms:DescribeKey",
        "kms:ListAliases",
        "kms:RetireGrant",
        "s3:CreateBucket",
        "s3:GetBucketLocation",
        "s3:ListAllMyBuckets"
      ],
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ResumeContactRecording": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html",
      "description": "Grants permissions to resume recording for the specified contact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "StartChatContact": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html",
      "description": "Grants permissions to initiate a chat using the Amazon Connect API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact-flow": {
          "required": true
        }
      }
    },
    "StartContactRecording": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html",
      "description": "Grants permissions to start recording for the specified contact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "StartOutboundVoiceContact": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html",
      "description": "Grants permissions to initiate outbound calls using the Amazon Connect API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "StopContact": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html",
      "description": "Grants permissions to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "StopContactRecording": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html",
      "description": "Grants permissions to stop recording for the specified contact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "SuspendContactRecording": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html",
      "description": "Grants permissions to suspend recording for the specified contact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html",
      "description": "Grants permissions to tag an Amazon Connect resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "contact-flow": {
          "required": false
        },
        "routing-profile": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html",
      "description": "Grants permissions to untag an Amazon Connect resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "contact-flow": {
          "required": false
        },
        "routing-profile": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateContactAttributes": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html",
      "description": "Grants permissions to create or update the contact attributes associated with the specified contact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact": {
          "required": true
        }
      }
    },
    "UpdateContactFlowContent": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html",
      "description": "Grants permissions to update contact flow content in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact-flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateContactFlowName": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html",
      "description": "Grants permissions to update the name and description of a contact flow in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "contact-flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRoutingProfileConcurrency": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileConcurrency.html",
      "description": "Grants permissions to update the concurrency in a routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRoutingProfileDefaultOutboundQueue": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileDefaultOutboundQueue.html",
      "description": "Grants permissions to update the outbound queue in a routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        },
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRoutingProfileName": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileName.html",
      "description": "Grants permissions to update a routing profile name and description in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRoutingProfileQueues": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileQueues.html",
      "description": "Grants permissions to update the queues in routing profile in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateUserHierarchy": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html",
      "description": "Grants permissions to update a hierarchy group for a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        },
        "hierarchy-group": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateUserIdentityInfo": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html",
      "description": "Grants permissions to update identity information for a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateUserPhoneConfig": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html",
      "description": "Grants permissions to update phone configuration settings for a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateUserRoutingProfile": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html",
      "description": "Grants permissions to update a routing profile for a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "routing-profile": {
          "required": true
        },
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateUserSecurityProfiles": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html",
      "description": "Grants permissions to update security profiles for a user in an Amazon Connect instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-profile": {
          "required": true
        },
        "user": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "instance": {
      "name": "instance",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}",
      "conditionKeys": []
    },
    "contact": {
      "name": "contact",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact/${ContactId}",
      "conditionKeys": []
    },
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent/${UserId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "routing-profile": {
      "name": "routing-profile",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/routing-profile/${RoutingProfileId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "security-profile": {
      "name": "security-profile",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/security-profile/${SecurityProfileId}",
      "conditionKeys": []
    },
    "hierarchy-group": {
      "name": "hierarchy-group",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent-group/${HierarchyGroupId}",
      "conditionKeys": []
    },
    "queue": {
      "name": "queue",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/create-queue.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/queue/${QueueId}",
      "conditionKeys": []
    },
    "contact-flow": {
      "name": "contact-flow",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact-flow/${ContactFlowId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "hours-of-operation": {
      "name": "hours-of-operation",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/operating-hours/${HoursOfOperationId}",
      "conditionKeys": []
    },
    "phone-number": {
      "name": "phone-number",
      "url": "https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html",
      "arn": "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/phone-numbers/${PhoneNumberId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [connect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to associate queues with a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateRoutingProfileQueues.html
   */
  public toAssociateRoutingProfileQueues() {
    this.to('connect:AssociateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to create a contact flow in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html
   */
  public toCreateContactFlow() {
    this.to('connect:CreateContactFlow');
    return this;
  }

  /**
   * Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:CreateAlias
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - firehose:DescribeDeliveryStream
   * - firehose:ListDeliveryStreams
   * - iam:CreateServiceLinkedRole
   * - kinesis:DescribeStream
   * - kinesis:ListStreams
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - kms:ListAliases
   * - kms:RetireGrant
   * - s3:CreateBucket
   * - s3:GetBucketLocation
   * - s3:ListAllMyBuckets
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toCreateInstance() {
    this.to('connect:CreateInstance');
    return this;
  }

  /**
   * Grants permission to create a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRoutingProfile.html
   */
  public toCreateRoutingProfile() {
    this.to('connect:CreateRoutingProfile');
    return this;
  }

  /**
   * Grants permission to create a user for the specified Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('connect:CreateUser');
    return this;
  }

  /**
   * Grants permissions to delete a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('connect:DeleteUser');
    return this;
  }

  /**
   * Grants permissions to describe a contact flow in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html
   */
  public toDescribeContactFlow() {
    this.to('connect:DescribeContactFlow');
    return this;
  }

  /**
   * Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - firehose:DescribeDeliveryStream
   * - firehose:ListDeliveryStreams
   * - kinesis:DescribeStream
   * - kinesis:ListStreams
   * - kms:DescribeKey
   * - kms:ListAliases
   * - s3:ListAllMyBuckets
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toDescribeInstance() {
    this.to('connect:DescribeInstance');
    return this;
  }

  /**
   * Grants permissions to describe a routing profile in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html
   */
  public toDescribeRoutingProfile() {
    this.to('connect:DescribeRoutingProfile');
    return this;
  }

  /**
   * Grants permissions to describe a user in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('connect:DescribeUser');
    return this;
  }

  /**
   * Grants permissions to describe a hierarchy group for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html
   */
  public toDescribeUserHierarchyGroup() {
    this.to('connect:DescribeUserHierarchyGroup');
    return this;
  }

  /**
   * Grants permissions to describe the hierarchy structure for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html
   */
  public toDescribeUserHierarchyStructure() {
    this.to('connect:DescribeUserHierarchyStructure');
    return this;
  }

  /**
   * Grants permissions to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toDestroyInstance() {
    this.to('connect:DestroyInstance');
    return this;
  }

  /**
   * Grants permissions to disassociate queues from a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateRoutingProfileQueues.html
   */
  public toDisassociateRoutingProfileQueues() {
    this.to('connect:DisassociateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to retrieve the contact attributes for the specified contact.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   */
  public toGetContactAttributes() {
    this.to('connect:GetContactAttributes');
    return this;
  }

  /**
   * Grants permissions to retrieve current metric data for the queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   */
  public toGetCurrentMetricData() {
    this.to('connect:GetCurrentMetricData');
    return this;
  }

  /**
   * Allows federation into an instance when using SAML-based authentication for identity management.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   */
  public toGetFederationToken() {
    this.to('connect:GetFederationToken');
    return this;
  }

  /**
   * Grants permissions to federate in to an Amazon Connect instance (Log in as administrator functionality in the AWS console).
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - connect:ListInstances
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toGetFederationTokens() {
    this.to('connect:GetFederationTokens');
    return this;
  }

  /**
   * Grants permissions to retrieve historical metric data for queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    this.to('connect:GetMetricData');
    return this;
  }

  /**
   * Grants permissions to list contact flow resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   */
  public toListContactFlows() {
    this.to('connect:ListContactFlows');
    return this;
  }

  /**
   * Grants permissions to list hours of operation resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html
   */
  public toListHoursOfOperations() {
    this.to('connect:ListHoursOfOperations');
    return this;
  }

  /**
   * Grants permissions to view the Amazon Connect instances associated with an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toListInstances() {
    this.to('connect:ListInstances');
    return this;
  }

  /**
   * Grants permissions to list phone number resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   */
  public toListPhoneNumbers() {
    this.to('connect:ListPhoneNumbers');
    return this;
  }

  /**
   * Grants permissions to list prompt resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPrompts.html
   */
  public toListPrompts() {
    this.to('connect:ListPrompts');
    return this;
  }

  /**
   * Grants permissions to list queue resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    this.to('connect:ListQueues');
    return this;
  }

  /**
   * Grants permissions to list queue resources in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfileQueues.html
   */
  public toListRoutingProfileQueues() {
    this.to('connect:ListRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to list routing profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html
   */
  public toListRoutingProfiles() {
    this.to('connect:ListRoutingProfiles');
    return this;
  }

  /**
   * Grants permissions to list security profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    this.to('connect:ListSecurityProfiles');
    return this;
  }

  /**
   * Grants permissions to list tags for an Amazon Connect resource.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('connect:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to list the hierarchy group resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html
   */
  public toListUserHierarchyGroups() {
    this.to('connect:ListUserHierarchyGroups');
    return this;
  }

  /**
   * Grants permissions to list user resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('connect:ListUsers');
    return this;
  }

  /**
   * Grants permissions to modify configuration settings for an existing Amazon Connect instance. The associated required actions grant permission modify the settings for the instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - firehose:DescribeDeliveryStream
   * - firehose:ListDeliveryStreams
   * - kinesis:DescribeStream
   * - kinesis:ListStreams
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - kms:ListAliases
   * - kms:RetireGrant
   * - s3:CreateBucket
   * - s3:GetBucketLocation
   * - s3:ListAllMyBuckets
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public toModifyInstance() {
    this.to('connect:ModifyInstance');
    return this;
  }

  /**
   * Grants permissions to resume recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   */
  public toResumeContactRecording() {
    this.to('connect:ResumeContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate a chat using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   */
  public toStartChatContact() {
    this.to('connect:StartChatContact');
    return this;
  }

  /**
   * Grants permissions to start recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   */
  public toStartContactRecording() {
    this.to('connect:StartContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate outbound calls using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   */
  public toStartOutboundVoiceContact() {
    this.to('connect:StartOutboundVoiceContact');
    return this;
  }

  /**
   * Grants permissions to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   */
  public toStopContact() {
    this.to('connect:StopContact');
    return this;
  }

  /**
   * Grants permissions to stop recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   */
  public toStopContactRecording() {
    this.to('connect:StopContactRecording');
    return this;
  }

  /**
   * Grants permissions to suspend recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   */
  public toSuspendContactRecording() {
    this.to('connect:SuspendContactRecording');
    return this;
  }

  /**
   * Grants permissions to tag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('connect:TagResource');
    return this;
  }

  /**
   * Grants permissions to untag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('connect:UntagResource');
    return this;
  }

  /**
   * Grants permissions to create or update the contact attributes associated with the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   */
  public toUpdateContactAttributes() {
    this.to('connect:UpdateContactAttributes');
    return this;
  }

  /**
   * Grants permissions to update contact flow content in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html
   */
  public toUpdateContactFlowContent() {
    this.to('connect:UpdateContactFlowContent');
    return this;
  }

  /**
   * Grants permissions to update the name and description of a contact flow in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html
   */
  public toUpdateContactFlowName() {
    this.to('connect:UpdateContactFlowName');
    return this;
  }

  /**
   * Grants permissions to update the concurrency in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileConcurrency.html
   */
  public toUpdateRoutingProfileConcurrency() {
    this.to('connect:UpdateRoutingProfileConcurrency');
    return this;
  }

  /**
   * Grants permissions to update the outbound queue in a routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileDefaultOutboundQueue.html
   */
  public toUpdateRoutingProfileDefaultOutboundQueue() {
    this.to('connect:UpdateRoutingProfileDefaultOutboundQueue');
    return this;
  }

  /**
   * Grants permissions to update a routing profile name and description in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileName.html
   */
  public toUpdateRoutingProfileName() {
    this.to('connect:UpdateRoutingProfileName');
    return this;
  }

  /**
   * Grants permissions to update the queues in routing profile in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileQueues.html
   */
  public toUpdateRoutingProfileQueues() {
    this.to('connect:UpdateRoutingProfileQueues');
    return this;
  }

  /**
   * Grants permissions to update a hierarchy group for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html
   */
  public toUpdateUserHierarchy() {
    this.to('connect:UpdateUserHierarchy');
    return this;
  }

  /**
   * Grants permissions to update identity information for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html
   */
  public toUpdateUserIdentityInfo() {
    this.to('connect:UpdateUserIdentityInfo');
    return this;
  }

  /**
   * Grants permissions to update phone configuration settings for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html
   */
  public toUpdateUserPhoneConfig() {
    this.to('connect:UpdateUserPhoneConfig');
    return this;
  }

  /**
   * Grants permissions to update a routing profile for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html
   */
  public toUpdateUserRoutingProfile() {
    this.to('connect:UpdateUserRoutingProfile');
    return this;
  }

  /**
   * Grants permissions to update security profiles for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html
   */
  public toUpdateUserSecurityProfiles() {
    this.to('connect:UpdateUserSecurityProfiles');
    return this;
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(instanceId: string, contactId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact/${ContactId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${ContactId}', contactId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(instanceId: string, userId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent/${UserId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${UserId}', userId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type routing-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param routingProfileId - Identifier for the routingProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoutingProfile(instanceId: string, routingProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/routing-profile/${RoutingProfileId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${RoutingProfileId}', routingProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type security-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param securityProfileId - Identifier for the securityProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSecurityProfile(instanceId: string, securityProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/security-profile/${SecurityProfileId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${SecurityProfileId}', securityProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hierarchy-group to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hierarchyGroupId - Identifier for the hierarchyGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHierarchyGroup(instanceId: string, hierarchyGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/agent-group/${HierarchyGroupId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${HierarchyGroupId}', hierarchyGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/create-queue.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param queueId - Identifier for the queueId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQueue(instanceId: string, queueId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/queue/${QueueId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${QueueId}', queueId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact-flow to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactFlowId - Identifier for the contactFlowId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactFlow(instanceId: string, contactFlowId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/contact-flow/${ContactFlowId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${ContactFlowId}', contactFlowId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hours-of-operation to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hoursOfOperationId - Identifier for the hoursOfOperationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHoursOfOperation(instanceId: string, hoursOfOperationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/operating-hours/${HoursOfOperationId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${HoursOfOperationId}', hoursOfOperationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPhoneNumber(instanceId: string, phoneNumberId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}/phone-numbers/${PhoneNumberId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${PhoneNumberId}', phoneNumberId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
