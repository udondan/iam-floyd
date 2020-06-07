import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codestar-connections
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html
 */
export class CodestarConnections extends PolicyStatement {
    public servicePrefix = 'codestar-connections';
    public actions : Actions = {
        "CreateConnection": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html",
            "description": "Grants permission to create a Connection resource",
            "accessLevel": "Write",
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys",
                "codestar-connections:ProviderType"
            ]
        },
        "DeleteConnection": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html",
            "description": "Grants permission to delete a Connection resource",
            "accessLevel": "Write",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            }
        },
        "GetConnection": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html",
            "description": "Grants permission to get details about a Connection resource",
            "accessLevel": "Read",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            }
        },
        "GetIndividualAccessToken": {
            "url": "${AuthZDocPage}#connections-permissions-actions-handshake",
            "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
            "accessLevel": "Read",
            "conditions": [
                "codestar-connections:ProviderType"
            ]
        },
        "GetInstallationUrl": {
            "url": "${AuthZDocPage}#connections-permissions-actions-handshake",
            "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
            "accessLevel": "Read",
            "conditions": [
                "codestar-connections:ProviderType"
            ]
        },
        "ListConnections": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html",
            "description": "Grants permission to list Connection resources",
            "accessLevel": "List",
            "conditions": [
                "codestar-connections:ProviderTypeFilter"
            ]
        },
        "ListInstallationTargets": {
            "url": "${AuthZDocPage}#connections-permissions-actions-handshake",
            "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
            "accessLevel": "List"
        },
        "ListTagsForResource": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html",
            "description": "Gets the set of key-value pairs that are used to manage the resource",
            "accessLevel": "List",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            }
        },
        "PassConnection": {
            "url": "${AuthZDocPage}#connections-passconnection",
            "description": "Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline",
            "accessLevel": "Read",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            },
            "conditions": [
                "codestar-connections:PassedToService"
            ]
        },
        "StartOAuthHandshake": {
            "url": "${AuthZDocPage}#connections-permissions-actions-handshake",
            "description": "Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection",
            "accessLevel": "Read",
            "conditions": [
                "codestar-connections:ProviderType"
            ]
        },
        "TagResource": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html",
            "description": "Adds to or modifies the tags of the given resource",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            },
            "conditions": [
                "aws:TagKeys",
                "aws:RequestTag/${TagKey}"
            ]
        },
        "UntagResource": {
            "url": "https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html",
            "description": "Removes tags from an AWS resource",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            },
            "conditions": [
                "aws:RequestTag/${TagKey}",
                "aws:TagKeys"
            ]
        },
        "UpdateConnectionInstallation": {
            "url": "${AuthZDocPage}#connections-permissions-actions-handshake",
            "description": "Grants permission to update a Connection resource with an installation of the CodeStar Connections App",
            "accessLevel": "Write",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            },
            "conditions": [
                "codestar-connections:InstallationId"
            ]
        },
        "UseConnection": {
            "url": "${AuthZDocPage}#connections-use",
            "description": "Grants permission to use a Connection resource to call provider actions",
            "accessLevel": "Read",
            "resourceTypes": {
                "Connection": {
                    "required": true
                }
            },
            "conditions": [
                "codestar-connections:FullRepositoryId",
                "codestar-connections:ProviderAction",
                "codestar-connections:ProviderPermissionsRequired"
            ]
        }
    };

    /**
     * Grants permission to create a Connection resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html
     */
    public createConnection () {
        this.add('codestar-connections:CreateConnection');
        return this;
    }

    /**
     * Grants permission to delete a Connection resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html
     */
    public deleteConnection () {
        this.add('codestar-connections:DeleteConnection');
        return this;
    }

    /**
     * Grants permission to get details about a Connection resource
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html
     */
    public getConnection () {
        this.add('codestar-connections:GetConnection');
        return this;
    }

    /**
     * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
     *
     * Access Level: Read
     *
     * ${AuthZDocPage}#connections-permissions-actions-handshake
     */
    public getIndividualAccessToken () {
        this.add('codestar-connections:GetIndividualAccessToken');
        return this;
    }

    /**
     * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
     *
     * Access Level: Read
     *
     * ${AuthZDocPage}#connections-permissions-actions-handshake
     */
    public getInstallationUrl () {
        this.add('codestar-connections:GetInstallationUrl');
        return this;
    }

    /**
     * Grants permission to list Connection resources
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html
     */
    public listConnections () {
        this.add('codestar-connections:ListConnections');
        return this;
    }

    /**
     * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
     *
     * Access Level: List
     *
     * ${AuthZDocPage}#connections-permissions-actions-handshake
     */
    public listInstallationTargets () {
        this.add('codestar-connections:ListInstallationTargets');
        return this;
    }

    /**
     * Gets the set of key-value pairs that are used to manage the resource
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('codestar-connections:ListTagsForResource');
        return this;
    }

    /**
     * Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
     *
     * Access Level: Read
     *
     * ${AuthZDocPage}#connections-passconnection
     */
    public passConnection () {
        this.add('codestar-connections:PassConnection');
        return this;
    }

    /**
     * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
     *
     * Access Level: Read
     *
     * ${AuthZDocPage}#connections-permissions-actions-handshake
     */
    public startOAuthHandshake () {
        this.add('codestar-connections:StartOAuthHandshake');
        return this;
    }

    /**
     * Adds to or modifies the tags of the given resource
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('codestar-connections:TagResource');
        return this;
    }

    /**
     * Removes tags from an AWS resource
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('codestar-connections:UntagResource');
        return this;
    }

    /**
     * Grants permission to update a Connection resource with an installation of the CodeStar Connections App
     *
     * Access Level: Write
     *
     * ${AuthZDocPage}#connections-permissions-actions-handshake
     */
    public updateConnectionInstallation () {
        this.add('codestar-connections:UpdateConnectionInstallation');
        return this;
    }

    /**
     * Grants permission to use a Connection resource to call provider actions
     *
     * Access Level: Read
     *
     * ${AuthZDocPage}#connections-use
     */
    public useConnection () {
        this.add('codestar-connections:UseConnection');
        return this;
    }
}
