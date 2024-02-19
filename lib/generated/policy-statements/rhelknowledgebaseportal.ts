import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [rhelkb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrhelknowledgebaseportal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rhelkb extends PolicyStatement {
  public servicePrefix = 'rhelkb';

  /**
   * Statement provider for service [rhelkb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrhelknowledgebaseportal.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to access the Red Hat Knowledgebase portal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rhel.html
   */
  public toGetRhelURL() {
    return this.to('GetRhelURL');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetRhelURL'
    ]
  };
}
