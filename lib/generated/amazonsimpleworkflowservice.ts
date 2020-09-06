import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [swf](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Swf extends PolicyStatement {
  public servicePrefix = 'swf';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
    "domain": {
      "name": "domain",
      "url": "https://docs.aws.amazon.com/swf/latest/developerguide/swf-dev-domains.html",
      "arn": "arn:${Partition}:swf::${Account}:domain/${DomainName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [swf](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Description for CancelTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelTimer.html
   */
  public toCancelTimer() {
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
  public toCancelWorkflowExecution() {
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
  public toCompleteWorkflowExecution() {
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
  public toContinueAsNewWorkflowExecution() {
    this.add('swf:ContinueAsNewWorkflowExecution');
    return this;
  }

  /**
   * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html
   */
  public toCountClosedWorkflowExecutions() {
    this.add('swf:CountClosedWorkflowExecutions');
    return this;
  }

  /**
   * Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html
   */
  public toCountOpenWorkflowExecutions() {
    this.add('swf:CountOpenWorkflowExecutions');
    return this;
  }

  /**
   * Returns the estimated number of activity tasks in the specified task list.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html
   */
  public toCountPendingActivityTasks() {
    this.add('swf:CountPendingActivityTasks');
    return this;
  }

  /**
   * Returns the estimated number of decision tasks in the specified task list.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html
   */
  public toCountPendingDecisionTasks() {
    this.add('swf:CountPendingDecisionTasks');
    return this;
  }

  /**
   * Deprecates the specified activity type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html
   */
  public toDeprecateActivityType() {
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
  public toDeprecateDomain() {
    this.add('swf:DeprecateDomain');
    return this;
  }

  /**
   * Deprecates the specified workflow type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html
   */
  public toDeprecateWorkflowType() {
    this.add('swf:DeprecateWorkflowType');
    return this;
  }

  /**
   * Returns information about the specified activity type.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html
   */
  public toDescribeActivityType() {
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
  public toDescribeDomain() {
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
  public toDescribeWorkflowExecution() {
    this.add('swf:DescribeWorkflowExecution');
    return this;
  }

  /**
   * Returns information about the specified workflow type.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html
   */
  public toDescribeWorkflowType() {
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
  public toFailWorkflowExecution() {
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
  public toGetWorkflowExecutionHistory() {
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
  public toListActivityTypes() {
    this.add('swf:ListActivityTypes');
    return this;
  }

  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html
   */
  public toListClosedWorkflowExecutions() {
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
  public toListDomains() {
    this.add('swf:ListDomains');
    return this;
  }

  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html
   */
  public toListOpenWorkflowExecutions() {
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
  public toListTagsForResource() {
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
  public toListWorkflowTypes() {
    this.add('swf:ListWorkflowTypes');
    return this;
  }

  /**
   * Used by workers to get an ActivityTask from the specified activity taskList.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html
   */
  public toPollForActivityTask() {
    this.add('swf:PollForActivityTask');
    return this;
  }

  /**
   * Used by deciders to get a DecisionTask from the specified decision taskList.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html
   */
  public toPollForDecisionTask() {
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
  public toRecordActivityTaskHeartbeat() {
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
  public toRecordMarker() {
    this.add('swf:RecordMarker');
    return this;
  }

  /**
   * Registers a new activity type along with its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDefaultTaskListName()
   * - .ifName()
   * - .ifVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html
   */
  public toRegisterActivityType() {
    this.add('swf:RegisterActivityType');
    return this;
  }

  /**
   * Registers a new domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html
   */
  public toRegisterDomain() {
    this.add('swf:RegisterDomain');
    return this;
  }

  /**
   * Registers a new workflow type and its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDefaultTaskListName()
   * - .ifName()
   * - .ifVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html
   */
  public toRegisterWorkflowType() {
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
  public toRequestCancelActivityTask() {
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
  public toRequestCancelExternalWorkflowExecution() {
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
  public toRequestCancelWorkflowExecution() {
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
  public toRespondActivityTaskCanceled() {
    this.add('swf:RespondActivityTaskCanceled');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   * - .ifTagListMember0()
   * - .ifTagListMember1()
   * - .ifTagListMember2()
   * - .ifTagListMember3()
   * - .ifTagListMember4()
   * - .ifTaskListName()
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html
   */
  public toRespondActivityTaskCompleted() {
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
  public toRespondActivityTaskFailed() {
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
  public toRespondDecisionTaskCompleted() {
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
  public toScheduleActivityTask() {
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
  public toSignalExternalWorkflowExecution() {
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
  public toSignalWorkflowExecution() {
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
  public toStartChildWorkflowExecution() {
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
  public toStartTimer() {
    this.add('swf:StartTimer');
    return this;
  }

  /**
   * Starts an execution of the workflow type in the specified domain using the provided workflowId and input data.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTagListMember0()
   * - .ifTagListMember1()
   * - .ifTagListMember2()
   * - .ifTagListMember3()
   * - .ifTagListMember4()
   * - .ifTaskListName()
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html
   */
  public toStartWorkflowExecution() {
    this.add('swf:StartWorkflowExecution');
    return this;
  }

  /**
   * This action tags an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
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
  public toTerminateWorkflowExecution() {
    this.add('swf:TerminateWorkflowExecution');
    return this;
  }

  /**
   * This action removes a tag from an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:swf::${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Constrains the policy statement to only an activity type of the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeName(value: string | string[], operator?: string) {
    return this.if(`swf:activityType.name`, value, operator || 'StringLike');
  }

  /**
   * Contstrains the policy statement to only an activity type of the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeVersion(value: string | string[], operator?: string) {
    return this.if(`swf:activityType.version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a matching defaultTaskList name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDefaultTaskListName(value: string | string[], operator?: string) {
    return this.if(`swf:defaultTaskList.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only activities or workflows with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: string) {
    return this.if(`swf:name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a matching tagFilter.tag value.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagFilterTag(value: string | string[], operator?: string) {
    return this.if(`swf:tagFilter.tag`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember0(value: string | string[], operator?: string) {
    return this.if(`swf:tagList.member.0`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember1(value: string | string[], operator?: string) {
    return this.if(`swf:tagList.member.1`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember2(value: string | string[], operator?: string) {
    return this.if(`swf:tagList.member.2`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember3(value: string | string[], operator?: string) {
    return this.if(`swf:tagList.member.3`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember4(value: string | string[], operator?: string) {
    return this.if(`swf:tagList.member.4`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a tasklist with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountPendingActivityTasks()
   * - .toCountPendingDecisionTasks()
   * - .toPollForActivityTask()
   * - .toPollForDecisionTask()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskListName(value: string | string[], operator?: string) {
    return this.if(`swf:taskList.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a type filter with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTypeFilterName(value: string | string[], operator?: string) {
    return this.if(`swf:typeFilter.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a type filter with the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTypeFilterVersion(value: string | string[], operator?: string) {
    return this.if(`swf:typeFilter.version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only activities or workflows with the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersion(value: string | string[], operator?: string) {
    return this.if(`swf:version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a workflow type of the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateWorkflowType()
   * - .toDescribeWorkflowType()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeName(value: string | string[], operator?: string) {
    return this.if(`swf:workflowType.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a workflow type of the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateWorkflowType()
   * - .toDescribeWorkflowType()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeVersion(value: string | string[], operator?: string) {
    return this.if(`swf:workflowType.version`, value, operator || 'StringLike');
  }
}
