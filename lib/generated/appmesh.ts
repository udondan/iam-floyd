import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [appmesh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmesh.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appmesh extends PolicyStatement {
  public servicePrefix = 'appmesh';

  /**
   * Statement provider for service [appmesh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmesh.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a gateway route that is associated with a virtual gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   */
  public toCreateGatewayRoute() {
    return this.to('CreateGatewayRoute');
  }

  /**
   * Grants permission to create a service mesh
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
    return this.to('CreateMesh');
  }

  /**
   * Grants permission to create a route that is associated with a virtual router
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    return this.to('CreateRoute');
  }

  /**
   * Grants permission to create a virtual gateway within a service mesh
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
    return this.to('CreateVirtualGateway');
  }

  /**
   * Grants permission to create a virtual node within a service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   */
  public toCreateVirtualNode() {
    return this.to('CreateVirtualNode');
  }

  /**
   * Grants permission to create a virtual router within a service mesh
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
    return this.to('CreateVirtualRouter');
  }

  /**
   * Grants permission to create a virtual service within a service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   */
  public toCreateVirtualService() {
    return this.to('CreateVirtualService');
  }

  /**
   * Grants permission to delete an existing gateway route
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html
   */
  public toDeleteGatewayRoute() {
    return this.to('DeleteGatewayRoute');
  }

  /**
   * Grants permission to delete an existing service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   */
  public toDeleteMesh() {
    return this.to('DeleteMesh');
  }

  /**
   * Grants permission to delete an existing route
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteRoute.html
   */
  public toDeleteRoute() {
    return this.to('DeleteRoute');
  }

  /**
   * Grants permission to delete an existing virtual gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html
   */
  public toDeleteVirtualGateway() {
    return this.to('DeleteVirtualGateway');
  }

  /**
   * Grants permission to delete an existing virtual node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   */
  public toDeleteVirtualNode() {
    return this.to('DeleteVirtualNode');
  }

  /**
   * Grants permission to delete an existing virtual router
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualRouter.html
   */
  public toDeleteVirtualRouter() {
    return this.to('DeleteVirtualRouter');
  }

  /**
   * Grants permission to delete an existing virtual service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualService.html
   */
  public toDeleteVirtualService() {
    return this.to('DeleteVirtualService');
  }

  /**
   * Grants permission to describe an existing gateway route
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html
   */
  public toDescribeGatewayRoute() {
    return this.to('DescribeGatewayRoute');
  }

  /**
   * Grants permission to describe an existing service mesh
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   */
  public toDescribeMesh() {
    return this.to('DescribeMesh');
  }

  /**
   * Grants permission to describe an existing route
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeRoute.html
   */
  public toDescribeRoute() {
    return this.to('DescribeRoute');
  }

  /**
   * Grants permission to describe an existing virtual gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html
   */
  public toDescribeVirtualGateway() {
    return this.to('DescribeVirtualGateway');
  }

  /**
   * Grants permission to describe an existing virtual node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   */
  public toDescribeVirtualNode() {
    return this.to('DescribeVirtualNode');
  }

  /**
   * Grants permission to describe an existing virtual router
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualRouter.html
   */
  public toDescribeVirtualRouter() {
    return this.to('DescribeVirtualRouter');
  }

  /**
   * Grants permission to describe an existing virtual service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualService.html
   */
  public toDescribeVirtualService() {
    return this.to('DescribeVirtualService');
  }

  /**
   * Grants permission to list existing gateway routes in a service mesh
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html
   */
  public toListGatewayRoutes() {
    return this.to('ListGatewayRoutes');
  }

  /**
   * Grants permission to list existing service meshes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  public toListMeshes() {
    return this.to('ListMeshes');
  }

  /**
   * Grants permission to list existing routes in a service mesh
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListRoutes.html
   */
  public toListRoutes() {
    return this.to('ListRoutes');
  }

  /**
   * Grants permission to list the tags for an App Mesh resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list existing virtual gateways in a service mesh
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html
   */
  public toListVirtualGateways() {
    return this.to('ListVirtualGateways');
  }

  /**
   * Grants permission to list existing virtual nodes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   */
  public toListVirtualNodes() {
    return this.to('ListVirtualNodes');
  }

  /**
   * Grants permission to list existing virtual routers in a service mesh
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualRouters.html
   */
  public toListVirtualRouters() {
    return this.to('ListVirtualRouters');
  }

  /**
   * Grants permission to list existing virtual services in a service mesh
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html
   */
  public toListVirtualServices() {
    return this.to('ListVirtualServices');
  }

  /**
   * Grants permission to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   */
  public toStreamAggregatedResources() {
    return this.to('StreamAggregatedResources');
  }

  /**
   * Grants permission to tag a resource with a specified resourceArn
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to delete a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing gateway route for a specified service mesh and virtual gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html
   */
  public toUpdateGatewayRoute() {
    return this.to('UpdateGatewayRoute');
  }

  /**
   * Grants permission to update an existing service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   */
  public toUpdateMesh() {
    return this.to('UpdateMesh');
  }

  /**
   * Grants permission to update an existing route for a specified service mesh and virtual router
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateRoute.html
   */
  public toUpdateRoute() {
    return this.to('UpdateRoute');
  }

  /**
   * Grants permission to update an existing virtual gateway in a specified service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html
   */
  public toUpdateVirtualGateway() {
    return this.to('UpdateVirtualGateway');
  }

  /**
   * Grants permission to update an existing virtual node in a specified service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   */
  public toUpdateVirtualNode() {
    return this.to('UpdateVirtualNode');
  }

  /**
   * Grants permission to update an existing virtual router in a specified service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualRouter.html
   */
  public toUpdateVirtualRouter() {
    return this.to('UpdateVirtualRouter');
  }

  /**
   * Grants permission to update an existing virtual service in a specified service mesh
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualService.html
   */
  public toUpdateVirtualService() {
    return this.to('UpdateVirtualService');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateGatewayRoute',
      'CreateMesh',
      'CreateRoute',
      'CreateVirtualGateway',
      'CreateVirtualNode',
      'CreateVirtualRouter',
      'CreateVirtualService',
      'DeleteGatewayRoute',
      'DeleteMesh',
      'DeleteRoute',
      'DeleteVirtualGateway',
      'DeleteVirtualNode',
      'DeleteVirtualRouter',
      'DeleteVirtualService',
      'UpdateGatewayRoute',
      'UpdateMesh',
      'UpdateRoute',
      'UpdateVirtualGateway',
      'UpdateVirtualNode',
      'UpdateVirtualRouter',
      'UpdateVirtualService'
    ],
    Read: [
      'DescribeGatewayRoute',
      'DescribeMesh',
      'DescribeRoute',
      'DescribeVirtualGateway',
      'DescribeVirtualNode',
      'DescribeVirtualRouter',
      'DescribeVirtualService',
      'StreamAggregatedResources'
    ],
    List: [
      'ListGatewayRoutes',
      'ListMeshes',
      'ListRoutes',
      'ListTagsForResource',
      'ListVirtualGateways',
      'ListVirtualNodes',
      'ListVirtualRouters',
      'ListVirtualServices'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMesh(meshName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualService(meshName: string, virtualServiceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualService/${ virtualServiceName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualNode(meshName: string, virtualNodeName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualNode/${ virtualNodeName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualRouter(meshName: string, virtualRouterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualRouter/${ virtualRouterName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoute(meshName: string, virtualRouterName: string, routeName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualRouter/${ virtualRouterName }/route/${ routeName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualGateway(meshName: string, virtualGatewayName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualGateway/${ virtualGatewayName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGatewayRoute(meshName: string, virtualGatewayName: string, gatewayRouteName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appmesh.defaultPartition }:appmesh:${ region || '*' }:${ account || '*' }:mesh/${ meshName }/virtualGateway/${ virtualGatewayName }/gatewayRoute/${ gatewayRouteName }`);
  }

  /**
   * Filters actions by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGatewayRoute()
   * - .toCreateMesh()
   * - .toCreateRoute()
   * - .toCreateVirtualGateway()
   * - .toCreateVirtualNode()
   * - .toCreateVirtualRouter()
   * - .toCreateVirtualService()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - mesh
   * - virtualService
   * - virtualNode
   * - virtualRouter
   * - route
   * - virtualGateway
   * - gatewayRoute
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGatewayRoute()
   * - .toCreateMesh()
   * - .toCreateRoute()
   * - .toCreateVirtualGateway()
   * - .toCreateVirtualNode()
   * - .toCreateVirtualRouter()
   * - .toCreateVirtualService()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
