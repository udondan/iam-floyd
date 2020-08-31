import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [pricing](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pricing extends PolicyStatement {
  public servicePrefix = 'pricing';
  protected actionList: Actions = {
    "DescribeServices": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeServices.html",
      "description": "Returns the service details for all (paginated) services (if serviceCode is not set) or service detail for a particular service (if given serviceCode).",
      "accessLevel": "Read"
    },
    "GetAttributeValues": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAttributeValues.html",
      "description": "Returns all (paginated) possible values for a given attribute.",
      "accessLevel": "Read"
    },
    "GetProducts": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetProducts.html",
      "description": "Returns all matching products with given search criteria.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
    this.add('pricing:DescribeServices');
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
    this.add('pricing:GetAttributeValues');
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
    this.add('pricing:GetProducts');
    return this;
  }
}
