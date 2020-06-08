import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codeguru-reviewer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html
 */
export class CodeguruReviewer extends PolicyStatement {
    public servicePrefix = 'codeguru-reviewer';
    public actions : Actions = {
        "AssociateRepository": {
            "url": "",
            "description": "Grants permission to associates a repository with Amazon CodeGuru Reviewer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "repository": {
                    "required": false
                }
            }
        },
        "CreateConnectionToken": {
            "url": "",
            "description": "Grants permission to perform webbased oauth handshake for 3rd party providers.",
            "accessLevel": "Read"
        },
        "DescribeCodeReview": {
            "url": "",
            "description": "Grants permission to describe a code review.",
            "accessLevel": "Read",
            "resourceTypes": {
                "codereview": {
                    "required": true
                }
            }
        },
        "DescribeRecommendationFeedback": {
            "url": "",
            "description": "Grants permission to describe a recommendation feedback on a code review.",
            "accessLevel": "Read",
            "resourceTypes": {
                "codereview": {
                    "required": true
                }
            }
        },
        "DescribeRepositoryAssociation": {
            "url": "",
            "description": "Grants permission to describe a repository association.",
            "accessLevel": "Read",
            "resourceTypes": {
                "association": {
                    "required": true
                }
            }
        },
        "DisassociateRepository": {
            "url": "",
            "description": "Grants permission to disassociate a repository with Amazon CodeGuru Reviewer.",
            "accessLevel": "Write",
            "resourceTypes": {
                "association": {
                    "required": true
                }
            }
        },
        "GetMetricsData": {
            "url": "",
            "description": "Grants permission to view pull request metrics in console.",
            "accessLevel": "Read"
        },
        "ListCodeReviews": {
            "url": "",
            "description": "Grants permission to list summary of code reviews.",
            "accessLevel": "List"
        },
        "ListRecommendationFeedback": {
            "url": "",
            "description": "Grants permission to list summary of recommendation feedback on a code review.",
            "accessLevel": "List",
            "resourceTypes": {
                "codereview": {
                    "required": true
                }
            }
        },
        "ListRecommendations": {
            "url": "",
            "description": "Grants permission to list summary of recommendations on a code review",
            "accessLevel": "List",
            "resourceTypes": {
                "codereview": {
                    "required": true
                }
            }
        },
        "ListRepositoryAssociations": {
            "url": "",
            "description": "Grants permission to list summary of repository associations.",
            "accessLevel": "List"
        },
        "ListThirdPartyRepositories": {
            "url": "",
            "description": "Grants permission to list 3rd party providers repositories in console.",
            "accessLevel": "Read"
        },
        "PutRecommendationFeedback": {
            "url": "",
            "description": "Grants permission to put feedback for a recommendation on a code review.",
            "accessLevel": "Write",
            "resourceTypes": {
                "codereview": {
                    "required": true
                }
            }
        }
    };

    /**
     * Grants permission to associates a repository with Amazon CodeGuru Reviewer.
     *
     * Access Level: Write
     *
     *
     */
    public associateRepository () {
        this.add('codeguru-reviewer:AssociateRepository');
        return this;
    }

    /**
     * Grants permission to perform webbased oauth handshake for 3rd party providers.
     *
     * Access Level: Read
     *
     *
     */
    public createConnectionToken () {
        this.add('codeguru-reviewer:CreateConnectionToken');
        return this;
    }

    /**
     * Grants permission to describe a code review.
     *
     * Access Level: Read
     *
     *
     */
    public describeCodeReview () {
        this.add('codeguru-reviewer:DescribeCodeReview');
        return this;
    }

    /**
     * Grants permission to describe a recommendation feedback on a code review.
     *
     * Access Level: Read
     *
     *
     */
    public describeRecommendationFeedback () {
        this.add('codeguru-reviewer:DescribeRecommendationFeedback');
        return this;
    }

    /**
     * Grants permission to describe a repository association.
     *
     * Access Level: Read
     *
     *
     */
    public describeRepositoryAssociation () {
        this.add('codeguru-reviewer:DescribeRepositoryAssociation');
        return this;
    }

    /**
     * Grants permission to disassociate a repository with Amazon CodeGuru Reviewer.
     *
     * Access Level: Write
     *
     *
     */
    public disassociateRepository () {
        this.add('codeguru-reviewer:DisassociateRepository');
        return this;
    }

    /**
     * Grants permission to view pull request metrics in console.
     *
     * Access Level: Read
     *
     *
     */
    public getMetricsData () {
        this.add('codeguru-reviewer:GetMetricsData');
        return this;
    }

    /**
     * Grants permission to list summary of code reviews.
     *
     * Access Level: List
     *
     *
     */
    public listCodeReviews () {
        this.add('codeguru-reviewer:ListCodeReviews');
        return this;
    }

    /**
     * Grants permission to list summary of recommendation feedback on a code review.
     *
     * Access Level: List
     *
     *
     */
    public listRecommendationFeedback () {
        this.add('codeguru-reviewer:ListRecommendationFeedback');
        return this;
    }

    /**
     * Grants permission to list summary of recommendations on a code review
     *
     * Access Level: List
     *
     *
     */
    public listRecommendations () {
        this.add('codeguru-reviewer:ListRecommendations');
        return this;
    }

    /**
     * Grants permission to list summary of repository associations.
     *
     * Access Level: List
     *
     *
     */
    public listRepositoryAssociations () {
        this.add('codeguru-reviewer:ListRepositoryAssociations');
        return this;
    }

    /**
     * Grants permission to list 3rd party providers repositories in console.
     *
     * Access Level: Read
     *
     *
     */
    public listThirdPartyRepositories () {
        this.add('codeguru-reviewer:ListThirdPartyRepositories');
        return this;
    }

    /**
     * Grants permission to put feedback for a recommendation on a code review.
     *
     * Access Level: Write
     *
     *
     */
    public putRecommendationFeedback () {
        this.add('codeguru-reviewer:PutRecommendationFeedback');
        return this;
    }
}
