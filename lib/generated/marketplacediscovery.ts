import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [aws-marketplace-discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacediscovery.html).
 *
 * @param options - Options for the statement
 */
export class AwsMarketplaceDiscovery extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacediscovery.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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

  protected accessLevelList: AccessLevelList = {
    List: [
      'ListPrivateListings'
    ]
  };
}
