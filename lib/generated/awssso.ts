import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sso](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sso extends PolicyStatement {
  public servicePrefix = 'sso';
  protected actionList: Actions = {
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
    "AttachManagedPolicyToPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Attaches an AWS managed policy to a permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "CreateAccountAssignment": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Assigns access to a Principal for a specified AWS account using a specified permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Account": {
          "required": true
        },
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
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
    "DeleteAccountAssignment": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes a Principal's access from a specified AWS account using a specified permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Account": {
          "required": true
        },
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
    "DeleteInlinePolicyFromPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Deletes the inline policy from a specified permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "DeleteManagedApplicationInstance": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete the managed application instance",
      "accessLevel": "Write"
    },
    "DeletePermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Delete a permission set",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
    "DescribeAccountAssignmentCreationStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Describes the status of the assignment creation request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "DescribeAccountAssignmentDeletionStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Describes the status of an assignment deletion request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "DescribePermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Describes a permission set",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "DescribePermissionSetProvisioningStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Describes the status for the given Permission Set Provisioning request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
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
    "DetachManagedPolicyFromPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Detaches the attached AWS managed policy from the specified permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
    "GetInlinePolicyForPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Obtains the inline policy assigned to the permission set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
      "accessLevel": "Read",
      "dependentActions": [
        "sso:DescribePermissionsPolicies"
      ]
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
    "ListAccountAssignmentCreationStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the status of the AWS account assignment creation requests for a specified SSO instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "ListAccountAssignmentDeletionStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the status of the AWS account assignment deletion requests for a specified SSO instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "ListAccountAssignments": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the assignee of the specified AWS account with the specified permission set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Account": {
          "required": true
        },
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "ListAccountsForProvisionedPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists all the AWS accounts where the specified permission set is provisioned.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "ListApplicationInstanceCertificates": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all of the certificates for a given application instance",
      "accessLevel": "Read"
    },
    "ListApplicationInstances": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all application instances",
      "accessLevel": "List",
      "dependentActions": [
        "sso:GetApplicationInstance"
      ]
    },
    "ListApplicationTemplates": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all supported application templates",
      "accessLevel": "Read",
      "dependentActions": [
        "sso:GetApplicationTemplate"
      ]
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
    "ListInstances": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the SSO Instances that the caller has access to.",
      "accessLevel": "Read"
    },
    "ListManagedPoliciesInPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the AWS managed policies that are attached to a specified permission set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "ListPermissionSetProvisioningStatus": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the status of the Permission Set Provisioning requests for a specified SSO instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "ListPermissionSets": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all permission sets",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        }
      }
    },
    "ListPermissionSetsProvisionedToAccount": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists all the permission sets that are provisioned to a specified AWS account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Account": {
          "required": true
        },
        "Instance": {
          "required": true
        }
      }
    },
    "ListProfileAssociations": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve the directory user or group associated with the profile",
      "accessLevel": "Read"
    },
    "ListProfiles": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Retrieve all profiles for an application instance",
      "accessLevel": "Read",
      "dependentActions": [
        "sso:GetProfile"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Lists the tags that are attached to a specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "ProvisionPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "The process by which a specified permission set is provisioned to the specified target.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Account": {
          "required": true
        },
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
    },
    "PutInlinePolicyToPermissionSet": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Attaches an IAM inline policy to a permission set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
    "TagResource": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Associates a set of tags with a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample",
      "description": "Disassociates a set of tags from a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
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
      "accessLevel": "Write",
      "resourceTypes": {
        "Instance": {
          "required": true
        },
        "PermissionSet": {
          "required": true
        }
      }
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
  protected resourceTypes: ResourceTypes = {
    "PermissionSet": {
      "name": "PermissionSet",
      "url": "",
      "arn": "arn:${Partition}:sso:::permissionSet/${InstanceId}/${PermissionSetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Account": {
      "name": "Account",
      "url": "",
      "arn": "arn:${Partition}:sso:::account/${AccountId}",
      "conditionKeys": []
    },
    "Instance": {
      "name": "Instance",
      "url": "",
      "arn": "arn:${Partition}:sso:::instance/${InstanceId}",
      "conditionKeys": []
    }
  };

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
  public toAssociateProfile() {
    this.add('sso:AssociateProfile');
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
    this.add('sso:AttachManagedPolicyToPermissionSet');
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
    this.add('sso:CreateAccountAssignment');
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
  public toCreateApplicationInstanceCertificate() {
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
  public toCreateManagedApplicationInstance() {
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
  public toCreatePermissionSet() {
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
  public toCreateProfile() {
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
  public toCreateTrust() {
    this.add('sso:CreateTrust');
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
    this.add('sso:DeleteAccountAssignment');
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
  public toDeleteApplicationInstanceCertificate() {
    this.add('sso:DeleteApplicationInstanceCertificate');
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
    this.add('sso:DeleteInlinePolicyFromPermissionSet');
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
  public toDeletePermissionSet() {
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
  public toDeletePermissionsPolicy() {
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
  public toDeleteProfile() {
    this.add('sso:DeleteProfile');
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
    this.add('sso:DescribeAccountAssignmentCreationStatus');
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
    this.add('sso:DescribeAccountAssignmentDeletionStatus');
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
    this.add('sso:DescribePermissionSet');
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
    this.add('sso:DescribePermissionSetProvisioningStatus');
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
  public toDescribeRegisteredRegions() {
    this.add('sso:DescribeRegisteredRegions');
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
    this.add('sso:DetachManagedPolicyFromPermissionSet');
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
  public toDisassociateProfile() {
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
  public toGetApplicationInstance() {
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
  public toGetApplicationTemplate() {
    this.add('sso:GetApplicationTemplate');
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
    this.add('sso:GetInlinePolicyForPermissionSet');
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
  public toGetMfaDeviceManagementForDirectory() {
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
  public toGetPermissionSet() {
    this.add('sso:GetPermissionSet');
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
  public toGetProfile() {
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
  public toGetSSOStatus() {
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
  public toGetSharedSsoConfiguration() {
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
  public toGetSsoConfiguration() {
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
  public toGetTrust() {
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
  public toImportApplicationInstanceServiceProviderMetadata() {
    this.add('sso:ImportApplicationInstanceServiceProviderMetadata');
    return this;
  }

  /**
   * Lists the status of the AWS account assignment creation requests for a specified SSO instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentCreationStatus() {
    this.add('sso:ListAccountAssignmentCreationStatus');
    return this;
  }

  /**
   * Lists the status of the AWS account assignment deletion requests for a specified SSO instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignmentDeletionStatus() {
    this.add('sso:ListAccountAssignmentDeletionStatus');
    return this;
  }

  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountAssignments() {
    this.add('sso:ListAccountAssignments');
    return this;
  }

  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListAccountsForProvisionedPermissionSet() {
    this.add('sso:ListAccountsForProvisionedPermissionSet');
    return this;
  }

  /**
   * Retrieve all of the certificates for a given application instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationInstanceCertificates() {
    this.add('sso:ListApplicationInstanceCertificates');
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
    this.add('sso:ListApplicationInstances');
    return this;
  }

  /**
   * Retrieve all supported application templates
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - sso:GetApplicationTemplate
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListApplicationTemplates() {
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
  public toListApplications() {
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
  public toListDirectoryAssociations() {
    this.add('sso:ListDirectoryAssociations');
    return this;
  }

  /**
   * Lists the SSO Instances that the caller has access to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListInstances() {
    this.add('sso:ListInstances');
    return this;
  }

  /**
   * Lists the AWS managed policies that are attached to a specified permission set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListManagedPoliciesInPermissionSet() {
    this.add('sso:ListManagedPoliciesInPermissionSet');
    return this;
  }

  /**
   * Lists the status of the Permission Set Provisioning requests for a specified SSO instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetProvisioningStatus() {
    this.add('sso:ListPermissionSetProvisioningStatus');
    return this;
  }

  /**
   * Retrieve all permission sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSets() {
    this.add('sso:ListPermissionSets');
    return this;
  }

  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListPermissionSetsProvisionedToAccount() {
    this.add('sso:ListPermissionSetsProvisionedToAccount');
    return this;
  }

  /**
   * Retrieve the directory user or group associated with the profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfileAssociations() {
    this.add('sso:ListProfileAssociations');
    return this;
  }

  /**
   * Retrieve all profiles for an application instance
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - sso:GetProfile
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListProfiles() {
    this.add('sso:ListProfiles');
    return this;
  }

  /**
   * Lists the tags that are attached to a specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  public toListTagsForResource() {
    this.add('sso:ListTagsForResource');
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
    this.add('sso:ProvisionPermissionSet');
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
    this.add('sso:PutInlinePolicyToPermissionSet');
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
  public toPutPermissionsPolicy() {
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
  public toStartSSO() {
    this.add('sso:StartSSO');
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
    this.add('sso:TagResource');
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
    this.add('sso:UntagResource');
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
  public toUpdateApplicationInstanceDisplayData() {
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
  public toUpdateApplicationInstanceResponseConfiguration() {
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
  public toUpdateApplicationInstanceResponseSchemaConfiguration() {
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
  public toUpdateApplicationInstanceSecurityConfiguration() {
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
  public toUpdateApplicationInstanceServiceProviderConfiguration() {
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
  public toUpdateApplicationInstanceStatus() {
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
  public toUpdateDirectoryAssociation() {
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
  public toUpdateManagedApplicationInstanceStatus() {
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
  public toUpdatePermissionSet() {
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
  public toUpdateProfile() {
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
  public toUpdateSSOConfiguration() {
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
  public toUpdateTrust() {
    this.add('sso:UpdateTrust');
    return this;
  }

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
