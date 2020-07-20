import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-marketplace-entitlement-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceentitlementservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceEntitlementService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-entitlement-service';
  protected actionList: Actions = {
    "GetEntitlements": {
      "url": "",
      "description": "Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [aws-marketplace-entitlement-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceentitlementservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions
   *
   * Access Level: Read
   */
  public getEntitlements() {
    this.add('aws-marketplace-entitlement-service:GetEntitlements');
    return this;
  }
}
