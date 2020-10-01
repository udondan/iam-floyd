import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sso-directory](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsssodirectory.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsoDirectory extends PolicyStatement {
  public servicePrefix = 'sso-directory';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [sso-directory](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsssodirectory.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds member to the group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAddMemberToGroup() {
    this.to('sso-directory:AddMemberToGroup');
    return this;
  }

  /**
   * Completes the creation process of a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCompleteVirtualMfaDeviceRegistration() {
    this.to('sso-directory:CompleteVirtualMfaDeviceRegistration');
    return this;
  }

  /**
   * Creates an alias for the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateAlias() {
    this.to('sso-directory:CreateAlias');
    return this;
  }

  /**
   * Creates a bearer token for a given provisioning tenant.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateBearerToken() {
    this.to('sso-directory:CreateBearerToken');
    return this;
  }

  /**
   * Create an External Identity Provider configuration for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateExternalIdPConfigurationForDirectory() {
    this.to('sso-directory:CreateExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Creates a group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateGroup() {
    this.to('sso-directory:CreateGroup');
    return this;
  }

  /**
   * Creates a provisioning tenant for a given directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateProvisioningTenant() {
    this.to('sso-directory:CreateProvisioningTenant');
    return this;
  }

  /**
   * Creates a user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateUser() {
    this.to('sso-directory:CreateUser');
    return this;
  }

  /**
   * Deletes the bearer token.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteBearerToken() {
    this.to('sso-directory:DeleteBearerToken');
    return this;
  }

  /**
   * Delete an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteExternalIdPConfigurationForDirectory() {
    this.to('sso-directory:DeleteExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Deletes a group from the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteGroup() {
    this.to('sso-directory:DeleteGroup');
    return this;
  }

  /**
   * Deletes a MFA device by device name for a given user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteMfaDeviceForUser() {
    this.to('sso-directory:DeleteMfaDeviceForUser');
    return this;
  }

  /**
   * Deletes the provisioning tenant.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProvisioningTenant() {
    this.to('sso-directory:DeleteProvisioningTenant');
    return this;
  }

  /**
   * Deletes a user from the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteUser() {
    this.to('sso-directory:DeleteUser');
    return this;
  }

  /**
   * Retrieve information about the directory that AWS SSO provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeDirectory() {
    this.to('sso-directory:DescribeDirectory');
    return this;
  }

  /**
   * Retrieves information about group from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeGroups() {
    this.to('sso-directory:DescribeGroups');
    return this;
  }

  /**
   * Retrieves information about user from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeUsers() {
    this.to('sso-directory:DescribeUsers');
    return this;
  }

  /**
   * Disable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisableExternalIdPConfigurationForDirectory() {
    this.to('sso-directory:DisableExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Deactivates user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisableUser() {
    this.to('sso-directory:DisableUser');
    return this;
  }

  /**
   * Enable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toEnableExternalIdPConfigurationForDirectory() {
    this.to('sso-directory:EnableExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Activates user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toEnableUser() {
    this.to('sso-directory:EnableUser');
    return this;
  }

  /**
   * Retrieve the AWS SSO Service Provider configurations for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetAWSSPConfigurationForDirectory() {
    this.to('sso-directory:GetAWSSPConfigurationForDirectory');
    return this;
  }

  /**
   * Lists bearer tokens for a given provisioning tenant.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListBearerTokens() {
    this.to('sso-directory:ListBearerTokens');
    return this;
  }

  /**
   * List all the External Identity Provider configurations created for the directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListExternalIdPConfigurationsForDirectory() {
    this.to('sso-directory:ListExternalIdPConfigurationsForDirectory');
    return this;
  }

  /**
   * Lists groups for a user from the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListGroupsForUser() {
    this.to('sso-directory:ListGroupsForUser');
    return this;
  }

  /**
   * Retrieves all members that are part of the group in the directory that AWS SSO provides by default
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListMembersInGroup() {
    this.to('sso-directory:ListMembersInGroup');
    return this;
  }

  /**
   * Lists all active MFA devices and their MFA device metadata for a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListMfaDevicesForUser() {
    this.to('sso-directory:ListMfaDevicesForUser');
    return this;
  }

  /**
   * Lists provisioning tenants for a given directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProvisioningTenants() {
    this.to('sso-directory:ListProvisioningTenants');
    return this;
  }

  /**
   * Removes member that are part of the group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toRemoveMemberFromGroup() {
    this.to('sso-directory:RemoveMemberFromGroup');
    return this;
  }

  /**
   * Search for groups within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchGroups() {
    this.to('sso-directory:SearchGroups');
    return this;
  }

  /**
   * Search for users within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchUsers() {
    this.to('sso-directory:SearchUsers');
    return this;
  }

  /**
   * Begins the creation process of virtual mfa device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartVirtualMfaDeviceRegistration() {
    this.to('sso-directory:StartVirtualMfaDeviceRegistration');
    return this;
  }

  /**
   * Update an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateExternalIdPConfigurationForDirectory() {
    this.to('sso-directory:UpdateExternalIdPConfigurationForDirectory');
    return this;
  }

  /**
   * Updates information about group in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateGroup() {
    this.to('sso-directory:UpdateGroup');
    return this;
  }

  /**
   * Updates password by sending password reset link via email or generating one time password for a user in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdatePassword() {
    this.to('sso-directory:UpdatePassword');
    return this;
  }

  /**
   * Updates user information in the directory that AWS SSO provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateUser() {
    this.to('sso-directory:UpdateUser');
    return this;
  }

  /**
   * Verify email address of an User
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toVerifyEmail() {
    this.to('sso-directory:VerifyEmail');
    return this;
  }
}
