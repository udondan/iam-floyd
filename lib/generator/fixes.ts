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

export function arnFixer(
  service: string,
  resource: string,
  arn: string
): string {
  const splits = arn.split(':');

  // filling in blank region and account, as many doc pages leave them empty
  splits[3] = '${Region}';
  splits[4] = '${Account}';
  arn = splits.join(':');

  // valid patterns
  // arn:partition:service:region:account-id:resource-id
  // arn:partition:service:region:account-id:resource-type/resource-id
  // arn:partition:service:region:account-id:resource-type:resource-id
  var r = `arn:\\$\\{Partition\\}:[a-z0-9_-]+:(\\$\\{Region\\})?:\\$\\{(Account)\\}(:[a-z0-9_-]+)?((\\/|:)(\\$\\{[a-z0-9_-]+\\}|[a-z0-9_-]+))*(\\/|:)\\$\\{[a-z0-9_-]+\\}$`;
  var re = new RegExp(r, 'i');
  if (!arn.match(re)) {
    console.warn(
      `\nARN for ${service}:${resource} did not match allowed pattern, possibly error in documentation: ${arn}`
        .yellow
    );
  }
  return arn;
}
