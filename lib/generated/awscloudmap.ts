import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicediscovery extends PolicyStatement {
  public servicePrefix = 'servicediscovery';
  protected actionList: Actions = {
    "CreateHttpNamespace": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html",
      "description": "Creates an HTTP namespace.",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreatePrivateDnsNamespace": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html",
      "description": "Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC.",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreatePublicDnsNamespace": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html",
      "description": "Creates a public namespace based on DNS, which will be visible on the internet.",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateService": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html",
      "description": "Creates a service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "namespace": {
          "required": true
        }
      },
      "conditions": [
        "servicediscovery:NamespaceArn",
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteNamespace": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html",
      "description": "Deletes a specified namespace.",
      "accessLevel": "Write",
      "resourceTypes": {
        "namespace": {
          "required": true
        }
      }
    },
    "DeleteService": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html",
      "description": "Deletes a specified service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      }
    },
    "DeregisterInstance": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html",
      "description": "Deletes the records and the health check, if any, that Amazon Route 53 created for the specified instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "DiscoverInstances": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html",
      "description": "Discovers registered instances for a specified namespace and service.",
      "accessLevel": "Read",
      "conditions": [
        "servicediscovery:NamespaceName",
        "servicediscovery:ServiceName"
      ]
    },
    "GetInstance": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html",
      "description": "Gets information about a specified instance.",
      "accessLevel": "Read",
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "GetInstancesHealthStatus": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html",
      "description": "Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances.",
      "accessLevel": "Read",
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "GetNamespace": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html",
      "description": "Gets information about a namespace.",
      "accessLevel": "Read",
      "resourceTypes": {
        "namespace": {
          "required": true
        }
      }
    },
    "GetOperation": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html",
      "description": "Gets information about a specific operation.",
      "accessLevel": "Read"
    },
    "GetService": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html",
      "description": "Gets the settings for a specified service.",
      "accessLevel": "Read",
      "resourceTypes": {
        "service": {
          "required": true
        }
      }
    },
    "ListInstances": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html",
      "description": "Gets summary information about the instances that were registered with a specified service.",
      "accessLevel": "List",
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "ListNamespaces": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html",
      "description": "Gets information about the namespaces.",
      "accessLevel": "List"
    },
    "ListOperations": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html",
      "description": "Lists operations that match the criteria that you specify.",
      "accessLevel": "List"
    },
    "ListServices": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html",
      "description": "Gets settings for all the services that match specified filters.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html",
      "description": "Lists tags for the specified resource.",
      "accessLevel": "List"
    },
    "RegisterInstance": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html",
      "description": "Registers an instance based on the settings in a specified service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_TagResource.html",
      "description": "Adds one or more tags to the specified resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html",
      "description": "Removes one or more tags from the specified resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UpdateInstanceCustomHealthStatus": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html",
      "description": "Updates the current health status for an instance that has a custom health check.",
      "accessLevel": "Write",
      "conditions": [
        "servicediscovery:ServiceArn"
      ]
    },
    "UpdateService": {
      "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html",
      "description": "Updates the settings in a specified service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "namespace": {
      "name": "namespace",
      "url": "https://docs.aws.amazon.com/cloud-map/latest/dg/API_Namespace.html",
      "arn": "arn:${Partition}:servicediscovery:${Region}:${Account}:namespace/${NamespaceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "service": {
      "name": "service",
      "url": "https://docs.aws.amazon.com/cloud-map/latest/dg/API_Service.html",
      "arn": "arn:${Partition}:servicediscovery:${Region}:${Account}:service/${ServiceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an HTTP namespace.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html
   */
  public toCreateHttpNamespace() {
    this.add('servicediscovery:CreateHttpNamespace');
    return this;
  }

  /**
   * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html
   */
  public toCreatePrivateDnsNamespace() {
    this.add('servicediscovery:CreatePrivateDnsNamespace');
    return this;
  }

  /**
   * Creates a public namespace based on DNS, which will be visible on the internet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html
   */
  public toCreatePublicDnsNamespace() {
    this.add('servicediscovery:CreatePublicDnsNamespace');
    return this;
  }

  /**
   * Creates a service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespaceArn()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
   */
  public toCreateService() {
    this.add('servicediscovery:CreateService');
    return this;
  }

  /**
   * Deletes a specified namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    this.add('servicediscovery:DeleteNamespace');
    return this;
  }

  /**
   * Deletes a specified service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html
   */
  public toDeleteService() {
    this.add('servicediscovery:DeleteService');
    return this;
  }

  /**
   * Deletes the records and the health check, if any, that Amazon Route 53 created for the specified instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    this.add('servicediscovery:DeregisterInstance');
    return this;
  }

  /**
   * Discovers registered instances for a specified namespace and service.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespaceName()
   * - .ifServiceName()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html
   */
  public toDiscoverInstances() {
    this.add('servicediscovery:DiscoverInstances');
    return this;
  }

  /**
   * Gets information about a specified instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html
   */
  public toGetInstance() {
    this.add('servicediscovery:GetInstance');
    return this;
  }

  /**
   * Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html
   */
  public toGetInstancesHealthStatus() {
    this.add('servicediscovery:GetInstancesHealthStatus');
    return this;
  }

  /**
   * Gets information about a namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html
   */
  public toGetNamespace() {
    this.add('servicediscovery:GetNamespace');
    return this;
  }

  /**
   * Gets information about a specific operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html
   */
  public toGetOperation() {
    this.add('servicediscovery:GetOperation');
    return this;
  }

  /**
   * Gets the settings for a specified service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html
   */
  public toGetService() {
    this.add('servicediscovery:GetService');
    return this;
  }

  /**
   * Gets summary information about the instances that were registered with a specified service.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html
   */
  public toListInstances() {
    this.add('servicediscovery:ListInstances');
    return this;
  }

  /**
   * Gets information about the namespaces.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html
   */
  public toListNamespaces() {
    this.add('servicediscovery:ListNamespaces');
    return this;
  }

  /**
   * Lists operations that match the criteria that you specify.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html
   */
  public toListOperations() {
    this.add('servicediscovery:ListOperations');
    return this;
  }

  /**
   * Gets settings for all the services that match specified filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html
   */
  public toListServices() {
    this.add('servicediscovery:ListServices');
    return this;
  }

  /**
   * Lists tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('servicediscovery:ListTagsForResource');
    return this;
  }

  /**
   * Registers an instance based on the settings in a specified service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    this.add('servicediscovery:RegisterInstance');
    return this;
  }

  /**
   * Adds one or more tags to the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.add('servicediscovery:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('servicediscovery:UntagResource');
    return this;
  }

  /**
   * Updates the current health status for an instance that has a custom health check.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html
   */
  public toUpdateInstanceCustomHealthStatus() {
    this.add('servicediscovery:UpdateInstanceCustomHealthStatus');
    return this;
  }

  /**
   * Updates the settings in a specified service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html
   */
  public toUpdateService() {
    this.add('servicediscovery:UpdateService');
    return this;
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Namespace.html
   *
   * @param namespaceId - Identifier for the namespaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(namespaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicediscovery:${Region}:${Account}:namespace/${NamespaceId}';
    arn = arn.replace('${NamespaceId}', namespaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Service.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicediscovery:${Region}:${Account}:service/${ServiceId}';
    arn = arn.replace('${ServiceId}', serviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * A filter that lets you get objects by specifying the Amazon Resource Name (ARN) for the related namespace.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toCreateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceArn(value: string | string[], operator?: string) {
    return this.if(`servicediscovery:NamespaceArn`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the name of the related namespace.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceName(value: string | string[], operator?: string) {
    return this.if(`servicediscovery:NamespaceName`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the Amazon Resource Name (ARN) for the related service.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDeregisterInstance()
   * - .toGetInstance()
   * - .toGetInstancesHealthStatus()
   * - .toListInstances()
   * - .toRegisterInstance()
   * - .toUpdateInstanceCustomHealthStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceArn(value: string | string[], operator?: string) {
    return this.if(`servicediscovery:ServiceArn`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the name of the related service.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceName(value: string | string[], operator?: string) {
    return this.if(`servicediscovery:ServiceName`, value, operator || 'StringLike');
  }
}
