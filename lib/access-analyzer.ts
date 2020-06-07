import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service access-analyzer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_iamaccessanalyzer.html
 */
export class AccessAnalyzer extends PolicyStatement {
    public servicePrefix = 'access-analyzer';
    public actions : Actions = {
        "CreateAnalyzer": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html",
            "description": "Grants permission to create an analyzer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "CreateArchiveRule": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html",
            "description": "Grants permission to create an archive rule for the specified analyzer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                },
                "ArchiveRule": {
                    "required": true
                }
            }
        },
        "DeleteAnalyzer": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html",
            "description": "Grants permission to delete the specified analyzer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "DeleteArchiveRule": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html",
            "description": "Grants permission to delete archive rules for the specified analyzer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                },
                "ArchiveRule": {
                    "required": true
                }
            }
        },
        "GetAnalyzedResource": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html",
            "description": "Grants permission to retrieve information about an analyzed resource.",
            "accessLevel": "Read"
        },
        "GetAnalyzer": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html",
            "description": "Grants permission to retrieve information about analyzers.",
            "accessLevel": "Read",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "GetArchiveRule": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html",
            "description": "Grants permission to retrieve information about archive rules for the specified analyzer.",
            "accessLevel": "Read",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                },
                "ArchiveRule": {
                    "required": true
                }
            }
        },
        "GetFinding": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html",
            "description": "Grants permission to retrieve findings.",
            "accessLevel": "Read"
        },
        "ListAnalyzedResources": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html",
            "description": "Grants permission to retrieve a list of resources that have been analyzed.",
            "accessLevel": "Read"
        },
        "ListAnalyzers": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html",
            "description": "Grants permission to retrieves a list of analyzers.",
            "accessLevel": "List"
        },
        "ListArchiveRules": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html",
            "description": "Grants permission to retrieve a list of archive rules from an analyzer.",
            "accessLevel": "List",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                }
            }
        },
        "ListFindings": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html",
            "description": "Grants permission to retrieve a list of findings from an analyzer.",
            "accessLevel": "Read"
        },
        "ListTagsForResource": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html",
            "description": "Grants permission to retrieve a list of tags applied to a resource.",
            "accessLevel": "Read",
            "resourceTypes": {
                "Analyzer": {
                    "required": false
                }
            }
        },
        "StartResourceScan": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html",
            "description": "Grants permission to start a scan of the policies applied to a resource.",
            "accessLevel": "Write"
        },
        "TagResource": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html",
            "description": "Grants permission to add a tag to a resource.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "Analyzer": {
                    "required": false
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UntagResource": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html",
            "description": "Grants permission to remove a tag from a resource.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "Analyzer": {
                    "required": false
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UpdateArchiveRule": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html",
            "description": "Grants permission to modify an archive rule.",
            "accessLevel": "Write",
            "resourceTypes": {
                "Analyzer": {
                    "required": true
                },
                "ArchiveRule": {
                    "required": true
                }
            }
        },
        "UpdateFindings": {
            "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html",
            "description": "Grants permission to modify findings.",
            "accessLevel": "Write"
        }
    };

    /**
     * Grants permission to create an analyzer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html
     */
    public createAnalyzer () {
        this.add('access-analyzer:CreateAnalyzer');
        return this;
    }

    /**
     * Grants permission to create an archive rule for the specified analyzer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
     */
    public createArchiveRule () {
        this.add('access-analyzer:CreateArchiveRule');
        return this;
    }

    /**
     * Grants permission to delete the specified analyzer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
     */
    public deleteAnalyzer () {
        this.add('access-analyzer:DeleteAnalyzer');
        return this;
    }

    /**
     * Grants permission to delete archive rules for the specified analyzer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
     */
    public deleteArchiveRule () {
        this.add('access-analyzer:DeleteArchiveRule');
        return this;
    }

    /**
     * Grants permission to retrieve information about an analyzed resource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
     */
    public getAnalyzedResource () {
        this.add('access-analyzer:GetAnalyzedResource');
        return this;
    }

    /**
     * Grants permission to retrieve information about analyzers.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html
     */
    public getAnalyzer () {
        this.add('access-analyzer:GetAnalyzer');
        return this;
    }

    /**
     * Grants permission to retrieve information about archive rules for the specified analyzer.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
     */
    public getArchiveRule () {
        this.add('access-analyzer:GetArchiveRule');
        return this;
    }

    /**
     * Grants permission to retrieve findings.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html
     */
    public getFinding () {
        this.add('access-analyzer:GetFinding');
        return this;
    }

    /**
     * Grants permission to retrieve a list of resources that have been analyzed.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
     */
    public listAnalyzedResources () {
        this.add('access-analyzer:ListAnalyzedResources');
        return this;
    }

    /**
     * Grants permission to retrieves a list of analyzers.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
     */
    public listAnalyzers () {
        this.add('access-analyzer:ListAnalyzers');
        return this;
    }

    /**
     * Grants permission to retrieve a list of archive rules from an analyzer.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
     */
    public listArchiveRules () {
        this.add('access-analyzer:ListArchiveRules');
        return this;
    }

    /**
     * Grants permission to retrieve a list of findings from an analyzer.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html
     */
    public listFindings () {
        this.add('access-analyzer:ListFindings');
        return this;
    }

    /**
     * Grants permission to retrieve a list of tags applied to a resource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('access-analyzer:ListTagsForResource');
        return this;
    }

    /**
     * Grants permission to start a scan of the policies applied to a resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
     */
    public startResourceScan () {
        this.add('access-analyzer:StartResourceScan');
        return this;
    }

    /**
     * Grants permission to add a tag to a resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('access-analyzer:TagResource');
        return this;
    }

    /**
     * Grants permission to remove a tag from a resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('access-analyzer:UntagResource');
        return this;
    }

    /**
     * Grants permission to modify an archive rule.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
     */
    public updateArchiveRule () {
        this.add('access-analyzer:UpdateArchiveRule');
        return this;
    }

    /**
     * Grants permission to modify findings.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
     */
    public updateFindings () {
        this.add('access-analyzer:UpdateFindings');
        return this;
    }
}
