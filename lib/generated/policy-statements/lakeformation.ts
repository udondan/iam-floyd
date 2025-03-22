import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_AddLFTagsToResource.html
   */
  public toAddLFTagsToResource() {
    return this.to('AddLFTagsToResource');
  }

  /**
   * Grants permission to data lake permissions to one or more principals in a batch
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_BatchGrantPermissions.html
   */
  public toBatchGrantPermissions() {
    return this.to('BatchGrantPermissions');
  }

  /**
   * Grants permission to revoke data lake permissions from one or more principals in a batch
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_BatchRevokePermissions.html
   */
  public toBatchRevokePermissions() {
    return this.to('BatchRevokePermissions');
  }

  /**
   * Grants permission to cancel the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CancelTransaction.html
   */
  public toCancelTransaction() {
    return this.to('CancelTransaction');
  }

  /**
   * Grants permission to commit the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CommitTransaction.html
   */
  public toCommitTransaction() {
    return this.to('CommitTransaction');
  }

  /**
   * Grants permission to create a Lake Formation data cell filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CreateDataCellsFilter.html
   */
  public toCreateDataCellsFilter() {
    return this.to('CreateDataCellsFilter');
  }

  /**
   * Grants permission to create a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CreateLFTag.html
   */
  public toCreateLFTag() {
    return this.to('CreateLFTag');
  }

  /**
   * Grants permission to create a Lake Formation tag expression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CreateLFTagExpression.html
   */
  public toCreateLFTagExpression() {
    return this.to('CreateLFTagExpression');
  }

  /**
   * Grants permission to create an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CreateLakeFormationIdentityCenterConfiguration.html
   */
  public toCreateLakeFormationIdentityCenterConfiguration() {
    return this.to('CreateLakeFormationIdentityCenterConfiguration');
  }

  /**
   * Grants permission to enforce Lake Formation permissions for the given databases, tables, and principals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_CreateLakeFormationOptIn.html
   */
  public toCreateLakeFormationOptIn() {
    return this.to('CreateLakeFormationOptIn');
  }

  /**
   * Grants permission to delete a Lake Formation data cell filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteDataCellsFilter.html
   */
  public toDeleteDataCellsFilter() {
    return this.to('DeleteDataCellsFilter');
  }

  /**
   * Grants permission to delete a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteLFTag.html
   */
  public toDeleteLFTag() {
    return this.to('DeleteLFTag');
  }

  /**
   * Grants permission to delete a Lake Formation expression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteLFTagExpression.html
   */
  public toDeleteLFTagExpression() {
    return this.to('DeleteLFTagExpression');
  }

  /**
   * Grants permission to delete an IAM Identity Center connection with Lake Formation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteLakeFormationIdentityCenterConfiguration.html
   */
  public toDeleteLakeFormationIdentityCenterConfiguration() {
    return this.to('DeleteLakeFormationIdentityCenterConfiguration');
  }

  /**
   * Grants permission to remove the Lake Formation permissions enforcement of the given databases, tables, and principals
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteLakeFormationOptIn.html
   */
  public toDeleteLakeFormationOptIn() {
    return this.to('DeleteLakeFormationOptIn');
  }

  /**
   * Grants permission to delete the specified objects if the transaction is canceled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeleteObjectsOnCancel.html
   */
  public toDeleteObjectsOnCancel() {
    return this.to('DeleteObjectsOnCancel');
  }

  /**
   * Grants permission to deregister a registered location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DeregisterResource.html
   */
  public toDeregisterResource() {
    return this.to('DeregisterResource');
  }

  /**
   * Grants permission to describe the IAM Identity Center connection with Lake Formation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DescribeLakeFormationIdentityCenterConfiguration.html
   */
  public toDescribeLakeFormationIdentityCenterConfiguration() {
    return this.to('DescribeLakeFormationIdentityCenterConfiguration');
  }

  /**
   * Grants permission to describe a registered location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DescribeResource.html
   */
  public toDescribeResource() {
    return this.to('DescribeResource');
  }

  /**
   * Grants permission to get status of the given transaction
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_DescribeTransaction.html
   */
  public toDescribeTransaction() {
    return this.to('DescribeTransaction');
  }

  /**
   * Grants permission to extend the timeout of the given transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ExtendTransaction.html
   */
  public toExtendTransaction() {
    return this.to('ExtendTransaction');
  }

  /**
   * Grants permission to virtual data lake access
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnabledOnlyForMetaDataAccess()
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-underlying-data.html
   */
  public toGetDataAccess() {
    return this.to('GetDataAccess');
  }

  /**
   * Grants permission to retrieve a Lake Formation data cell filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetDataCellsFilter.html
   */
  public toGetDataCellsFilter() {
    return this.to('GetDataCellsFilter');
  }

  /**
   * Grants permission to retrieve the identity of the invoking principal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetDataLakePrincipal.html
   */
  public toGetDataLakePrincipal() {
    return this.to('GetDataLakePrincipal');
  }

  /**
   * Grants permission to retrieve data lake settings such as the list of data lake administrators and database and table default permissions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetDataLakeSettings.html
   */
  public toGetDataLakeSettings() {
    return this.to('GetDataLakeSettings');
  }

  /**
   * Grants permission to retrieve permissions attached to resources in the given path
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetEffectivePermissionsForPath.html
   */
  public toGetEffectivePermissionsForPath() {
    return this.to('GetEffectivePermissionsForPath');
  }

  /**
   * Grants permission to retrieve a Lake Formation tag
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetLFTag.html
   */
  public toGetLFTag() {
    return this.to('GetLFTag');
  }

  /**
   * Grants permission to retrieve a Lake Formation tag expression
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetLFTagExpression.html
   */
  public toGetLFTagExpression() {
    return this.to('GetLFTagExpression');
  }

  /**
   * Grants permission to retrieve the state of the given query
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lakeformation:StartQueryPlanning
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetQueryState.html
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
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetQueryStatistics.html
   */
  public toGetQueryStatistics() {
    return this.to('GetQueryStatistics');
  }

  /**
   * Grants permission to retrieve lakeformation tags on a catalog resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetResourceLFTags.html
   */
  public toGetResourceLFTags() {
    return this.to('GetResourceLFTags');
  }

  /**
   * Grants permission to retrieve objects from a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetTableObjects.html
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
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetWorkUnitResults.html
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
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GetWorkUnits.html
   */
  public toGetWorkUnits() {
    return this.to('GetWorkUnits');
  }

  /**
   * Grants permission to data lake permissions to a principal
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GrantPermissions.html
   */
  public toGrantPermissions() {
    return this.to('GrantPermissions');
  }

  /**
   * Grants permission to list cell filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListDataCellsFilter.html
   */
  public toListDataCellsFilter() {
    return this.to('ListDataCellsFilter');
  }

  /**
   * Grants permission to list Lake Foramtion tag expressions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListLFTagExpressions.html
   */
  public toListLFTagExpressions() {
    return this.to('ListLFTagExpressions');
  }

  /**
   * Grants permission to list Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListLFTags.html
   */
  public toListLFTags() {
    return this.to('ListLFTags');
  }

  /**
   * Grants permission to retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListLakeFormationOptIns.html
   */
  public toListLakeFormationOptIns() {
    return this.to('ListLakeFormationOptIns');
  }

  /**
   * Grants permission to list permissions filtered by principal or resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListPermissions.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Grants permission to List registered locations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to list all the storage optimizers for the Governed table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListTableStorageOptimizers.html
   */
  public toListTableStorageOptimizers() {
    return this.to('ListTableStorageOptimizers');
  }

  /**
   * Grants permission to list all transactions in the system
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_ListTransactions.html
   */
  public toListTransactions() {
    return this.to('ListTransactions');
  }

  /**
   * Grants permission to overwrite data lake settings such as the list of data lake administrators and database and table default permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_PutDataLakeSettings.html
   */
  public toPutDataLakeSettings() {
    return this.to('PutDataLakeSettings');
  }

  /**
   * Grants permission to register a new location to be managed by Lake Formation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_RegisterResource.html
   */
  public toRegisterResource() {
    return this.to('RegisterResource');
  }

  /**
   * Grants permission to register a new location to be managed by Lake Formation, with privileged access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_RegisterResource.html
   */
  public toRegisterResourceWithPrivilegedAccess() {
    return this.to('RegisterResourceWithPrivilegedAccess');
  }

  /**
   * Grants permission to remove lakeformation tags from catalog resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_RemoveLFTagsFromResource.html
   */
  public toRemoveLFTagsFromResource() {
    return this.to('RemoveLFTagsFromResource');
  }

  /**
   * Grants permission to revoke data lake permissions from a principal
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_RevokePermissions.html
   */
  public toRevokePermissions() {
    return this.to('RevokePermissions');
  }

  /**
   * Grants permission to list catalog databases with Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_SearchTablesByLFTags.html
   */
  public toSearchDatabasesByLFTags() {
    return this.to('SearchDatabasesByLFTags');
  }

  /**
   * Grants permission to list catalog tables with Lake Formation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_SearchTablesByLFTags.html
   */
  public toSearchTablesByLFTags() {
    return this.to('SearchTablesByLFTags');
  }

  /**
   * Grants permission to initiate the planning of the given query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_StartQueryPlanning.html
   */
  public toStartQueryPlanning() {
    return this.to('StartQueryPlanning');
  }

  /**
   * Grants permission to start a new transaction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_StartTransaction.html
   */
  public toStartTransaction() {
    return this.to('StartTransaction');
  }

  /**
   * Grants permission to update a Lake Formation data cell filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateDataCellsFilter.html
   */
  public toUpdateDataCellsFilter() {
    return this.to('UpdateDataCellsFilter');
  }

  /**
   * Grants permission to update a Lake Formation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateLFTag.html
   */
  public toUpdateLFTag() {
    return this.to('UpdateLFTag');
  }

  /**
   * Grants permission to update a Lake Formation expression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateLFTagExpression.html
   */
  public toUpdateLFTagExpression() {
    return this.to('UpdateLFTagExpression');
  }

  /**
   * Grants permission to update the IAM Identity Center connection parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateLakeFormationIdentityCenterConfiguration.html
   */
  public toUpdateLakeFormationIdentityCenterConfiguration() {
    return this.to('UpdateLakeFormationIdentityCenterConfiguration');
  }

  /**
   * Grants permission to update a registered location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateResource.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  /**
   * Grants permission to add or delete the specified objects to or from a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateTableObjects.html
   */
  public toUpdateTableObjects() {
    return this.to('UpdateTableObjects');
  }

  /**
   * Grants permission to update the configuration of the storage optimizer for the Governed table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_UpdateTableStorageOptimizer.html
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
      'CreateLFTagExpression',
      'CreateLakeFormationIdentityCenterConfiguration',
      'CreateLakeFormationOptIn',
      'DeleteDataCellsFilter',
      'DeleteLFTag',
      'DeleteLFTagExpression',
      'DeleteLakeFormationIdentityCenterConfiguration',
      'DeleteLakeFormationOptIn',
      'DeleteObjectsOnCancel',
      'DeregisterResource',
      'ExtendTransaction',
      'GetDataAccess',
      'RegisterResource',
      'RegisterResourceWithPrivilegedAccess',
      'StartQueryPlanning',
      'StartTransaction',
      'UpdateDataCellsFilter',
      'UpdateLFTag',
      'UpdateLFTagExpression',
      'UpdateLakeFormationIdentityCenterConfiguration',
      'UpdateResource',
      'UpdateTableObjects',
      'UpdateTableStorageOptimizer'
    ],
    Read: [
      'DescribeLakeFormationIdentityCenterConfiguration',
      'DescribeResource',
      'DescribeTransaction',
      'GetDataCellsFilter',
      'GetDataLakePrincipal',
      'GetDataLakeSettings',
      'GetEffectivePermissionsForPath',
      'GetLFTag',
      'GetLFTagExpression',
      'GetQueryState',
      'GetQueryStatistics',
      'GetResourceLFTags',
      'GetTableObjects',
      'GetWorkUnitResults',
      'GetWorkUnits',
      'ListLFTagExpressions',
      'ListLFTags',
      'SearchDatabasesByLFTags',
      'SearchTablesByLFTags'
    ],
    List: [
      'ListDataCellsFilter',
      'ListLakeFormationOptIns',
      'ListPermissions',
      'ListResources',
      'ListTableStorageOptimizers',
      'ListTransactions'
    ]
  };

  /**
   * Filters access by the presence of the key configured for role's identity-based policy
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html#awslakeformation-policy-keys
   *
   * Applies to actions:
   * - .toGetDataAccess()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnabledOnlyForMetaDataAccess(value?: boolean) {
    return this.if(`EnabledOnlyForMetaDataAccess`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
