import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service sso
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html
 */
export class Sso extends PolicyStatement {
  public servicePrefix = 'sso';
  public actions: Actions = {
    "AssociateDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Connect a directory to be used by AWS Single Sign-On",
      "accessLevel": "Write"
    },
    "AssociateProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Create an association between a directory user or group and a profile",
      "accessLevel": "Write"
    },
    "CreateApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Add an application instance to AWS Single Sign-On",
      "accessLevel": "Write"
    },
    "CreateApplicationInstanceCertificate": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Add a new certificate for an application instance",
      "accessLevel": "Write"
    },
    "CreateManagedApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Add a managed application instance to AWS Single Sign-On",
      "accessLevel": "Write"
    },
    "CreatePermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Create a permission set",
      "accessLevel": "Write"
    },
    "CreateProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Create a profile for an application instance",
      "accessLevel": "Write"
    },
    "CreateTrust": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Create a federation trust in a target account",
      "accessLevel": "Write"
    },
    "DeleteApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete the application instance",
      "accessLevel": "Write"
    },
    "DeleteApplicationInstanceCertificate": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete an inactive or expired certificate from the application instance",
      "accessLevel": "Write"
    },
    "DeleteManagedApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete the managed application instance",
      "accessLevel": "Write"
    },
    "DeletePermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete a permission set",
      "accessLevel": "Write"
    },
    "DeletePermissionsPolicy": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete the permission policy associated with a permission set",
      "accessLevel": "Write"
    },
    "DeleteProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete the profile for an application instance",
      "accessLevel": "Write"
    },
    "DescribePermissionsPolicies": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all the permissions policies associated with a permission set",
      "accessLevel": "Read"
    },
    "DescribeRegisteredRegions": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Obtains the regions where your organization has enabled AWS Single Sign-on",
      "accessLevel": "Read"
    },
    "DisassociateDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Disassociate a directory to be used by AWS Single Sign-On",
      "accessLevel": "Write"
    },
    "DisassociateProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Disassociate a directory user or group from a profile",
      "accessLevel": "Write"
    },
    "GetApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve details for an application instance",
      "accessLevel": "Read"
    },
    "GetApplicationTemplate": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve application template details",
      "accessLevel": "Read"
    },
    "GetManagedApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve details for an application instance",
      "accessLevel": "Read"
    },
    "GetMfaDeviceManagementForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve Mfa Device Management settings for the directory",
      "accessLevel": "Read"
    },
    "GetPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve details of a permission set",
      "accessLevel": "Read"
    },
    "GetPermissionsPolicy": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all permission policies associated with a permission set",
      "accessLevel": "Read"
    },
    "GetProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve a profile for an application instance",
      "accessLevel": "Read"
    },
    "GetSSOStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Check if AWS Single Sign-On is enabled",
      "accessLevel": "Read"
    },
    "GetSharedSsoConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve shared configuration for the current SSO instance",
      "accessLevel": "Read"
    },
    "GetSsoConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve configuration for the current SSO instance",
      "accessLevel": "Read"
    },
    "GetTrust": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve the federation trust in a target account",
      "accessLevel": "Read"
    },
    "ImportApplicationInstanceServiceProviderMetadata": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the application instance by uploading an application SAML metadata file provided by the service provider",
      "accessLevel": "Write"
    },
    "ListApplicationInstanceCertificates": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all of the certificates for a given application instance",
      "accessLevel": "Read"
    },
    "ListApplicationInstances": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all application instances",
      "accessLevel": "List"
    },
    "ListApplicationTemplates": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all supported application templates",
      "accessLevel": "Read"
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all supported applications",
      "accessLevel": "Read"
    },
    "ListDirectoryAssociations": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve details about the directory connected to AWS Single Sign-On",
      "accessLevel": "Read"
    },
    "ListPermissionSets": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all permission sets",
      "accessLevel": "Read"
    },
    "ListProfileAssociations": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve the directory user or group associated with the profile",
      "accessLevel": "Read"
    },
    "ListProfiles": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all profiles for an application instance",
      "accessLevel": "Read"
    },
    "PutMfaDeviceManagementForDirectory": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Put Mfa Device Management settings for the directory",
      "accessLevel": "Write"
    },
    "PutPermissionsPolicy": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Add a policy to a permission set",
      "accessLevel": "Write"
    },
    "StartSSO": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Initialize AWS Single Sign-On",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceActiveCertificate": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Set a certificate as the active one for this application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceDisplayData": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update display data of an application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceResponseConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update federation response configuration for the application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceResponseSchemaConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update federation response schema configuration for the application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update security details for the application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceServiceProviderConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update service provider related configuration for the application instance",
      "accessLevel": "Write"
    },
    "UpdateApplicationInstanceStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the status of an application instance",
      "accessLevel": "Write"
    },
    "UpdateDirectoryAssociation": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the user attribute mappings for your connected directory",
      "accessLevel": "Write"
    },
    "UpdateManagedApplicationInstanceStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the status of a managed application instance",
      "accessLevel": "Write"
    },
    "UpdatePermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the permission set.",
      "accessLevel": "Write"
    },
    "UpdateProfile": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the profile for an application instance",
      "accessLevel": "Write"
    },
    "UpdateSSOConfiguration": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the configuration for the current SSO instance",
      "accessLevel": "Write"
    },
    "UpdateTrust": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Update the federation trust in a target account",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service sso
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Connect a directory to be used by AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public associateDirectory() {
    this.add('sso:AssociateDirectory');
    return this;
  }

  /**
   * Create an association between a directory user or group and a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public associateProfile() {
    this.add('sso:AssociateProfile');
    return this;
  }

  /**
   * Add an application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createApplicationInstance() {
    this.add('sso:CreateApplicationInstance');
    return this;
  }

  /**
   * Add a new certificate for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createApplicationInstanceCertificate() {
    this.add('sso:CreateApplicationInstanceCertificate');
    return this;
  }

  /**
   * Add a managed application instance to AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createManagedApplicationInstance() {
    this.add('sso:CreateManagedApplicationInstance');
    return this;
  }

  /**
   * Create a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createPermissionSet() {
    this.add('sso:CreatePermissionSet');
    return this;
  }

  /**
   * Create a profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createProfile() {
    this.add('sso:CreateProfile');
    return this;
  }

  /**
   * Create a federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public createTrust() {
    this.add('sso:CreateTrust');
    return this;
  }

  /**
   * Delete the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteApplicationInstance() {
    this.add('sso:DeleteApplicationInstance');
    return this;
  }

  /**
   * Delete an inactive or expired certificate from the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteApplicationInstanceCertificate() {
    this.add('sso:DeleteApplicationInstanceCertificate');
    return this;
  }

  /**
   * Delete the managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteManagedApplicationInstance() {
    this.add('sso:DeleteManagedApplicationInstance');
    return this;
  }

  /**
   * Delete a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deletePermissionSet() {
    this.add('sso:DeletePermissionSet');
    return this;
  }

  /**
   * Delete the permission policy associated with a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deletePermissionsPolicy() {
    this.add('sso:DeletePermissionsPolicy');
    return this;
  }

  /**
   * Delete the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public deleteProfile() {
    this.add('sso:DeleteProfile');
    return this;
  }

  /**
   * Retrieve all the permissions policies associated with a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public describePermissionsPolicies() {
    this.add('sso:DescribePermissionsPolicies');
    return this;
  }

  /**
   * Obtains the regions where your organization has enabled AWS Single Sign-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public describeRegisteredRegions() {
    this.add('sso:DescribeRegisteredRegions');
    return this;
  }

  /**
   * Disassociate a directory to be used by AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public disassociateDirectory() {
    this.add('sso:DisassociateDirectory');
    return this;
  }

  /**
   * Disassociate a directory user or group from a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public disassociateProfile() {
    this.add('sso:DisassociateProfile');
    return this;
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getApplicationInstance() {
    this.add('sso:GetApplicationInstance');
    return this;
  }

  /**
   * Retrieve application template details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getApplicationTemplate() {
    this.add('sso:GetApplicationTemplate');
    return this;
  }

  /**
   * Retrieve details for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getManagedApplicationInstance() {
    this.add('sso:GetManagedApplicationInstance');
    return this;
  }

  /**
   * Retrieve Mfa Device Management settings for the directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getMfaDeviceManagementForDirectory() {
    this.add('sso:GetMfaDeviceManagementForDirectory');
    return this;
  }

  /**
   * Retrieve details of a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getPermissionSet() {
    this.add('sso:GetPermissionSet');
    return this;
  }

  /**
   * Retrieve all permission policies associated with a permission set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getPermissionsPolicy() {
    this.add('sso:GetPermissionsPolicy');
    return this;
  }

  /**
   * Retrieve a profile for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getProfile() {
    this.add('sso:GetProfile');
    return this;
  }

  /**
   * Check if AWS Single Sign-On is enabled
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getSSOStatus() {
    this.add('sso:GetSSOStatus');
    return this;
  }

  /**
   * Retrieve shared configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getSharedSsoConfiguration() {
    this.add('sso:GetSharedSsoConfiguration');
    return this;
  }

  /**
   * Retrieve configuration for the current SSO instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getSsoConfiguration() {
    this.add('sso:GetSsoConfiguration');
    return this;
  }

  /**
   * Retrieve the federation trust in a target account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public getTrust() {
    this.add('sso:GetTrust');
    return this;
  }

  /**
   * Update the application instance by uploading an application SAML metadata file provided by the service provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public importApplicationInstanceServiceProviderMetadata() {
    this.add('sso:ImportApplicationInstanceServiceProviderMetadata');
    return this;
  }

  /**
   * Retrieve all of the certificates for a given application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listApplicationInstanceCertificates() {
    this.add('sso:ListApplicationInstanceCertificates');
    return this;
  }

  /**
   * Retrieve all application instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listApplicationInstances() {
    this.add('sso:ListApplicationInstances');
    return this;
  }

  /**
   * Retrieve all supported application templates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listApplicationTemplates() {
    this.add('sso:ListApplicationTemplates');
    return this;
  }

  /**
   * Retrieve all supported applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listApplications() {
    this.add('sso:ListApplications');
    return this;
  }

  /**
   * Retrieve details about the directory connected to AWS Single Sign-On
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listDirectoryAssociations() {
    this.add('sso:ListDirectoryAssociations');
    return this;
  }

  /**
   * Retrieve all permission sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listPermissionSets() {
    this.add('sso:ListPermissionSets');
    return this;
  }

  /**
   * Retrieve the directory user or group associated with the profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listProfileAssociations() {
    this.add('sso:ListProfileAssociations');
    return this;
  }

  /**
   * Retrieve all profiles for an application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public listProfiles() {
    this.add('sso:ListProfiles');
    return this;
  }

  /**
   * Put Mfa Device Management settings for the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public putMfaDeviceManagementForDirectory() {
    this.add('sso:PutMfaDeviceManagementForDirectory');
    return this;
  }

  /**
   * Add a policy to a permission set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public putPermissionsPolicy() {
    this.add('sso:PutPermissionsPolicy');
    return this;
  }

  /**
   * Initialize AWS Single Sign-On
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public startSSO() {
    this.add('sso:StartSSO');
    return this;
  }

  /**
   * Set a certificate as the active one for this application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceActiveCertificate() {
    this.add('sso:UpdateApplicationInstanceActiveCertificate');
    return this;
  }

  /**
   * Update display data of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceDisplayData() {
    this.add('sso:UpdateApplicationInstanceDisplayData');
    return this;
  }

  /**
   * Update federation response configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceResponseConfiguration() {
    this.add('sso:UpdateApplicationInstanceResponseConfiguration');
    return this;
  }

  /**
   * Update federation response schema configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceResponseSchemaConfiguration() {
    this.add('sso:UpdateApplicationInstanceResponseSchemaConfiguration');
    return this;
  }

  /**
   * Update security details for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceSecurityConfiguration() {
    this.add('sso:UpdateApplicationInstanceSecurityConfiguration');
    return this;
  }

  /**
   * Update service provider related configuration for the application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceServiceProviderConfiguration() {
    this.add('sso:UpdateApplicationInstanceServiceProviderConfiguration');
    return this;
  }

  /**
   * Update the status of an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateApplicationInstanceStatus() {
    this.add('sso:UpdateApplicationInstanceStatus');
    return this;
  }

  /**
   * Update the user attribute mappings for your connected directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateDirectoryAssociation() {
    this.add('sso:UpdateDirectoryAssociation');
    return this;
  }

  /**
   * Update the status of a managed application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateManagedApplicationInstanceStatus() {
    this.add('sso:UpdateManagedApplicationInstanceStatus');
    return this;
  }

  /**
   * Update the permission set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updatePermissionSet() {
    this.add('sso:UpdatePermissionSet');
    return this;
  }

  /**
   * Update the profile for an application instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateProfile() {
    this.add('sso:UpdateProfile');
    return this;
  }

  /**
   * Update the configuration for the current SSO instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateSSOConfiguration() {
    this.add('sso:UpdateSSOConfiguration');
    return this;
  }

  /**
   * Update the federation trust in a target account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public updateTrust() {
    this.add('sso:UpdateTrust');
    return this;
  }
}
