import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [aws-marketplace-entitlement-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceentitlementservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceEntitlementService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-entitlement-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceentitlementservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions
   *
   * Access Level: Read
   */
  public toGetEntitlements() {
    return this.to('GetEntitlements');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetEntitlements'
    ]
  };
}
