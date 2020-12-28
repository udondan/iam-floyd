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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants data lake permissions to one or more principals in a batch.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toBatchGrantPermissions() {
    return this.to('BatchGrantPermissions');
  }

  /**
   * Revokes data lake permissions from one or more principals in a batch.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toBatchRevokePermissions() {
    return this.to('BatchRevokePermissions');
  }

  /**
   * Deregisters a registered location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toDeregisterResource() {
    return this.to('DeregisterResource');
  }

  /**
   * Describes a registered location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toDescribeResource() {
    return this.to('DescribeResource');
  }

  /**
   * Grants virtual data lake access permissions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetDataAccess() {
    return this.to('GetDataAccess');
  }

  /**
   * Retrieves data lake settings such as the list of data lake administrators and database and table default permissions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetDataLakeSettings() {
    return this.to('GetDataLakeSettings');
  }

  /**
   * Retrieves permissions attached to resources in the given path.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetEffectivePermissionsForPath() {
    return this.to('GetEffectivePermissionsForPath');
  }

  /**
   * Grants data lake permissions to a principal.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGrantPermissions() {
    return this.to('GrantPermissions');
  }

  /**
   * Lists permissions filtered by principal or resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Lists registered locations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Overwrites data lake settings such as the list of data lake administrators and database and table default permissions.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toPutDataLakeSettings() {
    return this.to('PutDataLakeSettings');
  }

  /**
   * Registers a new location to be managed by Lake Formation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toRegisterResource() {
    return this.to('RegisterResource');
  }

  /**
   * Revokes data lake permissions from a principal.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toRevokePermissions() {
    return this.to('RevokePermissions');
  }

  /**
   * Updates a registered location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "BatchGrantPermissions",
      "BatchRevokePermissions",
      "GrantPermissions",
      "PutDataLakeSettings",
      "RevokePermissions"
    ],
    "Write": [
      "DeregisterResource",
      "GetDataAccess",
      "RegisterResource",
      "UpdateResource"
    ],
    "Read": [
      "DescribeResource",
      "GetDataLakeSettings",
      "GetEffectivePermissionsForPath"
    ],
    "List": [
      "ListPermissions",
      "ListResources"
    ]
  };
}
