import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to get information about one or more named queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
   */
  public toBatchGetNamedQuery() {
    return this.to('BatchGetNamedQuery');
  }

  /**
   * Grants permissions to get information about one or more query executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
   */
  public toBatchGetQueryExecution() {
    return this.to('BatchGetQueryExecution');
  }

  /**
   * Grants permissions to create a datacatalog
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
   * Grants permissions to create a named query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
   */
  public toCreateNamedQuery() {
    return this.to('CreateNamedQuery');
  }

  /**
   * Grants permissions to create a workgroup
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
   * Grants permissions to delete a datacatalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html
   */
  public toDeleteDataCatalog() {
    return this.to('DeleteDataCatalog');
  }

  /**
   * Grants permissions to delete a named query specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
   */
  public toDeleteNamedQuery() {
    return this.to('DeleteNamedQuery');
  }

  /**
   * Grants permissions to delete a workgroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
   */
  public toDeleteWorkGroup() {
    return this.to('DeleteWorkGroup');
  }

  /**
   * Grants permissions to get a datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html
   */
  public toGetDataCatalog() {
    return this.to('GetDataCatalog');
  }

  /**
   * Grants permissions to get a database for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html
   */
  public toGetDatabase() {
    return this.to('GetDatabase');
  }

  /**
   * Grants permissions to get information about the specified named query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
   */
  public toGetNamedQuery() {
    return this.to('GetNamedQuery');
  }

  /**
   * Grants permissions to get information about the specified query execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
   */
  public toGetQueryExecution() {
    return this.to('GetQueryExecution');
  }

  /**
   * Grants permissions to get the query results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Grants permissions to get the query results stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetQueryResultsStream() {
    return this.to('GetQueryResultsStream');
  }

  /**
   * Grants permissions to get a metadata about a table for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ GetTableMetadata.html
   */
  public toGetTableMetadata() {
    return this.to('GetTableMetadata');
  }

  /**
   * Grants permissions to get a workgroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
   */
  public toGetWorkGroup() {
    return this.to('GetWorkGroup');
  }

  /**
   * Grants permissions to return a list of datacatalogs for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html
   */
  public toListDataCatalogs() {
    return this.to('ListDataCatalogs');
  }

  /**
   * Grants permissions to return a list of databases for a given datacatalog
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permissions to return a list of athena engine versions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListEngineVersions.html
   */
  public toListEngineVersions() {
    return this.to('ListEngineVersions');
  }

  /**
   * Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
   */
  public toListNamedQueries() {
    return this.to('ListNamedQueries');
  }

  /**
   * Grants permissions to return a list of query executions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   */
  public toListQueryExecutions() {
    return this.to('ListQueryExecutions');
  }

  /**
   * Grants permissions to return a list of table metadata in a database for a given datacatalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html
   */
  public toListTableMetadata() {
    return this.to('ListTableMetadata');
  }

  /**
   * Grants permissions to return a list of tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permissions to return a list of workgroups for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
   */
  public toListWorkGroups() {
    return this.to('ListWorkGroups');
  }

  /**
   * Grants permissions to start a query execution using an SQL query provided as a string
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   */
  public toStartQueryExecution() {
    return this.to('StartQueryExecution');
  }

  /**
   * Grants permissions to stop the specified query execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   */
  public toStopQueryExecution() {
    return this.to('StopQueryExecution');
  }

  /**
   * Grants permissions to add a tag to a resource
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
   * Grants permissions to remove a tag from a resource
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
   * Grants permissions to update a datacatalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html
   */
  public toUpdateDataCatalog() {
    return this.to('UpdateDataCatalog');
  }

  /**
   * Grants permissions to update a workgroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
   */
  public toUpdateWorkGroup() {
    return this.to('UpdateWorkGroup');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetNamedQuery",
      "BatchGetQueryExecution",
      "GetDataCatalog",
      "GetDatabase",
      "GetNamedQuery",
      "GetQueryExecution",
      "GetQueryResults",
      "GetQueryResultsStream",
      "GetTableMetadata",
      "GetWorkGroup",
      "ListEngineVersions",
      "ListQueryExecutions",
      "ListTableMetadata",
      "ListTagsForResource"
    ],
    "Write": [
      "CreateDataCatalog",
      "CreateNamedQuery",
      "CreateWorkGroup",
      "DeleteDataCatalog",
      "DeleteNamedQuery",
      "DeleteWorkGroup",
      "StartQueryExecution",
      "StopQueryExecution",
      "UpdateDataCatalog",
      "UpdateWorkGroup"
    ],
    "List": [
      "ListDataCatalogs",
      "ListDatabases",
      "ListNamedQueries",
      "ListWorkGroups"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:athena:${Region}:${Account}:datacatalog/${DataCatalogName}';
    arn = arn.replace('${DataCatalogName}', dataCatalogName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:athena:${Region}:${Account}:workgroup/${WorkGroupName}';
    arn = arn.replace('${WorkGroupName}', workGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
