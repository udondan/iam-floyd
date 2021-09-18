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
   * Grants permission to a queue for a specific principal
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html
   */
  public toAddPermission() {
    return this.to('AddPermission');
  }

  /**
   * Grants permission to change the visibility timeout of a specified message in a queue to a new value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html
   */
  public toChangeMessageVisibility() {
    return this.to('ChangeMessageVisibility');
  }

  /**
   * Grants permission to create a new queue, or returns the URL of an existing one
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Grants permission to delete the specified message from the specified queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Grants permission to delete the queue specified by the queue URL, regardless of whether the queue is empty
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Grants permission to get attributes for the specified queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html
   */
  public toGetQueueAttributes() {
    return this.to('GetQueueAttributes');
  }

  /**
   * Grants permission to return the URL of an existing queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
   */
  public toGetQueueUrl() {
    return this.to('GetQueueUrl');
  }

  /**
   * Grants permission to return a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html
   */
  public toListDeadLetterSourceQueues() {
    return this.to('ListDeadLetterSourceQueues');
  }

  /**
   * Grants permission to list tags added to an SQS queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html
   */
  public toListQueueTags() {
    return this.to('ListQueueTags');
  }

  /**
   * Grants permission to return a list of your queues
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permission to delete the messages in a queue specified by the queue URL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html
   */
  public toPurgeQueue() {
    return this.to('PurgeQueue');
  }

  /**
   * Grants permission to retrieve one or more messages, with a maximum limit of 10 messages, from the specified queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html
   */
  public toReceiveMessage() {
    return this.to('ReceiveMessage');
  }

  /**
   * Grants permission to revoke any permissions in the queue policy that matches the specified Label parameter
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Grants permission to deliver a message to the specified queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to set the value of one or more queue attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html
   */
  public toSetQueueAttributes() {
    return this.to('SetQueueAttributes');
  }

  /**
   * Grants permission to add tags to the specified SQS queue
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html
   */
  public toTagQueue() {
    return this.to('TagQueue');
  }

  /**
   * Grants permission to remove tags from the specified SQS queue
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
      "CreateQueue",
      "DeleteMessage",
      "DeleteQueue",
      "PurgeQueue",
      "SendMessage",
      "SetQueueAttributes"
    ],
    "Read": [
      "GetQueueAttributes",
      "GetQueueUrl",
      "ListDeadLetterSourceQueues",
      "ListQueueTags",
      "ListQueues",
      "ReceiveMessage"
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
