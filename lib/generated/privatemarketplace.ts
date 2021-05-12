import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aws-marketplace-private](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatemarketplace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplacePrivate extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-private](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatemarketplace.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds new approved products to the Private Marketplace. Also allows to approve a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toAssociateProductsWithPrivateMarketplace() {
    return this.to('AssociateProductsWithPrivateMarketplace');
  }

  /**
   * Creates a Private Marketplace for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplace() {
    return this.to('CreatePrivateMarketplace');
  }

  /**
   * Creates a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplaceRequests() {
    return this.to('CreatePrivateMarketplaceRequests');
  }

  /**
   * Describes requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceRequests() {
    return this.to('DescribePrivateMarketplaceRequests');
  }

  /**
   * Describes the status of the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceStatus() {
    return this.to('DescribePrivateMarketplaceStatus');
  }

  /**
   * Removes approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDisassociateProductsFromPrivateMarketplace() {
    return this.to('DisassociateProductsFromPrivateMarketplace');
  }

  /**
   * Queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
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
      "CreatePrivateMarketplace",
      "CreatePrivateMarketplaceRequests",
      "DisassociateProductsFromPrivateMarketplace"
    ],
    "List": [
      "DescribePrivateMarketplaceRequests",
      "ListPrivateMarketplaceRequests"
    ],
    "Read": [
      "DescribePrivateMarketplaceStatus"
    ]
  };
}
