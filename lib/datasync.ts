import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service datasync
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datasync.html
 */
export class Datasync extends PolicyStatement {
    public servicePrefix = 'datasync';
    public actions : Actions = {
        "CancelTaskExecution": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html",
            "description": "Cancels execution of a sync task.",
            "accessLevel": "Write",
            "resourceTypes": {
                "taskexecution": {
                    "required": true
                }
            }
        },
        "CreateAgent": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html",
            "description": "Activates an agent that you have deployed on your host.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateLocationEfs": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationEfs.html",
            "description": "Creates an endpoint for an Amazon EFS file system.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateLocationNfs": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationNfs.html",
            "description": "Creates an endpoint for a NFS file system.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateLocationS3": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html",
            "description": "Creates an endpoint for an Amazon S3 bucket.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateLocationSmb": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationSmb.html",
            "description": "Creates an endpoint for an SMB file system.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateTask": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html",
            "description": "Creates a sync task.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "DeleteAgent": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html",
            "description": "Deletes an agent.",
            "accessLevel": "Write",
            "resourceTypes": {
                "agent": {
                    "required": true
                }
            }
        },
        "DeleteLocation": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html",
            "description": "Deletes the configuration of a location used by AWS DataSync.",
            "accessLevel": "Write",
            "resourceTypes": {
                "location": {
                    "required": true
                }
            }
        },
        "DeleteTask": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html",
            "description": "Deletes a sync task.",
            "accessLevel": "Write",
            "resourceTypes": {
                "task": {
                    "required": true
                }
            }
        },
        "DescribeAgent": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html",
            "description": "Returns metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent.",
            "accessLevel": "Read",
            "resourceTypes": {
                "agent": {
                    "required": true
                }
            }
        },
        "DescribeLocationEfs": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html",
            "description": "Returns metadata, such as the path information about an Amazon EFS sync location.",
            "accessLevel": "Read",
            "resourceTypes": {
                "location": {
                    "required": true
                }
            }
        },
        "DescribeLocationNfs": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html",
            "description": "Returns metadata, such as the path information, about a NFS sync location.",
            "accessLevel": "Read",
            "resourceTypes": {
                "location": {
                    "required": true
                }
            }
        },
        "DescribeLocationS3": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html",
            "description": "Returns metadata, such as bucket name, about an Amazon S3 bucket sync location.",
            "accessLevel": "Read",
            "resourceTypes": {
                "location": {
                    "required": true
                }
            }
        },
        "DescribeLocationSmb": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html",
            "description": "Returns metadata, such as the path information, about an SMB sync location.",
            "accessLevel": "Read",
            "resourceTypes": {
                "location": {
                    "required": true
                }
            }
        },
        "DescribeTask": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html",
            "description": "Returns metadata about a sync task.",
            "accessLevel": "Read",
            "resourceTypes": {
                "task": {
                    "required": true
                }
            }
        },
        "DescribeTaskExecution": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html",
            "description": "Returns detailed metadata about a sync task that is being executed.",
            "accessLevel": "Read",
            "resourceTypes": {
                "taskexecution": {
                    "required": true
                }
            }
        },
        "ListAgents": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html",
            "description": "Returns a list of agents owned by an AWS account in a region specified in the request.",
            "accessLevel": "List"
        },
        "ListLocations": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html",
            "description": "Returns a lists of source and destination sync locations.",
            "accessLevel": "List"
        },
        "ListTagsForResource": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html",
            "description": "This operation lists the tags that have been added to the specified resource.",
            "accessLevel": "Read",
            "resourceTypes": {
                "agent": {
                    "required": false
                },
                "location": {
                    "required": false
                },
                "task": {
                    "required": false
                }
            }
        },
        "ListTaskExecutions": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html",
            "description": "Returns a list of executed sync tasks.",
            "accessLevel": "List"
        },
        "ListTasks": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html",
            "description": "Returns a list of all the sync tasks.",
            "accessLevel": "List"
        },
        "StartTaskExecution": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html",
            "description": "Starts a specific invocation of a sync task.",
            "accessLevel": "Write",
            "resourceTypes": {
                "task": {
                    "required": true
                }
            }
        },
        "TagResource": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_TagResource.html",
            "description": "Applies a key-value pair to an AWS resource.",
            "accessLevel": "Write",
            "resourceTypes": {
                "agent": {
                    "required": false
                },
                "location": {
                    "required": false
                },
                "task": {
                    "required": false
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UntagResource": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_UntagResource.html",
            "description": "This operation removes one or more tags from the specified resource.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "agent": {
                    "required": false
                },
                "location": {
                    "required": false
                },
                "task": {
                    "required": false
                }
            },
            "conditions": [
                "aws:TagKeys"
            ]
        },
        "UpdateAgent": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html",
            "description": "Updates the name of an agent.",
            "accessLevel": "Write",
            "resourceTypes": {
                "agent": {
                    "required": true
                }
            }
        },
        "UpdateTask": {
            "url": "https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html",
            "description": "Updates the metadata associated with a sync task.",
            "accessLevel": "Write",
            "resourceTypes": {
                "task": {
                    "required": true
                }
            }
        }
    };

    /**
     * Cancels execution of a sync task.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html
     */
    public cancelTaskExecution () {
        this.add('datasync:CancelTaskExecution');
        return this;
    }

    /**
     * Activates an agent that you have deployed on your host.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html
     */
    public createAgent () {
        this.add('datasync:CreateAgent');
        return this;
    }

    /**
     * Creates an endpoint for an Amazon EFS file system.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationEfs.html
     */
    public createLocationEfs () {
        this.add('datasync:CreateLocationEfs');
        return this;
    }

    /**
     * Creates an endpoint for a NFS file system.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationNfs.html
     */
    public createLocationNfs () {
        this.add('datasync:CreateLocationNfs');
        return this;
    }

    /**
     * Creates an endpoint for an Amazon S3 bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html
     */
    public createLocationS3 () {
        this.add('datasync:CreateLocationS3');
        return this;
    }

    /**
     * Creates an endpoint for an SMB file system.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationSmb.html
     */
    public createLocationSmb () {
        this.add('datasync:CreateLocationSmb');
        return this;
    }

    /**
     * Creates a sync task.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html
     */
    public createTask () {
        this.add('datasync:CreateTask');
        return this;
    }

    /**
     * Deletes an agent.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html
     */
    public deleteAgent () {
        this.add('datasync:DeleteAgent');
        return this;
    }

    /**
     * Deletes the configuration of a location used by AWS DataSync.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html
     */
    public deleteLocation () {
        this.add('datasync:DeleteLocation');
        return this;
    }

    /**
     * Deletes a sync task.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html
     */
    public deleteTask () {
        this.add('datasync:DeleteTask');
        return this;
    }

    /**
     * Returns metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html
     */
    public describeAgent () {
        this.add('datasync:DescribeAgent');
        return this;
    }

    /**
     * Returns metadata, such as the path information about an Amazon EFS sync location.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html
     */
    public describeLocationEfs () {
        this.add('datasync:DescribeLocationEfs');
        return this;
    }

    /**
     * Returns metadata, such as the path information, about a NFS sync location.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html
     */
    public describeLocationNfs () {
        this.add('datasync:DescribeLocationNfs');
        return this;
    }

    /**
     * Returns metadata, such as bucket name, about an Amazon S3 bucket sync location.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html
     */
    public describeLocationS3 () {
        this.add('datasync:DescribeLocationS3');
        return this;
    }

    /**
     * Returns metadata, such as the path information, about an SMB sync location.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html
     */
    public describeLocationSmb () {
        this.add('datasync:DescribeLocationSmb');
        return this;
    }

    /**
     * Returns metadata about a sync task.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html
     */
    public describeTask () {
        this.add('datasync:DescribeTask');
        return this;
    }

    /**
     * Returns detailed metadata about a sync task that is being executed.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html
     */
    public describeTaskExecution () {
        this.add('datasync:DescribeTaskExecution');
        return this;
    }

    /**
     * Returns a list of agents owned by an AWS account in a region specified in the request.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html
     */
    public listAgents () {
        this.add('datasync:ListAgents');
        return this;
    }

    /**
     * Returns a lists of source and destination sync locations.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html
     */
    public listLocations () {
        this.add('datasync:ListLocations');
        return this;
    }

    /**
     * This operation lists the tags that have been added to the specified resource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('datasync:ListTagsForResource');
        return this;
    }

    /**
     * Returns a list of executed sync tasks.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html
     */
    public listTaskExecutions () {
        this.add('datasync:ListTaskExecutions');
        return this;
    }

    /**
     * Returns a list of all the sync tasks.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html
     */
    public listTasks () {
        this.add('datasync:ListTasks');
        return this;
    }

    /**
     * Starts a specific invocation of a sync task.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html
     */
    public startTaskExecution () {
        this.add('datasync:StartTaskExecution');
        return this;
    }

    /**
     * Applies a key-value pair to an AWS resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_TagResource.html
     */
    public tagResource () {
        this.add('datasync:TagResource');
        return this;
    }

    /**
     * This operation removes one or more tags from the specified resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_UntagResource.html
     */
    public untagResource () {
        this.add('datasync:UntagResource');
        return this;
    }

    /**
     * Updates the name of an agent.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html
     */
    public updateAgent () {
        this.add('datasync:UpdateAgent');
        return this;
    }

    /**
     * Updates the metadata associated with a sync task.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html
     */
    public updateTask () {
        this.add('datasync:UpdateTask');
        return this;
    }
}
