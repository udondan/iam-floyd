import { get } from 'lodash';

import { Condition } from './condition';

var colors = require('colors/safe');

colors.enable();
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
 * resourceTypes.$name.arn: Fixes ARN of the given resource type
 */
export const fixes: Fixes = {
  amazonec2: {
    conditions: {
      SnapshotTime: {
        operator: {
          type: 'date',
        },
      },
    },
  },
  amazonmanagedstreamingforkafka: {
    service: 'amazonmanagedstreamingforapachekafka', // page has been renamed. this needs to stay until this is fixed: https://github.com/awsdocs/iam-user-guide/pull/200
  },
  amazonkinesisanalyticsv2: {
    id: 'kinesisanalytics-v2',
  },
  amazonpinpointemailservice: {
    id: 'ses-pinpoint',
  },
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
  awsprivatemarketplace: {
    id: 'aws-marketplace-private',
  },
  backup: {
    resourceTypes: {
      recoveryPoint: {
        arn:
          'arn:${Partition}:backup:${Region}:${Account}:recovery-point:${RecoveryPointId}',
      },
    },
  },
  cassandra: {
    resourceTypes: {
      keyspace: {
        arn:
          'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}',
      },
    },
  },
  'codeguru-reviewer': {
    resourceTypes: {
      codereview: {
        arn:
          'arn:${Partition}:codeguru-reviewer:${Region}:${Account}:code-review:${CodeReviewUuid}',
      },
    },
  },
  codestar: {
    resourceTypes: {
      user: {
        arn:
          'arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}',
      },
    },
  },
  deepracer: {
    resourceTypes: {
      evaluation_job: {
        arn:
          'arn:${Partition}:deepracer:${Region}:${Account}:evaluation_job/${ResourceId}',
      },
    },
  },
  elasticloadbalancingv2: {
    id: 'elasticloadbalancing-v2',
  },
  events: {
    resourceTypes: {
      rule: {
        arn: 'arn:${Partition}:events:${Region}:${Account}:rule/${RuleName}',
      },
    },
  },
  health: {
    resourceTypes: {
      event: {
        arn:
          'arn:${Partition}:health:${Region}:${Account}:event/${Service}/${EventTypeCode}/${EventTypePlusId}',
      },
    },
  },
  'neptune-db': {
    resourceTypes: {
      database: {
        arn:
          'arn:${Partition}:neptune-db:${Region}:${Account}:${Cluster}/${Database}',
      },
    },
  },
  ssm: {
    resourceTypes: {
      'automation-definition': {
        arn:
          'arn:${Partition}:ssm:${Region}:${Account}:automation-definition/${AutomationDefinitionName}:${VersionId}',
      },
    },
  },
  wafv2: {
    resourceTypes: {
      apigateway: {
        arn:
          'arn:${Partition}:apigateway:${Region}:${Account}:/restapis/${ApiId}/stages/${StageName}',
      },
    },
  },
};

export function conditionFixer(
  service: string,
  condition: Condition
): Condition {
  var fixed = 0;

  const type = condition.type.toLowerCase();
  if (type == 'arrayofstring') {
    fixed = 1;
    condition.type = 'string';
  } else if (type == 'long') {
    fixed = 1;
    condition.type = 'numeric';
  }

  const key = condition.key.split(':')[1];
  const operatorType = get(fixes, `${service}.conditions.${key}.operator.type`);
  if (typeof operatorType !== 'undefined') {
    fixed = 2;
    condition.type = operatorType;
  }

  if (fixed > 0) {
    process.stdout.write(
      colors.yellow(`[L${fixed} fix for condition ${key}] `)
    );
  }
  return condition;
}

export function arnFixer(
  service: string,
  resource: string,
  arn: string
): string {
  var fixed = 0;

  // ensure all ARN placeholders start with an uppercase letter
  arn = arn.replace(/\$\{([a-z])/g, function (_, first: string) {
    fixed = 1;
    return `\${${first.toUpperCase()}`;
  });

  // fix ARNs that have wildcards instead of identifiers
  if (arn.match(/(:|\/)[a-zA-Z-]+(:|\/)\*$/)) {
    arn = arn.slice(0, -1) + '${ResourceName}';
    var fixed = 2;
  }

  // fix ARNs specified in the global fixes object above
  const value = get(fixes, `${service}.resourceTypes.${resource}.arn`);
  if (typeof value !== 'undefined') {
    fixed = 3;
    arn = value;
  }

  if (fixed > 0) {
    process.stdout.write(
      colors.yellow(`[L${fixed} fix for resource type ${resource}] `)
    );
  }

  // valid patterns:
  // arn:partition:service:region:account-id:resource-id
  // arn:partition:service:region:account-id:resource-type/resource-id
  // arn:partition:service:region:account-id:resource-type:resource-id
  var r = `arn:\\$\\{Partition\\}:[a-z0-9_-]+:(\\$\\{Region\\})?:(\\$\\{((Master)?Account(Id)?)\\})?(:[a-z0-9_-]*)?((\\/|:)(((o|h|ou|p|r)-)?\\$\\{[a-z0-9_-]+\\}|[a-z0-9_-]+))*(\\/|:)((o|h|ou|p|r)-)?\\$\\{[a-z0-9_-]+\\}$`;
  var re = new RegExp(r, 'i');
  const notMatchingButValid = [
    'glue:catalog', // has no identifier, there only is one catalog, identified by region & account
    'opsworks:stack', //the ONLY ARN in AWS with a trailing slash
    'securityhub:hub', // has no identifier, there only is one hub, identified by region & account
    'greengrass:connectivityInfo', // identified by the ${ThingName}
  ];
  if (
    !notMatchingButValid.includes(`${service}:${resource}`) &&
    !arn.match(re)
  ) {
    const message = `\nARN for ${service}:${resource} did not match allowed pattern, possibly error in documentation: ${arn}`;
    console.warn(colors.bgYellow.black(message));
  }
  return arn;
}

export function serviceFixer(service): string {
  if (service in fixes && 'service' in fixes[service]) {
    service = fixes[service].service;
  }
  return service;
}
