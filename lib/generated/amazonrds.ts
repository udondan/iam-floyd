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
      "description": "Grants permission to associate an Identity and Access Management (IAM) role from an Aurora DB cluster",
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
      "description": "Grants permission to associate an AWS Identity and Access Management (IAM) role with a DB instance",
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
      "description": "Grants permission to add a source identifier to an existing RDS event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html",
      "description": "Grants permission to add metadata tags to an Amazon RDS resource",
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
      "description": "Grants permission to apply a pending maintenance action to a resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "db": {
          "required": false
        }
      }
    },
    "AuthorizeDBSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html",
      "description": "Grants permission to enable ingress to a DBSecurityGroup using one of two forms of authorization",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "BacktrackDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html",
      "description": "Grants permission to backtrack a DB cluster to a specific time, without creating a new DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "CancelExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html",
      "description": "Grants permission to cancel an export task in progress",
      "accessLevel": "Write"
    },
    "CopyDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html",
      "description": "Grants permission to copy the specified DB cluster parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CopyDBClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html",
      "description": "Grants permission to create a snapshot of a DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CopyDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html",
      "description": "Grants permission to copy the specified DB parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CopyDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html",
      "description": "Grants permission to copy the specified DB snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CopyOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html",
      "description": "Grants permission to copy the specified option group",
      "accessLevel": "Write",
      "resourceTypes": {
        "og": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html",
      "description": "Grants permission to create a new Amazon Aurora DB cluster",
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
      "description": "Grants permission to create a new custom endpoint and associates it with an Amazon Aurora DB cluster",
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
      "description": "Grants permission to create a new DB cluster parameter group",
      "accessLevel": "Write",
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
      "description": "Grants permission to create a snapshot of a DB cluster",
      "accessLevel": "Write",
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
      "description": "Grants permission to create a new DB instance",
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
      "description": "Grants permission to create a DB instance that acts as a Read Replica of a source DB instance",
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
      "description": "Grants permission to create a new DB parameter group",
      "accessLevel": "Write",
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
      "description": "Grants permission to create a new DB security group. DB security groups control access to a DB instance",
      "accessLevel": "Write",
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
      "description": "Grants permission to create a DBSnapshot",
      "accessLevel": "Write",
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
      "description": "Grants permission to create a new DB subnet group",
      "accessLevel": "Write",
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
      "description": "Grants permission to create an RDS event notification subscription",
      "accessLevel": "Write",
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
      "description": "Grants permission to create an Aurora global database spread across multiple regions",
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
      "description": "Grants permission to create a new option group",
      "accessLevel": "Write",
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
      "description": "Grants permission to delete a previously provisioned DB cluster",
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
      "description": "Grants permission to delete a custom endpoint and removes it from an Amazon Aurora DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-endpoint": {
          "required": true
        }
      }
    },
    "DeleteDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html",
      "description": "Grants permission to delete a specified DB cluster parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DeleteDBClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html",
      "description": "Grants permission to delete a DB cluster snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DeleteDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html",
      "description": "Grants permission to delete a previously provisioned DB instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DeleteDBInstanceAutomatedBackup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html",
      "description": "Grants permission to deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID",
      "accessLevel": "Write"
    },
    "DeleteDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html",
      "description": "Grants permission to delete a specified DBParameterGroup",
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
      "description": "Grants permission to delete a DB security group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "DeleteDBSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html",
      "description": "Grants permission to delete a DBSnapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DeleteDBSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html",
      "description": "Grants permission to delete a DB subnet group",
      "accessLevel": "Write",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "DeleteEventSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html",
      "description": "Grants permission to delete an RDS event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "DeleteGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html",
      "description": "Grants permission to delete a global database cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-cluster": {
          "required": true
        }
      }
    },
    "DeleteOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html",
      "description": "Grants permission to delete an existing option group",
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
      "description": "Grants permission to list all of the attributes for a customer account",
      "accessLevel": "List"
    },
    "DescribeCertificates": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html",
      "description": "Lists the set of CA certificates provided by Amazon RDS for this AWS account",
      "accessLevel": "List"
    },
    "DescribeDBClusterBacktracks": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html",
      "description": "Grants permission to return information about backtracks for a DB cluster",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeDBClusterEndpoints": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html",
      "description": "Grants permission to return information about endpoints for an Amazon Aurora DB cluster",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-endpoint": {
          "required": true
        },
        "cluster": {
          "required": false
        }
      }
    },
    "DescribeDBClusterParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html",
      "description": "Grants permission to return a list of DBClusterParameterGroup descriptions",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DescribeDBClusterParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html",
      "description": "Grants permission to return the detailed parameter list for a particular DB cluster parameter group",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "DescribeDBClusterSnapshotAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html",
      "description": "Grants permission to return a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBClusterSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html",
      "description": "Grants permission to return information about DB cluster snapshots",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBClusters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html",
      "description": "Grants permission to return information about provisioned Aurora DB clusters",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeDBEngineVersions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html",
      "description": "Grants permission to return a list of the available DB engines",
      "accessLevel": "List"
    },
    "DescribeDBInstanceAutomatedBackups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html",
      "description": "Grants permission to return a list of automated backups for both current and deleted instances",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": false
        }
      }
    },
    "DescribeDBInstances": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html",
      "description": "Grants permission to return information about provisioned RDS instances",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DescribeDBLogFiles": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html",
      "description": "Grants permission to return a list of DB log files for the DB instance",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DescribeDBParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html",
      "description": "Grants permission to return a list of DBParameterGroup descriptions",
      "accessLevel": "List",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "DescribeDBParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html",
      "description": "Grants permission to return the detailed parameter list for a particular DB parameter group",
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
      "description": "Grants permission to return a list of DBSecurityGroup descriptions",
      "accessLevel": "List",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "DescribeDBSnapshotAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html",
      "description": "Grants permission to return a list of DB snapshot attribute names and values for a manual DB snapshot",
      "accessLevel": "List",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DescribeDBSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html",
      "description": "Grants permission to return information about DB snapshots",
      "accessLevel": "List",
      "resourceTypes": {
        "snapshot": {
          "required": true
        },
        "db": {
          "required": false
        }
      }
    },
    "DescribeDBSubnetGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html",
      "description": "Grants permission to return a list of DBSubnetGroup descriptions",
      "accessLevel": "List",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "DescribeEngineDefaultClusterParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html",
      "description": "Grants permission to return the default engine and system parameter information for the cluster database engine",
      "accessLevel": "List"
    },
    "DescribeEngineDefaultParameters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html",
      "description": "Grants permission to return the default engine and system parameter information for the specified database engine",
      "accessLevel": "List"
    },
    "DescribeEventCategories": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html",
      "description": "Grants permission to display a list of categories for all event source types, or, if specified, for a specified source type",
      "accessLevel": "List"
    },
    "DescribeEventSubscriptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html",
      "description": "Grants permission to list all the subscription descriptions for a customer account",
      "accessLevel": "List",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html",
      "description": "Grants permission to return events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days",
      "accessLevel": "List"
    },
    "DescribeExportTasks": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html",
      "description": "Grants permission to return information about the export tasks",
      "accessLevel": "List"
    },
    "DescribeGlobalClusters": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html",
      "description": "Grants permission to return information about Aurora global database clusters",
      "accessLevel": "List",
      "resourceTypes": {
        "global-cluster": {
          "required": true
        }
      }
    },
    "DescribeOptionGroupOptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html",
      "description": "Grants permission to describe all available options",
      "accessLevel": "List",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "DescribeOptionGroups": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html",
      "description": "Grants permission to describe the available option groups",
      "accessLevel": "List",
      "resourceTypes": {
        "og": {
          "required": true
        }
      }
    },
    "DescribeOrderableDBInstanceOptions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html",
      "description": "Grants permission to return a list of orderable DB instance options for the specified engine",
      "accessLevel": "List"
    },
    "DescribePendingMaintenanceActions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html",
      "description": "Grants permission to return a list of resources (for example, DB instances) that have at least one pending maintenance action",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "db": {
          "required": false
        }
      }
    },
    "DescribeReservedDBInstances": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html",
      "description": "Grants permission to return information about reserved DB instances for this account, or about a specified reserved DB instance",
      "accessLevel": "List",
      "resourceTypes": {
        "ri": {
          "required": true
        }
      }
    },
    "DescribeReservedDBInstancesOfferings": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html",
      "description": "Grants permission to list available reserved DB instance offerings",
      "accessLevel": "List"
    },
    "DescribeSourceRegions": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html",
      "description": "Grants permission to return a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from",
      "accessLevel": "List"
    },
    "DescribeValidDBInstanceModifications": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html",
      "description": "Grants permission to list available modifications you can make to your DB instance",
      "accessLevel": "List",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "DownloadDBLogFilePortion": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html",
      "description": "Grants permission to download all or a portion of the specified log file, up to 1 MB in size",
      "accessLevel": "Read",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "FailoverDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html",
      "description": "Grants permission to force a failover for a DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list all tags on an Amazon RDS resource",
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
      "description": "Grants permission to modify current cluster capacity for an Amazon Aurora Severless DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html",
      "description": "Grants permission to modify a setting for an Amazon Aurora DB cluster",
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
      "description": "Grants permission to modify the properties of an endpoint in an Amazon Aurora DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-endpoint": {
          "required": true
        }
      }
    },
    "ModifyDBClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html",
      "description": "Grants permission to modify the parameters of a DB cluster parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "ModifyDBClusterSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html",
      "description": "Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html",
      "description": "Grants permission to modify settings for a DB instance",
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
      "description": "Grants permission to modify the parameters of a DB parameter group",
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
      "description": "Grants permission to update a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html",
      "description": "Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ModifyDBSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html",
      "description": "Grants permission to modify an existing DB subnet group",
      "accessLevel": "Write",
      "resourceTypes": {
        "subgrp": {
          "required": true
        }
      }
    },
    "ModifyEventSubscription": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html",
      "description": "Grants permission to modify an existing RDS event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "ModifyGlobalCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html",
      "description": "Grants permission to modify a setting for an Amazon Aurora global cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-cluster": {
          "required": true
        }
      }
    },
    "ModifyOptionGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html",
      "description": "Grants permission to modify an existing option group",
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
      "description": "Grants permission to promote a Read Replica DB instance to a standalone DB instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "PromoteReadReplicaDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html",
      "description": "Grants permission to promote a Read Replica DB cluster to a standalone DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "PurchaseReservedDBInstancesOffering": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html",
      "description": "Grants permission to purchase a reserved DB instance offering",
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
      "description": "Grants permission to restart the database engine service",
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
      "description": "Grants permission to detach an Aurora secondary cluster from an Aurora global database cluster",
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
      "description": "Grants permission to disassociate an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster",
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
      "description": "Grants permission to disassociate an AWS Identity and Access Management (IAM) role from a DB instance",
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
      "description": "Grants permission to remove a source identifier from an existing RDS event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "es": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "Grants permission to remove metadata tags from an Amazon RDS resource.",
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
      "description": "Grants permission to modify the parameters of a DB cluster parameter group to the default value",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster-pg": {
          "required": true
        }
      }
    },
    "ResetDBParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html",
      "description": "Grants permission to modify the parameters of a DB parameter group to the engine/system default value",
      "accessLevel": "Write",
      "resourceTypes": {
        "pg": {
          "required": true
        }
      }
    },
    "RestoreDBClusterFromS3": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html",
      "description": "Grants permission to create an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket",
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
      "description": "Grants permission to create a new DB cluster from a DB cluster snapshot",
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
      "description": "Grants permission to restore a DB cluster to an arbitrary point in time",
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
      "description": "Grants permission to create a new DB instance from a DB snapshot",
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
      "description": "Grants permission to create a new DB instance from an Amazon S3 bucket",
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
      "description": "Grants permission to restore a DB instance to an arbitrary point in time",
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
      "description": "Grants permission to revoke ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups",
      "accessLevel": "Write",
      "resourceTypes": {
        "secgrp": {
          "required": true
        }
      }
    },
    "StartActivityStream": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html",
      "description": "Grants permission to start Activity Stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StartDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html",
      "description": "Starts the DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StartDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html",
      "description": "Grants permission to start the DB instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "db": {
          "required": true
        }
      }
    },
    "StartExportTask": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html",
      "description": "Grants permission to start a new Export task for a DB snapshot",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ]
    },
    "StopActivityStream": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html",
      "description": "Grants permission to stop Activity Stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StopDBCluster": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html",
      "description": "Grants permission to stop the DB cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StopDBInstance": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html",
      "description": "Grants permission to stop the DB instance",
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
      "arn": "arn:${Partition}:rds::${Account}:global-cluster:${GlobalCluster}",
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
   * Grants permission to associate an Identity and Access Management (IAM) role from an Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html
   */
  public toAddRoleToDBCluster() {
    this.add('rds:AddRoleToDBCluster');
    return this;
  }

  /**
   * Grants permission to associate an AWS Identity and Access Management (IAM) role with a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html
   */
  public toAddRoleToDBInstance() {
    this.add('rds:AddRoleToDBInstance');
    return this;
  }

  /**
   * Grants permission to add a source identifier to an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html
   */
  public toAddSourceIdentifierToSubscription() {
    this.add('rds:AddSourceIdentifierToSubscription');
    return this;
  }

  /**
   * Grants permission to add metadata tags to an Amazon RDS resource
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
  public toAddTagsToResource() {
    this.add('rds:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to apply a pending maintenance action to a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public toApplyPendingMaintenanceAction() {
    this.add('rds:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Grants permission to enable ingress to a DBSecurityGroup using one of two forms of authorization
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html
   */
  public toAuthorizeDBSecurityGroupIngress() {
    this.add('rds:AuthorizeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to backtrack a DB cluster to a specific time, without creating a new DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html
   */
  public toBacktrackDBCluster() {
    this.add('rds:BacktrackDBCluster');
    return this;
  }

  /**
   * Grants permission to cancel an export task in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    this.add('rds:CancelExportTask');
    return this;
  }

  /**
   * Grants permission to copy the specified DB cluster parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html
   */
  public toCopyDBClusterParameterGroup() {
    this.add('rds:CopyDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to create a snapshot of a DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html
   */
  public toCopyDBClusterSnapshot() {
    this.add('rds:CopyDBClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to copy the specified DB parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html
   */
  public toCopyDBParameterGroup() {
    this.add('rds:CopyDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to copy the specified DB snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html
   */
  public toCopyDBSnapshot() {
    this.add('rds:CopyDBSnapshot');
    return this;
  }

  /**
   * Grants permission to copy the specified option group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html
   */
  public toCopyOptionGroup() {
    this.add('rds:CopyOptionGroup');
    return this;
  }

  /**
   * Grants permission to create a new Amazon Aurora DB cluster
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
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html
   */
  public toCreateDBCluster() {
    this.add('rds:CreateDBCluster');
    return this;
  }

  /**
   * Grants permission to create a new custom endpoint and associates it with an Amazon Aurora DB cluster
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
  public toCreateDBClusterEndpoint() {
    this.add('rds:CreateDBClusterEndpoint');
    return this;
  }

  /**
   * Grants permission to create a new DB cluster parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html
   */
  public toCreateDBClusterParameterGroup() {
    this.add('rds:CreateDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to create a snapshot of a DB cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html
   */
  public toCreateDBClusterSnapshot() {
    this.add('rds:CreateDBClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to create a new DB instance
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
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html
   */
  public toCreateDBInstance() {
    this.add('rds:CreateDBInstance');
    return this;
  }

  /**
   * Grants permission to create a DB instance that acts as a Read Replica of a source DB instance
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
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html
   */
  public toCreateDBInstanceReadReplica() {
    this.add('rds:CreateDBInstanceReadReplica');
    return this;
  }

  /**
   * Grants permission to create a new DB parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html
   */
  public toCreateDBParameterGroup() {
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
  public toCreateDBProxy() {
    this.add('rds:CreateDBProxy');
    return this;
  }

  /**
   * Grants permission to create a new DB security group. DB security groups control access to a DB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html
   */
  public toCreateDBSecurityGroup() {
    this.add('rds:CreateDBSecurityGroup');
    return this;
  }

  /**
   * Grants permission to create a DBSnapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html
   */
  public toCreateDBSnapshot() {
    this.add('rds:CreateDBSnapshot');
    return this;
  }

  /**
   * Grants permission to create a new DB subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html
   */
  public toCreateDBSubnetGroup() {
    this.add('rds:CreateDBSubnetGroup');
    return this;
  }

  /**
   * Grants permission to create an RDS event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    this.add('rds:CreateEventSubscription');
    return this;
  }

  /**
   * Grants permission to create an Aurora global database spread across multiple regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html
   */
  public toCreateGlobalCluster() {
    this.add('rds:CreateGlobalCluster');
    return this;
  }

  /**
   * Grants permission to create a new option group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html
   */
  public toCreateOptionGroup() {
    this.add('rds:CreateOptionGroup');
    return this;
  }

  /**
   * Grants permission to delete a previously provisioned DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
   */
  public toDeleteDBCluster() {
    this.add('rds:DeleteDBCluster');
    return this;
  }

  /**
   * Grants permission to delete a custom endpoint and removes it from an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html
   */
  public toDeleteDBClusterEndpoint() {
    this.add('rds:DeleteDBClusterEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a specified DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html
   */
  public toDeleteDBClusterParameterGroup() {
    this.add('rds:DeleteDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to delete a DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html
   */
  public toDeleteDBClusterSnapshot() {
    this.add('rds:DeleteDBClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a previously provisioned DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html
   */
  public toDeleteDBInstance() {
    this.add('rds:DeleteDBInstance');
    return this;
  }

  /**
   * Grants permission to deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html
   */
  public toDeleteDBInstanceAutomatedBackup() {
    this.add('rds:DeleteDBInstanceAutomatedBackup');
    return this;
  }

  /**
   * Grants permission to delete a specified DBParameterGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html
   */
  public toDeleteDBParameterGroup() {
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
  public toDeleteDBProxy() {
    this.add('rds:DeleteDBProxy');
    return this;
  }

  /**
   * Grants permission to delete a DB security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html
   */
  public toDeleteDBSecurityGroup() {
    this.add('rds:DeleteDBSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a DBSnapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html
   */
  public toDeleteDBSnapshot() {
    this.add('rds:DeleteDBSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html
   */
  public toDeleteDBSubnetGroup() {
    this.add('rds:DeleteDBSubnetGroup');
    return this;
  }

  /**
   * Grants permission to delete an RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    this.add('rds:DeleteEventSubscription');
    return this;
  }

  /**
   * Grants permission to delete a global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html
   */
  public toDeleteGlobalCluster() {
    this.add('rds:DeleteGlobalCluster');
    return this;
  }

  /**
   * Grants permission to delete an existing option group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html
   */
  public toDeleteOptionGroup() {
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
  public toDeregisterDBProxyTargets() {
    this.add('rds:DeregisterDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to list all of the attributes for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.add('rds:DescribeAccountAttributes');
    return this;
  }

  /**
   * Lists the set of CA certificates provided by Amazon RDS for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html
   */
  public toDescribeCertificates() {
    this.add('rds:DescribeCertificates');
    return this;
  }

  /**
   * Grants permission to return information about backtracks for a DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html
   */
  public toDescribeDBClusterBacktracks() {
    this.add('rds:DescribeDBClusterBacktracks');
    return this;
  }

  /**
   * Grants permission to return information about endpoints for an Amazon Aurora DB cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html
   */
  public toDescribeDBClusterEndpoints() {
    this.add('rds:DescribeDBClusterEndpoints');
    return this;
  }

  /**
   * Grants permission to return a list of DBClusterParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html
   */
  public toDescribeDBClusterParameterGroups() {
    this.add('rds:DescribeDBClusterParameterGroups');
    return this;
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB cluster parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html
   */
  public toDescribeDBClusterParameters() {
    this.add('rds:DescribeDBClusterParameters');
    return this;
  }

  /**
   * Grants permission to return a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html
   */
  public toDescribeDBClusterSnapshotAttributes() {
    this.add('rds:DescribeDBClusterSnapshotAttributes');
    return this;
  }

  /**
   * Grants permission to return information about DB cluster snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html
   */
  public toDescribeDBClusterSnapshots() {
    this.add('rds:DescribeDBClusterSnapshots');
    return this;
  }

  /**
   * Grants permission to return information about provisioned Aurora DB clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html
   */
  public toDescribeDBClusters() {
    this.add('rds:DescribeDBClusters');
    return this;
  }

  /**
   * Grants permission to return a list of the available DB engines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html
   */
  public toDescribeDBEngineVersions() {
    this.add('rds:DescribeDBEngineVersions');
    return this;
  }

  /**
   * Grants permission to return a list of automated backups for both current and deleted instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html
   */
  public toDescribeDBInstanceAutomatedBackups() {
    this.add('rds:DescribeDBInstanceAutomatedBackups');
    return this;
  }

  /**
   * Grants permission to return information about provisioned RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html
   */
  public toDescribeDBInstances() {
    this.add('rds:DescribeDBInstances');
    return this;
  }

  /**
   * Grants permission to return a list of DB log files for the DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html
   */
  public toDescribeDBLogFiles() {
    this.add('rds:DescribeDBLogFiles');
    return this;
  }

  /**
   * Grants permission to return a list of DBParameterGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html
   */
  public toDescribeDBParameterGroups() {
    this.add('rds:DescribeDBParameterGroups');
    return this;
  }

  /**
   * Grants permission to return the detailed parameter list for a particular DB parameter group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html
   */
  public toDescribeDBParameters() {
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
  public toDescribeDBProxies() {
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
  public toDescribeDBProxyTargetGroups() {
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
  public toDescribeDBProxyTargets() {
    this.add('rds:DescribeDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to return a list of DBSecurityGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html
   */
  public toDescribeDBSecurityGroups() {
    this.add('rds:DescribeDBSecurityGroups');
    return this;
  }

  /**
   * Grants permission to return a list of DB snapshot attribute names and values for a manual DB snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html
   */
  public toDescribeDBSnapshotAttributes() {
    this.add('rds:DescribeDBSnapshotAttributes');
    return this;
  }

  /**
   * Grants permission to return information about DB snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html
   */
  public toDescribeDBSnapshots() {
    this.add('rds:DescribeDBSnapshots');
    return this;
  }

  /**
   * Grants permission to return a list of DBSubnetGroup descriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html
   */
  public toDescribeDBSubnetGroups() {
    this.add('rds:DescribeDBSubnetGroups');
    return this;
  }

  /**
   * Grants permission to return the default engine and system parameter information for the cluster database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html
   */
  public toDescribeEngineDefaultClusterParameters() {
    this.add('rds:DescribeEngineDefaultClusterParameters');
    return this;
  }

  /**
   * Grants permission to return the default engine and system parameter information for the specified database engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public toDescribeEngineDefaultParameters() {
    this.add('rds:DescribeEngineDefaultParameters');
    return this;
  }

  /**
   * Grants permission to display a list of categories for all event source types, or, if specified, for a specified source type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    this.add('rds:DescribeEventCategories');
    return this;
  }

  /**
   * Grants permission to list all the subscription descriptions for a customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    this.add('rds:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Grants permission to return events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.add('rds:DescribeEvents');
    return this;
  }

  /**
   * Grants permission to return information about the export tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    this.add('rds:DescribeExportTasks');
    return this;
  }

  /**
   * Grants permission to return information about Aurora global database clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html
   */
  public toDescribeGlobalClusters() {
    this.add('rds:DescribeGlobalClusters');
    return this;
  }

  /**
   * Grants permission to describe all available options
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html
   */
  public toDescribeOptionGroupOptions() {
    this.add('rds:DescribeOptionGroupOptions');
    return this;
  }

  /**
   * Grants permission to describe the available option groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html
   */
  public toDescribeOptionGroups() {
    this.add('rds:DescribeOptionGroups');
    return this;
  }

  /**
   * Grants permission to return a list of orderable DB instance options for the specified engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html
   */
  public toDescribeOrderableDBInstanceOptions() {
    this.add('rds:DescribeOrderableDBInstanceOptions');
    return this;
  }

  /**
   * Grants permission to return a list of resources (for example, DB instances) that have at least one pending maintenance action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html
   */
  public toDescribePendingMaintenanceActions() {
    this.add('rds:DescribePendingMaintenanceActions');
    return this;
  }

  /**
   * Grants permission to return information about reserved DB instances for this account, or about a specified reserved DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html
   */
  public toDescribeReservedDBInstances() {
    this.add('rds:DescribeReservedDBInstances');
    return this;
  }

  /**
   * Grants permission to list available reserved DB instance offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html
   */
  public toDescribeReservedDBInstancesOfferings() {
    this.add('rds:DescribeReservedDBInstancesOfferings');
    return this;
  }

  /**
   * Grants permission to return a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html
   */
  public toDescribeSourceRegions() {
    this.add('rds:DescribeSourceRegions');
    return this;
  }

  /**
   * Grants permission to list available modifications you can make to your DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html
   */
  public toDescribeValidDBInstanceModifications() {
    this.add('rds:DescribeValidDBInstanceModifications');
    return this;
  }

  /**
   * Grants permission to download all or a portion of the specified log file, up to 1 MB in size
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html
   */
  public toDownloadDBLogFilePortion() {
    this.add('rds:DownloadDBLogFilePortion');
    return this;
  }

  /**
   * Grants permission to force a failover for a DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html
   */
  public toFailoverDBCluster() {
    this.add('rds:FailoverDBCluster');
    return this;
  }

  /**
   * Grants permission to list all tags on an Amazon RDS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('rds:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to modify current cluster capacity for an Amazon Aurora Severless DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html
   */
  public toModifyCurrentDBClusterCapacity() {
    this.add('rds:ModifyCurrentDBClusterCapacity');
    return this;
  }

  /**
   * Grants permission to modify a setting for an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html
   */
  public toModifyDBCluster() {
    this.add('rds:ModifyDBCluster');
    return this;
  }

  /**
   * Grants permission to modify the properties of an endpoint in an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html
   */
  public toModifyDBClusterEndpoint() {
    this.add('rds:ModifyDBClusterEndpoint');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html
   */
  public toModifyDBClusterParameterGroup() {
    this.add('rds:ModifyDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html
   */
  public toModifyDBClusterSnapshotAttribute() {
    this.add('rds:ModifyDBClusterSnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to modify settings for a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html
   */
  public toModifyDBInstance() {
    this.add('rds:ModifyDBInstance');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html
   */
  public toModifyDBParameterGroup() {
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
  public toModifyDBProxy() {
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
  public toModifyDBProxyTargetGroup() {
    this.add('rds:ModifyDBProxyTargetGroup');
    return this;
  }

  /**
   * Grants permission to update a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html
   */
  public toModifyDBSnapshot() {
    this.add('rds:ModifyDBSnapshot');
    return this;
  }

  /**
   * Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html
   */
  public toModifyDBSnapshotAttribute() {
    this.add('rds:ModifyDBSnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to modify an existing DB subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html
   */
  public toModifyDBSubnetGroup() {
    this.add('rds:ModifyDBSubnetGroup');
    return this;
  }

  /**
   * Grants permission to modify an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    this.add('rds:ModifyEventSubscription');
    return this;
  }

  /**
   * Grants permission to modify a setting for an Amazon Aurora global cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html
   */
  public toModifyGlobalCluster() {
    this.add('rds:ModifyGlobalCluster');
    return this;
  }

  /**
   * Grants permission to modify an existing option group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html
   */
  public toModifyOptionGroup() {
    this.add('rds:ModifyOptionGroup');
    return this;
  }

  /**
   * Grants permission to promote a Read Replica DB instance to a standalone DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html
   */
  public toPromoteReadReplica() {
    this.add('rds:PromoteReadReplica');
    return this;
  }

  /**
   * Grants permission to promote a Read Replica DB cluster to a standalone DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html
   */
  public toPromoteReadReplicaDBCluster() {
    this.add('rds:PromoteReadReplicaDBCluster');
    return this;
  }

  /**
   * Grants permission to purchase a reserved DB instance offering
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html
   */
  public toPurchaseReservedDBInstancesOffering() {
    this.add('rds:PurchaseReservedDBInstancesOffering');
    return this;
  }

  /**
   * Grants permission to restart the database engine service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html
   */
  public toRebootDBInstance() {
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
  public toRegisterDBProxyTargets() {
    this.add('rds:RegisterDBProxyTargets');
    return this;
  }

  /**
   * Grants permission to detach an Aurora secondary cluster from an Aurora global database cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html
   */
  public toRemoveFromGlobalCluster() {
    this.add('rds:RemoveFromGlobalCluster');
    return this;
  }

  /**
   * Grants permission to disassociate an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html
   */
  public toRemoveRoleFromDBCluster() {
    this.add('rds:RemoveRoleFromDBCluster');
    return this;
  }

  /**
   * Grants permission to disassociate an AWS Identity and Access Management (IAM) role from a DB instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html
   */
  public toRemoveRoleFromDBInstance() {
    this.add('rds:RemoveRoleFromDBInstance');
    return this;
  }

  /**
   * Grants permission to remove a source identifier from an existing RDS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html
   */
  public toRemoveSourceIdentifierFromSubscription() {
    this.add('rds:RemoveSourceIdentifierFromSubscription');
    return this;
  }

  /**
   * Grants permission to remove metadata tags from an Amazon RDS resource.
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
  public toRemoveTagsFromResource() {
    this.add('rds:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB cluster parameter group to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html
   */
  public toResetDBClusterParameterGroup() {
    this.add('rds:ResetDBClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a DB parameter group to the engine/system default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html
   */
  public toResetDBParameterGroup() {
    this.add('rds:ResetDBParameterGroup');
    return this;
  }

  /**
   * Grants permission to create an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket
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
  public toRestoreDBClusterFromS3() {
    this.add('rds:RestoreDBClusterFromS3');
    return this;
  }

  /**
   * Grants permission to create a new DB cluster from a DB cluster snapshot
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
  public toRestoreDBClusterFromSnapshot() {
    this.add('rds:RestoreDBClusterFromSnapshot');
    return this;
  }

  /**
   * Grants permission to restore a DB cluster to an arbitrary point in time
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
  public toRestoreDBClusterToPointInTime() {
    this.add('rds:RestoreDBClusterToPointInTime');
    return this;
  }

  /**
   * Grants permission to create a new DB instance from a DB snapshot
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
  public toRestoreDBInstanceFromDBSnapshot() {
    this.add('rds:RestoreDBInstanceFromDBSnapshot');
    return this;
  }

  /**
   * Grants permission to create a new DB instance from an Amazon S3 bucket
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
  public toRestoreDBInstanceFromS3() {
    this.add('rds:RestoreDBInstanceFromS3');
    return this;
  }

  /**
   * Grants permission to restore a DB instance to an arbitrary point in time
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
  public toRestoreDBInstanceToPointInTime() {
    this.add('rds:RestoreDBInstanceToPointInTime');
    return this;
  }

  /**
   * Grants permission to revoke ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html
   */
  public toRevokeDBSecurityGroupIngress() {
    this.add('rds:RevokeDBSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to start Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html
   */
  public toStartActivityStream() {
    this.add('rds:StartActivityStream');
    return this;
  }

  /**
   * Starts the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html
   */
  public toStartDBCluster() {
    this.add('rds:StartDBCluster');
    return this;
  }

  /**
   * Grants permission to start the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html
   */
  public toStartDBInstance() {
    this.add('rds:StartDBInstance');
    return this;
  }

  /**
   * Grants permission to start a new Export task for a DB snapshot
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html
   */
  public toStartExportTask() {
    this.add('rds:StartExportTask');
    return this;
  }

  /**
   * Grants permission to stop Activity Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html
   */
  public toStopActivityStream() {
    this.add('rds:StopActivityStream');
    return this;
  }

  /**
   * Grants permission to stop the DB cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html
   */
  public toStopDBCluster() {
    this.add('rds:StopDBCluster');
    return this;
  }

  /**
   * Grants permission to stop the DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html
   */
  public toStopDBInstance() {
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
    var arn = 'arn:${Partition}:rds::${Account}:global-cluster:${GlobalCluster}';
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
   * Filters access by the type of DB instance class
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
   * Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
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
   * Filters access by the user-defined name of the database on the DB instance
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
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
   * Filters access by the type of the endpoint. One of: READER, WRITER, CUSTOM
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBClusterEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointType(value: string | string[], operator?: string) {
    return this.if(`rds:EndpointType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the value that specifies whether the DB instance runs in multiple Availability Zones. To indicate that the DB instance is using Multi-AZ, specify true
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
   * Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0
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
   * Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toCreateDBCluster()
   * - .toRestoreDBClusterFromS3()
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
   * Filters access by the storage volume size (in GB)
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
   * Filters access by the value that specifies whether the DB instance runs in an Amazon Virtual Private Cloud (Amazon VPC). To indicate that the DB instance runs in an Amazon VPC, specify true
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
   * Filters access by the tag attached to a DB cluster parameter group
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
   * Filters access by the tag attached to a DB cluster snapshot
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
   * Filters access by the tag attached to a DB cluster
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
   * Filters access by the tag attached to a DB instance
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
   * Filters access by the tag attached to an event subscription
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
   * Filters access by the tag attached to a DB option group
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
   * Filters access by the tag attached to a DB parameter group
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
   * Filters access by the set of tag keys and values that can be used to tag a resource
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDBCluster()
   * - .toCreateDBClusterParameterGroup()
   * - .toCreateDBClusterSnapshot()
   * - .toCreateDBInstance()
   * - .toCreateDBInstanceReadReplica()
   * - .toCreateDBParameterGroup()
   * - .toCreateDBSecurityGroup()
   * - .toCreateDBSnapshot()
   * - .toCreateDBSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateOptionGroup()
   * - .toRemoveTagsFromResource()
   * - .toRestoreDBClusterFromS3()
   * - .toRestoreDBClusterFromSnapshot()
   * - .toRestoreDBClusterToPointInTime()
   * - .toRestoreDBInstanceFromDBSnapshot()
   * - .toRestoreDBInstanceFromS3()
   * - .toRestoreDBInstanceToPointInTime()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`rds:req-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag attached to a reserved DB instance
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
   * Filters access by the tag attached to a DB security group
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
   * Filters access by the tag attached to a DB snapshot
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
   * Filters access by the tag attached to a DB subnet group
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
