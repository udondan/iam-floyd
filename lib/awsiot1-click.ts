import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service iot1click
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot1-click.html
 */
export class Iot1click extends PolicyStatement {
  public servicePrefix = 'iot1click';
  public actions: Actions = {
    "AssociateDeviceWithPlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html",
      "description": "Associate a device to a placement",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ClaimDevicesByClaimCode": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html",
      "description": "Claim a batch of devices with a claim code.",
      "accessLevel": "Read"
    },
    "CreatePlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html",
      "description": "Create a new placement in a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html",
      "description": "Create a new project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeletePlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html",
      "description": "Delete a placement from a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html",
      "description": "Delete a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeDevice": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html",
      "description": "Describe a device",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "DescribePlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html",
      "description": "Describe a placement",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeProject": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html",
      "description": "Describe a project",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DisassociateDeviceFromPlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DissacociateDeviceFromPlacement.html",
      "description": "Disassociate a device from a placement",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "FinalizeDeviceClaim": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html",
      "description": "Finalize a device claim",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GetDeviceMethods": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html",
      "description": "Get available methods of a device",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "GetDevicesInPlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html",
      "description": "Get devices associated to a placement",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "InitiateDeviceClaim": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html",
      "description": "Initialize a device claim",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "InvokeDeviceMethod": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html",
      "description": "Invoke a device method",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "ListDeviceEvents": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html",
      "description": "List past events published by a device",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "ListDevices": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html",
      "description": "List all devices",
      "accessLevel": "List"
    },
    "ListPlacements": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html",
      "description": "List placements in a project",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html",
      "description": "List all projects",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html",
      "description": "Lists the tags (metadata) which you have assigned to the resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "project": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html",
      "description": "Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UnclaimDevice": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html",
      "description": "Unclaim a device",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html",
      "description": "Removes the given tags (metadata) from the resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDeviceState": {
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html",
      "description": "Update device state",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "UpdatePlacement": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html",
      "description": "Update a placement",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html",
      "description": "Update a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "device": {
      "name": "device",
      "url": "https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/resources.html",
      "arn": "arn:${Partition}:iot1click:${Region}:${Account}:devices/${DeviceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_Operations.html",
      "arn": "arn:${Partition}:iot1click:${Region}:${Account}:projects/${ProjectName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Associate a device to a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html
   */
  public associateDeviceWithPlacement() {
    this.add('iot1click:AssociateDeviceWithPlacement');
    return this;
  }

  /**
   * Claim a batch of devices with a claim code.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html
   */
  public claimDevicesByClaimCode() {
    this.add('iot1click:ClaimDevicesByClaimCode');
    return this;
  }

  /**
   * Create a new placement in a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html
   */
  public createPlacement() {
    this.add('iot1click:CreatePlacement');
    return this;
  }

  /**
   * Create a new project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html
   */
  public createProject() {
    this.add('iot1click:CreateProject');
    return this;
  }

  /**
   * Delete a placement from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html
   */
  public deletePlacement() {
    this.add('iot1click:DeletePlacement');
    return this;
  }

  /**
   * Delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html
   */
  public deleteProject() {
    this.add('iot1click:DeleteProject');
    return this;
  }

  /**
   * Describe a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html
   */
  public describeDevice() {
    this.add('iot1click:DescribeDevice');
    return this;
  }

  /**
   * Describe a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html
   */
  public describePlacement() {
    this.add('iot1click:DescribePlacement');
    return this;
  }

  /**
   * Describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html
   */
  public describeProject() {
    this.add('iot1click:DescribeProject');
    return this;
  }

  /**
   * Disassociate a device from a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DissacociateDeviceFromPlacement.html
   */
  public disassociateDeviceFromPlacement() {
    this.add('iot1click:DisassociateDeviceFromPlacement');
    return this;
  }

  /**
   * Finalize a device claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html
   */
  public finalizeDeviceClaim() {
    this.add('iot1click:FinalizeDeviceClaim');
    return this;
  }

  /**
   * Get available methods of a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public getDeviceMethods() {
    this.add('iot1click:GetDeviceMethods');
    return this;
  }

  /**
   * Get devices associated to a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html
   */
  public getDevicesInPlacement() {
    this.add('iot1click:GetDevicesInPlacement');
    return this;
  }

  /**
   * Initialize a device claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html
   */
  public initiateDeviceClaim() {
    this.add('iot1click:InitiateDeviceClaim');
    return this;
  }

  /**
   * Invoke a device method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public invokeDeviceMethod() {
    this.add('iot1click:InvokeDeviceMethod');
    return this;
  }

  /**
   * List past events published by a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html
   */
  public listDeviceEvents() {
    this.add('iot1click:ListDeviceEvents');
    return this;
  }

  /**
   * List all devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html
   */
  public listDevices() {
    this.add('iot1click:ListDevices');
    return this;
  }

  /**
   * List placements in a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html
   */
  public listPlacements() {
    this.add('iot1click:ListPlacements');
    return this;
  }

  /**
   * List all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html
   */
  public listProjects() {
    this.add('iot1click:ListProjects');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('iot1click:ListTagsForResource');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html
   */
  public tagResource() {
    this.add('iot1click:TagResource');
    return this;
  }

  /**
   * Unclaim a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html
   */
  public unclaimDevice() {
    this.add('iot1click:UnclaimDevice');
    return this;
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html
   */
  public untagResource() {
    this.add('iot1click:UntagResource');
    return this;
  }

  /**
   * Update device state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html
   */
  public updateDeviceState() {
    this.add('iot1click:UpdateDeviceState');
    return this;
  }

  /**
   * Update a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html
   */
  public updatePlacement() {
    this.add('iot1click:UpdatePlacement');
    return this;
  }

  /**
   * Update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html
   */
  public updateProject() {
    this.add('iot1click:UpdateProject');
    return this;
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/resources.html
   *
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:devices/${DeviceId}';
    arn = arn.replace('${DeviceId}', deviceId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_Operations.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:projects/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
