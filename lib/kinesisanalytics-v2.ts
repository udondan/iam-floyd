import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service kinesisanalytics
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalyticsv2.html
 */
export class KinesisanalyticsV2 extends PolicyStatement {
    public servicePrefix = 'kinesisanalytics';
    public actions : Actions = {
        "AddApplicationCloudWatchLoggingOption": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html",
            "description": "Adds cloudwatch logging option to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "AddApplicationInput": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html",
            "description": "Adds input to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "AddApplicationInputProcessingConfiguration": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html",
            "description": "Adds input processing configuration to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "AddApplicationOutput": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html",
            "description": "Adds output to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "AddApplicationReferenceDataSource": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html",
            "description": "Adds reference data source to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "AddApplicationVpcConfiguration": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html",
            "description": "Adds VPC configuration to the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "CreateApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html",
            "description": "Creates an application.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateApplicationSnapshot": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html",
            "description": "Creates a snapshot for an application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html",
            "description": "Deletes the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationCloudWatchLoggingOption": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html",
            "description": "Deletes the specified cloudwatch logging option of the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationInputProcessingConfiguration": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html",
            "description": "Deletes the specified input processing configuration of the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationOutput": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html",
            "description": "Deletes the specified output of the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationReferenceDataSource": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html",
            "description": "Deletes the specified reference data source of the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationSnapshot": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html",
            "description": "Deletes a snapshot for an application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DeleteApplicationVpcConfiguration": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html",
            "description": "Deletes the specified VPC configuration of the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DescribeApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html",
            "description": "Describes the specified application.",
            "accessLevel": "Read",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DescribeApplicationSnapshot": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html",
            "description": "Describes an application snapshot.",
            "accessLevel": "Read",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "DiscoverInputSchema": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html",
            "description": "Discovers the input schema for the application.",
            "accessLevel": "Read"
        },
        "ListApplicationSnapshots": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html",
            "description": "Lists the snapshots for an application.",
            "accessLevel": "Read",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "ListApplications": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html",
            "description": "List applications for the account",
            "accessLevel": "List"
        },
        "ListTagsForResource": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html",
            "description": "Fetch the tags associated with the application.",
            "accessLevel": "Read",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "StartApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html",
            "description": "Starts the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "StopApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html",
            "description": "Stops the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        },
        "TagResource": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html",
            "description": "Add tags to the application.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UntagResource": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html",
            "description": "Remove the specified tags from the application.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            },
            "conditions": [
                "aws:TagKeys"
            ]
        },
        "UpdateApplication": {
            "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html",
            "description": "Updates the application.",
            "accessLevel": "Write",
            "resourceTypes": {
                "application": {
                    "required": true
                }
            }
        }
    };

    /**
     * Adds cloudwatch logging option to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html
     */
    public addApplicationCloudWatchLoggingOption () {
        this.add('kinesisanalytics:AddApplicationCloudWatchLoggingOption');
        return this;
    }

    /**
     * Adds input to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html
     */
    public addApplicationInput () {
        this.add('kinesisanalytics:AddApplicationInput');
        return this;
    }

    /**
     * Adds input processing configuration to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html
     */
    public addApplicationInputProcessingConfiguration () {
        this.add('kinesisanalytics:AddApplicationInputProcessingConfiguration');
        return this;
    }

    /**
     * Adds output to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html
     */
    public addApplicationOutput () {
        this.add('kinesisanalytics:AddApplicationOutput');
        return this;
    }

    /**
     * Adds reference data source to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html
     */
    public addApplicationReferenceDataSource () {
        this.add('kinesisanalytics:AddApplicationReferenceDataSource');
        return this;
    }

    /**
     * Adds VPC configuration to the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html
     */
    public addApplicationVpcConfiguration () {
        this.add('kinesisanalytics:AddApplicationVpcConfiguration');
        return this;
    }

    /**
     * Creates an application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html
     */
    public createApplication () {
        this.add('kinesisanalytics:CreateApplication');
        return this;
    }

    /**
     * Creates a snapshot for an application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html
     */
    public createApplicationSnapshot () {
        this.add('kinesisanalytics:CreateApplicationSnapshot');
        return this;
    }

    /**
     * Deletes the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html
     */
    public deleteApplication () {
        this.add('kinesisanalytics:DeleteApplication');
        return this;
    }

    /**
     * Deletes the specified cloudwatch logging option of the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html
     */
    public deleteApplicationCloudWatchLoggingOption () {
        this.add('kinesisanalytics:DeleteApplicationCloudWatchLoggingOption');
        return this;
    }

    /**
     * Deletes the specified input processing configuration of the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html
     */
    public deleteApplicationInputProcessingConfiguration () {
        this.add('kinesisanalytics:DeleteApplicationInputProcessingConfiguration');
        return this;
    }

    /**
     * Deletes the specified output of the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html
     */
    public deleteApplicationOutput () {
        this.add('kinesisanalytics:DeleteApplicationOutput');
        return this;
    }

    /**
     * Deletes the specified reference data source of the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html
     */
    public deleteApplicationReferenceDataSource () {
        this.add('kinesisanalytics:DeleteApplicationReferenceDataSource');
        return this;
    }

    /**
     * Deletes a snapshot for an application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html
     */
    public deleteApplicationSnapshot () {
        this.add('kinesisanalytics:DeleteApplicationSnapshot');
        return this;
    }

    /**
     * Deletes the specified VPC configuration of the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html
     */
    public deleteApplicationVpcConfiguration () {
        this.add('kinesisanalytics:DeleteApplicationVpcConfiguration');
        return this;
    }

    /**
     * Describes the specified application.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html
     */
    public describeApplication () {
        this.add('kinesisanalytics:DescribeApplication');
        return this;
    }

    /**
     * Describes an application snapshot.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html
     */
    public describeApplicationSnapshot () {
        this.add('kinesisanalytics:DescribeApplicationSnapshot');
        return this;
    }

    /**
     * Discovers the input schema for the application.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html
     */
    public discoverInputSchema () {
        this.add('kinesisanalytics:DiscoverInputSchema');
        return this;
    }

    /**
     * Lists the snapshots for an application.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html
     */
    public listApplicationSnapshots () {
        this.add('kinesisanalytics:ListApplicationSnapshots');
        return this;
    }

    /**
     * List applications for the account
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html
     */
    public listApplications () {
        this.add('kinesisanalytics:ListApplications');
        return this;
    }

    /**
     * Fetch the tags associated with the application.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('kinesisanalytics:ListTagsForResource');
        return this;
    }

    /**
     * Starts the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html
     */
    public startApplication () {
        this.add('kinesisanalytics:StartApplication');
        return this;
    }

    /**
     * Stops the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html
     */
    public stopApplication () {
        this.add('kinesisanalytics:StopApplication');
        return this;
    }

    /**
     * Add tags to the application.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html
     */
    public tagResource () {
        this.add('kinesisanalytics:TagResource');
        return this;
    }

    /**
     * Remove the specified tags from the application.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html
     */
    public untagResource () {
        this.add('kinesisanalytics:UntagResource');
        return this;
    }

    /**
     * Updates the application.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html
     */
    public updateApplication () {
        this.add('kinesisanalytics:UpdateApplication');
        return this;
    }
}
