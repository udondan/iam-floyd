import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iot1click](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot1-click.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iot1click extends PolicyStatement {
  public servicePrefix = 'iot1click';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
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
   * Statement provider for service [iot1click](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot1-click.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associate a device to a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html
   */
  public toAssociateDeviceWithPlacement() {
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
  public toClaimDevicesByClaimCode() {
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
  public toCreatePlacement() {
    this.add('iot1click:CreatePlacement');
    return this;
  }

  /**
   * Create a new project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html
   */
  public toCreateProject() {
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
  public toDeletePlacement() {
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
  public toDeleteProject() {
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
  public toDescribeDevice() {
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
  public toDescribePlacement() {
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
  public toDescribeProject() {
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
  public toDisassociateDeviceFromPlacement() {
    this.add('iot1click:DisassociateDeviceFromPlacement');
    return this;
  }

  /**
   * Finalize a device claim
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html
   */
  public toFinalizeDeviceClaim() {
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
  public toGetDeviceMethods() {
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
  public toGetDevicesInPlacement() {
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
  public toInitiateDeviceClaim() {
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
  public toInvokeDeviceMethod() {
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
  public toListDeviceEvents() {
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
  public toListDevices() {
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
  public toListPlacements() {
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
  public toListProjects() {
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
  public toListTagsForResource() {
    this.add('iot1click:ListTagsForResource');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html
   */
  public toTagResource() {
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
  public toUnclaimDevice() {
    this.add('iot1click:UnclaimDevice');
    return this;
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html
   */
  public toUntagResource() {
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
  public toUpdateDeviceState() {
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
  public toUpdatePlacement() {
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
  public toUpdateProject() {
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:devices/${DeviceId}';
    arn = arn.replace('${DeviceId}', deviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:projects/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * A tag key that is present in the request that the user makes to IoT 1-Click.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toFinalizeDeviceClaim()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The preface string for a tag key and value pair attached to an IoT 1-Click resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - device
   * - project
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The list of all the tag key names associated with the IoT 1-Click resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toFinalizeDeviceClaim()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
