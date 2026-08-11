import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sustainability.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sustainability extends PolicyStatement {
  public servicePrefix = 'sustainability';

  /**
   * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sustainability.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to access carbon footprint data from AWS Data Exports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-standard.html
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

  /**
   * Grants permission to view estimated water allocation values based on customer grouping and filtering parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sustainability/latest/APIReference/API_GetEstimatedWaterAllocation.html
   */
  public toGetEstimatedWaterAllocation() {
    return this.to('GetEstimatedWaterAllocation');
  }

  /**
   * Grants permission to view the possible dimension values available for the estimated water allocation values
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sustainability/latest/APIReference/API_GetEstimatedWaterAllocationDimensionValues.html
   */
  public toGetEstimatedWaterAllocationDimensionValues() {
    return this.to('GetEstimatedWaterAllocationDimensionValues');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetCarbonFootprintSummary',
      'GetEstimatedCarbonEmissions',
      'GetEstimatedCarbonEmissionsDimensionValues',
      'GetEstimatedWaterAllocation',
      'GetEstimatedWaterAllocationDimensionValues'
    ]
  };
}
