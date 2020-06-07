import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service aws-marketplace
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceentitlementservice.html
 */
export class AwsMarketplaceEntitlementService extends PolicyStatement {
    public servicePrefix = 'aws-marketplace';
    public actions : Actions = {
        "GetEntitlements": {
            "url": "",
            "description": "Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions",
            "accessLevel": "Read"
        }
    };

    /**
     * Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions
     *
     * Access Level: Read
     *
     *
     */
    public getEntitlements () {
        this.add('aws-marketplace:GetEntitlements');
        return this;
    }
}
