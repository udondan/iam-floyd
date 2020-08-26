import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [redshift](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Redshift extends PolicyStatement {
  public servicePrefix = 'redshift';
  protected actionList: Actions = {
    "AcceptReservedNodeExchange": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html",
      "description": "Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration",
      "accessLevel": "Write"
    },
    "AuthorizeClusterSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html",
      "description": "Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        },
        "securitygroupingress-ec2securitygroup": {
          "required": true
        }
      }
    },
    "AuthorizeSnapshotAccess": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html",
      "description": "Grants permission to the specified AWS account to restore a snapshot",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "BatchDeleteClusterSnapshots": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html",
      "description": "Grants permission to delete snapshots in a batch of size upto 100",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "BatchModifyClusterSnapshots": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html",
      "description": "Grants permission to modify settings for a list of snapshots",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "CancelQuery": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to cancel a query through the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "CancelQuerySession": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to see queries in the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "CancelResize": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html",
      "description": "Grants permission to cancel a resize operation",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "CopyClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html",
      "description": "Grants permission to copy a cluster snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html",
      "description": "Grants permission to create a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html",
      "description": "Grants permission to create an Amazon Redshift parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateClusterSecurityGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html",
      "description": "Grants permission to create an Amazon Redshift security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html",
      "description": "Grants permission to create a manual snapshot of the specified cluster",
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
    "CreateClusterSubnetGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html",
      "description": "Grants permission to create an Amazon Redshift subnet group",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateClusterUser": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html",
      "description": "Grants permission to automatically create the specified Amazon Redshift user if it does not exist",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "dbuser": {
          "required": true
        }
      },
      "conditions": [
        "redshift:DbUser"
      ]
    },
    "CreateEventSubscription": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html",
      "description": "Grants permission to create an Amazon Redshift event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventsubscription": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateHsmClientCertificate": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html",
      "description": "Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM",
      "accessLevel": "Write",
      "resourceTypes": {
        "hsmclientcertificate": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateHsmConfiguration": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html",
      "description": "Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)",
      "accessLevel": "Write",
      "resourceTypes": {
        "hsmconfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSavedQuery": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to create saved SQL queries through the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "CreateScheduledAction": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html",
      "description": "Grants permission to create an Amazon Redshift scheduled action",
      "accessLevel": "Write"
    },
    "CreateSnapshotCopyGrant": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html",
      "description": "Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "snapshotcopygrant": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html",
      "description": "Grants permission to create a snapshot schedule",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshotschedule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html",
      "description": "Grants permission to add one or more tags to a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "dbgroup": {
          "required": false
        },
        "dbname": {
          "required": false
        },
        "dbuser": {
          "required": false
        },
        "eventsubscription": {
          "required": false
        },
        "hsmclientcertificate": {
          "required": false
        },
        "hsmconfiguration": {
          "required": false
        },
        "parametergroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        },
        "securitygroupingress-cidr": {
          "required": false
        },
        "securitygroupingress-ec2securitygroup": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "snapshotcopygrant": {
          "required": false
        },
        "snapshotschedule": {
          "required": false
        },
        "subnetgroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html",
      "description": "Grants permission to delete a previously provisioned cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeleteClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html",
      "description": "Grants permission to delete an Amazon Redshift parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "DeleteClusterSecurityGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html",
      "description": "Grants permission to delete an Amazon Redshift security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "DeleteClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html",
      "description": "Grants permission to delete a manual snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DeleteClusterSubnetGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html",
      "description": "Grants permission to delete a cluster subnet group",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "DeleteEventSubscription": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html",
      "description": "Grants permission to delete an Amazon Redshift event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventsubscription": {
          "required": true
        }
      }
    },
    "DeleteHsmClientCertificate": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html",
      "description": "Grants permission to delete an HSM client certificate",
      "accessLevel": "Write",
      "resourceTypes": {
        "hsmclientcertificate": {
          "required": true
        }
      }
    },
    "DeleteHsmConfiguration": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html",
      "description": "Grants permission to delete an Amazon Redshift HSM configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "hsmconfiguration": {
          "required": true
        }
      }
    },
    "DeleteSavedQueries": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to delete saved SQL queries through the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "DeleteScheduledAction": {
      "url": "",
      "description": "Grants permission to delete an Amazon Redshift scheduled action",
      "accessLevel": "Write"
    },
    "DeleteSnapshotCopyGrant": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html",
      "description": "Grants permission to delete a snapshot copy grant",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshotcopygrant": {
          "required": true
        }
      }
    },
    "DeleteSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html",
      "description": "Grants permission to delete a snapshot schedule",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshotschedule": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html",
      "description": "Grants permission to delete a tag or tags from a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "dbgroup": {
          "required": false
        },
        "dbname": {
          "required": false
        },
        "dbuser": {
          "required": false
        },
        "eventsubscription": {
          "required": false
        },
        "hsmclientcertificate": {
          "required": false
        },
        "hsmconfiguration": {
          "required": false
        },
        "parametergroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        },
        "securitygroupingress-cidr": {
          "required": false
        },
        "securitygroupingress-ec2securitygroup": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "snapshotcopygrant": {
          "required": false
        },
        "snapshotschedule": {
          "required": false
        },
        "subnetgroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "DescribeAccountAttributes": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html",
      "description": "Grants permission to describe attributes attached to the specified AWS account",
      "accessLevel": "Read"
    },
    "DescribeClusterDbRevisions": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html",
      "description": "Grants permission to describe database revisions for a cluster",
      "accessLevel": "List"
    },
    "DescribeClusterParameterGroups": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html",
      "description": "Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group",
      "accessLevel": "Read"
    },
    "DescribeClusterParameters": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html",
      "description": "Grants permission to describe parameters contained within an Amazon Redshift parameter group",
      "accessLevel": "Read",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "DescribeClusterSecurityGroups": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html",
      "description": "Grants permission to describe Amazon Redshift security groups",
      "accessLevel": "Read"
    },
    "DescribeClusterSnapshots": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html",
      "description": "Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots",
      "accessLevel": "Read"
    },
    "DescribeClusterSubnetGroups": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html",
      "description": "Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups",
      "accessLevel": "Read"
    },
    "DescribeClusterTracks": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html",
      "description": "Grants permission to describe available maintenance tracks",
      "accessLevel": "List"
    },
    "DescribeClusterVersions": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html",
      "description": "Grants permission to describe available Amazon Redshift cluster versions",
      "accessLevel": "Read"
    },
    "DescribeClusters": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html",
      "description": "Grants permission to describe properties of provisioned clusters",
      "accessLevel": "List"
    },
    "DescribeDefaultClusterParameters": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html",
      "description": "Grants permission to describe parameter settings for a parameter group family",
      "accessLevel": "Read"
    },
    "DescribeEventCategories": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html",
      "description": "Grants permission to describe event categories for all event source types, or for a specified source type",
      "accessLevel": "Read"
    },
    "DescribeEventSubscriptions": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html",
      "description": "Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account",
      "accessLevel": "Read"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html",
      "description": "Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days",
      "accessLevel": "List"
    },
    "DescribeHsmClientCertificates": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html",
      "description": "Grants permission to describe HSM client certificates",
      "accessLevel": "Read"
    },
    "DescribeHsmConfigurations": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html",
      "description": "Grants permission to describe Amazon Redshift HSM configurations",
      "accessLevel": "Read"
    },
    "DescribeLoggingStatus": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html",
      "description": "Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeNodeConfigurationOptions": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html",
      "description": "Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type",
      "accessLevel": "List"
    },
    "DescribeOrderableClusterOptions": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html",
      "description": "Grants permission to describe orderable cluster options",
      "accessLevel": "Read"
    },
    "DescribeQuery": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to describe a query through the Amazon Redshift console",
      "accessLevel": "Read"
    },
    "DescribeReservedNodeOfferings": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html",
      "description": "Grants permission to describe available reserved node offerings by Amazon Redshift",
      "accessLevel": "Read"
    },
    "DescribeReservedNodes": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html",
      "description": "Grants permission to describe the reserved nodes",
      "accessLevel": "Read"
    },
    "DescribeResize": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html",
      "description": "Grants permission to describe the last resize operation for a cluster",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeSavedQueries": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to describe saved queries through the Amazon Redshift console",
      "accessLevel": "Read"
    },
    "DescribeScheduledActions": {
      "url": "",
      "description": "Grants permission to describe created Amazon Redshift scheduled actions",
      "accessLevel": "Read"
    },
    "DescribeSnapshotCopyGrants": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html",
      "description": "Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region",
      "accessLevel": "Read"
    },
    "DescribeSnapshotSchedules": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html",
      "description": "Grants permission to describe snapshot schedules",
      "accessLevel": "Read",
      "resourceTypes": {
        "snapshotschedule": {
          "required": true
        }
      }
    },
    "DescribeStorage": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html",
      "description": "Grants permission to describe account level backups storage size and provisional storage",
      "accessLevel": "Read"
    },
    "DescribeTable": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to describe a table through the Amazon Redshift console",
      "accessLevel": "Read"
    },
    "DescribeTableRestoreStatus": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html",
      "description": "Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action",
      "accessLevel": "Read"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html",
      "description": "Grants permission to describe tags",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "dbgroup": {
          "required": false
        },
        "dbname": {
          "required": false
        },
        "dbuser": {
          "required": false
        },
        "eventsubscription": {
          "required": false
        },
        "hsmclientcertificate": {
          "required": false
        },
        "hsmconfiguration": {
          "required": false
        },
        "parametergroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        },
        "securitygroupingress-cidr": {
          "required": false
        },
        "securitygroupingress-ec2securitygroup": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "snapshotcopygrant": {
          "required": false
        },
        "snapshotschedule": {
          "required": false
        },
        "subnetgroup": {
          "required": false
        }
      }
    },
    "DisableLogging": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html",
      "description": "Grants permission to disable logging information, such as queries and connection attempts, for a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DisableSnapshotCopy": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html",
      "description": "Grants permission to disable the automatic copy of snapshots for a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "EnableLogging": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html",
      "description": "Grants permission to enable logging information, such as queries and connection attempts, for a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "EnableSnapshotCopy": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html",
      "description": "Grants permission to enable the automatic copy of snapshots for a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ExecuteQuery": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to execute a query through the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "FetchResults": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to fetch query results through the Amazon Redshift console",
      "accessLevel": "Read"
    },
    "GetClusterCredentials": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html",
      "description": "Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account",
      "accessLevel": "Write",
      "resourceTypes": {
        "dbuser": {
          "required": true
        },
        "dbgroup": {
          "required": false
        },
        "dbname": {
          "required": false
        }
      },
      "conditions": [
        "redshift:DbName",
        "redshift:DbUser",
        "redshift:DurationSeconds"
      ]
    },
    "GetReservedNodeExchangeOfferings": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html",
      "description": "Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node",
      "accessLevel": "Read"
    },
    "JoinGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html",
      "description": "Grants permission to join the specified Amazon Redshift group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "dbgroup": {
          "required": true
        }
      }
    },
    "ListDatabases": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to list databases through the Amazon Redshift console",
      "accessLevel": "List"
    },
    "ListSavedQueries": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to list saved queries through the Amazon Redshift console",
      "accessLevel": "List"
    },
    "ListSchemas": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to list schemas through the Amazon Redshift console",
      "accessLevel": "List"
    },
    "ListTables": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to list tables through the Amazon Redshift console",
      "accessLevel": "List"
    },
    "ModifyCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html",
      "description": "Grants permission to modify the settings of a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyClusterDbRevision": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html",
      "description": "Grants permission to modify the database revision of a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyClusterIamRoles": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html",
      "description": "Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyClusterMaintenance": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html",
      "description": "Grants permission to modify the maintenance settings of a cluster",
      "accessLevel": "Write"
    },
    "ModifyClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html",
      "description": "Grants permission to modify the parameters of a parameter group",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "ModifyClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html",
      "description": "Grants permission to modify the settings of a snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ModifyClusterSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html",
      "description": "Grants permission to modify a snapshot schedule for a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyClusterSubnetGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html",
      "description": "Grants permission to modify a cluster subnet group to include the specified list of VPC subnets",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "ModifyEventSubscription": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html",
      "description": "Grants permission to modify an existing Amazon Redshift event notification subscription",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventsubscription": {
          "required": true
        }
      }
    },
    "ModifySavedQuery": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to modify an existing saved query through the Amazon Redshift console",
      "accessLevel": "Write"
    },
    "ModifyScheduledAction": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html",
      "description": "Grants permission to modify an existing Amazon Redshift scheduled action",
      "accessLevel": "Write"
    },
    "ModifySnapshotCopyRetentionPeriod": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html",
      "description": "Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifySnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html",
      "description": "Grants permission to modify a snapshot schedule",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshotschedule": {
          "required": true
        }
      }
    },
    "PauseCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html",
      "description": "Grants permission to pause a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "PurchaseReservedNodeOffering": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html",
      "description": "Grants permission to purchase a reserved node",
      "accessLevel": "Write"
    },
    "RebootCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html",
      "description": "Grants permission to reboot a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ResetClusterParameterGroup": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html",
      "description": "Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to \"engine-default\"",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "ResizeCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html",
      "description": "Grants permission to change the size of a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "RestoreFromClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html",
      "description": "Grants permission to create a cluster from a snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "snapshot": {
          "required": true
        }
      }
    },
    "RestoreTableFromClusterSnapshot": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html",
      "description": "Grants permission to create a table from a table in an Amazon Redshift cluster snapshot",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "snapshot": {
          "required": true
        }
      }
    },
    "ResumeCluster": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html",
      "description": "Grants permission to resume a cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "RevokeClusterSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html",
      "description": "Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        },
        "securitygroupingress-ec2securitygroup": {
          "required": true
        }
      }
    },
    "RevokeSnapshotAccess": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html",
      "description": "Grants permission to revoke access from the specified AWS account to restore a snapshot",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "RotateEncryptionKey": {
      "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html",
      "description": "Grants permission to rotate an encryption key for a cluster",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ViewQueriesFromConsole": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to view query results through the Amazon Redshift console",
      "accessLevel": "List"
    },
    "ViewQueriesInConsole": {
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html",
      "description": "Grants permission to terminate running queries and loads through the Amazon Redshift console",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:cluster:${ClusterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dbgroup": {
      "name": "dbgroup",
      "url": "https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_GROUP.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:dbgroup:${ClusterName}/${DbGroup}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dbname": {
      "name": "dbname",
      "url": "https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:dbname:${ClusterName}/${DbName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dbuser": {
      "name": "dbuser",
      "url": "https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:dbuser:${ClusterName}/${DbUser}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "eventsubscription": {
      "name": "eventsubscription",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-events.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:eventsubscription:${EventSubscriptionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "hsmclientcertificate": {
      "name": "hsmclientcertificate",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:hsmclientcertificate:${HSMClientCertificateId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "hsmconfiguration": {
      "name": "hsmconfiguration",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:hsmconfiguration:${HSMConfigurationId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "parametergroup": {
      "name": "parametergroup",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:parametergroup:${ParameterGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "securitygroup": {
      "name": "securitygroup",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:securitygroup:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ec2SecurityGroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "securitygroupingress-cidr": {
      "name": "securitygroupingress-cidr",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/cidrip/${IpRange}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "securitygroupingress-ec2securitygroup": {
      "name": "securitygroupingress-ec2securitygroup",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ece2SecuritygroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "snapshot": {
      "name": "snapshot",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:snapshot:${ClusterName}/${SnapshotName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "snapshotcopygrant": {
      "name": "snapshotcopygrant",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:snapshotcopygrant:${SnapshotCopyGrantName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "snapshotschedule": {
      "name": "snapshotschedule",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:snapshotschedule:${ParameterGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "subnetgroup": {
      "name": "subnetgroup",
      "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html",
      "arn": "arn:${Partition}:redshift:${Region}:${Account}:subnetgroup:${SubnetGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [redshift](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html
   */
  public toAcceptReservedNodeExchange() {
    this.add('redshift:AcceptReservedNodeExchange');
    return this;
  }

  /**
   * Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html
   */
  public toAuthorizeClusterSecurityGroupIngress() {
    this.add('redshift:AuthorizeClusterSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to the specified AWS account to restore a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html
   */
  public toAuthorizeSnapshotAccess() {
    this.add('redshift:AuthorizeSnapshotAccess');
    return this;
  }

  /**
   * Grants permission to delete snapshots in a batch of size upto 100
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html
   */
  public toBatchDeleteClusterSnapshots() {
    this.add('redshift:BatchDeleteClusterSnapshots');
    return this;
  }

  /**
   * Grants permission to modify settings for a list of snapshots
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html
   */
  public toBatchModifyClusterSnapshots() {
    this.add('redshift:BatchModifyClusterSnapshots');
    return this;
  }

  /**
   * Grants permission to cancel a query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCancelQuery() {
    this.add('redshift:CancelQuery');
    return this;
  }

  /**
   * Grants permission to see queries in the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCancelQuerySession() {
    this.add('redshift:CancelQuerySession');
    return this;
  }

  /**
   * Grants permission to cancel a resize operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html
   */
  public toCancelResize() {
    this.add('redshift:CancelResize');
    return this;
  }

  /**
   * Grants permission to copy a cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html
   */
  public toCopyClusterSnapshot() {
    this.add('redshift:CopyClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to create a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    this.add('redshift:CreateCluster');
    return this;
  }

  /**
   * Grants permission to create an Amazon Redshift parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html
   */
  public toCreateClusterParameterGroup() {
    this.add('redshift:CreateClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to create an Amazon Redshift security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html
   */
  public toCreateClusterSecurityGroup() {
    this.add('redshift:CreateClusterSecurityGroup');
    return this;
  }

  /**
   * Grants permission to create a manual snapshot of the specified cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html
   */
  public toCreateClusterSnapshot() {
    this.add('redshift:CreateClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to create an Amazon Redshift subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html
   */
  public toCreateClusterSubnetGroup() {
    this.add('redshift:CreateClusterSubnetGroup');
    return this;
  }

  /**
   * Grants permission to automatically create the specified Amazon Redshift user if it does not exist
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDbUser()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html
   */
  public toCreateClusterUser() {
    this.add('redshift:CreateClusterUser');
    return this;
  }

  /**
   * Grants permission to create an Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    this.add('redshift:CreateEventSubscription');
    return this;
  }

  /**
   * Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html
   */
  public toCreateHsmClientCertificate() {
    this.add('redshift:CreateHsmClientCertificate');
    return this;
  }

  /**
   * Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html
   */
  public toCreateHsmConfiguration() {
    this.add('redshift:CreateHsmConfiguration');
    return this;
  }

  /**
   * Grants permission to create saved SQL queries through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateSavedQuery() {
    this.add('redshift:CreateSavedQuery');
    return this;
  }

  /**
   * Grants permission to create an Amazon Redshift scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html
   */
  public toCreateScheduledAction() {
    this.add('redshift:CreateScheduledAction');
    return this;
  }

  /**
   * Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html
   */
  public toCreateSnapshotCopyGrant() {
    this.add('redshift:CreateSnapshotCopyGrant');
    return this;
  }

  /**
   * Grants permission to create a snapshot schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html
   */
  public toCreateSnapshotSchedule() {
    this.add('redshift:CreateSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html
   */
  public toCreateTags() {
    this.add('redshift:CreateTags');
    return this;
  }

  /**
   * Grants permission to delete a previously provisioned cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    this.add('redshift:DeleteCluster');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Redshift parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html
   */
  public toDeleteClusterParameterGroup() {
    this.add('redshift:DeleteClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Redshift security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html
   */
  public toDeleteClusterSecurityGroup() {
    this.add('redshift:DeleteClusterSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a manual snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html
   */
  public toDeleteClusterSnapshot() {
    this.add('redshift:DeleteClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a cluster subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html
   */
  public toDeleteClusterSubnetGroup() {
    this.add('redshift:DeleteClusterSubnetGroup');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    this.add('redshift:DeleteEventSubscription');
    return this;
  }

  /**
   * Grants permission to delete an HSM client certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html
   */
  public toDeleteHsmClientCertificate() {
    this.add('redshift:DeleteHsmClientCertificate');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Redshift HSM configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html
   */
  public toDeleteHsmConfiguration() {
    this.add('redshift:DeleteHsmConfiguration');
    return this;
  }

  /**
   * Grants permission to delete saved SQL queries through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteSavedQueries() {
    this.add('redshift:DeleteSavedQueries');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Redshift scheduled action
   *
   * Access Level: Write
   */
  public toDeleteScheduledAction() {
    this.add('redshift:DeleteScheduledAction');
    return this;
  }

  /**
   * Grants permission to delete a snapshot copy grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html
   */
  public toDeleteSnapshotCopyGrant() {
    this.add('redshift:DeleteSnapshotCopyGrant');
    return this;
  }

  /**
   * Grants permission to delete a snapshot schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  public toDeleteSnapshotSchedule() {
    this.add('redshift:DeleteSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to delete a tag or tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.add('redshift:DeleteTags');
    return this;
  }

  /**
   * Grants permission to describe attributes attached to the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.add('redshift:DescribeAccountAttributes');
    return this;
  }

  /**
   * Grants permission to describe database revisions for a cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html
   */
  public toDescribeClusterDbRevisions() {
    this.add('redshift:DescribeClusterDbRevisions');
    return this;
  }

  /**
   * Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html
   */
  public toDescribeClusterParameterGroups() {
    this.add('redshift:DescribeClusterParameterGroups');
    return this;
  }

  /**
   * Grants permission to describe parameters contained within an Amazon Redshift parameter group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html
   */
  public toDescribeClusterParameters() {
    this.add('redshift:DescribeClusterParameters');
    return this;
  }

  /**
   * Grants permission to describe Amazon Redshift security groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html
   */
  public toDescribeClusterSecurityGroups() {
    this.add('redshift:DescribeClusterSecurityGroups');
    return this;
  }

  /**
   * Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html
   */
  public toDescribeClusterSnapshots() {
    this.add('redshift:DescribeClusterSnapshots');
    return this;
  }

  /**
   * Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html
   */
  public toDescribeClusterSubnetGroups() {
    this.add('redshift:DescribeClusterSubnetGroups');
    return this;
  }

  /**
   * Grants permission to describe available maintenance tracks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html
   */
  public toDescribeClusterTracks() {
    this.add('redshift:DescribeClusterTracks');
    return this;
  }

  /**
   * Grants permission to describe available Amazon Redshift cluster versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html
   */
  public toDescribeClusterVersions() {
    this.add('redshift:DescribeClusterVersions');
    return this;
  }

  /**
   * Grants permission to describe properties of provisioned clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    this.add('redshift:DescribeClusters');
    return this;
  }

  /**
   * Grants permission to describe parameter settings for a parameter group family
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html
   */
  public toDescribeDefaultClusterParameters() {
    this.add('redshift:DescribeDefaultClusterParameters');
    return this;
  }

  /**
   * Grants permission to describe event categories for all event source types, or for a specified source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    this.add('redshift:DescribeEventCategories');
    return this;
  }

  /**
   * Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    this.add('redshift:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.add('redshift:DescribeEvents');
    return this;
  }

  /**
   * Grants permission to describe HSM client certificates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html
   */
  public toDescribeHsmClientCertificates() {
    this.add('redshift:DescribeHsmClientCertificates');
    return this;
  }

  /**
   * Grants permission to describe Amazon Redshift HSM configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html
   */
  public toDescribeHsmConfigurations() {
    this.add('redshift:DescribeHsmConfigurations');
    return this;
  }

  /**
   * Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html
   */
  public toDescribeLoggingStatus() {
    this.add('redshift:DescribeLoggingStatus');
    return this;
  }

  /**
   * Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html
   */
  public toDescribeNodeConfigurationOptions() {
    this.add('redshift:DescribeNodeConfigurationOptions');
    return this;
  }

  /**
   * Grants permission to describe orderable cluster options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html
   */
  public toDescribeOrderableClusterOptions() {
    this.add('redshift:DescribeOrderableClusterOptions');
    return this;
  }

  /**
   * Grants permission to describe a query through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeQuery() {
    this.add('redshift:DescribeQuery');
    return this;
  }

  /**
   * Grants permission to describe available reserved node offerings by Amazon Redshift
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html
   */
  public toDescribeReservedNodeOfferings() {
    this.add('redshift:DescribeReservedNodeOfferings');
    return this;
  }

  /**
   * Grants permission to describe the reserved nodes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html
   */
  public toDescribeReservedNodes() {
    this.add('redshift:DescribeReservedNodes');
    return this;
  }

  /**
   * Grants permission to describe the last resize operation for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html
   */
  public toDescribeResize() {
    this.add('redshift:DescribeResize');
    return this;
  }

  /**
   * Grants permission to describe saved queries through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeSavedQueries() {
    this.add('redshift:DescribeSavedQueries');
    return this;
  }

  /**
   * Grants permission to describe created Amazon Redshift scheduled actions
   *
   * Access Level: Read
   */
  public toDescribeScheduledActions() {
    this.add('redshift:DescribeScheduledActions');
    return this;
  }

  /**
   * Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html
   */
  public toDescribeSnapshotCopyGrants() {
    this.add('redshift:DescribeSnapshotCopyGrants');
    return this;
  }

  /**
   * Grants permission to describe snapshot schedules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html
   */
  public toDescribeSnapshotSchedules() {
    this.add('redshift:DescribeSnapshotSchedules');
    return this;
  }

  /**
   * Grants permission to describe account level backups storage size and provisional storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html
   */
  public toDescribeStorage() {
    this.add('redshift:DescribeStorage');
    return this;
  }

  /**
   * Grants permission to describe a table through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeTable() {
    this.add('redshift:DescribeTable');
    return this;
  }

  /**
   * Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html
   */
  public toDescribeTableRestoreStatus() {
    this.add('redshift:DescribeTableRestoreStatus');
    return this;
  }

  /**
   * Grants permission to describe tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.add('redshift:DescribeTags');
    return this;
  }

  /**
   * Grants permission to disable logging information, such as queries and connection attempts, for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html
   */
  public toDisableLogging() {
    this.add('redshift:DisableLogging');
    return this;
  }

  /**
   * Grants permission to disable the automatic copy of snapshots for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html
   */
  public toDisableSnapshotCopy() {
    this.add('redshift:DisableSnapshotCopy');
    return this;
  }

  /**
   * Grants permission to enable logging information, such as queries and connection attempts, for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html
   */
  public toEnableLogging() {
    this.add('redshift:EnableLogging');
    return this;
  }

  /**
   * Grants permission to enable the automatic copy of snapshots for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html
   */
  public toEnableSnapshotCopy() {
    this.add('redshift:EnableSnapshotCopy');
    return this;
  }

  /**
   * Grants permission to execute a query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toExecuteQuery() {
    this.add('redshift:ExecuteQuery');
    return this;
  }

  /**
   * Grants permission to fetch query results through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toFetchResults() {
    this.add('redshift:FetchResults');
    return this;
  }

  /**
   * Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDbName()
   * - .ifDbUser()
   * - .ifDurationSeconds()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   */
  public toGetClusterCredentials() {
    this.add('redshift:GetClusterCredentials');
    return this;
  }

  /**
   * Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html
   */
  public toGetReservedNodeExchangeOfferings() {
    this.add('redshift:GetReservedNodeExchangeOfferings');
    return this;
  }

  /**
   * Grants permission to join the specified Amazon Redshift group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   */
  public toJoinGroup() {
    this.add('redshift:JoinGroup');
    return this;
  }

  /**
   * Grants permission to list databases through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListDatabases() {
    this.add('redshift:ListDatabases');
    return this;
  }

  /**
   * Grants permission to list saved queries through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSavedQueries() {
    this.add('redshift:ListSavedQueries');
    return this;
  }

  /**
   * Grants permission to list schemas through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSchemas() {
    this.add('redshift:ListSchemas');
    return this;
  }

  /**
   * Grants permission to list tables through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListTables() {
    this.add('redshift:ListTables');
    return this;
  }

  /**
   * Grants permission to modify the settings of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html
   */
  public toModifyCluster() {
    this.add('redshift:ModifyCluster');
    return this;
  }

  /**
   * Grants permission to modify the database revision of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html
   */
  public toModifyClusterDbRevision() {
    this.add('redshift:ModifyClusterDbRevision');
    return this;
  }

  /**
   * Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html
   */
  public toModifyClusterIamRoles() {
    this.add('redshift:ModifyClusterIamRoles');
    return this;
  }

  /**
   * Grants permission to modify the maintenance settings of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html
   */
  public toModifyClusterMaintenance() {
    this.add('redshift:ModifyClusterMaintenance');
    return this;
  }

  /**
   * Grants permission to modify the parameters of a parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html
   */
  public toModifyClusterParameterGroup() {
    this.add('redshift:ModifyClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to modify the settings of a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html
   */
  public toModifyClusterSnapshot() {
    this.add('redshift:ModifyClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to modify a snapshot schedule for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html
   */
  public toModifyClusterSnapshotSchedule() {
    this.add('redshift:ModifyClusterSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to modify a cluster subnet group to include the specified list of VPC subnets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html
   */
  public toModifyClusterSubnetGroup() {
    this.add('redshift:ModifyClusterSubnetGroup');
    return this;
  }

  /**
   * Grants permission to modify an existing Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    this.add('redshift:ModifyEventSubscription');
    return this;
  }

  /**
   * Grants permission to modify an existing saved query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toModifySavedQuery() {
    this.add('redshift:ModifySavedQuery');
    return this;
  }

  /**
   * Grants permission to modify an existing Amazon Redshift scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html
   */
  public toModifyScheduledAction() {
    this.add('redshift:ModifyScheduledAction');
    return this;
  }

  /**
   * Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html
   */
  public toModifySnapshotCopyRetentionPeriod() {
    this.add('redshift:ModifySnapshotCopyRetentionPeriod');
    return this;
  }

  /**
   * Grants permission to modify a snapshot schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html
   */
  public toModifySnapshotSchedule() {
    this.add('redshift:ModifySnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to pause a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html
   */
  public toPauseCluster() {
    this.add('redshift:PauseCluster');
    return this;
  }

  /**
   * Grants permission to purchase a reserved node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html
   */
  public toPurchaseReservedNodeOffering() {
    this.add('redshift:PurchaseReservedNodeOffering');
    return this;
  }

  /**
   * Grants permission to reboot a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html
   */
  public toRebootCluster() {
    this.add('redshift:RebootCluster');
    return this;
  }

  /**
   * Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to "engine-default"
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html
   */
  public toResetClusterParameterGroup() {
    this.add('redshift:ResetClusterParameterGroup');
    return this;
  }

  /**
   * Grants permission to change the size of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html
   */
  public toResizeCluster() {
    this.add('redshift:ResizeCluster');
    return this;
  }

  /**
   * Grants permission to create a cluster from a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html
   */
  public toRestoreFromClusterSnapshot() {
    this.add('redshift:RestoreFromClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to create a table from a table in an Amazon Redshift cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html
   */
  public toRestoreTableFromClusterSnapshot() {
    this.add('redshift:RestoreTableFromClusterSnapshot');
    return this;
  }

  /**
   * Grants permission to resume a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html
   */
  public toResumeCluster() {
    this.add('redshift:ResumeCluster');
    return this;
  }

  /**
   * Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html
   */
  public toRevokeClusterSecurityGroupIngress() {
    this.add('redshift:RevokeClusterSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to revoke access from the specified AWS account to restore a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html
   */
  public toRevokeSnapshotAccess() {
    this.add('redshift:RevokeSnapshotAccess');
    return this;
  }

  /**
   * Grants permission to rotate an encryption key for a cluster
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html
   */
  public toRotateEncryptionKey() {
    this.add('redshift:RotateEncryptionKey');
    return this;
  }

  /**
   * Grants permission to view query results through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toViewQueriesFromConsole() {
    this.add('redshift:ViewQueriesFromConsole');
    return this;
  }

  /**
   * Grants permission to terminate running queries and loads through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toViewQueriesInConsole() {
    this.add('redshift:ViewQueriesInConsole');
    return this;
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:cluster:${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_GROUP.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbGroup - Identifier for the dbGroup.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbgroup(clusterName: string, dbGroup: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbgroup:${ClusterName}/${DbGroup}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbGroup}', dbGroup);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbname to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbName - Identifier for the dbName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbname(clusterName: string, dbName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbname:${ClusterName}/${DbName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbName}', dbName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbuser to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbUser - Identifier for the dbUser.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbuser(clusterName: string, dbUser: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbuser:${ClusterName}/${DbUser}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbUser}', dbUser);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type eventsubscription to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-events.html
   *
   * @param eventSubscriptionName - Identifier for the eventSubscriptionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventsubscription(eventSubscriptionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:eventsubscription:${EventSubscriptionName}';
    arn = arn.replace('${EventSubscriptionName}', eventSubscriptionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hsmclientcertificate to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMClientCertificateId - Identifier for the hSMClientCertificateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmclientcertificate(hSMClientCertificateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:hsmclientcertificate:${HSMClientCertificateId}';
    arn = arn.replace('${HSMClientCertificateId}', hSMClientCertificateId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hsmconfiguration to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMConfigurationId - Identifier for the hSMConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmconfiguration(hSMConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:hsmconfiguration:${HSMConfigurationId}';
    arn = arn.replace('${HSMConfigurationId}', hSMConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onParametergroup(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:parametergroup:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ec2SecurityGroupId - Identifier for the ec2SecurityGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroup(securityGroupName: string, owner: string, ec2SecurityGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroup:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ec2SecurityGroupId}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Owner}', owner);
    arn = arn.replace('${Ec2SecurityGroupId}', ec2SecurityGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroupingress-cidr to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param ipRange - Identifier for the ipRange.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressCidr(securityGroupName: string, ipRange: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/cidrip/${IpRange}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${IpRange}', ipRange);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroupingress-ec2securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ece2SecuritygroupId - Identifier for the ece2SecuritygroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressEc2securitygroup(securityGroupName: string, owner: string, ece2SecuritygroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ece2SecuritygroupId}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Owner}', owner);
    arn = arn.replace('${Ece2SecuritygroupId}', ece2SecuritygroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(clusterName: string, snapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshot:${ClusterName}/${SnapshotName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${SnapshotName}', snapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshotcopygrant to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant
   *
   * @param snapshotCopyGrantName - Identifier for the snapshotCopyGrantName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotcopygrant(snapshotCopyGrantName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshotcopygrant:${SnapshotCopyGrantName}';
    arn = arn.replace('${SnapshotCopyGrantName}', snapshotCopyGrantName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshotschedule to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotschedule(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshotschedule:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubnetgroup(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:subnetgroup:${SubnetGroupName}';
    arn = arn.replace('${SubnetGroupName}', subnetGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterParameterGroup()
   * - .toCreateClusterSecurityGroup()
   * - .toCreateClusterSnapshot()
   * - .toCreateClusterSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateHsmClientCertificate()
   * - .toCreateHsmConfiguration()
   * - .toCreateSnapshotCopyGrant()
   * - .toCreateSnapshotSchedule()
   * - .toCreateTags()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to resource types:
   * - cluster
   * - dbgroup
   * - dbname
   * - dbuser
   * - eventsubscription
   * - hsmclientcertificate
   * - hsmconfiguration
   * - parametergroup
   * - securitygroup
   * - securitygroupingress-cidr
   * - securitygroupingress-ec2securitygroup
   * - snapshot
   * - snapshotcopygrant
   * - snapshotschedule
   * - subnetgroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterParameterGroup()
   * - .toCreateClusterSecurityGroup()
   * - .toCreateClusterSnapshot()
   * - .toCreateClusterSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateHsmClientCertificate()
   * - .toCreateHsmConfiguration()
   * - .toCreateSnapshotCopyGrant()
   * - .toCreateSnapshotSchedule()
   * - .toCreateTags()
   * - .toDeleteTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the database name
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbName(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`redshift:DbName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the database user name
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCreateClusterUser()
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbUser(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`redshift:DbUser`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of seconds until a temporary credential set expires
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDurationSeconds(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`redshift:DurationSeconds`, value, operator || 'StringLike');
  }
}
