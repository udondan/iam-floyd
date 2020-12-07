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
    this.to('lakeformation:BatchGrantPermissions');
    return this;
  }

  /**
   * Revokes data lake permissions from one or more principals in a batch.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toBatchRevokePermissions() {
    this.to('lakeformation:BatchRevokePermissions');
    return this;
  }

  /**
   * Deregisters a registered location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toDeregisterResource() {
    this.to('lakeformation:DeregisterResource');
    return this;
  }

  /**
   * Describes a registered location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toDescribeResource() {
    this.to('lakeformation:DescribeResource');
    return this;
  }

  /**
   * Grants virtual data lake access permissions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetDataAccess() {
    this.to('lakeformation:GetDataAccess');
    return this;
  }

  /**
   * Retrieves data lake settings such as the list of data lake administrators and database and table default permissions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetDataLakeSettings() {
    this.to('lakeformation:GetDataLakeSettings');
    return this;
  }

  /**
   * Retrieves permissions attached to resources in the given path.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGetEffectivePermissionsForPath() {
    this.to('lakeformation:GetEffectivePermissionsForPath');
    return this;
  }

  /**
   * Grants data lake permissions to a principal.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toGrantPermissions() {
    this.to('lakeformation:GrantPermissions');
    return this;
  }

  /**
   * Lists permissions filtered by principal or resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toListPermissions() {
    this.to('lakeformation:ListPermissions');
    return this;
  }

  /**
   * Lists registered locations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toListResources() {
    this.to('lakeformation:ListResources');
    return this;
  }

  /**
   * Overwrites data lake settings such as the list of data lake administrators and database and table default permissions.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toPutDataLakeSettings() {
    this.to('lakeformation:PutDataLakeSettings');
    return this;
  }

  /**
   * Registers a new location to be managed by Lake Formation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toRegisterResource() {
    this.to('lakeformation:RegisterResource');
    return this;
  }

  /**
   * Revokes data lake permissions from a principal.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toRevokePermissions() {
    this.to('lakeformation:RevokePermissions');
    return this;
  }

  /**
   * Updates a registered location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
   */
  public toUpdateResource() {
    this.to('lakeformation:UpdateResource');
    return this;
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

export type LakeformationActionsPermissions management = 'BatchGrantPermissions' | 'BatchRevokePermissions' | 'GrantPermissions' | 'PutDataLakeSettings' | 'RevokePermissions';

export type LakeformationActionsWrite = 'DeregisterResource' | 'GetDataAccess' | 'RegisterResource' | 'UpdateResource';
export type LakeformationActionsRead = 'DescribeResource' | 'GetDataLakeSettings' | 'GetEffectivePermissionsForPath';
export type LakeformationActionsList = 'ListPermissions' | 'ListResources';
export type LakeformationActions = LakeformationActionsPermissions management | LakeformationActionsWrite | LakeformationActionsRead | LakeformationActionsList;
