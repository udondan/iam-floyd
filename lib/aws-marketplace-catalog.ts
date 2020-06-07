import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service aws-marketplace
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacecatalog.html
 */
export class AwsMarketplaceCatalog extends PolicyStatement {
    public servicePrefix = 'aws-marketplace';
    public actions : Actions = {
        "CancelChangeSet": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_CancelChangeSet.html",
            "description": "Cancels a running change set.",
            "accessLevel": "Write"
        },
        "CompleteTask": {
            "url": "",
            "description": "Complete an existing task and submit the content to the associated change.",
            "accessLevel": "Write"
        },
        "DescribeChangeSet": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeChangeSet.html",
            "description": "Returns the details of an existing change set.",
            "accessLevel": "Read"
        },
        "DescribeEntity": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeEntity.html",
            "description": "Returns the details of an existing entity.",
            "accessLevel": "Read"
        },
        "DescribeTask": {
            "url": "",
            "description": "Returns the details of an existing task.",
            "accessLevel": "Read"
        },
        "ListChangeSets": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListChangeSets.html",
            "description": "Lists existing change sets.",
            "accessLevel": "Read"
        },
        "ListEntities": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListEntities.html",
            "description": "Lists existing entities.",
            "accessLevel": "Read"
        },
        "ListTasks": {
            "url": "",
            "description": "Lists existing tasks.",
            "accessLevel": "List"
        },
        "StartChangeSet": {
            "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_StartChangeSet.html",
            "description": "Requests a new change set.",
            "accessLevel": "Write",
            "conditions": [
                "catalog:ChangeType"
            ]
        },
        "UpdateTask": {
            "url": "",
            "description": "Update the content of an existing task.",
            "accessLevel": "Write"
        }
    };

    /**
     * Cancels a running change set.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_CancelChangeSet.html
     */
    public cancelChangeSet () {
        this.add('aws-marketplace:CancelChangeSet');
        return this;
    }

    /**
     * Complete an existing task and submit the content to the associated change.
     *
     * Access Level: Write
     *
     *
     */
    public completeTask () {
        this.add('aws-marketplace:CompleteTask');
        return this;
    }

    /**
     * Returns the details of an existing change set.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeChangeSet.html
     */
    public describeChangeSet () {
        this.add('aws-marketplace:DescribeChangeSet');
        return this;
    }

    /**
     * Returns the details of an existing entity.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeEntity.html
     */
    public describeEntity () {
        this.add('aws-marketplace:DescribeEntity');
        return this;
    }

    /**
     * Returns the details of an existing task.
     *
     * Access Level: Read
     *
     *
     */
    public describeTask () {
        this.add('aws-marketplace:DescribeTask');
        return this;
    }

    /**
     * Lists existing change sets.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListChangeSets.html
     */
    public listChangeSets () {
        this.add('aws-marketplace:ListChangeSets');
        return this;
    }

    /**
     * Lists existing entities.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListEntities.html
     */
    public listEntities () {
        this.add('aws-marketplace:ListEntities');
        return this;
    }

    /**
     * Lists existing tasks.
     *
     * Access Level: List
     *
     *
     */
    public listTasks () {
        this.add('aws-marketplace:ListTasks');
        return this;
    }

    /**
     * Requests a new change set.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_StartChangeSet.html
     */
    public startChangeSet () {
        this.add('aws-marketplace:StartChangeSet');
        return this;
    }

    /**
     * Update the content of an existing task.
     *
     * Access Level: Write
     *
     *
     */
    public updateTask () {
        this.add('aws-marketplace:UpdateTask');
        return this;
    }
}
