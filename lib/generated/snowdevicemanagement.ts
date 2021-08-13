import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel tasks on remote devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/CancelTask.html
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
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/CreateTask.html
   */
  public toCreateTask() {
    return this.to('CreateTask');
  }

  /**
   * Grants permission to describe a remotely-managed device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/DescribeDevice.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to describe a remotely-managed device's EC2 instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/DescribeDeviceEc2Instances.html
   */
  public toDescribeDeviceEc2Instances() {
    return this.to('DescribeDeviceEc2Instances');
  }

  /**
   * Grants permission to describe task executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/DescribeExecution.html
   */
  public toDescribeExecution() {
    return this.to('DescribeExecution');
  }

  /**
   * Grants permission to describe a task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/DescribeTask.html
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Grants permission to list a remotely-managed device's resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/ListDeviceResources.html
   */
  public toListDeviceResources() {
    return this.to('ListDeviceResources');
  }

  /**
   * Grants permission to list remotely-managed devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list task executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/ListExecutions.html
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
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/ListTasks.html
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
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/TagResource.html
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
   * https://docs.aws.amazon.com/snow-device-management/latest/APIReference/UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelTask",
      "CreateTask"
    ],
    "Read": [
      "DescribeDevice",
      "DescribeDeviceEc2Instances",
      "DescribeExecution",
      "DescribeTask",
      "ListTagsForResource"
    ],
    "List": [
      "ListDeviceResources",
      "ListDevices",
      "ListExecutions",
      "ListTasks"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type managed-device to the statement
   *
   * https://docs.aws.amazon.com/IAM/snow-device-management/UserGuide/managed-device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onManagedDevice(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:snow-device-management:${Region}:${Account}:managed-device/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/IAM/snow-device-management/UserGuide/task.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:snow-device-management:${Region}:${Account}:task/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
