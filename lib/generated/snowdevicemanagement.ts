import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [snow-device-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SnowDeviceManagement extends PolicyStatement {
  public servicePrefix = 'snow-device-management';

  /**
   * Statement provider for service [snow-device-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel tasks on remote devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-cancel-task.html
   */
  public toCancelTask() {
    return this.to('CancelTask');
  }

  /**
   * Grants permission to create tasks on remote devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-create-task.html
   */
  public toCreateTask() {
    return this.to('CreateTask');
  }

  /**
   * Grants permission to describe a remotely-managed device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-device.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to describe a remotely-managed device's EC2 instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-ec2-instances.html
   */
  public toDescribeDeviceEc2Instances() {
    return this.to('DescribeDeviceEc2Instances');
  }

  /**
   * Grants permission to describe task executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-execution.html
   */
  public toDescribeExecution() {
    return this.to('DescribeExecution');
  }

  /**
   * Grants permission to describe a task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-task.html
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Grants permission to list a remotely-managed device's resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-device-resources.html
   */
  public toListDeviceResources() {
    return this.to('ListDeviceResources');
  }

  /**
   * Grants permission to list remotely-managed devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-devices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list task executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-executions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list the tags for a resource (device or task)
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tags-for-resource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-tag-resource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-untag-resources.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelTask',
      'CreateTask'
    ],
    Read: [
      'DescribeDevice',
      'DescribeDeviceEc2Instances',
      'DescribeExecution',
      'DescribeTask',
      'ListTagsForResource'
    ],
    List: [
      'ListDeviceResources',
      'ListDevices',
      'ListExecutions',
      'ListTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type managed-device to the statement
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/aws-sdms.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onManagedDevice(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SnowDeviceManagement.defaultPartition }:snow-device-management:${ region || '*' }:${ account || '*' }:managed-device/${ resourceId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/snowball/latest/snowcone-guide/aws-sdms.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SnowDeviceManagement.defaultPartition }:snow-device-management:${ region || '*' }:${ account || '*' }:task/${ resourceId }`);
  }

  /**
   * Filters access based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateTask()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - managed-device
   * - task
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateTask()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
