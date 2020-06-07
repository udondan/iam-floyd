import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service opsworks-cm
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworksconfigurationmanagement.html
 */
export class OpsworksCm extends PolicyStatement {
    public servicePrefix = 'opsworks-cm';
    public actions : Actions = {
        "AssociateNode": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html",
            "description": "Associate a node to a configuration management server.",
            "accessLevel": "Write"
        },
        "CreateBackup": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html",
            "description": "Create a backup for the specified server.",
            "accessLevel": "Write"
        },
        "CreateServer": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html",
            "description": "Create a new server.",
            "accessLevel": "Write"
        },
        "DeleteBackup": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html",
            "description": "Delete the specified backup and possibly its S3 bucket.",
            "accessLevel": "Write"
        },
        "DeleteServer": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html",
            "description": "Deletes the specified server with his corresponding CF stack and possibly the S3 bucket.",
            "accessLevel": "Write"
        },
        "DescribeAccountAttributes": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html",
            "description": "Describe the service limits for the user's account.",
            "accessLevel": "List"
        },
        "DescribeBackups": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html",
            "description": "Describe a single backup, all backups of a specified server or all backups of the user's account.",
            "accessLevel": "List"
        },
        "DescribeEvents": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html",
            "description": "Describe all events of the specified server.",
            "accessLevel": "List"
        },
        "DescribeNodeAssociationStatus": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html",
            "description": "Describe the association status for the specified node token and the specified server.",
            "accessLevel": "List"
        },
        "DescribeServers": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html",
            "description": "Describes the specified server or all servers of the user's account.",
            "accessLevel": "List"
        },
        "DisassociateNode": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html",
            "description": "Disassociates a specified node from a server.",
            "accessLevel": "Write"
        },
        "RestoreServer": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html",
            "description": "Applies a backup to specified server. Possibly swaps out the ec2-instance if specified.",
            "accessLevel": "Write"
        },
        "StartMaintenance": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html",
            "description": "Start the server maintenance immediately.",
            "accessLevel": "Write"
        },
        "UpdateServer": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html",
            "description": "Update general server settings.",
            "accessLevel": "Write"
        },
        "UpdateServerEngineAttributes": {
            "url": "https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html",
            "description": "Update server settings specific to the configuration management type.",
            "accessLevel": "Write"
        }
    };

    /**
     * Associate a node to a configuration management server.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html
     */
    public associateNode () {
        this.add('opsworks-cm:AssociateNode');
        return this;
    }

    /**
     * Create a backup for the specified server.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html
     */
    public createBackup () {
        this.add('opsworks-cm:CreateBackup');
        return this;
    }

    /**
     * Create a new server.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html
     */
    public createServer () {
        this.add('opsworks-cm:CreateServer');
        return this;
    }

    /**
     * Delete the specified backup and possibly its S3 bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html
     */
    public deleteBackup () {
        this.add('opsworks-cm:DeleteBackup');
        return this;
    }

    /**
     * Deletes the specified server with his corresponding CF stack and possibly the S3 bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html
     */
    public deleteServer () {
        this.add('opsworks-cm:DeleteServer');
        return this;
    }

    /**
     * Describe the service limits for the user's account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html
     */
    public describeAccountAttributes () {
        this.add('opsworks-cm:DescribeAccountAttributes');
        return this;
    }

    /**
     * Describe a single backup, all backups of a specified server or all backups of the user's account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html
     */
    public describeBackups () {
        this.add('opsworks-cm:DescribeBackups');
        return this;
    }

    /**
     * Describe all events of the specified server.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html
     */
    public describeEvents () {
        this.add('opsworks-cm:DescribeEvents');
        return this;
    }

    /**
     * Describe the association status for the specified node token and the specified server.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html
     */
    public describeNodeAssociationStatus () {
        this.add('opsworks-cm:DescribeNodeAssociationStatus');
        return this;
    }

    /**
     * Describes the specified server or all servers of the user's account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html
     */
    public describeServers () {
        this.add('opsworks-cm:DescribeServers');
        return this;
    }

    /**
     * Disassociates a specified node from a server.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html
     */
    public disassociateNode () {
        this.add('opsworks-cm:DisassociateNode');
        return this;
    }

    /**
     * Applies a backup to specified server. Possibly swaps out the ec2-instance if specified.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html
     */
    public restoreServer () {
        this.add('opsworks-cm:RestoreServer');
        return this;
    }

    /**
     * Start the server maintenance immediately.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html
     */
    public startMaintenance () {
        this.add('opsworks-cm:StartMaintenance');
        return this;
    }

    /**
     * Update general server settings.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html
     */
    public updateServer () {
        this.add('opsworks-cm:UpdateServer');
        return this;
    }

    /**
     * Update server settings specific to the configuration management type.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html
     */
    public updateServerEngineAttributes () {
        this.add('opsworks-cm:UpdateServerEngineAttributes');
        return this;
    }
}
