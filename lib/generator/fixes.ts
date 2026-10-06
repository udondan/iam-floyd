import * as colors from 'colors/safe';

import { Condition } from './condition';

colors.enable();

export interface ConditionFix {
  /** Rewrites the condition key */
  key?: string;
  /** Overrides the name of the `if*()` method */
  methodName?: string;
  operator?: {
    /** Overrides the inferred operator type */
    type?: string;
    /** Sets `typeOverride` on the condition */
    override?: string[];
  };
}

export interface CdkRefFix {
  /** Module of `aws-cdk-lib/interfaces`, e.g. `aws_lambda`; defaults to the module of the service */
  module?: string;
  /** Reference interface, e.g. `IFunctionRef` */
  interface: string;
  /** Field of the reference with the ARN, e.g. `functionArn` */
  arn?: string;
  /** Field of the reference with the identifier in the required placeholder of the ARN */
  id?: string;
}

export interface ResourceTypeFix {
  /** Replaces the ARN */
  arn?: string;
  /** Sets the CDK reference interface the `on*()` method accepts, or `false` for none */
  cdkRef?: CdkRefFix | false;
}

export interface ServiceFixes {
  /** Skips the service */
  ignore?: boolean;
  /** Rewrites the filename and class name */
  name?: string;
  /** Rewrites the service prefix */
  service?: string;
  /** Module of `aws-cdk-lib/interfaces` with the reference interfaces, e.g. `aws_stepfunctions` */
  cdkModule?: string;
  resourceTypes?: Record<string, ResourceTypeFix>;
  conditions?: Record<string, ConditionFix>;
}

/**
 * Global definition of fixes we apply to the AWS docs
 *
 * The key of the struct must match the url slug
 *
 * Possible keys for the contained objects:
 *
 * name: rewrites the filename and class name. This is needed, because, in some cases, the docs have split up the documentation for the same service prefix on multiple pages
 * resourceTypes.$name.arn: Fixes ARN of the given resource type
 * resourceTypes.$name.cdkRef: Sets the CDK reference interface the `on*()` method of the resource type accepts, or `false` for none
 * cdkModule: Module of `aws-cdk-lib/interfaces` with the reference interfaces, if its name differs from the service prefix
 */
export const fixes: Record<string, ServiceFixes | undefined> = {
  'awsiot1-click': {
    ignore: true, // is EOL. the page exists but doesn't have the expected content format
  },
  portal: {
    name: 'billing-portal',
  },
  'marketplace-management': {
    name: 'marketplace-management-portal',
  },
  'external-anthropic': {
    name: 'anthropic',
  },
  cloudcontrol: {
    name: 'aws-cloud-control-api',
  },
  codebuild: {
    conditions: {
      environmentType: {
        methodName: 'ifFleetEnvironmentType',
      },
    },
  },
  ec2: {
    conditions: {
      ReplayWindowSizePackets: {
        operator: {
          type: 'numeric', // number of packets, like the other numeric options of VPN tunnels
        },
      },
      SnapshotTime: {
        operator: {
          type: 'date',
        },
      },
    },
  },
  glacier: {
    conditions: {
      ArchiveAgeInDays: {
        operator: {
          type: 'numeric', // AWS examples use NumericLessThanEquals
        },
      },
    },
  },
  iam: {
    conditions: {
      DelegationDuration: {
        operator: {
          type: 'numeric', // the IAM docs: works with numeric operators
        },
      },
    },
  },
  redshift: {
    conditions: {
      DurationSeconds: {
        operator: {
          type: 'numeric', // number of seconds until the credentials expire
        },
      },
    },
  },
  'pinpoint-email': {
    name: 'ses-pinpoint',
  },
  'marketplace-agreement': {
    name: 'aws-marketplace-agreement',
  },
  'marketplace-catalog': {
    name: 'aws-marketplace-catalog',
  },
  'marketplace-deployment': {
    name: 'aws-marketplace-deployment-service',
  },
  'marketplace-discovery': {
    name: 'aws-marketplace-discovery',
  },
  'marketplace-entitlement': {
    name: 'aws-marketplace-entitlement-service',
  },
  'marketplace-image-build': {
    name: 'aws-marketplace-image-building-service',
  },
  meteringmarketplace: {
    name: 'aws-marketplace-metering-service',
  },
  'marketplace-procurement-integration': {
    name: 'aws-marketplace-procurement-systems-integration',
  },
  'private-marketplace': {
    name: 'aws-marketplace-private',
  },
  'marketplace-reporting': {
    name: 'aws-marketplace-reporting',
  },
  'marketplace-seller-reporting': {
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
    resourceTypes: {
      Secret: {
        cdkRef: { interface: 'ISecretRef', arn: 'secretId' }, // Ref of AWS::SecretsManager::Secret is the ARN
      },
    },
  },
  route53profiles: {
    resourceTypes: {
      'profile-association': {
        cdkRef: {
          interface: 'IProfileAssociationRef',
          id: 'profileAssociationId',
        }, // resourceId is the VPC
      },
    },
  },
  route53resolver: {
    resourceTypes: {
      'resolver-config': {
        cdkRef: false, // resourceId is the VPC, not the ID of the resolver config
      },
    },
  },
  'application-autoscaling': {
    resourceTypes: {
      ScalableTarget: {
        cdkRef: false, // resourceId is the resource of the scalable target, not its ID
      },
    },
  },
  mailmanager: {
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
  acm: {
    cdkModule: 'aws_certificatemanager',
  },
  'cognito-identity': {
    cdkModule: 'aws_cognito',
  },
  'cognito-idp': {
    cdkModule: 'aws_cognito',
  },
  'customer-profiles': {
    cdkModule: 'aws_customerprofiles',
  },
  'devops-agent': {
    cdkModule: 'aws_devopsagent',
  },
  ds: {
    cdkModule: 'aws_directoryservice',
  },
  efs: {
    cdkModule: 'aws_efs',
  },
  emr: {
    cdkModule: 'aws_emr',
  },
  es: {
    cdkModule: 'aws_opensearchservice',
  },
  firehose: {
    cdkModule: 'aws_kinesisfirehose',
  },
  inspector2: {
    cdkModule: 'aws_inspectorv2',
  },
  iotdeviceadvisor: {
    cdkModule: 'aws_iotcoredeviceadvisor',
  },
  location: {
    cdkModule: 'aws_location',
  },
  macie2: {
    cdkModule: 'aws_macie',
  },
  'medical-imaging': {
    cdkModule: 'aws_healthimaging',
  },
  mq: {
    cdkModule: 'aws_amazonmq',
  },
  mwaa: {
    cdkModule: 'aws_mwaa',
  },
  'mwaa-serverless': {
    cdkModule: 'aws_mwaaserverless',
  },
  opensearchserverless: {
    cdkModule: 'aws_opensearchserverless',
  },
  pinpoint: {
    cdkModule: 'aws_pinpoint',
  },
  'route53-recovery-control-config': {
    cdkModule: 'aws_route53recoverycontrol',
  },
  schemas: {
    cdkModule: 'aws_eventschemas',
  },
  stepfunctions: {
    cdkModule: 'aws_stepfunctions',
  },
  'workspaces-thin-client': {
    cdkModule: 'aws_workspacesthinclient',
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

  const conditionFix = fixes[service]?.conditions?.[keyWithoutPrefix];
  const operatorType = conditionFix?.operator?.type;
  if (typeof operatorType !== 'undefined') {
    fixed = 2;
    condition.type = operatorType;
  }

  const operatorTypeOverride = conditionFix?.operator?.override;
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

  const keyOverride = fixes[service]?.conditions?.[key]?.key;
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
  if (/(:|\/)[a-zA-Z-]+(:|\/)\*$/.test(arn)) {
    arn = `${arn.slice(0, -1)}\${ResourceName}`;
    fixed = 2;
  }

  // Rekognition has a duplicate parameter in the ARN. here we append a number to duplicate parameter names
  const duplicates: Record<string, number> = {};
  arn = arn.replace(/\$\{([A-Za-z]+)\}/g, (_, param: string): string => {
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
  const value = fixes[service]?.resourceTypes?.[resource]?.arn;
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
    !re.test(arn)
  ) {
    const message = `\nARN for ${service}:${resource} did not match allowed pattern, possibly error in documentation: ${arn}`;
    console.warn(colors.black(colors.bgYellow(message)));
  }
  return arn;
}

export function serviceFixer(service: string): string {
  const override = fixes[service]?.service;
  if (override) {
    service = override;
  }
  return service;
}
