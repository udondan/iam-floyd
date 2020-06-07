import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service serverlessrepo
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html
 */
export class Serverlessrepo extends PolicyStatement {
    public servicePrefix = 'serverlessrepo';
    public actions : Actions = {
        "CreateApplication": {
            "url": "",
            "description": "Creates an application, optionally including an AWS SAM file to create the first application version in the same call.",
            "accessLevel": "Write"
        },
        "CreateApplicationVersion": {
            "url": "",
            "description": "Creates an application version.",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "CreateCloudFormationChangeSet": {
            "url": "",
            "description": "Creates an AWS CloudFormation ChangeSet for the given application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            },
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "CreateCloudFormationTemplate": {
            "url": "",
            "description": "Creates an AWS CloudFormation template",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            },
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "DeleteApplication": {
            "url": "",
            "description": "Deletes the specified application",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "GetApplication": {
            "url": "",
            "description": "Gets the specified application.",
            "accessLevel": "Read",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            },
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "GetApplicationPolicy": {
            "url": "",
            "description": "Gets the policy for the specified application.",
            "accessLevel": "Read",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "GetCloudFormationTemplate": {
            "url": "",
            "description": "Gets the specified AWS CloudFormation template",
            "accessLevel": "Read",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "ListApplicationDependencies": {
            "url": "",
            "description": "Retrieves the list of applications nested in the containing application",
            "accessLevel": "List",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            },
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "ListApplicationVersions": {
            "url": "",
            "description": "Lists versions for the specified application owned by the requester.",
            "accessLevel": "List",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            },
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "ListApplications": {
            "url": "",
            "description": "Lists applications owned by the requester.",
            "accessLevel": "List"
        },
        "PutApplicationPolicy": {
            "url": "",
            "description": "Puts the policy for the specified application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "SearchApplications": {
            "url": "",
            "description": "Gets all applications authorized for this user",
            "accessLevel": "Read",
            "conditions": [
                "serverlessrepo:applicationType"
            ]
        },
        "UnshareApplication": {
            "url": "",
            "description": "Unshares the specified application",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        },
        "UpdateApplication": {
            "url": "",
            "description": "Updates meta-data of the application",
            "accessLevel": "Write",
            "resourceTypes": {
                "applications": {
                    "required": true
                }
            }
        }
    };

    /**
     * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
     *
     * Access Level: Write
     *
     *
     */
    public createApplication () {
        this.add('serverlessrepo:CreateApplication');
        return this;
    }

    /**
     * Creates an application version.
     *
     * Access Level: Write
     *
     *
     */
    public createApplicationVersion () {
        this.add('serverlessrepo:CreateApplicationVersion');
        return this;
    }

    /**
     * Creates an AWS CloudFormation ChangeSet for the given application.
     *
     * Access Level: Write
     *
     *
     */
    public createCloudFormationChangeSet () {
        this.add('serverlessrepo:CreateCloudFormationChangeSet');
        return this;
    }

    /**
     * Creates an AWS CloudFormation template
     *
     * Access Level: Write
     *
     *
     */
    public createCloudFormationTemplate () {
        this.add('serverlessrepo:CreateCloudFormationTemplate');
        return this;
    }

    /**
     * Deletes the specified application
     *
     * Access Level: Write
     *
     *
     */
    public deleteApplication () {
        this.add('serverlessrepo:DeleteApplication');
        return this;
    }

    /**
     * Gets the specified application.
     *
     * Access Level: Read
     *
     *
     */
    public getApplication () {
        this.add('serverlessrepo:GetApplication');
        return this;
    }

    /**
     * Gets the policy for the specified application.
     *
     * Access Level: Read
     *
     *
     */
    public getApplicationPolicy () {
        this.add('serverlessrepo:GetApplicationPolicy');
        return this;
    }

    /**
     * Gets the specified AWS CloudFormation template
     *
     * Access Level: Read
     *
     *
     */
    public getCloudFormationTemplate () {
        this.add('serverlessrepo:GetCloudFormationTemplate');
        return this;
    }

    /**
     * Retrieves the list of applications nested in the containing application
     *
     * Access Level: List
     *
     *
     */
    public listApplicationDependencies () {
        this.add('serverlessrepo:ListApplicationDependencies');
        return this;
    }

    /**
     * Lists versions for the specified application owned by the requester.
     *
     * Access Level: List
     *
     *
     */
    public listApplicationVersions () {
        this.add('serverlessrepo:ListApplicationVersions');
        return this;
    }

    /**
     * Lists applications owned by the requester.
     *
     * Access Level: List
     *
     *
     */
    public listApplications () {
        this.add('serverlessrepo:ListApplications');
        return this;
    }

    /**
     * Puts the policy for the specified application.
     *
     * Access Level: Write
     *
     *
     */
    public putApplicationPolicy () {
        this.add('serverlessrepo:PutApplicationPolicy');
        return this;
    }

    /**
     * Gets all applications authorized for this user
     *
     * Access Level: Read
     *
     *
     */
    public searchApplications () {
        this.add('serverlessrepo:SearchApplications');
        return this;
    }

    /**
     * Unshares the specified application
     *
     * Access Level: Write
     *
     *
     */
    public unshareApplication () {
        this.add('serverlessrepo:UnshareApplication');
        return this;
    }

    /**
     * Updates meta-data of the application
     *
     * Access Level: Write
     *
     *
     */
    public updateApplication () {
        this.add('serverlessrepo:UpdateApplication');
        return this;
    }
}
