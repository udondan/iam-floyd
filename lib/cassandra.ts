import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service cassandra
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html
 */
export class Cassandra extends PolicyStatement {
    public servicePrefix = 'cassandra';
    public actions : Actions = { "Alter": { "url": "", "description": "Grants permission to alter a keyspace or table", "accessLevel": "Write", "resourceTypes": { "keyspace": { "required": false }, "table": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "Create": { "url": "", "description": "Grants permission to create a keyspace or table", "accessLevel": "Write", "resourceTypes": { "keyspace": { "required": false }, "table": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "Drop": { "url": "", "description": "Grants permission to drop a keyspace or table", "accessLevel": "Write", "resourceTypes": { "keyspace": { "required": false }, "table": { "required": false } } }, "Modify": { "url": "", "description": "Grants permission to INSERT, UPDATE or DELETE data in a table", "accessLevel": "Write", "resourceTypes": { "table": { "required": true } } }, "Select": { "url": "", "description": "Grants permission to SELECT data from a table", "accessLevel": "Read", "resourceTypes": { "table": { "required": true } } }, "TagResource": { "url": "", "description": "Grants permission to tag a keyspace or table", "accessLevel": "Tagging", "resourceTypes": { "keyspace": { "required": false }, "table": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagResource": { "url": "", "description": "Grants permission to untag a keyspace or table", "accessLevel": "Tagging", "resourceTypes": { "keyspace": { "required": false }, "table": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] } };

    /**
     * Grants permission to alter a keyspace or table
     *
     * Access Level: Write
     *
     *
     */
    public alter () {
        this.add('cassandra:Alter');
        return this;
    }

    /**
     * Grants permission to create a keyspace or table
     *
     * Access Level: Write
     *
     *
     */
    public create () {
        this.add('cassandra:Create');
        return this;
    }

    /**
     * Grants permission to drop a keyspace or table
     *
     * Access Level: Write
     *
     *
     */
    public drop () {
        this.add('cassandra:Drop');
        return this;
    }

    /**
     * Grants permission to INSERT, UPDATE or DELETE data in a table
     *
     * Access Level: Write
     *
     *
     */
    public modify () {
        this.add('cassandra:Modify');
        return this;
    }

    /**
     * Grants permission to SELECT data from a table
     *
     * Access Level: Read
     *
     *
     */
    public select () {
        this.add('cassandra:Select');
        return this;
    }

    /**
     * Grants permission to tag a keyspace or table
     *
     * Access Level: Tagging
     *
     *
     */
    public tagResource () {
        this.add('cassandra:TagResource');
        return this;
    }

    /**
     * Grants permission to untag a keyspace or table
     *
     * Access Level: Tagging
     *
     *
     */
    public untagResource () {
        this.add('cassandra:UntagResource');
        return this;
    }
}
