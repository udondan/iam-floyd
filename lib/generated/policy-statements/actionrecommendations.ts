import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [action-recommendations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactionrecommendations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ActionRecommendations extends PolicyStatement {
  public servicePrefix = 'action-recommendations';

  /**
   * Statement provider for service [action-recommendations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactionrecommendations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to list recommended actions in the AWS Management Console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/recommended-actions.html
   */
  public toListRecommendedActions() {
    return this.to('ListRecommendedActions');
  }

  protected accessLevelList: AccessLevelList = {
    List: [
      'ListRecommendedActions'
    ]
  };
}
