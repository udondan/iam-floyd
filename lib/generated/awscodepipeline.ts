import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codepipeline](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codepipeline extends PolicyStatement {
  public servicePrefix = 'codepipeline';
  protected actionList: Actions = {
    "AcknowledgeJob": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html",
      "description": "Grants permission to view information about a specified job and whether that job has been received by the job worker",
      "accessLevel": "Write"
    },
    "AcknowledgeThirdPartyJob": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html",
      "description": "Grants permission to confirm that a job worker has received the specified job (partner actions only)",
      "accessLevel": "Write"
    },
    "CreateCustomActionType": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html",
      "description": "Grants permission to create a custom action that you can use in the pipelines associated with your AWS account",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "actiontype": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePipeline": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html",
      "description": "Grants permission to create a uniquely named pipeline",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteCustomActionType": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html",
      "description": "Grants permission to delete a custom action",
      "accessLevel": "Write",
      "resourceTypes": {
        "actiontype": {
          "required": true
        }
      }
    },
    "DeletePipeline": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html",
      "description": "Grants permission to delete a specified pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "DeleteWebhook": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html",
      "description": "Grants permission to delete a specified webhook",
      "accessLevel": "Write",
      "resourceTypes": {
        "webhook": {
          "required": true
        }
      }
    },
    "DeregisterWebhookWithThirdParty": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html",
      "description": "Grants permission to remove the registration of a webhook with the third party specified in its configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "webhook": {
          "required": true
        }
      }
    },
    "DisableStageTransition": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html",
      "description": "Grants permission to prevent revisions from transitioning to the next stage in a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "stage": {
          "required": true
        }
      }
    },
    "EnableStageTransition": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html",
      "description": "Grants permission to allow revisions to transition to the next stage in a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "stage": {
          "required": true
        }
      }
    },
    "GetJobDetails": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html",
      "description": "Grants permission to view information about a job (custom actions only)",
      "accessLevel": "Read"
    },
    "GetPipeline": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html",
      "description": "Grants permission to retrieve information about a pipeline structure",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "GetPipelineExecution": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html",
      "description": "Grants permission to view information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "GetPipelineState": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html",
      "description": "Grants permission to view information about the current state of the stages and actions of a pipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "GetThirdPartyJobDetails": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html",
      "description": "Grants permission to view the details of a job for a third-party action (partner actions only)",
      "accessLevel": "Read"
    },
    "ListActionExecutions": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html",
      "description": "Grants permission to list the action executions that have occurred in a pipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "ListActionTypes": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html",
      "description": "Grants permission to list a summary of all the action types available for pipelines in your account",
      "accessLevel": "Read",
      "resourceTypes": {
        "actiontype": {
          "required": true
        }
      }
    },
    "ListPipelineExecutions": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html",
      "description": "Grants permission to list a summary of the most recent executions for a pipeline",
      "accessLevel": "List",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "ListPipelines": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html",
      "description": "Grants permission to list a summary of all the pipelines associated with your AWS account",
      "accessLevel": "List",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a CodePipeline resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "actiontype": {
          "required": false
        },
        "pipeline": {
          "required": false
        },
        "webhook": {
          "required": false
        }
      }
    },
    "ListWebhooks": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html",
      "description": "Grants permission to list all of the webhooks associated with your AWS account",
      "accessLevel": "List",
      "resourceTypes": {
        "webhook": {
          "required": true
        }
      }
    },
    "PollForJobs": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html",
      "description": "Grants permission to view information about any jobs for CodePipeline to act on",
      "accessLevel": "Write",
      "resourceTypes": {
        "actiontype": {
          "required": true
        }
      }
    },
    "PollForThirdPartyJobs": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html",
      "description": "Grants permission to determine whether there are any third-party jobs for a job worker to act on (partner actions only)",
      "accessLevel": "Write"
    },
    "PutActionRevision": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html",
      "description": "Grants permission to edit actions in a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "action": {
          "required": true
        }
      }
    },
    "PutApprovalResult": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html",
      "description": "Grants permission to provide a response (Approved or Rejected) to a manual approval request in CodePipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "action": {
          "required": true
        }
      }
    },
    "PutJobFailureResult": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html",
      "description": "Grants permission to represent the failure of a job as returned to the pipeline by a job worker (custom actions only)",
      "accessLevel": "Write"
    },
    "PutJobSuccessResult": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html",
      "description": "Grants permission to represent the success of a job as returned to the pipeline by a job worker (custom actions only)",
      "accessLevel": "Write"
    },
    "PutThirdPartyJobFailureResult": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html",
      "description": "Grants permission to represent the failure of a third-party job as returned to the pipeline by a job worker (partner actions only)",
      "accessLevel": "Write"
    },
    "PutThirdPartyJobSuccessResult": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html",
      "description": "Grants permission to represent the success of a third-party job as returned to the pipeline by a job worker (partner actions only)",
      "accessLevel": "Write"
    },
    "PutWebhook": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html",
      "description": "Grants permission to create or update a webhook",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "pipeline": {
          "required": true
        },
        "webhook": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RegisterWebhookWithThirdParty": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html",
      "description": "Grants permission to register a webhook with the third party specified in its configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "webhook": {
          "required": true
        }
      }
    },
    "RetryStageExecution": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html",
      "description": "Grants permission to resume the pipeline execution by retrying the last failed actions in a stage",
      "accessLevel": "Write",
      "resourceTypes": {
        "stage": {
          "required": true
        }
      }
    },
    "StartPipelineExecution": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html",
      "description": "Grants permission to run the most recent revision through the pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "StopPipelineExecution": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html",
      "description": "Grants permission to stop an in-progress pipeline execution",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a CodePipeline resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "actiontype": {
          "required": false
        },
        "pipeline": {
          "required": false
        },
        "webhook": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove a tag from a CodePipeline resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "actiontype": {
          "required": false
        },
        "pipeline": {
          "required": false
        },
        "webhook": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdatePipeline": {
      "url": "https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html",
      "description": "Grants permission to update a pipeline with changes to the structure of the pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "action": {
      "name": "action",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format",
      "arn": "arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}/${StageName}/${ActionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "actiontype": {
      "name": "actiontype",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format",
      "arn": "arn:${Partition}:codepipeline:${Region}:${Account}:actiontype:${Owner}/${Category}/${Provider}/${Version}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "pipeline": {
      "name": "pipeline",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format",
      "arn": "arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "stage": {
      "name": "stage",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format",
      "arn": "arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}/${StageName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "webhook": {
      "name": "webhook",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format",
      "arn": "arn:${Partition}:codepipeline:${Region}:${Account}:webhook:${WebhookName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [codepipeline](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view information about a specified job and whether that job has been received by the job worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html
   */
  public acknowledgeJob() {
    this.add('codepipeline:AcknowledgeJob');
    return this;
  }

  /**
   * Grants permission to confirm that a job worker has received the specified job (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html
   */
  public acknowledgeThirdPartyJob() {
    this.add('codepipeline:AcknowledgeThirdPartyJob');
    return this;
  }

  /**
   * Grants permission to create a custom action that you can use in the pipelines associated with your AWS account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html
   */
  public createCustomActionType() {
    this.add('codepipeline:CreateCustomActionType');
    return this;
  }

  /**
   * Grants permission to create a uniquely named pipeline
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html
   */
  public createPipeline() {
    this.add('codepipeline:CreatePipeline');
    return this;
  }

  /**
   * Grants permission to delete a custom action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html
   */
  public deleteCustomActionType() {
    this.add('codepipeline:DeleteCustomActionType');
    return this;
  }

  /**
   * Grants permission to delete a specified pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html
   */
  public deletePipeline() {
    this.add('codepipeline:DeletePipeline');
    return this;
  }

  /**
   * Grants permission to delete a specified webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html
   */
  public deleteWebhook() {
    this.add('codepipeline:DeleteWebhook');
    return this;
  }

  /**
   * Grants permission to remove the registration of a webhook with the third party specified in its configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html
   */
  public deregisterWebhookWithThirdParty() {
    this.add('codepipeline:DeregisterWebhookWithThirdParty');
    return this;
  }

  /**
   * Grants permission to prevent revisions from transitioning to the next stage in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
   */
  public disableStageTransition() {
    this.add('codepipeline:DisableStageTransition');
    return this;
  }

  /**
   * Grants permission to allow revisions to transition to the next stage in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html
   */
  public enableStageTransition() {
    this.add('codepipeline:EnableStageTransition');
    return this;
  }

  /**
   * Grants permission to view information about a job (custom actions only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html
   */
  public getJobDetails() {
    this.add('codepipeline:GetJobDetails');
    return this;
  }

  /**
   * Grants permission to retrieve information about a pipeline structure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html
   */
  public getPipeline() {
    this.add('codepipeline:GetPipeline');
    return this;
  }

  /**
   * Grants permission to view information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html
   */
  public getPipelineExecution() {
    this.add('codepipeline:GetPipelineExecution');
    return this;
  }

  /**
   * Grants permission to view information about the current state of the stages and actions of a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html
   */
  public getPipelineState() {
    this.add('codepipeline:GetPipelineState');
    return this;
  }

  /**
   * Grants permission to view the details of a job for a third-party action (partner actions only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html
   */
  public getThirdPartyJobDetails() {
    this.add('codepipeline:GetThirdPartyJobDetails');
    return this;
  }

  /**
   * Grants permission to list the action executions that have occurred in a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html
   */
  public listActionExecutions() {
    this.add('codepipeline:ListActionExecutions');
    return this;
  }

  /**
   * Grants permission to list a summary of all the action types available for pipelines in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html
   */
  public listActionTypes() {
    this.add('codepipeline:ListActionTypes');
    return this;
  }

  /**
   * Grants permission to list a summary of the most recent executions for a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html
   */
  public listPipelineExecutions() {
    this.add('codepipeline:ListPipelineExecutions');
    return this;
  }

  /**
   * Grants permission to list a summary of all the pipelines associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html
   */
  public listPipelines() {
    this.add('codepipeline:ListPipelines');
    return this;
  }

  /**
   * Grants permission to list tags for a CodePipeline resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('codepipeline:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list all of the webhooks associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html
   */
  public listWebhooks() {
    this.add('codepipeline:ListWebhooks');
    return this;
  }

  /**
   * Grants permission to view information about any jobs for CodePipeline to act on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html
   */
  public pollForJobs() {
    this.add('codepipeline:PollForJobs');
    return this;
  }

  /**
   * Grants permission to determine whether there are any third-party jobs for a job worker to act on (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html
   */
  public pollForThirdPartyJobs() {
    this.add('codepipeline:PollForThirdPartyJobs');
    return this;
  }

  /**
   * Grants permission to edit actions in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html
   */
  public putActionRevision() {
    this.add('codepipeline:PutActionRevision');
    return this;
  }

  /**
   * Grants permission to provide a response (Approved or Rejected) to a manual approval request in CodePipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html
   */
  public putApprovalResult() {
    this.add('codepipeline:PutApprovalResult');
    return this;
  }

  /**
   * Grants permission to represent the failure of a job as returned to the pipeline by a job worker (custom actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html
   */
  public putJobFailureResult() {
    this.add('codepipeline:PutJobFailureResult');
    return this;
  }

  /**
   * Grants permission to represent the success of a job as returned to the pipeline by a job worker (custom actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html
   */
  public putJobSuccessResult() {
    this.add('codepipeline:PutJobSuccessResult');
    return this;
  }

  /**
   * Grants permission to represent the failure of a third-party job as returned to the pipeline by a job worker (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html
   */
  public putThirdPartyJobFailureResult() {
    this.add('codepipeline:PutThirdPartyJobFailureResult');
    return this;
  }

  /**
   * Grants permission to represent the success of a third-party job as returned to the pipeline by a job worker (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html
   */
  public putThirdPartyJobSuccessResult() {
    this.add('codepipeline:PutThirdPartyJobSuccessResult');
    return this;
  }

  /**
   * Grants permission to create or update a webhook
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html
   */
  public putWebhook() {
    this.add('codepipeline:PutWebhook');
    return this;
  }

  /**
   * Grants permission to register a webhook with the third party specified in its configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html
   */
  public registerWebhookWithThirdParty() {
    this.add('codepipeline:RegisterWebhookWithThirdParty');
    return this;
  }

  /**
   * Grants permission to resume the pipeline execution by retrying the last failed actions in a stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html
   */
  public retryStageExecution() {
    this.add('codepipeline:RetryStageExecution');
    return this;
  }

  /**
   * Grants permission to run the most recent revision through the pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html
   */
  public startPipelineExecution() {
    this.add('codepipeline:StartPipelineExecution');
    return this;
  }

  /**
   * Grants permission to stop an in-progress pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html
   */
  public stopPipelineExecution() {
    this.add('codepipeline:StopPipelineExecution');
    return this;
  }

  /**
   * Grants permission to tag a CodePipeline resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('codepipeline:TagResource');
    return this;
  }

  /**
   * Grants permission to remove a tag from a CodePipeline resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('codepipeline:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a pipeline with changes to the structure of the pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html
   */
  public updatePipeline() {
    this.add('codepipeline:UpdatePipeline');
    return this;
  }

  /**
   * Adds a resource of type action to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param stageName - Identifier for the stageName.
   * @param actionName - Identifier for the actionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAction(pipelineName: string, stageName: string, actionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}/${StageName}/${ActionName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${StageName}', stageName);
    arn = arn.replace('${ActionName}', actionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type actiontype to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param owner - Identifier for the owner.
   * @param category - Identifier for the category.
   * @param provider - Identifier for the provider.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActiontype(owner: string, category: string, provider: string, version: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codepipeline:${Region}:${Account}:actiontype:${Owner}/${Category}/${Provider}/${Version}';
    arn = arn.replace('${Owner}', owner);
    arn = arn.replace('${Category}', category);
    arn = arn.replace('${Provider}', provider);
    arn = arn.replace('${Version}', version);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stage to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param stageName - Identifier for the stageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStage(pipelineName: string, stageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codepipeline:${Region}:${Account}:${PipelineName}/${StageName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${StageName}', stageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type webhook to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param webhookName - Identifier for the webhookName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebhook(webhookName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codepipeline:${Region}:${Account}:webhook:${WebhookName}';
    arn = arn.replace('${WebhookName}', webhookName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .createCustomActionType()
   * - .createPipeline()
   * - .putWebhook()
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - action
   * - actiontype
   * - pipeline
   * - stage
   * - webhook
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .createCustomActionType()
   * - .createPipeline()
   * - .putWebhook()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
