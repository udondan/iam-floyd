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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_GetListing.html
   */
  public toGetListing() {
    return this.to('GetListing');
  }

  /**
   * Grants permission to retrieve information about an offer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_GetOffer.html
   */
  public toGetOffer() {
    return this.to('GetOffer');
  }

  /**
   * Grants permission to retrieve information about an offer set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_GetOfferSet.html
   */
  public toGetOfferSet() {
    return this.to('GetOfferSet');
  }

  /**
   * Grants permission to retrieve terms for an offer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_GetOfferTerms.html
   */
  public toGetOfferTerms() {
    return this.to('GetOfferTerms');
  }

  /**
   * Grants permission to retrieve information about a product
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_GetProduct.html
   */
  public toGetProduct() {
    return this.to('GetProduct');
  }

  /**
   * Grants permission to list fulfillment options for a product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_ListFulfillmentOptions.html
   */
  public toListFulfillmentOptions() {
    return this.to('ListFulfillmentOptions');
  }

  /**
   * Grants permission to list private offers
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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_ListPurchaseOptions.html
   */
  public toListPurchaseOptions() {
    return this.to('ListPurchaseOptions');
  }

  /**
   * Grants permission to search for facet values to filter listings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_SearchFacets.html
   */
  public toSearchFacets() {
    return this.to('SearchFacets');
  }

  /**
   * Grants permission to search for product listings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-discovery_SearchListings.html
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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
   *
   * @param catalogName - Identifier for the catalogName.
   * @param listingId - Identifier for the listingId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onListing(catalogName: string, listingId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/listing/${ listingId }`);
  }

  /**
   * Adds a resource of type AllListings to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
   *
   * @param catalogName - Identifier for the catalogName.
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAllListings(catalogName: string, resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/listing/${ resourceName }`);
  }

  /**
   * Adds a resource of type Offer to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
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
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
   *
   * @param catalogName - Identifier for the catalogName.
   * @param purchaseOptionId - Identifier for the purchaseOptionId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPurchaseOption(catalogName: string, purchaseOptionId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/purchaseOption/${ purchaseOptionId }`);
  }

  /**
   * Adds a resource of type AllPurchaseOptions to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/discovery-apis.html#discovery-data-model
   *
   * @param catalogName - Identifier for the catalogName.
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAllPurchaseOptions(catalogName: string, resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:::catalog/${ catalogName }/purchaseOption/${ resourceName }`);
  }
}
