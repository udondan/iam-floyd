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
    this.to('AssociateDirectory');
    return this;
  }

  /**
   * Create an association between a directory user or group and a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateProfile() {
    this.to('AssociateProfile');
    return this;
  }

  /**
   * Attaches an AWS managed policy to a permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAttachManagedPolicyToPermissionSet() {
    this.to('AttachManagedPolicyToPermissionSet');
    return this;
  }

  /**
   * Assigns access to a Principal for a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateAccountAssignment() {
    this.to('CreateAccountAssignment');
    return this;
  }

  /**
   * Add an application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstance() {
    this.to('CreateApplicationInstance');
    return this;
  }

  /**
   * Add a new certificate for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateApplicationInstanceCertificate() {
    this.to('CreateApplicationInstanceCertificate');
    return this;
  }

  /**
   * Add a managed application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateManagedApplicationInstance() {
    this.to('CreateManagedApplicationInstance');
    return this;
  }

  /**
   * Create a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreatePermissionSet() {
    this.to('CreatePermissionSet');
    return this;
  }

  /**
   * Create a profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateProfile() {
    this.to('CreateProfile');
    return this;
  }

  /**
   * Create a federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toCreateTrust() {
    this.to('CreateTrust');
    return this;
  }

  /**
   * Deletes a Principal's access from a specified AWS account using a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteAccountAssignment() {
    this.to('DeleteAccountAssignment');
    return this;
  }

  /**
   * Delete the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstance() {
    this.to('DeleteApplicationInstance');
    return this;
  }

  /**
   * Delete an inactive or expired certificate from the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteApplicationInstanceCertificate() {
    this.to('DeleteApplicationInstanceCertificate');
    return this;
  }

  /**
   * Deletes the inline policy from a specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteInlinePolicyFromPermissionSet() {
    this.to('DeleteInlinePolicyFromPermissionSet');
    return this;
  }

  /**
   * Delete the managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteManagedApplicationInstance() {
    this.to('DeleteManagedApplicationInstance');
    return this;
  }

  /**
   * Delete a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeletePermissionSet() {
    this.to('DeletePermissionSet');
    return this;
  }

  /**
   * Delete the permission policy associated with a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeletePermissionsPolicy() {
    this.to('DeletePermissionsPolicy');
    return this;
  }

  /**
   * Delete the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDeleteProfile() {
    this.to('DeleteProfile');
    return this;
  }

  /**
   * Describes the status of the assignment creation request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeAccountAssignmentCreationStatus() {
    this.to('DescribeAccountAssignmentCreationStatus');
    return this;
  }

  /**
   * Describes the status of an assignment deletion request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeAccountAssignmentDeletionStatus() {
    this.to('DescribeAccountAssignmentDeletionStatus');
    return this;
  }

  /**
   * Describes a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionSet() {
    this.to('DescribePermissionSet');
    return this;
  }

  /**
   * Describes the status for the given Permission Set Provisioning request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionSetProvisioningStatus() {
    this.to('DescribePermissionSetProvisioningStatus');
    return this;
  }

  /**
   * Retrieve all the permissions policies associated with a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribePermissionsPolicies() {
    this.to('DescribePermissionsPolicies');
    return this;
  }

  /**
   * Obtains the regions where your organization has enabled AWS Single Sign-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDescribeRegisteredRegions() {
    this.to('DescribeRegisteredRegions');
    return this;
  }

  /**
   * Detaches the attached AWS managed policy from the specified permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDetachManagedPolicyFromPermissionSet() {
    this.to('DetachManagedPolicyFromPermissionSet');
    return this;
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
    this.to('DisassociateDirectory');
    return this;
  }

  /**
   * Disassociate a directory user or group from a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateProfile() {
    this.to('DisassociateProfile');
    return this;
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationInstance() {
    this.to('GetApplicationInstance');
    return this;
  }

  /**
   * Retrieve application template details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetApplicationTemplate() {
    this.to('GetApplicationTemplate');
    return this;
  }

  /**
   * Obtains the inline policy assigned to the permission set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetInlinePolicyForPermissionSet() {
    this.to('GetInlinePolicyForPermissionSet');
    return this;
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetManagedApplicationInstance() {
    this.to('GetManagedApplicationInstance');
    return this;
  }

  /**
   * Retrieve Mfa Device Management settings for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetMfaDeviceManagementForDirectory() {
    this.to('GetMfaDeviceManagementForDirectory');
    return this;
  }

  /**
   * Retrieve details of a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetPermissionSet() {
    this.to('GetPermissionSet');
    return this;
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
    this.to('GetPermissionsPolicy');
    return this;
  }

  /**
   * Retrieve a profile for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetProfile() {
    this.to('GetProfile');
    return this;
  }

  /**
   * Check if AWS Single Sign-On is enabled
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSSOStatus() {
    this.to('GetSSOStatus');
    return this;
  }

  /**
   * Retrieve shared configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSharedSsoConfiguration() {
    this.to('GetSharedSsoConfiguration');
    return this;
  }

  /**
   * Retrieve configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetSsoConfiguration() {
    this.to('GetSsoConfiguration');
    return this;
  }

  /**
   * Retrieve the federation trust in a target account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toGetTrust() {
    this.to('GetTrust');
    return this;
  }

  /**
   * Update the application instance by uploading an application SAML metadata file provided by the service provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toImportApplicationInstanceServiceProviderMetadata() {
    this.to('ImportApplicationInstanceServiceProviderMetadata');
    return this;
  }

  /**
   * Lists the status of the AWS account assignment creation requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentCreationStatus() {
    this.to('ListAccountAssignmentCreationStatus');
    return this;
  }

  /**
   * Lists the status of the AWS account assignment deletion requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentDeletionStatus() {
    this.to('ListAccountAssignmentDeletionStatus');
    return this;
  }

  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignments() {
    this.to('ListAccountAssignments');
    return this;
  }

  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountsForProvisionedPermissionSet() {
    this.to('ListAccountsForProvisionedPermissionSet');
    return this;
  }

  /**
   * Retrieve all of the certificates for a given application instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstanceCertificates() {
    this.to('ListApplicationInstanceCertificates');
    return this;
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
    this.to('ListApplicationInstances');
    return this;
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
    this.to('ListApplicationTemplates');
    return this;
  }

  /**
   * Retrieve all supported applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplications() {
    this.to('ListApplications');
    return this;
  }

  /**
   * Retrieve details about the directory connected to AWS Single Sign-On
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListDirectoryAssociations() {
    this.to('ListDirectoryAssociations');
    return this;
  }

  /**
   * Lists the SSO Instances that the caller has access to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListInstances() {
    this.to('ListInstances');
    return this;
  }

  /**
   * Lists the AWS managed policies that are attached to a specified permission set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListManagedPoliciesInPermissionSet() {
    this.to('ListManagedPoliciesInPermissionSet');
    return this;
  }

  /**
   * Lists the status of the Permission Set Provisioning requests for a specified SSO instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetProvisioningStatus() {
    this.to('ListPermissionSetProvisioningStatus');
    return this;
  }

  /**
   * Retrieve all permission sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSets() {
    this.to('ListPermissionSets');
    return this;
  }

  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetsProvisionedToAccount() {
    this.to('ListPermissionSetsProvisionedToAccount');
    return this;
  }

  /**
   * Retrieve the directory user or group associated with the profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfileAssociations() {
    this.to('ListProfileAssociations');
    return this;
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
    this.to('ListProfiles');
    return this;
  }

  /**
   * Lists the tags that are attached to a specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * The process by which a specified permission set is provisioned to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toProvisionPermissionSet() {
    this.to('ProvisionPermissionSet');
    return this;
  }

  /**
   * Attaches an IAM inline policy to a permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutInlinePolicyToPermissionSet() {
    this.to('PutInlinePolicyToPermissionSet');
    return this;
  }

  /**
   * Put Mfa Device Management settings for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutMfaDeviceManagementForDirectory() {
    this.to('PutMfaDeviceManagementForDirectory');
    return this;
  }

  /**
   * Add a policy to a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toPutPermissionsPolicy() {
    this.to('PutPermissionsPolicy');
    return this;
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
    this.to('SearchGroups');
    return this;
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
    this.to('SearchUsers');
    return this;
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
    this.to('StartSSO');
    return this;
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
    this.to('TagResource');
    return this;
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Set a certificate as the active one for this application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceActiveCertificate() {
    this.to('UpdateApplicationInstanceActiveCertificate');
    return this;
  }

  /**
   * Update display data of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceDisplayData() {
    this.to('UpdateApplicationInstanceDisplayData');
    return this;
  }

  /**
   * Update federation response configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseConfiguration() {
    this.to('UpdateApplicationInstanceResponseConfiguration');
    return this;
  }

  /**
   * Update federation response schema configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceResponseSchemaConfiguration() {
    this.to('UpdateApplicationInstanceResponseSchemaConfiguration');
    return this;
  }

  /**
   * Update security details for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceSecurityConfiguration() {
    this.to('UpdateApplicationInstanceSecurityConfiguration');
    return this;
  }

  /**
   * Update service provider related configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceServiceProviderConfiguration() {
    this.to('UpdateApplicationInstanceServiceProviderConfiguration');
    return this;
  }

  /**
   * Update the status of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateApplicationInstanceStatus() {
    this.to('UpdateApplicationInstanceStatus');
    return this;
  }

  /**
   * Update the user attribute mappings for your connected directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateDirectoryAssociation() {
    this.to('UpdateDirectoryAssociation');
    return this;
  }

  /**
   * Update the status of a managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateManagedApplicationInstanceStatus() {
    this.to('UpdateManagedApplicationInstanceStatus');
    return this;
  }

  /**
   * Update the permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdatePermissionSet() {
    this.to('UpdatePermissionSet');
    return this;
  }

  /**
   * Update the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateProfile() {
    this.to('UpdateProfile');
    return this;
  }

  /**
   * Update the configuration for the current SSO instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateSSOConfiguration() {
    this.to('UpdateSSOConfiguration');
    return this;
  }

  /**
   * Update the federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toUpdateTrust() {
    this.to('UpdateTrust');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateDirectory",
      "AssociateProfile",
      "AttachManagedPolicyToPermissionSet",
      "CreateAccountAssignment",
      "CreateApplicationInstance",
      "CreateApplicationInstanceCertificate",
      "CreateManagedApplicationInstance",
      "CreatePermissionSet",
      "CreateProfile",
      "CreateTrust",
      "DeleteAccountAssignment",
      "DeleteApplicationInstance",
      "DeleteApplicationInstanceCertificate",
      "DeleteInlinePolicyFromPermissionSet",
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
      "UpdateManagedApplicationInstanceStatus",
      "UpdatePermissionSet",
      "UpdateProfile",
      "UpdateSSOConfiguration",
      "UpdateTrust"
    ],
    "Read": [
      "DescribeAccountAssignmentCreationStatus",
      "DescribeAccountAssignmentDeletionStatus",
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
