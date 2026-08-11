import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [appstudio](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappstudio.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appstudio extends PolicyStatement {
  public servicePrefix = 'appstudio';

  /**
   * Statement provider for service [appstudio](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappstudio.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to describe the account's current status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/
   */
  public toGetAccountStatus() {
    return this.to('GetAccountStatus');
  }

  /**
   * Grants permission to fetch status of a enablement job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/
   */
  public toGetEnablementJobStatus() {
    return this.to('GetEnablementJobStatus');
  }

  /**
   * Grants permission to submit a enablement job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/
   */
  public toStartEnablementJob() {
    return this.to('StartEnablementJob');
  }

  /**
   * Grants permission to rollback an enablement job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/
   */
  public toStartRollbackEnablementJob() {
    return this.to('StartRollbackEnablementJob');
  }

  /**
   * Grants permission to start a team deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/
   */
  public toStartTeamDeployment() {
    return this.to('StartTeamDeployment');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetAccountStatus',
      'GetEnablementJobStatus'
    ],
    Write: [
      'StartEnablementJob',
      'StartRollbackEnablementJob',
      'StartTeamDeployment'
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/concepts.html#concepts-instance
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstudio:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/concepts.html#concepts-application
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstudio:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type connector to the statement
   *
   * https://docs.aws.amazon.com/appstudio/latest/userguide/concepts.html#concepts-connector
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnector(connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstudio:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connector/${ connectionId }`);
  }
}
