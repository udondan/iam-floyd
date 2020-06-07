import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service lakeformation
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslakeformation.html
 */
export class Lakeformation extends PolicyStatement {
    public servicePrefix = 'lakeformation';
    public actions : Actions = {
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

    /**
     * Grants data lake permissions to one or more principals in a batch.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public batchGrantPermissions () {
        this.add('lakeformation:BatchGrantPermissions');
        return this;
    }

    /**
     * Revokes data lake permissions from one or more principals in a batch.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public batchRevokePermissions () {
        this.add('lakeformation:BatchRevokePermissions');
        return this;
    }

    /**
     * Deregisters a registered location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public deregisterResource () {
        this.add('lakeformation:DeregisterResource');
        return this;
    }

    /**
     * Describes a registered location.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public describeResource () {
        this.add('lakeformation:DescribeResource');
        return this;
    }

    /**
     * Grants virtual data lake access permissions.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public getDataAccess () {
        this.add('lakeformation:GetDataAccess');
        return this;
    }

    /**
     * Retrieves data lake settings such as the list of data lake administrators and database and table default permissions.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public getDataLakeSettings () {
        this.add('lakeformation:GetDataLakeSettings');
        return this;
    }

    /**
     * Retrieves permissions attached to resources in the given path.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public getEffectivePermissionsForPath () {
        this.add('lakeformation:GetEffectivePermissionsForPath');
        return this;
    }

    /**
     * Grants data lake permissions to a principal.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public grantPermissions () {
        this.add('lakeformation:GrantPermissions');
        return this;
    }

    /**
     * Lists permissions filtered by principal or resource.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public listPermissions () {
        this.add('lakeformation:ListPermissions');
        return this;
    }

    /**
     * Lists registered locations.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public listResources () {
        this.add('lakeformation:ListResources');
        return this;
    }

    /**
     * Overwrites data lake settings such as the list of data lake administrators and database and table default permissions.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public putDataLakeSettings () {
        this.add('lakeformation:PutDataLakeSettings');
        return this;
    }

    /**
     * Registers a new location to be managed by Lake Formation.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public registerResource () {
        this.add('lakeformation:RegisterResource');
        return this;
    }

    /**
     * Revokes data lake permissions from a principal.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public revokePermissions () {
        this.add('lakeformation:RevokePermissions');
        return this;
    }

    /**
     * Updates a registered location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api.html
     */
    public updateResource () {
        this.add('lakeformation:UpdateResource');
        return this;
    }
}
