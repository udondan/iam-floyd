import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [supportrecommendations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportrecommendations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Supportrecommendations extends PolicyStatement {
  public servicePrefix = 'supportrecommendations';

  /**
   * Statement provider for service [supportrecommendations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportrecommendations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to the GetSupportTroubleshootingResponse API which lists troubleshooting responses for users' issues
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-recommendations.html/
   */
  public toGetSupportTroubleshootingResponse() {
    return this.to('GetSupportTroubleshootingResponse');
  }

  /**
   * Grants permission to the StartSupportTroubleshooting API which starts troubleshooting for users' issues
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-recommendations.html/
   */
  public toStartSupportTroubleshooting() {
    return this.to('StartSupportTroubleshooting');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetSupportTroubleshootingResponse',
      'StartSupportTroubleshooting'
    ]
  };
}
