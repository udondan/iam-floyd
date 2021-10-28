import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [sso](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssso.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sso extends PolicyStatement {
  public servicePrefix = 'sso';

  /**
   * Statement provider for service [sso](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssso.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to connect a directory to be used by AWS Single Sign-On
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateProfile() {
    return this.to('AssociateProfile');
  }

  /**
   * Grants permission to attach an AWS managed policy to a permission set.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachManagedPolicyToPermissionSet.html
   */
  public toAttachManagedPolicyToPermissionSet() {
    return this.to('AttachManagedPolicyToPermissionSet');
  }

  /**
   * Grants permission to assign access to a Principal for a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateAccountAssignment.html
   */
  public toCreateAccountAssignment() {
    return this.to('CreateAccountAssignment');
  }

  /**
   * Grants permission to add an application instance to AWS Single Sign-On
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstanceCertificate() {
    return this.to('CreateApplicationInstanceCertificate');
  }

  /**
   * Grants permission to enable the instance for ABAC and specify the attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstanceAccessControlAttributeConfiguration.html
   */
  public toCreateInstanceAccessControlAttributeConfiguration() {
    return this.to('CreateInstanceAccessControlAttributeConfiguration');
  }

  /**
   * Grants permission to add a managed application instance to AWS Single Sign-On
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateTrust() {
    return this.to('CreateTrust');
  }

  /**
   * Grants permission to delete a Principal's access from a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteAccountAssignment.html
   */
  public toDeleteAccountAssignment() {
    return this.to('DeleteAccountAssignment');
  }

  /**
   * Grants permission to delete the application instance
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstanceCertificate() {
    return this.to('DeleteApplicationInstanceCertificate');
  }

  /**
   * Grants permission to delete the inline policy from a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInlinePolicyFromPermissionSet.html
   */
  public toDeleteInlinePolicyFromPermissionSet() {
    return this.to('DeleteInlinePolicyFromPermissionSet');
  }

  /**
   * Grants permission to disable ABAC and remove the attributes list for the instance
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteManagedApplicationInstance() {
    return this.to('DeleteManagedApplicationInstance');
  }

  /**
   * Grants permission to delete a permission set
   *
   * Access Level: Write
   */
  public toDeletePermissionSet() {
    return this.to('DeletePermissionSet');
  }

  /**
   * Grants permission to delete the permission policy associated with a permission set
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeletePermissionsPolicy() {
    return this.to('DeletePermissionsPolicy');
  }

  /**
   * Grants permission to delete the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to describe the status of the assignment creation request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentCreationStatus.html
   */
  public toDescribeAccountAssignmentCreationStatus() {
    return this.to('DescribeAccountAssignmentCreationStatus');
  }

  /**
   * Grants permission to describe the status of an assignment deletion request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentDeletionStatus.html
   */
  public toDescribeAccountAssignmentDeletionStatus() {
    return this.to('DescribeAccountAssignmentDeletionStatus');
  }

  /**
   * Grants permission to get the list of attributes used by the instance for ABAC
   *
   * Access Level: Read
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
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSet.html
   */
  public toDescribePermissionSet() {
    return this.to('DescribePermissionSet');
  }

  /**
   * Grants permission to describe the status for the given Permission Set Provisioning request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSetProvisioningStatus.html
   */
  public toDescribePermissionSetProvisioningStatus() {
    return this.to('DescribePermissionSetProvisioningStatus');
  }

  /**
   * Grants permission to retrieve all the permissions policies associated with a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionsPolicies() {
    return this.to('DescribePermissionsPolicies');
  }

  /**
   * Grants permission to obtain the regions where your organization has enabled AWS Single Sign-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeRegisteredRegions() {
    return this.to('DescribeRegisteredRegions');
  }

  /**
   * Grants permission to detach the attached AWS managed policy from the specified permission set.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachManagedPolicyFromPermissionSet.html
   */
  public toDetachManagedPolicyFromPermissionSet() {
    return this.to('DetachManagedPolicyFromPermissionSet');
  }

  /**
   * Grants permission to disassociate a directory to be used by AWS Single Sign-On
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UnauthorizeApplication
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateProfile() {
    return this.to('DisassociateProfile');
  }

  /**
   * Grants permission to retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationInstance() {
    return this.to('GetApplicationInstance');
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
   * Grants permission to obtain the inline policy assigned to the permission set.
   *
   * Access Level: Read
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetPermissionSet() {
    return this.to('GetPermissionSet');
  }

  /**
   * Grants permission to retrieve all permission policies associated with a permission set
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - sso:DescribePermissionsPolicies
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetPermissionsPolicy() {
    return this.to('GetPermissionsPolicy');
  }

  /**
   * Grants permission to retrieve a profile for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to check if AWS Single Sign-On is enabled
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportApplicationInstanceServiceProviderMetadata() {
    return this.to('ImportApplicationInstanceServiceProviderMetadata');
  }

  /**
   * Grants permission to list the status of the AWS account assignment creation requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentCreationStatus.html
   */
  public toListAccountAssignmentCreationStatus() {
    return this.to('ListAccountAssignmentCreationStatus');
  }

  /**
   * Grants permission to list the status of the AWS account assignment deletion requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentDeletionStatus.html
   */
  public toListAccountAssignmentDeletionStatus() {
    return this.to('ListAccountAssignmentDeletionStatus');
  }

  /**
   * Grants permission to list the assignee of the specified AWS account with the specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignments.html
   */
  public toListAccountAssignments() {
    return this.to('ListAccountAssignments');
  }

  /**
   * Grants permission to list all the AWS accounts where the specified permission set is provisioned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountsForProvisionedPermissionSet.html
   */
  public toListAccountsForProvisionedPermissionSet() {
    return this.to('ListAccountsForProvisionedPermissionSet');
  }

  /**
   * Grants permission to retrieve all of the certificates for a given application instance
   *
   * Access Level: Read
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
   * - sso:GetApplicationInstance
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstances() {
    return this.to('ListApplicationInstances');
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
   * Grants permission to retrieve all supported applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to retrieve details about the directory connected to AWS Single Sign-On
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListDirectoryAssociations() {
    return this.to('ListDirectoryAssociations');
  }

  /**
   * Grants permission to list the SSO Instances that the caller has access to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list the AWS managed policies that are attached to a specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListManagedPoliciesInPermissionSet.html
   */
  public toListManagedPoliciesInPermissionSet() {
    return this.to('ListManagedPoliciesInPermissionSet');
  }

  /**
   * Grants permission to list the status of the Permission Set Provisioning requests for a specified SSO instance.
   *
   * Access Level: List
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
   */
  public toListPermissionSets() {
    return this.to('ListPermissionSets');
  }

  /**
   * Grants permission to list all the permission sets that are provisioned to a specified AWS account.
   *
   * Access Level: List
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
   * - sso:GetProfile
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list the tags that are attached to a specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to provision a specified permission set to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html
   */
  public toProvisionPermissionSet() {
    return this.to('ProvisionPermissionSet');
  }

  /**
   * Grants permission to attach an IAM inline policy to a permission set.
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutMfaDeviceManagementForDirectory() {
    return this.to('PutMfaDeviceManagementForDirectory');
  }

  /**
   * Grants permission to add a policy to a permission set
   *
   * Access Level: Permissions management
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
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to initialize AWS Single Sign-On
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartSSO() {
    return this.to('StartSSO');
  }

  /**
   * Grants permission to associate a set of tags with a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate a set of tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to set a certificate as the active one for this application instance
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceStatus() {
    return this.to('UpdateApplicationInstanceStatus');
  }

  /**
   * Grants permission to update the user attribute mappings for your connected directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateDirectoryAssociation() {
    return this.to('UpdateDirectoryAssociation');
  }

  /**
   * Grants permission to update the attributes to use with the instance for ABAC
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateManagedApplicationInstanceStatus() {
    return this.to('UpdateManagedApplicationInstanceStatus');
  }

  /**
   * Grants permission to update the permission set.
   *
   * Access Level: Permissions management
   */
  public toUpdatePermissionSet() {
    return this.to('UpdatePermissionSet');
  }

  /**
   * Grants permission to update the profile for an application instance
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateTrust() {
    return this.to('UpdateTrust');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateDirectory',
      'AssociateProfile',
      'CreateAccountAssignment',
      'CreateApplicationInstance',
      'CreateApplicationInstanceCertificate',
      'CreateInstanceAccessControlAttributeConfiguration',
      'CreateManagedApplicationInstance',
      'CreatePermissionSet',
      'CreateProfile',
      'CreateTrust',
      'DeleteAccountAssignment',
      'DeleteApplicationInstance',
      'DeleteApplicationInstanceCertificate',
      'DeleteInlinePolicyFromPermissionSet',
      'DeleteInstanceAccessControlAttributeConfiguration',
      'DeleteManagedApplicationInstance',
      'DeletePermissionSet',
      'DeleteProfile',
      'DisassociateDirectory',
      'DisassociateProfile',
      'ImportApplicationInstanceServiceProviderMetadata',
      'ProvisionPermissionSet',
      'PutInlinePolicyToPermissionSet',
      'PutMfaDeviceManagementForDirectory',
      'StartSSO',
      'UpdateApplicationInstanceActiveCertificate',
      'UpdateApplicationInstanceDisplayData',
      'UpdateApplicationInstanceResponseConfiguration',
      'UpdateApplicationInstanceResponseSchemaConfiguration',
      'UpdateApplicationInstanceSecurityConfiguration',
      'UpdateApplicationInstanceServiceProviderConfiguration',
      'UpdateApplicationInstanceStatus',
      'UpdateDirectoryAssociation',
      'UpdateInstanceAccessControlAttributeConfiguration',
      'UpdateManagedApplicationInstanceStatus',
      'UpdateProfile',
      'UpdateSSOConfiguration',
      'UpdateTrust'
    ],
    'Permissions management': [
      'AttachManagedPolicyToPermissionSet',
      'DeletePermissionsPolicy',
      'DetachManagedPolicyFromPermissionSet',
      'PutPermissionsPolicy',
      'UpdatePermissionSet'
    ],
    Read: [
      'DescribeAccountAssignmentCreationStatus',
      'DescribeAccountAssignmentDeletionStatus',
      'DescribeInstanceAccessControlAttributeConfiguration',
      'DescribePermissionSet',
      'DescribePermissionSetProvisioningStatus',
      'DescribePermissionsPolicies',
      'DescribeRegisteredRegions',
      'GetApplicationInstance',
      'GetApplicationTemplate',
      'GetInlinePolicyForPermissionSet',
      'GetManagedApplicationInstance',
      'GetMfaDeviceManagementForDirectory',
      'GetPermissionSet',
      'GetPermissionsPolicy',
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
      'ListAccountsForProvisionedPermissionSet',
      'ListApplicationInstances',
      'ListApplicationTemplates',
      'ListApplications',
      'ListInstances',
      'ListManagedPoliciesInPermissionSet',
      'ListPermissionSetProvisioningStatus',
      'ListPermissionSets',
      'ListPermissionSetsProvisionedToAccount',
      'ListProfiles'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPermissionSet(instanceId: string, permissionSetId: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sso:::permissionSet/${ instanceId }/${ permissionSetId }`);
  }

  /**
   * Adds a resource of type Account to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html
   *
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccount(accountId?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sso:::account/${ accountId || '*' }`);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/step1.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceId: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sso:::instance/${ instanceId }`);
  }
}
