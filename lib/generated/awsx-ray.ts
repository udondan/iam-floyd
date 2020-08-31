import { Actions, PolicyStatement, ResourceTypes } from "../shared";

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
      "description": "Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.",
      "accessLevel": "Read"
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html",
      "description": "Creates a group resource with a name and a filter expression.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html",
      "description": "Creates a rule to control sampling behavior for instrumented applications.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      }
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html",
      "description": "Deletes a group resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DeleteSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html",
      "description": "Deletes a sampling rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      }
    },
    "GetEncryptionConfig": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html",
      "description": "Retrieves the current encryption configuration for X-Ray data.",
      "accessLevel": "Permissions management"
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html",
      "description": "Retrieves group resource details.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroups": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html",
      "description": "Retrieves all active group details.",
      "accessLevel": "Read"
    },
    "GetSamplingRules": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html",
      "description": "Retrieves all sampling rules.",
      "accessLevel": "Read"
    },
    "GetSamplingStatisticSummaries": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html",
      "description": "Retrieves information about recent sampling results for all sampling rules.",
      "accessLevel": "Read"
    },
    "GetSamplingTargets": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html",
      "description": "Requests a sampling quota for rules that the service is using to sample requests.",
      "accessLevel": "Read"
    },
    "GetServiceGraph": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html",
      "description": "Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result.",
      "accessLevel": "Read"
    },
    "GetTimeSeriesServiceStatistics": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html",
      "description": "Get an aggregation of service statistics defined by a specific time range bucketed into time intervals.",
      "accessLevel": "Read"
    },
    "GetTraceGraph": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html",
      "description": "Retrieves a service graph for one or more specific trace IDs.",
      "accessLevel": "Read"
    },
    "GetTraceSummaries": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html",
      "description": "Retrieves IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces.",
      "accessLevel": "Read"
    },
    "PutEncryptionConfig": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html",
      "description": "Updates the encryption configuration for X-Ray data.",
      "accessLevel": "Permissions management"
    },
    "PutTelemetryRecords": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html",
      "description": "Used by the AWS X-Ray daemon to send telemetry to the service.",
      "accessLevel": "Write"
    },
    "PutTraceSegments": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html",
      "description": "Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches.",
      "accessLevel": "Write"
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html",
      "description": "Updates a group resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateSamplingRule": {
      "url": "https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html",
      "description": "Modifies a sampling rule's configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sampling-rule": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups",
      "arn": "arn:${Partition}:xray:${Region}:${Account}:group/${GroupName}/${Id}",
      "conditionKeys": []
    },
    "sampling-rule": {
      "name": "sampling-rule",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling",
      "arn": "arn:${Partition}:xray:${Region}:${Account}:sampling-rule/${SamplingRuleName}",
      "conditionKeys": []
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
   * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html
   */
  public toBatchGetTraces() {
    this.add('xray:BatchGetTraces');
    return this;
  }

  /**
   * Creates a group resource with a name and a filter expression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.add('xray:CreateGroup');
    return this;
  }

  /**
   * Creates a rule to control sampling behavior for instrumented applications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html
   */
  public toCreateSamplingRule() {
    this.add('xray:CreateSamplingRule');
    return this;
  }

  /**
   * Deletes a group resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.add('xray:DeleteGroup');
    return this;
  }

  /**
   * Deletes a sampling rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html
   */
  public toDeleteSamplingRule() {
    this.add('xray:DeleteSamplingRule');
    return this;
  }

  /**
   * Retrieves the current encryption configuration for X-Ray data.
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
   * Retrieves group resource details.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html
   */
  public toGetGroup() {
    this.add('xray:GetGroup');
    return this;
  }

  /**
   * Retrieves all active group details.
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
   * Retrieves all sampling rules.
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
   * Retrieves information about recent sampling results for all sampling rules.
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
   * Requests a sampling quota for rules that the service is using to sample requests.
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
   * Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result.
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
   * Get an aggregation of service statistics defined by a specific time range bucketed into time intervals.
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
   * Retrieves a service graph for one or more specific trace IDs.
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
   * Retrieves IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces.
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
   * Updates the encryption configuration for X-Ray data.
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
   * Used by the AWS X-Ray daemon to send telemetry to the service.
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
   * Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches.
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
   * Updates a group resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.add('xray:UpdateGroup');
    return this;
  }

  /**
   * Modifies a sampling rule's configuration.
   *
   * Access Level: Write
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
   */
  public onSamplingRule(samplingRuleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:xray:${Region}:${Account}:sampling-rule/${SamplingRuleName}';
    arn = arn.replace('${SamplingRuleName}', samplingRuleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
