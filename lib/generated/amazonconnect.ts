import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service connect
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnect.html
 */
export class Connect extends PolicyStatement {
  public servicePrefix = 'connect';
  public actions: Actions = {
    "CreateInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.",
      "accessLevel": "Write"
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
    "DescribeInstance": {
      "url": "https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html",
      "description": "Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
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
  public resourceTypes: ResourceTypes = {
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
      "conditionKeys": []
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
      "conditionKeys": []
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
   * Action provider for service connect
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnect.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public createInstance() {
    this.add('connect:CreateInstance');
    return this;
  }

  /**
   * Grants permission to create a user for the specified Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html
   */
  public createUser() {
    this.add('connect:CreateUser');
    return this;
  }

  /**
   * Grants permissions to delete a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('connect:DeleteUser');
    return this;
  }

  /**
   * Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public describeInstance() {
    this.add('connect:DescribeInstance');
    return this;
  }

  /**
   * Grants permissions to describe a user in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html
   */
  public describeUser() {
    this.add('connect:DescribeUser');
    return this;
  }

  /**
   * Grants permissions to describe a hierarchy group for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html
   */
  public describeUserHierarchyGroup() {
    this.add('connect:DescribeUserHierarchyGroup');
    return this;
  }

  /**
   * Grants permissions to describe the hierarchy structure for an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html
   */
  public describeUserHierarchyStructure() {
    this.add('connect:DescribeUserHierarchyStructure');
    return this;
  }

  /**
   * Grants permissions to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public destroyInstance() {
    this.add('connect:DestroyInstance');
    return this;
  }

  /**
   * Grants permissions to retrieve the contact attributes for the specified contact.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   */
  public getContactAttributes() {
    this.add('connect:GetContactAttributes');
    return this;
  }

  /**
   * Grants permissions to retrieve current metric data for the queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   */
  public getCurrentMetricData() {
    this.add('connect:GetCurrentMetricData');
    return this;
  }

  /**
   * Allows federation into an instance when using SAML-based authentication for identity management.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   */
  public getFederationToken() {
    this.add('connect:GetFederationToken');
    return this;
  }

  /**
   * Grants permissions to federate in to an Amazon Connect instance (Log in as administrator functionality in the AWS console).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public getFederationTokens() {
    this.add('connect:GetFederationTokens');
    return this;
  }

  /**
   * Grants permissions to retrieve historical metric data for queues in an Amazon Connect instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   */
  public getMetricData() {
    this.add('connect:GetMetricData');
    return this;
  }

  /**
   * Grants permissions to list contact flow resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   */
  public listContactFlows() {
    this.add('connect:ListContactFlows');
    return this;
  }

  /**
   * Grants permissions to list hours of operation resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html
   */
  public listHoursOfOperations() {
    this.add('connect:ListHoursOfOperations');
    return this;
  }

  /**
   * Grants permissions to view the Amazon Connect instances associated with an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public listInstances() {
    this.add('connect:ListInstances');
    return this;
  }

  /**
   * Grants permissions to list phone number resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   */
  public listPhoneNumbers() {
    this.add('connect:ListPhoneNumbers');
    return this;
  }

  /**
   * Grants permissions to list queue resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   */
  public listQueues() {
    this.add('connect:ListQueues');
    return this;
  }

  /**
   * Grants permissions to list routing profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html
   */
  public listRoutingProfiles() {
    this.add('connect:ListRoutingProfiles');
    return this;
  }

  /**
   * Grants permissions to list security profile resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html
   */
  public listSecurityProfiles() {
    this.add('connect:ListSecurityProfiles');
    return this;
  }

  /**
   * Grants permissions to list tags for an Amazon Connect resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('connect:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to list the hierarchy group resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html
   */
  public listUserHierarchyGroups() {
    this.add('connect:ListUserHierarchyGroups');
    return this;
  }

  /**
   * Grants permissions to list user resources in an Amazon Connect instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('connect:ListUsers');
    return this;
  }

  /**
   * Grants permissions to modify configuration settings for an existing Amazon Connect instance. The associated required actions grant permission modify the settings for the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/amazon-connect-instances.html
   */
  public modifyInstance() {
    this.add('connect:ModifyInstance');
    return this;
  }

  /**
   * Grants permissions to resume recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   */
  public resumeContactRecording() {
    this.add('connect:ResumeContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate a chat using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   */
  public startChatContact() {
    this.add('connect:StartChatContact');
    return this;
  }

  /**
   * Grants permissions to start recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   */
  public startContactRecording() {
    this.add('connect:StartContactRecording');
    return this;
  }

  /**
   * Grants permissions to initiate outbound calls using the Amazon Connect API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   */
  public startOutboundVoiceContact() {
    this.add('connect:StartOutboundVoiceContact');
    return this;
  }

  /**
   * Grants permissions to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   */
  public stopContact() {
    this.add('connect:StopContact');
    return this;
  }

  /**
   * Grants permissions to stop recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   */
  public stopContactRecording() {
    this.add('connect:StopContactRecording');
    return this;
  }

  /**
   * Grants permissions to suspend recording for the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   */
  public suspendContactRecording() {
    this.add('connect:SuspendContactRecording');
    return this;
  }

  /**
   * Grants permissions to tag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('connect:TagResource');
    return this;
  }

  /**
   * Grants permissions to untag an Amazon Connect resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('connect:UntagResource');
    return this;
  }

  /**
   * Grants permissions to create or update the contact attributes associated with the specified contact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   */
  public updateContactAttributes() {
    this.add('connect:UpdateContactAttributes');
    return this;
  }

  /**
   * Grants permissions to update a hierarchy group for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html
   */
  public updateUserHierarchy() {
    this.add('connect:UpdateUserHierarchy');
    return this;
  }

  /**
   * Grants permissions to update identity information for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html
   */
  public updateUserIdentityInfo() {
    this.add('connect:UpdateUserIdentityInfo');
    return this;
  }

  /**
   * Grants permissions to update phone configuration settings for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html
   */
  public updateUserPhoneConfig() {
    this.add('connect:UpdateUserPhoneConfig');
    return this;
  }

  /**
   * Grants permissions to update a routing profile for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html
   */
  public updateUserRoutingProfile() {
    this.add('connect:UpdateUserRoutingProfile');
    return this;
  }

  /**
   * Grants permissions to update security profiles for a user in an Amazon Connect instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html
   */
  public updateUserSecurityProfiles() {
    this.add('connect:UpdateUserSecurityProfiles');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
