import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sustainability extends PolicyStatement {
  public servicePrefix = 'sustainability';

  /**
   * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the carbon footprint tool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetCarbonFootprintSummary() {
    return this.to('GetCarbonFootprintSummary');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetCarbonFootprintSummary'
    ]
  };
}
