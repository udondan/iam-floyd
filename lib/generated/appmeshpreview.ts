import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [appmesh-preview](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmeshpreview.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AppmeshPreview extends PolicyStatement {
  public servicePrefix = 'appmesh-preview';

  /**
   * Statement provider for service [appmesh-preview](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmeshpreview.html).
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
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   */
  public toCreateGatewayRoute() {
    this.to('CreateGatewayRoute');
    return this;
  }

  /**
   * Creates a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   */
  public toCreateMesh() {
    this.to('CreateMesh');
    return this;
  }

  /**
   * Creates a route that is associated with a virtual router.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    this.to('CreateRoute');
    return this;
  }

  /**
   * Creates a virtual gateway within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html
   */
  public toCreateVirtualGateway() {
    this.to('CreateVirtualGateway');
    return this;
  }

  /**
   * Creates a virtual node within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   */
  public toCreateVirtualNode() {
    this.to('CreateVirtualNode');
    return this;
  }

  /**
   * Creates a virtual router within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html
   */
  public toCreateVirtualRouter() {
    this.to('CreateVirtualRouter');
    return this;
  }

  /**
   * Creates a virtual service within a service mesh.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   */
  public toCreateVirtualService() {
    this.to('CreateVirtualService');
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
    this.to('DeleteGatewayRoute');
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
    this.to('DeleteMesh');
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
    this.to('DeleteRoute');
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
    this.to('DeleteVirtualGateway');
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
    this.to('DeleteVirtualNode');
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
    this.to('DeleteVirtualRouter');
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
    this.to('DeleteVirtualService');
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
    this.to('DescribeGatewayRoute');
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
    this.to('DescribeMesh');
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
    this.to('DescribeRoute');
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
    this.to('DescribeVirtualGateway');
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
    this.to('DescribeVirtualNode');
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
    this.to('DescribeVirtualRouter');
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
    this.to('DescribeVirtualService');
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
    this.to('ListGatewayRoutes');
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
    this.to('ListMeshes');
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
    this.to('ListRoutes');
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
    this.to('ListVirtualGateways');
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
    this.to('ListVirtualNodes');
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
    this.to('ListVirtualRouters');
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
    this.to('ListVirtualServices');
    return this;
  }

  /**
   * Allows an Envoy Proxy to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public toStreamAggregatedResources() {
    this.to('StreamAggregatedResources');
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
    this.to('UpdateGatewayRoute');
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
    this.to('UpdateMesh');
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
    this.to('UpdateRoute');
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
    this.to('UpdateVirtualGateway');
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
    this.to('UpdateVirtualNode');
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
    this.to('UpdateVirtualRouter');
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
    this.to('UpdateVirtualService');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateGatewayRoute",
      "CreateMesh",
      "CreateRoute",
      "CreateVirtualGateway",
      "CreateVirtualNode",
      "CreateVirtualRouter",
      "CreateVirtualService",
      "DeleteGatewayRoute",
      "DeleteMesh",
      "DeleteRoute",
      "DeleteVirtualGateway",
      "DeleteVirtualNode",
      "DeleteVirtualRouter",
      "DeleteVirtualService",
      "UpdateGatewayRoute",
      "UpdateMesh",
      "UpdateRoute",
      "UpdateVirtualGateway",
      "UpdateVirtualNode",
      "UpdateVirtualRouter",
      "UpdateVirtualService"
    ],
    "Read": [
      "DescribeGatewayRoute",
      "DescribeMesh",
      "DescribeRoute",
      "DescribeVirtualGateway",
      "DescribeVirtualNode",
      "DescribeVirtualRouter",
      "DescribeVirtualService",
      "StreamAggregatedResources"
    ],
    "List": [
      "ListGatewayRoutes",
      "ListMeshes",
      "ListRoutes",
      "ListVirtualGateways",
      "ListVirtualNodes",
      "ListVirtualRouters",
      "ListVirtualServices"
    ]
  };

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
