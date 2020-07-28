import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [rds](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rds extends PolicyStatement {
  public servicePrefix = 'rds';
  protected actionList: Actions = {
    "AddRoleToDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html",
      "description": "Associates an Identity and Access Management (IAM) role from an Aurora DB cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "AddRoleToDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html",
      "description": "Associates an AWS Identity and Access Management (IAM) role with a DB instance.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "AddSourceIdentifierToSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html",
      "description": "Adds a source identifier to an existing RDS event notification subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html",
      "description": "Adds metadata tags to an Amazon RDS resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "db": {
          "required": false
        },
        "es": {
          "required": false
        },
        "og": {
          "required": false
        },
        "pg": {
          "required": false
        },
        "proxy": {
          "required": false
        },
        "ri": {
          "required": false
        },
        "secgrp": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "subgrp": {
          "required": false
        },
        "target-group": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "ApplyPendingMaintenanceAction": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html",
      "description": "Applies a pending maintenance action to a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "AuthorizeDBSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html",
      "description": "Enables ingress to a DBSecurityGroup using one of two forms of authorization.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "BacktrackDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html",
      "description": "Backtracks a DB cluster to a specific time, without creating a new DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "CancelExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html",
      "description": "Cancels an export task in progress.",
      "accessLevel": "Write"
    },
    "CopyDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html",
      "description": "Copies the specified DB cluster parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "CopyDBClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html",
      "description": "Creates a snapshot of a DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "CopyDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html",
      "description": "Copies the specified DB parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "CopyDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html",
      "description": "Copies the specified DB snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "CopyOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html",
      "description": "Copies the specified option group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "CreateDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html",
      "description": "Creates a new Amazon Aurora DB cluster.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-pg": {
          "required": true
        },
        "og": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}",
        "rds:DatabaseEngine",
        "rds:DatabaseName",
        "rds:StorageEncrypted"
      ]
    },
    "CreateDBClusterEndpoint": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterEndpoint.html",
      "description": "Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-endpoint": {
          "required": true
        }
      },
      "conditions": [
        "rds:EndpointType",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html",
      "description": "Create a new DB cluster parameter group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html",
      "description": "Creates a snapshot of a DB cluster.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-snapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html",
      "description": "Creates a new DB instance.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        },
        "og": {
          "required": true
        },
        "pg": {
          "required": true
        },
        "secgrp": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBInstanceReadReplica": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html",
      "description": "Creates a DB instance that acts as a Read Replica of a source DB instance.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        },
        "og": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html",
      "description": "Creates a new DB parameter group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBProxy": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxy.html",
      "description": "Grants permission to create a database proxy",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDBSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html",
      "description": "Creates a new DB security group. DB security groups control access to a DB instance.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html",
      "description": "Creates a DBSnapshot.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "db": {
          "required": true
        },
        "snapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateDBSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html",
      "description": "Creates a new DB subnet group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateEventSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html",
      "description": "Creates an RDS event notification subscription.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "es": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "CreateGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html",
      "description": "Creates an Aurora global database spread across multiple regions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "global-cluster": {
          "required": true
        }
      }
    },
    "CreateOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html",
      "description": "Creates a new option group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "og": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "DeleteDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html",
      "description": "The DeleteDBCluster action deletes a previously provisioned DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DeleteDBClusterEndpoint": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html",
      "description": "Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-endpoint": {
          "required": true
        }
      }
    },
    "DeleteDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html",
      "description": "Deletes a specified DB cluster parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DeleteDBClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html",
      "description": "Deletes a DB cluster snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DeleteDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html",
      "description": "The DeleteDBInstance action deletes a previously provisioned DB instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DeleteDBInstanceAutomatedBackup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html",
      "description": "Deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID.",
      "accessLevel": "Write"
    },
    "DeleteDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html",
      "description": "Deletes a specified DBParameterGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "DeleteDBProxy": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html",
      "description": "Grants permission to delete a database proxy",
      "accessLevel": "Write",
      "resourceTypes": {
        "proxy": {
          "required": true
        }
      }
    },
    "DeleteDBSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html",
      "description": "Deletes a DB security group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "DeleteDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html",
      "description": "Deletes a DBSnapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DeleteDBSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html",
      "description": "Deletes a DB subnet group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "DeleteEventSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html",
      "description": "Deletes an RDS event notification subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "DeleteGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html",
      "description": "Deletes a global database cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-cluster": {
          "required": true
        }
      }
    },
    "DeleteOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html",
      "description": "Deletes an existing option group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "DeregisterDBProxyTargets": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html",
      "description": "Grants permission to remove targets from a database proxy target group",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "db": {
          "required": true
        },
        "proxy": {
          "required": true
        },
        "target-group": {
          "required": true
        }
      }
    },
    "DescribeAccountAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html",
      "description": "Lists all of the attributes for a customer account.",
      "accessLevel": "List"
    },
    "DescribeCertificates": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html",
      "description": "Lists the set of CA certificates provided by Amazon RDS for this AWS account.",
      "accessLevel": "List"
    },
    "DescribeDBClusterBacktracks": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html",
      "description": "Returns information about backtracks for a DB cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeDBClusterEndpoints": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html",
      "description": "Returns information about endpoints for an Amazon Aurora DB cluster.",
      "accessLevel": "List"
    },
    "DescribeDBClusterParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html",
      "description": "Returns a list of DBClusterParameterGroup descriptions.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DescribeDBClusterParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html",
      "description": "Returns the detailed parameter list for a particular DB cluster parameter group.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DescribeDBClusterSnapshotAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html",
      "description": "Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBClusterSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html",
      "description": "Returns information about DB cluster snapshots.",
      "accessLevel": "Read"
    },
    "DescribeDBClusters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html",
      "description": "Returns information about provisioned Aurora DB clusters.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeDBEngineVersions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html",
      "description": "Returns a list of the available DB engines.",
      "accessLevel": "List",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "DescribeDBInstanceAutomatedBackups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html",
      "description": "Returns a list of automated backups for both current and deleted instances.",
      "accessLevel": "List"
    },
    "DescribeDBInstances": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html",
      "description": "Returns information about provisioned RDS instances.",
      "accessLevel": "List"
    },
    "DescribeDBLogFiles": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html",
      "description": "Returns a list of DB log files for the DB instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DescribeDBParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html",
      "description": "Returns a list of DBParameterGroup descriptions.",
      "accessLevel": "List",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "DescribeDBParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html",
      "description": "Returns the detailed parameter list for a particular DB parameter group.",
      "accessLevel": "List",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "DescribeDBProxies": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html",
      "description": "Grants permission to view proxies",
      "accessLevel": "List",
      "resourceTypes": {
        "proxy": {
          "required": true
        }
      }
    },
    "DescribeDBProxyTargetGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html",
      "description": "Grants permission to view database proxy target group details",
      "accessLevel": "List",
      "resourceTypes": {
        "proxy": {
          "required": true
        }
      }
    },
    "DescribeDBProxyTargets": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html",
      "description": "Grants permission to view database proxy target details",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "db": {
          "required": true
        },
        "proxy": {
          "required": true
        },
        "target-group": {
          "required": true
        }
      }
    },
    "DescribeDBSecurityGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html",
      "description": "Returns a list of DBSecurityGroup descriptions.",
      "accessLevel": "List",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "DescribeDBSnapshotAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html",
      "description": "Returns a list of DB snapshot attribute names and values for a manual DB snapshot.",
      "accessLevel": "List",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html",
      "description": "Returns information about DB snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        },
        "snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBSubnetGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html",
      "description": "Returns a list of DBSubnetGroup descriptions.",
      "accessLevel": "List",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "DescribeEngineDefaultClusterParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html",
      "description": "Returns the default engine and system parameter information for the cluster database engine.",
      "accessLevel": "List"
    },
    "DescribeEngineDefaultParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html",
      "description": "Returns the default engine and system parameter information for the specified database engine.",
      "accessLevel": "List"
    },
    "DescribeEventCategories": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html",
      "description": "Displays a list of categories for all event source types, or, if specified, for a specified source type.",
      "accessLevel": "List"
    },
    "DescribeEventSubscriptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html",
      "description": "Lists all the subscription descriptions for a customer account.",
      "accessLevel": "List",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html",
      "description": "Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days.",
      "accessLevel": "List",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "DescribeExportTasks": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html",
      "description": "Returns information about the export tasks.",
      "accessLevel": "List"
    },
    "DescribeGlobalClusters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html",
      "description": "Returns information about Aurora global database clusters.",
      "accessLevel": "List"
    },
    "DescribeOptionGroupOptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html",
      "description": "Describes all available options.",
      "accessLevel": "List",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "DescribeOptionGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html",
      "description": "Describes the available option groups.",
      "accessLevel": "List",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "DescribeOrderableDBInstanceOptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html",
      "description": "Returns a list of orderable DB instance options for the specified engine.",
      "accessLevel": "List"
    },
    "DescribePendingMaintenanceActions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html",
      "description": "Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DescribeReservedDBInstances": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html",
      "description": "Returns information about reserved DB instances for this account, or about a specified reserved DB instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "ri": {
          "required": true
        }
      }
    },
    "DescribeReservedDBInstancesOfferings": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html",
      "description": "Lists available reserved DB instance offerings.",
      "accessLevel": "List"
    },
    "DescribeSourceRegions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html",
      "description": "Returns a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from.",
      "accessLevel": "List"
    },
    "DescribeValidDBInstanceModifications": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html",
      "description": "Lists available modifications you can make to your DB instance",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DownloadCompleteDBLogFile": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/RESTReference.html#RESTReference.DownloadCompleteDBLogFile",
      "description": "Downloads the contents of the specified database log file.",
      "accessLevel": "Read"
    },
    "DownloadDBLogFilePortion": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html",
      "description": "Downloads all or a portion of the specified log file, up to 1 MB in size.",
      "accessLevel": "Read",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "FailoverDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html",
      "description": "Forces a failover for a DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists all tags on an Amazon RDS resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "db": {
          "required": false
        },
        "es": {
          "required": false
        },
        "og": {
          "required": false
        },
        "pg": {
          "required": false
        },
        "proxy": {
          "required": false
        },
        "ri": {
          "required": false
        },
        "secgrp": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "subgrp": {
          "required": false
        },
        "target-group": {
          "required": false
        }
      }
    },
    "ModifyCurrentDBClusterCapacity": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html",
      "description": "Modify current cluster capacity for an Amazon Aurora Severless DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html",
      "description": "Modify a setting for an Amazon Aurora DB cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-pg": {
          "required": true
        },
        "og": {
          "required": true
        }
      }
    },
    "ModifyDBClusterEndpoint": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html",
      "description": "Modifies the properties of an endpoint in an Amazon Aurora DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-endpoint": {
          "required": true
        }
      }
    },
    "ModifyDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html",
      "description": "Modifies the parameters of a DB cluster parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "ModifyDBClusterSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html",
      "description": "Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html",
      "description": "Modify settings for a DB instance.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        },
        "og": {
          "required": true
        },
        "pg": {
          "required": true
        },
        "secgrp": {
          "required": true
        }
      }
    },
    "ModifyDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html",
      "description": "Modifies the parameters of a DB parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "ModifyDBProxy": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxy.html",
      "description": "Grants permission to modify database proxy",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "proxy": {
          "required": true
        }
      }
    },
    "ModifyDBProxyTargetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html",
      "description": "Grants permission to modify target group for a database proxy",
      "accessLevel": "Write",
      "resourceTypes": {
        "target-group": {
          "required": true
        }
      }
    },
    "ModifyDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html",
      "description": "Updates a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html",
      "description": "Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html",
      "description": "Modifies an existing DB subnet group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "ModifyEventSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html",
      "description": "Modifies an existing RDS event notification subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "ModifyGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html",
      "description": "Modify a setting for an Amazon Aurora global cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-cluster": {
          "required": true
        }
      }
    },
    "ModifyOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html",
      "description": "Modifies an existing option group.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "PromoteReadReplica": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html",
      "description": "Promotes a Read Replica DB instance to a standalone DB instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "PromoteReadReplicaDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html",
      "description": "Promotes a Read Replica DB cluster to a standalone DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "PurchaseReservedDBInstancesOffering": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html",
      "description": "Purchases a reserved DB instance offering.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ri": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RebootDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html",
      "description": "Rebooting a DB instance restarts the database engine service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "RegisterDBProxyTargets": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html",
      "description": "Grants permission to add targets to a database proxy target group",
      "accessLevel": "Write",
      "resourceTypes": {
        "target-group": {
          "required": true
        }
      }
    },
    "RemoveFromGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html",
      "description": "Detaches an Aurora secondary cluster from an Aurora global database cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "global-cluster": {
          "required": true
        }
      }
    },
    "RemoveRoleFromDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html",
      "description": "Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "RemoveRoleFromDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html",
      "description": "Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "RemoveSourceIdentifierFromSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html",
      "description": "Removes a source identifier from an existing RDS event notification subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "Removes metadata tags from an Amazon RDS resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "db": {
          "required": false
        },
        "es": {
          "required": false
        },
        "og": {
          "required": false
        },
        "pg": {
          "required": false
        },
        "proxy": {
          "required": false
        },
        "ri": {
          "required": false
        },
        "secgrp": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "subgrp": {
          "required": false
        },
        "target-group": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "ResetDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html",
      "description": "Modifies the parameters of a DB cluster parameter group to the default value.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "ResetDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html",
      "description": "Modifies the parameters of a DB parameter group to the engine/system default value.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "RestoreDBClusterFromS3": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html",
      "description": "Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}",
        "rds:DatabaseEngine",
        "rds:DatabaseName",
        "rds:StorageEncrypted"
      ]
    },
    "RestoreDBClusterFromSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromSnapshot.html",
      "description": "Creates a new DB cluster from a DB cluster snapshot.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "cluster-snapshot": {
          "required": true
        },
        "og": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "RestoreDBClusterToPointInTime": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html",
      "description": "Restores a DB cluster to an arbitrary point in time.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "og": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "RestoreDBInstanceFromDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html",
      "description": "Creates a new DB instance from a DB snapshot.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        },
        "og": {
          "required": true
        },
        "snapshot": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "RestoreDBInstanceFromS3": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromS3.html",
      "description": "Creates a new DB instance from an Amazon S3 bucket.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "RestoreDBInstanceToPointInTime": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceToPointInTime.html",
      "description": "Restores a DB instance to an arbitrary point in time.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "db": {
          "required": true
        },
        "og": {
          "required": true
        },
        "snapshot": {
          "required": true
        },
        "subgrp": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "rds:req-tag/${TagKey}"
      ]
    },
    "RevokeDBSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html",
      "description": "Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups.",
      "accessLevel": "Write",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "StartActivityStream": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html",
      "description": "Enables the user to start Activity Stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StartDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html",
      "description": "Starts the DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StartDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html",
      "description": "Starts the DB instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "StartExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html",
      "description": "Starts a new Export task for a DB snapshot.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ]
    },
    "StopActivityStream": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html",
      "description": "Enables the user to stop Activity Stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StopDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html",
      "description": "Stops the DB cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StopDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html",
      "description": "Stops the DB instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:cluster:${DbClusterInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:cluster-tag/${TagKey}"
      ]
    },
    "cluster-endpoint": {
      "name": "cluster-endpoint",
      "url": "",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:cluster-endpoint:${DbClusterEndpoint}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "cluster-pg": {
      "name": "cluster-pg",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:cluster-pg-tag/${TagKey}"
      ]
    },
    "cluster-snapshot": {
      "name": "cluster-snapshot",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:cluster-snapshot:${ClusterSnapshotName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:cluster-snapshot-tag/${TagKey}"
      ]
    },
    "db": {
      "name": "db",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:DatabaseClass",
        "rds:DatabaseEngine",
        "rds:DatabaseName",
        "rds:MultiAz",
        "rds:Piops",
        "rds:StorageEncrypted",
        "rds:StorageSize",
        "rds:Vpc",
        "rds:db-tag/${TagKey}"
      ]
    },
    "es": {
      "name": "es",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:es:${SubscriptionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:es-tag/${TagKey}"
      ]
    },
    "global-cluster": {
      "name": "global-cluster",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html",
      "arn": "arn:${Partition}:rds:${Account}:global-cluster:${GlobalCluster}",
      "conditionKeys": []
    },
    "og": {
      "name": "og",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:og:${OptionGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:og-tag/${TagKey}"
      ]
    },
    "pg": {
      "name": "pg",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:pg-tag/${TagKey}"
      ]
    },
    "proxy": {
      "name": "proxy",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:db-proxy:${DbProxyId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ri": {
      "name": "ri",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:ri:${ReservedDbInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:ri-tag/${TagKey}"
      ]
    },
    "secgrp": {
      "name": "secgrp",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:secgrp:${SecurityGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:secgrp-tag/${TagKey}"
      ]
    },
    "snapshot": {
      "name": "snapshot",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:snapshot:${SnapshotName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:snapshot-tag/${TagKey}"
      ]
    },
    "subgrp": {
      "name": "subgrp",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:subgrp:${SubnetGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "rds:subgrp-tag/${TagKey}"
      ]
    },
    "target": {
      "name": "target",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:target:${TargetId}",
      "conditionKeys": []
    },
    "target-group": {
      "name": "target-group",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html",
      "arn": "arn:${Partition}:rds:${Region}:${Account}:target-group:${TargetGroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [rds](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates an Identity and Access Management (IAM) role from an Aurora DB cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html
   */
  public addRoleToDBCluster() {
    this.add('rds:AddRoleToDBCluster');
    return this;
  }

  /**
   * Associates an AWS Identity and Access Management (IAM) role with a DB instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html
   */
  public addRoleToDBInstance() {
    this.add('rds:AddRoleToDBInstance');
    return this;
  }

  /**
   * Adds a source identifier to an existing RDS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html
   */
  public addSourceIdentifierToSubscription() {
    this.add('rds:AddSourceIdentifierToSubscription');
    return this;
  }

  /**
   * Adds metadata tags to an Amazon RDS resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html
   */
  public addTagsToResource() {
    this.add('rds:AddTagsToResource');
    return this;
  }

  /**
   * Applies a pending maintenance action to a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public applyPendingMaintenanceAction() {
    this.add('rds:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Enables ingress to a DBSecurityGroup using one of two forms of authorization.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html
   */
  public authorizeDBSecurityGroupIngress() {
    this.add('rds:AuthorizeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Backtracks a DB cluster to a specific time, without creating a new DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html
   */
  public backtrackDBCluster() {
    this.add('rds:BacktrackDBCluster');
    return this;
  }

  /**
   * Cancels an export task in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html
   */
  public cancelExportTask() {
    this.add('rds:CancelExportTask');
    return this;
  }

  /**
   * Copies the specified DB cluster parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html
   */
  public copyDBClusterParameterGroup() {
    this.add('rds:CopyDBClusterParameterGroup');
    return this;
  }

  /**
   * Creates a snapshot of a DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html
   */
  public copyDBClusterSnapshot() {
    this.add('rds:CopyDBClusterSnapshot');
    return this;
  }

  /**
   * Copies the specified DB parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html
   */
  public copyDBParameterGroup() {
    this.add('rds:CopyDBParameterGroup');
    return this;
  }

  /**
   * Copies the specified DB snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html
   */
  public copyDBSnapshot() {
    this.add('rds:CopyDBSnapshot');
    return this;
  }

  /**
   * Copies the specified option group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html
   */
  public copyOptionGroup() {
    this.add('rds:CopyOptionGroup');
    return this;
  }

  /**
   * Creates a new Amazon Aurora DB cluster.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifStorageEncrypted()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html
   */
  public createDBCluster() {
    this.add('rds:CreateDBCluster');
    return this;
  }

  /**
   * Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEndpointType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterEndpoint.html
   */
  public createDBClusterEndpoint() {
    this.add('rds:CreateDBClusterEndpoint');
    return this;
  }

  /**
   * Create a new DB cluster parameter group.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html
   */
  public createDBClusterParameterGroup() {
    this.add('rds:CreateDBClusterParameterGroup');
    return this;
  }

  /**
   * Creates a snapshot of a DB cluster.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html
   */
  public createDBClusterSnapshot() {
    this.add('rds:CreateDBClusterSnapshot');
    return this;
  }

  /**
   * Creates a new DB instance.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html
   */
  public createDBInstance() {
    this.add('rds:CreateDBInstance');
    return this;
  }

  /**
   * Creates a DB instance that acts as a Read Replica of a source DB instance.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html
   */
  public createDBInstanceReadReplica() {
    this.add('rds:CreateDBInstanceReadReplica');
    return this;
  }

  /**
   * Creates a new DB parameter group.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html
   */
  public createDBParameterGroup() {
    this.add('rds:CreateDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to create a database proxy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxy.html
   */
  public createDBProxy() {
    this.add('rds:CreateDBProxy');
    return this;
  }

  /**
   * Creates a new DB security group. DB security groups control access to a DB instance.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html
   */
  public createDBSecurityGroup() {
    this.add('rds:CreateDBSecurityGroup');
    return this;
  }

  /**
   * Creates a DBSnapshot.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html
   */
  public createDBSnapshot() {
    this.add('rds:CreateDBSnapshot');
    return this;
  }

  /**
   * Creates a new DB subnet group.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html
   */
  public createDBSubnetGroup() {
    this.add('rds:CreateDBSubnetGroup');
    return this;
  }

  /**
   * Creates an RDS event notification subscription.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html
   */
  public createEventSubscription() {
    this.add('rds:CreateEventSubscription');
    return this;
  }

  /**
   * Creates an Aurora global database spread across multiple regions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html
   */
  public createGlobalCluster() {
    this.add('rds:CreateGlobalCluster');
    return this;
  }

  /**
   * Creates a new option group.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html
   */
  public createOptionGroup() {
    this.add('rds:CreateOptionGroup');
    return this;
  }

  /**
   * The DeleteDBCluster action deletes a previously provisioned DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
   */
  public deleteDBCluster() {
    this.add('rds:DeleteDBCluster');
    return this;
  }

  /**
   * Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html
   */
  public deleteDBClusterEndpoint() {
    this.add('rds:DeleteDBClusterEndpoint');
    return this;
  }

  /**
   * Deletes a specified DB cluster parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html
   */
  public deleteDBClusterParameterGroup() {
    this.add('rds:DeleteDBClusterParameterGroup');
    return this;
  }

  /**
   * Deletes a DB cluster snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html
   */
  public deleteDBClusterSnapshot() {
    this.add('rds:DeleteDBClusterSnapshot');
    return this;
  }

  /**
   * The DeleteDBInstance action deletes a previously provisioned DB instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html
   */
  public deleteDBInstance() {
    this.add('rds:DeleteDBInstance');
    return this;
  }

  /**
   * Deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html
   */
  public deleteDBInstanceAutomatedBackup() {
    this.add('rds:DeleteDBInstanceAutomatedBackup');
    return this;
  }

  /**
   * Deletes a specified DBParameterGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html
   */
  public deleteDBParameterGroup() {
    this.add('rds:DeleteDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to delete a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html
   */
  public deleteDBProxy() {
    this.add('rds:DeleteDBProxy');
    return this;
  }

  /**
   * Deletes a DB security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html
   */
  public deleteDBSecurityGroup() {
    this.add('rds:DeleteDBSecurityGroup');
    return this;
  }

  /**
   * Deletes a DBSnapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html
   */
  public deleteDBSnapshot() {
    this.add('rds:DeleteDBSnapshot');
    return this;
  }

  /**
   * Deletes a DB subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html
   */
  public deleteDBSubnetGroup() {
    this.add('rds:DeleteDBSubnetGroup');
    return this;
  }

  /**
   * Deletes an RDS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html
   */
  public deleteEventSubscription() {
    this.add('rds:DeleteEventSubscription');
    return this;
  }

  /**
   * Deletes a global database cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html
   */
  public deleteGlobalCluster() {
    this.add('rds:DeleteGlobalCluster');
    return this;
  }

  /**
   * Deletes an existing option group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html
   */
  public deleteOptionGroup() {
    this.add('rds:DeleteOptionGroup');
    return this;
  }

  /**
   * Grants permission to remove targets from a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html
   */
  public deregisterDBProxyTargets() {
    this.add('rds:DeregisterDBProxyTargets');
    return this;
  }

  /**
   * Lists all of the attributes for a customer account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public describeAccountAttributes() {
    this.add('rds:DescribeAccountAttributes');
    return this;
  }

  /**
   * Lists the set of CA certificates provided by Amazon RDS for this AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html
   */
  public describeCertificates() {
    this.add('rds:DescribeCertificates');
    return this;
  }

  /**
   * Returns information about backtracks for a DB cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html
   */
  public describeDBClusterBacktracks() {
    this.add('rds:DescribeDBClusterBacktracks');
    return this;
  }

  /**
   * Returns information about endpoints for an Amazon Aurora DB cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html
   */
  public describeDBClusterEndpoints() {
    this.add('rds:DescribeDBClusterEndpoints');
    return this;
  }

  /**
   * Returns a list of DBClusterParameterGroup descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html
   */
  public describeDBClusterParameterGroups() {
    this.add('rds:DescribeDBClusterParameterGroups');
    return this;
  }

  /**
   * Returns the detailed parameter list for a particular DB cluster parameter group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html
   */
  public describeDBClusterParameters() {
    this.add('rds:DescribeDBClusterParameters');
    return this;
  }

  /**
   * Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html
   */
  public describeDBClusterSnapshotAttributes() {
    this.add('rds:DescribeDBClusterSnapshotAttributes');
    return this;
  }

  /**
   * Returns information about DB cluster snapshots.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html
   */
  public describeDBClusterSnapshots() {
    this.add('rds:DescribeDBClusterSnapshots');
    return this;
  }

  /**
   * Returns information about provisioned Aurora DB clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html
   */
  public describeDBClusters() {
    this.add('rds:DescribeDBClusters');
    return this;
  }

  /**
   * Returns a list of the available DB engines.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html
   */
  public describeDBEngineVersions() {
    this.add('rds:DescribeDBEngineVersions');
    return this;
  }

  /**
   * Returns a list of automated backups for both current and deleted instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html
   */
  public describeDBInstanceAutomatedBackups() {
    this.add('rds:DescribeDBInstanceAutomatedBackups');
    return this;
  }

  /**
   * Returns information about provisioned RDS instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html
   */
  public describeDBInstances() {
    this.add('rds:DescribeDBInstances');
    return this;
  }

  /**
   * Returns a list of DB log files for the DB instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html
   */
  public describeDBLogFiles() {
    this.add('rds:DescribeDBLogFiles');
    return this;
  }

  /**
   * Returns a list of DBParameterGroup descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html
   */
  public describeDBParameterGroups() {
    this.add('rds:DescribeDBParameterGroups');
    return this;
  }

  /**
   * Returns the detailed parameter list for a particular DB parameter group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html
   */
  public describeDBParameters() {
    this.add('rds:DescribeDBParameters');
    return this;
  }

  /**
   * Grants permission to view proxies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html
   */
  public describeDBProxies() {
    this.add('rds:DescribeDBProxies');
    return this;
  }

  /**
   * Grants permission to view database proxy target group details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html
   */
  public describeDBProxyTargetGroups() {
    this.add('rds:DescribeDBProxyTargetGroups');
    return this;
  }

  /**
   * Grants permission to view database proxy target details
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html
   */
  public describeDBProxyTargets() {
    this.add('rds:DescribeDBProxyTargets');
    return this;
  }

  /**
   * Returns a list of DBSecurityGroup descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html
   */
  public describeDBSecurityGroups() {
    this.add('rds:DescribeDBSecurityGroups');
    return this;
  }

  /**
   * Returns a list of DB snapshot attribute names and values for a manual DB snapshot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html
   */
  public describeDBSnapshotAttributes() {
    this.add('rds:DescribeDBSnapshotAttributes');
    return this;
  }

  /**
   * Returns information about DB snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html
   */
  public describeDBSnapshots() {
    this.add('rds:DescribeDBSnapshots');
    return this;
  }

  /**
   * Returns a list of DBSubnetGroup descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html
   */
  public describeDBSubnetGroups() {
    this.add('rds:DescribeDBSubnetGroups');
    return this;
  }

  /**
   * Returns the default engine and system parameter information for the cluster database engine.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html
   */
  public describeEngineDefaultClusterParameters() {
    this.add('rds:DescribeEngineDefaultClusterParameters');
    return this;
  }

  /**
   * Returns the default engine and system parameter information for the specified database engine.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public describeEngineDefaultParameters() {
    this.add('rds:DescribeEngineDefaultParameters');
    return this;
  }

  /**
   * Displays a list of categories for all event source types, or, if specified, for a specified source type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html
   */
  public describeEventCategories() {
    this.add('rds:DescribeEventCategories');
    return this;
  }

  /**
   * Lists all the subscription descriptions for a customer account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public describeEventSubscriptions() {
    this.add('rds:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html
   */
  public describeEvents() {
    this.add('rds:DescribeEvents');
    return this;
  }

  /**
   * Returns information about the export tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html
   */
  public describeExportTasks() {
    this.add('rds:DescribeExportTasks');
    return this;
  }

  /**
   * Returns information about Aurora global database clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html
   */
  public describeGlobalClusters() {
    this.add('rds:DescribeGlobalClusters');
    return this;
  }

  /**
   * Describes all available options.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html
   */
  public describeOptionGroupOptions() {
    this.add('rds:DescribeOptionGroupOptions');
    return this;
  }

  /**
   * Describes the available option groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html
   */
  public describeOptionGroups() {
    this.add('rds:DescribeOptionGroups');
    return this;
  }

  /**
   * Returns a list of orderable DB instance options for the specified engine.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html
   */
  public describeOrderableDBInstanceOptions() {
    this.add('rds:DescribeOrderableDBInstanceOptions');
    return this;
  }

  /**
   * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html
   */
  public describePendingMaintenanceActions() {
    this.add('rds:DescribePendingMaintenanceActions');
    return this;
  }

  /**
   * Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html
   */
  public describeReservedDBInstances() {
    this.add('rds:DescribeReservedDBInstances');
    return this;
  }

  /**
   * Lists available reserved DB instance offerings.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html
   */
  public describeReservedDBInstancesOfferings() {
    this.add('rds:DescribeReservedDBInstancesOfferings');
    return this;
  }

  /**
   * Returns a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html
   */
  public describeSourceRegions() {
    this.add('rds:DescribeSourceRegions');
    return this;
  }

  /**
   * Lists available modifications you can make to your DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html
   */
  public describeValidDBInstanceModifications() {
    this.add('rds:DescribeValidDBInstanceModifications');
    return this;
  }

  /**
   * Downloads the contents of the specified database log file.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/RESTReference.html#RESTReference.DownloadCompleteDBLogFile
   */
  public downloadCompleteDBLogFile() {
    this.add('rds:DownloadCompleteDBLogFile');
    return this;
  }

  /**
   * Downloads all or a portion of the specified log file, up to 1 MB in size.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html
   */
  public downloadDBLogFilePortion() {
    this.add('rds:DownloadDBLogFilePortion');
    return this;
  }

  /**
   * Forces a failover for a DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html
   */
  public failoverDBCluster() {
    this.add('rds:FailoverDBCluster');
    return this;
  }

  /**
   * Lists all tags on an Amazon RDS resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('rds:ListTagsForResource');
    return this;
  }

  /**
   * Modify current cluster capacity for an Amazon Aurora Severless DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html
   */
  public modifyCurrentDBClusterCapacity() {
    this.add('rds:ModifyCurrentDBClusterCapacity');
    return this;
  }

  /**
   * Modify a setting for an Amazon Aurora DB cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html
   */
  public modifyDBCluster() {
    this.add('rds:ModifyDBCluster');
    return this;
  }

  /**
   * Modifies the properties of an endpoint in an Amazon Aurora DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html
   */
  public modifyDBClusterEndpoint() {
    this.add('rds:ModifyDBClusterEndpoint');
    return this;
  }

  /**
   * Modifies the parameters of a DB cluster parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html
   */
  public modifyDBClusterParameterGroup() {
    this.add('rds:ModifyDBClusterParameterGroup');
    return this;
  }

  /**
   * Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html
   */
  public modifyDBClusterSnapshotAttribute() {
    this.add('rds:ModifyDBClusterSnapshotAttribute');
    return this;
  }

  /**
   * Modify settings for a DB instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html
   */
  public modifyDBInstance() {
    this.add('rds:ModifyDBInstance');
    return this;
  }

  /**
   * Modifies the parameters of a DB parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html
   */
  public modifyDBParameterGroup() {
    this.add('rds:ModifyDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to modify database proxy
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxy.html
   */
  public modifyDBProxy() {
    this.add('rds:ModifyDBProxy');
    return this;
  }

  /**
   * Grants permission to modify target group for a database proxy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html
   */
  public modifyDBProxyTargetGroup() {
    this.add('rds:ModifyDBProxyTargetGroup');
    return this;
  }

  /**
   * Updates a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html
   */
  public modifyDBSnapshot() {
    this.add('rds:ModifyDBSnapshot');
    return this;
  }

  /**
   * Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html
   */
  public modifyDBSnapshotAttribute() {
    this.add('rds:ModifyDBSnapshotAttribute');
    return this;
  }

  /**
   * Modifies an existing DB subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html
   */
  public modifyDBSubnetGroup() {
    this.add('rds:ModifyDBSubnetGroup');
    return this;
  }

  /**
   * Modifies an existing RDS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html
   */
  public modifyEventSubscription() {
    this.add('rds:ModifyEventSubscription');
    return this;
  }

  /**
   * Modify a setting for an Amazon Aurora global cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html
   */
  public modifyGlobalCluster() {
    this.add('rds:ModifyGlobalCluster');
    return this;
  }

  /**
   * Modifies an existing option group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html
   */
  public modifyOptionGroup() {
    this.add('rds:ModifyOptionGroup');
    return this;
  }

  /**
   * Promotes a Read Replica DB instance to a standalone DB instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html
   */
  public promoteReadReplica() {
    this.add('rds:PromoteReadReplica');
    return this;
  }

  /**
   * Promotes a Read Replica DB cluster to a standalone DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html
   */
  public promoteReadReplicaDBCluster() {
    this.add('rds:PromoteReadReplicaDBCluster');
    return this;
  }

  /**
   * Purchases a reserved DB instance offering.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html
   */
  public purchaseReservedDBInstancesOffering() {
    this.add('rds:PurchaseReservedDBInstancesOffering');
    return this;
  }

  /**
   * Rebooting a DB instance restarts the database engine service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html
   */
  public rebootDBInstance() {
    this.add('rds:RebootDBInstance');
    return this;
  }

  /**
   * Grants permission to add targets to a database proxy target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html
   */
  public registerDBProxyTargets() {
    this.add('rds:RegisterDBProxyTargets');
    return this;
  }

  /**
   * Detaches an Aurora secondary cluster from an Aurora global database cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html
   */
  public removeFromGlobalCluster() {
    this.add('rds:RemoveFromGlobalCluster');
    return this;
  }

  /**
   * Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html
   */
  public removeRoleFromDBCluster() {
    this.add('rds:RemoveRoleFromDBCluster');
    return this;
  }

  /**
   * Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html
   */
  public removeRoleFromDBInstance() {
    this.add('rds:RemoveRoleFromDBInstance');
    return this;
  }

  /**
   * Removes a source identifier from an existing RDS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html
   */
  public removeSourceIdentifierFromSubscription() {
    this.add('rds:RemoveSourceIdentifierFromSubscription');
    return this;
  }

  /**
   * Removes metadata tags from an Amazon RDS resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public removeTagsFromResource() {
    this.add('rds:RemoveTagsFromResource');
    return this;
  }

  /**
   * Modifies the parameters of a DB cluster parameter group to the default value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html
   */
  public resetDBClusterParameterGroup() {
    this.add('rds:ResetDBClusterParameterGroup');
    return this;
  }

  /**
   * Modifies the parameters of a DB parameter group to the engine/system default value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html
   */
  public resetDBParameterGroup() {
    this.add('rds:ResetDBParameterGroup');
    return this;
  }

  /**
   * Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifStorageEncrypted()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html
   */
  public restoreDBClusterFromS3() {
    this.add('rds:RestoreDBClusterFromS3');
    return this;
  }

  /**
   * Creates a new DB cluster from a DB cluster snapshot.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromSnapshot.html
   */
  public restoreDBClusterFromSnapshot() {
    this.add('rds:RestoreDBClusterFromSnapshot');
    return this;
  }

  /**
   * Restores a DB cluster to an arbitrary point in time.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html
   */
  public restoreDBClusterToPointInTime() {
    this.add('rds:RestoreDBClusterToPointInTime');
    return this;
  }

  /**
   * Creates a new DB instance from a DB snapshot.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html
   */
  public restoreDBInstanceFromDBSnapshot() {
    this.add('rds:RestoreDBInstanceFromDBSnapshot');
    return this;
  }

  /**
   * Creates a new DB instance from an Amazon S3 bucket.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromS3.html
   */
  public restoreDBInstanceFromS3() {
    this.add('rds:RestoreDBInstanceFromS3');
    return this;
  }

  /**
   * Restores a DB instance to an arbitrary point in time.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceToPointInTime.html
   */
  public restoreDBInstanceToPointInTime() {
    this.add('rds:RestoreDBInstanceToPointInTime');
    return this;
  }

  /**
   * Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html
   */
  public revokeDBSecurityGroupIngress() {
    this.add('rds:RevokeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Enables the user to start Activity Stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html
   */
  public startActivityStream() {
    this.add('rds:StartActivityStream');
    return this;
  }

  /**
   * Starts the DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html
   */
  public startDBCluster() {
    this.add('rds:StartDBCluster');
    return this;
  }

  /**
   * Starts the DB instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html
   */
  public startDBInstance() {
    this.add('rds:StartDBInstance');
    return this;
  }

  /**
   * Starts a new Export task for a DB snapshot.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html
   */
  public startExportTask() {
    this.add('rds:StartExportTask');
    return this;
  }

  /**
   * Enables the user to stop Activity Stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html
   */
  public stopActivityStream() {
    this.add('rds:StopActivityStream');
    return this;
  }

  /**
   * Stops the DB cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html
   */
  public stopDBCluster() {
    this.add('rds:StopDBCluster');
    return this;
  }

  /**
   * Stops the DB instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html
   */
  public stopDBInstance() {
    this.add('rds:StopDBInstance');
    return this;
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html
   *
   * @param dbClusterInstanceName - Identifier for the dbClusterInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterTag()
   */
  public onCluster(dbClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster:${DbClusterInstanceName}';
    arn = arn.replace('${DbClusterInstanceName}', dbClusterInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-endpoint to the statement
   *
   * @param dbClusterEndpoint - Identifier for the dbClusterEndpoint.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClusterEndpoint(dbClusterEndpoint: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-endpoint:${DbClusterEndpoint}';
    arn = arn.replace('${DbClusterEndpoint}', dbClusterEndpoint);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-pg to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   *
   * @param clusterParameterGroupName - Identifier for the clusterParameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterPgTag()
   */
  public onClusterPg(clusterParameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}';
    arn = arn.replace('${ClusterParameterGroupName}', clusterParameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster-snapshot to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   *
   * @param clusterSnapshotName - Identifier for the clusterSnapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifClusterSnapshotTag()
   */
  public onClusterSnapshot(clusterSnapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:cluster-snapshot:${ClusterSnapshotName}';
    arn = arn.replace('${ClusterSnapshotName}', clusterSnapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type db to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.html
   *
   * @param dbInstanceName - Identifier for the dbInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDatabaseClass()
   * - .ifDatabaseEngine()
   * - .ifDatabaseName()
   * - .ifMultiAz()
   * - .ifPiops()
   * - .ifStorageEncrypted()
   * - .ifStorageSize()
   * - .ifVpc()
   * - .ifDbTag()
   */
  public onDb(dbInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}';
    arn = arn.replace('${DbInstanceName}', dbInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type es to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
   *
   * @param subscriptionName - Identifier for the subscriptionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEsTag()
   */
  public onEs(subscriptionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:es:${SubscriptionName}';
    arn = arn.replace('${SubscriptionName}', subscriptionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type global-cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html
   *
   * @param globalCluster - Identifier for the globalCluster.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGlobalCluster(globalCluster: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Account}:global-cluster:${GlobalCluster}';
    arn = arn.replace('${GlobalCluster}', globalCluster);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type og to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html
   *
   * @param optionGroupName - Identifier for the optionGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifOgTag()
   */
  public onOg(optionGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:og:${OptionGroupName}';
    arn = arn.replace('${OptionGroupName}', optionGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pg to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifPgTag()
   */
  public onPg(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type proxy to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param dbProxyId - Identifier for the dbProxyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProxy(dbProxyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:db-proxy:${DbProxyId}';
    arn = arn.replace('${DbProxyId}', dbProxyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ri to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html
   *
   * @param reservedDbInstanceName - Identifier for the reservedDbInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRiTag()
   */
  public onRi(reservedDbInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:ri:${ReservedDbInstanceName}';
    arn = arn.replace('${ReservedDbInstanceName}', reservedDbInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type secgrp to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSecgrpTag()
   */
  public onSecgrp(securityGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:secgrp:${SecurityGroupName}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   *
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSnapshotTag()
   */
  public onSnapshot(snapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:snapshot:${SnapshotName}';
    arn = arn.replace('${SnapshotName}', snapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subgrp to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSubgrpTag()
   */
  public onSubgrp(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:subgrp:${SubnetGroupName}';
    arn = arn.replace('${SubnetGroupName}', subnetGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type target to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param targetId - Identifier for the targetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTarget(targetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:target:${TargetId}';
    arn = arn.replace('${TargetId}', targetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type target-group to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   *
   * @param targetGroupId - Identifier for the targetGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTargetGroup(targetGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rds:${Region}:${Account}:target-group:${TargetGroupId}';
    arn = arn.replace('${TargetGroupId}', targetGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .addTagsToResource()
   * - .createDBCluster()
   * - .createDBClusterEndpoint()
   * - .createDBClusterParameterGroup()
   * - .createDBClusterSnapshot()
   * - .createDBInstance()
   * - .createDBInstanceReadReplica()
   * - .createDBParameterGroup()
   * - .createDBProxy()
   * - .createDBSecurityGroup()
   * - .createDBSnapshot()
   * - .createDBSubnetGroup()
   * - .createEventSubscription()
   * - .createOptionGroup()
   * - .purchaseReservedDBInstancesOffering()
   * - .removeTagsFromResource()
   * - .restoreDBClusterFromS3()
   * - .restoreDBClusterFromSnapshot()
   * - .restoreDBClusterToPointInTime()
   * - .restoreDBInstanceFromDBSnapshot()
   * - .restoreDBInstanceFromS3()
   * - .restoreDBInstanceToPointInTime()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - cluster
   * - cluster-endpoint
   * - cluster-pg
   * - cluster-snapshot
   * - db
   * - es
   * - og
   * - pg
   * - proxy
   * - ri
   * - secgrp
   * - snapshot
   * - subgrp
   * - target-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .addTagsToResource()
   * - .createDBCluster()
   * - .createDBClusterEndpoint()
   * - .createDBClusterParameterGroup()
   * - .createDBClusterSnapshot()
   * - .createDBInstance()
   * - .createDBInstanceReadReplica()
   * - .createDBParameterGroup()
   * - .createDBProxy()
   * - .createDBSecurityGroup()
   * - .createDBSnapshot()
   * - .createDBSubnetGroup()
   * - .createEventSubscription()
   * - .createOptionGroup()
   * - .purchaseReservedDBInstancesOffering()
   * - .removeTagsFromResource()
   * - .restoreDBClusterFromS3()
   * - .restoreDBClusterFromSnapshot()
   * - .restoreDBClusterToPointInTime()
   * - .restoreDBInstanceFromDBSnapshot()
   * - .restoreDBInstanceFromS3()
   * - .restoreDBInstanceToPointInTime()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * A type of DB instance class.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseClass(value: string | string[], operator?: string) {
    return this.if(`rds:DatabaseClass`, value, operator || 'StringLike');
  }

  /**
   * A database engine. For possible values refer to engine parameter in https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .createDBCluster()
   * - .restoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseEngine(value: string | string[], operator?: string) {
    return this.if(`rds:DatabaseEngine`, value, operator || 'StringLike');
  }

  /**
   * The user-defined name of the database on the DB instance.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .createDBCluster()
   * - .restoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDatabaseName(value: string | string[], operator?: string) {
    return this.if(`rds:DatabaseName`, value, operator || 'StringLike');
  }

  /**
   * The type of the endpoint. One of: READER, WRITER, CUSTOM.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .createDBClusterEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointType(value: string | string[], operator?: string) {
    return this.if(`rds:EndpointType`, value, operator || 'StringLike');
  }

  /**
   * A value that specifies whether the DB instance runs in multiple Availability Zones. To indicate that the DB instance is using Multi-AZ, specify true.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifMultiAz(value?: boolean) {
    return this.if(`rds:MultiAz`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * A value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPiops(value: number | number[], operator?: string) {
    return this.if(`rds:Piops`, value, operator || 'NumericEquals');
  }

  /**
   * A value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .createDBCluster()
   * - .restoreDBClusterFromS3()
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifStorageEncrypted(value?: boolean) {
    return this.if(`rds:StorageEncrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The storage volume size (in GB).
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifStorageSize(value: number | number[], operator?: string) {
    return this.if(`rds:StorageSize`, value, operator || 'NumericEquals');
  }

  /**
   * A value that specifies whether the DB instance runs in an Amazon Virtual Private Cloud (Amazon VPC). To indicate that the DB instance runs in an Amazon VPC, specify true.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifVpc(value?: boolean) {
    return this.if(`rds:Vpc`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * A tag attached to a DB cluster parameter group.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster-pg
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterPgTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:cluster-pg-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB cluster snapshot.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster-snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterSnapshotTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:cluster-snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB cluster.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:cluster-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB instance.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - db
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:db-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to an event subscription.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - es
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEsTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:es-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB option group.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - og
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOgTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:og-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB parameter group.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - pg
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPgTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:pg-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Limits the set of tag keys and values that can be used to tag a resource.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .addTagsToResource()
   * - .createDBCluster()
   * - .createDBClusterParameterGroup()
   * - .createDBClusterSnapshot()
   * - .createDBInstance()
   * - .createDBInstanceReadReplica()
   * - .createDBParameterGroup()
   * - .createDBSecurityGroup()
   * - .createDBSnapshot()
   * - .createDBSubnetGroup()
   * - .createEventSubscription()
   * - .createOptionGroup()
   * - .removeTagsFromResource()
   * - .restoreDBClusterFromS3()
   * - .restoreDBClusterFromSnapshot()
   * - .restoreDBClusterToPointInTime()
   * - .restoreDBInstanceFromDBSnapshot()
   * - .restoreDBInstanceFromS3()
   * - .restoreDBInstanceToPointInTime()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:req-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a reserved DB instance.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - ri
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRiTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:ri-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB security group.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - secgrp
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecgrpTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:secgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB snapshot.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSnapshotTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:snapshot-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag attached to a DB subnet group.
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to resource types:
   * - subgrp
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubgrpTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:subgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }
}
