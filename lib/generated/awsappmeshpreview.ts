import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service appmesh-preview
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmeshpreview.html
 */
export class AppmeshPreview extends PolicyStatement {
  public servicePrefix = 'appmesh-preview';
  public actions: Actions = {
    "CreateGatewayRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html",
      "description": "Creates a gateway route that is associated with a virtual gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gatewayRoute": {
          "required": true
        },
        "virtualService": {
          "required": false
        }
      }
    },
    "CreateMesh": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html",
      "description": "Creates a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
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
      }
    },
    "CreateVirtualGateway": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html",
      "description": "Creates a virtual gateway within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualGateway": {
          "required": true
        }
      }
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
      }
    },
    "CreateVirtualRouter": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html",
      "description": "Creates a virtual router within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualRouter": {
          "required": true
        }
      }
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
      }
    },
    "DeleteGatewayRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html",
      "description": "Deletes an existing gateway route.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gatewayRoute": {
          "required": true
        }
      }
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
    "DeleteVirtualGateway": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html",
      "description": "Deletes an existing virtual gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualGateway": {
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
    "DescribeGatewayRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html",
      "description": "Describes an existing gateway route.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gatewayRoute": {
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
    "DescribeVirtualGateway": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html",
      "description": "Describes an existing virtual gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualGateway": {
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
    "ListGatewayRoutes": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html",
      "description": "Returns a list of existing gateway routes in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "virtualGateway": {
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
    "ListVirtualGateways": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html",
      "description": "Returns a list of existing virtual gateways in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "mesh": {
          "required": true
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
        "mesh": {
          "required": true
        }
      }
    },
    "ListVirtualServices": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html",
      "description": "Returns a list of existing virtual services in a service mesh.",
      "accessLevel": "List",
      "resourceTypes": {
        "mesh": {
          "required": true
        }
      }
    },
    "StreamAggregatedResources": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html",
      "description": "Allows an Envoy Proxy to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway).",
      "accessLevel": "Read",
      "resourceTypes": {
        "virtualGateway": {
          "required": false
        },
        "virtualNode": {
          "required": false
        }
      }
    },
    "UpdateGatewayRoute": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html",
      "description": "Updates an existing gateway route for a specified service mesh and virtual gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gatewayRoute": {
          "required": true
        },
        "virtualService": {
          "required": false
        }
      }
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
    "UpdateVirtualGateway": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html",
      "description": "Updates an existing virtual gateway in a specified service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualGateway": {
          "required": true
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
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}",
      "conditionKeys": []
    },
    "virtualService": {
      "name": "virtualService",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualService/${VirtualServiceName}",
      "conditionKeys": []
    },
    "virtualNode": {
      "name": "virtualNode",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualNode/${VirtualNodeName}",
      "conditionKeys": []
    },
    "virtualRouter": {
      "name": "virtualRouter",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}",
      "conditionKeys": []
    },
    "route": {
      "name": "route",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}/route/${RouteName}",
      "conditionKeys": []
    },
    "virtualGateway": {
      "name": "virtualGateway",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}",
      "conditionKeys": []
    },
    "gatewayRoute": {
      "name": "gatewayRoute",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html",
      "arn": "arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}/gatewayRoute/${GatewayRouteName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service appmesh-preview
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmeshpreview.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates a gateway route that is associated with a virtual gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   */
  public createGatewayRoute() {
    this.add('appmesh-preview:CreateGatewayRoute');
    return this;
  }

  /**
   * Creates a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   */
  public createMesh() {
    this.add('appmesh-preview:CreateMesh');
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
    this.add('appmesh-preview:CreateRoute');
    return this;
  }

  /**
   * Creates a virtual gateway within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html
   */
  public createVirtualGateway() {
    this.add('appmesh-preview:CreateVirtualGateway');
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
    this.add('appmesh-preview:CreateVirtualNode');
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
    this.add('appmesh-preview:CreateVirtualRouter');
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
    this.add('appmesh-preview:CreateVirtualService');
    return this;
  }

  /**
   * Deletes an existing gateway route.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html
   */
  public deleteGatewayRoute() {
    this.add('appmesh-preview:DeleteGatewayRoute');
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
    this.add('appmesh-preview:DeleteMesh');
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
    this.add('appmesh-preview:DeleteRoute');
    return this;
  }

  /**
   * Deletes an existing virtual gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html
   */
  public deleteVirtualGateway() {
    this.add('appmesh-preview:DeleteVirtualGateway');
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
    this.add('appmesh-preview:DeleteVirtualNode');
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
    this.add('appmesh-preview:DeleteVirtualRouter');
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
    this.add('appmesh-preview:DeleteVirtualService');
    return this;
  }

  /**
   * Describes an existing gateway route.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html
   */
  public describeGatewayRoute() {
    this.add('appmesh-preview:DescribeGatewayRoute');
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
    this.add('appmesh-preview:DescribeMesh');
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
    this.add('appmesh-preview:DescribeRoute');
    return this;
  }

  /**
   * Describes an existing virtual gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html
   */
  public describeVirtualGateway() {
    this.add('appmesh-preview:DescribeVirtualGateway');
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
    this.add('appmesh-preview:DescribeVirtualNode');
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
    this.add('appmesh-preview:DescribeVirtualRouter');
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
    this.add('appmesh-preview:DescribeVirtualService');
    return this;
  }

  /**
   * Returns a list of existing gateway routes in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html
   */
  public listGatewayRoutes() {
    this.add('appmesh-preview:ListGatewayRoutes');
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
    this.add('appmesh-preview:ListMeshes');
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
    this.add('appmesh-preview:ListRoutes');
    return this;
  }

  /**
   * Returns a list of existing virtual gateways in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html
   */
  public listVirtualGateways() {
    this.add('appmesh-preview:ListVirtualGateways');
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
    this.add('appmesh-preview:ListVirtualNodes');
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
    this.add('appmesh-preview:ListVirtualRouters');
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
    this.add('appmesh-preview:ListVirtualServices');
    return this;
  }

  /**
   * Allows an Envoy Proxy to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public streamAggregatedResources() {
    this.add('appmesh-preview:StreamAggregatedResources');
    return this;
  }

  /**
   * Updates an existing gateway route for a specified service mesh and virtual gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html
   */
  public updateGatewayRoute() {
    this.add('appmesh-preview:UpdateGatewayRoute');
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
    this.add('appmesh-preview:UpdateMesh');
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
    this.add('appmesh-preview:UpdateRoute');
    return this;
  }

  /**
   * Updates an existing virtual gateway in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html
   */
  public updateVirtualGateway() {
    this.add('appmesh-preview:UpdateVirtualGateway');
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
    this.add('appmesh-preview:UpdateVirtualNode');
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
    this.add('appmesh-preview:UpdateVirtualRouter');
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
    this.add('appmesh-preview:UpdateVirtualService');
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
   */
  public onMesh(meshName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   */
  public onVirtualService(meshName: string, virtualServiceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualService/${VirtualServiceName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualServiceName}', virtualServiceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   */
  public onVirtualNode(meshName: string, virtualNodeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualNode/${VirtualNodeName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualNodeName}', virtualNodeName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   */
  public onVirtualRouter(meshName: string, virtualRouterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualRouterName}', virtualRouterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   */
  public onRoute(meshName: string, virtualRouterName: string, routeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}/route/${RouteName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualRouterName}', virtualRouterName);
    arn = arn.replace('${RouteName}', routeName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type virtualGateway to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualGatewayName - Identifier for the virtualGatewayName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVirtualGateway(meshName: string, virtualGatewayName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualGatewayName}', virtualGatewayName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gatewayRoute to the statement
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   *
   * @param meshName - Identifier for the meshName.
   * @param virtualGatewayName - Identifier for the virtualGatewayName.
   * @param gatewayRouteName - Identifier for the gatewayRouteName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGatewayRoute(meshName: string, virtualGatewayName: string, gatewayRouteName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh-preview:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}/gatewayRoute/${GatewayRouteName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualGatewayName}', virtualGatewayName);
    arn = arn.replace('${GatewayRouteName}', gatewayRouteName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
