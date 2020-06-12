import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service logs
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html
 */
export class Logs extends PolicyStatement {
  public servicePrefix = 'logs';
  public actions : Actions = {
    "AssociateKmsKey": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html",
      "description": "Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "CancelExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html",
      "description": "Cancels an export task if it is in PENDING or RUNNING state",
      "accessLevel": "Write"
    },
    "CreateExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html",
      "description": "Creates an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "CreateLogDelivery": {
      "url": "",
      "description": "Creates the log delivery",
      "accessLevel": "Write"
    },
    "CreateLogGroup": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html",
      "description": "Creates a new log group with the specified name",
      "accessLevel": "Write"
    },
    "CreateLogStream": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html",
      "description": "Creates a new log stream with the specified name",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DeleteDestination": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html",
      "description": "Deletes the destination with the specified name and eventually disables all the subscription filters that publish to it",
      "accessLevel": "Write"
    },
    "DeleteLogDelivery": {
      "url": "",
      "description": "Deletes the log delivery information for specified log delivery",
      "accessLevel": "Write"
    },
    "DeleteLogGroup": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html",
      "description": "Deletes the log group with the specified name and permanently deletes all the archived log events associated with it",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DeleteLogStream": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html",
      "description": "Deletes a log stream and permanently deletes all the archived log events associated with it",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-stream": {
          "required": true
        }
      }
    },
    "DeleteMetricFilter": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html",
      "description": "Deletes a metric filter associated with the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DeleteResourcePolicy": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html",
      "description": "Deletes a resource policy from this account",
      "accessLevel": "Write"
    },
    "DeleteRetentionPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html",
      "description": "Deletes the retention policy of the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DeleteSubscriptionFilter": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html",
      "description": "Deletes a subscription filter associated with the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DescribeDestinations": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html",
      "description": "Returns all the destinations that are associated with the AWS account making the request",
      "accessLevel": "List"
    },
    "DescribeExportTasks": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html",
      "description": "Returns all the export tasks that are associated with the AWS account making the request",
      "accessLevel": "List"
    },
    "DescribeLogGroups": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html",
      "description": "Returns all the log groups that are associated with the AWS account making the request",
      "accessLevel": "List",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DescribeLogStreams": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html",
      "description": "Returns all the log streams that are associated with the specified log group",
      "accessLevel": "List",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DescribeMetricFilters": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html",
      "description": "Returns all the metrics filters associated with the specified log group",
      "accessLevel": "List",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DescribeQueries": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html",
      "description": "Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.",
      "accessLevel": "List"
    },
    "DescribeResourcePolicies": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html",
      "description": "Return all the resource policies in this account.",
      "accessLevel": "List"
    },
    "DescribeSubscriptionFilters": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html",
      "description": "Returns all the subscription filters associated with the specified log group",
      "accessLevel": "List",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "DisassociateKmsKey": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html",
      "description": "Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "FilterLogEvents": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html",
      "description": "Retrieves log events, optionally filtered by a filter pattern from the specified log group",
      "accessLevel": "Read",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "GetLogDelivery": {
      "url": "",
      "description": "Gets the log delivery information for specified log delivery",
      "accessLevel": "Read"
    },
    "GetLogEvents": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html",
      "description": "Retrieves log events from the specified log stream",
      "accessLevel": "Read",
      "resourceTypes": {
        "log-stream": {
          "required": true
        }
      }
    },
    "GetLogGroupFields": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html",
      "description": "Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.",
      "accessLevel": "Read",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "GetLogRecord": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html",
      "description": "Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs.",
      "accessLevel": "Read"
    },
    "GetQueryResults": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html",
      "description": "Returns the results from the specified query. If the query is in progress, partial results of that current execution are returned. Only the fields requested in the query are returned.",
      "accessLevel": "Read"
    },
    "ListLogDeliveries": {
      "url": "",
      "description": "Lists all the log deliveries for specified account and/or log source",
      "accessLevel": "List"
    },
    "ListTagsLogGroup": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html",
      "description": "Lists the tags for the specified log group",
      "accessLevel": "List",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "PutDestination": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html",
      "description": "Creates or updates a Destination",
      "accessLevel": "Write"
    },
    "PutDestinationPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html",
      "description": "Creates or updates an access policy associated with an existing Destination",
      "accessLevel": "Write"
    },
    "PutLogEvents": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html",
      "description": "Uploads a batch of log events to the specified log stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-stream": {
          "required": true
        }
      }
    },
    "PutMetricFilter": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html",
      "description": "Creates or updates a metric filter and associates it with the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "PutResourcePolicy": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html",
      "description": "Creates or updates a resource policy allowing other AWS services to put log events to this account",
      "accessLevel": "Write"
    },
    "PutRetentionPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html",
      "description": "Sets the retention of the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "PutSubscriptionFilter": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html",
      "description": "Creates or updates a subscription filter and associates it with the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "StartQuery": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html",
      "description": "Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.",
      "accessLevel": "Read",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "StopQuery": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html",
      "description": "Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.",
      "accessLevel": "Read"
    },
    "TagLogGroup": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html",
      "description": "Adds or updates the specified tags for the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "TestMetricFilter": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html",
      "description": "Tests the filter pattern of a metric filter against a sample of log event messages",
      "accessLevel": "Read"
    },
    "UntagLogGroup": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html",
      "description": "Removes the specified tags from the specified log group",
      "accessLevel": "Write",
      "resourceTypes": {
        "log-group": {
          "required": true
        }
      }
    },
    "UpdateLogDelivery": {
      "url": "",
      "description": "Updates the log delivery information for specified log delivery",
      "accessLevel": "Write"
    }
  };

  /**
   * Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   */
  public associateKmsKey () {
    this.add('logs:AssociateKmsKey');
    return this;
  }

  /**
   * Cancels an export task if it is in PENDING or RUNNING state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  public cancelExportTask () {
    this.add('logs:CancelExportTask');
    return this;
  }

  /**
   * Creates an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   */
  public createExportTask () {
    this.add('logs:CreateExportTask');
    return this;
  }

  /**
   * Creates the log delivery
   *
   * Access Level: Write
   */
  public createLogDelivery () {
    this.add('logs:CreateLogDelivery');
    return this;
  }

  /**
   * Creates a new log group with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   */
  public createLogGroup () {
    this.add('logs:CreateLogGroup');
    return this;
  }

  /**
   * Creates a new log stream with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   */
  public createLogStream () {
    this.add('logs:CreateLogStream');
    return this;
  }

  /**
   * Deletes the destination with the specified name and eventually disables all the subscription filters that publish to it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  public deleteDestination () {
    this.add('logs:DeleteDestination');
    return this;
  }

  /**
   * Deletes the log delivery information for specified log delivery
   *
   * Access Level: Write
   */
  public deleteLogDelivery () {
    this.add('logs:DeleteLogDelivery');
    return this;
  }

  /**
   * Deletes the log group with the specified name and permanently deletes all the archived log events associated with it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   */
  public deleteLogGroup () {
    this.add('logs:DeleteLogGroup');
    return this;
  }

  /**
   * Deletes a log stream and permanently deletes all the archived log events associated with it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   */
  public deleteLogStream () {
    this.add('logs:DeleteLogStream');
    return this;
  }

  /**
   * Deletes a metric filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   */
  public deleteMetricFilter () {
    this.add('logs:DeleteMetricFilter');
    return this;
  }

  /**
   * Deletes a resource policy from this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public deleteResourcePolicy () {
    this.add('logs:DeleteResourcePolicy');
    return this;
  }

  /**
   * Deletes the retention policy of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public deleteRetentionPolicy () {
    this.add('logs:DeleteRetentionPolicy');
    return this;
  }

  /**
   * Deletes a subscription filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   */
  public deleteSubscriptionFilter () {
    this.add('logs:DeleteSubscriptionFilter');
    return this;
  }

  /**
   * Returns all the destinations that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  public describeDestinations () {
    this.add('logs:DescribeDestinations');
    return this;
  }

  /**
   * Returns all the export tasks that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  public describeExportTasks () {
    this.add('logs:DescribeExportTasks');
    return this;
  }

  /**
   * Returns all the log groups that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   */
  public describeLogGroups () {
    this.add('logs:DescribeLogGroups');
    return this;
  }

  /**
   * Returns all the log streams that are associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   */
  public describeLogStreams () {
    this.add('logs:DescribeLogStreams');
    return this;
  }

  /**
   * Returns all the metrics filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   */
  public describeMetricFilters () {
    this.add('logs:DescribeMetricFilters');
    return this;
  }

  /**
   * Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  public describeQueries () {
    this.add('logs:DescribeQueries');
    return this;
  }

  /**
   * Return all the resource policies in this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  public describeResourcePolicies () {
    this.add('logs:DescribeResourcePolicies');
    return this;
  }

  /**
   * Returns all the subscription filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   */
  public describeSubscriptionFilters () {
    this.add('logs:DescribeSubscriptionFilters');
    return this;
  }

  /**
   * Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   */
  public disassociateKmsKey () {
    this.add('logs:DisassociateKmsKey');
    return this;
  }

  /**
   * Retrieves log events, optionally filtered by a filter pattern from the specified log group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   */
  public filterLogEvents () {
    this.add('logs:FilterLogEvents');
    return this;
  }

  /**
   * Gets the log delivery information for specified log delivery
   *
   * Access Level: Read
   */
  public getLogDelivery () {
    this.add('logs:GetLogDelivery');
    return this;
  }

  /**
   * Retrieves log events from the specified log stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   */
  public getLogEvents () {
    this.add('logs:GetLogEvents');
    return this;
  }

  /**
   * Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   */
  public getLogGroupFields () {
    this.add('logs:GetLogGroupFields');
    return this;
  }

  /**
   * Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  public getLogRecord () {
    this.add('logs:GetLogRecord');
    return this;
  }

  /**
   * Returns the results from the specified query. If the query is in progress, partial results of that current execution are returned. Only the fields requested in the query are returned.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  public getQueryResults () {
    this.add('logs:GetQueryResults');
    return this;
  }

  /**
   * Lists all the log deliveries for specified account and/or log source
   *
   * Access Level: List
   */
  public listLogDeliveries () {
    this.add('logs:ListLogDeliveries');
    return this;
  }

  /**
   * Lists the tags for the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   */
  public listTagsLogGroup () {
    this.add('logs:ListTagsLogGroup');
    return this;
  }

  /**
   * Creates or updates a Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html
   */
  public putDestination () {
    this.add('logs:PutDestination');
    return this;
  }

  /**
   * Creates or updates an access policy associated with an existing Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  public putDestinationPolicy () {
    this.add('logs:PutDestinationPolicy');
    return this;
  }

  /**
   * Uploads a batch of log events to the specified log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   */
  public putLogEvents () {
    this.add('logs:PutLogEvents');
    return this;
  }

  /**
   * Creates or updates a metric filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   */
  public putMetricFilter () {
    this.add('logs:PutMetricFilter');
    return this;
  }

  /**
   * Creates or updates a resource policy allowing other AWS services to put log events to this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  public putResourcePolicy () {
    this.add('logs:PutResourcePolicy');
    return this;
  }

  /**
   * Sets the retention of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   */
  public putRetentionPolicy () {
    this.add('logs:PutRetentionPolicy');
    return this;
  }

  /**
   * Creates or updates a subscription filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html
   */
  public putSubscriptionFilter () {
    this.add('logs:PutSubscriptionFilter');
    return this;
  }

  /**
   * Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   */
  public startQuery () {
    this.add('logs:StartQuery');
    return this;
  }

  /**
   * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  public stopQuery () {
    this.add('logs:StopQuery');
    return this;
  }

  /**
   * Adds or updates the specified tags for the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   */
  public tagLogGroup () {
    this.add('logs:TagLogGroup');
    return this;
  }

  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  public testMetricFilter () {
    this.add('logs:TestMetricFilter');
    return this;
  }

  /**
   * Removes the specified tags from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   */
  public untagLogGroup () {
    this.add('logs:UntagLogGroup');
    return this;
  }

  /**
   * Updates the log delivery information for specified log delivery
   *
   * Access Level: Write
   */
  public updateLogDelivery () {
    this.add('logs:UpdateLogDelivery');
    return this;
  }
}
