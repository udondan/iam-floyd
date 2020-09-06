import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [robomaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Robomaker extends PolicyStatement {
  public servicePrefix = 'robomaker';
  protected actionList: Actions = {
    "BatchDescribeSimulationJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html",
      "description": "Describe multiple simulation jobs",
      "accessLevel": "Read"
    },
    "CancelDeploymentJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html",
      "description": "Cancel a deployment job",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentJob": {
          "required": true
        }
      }
    },
    "CancelSimulationJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html",
      "description": "Cancel a simulation job",
      "accessLevel": "Write",
      "resourceTypes": {
        "simulationJob": {
          "required": true
        }
      }
    },
    "CancelSimulationJobBatch": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html",
      "description": "Cancel a simulation job batch",
      "accessLevel": "Write",
      "resourceTypes": {
        "simulationJobBatch": {
          "required": true
        }
      }
    },
    "CreateDeploymentJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html",
      "description": "Create a deployment job",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateFleet": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html",
      "description": "Create a deployment fleet that represents a logical group of robots running the same robot application",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateRobot": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html",
      "description": "Create a robot that can be registered to a fleet",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateRobotApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html",
      "description": "Create a robot application",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateRobotApplicationVersion": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html",
      "description": "Create a snapshot of a robot application",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:GetObject"
      ],
      "resourceTypes": {
        "robotApplication": {
          "required": true
        }
      }
    },
    "CreateSimulationApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html",
      "description": "Create a simulation application",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateSimulationApplicationVersion": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html",
      "description": "Create a snapshot of a simulation application",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:GetObject"
      ],
      "resourceTypes": {
        "simulationApplication": {
          "required": true
        }
      }
    },
    "CreateSimulationJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html",
      "description": "Create a simulation job",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteFleet": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html",
      "description": "Delete a deployment fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentFleet": {
          "required": true
        }
      }
    },
    "DeleteRobot": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html",
      "description": "Delete a robot",
      "accessLevel": "Write",
      "resourceTypes": {
        "robot": {
          "required": true
        }
      }
    },
    "DeleteRobotApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html",
      "description": "Delete a robot application",
      "accessLevel": "Write",
      "resourceTypes": {
        "robotApplication": {
          "required": true
        }
      }
    },
    "DeleteSimulationApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html",
      "description": "Delete a simulation application",
      "accessLevel": "Write",
      "resourceTypes": {
        "simulationApplication": {
          "required": true
        }
      }
    },
    "DeregisterRobot": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html",
      "description": "Deregister a robot from a fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentFleet": {
          "required": true
        },
        "robot": {
          "required": true
        }
      }
    },
    "DescribeDeploymentJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html",
      "description": "Describe a deployment job",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentJob": {
          "required": true
        }
      }
    },
    "DescribeFleet": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html",
      "description": "Describe a deployment fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentFleet": {
          "required": true
        }
      }
    },
    "DescribeRobot": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html",
      "description": "Describe a robot",
      "accessLevel": "Read",
      "resourceTypes": {
        "robot": {
          "required": true
        }
      }
    },
    "DescribeRobotApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html",
      "description": "Describe a robot application",
      "accessLevel": "Read",
      "resourceTypes": {
        "robotApplication": {
          "required": true
        }
      }
    },
    "DescribeSimulationApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html",
      "description": "Describe a simulation application",
      "accessLevel": "Read",
      "resourceTypes": {
        "simulationApplication": {
          "required": true
        }
      }
    },
    "DescribeSimulationJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html",
      "description": "Describe a simulation job",
      "accessLevel": "Read",
      "resourceTypes": {
        "simulationJob": {
          "required": true
        }
      }
    },
    "DescribeSimulationJobBatch": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html",
      "description": "Describe a simulation job batch",
      "accessLevel": "Read",
      "resourceTypes": {
        "simulationJobBatch": {
          "required": true
        }
      }
    },
    "ListDeploymentJobs": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html",
      "description": "List deployment jobs",
      "accessLevel": "List"
    },
    "ListFleets": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html",
      "description": "List fleets",
      "accessLevel": "List"
    },
    "ListRobotApplications": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html",
      "description": "List robot applications",
      "accessLevel": "List"
    },
    "ListRobots": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html",
      "description": "List robots",
      "accessLevel": "List"
    },
    "ListSimulationApplications": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html",
      "description": "List simulation applications",
      "accessLevel": "List"
    },
    "ListSimulationJobBatches": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html",
      "description": "List simulation job batches",
      "accessLevel": "List"
    },
    "ListSimulationJobs": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html",
      "description": "List simulation jobs",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html",
      "description": "List tags for a RoboMaker resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentFleet": {
          "required": false
        },
        "deploymentJob": {
          "required": false
        },
        "robot": {
          "required": false
        },
        "robotApplication": {
          "required": false
        },
        "simulationApplication": {
          "required": false
        },
        "simulationJob": {
          "required": false
        },
        "simulationJobBatch": {
          "required": false
        }
      }
    },
    "RegisterRobot": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html",
      "description": "Register a robot to a fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentFleet": {
          "required": true
        },
        "robot": {
          "required": true
        }
      }
    },
    "RestartSimulationJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html",
      "description": "Restart a running simulation job",
      "accessLevel": "Write",
      "resourceTypes": {
        "simulationJob": {
          "required": true
        }
      }
    },
    "StartSimulationJobBatch": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html",
      "description": "Create a simulation job batch",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "SyncDeploymentJob": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html",
      "description": "Ensures the most recently deployed robot application is deployed to all robots in the fleet",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "resourceTypes": {
        "deploymentFleet": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html",
      "description": "Add tags to a RoboMaker resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentFleet": {
          "required": false
        },
        "deploymentJob": {
          "required": false
        },
        "robot": {
          "required": false
        },
        "robotApplication": {
          "required": false
        },
        "simulationApplication": {
          "required": false
        },
        "simulationJob": {
          "required": false
        },
        "simulationJobBatch": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html",
      "description": "Remove tags from a RoboMaker resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentFleet": {
          "required": false
        },
        "deploymentJob": {
          "required": false
        },
        "robot": {
          "required": false
        },
        "robotApplication": {
          "required": false
        },
        "simulationApplication": {
          "required": false
        },
        "simulationJob": {
          "required": false
        },
        "simulationJobBatch": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateRobotApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html",
      "description": "Update a robot application",
      "accessLevel": "Write",
      "resourceTypes": {
        "robotApplication": {
          "required": true
        }
      }
    },
    "UpdateSimulationApplication": {
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html",
      "description": "Update a simulation application",
      "accessLevel": "Write",
      "resourceTypes": {
        "simulationApplication": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "robotApplication": {
      "name": "robotApplication",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/managing-robot-applications.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:robot-application/${ApplicationName}/${CreatedOnEpoch}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "simulationApplication": {
      "name": "simulationApplication",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:simulation-application/${ApplicationName}/${CreatedOnEpoch}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "simulationJob": {
      "name": "simulationJob",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/simulation.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:simulation-job/${SimulationJobId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "simulationJobBatch": {
      "name": "simulationJobBatch",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/simulation-job-batch.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:simulation-job-batch/${SimulationJobBatchId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deploymentJob": {
      "name": "deploymentJob",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/deployment.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:deployment-job/${DeploymentJobId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "robot": {
      "name": "robot",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:robot/${RobotName}/${CreatedOnEpoch}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deploymentFleet": {
      "name": "deploymentFleet",
      "url": "https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html",
      "arn": "arn:${Partition}:robomaker:${Region}:${Account}:deployment-fleet/${FleetName}/${CreatedOnEpoch}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [robomaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Describe multiple simulation jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html
   */
  public toBatchDescribeSimulationJob() {
    this.add('robomaker:BatchDescribeSimulationJob');
    return this;
  }

  /**
   * Cancel a deployment job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html
   */
  public toCancelDeploymentJob() {
    this.add('robomaker:CancelDeploymentJob');
    return this;
  }

  /**
   * Cancel a simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html
   */
  public toCancelSimulationJob() {
    this.add('robomaker:CancelSimulationJob');
    return this;
  }

  /**
   * Cancel a simulation job batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html
   */
  public toCancelSimulationJobBatch() {
    this.add('robomaker:CancelSimulationJobBatch');
    return this;
  }

  /**
   * Create a deployment job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html
   */
  public toCreateDeploymentJob() {
    this.add('robomaker:CreateDeploymentJob');
    return this;
  }

  /**
   * Create a deployment fleet that represents a logical group of robots running the same robot application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html
   */
  public toCreateFleet() {
    this.add('robomaker:CreateFleet');
    return this;
  }

  /**
   * Create a robot that can be registered to a fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html
   */
  public toCreateRobot() {
    this.add('robomaker:CreateRobot');
    return this;
  }

  /**
   * Create a robot application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html
   */
  public toCreateRobotApplication() {
    this.add('robomaker:CreateRobotApplication');
    return this;
  }

  /**
   * Create a snapshot of a robot application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html
   */
  public toCreateRobotApplicationVersion() {
    this.add('robomaker:CreateRobotApplicationVersion');
    return this;
  }

  /**
   * Create a simulation application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html
   */
  public toCreateSimulationApplication() {
    this.add('robomaker:CreateSimulationApplication');
    return this;
  }

  /**
   * Create a snapshot of a simulation application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html
   */
  public toCreateSimulationApplicationVersion() {
    this.add('robomaker:CreateSimulationApplicationVersion');
    return this;
  }

  /**
   * Create a simulation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html
   */
  public toCreateSimulationJob() {
    this.add('robomaker:CreateSimulationJob');
    return this;
  }

  /**
   * Delete a deployment fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    this.add('robomaker:DeleteFleet');
    return this;
  }

  /**
   * Delete a robot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html
   */
  public toDeleteRobot() {
    this.add('robomaker:DeleteRobot');
    return this;
  }

  /**
   * Delete a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html
   */
  public toDeleteRobotApplication() {
    this.add('robomaker:DeleteRobotApplication');
    return this;
  }

  /**
   * Delete a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html
   */
  public toDeleteSimulationApplication() {
    this.add('robomaker:DeleteSimulationApplication');
    return this;
  }

  /**
   * Deregister a robot from a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html
   */
  public toDeregisterRobot() {
    this.add('robomaker:DeregisterRobot');
    return this;
  }

  /**
   * Describe a deployment job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html
   */
  public toDescribeDeploymentJob() {
    this.add('robomaker:DescribeDeploymentJob');
    return this;
  }

  /**
   * Describe a deployment fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html
   */
  public toDescribeFleet() {
    this.add('robomaker:DescribeFleet');
    return this;
  }

  /**
   * Describe a robot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html
   */
  public toDescribeRobot() {
    this.add('robomaker:DescribeRobot');
    return this;
  }

  /**
   * Describe a robot application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html
   */
  public toDescribeRobotApplication() {
    this.add('robomaker:DescribeRobotApplication');
    return this;
  }

  /**
   * Describe a simulation application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html
   */
  public toDescribeSimulationApplication() {
    this.add('robomaker:DescribeSimulationApplication');
    return this;
  }

  /**
   * Describe a simulation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html
   */
  public toDescribeSimulationJob() {
    this.add('robomaker:DescribeSimulationJob');
    return this;
  }

  /**
   * Describe a simulation job batch
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html
   */
  public toDescribeSimulationJobBatch() {
    this.add('robomaker:DescribeSimulationJobBatch');
    return this;
  }

  /**
   * List deployment jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html
   */
  public toListDeploymentJobs() {
    this.add('robomaker:ListDeploymentJobs');
    return this;
  }

  /**
   * List fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html
   */
  public toListFleets() {
    this.add('robomaker:ListFleets');
    return this;
  }

  /**
   * List robot applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html
   */
  public toListRobotApplications() {
    this.add('robomaker:ListRobotApplications');
    return this;
  }

  /**
   * List robots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html
   */
  public toListRobots() {
    this.add('robomaker:ListRobots');
    return this;
  }

  /**
   * List simulation applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html
   */
  public toListSimulationApplications() {
    this.add('robomaker:ListSimulationApplications');
    return this;
  }

  /**
   * List simulation job batches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html
   */
  public toListSimulationJobBatches() {
    this.add('robomaker:ListSimulationJobBatches');
    return this;
  }

  /**
   * List simulation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html
   */
  public toListSimulationJobs() {
    this.add('robomaker:ListSimulationJobs');
    return this;
  }

  /**
   * List tags for a RoboMaker resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('robomaker:ListTagsForResource');
    return this;
  }

  /**
   * Register a robot to a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html
   */
  public toRegisterRobot() {
    this.add('robomaker:RegisterRobot');
    return this;
  }

  /**
   * Restart a running simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html
   */
  public toRestartSimulationJob() {
    this.add('robomaker:RestartSimulationJob');
    return this;
  }

  /**
   * Create a simulation job batch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html
   */
  public toStartSimulationJobBatch() {
    this.add('robomaker:StartSimulationJobBatch');
    return this;
  }

  /**
   * Ensures the most recently deployed robot application is deployed to all robots in the fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html
   */
  public toSyncDeploymentJob() {
    this.add('robomaker:SyncDeploymentJob');
    return this;
  }

  /**
   * Add tags to a RoboMaker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.add('robomaker:TagResource');
    return this;
  }

  /**
   * Remove tags from a RoboMaker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('robomaker:UntagResource');
    return this;
  }

  /**
   * Update a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html
   */
  public toUpdateRobotApplication() {
    this.add('robomaker:UpdateRobotApplication');
    return this;
  }

  /**
   * Update a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html
   */
  public toUpdateSimulationApplication() {
    this.add('robomaker:UpdateSimulationApplication');
    return this;
  }

  /**
   * Adds a resource of type robotApplication to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-robot-applications.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobotApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:robot-application/${ApplicationName}/${CreatedOnEpoch}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type simulationApplication to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-application/${ApplicationName}/${CreatedOnEpoch}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type simulationJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation.html
   *
   * @param simulationJobId - Identifier for the simulationJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJob(simulationJobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-job/${SimulationJobId}';
    arn = arn.replace('${SimulationJobId}', simulationJobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type simulationJobBatch to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation-job-batch.html
   *
   * @param simulationJobBatchId - Identifier for the simulationJobBatchId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJobBatch(simulationJobBatchId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-job-batch/${SimulationJobBatchId}';
    arn = arn.replace('${SimulationJobBatchId}', simulationJobBatchId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/deployment.html
   *
   * @param deploymentJobId - Identifier for the deploymentJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentJob(deploymentJobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:deployment-job/${DeploymentJobId}';
    arn = arn.replace('${DeploymentJobId}', deploymentJobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type robot to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html
   *
   * @param robotName - Identifier for the robotName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobot(robotName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:robot/${RobotName}/${CreatedOnEpoch}';
    arn = arn.replace('${RobotName}', robotName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentFleet to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   *
   * @param fleetName - Identifier for the fleetName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentFleet(fleetName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:deployment-fleet/${FleetName}/${CreatedOnEpoch}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
