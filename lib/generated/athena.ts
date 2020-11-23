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
   * Grants permissions to get information about one or more named queries.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
   */
  public toBatchGetNamedQuery() {
    this.to('BatchGetNamedQuery');
    return this;
  }

  /**
   * Grants permissions to get information about one or more query executions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
   */
  public toBatchGetQueryExecution() {
    this.to('BatchGetQueryExecution');
    return this;
  }

  /**
   * Grants permissions to create a datacatalog.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html
   */
  public toCreateDataCatalog() {
    this.to('CreateDataCatalog');
    return this;
  }

  /**
   * Grants permissions to create a named query.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
   */
  public toCreateNamedQuery() {
    this.to('CreateNamedQuery');
    return this;
  }

  /**
   * Grants permissions to create a workgroup.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html
   */
  public toCreateWorkGroup() {
    this.to('CreateWorkGroup');
    return this;
  }

  /**
   * Grants permissions to delete a datacatalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html
   */
  public toDeleteDataCatalog() {
    this.to('DeleteDataCatalog');
    return this;
  }

  /**
   * Grants permissions to delete a named query specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
   */
  public toDeleteNamedQuery() {
    this.to('DeleteNamedQuery');
    return this;
  }

  /**
   * Grants permissions to delete a workgroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
   */
  public toDeleteWorkGroup() {
    this.to('DeleteWorkGroup');
    return this;
  }

  /**
   * Grants permissions to get a datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html
   */
  public toGetDataCatalog() {
    this.to('GetDataCatalog');
    return this;
  }

  /**
   * Grants permissions to get a database for a given datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html
   */
  public toGetDatabase() {
    this.to('GetDatabase');
    return this;
  }

  /**
   * Grants permissions to get information about the specified named query.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
   */
  public toGetNamedQuery() {
    this.to('GetNamedQuery');
    return this;
  }

  /**
   * Grants permissions to get information about the specified query execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
   */
  public toGetQueryExecution() {
    this.to('GetQueryExecution');
    return this;
  }

  /**
   * Grants permissions to get the query results.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    this.to('GetQueryResults');
    return this;
  }

  /**
   * Grants permissions to get the query results stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   */
  public toGetQueryResultsStream() {
    this.to('GetQueryResultsStream');
    return this;
  }

  /**
   * Grants permissions to get a metadata about a table for a given datacatalog.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ GetTableMetadata.html
   */
  public toGetTableMetadata() {
    this.to('GetTableMetadata');
    return this;
  }

  /**
   * Grants permissions to get a workgroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
   */
  public toGetWorkGroup() {
    this.to('GetWorkGroup');
    return this;
  }

  /**
   * Grants permissions to return a list of datacatalogs for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html
   */
  public toListDataCatalogs() {
    this.to('ListDataCatalogs');
    return this;
  }

  /**
   * Grants permissions to return a list of databases for a given datacatalog.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    this.to('ListDatabases');
    return this;
  }

  /**
   * Grants permissions to return a list of named queries in Amazon Athena for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
   */
  public toListNamedQueries() {
    this.to('ListNamedQueries');
    return this;
  }

  /**
   * Grants permissions to return a list of query executions for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   */
  public toListQueryExecutions() {
    this.to('ListQueryExecutions');
    return this;
  }

  /**
   * Grants permissions to return a list of table metadata in a database for a given datacatalog.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html
   */
  public toListTableMetadata() {
    this.to('ListTableMetadata');
    return this;
  }

  /**
   * Grants permissions to return a list of tags for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to return a list of workgroups for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
   */
  public toListWorkGroups() {
    this.to('ListWorkGroups');
    return this;
  }

  /**
   * Grants permissions to start a query execution using an SQL query provided as a string.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   */
  public toStartQueryExecution() {
    this.to('StartQueryExecution');
    return this;
  }

  /**
   * Grants permissions to stop the specified query execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   */
  public toStopQueryExecution() {
    this.to('StopQueryExecution');
    return this;
  }

  /**
   * Grants permissions to add a tag to a resource.
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
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permissions to remove a tag from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permissions to update a datacatalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html
   */
  public toUpdateDataCatalog() {
    this.to('UpdateDataCatalog');
    return this;
  }

  /**
   * Grants permissions to update a workgroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
   */
  public toUpdateWorkGroup() {
    this.to('UpdateWorkGroup');
    return this;
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
      "ListTagsForResource"
    ],
    "Tagging": [
      "CreateDataCatalog",
      "CreateWorkGroup",
      "TagResource",
      "UntagResource"
    ],
    "Write": [
      "CreateNamedQuery",
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
      "ListQueryExecutions",
      "ListTableMetadata",
      "ListWorkGroups"
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
