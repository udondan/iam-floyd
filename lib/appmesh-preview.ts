import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service appmesh-preview
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmeshpreview.html
 */
export class AppmeshPreview extends PolicyStatement {
  public servicePrefix = 'appmesh-preview';
  public actions : Actions = {
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

  /**
   * Creates a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   */
  public createMesh () {
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
  public createRoute () {
    this.add('appmesh-preview:CreateRoute');
    return this;
  }

  /**
   * Creates a virtual node within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   */
  public createVirtualNode () {
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
  public createVirtualRouter () {
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
  public createVirtualService () {
    this.add('appmesh-preview:CreateVirtualService');
    return this;
  }

  /**
   * Deletes an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   */
  public deleteMesh () {
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
  public deleteRoute () {
    this.add('appmesh-preview:DeleteRoute');
    return this;
  }

  /**
   * Deletes an existing virtual node.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   */
  public deleteVirtualNode () {
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
  public deleteVirtualRouter () {
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
  public deleteVirtualService () {
    this.add('appmesh-preview:DeleteVirtualService');
    return this;
  }

  /**
   * Describes an existing service mesh.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   */
  public describeMesh () {
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
  public describeRoute () {
    this.add('appmesh-preview:DescribeRoute');
    return this;
  }

  /**
   * Describes an existing virtual node.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   */
  public describeVirtualNode () {
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
  public describeVirtualRouter () {
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
  public describeVirtualService () {
    this.add('appmesh-preview:DescribeVirtualService');
    return this;
  }

  /**
   * Returns a list of existing service meshes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  public listMeshes () {
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
  public listRoutes () {
    this.add('appmesh-preview:ListRoutes');
    return this;
  }

  /**
   * Returns a list of existing virtual nodes.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   */
  public listVirtualNodes () {
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
  public listVirtualRouters () {
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
  public listVirtualServices () {
    this.add('appmesh-preview:ListVirtualServices');
    return this;
  }

  /**
   * Allows an Envoy Proxy to receive streamed resources for a VirtualNode.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public streamAggregatedResources () {
    this.add('appmesh-preview:StreamAggregatedResources');
    return this;
  }

  /**
   * Updates an existing service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   */
  public updateMesh () {
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
  public updateRoute () {
    this.add('appmesh-preview:UpdateRoute');
    return this;
  }

  /**
   * Updates an existing virtual node in a specified service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   */
  public updateVirtualNode () {
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
  public updateVirtualRouter () {
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
  public updateVirtualService () {
    this.add('appmesh-preview:UpdateVirtualService');
    return this;
  }
}
