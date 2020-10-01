import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [glue](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Glue extends PolicyStatement {
  public servicePrefix = 'glue';
  protected actionList: Actions = {
    "BatchCreatePartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchCreatePartition",
      "description": "Grants permission to create one or more partitions",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "BatchDeleteConnection": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection",
      "description": "Grants permission to delete one or more connections",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "BatchDeletePartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition",
      "description": "Grants permission to delete one or more partitions",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "BatchDeleteTable": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable",
      "description": "Grants permission to delete one or more tables",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "BatchDeleteTableVersion": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion",
      "description": "Grants permission to delete one or more versions of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        },
        "tableversion": {
          "required": true
        }
      }
    },
    "BatchGetCrawlers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers",
      "description": "Grants permission to retrieve one or more crawlers",
      "accessLevel": "Read"
    },
    "BatchGetDevEndpoints": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints",
      "description": "Grants permission to retrieve one or more development endpoints",
      "accessLevel": "Read"
    },
    "BatchGetJobs": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs",
      "description": "Grants permission to retrieve one or more jobs",
      "accessLevel": "Read"
    },
    "BatchGetPartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition",
      "description": "Grants permission to retrieve one or more partitions",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "BatchGetTriggers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers",
      "description": "Grants permission to retrieve one or more triggers",
      "accessLevel": "Read"
    },
    "BatchGetWorkflows": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows",
      "description": "Grants permission to retrieve one or more workflows",
      "accessLevel": "Read"
    },
    "BatchStopJobRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun",
      "description": "Grants permission to stop one or more job runs for a job",
      "accessLevel": "Write"
    },
    "CancelMLTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun",
      "description": "Grants permission to stop a running ML Task Run",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "CreateClassifier": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier",
      "description": "Grants permission to create a classifier",
      "accessLevel": "Write"
    },
    "CreateConnection": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection",
      "description": "Grants permission to create a connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "CreateCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler",
      "description": "Grants permission to create a crawler",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDatabase": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase",
      "description": "Grants permission to create a database",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        }
      }
    },
    "CreateDevEndpoint": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint",
      "description": "Grants permission to create a development endpoint",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob",
      "description": "Grants permission to create a job",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMLTransform": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform",
      "description": "Grants permission to create an ML Transform",
      "accessLevel": "Write"
    },
    "CreatePartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition",
      "description": "Grants permission to create a partition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "CreateScript": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript",
      "description": "Grants permission to create a script",
      "accessLevel": "Write"
    },
    "CreateSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration",
      "description": "Grants permission to create a security configuration",
      "accessLevel": "Write"
    },
    "CreateTable": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable",
      "description": "Grants permission to create a table",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "CreateTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger",
      "description": "Grants permission to create a trigger",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUserDefinedFunction": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction",
      "description": "Grants permission to create a function definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "userdefinedfunction": {
          "required": true
        }
      }
    },
    "CreateWorkflow": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow",
      "description": "Grants permission to create a workflow",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteClassifier": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier",
      "description": "Grants permission to delete a classifier",
      "accessLevel": "Write"
    },
    "DeleteConnection": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection",
      "description": "Grants permission to delete a connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "DeleteCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler",
      "description": "Grants permission to delete a crawler",
      "accessLevel": "Write"
    },
    "DeleteDatabase": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase",
      "description": "Grants permission to delete a database",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        }
      }
    },
    "DeleteDevEndpoint": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint",
      "description": "Grants permission to delete a development endpoint",
      "accessLevel": "Write"
    },
    "DeleteJob": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob",
      "description": "Grants permission to delete a job",
      "accessLevel": "Write"
    },
    "DeleteMLTransform": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform",
      "description": "Grants permission to delete an ML Transform",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "DeletePartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition",
      "description": "Grants permission to delete a partition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "DeleteResourcePolicy": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy",
      "description": "Grants permission to delete a resource policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        }
      }
    },
    "DeleteSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration",
      "description": "Grants permission to delete a security configuration",
      "accessLevel": "Write"
    },
    "DeleteTable": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable",
      "description": "Grants permission to delete a table",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "DeleteTableVersion": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion",
      "description": "Grants permission to delete a version of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        },
        "tableversion": {
          "required": true
        }
      }
    },
    "DeleteTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger",
      "description": "Grants permission to delete a trigger",
      "accessLevel": "Write"
    },
    "DeleteUserDefinedFunction": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction",
      "description": "Grants permission to delete a function definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "userdefinedfunction": {
          "required": true
        }
      }
    },
    "DeleteWorkflow": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow",
      "description": "Grants permission to delete a workflow",
      "accessLevel": "Write"
    },
    "GetCatalogImportStatus": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus",
      "description": "Grants permission to retrieve the catalog import status",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        }
      }
    },
    "GetClassifier": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier",
      "description": "Grants permission to retrieve a classifier",
      "accessLevel": "Read"
    },
    "GetClassifiers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers",
      "description": "Grants permission to list all classifiers",
      "accessLevel": "Read"
    },
    "GetConnection": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection",
      "description": "Grants permission to retrieve a connection",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "GetConnections": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections",
      "description": "Grants permission to retrieve a list of connections",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "GetCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler",
      "description": "Grants permission to retrieve a crawler",
      "accessLevel": "Read"
    },
    "GetCrawlerMetrics": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics",
      "description": "Grants permission to retrieve metrics about crawlers",
      "accessLevel": "Read"
    },
    "GetCrawlers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers",
      "description": "Grants permission to retrieve all crawlers",
      "accessLevel": "Read"
    },
    "GetDataCatalogEncryptionSettings": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings",
      "description": "Grants permission to retrieve catalog encryption settings",
      "accessLevel": "Read"
    },
    "GetDatabase": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase",
      "description": "Grants permission to retrieve a database",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        }
      }
    },
    "GetDatabases": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases",
      "description": "Grants permission to retrieve all databases",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        }
      }
    },
    "GetDataflowGraph": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph",
      "description": "Grants permission to transform a script into a directed acyclic graph (DAG)",
      "accessLevel": "Read"
    },
    "GetDevEndpoint": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint",
      "description": "Grants permission to retrieve a development endpoint",
      "accessLevel": "Read"
    },
    "GetDevEndpoints": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints",
      "description": "Grants permission to retrieve all development endpoints",
      "accessLevel": "Read"
    },
    "GetJob": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob",
      "description": "Grants permission to retrieve a job",
      "accessLevel": "Read"
    },
    "GetJobBookmark": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark",
      "description": "Grants permission to retrieve a job bookmark",
      "accessLevel": "Read"
    },
    "GetJobRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun",
      "description": "Grants permission to retrieve a job run",
      "accessLevel": "Read"
    },
    "GetJobRuns": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns",
      "description": "Grants permission to retrieve all job runs of a job",
      "accessLevel": "Read"
    },
    "GetJobs": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs",
      "description": "Grants permission to retrieve all current jobs",
      "accessLevel": "Read"
    },
    "GetMLTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun",
      "description": "Grants permission to retrieve an ML Task Run",
      "accessLevel": "Read",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "GetMLTaskRuns": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns",
      "description": "Grants permission to retrieve all ML Task Runs",
      "accessLevel": "List",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "GetMLTransform": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform",
      "description": "Grants permission to retrieve an ML Transform",
      "accessLevel": "Read",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "GetMLTransforms": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms",
      "description": "Grants permission to retrieve all ML Transforms",
      "accessLevel": "List"
    },
    "GetMapping": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping",
      "description": "Grants permission to create a mapping",
      "accessLevel": "Write"
    },
    "GetPartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition",
      "description": "Grants permission to retrieve a partition",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "GetPartitions": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions",
      "description": "Grants permission to retrieve the partitions of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "GetPlan": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan",
      "description": "Grants permission to retrieve a mapping for a script",
      "accessLevel": "Read"
    },
    "GetResourcePolicy": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy",
      "description": "Grants permission to retrieve a resource policy",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        }
      }
    },
    "GetSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration",
      "description": "Grants permission to retrieve a security configuration",
      "accessLevel": "Read"
    },
    "GetSecurityConfigurations": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations",
      "description": "Grants permission to retrieve one or more security configurations",
      "accessLevel": "Read"
    },
    "GetTable": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable",
      "description": "Grants permission to retrieve a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "GetTableVersion": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion",
      "description": "Grants permission to retrieve a version of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        },
        "tableversion": {
          "required": true
        }
      }
    },
    "GetTableVersions": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions",
      "description": "Grants permission to retrieve a list of versions of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        },
        "tableversion": {
          "required": true
        }
      }
    },
    "GetTables": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables",
      "description": "Grants permission to retrieve the tables in a database",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "GetTags": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource",
      "description": "Grants permission to retrieve all tags associated with a resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "crawler": {
          "required": false
        },
        "devendpoint": {
          "required": false
        },
        "job": {
          "required": false
        },
        "trigger": {
          "required": false
        },
        "workflow": {
          "required": false
        }
      }
    },
    "GetTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger",
      "description": "Grants permission to retrieve a trigger",
      "accessLevel": "Read"
    },
    "GetTriggers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers",
      "description": "Grants permission to retrieve the triggers associated with a job",
      "accessLevel": "Read"
    },
    "GetUserDefinedFunction": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction",
      "description": "Grants permission to retrieve a function definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "userdefinedfunction": {
          "required": true
        }
      }
    },
    "GetUserDefinedFunctions": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions",
      "description": "Grants permission to retrieve multiple function definitions",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "userdefinedfunction": {
          "required": true
        }
      }
    },
    "GetWorkflow": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow",
      "description": "Grants permission to retrieve a workflow",
      "accessLevel": "Read"
    },
    "GetWorkflowRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun",
      "description": "Grants permission to retrieve a workflow run",
      "accessLevel": "Read"
    },
    "GetWorkflowRunProperties": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties",
      "description": "Grants permission to retrieve workflow run properties",
      "accessLevel": "Read"
    },
    "GetWorkflowRuns": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns",
      "description": "Grants permission to retrieve all runs of a workflow",
      "accessLevel": "Read"
    },
    "ImportCatalogToGlue": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue",
      "description": "Grants permission to import an Athena data catalog into AWS Glue",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        }
      }
    },
    "ListCrawlers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers",
      "description": "Grants permission to retrieve all crawlers",
      "accessLevel": "List"
    },
    "ListDevEndpoints": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints",
      "description": "Grants permission to retrieve all development endpoints",
      "accessLevel": "List"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs",
      "description": "Grants permission to retrieve all current jobs",
      "accessLevel": "List"
    },
    "ListMLTransforms": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms",
      "description": "Grants permission to retrieve all ML Transforms",
      "accessLevel": "List"
    },
    "ListTriggers": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers",
      "description": "Grants permission to retrieve all triggers",
      "accessLevel": "List"
    },
    "ListWorkflows": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows",
      "description": "Grants permission to retrieve all workflows",
      "accessLevel": "List"
    },
    "PutDataCatalogEncryptionSettings": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings",
      "description": "Grants permission to update catalog encryption settings",
      "accessLevel": "Write"
    },
    "PutResourcePolicy": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy",
      "description": "Grants permission to update a resource policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        }
      }
    },
    "PutWorkflowRunProperties": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties",
      "description": "Grants permission to update workflow run properties",
      "accessLevel": "Write"
    },
    "ResetJobBookmark": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark",
      "description": "Grants permission to reset a job bookmark",
      "accessLevel": "Write"
    },
    "SearchTables": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables",
      "description": "Grants permission to retrieve the tables in the catalog",
      "accessLevel": "Read",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "StartCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler",
      "description": "Grants permission to start a crawler",
      "accessLevel": "Write"
    },
    "StartCrawlerSchedule": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule",
      "description": "Grants permission to change the schedule state of a crawler to SCHEDULED",
      "accessLevel": "Write"
    },
    "StartExportLabelsTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun",
      "description": "Grants permission to start an Export Labels ML Task Run",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "StartImportLabelsTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun",
      "description": "Grants permission to start an Import Labels ML Task Run",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "StartJobRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun",
      "description": "Grants permission to start running a job",
      "accessLevel": "Write"
    },
    "StartMLEvaluationTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun",
      "description": "Grants permission to start an Evaluation ML Task Run",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "StartMLLabelingSetGenerationTaskRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun",
      "description": "Grants permission to start a Labeling Set Generation ML Task Run",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "StartTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger",
      "description": "Grants permission to start a trigger",
      "accessLevel": "Write"
    },
    "StartWorkflowRun": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun",
      "description": "Grants permission to start running a workflow",
      "accessLevel": "Write"
    },
    "StopCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler",
      "description": "Grants permission to stop a running crawler",
      "accessLevel": "Write"
    },
    "StopCrawlerSchedule": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule",
      "description": "Grants permission to set the schedule state of a crawler to NOT_SCHEDULED",
      "accessLevel": "Write"
    },
    "StopTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger",
      "description": "Grants permission to stop a trigger",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource",
      "description": "Grants permission to add tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "crawler": {
          "required": false
        },
        "devendpoint": {
          "required": false
        },
        "job": {
          "required": false
        },
        "trigger": {
          "required": false
        },
        "workflow": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource",
      "description": "Grants permission to remove tags associated with a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "crawler": {
          "required": false
        },
        "devendpoint": {
          "required": false
        },
        "job": {
          "required": false
        },
        "trigger": {
          "required": false
        },
        "workflow": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateClassifier": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier",
      "description": "Grants permission to update a classifier",
      "accessLevel": "Write"
    },
    "UpdateConnection": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection",
      "description": "Grants permission to update a connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "connection": {
          "required": true
        }
      }
    },
    "UpdateCrawler": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler",
      "description": "Grants permission to update a crawler",
      "accessLevel": "Write"
    },
    "UpdateCrawlerSchedule": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule",
      "description": "Grants permission to update the schedule of a crawler",
      "accessLevel": "Write"
    },
    "UpdateDatabase": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase",
      "description": "Grants permission to update a database",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        }
      }
    },
    "UpdateDevEndpoint": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint",
      "description": "Grants permission to update a development endpoint",
      "accessLevel": "Write"
    },
    "UpdateJob": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob",
      "description": "Grants permission to update a job",
      "accessLevel": "Write"
    },
    "UpdateMLTransform": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform",
      "description": "Grants permission to update an ML Transform",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    },
    "UpdatePartition": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition",
      "description": "Grants permission to update a partition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "UpdateTable": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable",
      "description": "Grants permission to update a table",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "UpdateTrigger": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger",
      "description": "Grants permission to update a trigger",
      "accessLevel": "Write"
    },
    "UpdateUserDefinedFunction": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction",
      "description": "Grants permission to update a function definition",
      "accessLevel": "Write",
      "resourceTypes": {
        "catalog": {
          "required": true
        },
        "database": {
          "required": true
        },
        "userdefinedfunction": {
          "required": true
        }
      }
    },
    "UpdateWorkflow": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow",
      "description": "Grants permission to update a workflow",
      "accessLevel": "Write"
    },
    "UseMLTransforms": {
      "url": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html",
      "description": "Grants permission to use an ML Transform from within a Glue ETL Script",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlTransform": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "catalog": {
      "name": "catalog",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:catalog",
      "conditionKeys": []
    },
    "database": {
      "name": "database",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:database/${DatabaseName}",
      "conditionKeys": []
    },
    "table": {
      "name": "table",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:table/${DatabaseName}/${TableName}",
      "conditionKeys": []
    },
    "tableversion": {
      "name": "tableversion",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:tableVersion/${DatabaseName}/${TableName}/${TableVersionName}",
      "conditionKeys": []
    },
    "connection": {
      "name": "connection",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:connection/${ConnectionName}",
      "conditionKeys": []
    },
    "userdefinedfunction": {
      "name": "userdefinedfunction",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:userDefinedFunction/${DatabaseName}/${UserDefinedFunctionName}",
      "conditionKeys": []
    },
    "devendpoint": {
      "name": "devendpoint",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:devendpoint/${DevEndpointName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "job": {
      "name": "job",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:job/${JobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "trigger": {
      "name": "trigger",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:trigger/${TriggerName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "crawler": {
      "name": "crawler",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:crawler/${CrawlerName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "workflow": {
      "name": "workflow",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:workflow/${WorkflowName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "mlTransform": {
      "name": "mlTransform",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html",
      "arn": "arn:${Partition}:glue:${Region}:${Account}:mlTransform/${TransformId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [glue](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchCreatePartition
   */
  public toBatchCreatePartition() {
    this.to('glue:BatchCreatePartition');
    return this;
  }

  /**
   * Grants permission to delete one or more connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection
   */
  public toBatchDeleteConnection() {
    this.to('glue:BatchDeleteConnection');
    return this;
  }

  /**
   * Grants permission to delete one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition
   */
  public toBatchDeletePartition() {
    this.to('glue:BatchDeletePartition');
    return this;
  }

  /**
   * Grants permission to delete one or more tables
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable
   */
  public toBatchDeleteTable() {
    this.to('glue:BatchDeleteTable');
    return this;
  }

  /**
   * Grants permission to delete one or more versions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toBatchDeleteTableVersion() {
    this.to('glue:BatchDeleteTableVersion');
    return this;
  }

  /**
   * Grants permission to retrieve one or more crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers
   */
  public toBatchGetCrawlers() {
    this.to('glue:BatchGetCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve one or more development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints
   */
  public toBatchGetDevEndpoints() {
    this.to('glue:BatchGetDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve one or more jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs
   */
  public toBatchGetJobs() {
    this.to('glue:BatchGetJobs');
    return this;
  }

  /**
   * Grants permission to retrieve one or more partitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition
   */
  public toBatchGetPartition() {
    this.to('glue:BatchGetPartition');
    return this;
  }

  /**
   * Grants permission to retrieve one or more triggers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers
   */
  public toBatchGetTriggers() {
    this.to('glue:BatchGetTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve one or more workflows
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows
   */
  public toBatchGetWorkflows() {
    this.to('glue:BatchGetWorkflows');
    return this;
  }

  /**
   * Grants permission to stop one or more job runs for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun
   */
  public toBatchStopJobRun() {
    this.to('glue:BatchStopJobRun');
    return this;
  }

  /**
   * Grants permission to stop a running ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun
   */
  public toCancelMLTaskRun() {
    this.to('glue:CancelMLTaskRun');
    return this;
  }

  /**
   * Grants permission to create a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier
   */
  public toCreateClassifier() {
    this.to('glue:CreateClassifier');
    return this;
  }

  /**
   * Grants permission to create a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection
   */
  public toCreateConnection() {
    this.to('glue:CreateConnection');
    return this;
  }

  /**
   * Grants permission to create a crawler
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler
   */
  public toCreateCrawler() {
    this.to('glue:CreateCrawler');
    return this;
  }

  /**
   * Grants permission to create a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase
   */
  public toCreateDatabase() {
    this.to('glue:CreateDatabase');
    return this;
  }

  /**
   * Grants permission to create a development endpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint
   */
  public toCreateDevEndpoint() {
    this.to('glue:CreateDevEndpoint');
    return this;
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob
   */
  public toCreateJob() {
    this.to('glue:CreateJob');
    return this;
  }

  /**
   * Grants permission to create an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform
   */
  public toCreateMLTransform() {
    this.to('glue:CreateMLTransform');
    return this;
  }

  /**
   * Grants permission to create a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition
   */
  public toCreatePartition() {
    this.to('glue:CreatePartition');
    return this;
  }

  /**
   * Grants permission to create a script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript
   */
  public toCreateScript() {
    this.to('glue:CreateScript');
    return this;
  }

  /**
   * Grants permission to create a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration
   */
  public toCreateSecurityConfiguration() {
    this.to('glue:CreateSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to create a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable
   */
  public toCreateTable() {
    this.to('glue:CreateTable');
    return this;
  }

  /**
   * Grants permission to create a trigger
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger
   */
  public toCreateTrigger() {
    this.to('glue:CreateTrigger');
    return this;
  }

  /**
   * Grants permission to create a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction
   */
  public toCreateUserDefinedFunction() {
    this.to('glue:CreateUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to create a workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow
   */
  public toCreateWorkflow() {
    this.to('glue:CreateWorkflow');
    return this;
  }

  /**
   * Grants permission to delete a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier
   */
  public toDeleteClassifier() {
    this.to('glue:DeleteClassifier');
    return this;
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection
   */
  public toDeleteConnection() {
    this.to('glue:DeleteConnection');
    return this;
  }

  /**
   * Grants permission to delete a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler
   */
  public toDeleteCrawler() {
    this.to('glue:DeleteCrawler');
    return this;
  }

  /**
   * Grants permission to delete a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase
   */
  public toDeleteDatabase() {
    this.to('glue:DeleteDatabase');
    return this;
  }

  /**
   * Grants permission to delete a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint
   */
  public toDeleteDevEndpoint() {
    this.to('glue:DeleteDevEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob
   */
  public toDeleteJob() {
    this.to('glue:DeleteJob');
    return this;
  }

  /**
   * Grants permission to delete an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform
   */
  public toDeleteMLTransform() {
    this.to('glue:DeleteMLTransform');
    return this;
  }

  /**
   * Grants permission to delete a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition
   */
  public toDeletePartition() {
    this.to('glue:DeletePartition');
    return this;
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy
   */
  public toDeleteResourcePolicy() {
    this.to('glue:DeleteResourcePolicy');
    return this;
  }

  /**
   * Grants permission to delete a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration
   */
  public toDeleteSecurityConfiguration() {
    this.to('glue:DeleteSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable
   */
  public toDeleteTable() {
    this.to('glue:DeleteTable');
    return this;
  }

  /**
   * Grants permission to delete a version of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toDeleteTableVersion() {
    this.to('glue:DeleteTableVersion');
    return this;
  }

  /**
   * Grants permission to delete a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger
   */
  public toDeleteTrigger() {
    this.to('glue:DeleteTrigger');
    return this;
  }

  /**
   * Grants permission to delete a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction
   */
  public toDeleteUserDefinedFunction() {
    this.to('glue:DeleteUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow
   */
  public toDeleteWorkflow() {
    this.to('glue:DeleteWorkflow');
    return this;
  }

  /**
   * Grants permission to retrieve the catalog import status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus
   */
  public toGetCatalogImportStatus() {
    this.to('glue:GetCatalogImportStatus');
    return this;
  }

  /**
   * Grants permission to retrieve a classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier
   */
  public toGetClassifier() {
    this.to('glue:GetClassifier');
    return this;
  }

  /**
   * Grants permission to list all classifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers
   */
  public toGetClassifiers() {
    this.to('glue:GetClassifiers');
    return this;
  }

  /**
   * Grants permission to retrieve a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection
   */
  public toGetConnection() {
    this.to('glue:GetConnection');
    return this;
  }

  /**
   * Grants permission to retrieve a list of connections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections
   */
  public toGetConnections() {
    this.to('glue:GetConnections');
    return this;
  }

  /**
   * Grants permission to retrieve a crawler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler
   */
  public toGetCrawler() {
    this.to('glue:GetCrawler');
    return this;
  }

  /**
   * Grants permission to retrieve metrics about crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics
   */
  public toGetCrawlerMetrics() {
    this.to('glue:GetCrawlerMetrics');
    return this;
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers
   */
  public toGetCrawlers() {
    this.to('glue:GetCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve catalog encryption settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings
   */
  public toGetDataCatalogEncryptionSettings() {
    this.to('glue:GetDataCatalogEncryptionSettings');
    return this;
  }

  /**
   * Grants permission to retrieve a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase
   */
  public toGetDatabase() {
    this.to('glue:GetDatabase');
    return this;
  }

  /**
   * Grants permission to retrieve all databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases
   */
  public toGetDatabases() {
    this.to('glue:GetDatabases');
    return this;
  }

  /**
   * Grants permission to transform a script into a directed acyclic graph (DAG)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph
   */
  public toGetDataflowGraph() {
    this.to('glue:GetDataflowGraph');
    return this;
  }

  /**
   * Grants permission to retrieve a development endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint
   */
  public toGetDevEndpoint() {
    this.to('glue:GetDevEndpoint');
    return this;
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints
   */
  public toGetDevEndpoints() {
    this.to('glue:GetDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob
   */
  public toGetJob() {
    this.to('glue:GetJob');
    return this;
  }

  /**
   * Grants permission to retrieve a job bookmark
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark
   */
  public toGetJobBookmark() {
    this.to('glue:GetJobBookmark');
    return this;
  }

  /**
   * Grants permission to retrieve a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun
   */
  public toGetJobRun() {
    this.to('glue:GetJobRun');
    return this;
  }

  /**
   * Grants permission to retrieve all job runs of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns
   */
  public toGetJobRuns() {
    this.to('glue:GetJobRuns');
    return this;
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs
   */
  public toGetJobs() {
    this.to('glue:GetJobs');
    return this;
  }

  /**
   * Grants permission to retrieve an ML Task Run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun
   */
  public toGetMLTaskRun() {
    this.to('glue:GetMLTaskRun');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Task Runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns
   */
  public toGetMLTaskRuns() {
    this.to('glue:GetMLTaskRuns');
    return this;
  }

  /**
   * Grants permission to retrieve an ML Transform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform
   */
  public toGetMLTransform() {
    this.to('glue:GetMLTransform');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms
   */
  public toGetMLTransforms() {
    this.to('glue:GetMLTransforms');
    return this;
  }

  /**
   * Grants permission to create a mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping
   */
  public toGetMapping() {
    this.to('glue:GetMapping');
    return this;
  }

  /**
   * Grants permission to retrieve a partition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition
   */
  public toGetPartition() {
    this.to('glue:GetPartition');
    return this;
  }

  /**
   * Grants permission to retrieve the partitions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions
   */
  public toGetPartitions() {
    this.to('glue:GetPartitions');
    return this;
  }

  /**
   * Grants permission to retrieve a mapping for a script
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan
   */
  public toGetPlan() {
    this.to('glue:GetPlan');
    return this;
  }

  /**
   * Grants permission to retrieve a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy
   */
  public toGetResourcePolicy() {
    this.to('glue:GetResourcePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration
   */
  public toGetSecurityConfiguration() {
    this.to('glue:GetSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve one or more security configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations
   */
  public toGetSecurityConfigurations() {
    this.to('glue:GetSecurityConfigurations');
    return this;
  }

  /**
   * Grants permission to retrieve a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable
   */
  public toGetTable() {
    this.to('glue:GetTable');
    return this;
  }

  /**
   * Grants permission to retrieve a version of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion
   */
  public toGetTableVersion() {
    this.to('glue:GetTableVersion');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions
   */
  public toGetTableVersions() {
    this.to('glue:GetTableVersions');
    return this;
  }

  /**
   * Grants permission to retrieve the tables in a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables
   */
  public toGetTables() {
    this.to('glue:GetTables');
    return this;
  }

  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public toGetTags() {
    this.to('glue:GetTags');
    return this;
  }

  /**
   * Grants permission to retrieve a trigger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger
   */
  public toGetTrigger() {
    this.to('glue:GetTrigger');
    return this;
  }

  /**
   * Grants permission to retrieve the triggers associated with a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers
   */
  public toGetTriggers() {
    this.to('glue:GetTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve a function definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction
   */
  public toGetUserDefinedFunction() {
    this.to('glue:GetUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to retrieve multiple function definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions
   */
  public toGetUserDefinedFunctions() {
    this.to('glue:GetUserDefinedFunctions');
    return this;
  }

  /**
   * Grants permission to retrieve a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow
   */
  public toGetWorkflow() {
    this.to('glue:GetWorkflow');
    return this;
  }

  /**
   * Grants permission to retrieve a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun
   */
  public toGetWorkflowRun() {
    this.to('glue:GetWorkflowRun');
    return this;
  }

  /**
   * Grants permission to retrieve workflow run properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties
   */
  public toGetWorkflowRunProperties() {
    this.to('glue:GetWorkflowRunProperties');
    return this;
  }

  /**
   * Grants permission to retrieve all runs of a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns
   */
  public toGetWorkflowRuns() {
    this.to('glue:GetWorkflowRuns');
    return this;
  }

  /**
   * Grants permission to import an Athena data catalog into AWS Glue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue
   */
  public toImportCatalogToGlue() {
    this.to('glue:ImportCatalogToGlue');
    return this;
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers
   */
  public toListCrawlers() {
    this.to('glue:ListCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints
   */
  public toListDevEndpoints() {
    this.to('glue:ListDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs
   */
  public toListJobs() {
    this.to('glue:ListJobs');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms
   */
  public toListMLTransforms() {
    this.to('glue:ListMLTransforms');
    return this;
  }

  /**
   * Grants permission to retrieve all triggers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers
   */
  public toListTriggers() {
    this.to('glue:ListTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve all workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows
   */
  public toListWorkflows() {
    this.to('glue:ListWorkflows');
    return this;
  }

  /**
   * Grants permission to update catalog encryption settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings
   */
  public toPutDataCatalogEncryptionSettings() {
    this.to('glue:PutDataCatalogEncryptionSettings');
    return this;
  }

  /**
   * Grants permission to update a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy
   */
  public toPutResourcePolicy() {
    this.to('glue:PutResourcePolicy');
    return this;
  }

  /**
   * Grants permission to update workflow run properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties
   */
  public toPutWorkflowRunProperties() {
    this.to('glue:PutWorkflowRunProperties');
    return this;
  }

  /**
   * Grants permission to reset a job bookmark
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark
   */
  public toResetJobBookmark() {
    this.to('glue:ResetJobBookmark');
    return this;
  }

  /**
   * Grants permission to retrieve the tables in the catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables
   */
  public toSearchTables() {
    this.to('glue:SearchTables');
    return this;
  }

  /**
   * Grants permission to start a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler
   */
  public toStartCrawler() {
    this.to('glue:StartCrawler');
    return this;
  }

  /**
   * Grants permission to change the schedule state of a crawler to SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule
   */
  public toStartCrawlerSchedule() {
    this.to('glue:StartCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to start an Export Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun
   */
  public toStartExportLabelsTaskRun() {
    this.to('glue:StartExportLabelsTaskRun');
    return this;
  }

  /**
   * Grants permission to start an Import Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun
   */
  public toStartImportLabelsTaskRun() {
    this.to('glue:StartImportLabelsTaskRun');
    return this;
  }

  /**
   * Grants permission to start running a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun
   */
  public toStartJobRun() {
    this.to('glue:StartJobRun');
    return this;
  }

  /**
   * Grants permission to start an Evaluation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun
   */
  public toStartMLEvaluationTaskRun() {
    this.to('glue:StartMLEvaluationTaskRun');
    return this;
  }

  /**
   * Grants permission to start a Labeling Set Generation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun
   */
  public toStartMLLabelingSetGenerationTaskRun() {
    this.to('glue:StartMLLabelingSetGenerationTaskRun');
    return this;
  }

  /**
   * Grants permission to start a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger
   */
  public toStartTrigger() {
    this.to('glue:StartTrigger');
    return this;
  }

  /**
   * Grants permission to start running a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun
   */
  public toStartWorkflowRun() {
    this.to('glue:StartWorkflowRun');
    return this;
  }

  /**
   * Grants permission to stop a running crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler
   */
  public toStopCrawler() {
    this.to('glue:StopCrawler');
    return this;
  }

  /**
   * Grants permission to set the schedule state of a crawler to NOT_SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule
   */
  public toStopCrawlerSchedule() {
    this.to('glue:StopCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to stop a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger
   */
  public toStopTrigger() {
    this.to('glue:StopTrigger');
    return this;
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource
   */
  public toTagResource() {
    this.to('glue:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public toUntagResource() {
    this.to('glue:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier
   */
  public toUpdateClassifier() {
    this.to('glue:UpdateClassifier');
    return this;
  }

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection
   */
  public toUpdateConnection() {
    this.to('glue:UpdateConnection');
    return this;
  }

  /**
   * Grants permission to update a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler
   */
  public toUpdateCrawler() {
    this.to('glue:UpdateCrawler');
    return this;
  }

  /**
   * Grants permission to update the schedule of a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule
   */
  public toUpdateCrawlerSchedule() {
    this.to('glue:UpdateCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to update a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase
   */
  public toUpdateDatabase() {
    this.to('glue:UpdateDatabase');
    return this;
  }

  /**
   * Grants permission to update a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint
   */
  public toUpdateDevEndpoint() {
    this.to('glue:UpdateDevEndpoint');
    return this;
  }

  /**
   * Grants permission to update a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob
   */
  public toUpdateJob() {
    this.to('glue:UpdateJob');
    return this;
  }

  /**
   * Grants permission to update an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform
   */
  public toUpdateMLTransform() {
    this.to('glue:UpdateMLTransform');
    return this;
  }

  /**
   * Grants permission to update a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition
   */
  public toUpdatePartition() {
    this.to('glue:UpdatePartition');
    return this;
  }

  /**
   * Grants permission to update a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable
   */
  public toUpdateTable() {
    this.to('glue:UpdateTable');
    return this;
  }

  /**
   * Grants permission to update a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger
   */
  public toUpdateTrigger() {
    this.to('glue:UpdateTrigger');
    return this;
  }

  /**
   * Grants permission to update a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction
   */
  public toUpdateUserDefinedFunction() {
    this.to('glue:UpdateUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to update a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow
   */
  public toUpdateWorkflow() {
    this.to('glue:UpdateWorkflow');
    return this;
  }

  /**
   * Grants permission to use an ML Transform from within a Glue ETL Script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html
   */
  public toUseMLTransforms() {
    this.to('glue:UseMLTransforms');
    return this;
  }

  /**
   * Adds a resource of type catalog to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCatalog(account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:catalog';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatabase(databaseName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:database/${DatabaseName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTable(databaseName: string, tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:table/${DatabaseName}/${TableName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type tableversion to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param tableVersionName - Identifier for the tableVersionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTableversion(databaseName: string, tableName: string, tableVersionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:tableVersion/${DatabaseName}/${TableName}/${TableVersionName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${TableVersionName}', tableVersionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param connectionName - Identifier for the connectionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnection(connectionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:connection/${ConnectionName}';
    arn = arn.replace('${ConnectionName}', connectionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type userdefinedfunction to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param userDefinedFunctionName - Identifier for the userDefinedFunctionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUserdefinedfunction(databaseName: string, userDefinedFunctionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:userDefinedFunction/${DatabaseName}/${UserDefinedFunctionName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${UserDefinedFunctionName}', userDefinedFunctionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type devendpoint to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param devEndpointName - Identifier for the devEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevendpoint(devEndpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:devendpoint/${DevEndpointName}';
    arn = arn.replace('${DevEndpointName}', devEndpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:job/${JobName}';
    arn = arn.replace('${JobName}', jobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type trigger to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param triggerName - Identifier for the triggerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrigger(triggerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:trigger/${TriggerName}';
    arn = arn.replace('${TriggerName}', triggerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type crawler to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param crawlerName - Identifier for the crawlerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCrawler(crawlerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:crawler/${CrawlerName}';
    arn = arn.replace('${CrawlerName}', crawlerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param workflowName - Identifier for the workflowName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:workflow/${WorkflowName}';
    arn = arn.replace('${WorkflowName}', workflowName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mlTransform to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param transformId - Identifier for the transformId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMlTransform(transformId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:mlTransform/${TransformId}';
    arn = arn.replace('${TransformId}', transformId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
