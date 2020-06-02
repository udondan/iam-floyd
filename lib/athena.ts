import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service athena
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html
 */
export class Athena extends PolicyStatement {
    public servicePrefix = 'athena';
    public actions : Actions = { "BatchGetNamedQuery": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html", "description": "Grants permissions to get information about one or more named queries.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "BatchGetQueryExecution": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html", "description": "Grants permissions to get information about one or more query executions.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "CancelQueryExecution": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html", "description": "Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StopQueryExecution otherwise.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "CreateNamedQuery": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html", "description": "Grants permissions to create a named query.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "CreateWorkGroup": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html", "description": "Grants permissions to create a workgroup.", "accessLevel": "Tagging", "resourceTypes": { "workgroup": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteNamedQuery": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html", "description": "Grants permissions to delete a named query specified.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "DeleteWorkGroup": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html", "description": "Grants permissions to delete a workgroup.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "GetCatalogs": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.", "accessLevel": "Read" }, "GetExecutionEngine": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified database and table.", "accessLevel": "Read" }, "GetExecutionEngines": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.", "accessLevel": "Read" }, "GetNamedQuery": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html", "description": "Grants permissions to get information about the specified named query.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "GetNamespace": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified database and table.", "accessLevel": "Read" }, "GetNamespaces": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.", "accessLevel": "Read" }, "GetQueryExecution": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html", "description": "Grants permissions to get information about the specified query execution.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "GetQueryExecutions": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html", "description": "Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use ListQueryExecutions otherwise.", "accessLevel": "Read" }, "GetQueryResults": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html", "description": "Grants permissions to get the query results.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "GetQueryResultsStream": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Grants permissions to get the query results stream.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "GetTable": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified table.", "accessLevel": "Read" }, "GetTables": { "url": "https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies", "description": "Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to tables.", "accessLevel": "Read" }, "GetWorkGroup": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html", "description": "Grants permissions to get a workgroup.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "ListNamedQueries": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html", "description": "Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account.", "accessLevel": "List", "resourceTypes": { "workgroup": { "required": true } } }, "ListQueryExecutions": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html", "description": "Grants permissions to return a list of query executions for the specified AWS account.", "accessLevel": "List", "resourceTypes": { "workgroup": { "required": true } } }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html", "description": "Grants permissions to return a list of tags for a workgroup.", "accessLevel": "Read", "resourceTypes": { "workgroup": { "required": true } } }, "ListWorkGroups": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html", "description": "Grants permissions to return a list of workgroups for the specified AWS account.", "accessLevel": "List" }, "RunQuery": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html", "description": "Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StartQueryExecution otherwise.", "accessLevel": "Write" }, "StartQueryExecution": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html", "description": "Grants permissions to start a query execution using an SQL query provided as a string.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "StopQueryExecution": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html", "description": "Grants permissions to stop the specified query execution.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } }, "TagResource": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html", "description": "Grants permissions to add a tag to a workgroup.", "accessLevel": "Tagging", "resourceTypes": { "workgroup": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html", "description": "Grants permissions to remove a tag from a workgroup.", "accessLevel": "Tagging", "resourceTypes": { "workgroup": { "required": true } }, "conditions": ["aws:TagKeys"] }, "UpdateWorkGroup": { "url": "https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html", "description": "Grants permissions to update a workgroup.", "accessLevel": "Write", "resourceTypes": { "workgroup": { "required": true } } } };

    /**
     * Grants permissions to get information about one or more named queries.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
     */
    public batchGetNamedQuery () {
        this.add('athena:BatchGetNamedQuery');
        return this;
    }

    /**
     * Grants permissions to get information about one or more query executions.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
     */
    public batchGetQueryExecution () {
        this.add('athena:BatchGetQueryExecution');
        return this;
    }

    /**
     * Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StopQueryExecution otherwise.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
     */
    public cancelQueryExecution () {
        this.add('athena:CancelQueryExecution');
        return this;
    }

    /**
     * Grants permissions to create a named query.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
     */
    public createNamedQuery () {
        this.add('athena:CreateNamedQuery');
        return this;
    }

    /**
     * Grants permissions to create a workgroup.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html
     */
    public createWorkGroup () {
        this.add('athena:CreateWorkGroup');
        return this;
    }

    /**
     * Grants permissions to delete a named query specified.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
     */
    public deleteNamedQuery () {
        this.add('athena:DeleteNamedQuery');
        return this;
    }

    /**
     * Grants permissions to delete a workgroup.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
     */
    public deleteWorkGroup () {
        this.add('athena:DeleteWorkGroup');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getCatalogs () {
        this.add('athena:GetCatalogs');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified database and table.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getExecutionEngine () {
        this.add('athena:GetExecutionEngine');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getExecutionEngines () {
        this.add('athena:GetExecutionEngines');
        return this;
    }

    /**
     * Grants permissions to get information about the specified named query.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
     */
    public getNamedQuery () {
        this.add('athena:GetNamedQuery');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified database and table.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getNamespace () {
        this.add('athena:GetNamespace');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to databases and tables.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getNamespaces () {
        this.add('athena:GetNamespaces');
        return this;
    }

    /**
     * Grants permissions to get information about the specified query execution.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
     */
    public getQueryExecution () {
        this.add('athena:GetQueryExecution');
        return this;
    }

    /**
     * Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use ListQueryExecutions otherwise.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
     */
    public getQueryExecutions () {
        this.add('athena:GetQueryExecutions');
        return this;
    }

    /**
     * Grants permissions to get the query results.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
     */
    public getQueryResults () {
        this.add('athena:GetQueryResults');
        return this;
    }

    /**
     * Grants permissions to get the query results stream.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getQueryResultsStream () {
        this.add('athena:GetQueryResultsStream');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to the specified table.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getTable () {
        this.add('athena:GetTable');
        return this;
    }

    /**
     * Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0. Grants permissions to enable access to tables.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
     */
    public getTables () {
        this.add('athena:GetTables');
        return this;
    }

    /**
     * Grants permissions to get a workgroup.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
     */
    public getWorkGroup () {
        this.add('athena:GetWorkGroup');
        return this;
    }

    /**
     * Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
     */
    public listNamedQueries () {
        this.add('athena:ListNamedQueries');
        return this;
    }

    /**
     * Grants permissions to return a list of query executions for the specified AWS account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
     */
    public listQueryExecutions () {
        this.add('athena:ListQueryExecutions');
        return this;
    }

    /**
     * Grants permissions to return a list of tags for a workgroup.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('athena:ListTagsForResource');
        return this;
    }

    /**
     * Grants permissions to return a list of workgroups for the specified AWS account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
     */
    public listWorkGroups () {
        this.add('athena:ListWorkGroups');
        return this;
    }

    /**
     * Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StartQueryExecution otherwise.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
     */
    public runQuery () {
        this.add('athena:RunQuery');
        return this;
    }

    /**
     * Grants permissions to start a query execution using an SQL query provided as a string.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
     */
    public startQueryExecution () {
        this.add('athena:StartQueryExecution');
        return this;
    }

    /**
     * Grants permissions to stop the specified query execution.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
     */
    public stopQueryExecution () {
        this.add('athena:StopQueryExecution');
        return this;
    }

    /**
     * Grants permissions to add a tag to a workgroup.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('athena:TagResource');
        return this;
    }

    /**
     * Grants permissions to remove a tag from a workgroup.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('athena:UntagResource');
        return this;
    }

    /**
     * Grants permissions to update a workgroup.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
     */
    public updateWorkGroup () {
        this.add('athena:UpdateWorkGroup');
        return this;
    }
}
