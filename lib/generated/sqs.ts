import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [sqs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sqs extends PolicyStatement {
  public servicePrefix = 'sqs';

  /**
   * Statement provider for service [sqs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html).
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
    return this.to('AddPermission');
  }

  /**
   * Changes the visibility timeout of a specified message in a queue to a new value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html
   */
  public toChangeMessageVisibility() {
    return this.to('ChangeMessageVisibility');
  }

  /**
   * Changes the visibility timeout of multiple messages.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html
   */
  public toChangeMessageVisibilityBatch() {
    return this.to('ChangeMessageVisibilityBatch');
  }

  /**
   * Creates a new queue, or returns the URL of an existing one.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Deletes the specified message from the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Deletes up to ten messages from the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html
   */
  public toDeleteMessageBatch() {
    return this.to('DeleteMessageBatch');
  }

  /**
   * Deletes the queue specified by the queue URL, regardless of whether the queue is empty.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Gets attributes for the specified queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html
   */
  public toGetQueueAttributes() {
    return this.to('GetQueueAttributes');
  }

  /**
   * Returns the URL of an existing queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
   */
  public toGetQueueUrl() {
    return this.to('GetQueueUrl');
  }

  /**
   * Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html
   */
  public toListDeadLetterSourceQueues() {
    return this.to('ListDeadLetterSourceQueues');
  }

  /**
   * Lists tags added to an SQS queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html
   */
  public toListQueueTags() {
    return this.to('ListQueueTags');
  }

  /**
   * Returns a list of your queues.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Deletes the messages in a queue specified by the queue URL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html
   */
  public toPurgeQueue() {
    return this.to('PurgeQueue');
  }

  /**
   * Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html
   */
  public toReceiveMessage() {
    return this.to('ReceiveMessage');
  }

  /**
   * Revokes any permissions in the queue policy that matches the specified Label parameter.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Delivers a message to the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Delivers up to ten messages to the specified queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html
   */
  public toSendMessageBatch() {
    return this.to('SendMessageBatch');
  }

  /**
   * Sets the value of one or more queue attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html
   */
  public toSetQueueAttributes() {
    return this.to('SetQueueAttributes');
  }

  /**
   * Add tags to the specified SQS queue.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html
   */
  public toTagQueue() {
    return this.to('TagQueue');
  }

  /**
   * Remove tags from the specified SQS queue.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html
   */
  public toUntagQueue() {
    return this.to('UntagQueue');
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AddPermission",
      "RemovePermission"
    ],
    "Write": [
      "ChangeMessageVisibility",
      "ChangeMessageVisibilityBatch",
      "CreateQueue",
      "DeleteMessage",
      "DeleteMessageBatch",
      "DeleteQueue",
      "PurgeQueue",
      "SendMessage",
      "SendMessageBatch",
      "SetQueueAttributes"
    ],
    "Read": [
      "GetQueueAttributes",
      "GetQueueUrl",
      "ListDeadLetterSourceQueues",
      "ListQueueTags",
      "ReceiveMessage"
    ],
    "List": [
      "ListQueues"
    ],
    "Tagging": [
      "TagQueue",
      "UntagQueue"
    ]
  };

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
