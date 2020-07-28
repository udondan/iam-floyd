import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iam extends PolicyStatement {
  public servicePrefix = 'iam';
  protected actionList: Actions = {
    "AddClientIDToOpenIDConnectProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html",
      "description": "Grants permission to add a new client ID (audience) to the list of registered IDs for the specified IAM OpenID Connect (OIDC) provider resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "AddRoleToInstanceProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html",
      "description": "Grants permission to add an IAM role to the specified instance profile",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "AddUserToGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html",
      "description": "Grants permission to add an IAM user to the specified IAM group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "AttachGroupPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html",
      "description": "Grants permission to attach a managed policy to the specified IAM group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN"
      ]
    },
    "AttachRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html",
      "description": "Grants permission to attach a managed policy to the specified IAM role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN",
        "iam:PermissionsBoundary"
      ]
    },
    "AttachUserPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html",
      "description": "Grants permission to attach a managed policy to the specified IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN",
        "iam:PermissionsBoundary"
      ]
    },
    "ChangePassword": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html",
      "description": "Grants permission for an IAM user to to change their own password",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateAccessKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html",
      "description": "Grants permission to create access key and secret access key for the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateAccountAlias": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html",
      "description": "Grants permission to create an alias for your AWS account",
      "accessLevel": "Write"
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html",
      "description": "Grants permission to create a new group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateInstanceProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html",
      "description": "Grants permission to create a new instance profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "CreateLoginProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html",
      "description": "Grants permission to create a password for the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateOpenIDConnectProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html",
      "description": "Grants permission to create an IAM resource that describes an identity provider (IdP) that supports OpenID Connect (OIDC)",
      "accessLevel": "Write",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "CreatePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html",
      "description": "Grants permission to create a new managed policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "CreatePolicyVersion": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html",
      "description": "Grants permission to create a new version of the specified managed policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "CreateRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html",
      "description": "Grants permission to create a new role",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "CreateSAMLProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html",
      "description": "Grants permission to create an IAM resource that describes an identity provider (IdP) that supports SAML 2.0",
      "accessLevel": "Write",
      "resourceTypes": {
        "saml-provider": {
          "required": true
        }
      }
    },
    "CreateServiceLinkedRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html",
      "description": "Grants permission to create an IAM role that allows an AWS service to perform actions on your behalf",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:AWSServiceName"
      ]
    },
    "CreateServiceSpecificCredential": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html",
      "description": "Grants permission to create a new service-specific credential for an IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html",
      "description": "Grants permission to create a new IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "CreateVirtualMFADevice": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html",
      "description": "Grants permission to create a new virtual MFA device",
      "accessLevel": "Write",
      "resourceTypes": {
        "mfa": {
          "required": true
        }
      }
    },
    "DeactivateMFADevice": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html",
      "description": "Grants permission to deactivate the specified MFA device and remove its association with the IAM user for which it was originally enabled",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteAccessKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html",
      "description": "Grants permission to delete the access key pair that is associated with the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteAccountAlias": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html",
      "description": "Grants permission to delete the specified AWS account alias",
      "accessLevel": "Write"
    },
    "DeleteAccountPasswordPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html",
      "description": "Grants permission to delete the password policy for the AWS account",
      "accessLevel": "Permissions management"
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html",
      "description": "Grants permission to delete the specified IAM group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DeleteGroupPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html",
      "description": "Grants permission to delete the specified inline policy from its group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DeleteInstanceProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html",
      "description": "Grants permission to delete the specified instance profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "DeleteLoginProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html",
      "description": "Grants permission to delete the password for the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteOpenIDConnectProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html",
      "description": "Grants permission to delete an OpenID Connect identity provider (IdP) resource object in IAM",
      "accessLevel": "Write",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "DeletePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html",
      "description": "Grants permission to delete the specified managed policy and remove it from any IAM entities (users, groups, or roles) to which it is attached",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "DeletePolicyVersion": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html",
      "description": "Grants permission to delete a version from the specified managed policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "DeleteRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html",
      "description": "Grants permission to delete the specified role",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "DeleteRolePermissionsBoundary": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html",
      "description": "Grants permission to remove the permissions boundary from a role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "DeleteRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html",
      "description": "Grants permission to delete the specified inline policy from the specified role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "DeleteSAMLProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html",
      "description": "Grants permission to delete a SAML provider resource in IAM",
      "accessLevel": "Write",
      "resourceTypes": {
        "saml-provider": {
          "required": true
        }
      }
    },
    "DeleteSSHPublicKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html",
      "description": "Grants permission to delete the specified SSH public key",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteServerCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html",
      "description": "Grants permission to delete the specified server certificate",
      "accessLevel": "Write",
      "resourceTypes": {
        "server-certificate": {
          "required": true
        }
      }
    },
    "DeleteServiceLinkedRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html",
      "description": "Grants permission to delete an IAM role that is linked to a specific AWS service, if the service is no longer using it",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "DeleteServiceSpecificCredential": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html",
      "description": "Grants permission to delete the specified service-specific credential for an IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteSigningCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html",
      "description": "Grants permission to delete a signing certificate that is associated with the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html",
      "description": "Grants permission to delete the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "DeleteUserPermissionsBoundary": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html",
      "description": "Grants permission to remove the permissions boundary from the specified IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "DeleteUserPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html",
      "description": "Grants permission to delete the specified inline policy from an IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "DeleteVirtualMFADevice": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html",
      "description": "Grants permission to delete a virtual MFA device",
      "accessLevel": "Write",
      "resourceTypes": {
        "mfa": {
          "required": false
        },
        "sms-mfa": {
          "required": false
        }
      }
    },
    "DetachGroupPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html",
      "description": "Grants permission to detach a managed policy from the specified IAM group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "group": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN"
      ]
    },
    "DetachRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html",
      "description": "Grants permission to detach a managed policy from the specified role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN",
        "iam:PermissionsBoundary"
      ]
    },
    "DetachUserPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html",
      "description": "Grants permission to detach a managed policy from the specified IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PolicyARN",
        "iam:PermissionsBoundary"
      ]
    },
    "EnableMFADevice": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html",
      "description": "Grants permission to enable an MFA device and associate it with the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GenerateCredentialReport": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html",
      "description": "Grants permission to generate a credential report for the AWS account",
      "accessLevel": "Read"
    },
    "GenerateOrganizationsAccessReport": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html",
      "description": "Grants permission to generate an access report for an AWS Organizations entity",
      "accessLevel": "Read",
      "dependentActions": [
        "organizations:DescribePolicy",
        "organizations:ListChildren",
        "organizations:ListParents",
        "organizations:ListPoliciesForTarget",
        "organizations:ListRoots",
        "organizations:ListTargetsForPolicy"
      ],
      "resourceTypes": {
        "access-report": {
          "required": true
        }
      },
      "conditions": [
        "iam:OrganizationsPolicyId"
      ]
    },
    "GenerateServiceLastAccessedDetails": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html",
      "description": "Grants permission to generate a service last accessed data report for an IAM resource",
      "accessLevel": "Read"
    },
    "GetAccessKeyLastUsed": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html",
      "description": "Grants permission to retrieve information about when the specified access key was last used",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetAccountAuthorizationDetails": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html",
      "description": "Grants permission to retrieve information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another",
      "accessLevel": "Read"
    },
    "GetAccountPasswordPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html",
      "description": "Grants permission to retrieve the password policy for the AWS account",
      "accessLevel": "Read"
    },
    "GetAccountSummary": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html",
      "description": "Grants permission to retrieve information about IAM entity usage and IAM quotas in the AWS account",
      "accessLevel": "List"
    },
    "GetContextKeysForCustomPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html",
      "description": "Grants permission to retrieve a list of all of the context keys that are referenced in the specified policy",
      "accessLevel": "Read"
    },
    "GetContextKeysForPrincipalPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html",
      "description": "Grants permission to retrieve a list of all context keys that are referenced in all IAM policies that are attached to the specified IAM identity (user, group, or role)",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": false
        },
        "role": {
          "required": false
        },
        "user": {
          "required": false
        }
      }
    },
    "GetCredentialReport": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html",
      "description": "Grants permission to retrieve a credential report for the AWS account",
      "accessLevel": "Read"
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html",
      "description": "Grants permission to retrieve a list of IAM users in the specified IAM group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroupPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html",
      "description": "Grants permission to retrieve an inline policy document that is embedded in the specified IAM group",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetInstanceProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html",
      "description": "Grants permission to retrieve information about the specified instance profile, including the instance profile's path, GUID, ARN, and role",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "GetLoginProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html",
      "description": "Grants permission to retrieve the user name and password creation date for the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetOpenIDConnectProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html",
      "description": "Grants permission to retrieve information about the specified OpenID Connect (OIDC) provider resource in IAM",
      "accessLevel": "Read",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "GetOrganizationsAccessReport": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html",
      "description": "Grants permission to retrieve an AWS Organizations access report",
      "accessLevel": "Read"
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html",
      "description": "Grants permission to retrieve information about the specified managed policy, including the policy's default version and the total number of identities to which the policy is attached",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetPolicyVersion": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html",
      "description": "Grants permission to retrieve information about a version of the specified managed policy, including the policy document",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html",
      "description": "Grants permission to retrieve information about the specified role, including the role's path, GUID, ARN, and the role's trust policy",
      "accessLevel": "Read",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "GetRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html",
      "description": "Grants permission to retrieve an inline policy document that is embedded with the specified IAM role",
      "accessLevel": "Read",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "GetSAMLProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html",
      "description": "Grants permission to retrieve the SAML provider metadocument that was uploaded when the IAM SAML provider resource was created or updated",
      "accessLevel": "Read",
      "resourceTypes": {
        "saml-provider": {
          "required": true
        }
      }
    },
    "GetSSHPublicKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html",
      "description": "Grants permission to retrieve the specified SSH public key, including metadata about the key",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetServerCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html",
      "description": "Grants permission to retrieve information about the specified server certificate stored in IAM",
      "accessLevel": "Read",
      "resourceTypes": {
        "server-certificate": {
          "required": true
        }
      }
    },
    "GetServiceLastAccessedDetails": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html",
      "description": "Grants permission to retrieve information about the service last accessed data report",
      "accessLevel": "Read"
    },
    "GetServiceLastAccessedDetailsWithEntities": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html",
      "description": "Grants permission to retrieve information about the entities from the service last accessed data report",
      "accessLevel": "Read"
    },
    "GetServiceLinkedRoleDeletionStatus": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html",
      "description": "Grants permission to retrieve an IAM service-linked role deletion status",
      "accessLevel": "Read",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "GetUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html",
      "description": "Grants permission to retrieve information about the specified IAM user, including the user's creation date, path, unique ID, and ARN",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "GetUserPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html",
      "description": "Grants permission to retrieve an inline policy document that is embedded in the specified IAM user",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListAccessKeys": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html",
      "description": "Grants permission to list information about the access key IDs that are associated with the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListAccountAliases": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html",
      "description": "Grants permission to list the account alias that is associated with the AWS account",
      "accessLevel": "List"
    },
    "ListAttachedGroupPolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html",
      "description": "Grants permission to list all managed policies that are attached to the specified IAM group",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListAttachedRolePolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html",
      "description": "Grants permission to list all managed policies that are attached to the specified IAM role",
      "accessLevel": "List",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "ListAttachedUserPolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html",
      "description": "Grants permission to list all managed policies that are attached to the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListEntitiesForPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html",
      "description": "Grants permission to list all IAM identities to which the specified managed policy is attached",
      "accessLevel": "List",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListGroupPolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html",
      "description": "Grants permission to list the names of the inline policies that are embedded in the specified IAM group",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html",
      "description": "Grants permission to list the IAM groups that have the specified path prefix",
      "accessLevel": "List"
    },
    "ListGroupsForUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html",
      "description": "Grants permission to list the IAM groups that the specified IAM user belongs to",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListInstanceProfiles": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html",
      "description": "Grants permission to list the instance profiles that have the specified path prefix",
      "accessLevel": "List",
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "ListInstanceProfilesForRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html",
      "description": "Grants permission to list the instance profiles that have the specified associated IAM role",
      "accessLevel": "List",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "ListMFADevices": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html",
      "description": "Grants permission to list the MFA devices for an IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": false
        }
      }
    },
    "ListOpenIDConnectProviders": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html",
      "description": "Grants permission to list information about the IAM OpenID Connect (OIDC) provider resource objects that are defined in the AWS account",
      "accessLevel": "List"
    },
    "ListPolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html",
      "description": "Grants permission to list all managed policies",
      "accessLevel": "List"
    },
    "ListPoliciesGrantingServiceAccess": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html",
      "description": "Grants permission to list information about the policies that grant an entity access to a specific service",
      "accessLevel": "List"
    },
    "ListPolicyVersions": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html",
      "description": "Grants permission to list information about the versions of the specified managed policy, including the version that is currently set as the policy's default version",
      "accessLevel": "List",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListRolePolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html",
      "description": "Grants permission to list the names of the inline policies that are embedded in the specified IAM role",
      "accessLevel": "List",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "ListRoleTags": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html",
      "description": "Grants permission to list the tags that are attached to the specified IAM role.",
      "accessLevel": "List",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "ListRoles": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html",
      "description": "Grants permission to list the IAM roles that have the specified path prefix",
      "accessLevel": "List"
    },
    "ListSAMLProviders": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html",
      "description": "Grants permission to list the SAML provider resources in IAM",
      "accessLevel": "List"
    },
    "ListSSHPublicKeys": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html",
      "description": "Grants permission to list information about the SSH public keys that are associated with the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListServerCertificates": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html",
      "description": "Grants permission to list the server certificates that have the specified path prefix",
      "accessLevel": "List"
    },
    "ListServiceSpecificCredentials": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html",
      "description": "Grants permission to list the service-specific credentials that are associated with the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListSigningCertificates": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html",
      "description": "Grants permission to list information about the signing certificates that are associated with the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListUserPolicies": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html",
      "description": "Grants permission to list the names of the inline policies that are embedded in the specified IAM user",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListUserTags": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html",
      "description": "Grants permission to list the tags that are attached to the specified IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html",
      "description": "Grants permission to list the IAM users that have the specified path prefix",
      "accessLevel": "List"
    },
    "ListVirtualMFADevices": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html",
      "description": "Grants permission to list virtual MFA devices by assignment status",
      "accessLevel": "List"
    },
    "PassRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html",
      "description": "Grants permission to pass a role to a service",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:AssociatedResourceArn",
        "iam:PassedToService"
      ]
    },
    "PutGroupPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html",
      "description": "Grants permission to create or update an inline policy document that is embedded in the specified IAM group",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "PutRolePermissionsBoundary": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html",
      "description": "Grants permission to set a managed policy as a permissions boundary for a role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "PutRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html",
      "description": "Grants permission to create or update an inline policy document that is embedded in the specified IAM role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "PutUserPermissionsBoundary": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html",
      "description": "Grants permission to set a managed policy as a permissions boundary for an IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "PutUserPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html",
      "description": "Grants permission to create or update an inline policy document that is embedded in the specified IAM user",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "user": {
          "required": true
        }
      },
      "conditions": [
        "iam:PermissionsBoundary"
      ]
    },
    "RemoveClientIDFromOpenIDConnectProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html",
      "description": "Grants permission to remove the client ID (audience) from the list of client IDs in the specified IAM OpenID Connect (OIDC) provider resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "RemoveRoleFromInstanceProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html",
      "description": "Grants permission to remove an IAM role from the specified EC2 instance profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance-profile": {
          "required": true
        }
      }
    },
    "RemoveUserFromGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html",
      "description": "Grants permission to remove an IAM user from the specified group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ResetServiceSpecificCredential": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html",
      "description": "Grants permission to reset the password for an existing service-specific credential for an IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "ResyncMFADevice": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html",
      "description": "Grants permission to synchronize the specified MFA device with its IAM entity (user or role)",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "SetDefaultPolicyVersion": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html",
      "description": "Grants permission to set the version of the specified policy as the policy's default version",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "SetSecurityTokenServicePreferences": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html",
      "description": "Grants permission to set the STS global endpoint token version",
      "accessLevel": "Write"
    },
    "SimulateCustomPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html",
      "description": "Grants permission to simulate whether an identity-based policy or resource-based policy provides permissions for specific API operations and resources",
      "accessLevel": "Read"
    },
    "SimulatePrincipalPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html",
      "description": "Grants permission to simulate whether an identity-based policy that is attached to a specified IAM entity (user or role) provides permissions for specific API operations and resources",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": false
        },
        "role": {
          "required": false
        },
        "user": {
          "required": false
        }
      }
    },
    "TagRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html",
      "description": "Grants permission to add tags to an IAM role.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "TagUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html",
      "description": "Grants permission to add tags to an IAM user.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UntagRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html",
      "description": "Grants permission to remove the specified tags from the role.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "UntagUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html",
      "description": "Grants permission to remove the specified tags from the user.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateAccessKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html",
      "description": "Grants permission to update the status of the specified access key as Active or Inactive",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateAccountPasswordPolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html",
      "description": "Grants permission to update the password policy settings for the AWS account",
      "accessLevel": "Write"
    },
    "UpdateAssumeRolePolicy": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html",
      "description": "Grants permission to update the policy that grants an IAM entity permission to assume a role",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html",
      "description": "Grants permission to update the name or path of the specified IAM group",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateLoginProfile": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html",
      "description": "Grants permission to change the password for the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateOpenIDConnectProviderThumbprint": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html",
      "description": "Grants permission to update the entire list of server certificate thumbprints that are associated with an OpenID Connect (OIDC) provider resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "oidc-provider": {
          "required": true
        }
      }
    },
    "UpdateRole": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html",
      "description": "Grants permission to update the description or maximum session duration setting of a role",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "UpdateRoleDescription": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html",
      "description": "Grants permission to update only the description of a role",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      }
    },
    "UpdateSAMLProvider": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html",
      "description": "Grants permission to update the metadata document for an existing SAML provider resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "saml-provider": {
          "required": true
        }
      }
    },
    "UpdateSSHPublicKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html",
      "description": "Grants permission to update the status of an IAM user's SSH public key to active or inactive",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateServerCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html",
      "description": "Grants permission to update the name or the path of the specified server certificate stored in IAM",
      "accessLevel": "Write",
      "resourceTypes": {
        "server-certificate": {
          "required": true
        }
      }
    },
    "UpdateServiceSpecificCredential": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html",
      "description": "Grants permission to update the status of a service-specific credential to active or inactive for an IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateSigningCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html",
      "description": "Grants permission to update the status of the specified user signing certificate to active or disabled",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html",
      "description": "Grants permission to update the name or the path of the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UploadSSHPublicKey": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html",
      "description": "Grants permission to upload an SSH public key and associate it with the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    },
    "UploadServerCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html",
      "description": "Grants permission to upload a server certificate entity for the AWS account",
      "accessLevel": "Write",
      "resourceTypes": {
        "server-certificate": {
          "required": true
        }
      }
    },
    "UploadSigningCertificate": {
      "url": "https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html",
      "description": "Grants permission to upload an X.509 signing certificate and associate it with the specified IAM user",
      "accessLevel": "Write",
      "resourceTypes": {
        "user": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "access-report": {
      "name": "access-report",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html",
      "arn": "arn:${Partition}:iam::${Account}:access-report/${EntityPath}",
      "conditionKeys": []
    },
    "assumed-role": {
      "name": "assumed-role",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html",
      "arn": "arn:${Partition}:iam::${Account}:assumed-role/${RoleName}/${RoleSessionName}",
      "conditionKeys": []
    },
    "federated-user": {
      "name": "federated-user",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html",
      "arn": "arn:${Partition}:iam::${Account}:federated-user/${UserName}",
      "conditionKeys": []
    },
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
      "arn": "arn:${Partition}:iam::${Account}:group/${GroupNameWithPath}",
      "conditionKeys": []
    },
    "instance-profile": {
      "name": "instance-profile",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html",
      "arn": "arn:${Partition}:iam::${Account}:instance-profile/${InstanceProfileNameWithPath}",
      "conditionKeys": []
    },
    "mfa": {
      "name": "mfa",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
      "arn": "arn:${Partition}:iam::${Account}:mfa/${Path}/${MfaTokenId}",
      "conditionKeys": []
    },
    "oidc-provider": {
      "name": "oidc-provider",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html",
      "arn": "arn:${Partition}:iam::${Account}:oidc-provider/${OidcProviderName}",
      "conditionKeys": []
    },
    "policy": {
      "name": "policy",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html",
      "arn": "arn:${Partition}:iam::${Account}:policy/${PolicyNameWithPath}",
      "conditionKeys": []
    },
    "role": {
      "name": "role",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
      "arn": "arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}",
      "conditionKeys": [
        "iam:ResourceTag/${TagKey}"
      ]
    },
    "saml-provider": {
      "name": "saml-provider",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html",
      "arn": "arn:${Partition}:iam::${Account}:saml-provider/${SamlProviderName}",
      "conditionKeys": []
    },
    "server-certificate": {
      "name": "server-certificate",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html",
      "arn": "arn:${Partition}:iam::${Account}:server-certificate/${CertificateNameWithPath}",
      "conditionKeys": []
    },
    "sms-mfa": {
      "name": "sms-mfa",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_sms.html",
      "arn": "arn:${Partition}:iam::${Account}:sms-mfa/${MfaTokenIdWithPath}",
      "conditionKeys": []
    },
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
      "arn": "arn:${Partition}:iam::${Account}:user/${UserNameWithPath}",
      "conditionKeys": [
        "iam:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [iam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a new client ID (audience) to the list of registered IDs for the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html
   */
  public addClientIDToOpenIDConnectProvider() {
    this.add('iam:AddClientIDToOpenIDConnectProvider');
    return this;
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
  public addRoleToInstanceProfile() {
    this.add('iam:AddRoleToInstanceProfile');
    return this;
  }

  /**
   * Grants permission to add an IAM user to the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html
   */
  public addUserToGroup() {
    this.add('iam:AddUserToGroup');
    return this;
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
  public attachGroupPolicy() {
    this.add('iam:AttachGroupPolicy');
    return this;
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
  public attachRolePolicy() {
    this.add('iam:AttachRolePolicy');
    return this;
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
  public attachUserPolicy() {
    this.add('iam:AttachUserPolicy');
    return this;
  }

  /**
   * Grants permission for an IAM user to to change their own password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html
   */
  public changePassword() {
    this.add('iam:ChangePassword');
    return this;
  }

  /**
   * Grants permission to create access key and secret access key for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html
   */
  public createAccessKey() {
    this.add('iam:CreateAccessKey');
    return this;
  }

  /**
   * Grants permission to create an alias for your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html
   */
  public createAccountAlias() {
    this.add('iam:CreateAccountAlias');
    return this;
  }

  /**
   * Grants permission to create a new group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html
   */
  public createGroup() {
    this.add('iam:CreateGroup');
    return this;
  }

  /**
   * Grants permission to create a new instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html
   */
  public createInstanceProfile() {
    this.add('iam:CreateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to create a password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html
   */
  public createLoginProfile() {
    this.add('iam:CreateLoginProfile');
    return this;
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports OpenID Connect (OIDC)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html
   */
  public createOpenIDConnectProvider() {
    this.add('iam:CreateOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to create a new managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html
   */
  public createPolicy() {
    this.add('iam:CreatePolicy');
    return this;
  }

  /**
   * Grants permission to create a new version of the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html
   */
  public createPolicyVersion() {
    this.add('iam:CreatePolicyVersion');
    return this;
  }

  /**
   * Grants permission to create a new role
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html
   */
  public createRole() {
    this.add('iam:CreateRole');
    return this;
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports SAML 2.0
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html
   */
  public createSAMLProvider() {
    this.add('iam:CreateSAMLProvider');
    return this;
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
  public createServiceLinkedRole() {
    this.add('iam:CreateServiceLinkedRole');
    return this;
  }

  /**
   * Grants permission to create a new service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html
   */
  public createServiceSpecificCredential() {
    this.add('iam:CreateServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to create a new IAM user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html
   */
  public createUser() {
    this.add('iam:CreateUser');
    return this;
  }

  /**
   * Grants permission to create a new virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html
   */
  public createVirtualMFADevice() {
    this.add('iam:CreateVirtualMFADevice');
    return this;
  }

  /**
   * Grants permission to deactivate the specified MFA device and remove its association with the IAM user for which it was originally enabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html
   */
  public deactivateMFADevice() {
    this.add('iam:DeactivateMFADevice');
    return this;
  }

  /**
   * Grants permission to delete the access key pair that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html
   */
  public deleteAccessKey() {
    this.add('iam:DeleteAccessKey');
    return this;
  }

  /**
   * Grants permission to delete the specified AWS account alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html
   */
  public deleteAccountAlias() {
    this.add('iam:DeleteAccountAlias');
    return this;
  }

  /**
   * Grants permission to delete the password policy for the AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html
   */
  public deleteAccountPasswordPolicy() {
    this.add('iam:DeleteAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html
   */
  public deleteGroup() {
    this.add('iam:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified inline policy from its group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html
   */
  public deleteGroupPolicy() {
    this.add('iam:DeleteGroupPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public deleteInstanceProfile() {
    this.add('iam:DeleteInstanceProfile');
    return this;
  }

  /**
   * Grants permission to delete the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html
   */
  public deleteLoginProfile() {
    this.add('iam:DeleteLoginProfile');
    return this;
  }

  /**
   * Grants permission to delete an OpenID Connect identity provider (IdP) resource object in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html
   */
  public deleteOpenIDConnectProvider() {
    this.add('iam:DeleteOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to delete the specified managed policy and remove it from any IAM entities (users, groups, or roles) to which it is attached
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html
   */
  public deletePolicy() {
    this.add('iam:DeletePolicy');
    return this;
  }

  /**
   * Grants permission to delete a version from the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html
   */
  public deletePolicyVersion() {
    this.add('iam:DeletePolicyVersion');
    return this;
  }

  /**
   * Grants permission to delete the specified role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html
   */
  public deleteRole() {
    this.add('iam:DeleteRole');
    return this;
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
  public deleteRolePermissionsBoundary() {
    this.add('iam:DeleteRolePermissionsBoundary');
    return this;
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
  public deleteRolePolicy() {
    this.add('iam:DeleteRolePolicy');
    return this;
  }

  /**
   * Grants permission to delete a SAML provider resource in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html
   */
  public deleteSAMLProvider() {
    this.add('iam:DeleteSAMLProvider');
    return this;
  }

  /**
   * Grants permission to delete the specified SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html
   */
  public deleteSSHPublicKey() {
    this.add('iam:DeleteSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to delete the specified server certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html
   */
  public deleteServerCertificate() {
    this.add('iam:DeleteServerCertificate');
    return this;
  }

  /**
   * Grants permission to delete an IAM role that is linked to a specific AWS service, if the service is no longer using it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html
   */
  public deleteServiceLinkedRole() {
    this.add('iam:DeleteServiceLinkedRole');
    return this;
  }

  /**
   * Grants permission to delete the specified service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html
   */
  public deleteServiceSpecificCredential() {
    this.add('iam:DeleteServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to delete a signing certificate that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html
   */
  public deleteSigningCertificate() {
    this.add('iam:DeleteSigningCertificate');
    return this;
  }

  /**
   * Grants permission to delete the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('iam:DeleteUser');
    return this;
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
  public deleteUserPermissionsBoundary() {
    this.add('iam:DeleteUserPermissionsBoundary');
    return this;
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
  public deleteUserPolicy() {
    this.add('iam:DeleteUserPolicy');
    return this;
  }

  /**
   * Grants permission to delete a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html
   */
  public deleteVirtualMFADevice() {
    this.add('iam:DeleteVirtualMFADevice');
    return this;
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
  public detachGroupPolicy() {
    this.add('iam:DetachGroupPolicy');
    return this;
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
  public detachRolePolicy() {
    this.add('iam:DetachRolePolicy');
    return this;
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
  public detachUserPolicy() {
    this.add('iam:DetachUserPolicy');
    return this;
  }

  /**
   * Grants permission to enable an MFA device and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html
   */
  public enableMFADevice() {
    this.add('iam:EnableMFADevice');
    return this;
  }

  /**
   * Grants permission to generate a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html
   */
  public generateCredentialReport() {
    this.add('iam:GenerateCredentialReport');
    return this;
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
  public generateOrganizationsAccessReport() {
    this.add('iam:GenerateOrganizationsAccessReport');
    return this;
  }

  /**
   * Grants permission to generate a service last accessed data report for an IAM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html
   */
  public generateServiceLastAccessedDetails() {
    this.add('iam:GenerateServiceLastAccessedDetails');
    return this;
  }

  /**
   * Grants permission to retrieve information about when the specified access key was last used
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html
   */
  public getAccessKeyLastUsed() {
    this.add('iam:GetAccessKeyLastUsed');
    return this;
  }

  /**
   * Grants permission to retrieve information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html
   */
  public getAccountAuthorizationDetails() {
    this.add('iam:GetAccountAuthorizationDetails');
    return this;
  }

  /**
   * Grants permission to retrieve the password policy for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html
   */
  public getAccountPasswordPolicy() {
    this.add('iam:GetAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about IAM entity usage and IAM quotas in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html
   */
  public getAccountSummary() {
    this.add('iam:GetAccountSummary');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all of the context keys that are referenced in the specified policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html
   */
  public getContextKeysForCustomPolicy() {
    this.add('iam:GetContextKeysForCustomPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all context keys that are referenced in all IAM policies that are attached to the specified IAM identity (user, group, or role)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html
   */
  public getContextKeysForPrincipalPolicy() {
    this.add('iam:GetContextKeysForPrincipalPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html
   */
  public getCredentialReport() {
    this.add('iam:GetCredentialReport');
    return this;
  }

  /**
   * Grants permission to retrieve a list of IAM users in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html
   */
  public getGroup() {
    this.add('iam:GetGroup');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html
   */
  public getGroupPolicy() {
    this.add('iam:GetGroupPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified instance profile, including the instance profile's path, GUID, ARN, and role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html
   */
  public getInstanceProfile() {
    this.add('iam:GetInstanceProfile');
    return this;
  }

  /**
   * Grants permission to retrieve the user name and password creation date for the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html
   */
  public getLoginProfile() {
    this.add('iam:GetLoginProfile');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified OpenID Connect (OIDC) provider resource in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html
   */
  public getOpenIDConnectProvider() {
    this.add('iam:GetOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to retrieve an AWS Organizations access report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html
   */
  public getOrganizationsAccessReport() {
    this.add('iam:GetOrganizationsAccessReport');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified managed policy, including the policy's default version and the total number of identities to which the policy is attached
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html
   */
  public getPolicy() {
    this.add('iam:GetPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about a version of the specified managed policy, including the policy document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html
   */
  public getPolicyVersion() {
    this.add('iam:GetPolicyVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified role, including the role's path, GUID, ARN, and the role's trust policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html
   */
  public getRole() {
    this.add('iam:GetRole');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded with the specified IAM role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html
   */
  public getRolePolicy() {
    this.add('iam:GetRolePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the SAML provider metadocument that was uploaded when the IAM SAML provider resource was created or updated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html
   */
  public getSAMLProvider() {
    this.add('iam:GetSAMLProvider');
    return this;
  }

  /**
   * Grants permission to retrieve the specified SSH public key, including metadata about the key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html
   */
  public getSSHPublicKey() {
    this.add('iam:GetSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified server certificate stored in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html
   */
  public getServerCertificate() {
    this.add('iam:GetServerCertificate');
    return this;
  }

  /**
   * Grants permission to retrieve information about the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html
   */
  public getServiceLastAccessedDetails() {
    this.add('iam:GetServiceLastAccessedDetails');
    return this;
  }

  /**
   * Grants permission to retrieve information about the entities from the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html
   */
  public getServiceLastAccessedDetailsWithEntities() {
    this.add('iam:GetServiceLastAccessedDetailsWithEntities');
    return this;
  }

  /**
   * Grants permission to retrieve an IAM service-linked role deletion status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html
   */
  public getServiceLinkedRoleDeletionStatus() {
    this.add('iam:GetServiceLinkedRoleDeletionStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified IAM user, including the user's creation date, path, unique ID, and ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html
   */
  public getUser() {
    this.add('iam:GetUser');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html
   */
  public getUserPolicy() {
    this.add('iam:GetUserPolicy');
    return this;
  }

  /**
   * Grants permission to list information about the access key IDs that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html
   */
  public listAccessKeys() {
    this.add('iam:ListAccessKeys');
    return this;
  }

  /**
   * Grants permission to list the account alias that is associated with the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html
   */
  public listAccountAliases() {
    this.add('iam:ListAccountAliases');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html
   */
  public listAttachedGroupPolicies() {
    this.add('iam:ListAttachedGroupPolicies');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html
   */
  public listAttachedRolePolicies() {
    this.add('iam:ListAttachedRolePolicies');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html
   */
  public listAttachedUserPolicies() {
    this.add('iam:ListAttachedUserPolicies');
    return this;
  }

  /**
   * Grants permission to list all IAM identities to which the specified managed policy is attached
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html
   */
  public listEntitiesForPolicy() {
    this.add('iam:ListEntitiesForPolicy');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html
   */
  public listGroupPolicies() {
    this.add('iam:ListGroupPolicies');
    return this;
  }

  /**
   * Grants permission to list the IAM groups that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html
   */
  public listGroups() {
    this.add('iam:ListGroups');
    return this;
  }

  /**
   * Grants permission to list the IAM groups that the specified IAM user belongs to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html
   */
  public listGroupsForUser() {
    this.add('iam:ListGroupsForUser');
    return this;
  }

  /**
   * Grants permission to list the instance profiles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html
   */
  public listInstanceProfiles() {
    this.add('iam:ListInstanceProfiles');
    return this;
  }

  /**
   * Grants permission to list the instance profiles that have the specified associated IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html
   */
  public listInstanceProfilesForRole() {
    this.add('iam:ListInstanceProfilesForRole');
    return this;
  }

  /**
   * Grants permission to list the MFA devices for an IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html
   */
  public listMFADevices() {
    this.add('iam:ListMFADevices');
    return this;
  }

  /**
   * Grants permission to list information about the IAM OpenID Connect (OIDC) provider resource objects that are defined in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html
   */
  public listOpenIDConnectProviders() {
    this.add('iam:ListOpenIDConnectProviders');
    return this;
  }

  /**
   * Grants permission to list all managed policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html
   */
  public listPolicies() {
    this.add('iam:ListPolicies');
    return this;
  }

  /**
   * Grants permission to list information about the policies that grant an entity access to a specific service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html
   */
  public listPoliciesGrantingServiceAccess() {
    this.add('iam:ListPoliciesGrantingServiceAccess');
    return this;
  }

  /**
   * Grants permission to list information about the versions of the specified managed policy, including the version that is currently set as the policy's default version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html
   */
  public listPolicyVersions() {
    this.add('iam:ListPolicyVersions');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html
   */
  public listRolePolicies() {
    this.add('iam:ListRolePolicies');
    return this;
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM role.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html
   */
  public listRoleTags() {
    this.add('iam:ListRoleTags');
    return this;
  }

  /**
   * Grants permission to list the IAM roles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html
   */
  public listRoles() {
    this.add('iam:ListRoles');
    return this;
  }

  /**
   * Grants permission to list the SAML provider resources in IAM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html
   */
  public listSAMLProviders() {
    this.add('iam:ListSAMLProviders');
    return this;
  }

  /**
   * Grants permission to list information about the SSH public keys that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html
   */
  public listSSHPublicKeys() {
    this.add('iam:ListSSHPublicKeys');
    return this;
  }

  /**
   * Grants permission to list the server certificates that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html
   */
  public listServerCertificates() {
    this.add('iam:ListServerCertificates');
    return this;
  }

  /**
   * Grants permission to list the service-specific credentials that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html
   */
  public listServiceSpecificCredentials() {
    this.add('iam:ListServiceSpecificCredentials');
    return this;
  }

  /**
   * Grants permission to list information about the signing certificates that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html
   */
  public listSigningCertificates() {
    this.add('iam:ListSigningCertificates');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html
   */
  public listUserPolicies() {
    this.add('iam:ListUserPolicies');
    return this;
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html
   */
  public listUserTags() {
    this.add('iam:ListUserTags');
    return this;
  }

  /**
   * Grants permission to list the IAM users that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('iam:ListUsers');
    return this;
  }

  /**
   * Grants permission to list virtual MFA devices by assignment status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html
   */
  public listVirtualMFADevices() {
    this.add('iam:ListVirtualMFADevices');
    return this;
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
  public passRole() {
    this.add('iam:PassRole');
    return this;
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html
   */
  public putGroupPolicy() {
    this.add('iam:PutGroupPolicy');
    return this;
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
  public putRolePermissionsBoundary() {
    this.add('iam:PutRolePermissionsBoundary');
    return this;
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
  public putRolePolicy() {
    this.add('iam:PutRolePolicy');
    return this;
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
  public putUserPermissionsBoundary() {
    this.add('iam:PutUserPermissionsBoundary');
    return this;
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
  public putUserPolicy() {
    this.add('iam:PutUserPolicy');
    return this;
  }

  /**
   * Grants permission to remove the client ID (audience) from the list of client IDs in the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html
   */
  public removeClientIDFromOpenIDConnectProvider() {
    this.add('iam:RemoveClientIDFromOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to remove an IAM role from the specified EC2 instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html
   */
  public removeRoleFromInstanceProfile() {
    this.add('iam:RemoveRoleFromInstanceProfile');
    return this;
  }

  /**
   * Grants permission to remove an IAM user from the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html
   */
  public removeUserFromGroup() {
    this.add('iam:RemoveUserFromGroup');
    return this;
  }

  /**
   * Grants permission to reset the password for an existing service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html
   */
  public resetServiceSpecificCredential() {
    this.add('iam:ResetServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to synchronize the specified MFA device with its IAM entity (user or role)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html
   */
  public resyncMFADevice() {
    this.add('iam:ResyncMFADevice');
    return this;
  }

  /**
   * Grants permission to set the version of the specified policy as the policy's default version
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html
   */
  public setDefaultPolicyVersion() {
    this.add('iam:SetDefaultPolicyVersion');
    return this;
  }

  /**
   * Grants permission to set the STS global endpoint token version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html
   */
  public setSecurityTokenServicePreferences() {
    this.add('iam:SetSecurityTokenServicePreferences');
    return this;
  }

  /**
   * Grants permission to simulate whether an identity-based policy or resource-based policy provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html
   */
  public simulateCustomPolicy() {
    this.add('iam:SimulateCustomPolicy');
    return this;
  }

  /**
   * Grants permission to simulate whether an identity-based policy that is attached to a specified IAM entity (user or role) provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html
   */
  public simulatePrincipalPolicy() {
    this.add('iam:SimulatePrincipalPolicy');
    return this;
  }

  /**
   * Grants permission to add tags to an IAM role.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html
   */
  public tagRole() {
    this.add('iam:TagRole');
    return this;
  }

  /**
   * Grants permission to add tags to an IAM user.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html
   */
  public tagUser() {
    this.add('iam:TagUser');
    return this;
  }

  /**
   * Grants permission to remove the specified tags from the role.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html
   */
  public untagRole() {
    this.add('iam:UntagRole');
    return this;
  }

  /**
   * Grants permission to remove the specified tags from the user.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html
   */
  public untagUser() {
    this.add('iam:UntagUser');
    return this;
  }

  /**
   * Grants permission to update the status of the specified access key as Active or Inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html
   */
  public updateAccessKey() {
    this.add('iam:UpdateAccessKey');
    return this;
  }

  /**
   * Grants permission to update the password policy settings for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html
   */
  public updateAccountPasswordPolicy() {
    this.add('iam:UpdateAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to update the policy that grants an IAM entity permission to assume a role
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html
   */
  public updateAssumeRolePolicy() {
    this.add('iam:UpdateAssumeRolePolicy');
    return this;
  }

  /**
   * Grants permission to update the name or path of the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html
   */
  public updateGroup() {
    this.add('iam:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to change the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html
   */
  public updateLoginProfile() {
    this.add('iam:UpdateLoginProfile');
    return this;
  }

  /**
   * Grants permission to update the entire list of server certificate thumbprints that are associated with an OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html
   */
  public updateOpenIDConnectProviderThumbprint() {
    this.add('iam:UpdateOpenIDConnectProviderThumbprint');
    return this;
  }

  /**
   * Grants permission to update the description or maximum session duration setting of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html
   */
  public updateRole() {
    this.add('iam:UpdateRole');
    return this;
  }

  /**
   * Grants permission to update only the description of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html
   */
  public updateRoleDescription() {
    this.add('iam:UpdateRoleDescription');
    return this;
  }

  /**
   * Grants permission to update the metadata document for an existing SAML provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html
   */
  public updateSAMLProvider() {
    this.add('iam:UpdateSAMLProvider');
    return this;
  }

  /**
   * Grants permission to update the status of an IAM user's SSH public key to active or inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html
   */
  public updateSSHPublicKey() {
    this.add('iam:UpdateSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to update the name or the path of the specified server certificate stored in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html
   */
  public updateServerCertificate() {
    this.add('iam:UpdateServerCertificate');
    return this;
  }

  /**
   * Grants permission to update the status of a service-specific credential to active or inactive for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html
   */
  public updateServiceSpecificCredential() {
    this.add('iam:UpdateServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to update the status of the specified user signing certificate to active or disabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html
   */
  public updateSigningCertificate() {
    this.add('iam:UpdateSigningCertificate');
    return this;
  }

  /**
   * Grants permission to update the name or the path of the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html
   */
  public updateUser() {
    this.add('iam:UpdateUser');
    return this;
  }

  /**
   * Grants permission to upload an SSH public key and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html
   */
  public uploadSSHPublicKey() {
    this.add('iam:UploadSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to upload a server certificate entity for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html
   */
  public uploadServerCertificate() {
    this.add('iam:UploadServerCertificate');
    return this;
  }

  /**
   * Grants permission to upload an X.509 signing certificate and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html
   */
  public uploadSigningCertificate() {
    this.add('iam:UploadSigningCertificate');
    return this;
  }

  /**
   * Adds a resource of type access-report to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html
   *
   * @param entityPath - Identifier for the entityPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccessReport(entityPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:access-report/${EntityPath}';
    arn = arn.replace('${EntityPath}', entityPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assumed-role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
   *
   * @param roleName - Identifier for the roleName.
   * @param roleSessionName - Identifier for the roleSessionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssumedRole(roleName: string, roleSessionName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:assumed-role/${RoleName}/${RoleSessionName}';
    arn = arn.replace('${RoleName}', roleName);
    arn = arn.replace('${RoleSessionName}', roleSessionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type federated-user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFederatedUser(userName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:federated-user/${UserName}';
    arn = arn.replace('${UserName}', userName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
   *
   * @param groupNameWithPath - Identifier for the groupNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroup(groupNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:group/${GroupNameWithPath}';
    arn = arn.replace('${GroupNameWithPath}', groupNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance-profile to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html
   *
   * @param instanceProfileNameWithPath - Identifier for the instanceProfileNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstanceProfile(instanceProfileNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:instance-profile/${InstanceProfileNameWithPath}';
    arn = arn.replace('${InstanceProfileNameWithPath}', instanceProfileNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
   *
   * @param path - Identifier for the path.
   * @param mfaTokenId - Identifier for the mfaTokenId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMfa(path: string, mfaTokenId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:mfa/${Path}/${MfaTokenId}';
    arn = arn.replace('${Path}', path);
    arn = arn.replace('${MfaTokenId}', mfaTokenId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type oidc-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
   *
   * @param oidcProviderName - Identifier for the oidcProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOidcProvider(oidcProviderName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:oidc-provider/${OidcProviderName}';
    arn = arn.replace('${OidcProviderName}', oidcProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html
   *
   * @param policyNameWithPath - Identifier for the policyNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPolicy(policyNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:policy/${PolicyNameWithPath}';
    arn = arn.replace('${PolicyNameWithPath}', policyNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}';
    arn = arn.replace('${RoleNameWithPath}', roleNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type saml-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param samlProviderName - Identifier for the samlProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSamlProvider(samlProviderName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:saml-provider/${SamlProviderName}';
    arn = arn.replace('${SamlProviderName}', samlProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type server-certificate to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html
   *
   * @param certificateNameWithPath - Identifier for the certificateNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServerCertificate(certificateNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:server-certificate/${CertificateNameWithPath}';
    arn = arn.replace('${CertificateNameWithPath}', certificateNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sms-mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_sms.html
   *
   * @param mfaTokenIdWithPath - Identifier for the mfaTokenIdWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSmsMfa(mfaTokenIdWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:sms-mfa/${MfaTokenIdWithPath}';
    arn = arn.replace('${MfaTokenIdWithPath}', mfaTokenIdWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the AWS service to which this role is attached
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AWSServiceName
   *
   * Applies to actions:
   * - .createServiceLinkedRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSServiceName(value: string | string[], operator?: string) {
    return this.if(`iam:AWSServiceName`, value, operator || 'StringLike');
  }

  /**
   * Filters by the resource that the role will be used on behalf of
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AssociatedResourceArn
   *
   * Applies to actions:
   * - .passRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifAssociatedResourceArn(value: string | string[], operator?: string) {
    return this.if(`iam:AssociatedResourceArn`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the ID of an AWS Organizations policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_OrganizationsPolicyId
   *
   * Applies to actions:
   * - .generateOrganizationsAccessReport()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOrganizationsPolicyId(value: string | string[], operator?: string) {
    return this.if(`iam:OrganizationsPolicyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS service to which this role is passed
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PassedToService
   *
   * Applies to actions:
   * - .passRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: string) {
    return this.if(`iam:PassedToService`, value, operator || 'StringLike');
  }

  /**
   * Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary
   *
   * Applies to actions:
   * - .attachRolePolicy()
   * - .attachUserPolicy()
   * - .createRole()
   * - .createUser()
   * - .deleteRolePermissionsBoundary()
   * - .deleteRolePolicy()
   * - .deleteUserPermissionsBoundary()
   * - .deleteUserPolicy()
   * - .detachRolePolicy()
   * - .detachUserPolicy()
   * - .putRolePermissionsBoundary()
   * - .putRolePolicy()
   * - .putUserPermissionsBoundary()
   * - .putUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermissionsBoundary(value: string | string[], operator?: string) {
    return this.if(`iam:PermissionsBoundary`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an IAM policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN
   *
   * Applies to actions:
   * - .attachGroupPolicy()
   * - .attachRolePolicy()
   * - .attachUserPolicy()
   * - .detachGroupPolicy()
   * - .detachRolePolicy()
   * - .detachUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifPolicyARN(value: string | string[], operator?: string) {
    return this.if(`iam:PolicyARN`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the tags attached to an IAM entity (user or role).
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
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
