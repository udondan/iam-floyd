import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [athena](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Athena extends PolicyStatement {
  public servicePrefix = 'athena';

  /**
   * Statement provider for service [athena](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get information about one or more named queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
   */
  public toBatchGetNamedQuery() {
    return this.to('BatchGetNamedQuery');
  }

  /**
   * Grants permission to get information about one or more prepared statements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetPreparedStatement.html
   */
  public toBatchGetPreparedStatement() {
    return this.to('BatchGetPreparedStatement');
  }

  /**
   * Grants permission to get information about one or more query executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
   */
  public toBatchGetQueryExecution() {
    return this.to('BatchGetQueryExecution');
  }

  /**
   * Grants permission to cancel a capacity reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CancelCapacityReservation.html
   */
  public toCancelCapacityReservation() {
    return this.to('CancelCapacityReservation');
  }

  /**
   * Grants permission to cancel query execution. Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StopQueryExecution otherwise
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   */
  public toCancelQueryExecution() {
    return this.to('CancelQueryExecution');
  }

  /**
   * Grants permission to create a capacity reservation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateCapacityReservation.html
   */
  public toCreateCapacityReservation() {
    return this.to('CreateCapacityReservation');
  }

  /**
   * Grants permission to create a datacatalog
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html
   */
  public toCreateDataCatalog() {
    return this.to('CreateDataCatalog');
  }

  /**
   * Grants permission to create a named query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
   */
  public toCreateNamedQuery() {
    return this.to('CreateNamedQuery');
  }

  /**
   * Grants permission to create a notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNotebook.html
   */
  public toCreateNotebook() {
    return this.to('CreateNotebook');
  }

  /**
   * Grants permission to create a prepared statement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreatePreparedStatement.html
   */
  public toCreatePreparedStatement() {
    return this.to('CreatePreparedStatement');
  }

  /**
   * Grants permission to create a presigned notebook url
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreatePresignedNotebookUrl.html
   */
  public toCreatePresignedNotebookUrl() {
    return this.to('CreatePresignedNotebookUrl');
  }

  /**
   * Grants permission to create a workgroup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html
   */
  public toCreateWorkGroup() {
    return this.to('CreateWorkGroup');
  }

  /**
   * Grants permission to delete a capacity reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteCapacityReservation.html
   */
  public toDeleteCapacityReservation() {
    return this.to('DeleteCapacityReservation');
  }

  /**
   * Grants permission to delete a datacatalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html
   */
  public toDeleteDataCatalog() {
    return this.to('DeleteDataCatalog');
  }

  /**
   * Grants permission to delete a named query specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
   */
  public toDeleteNamedQuery() {
    return this.to('DeleteNamedQuery');
  }

  /**
   * Grants permission to delete a notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNotebook.html
   */
  public toDeleteNotebook() {
    return this.to('DeleteNotebook');
  }

  /**
   * Grants permission to delete a prepared statement specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeletePreparedStatement.html
   */
  public toDeletePreparedStatement() {
    return this.to('DeletePreparedStatement');
  }

  /**
   * Grants permission to delete a workgroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
   */
  public toDeleteWorkGroup() {
    return this.to('DeleteWorkGroup');
  }

  /**
   * Grants permission to export a notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ExportNotebook.html
   */
  public toExportNotebook() {
    return this.to('ExportNotebook');
  }

  /**
   * Grants permission to get a calculation execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecution.html
   */
  public toGetCalculationExecution() {
    return this.to('GetCalculationExecution');
  }

  /**
   * Grants permission to get a calculation execution code
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecutionCode.html
   */
  public toGetCalculationExecutionCode() {
    return this.to('GetCalculationExecutionCode');
  }

  /**
   * Grants permission to get a calculation execution status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecutionStatus.html
   */
  public toGetCalculationExecutionStatus() {
    return this.to('GetCalculationExecutionStatus');
  }

  /**
   * Grants permission to get capacity assignment information for a capacity reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCapacityAssignmentConfiguration.html
   */
  public toGetCapacityAssignmentConfiguration() {
    return this.to('GetCapacityAssignmentConfiguration');
  }

  /**
   * Grants permission to get a capacity reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCapacityReservation.html
   */
  public toGetCapacityReservation() {
    return this.to('GetCapacityReservation');
  }

  /**
   * Grants permission to enable access to databases and tables. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetCatalogs() {
    return this.to('GetCatalogs');
  }

  /**
   * Grants permission to get a datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html
   */
  public toGetDataCatalog() {
    return this.to('GetDataCatalog');
  }

  /**
   * Grants permission to get a database for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html
   */
  public toGetDatabase() {
    return this.to('GetDatabase');
  }

  /**
   * Grants permission to enable access to the specified database and table. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetExecutionEngine() {
    return this.to('GetExecutionEngine');
  }

  /**
   * Grants permission to enable access to databases and tables. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetExecutionEngines() {
    return this.to('GetExecutionEngines');
  }

  /**
   * Grants permission to get information about the specified named query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
   */
  public toGetNamedQuery() {
    return this.to('GetNamedQuery');
  }

  /**
   * Grants permission to enable access to the specified database and table. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetNamespace() {
    return this.to('GetNamespace');
  }

  /**
   * Grants permission to enable access to databases and tables. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetNamespaces() {
    return this.to('GetNamespaces');
  }

  /**
   * Grants permission to get notebook metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNotebookMetadata.html
   */
  public toGetNotebookMetadata() {
    return this.to('GetNotebookMetadata');
  }

  /**
   * Grants permission to get information about the specified prepared statement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetPreparedStatement.html
   */
  public toGetPreparedStatement() {
    return this.to('GetPreparedStatement');
  }

  /**
   * Grants permission to get information about the specified query execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
   */
  public toGetQueryExecution() {
    return this.to('GetQueryExecution');
  }

  /**
   * Grants permission to get query executions. Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use ListQueryExecutions otherwise
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   */
  public toGetQueryExecutions() {
    return this.to('GetQueryExecutions');
  }

  /**
   * Grants permission to get the query results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Grants permission to get the query results stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/jdbc-v3-driver.html#jdbc-v3-driver-download
   */
  public toGetQueryResultsStream() {
    return this.to('GetQueryResultsStream');
  }

  /**
   * Grants permission to get runtime statistics for the specified query execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryRuntimeStatistics.html
   */
  public toGetQueryRuntimeStatistics() {
    return this.to('GetQueryRuntimeStatistics');
  }

  /**
   * Grants permission to get a session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to get a session status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetSessionStatus.html
   */
  public toGetSessionStatus() {
    return this.to('GetSessionStatus');
  }

  /**
   * Grants permission to enable access to the specified table. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetTable() {
    return this.to('GetTable');
  }

  /**
   * Grants permission to get a metadata about a table for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetTableMetadata.html
   */
  public toGetTableMetadata() {
    return this.to('GetTableMetadata');
  }

  /**
   * Grants permission to enable access to tables. Applies only to AWS services managed policy and principals that use an Athena JDBC driver version 1.1.0
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetTables() {
    return this.to('GetTables');
  }

  /**
   * Grants permission to get a workgroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
   */
  public toGetWorkGroup() {
    return this.to('GetWorkGroup');
  }

  /**
   * Grants permission to import a notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ImportNotebook.html
   */
  public toImportNotebook() {
    return this.to('ImportNotebook');
  }

  /**
   * Grants permission to return a list of ApplicationRuntimeIds
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListApplicationDPUSizes.html
   */
  public toListApplicationDPUSizes() {
    return this.to('ListApplicationDPUSizes');
  }

  /**
   * Grants permission to return a list of calculation executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListCalculationExecutions.html
   */
  public toListCalculationExecutions() {
    return this.to('ListCalculationExecutions');
  }

  /**
   * Grants permission to return a list of capacity reservations for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListCapacityReservations.html
   */
  public toListCapacityReservations() {
    return this.to('ListCapacityReservations');
  }

  /**
   * Grants permission to return a list of datacatalogs for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html
   */
  public toListDataCatalogs() {
    return this.to('ListDataCatalogs');
  }

  /**
   * Grants permission to return a list of databases for a given datacatalog
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to return a list of athena engine versions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListEngineVersions.html
   */
  public toListEngineVersions() {
    return this.to('ListEngineVersions');
  }

  /**
   * Grants permission to return a list of executors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListExecutors.html
   */
  public toListExecutors() {
    return this.to('ListExecutors');
  }

  /**
   * Grants permission to return a list of named queries in Amazon Athena for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
   */
  public toListNamedQueries() {
    return this.to('ListNamedQueries');
  }

  /**
   * Grants permission to return a list of notebooks for a given workgroup
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNotebookMetadata.html
   */
  public toListNotebookMetadata() {
    return this.to('ListNotebookMetadata');
  }

  /**
   * Grants permission to return a list of sessions for a given notebook
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNotebookSessions.html
   */
  public toListNotebookSessions() {
    return this.to('ListNotebookSessions');
  }

  /**
   * Grants permission to return a list of prepared statements for the specified workgroup
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListPreparedStatements.html
   */
  public toListPreparedStatements() {
    return this.to('ListPreparedStatements');
  }

  /**
   * Grants permission to return a list of query executions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   */
  public toListQueryExecutions() {
    return this.to('ListQueryExecutions');
  }

  /**
   * Grants permission to return a list of sessions for a given workgroup
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to return a list of table metadata in a database for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html
   */
  public toListTableMetadata() {
    return this.to('ListTableMetadata');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to return a list of workgroups for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
   */
  public toListWorkGroups() {
    return this.to('ListWorkGroups');
  }

  /**
   * Grants permission to assign capacity from a capacity reservation to queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_PutCapacityAssignmentConfiguration.html
   */
  public toPutCapacityAssignmentConfiguration() {
    return this.to('PutCapacityAssignmentConfiguration');
  }

  /**
   * Grants permission to run a query. Deprecated. Applies only to AWS services and principals that use Athena JDBC driver earlier than 1.1.0. Use StartQueryExecution otherwise
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   */
  public toRunQuery() {
    return this.to('RunQuery');
  }

  /**
   * Grants permission to start a calculation execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartCalculationExecution.html
   */
  public toStartCalculationExecution() {
    return this.to('StartCalculationExecution');
  }

  /**
   * Grants permission to start a query execution using an SQL query provided as a string
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   */
  public toStartQueryExecution() {
    return this.to('StartQueryExecution');
  }

  /**
   * Grants permission to start a session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartSession.html
   */
  public toStartSession() {
    return this.to('StartSession');
  }

  /**
   * Grants permission to stop a calculation execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopCalculationExecution.html
   */
  public toStopCalculationExecution() {
    return this.to('StopCalculationExecution');
  }

  /**
   * Grants permission to stop the specified query execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   */
  public toStopQueryExecution() {
    return this.to('StopQueryExecution');
  }

  /**
   * Grants permission to add a tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate a session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_TerminateSession.html
   */
  public toTerminateSession() {
    return this.to('TerminateSession');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a capacity reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateCapacityReservation.html
   */
  public toUpdateCapacityReservation() {
    return this.to('UpdateCapacityReservation');
  }

  /**
   * Grants permission to update a datacatalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html
   */
  public toUpdateDataCatalog() {
    return this.to('UpdateDataCatalog');
  }

  /**
   * Grants permission to update a named query specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNamedQuery.html
   */
  public toUpdateNamedQuery() {
    return this.to('UpdateNamedQuery');
  }

  /**
   * Grants permission to update a notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNotebook.html
   */
  public toUpdateNotebook() {
    return this.to('UpdateNotebook');
  }

  /**
   * Grants permission to update notebook metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNotebookMetadata.html
   */
  public toUpdateNotebookMetadata() {
    return this.to('UpdateNotebookMetadata');
  }

  /**
   * Grants permission to update a prepared statement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdatePreparedStatement.html
   */
  public toUpdatePreparedStatement() {
    return this.to('UpdatePreparedStatement');
  }

  /**
   * Grants permission to update a workgroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
   */
  public toUpdateWorkGroup() {
    return this.to('UpdateWorkGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetNamedQuery',
      'BatchGetPreparedStatement',
      'BatchGetQueryExecution',
      'GetCalculationExecution',
      'GetCalculationExecutionCode',
      'GetCalculationExecutionStatus',
      'GetCapacityAssignmentConfiguration',
      'GetCapacityReservation',
      'GetCatalogs',
      'GetDataCatalog',
      'GetDatabase',
      'GetExecutionEngine',
      'GetExecutionEngines',
      'GetNamedQuery',
      'GetNamespace',
      'GetNamespaces',
      'GetNotebookMetadata',
      'GetPreparedStatement',
      'GetQueryExecution',
      'GetQueryExecutions',
      'GetQueryResults',
      'GetQueryResultsStream',
      'GetQueryRuntimeStatistics',
      'GetSession',
      'GetSessionStatus',
      'GetTable',
      'GetTableMetadata',
      'GetTables',
      'GetWorkGroup',
      'ListEngineVersions',
      'ListQueryExecutions',
      'ListTableMetadata',
      'ListTagsForResource'
    ],
    Write: [
      'CancelCapacityReservation',
      'CancelQueryExecution',
      'CreateCapacityReservation',
      'CreateDataCatalog',
      'CreateNamedQuery',
      'CreateNotebook',
      'CreatePreparedStatement',
      'CreatePresignedNotebookUrl',
      'CreateWorkGroup',
      'DeleteCapacityReservation',
      'DeleteDataCatalog',
      'DeleteNamedQuery',
      'DeleteNotebook',
      'DeletePreparedStatement',
      'DeleteWorkGroup',
      'ExportNotebook',
      'ImportNotebook',
      'PutCapacityAssignmentConfiguration',
      'RunQuery',
      'StartCalculationExecution',
      'StartQueryExecution',
      'StartSession',
      'StopCalculationExecution',
      'StopQueryExecution',
      'TerminateSession',
      'UpdateCapacityReservation',
      'UpdateDataCatalog',
      'UpdateNamedQuery',
      'UpdateNotebook',
      'UpdateNotebookMetadata',
      'UpdatePreparedStatement',
      'UpdateWorkGroup'
    ],
    List: [
      'ListApplicationDPUSizes',
      'ListCalculationExecutions',
      'ListCapacityReservations',
      'ListDataCatalogs',
      'ListDatabases',
      'ListExecutors',
      'ListNamedQueries',
      'ListNotebookMetadata',
      'ListNotebookSessions',
      'ListPreparedStatements',
      'ListSessions',
      'ListWorkGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type datacatalog to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/datacatalogs-example-policies.html
   *
   * @param dataCatalogName - Identifier for the dataCatalogName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatacatalog(dataCatalogName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:athena:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:datacatalog/${ dataCatalogName }`);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/example-policies-workgroup.html
   *
   * @param workGroupName - Identifier for the workGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkgroup(workGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:athena:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workgroup/${ workGroupName }`);
  }

  /**
   * Adds a resource of type capacity-reservation to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/example-policies-capacity-reservations.html
   *
   * @param capacityReservationName - Identifier for the capacityReservationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCapacityReservation(capacityReservationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:athena:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:capacity-reservation/${ capacityReservationName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCapacityReservation()
   * - .toCreateDataCatalog()
   * - .toCreateWorkGroup()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - datacatalog
   * - workgroup
   * - capacity-reservation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCapacityReservation()
   * - .toCreateDataCatalog()
   * - .toCreateWorkGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
