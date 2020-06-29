import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service batch
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
 */
export class Batch extends PolicyStatement {
  public servicePrefix = 'batch';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
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
   * Action provider for service batch
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Cancels jobs in an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  public cancelJob() {
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
  public createComputeEnvironment() {
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
  public createJobQueue() {
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
  public deleteComputeEnvironment() {
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
  public deleteJobQueue() {
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
  public deregisterJobDefinition() {
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
  public describeComputeEnvironments() {
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
  public describeJobDefinitions() {
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
  public describeJobQueues() {
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
  public describeJobs() {
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
  public listJobs() {
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
  public registerJobDefinition() {
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
  public submitJob() {
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
  public terminateJob() {
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
  public updateComputeEnvironment() {
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
  public updateJobQueue() {
    this.add('batch:UpdateJobQueue');
    return this;
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
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
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
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The image used to start a container.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifImage(value: string | string[], operator?: string) {
    return this.if(`batch:Image`, value, operator || 'StringEquals');
  }

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user).
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPrivileged(value?: boolean) {
    return this.if(`batch:Privileged`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The user name or numeric uid to use inside the container.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifUser(value: string | string[], operator?: string) {
    return this.if(`batch:User`, value, operator || 'StringEquals');
  }
}
