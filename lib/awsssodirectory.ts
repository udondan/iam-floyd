import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service sso-directory
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsssodirectory.html
 */
export class SsoDirectory extends PolicyStatement {
  public servicePrefix = 'sso-directory';
  public actions : Actions = {
    "AddMemberToGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Adds member to the group in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "CompleteVirtualMfaDeviceRegistration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Completes the creation process of a virtual MFA device",
      "accessLevel": "Write"
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Creates an alias for the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "CreateBearerToken": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Creates a bearer token for a given provisioning tenant.",
      "accessLevel": "Write"
    },
    "CreateExternalIdPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Create an External Identity Provider configuration for the directory",
      "accessLevel": "Write"
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Creates a group in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "CreateProvisioningTenant": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Creates a provisioning tenant for a given directory.",
      "accessLevel": "Write"
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Creates a user in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "DeleteBearerToken": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes the bearer token.",
      "accessLevel": "Write"
    },
    "DeleteExternalIdPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete an External Identity Provider configuration associated with the directory",
      "accessLevel": "Write"
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes a group from the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "DeleteMfaDeviceForUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes a MFA device by device name for a given user",
      "accessLevel": "Write"
    },
    "DeleteProvisioningTenant": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes the provisioning tenant.",
      "accessLevel": "Write"
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes a user from the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "DescribeDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve information about the directory that AWS SSO provides by default",
      "accessLevel": "Read"
    },
    "DescribeGroups": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieves information about group from the directory that AWS SSO provides by default",
      "accessLevel": "List"
    },
    "DescribeUsers": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieves information about user from the directory that AWS SSO provides by default",
      "accessLevel": "List"
    },
    "DisableExternalIdPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Disable authentication of end users with an External Identity Provider",
      "accessLevel": "Write"
    },
    "DisableUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deactivates user in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "EnableExternalIdPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Enable authentication of end users with an External Identity Provider",
      "accessLevel": "Write"
    },
    "EnableUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Activates user in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "GetAWSSPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve the AWS SSO Service Provider configurations for the directory",
      "accessLevel": "Read"
    },
    "ListBearerTokens": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists bearer tokens for a given provisioning tenant.",
      "accessLevel": "List"
    },
    "ListExternalIdPConfigurationsForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "List all the External Identity Provider configurations created for the directory",
      "accessLevel": "List"
    },
    "ListGroupsForUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists groups for a user from the directory that AWS SSO provides by default",
      "accessLevel": "List"
    },
    "ListMembersInGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieves all members that are part of the group in the directory that AWS SSO provides by default",
      "accessLevel": "List"
    },
    "ListMfaDevicesForUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists all active MFA devices and their MFA device metadata for a user",
      "accessLevel": "List"
    },
    "ListProvisioningTenants": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists provisioning tenants for a given directory.",
      "accessLevel": "List"
    },
    "RemoveMemberFromGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Removes member that are part of the group in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "SearchGroups": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Search for groups within the associated directory",
      "accessLevel": "Read"
    },
    "SearchUsers": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Search for users within the associated directory",
      "accessLevel": "Read"
    },
    "StartVirtualMfaDeviceRegistration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Begins the creation process of virtual mfa device",
      "accessLevel": "Write"
    },
    "UpdateExternalIdPConfigurationForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update an External Identity Provider configuration associated with the directory",
      "accessLevel": "Write"
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Updates information about group in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "UpdatePassword": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Updates password by sending password reset link via email or generating one time password for a user in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Updates user information in the directory that AWS SSO provides by default",
      "accessLevel": "Write"
    },
    "VerifyEmail": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Verify email address of an User",
      "accessLevel": "Write"
    }
  };

  /**
   * Adds member to the group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public addMemberToGroup () {
    this.add('sso-directory:AddMemberToGroup');
    return this;
  }

  /**
   * Completes the creation process of a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public completeVirtualMfaDeviceRegistration () {
    this.add('sso-directory:CompleteVirtualMfaDeviceRegistration');
    return this;
  }

  /**
   * Creates an alias for the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createAlias () {
    this.add('sso-directory:CreateAlias');
    return this;
  }

  /**
   * Creates a bearer token for a given provisioning tenant.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createBearerToken () {
    this.add('sso-directory:CreateBearerToken');
    return this;
  }

  /**
   * Create an External Identity Provider configuration for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createExternalIdPConfigurationForDirectory () {
    this.add('sso-directory:CreateExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Creates a group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createGroup () {
    this.add('sso-directory:CreateGroup');
    return this;
  }

  /**
   * Creates a provisioning tenant for a given directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createProvisioningTenant () {
    this.add('sso-directory:CreateProvisioningTenant');
    return this;
  }

  /**
   * Creates a user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createUser () {
    this.add('sso-directory:CreateUser');
    return this;
  }

  /**
   * Deletes the bearer token.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteBearerToken () {
    this.add('sso-directory:DeleteBearerToken');
    return this;
  }

  /**
   * Delete an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteExternalIdPConfigurationForDirectory () {
    this.add('sso-directory:DeleteExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Deletes a group from the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteGroup () {
    this.add('sso-directory:DeleteGroup');
    return this;
  }

  /**
   * Deletes a MFA device by device name for a given user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteMfaDeviceForUser () {
    this.add('sso-directory:DeleteMfaDeviceForUser');
    return this;
  }

  /**
   * Deletes the provisioning tenant.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteProvisioningTenant () {
    this.add('sso-directory:DeleteProvisioningTenant');
    return this;
  }

  /**
   * Deletes a user from the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteUser () {
    this.add('sso-directory:DeleteUser');
    return this;
  }

  /**
   * Retrieve information about the directory that AWS SSO provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public describeDirectory () {
    this.add('sso-directory:DescribeDirectory');
    return this;
  }

  /**
   * Retrieves information about group from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public describeGroups () {
    this.add('sso-directory:DescribeGroups');
    return this;
  }

  /**
   * Retrieves information about user from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public describeUsers () {
    this.add('sso-directory:DescribeUsers');
    return this;
  }

  /**
   * Disable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public disableExternalIdPConfigurationForDirectory () {
    this.add('sso-directory:DisableExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Deactivates user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public disableUser () {
    this.add('sso-directory:DisableUser');
    return this;
  }

  /**
   * Enable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public enableExternalIdPConfigurationForDirectory () {
    this.add('sso-directory:EnableExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Activates user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public enableUser () {
    this.add('sso-directory:EnableUser');
    return this;
  }

  /**
   * Retrieve the AWS SSO Service Provider configurations for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getAWSSPConfigurationForDirectory () {
    this.add('sso-directory:GetAWSSPConfigurationForDirectory');
    return this;
  }

  /**
   * Lists bearer tokens for a given provisioning tenant.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listBearerTokens () {
    this.add('sso-directory:ListBearerTokens');
    return this;
  }

  /**
   * List all the External Identity Provider configurations created for the directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listExternalIdPConfigurationsForDirectory () {
    this.add('sso-directory:ListExternalIdPConfigurationsForDirectory');
    return this;
  }

  /**
   * Lists groups for a user from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listGroupsForUser () {
    this.add('sso-directory:ListGroupsForUser');
    return this;
  }

  /**
   * Retrieves all members that are part of the group in the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listMembersInGroup () {
    this.add('sso-directory:ListMembersInGroup');
    return this;
  }

  /**
   * Lists all active MFA devices and their MFA device metadata for a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listMfaDevicesForUser () {
    this.add('sso-directory:ListMfaDevicesForUser');
    return this;
  }

  /**
   * Lists provisioning tenants for a given directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listProvisioningTenants () {
    this.add('sso-directory:ListProvisioningTenants');
    return this;
  }

  /**
   * Removes member that are part of the group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public removeMemberFromGroup () {
    this.add('sso-directory:RemoveMemberFromGroup');
    return this;
  }

  /**
   * Search for groups within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public searchGroups () {
    this.add('sso-directory:SearchGroups');
    return this;
  }

  /**
   * Search for users within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public searchUsers () {
    this.add('sso-directory:SearchUsers');
    return this;
  }

  /**
   * Begins the creation process of virtual mfa device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public startVirtualMfaDeviceRegistration () {
    this.add('sso-directory:StartVirtualMfaDeviceRegistration');
    return this;
  }

  /**
   * Update an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateExternalIdPConfigurationForDirectory () {
    this.add('sso-directory:UpdateExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Updates information about group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateGroup () {
    this.add('sso-directory:UpdateGroup');
    return this;
  }

  /**
   * Updates password by sending password reset link via email or generating one time password for a user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updatePassword () {
    this.add('sso-directory:UpdatePassword');
    return this;
  }

  /**
   * Updates user information in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateUser () {
    this.add('sso-directory:UpdateUser');
    return this;
  }

  /**
   * Verify email address of an User
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public verifyEmail () {
    this.add('sso-directory:VerifyEmail');
    return this;
  }
}
