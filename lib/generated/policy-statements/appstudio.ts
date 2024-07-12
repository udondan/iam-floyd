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
   * https://docs.aws.amazon.com/API_GetAccountStatus.html
   */
  public toGetAccountStatus() {
    return this.to('GetAccountStatus');
  }

  /**
   * Grants permission to fetch status of a enablement job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/API_GetEnablementJobStatus.html
   */
  public toGetEnablementJobStatus() {
    return this.to('GetEnablementJobStatus');
  }

  /**
   * Grants permission to submit a enablement job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/API_StartEnablementJob.html
   */
  public toStartEnablementJob() {
    return this.to('StartEnablementJob');
  }

  /**
   * Grants permission to rollback an enablement job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/API_StartRollbackEnablementJob.html
   */
  public toStartRollbackEnablementJob() {
    return this.to('StartRollbackEnablementJob');
  }

  /**
   * Grants permission to start a team deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/API_StartTeamDeployment.html
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
}
