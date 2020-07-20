import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [lightsail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lightsail extends PolicyStatement {
  public servicePrefix = 'lightsail';
  protected actionList: Actions = {
    "AllocateStaticIp": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html",
      "description": "Creates a static IP address that can be attached to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "StaticIp": {
          "required": true
        }
      }
    },
    "AttachDisk": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html",
      "description": "Attaches a disk to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        },
        "Instance": {
          "required": true
        }
      }
    },
    "AttachInstancesToLoadBalancer": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html",
      "description": "Attaches one or more instances to a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "AttachLoadBalancerTlsCertificate": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html",
      "description": "Attaches a TLS certificate to a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "AttachStaticIp": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html",
      "description": "Attaches a static IP address to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "StaticIp": {
          "required": true
        }
      }
    },
    "CloseInstancePublicPorts": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html",
      "description": "Closes a public port of an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "CopySnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html",
      "description": "Copies a snapshot from one AWS Region to another in Amazon Lightsail.",
      "accessLevel": "Write"
    },
    "CreateCloudFormationStack": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html",
      "description": "Creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ExportSnapshotRecord": {
          "required": true
        }
      }
    },
    "CreateDisk": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDisk.html",
      "description": "Creates a disk.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDiskFromSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskFromSnapshot.html",
      "description": "Creates a disk from snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDiskSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskSnapshot.html",
      "description": "Creates a disk snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDomain": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html",
      "description": "Creates a domain resource for the specified domain name.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDomainEntry": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html",
      "description": "Creates one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).",
      "accessLevel": "Write",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "CreateInstanceSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstanceSnapshot.html",
      "description": "Creates an instance snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "InstanceSnapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInstances": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstances.html",
      "description": "Creates one or more instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInstancesFromSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstancesFromSnapshot.html",
      "description": "Creates one or more instances based on an instance snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "InstanceSnapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateKeyPair": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html",
      "description": "Creates a key pair used to authenticate and connect to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateLoadBalancer": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html",
      "description": "Creates a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateLoadBalancerTlsCertificate": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html",
      "description": "Creates a load balancer TLS certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "CreateRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabase.html",
      "description": "Creates a new relational database.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRelationalDatabaseFromSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseFromSnapshot.html",
      "description": "Creates a new relational database from a snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRelationalDatabaseSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseSnapshot.html",
      "description": "Creates a relational database snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabaseSnapshot": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDisk": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html",
      "description": "Deletes a disk.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "DeleteDiskSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html",
      "description": "Deletes a disk snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "DeleteDomain": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html",
      "description": "Deletes a domain resource and all of its DNS records.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "DeleteDomainEntry": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html",
      "description": "Deletes a DNS record entry for a domain resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "DeleteInstance": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html",
      "description": "Deletes an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "DeleteInstanceSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html",
      "description": "Deletes an instance snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "InstanceSnapshot": {
          "required": true
        }
      }
    },
    "DeleteKeyPair": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html",
      "description": "Deletes a key pair used to authenticate and connect to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      }
    },
    "DeleteKnownHostKeys": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html",
      "description": "Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancer": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html",
      "description": "Deletes a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancerTlsCertificate": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html",
      "description": "Deletes a load balancer TLS certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "DeleteRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html",
      "description": "Deletes a relational database.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "DeleteRelationalDatabaseSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html",
      "description": "Deletes relational database snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabaseSnapshot": {
          "required": true
        }
      }
    },
    "DetachDisk": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html",
      "description": "Detaches a disk from an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "DetachInstancesFromLoadBalancer": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html",
      "description": "Detaches one or more instances from a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "DetachStaticIp": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html",
      "description": "Detaches a static IP from an instance to which it is attached.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "StaticIp": {
          "required": true
        }
      }
    },
    "DownloadDefaultKeyPair": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html",
      "description": "Downloads the default key pair used to authenticate and connect to instances in a specific AWS Region.",
      "accessLevel": "Write",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      }
    },
    "ExportSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html",
      "description": "Exports an Amazon Lightsail snapshot to Amazon EC2.",
      "accessLevel": "Write"
    },
    "GetActiveNames": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html",
      "description": "Returns the names of all active (not deleted) resources.",
      "accessLevel": "Read"
    },
    "GetBlueprints": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html",
      "description": "Returns a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance.",
      "accessLevel": "List"
    },
    "GetBundles": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html",
      "description": "Returns a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance.",
      "accessLevel": "List"
    },
    "GetCloudFormationStackRecords": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html",
      "description": "Returns information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "CloudFormationStackRecord": {
          "required": true
        }
      }
    },
    "GetDisk": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html",
      "description": "Returns information about a disk.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "GetDiskSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html",
      "description": "Returns information about a disk snapshot.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "GetDiskSnapshots": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html",
      "description": "Returns information about all disk snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "Disk": {
          "required": true
        }
      }
    },
    "GetDisks": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html",
      "description": "Returns information about all disks.",
      "accessLevel": "List"
    },
    "GetDomain": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html",
      "description": "Returns DNS records for a domain resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "GetDomains": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html",
      "description": "Returns DNS records for all domain resources.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "GetExportSnapshotRecords": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html",
      "description": "Returns information about all records to export Amazon Lightsail snapshots to Amazon EC2.",
      "accessLevel": "List",
      "resourceTypes": {
        "ExportSnapshotRecord": {
          "required": true
        }
      }
    },
    "GetInstance": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html",
      "description": "Returns information about an instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetInstanceAccessDetails": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html",
      "description": "Returns temporary keys you can use to authenticate and connect to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetInstanceMetricData": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html",
      "description": "Returns the data points for the specified metric of an instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetInstancePortStates": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html",
      "description": "Returns the port states of an instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetInstanceSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html",
      "description": "Returns information about an instance snapshot.",
      "accessLevel": "Read",
      "resourceTypes": {
        "InstanceSnapshot": {
          "required": true
        }
      }
    },
    "GetInstanceSnapshots": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html",
      "description": "Returns information about all instance snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "InstanceSnapshot": {
          "required": true
        }
      }
    },
    "GetInstanceState": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html",
      "description": "Returns the state of an instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetInstances": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html",
      "description": "Returns information about all instances.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "GetKeyPair": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html",
      "description": "Returns information about a key pair.",
      "accessLevel": "List",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      }
    },
    "GetKeyPairs": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html",
      "description": "Returns information about all key pairs.",
      "accessLevel": "Read",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      }
    },
    "GetLoadBalancer": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html",
      "description": "Returns information about a load balancer.",
      "accessLevel": "Read",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "GetLoadBalancerMetricData": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html",
      "description": "Returns the data points for the specified metric of a load balancer.",
      "accessLevel": "Read",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "GetLoadBalancerTlsCertificates": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html",
      "description": "Returns information about a load balancer TLS certificate.",
      "accessLevel": "Read",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "GetLoadBalancers": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html",
      "description": "Returns information about load balancers.",
      "accessLevel": "Read",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "GetOperation": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html",
      "description": "Returns information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.",
      "accessLevel": "Read"
    },
    "GetOperations": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html",
      "description": "Returns information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.",
      "accessLevel": "Read"
    },
    "GetOperationsForResource": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html",
      "description": "Returns operations for a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Domain": {
          "required": false
        },
        "Instance": {
          "required": false
        },
        "InstanceSnapshot": {
          "required": false
        },
        "KeyPair": {
          "required": false
        },
        "StaticIp": {
          "required": false
        }
      }
    },
    "GetRegions": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html",
      "description": "Returns a list of all valid AWS Regions for Amazon Lightsail.",
      "accessLevel": "List"
    },
    "GetRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html",
      "description": "Returns information about a relational database.",
      "accessLevel": "List",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "GetRelationalDatabaseBlueprints": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html",
      "description": "Returns a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database.",
      "accessLevel": "List"
    },
    "GetRelationalDatabaseBundles": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html",
      "description": "Returns a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database.",
      "accessLevel": "List"
    },
    "GetRelationalDatabaseEvents": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html",
      "description": "Returns events for a relational database.",
      "accessLevel": "Read"
    },
    "GetRelationalDatabaseLogEvents": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html",
      "description": "Returns events for the specified log stream of a relational database.",
      "accessLevel": "Read"
    },
    "GetRelationalDatabaseLogStreams": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html",
      "description": "Returns the log streams available for a relational database.",
      "accessLevel": "Read"
    },
    "GetRelationalDatabaseMasterUserPassword": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html",
      "description": "Returns the master user password of a relational database.",
      "accessLevel": "Write"
    },
    "GetRelationalDatabaseMetricData": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html",
      "description": "Returns the data points for the specified metric of a relational database.",
      "accessLevel": "Read"
    },
    "GetRelationalDatabaseParameters": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html",
      "description": "Returns the parameters of a relational database.",
      "accessLevel": "List"
    },
    "GetRelationalDatabaseSnapshot": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html",
      "description": "Returns information about a relational database snapshot.",
      "accessLevel": "List",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "GetRelationalDatabaseSnapshots": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html",
      "description": "Returns information about all relational database snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "GetRelationalDatabases": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html",
      "description": "Return information about all relational databases.",
      "accessLevel": "Read",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "GetStaticIp": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html",
      "description": "Returns information about a static IP.",
      "accessLevel": "Read",
      "resourceTypes": {
        "StaticIp": {
          "required": true
        }
      }
    },
    "GetStaticIps": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html",
      "description": "Returns information about all static IPs.",
      "accessLevel": "Read",
      "resourceTypes": {
        "StaticIp": {
          "required": true
        }
      }
    },
    "ImportKeyPair": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html",
      "description": "Imports a public key from a key pair.",
      "accessLevel": "Write",
      "resourceTypes": {
        "KeyPair": {
          "required": true
        }
      }
    },
    "IsVpcPeered": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html",
      "description": "Returns a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered.",
      "accessLevel": "Read"
    },
    "OpenInstancePublicPorts": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html",
      "description": "Adds, or opens a public port of an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "PeerVpc": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html",
      "description": "Tries to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC.",
      "accessLevel": "Write"
    },
    "PutInstancePublicPorts": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html",
      "description": "Sets the specified open ports for an instance, and closes all ports for every protocol not included in the request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "RebootInstance": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html",
      "description": "Reboots an instance that is in a running state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "RebootRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html",
      "description": "Reboots a relational database that is in a running state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "ReleaseStaticIp": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html",
      "description": "Deletes a static IP.",
      "accessLevel": "Write",
      "resourceTypes": {
        "StaticIp": {
          "required": true
        }
      }
    },
    "StartInstance": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html",
      "description": "Starts an instance that is in a stopped state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "StartRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html",
      "description": "Starts a relational database that is in a stopped state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "StopInstance": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html",
      "description": "Stops an instance that is in a running state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "StopRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html",
      "description": "Stops a relational database that is in a running state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html",
      "description": "Tags a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": false
        },
        "DiskSnapshot": {
          "required": false
        },
        "Domain": {
          "required": false
        },
        "Instance": {
          "required": false
        },
        "InstanceSnapshot": {
          "required": false
        },
        "KeyPair": {
          "required": false
        },
        "LoadBalancer": {
          "required": false
        },
        "RelationalDatabase": {
          "required": false
        },
        "RelationalDatabaseSnapshot": {
          "required": false
        },
        "StaticIp": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UnpeerVpc": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html",
      "description": "Attempts to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC.",
      "accessLevel": "Write"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html",
      "description": "Untags a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Disk": {
          "required": false
        },
        "DiskSnapshot": {
          "required": false
        },
        "Domain": {
          "required": false
        },
        "Instance": {
          "required": false
        },
        "InstanceSnapshot": {
          "required": false
        },
        "KeyPair": {
          "required": false
        },
        "LoadBalancer": {
          "required": false
        },
        "RelationalDatabase": {
          "required": false
        },
        "RelationalDatabaseSnapshot": {
          "required": false
        },
        "StaticIp": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateDomainEntry": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html",
      "description": "Updates a domain recordset after it is created.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Domain": {
          "required": true
        }
      }
    },
    "UpdateLoadBalancerAttribute": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html",
      "description": "Updates a load balancer attribute, such as the health check path and session stickiness.",
      "accessLevel": "Write",
      "resourceTypes": {
        "LoadBalancer": {
          "required": true
        }
      }
    },
    "UpdateRelationalDatabase": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html",
      "description": "Updates a relational database.",
      "accessLevel": "Write",
      "resourceTypes": {
        "RelationalDatabase": {
          "required": true
        }
      }
    },
    "UpdateRelationalDatabaseParameters": {
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html",
      "description": "Updates the parameters of a relational database.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "Domain": {
      "name": "Domain",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Domain.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:Domain/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Instance": {
      "name": "Instance",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Instance.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:Instance/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "InstanceSnapshot": {
      "name": "InstanceSnapshot",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_InstanceSnapshot.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:InstanceSnapshot/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "KeyPair": {
      "name": "KeyPair",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_KeyPair.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:KeyPair/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StaticIp": {
      "name": "StaticIp",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StaticIp.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:StaticIp/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Disk": {
      "name": "Disk",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Disk.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:Disk/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DiskSnapshot": {
      "name": "DiskSnapshot",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DiskSnapshot.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:DiskSnapshot/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "LoadBalancer": {
      "name": "LoadBalancer",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancer.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancer/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "PeeredVpc": {
      "name": "PeeredVpc",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/PeeredVpc.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:PeeredVpc/${Id}",
      "conditionKeys": []
    },
    "LoadBalancerTlsCertificate": {
      "name": "LoadBalancerTlsCertificate",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/LoadBalancerTlsCertificate.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancerTlsCertificate/${Id}",
      "conditionKeys": []
    },
    "ExportSnapshotRecord": {
      "name": "ExportSnapshotRecord",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshotRecord.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:ExportSnapshotRecord/${Id}",
      "conditionKeys": []
    },
    "CloudFormationStackRecord": {
      "name": "CloudFormationStackRecord",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloudFormationStackRecord.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:CloudFormationStackRecord/${Id}",
      "conditionKeys": []
    },
    "RelationalDatabase": {
      "name": "RelationalDatabase",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabase.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabase/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "RelationalDatabaseSnapshot": {
      "name": "RelationalDatabaseSnapshot",
      "url": "https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabaseSnapshot.html",
      "arn": "arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabaseSnapshot/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [lightsail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a static IP address that can be attached to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html
   */
  public allocateStaticIp() {
    this.add('lightsail:AllocateStaticIp');
    return this;
  }

  /**
   * Attaches a disk to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html
   */
  public attachDisk() {
    this.add('lightsail:AttachDisk');
    return this;
  }

  /**
   * Attaches one or more instances to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html
   */
  public attachInstancesToLoadBalancer() {
    this.add('lightsail:AttachInstancesToLoadBalancer');
    return this;
  }

  /**
   * Attaches a TLS certificate to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html
   */
  public attachLoadBalancerTlsCertificate() {
    this.add('lightsail:AttachLoadBalancerTlsCertificate');
    return this;
  }

  /**
   * Attaches a static IP address to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html
   */
  public attachStaticIp() {
    this.add('lightsail:AttachStaticIp');
    return this;
  }

  /**
   * Closes a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html
   */
  public closeInstancePublicPorts() {
    this.add('lightsail:CloseInstancePublicPorts');
    return this;
  }

  /**
   * Copies a snapshot from one AWS Region to another in Amazon Lightsail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html
   */
  public copySnapshot() {
    this.add('lightsail:CopySnapshot');
    return this;
  }

  /**
   * Creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html
   */
  public createCloudFormationStack() {
    this.add('lightsail:CreateCloudFormationStack');
    return this;
  }

  /**
   * Creates a disk.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDisk.html
   */
  public createDisk() {
    this.add('lightsail:CreateDisk');
    return this;
  }

  /**
   * Creates a disk from snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskFromSnapshot.html
   */
  public createDiskFromSnapshot() {
    this.add('lightsail:CreateDiskFromSnapshot');
    return this;
  }

  /**
   * Creates a disk snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskSnapshot.html
   */
  public createDiskSnapshot() {
    this.add('lightsail:CreateDiskSnapshot');
    return this;
  }

  /**
   * Creates a domain resource for the specified domain name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html
   */
  public createDomain() {
    this.add('lightsail:CreateDomain');
    return this;
  }

  /**
   * Creates one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html
   */
  public createDomainEntry() {
    this.add('lightsail:CreateDomainEntry');
    return this;
  }

  /**
   * Creates an instance snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstanceSnapshot.html
   */
  public createInstanceSnapshot() {
    this.add('lightsail:CreateInstanceSnapshot');
    return this;
  }

  /**
   * Creates one or more instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstances.html
   */
  public createInstances() {
    this.add('lightsail:CreateInstances');
    return this;
  }

  /**
   * Creates one or more instances based on an instance snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstancesFromSnapshot.html
   */
  public createInstancesFromSnapshot() {
    this.add('lightsail:CreateInstancesFromSnapshot');
    return this;
  }

  /**
   * Creates a key pair used to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html
   */
  public createKeyPair() {
    this.add('lightsail:CreateKeyPair');
    return this;
  }

  /**
   * Creates a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html
   */
  public createLoadBalancer() {
    this.add('lightsail:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html
   */
  public createLoadBalancerTlsCertificate() {
    this.add('lightsail:CreateLoadBalancerTlsCertificate');
    return this;
  }

  /**
   * Creates a new relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabase.html
   */
  public createRelationalDatabase() {
    this.add('lightsail:CreateRelationalDatabase');
    return this;
  }

  /**
   * Creates a new relational database from a snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseFromSnapshot.html
   */
  public createRelationalDatabaseFromSnapshot() {
    this.add('lightsail:CreateRelationalDatabaseFromSnapshot');
    return this;
  }

  /**
   * Creates a relational database snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseSnapshot.html
   */
  public createRelationalDatabaseSnapshot() {
    this.add('lightsail:CreateRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Deletes a disk.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html
   */
  public deleteDisk() {
    this.add('lightsail:DeleteDisk');
    return this;
  }

  /**
   * Deletes a disk snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html
   */
  public deleteDiskSnapshot() {
    this.add('lightsail:DeleteDiskSnapshot');
    return this;
  }

  /**
   * Deletes a domain resource and all of its DNS records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html
   */
  public deleteDomain() {
    this.add('lightsail:DeleteDomain');
    return this;
  }

  /**
   * Deletes a DNS record entry for a domain resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html
   */
  public deleteDomainEntry() {
    this.add('lightsail:DeleteDomainEntry');
    return this;
  }

  /**
   * Deletes an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html
   */
  public deleteInstance() {
    this.add('lightsail:DeleteInstance');
    return this;
  }

  /**
   * Deletes an instance snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html
   */
  public deleteInstanceSnapshot() {
    this.add('lightsail:DeleteInstanceSnapshot');
    return this;
  }

  /**
   * Deletes a key pair used to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html
   */
  public deleteKeyPair() {
    this.add('lightsail:DeleteKeyPair');
    return this;
  }

  /**
   * Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html
   */
  public deleteKnownHostKeys() {
    this.add('lightsail:DeleteKnownHostKeys');
    return this;
  }

  /**
   * Deletes a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html
   */
  public deleteLoadBalancer() {
    this.add('lightsail:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public deleteLoadBalancerTlsCertificate() {
    this.add('lightsail:DeleteLoadBalancerTlsCertificate');
    return this;
  }

  /**
   * Deletes a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html
   */
  public deleteRelationalDatabase() {
    this.add('lightsail:DeleteRelationalDatabase');
    return this;
  }

  /**
   * Deletes relational database snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html
   */
  public deleteRelationalDatabaseSnapshot() {
    this.add('lightsail:DeleteRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Detaches a disk from an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html
   */
  public detachDisk() {
    this.add('lightsail:DetachDisk');
    return this;
  }

  /**
   * Detaches one or more instances from a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public detachInstancesFromLoadBalancer() {
    this.add('lightsail:DetachInstancesFromLoadBalancer');
    return this;
  }

  /**
   * Detaches a static IP from an instance to which it is attached.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html
   */
  public detachStaticIp() {
    this.add('lightsail:DetachStaticIp');
    return this;
  }

  /**
   * Downloads the default key pair used to authenticate and connect to instances in a specific AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html
   */
  public downloadDefaultKeyPair() {
    this.add('lightsail:DownloadDefaultKeyPair');
    return this;
  }

  /**
   * Exports an Amazon Lightsail snapshot to Amazon EC2.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html
   */
  public exportSnapshot() {
    this.add('lightsail:ExportSnapshot');
    return this;
  }

  /**
   * Returns the names of all active (not deleted) resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html
   */
  public getActiveNames() {
    this.add('lightsail:GetActiveNames');
    return this;
  }

  /**
   * Returns a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html
   */
  public getBlueprints() {
    this.add('lightsail:GetBlueprints');
    return this;
  }

  /**
   * Returns a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html
   */
  public getBundles() {
    this.add('lightsail:GetBundles');
    return this;
  }

  /**
   * Returns information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html
   */
  public getCloudFormationStackRecords() {
    this.add('lightsail:GetCloudFormationStackRecords');
    return this;
  }

  /**
   * Returns information about a disk.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html
   */
  public getDisk() {
    this.add('lightsail:GetDisk');
    return this;
  }

  /**
   * Returns information about a disk snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html
   */
  public getDiskSnapshot() {
    this.add('lightsail:GetDiskSnapshot');
    return this;
  }

  /**
   * Returns information about all disk snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html
   */
  public getDiskSnapshots() {
    this.add('lightsail:GetDiskSnapshots');
    return this;
  }

  /**
   * Returns information about all disks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html
   */
  public getDisks() {
    this.add('lightsail:GetDisks');
    return this;
  }

  /**
   * Returns DNS records for a domain resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html
   */
  public getDomain() {
    this.add('lightsail:GetDomain');
    return this;
  }

  /**
   * Returns DNS records for all domain resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html
   */
  public getDomains() {
    this.add('lightsail:GetDomains');
    return this;
  }

  /**
   * Returns information about all records to export Amazon Lightsail snapshots to Amazon EC2.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html
   */
  public getExportSnapshotRecords() {
    this.add('lightsail:GetExportSnapshotRecords');
    return this;
  }

  /**
   * Returns information about an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html
   */
  public getInstance() {
    this.add('lightsail:GetInstance');
    return this;
  }

  /**
   * Returns temporary keys you can use to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html
   */
  public getInstanceAccessDetails() {
    this.add('lightsail:GetInstanceAccessDetails');
    return this;
  }

  /**
   * Returns the data points for the specified metric of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html
   */
  public getInstanceMetricData() {
    this.add('lightsail:GetInstanceMetricData');
    return this;
  }

  /**
   * Returns the port states of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html
   */
  public getInstancePortStates() {
    this.add('lightsail:GetInstancePortStates');
    return this;
  }

  /**
   * Returns information about an instance snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html
   */
  public getInstanceSnapshot() {
    this.add('lightsail:GetInstanceSnapshot');
    return this;
  }

  /**
   * Returns information about all instance snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html
   */
  public getInstanceSnapshots() {
    this.add('lightsail:GetInstanceSnapshots');
    return this;
  }

  /**
   * Returns the state of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html
   */
  public getInstanceState() {
    this.add('lightsail:GetInstanceState');
    return this;
  }

  /**
   * Returns information about all instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html
   */
  public getInstances() {
    this.add('lightsail:GetInstances');
    return this;
  }

  /**
   * Returns information about a key pair.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html
   */
  public getKeyPair() {
    this.add('lightsail:GetKeyPair');
    return this;
  }

  /**
   * Returns information about all key pairs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html
   */
  public getKeyPairs() {
    this.add('lightsail:GetKeyPairs');
    return this;
  }

  /**
   * Returns information about a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html
   */
  public getLoadBalancer() {
    this.add('lightsail:GetLoadBalancer');
    return this;
  }

  /**
   * Returns the data points for the specified metric of a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html
   */
  public getLoadBalancerMetricData() {
    this.add('lightsail:GetLoadBalancerMetricData');
    return this;
  }

  /**
   * Returns information about a load balancer TLS certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public getLoadBalancerTlsCertificates() {
    this.add('lightsail:GetLoadBalancerTlsCertificates');
    return this;
  }

  /**
   * Returns information about load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html
   */
  public getLoadBalancers() {
    this.add('lightsail:GetLoadBalancers');
    return this;
  }

  /**
   * Returns information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html
   */
  public getOperation() {
    this.add('lightsail:GetOperation');
    return this;
  }

  /**
   * Returns information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html
   */
  public getOperations() {
    this.add('lightsail:GetOperations');
    return this;
  }

  /**
   * Returns operations for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html
   */
  public getOperationsForResource() {
    this.add('lightsail:GetOperationsForResource');
    return this;
  }

  /**
   * Returns a list of all valid AWS Regions for Amazon Lightsail.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html
   */
  public getRegions() {
    this.add('lightsail:GetRegions');
    return this;
  }

  /**
   * Returns information about a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html
   */
  public getRelationalDatabase() {
    this.add('lightsail:GetRelationalDatabase');
    return this;
  }

  /**
   * Returns a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html
   */
  public getRelationalDatabaseBlueprints() {
    this.add('lightsail:GetRelationalDatabaseBlueprints');
    return this;
  }

  /**
   * Returns a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html
   */
  public getRelationalDatabaseBundles() {
    this.add('lightsail:GetRelationalDatabaseBundles');
    return this;
  }

  /**
   * Returns events for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html
   */
  public getRelationalDatabaseEvents() {
    this.add('lightsail:GetRelationalDatabaseEvents');
    return this;
  }

  /**
   * Returns events for the specified log stream of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html
   */
  public getRelationalDatabaseLogEvents() {
    this.add('lightsail:GetRelationalDatabaseLogEvents');
    return this;
  }

  /**
   * Returns the log streams available for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html
   */
  public getRelationalDatabaseLogStreams() {
    this.add('lightsail:GetRelationalDatabaseLogStreams');
    return this;
  }

  /**
   * Returns the master user password of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html
   */
  public getRelationalDatabaseMasterUserPassword() {
    this.add('lightsail:GetRelationalDatabaseMasterUserPassword');
    return this;
  }

  /**
   * Returns the data points for the specified metric of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html
   */
  public getRelationalDatabaseMetricData() {
    this.add('lightsail:GetRelationalDatabaseMetricData');
    return this;
  }

  /**
   * Returns the parameters of a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html
   */
  public getRelationalDatabaseParameters() {
    this.add('lightsail:GetRelationalDatabaseParameters');
    return this;
  }

  /**
   * Returns information about a relational database snapshot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html
   */
  public getRelationalDatabaseSnapshot() {
    this.add('lightsail:GetRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Returns information about all relational database snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html
   */
  public getRelationalDatabaseSnapshots() {
    this.add('lightsail:GetRelationalDatabaseSnapshots');
    return this;
  }

  /**
   * Return information about all relational databases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html
   */
  public getRelationalDatabases() {
    this.add('lightsail:GetRelationalDatabases');
    return this;
  }

  /**
   * Returns information about a static IP.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html
   */
  public getStaticIp() {
    this.add('lightsail:GetStaticIp');
    return this;
  }

  /**
   * Returns information about all static IPs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html
   */
  public getStaticIps() {
    this.add('lightsail:GetStaticIps');
    return this;
  }

  /**
   * Imports a public key from a key pair.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html
   */
  public importKeyPair() {
    this.add('lightsail:ImportKeyPair');
    return this;
  }

  /**
   * Returns a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html
   */
  public isVpcPeered() {
    this.add('lightsail:IsVpcPeered');
    return this;
  }

  /**
   * Adds, or opens a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html
   */
  public openInstancePublicPorts() {
    this.add('lightsail:OpenInstancePublicPorts');
    return this;
  }

  /**
   * Tries to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html
   */
  public peerVpc() {
    this.add('lightsail:PeerVpc');
    return this;
  }

  /**
   * Sets the specified open ports for an instance, and closes all ports for every protocol not included in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html
   */
  public putInstancePublicPorts() {
    this.add('lightsail:PutInstancePublicPorts');
    return this;
  }

  /**
   * Reboots an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html
   */
  public rebootInstance() {
    this.add('lightsail:RebootInstance');
    return this;
  }

  /**
   * Reboots a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html
   */
  public rebootRelationalDatabase() {
    this.add('lightsail:RebootRelationalDatabase');
    return this;
  }

  /**
   * Deletes a static IP.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html
   */
  public releaseStaticIp() {
    this.add('lightsail:ReleaseStaticIp');
    return this;
  }

  /**
   * Starts an instance that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html
   */
  public startInstance() {
    this.add('lightsail:StartInstance');
    return this;
  }

  /**
   * Starts a relational database that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html
   */
  public startRelationalDatabase() {
    this.add('lightsail:StartRelationalDatabase');
    return this;
  }

  /**
   * Stops an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html
   */
  public stopInstance() {
    this.add('lightsail:StopInstance');
    return this;
  }

  /**
   * Stops a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html
   */
  public stopRelationalDatabase() {
    this.add('lightsail:StopRelationalDatabase');
    return this;
  }

  /**
   * Tags a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html
   */
  public tagResource() {
    this.add('lightsail:TagResource');
    return this;
  }

  /**
   * Attempts to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html
   */
  public unpeerVpc() {
    this.add('lightsail:UnpeerVpc');
    return this;
  }

  /**
   * Untags a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html
   */
  public untagResource() {
    this.add('lightsail:UntagResource');
    return this;
  }

  /**
   * Updates a domain recordset after it is created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html
   */
  public updateDomainEntry() {
    this.add('lightsail:UpdateDomainEntry');
    return this;
  }

  /**
   * Updates a load balancer attribute, such as the health check path and session stickiness.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public updateLoadBalancerAttribute() {
    this.add('lightsail:UpdateLoadBalancerAttribute');
    return this;
  }

  /**
   * Updates a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html
   */
  public updateRelationalDatabase() {
    this.add('lightsail:UpdateRelationalDatabase');
    return this;
  }

  /**
   * Updates the parameters of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html
   */
  public updateRelationalDatabaseParameters() {
    this.add('lightsail:UpdateRelationalDatabaseParameters');
    return this;
  }

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Domain.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDomain(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Domain/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Instance.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onInstance(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Instance/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type InstanceSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_InstanceSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onInstanceSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:InstanceSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type KeyPair to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_KeyPair.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onKeyPair(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:KeyPair/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type StaticIp to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StaticIp.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onStaticIp(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:StaticIp/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Disk to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Disk.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDisk(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Disk/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DiskSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DiskSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDiskSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:DiskSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type LoadBalancer to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancer.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onLoadBalancer(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancer/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type PeeredVpc to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/PeeredVpc.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPeeredVpc(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:PeeredVpc/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type LoadBalancerTlsCertificate to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/LoadBalancerTlsCertificate.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoadBalancerTlsCertificate(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancerTlsCertificate/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ExportSnapshotRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshotRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExportSnapshotRecord(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:ExportSnapshotRecord/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CloudFormationStackRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloudFormationStackRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCloudFormationStackRecord(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:CloudFormationStackRecord/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RelationalDatabase to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabase.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRelationalDatabase(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabase/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RelationalDatabaseSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabaseSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRelationalDatabaseSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabaseSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
