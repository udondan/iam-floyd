import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [sqlworkbench](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sqlworkbench extends PolicyStatement {
  public servicePrefix = 'sqlworkbench';

  /**
   * Statement provider for service [sqlworkbench](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   *
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toAssociateConnectionWithChart() {
    return this.to('AssociateConnectionWithChart');
  }

  /**
   *
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toAssociateConnectionWithTab() {
    return this.to('AssociateConnectionWithTab');
  }

  /**
   *
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toAssociateQueryWithTab() {
    return this.to('AssociateQueryWithTab');
  }

  /**
   * Grants permission to delete folders on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toBatchDeleteFolder() {
    return this.to('BatchDeleteFolder');
  }

  /**
   * Grants permission to create SQLWorkbench account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateAccount() {
    return this.to('CreateAccount');
  }

  /**
   * Grants permission to create new saved chart on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateChart() {
    return this.to('CreateChart');
  }

  /**
   * Grants permission to create a new connection on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create folder on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateFolder() {
    return this.to('CreateFolder');
  }

  /**
   * Grants permission to create a new saved query on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateSavedQuery() {
    return this.to('CreateSavedQuery');
  }

  /**
   * Grants permission to remove charts on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteChart() {
    return this.to('DeleteChart');
  }

  /**
   * Grants permission to remove connections on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to remove saved queries on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteSavedQuery() {
    return this.to('DeleteSavedQuery');
  }

  /**
   * Grants permission to remove a tab on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteTab() {
    return this.to('DeleteTab');
  }

  /**
   * Grants permission to execute a query in your redshift cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDriverExecute() {
    return this.to('DriverExecute');
  }

  /**
   * Grants permission to generate a new session on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGenerateSession() {
    return this.to('GenerateSession');
  }

  /**
   * Grants permission to get account info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetAccountInfo() {
    return this.to('GetAccountInfo');
  }

  /**
   * Grants permission to get charts on your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetChart() {
    return this.to('GetChart');
  }

  /**
   * Grants permission to get connections on your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to describe KMS Keys
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetKMSKey() {
    return this.to('GetKMSKey');
  }

  /**
   * Grants permission to get saved query on your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetSavedQuery() {
    return this.to('GetSavedQuery');
  }

  /**
   * Grants permission to get user info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetUserInfo() {
    return this.to('GetUserInfo');
  }

  /**
   * Grants permission to get workspace settings on your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toGetUserWorkspaceSettings() {
    return this.to('GetUserWorkspaceSettings');
  }

  /**
   * Grants permission to list buckets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListBuckets() {
    return this.to('ListBuckets');
  }

  /**
   * Grants permission to list the connections on your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list databases of your redshift cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to list files and folders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListFiles() {
    return this.to('ListFiles');
  }

  /**
   * Grants permission to list KMS Key Aliases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListKMSKeyAliases() {
    return this.to('ListKMSKeyAliases');
  }

  /**
   * Grants permission to list KMS Keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListKMSKeys() {
    return this.to('ListKMSKeys');
  }

  /**
   * Grants permission to list redshift clusters on your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListRedshiftClusters() {
    return this.to('ListRedshiftClusters');
  }

  /**
   * Grants permission to list sample databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSampleDatabases() {
    return this.to('ListSampleDatabases');
  }

  /**
   * Grants permission to list versions of saved query on your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSavedQueryVersions() {
    return this.to('ListSavedQueryVersions');
  }

  /**
   * Grants permission to list tabs on your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListTabs() {
    return this.to('ListTabs');
  }

  /**
   * Grants permission to list the tags of an sqlworkbench resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update a tab on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toPutTab() {
    return this.to('PutTab');
  }

  /**
   * Grants permission to update workspace settings on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toPutUserWorkspaceSettings() {
    return this.to('PutUserWorkspaceSettings');
  }

  /**
   * Grants permission to tag an sqlworkbench resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an sqlworkbench resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a chart on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUpdateChart() {
    return this.to('UpdateChart');
  }

  /**
   * Grants permission to update a connection on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Grants permission to move files on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUpdateFileFolder() {
    return this.to('UpdateFileFolder');
  }

  /**
   * Grants permission to update a folder's name and details on your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUpdateFolder() {
    return this.to('UpdateFolder');
  }

  /**
   * Grants permission to update a saved query on your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toUpdateSavedQuery() {
    return this.to('UpdateSavedQuery');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateConnectionWithChart",
      "AssociateConnectionWithTab",
      "AssociateQueryWithTab",
      "BatchDeleteFolder",
      "CreateAccount",
      "CreateChart",
      "CreateConnection",
      "CreateFolder",
      "CreateSavedQuery",
      "DeleteChart",
      "DeleteConnection",
      "DeleteSavedQuery",
      "DeleteTab",
      "DriverExecute",
      "GenerateSession",
      "PutTab",
      "PutUserWorkspaceSettings",
      "UpdateChart",
      "UpdateConnection",
      "UpdateFileFolder",
      "UpdateFolder",
      "UpdateSavedQuery"
    ],
    "Read": [
      "GetAccountInfo",
      "GetChart",
      "GetConnection",
      "GetKMSKey",
      "GetSavedQuery",
      "GetUserInfo",
      "GetUserWorkspaceSettings",
      "ListBuckets",
      "ListSampleDatabases",
      "ListTagsForResource"
    ],
    "List": [
      "ListConnections",
      "ListDatabases",
      "ListFiles",
      "ListKMSKeyAliases",
      "ListKMSKeys",
      "ListRedshiftClusters",
      "ListSavedQueryVersions",
      "ListTabs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sqlworkbench:${ region || '*' }:${ account || '*' }:connection/${ resourceId }`);
  }

  /**
   * Adds a resource of type query to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuery(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sqlworkbench:${ region || '*' }:${ account || '*' }:query/${ resourceId }`);
  }

  /**
   * Adds a resource of type chart to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChart(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sqlworkbench:${ region || '*' }:${ account || '*' }:chart/${ resourceId }`);
  }
}
