interface Fixes {
    [key: string]: any;
}

/**
 * Global definition of fixes we apply to the AWS docs
 *
 * The key of the struct must match the url slug
 *
 * Possible keys for the contained objects:
 *
 * id: rewrites the filename and class name. This is needed, because, in some cases, the docs have split up the documentation for the same service prefix on multiple pages
 */
export const fixes: Fixes = {
    awsmarketplacecatalog: {
        id: 'aws-marketplace-catalog',
    },
    awsmarketplaceentitlementservice: {
        id: 'aws-marketplace-entitlement-service',
    },
    awsmarketplaceimagebuildingservice: {
        id: 'aws-marketplace-image-building-service',
    },
    awsmarketplacemeteringservice: {
        id: 'aws-marketplace-metering-service',
    },
    awsmarketplaceprocurementsystemsintegration: {
        id: 'aws-marketplace-procurement-systems-integration',
    },
    amazonkinesisanalyticsv2: {
        id: 'kinesisanalytics-v2',
    },
    amazonpinpointemailservice: {
        id: 'ses-pinpoint',
    },
    awsprivatemarketplace: {
        id: 'aws-marketplace-private',
    },
    elasticloadbalancingv2: {
        id: 'elasticloadbalancing-v2',
    },
};
