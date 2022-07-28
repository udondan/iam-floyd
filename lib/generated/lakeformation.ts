import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [lakeformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lakeformation extends PolicyStatement {
  public servicePrefix = 'lakeformation';

  /**
   * Statement provider for service [lakeformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to attach Lake Formation tags to catalog resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-AddLFTagsToResource
   */
  public toAddLFTagsToResource() {
    return this.to('AddLFTagsToResource');
  }

  /**
   * Grants permission to data lake permissions to one or more principals in a batch
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchGrantPermissions
   */
  public toBatchGrantPermissions() {
    return this.to('BatchGrantPermissions');
  }

  /**
   * Grants permission to revoke data lake permissions from one or more principals in a batch
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchRevokePermissions
   */
  public toBatchRevokePermissions() {
    return this.to('BatchRevokePermissions');
  }

  /**
   * Grants permission to cancel the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CancelTransaction
   */
  public toCancelTransaction() {
    return this.to('CancelTransaction');
  }

  /**
   * Grants permission to commit the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CommitTransaction
   */
  public toCommitTransaction() {
    return this.to('CommitTransaction');
  }

  /**
   * Grants permission to create a Lake Formation data cell filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-CreateDataCellsFilter
   */
  public toCreateDataCellsFilter() {
    return this.to('CreateDataCellsFilter');
  }

  /**
   * Grants permission to create a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-CreateLFTag
   */
  public toCreateLFTag() {
    return this.to('CreateLFTag');
  }

  /**
   * Grants permission to delete a Lake Formation data cell filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-DeleteDataCellsFilter
   */
  public toDeleteDataCellsFilter() {
    return this.to('DeleteDataCellsFilter');
  }

  /**
   * Grants permission to delete a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeleteLFTag
   */
  public toDeleteLFTag() {
    return this.to('DeleteLFTag');
  }

  /**
   * Grants permission to delete the specified objects if the transaction is canceled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DeleteObjectsOnCancel
   */
  public toDeleteObjectsOnCancel() {
    return this.to('DeleteObjectsOnCancel');
  }

  /**
   * Grants permission to deregister a registered location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeregisterResource
   */
  public toDeregisterResource() {
    return this.to('DeregisterResource');
  }

  /**
   * Grants permission to describe a registered location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DescribeResource
   */
  public toDescribeResource() {
    return this.to('DescribeResource');
  }

  /**
   * Grants permission to get status of the given transaction
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DescribeTransaction
   */
  public toDescribeTransaction() {
    return this.to('DescribeTransaction');
  }

  /**
   * Grants permission to extend the timeout of the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ExtendTransaction
   */
  public toExtendTransaction() {
    return this.to('ExtendTransaction');
  }

  /**
   * Grants permission to virtual data lake access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataAccess
   */
  public toGetDataAccess() {
    return this.to('GetDataAccess');
  }

  /**
   * Grants permission to retrieve data lake settings such as the list of data lake administrators and database and table default permissions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataLakeSettings
   */
  public toGetDataLakeSettings() {
    return this.to('GetDataLakeSettings');
  }

  /**
   * Grants permission to retrieve permissions attached to resources in the given path
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetEffectivePermissionsForPath
   */
  public toGetEffectivePermissionsForPath() {
    return this.to('GetEffectivePermissionsForPath');
  }

  /**
   * Grants permission to retrieve a Lake Formation tag
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetLFTag
   */
  public toGetLFTag() {
    return this.to('GetLFTag');
  }

  /**
   * Grants permission to retrieve the state of the given query
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lakeformation:StartQueryPlanning
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryState
   */
  public toGetQueryState() {
    return this.to('GetQueryState');
  }

  /**
   * Grants permission to retrieve the statistics for the given query
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lakeformation:StartQueryPlanning
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryStatistics
   */
  public toGetQueryStatistics() {
    return this.to('GetQueryStatistics');
  }

  /**
   * Grants permission to retrieve lakeformation tags on a catalog resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetResourceLFTags
   */
  public toGetResourceLFTags() {
    return this.to('GetResourceLFTags');
  }

  /**
   * Grants permission to retrieve objects from a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-GetTableObjects
   */
  public toGetTableObjects() {
    return this.to('GetTableObjects');
  }

  /**
   * Grants permission to retrieve the results for the given work units
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lakeformation:GetWorkUnits
   * - lakeformation:StartQueryPlanning
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnitResults
   */
  public toGetWorkUnitResults() {
    return this.to('GetWorkUnitResults');
  }

  /**
   * Grants permission to retrieve the work units for the given query
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lakeformation:StartQueryPlanning
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnits
   */
  public toGetWorkUnits() {
    return this.to('GetWorkUnits');
  }

  /**
   * Grants permission to data lake permissions to a principal
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GrantPermissions
   */
  public toGrantPermissions() {
    return this.to('GrantPermissions');
  }

  /**
   * Grants permission to list cell filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-ListDataCellsFilter
   */
  public toListDataCellsFilter() {
    return this.to('ListDataCellsFilter');
  }

  /**
   * Grants permission to list Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListLFTags
   */
  public toListLFTags() {
    return this.to('ListLFTags');
  }

  /**
   * Grants permission to list permissions filtered by principal or resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListPermissions
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Grants permission to List registered locations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListResources
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to list all the storage optimizers for the Governed table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-ListTableStorageOptimizers
   */
  public toListTableStorageOptimizers() {
    return this.to('ListTableStorageOptimizers');
  }

  /**
   * Grants permission to list all transactions in the system
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ListTransactions
   */
  public toListTransactions() {
    return this.to('ListTransactions');
  }

  /**
   * Grants permission to overwrite data lake settings such as the list of data lake administrators and database and table default permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-PutDataLakeSettings
   */
  public toPutDataLakeSettings() {
    return this.to('PutDataLakeSettings');
  }

  /**
   * Grants permission to register a new location to be managed by Lake Formation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RegisterResource
   */
  public toRegisterResource() {
    return this.to('RegisterResource');
  }

  /**
   * Grants permission to remove lakeformation tags from catalog resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RemoveLFTagsFromResource
   */
  public toRemoveLFTagsFromResource() {
    return this.to('RemoveLFTagsFromResource');
  }

  /**
   * Grants permission to revoke data lake permissions from a principal
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RevokePermissions
   */
  public toRevokePermissions() {
    return this.to('RevokePermissions');
  }

  /**
   * Grants permission to list catalog databases with Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchDatabasesByLFTags
   */
  public toSearchDatabasesByLFTags() {
    return this.to('SearchDatabasesByLFTags');
  }

  /**
   * Grants permission to list catalog tables with Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchTablesByLFTags
   */
  public toSearchTablesByLFTags() {
    return this.to('SearchTablesByLFTags');
  }

  /**
   * Grants permission to initiate the planning of the given query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-StartQueryPlanning
   */
  public toStartQueryPlanning() {
    return this.to('StartQueryPlanning');
  }

  /**
   * Grants permission to start a new transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-StartTransaction
   */
  public toStartTransaction() {
    return this.to('StartTransaction');
  }

  /**
   * Grants permission to update a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateLFTag
   */
  public toUpdateLFTag() {
    return this.to('UpdateLFTag');
  }

  /**
   * Grants permission to update a registered location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateResource
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  /**
   * Grants permission to add or delete the specified objects to or from a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-UpdateTableObjects
   */
  public toUpdateTableObjects() {
    return this.to('UpdateTableObjects');
  }

  /**
   * Grants permission to update the configuration of the storage optimizer for the Governed table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-UpdateTableStorageOptimizer
   */
  public toUpdateTableStorageOptimizer() {
    return this.to('UpdateTableStorageOptimizer');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddLFTagsToResource',
      'RemoveLFTagsFromResource'
    ],
    'Permissions management': [
      'BatchGrantPermissions',
      'BatchRevokePermissions',
      'GrantPermissions',
      'PutDataLakeSettings',
      'RevokePermissions'
    ],
    Write: [
      'CancelTransaction',
      'CommitTransaction',
      'CreateDataCellsFilter',
      'CreateLFTag',
      'DeleteDataCellsFilter',
      'DeleteLFTag',
      'DeleteObjectsOnCancel',
      'DeregisterResource',
      'ExtendTransaction',
      'GetDataAccess',
      'RegisterResource',
      'StartQueryPlanning',
      'StartTransaction',
      'UpdateLFTag',
      'UpdateResource',
      'UpdateTableObjects',
      'UpdateTableStorageOptimizer'
    ],
    Read: [
      'DescribeResource',
      'DescribeTransaction',
      'GetDataLakeSettings',
      'GetEffectivePermissionsForPath',
      'GetLFTag',
      'GetQueryState',
      'GetQueryStatistics',
      'GetResourceLFTags',
      'GetTableObjects',
      'GetWorkUnitResults',
      'GetWorkUnits',
      'ListLFTags',
      'SearchDatabasesByLFTags',
      'SearchTablesByLFTags'
    ],
    List: [
      'ListDataCellsFilter',
      'ListPermissions',
      'ListResources',
      'ListTableStorageOptimizers',
      'ListTransactions'
    ]
  };
}
