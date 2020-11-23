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
    this.to('AssociateProductsWithPrivateMarketplace');
    return this;
  }

  /**
   * Creates a Private Marketplace for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplace() {
    this.to('CreatePrivateMarketplace');
    return this;
  }

  /**
   * Creates a Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplaceProfile() {
    this.to('CreatePrivateMarketplaceProfile');
    return this;
  }

  /**
   * Creates a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toCreatePrivateMarketplaceRequests() {
    this.to('CreatePrivateMarketplaceRequests');
    return this;
  }

  /**
   * Describes the status of requested products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceProducts() {
    this.to('DescribePrivateMarketplaceProducts');
    return this;
  }

  /**
   * Describes details about the Private Marketplace Profile for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceProfile() {
    this.to('DescribePrivateMarketplaceProfile');
    return this;
  }

  /**
   * Describes requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceRequests() {
    this.to('DescribePrivateMarketplaceRequests');
    return this;
  }

  /**
   * Describes the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceSettings() {
    this.to('DescribePrivateMarketplaceSettings');
    return this;
  }

  /**
   * Describes the status of the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDescribePrivateMarketplaceStatus() {
    this.to('DescribePrivateMarketplaceStatus');
    return this;
  }

  /**
   * Removes approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toDisassociateProductsFromPrivateMarketplace() {
    this.to('DisassociateProductsFromPrivateMarketplace');
    return this;
  }

  /**
   * Queryable list for the products and status of products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toListPrivateMarketplaceProducts() {
    this.to('ListPrivateMarketplaceProducts');
    return this;
  }

  /**
   * Queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toListPrivateMarketplaceRequests() {
    this.to('ListPrivateMarketplaceRequests');
    return this;
  }

  /**
   * Starts the Private Marketplace, enabling the customized AWS Marketplace experience, and enabling restrictions on the procurement of products based on what is available in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toStartPrivateMarketplace() {
    this.to('StartPrivateMarketplace');
    return this;
  }

  /**
   * Stops the Private Marketplace, disabling the customized AWS Marketplace experience and removing the Private Marketplace procurement restrictions on products. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toStopPrivateMarketplace() {
    this.to('StopPrivateMarketplace');
    return this;
  }

  /**
   * Updates the Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toUpdatePrivateMarketplaceProfile() {
    this.to('UpdatePrivateMarketplaceProfile');
    return this;
  }

  /**
   * Updates the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  public toUpdatePrivateMarketplaceSettings() {
    this.to('UpdatePrivateMarketplaceSettings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateProductsWithPrivateMarketplace",
      "CreatePrivateMarketplace",
      "CreatePrivateMarketplaceProfile",
      "CreatePrivateMarketplaceRequests",
      "DisassociateProductsFromPrivateMarketplace",
      "StartPrivateMarketplace",
      "StopPrivateMarketplace",
      "UpdatePrivateMarketplaceProfile",
      "UpdatePrivateMarketplaceSettings"
    ],
    "List": [
      "DescribePrivateMarketplaceProducts",
      "DescribePrivateMarketplaceRequests",
      "ListPrivateMarketplaceProducts",
      "ListPrivateMarketplaceRequests"
    ],
    "Read": [
      "DescribePrivateMarketplaceProfile",
      "DescribePrivateMarketplaceSettings",
      "DescribePrivateMarketplaceStatus"
    ]
  };
}
