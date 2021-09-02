import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aws-marketplace-private](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprivatemarketplace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplacePrivate extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-private](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprivatemarketplace.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add new approved products to the Private Marketplace. Also allows to approve a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toAssociateProductsWithPrivateMarketplace() {
    return this.to('AssociateProductsWithPrivateMarketplace');
  }

  /**
   * Grants permission to create a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplaceRequests() {
    return this.to('CreatePrivateMarketplaceRequests');
  }

  /**
   * Grants permission to describe requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceRequests() {
    return this.to('DescribePrivateMarketplaceRequests');
  }

  /**
   * Grants permission to remove approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDisassociateProductsFromPrivateMarketplace() {
    return this.to('DisassociateProductsFromPrivateMarketplace');
  }

  /**
   * Grants permission to get a queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toListPrivateMarketplaceRequests() {
    return this.to('ListPrivateMarketplaceRequests');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateProductsWithPrivateMarketplace",
      "CreatePrivateMarketplaceRequests",
      "DisassociateProductsFromPrivateMarketplace"
    ],
    "List": [
      "DescribePrivateMarketplaceRequests",
      "ListPrivateMarketplaceRequests"
    ]
  };
}
