import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [sso-directory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsssodirectory.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsoDirectory extends PolicyStatement {
  public servicePrefix = 'sso-directory';

  /**
   * Statement provider for service [sso-directory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsssodirectory.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a member to a group in the directory that AWS SSO provides by default
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
   * Grants permission to complete the creation process of a virtual MFA device
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
   * Grants permission to complete the registration process of a WebAuthn device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCompleteWebAuthnDeviceRegistration() {
    this.to('sso-directory:CompleteWebAuthnDeviceRegistration');
    return this;
  }

  /**
   * Grants permission to create an alias for the directory that AWS SSO provides by default
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
   * Grants permission to create a bearer token for a given provisioning tenant
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
   * Grants permission to create an External Identity Provider configuration for the directory
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
   * Grants permission to create a group in the directory that AWS SSO provides by default
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
   * Grants permission to create a provisioning tenant for a given directory
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
   * Grants permission to create a user in the directory that AWS SSO provides by default
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
   * Grants permission to delete a bearer token
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
   * Grants permission to delete the given external IdP certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteExternalIdPCertificate() {
    this.to('sso-directory:DeleteExternalIdPCertificate');
    return this;
  }

  /**
   * Grants permission to delete an External Identity Provider configuration associated with the directory
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
   * Grants permission to delete a group from the directory that AWS SSO provides by default
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
   * Grants permission to delete a MFA device by device name for a given user
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
   * Grants permission to delete the provisioning tenant
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
   * Grants permission to delete a user from the directory that AWS SSO provides by default
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
   * Grants permission to retrieve information about the directory that AWS SSO provides by default
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
   * Grants permission to retrieve information about a group from the directory that AWS SSO provides by default
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
   * Grants permission to retrieve information about a user from the directory that AWS SSO provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeUser() {
    this.to('sso-directory:DescribeUser');
    return this;
  }

  /**
   * Grants permission to retrieve information about user from the directory that AWS SSO provides by default
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
   * Grants permission to disable authentication of end users with an External Identity Provider
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
   * Grants permission to deactivate a user in the directory that AWS SSO provides by default
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
   * Grants permission to enable authentication of end users with an External Identity Provider
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
   * Grants permission to activate user in the directory that AWS SSO provides by default
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
   * Grants permission to retrieve the AWS SSO Service Provider configurations for the directory
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
   * Grants permission to import the IdP certificate used for verifying external IdP responses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportExternalIdPCertificate() {
    this.to('sso-directory:ImportExternalIdPCertificate');
    return this;
  }

  /**
   * Grants permission to check if a member is a part of the group in the directory that AWS SSO provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toIsMemberInGroup() {
    this.to('sso-directory:IsMemberInGroup');
    return this;
  }

  /**
   * Grants permission to list bearer tokens for a given provisioning tenant
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
   * Grants permission to list the external IdP certificates of a given directory and IdP
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListExternalIdPCertificates() {
    this.to('sso-directory:ListExternalIdPCertificates');
    return this;
  }

  /**
   * Grants permission to list all the External Identity Provider configurations created for the directory
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
   * Grants permission to list groups for a user from the directory that AWS SSO provides by default
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
   * Grants permission to retrieve all members that are part of a group in the directory that AWS SSO provides by default
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
   * Grants permission to list all active MFA devices and their MFA device metadata for a user
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
   * Grants permission to list provisioning tenants for a given directory
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
   * Grants permission to remove a member that is part of a group in the directory that AWS SSO provides by default
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
   * Grants permission to search for groups within the associated directory
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
   * Grants permission to search for users within the associated directory
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
   * Grants permission to begin the creation process of virtual mfa device
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
   * Grants permission to begin the registration process of a WebAuthn device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartWebAuthnDeviceRegistration() {
    this.to('sso-directory:StartWebAuthnDeviceRegistration');
    return this;
  }

  /**
   * Grants permission to update an External Identity Provider configuration associated with the directory
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
   * Grants permission to update information about a group in the directory that AWS SSO provides by default
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
   * Grants permission to update MFA device information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateMfaDeviceForUser() {
    this.to('sso-directory:UpdateMfaDeviceForUser');
    return this;
  }

  /**
   * Grants permission to update a password by sending password reset link via email or generating one time password for a user in the directory that AWS SSO provides by default
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
   * Grants permission to update user information in the directory that AWS SSO provides by default
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
   * Grants permission to verify an email address of an User
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toVerifyEmail() {
    this.to('sso-directory:VerifyEmail');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddMemberToGroup",
      "CompleteVirtualMfaDeviceRegistration",
      "CompleteWebAuthnDeviceRegistration",
      "CreateAlias",
      "CreateBearerToken",
      "CreateExternalIdPConfigurationForDirectory",
      "CreateGroup",
      "CreateProvisioningTenant",
      "CreateUser",
      "DeleteBearerToken",
      "DeleteExternalIdPCertificate",
      "DeleteExternalIdPConfigurationForDirectory",
      "DeleteGroup",
      "DeleteMfaDeviceForUser",
      "DeleteProvisioningTenant",
      "DeleteUser",
      "DisableExternalIdPConfigurationForDirectory",
      "DisableUser",
      "EnableExternalIdPConfigurationForDirectory",
      "EnableUser",
      "ImportExternalIdPCertificate",
      "RemoveMemberFromGroup",
      "StartVirtualMfaDeviceRegistration",
      "StartWebAuthnDeviceRegistration",
      "UpdateExternalIdPConfigurationForDirectory",
      "UpdateGroup",
      "UpdateMfaDeviceForUser",
      "UpdatePassword",
      "UpdateUser",
      "VerifyEmail"
    ],
    "Read": [
      "DescribeDirectory",
      "DescribeUser",
      "GetAWSSPConfigurationForDirectory",
      "IsMemberInGroup",
      "SearchGroups",
      "SearchUsers"
    ],
    "List": [
      "DescribeGroups",
      "DescribeUsers",
      "ListBearerTokens",
      "ListExternalIdPCertificates",
      "ListExternalIdPConfigurationsForDirectory",
      "ListGroupsForUser",
      "ListMembersInGroup",
      "ListMfaDevicesForUser",
      "ListProvisioningTenants"
    ]
  };
}

export type SsoDirectoryActionsWrite = 'AddMemberToGroup' | 'CompleteVirtualMfaDeviceRegistration' | 'CompleteWebAuthnDeviceRegistration' | 'CreateAlias' | 'CreateBearerToken' | 'CreateExternalIdPConfigurationForDirectory' | 'CreateGroup' | 'CreateProvisioningTenant' | 'CreateUser' | 'DeleteBearerToken' | 'DeleteExternalIdPCertificate' | 'DeleteExternalIdPConfigurationForDirectory' | 'DeleteGroup' | 'DeleteMfaDeviceForUser' | 'DeleteProvisioningTenant' | 'DeleteUser' | 'DisableExternalIdPConfigurationForDirectory' | 'DisableUser' | 'EnableExternalIdPConfigurationForDirectory' | 'EnableUser' | 'ImportExternalIdPCertificate' | 'RemoveMemberFromGroup' | 'StartVirtualMfaDeviceRegistration' | 'StartWebAuthnDeviceRegistration' | 'UpdateExternalIdPConfigurationForDirectory' | 'UpdateGroup' | 'UpdateMfaDeviceForUser' | 'UpdatePassword' | 'UpdateUser' | 'VerifyEmail';
export type SsoDirectoryActionsRead = 'DescribeDirectory' | 'DescribeUser' | 'GetAWSSPConfigurationForDirectory' | 'IsMemberInGroup' | 'SearchGroups' | 'SearchUsers';
export type SsoDirectoryActionsList = 'DescribeGroups' | 'DescribeUsers' | 'ListBearerTokens' | 'ListExternalIdPCertificates' | 'ListExternalIdPConfigurationsForDirectory' | 'ListGroupsForUser' | 'ListMembersInGroup' | 'ListMfaDevicesForUser' | 'ListProvisioningTenants';
export type SsoDirectoryActions = SsoDirectoryActionsWrite | SsoDirectoryActionsRead | SsoDirectoryActionsList;
