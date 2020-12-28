import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Connect a directory to be used by AWS Single Sign-On
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
   * Create an association between a directory user or group and a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateProfile() {
    return this.to('AssociateProfile');
  }

  /**
   * Attaches an AWS managed policy to a permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAttachManagedPolicyToPermissionSet() {
    return this.to('AttachManagedPolicyToPermissionSet');
  }

  /**
   * Assigns access to a Principal for a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateAccountAssignment() {
    return this.to('CreateAccountAssignment');
  }

  /**
   * Add an application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstance() {
    return this.to('CreateApplicationInstance');
  }

  /**
   * Add a new certificate for an application instance
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
   * Add a managed application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateManagedApplicationInstance() {
    return this.to('CreateManagedApplicationInstance');
  }

  /**
   * Create a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreatePermissionSet() {
    return this.to('CreatePermissionSet');
  }

  /**
   * Create a profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Create a federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateTrust() {
    return this.to('CreateTrust');
  }

  /**
   * Deletes a Principal's access from a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteAccountAssignment() {
    return this.to('DeleteAccountAssignment');
  }

  /**
   * Delete the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstance() {
    return this.to('DeleteApplicationInstance');
  }

  /**
   * Delete an inactive or expired certificate from the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstanceCertificate() {
    return this.to('DeleteApplicationInstanceCertificate');
  }

  /**
   * Deletes the inline policy from a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
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
   * Delete the managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteManagedApplicationInstance() {
    return this.to('DeleteManagedApplicationInstance');
  }

  /**
   * Delete a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeletePermissionSet() {
    return this.to('DeletePermissionSet');
  }

  /**
   * Delete the permission policy associated with a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeletePermissionsPolicy() {
    return this.to('DeletePermissionsPolicy');
  }

  /**
   * Delete the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Describes the status of the assignment creation request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeAccountAssignmentCreationStatus() {
    return this.to('DescribeAccountAssignmentCreationStatus');
  }

  /**
   * Describes the status of an assignment deletion request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
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
   * Describes a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionSet() {
    return this.to('DescribePermissionSet');
  }

  /**
   * Describes the status for the given Permission Set Provisioning request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionSetProvisioningStatus() {
    return this.to('DescribePermissionSetProvisioningStatus');
  }

  /**
   * Retrieve all the permissions policies associated with a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionsPolicies() {
    return this.to('DescribePermissionsPolicies');
  }

  /**
   * Obtains the regions where your organization has enabled AWS Single Sign-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeRegisteredRegions() {
    return this.to('DescribeRegisteredRegions');
  }

  /**
   * Detaches the attached AWS managed policy from the specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDetachManagedPolicyFromPermissionSet() {
    return this.to('DetachManagedPolicyFromPermissionSet');
  }

  /**
   * Disassociate a directory to be used by AWS Single Sign-On
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
   * Disassociate a directory user or group from a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateProfile() {
    return this.to('DisassociateProfile');
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationInstance() {
    return this.to('GetApplicationInstance');
  }

  /**
   * Retrieve application template details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationTemplate() {
    return this.to('GetApplicationTemplate');
  }

  /**
   * Obtains the inline policy assigned to the permission set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetInlinePolicyForPermissionSet() {
    return this.to('GetInlinePolicyForPermissionSet');
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetManagedApplicationInstance() {
    return this.to('GetManagedApplicationInstance');
  }

  /**
   * Retrieve Mfa Device Management settings for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetMfaDeviceManagementForDirectory() {
    return this.to('GetMfaDeviceManagementForDirectory');
  }

  /**
   * Retrieve details of a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetPermissionSet() {
    return this.to('GetPermissionSet');
  }

  /**
   * Retrieve all permission policies associated with a permission set
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
   * Retrieve a profile for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Check if AWS Single Sign-On is enabled
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSSOStatus() {
    return this.to('GetSSOStatus');
  }

  /**
   * Retrieve shared configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSharedSsoConfiguration() {
    return this.to('GetSharedSsoConfiguration');
  }

  /**
   * Retrieve configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSsoConfiguration() {
    return this.to('GetSsoConfiguration');
  }

  /**
   * Retrieve the federation trust in a target account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetTrust() {
    return this.to('GetTrust');
  }

  /**
   * Update the application instance by uploading an application SAML metadata file provided by the service provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportApplicationInstanceServiceProviderMetadata() {
    return this.to('ImportApplicationInstanceServiceProviderMetadata');
  }

  /**
   * Lists the status of the AWS account assignment creation requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentCreationStatus() {
    return this.to('ListAccountAssignmentCreationStatus');
  }

  /**
   * Lists the status of the AWS account assignment deletion requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentDeletionStatus() {
    return this.to('ListAccountAssignmentDeletionStatus');
  }

  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignments() {
    return this.to('ListAccountAssignments');
  }

  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountsForProvisionedPermissionSet() {
    return this.to('ListAccountsForProvisionedPermissionSet');
  }

  /**
   * Retrieve all of the certificates for a given application instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstanceCertificates() {
    return this.to('ListApplicationInstanceCertificates');
  }

  /**
   * Retrieve all application instances
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
   * Retrieve all supported application templates
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
   * Retrieve all supported applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Retrieve details about the directory connected to AWS Single Sign-On
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListDirectoryAssociations() {
    return this.to('ListDirectoryAssociations');
  }

  /**
   * Lists the SSO Instances that the caller has access to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Lists the AWS managed policies that are attached to a specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListManagedPoliciesInPermissionSet() {
    return this.to('ListManagedPoliciesInPermissionSet');
  }

  /**
   * Lists the status of the Permission Set Provisioning requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetProvisioningStatus() {
    return this.to('ListPermissionSetProvisioningStatus');
  }

  /**
   * Retrieve all permission sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSets() {
    return this.to('ListPermissionSets');
  }

  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetsProvisionedToAccount() {
    return this.to('ListPermissionSetsProvisionedToAccount');
  }

  /**
   * Retrieve the directory user or group associated with the profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfileAssociations() {
    return this.to('ListProfileAssociations');
  }

  /**
   * Retrieve all profiles for an application instance
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
   * Lists the tags that are attached to a specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * The process by which a specified permission set is provisioned to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toProvisionPermissionSet() {
    return this.to('ProvisionPermissionSet');
  }

  /**
   * Attaches an IAM inline policy to a permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutInlinePolicyToPermissionSet() {
    return this.to('PutInlinePolicyToPermissionSet');
  }

  /**
   * Put Mfa Device Management settings for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutMfaDeviceManagementForDirectory() {
    return this.to('PutMfaDeviceManagementForDirectory');
  }

  /**
   * Add a policy to a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutPermissionsPolicy() {
    return this.to('PutPermissionsPolicy');
  }

  /**
   * Search for groups within the associated directory
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
   * Search for users within the associated directory
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
   * Initialize AWS Single Sign-On
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organization:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartSSO() {
    return this.to('StartSSO');
  }

  /**
   * Associates a set of tags with a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Disassociates a set of tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Set a certificate as the active one for this application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceActiveCertificate() {
    return this.to('UpdateApplicationInstanceActiveCertificate');
  }

  /**
   * Update display data of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceDisplayData() {
    return this.to('UpdateApplicationInstanceDisplayData');
  }

  /**
   * Update federation response configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseConfiguration() {
    return this.to('UpdateApplicationInstanceResponseConfiguration');
  }

  /**
   * Update federation response schema configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseSchemaConfiguration() {
    return this.to('UpdateApplicationInstanceResponseSchemaConfiguration');
  }

  /**
   * Update security details for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceSecurityConfiguration() {
    return this.to('UpdateApplicationInstanceSecurityConfiguration');
  }

  /**
   * Update service provider related configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceServiceProviderConfiguration() {
    return this.to('UpdateApplicationInstanceServiceProviderConfiguration');
  }

  /**
   * Update the status of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceStatus() {
    return this.to('UpdateApplicationInstanceStatus');
  }

  /**
   * Update the user attribute mappings for your connected directory
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
   * Update the status of a managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateManagedApplicationInstanceStatus() {
    return this.to('UpdateManagedApplicationInstanceStatus');
  }

  /**
   * Update the permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdatePermissionSet() {
    return this.to('UpdatePermissionSet');
  }

  /**
   * Update the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Update the configuration for the current SSO instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateSSOConfiguration() {
    return this.to('UpdateSSOConfiguration');
  }

  /**
   * Update the federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateTrust() {
    return this.to('UpdateTrust');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateDirectory",
      "AssociateProfile",
      "AttachManagedPolicyToPermissionSet",
      "CreateAccountAssignment",
      "CreateApplicationInstance",
      "CreateApplicationInstanceCertificate",
      "CreateInstanceAccessControlAttributeConfiguration",
      "CreateManagedApplicationInstance",
      "CreatePermissionSet",
      "CreateProfile",
      "CreateTrust",
      "DeleteAccountAssignment",
      "DeleteApplicationInstance",
      "DeleteApplicationInstanceCertificate",
      "DeleteInlinePolicyFromPermissionSet",
      "DeleteInstanceAccessControlAttributeConfiguration",
      "DeleteManagedApplicationInstance",
      "DeletePermissionSet",
      "DeletePermissionsPolicy",
      "DeleteProfile",
      "DetachManagedPolicyFromPermissionSet",
      "DisassociateDirectory",
      "DisassociateProfile",
      "ImportApplicationInstanceServiceProviderMetadata",
      "ProvisionPermissionSet",
      "PutInlinePolicyToPermissionSet",
      "PutMfaDeviceManagementForDirectory",
      "PutPermissionsPolicy",
      "StartSSO",
      "UpdateApplicationInstanceActiveCertificate",
      "UpdateApplicationInstanceDisplayData",
      "UpdateApplicationInstanceResponseConfiguration",
      "UpdateApplicationInstanceResponseSchemaConfiguration",
      "UpdateApplicationInstanceSecurityConfiguration",
      "UpdateApplicationInstanceServiceProviderConfiguration",
      "UpdateApplicationInstanceStatus",
      "UpdateDirectoryAssociation",
      "UpdateInstanceAccessControlAttributeConfiguration",
      "UpdateManagedApplicationInstanceStatus",
      "UpdatePermissionSet",
      "UpdateProfile",
      "UpdateSSOConfiguration",
      "UpdateTrust"
    ],
    "Read": [
      "DescribeAccountAssignmentCreationStatus",
      "DescribeAccountAssignmentDeletionStatus",
      "DescribeInstanceAccessControlAttributeConfiguration",
      "DescribePermissionSet",
      "DescribePermissionSetProvisioningStatus",
      "DescribePermissionsPolicies",
      "DescribeRegisteredRegions",
      "GetApplicationInstance",
      "GetApplicationTemplate",
      "GetInlinePolicyForPermissionSet",
      "GetManagedApplicationInstance",
      "GetMfaDeviceManagementForDirectory",
      "GetPermissionSet",
      "GetPermissionsPolicy",
      "GetProfile",
      "GetSSOStatus",
      "GetSharedSsoConfiguration",
      "GetSsoConfiguration",
      "GetTrust",
      "SearchGroups",
      "SearchUsers"
    ],
    "List": [
      "ListAccountAssignmentCreationStatus",
      "ListAccountAssignmentDeletionStatus",
      "ListAccountAssignments",
      "ListAccountsForProvisionedPermissionSet",
      "ListApplicationInstanceCertificates",
      "ListApplicationInstances",
      "ListApplicationTemplates",
      "ListApplications",
      "ListDirectoryAssociations",
      "ListInstances",
      "ListManagedPoliciesInPermissionSet",
      "ListPermissionSetProvisioningStatus",
      "ListPermissionSets",
      "ListPermissionSetsProvisionedToAccount",
      "ListProfileAssociations",
      "ListProfiles",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type PermissionSet to the statement
   *
   * @param instanceId - Identifier for the instanceId.
   * @param permissionSetId - Identifier for the permissionSetId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPermissionSet(instanceId: string, permissionSetId: string, partition?: string) {
    var arn = 'arn:${Partition}:sso:::permissionSet/${InstanceId}/${PermissionSetId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${PermissionSetId}', permissionSetId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Account to the statement
   *
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccount(accountId?: string, partition?: string) {
    var arn = 'arn:${Partition}:sso:::account/${AccountId}';
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * @param instanceId - Identifier for the instanceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceId: string, partition?: string) {
    var arn = 'arn:${Partition}:sso:::instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
