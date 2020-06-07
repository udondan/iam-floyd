import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service xray
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsx-ray.html
 */
export class Xray extends PolicyStatement {
    public servicePrefix = 'xray';
    public actions : Actions = {
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

    /**
     * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html
     */
    public batchGetTraces () {
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
    public createGroup () {
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
    public createSamplingRule () {
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
    public deleteGroup () {
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
    public deleteSamplingRule () {
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
    public getEncryptionConfig () {
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
    public getGroup () {
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
    public getGroups () {
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
    public getSamplingRules () {
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
    public getSamplingStatisticSummaries () {
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
    public getSamplingTargets () {
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
    public getServiceGraph () {
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
    public getTimeSeriesServiceStatistics () {
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
    public getTraceGraph () {
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
    public getTraceSummaries () {
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
    public putEncryptionConfig () {
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
    public putTelemetryRecords () {
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
    public putTraceSegments () {
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
    public updateGroup () {
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
    public updateSamplingRule () {
        this.add('xray:UpdateSamplingRule');
        return this;
    }
}
