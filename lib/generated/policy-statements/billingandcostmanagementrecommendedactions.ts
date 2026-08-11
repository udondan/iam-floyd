import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [bcm-recommended-actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementrecommendedactions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BcmRecommendedActions extends PolicyStatement {
  public servicePrefix = 'bcm-recommended-actions';

  /**
   * Statement provider for service [bcm-recommended-actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementrecommendedactions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to list all recommended actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_BillingAndCostManagementRecommendedActions_ListRecommendedActions.html
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
