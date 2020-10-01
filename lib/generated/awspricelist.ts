import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [pricing](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pricing extends PolicyStatement {
  public servicePrefix = 'pricing';

  /**
   * Statement provider for service [pricing](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Returns the service details for all (paginated) services (if serviceCode is not set) or service detail for a particular service (if given serviceCode).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    this.to('pricing:DescribeServices');
    return this;
  }

  /**
   * Returns all (paginated) possible values for a given attribute.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAttributeValues.html
   */
  public toGetAttributeValues() {
    this.to('pricing:GetAttributeValues');
    return this;
  }

  /**
   * Returns all matching products with given search criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetProducts.html
   */
  public toGetProducts() {
    this.to('pricing:GetProducts');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeServices",
      "GetAttributeValues",
      "GetProducts"
    ]
  };
}
