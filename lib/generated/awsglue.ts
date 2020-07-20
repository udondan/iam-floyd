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
  public resourceTypes: ResourceTypes = {
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
  public batchCreatePartition() {
    this.add('glue:BatchCreatePartition');
    return this;
  }

  /**
   * Grants permission to delete one or more connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection
   */
  public batchDeleteConnection() {
    this.add('glue:BatchDeleteConnection');
    return this;
  }

  /**
   * Grants permission to delete one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition
   */
  public batchDeletePartition() {
    this.add('glue:BatchDeletePartition');
    return this;
  }

  /**
   * Grants permission to delete one or more tables
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable
   */
  public batchDeleteTable() {
    this.add('glue:BatchDeleteTable');
    return this;
  }

  /**
   * Grants permission to delete one or more versions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public batchDeleteTableVersion() {
    this.add('glue:BatchDeleteTableVersion');
    return this;
  }

  /**
   * Grants permission to retrieve one or more crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers
   */
  public batchGetCrawlers() {
    this.add('glue:BatchGetCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve one or more development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints
   */
  public batchGetDevEndpoints() {
    this.add('glue:BatchGetDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve one or more jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs
   */
  public batchGetJobs() {
    this.add('glue:BatchGetJobs');
    return this;
  }

  /**
   * Grants permission to retrieve one or more partitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition
   */
  public batchGetPartition() {
    this.add('glue:BatchGetPartition');
    return this;
  }

  /**
   * Grants permission to retrieve one or more triggers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers
   */
  public batchGetTriggers() {
    this.add('glue:BatchGetTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve one or more workflows
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows
   */
  public batchGetWorkflows() {
    this.add('glue:BatchGetWorkflows');
    return this;
  }

  /**
   * Grants permission to stop one or more job runs for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun
   */
  public batchStopJobRun() {
    this.add('glue:BatchStopJobRun');
    return this;
  }

  /**
   * Grants permission to stop a running ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun
   */
  public cancelMLTaskRun() {
    this.add('glue:CancelMLTaskRun');
    return this;
  }

  /**
   * Grants permission to create a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier
   */
  public createClassifier() {
    this.add('glue:CreateClassifier');
    return this;
  }

  /**
   * Grants permission to create a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection
   */
  public createConnection() {
    this.add('glue:CreateConnection');
    return this;
  }

  /**
   * Grants permission to create a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler
   */
  public createCrawler() {
    this.add('glue:CreateCrawler');
    return this;
  }

  /**
   * Grants permission to create a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase
   */
  public createDatabase() {
    this.add('glue:CreateDatabase');
    return this;
  }

  /**
   * Grants permission to create a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint
   */
  public createDevEndpoint() {
    this.add('glue:CreateDevEndpoint');
    return this;
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob
   */
  public createJob() {
    this.add('glue:CreateJob');
    return this;
  }

  /**
   * Grants permission to create an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform
   */
  public createMLTransform() {
    this.add('glue:CreateMLTransform');
    return this;
  }

  /**
   * Grants permission to create a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition
   */
  public createPartition() {
    this.add('glue:CreatePartition');
    return this;
  }

  /**
   * Grants permission to create a script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript
   */
  public createScript() {
    this.add('glue:CreateScript');
    return this;
  }

  /**
   * Grants permission to create a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration
   */
  public createSecurityConfiguration() {
    this.add('glue:CreateSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to create a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable
   */
  public createTable() {
    this.add('glue:CreateTable');
    return this;
  }

  /**
   * Grants permission to create a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger
   */
  public createTrigger() {
    this.add('glue:CreateTrigger');
    return this;
  }

  /**
   * Grants permission to create a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction
   */
  public createUserDefinedFunction() {
    this.add('glue:CreateUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to create a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow
   */
  public createWorkflow() {
    this.add('glue:CreateWorkflow');
    return this;
  }

  /**
   * Grants permission to delete a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier
   */
  public deleteClassifier() {
    this.add('glue:DeleteClassifier');
    return this;
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection
   */
  public deleteConnection() {
    this.add('glue:DeleteConnection');
    return this;
  }

  /**
   * Grants permission to delete a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler
   */
  public deleteCrawler() {
    this.add('glue:DeleteCrawler');
    return this;
  }

  /**
   * Grants permission to delete a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase
   */
  public deleteDatabase() {
    this.add('glue:DeleteDatabase');
    return this;
  }

  /**
   * Grants permission to delete a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint
   */
  public deleteDevEndpoint() {
    this.add('glue:DeleteDevEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob
   */
  public deleteJob() {
    this.add('glue:DeleteJob');
    return this;
  }

  /**
   * Grants permission to delete an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform
   */
  public deleteMLTransform() {
    this.add('glue:DeleteMLTransform');
    return this;
  }

  /**
   * Grants permission to delete a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition
   */
  public deletePartition() {
    this.add('glue:DeletePartition');
    return this;
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy
   */
  public deleteResourcePolicy() {
    this.add('glue:DeleteResourcePolicy');
    return this;
  }

  /**
   * Grants permission to delete a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration
   */
  public deleteSecurityConfiguration() {
    this.add('glue:DeleteSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable
   */
  public deleteTable() {
    this.add('glue:DeleteTable');
    return this;
  }

  /**
   * Grants permission to delete a version of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public deleteTableVersion() {
    this.add('glue:DeleteTableVersion');
    return this;
  }

  /**
   * Grants permission to delete a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger
   */
  public deleteTrigger() {
    this.add('glue:DeleteTrigger');
    return this;
  }

  /**
   * Grants permission to delete a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction
   */
  public deleteUserDefinedFunction() {
    this.add('glue:DeleteUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow
   */
  public deleteWorkflow() {
    this.add('glue:DeleteWorkflow');
    return this;
  }

  /**
   * Grants permission to retrieve the catalog import status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus
   */
  public getCatalogImportStatus() {
    this.add('glue:GetCatalogImportStatus');
    return this;
  }

  /**
   * Grants permission to retrieve a classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier
   */
  public getClassifier() {
    this.add('glue:GetClassifier');
    return this;
  }

  /**
   * Grants permission to list all classifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers
   */
  public getClassifiers() {
    this.add('glue:GetClassifiers');
    return this;
  }

  /**
   * Grants permission to retrieve a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection
   */
  public getConnection() {
    this.add('glue:GetConnection');
    return this;
  }

  /**
   * Grants permission to retrieve a list of connections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections
   */
  public getConnections() {
    this.add('glue:GetConnections');
    return this;
  }

  /**
   * Grants permission to retrieve a crawler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler
   */
  public getCrawler() {
    this.add('glue:GetCrawler');
    return this;
  }

  /**
   * Grants permission to retrieve metrics about crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics
   */
  public getCrawlerMetrics() {
    this.add('glue:GetCrawlerMetrics');
    return this;
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers
   */
  public getCrawlers() {
    this.add('glue:GetCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve catalog encryption settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings
   */
  public getDataCatalogEncryptionSettings() {
    this.add('glue:GetDataCatalogEncryptionSettings');
    return this;
  }

  /**
   * Grants permission to retrieve a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase
   */
  public getDatabase() {
    this.add('glue:GetDatabase');
    return this;
  }

  /**
   * Grants permission to retrieve all databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases
   */
  public getDatabases() {
    this.add('glue:GetDatabases');
    return this;
  }

  /**
   * Grants permission to transform a script into a directed acyclic graph (DAG)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph
   */
  public getDataflowGraph() {
    this.add('glue:GetDataflowGraph');
    return this;
  }

  /**
   * Grants permission to retrieve a development endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint
   */
  public getDevEndpoint() {
    this.add('glue:GetDevEndpoint');
    return this;
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints
   */
  public getDevEndpoints() {
    this.add('glue:GetDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob
   */
  public getJob() {
    this.add('glue:GetJob');
    return this;
  }

  /**
   * Grants permission to retrieve a job bookmark
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark
   */
  public getJobBookmark() {
    this.add('glue:GetJobBookmark');
    return this;
  }

  /**
   * Grants permission to retrieve a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun
   */
  public getJobRun() {
    this.add('glue:GetJobRun');
    return this;
  }

  /**
   * Grants permission to retrieve all job runs of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns
   */
  public getJobRuns() {
    this.add('glue:GetJobRuns');
    return this;
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs
   */
  public getJobs() {
    this.add('glue:GetJobs');
    return this;
  }

  /**
   * Grants permission to retrieve an ML Task Run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun
   */
  public getMLTaskRun() {
    this.add('glue:GetMLTaskRun');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Task Runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns
   */
  public getMLTaskRuns() {
    this.add('glue:GetMLTaskRuns');
    return this;
  }

  /**
   * Grants permission to retrieve an ML Transform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform
   */
  public getMLTransform() {
    this.add('glue:GetMLTransform');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms
   */
  public getMLTransforms() {
    this.add('glue:GetMLTransforms');
    return this;
  }

  /**
   * Grants permission to create a mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping
   */
  public getMapping() {
    this.add('glue:GetMapping');
    return this;
  }

  /**
   * Grants permission to retrieve a partition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition
   */
  public getPartition() {
    this.add('glue:GetPartition');
    return this;
  }

  /**
   * Grants permission to retrieve the partitions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions
   */
  public getPartitions() {
    this.add('glue:GetPartitions');
    return this;
  }

  /**
   * Grants permission to retrieve a mapping for a script
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan
   */
  public getPlan() {
    this.add('glue:GetPlan');
    return this;
  }

  /**
   * Grants permission to retrieve a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy
   */
  public getResourcePolicy() {
    this.add('glue:GetResourcePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration
   */
  public getSecurityConfiguration() {
    this.add('glue:GetSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve one or more security configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations
   */
  public getSecurityConfigurations() {
    this.add('glue:GetSecurityConfigurations');
    return this;
  }

  /**
   * Grants permission to retrieve a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable
   */
  public getTable() {
    this.add('glue:GetTable');
    return this;
  }

  /**
   * Grants permission to retrieve a version of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion
   */
  public getTableVersion() {
    this.add('glue:GetTableVersion');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions
   */
  public getTableVersions() {
    this.add('glue:GetTableVersions');
    return this;
  }

  /**
   * Grants permission to retrieve the tables in a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables
   */
  public getTables() {
    this.add('glue:GetTables');
    return this;
  }

  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public getTags() {
    this.add('glue:GetTags');
    return this;
  }

  /**
   * Grants permission to retrieve a trigger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger
   */
  public getTrigger() {
    this.add('glue:GetTrigger');
    return this;
  }

  /**
   * Grants permission to retrieve the triggers associated with a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers
   */
  public getTriggers() {
    this.add('glue:GetTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve a function definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction
   */
  public getUserDefinedFunction() {
    this.add('glue:GetUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to retrieve multiple function definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions
   */
  public getUserDefinedFunctions() {
    this.add('glue:GetUserDefinedFunctions');
    return this;
  }

  /**
   * Grants permission to retrieve a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow
   */
  public getWorkflow() {
    this.add('glue:GetWorkflow');
    return this;
  }

  /**
   * Grants permission to retrieve a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun
   */
  public getWorkflowRun() {
    this.add('glue:GetWorkflowRun');
    return this;
  }

  /**
   * Grants permission to retrieve workflow run properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties
   */
  public getWorkflowRunProperties() {
    this.add('glue:GetWorkflowRunProperties');
    return this;
  }

  /**
   * Grants permission to retrieve all runs of a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns
   */
  public getWorkflowRuns() {
    this.add('glue:GetWorkflowRuns');
    return this;
  }

  /**
   * Grants permission to import an Athena data catalog into AWS Glue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue
   */
  public importCatalogToGlue() {
    this.add('glue:ImportCatalogToGlue');
    return this;
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers
   */
  public listCrawlers() {
    this.add('glue:ListCrawlers');
    return this;
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints
   */
  public listDevEndpoints() {
    this.add('glue:ListDevEndpoints');
    return this;
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs
   */
  public listJobs() {
    this.add('glue:ListJobs');
    return this;
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms
   */
  public listMLTransforms() {
    this.add('glue:ListMLTransforms');
    return this;
  }

  /**
   * Grants permission to retrieve all triggers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers
   */
  public listTriggers() {
    this.add('glue:ListTriggers');
    return this;
  }

  /**
   * Grants permission to retrieve all workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows
   */
  public listWorkflows() {
    this.add('glue:ListWorkflows');
    return this;
  }

  /**
   * Grants permission to update catalog encryption settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings
   */
  public putDataCatalogEncryptionSettings() {
    this.add('glue:PutDataCatalogEncryptionSettings');
    return this;
  }

  /**
   * Grants permission to update a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy
   */
  public putResourcePolicy() {
    this.add('glue:PutResourcePolicy');
    return this;
  }

  /**
   * Grants permission to update workflow run properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties
   */
  public putWorkflowRunProperties() {
    this.add('glue:PutWorkflowRunProperties');
    return this;
  }

  /**
   * Grants permission to reset a job bookmark
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark
   */
  public resetJobBookmark() {
    this.add('glue:ResetJobBookmark');
    return this;
  }

  /**
   * Grants permission to retrieve the tables in the catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables
   */
  public searchTables() {
    this.add('glue:SearchTables');
    return this;
  }

  /**
   * Grants permission to start a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler
   */
  public startCrawler() {
    this.add('glue:StartCrawler');
    return this;
  }

  /**
   * Grants permission to change the schedule state of a crawler to SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule
   */
  public startCrawlerSchedule() {
    this.add('glue:StartCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to start an Export Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun
   */
  public startExportLabelsTaskRun() {
    this.add('glue:StartExportLabelsTaskRun');
    return this;
  }

  /**
   * Grants permission to start an Import Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun
   */
  public startImportLabelsTaskRun() {
    this.add('glue:StartImportLabelsTaskRun');
    return this;
  }

  /**
   * Grants permission to start running a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun
   */
  public startJobRun() {
    this.add('glue:StartJobRun');
    return this;
  }

  /**
   * Grants permission to start an Evaluation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun
   */
  public startMLEvaluationTaskRun() {
    this.add('glue:StartMLEvaluationTaskRun');
    return this;
  }

  /**
   * Grants permission to start a Labeling Set Generation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun
   */
  public startMLLabelingSetGenerationTaskRun() {
    this.add('glue:StartMLLabelingSetGenerationTaskRun');
    return this;
  }

  /**
   * Grants permission to start a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger
   */
  public startTrigger() {
    this.add('glue:StartTrigger');
    return this;
  }

  /**
   * Grants permission to start running a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun
   */
  public startWorkflowRun() {
    this.add('glue:StartWorkflowRun');
    return this;
  }

  /**
   * Grants permission to stop a running crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler
   */
  public stopCrawler() {
    this.add('glue:StopCrawler');
    return this;
  }

  /**
   * Grants permission to set the schedule state of a crawler to NOT_SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule
   */
  public stopCrawlerSchedule() {
    this.add('glue:StopCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to stop a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger
   */
  public stopTrigger() {
    this.add('glue:StopTrigger');
    return this;
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource
   */
  public tagResource() {
    this.add('glue:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public untagResource() {
    this.add('glue:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier
   */
  public updateClassifier() {
    this.add('glue:UpdateClassifier');
    return this;
  }

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection
   */
  public updateConnection() {
    this.add('glue:UpdateConnection');
    return this;
  }

  /**
   * Grants permission to update a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler
   */
  public updateCrawler() {
    this.add('glue:UpdateCrawler');
    return this;
  }

  /**
   * Grants permission to update the schedule of a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule
   */
  public updateCrawlerSchedule() {
    this.add('glue:UpdateCrawlerSchedule');
    return this;
  }

  /**
   * Grants permission to update a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase
   */
  public updateDatabase() {
    this.add('glue:UpdateDatabase');
    return this;
  }

  /**
   * Grants permission to update a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint
   */
  public updateDevEndpoint() {
    this.add('glue:UpdateDevEndpoint');
    return this;
  }

  /**
   * Grants permission to update a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob
   */
  public updateJob() {
    this.add('glue:UpdateJob');
    return this;
  }

  /**
   * Grants permission to update an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform
   */
  public updateMLTransform() {
    this.add('glue:UpdateMLTransform');
    return this;
  }

  /**
   * Grants permission to update a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition
   */
  public updatePartition() {
    this.add('glue:UpdatePartition');
    return this;
  }

  /**
   * Grants permission to update a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable
   */
  public updateTable() {
    this.add('glue:UpdateTable');
    return this;
  }

  /**
   * Grants permission to update a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger
   */
  public updateTrigger() {
    this.add('glue:UpdateTrigger');
    return this;
  }

  /**
   * Grants permission to update a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction
   */
  public updateUserDefinedFunction() {
    this.add('glue:UpdateUserDefinedFunction');
    return this;
  }

  /**
   * Grants permission to update a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow
   */
  public updateWorkflow() {
    this.add('glue:UpdateWorkflow');
    return this;
  }

  /**
   * Grants permission to use an ML Transform from within a Glue ETL Script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html
   */
  public useMLTransforms() {
    this.add('glue:UseMLTransforms');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
