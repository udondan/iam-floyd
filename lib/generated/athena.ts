import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetQueryResultsStream() {
    return this.to('GetQueryResultsStream');
  }

  /**
   * Grants permission to get a metadata about a table for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ GetTableMetadata.html
   */
  public toGetTableMetadata() {
    return this.to('GetTableMetadata');
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
      'BatchGetQueryExecution',
      'GetDataCatalog',
      'GetDatabase',
      'GetNamedQuery',
      'GetPreparedStatement',
      'GetQueryExecution',
      'GetQueryResults',
      'GetQueryResultsStream',
      'GetTableMetadata',
      'GetWorkGroup',
      'ListEngineVersions',
      'ListQueryExecutions',
      'ListTableMetadata',
      'ListTagsForResource'
    ],
    Write: [
      'CreateDataCatalog',
      'CreateNamedQuery',
      'CreatePreparedStatement',
      'CreateWorkGroup',
      'DeleteDataCatalog',
      'DeleteNamedQuery',
      'DeletePreparedStatement',
      'DeleteWorkGroup',
      'StartQueryExecution',
      'StopQueryExecution',
      'UpdateDataCatalog',
      'UpdateNamedQuery',
      'UpdatePreparedStatement',
      'UpdateWorkGroup'
    ],
    List: [
      'ListDataCatalogs',
      'ListDatabases',
      'ListNamedQueries',
      'ListPreparedStatements',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatacatalog(dataCatalogName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:athena:${ region || '*' }:${ account || '*' }:datacatalog/${ dataCatalogName }`);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/athena/latest/ug/example-policies-workgroup.html
   *
   * @param workGroupName - Identifier for the workGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkgroup(workGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:athena:${ region || '*' }:${ account || '*' }:workgroup/${ workGroupName }`);
  }
}
