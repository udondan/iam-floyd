import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sqs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sqs extends PolicyStatement {
  public servicePrefix = 'sqs';
  protected actionList: Actions = {
    "AddPermission": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html",
      "description": "Adds a permission to a queue for a specific principal.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ChangeMessageVisibility": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html",
      "description": "Changes the visibility timeout of a specified message in a queue to a new value.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ChangeMessageVisibilityBatch": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html",
      "description": "Changes the visibility timeout of multiple messages.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "CreateQueue": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html",
      "description": "Creates a new queue, or returns the URL of an existing one.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "DeleteMessage": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html",
      "description": "Deletes the specified message from the specified queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "DeleteMessageBatch": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html",
      "description": "Deletes up to ten messages from the specified queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "DeleteQueue": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html",
      "description": "Deletes the queue specified by the queue URL, regardless of whether the queue is empty.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "GetQueueAttributes": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html",
      "description": "Gets attributes for the specified queue.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "GetQueueUrl": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html",
      "description": "Returns the URL of an existing queue.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ListDeadLetterSourceQueues": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html",
      "description": "Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ListQueueTags": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html",
      "description": "Lists tags added to an SQS queue.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ListQueues": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html",
      "description": "Returns a list of your queues.",
      "accessLevel": "List"
    },
    "PurgeQueue": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html",
      "description": "Deletes the messages in a queue specified by the queue URL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "ReceiveMessage": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html",
      "description": "Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue.",
      "accessLevel": "Read",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html",
      "description": "Revokes any permissions in the queue policy that matches the specified Label parameter.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "SendMessage": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html",
      "description": "Delivers a message to the specified queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "SendMessageBatch": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html",
      "description": "Delivers up to ten messages to the specified queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "SetQueueAttributes": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html",
      "description": "Sets the value of one or more queue attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "TagQueue": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html",
      "description": "Add tags to the specified SQS queue.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    },
    "UntagQueue": {
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html",
      "description": "Remove tags from the specified SQS queue.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "queue": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "queue": {
      "name": "queue",
      "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-how-it-works.html",
      "arn": "arn:${Partition}:sqs:${Region}:${Account}:${QueueName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [sqs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a permission to a queue for a specific principal.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html
   */
  public toAddPermission() {
    this.add('sqs:AddPermission');
    return this;
  }

  /**
   * Changes the visibility timeout of a specified message in a queue to a new value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html
   */
  public toChangeMessageVisibility() {
    this.add('sqs:ChangeMessageVisibility');
    return this;
  }

  /**
   * Changes the visibility timeout of multiple messages.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html
   */
  public toChangeMessageVisibilityBatch() {
    this.add('sqs:ChangeMessageVisibilityBatch');
    return this;
  }

  /**
   * Creates a new queue, or returns the URL of an existing one.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    this.add('sqs:CreateQueue');
    return this;
  }

  /**
   * Deletes the specified message from the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html
   */
  public toDeleteMessage() {
    this.add('sqs:DeleteMessage');
    return this;
  }

  /**
   * Deletes up to ten messages from the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html
   */
  public toDeleteMessageBatch() {
    this.add('sqs:DeleteMessageBatch');
    return this;
  }

  /**
   * Deletes the queue specified by the queue URL, regardless of whether the queue is empty.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    this.add('sqs:DeleteQueue');
    return this;
  }

  /**
   * Gets attributes for the specified queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html
   */
  public toGetQueueAttributes() {
    this.add('sqs:GetQueueAttributes');
    return this;
  }

  /**
   * Returns the URL of an existing queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
   */
  public toGetQueueUrl() {
    this.add('sqs:GetQueueUrl');
    return this;
  }

  /**
   * Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html
   */
  public toListDeadLetterSourceQueues() {
    this.add('sqs:ListDeadLetterSourceQueues');
    return this;
  }

  /**
   * Lists tags added to an SQS queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html
   */
  public toListQueueTags() {
    this.add('sqs:ListQueueTags');
    return this;
  }

  /**
   * Returns a list of your queues.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    this.add('sqs:ListQueues');
    return this;
  }

  /**
   * Deletes the messages in a queue specified by the queue URL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html
   */
  public toPurgeQueue() {
    this.add('sqs:PurgeQueue');
    return this;
  }

  /**
   * Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html
   */
  public toReceiveMessage() {
    this.add('sqs:ReceiveMessage');
    return this;
  }

  /**
   * Revokes any permissions in the queue policy that matches the specified Label parameter.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.add('sqs:RemovePermission');
    return this;
  }

  /**
   * Delivers a message to the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    this.add('sqs:SendMessage');
    return this;
  }

  /**
   * Delivers up to ten messages to the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html
   */
  public toSendMessageBatch() {
    this.add('sqs:SendMessageBatch');
    return this;
  }

  /**
   * Sets the value of one or more queue attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html
   */
  public toSetQueueAttributes() {
    this.add('sqs:SetQueueAttributes');
    return this;
  }

  /**
   * Add tags to the specified SQS queue.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html
   */
  public toTagQueue() {
    this.add('sqs:TagQueue');
    return this;
  }

  /**
   * Remove tags from the specified SQS queue.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html
   */
  public toUntagQueue() {
    this.add('sqs:UntagQueue');
    return this;
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-how-it-works.html
   *
   * @param queueName - Identifier for the queueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQueue(queueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sqs:${Region}:${Account}:${QueueName}';
    arn = arn.replace('${QueueName}', queueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
