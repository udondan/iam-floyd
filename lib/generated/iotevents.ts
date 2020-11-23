import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iotevents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotevents extends PolicyStatement {
  public servicePrefix = 'iotevents';

  /**
   * Statement provider for service [iotevents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Sends a set of messages to the AWS IoT Events system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    this.to('BatchPutMessage');
    return this;
  }

  /**
   * Update an detector within the AWS IoT Events system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html
   */
  public toBatchUpdateDetector() {
    this.to('BatchUpdateDetector');
    return this;
  }

  /**
   * Creates a detector model.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html
   */
  public toCreateDetectorModel() {
    this.to('CreateDetectorModel');
    return this;
  }

  /**
   * Creates an input.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateInput.html
   */
  public toCreateInput() {
    this.to('CreateInput');
    return this;
  }

  /**
   * Deletes a detector model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html
   */
  public toDeleteDetectorModel() {
    this.to('DeleteDetectorModel');
    return this;
  }

  /**
   * Deletes an input.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html
   */
  public toDeleteInput() {
    this.to('DeleteInput');
    return this;
  }

  /**
   * Returns information about the specified detector (instance).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html
   */
  public toDescribeDetector() {
    this.to('DescribeDetector');
    return this;
  }

  /**
   * Describes a detector model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html
   */
  public toDescribeDetectorModel() {
    this.to('DescribeDetectorModel');
    return this;
  }

  /**
   * Describes an input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html
   */
  public toDescribeInput() {
    this.to('DescribeInput');
    return this;
  }

  /**
   * Retrieves the current settings of the AWS IoT Events logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.to('DescribeLoggingOptions');
    return this;
  }

  /**
   * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html
   */
  public toListDetectorModelVersions() {
    this.to('ListDetectorModelVersions');
    return this;
  }

  /**
   * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html
   */
  public toListDetectorModels() {
    this.to('ListDetectorModels');
    return this;
  }

  /**
   * Lists detectors (the instances of a detector model).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html
   */
  public toListDetectors() {
    this.to('ListDetectors');
    return this;
  }

  /**
   * Lists the inputs you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html
   */
  public toListInputs() {
    this.to('ListInputs');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Sets or updates the AWS IoT Events logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.to('PutLoggingOptions');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Updates a detector model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html
   */
  public toUpdateDetectorModel() {
    this.to('UpdateDetectorModel');
    return this;
  }

  /**
   * Updates an input.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html
   */
  public toUpdateInput() {
    this.to('UpdateInput');
    return this;
  }

  /**
   * Updates input routing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html
   */
  public toUpdateInputRouting() {
    this.to('UpdateInputRouting');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchPutMessage",
      "BatchUpdateDetector",
      "CreateDetectorModel",
      "CreateInput",
      "DeleteDetectorModel",
      "DeleteInput",
      "PutLoggingOptions",
      "UpdateDetectorModel",
      "UpdateInput",
      "UpdateInputRouting"
    ],
    "Read": [
      "DescribeDetector",
      "DescribeDetectorModel",
      "DescribeInput",
      "DescribeLoggingOptions",
      "ListTagsForResource"
    ],
    "List": [
      "ListDetectorModelVersions",
      "ListDetectorModels",
      "ListDetectors",
      "ListInputs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type detectorModel to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param detectorModelName - Identifier for the detectorModelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetectorModel(detectorModelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotevents:${Region}:${Account}:detectorModel/${DetectorModelName}';
    arn = arn.replace('${DetectorModelName}', detectorModelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param inputName - Identifier for the inputName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(inputName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotevents:${Region}:${Account}:input/${InputName}';
    arn = arn.replace('${InputName}', inputName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
