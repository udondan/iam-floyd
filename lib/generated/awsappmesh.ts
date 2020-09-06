import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [appmesh](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmesh.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appmesh extends PolicyStatement {
  public servicePrefix = 'appmesh';
  protected actionList: Actions = {
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
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
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
    "CreateVirtualGateway": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html",
      "description": "Creates a virtual gateway within a service mesh.",
      "accessLevel": "Write",
      "resourceTypes": {
        "virtualGateway": {
          "required": true
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
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListTagsForResource.html",
      "description": "List the tags for an App Mesh resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "gatewayRoute": {
          "required": false
        },
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualGateway": {
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
      "description": "Allows an Envoy Proxy to receive streamed resources for an App Mesh endpoint (VirtualNode or VirtualGateway).",
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
    "TagResource": {
      "url": "https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html",
      "description": "Associates the specified tags to a resource with the specified resourceArn.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gatewayRoute": {
          "required": false
        },
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualGateway": {
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
        "gatewayRoute": {
          "required": false
        },
        "mesh": {
          "required": false
        },
        "route": {
          "required": false
        },
        "virtualGateway": {
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
  protected resourceTypes: ResourceTypes = {
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
    },
    "virtualGateway": {
      "name": "virtualGateway",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "gatewayRoute": {
      "name": "gatewayRoute",
      "url": "https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html",
      "arn": "arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}/gatewayRoute/${GatewayRouteName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [appmesh](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmesh.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a gateway route that is associated with a virtual gateway.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   */
  public toCreateGatewayRoute() {
    this.add('appmesh:CreateGatewayRoute');
    return this;
  }

  /**
   * Creates a service mesh.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   */
  public toCreateMesh() {
    this.add('appmesh:CreateMesh');
    return this;
  }

  /**
   * Creates a route that is associated with a virtual router.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    this.add('appmesh:CreateRoute');
    return this;
  }

  /**
   * Creates a virtual gateway within a service mesh.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html
   */
  public toCreateVirtualGateway() {
    this.add('appmesh:CreateVirtualGateway');
    return this;
  }

  /**
   * Creates a virtual node within a service mesh.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   */
  public toCreateVirtualNode() {
    this.add('appmesh:CreateVirtualNode');
    return this;
  }

  /**
   * Creates a virtual router within a service mesh.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html
   */
  public toCreateVirtualRouter() {
    this.add('appmesh:CreateVirtualRouter');
    return this;
  }

  /**
   * Creates a virtual service within a service mesh.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   */
  public toCreateVirtualService() {
    this.add('appmesh:CreateVirtualService');
    return this;
  }

  /**
   * Deletes an existing gateway route.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html
   */
  public toDeleteGatewayRoute() {
    this.add('appmesh:DeleteGatewayRoute');
    return this;
  }

  /**
   * Deletes an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   */
  public toDeleteMesh() {
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
  public toDeleteRoute() {
    this.add('appmesh:DeleteRoute');
    return this;
  }

  /**
   * Deletes an existing virtual gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html
   */
  public toDeleteVirtualGateway() {
    this.add('appmesh:DeleteVirtualGateway');
    return this;
  }

  /**
   * Deletes an existing virtual node.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   */
  public toDeleteVirtualNode() {
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
  public toDeleteVirtualRouter() {
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
  public toDeleteVirtualService() {
    this.add('appmesh:DeleteVirtualService');
    return this;
  }

  /**
   * Describes an existing gateway route.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html
   */
  public toDescribeGatewayRoute() {
    this.add('appmesh:DescribeGatewayRoute');
    return this;
  }

  /**
   * Describes an existing service mesh.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   */
  public toDescribeMesh() {
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
  public toDescribeRoute() {
    this.add('appmesh:DescribeRoute');
    return this;
  }

  /**
   * Describes an existing virtual gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html
   */
  public toDescribeVirtualGateway() {
    this.add('appmesh:DescribeVirtualGateway');
    return this;
  }

  /**
   * Describes an existing virtual node.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   */
  public toDescribeVirtualNode() {
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
  public toDescribeVirtualRouter() {
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
  public toDescribeVirtualService() {
    this.add('appmesh:DescribeVirtualService');
    return this;
  }

  /**
   * Returns a list of existing gateway routes in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html
   */
  public toListGatewayRoutes() {
    this.add('appmesh:ListGatewayRoutes');
    return this;
  }

  /**
   * Returns a list of existing service meshes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  public toListMeshes() {
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
  public toListRoutes() {
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
  public toListTagsForResource() {
    this.add('appmesh:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of existing virtual gateways in a service mesh.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html
   */
  public toListVirtualGateways() {
    this.add('appmesh:ListVirtualGateways');
    return this;
  }

  /**
   * Returns a list of existing virtual nodes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   */
  public toListVirtualNodes() {
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
  public toListVirtualRouters() {
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
  public toListVirtualServices() {
    this.add('appmesh:ListVirtualServices');
    return this;
  }

  /**
   * Allows an Envoy Proxy to receive streamed resources for an App Mesh endpoint (VirtualNode or VirtualGateway).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public toStreamAggregatedResources() {
    this.add('appmesh:StreamAggregatedResources');
    return this;
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('appmesh:TagResource');
    return this;
  }

  /**
   * Deletes specified tags from a resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('appmesh:UntagResource');
    return this;
  }

  /**
   * Updates an existing gateway route for a specified service mesh and virtual gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html
   */
  public toUpdateGatewayRoute() {
    this.add('appmesh:UpdateGatewayRoute');
    return this;
  }

  /**
   * Updates an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   */
  public toUpdateMesh() {
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
  public toUpdateRoute() {
    this.add('appmesh:UpdateRoute');
    return this;
  }

  /**
   * Updates an existing virtual gateway in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html
   */
  public toUpdateVirtualGateway() {
    this.add('appmesh:UpdateVirtualGateway');
    return this;
  }

  /**
   * Updates an existing virtual node in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   */
  public toUpdateVirtualNode() {
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
  public toUpdateVirtualRouter() {
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
  public toUpdateVirtualService() {
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMesh(meshName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualService(meshName: string, virtualServiceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualService/${VirtualServiceName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualNode(meshName: string, virtualNodeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualNode/${VirtualNodeName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualRouter(meshName: string, virtualRouterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoute(meshName: string, virtualRouterName: string, routeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualRouter/${VirtualRouterName}/route/${RouteName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualGateway(meshName: string, virtualGatewayName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}';
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGatewayRoute(meshName: string, virtualGatewayName: string, gatewayRouteName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appmesh:${Region}:${Account}:mesh/${MeshName}/virtualGateway/${VirtualGatewayName}/gatewayRoute/${GatewayRouteName}';
    arn = arn.replace('${MeshName}', meshName);
    arn = arn.replace('${VirtualGatewayName}', virtualGatewayName);
    arn = arn.replace('${GatewayRouteName}', gatewayRouteName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
