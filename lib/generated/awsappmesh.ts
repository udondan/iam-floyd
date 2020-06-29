import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service appmesh
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmesh.html
 */
export class Appmesh extends PolicyStatement {
  public servicePrefix = 'appmesh';
  public actions: Actions = {
    "CreateMesh": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html",
      "description": "Creates a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html",
      "description": "Creates a route that is associated with a virtual router.",
      "accessLevel": "Write",
      "resourceTypes": {
        "route": {
          "required": true
        },
        "virtualNode": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateVirtualNode": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html",
      "description": "Creates a virtual node within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualNode": {
          "required": true
        },
        "virtualService": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateVirtualRouter": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html",
      "description": "Creates a virtual router within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateVirtualService": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html",
      "description": "Creates a virtual service within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualService": {
          "required": true
        },
        "virtualNode": {
          "required": false
        },
        "virtualRouter": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteMesh": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html",
      "description": "Deletes an existing service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
    },
    "DeleteRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteRoute.html",
      "description": "Deletes an existing route.",
      "accessLevel": "Write",
      "resourceTypes": {
        "route": {
          "required": true
        }
      }
    },
    "DeleteVirtualNode": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html",
      "description": "Deletes an existing virtual node.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualNode": {
          "required": true
        }
      }
    },
    "DeleteVirtualRouter": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualRouter.html",
      "description": "Deletes an existing virtual router.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
    },
    "DeleteVirtualService": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualService.html",
      "description": "Deletes an existing virtual service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualService": {
          "required": true
        }
      }
    },
    "DescribeMesh": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html",
      "description": "Describes an existing service mesh.",
      "accessLevel": "Read",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
    },
    "DescribeRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeRoute.html",
      "description": "Describes an existing route.",
      "accessLevel": "Read",
      "resourceTypes": {
        "route": {
          "required": true
        }
      }
    },
    "DescribeVirtualNode": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html",
      "description": "Describes an existing virtual node.",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualNode": {
          "required": true
        }
      }
    },
    "DescribeVirtualRouter": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualRouter.html",
      "description": "Describes an existing virtual router.",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
    },
    "DescribeVirtualService": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualService.html",
      "description": "Describes an existing virtual service.",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualService": {
          "required": true
        }
      }
    },
    "ListMeshes": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html",
      "description": "Returns a list of existing service meshes.",
      "accessLevel": "List"
    },
    "ListRoutes": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListRoutes.html",
      "description": "Returns a list of existing routes in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListTagsForResource.html",
      "description": "List the tags for an App Mesh resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualNode": {
          "required": false
        },
        "virtualRouter": {
          "required": false
        },
        "virtualService": {
          "required": false
        }
      }
    },
    "ListVirtualNodes": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html",
      "description": "Returns a list of existing virtual nodes.",
      "accessLevel": "List",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
    },
    "ListVirtualRouters": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualRouters.html",
      "description": "Returns a list of existing virtual routers in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
    },
    "ListVirtualServices": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html",
      "description": "Returns a list of existing virtual services in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "virtualService": {
          "required": true
        }
      }
    },
    "StreamAggregatedResources": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html",
      "description": "Allows an Envoy Proxy to receive streamed resources for a VirtualNode.",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualNode": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html",
      "description": "Associates the specified tags to a resource with the specified resourceArn.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualNode": {
          "required": false
        },
        "virtualRouter": {
          "required": false
        },
        "virtualService": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UntagResource.html",
      "description": "Deletes specified tags from a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualNode": {
          "required": false
        },
        "virtualRouter": {
          "required": false
        },
        "virtualService": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateMesh": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html",
      "description": "Updates an existing service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
    },
    "UpdateRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateRoute.html",
      "description": "Updates an existing route for a specified service mesh and virtual router.",
      "accessLevel": "Write",
      "resourceTypes": {
        "route": {
          "required": true
        },
        "virtualNode": {
          "required": false
        }
      }
    },
    "UpdateVirtualNode": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html",
      "description": "Updates an existing virtual node in a specified service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualNode": {
          "required": true
        }
      }
    },
    "UpdateVirtualRouter": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualRouter.html",
      "description": "Updates an existing virtual router in a specified service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
    },
    "UpdateVirtualService": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualService.html",
      "description": "Updates an existing virtual service in a specified service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": true
        },
        "virtualNode": {
          "required": false
        },
        "virtualRouter": {
          "required": false
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "mesh": {
      "name": "mesh",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "virtualService": {
      "name": "virtualService",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualService/${VirtualServiceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "virtualNode": {
      "name": "virtualNode",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualNode/${VirtualNodeName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "virtualRouter": {
      "name": "virtualRouter",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "route": {
      "name": "route",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}/route/${RouteName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service appmesh
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmesh.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   */
  public createMesh() {
    this.add('appmesh:CreateMesh');
    return this;
  }

  /**
   * Creates a route that is associated with a virtual router.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   */
  public createRoute() {
    this.add('appmesh:CreateRoute');
    return this;
  }

  /**
   * Creates a virtual node within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   */
  public createVirtualNode() {
    this.add('appmesh:CreateVirtualNode');
    return this;
  }

  /**
   * Creates a virtual router within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html
   */
  public createVirtualRouter() {
    this.add('appmesh:CreateVirtualRouter');
    return this;
  }

  /**
   * Creates a virtual service within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   */
  public createVirtualService() {
    this.add('appmesh:CreateVirtualService');
    return this;
  }

  /**
   * Deletes an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   */
  public deleteMesh() {
    this.add('appmesh:DeleteMesh');
    return this;
  }

  /**
   * Deletes an existing route.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteRoute.html
   */
  public deleteRoute() {
    this.add('appmesh:DeleteRoute');
    return this;
  }

  /**
   * Deletes an existing virtual node.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   */
  public deleteVirtualNode() {
    this.add('appmesh:DeleteVirtualNode');
    return this;
  }

  /**
   * Deletes an existing virtual router.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualRouter.html
   */
  public deleteVirtualRouter() {
    this.add('appmesh:DeleteVirtualRouter');
    return this;
  }

  /**
   * Deletes an existing virtual service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualService.html
   */
  public deleteVirtualService() {
    this.add('appmesh:DeleteVirtualService');
    return this;
  }

  /**
   * Describes an existing service mesh.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   */
  public describeMesh() {
    this.add('appmesh:DescribeMesh');
    return this;
  }

  /**
   * Describes an existing route.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeRoute.html
   */
  public describeRoute() {
    this.add('appmesh:DescribeRoute');
    return this;
  }

  /**
   * Describes an existing virtual node.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   */
  public describeVirtualNode() {
    this.add('appmesh:DescribeVirtualNode');
    return this;
  }

  /**
   * Describes an existing virtual router.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualRouter.html
   */
  public describeVirtualRouter() {
    this.add('appmesh:DescribeVirtualRouter');
    return this;
  }

  /**
   * Describes an existing virtual service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualService.html
   */
  public describeVirtualService() {
    this.add('appmesh:DescribeVirtualService');
    return this;
  }

  /**
   * Returns a list of existing service meshes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  public listMeshes() {
    this.add('appmesh:ListMeshes');
    return this;
  }

  /**
   * Returns a list of existing routes in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListRoutes.html
   */
  public listRoutes() {
    this.add('appmesh:ListRoutes');
    return this;
  }

  /**
   * List the tags for an App Mesh resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('appmesh:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of existing virtual nodes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   */
  public listVirtualNodes() {
    this.add('appmesh:ListVirtualNodes');
    return this;
  }

  /**
   * Returns a list of existing virtual routers in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualRouters.html
   */
  public listVirtualRouters() {
    this.add('appmesh:ListVirtualRouters');
    return this;
  }

  /**
   * Returns a list of existing virtual services in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html
   */
  public listVirtualServices() {
    this.add('appmesh:ListVirtualServices');
    return this;
  }

  /**
   * Allows an Envoy Proxy to receive streamed resources for a VirtualNode.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public streamAggregatedResources() {
    this.add('appmesh:StreamAggregatedResources');
    return this;
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('appmesh:TagResource');
    return this;
  }

  /**
   * Deletes specified tags from a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('appmesh:UntagResource');
    return this;
  }

  /**
   * Updates an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   */
  public updateMesh() {
    this.add('appmesh:UpdateMesh');
    return this;
  }

  /**
   * Updates an existing route for a specified service mesh and virtual router.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateRoute.html
   */
  public updateRoute() {
    this.add('appmesh:UpdateRoute');
    return this;
  }

  /**
   * Updates an existing virtual node in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   */
  public updateVirtualNode() {
    this.add('appmesh:UpdateVirtualNode');
    return this;
  }

  /**
   * Updates an existing virtual router in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualRouter.html
   */
  public updateVirtualRouter() {
    this.add('appmesh:UpdateVirtualRouter');
    return this;
  }

  /**
   * Updates an existing virtual service in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualService.html
   */
  public updateVirtualService() {
    this.add('appmesh:UpdateVirtualService');
    return this;
  }

  /**
   * Adds a resource of type mesh to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html
   *
   * @param meshName - Identifier for the meshName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onMesh(meshName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type virtualService to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualServiceName - Identifier for the virtualServiceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onVirtualService(meshName: string, virtualServiceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualService/${VirtualServiceName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualServiceName}', virtualServiceName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type virtualNode to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualNodeName - Identifier for the virtualNodeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onVirtualNode(meshName: string, virtualNodeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualNode/${VirtualNodeName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualNodeName}', virtualNodeName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type virtualRouter to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualRouterName - Identifier for the virtualRouterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onVirtualRouter(meshName: string, virtualRouterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualRouterName}', virtualRouterName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type route to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualRouterName - Identifier for the virtualRouterName.
   * @param routeName - Identifier for the routeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRoute(meshName: string, virtualRouterName: string, routeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}/route/${RouteName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualRouterName}', virtualRouterName);
    arn = arn.replace('${RouteName}', routeName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
