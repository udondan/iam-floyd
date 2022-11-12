import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [scheduler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgescheduler.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Scheduler extends PolicyStatement {
  public servicePrefix = 'scheduler';

  /**
   * Statement provider for service [scheduler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgescheduler.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an Amazon EventBridge Scheduler schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toCreateSchedule() {
    return this.to('CreateSchedule');
  }

  /**
   * Grants permission to create an Amazon EventBridge Scheduler schedule group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateScheduleGroup() {
    return this.to('CreateScheduleGroup');
  }

  /**
   * Grants permission to delete an Amazon EventBridge Scheduler schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toDeleteSchedule() {
    return this.to('DeleteSchedule');
  }

  /**
   * Grants permission to delete an Amazon EventBridge Scheduler schedule group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toDeleteScheduleGroup() {
    return this.to('DeleteScheduleGroup');
  }

  /**
   * Grants permission to view details about an Amazon EventBridge Scheduler schedule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toGetSchedule() {
    return this.to('GetSchedule');
  }

  /**
   * Grants permission to view details about an Amazon EventBridge Scheduler schedule group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toGetScheduleGroup() {
    return this.to('GetScheduleGroup');
  }

  /**
   * Grants permission to list the Amazon EventBridge Scheduler schedule groups in your account
   *
   * Access Level: List
   */
  public toListScheduleGroups() {
    return this.to('ListScheduleGroups');
  }

  /**
   * Grants permission to list the Amazon EventBridge Scheduler schedules in your account
   *
   * Access Level: List
   */
  public toListSchedules() {
    return this.to('ListSchedules');
  }

  /**
   * Grants permission to lists tag for an Amazon EventBridge Scheduler resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag an Amazon EventBridge Scheduler resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon EventBridge Scheduler resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an Amazon EventBridge Scheduler schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toUpdateSchedule() {
    return this.to('UpdateSchedule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSchedule',
      'CreateScheduleGroup',
      'DeleteSchedule',
      'DeleteScheduleGroup',
      'UpdateSchedule'
    ],
    Read: [
      'GetSchedule',
      'GetScheduleGroup',
      'ListTagsForResource'
    ],
    List: [
      'ListScheduleGroups',
      'ListSchedules'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type schedule-group to the statement
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScheduleGroup(groupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Scheduler.defaultPartition }:scheduler:${ region || '*' }:${ account || '*' }:schedule-group/${ groupName }`);
  }

  /**
   * Adds a resource of type schedule to the statement
   *
   * @param groupName - Identifier for the groupName.
   * @param scheduleName - Identifier for the scheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSchedule(groupName: string, scheduleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Scheduler.defaultPartition }:scheduler:${ region || '*' }:${ account || '*' }:schedule/${ groupName }/${ scheduleName }`);
  }
}
