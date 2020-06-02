import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service rds-data
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrdsdataapi.html
 */
export class RdsData extends PolicyStatement {
    public servicePrefix = 'rds-data';
    public actions : Actions = { "BatchExecuteStatement": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html", "description": "Runs a batch SQL statement over an array of data.", "accessLevel": "Write" }, "BeginTransaction": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html", "description": "Starts a SQL transaction.", "accessLevel": "Write" }, "CommitTransaction": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html", "description": "Ends a SQL transaction started with the BeginTransaction operation and commits the changes.", "accessLevel": "Write" }, "ExecuteSql": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html", "description": "Runs one or more SQL statements. This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation.", "accessLevel": "Write" }, "ExecuteStatement": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html", "description": "Runs a SQL statement against a database.", "accessLevel": "Write" }, "RollbackTransaction": { "url": "https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html", "description": "Performs a rollback of a transaction. Rolling back a transaction cancels its changes.", "accessLevel": "Write" } };

    /**
     * Runs a batch SQL statement over an array of data.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html
     */
    public batchExecuteStatement () {
        this.add('rds-data:BatchExecuteStatement');
        return this;
    }

    /**
     * Starts a SQL transaction.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html
     */
    public beginTransaction () {
        this.add('rds-data:BeginTransaction');
        return this;
    }

    /**
     * Ends a SQL transaction started with the BeginTransaction operation and commits the changes.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html
     */
    public commitTransaction () {
        this.add('rds-data:CommitTransaction');
        return this;
    }

    /**
     * Runs one or more SQL statements. This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html
     */
    public executeSql () {
        this.add('rds-data:ExecuteSql');
        return this;
    }

    /**
     * Runs a SQL statement against a database.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html
     */
    public executeStatement () {
        this.add('rds-data:ExecuteStatement');
        return this;
    }

    /**
     * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html
     */
    public rollbackTransaction () {
        this.add('rds-data:RollbackTransaction');
        return this;
    }
}
