import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ds](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ds extends PolicyStatement {
  public servicePrefix = 'ds';
  protected actionList: Actions = {
    "AcceptSharedDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html",
      "description": "Accepts a directory sharing request that was sent from the directory owner account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "AddIpRoutes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html",
      "description": "Adds a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:DescribeSecurityGroups"
      ],
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html",
      "description": "Adds or overwrites one or more tags for the specified Amazon Directory Services directory.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "ec2:CreateTags"
      ],
      "resourceTypes": {
        "directory": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "AuthorizeApplication": {
      "url": "",
      "description": "Authorizes an application for your AWS Directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CancelSchemaExtension": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html",
      "description": "Cancels an in-progress schema extension to a Microsoft AD directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CheckAlias": {
      "url": "",
      "description": "Verifies that the alias is available for use.",
      "accessLevel": "Read"
    },
    "ConnectDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html",
      "description": "Creates an AD Connector to connect to an on-premises directory.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:CreateNetworkInterface",
        "ec2:CreateSecurityGroup",
        "ec2:CreateTags",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html",
      "description": "Creates an alias for a directory and assigns the alias to the directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateComputer": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html",
      "description": "Creates a computer account in the specified directory, and joins the computer to the directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateConditionalForwarder": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html",
      "description": "Creates a conditional forwarder associated with your AWS directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html",
      "description": "Creates a Simple AD directory.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:CreateNetworkInterface",
        "ec2:CreateSecurityGroup",
        "ec2:CreateTags",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateIdentityPoolDirectory": {
      "url": "",
      "description": "Creates a IdentityPool Directory in the AWS cloud.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateLogSubscription": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html",
      "description": "Creates a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateMicrosoftAD": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html",
      "description": "Creates a Microsoft AD in the AWS cloud.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:CreateNetworkInterface",
        "ec2:CreateSecurityGroup",
        "ec2:CreateTags",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSnapshot": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html",
      "description": "Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "CreateTrust": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html",
      "description": "Initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteConditionalForwarder": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html",
      "description": "Deletes a conditional forwarder that has been set up for your AWS directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html",
      "description": "Deletes an AWS Directory Service directory.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:DeleteNetworkInterface",
        "ec2:DeleteSecurityGroup",
        "ec2:DescribeNetworkInterfaces",
        "ec2:RevokeSecurityGroupEgress",
        "ec2:RevokeSecurityGroupIngress"
      ],
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteLogSubscription": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html",
      "description": "Deletes the specified log subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteSnapshot": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html",
      "description": "Deletes a directory snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeleteTrust": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html",
      "description": "Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeregisterCertificate": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html",
      "description": "Deletes from the system the certificate that was registered for a secured LDAP connection.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DeregisterEventTopic": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html",
      "description": "Removes the specified directory as a publisher to the specified SNS topic.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeCertificate": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html",
      "description": "Displays information about the certificate registered for a secured LDAP connection.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeConditionalForwarders": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html",
      "description": "Obtains information about the conditional forwarders for this account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeDirectories": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html",
      "description": "Obtains information about the directories that belong to this account.",
      "accessLevel": "List"
    },
    "DescribeDomainControllers": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html",
      "description": "Provides information about any domain controllers in your directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeEventTopics": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html",
      "description": "Obtains information about which SNS topics receive status messages from the specified directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeLDAPSSettings": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html",
      "description": "Describes the status of LDAP security for the specified directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeSharedDirectories": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html",
      "description": "Returns the shared directories in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DescribeSnapshots": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html",
      "description": "Obtains information about the directory snapshots that belong to this account.",
      "accessLevel": "Read"
    },
    "DescribeTrusts": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html",
      "description": "Obtains information about the trust relationships for this account.",
      "accessLevel": "Read"
    },
    "DisableLDAPS": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html",
      "description": "Deactivates LDAP secure calls for the specified directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DisableRadius": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html",
      "description": "Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "DisableSso": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html",
      "description": "Disables single-sign on for a directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "EnableLDAPS": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html",
      "description": "Activates the switch for the specific directory to always use LDAP secure calls.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "EnableRadius": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html",
      "description": "Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "EnableSso": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html",
      "description": "Enables single-sign on for a directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetAuthorizedApplicationDetails": {
      "url": "",
      "description": "",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "GetDirectoryLimits": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html",
      "description": "Obtains directory limit information for the current region.",
      "accessLevel": "Read"
    },
    "GetSnapshotLimits": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html",
      "description": "Obtains the manual snapshot limits for a directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListAuthorizedApplications": {
      "url": "",
      "description": "Obtains the aws applications authorized for a directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListCertificates": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html",
      "description": "For the specified directory, lists all the certificates registered for a secured LDAP connection.",
      "accessLevel": "List",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListIpRoutes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html",
      "description": "Lists the address blocks that you have added to a directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListLogSubscriptions": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html",
      "description": "Lists the active log subscriptions for the AWS account.",
      "accessLevel": "Read"
    },
    "ListSchemaExtensions": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html",
      "description": "Lists all schema extensions applied to a Microsoft AD Directory.",
      "accessLevel": "List",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html",
      "description": "Lists all tags on an Amazon Directory Services directory.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RegisterCertificate": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html",
      "description": "Registers a certificate for secured LDAP connection.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RegisterEventTopic": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html",
      "description": "Associates a directory with an SNS topic.",
      "accessLevel": "Write",
      "dependentActions": [
        "sns:GetTopicAttributes"
      ],
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RejectSharedDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html",
      "description": "Rejects a directory sharing request that was sent from the directory owner account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RemoveIpRoutes": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html",
      "description": "Removes IP address blocks from a directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html",
      "description": "Removes tags from an Amazon Directory Services directory.",
      "accessLevel": "Tagging",
      "dependentActions": [
        "ec2:DeleteTags"
      ],
      "resourceTypes": {
        "directory": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ResetUserPassword": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html",
      "description": "Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "RestoreFromSnapshot": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html",
      "description": "Restores a directory using an existing directory snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "ShareDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html",
      "description": "Shares a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "StartSchemaExtension": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html",
      "description": "Applies a schema extension to a Microsoft AD directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UnauthorizeApplication": {
      "url": "",
      "description": "Unauthorizes an application from your AWS Directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UnshareDirectory": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html",
      "description": "Stops the directory sharing between the directory owner and consumer accounts.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateConditionalForwarder": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html",
      "description": "Updates a conditional forwarder that has been set up for your AWS directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateNumberOfDomainControllers": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html",
      "description": "Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateRadius": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html",
      "description": "Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "UpdateTrust": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html",
      "description": "Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.",
      "accessLevel": "Write",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    },
    "VerifyTrust": {
      "url": "https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html",
      "description": "Verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "directory": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "directory": {
      "name": "directory",
      "url": "",
      "arn": "arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ds](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Accepts a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html
   */
  public toAcceptSharedDirectory() {
    this.to('ds:AcceptSharedDirectory');
    return this;
  }

  /**
   * Adds a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:DescribeSecurityGroups
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html
   */
  public toAddIpRoutes() {
    this.to('ds:AddIpRoutes');
    return this;
  }

  /**
   * Adds or overwrites one or more tags for the specified Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.to('ds:AddTagsToResource');
    return this;
  }

  /**
   * Authorizes an application for your AWS Directory.
   *
   * Access Level: Write
   */
  public toAuthorizeApplication() {
    this.to('ds:AuthorizeApplication');
    return this;
  }

  /**
   * Cancels an in-progress schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html
   */
  public toCancelSchemaExtension() {
    this.to('ds:CancelSchemaExtension');
    return this;
  }

  /**
   * Verifies that the alias is available for use.
   *
   * Access Level: Read
   */
  public toCheckAlias() {
    this.to('ds:CheckAlias');
    return this;
  }

  /**
   * Creates an AD Connector to connect to an on-premises directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html
   */
  public toConnectDirectory() {
    this.to('ds:ConnectDirectory');
    return this;
  }

  /**
   * Creates an alias for a directory and assigns the alias to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html
   */
  public toCreateAlias() {
    this.to('ds:CreateAlias');
    return this;
  }

  /**
   * Creates a computer account in the specified directory, and joins the computer to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html
   */
  public toCreateComputer() {
    this.to('ds:CreateComputer');
    return this;
  }

  /**
   * Creates a conditional forwarder associated with your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html
   */
  public toCreateConditionalForwarder() {
    this.to('ds:CreateConditionalForwarder');
    return this;
  }

  /**
   * Creates a Simple AD directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html
   */
  public toCreateDirectory() {
    this.to('ds:CreateDirectory');
    return this;
  }

  /**
   * Creates a IdentityPool Directory in the AWS cloud.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateIdentityPoolDirectory() {
    this.to('ds:CreateIdentityPoolDirectory');
    return this;
  }

  /**
   * Creates a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html
   */
  public toCreateLogSubscription() {
    this.to('ds:CreateLogSubscription');
    return this;
  }

  /**
   * Creates a Microsoft AD in the AWS cloud.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html
   */
  public toCreateMicrosoftAD() {
    this.to('ds:CreateMicrosoftAD');
    return this;
  }

  /**
   * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    this.to('ds:CreateSnapshot');
    return this;
  }

  /**
   * Initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html
   */
  public toCreateTrust() {
    this.to('ds:CreateTrust');
    return this;
  }

  /**
   * Deletes a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html
   */
  public toDeleteConditionalForwarder() {
    this.to('ds:DeleteConditionalForwarder');
    return this;
  }

  /**
   * Deletes an AWS Directory Service directory.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteSecurityGroup
   * - ec2:DescribeNetworkInterfaces
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RevokeSecurityGroupIngress
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html
   */
  public toDeleteDirectory() {
    this.to('ds:DeleteDirectory');
    return this;
  }

  /**
   * Deletes the specified log subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html
   */
  public toDeleteLogSubscription() {
    this.to('ds:DeleteLogSubscription');
    return this;
  }

  /**
   * Deletes a directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    this.to('ds:DeleteSnapshot');
    return this;
  }

  /**
   * Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html
   */
  public toDeleteTrust() {
    this.to('ds:DeleteTrust');
    return this;
  }

  /**
   * Deletes from the system the certificate that was registered for a secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html
   */
  public toDeregisterCertificate() {
    this.to('ds:DeregisterCertificate');
    return this;
  }

  /**
   * Removes the specified directory as a publisher to the specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html
   */
  public toDeregisterEventTopic() {
    this.to('ds:DeregisterEventTopic');
    return this;
  }

  /**
   * Displays information about the certificate registered for a secured LDAP connection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    this.to('ds:DescribeCertificate');
    return this;
  }

  /**
   * Obtains information about the conditional forwarders for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html
   */
  public toDescribeConditionalForwarders() {
    this.to('ds:DescribeConditionalForwarders');
    return this;
  }

  /**
   * Obtains information about the directories that belong to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html
   */
  public toDescribeDirectories() {
    this.to('ds:DescribeDirectories');
    return this;
  }

  /**
   * Provides information about any domain controllers in your directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html
   */
  public toDescribeDomainControllers() {
    this.to('ds:DescribeDomainControllers');
    return this;
  }

  /**
   * Obtains information about which SNS topics receive status messages from the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html
   */
  public toDescribeEventTopics() {
    this.to('ds:DescribeEventTopics');
    return this;
  }

  /**
   * Describes the status of LDAP security for the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html
   */
  public toDescribeLDAPSSettings() {
    this.to('ds:DescribeLDAPSSettings');
    return this;
  }

  /**
   * Returns the shared directories in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html
   */
  public toDescribeSharedDirectories() {
    this.to('ds:DescribeSharedDirectories');
    return this;
  }

  /**
   * Obtains information about the directory snapshots that belong to this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    this.to('ds:DescribeSnapshots');
    return this;
  }

  /**
   * Obtains information about the trust relationships for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html
   */
  public toDescribeTrusts() {
    this.to('ds:DescribeTrusts');
    return this;
  }

  /**
   * Deactivates LDAP secure calls for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html
   */
  public toDisableLDAPS() {
    this.to('ds:DisableLDAPS');
    return this;
  }

  /**
   * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html
   */
  public toDisableRadius() {
    this.to('ds:DisableRadius');
    return this;
  }

  /**
   * Disables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html
   */
  public toDisableSso() {
    this.to('ds:DisableSso');
    return this;
  }

  /**
   * Activates the switch for the specific directory to always use LDAP secure calls.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html
   */
  public toEnableLDAPS() {
    this.to('ds:EnableLDAPS');
    return this;
  }

  /**
   * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html
   */
  public toEnableRadius() {
    this.to('ds:EnableRadius');
    return this;
  }

  /**
   * Enables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html
   */
  public toEnableSso() {
    this.to('ds:EnableSso');
    return this;
  }

  /**
   *
   *
   * Access Level: Read
   */
  public toGetAuthorizedApplicationDetails() {
    this.to('ds:GetAuthorizedApplicationDetails');
    return this;
  }

  /**
   * Obtains directory limit information for the current region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html
   */
  public toGetDirectoryLimits() {
    this.to('ds:GetDirectoryLimits');
    return this;
  }

  /**
   * Obtains the manual snapshot limits for a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html
   */
  public toGetSnapshotLimits() {
    this.to('ds:GetSnapshotLimits');
    return this;
  }

  /**
   * Obtains the aws applications authorized for a directory.
   *
   * Access Level: Read
   */
  public toListAuthorizedApplications() {
    this.to('ds:ListAuthorizedApplications');
    return this;
  }

  /**
   * For the specified directory, lists all the certificates registered for a secured LDAP connection.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html
   */
  public toListCertificates() {
    this.to('ds:ListCertificates');
    return this;
  }

  /**
   * Lists the address blocks that you have added to a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html
   */
  public toListIpRoutes() {
    this.to('ds:ListIpRoutes');
    return this;
  }

  /**
   * Lists the active log subscriptions for the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html
   */
  public toListLogSubscriptions() {
    this.to('ds:ListLogSubscriptions');
    return this;
  }

  /**
   * Lists all schema extensions applied to a Microsoft AD Directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html
   */
  public toListSchemaExtensions() {
    this.to('ds:ListSchemaExtensions');
    return this;
  }

  /**
   * Lists all tags on an Amazon Directory Services directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ds:ListTagsForResource');
    return this;
  }

  /**
   * Registers a certificate for secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    this.to('ds:RegisterCertificate');
    return this;
  }

  /**
   * Associates a directory with an SNS topic.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sns:GetTopicAttributes
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html
   */
  public toRegisterEventTopic() {
    this.to('ds:RegisterEventTopic');
    return this;
  }

  /**
   * Rejects a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html
   */
  public toRejectSharedDirectory() {
    this.to('ds:RejectSharedDirectory');
    return this;
  }

  /**
   * Removes IP address blocks from a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html
   */
  public toRemoveIpRoutes() {
    this.to('ds:RemoveIpRoutes');
    return this;
  }

  /**
   * Removes tags from an Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DeleteTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.to('ds:RemoveTagsFromResource');
    return this;
  }

  /**
   * Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html
   */
  public toResetUserPassword() {
    this.to('ds:ResetUserPassword');
    return this;
  }

  /**
   * Restores a directory using an existing directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html
   */
  public toRestoreFromSnapshot() {
    this.to('ds:RestoreFromSnapshot');
    return this;
  }

  /**
   * Shares a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html
   */
  public toShareDirectory() {
    this.to('ds:ShareDirectory');
    return this;
  }

  /**
   * Applies a schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html
   */
  public toStartSchemaExtension() {
    this.to('ds:StartSchemaExtension');
    return this;
  }

  /**
   * Unauthorizes an application from your AWS Directory.
   *
   * Access Level: Write
   */
  public toUnauthorizeApplication() {
    this.to('ds:UnauthorizeApplication');
    return this;
  }

  /**
   * Stops the directory sharing between the directory owner and consumer accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html
   */
  public toUnshareDirectory() {
    this.to('ds:UnshareDirectory');
    return this;
  }

  /**
   * Updates a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html
   */
  public toUpdateConditionalForwarder() {
    this.to('ds:UpdateConditionalForwarder');
    return this;
  }

  /**
   * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html
   */
  public toUpdateNumberOfDomainControllers() {
    this.to('ds:UpdateNumberOfDomainControllers');
    return this;
  }

  /**
   * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html
   */
  public toUpdateRadius() {
    this.to('ds:UpdateRadius');
    return this;
  }

  /**
   * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html
   */
  public toUpdateTrust() {
    this.to('ds:UpdateTrust');
    return this;
  }

  /**
   * Verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html
   */
  public toVerifyTrust() {
    this.to('ds:VerifyTrust');
    return this;
  }

  /**
   * Adds a resource of type directory to the statement
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}';
    arn = arn.replace('${DirectoryId}', directoryId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
