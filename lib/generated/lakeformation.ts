import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * Grants permission to attach lakeformation tags to catalog resources
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
   * Grants permission to create a Lakeformation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-CreateLFTag
   */
  public toCreateLFTag() {
    return this.to('CreateLFTag');
  }

  /**
   * Grants permission to delete a Lakeformation tag
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeleteLFTag
   */
  public toDeleteLFTag() {
    return this.to('DeleteLFTag');
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
   * Grants permission to retrive permissions attached to resources in the given path
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetEffectivePermissionsForPath
   */
  public toGetEffectivePermissionsForPath() {
    return this.to('GetEffectivePermissionsForPath');
  }

  /**
   * Grants permission to retrive a Lakeformation tag
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetLFTag
   */
  public toGetLFTag() {
    return this.to('GetLFTag');
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
   * Grants permission to list Lakeformation tags
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
   * Grants permission to list catalog databases with lakeformation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchDatabasesByLFTags
   */
  public toSearchDatabasesByLFTags() {
    return this.to('SearchDatabasesByLFTags');
  }

  /**
   * Grants permission to list catalog tables with lakeformation tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchTablesByLFTags
   */
  public toSearchTablesByLFTags() {
    return this.to('SearchTablesByLFTags');
  }

  /**
   * Grants permission to update a Lakeformation tag
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
      'CreateLFTag',
      'DeleteLFTag',
      'DeregisterResource',
      'GetDataAccess',
      'RegisterResource',
      'UpdateLFTag',
      'UpdateResource'
    ],
    Read: [
      'DescribeResource',
      'GetDataLakeSettings',
      'GetEffectivePermissionsForPath',
      'GetLFTag',
      'GetResourceLFTags',
      'ListLFTags',
      'SearchDatabasesByLFTags',
      'SearchTablesByLFTags'
    ],
    List: [
      'ListPermissions',
      'ListResources'
    ]
  };
}
