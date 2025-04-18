import { get } from 'lodash';

import { Condition } from './condition';

const colors = require('colors/safe');

colors.enable();
type Fixes = Record<string, any>;

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
  'awsiot1-click': {
    ignore: true, // is EOL. the page exists but doesn't have the expected content format
  },
  cloudcontrolapi: {
    name: 'aws-cloud-control-api',
  },
  ec2: {
    conditions: {
      SnapshotTime: {
        operator: {
          type: 'date',
        },
      },
    },
  },
  pinpointemailservice: {
    name: 'ses-pinpoint',
  },
  marketplacecatalog: {
    name: 'aws-marketplace-catalog',
  },
  marketplacedeploymentservice: {
    name: 'aws-marketplace-deployment-service',
  },
  marketplacediscovery: {
    name: 'aws-marketplace-discovery',
  },
  marketplaceentitlementservice: {
    name: 'aws-marketplace-entitlement-service',
  },
  marketplaceimagebuildingservice: {
    name: 'aws-marketplace-image-building-service',
  },
  marketplacemeteringservice: {
    name: 'aws-marketplace-metering-service',
  },
  marketplaceprocurementsystemsintegration: {
    name: 'aws-marketplace-procurement-systems-integration',
  },
  marketplaceprivatemarketplace: {
    name: 'aws-marketplace-private',
  },
  marketplacereporting: {
    name: 'aws-marketplace-reporting',
  },
  marketplacesellerreporting: {
    name: 'aws-marketplace-seller-reporting',
  },
  backup: {
    resourceTypes: {
      recoveryPoint: {
        arn: 'arn:${Partition}:backup:${Region}:${Account}:recovery-point:${RecoveryPointId}',
      },
    },
  },
  cassandra: {
    resourceTypes: {
      keyspace: {
        arn: 'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}',
      },
    },
  },
  'codeguru-reviewer': {
    resourceTypes: {
      codereview: {
        arn: 'arn:${Partition}:codeguru-reviewer:${Region}:${Account}:code-review:${CodeReviewUuid}',
      },
    },
  },
  codestar: {
    resourceTypes: {
      user: {
        arn: 'arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}',
      },
    },
  },
  deepracer: {
    resourceTypes: {
      evaluation_job: {
        arn: 'arn:${Partition}:deepracer:${Region}:${Account}:evaluation_job/${ResourceId}',
      },
    },
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
        arn: 'arn:${Partition}:health:${Region}:${Account}:event/${Service}/${EventTypeCode}/${EventTypePlusId}',
      },
    },
  },
  'neptune-db': {
    resourceTypes: {
      database: {
        arn: 'arn:${Partition}:neptune-db:${Region}:${Account}:${Cluster}/${Database}',
      },
    },
  },
  secretsmanager: {
    conditions: {
      'RequestTag/tag-key': {
        key: 'RequestTag/${TagKey}',
      },
      'ResourceTag/tag-key': {
        key: 'ResourceTag/${TagKey}',
      },
      'resource/AllowRotationLambdaArn': {
        key: 'resource/${AllowRotationLambdaArn}',
      },
    },
  },
  'simpleemailservice-mailmanager': {
    name: 'ses-mailmanager',
  },
  ssm: {
    conditions: {
      'resourceTag/tag-key': {
        key: 'resourceTag/${TagKey}',
      },
    },
    resourceTypes: {
      'automation-definition': {
        arn: 'arn:${Partition}:ssm:${Region}:${Account}:automation-definition/${AutomationDefinitionName}:${VersionId}',
      },
    },
  },
  wafv2: {
    resourceTypes: {
      apigateway: {
        arn: 'arn:${Partition}:apigateway:${Region}:${Account}:/restapis/${ApiId}/stages/${StageName}',
      },
    },
  },
};

export function conditionFixer(
  service: string,
  condition: Condition,
): Condition {
  let fixed = 0;
  const type = condition.type.toLowerCase();
  if (type == 'arrayofstring') {
    fixed = 1;
    condition.type = 'string';
  } else if (type == 'arrayofarn') {
    fixed = 1;
    condition.type = 'ARN';
  } else if (type == 'arrayofnumeric') {
    fixed = 1;
    condition.type = 'numeric';
  } else if (type == 'arrayofbool' || type == 'bool') {
    fixed = 1;
    condition.type = 'boolean';
  } else if (type == 'long') {
    fixed = 1;
    condition.type = 'numeric';
  }

  const keyOverride = conditionKeyFixer(service, condition.key);
  if (condition.key !== keyOverride) {
    fixed = 2;
    condition.key = keyOverride;
  }
  const keySplit = condition.key.split(':');
  const keyWithoutPrefix = keySplit[keySplit.length - 1];

  const operatorType = get(
    fixes,
    `${service}.conditions.${keyWithoutPrefix}.operator.type`,
  );
  if (typeof operatorType !== 'undefined') {
    fixed = 2;
    condition.type = operatorType;
  }

  const operatorTypeOverride = get(
    fixes,
    `${service}.conditions.${keyWithoutPrefix}.operator.override`,
  );
  if (typeof operatorTypeOverride !== 'undefined') {
    fixed = 2;
    condition.typeOverride = operatorTypeOverride;
  }

  if (fixed > 0) {
    process.stdout.write(
      colors.yellow(`[L${fixed} fix for condition ${keyWithoutPrefix}] `),
    );
  }
  return condition;
}

export function conditionKeyFixer(service: string, key: string): string {
  const split = key.split(':');
  key = split[1];

  const keyOverride = get(fixes, `${service}.conditions.${key}.key`);
  if (typeof keyOverride !== 'undefined') {
    return `${split[0]}:${keyOverride}`;
  }

  return `${split[0]}:${key}`;
}

export function arnFixer(
  service: string,
  resource: string,
  arn: string,
): string {
  let fixed = 0;

  // ensure all ARN placeholders start with an uppercase letter
  arn = arn.replace(/\$\{([a-z])/g, function (_, first: string) {
    fixed = 1;
    return `\${${first.toUpperCase()}`;
  });

  // fix ARNs that have wildcards instead of identifiers
  if (arn.match(/(:|\/)[a-zA-Z-]+(:|\/)\*$/)) {
    arn = `${arn.slice(0, -1)}\${ResourceName}`;
    fixed = 2;
  }

  // Rekognition has a duplicate parameter in the ARN. here we append a number to duplicate parameter names
  const duplicates: Record<string, number> = {};
  arn = arn.replace(/\$\{([A-Za-z]+)\}/g, (_, param): string => {
    if (!duplicates[param]) {
      duplicates[param] = 1;
    } else {
      duplicates[param]++;
    }
    if (duplicates[param] > 1) {
      param += duplicates[param];
      fixed = 2;
    }
    return `\${${param}}`;
  });

  // fix ARNs specified in the global fixes object above
  const value = get(fixes, `${service}.resourceTypes.${resource}.arn`);
  if (typeof value !== 'undefined') {
    fixed = 3;
    arn = value;
  }

  if (fixed > 0) {
    process.stdout.write(
      colors.yellow(`[L${fixed} fix for resource type ${resource}] `),
    );
  }

  // valid patterns:
  // arn:partition:service:region:account-id:resource-id
  // arn:partition:service:region:account-id:resource-type/resource-id
  // arn:partition:service:region:account-id:resource-type:resource-id
  const r = `arn:\\$\\{Partition\\}:[a-z0-9_-]+:(\\$\\{Region\\})?:(\\$\\{((Master)?Account(Id)?)\\})?(:[a-z0-9_-]*)?((\\/|:)(((o|h|ou|p|r)-)?\\$\\{[a-z0-9_-]+\\}|[a-z0-9_-]+))*(\\/|:)((o|h|ou|p|r)-)?\\$\\{[a-z0-9_-]+\\}$`;
  const re = new RegExp(r, 'i');
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

export function serviceFixer(service: string): string {
  if (service in fixes && 'service' in fixes[service]) {
    service = fixes[service].service;
  }
  return service;
}
