import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [organizations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Organizations extends PolicyStatement {
  public servicePrefix = 'organizations';
  protected actionList: Actions = {
    "AcceptHandshake": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html",
      "description": "Grants permission to send a response to the originator of a handshake agreeing to the action proposed by the handshake request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "handshake": {
          "required": true
        }
      }
    },
    "AttachPolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html",
      "description": "Grants permission to attach a policy to a root, an organizational unit, or an individual account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        },
        "account": {
          "required": false
        },
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "CancelHandshake": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html",
      "description": "Grants permission to cancel a handshake.",
      "accessLevel": "Write",
      "resourceTypes": {
        "handshake": {
          "required": true
        }
      }
    },
    "CreateAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html",
      "description": "Grants permission to create an AWS account that is automatically a member of the organization with the credentials that made the request.",
      "accessLevel": "Write"
    },
    "CreateGovCloudAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html",
      "description": "Grants permission to create an AWS GovCloud (US) account.",
      "accessLevel": "Write"
    },
    "CreateOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html",
      "description": "Grants permission to create an organization. The account with the credentials that calls the CreateOrganization operation automatically becomes the master account of the new organization.",
      "accessLevel": "Write"
    },
    "CreateOrganizationalUnit": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html",
      "description": "Grants permission to create an organizational unit (OU) within a root or parent OU.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      }
    },
    "CreatePolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html",
      "description": "Grants permission to create a policy that you can attach to a root, an organizational unit (OU), or an individual AWS account.",
      "accessLevel": "Write",
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "DeclineHandshake": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html",
      "description": "Grants permission to decline a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "handshake": {
          "required": true
        }
      }
    },
    "DeleteOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html",
      "description": "Grants permission to delete the organization.",
      "accessLevel": "Write"
    },
    "DeleteOrganizationalUnit": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html",
      "description": "Grants permission to delete an organizational unit from a root or another OU.",
      "accessLevel": "Write",
      "resourceTypes": {
        "organizationalunit": {
          "required": true
        }
      }
    },
    "DeletePolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html",
      "description": "Grants permission to delete a policy from your organization.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "DeregisterDelegatedAdministrator": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html",
      "description": "Grants permission to deregister the specified member AWS account as a delegated administrator for the AWS service that is specified by ServicePrincipal.",
      "accessLevel": "Write",
      "conditions": [
        "organizations:ServicePrincipal"
      ]
    },
    "DescribeAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html",
      "description": "Grants permission to retrieve Organizations-related details about the specified account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "account": {
          "required": true
        }
      }
    },
    "DescribeCreateAccountStatus": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html",
      "description": "Grants permission to retrieve the current status of an asynchronous request to create an account.",
      "accessLevel": "Read"
    },
    "DescribeEffectivePolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html",
      "description": "Grants permission to retrieve the effective policy for an account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "account": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "DescribeHandshake": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html",
      "description": "Grants permission to retrieve details about a previously requested handshake.",
      "accessLevel": "Read",
      "resourceTypes": {
        "handshake": {
          "required": true
        }
      }
    },
    "DescribeOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html",
      "description": "Grants permission to retrieves details about the organization that the calling credentials belong to.",
      "accessLevel": "Read"
    },
    "DescribeOrganizationalUnit": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html",
      "description": "Grants permission to retrieve details about an organizational unit (OU).",
      "accessLevel": "Read",
      "resourceTypes": {
        "organizationalunit": {
          "required": true
        }
      }
    },
    "DescribePolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html",
      "description": "Grants permission to retrieves details about a policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "DetachPolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html",
      "description": "Grants permission to detach a policy from a target root, organizational unit, or account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        },
        "account": {
          "required": false
        },
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "DisableAWSServiceAccess": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html",
      "description": "Grants permission to disable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.",
      "accessLevel": "Write",
      "conditions": [
        "organizations:ServicePrincipal"
      ]
    },
    "DisablePolicyType": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html",
      "description": "Grants permission to disable an organization policy type in a root.",
      "accessLevel": "Write",
      "resourceTypes": {
        "root": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "EnableAWSServiceAccess": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html",
      "description": "Grants permission to enable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.",
      "accessLevel": "Write",
      "conditions": [
        "organizations:ServicePrincipal"
      ]
    },
    "EnableAllFeatures": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html",
      "description": "Grants permission to start the process to enable all features in an organization, upgrading it from supporting only Consolidated Billing features.",
      "accessLevel": "Write"
    },
    "EnablePolicyType": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html",
      "description": "Grants permission to enable a policy type in a root.",
      "accessLevel": "Write",
      "resourceTypes": {
        "root": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "InviteAccountToOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html",
      "description": "Grants permission to send an invitation to another AWS account, asking it to join your organization as a member account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "account": {
          "required": false
        }
      }
    },
    "LeaveOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html",
      "description": "Grants permission to remove a member account from its parent organization.",
      "accessLevel": "Write"
    },
    "ListAWSServiceAccessForOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html",
      "description": "Grants permission to retrieve the list of the AWS services for which you enabled integration with your organization.",
      "accessLevel": "List"
    },
    "ListAccounts": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html",
      "description": "Grants permission to list all of the the accounts in the organization.",
      "accessLevel": "List"
    },
    "ListAccountsForParent": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html",
      "description": "Grants permission to list the accounts in an organization that are contained by a root or organizational unit (OU).",
      "accessLevel": "List",
      "resourceTypes": {
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      }
    },
    "ListChildren": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html",
      "description": "Grants permission to list all of the OUs or accounts that are contained in a parent OU or root.",
      "accessLevel": "List",
      "resourceTypes": {
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      }
    },
    "ListCreateAccountStatus": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html",
      "description": "Grants permission to list the asynchronous account creation requests that are currently being tracked for the organization.",
      "accessLevel": "List"
    },
    "ListDelegatedAdministrators": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html",
      "description": "Grants permission to list the AWS accounts that are designated as delegated administrators in this organization.",
      "accessLevel": "List",
      "conditions": [
        "organizations:ServicePrincipal"
      ]
    },
    "ListDelegatedServicesForAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html",
      "description": "Grants permission to list the AWS services for which the specified account is a delegated administrator in this organization.",
      "accessLevel": "List"
    },
    "ListHandshakesForAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html",
      "description": "Grants permission to list all of the handshakes that are associated with an account.",
      "accessLevel": "List"
    },
    "ListHandshakesForOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html",
      "description": "Grants permission to list the handshakes that are associated with the organization.",
      "accessLevel": "List"
    },
    "ListOrganizationalUnitsForParent": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html",
      "description": "Grants permission to lists all of the organizational units (OUs) in a parent organizational unit or root.",
      "accessLevel": "List",
      "resourceTypes": {
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      }
    },
    "ListParents": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html",
      "description": "Grants permission to list the root or organizational units (OUs) that serve as the immediate parent of a child OU or account.",
      "accessLevel": "List",
      "resourceTypes": {
        "account": {
          "required": false
        },
        "organizationalunit": {
          "required": false
        }
      }
    },
    "ListPolicies": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html",
      "description": "Grants permission to list all of the policies in an organization.",
      "accessLevel": "List",
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "ListPoliciesForTarget": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html",
      "description": "Grants permission to list all of the policies that are directly attached to a root, organizational unit (OU), or account.",
      "accessLevel": "List",
      "resourceTypes": {
        "account": {
          "required": false
        },
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "ListRoots": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html",
      "description": "Grants permission to list all of the roots that are defined in the organization.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list all tags for the specified resource.",
      "accessLevel": "List"
    },
    "ListTargetsForPolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html",
      "description": "Grants permission to list all the roots, OUs, and accounts to which a policy is attached.",
      "accessLevel": "List",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    },
    "MoveAccount": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html",
      "description": "Grants permission to move an account from its current root or OU to another parent root or OU.",
      "accessLevel": "Write",
      "resourceTypes": {
        "account": {
          "required": true
        },
        "organizationalunit": {
          "required": false
        },
        "root": {
          "required": false
        }
      }
    },
    "RegisterDelegatedAdministrator": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html",
      "description": "Grants permission to register the specified member account to administer the Organizations features of the AWS service that is specified by ServicePrincipal.",
      "accessLevel": "Write",
      "conditions": [
        "organizations:ServicePrincipal"
      ]
    },
    "RemoveAccountFromOrganization": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html",
      "description": "Grants permission to removes the specified account from the organization.",
      "accessLevel": "Write",
      "resourceTypes": {
        "account": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add one or more tags to the specified resource.",
      "accessLevel": "Tagging"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove one or more tags from the specified resource.",
      "accessLevel": "Tagging"
    },
    "UpdateOrganizationalUnit": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html",
      "description": "Grants permission to rename an organizational unit (OU).",
      "accessLevel": "Write",
      "resourceTypes": {
        "organizationalunit": {
          "required": true
        }
      }
    },
    "UpdatePolicy": {
      "url": "https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html",
      "description": "Grants permission to update an existing policy with a new name, description, or content.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "organizations:PolicyType"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "account": {
      "name": "account",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:account/o-${OrganizationId}/${AccountId}",
      "conditionKeys": []
    },
    "handshake": {
      "name": "handshake",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:handshake/o-${OrganizationId}/${HandshakeType}/h-${HandshakeId}",
      "conditionKeys": []
    },
    "organization": {
      "name": "organization",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:organization/o-${OrganizationId}",
      "conditionKeys": []
    },
    "organizationalunit": {
      "name": "organizationalunit",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}",
      "conditionKeys": []
    },
    "policy": {
      "name": "policy",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:policy/o-${OrganizationId}/${PolicyType}/p-${PolicyId}",
      "conditionKeys": []
    },
    "awspolicy": {
      "name": "awspolicy",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::aws:policy/${PolicyType}/p-${PolicyId}",
      "conditionKeys": []
    },
    "root": {
      "name": "root",
      "url": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html",
      "arn": "arn:${Partition}:organizations::${MasterAccountId}:root/o-${OrganizationId}/r-${RootId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [organizations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to send a response to the originator of a handshake agreeing to the action proposed by the handshake request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html
   */
  public acceptHandshake() {
    this.add('organizations:AcceptHandshake');
    return this;
  }

  /**
   * Grants permission to attach a policy to a root, an organizational unit, or an individual account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html
   */
  public attachPolicy() {
    this.add('organizations:AttachPolicy');
    return this;
  }

  /**
   * Grants permission to cancel a handshake.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html
   */
  public cancelHandshake() {
    this.add('organizations:CancelHandshake');
    return this;
  }

  /**
   * Grants permission to create an AWS account that is automatically a member of the organization with the credentials that made the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html
   */
  public createAccount() {
    this.add('organizations:CreateAccount');
    return this;
  }

  /**
   * Grants permission to create an AWS GovCloud (US) account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html
   */
  public createGovCloudAccount() {
    this.add('organizations:CreateGovCloudAccount');
    return this;
  }

  /**
   * Grants permission to create an organization. The account with the credentials that calls the CreateOrganization operation automatically becomes the master account of the new organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html
   */
  public createOrganization() {
    this.add('organizations:CreateOrganization');
    return this;
  }

  /**
   * Grants permission to create an organizational unit (OU) within a root or parent OU.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html
   */
  public createOrganizationalUnit() {
    this.add('organizations:CreateOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to create a policy that you can attach to a root, an organizational unit (OU), or an individual AWS account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html
   */
  public createPolicy() {
    this.add('organizations:CreatePolicy');
    return this;
  }

  /**
   * Grants permission to decline a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html
   */
  public declineHandshake() {
    this.add('organizations:DeclineHandshake');
    return this;
  }

  /**
   * Grants permission to delete the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html
   */
  public deleteOrganization() {
    this.add('organizations:DeleteOrganization');
    return this;
  }

  /**
   * Grants permission to delete an organizational unit from a root or another OU.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html
   */
  public deleteOrganizationalUnit() {
    this.add('organizations:DeleteOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to delete a policy from your organization.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html
   */
  public deletePolicy() {
    this.add('organizations:DeletePolicy');
    return this;
  }

  /**
   * Grants permission to deregister the specified member AWS account as a delegated administrator for the AWS service that is specified by ServicePrincipal.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html
   */
  public deregisterDelegatedAdministrator() {
    this.add('organizations:DeregisterDelegatedAdministrator');
    return this;
  }

  /**
   * Grants permission to retrieve Organizations-related details about the specified account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html
   */
  public describeAccount() {
    this.add('organizations:DescribeAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the current status of an asynchronous request to create an account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html
   */
  public describeCreateAccountStatus() {
    this.add('organizations:DescribeCreateAccountStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the effective policy for an account.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html
   */
  public describeEffectivePolicy() {
    this.add('organizations:DescribeEffectivePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve details about a previously requested handshake.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html
   */
  public describeHandshake() {
    this.add('organizations:DescribeHandshake');
    return this;
  }

  /**
   * Grants permission to retrieves details about the organization that the calling credentials belong to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html
   */
  public describeOrganization() {
    this.add('organizations:DescribeOrganization');
    return this;
  }

  /**
   * Grants permission to retrieve details about an organizational unit (OU).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html
   */
  public describeOrganizationalUnit() {
    this.add('organizations:DescribeOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to retrieves details about a policy.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html
   */
  public describePolicy() {
    this.add('organizations:DescribePolicy');
    return this;
  }

  /**
   * Grants permission to detach a policy from a target root, organizational unit, or account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html
   */
  public detachPolicy() {
    this.add('organizations:DetachPolicy');
    return this;
  }

  /**
   * Grants permission to disable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html
   */
  public disableAWSServiceAccess() {
    this.add('organizations:DisableAWSServiceAccess');
    return this;
  }

  /**
   * Grants permission to disable an organization policy type in a root.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html
   */
  public disablePolicyType() {
    this.add('organizations:DisablePolicyType');
    return this;
  }

  /**
   * Grants permission to enable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html
   */
  public enableAWSServiceAccess() {
    this.add('organizations:EnableAWSServiceAccess');
    return this;
  }

  /**
   * Grants permission to start the process to enable all features in an organization, upgrading it from supporting only Consolidated Billing features.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html
   */
  public enableAllFeatures() {
    this.add('organizations:EnableAllFeatures');
    return this;
  }

  /**
   * Grants permission to enable a policy type in a root.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html
   */
  public enablePolicyType() {
    this.add('organizations:EnablePolicyType');
    return this;
  }

  /**
   * Grants permission to send an invitation to another AWS account, asking it to join your organization as a member account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html
   */
  public inviteAccountToOrganization() {
    this.add('organizations:InviteAccountToOrganization');
    return this;
  }

  /**
   * Grants permission to remove a member account from its parent organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html
   */
  public leaveOrganization() {
    this.add('organizations:LeaveOrganization');
    return this;
  }

  /**
   * Grants permission to retrieve the list of the AWS services for which you enabled integration with your organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html
   */
  public listAWSServiceAccessForOrganization() {
    this.add('organizations:ListAWSServiceAccessForOrganization');
    return this;
  }

  /**
   * Grants permission to list all of the the accounts in the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html
   */
  public listAccounts() {
    this.add('organizations:ListAccounts');
    return this;
  }

  /**
   * Grants permission to list the accounts in an organization that are contained by a root or organizational unit (OU).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html
   */
  public listAccountsForParent() {
    this.add('organizations:ListAccountsForParent');
    return this;
  }

  /**
   * Grants permission to list all of the OUs or accounts that are contained in a parent OU or root.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html
   */
  public listChildren() {
    this.add('organizations:ListChildren');
    return this;
  }

  /**
   * Grants permission to list the asynchronous account creation requests that are currently being tracked for the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html
   */
  public listCreateAccountStatus() {
    this.add('organizations:ListCreateAccountStatus');
    return this;
  }

  /**
   * Grants permission to list the AWS accounts that are designated as delegated administrators in this organization.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html
   */
  public listDelegatedAdministrators() {
    this.add('organizations:ListDelegatedAdministrators');
    return this;
  }

  /**
   * Grants permission to list the AWS services for which the specified account is a delegated administrator in this organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html
   */
  public listDelegatedServicesForAccount() {
    this.add('organizations:ListDelegatedServicesForAccount');
    return this;
  }

  /**
   * Grants permission to list all of the handshakes that are associated with an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html
   */
  public listHandshakesForAccount() {
    this.add('organizations:ListHandshakesForAccount');
    return this;
  }

  /**
   * Grants permission to list the handshakes that are associated with the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html
   */
  public listHandshakesForOrganization() {
    this.add('organizations:ListHandshakesForOrganization');
    return this;
  }

  /**
   * Grants permission to lists all of the organizational units (OUs) in a parent organizational unit or root.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html
   */
  public listOrganizationalUnitsForParent() {
    this.add('organizations:ListOrganizationalUnitsForParent');
    return this;
  }

  /**
   * Grants permission to list the root or organizational units (OUs) that serve as the immediate parent of a child OU or account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html
   */
  public listParents() {
    this.add('organizations:ListParents');
    return this;
  }

  /**
   * Grants permission to list all of the policies in an organization.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html
   */
  public listPolicies() {
    this.add('organizations:ListPolicies');
    return this;
  }

  /**
   * Grants permission to list all of the policies that are directly attached to a root, organizational unit (OU), or account.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html
   */
  public listPoliciesForTarget() {
    this.add('organizations:ListPoliciesForTarget');
    return this;
  }

  /**
   * Grants permission to list all of the roots that are defined in the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html
   */
  public listRoots() {
    this.add('organizations:ListRoots');
    return this;
  }

  /**
   * Grants permission to list all tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('organizations:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list all the roots, OUs, and accounts to which a policy is attached.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html
   */
  public listTargetsForPolicy() {
    this.add('organizations:ListTargetsForPolicy');
    return this;
  }

  /**
   * Grants permission to move an account from its current root or OU to another parent root or OU.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html
   */
  public moveAccount() {
    this.add('organizations:MoveAccount');
    return this;
  }

  /**
   * Grants permission to register the specified member account to administer the Organizations features of the AWS service that is specified by ServicePrincipal.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html
   */
  public registerDelegatedAdministrator() {
    this.add('organizations:RegisterDelegatedAdministrator');
    return this;
  }

  /**
   * Grants permission to removes the specified account from the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html
   */
  public removeAccountFromOrganization() {
    this.add('organizations:RemoveAccountFromOrganization');
    return this;
  }

  /**
   * Grants permission to add one or more tags to the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('organizations:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('organizations:UntagResource');
    return this;
  }

  /**
   * Grants permission to rename an organizational unit (OU).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html
   */
  public updateOrganizationalUnit() {
    this.add('organizations:UpdateOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to update an existing policy with a new name, description, or content.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html
   */
  public updatePolicy() {
    this.add('organizations:UpdatePolicy');
    return this;
  }

  /**
   * Adds a resource of type account to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccount(masterAccountId: string, organizationId: string, accountId?: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:account/o-${OrganizationId}/${AccountId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type handshake to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param handshakeType - Identifier for the handshakeType.
   * @param handshakeId - Identifier for the handshakeId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHandshake(masterAccountId: string, organizationId: string, handshakeType: string, handshakeId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:handshake/o-${OrganizationId}/${HandshakeType}/h-${HandshakeId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${HandshakeType}', handshakeType);
    arn = arn.replace('${HandshakeId}', handshakeId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type organization to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrganization(masterAccountId: string, organizationId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:organization/o-${OrganizationId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type organizationalunit to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param organizationalUnitId - Identifier for the organizationalUnitId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrganizationalunit(masterAccountId: string, organizationId: string, organizationalUnitId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${OrganizationalUnitId}', organizationalUnitId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPolicy(masterAccountId: string, organizationId: string, policyType: string, policyId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:policy/o-${OrganizationId}/${PolicyType}/p-${PolicyId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${PolicyType}', policyType);
    arn = arn.replace('${PolicyId}', policyId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type awspolicy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAwspolicy(policyType: string, policyId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::aws:policy/${PolicyType}/p-${PolicyId}';
    arn = arn.replace('${PolicyType}', policyType);
    arn = arn.replace('${PolicyId}', policyId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type root to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param rootId - Identifier for the rootId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRoot(masterAccountId: string, organizationId: string, rootId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:root/o-${OrganizationId}/r-${RootId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${RootId}', rootId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Enables you to filter the request to only the specified policy type names.
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/orgs_permissions_overview.html#orgs_permissions_conditionkeys
   *
   * Applies to actions:
   * - .attachPolicy()
   * - .createPolicy()
   * - .deletePolicy()
   * - .describeEffectivePolicy()
   * - .describePolicy()
   * - .detachPolicy()
   * - .disablePolicyType()
   * - .enablePolicyType()
   * - .listPolicies()
   * - .listPoliciesForTarget()
   * - .listTargetsForPolicy()
   * - .updatePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPolicyType(value: string | string[], operator?: string) {
    return this.if(`organizations:PolicyType`, value, operator || 'StringLike');
  }

  /**
   * Enables you to filter the request to only the specified service principal names.
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/orgs_permissions_overview.html#orgs_permissions_conditionkeys
   *
   * Applies to actions:
   * - .deregisterDelegatedAdministrator()
   * - .disableAWSServiceAccess()
   * - .enableAWSServiceAccess()
   * - .listDelegatedAdministrators()
   * - .registerDelegatedAdministrator()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServicePrincipal(value: string | string[], operator?: string) {
    return this.if(`organizations:ServicePrincipal`, value, operator || 'StringLike');
  }
}
