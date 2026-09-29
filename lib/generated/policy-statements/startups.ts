import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [startups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_startups.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Startups extends PolicyStatement {
  public servicePrefix = 'startups';

  /**
   * Statement provider for service [startups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_startups.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to summarize billing, cost, and cost forecast information for which you have permissions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/startupadvisor/latest/userguide/#
   */
  public toGetSpendSummary() {
    return this.to('GetSpendSummary');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetSpendSummary'
    ]
  };
}
