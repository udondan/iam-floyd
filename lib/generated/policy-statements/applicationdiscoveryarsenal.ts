import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [arsenal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';

  /**
   * Statement provider for service [arsenal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to register AWS provided data collectors to the Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html
   */
  public toRegisterOnPremisesAgent() {
    return this.to('RegisterOnPremisesAgent');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'RegisterOnPremisesAgent'
    ]
  };
}
