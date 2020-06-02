import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service aws-marketplace
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceprocurementsystemsintegration.html
 */
export class AwsMarketplaceProcurementSystemsIntegration extends PolicyStatement {
    public servicePrefix = 'aws-marketplace';
    public actions : Actions = { "DescribeProcurementSystemConfiguration": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html", "description": "Describes the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.", "accessLevel": "Read" }, "PutProcurementSystemConfiguration": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html", "description": "Creates or updates the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.", "accessLevel": "Write" } };

    /**
     * Describes the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
     */
    public describeProcurementSystemConfiguration () {
        this.add('aws-marketplace:DescribeProcurementSystemConfiguration');
        return this;
    }

    /**
     * Creates or updates the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
     */
    public putProcurementSystemConfiguration () {
        this.add('aws-marketplace:PutProcurementSystemConfiguration');
        return this;
    }
}
