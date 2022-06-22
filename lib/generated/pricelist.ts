import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [pricing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pricing extends PolicyStatement {
  public servicePrefix = 'pricing';

  /**
   * Statement provider for service [pricing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve service details for all (paginated) services (if serviceCode is not set) or service detail for a particular service (if given serviceCode)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Grants permission to retrieve all (paginated) possible values for a given attribute
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html
   */
  public toGetAttributeValues() {
    return this.to('GetAttributeValues');
  }

  /**
   * Grants permission to retrieve all matching products with given search criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html
   */
  public toGetProducts() {
    return this.to('GetProducts');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeServices',
      'GetAttributeValues',
      'GetProducts'
    ]
  };
}
