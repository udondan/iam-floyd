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
    this.to('AddMemberToGroup');
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
    this.to('CompleteVirtualMfaDeviceRegistration');
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
    this.to('CreateAlias');
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
    this.to('CreateBearerToken');
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
    this.to('CreateExternalIdPConfigurationForDirectory');
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
    this.to('CreateGroup');
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
    this.to('CreateProvisioningTenant');
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
    this.to('CreateUser');
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
    this.to('DeleteBearerToken');
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
    this.to('DeleteExternalIdPCertificate');
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
    this.to('DeleteExternalIdPConfigurationForDirectory');
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
    this.to('DeleteGroup');
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
    this.to('DeleteMfaDeviceForUser');
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
    this.to('DeleteProvisioningTenant');
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
    this.to('DeleteUser');
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
    this.to('DescribeDirectory');
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
    this.to('DescribeGroups');
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
    this.to('DescribeUser');
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
    this.to('DescribeUsers');
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
    this.to('DisableExternalIdPConfigurationForDirectory');
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
    this.to('DisableUser');
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
    this.to('EnableExternalIdPConfigurationForDirectory');
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
    this.to('EnableUser');
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
    this.to('GetAWSSPConfigurationForDirectory');
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
    this.to('ImportExternalIdPCertificate');
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
    this.to('IsMemberInGroup');
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
    this.to('ListBearerTokens');
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
    this.to('ListExternalIdPCertificates');
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
    this.to('ListExternalIdPConfigurationsForDirectory');
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
    this.to('ListGroupsForUser');
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
    this.to('ListMembersInGroup');
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
    this.to('ListMfaDevicesForUser');
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
    this.to('ListProvisioningTenants');
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
    this.to('RemoveMemberFromGroup');
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
    this.to('SearchGroups');
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
    this.to('SearchUsers');
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
    this.to('StartVirtualMfaDeviceRegistration');
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
    this.to('UpdateExternalIdPConfigurationForDirectory');
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
    this.to('UpdateGroup');
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
    this.to('UpdatePassword');
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
    this.to('UpdateUser');
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
    this.to('VerifyEmail');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddMemberToGroup",
      "CompleteVirtualMfaDeviceRegistration",
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
      "UpdateExternalIdPConfigurationForDirectory",
      "UpdateGroup",
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
