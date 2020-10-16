import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [sso](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sso extends PolicyStatement {
  public servicePrefix = 'sso';

  /**
   * Statement provider for service [sso](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html).
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
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toAssociateDirectory() {
    this.to('sso:AssociateDirectory');
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
    this.to('sso:AssociateProfile');
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
    this.to('sso:AttachManagedPolicyToPermissionSet');
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
    this.to('sso:CreateAccountAssignment');
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
    this.to('sso:CreateApplicationInstance');
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
    this.to('sso:CreateApplicationInstanceCertificate');
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
    this.to('sso:CreateManagedApplicationInstance');
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
    this.to('sso:CreatePermissionSet');
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
    this.to('sso:CreateProfile');
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
    this.to('sso:CreateTrust');
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
    this.to('sso:DeleteAccountAssignment');
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
    this.to('sso:DeleteApplicationInstance');
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
    this.to('sso:DeleteApplicationInstanceCertificate');
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
    this.to('sso:DeleteInlinePolicyFromPermissionSet');
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
    this.to('sso:DeleteManagedApplicationInstance');
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
    this.to('sso:DeletePermissionSet');
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
    this.to('sso:DeletePermissionsPolicy');
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
    this.to('sso:DeleteProfile');
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
    this.to('sso:DescribeAccountAssignmentCreationStatus');
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
    this.to('sso:DescribeAccountAssignmentDeletionStatus');
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
    this.to('sso:DescribePermissionSet');
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
    this.to('sso:DescribePermissionSetProvisioningStatus');
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
    this.to('sso:DescribePermissionsPolicies');
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
    this.to('sso:DescribeRegisteredRegions');
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
    this.to('sso:DetachManagedPolicyFromPermissionSet');
    return this;
  }

  /**
   * Disassociate a directory to be used by AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toDisassociateDirectory() {
    this.to('sso:DisassociateDirectory');
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
    this.to('sso:DisassociateProfile');
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
    this.to('sso:GetApplicationInstance');
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
    this.to('sso:GetApplicationTemplate');
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
    this.to('sso:GetInlinePolicyForPermissionSet');
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
    this.to('sso:GetManagedApplicationInstance');
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
    this.to('sso:GetMfaDeviceManagementForDirectory');
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
    this.to('sso:GetPermissionSet');
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
    this.to('sso:GetPermissionsPolicy');
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
    this.to('sso:GetProfile');
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
    this.to('sso:GetSSOStatus');
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
    this.to('sso:GetSharedSsoConfiguration');
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
    this.to('sso:GetSsoConfiguration');
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
    this.to('sso:GetTrust');
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
    this.to('sso:ImportApplicationInstanceServiceProviderMetadata');
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
    this.to('sso:ListAccountAssignmentCreationStatus');
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
    this.to('sso:ListAccountAssignmentDeletionStatus');
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
    this.to('sso:ListAccountAssignments');
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
    this.to('sso:ListAccountsForProvisionedPermissionSet');
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
    this.to('sso:ListApplicationInstanceCertificates');
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
    this.to('sso:ListApplicationInstances');
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
    this.to('sso:ListApplicationTemplates');
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
    this.to('sso:ListApplications');
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
    this.to('sso:ListDirectoryAssociations');
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
    this.to('sso:ListInstances');
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
    this.to('sso:ListManagedPoliciesInPermissionSet');
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
    this.to('sso:ListPermissionSetProvisioningStatus');
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
    this.to('sso:ListPermissionSets');
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
    this.to('sso:ListPermissionSetsProvisionedToAccount');
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
    this.to('sso:ListProfileAssociations');
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
    this.to('sso:ListProfiles');
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
    this.to('sso:ListTagsForResource');
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
    this.to('sso:ProvisionPermissionSet');
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
    this.to('sso:PutInlinePolicyToPermissionSet');
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
    this.to('sso:PutMfaDeviceManagementForDirectory');
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
    this.to('sso:PutPermissionsPolicy');
    return this;
  }

  /**
   * Initialize AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toStartSSO() {
    this.to('sso:StartSSO');
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
    this.to('sso:TagResource');
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
    this.to('sso:UntagResource');
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
    this.to('sso:UpdateApplicationInstanceActiveCertificate');
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
    this.to('sso:UpdateApplicationInstanceDisplayData');
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
    this.to('sso:UpdateApplicationInstanceResponseConfiguration');
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
    this.to('sso:UpdateApplicationInstanceResponseSchemaConfiguration');
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
    this.to('sso:UpdateApplicationInstanceSecurityConfiguration');
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
    this.to('sso:UpdateApplicationInstanceServiceProviderConfiguration');
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
    this.to('sso:UpdateApplicationInstanceStatus');
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
    this.to('sso:UpdateDirectoryAssociation');
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
    this.to('sso:UpdateManagedApplicationInstanceStatus');
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
    this.to('sso:UpdatePermissionSet');
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
    this.to('sso:UpdateProfile');
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
    this.to('sso:UpdateSSOConfiguration');
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
    this.to('sso:UpdateTrust');
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
      "GetTrust"
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
