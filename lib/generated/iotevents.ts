import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
   * Grants permission to send one or more acknowledge action requests to AWS IoT Events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html
   */
  public toBatchAcknowledgeAlarm() {
    this.to('iotevents:BatchAcknowledgeAlarm');
    return this;
  }

  /**
   * Grants permission to disable one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html
   */
  public toBatchDisableAlarm() {
    this.to('iotevents:BatchDisableAlarm');
    return this;
  }

  /**
   * Grants permission to enable one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html
   */
  public toBatchEnableAlarm() {
    this.to('iotevents:BatchEnableAlarm');
    return this;
  }

  /**
   * Grants permission to send a set of messages to the AWS IoT Events system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    this.to('iotevents:BatchPutMessage');
    return this;
  }

  /**
   * Grants permission to reset one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html
   */
  public toBatchResetAlarm() {
    this.to('iotevents:BatchResetAlarm');
    return this;
  }

  /**
   * Grants permission to change one or more alarm instances to the snooze mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html
   */
  public toBatchSnoozeAlarm() {
    this.to('iotevents:BatchSnoozeAlarm');
    return this;
  }

  /**
   * Grants permission to update a detector instance within the AWS IoT Events system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html
   */
  public toBatchUpdateDetector() {
    this.to('iotevents:BatchUpdateDetector');
    return this;
  }

  /**
   * Grants permission to create an alarm model to monitor an AWS IoT Events input attribute or an AWS IoT SiteWise asset property
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html
   */
  public toCreateAlarmModel() {
    this.to('iotevents:CreateAlarmModel');
    return this;
  }

  /**
   * Grants permission to create a detector model to monitor an AWS IoT Events input attribute
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
    this.to('iotevents:CreateDetectorModel');
    return this;
  }

  /**
   * Grants permission to create an Input in IotEvents
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
    this.to('iotevents:CreateInput');
    return this;
  }

  /**
   * Grants permission to delete an alarm model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteAlarmModel.html
   */
  public toDeleteAlarmModel() {
    this.to('iotevents:DeleteAlarmModel');
    return this;
  }

  /**
   * Grants permission to delete a detector model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html
   */
  public toDeleteDetectorModel() {
    this.to('iotevents:DeleteDetectorModel');
    return this;
  }

  /**
   * Grants permission to delete an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html
   */
  public toDeleteInput() {
    this.to('iotevents:DeleteInput');
    return this;
  }

  /**
   * Grants permission to retrieve information about an alarm instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeAlarm.html
   */
  public toDescribeAlarm() {
    this.to('iotevents:DescribeAlarm');
    return this;
  }

  /**
   * Grants permission to retrieve information about an alarm model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeAlarmModel.html
   */
  public toDescribeAlarmModel() {
    this.to('iotevents:DescribeAlarmModel');
    return this;
  }

  /**
   * Grants permission to retriev information about a detector instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html
   */
  public toDescribeDetector() {
    this.to('iotevents:DescribeDetector');
    return this;
  }

  /**
   * Grants permission to retrieve information about a detector model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html
   */
  public toDescribeDetectorModel() {
    this.to('iotevents:DescribeDetectorModel');
    return this;
  }

  /**
   * Grants permission to retrieve an information about Input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html
   */
  public toDescribeInput() {
    this.to('iotevents:DescribeInput');
    return this;
  }

  /**
   * Grants permission to retrieve the current settings of the AWS IoT Events logging options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.to('iotevents:DescribeLoggingOptions');
    return this;
  }

  /**
   * Grants permission to list all the versions of an alarm model
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModelVersions.html
   */
  public toListAlarmModelVersions() {
    this.to('iotevents:ListAlarmModelVersions');
    return this;
  }

  /**
   * Grants permission to list the alarm models that you created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModels.html
   */
  public toListAlarmModels() {
    this.to('iotevents:ListAlarmModels');
    return this;
  }

  /**
   * Grants permission to retrieve information about all alarm instances per alarmModel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListAlarms.html
   */
  public toListAlarms() {
    this.to('iotevents:ListAlarms');
    return this;
  }

  /**
   * Grants permission to list all the versions of a detector model
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html
   */
  public toListDetectorModelVersions() {
    this.to('iotevents:ListDetectorModelVersions');
    return this;
  }

  /**
   * Grants permission to list the detector models that you created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html
   */
  public toListDetectorModels() {
    this.to('iotevents:ListDetectorModels');
    return this;
  }

  /**
   * Grants permission to retrieve information about all detector instances per detectormodel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html
   */
  public toListDetectors() {
    this.to('iotevents:ListDetectors');
    return this;
  }

  /**
   * Grants permission to lists the inputs you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html
   */
  public toListInputs() {
    this.to('iotevents:ListInputs');
    return this;
  }

  /**
   * Grants permission to list the tags (metadata) which you have assigned to the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iotevents:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to set or update the AWS IoT Events logging options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.to('iotevents:PutLoggingOptions');
    return this;
  }

  /**
   * Grants permission to adds to or modifies the tags of the given resource.Tags are metadata which can be used to manage a resource
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
    this.to('iotevents:TagResource');
    return this;
  }

  /**
   * Grants permission to remove the given tags (metadata) from the resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('iotevents:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an alarm model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateAlarmModel.html
   */
  public toUpdateAlarmModel() {
    this.to('iotevents:UpdateAlarmModel');
    return this;
  }

  /**
   * Grants permission to update a detector model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html
   */
  public toUpdateDetectorModel() {
    this.to('iotevents:UpdateDetectorModel');
    return this;
  }

  /**
   * Grants permission to update an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html
   */
  public toUpdateInput() {
    this.to('iotevents:UpdateInput');
    return this;
  }

  /**
   * Grants permission to update input routing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html
   */
  public toUpdateInputRouting() {
    this.to('iotevents:UpdateInputRouting');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchAcknowledgeAlarm",
      "BatchDisableAlarm",
      "BatchEnableAlarm",
      "BatchPutMessage",
      "BatchResetAlarm",
      "BatchSnoozeAlarm",
      "BatchUpdateDetector",
      "CreateAlarmModel",
      "CreateDetectorModel",
      "CreateInput",
      "DeleteAlarmModel",
      "DeleteDetectorModel",
      "DeleteInput",
      "PutLoggingOptions",
      "UpdateAlarmModel",
      "UpdateDetectorModel",
      "UpdateInput",
      "UpdateInputRouting"
    ],
    "Read": [
      "DescribeAlarm",
      "DescribeAlarmModel",
      "DescribeDetector",
      "DescribeDetectorModel",
      "DescribeInput",
      "DescribeLoggingOptions",
      "ListTagsForResource"
    ],
    "List": [
      "ListAlarmModelVersions",
      "ListAlarmModels",
      "ListAlarms",
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
   * Adds a resource of type alarmModel to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param alarmModelName - Identifier for the alarmModelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlarmModel(alarmModelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotevents:${Region}:${Account}:alarmModel/${AlarmModelName}';
    arn = arn.replace('${AlarmModelName}', alarmModelName);
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

  /**
   * Filters access by the instanceId (key-value) of the message
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyValue(value: string | string[], operator?: Operator | string) {
    return this.if(`iotevents:keyValue`, value, operator || 'StringLike');
  }
}
