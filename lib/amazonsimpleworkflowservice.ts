import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service swf
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
 */
export class Swf extends PolicyStatement {
  public servicePrefix = 'swf';
  public actions: Actions = {
    "CancelTimer": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelTimer.html",
      "description": "Description for CancelTimer",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CancelWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelWorkflowExecution.html",
      "description": "Description for CancelWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CompleteWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CompleteWorkflowExecution.html",
      "description": "Description for CompleteWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ContinueAsNewWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ContinueAsNewWorkflowExecution.html",
      "description": "Description for ContinueAsNewWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CountClosedWorkflowExecutions": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html",
      "description": "Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:tagFilter.tag",
        "swf:typeFilter.name",
        "swf:typeFilter.version"
      ]
    },
    "CountOpenWorkflowExecutions": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html",
      "description": "Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:tagFilter.tag",
        "swf:typeFilter.name",
        "swf:typeFilter.version"
      ]
    },
    "CountPendingActivityTasks": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html",
      "description": "Returns the estimated number of activity tasks in the specified task list.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:taskList.name"
      ]
    },
    "CountPendingDecisionTasks": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html",
      "description": "Returns the estimated number of decision tasks in the specified task list.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:taskList.name"
      ]
    },
    "DeprecateActivityType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html",
      "description": "Deprecates the specified activity type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:activityType.name",
        "swf:activityType.version"
      ]
    },
    "DeprecateDomain": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html",
      "description": "Deprecates the specified domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeprecateWorkflowType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html",
      "description": "Deprecates the specified workflow type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:workflowType.name",
        "swf:workflowType.version"
      ]
    },
    "DescribeActivityType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html",
      "description": "Returns information about the specified activity type.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:activityType.name",
        "swf:activityType.version"
      ]
    },
    "DescribeDomain": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html",
      "description": "Returns information about the specified domain, including description and status.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html",
      "description": "Returns information about the specified workflow execution including its type and some statistics.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeWorkflowType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html",
      "description": "Returns information about the specified workflow type.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:workflowType.name",
        "swf:workflowType.version"
      ]
    },
    "FailWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_FailWorkflowExecution.html",
      "description": "Description for FailWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "GetWorkflowExecutionHistory": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html",
      "description": "Returns the history of the specified workflow execution.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListActivityTypes": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html",
      "description": "Returns information about all activities registered in the specified domain that match the specified name and registration status.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListClosedWorkflowExecutions": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html",
      "description": "Returns a list of closed workflow executions in the specified domain that meet the filtering criteria.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:tagFilter.tag",
        "swf:typeFilter.name",
        "swf:typeFilter.version"
      ]
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html",
      "description": "Returns the list of domains registered in the account.",
      "accessLevel": "List"
    },
    "ListOpenWorkflowExecutions": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html",
      "description": "Returns a list of open workflow executions in the specified domain that meet the filtering criteria.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:tagFilter.tag",
        "swf:typeFilter.name",
        "swf:typeFilter.version"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html",
      "description": "This action lists tags for an AWS SWF resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ListWorkflowTypes": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html",
      "description": "Returns information about workflow types in the specified domain.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "PollForActivityTask": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html",
      "description": "Used by workers to get an ActivityTask from the specified activity taskList.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:taskList.name"
      ]
    },
    "PollForDecisionTask": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html",
      "description": "Used by deciders to get a DecisionTask from the specified decision taskList.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:taskList.name"
      ]
    },
    "RecordActivityTaskHeartbeat": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html",
      "description": "Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RecordMarker": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordMarker.html",
      "description": "Description for RecordMarker",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RegisterActivityType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html",
      "description": "Registers a new activity type along with its configuration settings in the specified domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:defaultTaskList.name",
        "swf:name",
        "swf:version"
      ]
    },
    "RegisterDomain": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html",
      "description": "Registers a new domain.",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "RegisterWorkflowType": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html",
      "description": "Registers a new workflow type and its configuration settings in the specified domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:defaultTaskList.name",
        "swf:name",
        "swf:version"
      ]
    },
    "RequestCancelActivityTask": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelActivityTask.html",
      "description": "Description for RequestCancelActivityTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RequestCancelExternalWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelExternalWorkflowExecution.html",
      "description": "Description for RequestCancelExternalWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RequestCancelWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html",
      "description": "Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RespondActivityTaskCanceled": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html",
      "description": "Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RespondActivityTaskCompleted": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html",
      "description": "Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided).",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:activityType.name",
        "swf:activityType.version",
        "swf:tagList.member.0",
        "swf:tagList.member.1",
        "swf:tagList.member.2",
        "swf:tagList.member.3",
        "swf:tagList.member.4",
        "swf:taskList.name",
        "swf:workflowType.name",
        "swf:workflowType.version"
      ]
    },
    "RespondActivityTaskFailed": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html",
      "description": "Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified).",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RespondDecisionTaskCompleted": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html",
      "description": "Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ScheduleActivityTask": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ScheduleActivityTask.html",
      "description": "Description for ScheduleActivityTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "SignalExternalWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalExternalWorkflowExecution.html",
      "description": "Description for SignalExternalWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "SignalWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html",
      "description": "Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "StartChildWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartChildWorkflowExecution.html",
      "description": "Description for StartChildWorkflowExecution",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "StartTimer": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartTimer.html",
      "description": "Description for StartTimer",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "StartWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html",
      "description": "Starts an execution of the workflow type in the specified domain using the provided workflowId and input data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "swf:tagList.member.0",
        "swf:tagList.member.1",
        "swf:tagList.member.2",
        "swf:tagList.member.3",
        "swf:tagList.member.4",
        "swf:taskList.name",
        "swf:workflowType.name",
        "swf:workflowType.version"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html",
      "description": "This action tags an AWS SWF resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "TerminateWorkflowExecution": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html",
      "description": "Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html",
      "description": "This action removes a tag from an AWS SWF resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "domain": {
      "name": "domain",
      "url": "https://docs.aws.amazon.com/swf/latest/developerguide/swf-dev-domains.html",
      "arn": "arn:${Partition}:swf:${Region}:${Account}:domain/${DomainName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Description for CancelTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelTimer.html
   */
  public cancelTimer() {
    this.add('swf:CancelTimer');
    return this;
  }

  /**
   * Description for CancelWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelWorkflowExecution.html
   */
  public cancelWorkflowExecution() {
    this.add('swf:CancelWorkflowExecution');
    return this;
  }

  /**
   * Description for CompleteWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CompleteWorkflowExecution.html
   */
  public completeWorkflowExecution() {
    this.add('swf:CompleteWorkflowExecution');
    return this;
  }

  /**
   * Description for ContinueAsNewWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ContinueAsNewWorkflowExecution.html
   */
  public continueAsNewWorkflowExecution() {
    this.add('swf:ContinueAsNewWorkflowExecution');
    return this;
  }

  /**
   * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html
   */
  public countClosedWorkflowExecutions() {
    this.add('swf:CountClosedWorkflowExecutions');
    return this;
  }

  /**
   * Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html
   */
  public countOpenWorkflowExecutions() {
    this.add('swf:CountOpenWorkflowExecutions');
    return this;
  }

  /**
   * Returns the estimated number of activity tasks in the specified task list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html
   */
  public countPendingActivityTasks() {
    this.add('swf:CountPendingActivityTasks');
    return this;
  }

  /**
   * Returns the estimated number of decision tasks in the specified task list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html
   */
  public countPendingDecisionTasks() {
    this.add('swf:CountPendingDecisionTasks');
    return this;
  }

  /**
   * Deprecates the specified activity type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html
   */
  public deprecateActivityType() {
    this.add('swf:DeprecateActivityType');
    return this;
  }

  /**
   * Deprecates the specified domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html
   */
  public deprecateDomain() {
    this.add('swf:DeprecateDomain');
    return this;
  }

  /**
   * Deprecates the specified workflow type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html
   */
  public deprecateWorkflowType() {
    this.add('swf:DeprecateWorkflowType');
    return this;
  }

  /**
   * Returns information about the specified activity type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html
   */
  public describeActivityType() {
    this.add('swf:DescribeActivityType');
    return this;
  }

  /**
   * Returns information about the specified domain, including description and status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html
   */
  public describeDomain() {
    this.add('swf:DescribeDomain');
    return this;
  }

  /**
   * Returns information about the specified workflow execution including its type and some statistics.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html
   */
  public describeWorkflowExecution() {
    this.add('swf:DescribeWorkflowExecution');
    return this;
  }

  /**
   * Returns information about the specified workflow type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html
   */
  public describeWorkflowType() {
    this.add('swf:DescribeWorkflowType');
    return this;
  }

  /**
   * Description for FailWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_FailWorkflowExecution.html
   */
  public failWorkflowExecution() {
    this.add('swf:FailWorkflowExecution');
    return this;
  }

  /**
   * Returns the history of the specified workflow execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html
   */
  public getWorkflowExecutionHistory() {
    this.add('swf:GetWorkflowExecutionHistory');
    return this;
  }

  /**
   * Returns information about all activities registered in the specified domain that match the specified name and registration status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html
   */
  public listActivityTypes() {
    this.add('swf:ListActivityTypes');
    return this;
  }

  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html
   */
  public listClosedWorkflowExecutions() {
    this.add('swf:ListClosedWorkflowExecutions');
    return this;
  }

  /**
   * Returns the list of domains registered in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html
   */
  public listDomains() {
    this.add('swf:ListDomains');
    return this;
  }

  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html
   */
  public listOpenWorkflowExecutions() {
    this.add('swf:ListOpenWorkflowExecutions');
    return this;
  }

  /**
   * This action lists tags for an AWS SWF resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('swf:ListTagsForResource');
    return this;
  }

  /**
   * Returns information about workflow types in the specified domain.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html
   */
  public listWorkflowTypes() {
    this.add('swf:ListWorkflowTypes');
    return this;
  }

  /**
   * Used by workers to get an ActivityTask from the specified activity taskList.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html
   */
  public pollForActivityTask() {
    this.add('swf:PollForActivityTask');
    return this;
  }

  /**
   * Used by deciders to get a DecisionTask from the specified decision taskList.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html
   */
  public pollForDecisionTask() {
    this.add('swf:PollForDecisionTask');
    return this;
  }

  /**
   * Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html
   */
  public recordActivityTaskHeartbeat() {
    this.add('swf:RecordActivityTaskHeartbeat');
    return this;
  }

  /**
   * Description for RecordMarker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordMarker.html
   */
  public recordMarker() {
    this.add('swf:RecordMarker');
    return this;
  }

  /**
   * Registers a new activity type along with its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html
   */
  public registerActivityType() {
    this.add('swf:RegisterActivityType');
    return this;
  }

  /**
   * Registers a new domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html
   */
  public registerDomain() {
    this.add('swf:RegisterDomain');
    return this;
  }

  /**
   * Registers a new workflow type and its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html
   */
  public registerWorkflowType() {
    this.add('swf:RegisterWorkflowType');
    return this;
  }

  /**
   * Description for RequestCancelActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelActivityTask.html
   */
  public requestCancelActivityTask() {
    this.add('swf:RequestCancelActivityTask');
    return this;
  }

  /**
   * Description for RequestCancelExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelExternalWorkflowExecution.html
   */
  public requestCancelExternalWorkflowExecution() {
    this.add('swf:RequestCancelExternalWorkflowExecution');
    return this;
  }

  /**
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html
   */
  public requestCancelWorkflowExecution() {
    this.add('swf:RequestCancelWorkflowExecution');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html
   */
  public respondActivityTaskCanceled() {
    this.add('swf:RespondActivityTaskCanceled');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html
   */
  public respondActivityTaskCompleted() {
    this.add('swf:RespondActivityTaskCompleted');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html
   */
  public respondActivityTaskFailed() {
    this.add('swf:RespondActivityTaskFailed');
    return this;
  }

  /**
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html
   */
  public respondDecisionTaskCompleted() {
    this.add('swf:RespondDecisionTaskCompleted');
    return this;
  }

  /**
   * Description for ScheduleActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ScheduleActivityTask.html
   */
  public scheduleActivityTask() {
    this.add('swf:ScheduleActivityTask');
    return this;
  }

  /**
   * Description for SignalExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalExternalWorkflowExecution.html
   */
  public signalExternalWorkflowExecution() {
    this.add('swf:SignalExternalWorkflowExecution');
    return this;
  }

  /**
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html
   */
  public signalWorkflowExecution() {
    this.add('swf:SignalWorkflowExecution');
    return this;
  }

  /**
   * Description for StartChildWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartChildWorkflowExecution.html
   */
  public startChildWorkflowExecution() {
    this.add('swf:StartChildWorkflowExecution');
    return this;
  }

  /**
   * Description for StartTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartTimer.html
   */
  public startTimer() {
    this.add('swf:StartTimer');
    return this;
  }

  /**
   * Starts an execution of the workflow type in the specified domain using the provided workflowId and input data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html
   */
  public startWorkflowExecution() {
    this.add('swf:StartWorkflowExecution');
    return this;
  }

  /**
   * This action tags an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html
   */
  public tagResource() {
    this.add('swf:TagResource');
    return this;
  }

  /**
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html
   */
  public terminateWorkflowExecution() {
    this.add('swf:TerminateWorkflowExecution');
    return this;
  }

  /**
   * This action removes a tag from an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html
   */
  public untagResource() {
    this.add('swf:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/swf/latest/developerguide/swf-dev-domains.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:swf:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
