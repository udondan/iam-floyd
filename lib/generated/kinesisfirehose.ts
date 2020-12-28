import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [firehose](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Firehose extends PolicyStatement {
  public servicePrefix = 'firehose';

  /**
   * Statement provider for service [firehose](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html
   */
  public toCreateDeliveryStream() {
    return this.to('CreateDeliveryStream');
  }

  /**
   * Deletes a delivery stream and its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html
   */
  public toDeleteDeliveryStream() {
    return this.to('DeleteDeliveryStream');
  }

  /**
   * Describes the specified delivery stream and gets the status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html
   */
  public toDescribeDeliveryStream() {
    return this.to('DescribeDeliveryStream');
  }

  /**
   * Lists your delivery streams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html
   */
  public toListDeliveryStreams() {
    return this.to('ListDeliveryStreams');
  }

  /**
   * Lists the tags for the specified delivery stream.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html
   */
  public toListTagsForDeliveryStream() {
    return this.to('ListTagsForDeliveryStream');
  }

  /**
   * Writes a single data record into an Amazon Kinesis Firehose delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    return this.to('PutRecord');
  }

  /**
   * Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html
   */
  public toPutRecordBatch() {
    return this.to('PutRecordBatch');
  }

  /**
   * Enables server-side encryption (SSE) for the delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html
   */
  public toStartDeliveryStreamEncryption() {
    return this.to('StartDeliveryStreamEncryption');
  }

  /**
   * Disables the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html
   */
  public toStopDeliveryStreamEncryption() {
    return this.to('StopDeliveryStreamEncryption');
  }

  /**
   * Adds or updates tags for the specified delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html
   */
  public toTagDeliveryStream() {
    return this.to('TagDeliveryStream');
  }

  /**
   * Removes tags from the specified delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html
   */
  public toUntagDeliveryStream() {
    return this.to('UntagDeliveryStream');
  }

  /**
   * Updates the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    return this.to('UpdateDestination');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDeliveryStream",
      "DeleteDeliveryStream",
      "PutRecord",
      "PutRecordBatch",
      "StartDeliveryStreamEncryption",
      "StopDeliveryStreamEncryption",
      "TagDeliveryStream",
      "UntagDeliveryStream",
      "UpdateDestination"
    ],
    "List": [
      "DescribeDeliveryStream",
      "ListDeliveryStreams",
      "ListTagsForDeliveryStream"
    ]
  };

  /**
   * Adds a resource of type deliverystream to the statement
   *
   * https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html
   *
   * @param deliveryStreamName - Identifier for the deliveryStreamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverystream(deliveryStreamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:firehose:${Region}:${Account}:deliverystream/${DeliveryStreamName}';
    arn = arn.replace('${DeliveryStreamName}', deliveryStreamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
