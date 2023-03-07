import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [finspace-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspaceapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class FinspaceApi extends PolicyStatement {
  public servicePrefix = 'finspace-api';

  /**
   * Statement provider for service [finspace-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspaceapi.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve FinSpace programmatic access credentials
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/data-api/API_GetProgrammaticAccessCredentials.html
   */
  public toGetProgrammaticAccessCredentials() {
    return this.to('GetProgrammaticAccessCredentials');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetProgrammaticAccessCredentials'
    ]
  };

  /**
   * Adds a resource of type credential to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCredential(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || FinspaceApi.defaultPartition }:finspace-api:${ region || '*' }:${ account || '*' }:/credentials/programmatic`);
  }
}
