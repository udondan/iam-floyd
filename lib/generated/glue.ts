import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [glue](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Glue extends PolicyStatement {
  public servicePrefix = 'glue';

  /**
   * Statement provider for service [glue](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html).
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
    this.to('BatchCreatePartition');
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
    this.to('BatchDeleteConnection');
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
    this.to('BatchDeletePartition');
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
    this.to('BatchDeleteTable');
    return this;
  }

  /**
   * Grants permission to delete one or more versions of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toBatchDeleteTableVersion() {
    this.to('BatchDeleteTableVersion');
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
    this.to('BatchGetCrawlers');
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
    this.to('BatchGetDevEndpoints');
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
    this.to('BatchGetJobs');
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
    this.to('BatchGetPartition');
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
    this.to('BatchGetTriggers');
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
    this.to('BatchGetWorkflows');
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
    this.to('BatchStopJobRun');
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
    this.to('CancelMLTaskRun');
    return this;
  }

  /**
   * Grants permission to retrieve a check the validity of schema version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CheckSchemaVersionValidity
   */
  public toCheckSchemaVersionValidity() {
    this.to('CheckSchemaVersionValidity');
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
    this.to('CreateClassifier');
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
    this.to('CreateConnection');
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
    this.to('CreateCrawler');
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
    this.to('CreateDatabase');
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
    this.to('CreateDevEndpoint');
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
    this.to('CreateJob');
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
    this.to('CreateMLTransform');
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
    this.to('CreatePartition');
    return this;
  }

  /**
   * Grants permission to create a new schema registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateRegistry
   */
  public toCreateRegistry() {
    this.to('CreateRegistry');
    return this;
  }

  /**
   * Grants permission to create a new schema container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateSchema
   */
  public toCreateSchema() {
    this.to('CreateSchema');
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
    this.to('CreateScript');
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
    this.to('CreateSecurityConfiguration');
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
    this.to('CreateTable');
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
    this.to('CreateTrigger');
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
    this.to('CreateUserDefinedFunction');
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
    this.to('CreateWorkflow');
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
    this.to('DeleteClassifier');
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
    this.to('DeleteConnection');
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
    this.to('DeleteCrawler');
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
    this.to('DeleteDatabase');
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
    this.to('DeleteDevEndpoint');
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
    this.to('DeleteJob');
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
    this.to('DeleteMLTransform');
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
    this.to('DeletePartition');
    return this;
  }

  /**
   * Grants permission to delete a schema registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteRegistry
   */
  public toDeleteRegistry() {
    this.to('DeleteRegistry');
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
    this.to('DeleteResourcePolicy');
    return this;
  }

  /**
   * Grants permission to delete a schema container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchema
   */
  public toDeleteSchema() {
    this.to('DeleteSchema');
    return this;
  }

  /**
   * Grants permission to delete a range of schema versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchemaVersions
   */
  public toDeleteSchemaVersions() {
    this.to('DeleteSchemaVersions');
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
    this.to('DeleteSecurityConfiguration');
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
    this.to('DeleteTable');
    return this;
  }

  /**
   * Grants permission to delete a version of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toDeleteTableVersion() {
    this.to('DeleteTableVersion');
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
    this.to('DeleteTrigger');
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
    this.to('DeleteUserDefinedFunction');
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
    this.to('DeleteWorkflow');
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
    this.to('GetCatalogImportStatus');
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
    this.to('GetClassifier');
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
    this.to('GetClassifiers');
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
    this.to('GetConnection');
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
    this.to('GetConnections');
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
    this.to('GetCrawler');
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
    this.to('GetCrawlerMetrics');
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
    this.to('GetCrawlers');
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
    this.to('GetDataCatalogEncryptionSettings');
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
    this.to('GetDatabase');
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
    this.to('GetDatabases');
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
    this.to('GetDataflowGraph');
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
    this.to('GetDevEndpoint');
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
    this.to('GetDevEndpoints');
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
    this.to('GetJob');
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
    this.to('GetJobBookmark');
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
    this.to('GetJobRun');
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
    this.to('GetJobRuns');
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
    this.to('GetJobs');
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
    this.to('GetMLTaskRun');
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
    this.to('GetMLTaskRuns');
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
    this.to('GetMLTransform');
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
    this.to('GetMLTransforms');
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
    this.to('GetMapping');
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
    this.to('GetPartition');
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
    this.to('GetPartitions');
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
    this.to('GetPlan');
    return this;
  }

  /**
   * Grants permission to retrieve a schema registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetRegistry
   */
  public toGetRegistry() {
    this.to('GetRegistry');
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
    this.to('GetResourcePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a schema container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchema
   */
  public toGetSchema() {
    this.to('GetSchema');
    return this;
  }

  /**
   * Grants permission to retrieve a schema version based on schema definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaByDefinition
   */
  public toGetSchemaByDefinition() {
    this.to('GetSchemaByDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve a schema version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersion
   */
  public toGetSchemaVersion() {
    this.to('GetSchemaVersion');
    return this;
  }

  /**
   * Grants permission to compare two schema versions in schema registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersionsDiff
   */
  public toGetSchemaVersionsDiff() {
    this.to('GetSchemaVersionsDiff');
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
    this.to('GetSecurityConfiguration');
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
    this.to('GetSecurityConfigurations');
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
    this.to('GetTable');
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
    this.to('GetTableVersion');
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
    this.to('GetTableVersions');
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
    this.to('GetTables');
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
    this.to('GetTags');
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
    this.to('GetTrigger');
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
    this.to('GetTriggers');
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
    this.to('GetUserDefinedFunction');
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
    this.to('GetUserDefinedFunctions');
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
    this.to('GetWorkflow');
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
    this.to('GetWorkflowRun');
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
    this.to('GetWorkflowRunProperties');
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
    this.to('GetWorkflowRuns');
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
    this.to('ImportCatalogToGlue');
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
    this.to('ListCrawlers');
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
    this.to('ListDevEndpoints');
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
    this.to('ListJobs');
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
    this.to('ListMLTransforms');
    return this;
  }

  /**
   * Grants permission to retrieve a list of schema registries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListRegistries
   */
  public toListRegistries() {
    this.to('ListRegistries');
    return this;
  }

  /**
   * Grants permission to retrieve a list of schema versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemaVersions
   */
  public toListSchemaVersions() {
    this.to('ListSchemaVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of schema containers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemas
   */
  public toListSchemas() {
    this.to('ListSchemas');
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
    this.to('ListTriggers');
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
    this.to('ListWorkflows');
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
    this.to('PutDataCatalogEncryptionSettings');
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
    this.to('PutResourcePolicy');
    return this;
  }

  /**
   * Grants permission to add metadata to schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-PutSchemaVersionMetadata
   */
  public toPutSchemaVersionMetadata() {
    this.to('PutSchemaVersionMetadata');
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
    this.to('PutWorkflowRunProperties');
    return this;
  }

  /**
   * Grants permission to fetch metadata for a schema version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-QuerySchemaVersionMetadata
   */
  public toQuerySchemaVersionMetadata() {
    this.to('QuerySchemaVersionMetadata');
    return this;
  }

  /**
   * Grants permission to create a new schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RegisterSchemaVersion
   */
  public toRegisterSchemaVersion() {
    this.to('RegisterSchemaVersion');
    return this;
  }

  /**
   * Grants permission to remove metadata from schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RemoveSchemaVersionMetadata
   */
  public toRemoveSchemaVersionMetadata() {
    this.to('RemoveSchemaVersionMetadata');
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
    this.to('ResetJobBookmark');
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
    this.to('SearchTables');
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
    this.to('StartCrawler');
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
    this.to('StartCrawlerSchedule');
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
    this.to('StartExportLabelsTaskRun');
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
    this.to('StartImportLabelsTaskRun');
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
    this.to('StartJobRun');
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
    this.to('StartMLEvaluationTaskRun');
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
    this.to('StartMLLabelingSetGenerationTaskRun');
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
    this.to('StartTrigger');
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
    this.to('StartWorkflowRun');
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
    this.to('StopCrawler');
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
    this.to('StopCrawlerSchedule');
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
    this.to('StopTrigger');
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
    this.to('TagResource');
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
    this.to('UntagResource');
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
    this.to('UpdateClassifier');
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
    this.to('UpdateConnection');
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
    this.to('UpdateCrawler');
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
    this.to('UpdateCrawlerSchedule');
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
    this.to('UpdateDatabase');
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
    this.to('UpdateDevEndpoint');
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
    this.to('UpdateJob');
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
    this.to('UpdateMLTransform');
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
    this.to('UpdatePartition');
    return this;
  }

  /**
   * Grants permission to update a schema registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateRegistry
   */
  public toUpdateRegistry() {
    this.to('UpdateRegistry');
    return this;
  }

  /**
   * Grants permission to update a schema container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateSchema
   */
  public toUpdateSchema() {
    this.to('UpdateSchema');
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
    this.to('UpdateTable');
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
    this.to('UpdateTrigger');
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
    this.to('UpdateUserDefinedFunction');
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
    this.to('UpdateWorkflow');
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
    this.to('UseMLTransforms');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchCreatePartition",
      "BatchDeleteConnection",
      "BatchDeletePartition",
      "BatchDeleteTable",
      "BatchDeleteTableVersion",
      "BatchStopJobRun",
      "CancelMLTaskRun",
      "CreateClassifier",
      "CreateConnection",
      "CreateCrawler",
      "CreateDatabase",
      "CreateDevEndpoint",
      "CreateJob",
      "CreateMLTransform",
      "CreatePartition",
      "CreateRegistry",
      "CreateSchema",
      "CreateScript",
      "CreateSecurityConfiguration",
      "CreateTable",
      "CreateTrigger",
      "CreateUserDefinedFunction",
      "CreateWorkflow",
      "DeleteClassifier",
      "DeleteConnection",
      "DeleteCrawler",
      "DeleteDatabase",
      "DeleteDevEndpoint",
      "DeleteJob",
      "DeleteMLTransform",
      "DeletePartition",
      "DeleteRegistry",
      "DeleteResourcePolicy",
      "DeleteSchema",
      "DeleteSchemaVersions",
      "DeleteSecurityConfiguration",
      "DeleteTable",
      "DeleteTableVersion",
      "DeleteTrigger",
      "DeleteUserDefinedFunction",
      "DeleteWorkflow",
      "GetMapping",
      "ImportCatalogToGlue",
      "PutDataCatalogEncryptionSettings",
      "PutResourcePolicy",
      "PutSchemaVersionMetadata",
      "PutWorkflowRunProperties",
      "RegisterSchemaVersion",
      "RemoveSchemaVersionMetadata",
      "ResetJobBookmark",
      "StartCrawler",
      "StartCrawlerSchedule",
      "StartExportLabelsTaskRun",
      "StartImportLabelsTaskRun",
      "StartJobRun",
      "StartMLEvaluationTaskRun",
      "StartMLLabelingSetGenerationTaskRun",
      "StartTrigger",
      "StartWorkflowRun",
      "StopCrawler",
      "StopCrawlerSchedule",
      "StopTrigger",
      "UpdateClassifier",
      "UpdateConnection",
      "UpdateCrawler",
      "UpdateCrawlerSchedule",
      "UpdateDatabase",
      "UpdateDevEndpoint",
      "UpdateJob",
      "UpdateMLTransform",
      "UpdatePartition",
      "UpdateRegistry",
      "UpdateSchema",
      "UpdateTable",
      "UpdateTrigger",
      "UpdateUserDefinedFunction",
      "UpdateWorkflow",
      "UseMLTransforms"
    ],
    "Read": [
      "BatchGetCrawlers",
      "BatchGetDevEndpoints",
      "BatchGetJobs",
      "BatchGetPartition",
      "BatchGetTriggers",
      "BatchGetWorkflows",
      "CheckSchemaVersionValidity",
      "GetCatalogImportStatus",
      "GetClassifier",
      "GetClassifiers",
      "GetConnection",
      "GetConnections",
      "GetCrawler",
      "GetCrawlerMetrics",
      "GetCrawlers",
      "GetDataCatalogEncryptionSettings",
      "GetDatabase",
      "GetDatabases",
      "GetDataflowGraph",
      "GetDevEndpoint",
      "GetDevEndpoints",
      "GetJob",
      "GetJobBookmark",
      "GetJobRun",
      "GetJobRuns",
      "GetJobs",
      "GetMLTaskRun",
      "GetMLTransform",
      "GetPartition",
      "GetPartitions",
      "GetPlan",
      "GetRegistry",
      "GetResourcePolicy",
      "GetSchema",
      "GetSchemaByDefinition",
      "GetSchemaVersion",
      "GetSchemaVersionsDiff",
      "GetSecurityConfiguration",
      "GetSecurityConfigurations",
      "GetTable",
      "GetTableVersion",
      "GetTableVersions",
      "GetTables",
      "GetTags",
      "GetTrigger",
      "GetTriggers",
      "GetUserDefinedFunction",
      "GetUserDefinedFunctions",
      "GetWorkflow",
      "GetWorkflowRun",
      "GetWorkflowRunProperties",
      "GetWorkflowRuns",
      "SearchTables"
    ],
    "List": [
      "GetMLTaskRuns",
      "GetMLTransforms",
      "ListCrawlers",
      "ListDevEndpoints",
      "ListJobs",
      "ListMLTransforms",
      "ListRegistries",
      "ListSchemaVersions",
      "ListSchemas",
      "ListTriggers",
      "ListWorkflows",
      "QuerySchemaVersionMetadata"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

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

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param registryName - Identifier for the registryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:registry/${RegistryName}';
    arn = arn.replace('${RegistryName}', registryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type schema to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchema(schemaName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glue:${Region}:${Account}:schema/${SchemaName}';
    arn = arn.replace('${SchemaName}', schemaName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
