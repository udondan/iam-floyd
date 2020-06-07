import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service dataexchange
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html
 */
export class Dataexchange extends PolicyStatement {
    public servicePrefix = 'dataexchange';
    public actions : Actions = {
        "CancelJob": {
            "url": "${APIReferenceDocPage}/v1-jobs.html#CancelJob",
            "description": "Grants permissions to cancel a job.",
            "accessLevel": "Write",
            "resourceTypes": {
                "jobs": {
                    "required": true
                }
            }
        },
        "CreateAsset": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#CreateAsset",
            "description": "Grants permission to create an asset (for example, in a Job).",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:ResourceTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateDataSet": {
            "url": "${APIReferenceDocPage}/v1-data-sets.html#CreateDataSet",
            "description": "Grants permission to create a data set.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:ResourceTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateJob": {
            "url": "${APIReferenceDocPage}/v1-jobs.html#CreateJob",
            "description": "Grants permissions to create a job to import or export assets.",
            "accessLevel": "Write",
            "resourceTypes": {
                "jobs": {
                    "required": true
                }
            }
        },
        "CreateRevision": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#CreateRevision",
            "description": "Grants permission to create a revision.",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:ResourceTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "DeleteAsset": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset",
            "description": "Grants permissions to delete an asset.",
            "accessLevel": "Write",
            "resourceTypes": {
                "assets": {
                    "required": true
                }
            }
        },
        "DeleteDataSet": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid.html#DeleteDataSet",
            "description": "Grants permissions to delete a data set.",
            "accessLevel": "Write",
            "resourceTypes": {
                "data-sets": {
                    "required": true
                }
            }
        },
        "DeleteRevision": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision",
            "description": "Grants permissions to delete a revision.",
            "accessLevel": "Write",
            "resourceTypes": {
                "revisions": {
                    "required": true
                }
            }
        },
        "GetAsset": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset",
            "description": "Grants permissions to get information about an asset and to export it (for example, in a Job).",
            "accessLevel": "Read",
            "resourceTypes": {
                "assets": {
                    "required": true
                }
            }
        },
        "GetDataSet": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid.html#GetDataSet",
            "description": "Grants permission to get information about a data set.",
            "accessLevel": "Read",
            "resourceTypes": {
                "data-sets": {
                    "required": true
                }
            }
        },
        "GetJob": {
            "url": "${APIReferenceDocPage}/v1-jobs.html#GetJob",
            "description": "Grants permissions to get information about a job.",
            "accessLevel": "Write",
            "resourceTypes": {
                "jobs": {
                    "required": true
                }
            }
        },
        "GetRevision": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision",
            "description": "Grants permission to get information about a revision.",
            "accessLevel": "Read",
            "resourceTypes": {
                "revisions": {
                    "required": true
                }
            }
        },
        "ListDataSetRevisions": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions",
            "description": "Grants permissions to list the revisions of a data set.",
            "accessLevel": "List",
            "resourceTypes": {
                "revisions": {
                    "required": true
                }
            }
        },
        "ListDataSets": {
            "url": "${APIReferenceDocPage}/v1-data-sets.html#ListDataSets",
            "description": "Grants permission to list data sets for the account.",
            "accessLevel": "List",
            "resourceTypes": {
                "data-sets": {
                    "required": true
                }
            }
        },
        "ListJobs": {
            "url": "${APIReferenceDocPage}/v1-jobs.html#ListJobs",
            "description": "Grants permissions to list jobs for the account.",
            "accessLevel": "List",
            "resourceTypes": {
                "jobs": {
                    "required": true
                }
            }
        },
        "ListRevisionAssets": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets",
            "description": "Grants permissions to get list the assets of a revision.",
            "accessLevel": "List",
            "resourceTypes": {
                "assets": {
                    "required": true
                }
            }
        },
        "ListTagsForResource": {
            "url": "${APIReferenceDocPage}/tags-resource-arn.html#ListTagsForResource",
            "description": "Grants permission to list the tags that you associated with the specified resource.",
            "accessLevel": "Read",
            "resourceTypes": {
                "data-sets": {
                    "required": false
                },
                "revisions": {
                    "required": false
                }
            }
        },
        "StartJob": {
            "url": "${APIReferenceDocPage}/v1-jobs.html#StartJob",
            "description": "Grants permissions to start a job.",
            "accessLevel": "Write",
            "resourceTypes": {
                "jobs": {
                    "required": true
                }
            }
        },
        "TagResource": {
            "url": "${APIReferenceDocPage}/tags-resource-arn.html#TagResource",
            "description": "Grants permission to add one or more tags to a specified resource.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "data-sets": {
                    "required": false
                },
                "revisions": {
                    "required": false
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UntagResource": {
            "url": "${APIReferenceDocPage}/tags-resource-arn.html#UntagResource",
            "description": "Grants permission to remove one or more tags from a specified resource.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "data-sets": {
                    "required": false
                },
                "revisions": {
                    "required": false
                }
            },
            "conditions": [
                "aws:TagKeys"
            ]
        },
        "UpdateAsset": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset",
            "description": "Grants permissions to get update information about an asset.",
            "accessLevel": "Write",
            "resourceTypes": {
                "assets": {
                    "required": true
                }
            }
        },
        "UpdateDataSet": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid.html#UpdateDataSet",
            "description": "Grants permissions to update information about a data set.",
            "accessLevel": "Write",
            "resourceTypes": {
                "data-sets": {
                    "required": true
                }
            }
        },
        "UpdateRevision": {
            "url": "${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision",
            "description": "Grants permissions to update information about a revision.",
            "accessLevel": "Write",
            "resourceTypes": {
                "revisions": {
                    "required": true
                }
            }
        }
    };

    /**
     * Grants permissions to cancel a job.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-jobs.html#CancelJob
     */
    public cancelJob () {
        this.add('dataexchange:CancelJob');
        return this;
    }

    /**
     * Grants permission to create an asset (for example, in a Job).
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#CreateAsset
     */
    public createAsset () {
        this.add('dataexchange:CreateAsset');
        return this;
    }

    /**
     * Grants permission to create a data set.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets.html#CreateDataSet
     */
    public createDataSet () {
        this.add('dataexchange:CreateDataSet');
        return this;
    }

    /**
     * Grants permissions to create a job to import or export assets.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-jobs.html#CreateJob
     */
    public createJob () {
        this.add('dataexchange:CreateJob');
        return this;
    }

    /**
     * Grants permission to create a revision.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#CreateRevision
     */
    public createRevision () {
        this.add('dataexchange:CreateRevision');
        return this;
    }

    /**
     * Grants permissions to delete an asset.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset
     */
    public deleteAsset () {
        this.add('dataexchange:DeleteAsset');
        return this;
    }

    /**
     * Grants permissions to delete a data set.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid.html#DeleteDataSet
     */
    public deleteDataSet () {
        this.add('dataexchange:DeleteDataSet');
        return this;
    }

    /**
     * Grants permissions to delete a revision.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision
     */
    public deleteRevision () {
        this.add('dataexchange:DeleteRevision');
        return this;
    }

    /**
     * Grants permissions to get information about an asset and to export it (for example, in a Job).
     *
     * Access Level: Read
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset
     */
    public getAsset () {
        this.add('dataexchange:GetAsset');
        return this;
    }

    /**
     * Grants permission to get information about a data set.
     *
     * Access Level: Read
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid.html#GetDataSet
     */
    public getDataSet () {
        this.add('dataexchange:GetDataSet');
        return this;
    }

    /**
     * Grants permissions to get information about a job.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-jobs.html#GetJob
     */
    public getJob () {
        this.add('dataexchange:GetJob');
        return this;
    }

    /**
     * Grants permission to get information about a revision.
     *
     * Access Level: Read
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision
     */
    public getRevision () {
        this.add('dataexchange:GetRevision');
        return this;
    }

    /**
     * Grants permissions to list the revisions of a data set.
     *
     * Access Level: List
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions
     */
    public listDataSetRevisions () {
        this.add('dataexchange:ListDataSetRevisions');
        return this;
    }

    /**
     * Grants permission to list data sets for the account.
     *
     * Access Level: List
     *
     * ${APIReferenceDocPage}/v1-data-sets.html#ListDataSets
     */
    public listDataSets () {
        this.add('dataexchange:ListDataSets');
        return this;
    }

    /**
     * Grants permissions to list jobs for the account.
     *
     * Access Level: List
     *
     * ${APIReferenceDocPage}/v1-jobs.html#ListJobs
     */
    public listJobs () {
        this.add('dataexchange:ListJobs');
        return this;
    }

    /**
     * Grants permissions to get list the assets of a revision.
     *
     * Access Level: List
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets
     */
    public listRevisionAssets () {
        this.add('dataexchange:ListRevisionAssets');
        return this;
    }

    /**
     * Grants permission to list the tags that you associated with the specified resource.
     *
     * Access Level: Read
     *
     * ${APIReferenceDocPage}/tags-resource-arn.html#ListTagsForResource
     */
    public listTagsForResource () {
        this.add('dataexchange:ListTagsForResource');
        return this;
    }

    /**
     * Grants permissions to start a job.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-jobs.html#StartJob
     */
    public startJob () {
        this.add('dataexchange:StartJob');
        return this;
    }

    /**
     * Grants permission to add one or more tags to a specified resource.
     *
     * Access Level: Tagging
     *
     * ${APIReferenceDocPage}/tags-resource-arn.html#TagResource
     */
    public tagResource () {
        this.add('dataexchange:TagResource');
        return this;
    }

    /**
     * Grants permission to remove one or more tags from a specified resource.
     *
     * Access Level: Tagging
     *
     * ${APIReferenceDocPage}/tags-resource-arn.html#UntagResource
     */
    public untagResource () {
        this.add('dataexchange:UntagResource');
        return this;
    }

    /**
     * Grants permissions to get update information about an asset.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset
     */
    public updateAsset () {
        this.add('dataexchange:UpdateAsset');
        return this;
    }

    /**
     * Grants permissions to update information about a data set.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid.html#UpdateDataSet
     */
    public updateDataSet () {
        this.add('dataexchange:UpdateDataSet');
        return this;
    }

    /**
     * Grants permissions to update information about a revision.
     *
     * Access Level: Write
     *
     * ${APIReferenceDocPage}/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision
     */
    public updateRevision () {
        this.add('dataexchange:UpdateRevision');
        return this;
    }
}
