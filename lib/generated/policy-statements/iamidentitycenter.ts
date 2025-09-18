import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [sso](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycenter.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sso extends PolicyStatement {
  public servicePrefix = 'sso';

  /**
   * Statement provider for service [sso](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycenter.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to connect a directory to be used by AWS IAM Identity Center
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - identitystore:CreateIdentityStore
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateDirectory() {
    return this.to('AssociateDirectory');
  }

  /**
   * Grants permission to create an association between a directory user or group and a profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateProfile() {
    return this.to('AssociateProfile');
  }

  /**
   * Grants permission to attach a customer managed policy reference to a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachCustomerManagedPolicyReferenceToPermissionSet.html
   */
  public toAttachCustomerManagedPolicyReferenceToPermissionSet() {
    return this.to('AttachCustomerManagedPolicyReferenceToPermissionSet');
  }

  /**
   * Grants permission to attach an AWS managed policy to a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachManagedPolicyToPermissionSet.html
   */
  public toAttachManagedPolicyToPermissionSet() {
    return this.to('AttachManagedPolicyToPermissionSet');
  }

  /**
   * Grants permission to assign access to a Principal for a specified AWS account using a specified permission set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateAccountAssignment.html
   */
  public toCreateAccountAssignment() {
    return this.to('CreateAccountAssignment');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an application assignment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html
   */
  public toCreateApplicationAssignment() {
    return this.to('CreateApplicationAssignment');
  }

  /**
   * Grants permission to add an application instance to AWS IAM Identity Center
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstance() {
    return this.to('CreateApplicationInstance');
  }

  /**
   * Grants permission to add a new certificate for an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstanceCertificate() {
    return this.to('CreateApplicationInstanceCertificate');
  }

  /**
   * Grants permission to create an identity center instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - identitystore:CreateIdentityStore
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstance.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to enable the instance for ABAC and specify the attributes
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateRole
   * - iam:DeleteRole
   * - iam:DeleteRolePolicy
   * - iam:DetachRolePolicy
   * - iam:GetRole
   * - iam:ListAttachedRolePolicies
   * - iam:ListRolePolicies
   * - iam:PutRolePolicy
   * - iam:UpdateAssumeRolePolicy
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstanceAccessControlAttributeConfiguration.html
   */
  public toCreateInstanceAccessControlAttributeConfiguration() {
    return this.to('CreateInstanceAccessControlAttributeConfiguration');
  }

  /**
   * Grants permission to add a managed application instance to AWS IAM Identity Center
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateManagedApplicationInstance() {
    return this.to('CreateManagedApplicationInstance');
  }

  /**
   * Grants permission to create a permission set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreatePermissionSet.html
   */
  public toCreatePermissionSet() {
    return this.to('CreatePermissionSet');
  }

  /**
   * Grants permission to create a profile for an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to create a federation trust in a target account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateTrust() {
    return this.to('CreateTrust');
  }

  /**
   * Grants permission to create a trusted token issuer for an instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateTrustedTokenIssuer.html
   */
  public toCreateTrustedTokenIssuer() {
    return this.to('CreateTrustedTokenIssuer');
  }

  /**
   * Grants permission to delete a Principal's access from a specified AWS account using a specified permission set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteAccountAssignment.html
   */
  public toDeleteAccountAssignment() {
    return this.to('DeleteAccountAssignment');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an access scope to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAccessScope.html
   */
  public toDeleteApplicationAccessScope() {
    return this.to('DeleteApplicationAccessScope');
  }

  /**
   * Grants permission to delete an application assignment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAssignment.html
   */
  public toDeleteApplicationAssignment() {
    return this.to('DeleteApplicationAssignment');
  }

  /**
   * Grants permission to delete an authentication method to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAuthenticationMethod.html
   */
  public toDeleteApplicationAuthenticationMethod() {
    return this.to('DeleteApplicationAuthenticationMethod');
  }

  /**
   * Grants permission to delete a grant from an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationGrant.html
   */
  public toDeleteApplicationGrant() {
    return this.to('DeleteApplicationGrant');
  }

  /**
   * Grants permission to delete the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstance() {
    return this.to('DeleteApplicationInstance');
  }

  /**
   * Grants permission to delete an inactive or expired certificate from the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstanceCertificate() {
    return this.to('DeleteApplicationInstanceCertificate');
  }

  /**
   * Grants permission to delete the inline policy from a specified permission set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInlinePolicyFromPermissionSet.html
   */
  public toDeleteInlinePolicyFromPermissionSet() {
    return this.to('DeleteInlinePolicyFromPermissionSet');
  }

  /**
   * Grants permission to delete an identity center instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:DeleteIdentityStore
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to disable ABAC and remove the attributes list for the instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInstanceAccessControlAttributeConfiguration.html
   */
  public toDeleteInstanceAccessControlAttributeConfiguration() {
    return this.to('DeleteInstanceAccessControlAttributeConfiguration');
  }

  /**
   * Grants permission to delete the managed application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteManagedApplicationInstance() {
    return this.to('DeleteManagedApplicationInstance');
  }

  /**
   * Grants permission to delete a permission set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeletePermissionSet.html
   */
  public toDeletePermissionSet() {
    return this.to('DeletePermissionSet');
  }

  /**
   * Grants permission to remove permissions boundary from a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeletePermissionsBoundaryFromPermissionSet.html
   */
  public toDeletePermissionsBoundaryFromPermissionSet() {
    return this.to('DeletePermissionsBoundaryFromPermissionSet');
  }

  /**
   * Grants permission to delete the profile for an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete a trusted token issuer for an instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteTrustedTokenIssuer.html
   */
  public toDeleteTrustedTokenIssuer() {
    return this.to('DeleteTrustedTokenIssuer');
  }

  /**
   * Grants permission to describe the status of the assignment creation request
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentCreationStatus.html
   */
  public toDescribeAccountAssignmentCreationStatus() {
    return this.to('DescribeAccountAssignmentCreationStatus');
  }

  /**
   * Grants permission to describe the status of an assignment deletion request
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentDeletionStatus.html
   */
  public toDescribeAccountAssignmentDeletionStatus() {
    return this.to('DescribeAccountAssignmentDeletionStatus');
  }

  /**
   * Grants permission to obtain information about an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to retrieve an application assignment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplicationAssignment.html
   */
  public toDescribeApplicationAssignment() {
    return this.to('DescribeApplicationAssignment');
  }

  /**
   * Grants permission to describe an application provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplicationProvider.html
   */
  public toDescribeApplicationProvider() {
    return this.to('DescribeApplicationProvider');
  }

  /**
   * Grants permission to obtain information about an identity center instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeInstance.html
   */
  public toDescribeInstance() {
    return this.to('DescribeInstance');
  }

  /**
   * Grants permission to get the list of attributes used by the instance for ABAC
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeInstanceAccessControlAttributeConfiguration.html
   */
  public toDescribeInstanceAccessControlAttributeConfiguration() {
    return this.to('DescribeInstanceAccessControlAttributeConfiguration');
  }

  /**
   * Grants permission to describe a permission set
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSet.html
   */
  public toDescribePermissionSet() {
    return this.to('DescribePermissionSet');
  }

  /**
   * Grants permission to describe the status for the given Permission Set Provisioning request
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSetProvisioningStatus.html
   */
  public toDescribePermissionSetProvisioningStatus() {
    return this.to('DescribePermissionSetProvisioningStatus');
  }

  /**
   * Grants permission to obtain the regions where your organization has enabled AWS IAM Identity Center
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeRegisteredRegions() {
    return this.to('DescribeRegisteredRegions');
  }

  /**
   * Grants permission to describe a trusted token issuer for an instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeTrustedTokenIssuer.html
   */
  public toDescribeTrustedTokenIssuer() {
    return this.to('DescribeTrustedTokenIssuer');
  }

  /**
   * Grants permission to detach a customer managed policy reference from a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachCustomerManagedPolicyReferenceFromPermissionSet.html
   */
  public toDetachCustomerManagedPolicyReferenceFromPermissionSet() {
    return this.to('DetachCustomerManagedPolicyReferenceFromPermissionSet');
  }

  /**
   * Grants permission to detach the attached AWS managed policy from the specified permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachManagedPolicyFromPermissionSet.html
   */
  public toDetachManagedPolicyFromPermissionSet() {
    return this.to('DetachManagedPolicyFromPermissionSet');
  }

  /**
   * Grants permission to disassociate a directory to be used by AWS IAM Identity Center
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UnauthorizeApplication
   * - identitystore:DeleteIdentityStore
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateDirectory() {
    return this.to('DisassociateDirectory');
  }

  /**
   * Grants permission to disassociate a directory user or group from a profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateProfile() {
    return this.to('DisassociateProfile');
  }

  /**
   * Grants permission to get an access scope to an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAccessScope.html
   */
  public toGetApplicationAccessScope() {
    return this.to('GetApplicationAccessScope');
  }

  /**
   * Grants permission to read assignment configurations for an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAssignmentConfiguration.html
   */
  public toGetApplicationAssignmentConfiguration() {
    return this.to('GetApplicationAssignmentConfiguration');
  }

  /**
   * Grants permission to get an authentication method to an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAuthenticationMethod.html
   */
  public toGetApplicationAuthenticationMethod() {
    return this.to('GetApplicationAuthenticationMethod');
  }

  /**
   * Grants permission to obtain details about a grant belonging to an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationGrant.html
   */
  public toGetApplicationGrant() {
    return this.to('GetApplicationGrant');
  }

  /**
   * Grants permission to retrieve details for an application instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationInstance() {
    return this.to('GetApplicationInstance');
  }

  /**
   * Grants permission to get session configuration for an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationSessionConfiguration.html
   */
  public toGetApplicationSessionConfiguration() {
    return this.to('GetApplicationSessionConfiguration');
  }

  /**
   * Grants permission to retrieve application template details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationTemplate() {
    return this.to('GetApplicationTemplate');
  }

  /**
   * Grants permission to obtain the inline policy assigned to the permission set
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetInlinePolicyForPermissionSet.html
   */
  public toGetInlinePolicyForPermissionSet() {
    return this.to('GetInlinePolicyForPermissionSet');
  }

  /**
   * Grants permission to retrieve details for an application instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetManagedApplicationInstance() {
    return this.to('GetManagedApplicationInstance');
  }

  /**
   * Grants permission to retrieve Mfa Device Management settings for the directory
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetMfaDeviceManagementForDirectory() {
    return this.to('GetMfaDeviceManagementForDirectory');
  }

  /**
   * Grants permission to retrieve details of a permission set
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetPermissionSet() {
    return this.to('GetPermissionSet');
  }

  /**
   * Grants permission to get permissions boundary for a permission set
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetPermissionsBoundaryForPermissionSet.html
   */
  public toGetPermissionsBoundaryForPermissionSet() {
    return this.to('GetPermissionsBoundaryForPermissionSet');
  }

  /**
   * Grants permission to retrieve a profile for an application instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to check if AWS IAM Identity Center is enabled
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSSOStatus() {
    return this.to('GetSSOStatus');
  }

  /**
   * Grants permission to retrieve shared configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSharedSsoConfiguration() {
    return this.to('GetSharedSsoConfiguration');
  }

  /**
   * Grants permission to retrieve configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSsoConfiguration() {
    return this.to('GetSsoConfiguration');
  }

  /**
   * Grants permission to retrieve the federation trust in a target account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetTrust() {
    return this.to('GetTrust');
  }

  /**
   * Grants permission to update the application instance by uploading an application SAML metadata file provided by the service provider
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportApplicationInstanceServiceProviderMetadata() {
    return this.to('ImportApplicationInstanceServiceProviderMetadata');
  }

  /**
   * Grants permission to list the status of the AWS account assignment creation requests for a specified SSO instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentCreationStatus.html
   */
  public toListAccountAssignmentCreationStatus() {
    return this.to('ListAccountAssignmentCreationStatus');
  }

  /**
   * Grants permission to list the status of the AWS account assignment deletion requests for a specified SSO instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentDeletionStatus.html
   */
  public toListAccountAssignmentDeletionStatus() {
    return this.to('ListAccountAssignmentDeletionStatus');
  }

  /**
   * Grants permission to list the assignee of the specified AWS account with the specified permission set
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignments.html
   */
  public toListAccountAssignments() {
    return this.to('ListAccountAssignments');
  }

  /**
   * Grants permission to list accounts assigned to user or group
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentsForPrincipal.html
   */
  public toListAccountAssignmentsForPrincipal() {
    return this.to('ListAccountAssignmentsForPrincipal');
  }

  /**
   * Grants permission to list all the AWS accounts where the specified permission set is provisioned
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountsForProvisionedPermissionSet.html
   */
  public toListAccountsForProvisionedPermissionSet() {
    return this.to('ListAccountsForProvisionedPermissionSet');
  }

  /**
   * Grants permission to list access scopes to an application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAccessScopes.html
   */
  public toListApplicationAccessScopes() {
    return this.to('ListApplicationAccessScopes');
  }

  /**
   * Grants permission to list application assignments
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAssignments.html
   */
  public toListApplicationAssignments() {
    return this.to('ListApplicationAssignments');
  }

  /**
   * Grants permission to list applications assigned to user or group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAssignmentsForPrincipal.html
   */
  public toListApplicationAssignmentsForPrincipal() {
    return this.to('ListApplicationAssignmentsForPrincipal');
  }

  /**
   * Grants permission to list authentication methods to an application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAuthenticationMethods.html
   */
  public toListApplicationAuthenticationMethods() {
    return this.to('ListApplicationAuthenticationMethods');
  }

  /**
   * Grants permission to list grants from an application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationGrants.html
   */
  public toListApplicationGrants() {
    return this.to('ListApplicationGrants');
  }

  /**
   * Grants permission to retrieve all of the certificates for a given application instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstanceCertificates() {
    return this.to('ListApplicationInstanceCertificates');
  }

  /**
   * Grants permission to retrieve all application instances
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   * - sso:GetApplicationInstance
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstances() {
    return this.to('ListApplicationInstances');
  }

  /**
   * Grants permission to list application providers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationProviders.html
   */
  public toListApplicationProviders() {
    return this.to('ListApplicationProviders');
  }

  /**
   * Grants permission to retrieve all supported application templates
   *
   * Access Level: List
   *
   * Dependent actions:
   * - sso:GetApplicationTemplate
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationTemplates() {
    return this.to('ListApplicationTemplates');
  }

  /**
   * Grants permission to retrieve all applications associated with the instance of IAM Identity Center
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list the customer managed policy references that are attached to a permission set
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListCustomerManagedPolicyReferencesInPermissionSet.html
   */
  public toListCustomerManagedPolicyReferencesInPermissionSet() {
    return this.to('ListCustomerManagedPolicyReferencesInPermissionSet');
  }

  /**
   * Grants permission to retrieve details about the directory connected to AWS IAM Identity Center
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListDirectoryAssociations() {
    return this.to('ListDirectoryAssociations');
  }

  /**
   * Grants permission to list the SSO Instances that the caller has access to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list the AWS managed policies that are attached to a specified permission set
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListManagedPoliciesInPermissionSet.html
   */
  public toListManagedPoliciesInPermissionSet() {
    return this.to('ListManagedPoliciesInPermissionSet');
  }

  /**
   * Grants permission to list the status of the Permission Set Provisioning requests for a specified SSO instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetProvisioningStatus.html
   */
  public toListPermissionSetProvisioningStatus() {
    return this.to('ListPermissionSetProvisioningStatus');
  }

  /**
   * Grants permission to retrieve all permission sets
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSets.html
   */
  public toListPermissionSets() {
    return this.to('ListPermissionSets');
  }

  /**
   * Grants permission to list all the permission sets that are provisioned to a specified AWS account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetsProvisionedToAccount.html
   */
  public toListPermissionSetsProvisionedToAccount() {
    return this.to('ListPermissionSetsProvisionedToAccount');
  }

  /**
   * Grants permission to retrieve the directory user or group associated with the profile
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfileAssociations() {
    return this.to('ListProfileAssociations');
  }

  /**
   * Grants permission to retrieve all profiles for an application instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   * - sso:GetProfile
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list the tags that are attached to a specified resource
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list trusted token issuers for an instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTrustedTokenIssuers.html
   */
  public toListTrustedTokenIssuers() {
    return this.to('ListTrustedTokenIssuers');
  }

  /**
   * Grants permission to provision a specified permission set to the specified target
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html
   */
  public toProvisionPermissionSet() {
    return this.to('ProvisionPermissionSet');
  }

  /**
   * Grants permission to create/update an access scope to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAccessScope.html
   */
  public toPutApplicationAccessScope() {
    return this.to('PutApplicationAccessScope');
  }

  /**
   * Grants permission to add assignment configurations to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAssignmentConfiguration.html
   */
  public toPutApplicationAssignmentConfiguration() {
    return this.to('PutApplicationAssignmentConfiguration');
  }

  /**
   * Grants permission to create/update an authentication method to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAuthenticationMethod.html
   */
  public toPutApplicationAuthenticationMethod() {
    return this.to('PutApplicationAuthenticationMethod');
  }

  /**
   * Grants permission to create/update a grant to an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationGrant.html
   */
  public toPutApplicationGrant() {
    return this.to('PutApplicationGrant');
  }

  /**
   * Grants permission to put session configuration for an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationSessionConfiguration.html
   */
  public toPutApplicationSessionConfiguration() {
    return this.to('PutApplicationSessionConfiguration');
  }

  /**
   * Grants permission to attach an IAM inline policy to a permission set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutInlinePolicyToPermissionSet.html
   */
  public toPutInlinePolicyToPermissionSet() {
    return this.to('PutInlinePolicyToPermissionSet');
  }

  /**
   * Grants permission to put Mfa Device Management settings for the directory
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutMfaDeviceManagementForDirectory() {
    return this.to('PutMfaDeviceManagementForDirectory');
  }

  /**
   * Grants permission to add permissions boundary to a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutPermissionsBoundaryToPermissionSet.html
   */
  public toPutPermissionsBoundaryToPermissionSet() {
    return this.to('PutPermissionsBoundaryToPermissionSet');
  }

  /**
   * Grants permission to add a policy to a permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutPermissionsPolicy() {
    return this.to('PutPermissionsPolicy');
  }

  /**
   * Grants permission to search for groups within the associated directory
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - kms:Decrypt
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
   * Dependent actions:
   * - ds:DescribeDirectories
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to initialize AWS IAM Identity Center
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:Encrypt
   * - kms:GenerateDataKeyWithoutPlaintext
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartSSO() {
    return this.to('StartSSO');
  }

  /**
   * Grants permission to associate a set of tags with a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate a set of tags from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationAccount()
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to set a certificate as the active one for this application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceActiveCertificate() {
    return this.to('UpdateApplicationInstanceActiveCertificate');
  }

  /**
   * Grants permission to update display data of an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceDisplayData() {
    return this.to('UpdateApplicationInstanceDisplayData');
  }

  /**
   * Grants permission to update federation response configuration for the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseConfiguration() {
    return this.to('UpdateApplicationInstanceResponseConfiguration');
  }

  /**
   * Grants permission to update federation response schema configuration for the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseSchemaConfiguration() {
    return this.to('UpdateApplicationInstanceResponseSchemaConfiguration');
  }

  /**
   * Grants permission to update security details for the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceSecurityConfiguration() {
    return this.to('UpdateApplicationInstanceSecurityConfiguration');
  }

  /**
   * Grants permission to update service provider related configuration for the application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceServiceProviderConfiguration() {
    return this.to('UpdateApplicationInstanceServiceProviderConfiguration');
  }

  /**
   * Grants permission to update the status of an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceStatus() {
    return this.to('UpdateApplicationInstanceStatus');
  }

  /**
   * Grants permission to update an identity center instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:UpdateIdentityStore
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:Encrypt
   * - kms:GenerateDataKeyWithoutPlaintext
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateInstance.html
   */
  public toUpdateInstance() {
    return this.to('UpdateInstance');
  }

  /**
   * Grants permission to update the attributes to use with the instance for ABAC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateInstanceAccessControlAttributeConfiguration.html
   */
  public toUpdateInstanceAccessControlAttributeConfiguration() {
    return this.to('UpdateInstanceAccessControlAttributeConfiguration');
  }

  /**
   * Grants permission to update the status of a managed application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateManagedApplicationInstanceStatus() {
    return this.to('UpdateManagedApplicationInstanceStatus');
  }

  /**
   * Grants permission to update the permission set
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdatePermissionSet.html
   */
  public toUpdatePermissionSet() {
    return this.to('UpdatePermissionSet');
  }

  /**
   * Grants permission to update the profile for an application instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Grants permission to update the configuration for the current SSO instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateSSOConfiguration() {
    return this.to('UpdateSSOConfiguration');
  }

  /**
   * Grants permission to update the federation trust in a target account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateTrust() {
    return this.to('UpdateTrust');
  }

  /**
   * Grants permission to update a trusted token issuer for an instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateTrustedTokenIssuer.html
   */
  public toUpdateTrustedTokenIssuer() {
    return this.to('UpdateTrustedTokenIssuer');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateDirectory',
      'AssociateProfile',
      'CreateAccountAssignment',
      'CreateApplication',
      'CreateApplicationAssignment',
      'CreateApplicationInstance',
      'CreateApplicationInstanceCertificate',
      'CreateInstance',
      'CreateInstanceAccessControlAttributeConfiguration',
      'CreateManagedApplicationInstance',
      'CreatePermissionSet',
      'CreateProfile',
      'CreateTrust',
      'CreateTrustedTokenIssuer',
      'DeleteAccountAssignment',
      'DeleteApplication',
      'DeleteApplicationAccessScope',
      'DeleteApplicationAssignment',
      'DeleteApplicationAuthenticationMethod',
      'DeleteApplicationGrant',
      'DeleteApplicationInstance',
      'DeleteApplicationInstanceCertificate',
      'DeleteInlinePolicyFromPermissionSet',
      'DeleteInstance',
      'DeleteInstanceAccessControlAttributeConfiguration',
      'DeleteManagedApplicationInstance',
      'DeletePermissionSet',
      'DeleteProfile',
      'DeleteTrustedTokenIssuer',
      'DisassociateDirectory',
      'DisassociateProfile',
      'ImportApplicationInstanceServiceProviderMetadata',
      'ProvisionPermissionSet',
      'PutApplicationAccessScope',
      'PutApplicationAssignmentConfiguration',
      'PutApplicationAuthenticationMethod',
      'PutApplicationGrant',
      'PutApplicationSessionConfiguration',
      'PutInlinePolicyToPermissionSet',
      'PutMfaDeviceManagementForDirectory',
      'StartSSO',
      'UpdateApplication',
      'UpdateApplicationInstanceActiveCertificate',
      'UpdateApplicationInstanceDisplayData',
      'UpdateApplicationInstanceResponseConfiguration',
      'UpdateApplicationInstanceResponseSchemaConfiguration',
      'UpdateApplicationInstanceSecurityConfiguration',
      'UpdateApplicationInstanceServiceProviderConfiguration',
      'UpdateApplicationInstanceStatus',
      'UpdateInstance',
      'UpdateInstanceAccessControlAttributeConfiguration',
      'UpdateManagedApplicationInstanceStatus',
      'UpdateProfile',
      'UpdateSSOConfiguration',
      'UpdateTrust',
      'UpdateTrustedTokenIssuer'
    ],
    'Permissions management': [
      'AttachCustomerManagedPolicyReferenceToPermissionSet',
      'AttachManagedPolicyToPermissionSet',
      'DeletePermissionsBoundaryFromPermissionSet',
      'DetachCustomerManagedPolicyReferenceFromPermissionSet',
      'DetachManagedPolicyFromPermissionSet',
      'PutPermissionsBoundaryToPermissionSet',
      'PutPermissionsPolicy',
      'UpdatePermissionSet'
    ],
    Read: [
      'DescribeAccountAssignmentCreationStatus',
      'DescribeAccountAssignmentDeletionStatus',
      'DescribeApplication',
      'DescribeApplicationAssignment',
      'DescribeApplicationProvider',
      'DescribeInstance',
      'DescribeInstanceAccessControlAttributeConfiguration',
      'DescribePermissionSet',
      'DescribePermissionSetProvisioningStatus',
      'DescribeRegisteredRegions',
      'DescribeTrustedTokenIssuer',
      'GetApplicationAccessScope',
      'GetApplicationAssignmentConfiguration',
      'GetApplicationAuthenticationMethod',
      'GetApplicationGrant',
      'GetApplicationInstance',
      'GetApplicationSessionConfiguration',
      'GetApplicationTemplate',
      'GetInlinePolicyForPermissionSet',
      'GetManagedApplicationInstance',
      'GetMfaDeviceManagementForDirectory',
      'GetPermissionSet',
      'GetPermissionsBoundaryForPermissionSet',
      'GetProfile',
      'GetSSOStatus',
      'GetSharedSsoConfiguration',
      'GetSsoConfiguration',
      'GetTrust',
      'ListApplicationInstanceCertificates',
      'ListDirectoryAssociations',
      'ListProfileAssociations',
      'ListTagsForResource',
      'SearchGroups',
      'SearchUsers'
    ],
    List: [
      'ListAccountAssignmentCreationStatus',
      'ListAccountAssignmentDeletionStatus',
      'ListAccountAssignments',
      'ListAccountAssignmentsForPrincipal',
      'ListAccountsForProvisionedPermissionSet',
      'ListApplicationAccessScopes',
      'ListApplicationAssignments',
      'ListApplicationAssignmentsForPrincipal',
      'ListApplicationAuthenticationMethods',
      'ListApplicationGrants',
      'ListApplicationInstances',
      'ListApplicationProviders',
      'ListApplicationTemplates',
      'ListApplications',
      'ListCustomerManagedPolicyReferencesInPermissionSet',
      'ListInstances',
      'ListManagedPoliciesInPermissionSet',
      'ListPermissionSetProvisioningStatus',
      'ListPermissionSets',
      'ListPermissionSetsProvisionedToAccount',
      'ListProfiles',
      'ListTrustedTokenIssuers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type PermissionSet to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param permissionSetId - Identifier for the permissionSetId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPermissionSet(instanceId: string, permissionSetId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso:::permissionSet/${ instanceId }/${ permissionSetId }`);
  }

  /**
   * Adds a resource of type Account to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html
   *
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccount(accountId?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso:::account/${ accountId ?? this.defaultAccount }`);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_InstanceMetadata.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstance(instanceId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso:::instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_Application.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param applicationId - Identifier for the applicationId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifApplicationAccount()
   */
  public onApplication(instanceId: string, applicationId: string, accountId?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso::${ accountId ?? this.defaultAccount }:application/${ instanceId }/${ applicationId }`);
  }

  /**
   * Adds a resource of type TrustedTokenIssuer to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_TrustedTokenIssuerMetadata.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param trustedTokenIssuerId - Identifier for the trustedTokenIssuerId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrustedTokenIssuer(instanceId: string, trustedTokenIssuerId: string, accountId?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso::${ accountId ?? this.defaultAccount }:trustedTokenIssuer/${ instanceId }/${ trustedTokenIssuerId }`);
  }

  /**
   * Adds a resource of type ApplicationProvider to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ApplicationProvider.html
   *
   * @param applicationProviderId - Identifier for the applicationProviderId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplicationProvider(applicationProviderId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso::aws:applicationProvider/${ applicationProviderId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateInstance()
   * - .toCreatePermissionSet()
   * - .toCreateTrustedTokenIssuer()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html
   *
   * Applies to resource types:
   * - PermissionSet
   * - Instance
   * - Application
   * - TrustedTokenIssuer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateInstance()
   * - .toCreatePermissionSet()
   * - .toCreateTrustedTokenIssuer()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the account which creates the application. This condition key is not supported for customer managed SAML applications
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/API_Application.html
   *
   * Applies to actions:
   * - .toCreateApplicationAssignment()
   * - .toDeleteApplication()
   * - .toDeleteApplicationAccessScope()
   * - .toDeleteApplicationAssignment()
   * - .toDeleteApplicationAuthenticationMethod()
   * - .toDeleteApplicationGrant()
   * - .toDescribeApplication()
   * - .toDescribeApplicationAssignment()
   * - .toGetApplicationAccessScope()
   * - .toGetApplicationAssignmentConfiguration()
   * - .toGetApplicationAuthenticationMethod()
   * - .toGetApplicationGrant()
   * - .toGetApplicationSessionConfiguration()
   * - .toListApplicationAccessScopes()
   * - .toListApplicationAssignments()
   * - .toListApplicationAssignmentsForPrincipal()
   * - .toListApplicationAuthenticationMethods()
   * - .toListApplicationGrants()
   * - .toPutApplicationAccessScope()
   * - .toPutApplicationAssignmentConfiguration()
   * - .toPutApplicationAuthenticationMethod()
   * - .toPutApplicationGrant()
   * - .toPutApplicationSessionConfiguration()
   * - .toUpdateApplication()
   *
   * Applies to resource types:
   * - Application
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifApplicationAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ApplicationAccount`, value, operator ?? 'StringLike');
  }
}
