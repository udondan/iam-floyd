import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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

  /**
   * Grants permission to view estimated carbon emission values based on customer grouping and filtering parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sustainability/latest/APIReference/API_GetEstimatedCarbonEmissions.html
   */
  public toGetEstimatedCarbonEmissions() {
    return this.to('GetEstimatedCarbonEmissions');
  }

  /**
   * Grants permission to view the possible dimension values available for the estimated carbon emission values
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sustainability/latest/APIReference/API_GetEstimatedCarbonEmissionsDimensionValues.html
   */
  public toGetEstimatedCarbonEmissionsDimensionValues() {
    return this.to('GetEstimatedCarbonEmissionsDimensionValues');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetCarbonFootprintSummary',
      'GetEstimatedCarbonEmissions',
      'GetEstimatedCarbonEmissionsDimensionValues'
    ]
  };
}
