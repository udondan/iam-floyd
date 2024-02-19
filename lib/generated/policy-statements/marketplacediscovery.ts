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
