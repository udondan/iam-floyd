import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [sso-directory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-ondirectory.html).
 *
 * @param options - Options for the statement
 */
export class SsoDirectory extends PolicyStatement {
  public servicePrefix = 'sso-directory';

  /**
   * Statement provider for service [sso-directory](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-ondirectory.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add a member to a group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAddMemberToGroup() {
    return this.to('AddMemberToGroup');
  }

  /**
   * Grants permission to complete the creation process of a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCompleteVirtualMfaDeviceRegistration() {
    return this.to('CompleteVirtualMfaDeviceRegistration');
  }

  /**
   * Grants permission to complete the registration process of a WebAuthn device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCompleteWebAuthnDeviceRegistration() {
    return this.to('CompleteWebAuthnDeviceRegistration');
  }

  /**
   * Grants permission to create an alias for the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Grants permission to create a bearer token for a given provisioning tenant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateBearerToken() {
    return this.to('CreateBearerToken');
  }

  /**
   * Grants permission to create an External Identity Provider configuration for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateExternalIdPConfigurationForDirectory() {
    return this.to('CreateExternalIdPConfigurationForDirectory');
  }

  /**
   * Grants permission to create a group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a provisioning tenant for a given directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateProvisioningTenant() {
    return this.to('CreateProvisioningTenant');
  }

  /**
   * Grants permission to create a user in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a bearer token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteBearerToken() {
    return this.to('DeleteBearerToken');
  }

  /**
   * Grants permission to delete the given external IdP certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteExternalIdPCertificate() {
    return this.to('DeleteExternalIdPCertificate');
  }

  /**
   * Grants permission to delete an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteExternalIdPConfigurationForDirectory() {
    return this.to('DeleteExternalIdPConfigurationForDirectory');
  }

  /**
   * Grants permission to delete a group from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete a MFA device by device name for a given user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteMfaDeviceForUser() {
    return this.to('DeleteMfaDeviceForUser');
  }

  /**
   * Grants permission to delete the provisioning tenant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProvisioningTenant() {
    return this.to('DeleteProvisioningTenant');
  }

  /**
   * Grants permission to delete a user from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to retrieve information about the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeDirectory() {
    return this.to('DescribeDirectory');
  }

  /**
   * Grants permission to query the group data, not including user and group members
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to retrieve information about groups from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeGroups() {
    return this.to('DescribeGroups');
  }

  /**
   * Grants permission to describes the provisioning tenant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeProvisioningTenant() {
    return this.to('DescribeProvisioningTenant');
  }

  /**
   * Grants permission to retrieve information about a user from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to describe user with a valid unique attribute represented for the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeUserByUniqueAttribute() {
    return this.to('DescribeUserByUniqueAttribute');
  }

  /**
   * Grants permission to retrieve information about user from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeUsers() {
    return this.to('DescribeUsers');
  }

  /**
   * Grants permission to disable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisableExternalIdPConfigurationForDirectory() {
    return this.to('DisableExternalIdPConfigurationForDirectory');
  }

  /**
   * Grants permission to deactivate a user in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisableUser() {
    return this.to('DisableUser');
  }

  /**
   * Grants permission to enable authentication of end users with an External Identity Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toEnableExternalIdPConfigurationForDirectory() {
    return this.to('EnableExternalIdPConfigurationForDirectory');
  }

  /**
   * Grants permission to activate user in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toEnableUser() {
    return this.to('EnableUser');
  }

  /**
   * Grants permission to retrieve the AWS IAM Identity Center Service Provider configurations for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetAWSSPConfigurationForDirectory() {
    return this.to('GetAWSSPConfigurationForDirectory');
  }

  /**
   * (Deprecated) Grants permission to get UserPool Info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetUserPoolInfo() {
    return this.to('GetUserPoolInfo');
  }

  /**
   * Grants permission to import the IdP certificate used for verifying external IdP responses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportExternalIdPCertificate() {
    return this.to('ImportExternalIdPCertificate');
  }

  /**
   * Grants permission to check if a member is a part of the group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toIsMemberInGroup() {
    return this.to('IsMemberInGroup');
  }

  /**
   * Grants permission to list bearer tokens for a given provisioning tenant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListBearerTokens() {
    return this.to('ListBearerTokens');
  }

  /**
   * Grants permission to list the external IdP certificates of a given directory and IdP
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListExternalIdPCertificates() {
    return this.to('ListExternalIdPCertificates');
  }

  /**
   * Grants permission to list all the External Identity Provider configurations created for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListExternalIdPConfigurationsForDirectory() {
    return this.to('ListExternalIdPConfigurationsForDirectory');
  }

  /**
   * Grants permission to list groups of the target member
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListGroupsForMember() {
    return this.to('ListGroupsForMember');
  }

  /**
   * Grants permission to list groups for a user from the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListGroupsForUser() {
    return this.to('ListGroupsForUser');
  }

  /**
   * Grants permission to retrieve all members that are part of a group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListMembersInGroup() {
    return this.to('ListMembersInGroup');
  }

  /**
   * Grants permission to list all active MFA devices and their MFA device metadata for a user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListMfaDevicesForUser() {
    return this.to('ListMfaDevicesForUser');
  }

  /**
   * Grants permission to list provisioning tenants for a given directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProvisioningTenants() {
    return this.to('ListProvisioningTenants');
  }

  /**
   * Grants permission to remove a member that is part of a group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toRemoveMemberFromGroup() {
    return this.to('RemoveMemberFromGroup');
  }

  /**
   * Grants permission to search for groups within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchGroups() {
    return this.to('SearchGroups');
  }

  /**
   * Grants permission to search for users within the associated directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to begin the creation process of virtual mfa device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartVirtualMfaDeviceRegistration() {
    return this.to('StartVirtualMfaDeviceRegistration');
  }

  /**
   * Grants permission to begin the registration process of a WebAuthn device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartWebAuthnDeviceRegistration() {
    return this.to('StartWebAuthnDeviceRegistration');
  }

  /**
   * Grants permission to update an External Identity Provider configuration associated with the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateExternalIdPConfigurationForDirectory() {
    return this.to('UpdateExternalIdPConfigurationForDirectory');
  }

  /**
   * Grants permission to update information about a group in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update group display name update group display name response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateGroupDisplayName() {
    return this.to('UpdateGroupDisplayName');
  }

  /**
   * Grants permission to update MFA device information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateMfaDeviceForUser() {
    return this.to('UpdateMfaDeviceForUser');
  }

  /**
   * Grants permission to update a password by sending password reset link via email or generating one time password for a user in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdatePassword() {
    return this.to('UpdatePassword');
  }

  /**
   * Grants permission to update user information in the directory that AWS IAM Identity Center provides by default
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to update user name update user name response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateUserName() {
    return this.to('UpdateUserName');
  }

  /**
   * Grants permission to verify an email address of an User
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toVerifyEmail() {
    return this.to('VerifyEmail');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddMemberToGroup',
      'CompleteVirtualMfaDeviceRegistration',
      'CompleteWebAuthnDeviceRegistration',
      'CreateAlias',
      'CreateBearerToken',
      'CreateExternalIdPConfigurationForDirectory',
      'CreateGroup',
      'CreateProvisioningTenant',
      'CreateUser',
      'DeleteBearerToken',
      'DeleteExternalIdPCertificate',
      'DeleteExternalIdPConfigurationForDirectory',
      'DeleteGroup',
      'DeleteMfaDeviceForUser',
      'DeleteProvisioningTenant',
      'DeleteUser',
      'DisableExternalIdPConfigurationForDirectory',
      'DisableUser',
      'EnableExternalIdPConfigurationForDirectory',
      'EnableUser',
      'ImportExternalIdPCertificate',
      'RemoveMemberFromGroup',
      'StartVirtualMfaDeviceRegistration',
      'StartWebAuthnDeviceRegistration',
      'UpdateExternalIdPConfigurationForDirectory',
      'UpdateGroup',
      'UpdateGroupDisplayName',
      'UpdateMfaDeviceForUser',
      'UpdatePassword',
      'UpdateUser',
      'UpdateUserName',
      'VerifyEmail'
    ],
    Read: [
      'DescribeDirectory',
      'DescribeGroup',
      'DescribeGroups',
      'DescribeProvisioningTenant',
      'DescribeUser',
      'DescribeUserByUniqueAttribute',
      'DescribeUsers',
      'GetAWSSPConfigurationForDirectory',
      'GetUserPoolInfo',
      'IsMemberInGroup',
      'ListBearerTokens',
      'ListExternalIdPCertificates',
      'ListExternalIdPConfigurationsForDirectory',
      'ListGroupsForMember',
      'ListGroupsForUser',
      'ListMembersInGroup',
      'ListMfaDevicesForUser',
      'ListProvisioningTenants',
      'SearchGroups',
      'SearchUsers'
    ]
  };
}
