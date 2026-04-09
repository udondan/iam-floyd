import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [aws-marketplace-discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacediscovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceDiscovery extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacediscovery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve information about a listing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toGetListing() {
    return this.to('GetListing');
  }

  /**
   * Grants permission to retrieve information about an offer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toGetOffer() {
    return this.to('GetOffer');
  }

  /**
   * Grants permission to retrieve information about an offer set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toGetOfferSet() {
    return this.to('GetOfferSet');
  }

  /**
   * Grants permission to retrieve terms for an offer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toGetOfferTerms() {
    return this.to('GetOfferTerms');
  }

  /**
   * Grants permission to retrieve information about a product
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toGetProduct() {
    return this.to('GetProduct');
  }

  /**
   * Grants permission to list fulfillment options for a product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toListFulfillmentOptions() {
    return this.to('ListFulfillmentOptions');
  }

  /**
   * Grants permission to users to list their private offers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-offers-page.html
   */
  public toListPrivateListings() {
    return this.to('ListPrivateListings');
  }

  /**
   * Grants permission to list purchase options available to the buyer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toListPurchaseOptions() {
    return this.to('ListPurchaseOptions');
  }

  /**
   * Grants permission to retrieve facet values for filtering listings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toSearchFacets() {
    return this.to('SearchFacets');
  }

  /**
   * Grants permission to search for product listings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   */
  public toSearchListings() {
    return this.to('SearchListings');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetListing',
      'GetOffer',
      'GetOfferSet',
      'GetOfferTerms',
      'GetProduct'
    ],
    List: [
      'ListFulfillmentOptions',
      'ListPrivateListings',
      'ListPurchaseOptions',
      'SearchFacets',
      'SearchListings'
    ]
  };

  /**
   * Adds a resource of type Product to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param productId - Identifier for the productId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProduct(catalogName: string, productId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/product/${ productId }`);
  }

  /**
   * Adds a resource of type Listing to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param listingId - Identifier for the listingId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onListing(catalogName: string, listingId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/listing/${ listingId }`);
  }

  /**
   * Adds a resource of type Offer to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param offerId - Identifier for the offerId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOffer(catalogName: string, offerId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/offer/${ offerId }`);
  }

  /**
   * Adds a resource of type OfferSet to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param offerSetId - Identifier for the offerSetId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOfferSet(catalogName: string, offerSetId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/offerSet/${ offerSetId }`);
  }

  /**
   * Adds a resource of type PurchaseOption to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-api-access-control.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param purchaseOptionId - Identifier for the purchaseOptionId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPurchaseOption(catalogName: string, purchaseOptionId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/purchaseOption/${ purchaseOptionId }`);
  }
}
