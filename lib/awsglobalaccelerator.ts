import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service globalaccelerator
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglobalaccelerator.html
 */
export class Globalaccelerator extends PolicyStatement {
  public servicePrefix = 'globalaccelerator';
  public actions: Actions = {
    "AdvertiseByoipCidr": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html",
      "description": "Advertises an IPv4 address range that is provisioned for use with your accelerator through bring your own IP addresses (BYOIP).",
      "accessLevel": "Write"
    },
    "CreateAccelerator": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateAccelerator.html",
      "description": "Create an accelerator.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEndpointGroup": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html",
      "description": "Add an endpoint group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener": {
          "required": true
        }
      }
    },
    "CreateListener": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html",
      "description": "Add a listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "DeleteAccelerator": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html",
      "description": "Delete the accelerator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "DeleteEndpointGroup": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html",
      "description": "Delete the endpoint group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpointgroup": {
          "required": true
        }
      }
    },
    "DeleteListener": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html",
      "description": "Delete the listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener": {
          "required": true
        }
      }
    },
    "DeprovisionByoipCidr": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html",
      "description": "Releases the specified address range that you provisioned for use with your accelerator through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.",
      "accessLevel": "Write"
    },
    "DescribeAccelerator": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html",
      "description": "Describe the accelerator.",
      "accessLevel": "Read",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "DescribeAcceleratorAttributes": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html",
      "description": "Describe the accelerator Attributes.",
      "accessLevel": "Read",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "DescribeEndpointGroup": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html",
      "description": "Describe the endpoint group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "endpointgroup": {
          "required": true
        }
      }
    },
    "DescribeListener": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html",
      "description": "Describe the listener.",
      "accessLevel": "Read",
      "resourceTypes": {
        "listener": {
          "required": true
        }
      }
    },
    "ListAccelerators": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html",
      "description": "List the accelerators.",
      "accessLevel": "List"
    },
    "ListByoipCidrs": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html",
      "description": "List the byoip cidrs.",
      "accessLevel": "List"
    },
    "ListEndpointGroups": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html",
      "description": "List the endpoint groups.",
      "accessLevel": "List",
      "resourceTypes": {
        "listener": {
          "required": true
        }
      }
    },
    "ListListeners": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html",
      "description": "List the listeners.",
      "accessLevel": "List",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html",
      "description": "List tags for a globalaccelerator resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "accelerator": {
          "required": false
        }
      }
    },
    "ProvisionByoipCidr": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html",
      "description": "Provisions an address range for use with your accelerator through bring your own IP addresses (BYOIP) and creates a corresponding address pool.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_TagResource.html",
      "description": "Add tags to globalaccelerator resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "accelerator": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html",
      "description": "Remove tags from globalaccelerator resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "accelerator": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAccelerator": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html",
      "description": "Update the accelerator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "UpdateAcceleratorAttributes": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html",
      "description": "Update the accelerator attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    },
    "UpdateEndpointGroup": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html",
      "description": "Update the endpoint group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpointgroup": {
          "required": true
        }
      }
    },
    "UpdateListener": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html",
      "description": "Update the listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener": {
          "required": true
        }
      }
    },
    "WithdrawByoipCidr": {
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html",
      "description": "Stops advertising an IPv4 address range that is provisioned as an address pool.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "accelerator": {
      "name": "accelerator",
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_Accelerator.html",
      "arn": "arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "listener": {
      "name": "listener",
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_Listener.html",
      "arn": "arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "endpointgroup": {
      "name": "endpointgroup",
      "url": "https://docs.aws.amazon.com/global-accelerator/latest/api/API_EndpointGroup.html",
      "arn": "arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}/endpoint-group/${EndpointGroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service globalaccelerator
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglobalaccelerator.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Advertises an IPv4 address range that is provisioned for use with your accelerator through bring your own IP addresses (BYOIP).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html
   */
  public advertiseByoipCidr() {
    this.add('globalaccelerator:AdvertiseByoipCidr');
    return this;
  }

  /**
   * Create an accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateAccelerator.html
   */
  public createAccelerator() {
    this.add('globalaccelerator:CreateAccelerator');
    return this;
  }

  /**
   * Add an endpoint group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html
   */
  public createEndpointGroup() {
    this.add('globalaccelerator:CreateEndpointGroup');
    return this;
  }

  /**
   * Add a listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html
   */
  public createListener() {
    this.add('globalaccelerator:CreateListener');
    return this;
  }

  /**
   * Delete the accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html
   */
  public deleteAccelerator() {
    this.add('globalaccelerator:DeleteAccelerator');
    return this;
  }

  /**
   * Delete the endpoint group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html
   */
  public deleteEndpointGroup() {
    this.add('globalaccelerator:DeleteEndpointGroup');
    return this;
  }

  /**
   * Delete the listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html
   */
  public deleteListener() {
    this.add('globalaccelerator:DeleteListener');
    return this;
  }

  /**
   * Releases the specified address range that you provisioned for use with your accelerator through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html
   */
  public deprovisionByoipCidr() {
    this.add('globalaccelerator:DeprovisionByoipCidr');
    return this;
  }

  /**
   * Describe the accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html
   */
  public describeAccelerator() {
    this.add('globalaccelerator:DescribeAccelerator');
    return this;
  }

  /**
   * Describe the accelerator Attributes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html
   */
  public describeAcceleratorAttributes() {
    this.add('globalaccelerator:DescribeAcceleratorAttributes');
    return this;
  }

  /**
   * Describe the endpoint group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html
   */
  public describeEndpointGroup() {
    this.add('globalaccelerator:DescribeEndpointGroup');
    return this;
  }

  /**
   * Describe the listener.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html
   */
  public describeListener() {
    this.add('globalaccelerator:DescribeListener');
    return this;
  }

  /**
   * List the accelerators.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html
   */
  public listAccelerators() {
    this.add('globalaccelerator:ListAccelerators');
    return this;
  }

  /**
   * List the byoip cidrs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html
   */
  public listByoipCidrs() {
    this.add('globalaccelerator:ListByoipCidrs');
    return this;
  }

  /**
   * List the endpoint groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html
   */
  public listEndpointGroups() {
    this.add('globalaccelerator:ListEndpointGroups');
    return this;
  }

  /**
   * List the listeners.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html
   */
  public listListeners() {
    this.add('globalaccelerator:ListListeners');
    return this;
  }

  /**
   * List tags for a globalaccelerator resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('globalaccelerator:ListTagsForResource');
    return this;
  }

  /**
   * Provisions an address range for use with your accelerator through bring your own IP addresses (BYOIP) and creates a corresponding address pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html
   */
  public provisionByoipCidr() {
    this.add('globalaccelerator:ProvisionByoipCidr');
    return this;
  }

  /**
   * Add tags to globalaccelerator resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_TagResource.html
   */
  public tagResource() {
    this.add('globalaccelerator:TagResource');
    return this;
  }

  /**
   * Remove tags from globalaccelerator resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html
   */
  public untagResource() {
    this.add('globalaccelerator:UntagResource');
    return this;
  }

  /**
   * Update the accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html
   */
  public updateAccelerator() {
    this.add('globalaccelerator:UpdateAccelerator');
    return this;
  }

  /**
   * Update the accelerator attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html
   */
  public updateAcceleratorAttributes() {
    this.add('globalaccelerator:UpdateAcceleratorAttributes');
    return this;
  }

  /**
   * Update the endpoint group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html
   */
  public updateEndpointGroup() {
    this.add('globalaccelerator:UpdateEndpointGroup');
    return this;
  }

  /**
   * Update the listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html
   */
  public updateListener() {
    this.add('globalaccelerator:UpdateListener');
    return this;
  }

  /**
   * Stops advertising an IPv4 address range that is provisioned as an address pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html
   */
  public withdrawByoipCidr() {
    this.add('globalaccelerator:WithdrawByoipCidr');
    return this;
  }

  /**
   * Adds a resource of type accelerator to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_Accelerator.html
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onAccelerator(acceleratorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type listener to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_Listener.html
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onListener(acceleratorId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpointgroup to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_EndpointGroup.html
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param listenerId - Identifier for the listenerId.
   * @param endpointGroupId - Identifier for the endpointGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onEndpointgroup(acceleratorId: string, listenerId: string, endpointGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:globalaccelerator:${Region}:${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}/endpoint-group/${EndpointGroupId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${EndpointGroupId}', endpointGroupId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
