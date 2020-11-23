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
    this.to('AssociateAssets');
    return this;
  }

  /**
   * Grants permission to associate assets to a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html
   */
  public toBatchAssociateProjectAssets() {
    this.to('BatchAssociateProjectAssets');
    return this;
  }

  /**
   * Grants permission to disassociate assets from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html
   */
  public toBatchDisassociateProjectAssets() {
    this.to('BatchDisassociateProjectAssets');
    return this;
  }

  /**
   * Grants permission to put property values for asset properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html
   */
  public toBatchPutAssetPropertyValue() {
    this.to('BatchPutAssetPropertyValue');
    return this;
  }

  /**
   * Grants permission to create an access policy for a portal or a project
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   */
  public toCreateAccessPolicy() {
    this.to('CreateAccessPolicy');
    return this;
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
    this.to('CreateAsset');
    return this;
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
    this.to('CreateAssetModel');
    return this;
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
    this.to('CreateDashboard');
    return this;
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
    this.to('CreateGateway');
    return this;
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
    this.to('CreatePortal');
    return this;
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
    this.to('CreateProject');
    return this;
  }

  /**
   * Grants permission to delete an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html
   */
  public toDeleteAccessPolicy() {
    this.to('DeleteAccessPolicy');
    return this;
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html
   */
  public toDeleteAsset() {
    this.to('DeleteAsset');
    return this;
  }

  /**
   * Grants permission to delete an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html
   */
  public toDeleteAssetModel() {
    this.to('DeleteAssetModel');
    return this;
  }

  /**
   * Grants permission to delete a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    this.to('DeleteDashboard');
    return this;
  }

  /**
   * Grants permission to delete a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    this.to('DeleteGateway');
    return this;
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
    this.to('DeletePortal');
    return this;
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('DeleteProject');
    return this;
  }

  /**
   * Grants permission to describe an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html
   */
  public toDescribeAccessPolicy() {
    this.to('DescribeAccessPolicy');
    return this;
  }

  /**
   * Grants permission to describe an asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html
   */
  public toDescribeAsset() {
    this.to('DescribeAsset');
    return this;
  }

  /**
   * Grants permission to describe an asset model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html
   */
  public toDescribeAssetModel() {
    this.to('DescribeAssetModel');
    return this;
  }

  /**
   * Grants permission to describe an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html
   */
  public toDescribeAssetProperty() {
    this.to('DescribeAssetProperty');
    return this;
  }

  /**
   * Grants permission to describe a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html
   */
  public toDescribeDashboard() {
    this.to('DescribeDashboard');
    return this;
  }

  /**
   * Grants permission to describe a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html
   */
  public toDescribeGateway() {
    this.to('DescribeGateway');
    return this;
  }

  /**
   * Grants permission to describe a capability configuration for a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html
   */
  public toDescribeGatewayCapabilityConfiguration() {
    this.to('DescribeGatewayCapabilityConfiguration');
    return this;
  }

  /**
   * Grants permission to describe logging options for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.to('DescribeLoggingOptions');
    return this;
  }

  /**
   * Grants permission to describe a portal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html
   */
  public toDescribePortal() {
    this.to('DescribePortal');
    return this;
  }

  /**
   * Grants permission to describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.to('DescribeProject');
    return this;
  }

  /**
   * Grants permission to disassociate a child asset from a parent asset by a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html
   */
  public toDisassociateAssets() {
    this.to('DisassociateAssets');
    return this;
  }

  /**
   * Grants permission to retrieve computed aggregates for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html
   */
  public toGetAssetPropertyAggregates() {
    this.to('GetAssetPropertyAggregates');
    return this;
  }

  /**
   * Grants permission to retrieve the latest value for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html
   */
  public toGetAssetPropertyValue() {
    this.to('GetAssetPropertyValue');
    return this;
  }

  /**
   * Grants permission to retrieve the value history for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html
   */
  public toGetAssetPropertyValueHistory() {
    this.to('GetAssetPropertyValueHistory');
    return this;
  }

  /**
   * Grants permission to list all access policies for an identity or a resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html
   */
  public toListAccessPolicies() {
    this.to('ListAccessPolicies');
    return this;
  }

  /**
   * Grants permission to list all asset models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html
   */
  public toListAssetModels() {
    this.to('ListAssetModels');
    return this;
  }

  /**
   * Grants permission to list all assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html
   */
  public toListAssets() {
    this.to('ListAssets');
    return this;
  }

  /**
   * Grants permission to list all assets associated to an asset by a hierarchy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html
   */
  public toListAssociatedAssets() {
    this.to('ListAssociatedAssets');
    return this;
  }

  /**
   * Grants permission to list all dashboards in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    this.to('ListDashboards');
    return this;
  }

  /**
   * Grants permission to list all gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    this.to('ListGateways');
    return this;
  }

  /**
   * Grants permission to list all portals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html
   */
  public toListPortals() {
    this.to('ListPortals');
    return this;
  }

  /**
   * Grants permission to list all assets associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html
   */
  public toListProjectAssets() {
    this.to('ListProjectAssets');
    return this;
  }

  /**
   * Grants permission to list all projects in a portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('ListProjects');
    return this;
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
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to set logging options for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.to('PutLoggingOptions');
    return this;
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
    this.to('TagResource');
    return this;
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to update an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html
   */
  public toUpdateAccessPolicy() {
    this.to('UpdateAccessPolicy');
    return this;
  }

  /**
   * Grants permission to update an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html
   */
  public toUpdateAsset() {
    this.to('UpdateAsset');
    return this;
  }

  /**
   * Grants permission to update an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html
   */
  public toUpdateAssetModel() {
    this.to('UpdateAssetModel');
    return this;
  }

  /**
   * Grants permission to update an asset property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html
   */
  public toUpdateAssetProperty() {
    this.to('UpdateAssetProperty');
    return this;
  }

  /**
   * Grants permission to update a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    this.to('UpdateDashboard');
    return this;
  }

  /**
   * Grants permission to update a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html
   */
  public toUpdateGateway() {
    this.to('UpdateGateway');
    return this;
  }

  /**
   * Grants permission to update a capability configuration for a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html
   */
  public toUpdateGatewayCapabilityConfiguration() {
    this.to('UpdateGatewayCapabilityConfiguration');
    return this;
  }

  /**
   * Grants permission to update a portal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html
   */
  public toUpdatePortal() {
    this.to('UpdatePortal');
    return this;
  }

  /**
   * Grants permission to update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.to('UpdateProject');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateAssets",
      "BatchAssociateProjectAssets",
      "BatchDisassociateProjectAssets",
      "BatchPutAssetPropertyValue",
      "CreateAsset",
      "CreateAssetModel",
      "CreateDashboard",
      "CreateGateway",
      "CreatePortal",
      "CreateProject",
      "DeleteAsset",
      "DeleteAssetModel",
      "DeleteDashboard",
      "DeleteGateway",
      "DeletePortal",
      "DeleteProject",
      "DisassociateAssets",
      "PutLoggingOptions",
      "UpdateAsset",
      "UpdateAssetModel",
      "UpdateAssetProperty",
      "UpdateDashboard",
      "UpdateGateway",
      "UpdateGatewayCapabilityConfiguration",
      "UpdatePortal",
      "UpdateProject"
    ],
    "Permissions management": [
      "CreateAccessPolicy",
      "DeleteAccessPolicy",
      "DescribeAccessPolicy",
      "ListAccessPolicies",
      "UpdateAccessPolicy"
    ],
    "Read": [
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
      "ListAssetModels",
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
    return this.if(`iotsitewise:assetHierarchyPath`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:childAssetId`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:group`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:portal`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:project`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:propertyId`, value, operator || 'StringLike');
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
    return this.if(`iotsitewise:user`, value, operator || 'StringLike');
  }
}
