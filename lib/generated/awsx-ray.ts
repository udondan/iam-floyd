import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [xray](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsx-ray.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Xray extends PolicyStatement {
  public servicePrefix = 'xray';
  protected actionList: Actions = {
    "BatchGetTraces": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html",
      "description": "Grants permission to retrieve a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs",
      "accessLevel": "List"
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html",
      "description": "Grants permission to create a group resource with a name and a filter expression",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html",
      "description": "Grants permission to create a rule to control sampling behavior for instrumented applications",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html",
      "description": "Grants permission to delete a group resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html",
      "description": "Grants permission to delete a sampling rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetEncryptionConfig": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html",
      "description": "Grants permission to retrieve the current encryption configuration for X-Ray data",
      "accessLevel": "Permissions management"
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html",
      "description": "Grants permission to retrieve group resource details",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetGroups": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html",
      "description": "Grants permission to retrieve all active group details",
      "accessLevel": "Read"
    },
    "GetInsight": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetInsight.html",
      "description": "Grants permission to retrieve the details of a specific insight",
      "accessLevel": "Read"
    },
    "GetInsightEvents": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetInsightEvents.html",
      "description": "Grants permission to retrieve the events of a specific insight",
      "accessLevel": "Read"
    },
    "GetInsightImpactGraph": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetInsightImpactGraph.html",
      "description": "Grants permission to retrieve the part of the service graph which is impacted for a specific insight",
      "accessLevel": "Read"
    },
    "GetInsightSummaries": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetInsightSummaries.html",
      "description": "Grants permission to retrieve the summary of all insights for a group and time range with optional filters",
      "accessLevel": "Read"
    },
    "GetSamplingRules": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html",
      "description": "Grants permission to retrieve all sampling rules",
      "accessLevel": "Read"
    },
    "GetSamplingStatisticSummaries": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html",
      "description": "Grants permission to retrieve information about recent sampling results for all sampling rules",
      "accessLevel": "Read"
    },
    "GetSamplingTargets": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html",
      "description": "Grants permission to request a sampling quota for rules that the service is using to sample requests",
      "accessLevel": "Read"
    },
    "GetServiceGraph": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html",
      "description": "Grants permission to retrieve a document that describes services that process incoming requests, and downstream services that they call as a result",
      "accessLevel": "Read"
    },
    "GetTimeSeriesServiceStatistics": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html",
      "description": "Grants permission to retrieve an aggregation of service statistics defined by a specific time range bucketed into time intervals",
      "accessLevel": "Read"
    },
    "GetTraceGraph": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html",
      "description": "Grants permission to retrieve a service graph for one or more specific trace IDs",
      "accessLevel": "Read"
    },
    "GetTraceSummaries": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html",
      "description": "Grants permission to retrieve IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for an X-Ray resource",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": false
        },
        "sampling-rule": {
          "required": false
        }
      }
    },
    "PutEncryptionConfig": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html",
      "description": "Grants permission to update the encryption configuration for X-Ray data",
      "accessLevel": "Permissions management"
    },
    "PutTelemetryRecords": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html",
      "description": "Grants permission to send AWS X-Ray daemon telemetry to the service",
      "accessLevel": "Write"
    },
    "PutTraceSegments": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html",
      "description": "Grants permission to upload segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_TagResource.html",
      "description": "Grants permission to add tags to an X-Ray resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": false
        },
        "sampling-rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_UntagResource.html",
      "description": "Grants permission to remove tags from an X-Ray resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "group": {
          "required": false
        },
        "sampling-rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html",
      "description": "Grants permission to update a group resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html",
      "description": "Grants permission to modify a sampling rule's configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups",
      "arn": "arn:${Partition}:xray:${Region}:${Account}:group/${GroupName}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "sampling-rule": {
      "name": "sampling-rule",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling",
      "arn": "arn:${Partition}:xray:${Region}:${Account}:sampling-rule/${SamplingRuleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [xray](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsx-ray.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html
   */
  public toBatchGetTraces() {
    this.add('xray:BatchGetTraces');
    return this;
  }

  /**
   * Grants permission to create a group resource with a name and a filter expression
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.add('xray:CreateGroup');
    return this;
  }

  /**
   * Grants permission to create a rule to control sampling behavior for instrumented applications
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html
   */
  public toCreateSamplingRule() {
    this.add('xray:CreateSamplingRule');
    return this;
  }

  /**
   * Grants permission to delete a group resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.add('xray:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to delete a sampling rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html
   */
  public toDeleteSamplingRule() {
    this.add('xray:DeleteSamplingRule');
    return this;
  }

  /**
   * Grants permission to retrieve the current encryption configuration for X-Ray data
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html
   */
  public toGetEncryptionConfig() {
    this.add('xray:GetEncryptionConfig');
    return this;
  }

  /**
   * Grants permission to retrieve group resource details
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html
   */
  public toGetGroup() {
    this.add('xray:GetGroup');
    return this;
  }

  /**
   * Grants permission to retrieve all active group details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html
   */
  public toGetGroups() {
    this.add('xray:GetGroups');
    return this;
  }

  /**
   * Grants permission to retrieve the details of a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsight.html
   */
  public toGetInsight() {
    this.add('xray:GetInsight');
    return this;
  }

  /**
   * Grants permission to retrieve the events of a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightEvents.html
   */
  public toGetInsightEvents() {
    this.add('xray:GetInsightEvents');
    return this;
  }

  /**
   * Grants permission to retrieve the part of the service graph which is impacted for a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightImpactGraph.html
   */
  public toGetInsightImpactGraph() {
    this.add('xray:GetInsightImpactGraph');
    return this;
  }

  /**
   * Grants permission to retrieve the summary of all insights for a group and time range with optional filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightSummaries.html
   */
  public toGetInsightSummaries() {
    this.add('xray:GetInsightSummaries');
    return this;
  }

  /**
   * Grants permission to retrieve all sampling rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html
   */
  public toGetSamplingRules() {
    this.add('xray:GetSamplingRules');
    return this;
  }

  /**
   * Grants permission to retrieve information about recent sampling results for all sampling rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html
   */
  public toGetSamplingStatisticSummaries() {
    this.add('xray:GetSamplingStatisticSummaries');
    return this;
  }

  /**
   * Grants permission to request a sampling quota for rules that the service is using to sample requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html
   */
  public toGetSamplingTargets() {
    this.add('xray:GetSamplingTargets');
    return this;
  }

  /**
   * Grants permission to retrieve a document that describes services that process incoming requests, and downstream services that they call as a result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html
   */
  public toGetServiceGraph() {
    this.add('xray:GetServiceGraph');
    return this;
  }

  /**
   * Grants permission to retrieve an aggregation of service statistics defined by a specific time range bucketed into time intervals
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html
   */
  public toGetTimeSeriesServiceStatistics() {
    this.add('xray:GetTimeSeriesServiceStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve a service graph for one or more specific trace IDs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html
   */
  public toGetTraceGraph() {
    this.add('xray:GetTraceGraph');
    return this;
  }

  /**
   * Grants permission to retrieve IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html
   */
  public toGetTraceSummaries() {
    this.add('xray:GetTraceSummaries');
    return this;
  }

  /**
   * Grants permission to list tags for an X-Ray resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('xray:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to update the encryption configuration for X-Ray data
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html
   */
  public toPutEncryptionConfig() {
    this.add('xray:PutEncryptionConfig');
    return this;
  }

  /**
   * Grants permission to send AWS X-Ray daemon telemetry to the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html
   */
  public toPutTelemetryRecords() {
    this.add('xray:PutTelemetryRecords');
    return this;
  }

  /**
   * Grants permission to upload segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html
   */
  public toPutTraceSegments() {
    this.add('xray:PutTraceSegments');
    return this;
  }

  /**
   * Grants permission to add tags to an X-Ray resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.add('xray:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from an X-Ray resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('xray:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a group resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.add('xray:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to modify a sampling rule's configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html
   */
  public toUpdateSamplingRule() {
    this.add('xray:UpdateSamplingRule');
    return this;
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups
   *
   * @param groupName - Identifier for the groupName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:xray:${Region}:${Account}:group/${GroupName}/${Id}';
    arn = arn.replace('${GroupName}', groupName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sampling-rule to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling
   *
   * @param samplingRuleName - Identifier for the samplingRuleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSamplingRule(samplingRuleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:xray:${Region}:${Account}:sampling-rule/${SamplingRuleName}';
    arn = arn.replace('${SamplingRuleName}', samplingRuleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toCreateSamplingRule()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * Applies to actions:
   * - .toDeleteGroup()
   * - .toDeleteSamplingRule()
   * - .toGetGroup()
   * - .toUpdateGroup()
   * - .toUpdateSamplingRule()
   *
   * Applies to resource types:
   * - group
   * - sampling-rule
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toCreateSamplingRule()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
