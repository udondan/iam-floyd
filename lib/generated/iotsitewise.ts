import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [iotsitewise](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotsitewise extends PolicyStatement {
  public servicePrefix = 'iotsitewise';

  /**
   * Statement provider for service [iotsitewise](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a child asset to a parent asset by a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html
   */
  public toAssociateAssets() {
    return this.to('AssociateAssets');
  }

  /**
   * Grants permission to associate assets to a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html
   */
  public toBatchAssociateProjectAssets() {
    return this.to('BatchAssociateProjectAssets');
  }

  /**
   * Grants permission to disassociate assets from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html
   */
  public toBatchDisassociateProjectAssets() {
    return this.to('BatchDisassociateProjectAssets');
  }

  /**
   * Grants permission to put property values for asset properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html
   */
  public toBatchPutAssetPropertyValue() {
    return this.to('BatchPutAssetPropertyValue');
  }

  /**
   * Grants permission to create an access policy for a portal or a project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   */
  public toCreateAccessPolicy() {
    return this.to('CreateAccessPolicy');
  }

  /**
   * Grants permission to create an asset from an asset model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   */
  public toCreateAsset() {
    return this.to('CreateAsset');
  }

  /**
   * Grants permission to create an asset model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   */
  public toCreateAssetModel() {
    return this.to('CreateAssetModel');
  }

  /**
   * Grants permission to create a dashboard in a project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   */
  public toCreateDashboard() {
    return this.to('CreateDashboard');
  }

  /**
   * Grants permission to create a gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   */
  public toCreateGateway() {
    return this.to('CreateGateway');
  }

  /**
   * Grants permission to create a portal
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sso:CreateManagedApplicationInstance
   * - sso:DescribeRegisteredRegions
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   */
  public toCreatePortal() {
    return this.to('CreatePortal');
  }

  /**
   * Grants permission to create a project in a portal
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete an access policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html
   */
  public toDeleteAccessPolicy() {
    return this.to('DeleteAccessPolicy');
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html
   */
  public toDeleteAsset() {
    return this.to('DeleteAsset');
  }

  /**
   * Grants permission to delete an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html
   */
  public toDeleteAssetModel() {
    return this.to('DeleteAssetModel');
  }

  /**
   * Grants permission to delete a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    return this.to('DeleteDashboard');
  }

  /**
   * Grants permission to delete a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to delete a portal
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html
   */
  public toDeletePortal() {
    return this.to('DeletePortal');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to describe an access policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html
   */
  public toDescribeAccessPolicy() {
    return this.to('DescribeAccessPolicy');
  }

  /**
   * Grants permission to describe an asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html
   */
  public toDescribeAsset() {
    return this.to('DescribeAsset');
  }

  /**
   * Grants permission to describe an asset model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html
   */
  public toDescribeAssetModel() {
    return this.to('DescribeAssetModel');
  }

  /**
   * Grants permission to describe an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html
   */
  public toDescribeAssetProperty() {
    return this.to('DescribeAssetProperty');
  }

  /**
   * Grants permission to describe a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html
   */
  public toDescribeDashboard() {
    return this.to('DescribeDashboard');
  }

  /**
   * Grants permission to describe a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html
   */
  public toDescribeGateway() {
    return this.to('DescribeGateway');
  }

  /**
   * Grants permission to describe a capability configuration for a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html
   */
  public toDescribeGatewayCapabilityConfiguration() {
    return this.to('DescribeGatewayCapabilityConfiguration');
  }

  /**
   * Grants permission to describe logging options for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    return this.to('DescribeLoggingOptions');
  }

  /**
   * Grants permission to describe a portal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html
   */
  public toDescribePortal() {
    return this.to('DescribePortal');
  }

  /**
   * Grants permission to describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to disassociate a child asset from a parent asset by a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html
   */
  public toDisassociateAssets() {
    return this.to('DisassociateAssets');
  }

  /**
   * Grants permission to retrieve computed aggregates for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html
   */
  public toGetAssetPropertyAggregates() {
    return this.to('GetAssetPropertyAggregates');
  }

  /**
   * Grants permission to retrieve the latest value for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html
   */
  public toGetAssetPropertyValue() {
    return this.to('GetAssetPropertyValue');
  }

  /**
   * Grants permission to retrieve the value history for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html
   */
  public toGetAssetPropertyValueHistory() {
    return this.to('GetAssetPropertyValueHistory');
  }

  /**
   * Grants permission to list all access policies for an identity or a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html
   */
  public toListAccessPolicies() {
    return this.to('ListAccessPolicies');
  }

  /**
   * Grants permission to list all asset models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html
   */
  public toListAssetModels() {
    return this.to('ListAssetModels');
  }

  /**
   * Grants permission to list the asset relationship graph for an asset
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetRelationships.html
   */
  public toListAssetRelationships() {
    return this.to('ListAssetRelationships');
  }

  /**
   * Grants permission to list all assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html
   */
  public toListAssets() {
    return this.to('ListAssets');
  }

  /**
   * Grants permission to list all assets associated to an asset by a hierarchy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html
   */
  public toListAssociatedAssets() {
    return this.to('ListAssociatedAssets');
  }

  /**
   * Grants permission to list all dashboards in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    return this.to('ListDashboards');
  }

  /**
   * Grants permission to list all gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to list all portals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html
   */
  public toListPortals() {
    return this.to('ListPortals');
  }

  /**
   * Grants permission to list all assets associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html
   */
  public toListProjectAssets() {
    return this.to('ListProjectAssets');
  }

  /**
   * Grants permission to list all projects in a portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to set logging options for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    return this.to('PutLoggingOptions');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an access policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html
   */
  public toUpdateAccessPolicy() {
    return this.to('UpdateAccessPolicy');
  }

  /**
   * Grants permission to update an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html
   */
  public toUpdateAsset() {
    return this.to('UpdateAsset');
  }

  /**
   * Grants permission to update an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html
   */
  public toUpdateAssetModel() {
    return this.to('UpdateAssetModel');
  }

  /**
   * Grants permission to update an asset property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html
   */
  public toUpdateAssetProperty() {
    return this.to('UpdateAssetProperty');
  }

  /**
   * Grants permission to update a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    return this.to('UpdateDashboard');
  }

  /**
   * Grants permission to update a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html
   */
  public toUpdateGateway() {
    return this.to('UpdateGateway');
  }

  /**
   * Grants permission to update a capability configuration for a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html
   */
  public toUpdateGatewayCapabilityConfiguration() {
    return this.to('UpdateGatewayCapabilityConfiguration');
  }

  /**
   * Grants permission to update a portal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html
   */
  public toUpdatePortal() {
    return this.to('UpdatePortal');
  }

  /**
   * Grants permission to update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateAssets",
      "BatchAssociateProjectAssets",
      "BatchDisassociateProjectAssets",
      "BatchPutAssetPropertyValue",
      "CreateAccessPolicy",
      "CreateAsset",
      "CreateAssetModel",
      "CreateDashboard",
      "CreateGateway",
      "CreatePortal",
      "CreateProject",
      "DeleteAccessPolicy",
      "DeleteAsset",
      "DeleteAssetModel",
      "DeleteDashboard",
      "DeleteGateway",
      "DeletePortal",
      "DeleteProject",
      "DisassociateAssets",
      "PutLoggingOptions",
      "UpdateAccessPolicy",
      "UpdateAsset",
      "UpdateAssetModel",
      "UpdateAssetProperty",
      "UpdateDashboard",
      "UpdateGateway",
      "UpdateGatewayCapabilityConfiguration",
      "UpdatePortal",
      "UpdateProject"
    ],
    "Read": [
      "DescribeAccessPolicy",
      "DescribeAsset",
      "DescribeAssetModel",
      "DescribeAssetProperty",
      "DescribeDashboard",
      "DescribeGateway",
      "DescribeGatewayCapabilityConfiguration",
      "DescribeLoggingOptions",
      "DescribePortal",
      "DescribeProject",
      "GetAssetPropertyAggregates",
      "GetAssetPropertyValue",
      "GetAssetPropertyValueHistory",
      "ListTagsForResource"
    ],
    "List": [
      "ListAccessPolicies",
      "ListAssetModels",
      "ListAssetRelationships",
      "ListAssets",
      "ListAssociatedAssets",
      "ListDashboards",
      "ListGateways",
      "ListPortals",
      "ListProjectAssets",
      "ListProjects"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type asset to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   *
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAsset(assetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}';
    arn = arn.replace('${AssetId}', assetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type asset-model to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   *
   * @param assetModelId - Identifier for the assetModelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssetModel(assetModelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}';
    arn = arn.replace('${AssetModelId}', assetModelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}';
    arn = arn.replace('${PortalId}', portalId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}';
    arn = arn.replace('${DashboardId}', dashboardId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type access-policy to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   *
   * @param accessPolicyId - Identifier for the accessPolicyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPolicy(accessPolicyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}';
    arn = arn.replace('${AccessPolicyId}', accessPolicyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by an asset hierarchy path, which is the string of asset IDs in the asset's hierarchy, each separated by a forward slash
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssetHierarchyPath(value: string | string[], operator?: Operator | string) {
    return this.if(`assetHierarchyPath`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a child asset being associated to a parent asset
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChildAssetId(value: string | string[], operator?: Operator | string) {
    return this.if(`childAssetId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS Single Sign-On group
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`group`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS IAM identity
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIam(value: string | string[], operator?: Operator | string) {
    return this.if(`iam`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a portal
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPortal(value: string | string[], operator?: Operator | string) {
    return this.if(`portal`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a project
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProject(value: string | string[], operator?: Operator | string) {
    return this.if(`project`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an asset property
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPropertyId(value: string | string[], operator?: Operator | string) {
    return this.if(`propertyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS Single Sign-On user
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUser(value: string | string[], operator?: Operator | string) {
    return this.if(`user`, value, operator || 'StringLike');
  }
}
