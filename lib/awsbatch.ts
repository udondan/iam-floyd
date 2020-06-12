import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service batch
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
 */
export class Batch extends PolicyStatement {
  public servicePrefix = 'batch';
  public actions : Actions = {
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html",
      "description": "Cancels jobs in an AWS Batch job queue.",
      "accessLevel": "Write"
    },
    "CreateComputeEnvironment": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html",
      "description": "Creates an AWS Batch compute environment.",
      "accessLevel": "Write"
    },
    "CreateJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html",
      "description": "Creates an AWS Batch job queue.",
      "accessLevel": "Write"
    },
    "DeleteComputeEnvironment": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html",
      "description": "Deletes an AWS Batch compute environment.",
      "accessLevel": "Write"
    },
    "DeleteJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html",
      "description": "Deletes the specified job queue.",
      "accessLevel": "Write"
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
        "batch:Image"
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
      "accessLevel": "Write"
    },
    "UpdateJobQueue": {
      "url": "https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html",
      "description": "Updates a job queue.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes : ResourceTypes = {
    "job-queue": {
      "name": "job-queue",
      "arn": "arn:${Partition}:batch:${Region}:${Account}:job-queue/${JobQueueName}",
      "conditionKeys": []
    },
    "job-definition": {
      "name": "job-definition",
      "arn": "arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}",
      "conditionKeys": []
    }
  };

  /**
   * Cancels jobs in an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  public cancelJob () {
    this.add('batch:CancelJob');
    return this;
  }

  /**
   * Creates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html
   */
  public createComputeEnvironment () {
    this.add('batch:CreateComputeEnvironment');
    return this;
  }

  /**
   * Creates an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html
   */
  public createJobQueue () {
    this.add('batch:CreateJobQueue');
    return this;
  }

  /**
   * Deletes an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   */
  public deleteComputeEnvironment () {
    this.add('batch:DeleteComputeEnvironment');
    return this;
  }

  /**
   * Deletes the specified job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   */
  public deleteJobQueue () {
    this.add('batch:DeleteJobQueue');
    return this;
  }

  /**
   * Deregisters an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   */
  public deregisterJobDefinition () {
    this.add('batch:DeregisterJobDefinition');
    return this;
  }

  /**
   * Describes one or more of your compute environments.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  public describeComputeEnvironments () {
    this.add('batch:DescribeComputeEnvironments');
    return this;
  }

  /**
   * Describes a list of job definitions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  public describeJobDefinitions () {
    this.add('batch:DescribeJobDefinitions');
    return this;
  }

  /**
   * Describes one or more of your job queues.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  public describeJobQueues () {
    this.add('batch:DescribeJobQueues');
    return this;
  }

  /**
   * Describes a list of AWS Batch jobs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  public describeJobs () {
    this.add('batch:DescribeJobs');
    return this;
  }

  /**
   * Returns a list of task jobs for a specified job queue.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  public listJobs () {
    this.add('batch:ListJobs');
    return this;
  }

  /**
   * Registers an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html
   */
  public registerJobDefinition () {
    this.add('batch:RegisterJobDefinition');
    return this;
  }

  /**
   * Submits an AWS Batch job from a job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html
   */
  public submitJob () {
    this.add('batch:SubmitJob');
    return this;
  }

  /**
   * Terminates jobs in a job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   */
  public terminateJob () {
    this.add('batch:TerminateJob');
    return this;
  }

  /**
   * Updates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   */
  public updateComputeEnvironment () {
    this.add('batch:UpdateComputeEnvironment');
    return this;
  }

  /**
   * Updates a job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   */
  public updateJobQueue () {
    this.add('batch:UpdateJobQueue');
    return this;
  }
}
