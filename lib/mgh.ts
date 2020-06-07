import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service mgh
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html
 */
export class Mgh extends PolicyStatement {
    public servicePrefix = 'mgh';
    public actions : Actions = {
        "AssociateCreatedArtifact": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html",
            "description": "Associate a given AWS artifact to a MigrationTask",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "AssociateDiscoveredResource": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html",
            "description": "Associate a given ADS resource to a MigrationTask",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "CreateHomeRegionControl": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html",
            "description": "Create a Migration Hub Home Region Control",
            "accessLevel": "Write"
        },
        "CreateProgressUpdateStream": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html",
            "description": "Create a ProgressUpdateStream",
            "accessLevel": "Write",
            "resourceTypes": {
                "progressUpdateStream": {
                    "required": true
                }
            }
        },
        "DeleteProgressUpdateStream": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html",
            "description": "Delete a ProgressUpdateStream",
            "accessLevel": "Write",
            "resourceTypes": {
                "progressUpdateStream": {
                    "required": true
                }
            }
        },
        "DescribeApplicationState": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html",
            "description": "Get an Application Discovery Service Application's state",
            "accessLevel": "Read"
        },
        "DescribeHomeRegionControls": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html",
            "description": "List Home Region Controls",
            "accessLevel": "List"
        },
        "DescribeMigrationTask": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html",
            "description": "Describe a MigrationTask",
            "accessLevel": "Read",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "DisassociateCreatedArtifact": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html",
            "description": "Disassociate a given AWS artifact from a MigrationTask",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "DisassociateDiscoveredResource": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html",
            "description": "Disassociate a given ADS resource from a MigrationTask",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "GetHomeRegion": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html",
            "description": "Get the Migration Hub Home Region",
            "accessLevel": "Read"
        },
        "ImportMigrationTask": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html",
            "description": "Import a MigrationTask",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "ListCreatedArtifacts": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html",
            "description": "List associated created artifacts for a MigrationTask",
            "accessLevel": "List",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "ListDiscoveredResources": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html",
            "description": "List associated ADS resources from MigrationTask",
            "accessLevel": "List",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "ListMigrationTasks": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html",
            "description": "List MigrationTasks",
            "accessLevel": "List"
        },
        "ListProgressUpdateStreams": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html",
            "description": "List ProgressUpdateStreams",
            "accessLevel": "List"
        },
        "NotifyApplicationState": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html",
            "description": "Update an Application Discovery Service Application's state",
            "accessLevel": "Write"
        },
        "NotifyMigrationTaskState": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html",
            "description": "Notify latest MigrationTask state",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        },
        "PutResourceAttributes": {
            "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html",
            "description": "Put ResourceAttributes",
            "accessLevel": "Write",
            "resourceTypes": {
                "migrationTask": {
                    "required": true
                }
            }
        }
    };

    /**
     * Associate a given AWS artifact to a MigrationTask
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
     */
    public associateCreatedArtifact () {
        this.add('mgh:AssociateCreatedArtifact');
        return this;
    }

    /**
     * Associate a given ADS resource to a MigrationTask
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
     */
    public associateDiscoveredResource () {
        this.add('mgh:AssociateDiscoveredResource');
        return this;
    }

    /**
     * Create a Migration Hub Home Region Control
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html
     */
    public createHomeRegionControl () {
        this.add('mgh:CreateHomeRegionControl');
        return this;
    }

    /**
     * Create a ProgressUpdateStream
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
     */
    public createProgressUpdateStream () {
        this.add('mgh:CreateProgressUpdateStream');
        return this;
    }

    /**
     * Delete a ProgressUpdateStream
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
     */
    public deleteProgressUpdateStream () {
        this.add('mgh:DeleteProgressUpdateStream');
        return this;
    }

    /**
     * Get an Application Discovery Service Application's state
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
     */
    public describeApplicationState () {
        this.add('mgh:DescribeApplicationState');
        return this;
    }

    /**
     * List Home Region Controls
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html
     */
    public describeHomeRegionControls () {
        this.add('mgh:DescribeHomeRegionControls');
        return this;
    }

    /**
     * Describe a MigrationTask
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
     */
    public describeMigrationTask () {
        this.add('mgh:DescribeMigrationTask');
        return this;
    }

    /**
     * Disassociate a given AWS artifact from a MigrationTask
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
     */
    public disassociateCreatedArtifact () {
        this.add('mgh:DisassociateCreatedArtifact');
        return this;
    }

    /**
     * Disassociate a given ADS resource from a MigrationTask
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
     */
    public disassociateDiscoveredResource () {
        this.add('mgh:DisassociateDiscoveredResource');
        return this;
    }

    /**
     * Get the Migration Hub Home Region
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html
     */
    public getHomeRegion () {
        this.add('mgh:GetHomeRegion');
        return this;
    }

    /**
     * Import a MigrationTask
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
     */
    public importMigrationTask () {
        this.add('mgh:ImportMigrationTask');
        return this;
    }

    /**
     * List associated created artifacts for a MigrationTask
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
     */
    public listCreatedArtifacts () {
        this.add('mgh:ListCreatedArtifacts');
        return this;
    }

    /**
     * List associated ADS resources from MigrationTask
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
     */
    public listDiscoveredResources () {
        this.add('mgh:ListDiscoveredResources');
        return this;
    }

    /**
     * List MigrationTasks
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
     */
    public listMigrationTasks () {
        this.add('mgh:ListMigrationTasks');
        return this;
    }

    /**
     * List ProgressUpdateStreams
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
     */
    public listProgressUpdateStreams () {
        this.add('mgh:ListProgressUpdateStreams');
        return this;
    }

    /**
     * Update an Application Discovery Service Application's state
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
     */
    public notifyApplicationState () {
        this.add('mgh:NotifyApplicationState');
        return this;
    }

    /**
     * Notify latest MigrationTask state
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
     */
    public notifyMigrationTaskState () {
        this.add('mgh:NotifyMigrationTaskState');
        return this;
    }

    /**
     * Put ResourceAttributes
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
     */
    public putResourceAttributes () {
        this.add('mgh:PutResourceAttributes');
        return this;
    }
}
