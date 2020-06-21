import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service appstream
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream2.0.html
 */
export class Appstream extends PolicyStatement {
  public servicePrefix = 'appstream';
  public actions: Actions = {
    "AssociateFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateFleet.html",
      "description": "Grants permission to associate the specified fleet with the specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "BatchAssociateUserStack": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchAssociateUserStack.html",
      "description": "Grants permission to associate the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "BatchDisassociateUserStack": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchDisassociateUserStack.html",
      "description": "Grants permission to disassociate the specified users from the specified stacks",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CopyImage": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CopyImage.html",
      "description": "Grants permission to copy the specified image within the same Region or to a new Region within the same AWS account",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateDirectoryConfig": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html",
      "description": "Grants permission to create a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      "accessLevel": "Write"
    },
    "CreateFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateFleet.html",
      "description": "Grants permission to create a fleet. A fleet is a group of streaming instances from which applications are launched and streamed to users",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateImageBuilder": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilder.html",
      "description": "Grants permission to create an image builder. An image builder is a virtual machine that is used to create an image",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        },
        "image-builder": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateImageBuilderStreamingURL": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilderStreamingURL.html",
      "description": "Grants permission to create a URL to start an image builder streaming session",
      "accessLevel": "Write",
      "resourceTypes": {
        "image-builder": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateStack": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html",
      "description": "Grants permission to create a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStreamingURL": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStreamingURL.html",
      "description": "Grants permission to create a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateUsageReportSubscription": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html",
      "description": "Grants permission to create a usage report subscription. Usage reports are generated daily",
      "accessLevel": "Write"
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html",
      "description": "Grants permission to create a new user in the user pool",
      "accessLevel": "Write"
    },
    "DeleteDirectoryConfig": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html",
      "description": "Grants permission to delete the specified Directory Config object from AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      "accessLevel": "Write"
    },
    "DeleteFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteFleet.html",
      "description": "Grants permission to delete the specified fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteImage": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImage.html",
      "description": "Grants permission to delete the specified image. An image cannot be deleted when it is in use",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteImageBuilder": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImageBuilder.html",
      "description": "Grants permission to delete the specified image builder and release capacity",
      "accessLevel": "Write",
      "resourceTypes": {
        "image-builder": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteImagePermissions": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImagePermissions.html",
      "description": "Grants permission to delete permissions for the specified private image",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteStack": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteStack.html",
      "description": "Grants permission to delete the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteUsageReportSubscription": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html",
      "description": "Grants permission to disable usage report generation",
      "accessLevel": "Write"
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html",
      "description": "Grants permission to delete a user from the user pool",
      "accessLevel": "Write"
    },
    "DescribeDirectoryConfigs": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html",
      "description": "Grants permission to retrieve a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      "accessLevel": "Read"
    },
    "DescribeFleets": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html",
      "description": "Grants permission to retrieve a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": false
        }
      }
    },
    "DescribeImageBuilders": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html",
      "description": "Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described",
      "accessLevel": "Read",
      "resourceTypes": {
        "image-builder": {
          "required": false
        }
      }
    },
    "DescribeImagePermissions": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html",
      "description": "Grants permission to retrieve a list that describes the permissions for shared AWS account IDs on a private image that you own",
      "accessLevel": "Read",
      "resourceTypes": {
        "image": {
          "required": true
        }
      }
    },
    "DescribeImages": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html",
      "description": "Grants permission to retrieve a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described",
      "accessLevel": "Read",
      "resourceTypes": {
        "image": {
          "required": false
        }
      }
    },
    "DescribeSessions": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html",
      "description": "Grants permission to retrieve a list that describes the streaming sessions for the specified stack and fleet. If a user ID is provided for the stack and fleet, only the streaming sessions for that user are described",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "stack": {
          "required": true
        }
      }
    },
    "DescribeStacks": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html",
      "description": "Grants permission to retrieve a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeUsageReportSubscriptions": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html",
      "description": "Grants permission to retrieve a list that describes one or more usage report subscriptions",
      "accessLevel": "Read"
    },
    "DescribeUserStackAssociations": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html",
      "description": "Grants permission to retrieve a list that describes the UserStackAssociation objects",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeUsers": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html",
      "description": "Grants permission to retrieve a list that describes users in the user pool",
      "accessLevel": "Read"
    },
    "DisableUser": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html",
      "description": "Grants permission to disable the specified user in the user pool. This action does not delete the user",
      "accessLevel": "Write"
    },
    "DisassociateFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateFleet.html",
      "description": "Grants permission to disassociate the specified fleet from the specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "EnableUser": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html",
      "description": "Grants permission to enable a user in the user pool",
      "accessLevel": "Write"
    },
    "ExpireSession": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html",
      "description": "Grants permission to immediately stop the specified streaming session",
      "accessLevel": "Write"
    },
    "GetImageBuilders": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources",
      "description": "Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described",
      "accessLevel": "Read"
    },
    "GetParametersForThemeAssetUpload": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources",
      "description": "Grants permission to upload theme assets",
      "accessLevel": "Write"
    },
    "ListAssociatedFleets": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html",
      "description": "Grants permission to retrieve the name of the fleet that is associated with the specified stack",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "ListAssociatedStacks": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html",
      "description": "Grants permission to retrieve the name of the stack with which the specified fleet is associated",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to retrieve a list of all tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks",
      "accessLevel": "Read"
    },
    "StartFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartFleet.html",
      "description": "Grants permission to start the specified fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StartImageBuilder": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartImageBuilder.html",
      "description": "Grants permission to start the specified image builder",
      "accessLevel": "Write",
      "resourceTypes": {
        "image-builder": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StopFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopFleet.html",
      "description": "Grants permission to stop the specified fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StopImageBuilder": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopImageBuilder.html",
      "description": "Grants permission to stop the specified image builder",
      "accessLevel": "Write",
      "resourceTypes": {
        "image-builder": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Stream": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role",
      "description": "Grants permission to federated users to sign in by using their existing credentials and stream applications from the specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "appstream:userId"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add or overwrite one or more tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "fleet": {
          "required": false
        },
        "image": {
          "required": false
        },
        "image-builder": {
          "required": false
        },
        "stack": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to disassociate one or more tags from the specified AppStream 2.0 resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "fleet": {
          "required": false
        },
        "image": {
          "required": false
        },
        "image-builder": {
          "required": false
        },
        "stack": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDirectoryConfig": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html",
      "description": "Grants permission to update the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      "accessLevel": "Write"
    },
    "UpdateFleet": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateFleet.html",
      "description": "Grants permission to update the specified fleet. All attributes except the fleet name can be updated when the fleet is in the STOPPED state",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        },
        "image": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateImagePermissions": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateImagePermissions.html",
      "description": "Grants permission to add or update permissions for the specified private image",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateStack": {
      "url": "https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateStack.html",
      "description": "Grants permission to update the specified fields for the specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "fleet": {
      "name": "fleet",
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts",
      "arn": "arn:${Partition}:appstream:${Region}:${Account}:fleet/${FleetName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "image": {
      "name": "image",
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts",
      "arn": "arn:${Partition}:appstream:${Region}:${Account}:image/${ImageName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "image-builder": {
      "name": "image-builder",
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts",
      "arn": "arn:${Partition}:appstream:${Region}:${Account}:image-builder/${ImageBuilderName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "stack": {
      "name": "stack",
      "url": "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts",
      "arn": "arn:${Partition}:appstream:${Region}:${Account}:stack/${StackName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Grants permission to associate the specified fleet with the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateFleet.html
   */
  public associateFleet() {
    this.add('appstream:AssociateFleet');
    return this;
  }

  /**
   * Grants permission to associate the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchAssociateUserStack.html
   */
  public batchAssociateUserStack() {
    this.add('appstream:BatchAssociateUserStack');
    return this;
  }

  /**
   * Grants permission to disassociate the specified users from the specified stacks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchDisassociateUserStack.html
   */
  public batchDisassociateUserStack() {
    this.add('appstream:BatchDisassociateUserStack');
    return this;
  }

  /**
   * Grants permission to copy the specified image within the same Region or to a new Region within the same AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CopyImage.html
   */
  public copyImage() {
    this.add('appstream:CopyImage');
    return this;
  }

  /**
   * Grants permission to create a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html
   */
  public createDirectoryConfig() {
    this.add('appstream:CreateDirectoryConfig');
    return this;
  }

  /**
   * Grants permission to create a fleet. A fleet is a group of streaming instances from which applications are launched and streamed to users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateFleet.html
   */
  public createFleet() {
    this.add('appstream:CreateFleet');
    return this;
  }

  /**
   * Grants permission to create an image builder. An image builder is a virtual machine that is used to create an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilder.html
   */
  public createImageBuilder() {
    this.add('appstream:CreateImageBuilder');
    return this;
  }

  /**
   * Grants permission to create a URL to start an image builder streaming session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilderStreamingURL.html
   */
  public createImageBuilderStreamingURL() {
    this.add('appstream:CreateImageBuilderStreamingURL');
    return this;
  }

  /**
   * Grants permission to create a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html
   */
  public createStack() {
    this.add('appstream:CreateStack');
    return this;
  }

  /**
   * Grants permission to create a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStreamingURL.html
   */
  public createStreamingURL() {
    this.add('appstream:CreateStreamingURL');
    return this;
  }

  /**
   * Grants permission to create a usage report subscription. Usage reports are generated daily
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html
   */
  public createUsageReportSubscription() {
    this.add('appstream:CreateUsageReportSubscription');
    return this;
  }

  /**
   * Grants permission to create a new user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html
   */
  public createUser() {
    this.add('appstream:CreateUser');
    return this;
  }

  /**
   * Grants permission to delete the specified Directory Config object from AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html
   */
  public deleteDirectoryConfig() {
    this.add('appstream:DeleteDirectoryConfig');
    return this;
  }

  /**
   * Grants permission to delete the specified fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteFleet.html
   */
  public deleteFleet() {
    this.add('appstream:DeleteFleet');
    return this;
  }

  /**
   * Grants permission to delete the specified image. An image cannot be deleted when it is in use
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImage.html
   */
  public deleteImage() {
    this.add('appstream:DeleteImage');
    return this;
  }

  /**
   * Grants permission to delete the specified image builder and release capacity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImageBuilder.html
   */
  public deleteImageBuilder() {
    this.add('appstream:DeleteImageBuilder');
    return this;
  }

  /**
   * Grants permission to delete permissions for the specified private image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImagePermissions.html
   */
  public deleteImagePermissions() {
    this.add('appstream:DeleteImagePermissions');
    return this;
  }

  /**
   * Grants permission to delete the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteStack.html
   */
  public deleteStack() {
    this.add('appstream:DeleteStack');
    return this;
  }

  /**
   * Grants permission to disable usage report generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html
   */
  public deleteUsageReportSubscription() {
    this.add('appstream:DeleteUsageReportSubscription');
    return this;
  }

  /**
   * Grants permission to delete a user from the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('appstream:DeleteUser');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html
   */
  public describeDirectoryConfigs() {
    this.add('appstream:DescribeDirectoryConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html
   */
  public describeFleets() {
    this.add('appstream:DescribeFleets');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html
   */
  public describeImageBuilders() {
    this.add('appstream:DescribeImageBuilders');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the permissions for shared AWS account IDs on a private image that you own
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html
   */
  public describeImagePermissions() {
    this.add('appstream:DescribeImagePermissions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html
   */
  public describeImages() {
    this.add('appstream:DescribeImages');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the streaming sessions for the specified stack and fleet. If a user ID is provided for the stack and fleet, only the streaming sessions for that user are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html
   */
  public describeSessions() {
    this.add('appstream:DescribeSessions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html
   */
  public describeStacks() {
    this.add('appstream:DescribeStacks');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more usage report subscriptions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html
   */
  public describeUsageReportSubscriptions() {
    this.add('appstream:DescribeUsageReportSubscriptions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the UserStackAssociation objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html
   */
  public describeUserStackAssociations() {
    this.add('appstream:DescribeUserStackAssociations');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes users in the user pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html
   */
  public describeUsers() {
    this.add('appstream:DescribeUsers');
    return this;
  }

  /**
   * Grants permission to disable the specified user in the user pool. This action does not delete the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html
   */
  public disableUser() {
    this.add('appstream:DisableUser');
    return this;
  }

  /**
   * Grants permission to disassociate the specified fleet from the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateFleet.html
   */
  public disassociateFleet() {
    this.add('appstream:DisassociateFleet');
    return this;
  }

  /**
   * Grants permission to enable a user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html
   */
  public enableUser() {
    this.add('appstream:EnableUser');
    return this;
  }

  /**
   * Grants permission to immediately stop the specified streaming session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html
   */
  public expireSession() {
    this.add('appstream:ExpireSession');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources
   */
  public getImageBuilders() {
    this.add('appstream:GetImageBuilders');
    return this;
  }

  /**
   * Grants permission to upload theme assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources
   */
  public getParametersForThemeAssetUpload() {
    this.add('appstream:GetParametersForThemeAssetUpload');
    return this;
  }

  /**
   * Grants permission to retrieve the name of the fleet that is associated with the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html
   */
  public listAssociatedFleets() {
    this.add('appstream:ListAssociatedFleets');
    return this;
  }

  /**
   * Grants permission to retrieve the name of the stack with which the specified fleet is associated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html
   */
  public listAssociatedStacks() {
    this.add('appstream:ListAssociatedStacks');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('appstream:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to start the specified fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartFleet.html
   */
  public startFleet() {
    this.add('appstream:StartFleet');
    return this;
  }

  /**
   * Grants permission to start the specified image builder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartImageBuilder.html
   */
  public startImageBuilder() {
    this.add('appstream:StartImageBuilder');
    return this;
  }

  /**
   * Grants permission to stop the specified fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopFleet.html
   */
  public stopFleet() {
    this.add('appstream:StopFleet');
    return this;
  }

  /**
   * Grants permission to stop the specified image builder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopImageBuilder.html
   */
  public stopImageBuilder() {
    this.add('appstream:StopImageBuilder');
    return this;
  }

  /**
   * Grants permission to federated users to sign in by using their existing credentials and stream applications from the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   */
  public stream() {
    this.add('appstream:Stream');
    return this;
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('appstream:TagResource');
    return this;
  }

  /**
   * Grants permission to disassociate one or more tags from the specified AppStream 2.0 resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('appstream:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html
   */
  public updateDirectoryConfig() {
    this.add('appstream:UpdateDirectoryConfig');
    return this;
  }

  /**
   * Grants permission to update the specified fleet. All attributes except the fleet name can be updated when the fleet is in the STOPPED state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateFleet.html
   */
  public updateFleet() {
    this.add('appstream:UpdateFleet');
    return this;
  }

  /**
   * Grants permission to add or update permissions for the specified private image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateImagePermissions.html
   */
  public updateImagePermissions() {
    this.add('appstream:UpdateImagePermissions');
    return this;
  }

  /**
   * Grants permission to update the specified fields for the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateStack.html
   */
  public updateStack() {
    this.add('appstream:UpdateStack');
    return this;
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onFleet(fleetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:fleet/${FleetName}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageName - Identifier for the imageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onImage(imageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:image/${ImageName}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image-builder to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageBuilderName - Identifier for the imageBuilderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onImageBuilder(imageBuilderName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:image-builder/${ImageBuilderName}';
    arn = arn.replace('${ImageBuilderName}', imageBuilderName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param stackName - Identifier for the stackName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onStack(stackName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:stack/${StackName}';
    arn = arn.replace('${StackName}', stackName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the ID of the AppStream 2.0 user
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifUserId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`appstream:userId`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
