import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [iotjobsdata](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotjobsdata extends PolicyStatement {
  public servicePrefix = 'iotjobsdata';

  /**
   * Statement provider for service [iotjobsdata](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to describe a job execution
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifIotJobId()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_DescribeJobExecution.html
   */
  public toDescribeJobExecution() {
    return this.to('DescribeJobExecution');
  }

  /**
   * Grants permission to get the list of all jobs for a thing that are not in a terminal state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_GetPendingJobExecutions.html
   */
  public toGetPendingJobExecutions() {
    return this.to('GetPendingJobExecutions');
  }

  /**
   * Grants permission to get and start the next pending job execution for a thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_StartNextPendingJobExecution.html
   */
  public toStartNextPendingJobExecution() {
    return this.to('StartNextPendingJobExecution');
  }

  /**
   * Grants permission to update a job execution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifIotJobId()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_UpdateJobExecution.html
   */
  public toUpdateJobExecution() {
    return this.to('UpdateJobExecution');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeJobExecution',
      'GetPendingJobExecutions'
    ],
    Write: [
      'StartNextPendingJobExecution',
      'UpdateJobExecution'
    ]
  };

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:thing/${ thingName }`);
  }

  /**
   * Filters access by jobId for iotjobsdata:DescribeJobExecution and iotjobsdata:UpdateJobExecution APIs
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toDescribeJobExecution()
   * - .toUpdateJobExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIotJobId(value: string | string[], operator?: Operator | string) {
    return this.if(`iot:JobId`, value, operator ?? 'StringLike');
  }
}
