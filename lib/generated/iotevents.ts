import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('BatchAcknowledgeAlarm');
  }

  /**
   * Grants permission to delete a detector instance within the AWS IoT Events system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html
   */
  public toBatchDeleteDetector() {
    return this.to('BatchDeleteDetector');
  }

  /**
   * Grants permission to disable one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html
   */
  public toBatchDisableAlarm() {
    return this.to('BatchDisableAlarm');
  }

  /**
   * Grants permission to enable one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html
   */
  public toBatchEnableAlarm() {
    return this.to('BatchEnableAlarm');
  }

  /**
   * Grants permission to send a set of messages to the AWS IoT Events system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    return this.to('BatchPutMessage');
  }

  /**
   * Grants permission to reset one or more alarm instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html
   */
  public toBatchResetAlarm() {
    return this.to('BatchResetAlarm');
  }

  /**
   * Grants permission to change one or more alarm instances to the snooze mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html
   */
  public toBatchSnoozeAlarm() {
    return this.to('BatchSnoozeAlarm');
  }

  /**
   * Grants permission to update a detector instance within the AWS IoT Events system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html
   */
  public toBatchUpdateDetector() {
    return this.to('BatchUpdateDetector');
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
    return this.to('CreateAlarmModel');
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
    return this.to('CreateDetectorModel');
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
    return this.to('CreateInput');
  }

  /**
   * Grants permission to delete an alarm model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteAlarmModel.html
   */
  public toDeleteAlarmModel() {
    return this.to('DeleteAlarmModel');
  }

  /**
   * Grants permission to delete a detector model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html
   */
  public toDeleteDetectorModel() {
    return this.to('DeleteDetectorModel');
  }

  /**
   * Grants permission to delete an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html
   */
  public toDeleteInput() {
    return this.to('DeleteInput');
  }

  /**
   * Grants permission to retrieve information about an alarm instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeAlarm.html
   */
  public toDescribeAlarm() {
    return this.to('DescribeAlarm');
  }

  /**
   * Grants permission to retrieve information about an alarm model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeAlarmModel.html
   */
  public toDescribeAlarmModel() {
    return this.to('DescribeAlarmModel');
  }

  /**
   * Grants permission to retriev information about a detector instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html
   */
  public toDescribeDetector() {
    return this.to('DescribeDetector');
  }

  /**
   * Grants permission to retrieve information about a detector model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html
   */
  public toDescribeDetectorModel() {
    return this.to('DescribeDetectorModel');
  }

  /**
   * Grants permission to retrieve the detector model analysis information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModelAnalysis.html
   */
  public toDescribeDetectorModelAnalysis() {
    return this.to('DescribeDetectorModelAnalysis');
  }

  /**
   * Grants permission to retrieve an information about Input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html
   */
  public toDescribeInput() {
    return this.to('DescribeInput');
  }

  /**
   * Grants permission to retrieve the current settings of the AWS IoT Events logging options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    return this.to('DescribeLoggingOptions');
  }

  /**
   * Grants permission to retrieve the detector model analysis results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_GetDetectorModelAnalysisResults.html
   */
  public toGetDetectorModelAnalysisResults() {
    return this.to('GetDetectorModelAnalysisResults');
  }

  /**
   * Grants permission to list all the versions of an alarm model
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModelVersions.html
   */
  public toListAlarmModelVersions() {
    return this.to('ListAlarmModelVersions');
  }

  /**
   * Grants permission to list the alarm models that you created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModels.html
   */
  public toListAlarmModels() {
    return this.to('ListAlarmModels');
  }

  /**
   * Grants permission to retrieve information about all alarm instances per alarmModel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListAlarms.html
   */
  public toListAlarms() {
    return this.to('ListAlarms');
  }

  /**
   * Grants permission to list all the versions of a detector model
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html
   */
  public toListDetectorModelVersions() {
    return this.to('ListDetectorModelVersions');
  }

  /**
   * Grants permission to list the detector models that you created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html
   */
  public toListDetectorModels() {
    return this.to('ListDetectorModels');
  }

  /**
   * Grants permission to retrieve information about all detector instances per detectormodel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html
   */
  public toListDetectors() {
    return this.to('ListDetectors');
  }

  /**
   * Grants permission to list one or more input routings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputRoutings.html
   */
  public toListInputRoutings() {
    return this.to('ListInputRoutings');
  }

  /**
   * Grants permission to lists the inputs you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html
   */
  public toListInputs() {
    return this.to('ListInputs');
  }

  /**
   * Grants permission to list the tags (metadata) which you have assigned to the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to set or update the AWS IoT Events logging options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    return this.to('PutLoggingOptions');
  }

  /**
   * Grants permission to start the detector model analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_StartDetectorModelAnalysis.html
   */
  public toStartDetectorModelAnalysis() {
    return this.to('StartDetectorModelAnalysis');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an alarm model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateAlarmModel.html
   */
  public toUpdateAlarmModel() {
    return this.to('UpdateAlarmModel');
  }

  /**
   * Grants permission to update a detector model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html
   */
  public toUpdateDetectorModel() {
    return this.to('UpdateDetectorModel');
  }

  /**
   * Grants permission to update an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html
   */
  public toUpdateInput() {
    return this.to('UpdateInput');
  }

  /**
   * Grants permission to update input routing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html
   */
  public toUpdateInputRouting() {
    return this.to('UpdateInputRouting');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchAcknowledgeAlarm',
      'BatchDeleteDetector',
      'BatchDisableAlarm',
      'BatchEnableAlarm',
      'BatchPutMessage',
      'BatchResetAlarm',
      'BatchSnoozeAlarm',
      'BatchUpdateDetector',
      'CreateAlarmModel',
      'CreateDetectorModel',
      'CreateInput',
      'DeleteAlarmModel',
      'DeleteDetectorModel',
      'DeleteInput',
      'PutLoggingOptions',
      'StartDetectorModelAnalysis',
      'UpdateAlarmModel',
      'UpdateDetectorModel',
      'UpdateInput',
      'UpdateInputRouting'
    ],
    Read: [
      'DescribeAlarm',
      'DescribeAlarmModel',
      'DescribeDetector',
      'DescribeDetectorModel',
      'DescribeDetectorModelAnalysis',
      'DescribeInput',
      'DescribeLoggingOptions',
      'GetDetectorModelAnalysisResults',
      'ListTagsForResource'
    ],
    List: [
      'ListAlarmModelVersions',
      'ListAlarmModels',
      'ListAlarms',
      'ListDetectorModelVersions',
      'ListDetectorModels',
      'ListDetectors',
      'ListInputRoutings',
      'ListInputs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetectorModel(detectorModelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotevents.defaultPartition }:iotevents:${ region || '*' }:${ account || '*' }:detectorModel/${ detectorModelName }`);
  }

  /**
   * Adds a resource of type alarmModel to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param alarmModelName - Identifier for the alarmModelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlarmModel(alarmModelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotevents.defaultPartition }:iotevents:${ region || '*' }:${ account || '*' }:alarmModel/${ alarmModelName }`);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param inputName - Identifier for the inputName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(inputName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotevents.defaultPartition }:iotevents:${ region || '*' }:${ account || '*' }:input/${ inputName }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAlarmModel()
   * - .toCreateDetectorModel()
   * - .toCreateInput()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - detectorModel
   * - alarmModel
   * - input
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions by the tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAlarmModel()
   * - .toCreateDetectorModel()
   * - .toCreateInput()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the instanceId (key-value) of the message
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/security_iam_id-based-policy-examples.htmlsecurity_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyValue(value: string | string[], operator?: Operator | string) {
    return this.if(`keyValue`, value, operator || 'StringLike');
  }
}
