import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [iam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementiam.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iam extends PolicyStatement {
  public servicePrefix = 'iam';

  /**
   * Statement provider for service [iam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementiam.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a new client ID (audience) to the list of registered IDs for the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html
   */
  public toAddClientIDToOpenIDConnectProvider() {
    return this.to('AddClientIDToOpenIDConnectProvider');
  }

  /**
   * Grants permission to add an IAM role to the specified instance profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html
   */
  public toAddRoleToInstanceProfile() {
    return this.to('AddRoleToInstanceProfile');
  }

  /**
   * Grants permission to add an IAM user to the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html
   */
  public toAddUserToGroup() {
    return this.to('AddUserToGroup');
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM group
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html
   */
  public toAttachGroupPolicy() {
    return this.to('AttachGroupPolicy');
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html
   */
  public toAttachRolePolicy() {
    return this.to('AttachRolePolicy');
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html
   */
  public toAttachUserPolicy() {
    return this.to('AttachUserPolicy');
  }

  /**
   * Grants permission to an IAM user to change their own password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html
   */
  public toChangePassword() {
    return this.to('ChangePassword');
  }

  /**
   * Grants permission to create access key and secret access key for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html
   */
  public toCreateAccessKey() {
    return this.to('CreateAccessKey');
  }

  /**
   * Grants permission to create an alias for your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html
   */
  public toCreateAccountAlias() {
    return this.to('CreateAccountAlias');
  }

  /**
   * Grants permission to create a new group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a new instance profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html
   */
  public toCreateInstanceProfile() {
    return this.to('CreateInstanceProfile');
  }

  /**
   * Grants permission to create a password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html
   */
  public toCreateLoginProfile() {
    return this.to('CreateLoginProfile');
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports OpenID Connect (OIDC)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html
   */
  public toCreateOpenIDConnectProvider() {
    return this.to('CreateOpenIDConnectProvider');
  }

  /**
   * Grants permission to create a new managed policy
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
  }

  /**
   * Grants permission to create a new version of the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html
   */
  public toCreatePolicyVersion() {
    return this.to('CreatePolicyVersion');
  }

  /**
   * Grants permission to create a new role
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html
   */
  public toCreateRole() {
    return this.to('CreateRole');
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports SAML 2.0
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html
   */
  public toCreateSAMLProvider() {
    return this.to('CreateSAMLProvider');
  }

  /**
   * Grants permission to create an IAM role that allows an AWS service to perform actions on your behalf
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAWSServiceName()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html
   */
  public toCreateServiceLinkedRole() {
    return this.to('CreateServiceLinkedRole');
  }

  /**
   * Grants permission to create a new service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html
   */
  public toCreateServiceSpecificCredential() {
    return this.to('CreateServiceSpecificCredential');
  }

  /**
   * Grants permission to create a new IAM user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a new virtual MFA device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html
   */
  public toCreateVirtualMFADevice() {
    return this.to('CreateVirtualMFADevice');
  }

  /**
   * Grants permission to deactivate the specified MFA device and remove its association with the IAM user for which it was originally enabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html
   */
  public toDeactivateMFADevice() {
    return this.to('DeactivateMFADevice');
  }

  /**
   * Grants permission to delete the access key pair that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html
   */
  public toDeleteAccessKey() {
    return this.to('DeleteAccessKey');
  }

  /**
   * Grants permission to delete the specified AWS account alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html
   */
  public toDeleteAccountAlias() {
    return this.to('DeleteAccountAlias');
  }

  /**
   * Grants permission to delete the password policy for the AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html
   */
  public toDeleteAccountPasswordPolicy() {
    return this.to('DeleteAccountPasswordPolicy');
  }

  /**
   * Grants permission to delete an existing CloudFront public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html
   */
  public toDeleteCloudFrontPublicKey() {
    return this.to('DeleteCloudFrontPublicKey');
  }

  /**
   * Grants permission to delete the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete the specified inline policy from its group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html
   */
  public toDeleteGroupPolicy() {
    return this.to('DeleteGroupPolicy');
  }

  /**
   * Grants permission to delete the specified instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public toDeleteInstanceProfile() {
    return this.to('DeleteInstanceProfile');
  }

  /**
   * Grants permission to delete the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html
   */
  public toDeleteLoginProfile() {
    return this.to('DeleteLoginProfile');
  }

  /**
   * Grants permission to delete an OpenID Connect identity provider (IdP) resource object in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html
   */
  public toDeleteOpenIDConnectProvider() {
    return this.to('DeleteOpenIDConnectProvider');
  }

  /**
   * Grants permission to delete the specified managed policy and remove it from any IAM entities (users, groups, or roles) to which it is attached
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to delete a version from the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html
   */
  public toDeletePolicyVersion() {
    return this.to('DeletePolicyVersion');
  }

  /**
   * Grants permission to delete the specified role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html
   */
  public toDeleteRole() {
    return this.to('DeleteRole');
  }

  /**
   * Grants permission to remove the permissions boundary from a role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html
   */
  public toDeleteRolePermissionsBoundary() {
    return this.to('DeleteRolePermissionsBoundary');
  }

  /**
   * Grants permission to delete the specified inline policy from the specified role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html
   */
  public toDeleteRolePolicy() {
    return this.to('DeleteRolePolicy');
  }

  /**
   * Grants permission to delete a SAML provider resource in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html
   */
  public toDeleteSAMLProvider() {
    return this.to('DeleteSAMLProvider');
  }

  /**
   * Grants permission to delete the specified SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html
   */
  public toDeleteSSHPublicKey() {
    return this.to('DeleteSSHPublicKey');
  }

  /**
   * Grants permission to delete the specified server certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html
   */
  public toDeleteServerCertificate() {
    return this.to('DeleteServerCertificate');
  }

  /**
   * Grants permission to delete an IAM role that is linked to a specific AWS service, if the service is no longer using it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html
   */
  public toDeleteServiceLinkedRole() {
    return this.to('DeleteServiceLinkedRole');
  }

  /**
   * Grants permission to delete the specified service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html
   */
  public toDeleteServiceSpecificCredential() {
    return this.to('DeleteServiceSpecificCredential');
  }

  /**
   * Grants permission to delete a signing certificate that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html
   */
  public toDeleteSigningCertificate() {
    return this.to('DeleteSigningCertificate');
  }

  /**
   * Grants permission to delete the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to remove the permissions boundary from the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html
   */
  public toDeleteUserPermissionsBoundary() {
    return this.to('DeleteUserPermissionsBoundary');
  }

  /**
   * Grants permission to delete the specified inline policy from an IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html
   */
  public toDeleteUserPolicy() {
    return this.to('DeleteUserPolicy');
  }

  /**
   * Grants permission to delete a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html
   */
  public toDeleteVirtualMFADevice() {
    return this.to('DeleteVirtualMFADevice');
  }

  /**
   * Grants permission to detach a managed policy from the specified IAM group
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html
   */
  public toDetachGroupPolicy() {
    return this.to('DetachGroupPolicy');
  }

  /**
   * Grants permission to detach a managed policy from the specified role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html
   */
  public toDetachRolePolicy() {
    return this.to('DetachRolePolicy');
  }

  /**
   * Grants permission to detach a managed policy from the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html
   */
  public toDetachUserPolicy() {
    return this.to('DetachUserPolicy');
  }

  /**
   * Grants permission to disable the management of member account root user credentials for an organization managed under the current account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DisableOrganizationsRootCredentialsManagement.html
   */
  public toDisableOrganizationsRootCredentialsManagement() {
    return this.to('DisableOrganizationsRootCredentialsManagement');
  }

  /**
   * Grants permission to disable privileged root actions in member accounts for an organization managed under the current account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DisableOrganizationsRootSessions.html
   */
  public toDisableOrganizationsRootSessions() {
    return this.to('DisableOrganizationsRootSessions');
  }

  /**
   * Grants permission to enable an MFA device and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRegisterSecurityKey()
   * - .ifFIDOFIPS1402Certification()
   * - .ifFIDOFIPS1403Certification()
   * - .ifFIDOCertification()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html
   */
  public toEnableMFADevice() {
    return this.to('EnableMFADevice');
  }

  /**
   * Grants permission to enable the management of member account root user credentials for an organization managed under the current account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableOrganizationsRootCredentialsManagement.html
   */
  public toEnableOrganizationsRootCredentialsManagement() {
    return this.to('EnableOrganizationsRootCredentialsManagement');
  }

  /**
   * Grants permission to enable privileged root actions in member accounts for an organization managed under the current account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableOrganizationsRootSessions.html
   */
  public toEnableOrganizationsRootSessions() {
    return this.to('EnableOrganizationsRootSessions');
  }

  /**
   * Grants permission to generate a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html
   */
  public toGenerateCredentialReport() {
    return this.to('GenerateCredentialReport');
  }

  /**
   * Grants permission to generate an access report for an AWS Organizations entity
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifOrganizationsPolicyId()
   *
   * Dependent actions:
   * - organizations:DescribePolicy
   * - organizations:ListChildren
   * - organizations:ListParents
   * - organizations:ListPoliciesForTarget
   * - organizations:ListRoots
   * - organizations:ListTargetsForPolicy
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html
   */
  public toGenerateOrganizationsAccessReport() {
    return this.to('GenerateOrganizationsAccessReport');
  }

  /**
   * Grants permission to generate a service last accessed data report for an IAM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html
   */
  public toGenerateServiceLastAccessedDetails() {
    return this.to('GenerateServiceLastAccessedDetails');
  }

  /**
   * Grants permission to retrieve information about when the specified access key was last used
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html
   */
  public toGetAccessKeyLastUsed() {
    return this.to('GetAccessKeyLastUsed');
  }

  /**
   * Grants permission to retrieve information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html
   */
  public toGetAccountAuthorizationDetails() {
    return this.to('GetAccountAuthorizationDetails');
  }

  /**
   * Grants permission to retrieve the email address that is associated with the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html
   */
  public toGetAccountEmailAddress() {
    return this.to('GetAccountEmailAddress');
  }

  /**
   * Grants permission to retrieve the account name that is associated with the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html
   */
  public toGetAccountName() {
    return this.to('GetAccountName');
  }

  /**
   * Grants permission to retrieve the password policy for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html
   */
  public toGetAccountPasswordPolicy() {
    return this.to('GetAccountPasswordPolicy');
  }

  /**
   * Grants permission to retrieve information about IAM entity usage and IAM quotas in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html
   */
  public toGetAccountSummary() {
    return this.to('GetAccountSummary');
  }

  /**
   * Grants permission to retrieve information about the specified CloudFront public key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html
   */
  public toGetCloudFrontPublicKey() {
    return this.to('GetCloudFrontPublicKey');
  }

  /**
   * Grants permission to retrieve a list of all of the context keys that are referenced in the specified policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html
   */
  public toGetContextKeysForCustomPolicy() {
    return this.to('GetContextKeysForCustomPolicy');
  }

  /**
   * Grants permission to retrieve a list of all context keys that are referenced in all IAM policies that are attached to the specified IAM identity (user, group, or role)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html
   */
  public toGetContextKeysForPrincipalPolicy() {
    return this.to('GetContextKeysForPrincipalPolicy');
  }

  /**
   * Grants permission to retrieve a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html
   */
  public toGetCredentialReport() {
    return this.to('GetCredentialReport');
  }

  /**
   * Grants permission to retrieve a list of IAM users in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html
   */
  public toGetGroupPolicy() {
    return this.to('GetGroupPolicy');
  }

  /**
   * Grants permission to retrieve information about the specified instance profile, including the instance profile's path, GUID, ARN, and role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html
   */
  public toGetInstanceProfile() {
    return this.to('GetInstanceProfile');
  }

  /**
   * Grants permission to retrieve the user name and password creation date for the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html
   */
  public toGetLoginProfile() {
    return this.to('GetLoginProfile');
  }

  /**
   * Grants permission to retrieve information about an MFA device for the specified user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetMFADevice.html
   */
  public toGetMFADevice() {
    return this.to('GetMFADevice');
  }

  /**
   * Grants permission to retrieve information about the specified OpenID Connect (OIDC) provider resource in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html
   */
  public toGetOpenIDConnectProvider() {
    return this.to('GetOpenIDConnectProvider');
  }

  /**
   * Grants permission to retrieve an AWS Organizations access report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html
   */
  public toGetOrganizationsAccessReport() {
    return this.to('GetOrganizationsAccessReport');
  }

  /**
   * Grants permission to retrieve information about the specified managed policy, including the policy's default version and the total number of identities to which the policy is attached
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to retrieve information about a version of the specified managed policy, including the policy document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    return this.to('GetPolicyVersion');
  }

  /**
   * Grants permission to retrieve information about the specified role, including the role's path, GUID, ARN, and the role's trust policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html
   */
  public toGetRole() {
    return this.to('GetRole');
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded with the specified IAM role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html
   */
  public toGetRolePolicy() {
    return this.to('GetRolePolicy');
  }

  /**
   * Grants permission to retrieve the SAML provider metadocument that was uploaded when the IAM SAML provider resource was created or updated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html
   */
  public toGetSAMLProvider() {
    return this.to('GetSAMLProvider');
  }

  /**
   * Grants permission to retrieve the specified SSH public key, including metadata about the key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html
   */
  public toGetSSHPublicKey() {
    return this.to('GetSSHPublicKey');
  }

  /**
   * Grants permission to retrieve information about the specified server certificate stored in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html
   */
  public toGetServerCertificate() {
    return this.to('GetServerCertificate');
  }

  /**
   * Grants permission to retrieve information about the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html
   */
  public toGetServiceLastAccessedDetails() {
    return this.to('GetServiceLastAccessedDetails');
  }

  /**
   * Grants permission to retrieve information about the entities from the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html
   */
  public toGetServiceLastAccessedDetailsWithEntities() {
    return this.to('GetServiceLastAccessedDetailsWithEntities');
  }

  /**
   * Grants permission to retrieve an IAM service-linked role deletion status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html
   */
  public toGetServiceLinkedRoleDeletionStatus() {
    return this.to('GetServiceLinkedRoleDeletionStatus');
  }

  /**
   * Grants permission to retrieve information about the specified IAM user, including the user's creation date, path, unique ID, and ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html
   */
  public toGetUserPolicy() {
    return this.to('GetUserPolicy');
  }

  /**
   * Grants permission to list information about the access key IDs that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html
   */
  public toListAccessKeys() {
    return this.to('ListAccessKeys');
  }

  /**
   * Grants permission to list the account alias that is associated with the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html
   */
  public toListAccountAliases() {
    return this.to('ListAccountAliases');
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html
   */
  public toListAttachedGroupPolicies() {
    return this.to('ListAttachedGroupPolicies');
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html
   */
  public toListAttachedRolePolicies() {
    return this.to('ListAttachedRolePolicies');
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html
   */
  public toListAttachedUserPolicies() {
    return this.to('ListAttachedUserPolicies');
  }

  /**
   * Grants permission to list all current CloudFront public keys for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html
   */
  public toListCloudFrontPublicKeys() {
    return this.to('ListCloudFrontPublicKeys');
  }

  /**
   * Grants permission to list all IAM identities to which the specified managed policy is attached
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html
   */
  public toListEntitiesForPolicy() {
    return this.to('ListEntitiesForPolicy');
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html
   */
  public toListGroupPolicies() {
    return this.to('ListGroupPolicies');
  }

  /**
   * Grants permission to list the IAM groups that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list the IAM groups that the specified IAM user belongs to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html
   */
  public toListGroupsForUser() {
    return this.to('ListGroupsForUser');
  }

  /**
   * Grants permission to list the tags that are attached to the specified instance profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html
   */
  public toListInstanceProfileTags() {
    return this.to('ListInstanceProfileTags');
  }

  /**
   * Grants permission to list the instance profiles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html
   */
  public toListInstanceProfiles() {
    return this.to('ListInstanceProfiles');
  }

  /**
   * Grants permission to list the instance profiles that have the specified associated IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html
   */
  public toListInstanceProfilesForRole() {
    return this.to('ListInstanceProfilesForRole');
  }

  /**
   * Grants permission to list the tags that are attached to the specified virtual mfa device
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html
   */
  public toListMFADeviceTags() {
    return this.to('ListMFADeviceTags');
  }

  /**
   * Grants permission to list the MFA devices for an IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html
   */
  public toListMFADevices() {
    return this.to('ListMFADevices');
  }

  /**
   * Grants permission to list the tags that are attached to the specified OpenID Connect provider
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html
   */
  public toListOpenIDConnectProviderTags() {
    return this.to('ListOpenIDConnectProviderTags');
  }

  /**
   * Grants permission to list information about the IAM OpenID Connect (OIDC) provider resource objects that are defined in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html
   */
  public toListOpenIDConnectProviders() {
    return this.to('ListOpenIDConnectProviders');
  }

  /**
   * Grants permission to list the centralized root access features enabled for your organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOrganizationsFeatures.html
   */
  public toListOrganizationsFeatures() {
    return this.to('ListOrganizationsFeatures');
  }

  /**
   * Grants permission to list all managed policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to list information about the policies that grant an entity access to a specific service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html
   */
  public toListPoliciesGrantingServiceAccess() {
    return this.to('ListPoliciesGrantingServiceAccess');
  }

  /**
   * Grants permission to list the tags that are attached to the specified managed policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html
   */
  public toListPolicyTags() {
    return this.to('ListPolicyTags');
  }

  /**
   * Grants permission to list information about the versions of the specified managed policy, including the version that is currently set as the policy's default version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    return this.to('ListPolicyVersions');
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html
   */
  public toListRolePolicies() {
    return this.to('ListRolePolicies');
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html
   */
  public toListRoleTags() {
    return this.to('ListRoleTags');
  }

  /**
   * Grants permission to list the IAM roles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html
   */
  public toListRoles() {
    return this.to('ListRoles');
  }

  /**
   * Grants permission to list the tags that are attached to the specified SAML provider
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html
   */
  public toListSAMLProviderTags() {
    return this.to('ListSAMLProviderTags');
  }

  /**
   * Grants permission to list the SAML provider resources in IAM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html
   */
  public toListSAMLProviders() {
    return this.to('ListSAMLProviders');
  }

  /**
   * Grants permission to list information about the SSH public keys that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html
   */
  public toListSSHPublicKeys() {
    return this.to('ListSSHPublicKeys');
  }

  /**
   * Grants permission to list the status of all active STS regional endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html
   */
  public toListSTSRegionalEndpointsStatus() {
    return this.to('ListSTSRegionalEndpointsStatus');
  }

  /**
   * Grants permission to list the tags that are attached to the specified server certificate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html
   */
  public toListServerCertificateTags() {
    return this.to('ListServerCertificateTags');
  }

  /**
   * Grants permission to list the server certificates that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html
   */
  public toListServerCertificates() {
    return this.to('ListServerCertificates');
  }

  /**
   * Grants permission to list the service-specific credentials that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html
   */
  public toListServiceSpecificCredentials() {
    return this.to('ListServiceSpecificCredentials');
  }

  /**
   * Grants permission to list information about the signing certificates that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html
   */
  public toListSigningCertificates() {
    return this.to('ListSigningCertificates');
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html
   */
  public toListUserPolicies() {
    return this.to('ListUserPolicies');
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html
   */
  public toListUserTags() {
    return this.to('ListUserTags');
  }

  /**
   * Grants permission to list the IAM users that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to list virtual MFA devices by assignment status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html
   */
  public toListVirtualMFADevices() {
    return this.to('ListVirtualMFADevices');
  }

  /**
   * Grants permission to pass a role to a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAssociatedResourceArn()
   * - .ifPassedToService()
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html
   */
  public toPassRole() {
    return this.to('PassRole');
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html
   */
  public toPutGroupPolicy() {
    return this.to('PutGroupPolicy');
  }

  /**
   * Grants permission to set a managed policy as a permissions boundary for a role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html
   */
  public toPutRolePermissionsBoundary() {
    return this.to('PutRolePermissionsBoundary');
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html
   */
  public toPutRolePolicy() {
    return this.to('PutRolePolicy');
  }

  /**
   * Grants permission to set a managed policy as a permissions boundary for an IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html
   */
  public toPutUserPermissionsBoundary() {
    return this.to('PutUserPermissionsBoundary');
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html
   */
  public toPutUserPolicy() {
    return this.to('PutUserPolicy');
  }

  /**
   * Grants permission to remove the client ID (audience) from the list of client IDs in the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html
   */
  public toRemoveClientIDFromOpenIDConnectProvider() {
    return this.to('RemoveClientIDFromOpenIDConnectProvider');
  }

  /**
   * Grants permission to remove an IAM role from the specified EC2 instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html
   */
  public toRemoveRoleFromInstanceProfile() {
    return this.to('RemoveRoleFromInstanceProfile');
  }

  /**
   * Grants permission to remove an IAM user from the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html
   */
  public toRemoveUserFromGroup() {
    return this.to('RemoveUserFromGroup');
  }

  /**
   * Grants permission to reset the password for an existing service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html
   */
  public toResetServiceSpecificCredential() {
    return this.to('ResetServiceSpecificCredential');
  }

  /**
   * Grants permission to synchronize the specified MFA device with its IAM entity (user or role)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html
   */
  public toResyncMFADevice() {
    return this.to('ResyncMFADevice');
  }

  /**
   * Grants permission to set the version of the specified policy as the policy's default version
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html
   */
  public toSetDefaultPolicyVersion() {
    return this.to('SetDefaultPolicyVersion');
  }

  /**
   * Grants permission to activate or deactivate an STS regional endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html
   */
  public toSetSTSRegionalEndpointStatus() {
    return this.to('SetSTSRegionalEndpointStatus');
  }

  /**
   * Grants permission to set the STS global endpoint token version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html
   */
  public toSetSecurityTokenServicePreferences() {
    return this.to('SetSecurityTokenServicePreferences');
  }

  /**
   * Grants permission to simulate whether an identity-based policy or resource-based policy provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html
   */
  public toSimulateCustomPolicy() {
    return this.to('SimulateCustomPolicy');
  }

  /**
   * Grants permission to simulate whether an identity-based policy that is attached to a specified IAM entity (user or role) provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html
   */
  public toSimulatePrincipalPolicy() {
    return this.to('SimulatePrincipalPolicy');
  }

  /**
   * Grants permission to add tags to an instance profile
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html
   */
  public toTagInstanceProfile() {
    return this.to('TagInstanceProfile');
  }

  /**
   * Grants permission to add tags to a virtual mfa device
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html
   */
  public toTagMFADevice() {
    return this.to('TagMFADevice');
  }

  /**
   * Grants permission to add tags to an OpenID Connect provider
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html
   */
  public toTagOpenIDConnectProvider() {
    return this.to('TagOpenIDConnectProvider');
  }

  /**
   * Grants permission to add tags to a managed policy
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html
   */
  public toTagPolicy() {
    return this.to('TagPolicy');
  }

  /**
   * Grants permission to add tags to an IAM role
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html
   */
  public toTagRole() {
    return this.to('TagRole');
  }

  /**
   * Grants permission to add tags to a SAML Provider
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html
   */
  public toTagSAMLProvider() {
    return this.to('TagSAMLProvider');
  }

  /**
   * Grants permission to add tags to a server certificate
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html
   */
  public toTagServerCertificate() {
    return this.to('TagServerCertificate');
  }

  /**
   * Grants permission to add tags to an IAM user
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html
   */
  public toTagUser() {
    return this.to('TagUser');
  }

  /**
   * Grants permission to remove the specified tags from the instance profile
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html
   */
  public toUntagInstanceProfile() {
    return this.to('UntagInstanceProfile');
  }

  /**
   * Grants permission to remove the specified tags from the virtual mfa device
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html
   */
  public toUntagMFADevice() {
    return this.to('UntagMFADevice');
  }

  /**
   * Grants permission to remove the specified tags from the OpenID Connect provider
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html
   */
  public toUntagOpenIDConnectProvider() {
    return this.to('UntagOpenIDConnectProvider');
  }

  /**
   * Grants permission to remove the specified tags from the managed policy
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html
   */
  public toUntagPolicy() {
    return this.to('UntagPolicy');
  }

  /**
   * Grants permission to remove the specified tags from the role
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html
   */
  public toUntagRole() {
    return this.to('UntagRole');
  }

  /**
   * Grants permission to remove the specified tags from the SAML Provider
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html
   */
  public toUntagSAMLProvider() {
    return this.to('UntagSAMLProvider');
  }

  /**
   * Grants permission to remove the specified tags from the server certificate
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html
   */
  public toUntagServerCertificate() {
    return this.to('UntagServerCertificate');
  }

  /**
   * Grants permission to remove the specified tags from the user
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html
   */
  public toUntagUser() {
    return this.to('UntagUser');
  }

  /**
   * Grants permission to update the status of the specified access key as Active or Inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html
   */
  public toUpdateAccessKey() {
    return this.to('UpdateAccessKey');
  }

  /**
   * Grants permission to update the email address that is associated with the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html
   */
  public toUpdateAccountEmailAddress() {
    return this.to('UpdateAccountEmailAddress');
  }

  /**
   * Grants permission to update the account name that is associated with the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html
   */
  public toUpdateAccountName() {
    return this.to('UpdateAccountName');
  }

  /**
   * Grants permission to update the password policy settings for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html
   */
  public toUpdateAccountPasswordPolicy() {
    return this.to('UpdateAccountPasswordPolicy');
  }

  /**
   * Grants permission to update the policy that grants an IAM entity permission to assume a role
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html
   */
  public toUpdateAssumeRolePolicy() {
    return this.to('UpdateAssumeRolePolicy');
  }

  /**
   * Grants permission to update an existing CloudFront public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html
   */
  public toUpdateCloudFrontPublicKey() {
    return this.to('UpdateCloudFrontPublicKey');
  }

  /**
   * Grants permission to update the name or path of the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to change the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html
   */
  public toUpdateLoginProfile() {
    return this.to('UpdateLoginProfile');
  }

  /**
   * Grants permission to update the entire list of server certificate thumbprints that are associated with an OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html
   */
  public toUpdateOpenIDConnectProviderThumbprint() {
    return this.to('UpdateOpenIDConnectProviderThumbprint');
  }

  /**
   * Grants permission to update the description or maximum session duration setting of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html
   */
  public toUpdateRole() {
    return this.to('UpdateRole');
  }

  /**
   * Grants permission to update only the description of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html
   */
  public toUpdateRoleDescription() {
    return this.to('UpdateRoleDescription');
  }

  /**
   * Grants permission to update the metadata document for an existing SAML provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html
   */
  public toUpdateSAMLProvider() {
    return this.to('UpdateSAMLProvider');
  }

  /**
   * Grants permission to update the status of an IAM user's SSH public key to active or inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html
   */
  public toUpdateSSHPublicKey() {
    return this.to('UpdateSSHPublicKey');
  }

  /**
   * Grants permission to update the name or the path of the specified server certificate stored in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html
   */
  public toUpdateServerCertificate() {
    return this.to('UpdateServerCertificate');
  }

  /**
   * Grants permission to update the status of a service-specific credential to active or inactive for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html
   */
  public toUpdateServiceSpecificCredential() {
    return this.to('UpdateServiceSpecificCredential');
  }

  /**
   * Grants permission to update the status of the specified user signing certificate to active or disabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html
   */
  public toUpdateSigningCertificate() {
    return this.to('UpdateSigningCertificate');
  }

  /**
   * Grants permission to update the name or the path of the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to upload a CloudFront public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html
   */
  public toUploadCloudFrontPublicKey() {
    return this.to('UploadCloudFrontPublicKey');
  }

  /**
   * Grants permission to upload an SSH public key and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html
   */
  public toUploadSSHPublicKey() {
    return this.to('UploadSSHPublicKey');
  }

  /**
   * Grants permission to upload a server certificate entity for the AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html
   */
  public toUploadServerCertificate() {
    return this.to('UploadServerCertificate');
  }

  /**
   * Grants permission to upload an X.509 signing certificate and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html
   */
  public toUploadSigningCertificate() {
    return this.to('UploadSigningCertificate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddClientIDToOpenIDConnectProvider',
      'AddRoleToInstanceProfile',
      'AddUserToGroup',
      'ChangePassword',
      'CreateAccessKey',
      'CreateAccountAlias',
      'CreateGroup',
      'CreateInstanceProfile',
      'CreateLoginProfile',
      'CreateOpenIDConnectProvider',
      'CreateRole',
      'CreateSAMLProvider',
      'CreateServiceLinkedRole',
      'CreateServiceSpecificCredential',
      'CreateUser',
      'CreateVirtualMFADevice',
      'DeactivateMFADevice',
      'DeleteAccessKey',
      'DeleteAccountAlias',
      'DeleteCloudFrontPublicKey',
      'DeleteGroup',
      'DeleteInstanceProfile',
      'DeleteLoginProfile',
      'DeleteOpenIDConnectProvider',
      'DeleteRole',
      'DeleteSAMLProvider',
      'DeleteSSHPublicKey',
      'DeleteServerCertificate',
      'DeleteServiceLinkedRole',
      'DeleteServiceSpecificCredential',
      'DeleteSigningCertificate',
      'DeleteUser',
      'DeleteVirtualMFADevice',
      'DisableOrganizationsRootCredentialsManagement',
      'DisableOrganizationsRootSessions',
      'EnableMFADevice',
      'EnableOrganizationsRootCredentialsManagement',
      'EnableOrganizationsRootSessions',
      'PassRole',
      'RemoveClientIDFromOpenIDConnectProvider',
      'RemoveRoleFromInstanceProfile',
      'RemoveUserFromGroup',
      'ResetServiceSpecificCredential',
      'ResyncMFADevice',
      'SetSTSRegionalEndpointStatus',
      'SetSecurityTokenServicePreferences',
      'UpdateAccessKey',
      'UpdateAccountEmailAddress',
      'UpdateAccountName',
      'UpdateAccountPasswordPolicy',
      'UpdateCloudFrontPublicKey',
      'UpdateGroup',
      'UpdateLoginProfile',
      'UpdateOpenIDConnectProviderThumbprint',
      'UpdateRole',
      'UpdateRoleDescription',
      'UpdateSAMLProvider',
      'UpdateSSHPublicKey',
      'UpdateServerCertificate',
      'UpdateServiceSpecificCredential',
      'UpdateSigningCertificate',
      'UpdateUser',
      'UploadCloudFrontPublicKey',
      'UploadSSHPublicKey',
      'UploadServerCertificate',
      'UploadSigningCertificate'
    ],
    'Permissions management': [
      'AttachGroupPolicy',
      'AttachRolePolicy',
      'AttachUserPolicy',
      'CreatePolicy',
      'CreatePolicyVersion',
      'DeleteAccountPasswordPolicy',
      'DeleteGroupPolicy',
      'DeletePolicy',
      'DeletePolicyVersion',
      'DeleteRolePermissionsBoundary',
      'DeleteRolePolicy',
      'DeleteUserPermissionsBoundary',
      'DeleteUserPolicy',
      'DetachGroupPolicy',
      'DetachRolePolicy',
      'DetachUserPolicy',
      'PutGroupPolicy',
      'PutRolePermissionsBoundary',
      'PutRolePolicy',
      'PutUserPermissionsBoundary',
      'PutUserPolicy',
      'SetDefaultPolicyVersion',
      'UpdateAssumeRolePolicy'
    ],
    Read: [
      'GenerateCredentialReport',
      'GenerateOrganizationsAccessReport',
      'GenerateServiceLastAccessedDetails',
      'GetAccessKeyLastUsed',
      'GetAccountAuthorizationDetails',
      'GetAccountEmailAddress',
      'GetAccountName',
      'GetAccountPasswordPolicy',
      'GetCloudFrontPublicKey',
      'GetContextKeysForCustomPolicy',
      'GetContextKeysForPrincipalPolicy',
      'GetCredentialReport',
      'GetGroup',
      'GetGroupPolicy',
      'GetInstanceProfile',
      'GetMFADevice',
      'GetOpenIDConnectProvider',
      'GetOrganizationsAccessReport',
      'GetPolicy',
      'GetPolicyVersion',
      'GetRole',
      'GetRolePolicy',
      'GetSAMLProvider',
      'GetSSHPublicKey',
      'GetServerCertificate',
      'GetServiceLastAccessedDetails',
      'GetServiceLastAccessedDetailsWithEntities',
      'GetServiceLinkedRoleDeletionStatus',
      'GetUser',
      'GetUserPolicy',
      'SimulateCustomPolicy',
      'SimulatePrincipalPolicy'
    ],
    List: [
      'GetAccountSummary',
      'GetLoginProfile',
      'ListAccessKeys',
      'ListAccountAliases',
      'ListAttachedGroupPolicies',
      'ListAttachedRolePolicies',
      'ListAttachedUserPolicies',
      'ListCloudFrontPublicKeys',
      'ListEntitiesForPolicy',
      'ListGroupPolicies',
      'ListGroups',
      'ListGroupsForUser',
      'ListInstanceProfileTags',
      'ListInstanceProfiles',
      'ListInstanceProfilesForRole',
      'ListMFADeviceTags',
      'ListMFADevices',
      'ListOpenIDConnectProviderTags',
      'ListOpenIDConnectProviders',
      'ListOrganizationsFeatures',
      'ListPolicies',
      'ListPoliciesGrantingServiceAccess',
      'ListPolicyTags',
      'ListPolicyVersions',
      'ListRolePolicies',
      'ListRoleTags',
      'ListRoles',
      'ListSAMLProviderTags',
      'ListSAMLProviders',
      'ListSSHPublicKeys',
      'ListSTSRegionalEndpointsStatus',
      'ListServerCertificateTags',
      'ListServerCertificates',
      'ListServiceSpecificCredentials',
      'ListSigningCertificates',
      'ListUserPolicies',
      'ListUserTags',
      'ListUsers',
      'ListVirtualMFADevices'
    ],
    Tagging: [
      'TagInstanceProfile',
      'TagMFADevice',
      'TagOpenIDConnectProvider',
      'TagPolicy',
      'TagRole',
      'TagSAMLProvider',
      'TagServerCertificate',
      'TagUser',
      'UntagInstanceProfile',
      'UntagMFADevice',
      'UntagOpenIDConnectProvider',
      'UntagPolicy',
      'UntagRole',
      'UntagSAMLProvider',
      'UntagServerCertificate',
      'UntagUser'
    ]
  };

  /**
   * Adds a resource of type access-report to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html
   *
   * @param entityPath - Identifier for the entityPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccessReport(entityPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:access-report/${ entityPath }`);
  }

  /**
   * Adds a resource of type assumed-role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
   *
   * @param roleName - Identifier for the roleName.
   * @param roleSessionName - Identifier for the roleSessionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssumedRole(roleName: string, roleSessionName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:assumed-role/${ roleName }/${ roleSessionName }`);
  }

  /**
   * Adds a resource of type federated-user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFederatedUser(userName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:federated-user/${ userName }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
   *
   * @param groupNameWithPath - Identifier for the groupNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGroup(groupNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:group/${ groupNameWithPath }`);
  }

  /**
   * Adds a resource of type instance-profile to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html
   *
   * @param instanceProfileNameWithPath - Identifier for the instanceProfileNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceProfile(instanceProfileNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:instance-profile/${ instanceProfileNameWithPath }`);
  }

  /**
   * Adds a resource of type mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
   *
   * @param mfaTokenIdWithPath - Identifier for the mfaTokenIdWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMfa(mfaTokenIdWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:mfa/${ mfaTokenIdWithPath }`);
  }

  /**
   * Adds a resource of type oidc-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
   *
   * @param oidcProviderName - Identifier for the oidcProviderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOidcProvider(oidcProviderName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:oidc-provider/${ oidcProviderName }`);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html
   *
   * @param policyNameWithPath - Identifier for the policyNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(policyNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:policy/${ policyNameWithPath }`);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:role/${ roleNameWithPath }`);
  }

  /**
   * Adds a resource of type saml-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param samlProviderName - Identifier for the samlProviderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSamlProvider(samlProviderName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:saml-provider/${ samlProviderName }`);
  }

  /**
   * Adds a resource of type server-certificate to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html
   *
   * @param certificateNameWithPath - Identifier for the certificateNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServerCertificate(certificateNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:server-certificate/${ certificateNameWithPath }`);
  }

  /**
   * Adds a resource of type sms-mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
   *
   * @param mfaTokenIdWithPath - Identifier for the mfaTokenIdWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSmsMfa(mfaTokenIdWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:sms-mfa/${ mfaTokenIdWithPath }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:user/${ userNameWithPath }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateInstanceProfile()
   * - .toCreateOpenIDConnectProvider()
   * - .toCreatePolicy()
   * - .toCreateRole()
   * - .toCreateSAMLProvider()
   * - .toCreateUser()
   * - .toCreateVirtualMFADevice()
   * - .toTagInstanceProfile()
   * - .toTagMFADevice()
   * - .toTagOpenIDConnectProvider()
   * - .toTagPolicy()
   * - .toTagRole()
   * - .toTagSAMLProvider()
   * - .toTagServerCertificate()
   * - .toTagUser()
   * - .toUploadServerCertificate()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - instance-profile
   * - mfa
   * - oidc-provider
   * - policy
   * - role
   * - saml-provider
   * - server-certificate
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateInstanceProfile()
   * - .toCreateOpenIDConnectProvider()
   * - .toCreatePolicy()
   * - .toCreateRole()
   * - .toCreateSAMLProvider()
   * - .toCreateUser()
   * - .toCreateVirtualMFADevice()
   * - .toTagInstanceProfile()
   * - .toTagMFADevice()
   * - .toTagOpenIDConnectProvider()
   * - .toTagPolicy()
   * - .toTagRole()
   * - .toTagSAMLProvider()
   * - .toTagServerCertificate()
   * - .toTagUser()
   * - .toUntagInstanceProfile()
   * - .toUntagMFADevice()
   * - .toUntagOpenIDConnectProvider()
   * - .toUntagPolicy()
   * - .toUntagRole()
   * - .toUntagSAMLProvider()
   * - .toUntagServerCertificate()
   * - .toUntagUser()
   * - .toUploadServerCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS service to which this role is attached
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AWSServiceName
   *
   * Applies to actions:
   * - .toCreateServiceLinkedRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`AWSServiceName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the resource that the role will be used on behalf of
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AssociatedResourceArn
   *
   * Applies to actions:
   * - .toPassRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAssociatedResourceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`AssociatedResourceArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the MFA device FIPS-140-2 validation certification level at the time of registration of a FIDO security key
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_FIDO-FIPS-140-2-certification
   *
   * Applies to actions:
   * - .toEnableMFADevice()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFIDOFIPS1402Certification(value: string | string[], operator?: Operator | string) {
    return this.if(`FIDO-FIPS-140-2-certification`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the MFA device FIPS-140-3 validation certification level at the time of registration of a FIDO security key
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_FIDO-FIPS-140-3-certification
   *
   * Applies to actions:
   * - .toEnableMFADevice()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFIDOFIPS1403Certification(value: string | string[], operator?: Operator | string) {
    return this.if(`FIDO-FIPS-140-3-certification`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the MFA device FIDO certification level at the time of registration of a FIDO security key
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_FIDO-certification
   *
   * Applies to actions:
   * - .toEnableMFADevice()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFIDOCertification(value: string | string[], operator?: Operator | string) {
    return this.if(`FIDO-certification`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS Organizations policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_OrganizationsPolicyId
   *
   * Applies to actions:
   * - .toGenerateOrganizationsAccessReport()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOrganizationsPolicyId(value: string | string[], operator?: Operator | string) {
    return this.if(`OrganizationsPolicyId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS service to which this role is passed
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PassedToService
   *
   * Applies to actions:
   * - .toPassRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: Operator | string) {
    return this.if(`PassedToService`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary
   *
   * Applies to actions:
   * - .toAttachRolePolicy()
   * - .toAttachUserPolicy()
   * - .toCreateRole()
   * - .toCreateUser()
   * - .toDeleteRolePermissionsBoundary()
   * - .toDeleteRolePolicy()
   * - .toDeleteUserPermissionsBoundary()
   * - .toDeleteUserPolicy()
   * - .toDetachRolePolicy()
   * - .toDetachUserPolicy()
   * - .toPutRolePermissionsBoundary()
   * - .toPutRolePolicy()
   * - .toPutUserPermissionsBoundary()
   * - .toPutUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPermissionsBoundary(value: string | string[], operator?: Operator | string) {
    return this.if(`PermissionsBoundary`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the ARN of an IAM policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN
   *
   * Applies to actions:
   * - .toAttachGroupPolicy()
   * - .toAttachRolePolicy()
   * - .toAttachUserPolicy()
   * - .toDetachGroupPolicy()
   * - .toDetachRolePolicy()
   * - .toDetachUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPolicyARN(value: string | string[], operator?: Operator | string) {
    return this.if(`PolicyARN`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the current state of MFA device enablement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RegisterSecurityKey
   *
   * Applies to actions:
   * - .toEnableMFADevice()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRegisterSecurityKey(value: string | string[], operator?: Operator | string) {
    return this.if(`RegisterSecurityKey`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags attached to an IAM entity (user or role)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag
   *
   * Applies to resource types:
   * - role
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
