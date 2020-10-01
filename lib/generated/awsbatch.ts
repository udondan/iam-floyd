import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [batch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Batch extends PolicyStatement {
  public servicePrefix = 'batch';
  protected actionList: Actions = {
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html",
      "description": "Cancels a job in an AWS Batch job queue.",
      "accessLevel": "Write"
    },
    "CreateComputeEnvironment": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html",
      "description": "Creates an AWS Batch compute environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "compute-environment": {
          "required": true
        }
      }
    },
    "CreateJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html",
      "description": "Creates an AWS Batch job queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "compute-environment": {
          "required": true
        },
        "job-queue": {
          "required": true
        }
      }
    },
    "DeleteComputeEnvironment": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html",
      "description": "Deletes an AWS Batch compute environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "compute-environment": {
          "required": true
        }
      }
    },
    "DeleteJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html",
      "description": "Deletes the specified job queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job-queue": {
          "required": true
        }
      }
    },
    "DeregisterJobDefinition": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html",
      "description": "Deregisters an AWS Batch job definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job-definition": {
          "required": true
        }
      }
    },
    "DescribeComputeEnvironments": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html",
      "description": "Describes one or more of your compute environments.",
      "accessLevel": "Read"
    },
    "DescribeJobDefinitions": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html",
      "description": "Describes a list of job definitions.",
      "accessLevel": "Read"
    },
    "DescribeJobQueues": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html",
      "description": "Describes one or more of your job queues.",
      "accessLevel": "Read"
    },
    "DescribeJobs": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html",
      "description": "Describes a list of AWS Batch jobs.",
      "accessLevel": "Read"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html",
      "description": "Returns a list of task jobs for a specified job queue.",
      "accessLevel": "List"
    },
    "RegisterJobDefinition": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html",
      "description": "Registers an AWS Batch job definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job-definition": {
          "required": true
        }
      },
      "conditions": [
        "batch:User",
        "batch:Privileged",
        "batch:Image",
        "batch:LogDriver",
        "batch:AWSLogsGroup",
        "batch:AWSLogsRegion",
        "batch:AWSLogsStreamPrefix",
        "batch:AWSLogsCreateGroup"
      ]
    },
    "SubmitJob": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html",
      "description": "Submits an AWS Batch job from a job definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job-definition": {
          "required": true
        },
        "job-queue": {
          "required": true
        }
      }
    },
    "TerminateJob": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html",
      "description": "Terminates jobs in a job queue.",
      "accessLevel": "Write"
    },
    "UpdateComputeEnvironment": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html",
      "description": "Updates an AWS Batch compute environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "compute-environment": {
          "required": true
        }
      }
    },
    "UpdateJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html",
      "description": "Updates a job queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job-queue": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "compute-environment": {
      "name": "compute-environment",
      "url": "",
      "arn": "arn:${Partition}:batch:${Region}:${Account}:compute-environment/${ComputeEnvironmentName}",
      "conditionKeys": []
    },
    "job-queue": {
      "name": "job-queue",
      "url": "",
      "arn": "arn:${Partition}:batch:${Region}:${Account}:job-queue/${JobQueueName}",
      "conditionKeys": []
    },
    "job-definition": {
      "name": "job-definition",
      "url": "",
      "arn": "arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [batch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels a job in an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  public toCancelJob() {
    this.to('batch:CancelJob');
    return this;
  }

  /**
   * Creates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html
   */
  public toCreateComputeEnvironment() {
    this.to('batch:CreateComputeEnvironment');
    return this;
  }

  /**
   * Creates an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html
   */
  public toCreateJobQueue() {
    this.to('batch:CreateJobQueue');
    return this;
  }

  /**
   * Deletes an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   */
  public toDeleteComputeEnvironment() {
    this.to('batch:DeleteComputeEnvironment');
    return this;
  }

  /**
   * Deletes the specified job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   */
  public toDeleteJobQueue() {
    this.to('batch:DeleteJobQueue');
    return this;
  }

  /**
   * Deregisters an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   */
  public toDeregisterJobDefinition() {
    this.to('batch:DeregisterJobDefinition');
    return this;
  }

  /**
   * Describes one or more of your compute environments.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  public toDescribeComputeEnvironments() {
    this.to('batch:DescribeComputeEnvironments');
    return this;
  }

  /**
   * Describes a list of job definitions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  public toDescribeJobDefinitions() {
    this.to('batch:DescribeJobDefinitions');
    return this;
  }

  /**
   * Describes one or more of your job queues.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  public toDescribeJobQueues() {
    this.to('batch:DescribeJobQueues');
    return this;
  }

  /**
   * Describes a list of AWS Batch jobs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    this.to('batch:DescribeJobs');
    return this;
  }

  /**
   * Returns a list of task jobs for a specified job queue.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    this.to('batch:ListJobs');
    return this;
  }

  /**
   * Registers an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUser()
   * - .ifPrivileged()
   * - .ifImage()
   * - .ifLogDriver()
   * - .ifAWSLogsGroup()
   * - .ifAWSLogsRegion()
   * - .ifAWSLogsStreamPrefix()
   * - .ifAWSLogsCreateGroup()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html
   */
  public toRegisterJobDefinition() {
    this.to('batch:RegisterJobDefinition');
    return this;
  }

  /**
   * Submits an AWS Batch job from a job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html
   */
  public toSubmitJob() {
    this.to('batch:SubmitJob');
    return this;
  }

  /**
   * Terminates jobs in a job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   */
  public toTerminateJob() {
    this.to('batch:TerminateJob');
    return this;
  }

  /**
   * Updates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   */
  public toUpdateComputeEnvironment() {
    this.to('batch:UpdateComputeEnvironment');
    return this;
  }

  /**
   * Updates a job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   */
  public toUpdateJobQueue() {
    this.to('batch:UpdateJobQueue');
    return this;
  }

  /**
   * Adds a resource of type compute-environment to the statement
   *
   * @param computeEnvironmentName - Identifier for the computeEnvironmentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onComputeEnvironment(computeEnvironmentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:compute-environment/${ComputeEnvironmentName}';
    arn = arn.replace('${ComputeEnvironmentName}', computeEnvironmentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job-queue to the statement
   *
   * @param jobQueueName - Identifier for the jobQueueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJobQueue(jobQueueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:job-queue/${JobQueueName}';
    arn = arn.replace('${JobQueueName}', jobQueueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job-definition to the statement
   *
   * @param jobDefinitionName - Identifier for the jobDefinitionName.
   * @param revision - Identifier for the revision.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJobDefinition(jobDefinitionName: string, revision: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}';
    arn = arn.replace('${JobDefinitionName}', jobDefinitionName);
    arn = arn.replace('${Revision}', revision);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * When this parameter is true, the awslogs-group will be created for the logs.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAWSLogsCreateGroup(value?: boolean) {
    return this.if(`batch:AWSLogsCreateGroup`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The awslogs group where the logs are located.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsGroup(value: string | string[], operator?: string) {
    return this.if(`batch:AWSLogsGroup`, value, operator || 'StringLike');
  }

  /**
   * The region where the logs are sent to.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsRegion(value: string | string[], operator?: string) {
    return this.if(`batch:AWSLogsRegion`, value, operator || 'StringLike');
  }

  /**
   * The awslogs log stream prefix.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsStreamPrefix(value: string | string[], operator?: string) {
    return this.if(`batch:AWSLogsStreamPrefix`, value, operator || 'StringLike');
  }

  /**
   * The image used to start a container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImage(value: string | string[], operator?: string) {
    return this.if(`batch:Image`, value, operator || 'StringLike');
  }

  /**
   * The log driver used for the container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogDriver(value: string | string[], operator?: string) {
    return this.if(`batch:LogDriver`, value, operator || 'StringLike');
  }

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPrivileged(value?: boolean) {
    return this.if(`batch:Privileged`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The user name or numeric uid to use inside the container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUser(value: string | string[], operator?: string) {
    return this.if(`batch:User`, value, operator || 'StringLike');
  }
}
