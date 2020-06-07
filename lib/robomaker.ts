import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service robomaker
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html
 */
export class Robomaker extends PolicyStatement {
    public servicePrefix = 'robomaker';
    public actions : Actions = {
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
            "conditions": [
                "aws:TagKeys",
                "aws:RequestTag/${TagKey}"
            ]
        },
        "SyncDeploymentJob": {
            "url": "https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html",
            "description": "Ensures the most recently deployed robot application is deployed to all robots in the fleet",
            "accessLevel": "Write",
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

    /**
     * Describe multiple simulation jobs
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html
     */
    public batchDescribeSimulationJob () {
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
    public cancelDeploymentJob () {
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
    public cancelSimulationJob () {
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
    public cancelSimulationJobBatch () {
        this.add('robomaker:CancelSimulationJobBatch');
        return this;
    }

    /**
     * Create a deployment job
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html
     */
    public createDeploymentJob () {
        this.add('robomaker:CreateDeploymentJob');
        return this;
    }

    /**
     * Create a deployment fleet that represents a logical group of robots running the same robot application
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html
     */
    public createFleet () {
        this.add('robomaker:CreateFleet');
        return this;
    }

    /**
     * Create a robot that can be registered to a fleet
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html
     */
    public createRobot () {
        this.add('robomaker:CreateRobot');
        return this;
    }

    /**
     * Create a robot application
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html
     */
    public createRobotApplication () {
        this.add('robomaker:CreateRobotApplication');
        return this;
    }

    /**
     * Create a snapshot of a robot application
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html
     */
    public createRobotApplicationVersion () {
        this.add('robomaker:CreateRobotApplicationVersion');
        return this;
    }

    /**
     * Create a simulation application
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html
     */
    public createSimulationApplication () {
        this.add('robomaker:CreateSimulationApplication');
        return this;
    }

    /**
     * Create a snapshot of a simulation application
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html
     */
    public createSimulationApplicationVersion () {
        this.add('robomaker:CreateSimulationApplicationVersion');
        return this;
    }

    /**
     * Create a simulation job
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html
     */
    public createSimulationJob () {
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
    public deleteFleet () {
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
    public deleteRobot () {
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
    public deleteRobotApplication () {
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
    public deleteSimulationApplication () {
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
    public deregisterRobot () {
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
    public describeDeploymentJob () {
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
    public describeFleet () {
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
    public describeRobot () {
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
    public describeRobotApplication () {
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
    public describeSimulationApplication () {
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
    public describeSimulationJob () {
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
    public describeSimulationJobBatch () {
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
    public listDeploymentJobs () {
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
    public listFleets () {
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
    public listRobotApplications () {
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
    public listRobots () {
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
    public listSimulationApplications () {
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
    public listSimulationJobBatches () {
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
    public listSimulationJobs () {
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
    public listTagsForResource () {
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
    public registerRobot () {
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
    public restartSimulationJob () {
        this.add('robomaker:RestartSimulationJob');
        return this;
    }

    /**
     * Create a simulation job batch
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html
     */
    public startSimulationJobBatch () {
        this.add('robomaker:StartSimulationJobBatch');
        return this;
    }

    /**
     * Ensures the most recently deployed robot application is deployed to all robots in the fleet
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html
     */
    public syncDeploymentJob () {
        this.add('robomaker:SyncDeploymentJob');
        return this;
    }

    /**
     * Add tags to a RoboMaker resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html
     */
    public tagResource () {
        this.add('robomaker:TagResource');
        return this;
    }

    /**
     * Remove tags from a RoboMaker resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html
     */
    public untagResource () {
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
    public updateRobotApplication () {
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
    public updateSimulationApplication () {
        this.add('robomaker:UpdateSimulationApplication');
        return this;
    }
}
