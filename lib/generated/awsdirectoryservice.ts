import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service ds
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html
 */
export class Ds extends PolicyStatement {
  public servicePrefix = 'ds';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
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
   * Action provider for service ds
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Accepts a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html
   */
  public acceptSharedDirectory() {
    this.add('ds:AcceptSharedDirectory');
    return this;
  }

  /**
   * Adds a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html
   */
  public addIpRoutes() {
    this.add('ds:AddIpRoutes');
    return this;
  }

  /**
   * Adds or overwrites one or more tags for the specified Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html
   */
  public addTagsToResource() {
    this.add('ds:AddTagsToResource');
    return this;
  }

  /**
   * Authorizes an application for your AWS Directory.
   *
   * Access Level: Write
   */
  public authorizeApplication() {
    this.add('ds:AuthorizeApplication');
    return this;
  }

  /**
   * Cancels an in-progress schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html
   */
  public cancelSchemaExtension() {
    this.add('ds:CancelSchemaExtension');
    return this;
  }

  /**
   * Verifies that the alias is available for use.
   *
   * Access Level: Read
   */
  public checkAlias() {
    this.add('ds:CheckAlias');
    return this;
  }

  /**
   * Creates an AD Connector to connect to an on-premises directory.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html
   */
  public connectDirectory() {
    this.add('ds:ConnectDirectory');
    return this;
  }

  /**
   * Creates an alias for a directory and assigns the alias to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html
   */
  public createAlias() {
    this.add('ds:CreateAlias');
    return this;
  }

  /**
   * Creates a computer account in the specified directory, and joins the computer to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html
   */
  public createComputer() {
    this.add('ds:CreateComputer');
    return this;
  }

  /**
   * Creates a conditional forwarder associated with your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html
   */
  public createConditionalForwarder() {
    this.add('ds:CreateConditionalForwarder');
    return this;
  }

  /**
   * Creates a Simple AD directory.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html
   */
  public createDirectory() {
    this.add('ds:CreateDirectory');
    return this;
  }

  /**
   * Creates a IdentityPool Directory in the AWS cloud.
   *
   * Access Level: Tagging
   */
  public createIdentityPoolDirectory() {
    this.add('ds:CreateIdentityPoolDirectory');
    return this;
  }

  /**
   * Creates a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html
   */
  public createLogSubscription() {
    this.add('ds:CreateLogSubscription');
    return this;
  }

  /**
   * Creates a Microsoft AD in the AWS cloud.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html
   */
  public createMicrosoftAD() {
    this.add('ds:CreateMicrosoftAD');
    return this;
  }

  /**
   * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html
   */
  public createSnapshot() {
    this.add('ds:CreateSnapshot');
    return this;
  }

  /**
   * Initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html
   */
  public createTrust() {
    this.add('ds:CreateTrust');
    return this;
  }

  /**
   * Deletes a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html
   */
  public deleteConditionalForwarder() {
    this.add('ds:DeleteConditionalForwarder');
    return this;
  }

  /**
   * Deletes an AWS Directory Service directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html
   */
  public deleteDirectory() {
    this.add('ds:DeleteDirectory');
    return this;
  }

  /**
   * Deletes the specified log subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html
   */
  public deleteLogSubscription() {
    this.add('ds:DeleteLogSubscription');
    return this;
  }

  /**
   * Deletes a directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html
   */
  public deleteSnapshot() {
    this.add('ds:DeleteSnapshot');
    return this;
  }

  /**
   * Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html
   */
  public deleteTrust() {
    this.add('ds:DeleteTrust');
    return this;
  }

  /**
   * Deletes from the system the certificate that was registered for a secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html
   */
  public deregisterCertificate() {
    this.add('ds:DeregisterCertificate');
    return this;
  }

  /**
   * Removes the specified directory as a publisher to the specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html
   */
  public deregisterEventTopic() {
    this.add('ds:DeregisterEventTopic');
    return this;
  }

  /**
   * Displays information about the certificate registered for a secured LDAP connection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html
   */
  public describeCertificate() {
    this.add('ds:DescribeCertificate');
    return this;
  }

  /**
   * Obtains information about the conditional forwarders for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html
   */
  public describeConditionalForwarders() {
    this.add('ds:DescribeConditionalForwarders');
    return this;
  }

  /**
   * Obtains information about the directories that belong to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html
   */
  public describeDirectories() {
    this.add('ds:DescribeDirectories');
    return this;
  }

  /**
   * Provides information about any domain controllers in your directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html
   */
  public describeDomainControllers() {
    this.add('ds:DescribeDomainControllers');
    return this;
  }

  /**
   * Obtains information about which SNS topics receive status messages from the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html
   */
  public describeEventTopics() {
    this.add('ds:DescribeEventTopics');
    return this;
  }

  /**
   * Describes the status of LDAP security for the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html
   */
  public describeLDAPSSettings() {
    this.add('ds:DescribeLDAPSSettings');
    return this;
  }

  /**
   * Returns the shared directories in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html
   */
  public describeSharedDirectories() {
    this.add('ds:DescribeSharedDirectories');
    return this;
  }

  /**
   * Obtains information about the directory snapshots that belong to this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html
   */
  public describeSnapshots() {
    this.add('ds:DescribeSnapshots');
    return this;
  }

  /**
   * Obtains information about the trust relationships for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html
   */
  public describeTrusts() {
    this.add('ds:DescribeTrusts');
    return this;
  }

  /**
   * Deactivates LDAP secure calls for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html
   */
  public disableLDAPS() {
    this.add('ds:DisableLDAPS');
    return this;
  }

  /**
   * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html
   */
  public disableRadius() {
    this.add('ds:DisableRadius');
    return this;
  }

  /**
   * Disables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html
   */
  public disableSso() {
    this.add('ds:DisableSso');
    return this;
  }

  /**
   * Activates the switch for the specific directory to always use LDAP secure calls.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html
   */
  public enableLDAPS() {
    this.add('ds:EnableLDAPS');
    return this;
  }

  /**
   * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html
   */
  public enableRadius() {
    this.add('ds:EnableRadius');
    return this;
  }

  /**
   * Enables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html
   */
  public enableSso() {
    this.add('ds:EnableSso');
    return this;
  }

  /**
   *
   *
   * Access Level: Read
   */
  public getAuthorizedApplicationDetails() {
    this.add('ds:GetAuthorizedApplicationDetails');
    return this;
  }

  /**
   * Obtains directory limit information for the current region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html
   */
  public getDirectoryLimits() {
    this.add('ds:GetDirectoryLimits');
    return this;
  }

  /**
   * Obtains the manual snapshot limits for a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html
   */
  public getSnapshotLimits() {
    this.add('ds:GetSnapshotLimits');
    return this;
  }

  /**
   * Obtains the aws applications authorized for a directory.
   *
   * Access Level: Read
   */
  public listAuthorizedApplications() {
    this.add('ds:ListAuthorizedApplications');
    return this;
  }

  /**
   * For the specified directory, lists all the certificates registered for a secured LDAP connection.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html
   */
  public listCertificates() {
    this.add('ds:ListCertificates');
    return this;
  }

  /**
   * Lists the address blocks that you have added to a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html
   */
  public listIpRoutes() {
    this.add('ds:ListIpRoutes');
    return this;
  }

  /**
   * Lists the active log subscriptions for the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html
   */
  public listLogSubscriptions() {
    this.add('ds:ListLogSubscriptions');
    return this;
  }

  /**
   * Lists all schema extensions applied to a Microsoft AD Directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html
   */
  public listSchemaExtensions() {
    this.add('ds:ListSchemaExtensions');
    return this;
  }

  /**
   * Lists all tags on an Amazon Directory Services directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('ds:ListTagsForResource');
    return this;
  }

  /**
   * Registers a certificate for secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html
   */
  public registerCertificate() {
    this.add('ds:RegisterCertificate');
    return this;
  }

  /**
   * Associates a directory with an SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html
   */
  public registerEventTopic() {
    this.add('ds:RegisterEventTopic');
    return this;
  }

  /**
   * Rejects a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html
   */
  public rejectSharedDirectory() {
    this.add('ds:RejectSharedDirectory');
    return this;
  }

  /**
   * Removes IP address blocks from a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html
   */
  public removeIpRoutes() {
    this.add('ds:RemoveIpRoutes');
    return this;
  }

  /**
   * Removes tags from an Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html
   */
  public removeTagsFromResource() {
    this.add('ds:RemoveTagsFromResource');
    return this;
  }

  /**
   * Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html
   */
  public resetUserPassword() {
    this.add('ds:ResetUserPassword');
    return this;
  }

  /**
   * Restores a directory using an existing directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html
   */
  public restoreFromSnapshot() {
    this.add('ds:RestoreFromSnapshot');
    return this;
  }

  /**
   * Shares a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html
   */
  public shareDirectory() {
    this.add('ds:ShareDirectory');
    return this;
  }

  /**
   * Applies a schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html
   */
  public startSchemaExtension() {
    this.add('ds:StartSchemaExtension');
    return this;
  }

  /**
   * Unauthorizes an application from your AWS Directory.
   *
   * Access Level: Write
   */
  public unauthorizeApplication() {
    this.add('ds:UnauthorizeApplication');
    return this;
  }

  /**
   * Stops the directory sharing between the directory owner and consumer accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html
   */
  public unshareDirectory() {
    this.add('ds:UnshareDirectory');
    return this;
  }

  /**
   * Updates a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html
   */
  public updateConditionalForwarder() {
    this.add('ds:UpdateConditionalForwarder');
    return this;
  }

  /**
   * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html
   */
  public updateNumberOfDomainControllers() {
    this.add('ds:UpdateNumberOfDomainControllers');
    return this;
  }

  /**
   * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html
   */
  public updateRadius() {
    this.add('ds:UpdateRadius');
    return this;
  }

  /**
   * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html
   */
  public updateTrust() {
    this.add('ds:UpdateTrust');
    return this;
  }

  /**
   * Verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html
   */
  public verifyTrust() {
    this.add('ds:VerifyTrust');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}';
    arn = arn.replace('${DirectoryId}', directoryId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
