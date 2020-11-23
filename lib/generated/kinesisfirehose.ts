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
    this.to('CreateDeliveryStream');
    return this;
  }

  /**
   * Deletes a delivery stream and its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html
   */
  public toDeleteDeliveryStream() {
    this.to('DeleteDeliveryStream');
    return this;
  }

  /**
   * Describes the specified delivery stream and gets the status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html
   */
  public toDescribeDeliveryStream() {
    this.to('DescribeDeliveryStream');
    return this;
  }

  /**
   * Lists your delivery streams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html
   */
  public toListDeliveryStreams() {
    this.to('ListDeliveryStreams');
    return this;
  }

  /**
   * Lists the tags for the specified delivery stream.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html
   */
  public toListTagsForDeliveryStream() {
    this.to('ListTagsForDeliveryStream');
    return this;
  }

  /**
   * Writes a single data record into an Amazon Kinesis Firehose delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    this.to('PutRecord');
    return this;
  }

  /**
   * Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html
   */
  public toPutRecordBatch() {
    this.to('PutRecordBatch');
    return this;
  }

  /**
   * Enables server-side encryption (SSE) for the delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html
   */
  public toStartDeliveryStreamEncryption() {
    this.to('StartDeliveryStreamEncryption');
    return this;
  }

  /**
   * Disables the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html
   */
  public toStopDeliveryStreamEncryption() {
    this.to('StopDeliveryStreamEncryption');
    return this;
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
    this.to('TagDeliveryStream');
    return this;
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
    this.to('UntagDeliveryStream');
    return this;
  }

  /**
   * Updates the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    this.to('UpdateDestination');
    return this;
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
