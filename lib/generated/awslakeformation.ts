import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [lakeformation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslakeformation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lakeformation extends PolicyStatement {
  public servicePrefix = 'lakeformation';
  protected actionList: Actions = {
    "BatchGrantPermissions": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Grants data lake permissions to one or more principals in a batch.",
      "accessLevel": "Permissions management"
    },
    "BatchRevokePermissions": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Revokes data lake permissions from one or more principals in a batch.",
      "accessLevel": "Permissions management"
    },
    "DeregisterResource": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Deregisters a registered location.",
      "accessLevel": "Write"
    },
    "DescribeResource": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Describes a registered location.",
      "accessLevel": "Read"
    },
    "GetDataAccess": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Grants virtual data lake access permissions.",
      "accessLevel": "Write"
    },
    "GetDataLakeSettings": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Retrieves data lake settings such as the list of data lake administrators and database and table default permissions.",
      "accessLevel": "Read"
    },
    "GetEffectivePermissionsForPath": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Retrieves permissions attached to resources in the given path.",
      "accessLevel": "Read"
    },
    "GrantPermissions": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Grants data lake permissions to a principal.",
      "accessLevel": "Permissions management"
    },
    "ListPermissions": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Lists permissions filtered by principal or resource.",
      "accessLevel": "List"
    },
    "ListResources": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Lists registered locations.",
      "accessLevel": "List"
    },
    "PutDataLakeSettings": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Overwrites data lake settings such as the list of data lake administrators and database and table default permissions.",
      "accessLevel": "Permissions management"
    },
    "RegisterResource": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Registers a new location to be managed by Lake Formation.",
      "accessLevel": "Write"
    },
    "RevokePermissions": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Revokes data lake permissions from a principal.",
      "accessLevel": "Permissions management"
    },
    "UpdateResource": {
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html",
      "description": "Updates a registered location.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [lakeformation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslakeformation.html).
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
}
