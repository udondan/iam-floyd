import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codeguru-reviewer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html
 */
export class CodeguruReviewer extends PolicyStatement {
    public servicePrefix = 'codeguru-reviewer';
    public actions : Actions = { "AssociateRepository": { "url": "", "description": "Grants permission to associates a repository with Amazon CodeGuru Reviewer.", "accessLevel": "Write", "resourceTypes": { "repository": { "required": false } } }, "CreateConnectionToken": { "url": "", "description": "Grants permission to perform webbased oauth handshake for 3rd party providers.", "accessLevel": "Read" }, "DescribeRepositoryAssociation": { "url": "", "description": "Grants permission to describe a repository association.", "accessLevel": "Read" }, "DisassociateRepository": { "url": "", "description": "Grants permission to disassociate a repository with Amazon CodeGuru Reviewer.", "accessLevel": "Write", "resourceTypes": { "association": { "required": true } } }, "GetMetricsData": { "url": "", "description": "Grants permission to view pull request metrics in console.", "accessLevel": "Read" }, "ListRepositoryAssociations": { "url": "", "description": "Grants permission to list summary of repository associations.", "accessLevel": "List" }, "ListThirdPartyRepositories": { "url": "", "description": "Grants permission to list 3rd party providers repositories in console.", "accessLevel": "Read" } };

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
}
