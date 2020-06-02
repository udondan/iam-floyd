import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service aws-marketplace
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsprivatemarketplace.html
 */
export class AwsMarketplacePrivate extends PolicyStatement {
    public servicePrefix = 'aws-marketplace';
    public actions : Actions = { "AssociateProductsWithPrivateMarketplace": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Adds new approved products to the Private Marketplace. Also allows to approve a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "CreatePrivateMarketplace": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Creates a Private Marketplace for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.", "accessLevel": "Write" }, "CreatePrivateMarketplaceProfile": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Creates a Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.", "accessLevel": "Write" }, "CreatePrivateMarketplaceRequests": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Creates a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "DescribePrivateMarketplaceProducts": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Describes the status of requested products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "List" }, "DescribePrivateMarketplaceProfile": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Describes details about the Private Marketplace Profile for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Read" }, "DescribePrivateMarketplaceRequests": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Describes requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "List" }, "DescribePrivateMarketplaceSettings": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Describes the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Read" }, "DescribePrivateMarketplaceStatus": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Describes the status of the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Read" }, "DisassociateProductsFromPrivateMarketplace": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Removes approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "ListPrivateMarketplaceProducts": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Queryable list for the products and status of products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "List" }, "ListPrivateMarketplaceRequests": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "List" }, "StartPrivateMarketplace": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Starts the Private Marketplace, enabling the customized AWS Marketplace experience, and enabling restrictions on the procurement of products based on what is available in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "StopPrivateMarketplace": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Stops the Private Marketplace, disabling the customized AWS Marketplace experience and removing the Private Marketplace procurement restrictions on products. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "UpdatePrivateMarketplaceProfile": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Updates the Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" }, "UpdatePrivateMarketplaceSettings": { "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html", "description": "Updates the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.", "accessLevel": "Write" } };

    /**
     * Adds new approved products to the Private Marketplace. Also allows to approve a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public associateProductsWithPrivateMarketplace () {
        this.add('aws-marketplace:AssociateProductsWithPrivateMarketplace');
        return this;
    }

    /**
     * Creates a Private Marketplace for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public createPrivateMarketplace () {
        this.add('aws-marketplace:CreatePrivateMarketplace');
        return this;
    }

    /**
     * Creates a Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public createPrivateMarketplaceProfile () {
        this.add('aws-marketplace:CreatePrivateMarketplaceProfile');
        return this;
    }

    /**
     * Creates a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public createPrivateMarketplaceRequests () {
        this.add('aws-marketplace:CreatePrivateMarketplaceRequests');
        return this;
    }

    /**
     * Describes the status of requested products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public describePrivateMarketplaceProducts () {
        this.add('aws-marketplace:DescribePrivateMarketplaceProducts');
        return this;
    }

    /**
     * Describes details about the Private Marketplace Profile for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public describePrivateMarketplaceProfile () {
        this.add('aws-marketplace:DescribePrivateMarketplaceProfile');
        return this;
    }

    /**
     * Describes requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public describePrivateMarketplaceRequests () {
        this.add('aws-marketplace:DescribePrivateMarketplaceRequests');
        return this;
    }

    /**
     * Describes the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public describePrivateMarketplaceSettings () {
        this.add('aws-marketplace:DescribePrivateMarketplaceSettings');
        return this;
    }

    /**
     * Describes the status of the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public describePrivateMarketplaceStatus () {
        this.add('aws-marketplace:DescribePrivateMarketplaceStatus');
        return this;
    }

    /**
     * Removes approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public disassociateProductsFromPrivateMarketplace () {
        this.add('aws-marketplace:DisassociateProductsFromPrivateMarketplace');
        return this;
    }

    /**
     * Queryable list for the products and status of products in the Private Marketplace for administrative purposes. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public listPrivateMarketplaceProducts () {
        this.add('aws-marketplace:ListPrivateMarketplaceProducts');
        return this;
    }

    /**
     * Queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public listPrivateMarketplaceRequests () {
        this.add('aws-marketplace:ListPrivateMarketplaceRequests');
        return this;
    }

    /**
     * Starts the Private Marketplace, enabling the customized AWS Marketplace experience, and enabling restrictions on the procurement of products based on what is available in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public startPrivateMarketplace () {
        this.add('aws-marketplace:StartPrivateMarketplace');
        return this;
    }

    /**
     * Stops the Private Marketplace, disabling the customized AWS Marketplace experience and removing the Private Marketplace procurement restrictions on products. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public stopPrivateMarketplace () {
        this.add('aws-marketplace:StopPrivateMarketplace');
        return this;
    }

    /**
     * Updates the Private Marketplace Profile that customizes the white label experience on the AWS Marketplace website for the individual account, or for the entire AWS Organization if one exists. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public updatePrivateMarketplaceProfile () {
        this.add('aws-marketplace:UpdatePrivateMarketplaceProfile');
        return this;
    }

    /**
     * Updates the Private Marketplace settings. This includes setting for enabling requests from end users and preferences for notifications. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
     */
    public updatePrivateMarketplaceSettings () {
        this.add('aws-marketplace:UpdatePrivateMarketplaceSettings');
        return this;
    }
}
