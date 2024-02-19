import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a child asset with a parent asset through a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html
   */
  public toAssociateAssets() {
    return this.to('AssociateAssets');
  }

  /**
   * Grants permission to associate a time series with an asset property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateTimeSeriesToAssetProperty.html
   */
  public toAssociateTimeSeriesToAssetProperty() {
    return this.to('AssociateTimeSeriesToAssetProperty');
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
   * Grants permission to retrieve computed aggregates for multiple asset properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html
   */
  public toBatchGetAssetPropertyAggregates() {
    return this.to('BatchGetAssetPropertyAggregates');
  }

  /**
   * Grants permission to retrieve the latest value for multiple asset properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html
   */
  public toBatchGetAssetPropertyValue() {
    return this.to('BatchGetAssetPropertyValue');
  }

  /**
   * Grants permission to retrieve the value history for multiple asset properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html
   */
  public toBatchGetAssetPropertyValueHistory() {
    return this.to('BatchGetAssetPropertyValueHistory');
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
   * Grants permission to create an asset model composite model inside an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html
   */
  public toCreateAssetModelCompositeModel() {
    return this.to('CreateAssetModelCompositeModel');
  }

  /**
   * Grants permission to create bulk import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateBulkImportJob.html
   */
  public toCreateBulkImportJob() {
    return this.to('CreateBulkImportJob');
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
   * Grants permission to delete an asset model composite model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModelCompositeModel.html
   */
  public toDeleteAssetModelCompositeModel() {
    return this.to('DeleteAssetModelCompositeModel');
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
   * Grants permission to delete a time series
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteTimeSeries.html
   */
  public toDeleteTimeSeries() {
    return this.to('DeleteTimeSeries');
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
   * Grants permission to describe actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAction.html
   */
  public toDescribeAction() {
    return this.to('DescribeAction');
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
   * Grants permission to describe an asset composite model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetCompositeModel.html
   */
  public toDescribeAssetCompositeModel() {
    return this.to('DescribeAssetCompositeModel');
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
   * Grants permission to describe an asset model composite model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModelCompositeModel.html
   */
  public toDescribeAssetModelCompositeModel() {
    return this.to('DescribeAssetModelCompositeModel');
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
   * Grants permission to describe bulk import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeBulkImportJob.html
   */
  public toDescribeBulkImportJob() {
    return this.to('DescribeBulkImportJob');
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
   * Grants permission to describe the default encryption configuration for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDefaultEncryptionConfiguration.html
   */
  public toDescribeDefaultEncryptionConfiguration() {
    return this.to('DescribeDefaultEncryptionConfiguration');
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
   * Grants permission to describe the storage configuration for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeStorageConfiguration.html
   */
  public toDescribeStorageConfiguration() {
    return this.to('DescribeStorageConfiguration');
  }

  /**
   * Grants permission to describe a time series
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTimeSeries.html
   */
  public toDescribeTimeSeries() {
    return this.to('DescribeTimeSeries');
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
   * Grants permission to disassociate a time series from an asset property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateTimeSeriesFromAssetProperty.html
   */
  public toDisassociateTimeSeriesFromAssetProperty() {
    return this.to('DisassociateTimeSeriesFromAssetProperty');
  }

  /**
   * Grants permission to allow IoT SiteWise integrate with other services
   *
   * Access Level: Write
   */
  public toEnableSiteWiseIntegration() {
    return this.to('EnableSiteWiseIntegration');
  }

  /**
   * Grants permission to execute actions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ExecuteAction.html
   */
  public toExecuteAction() {
    return this.to('ExecuteAction');
  }

  /**
   * Grants permission to execute query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ExecuteQuery.html
   */
  public toExecuteQuery() {
    return this.to('ExecuteQuery');
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
   * Grants permission to retrieve interpolated values for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetInterpolatedAssetPropertyValues.html
   */
  public toGetInterpolatedAssetPropertyValues() {
    return this.to('GetInterpolatedAssetPropertyValues');
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
   * Grants permission to list all actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListActions.html
   */
  public toListActions() {
    return this.to('ListActions');
  }

  /**
   * Grants permission to list all asset model composite models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModelCompositeModels.html
   */
  public toListAssetModelCompositeModels() {
    return this.to('ListAssetModelCompositeModels');
  }

  /**
   * Grants permission to list asset model properties
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModelProperties.html
   */
  public toListAssetModelProperties() {
    return this.to('ListAssetModelProperties');
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
   * Grants permission to list asset properties
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetProperties.html
   */
  public toListAssetProperties() {
    return this.to('ListAssetProperties');
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
   * Grants permission to list all assets associated with an asset through a hierarchy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html
   */
  public toListAssociatedAssets() {
    return this.to('ListAssociatedAssets');
  }

  /**
   * Grants permission to list bulk import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListBulkImportJobs.html
   */
  public toListBulkImportJobs() {
    return this.to('ListBulkImportJobs');
  }

  /**
   * Grants permission to list all asset model composition relationships
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListCompositionRelationships.html
   */
  public toListCompositionRelationships() {
    return this.to('ListCompositionRelationships');
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
   * Grants permission to list time series
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTimeSeries.html
   */
  public toListTimeSeries() {
    return this.to('ListTimeSeries');
  }

  /**
   * Grants permission to set the default encryption configuration for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutDefaultEncryptionConfiguration.html
   */
  public toPutDefaultEncryptionConfiguration() {
    return this.to('PutDefaultEncryptionConfiguration');
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
   * Grants permission to configure storage settings for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html
   */
  public toPutStorageConfiguration() {
    return this.to('PutStorageConfiguration');
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
   * Grants permission to update asset model composite model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModelCompositeModel.html
   */
  public toUpdateAssetModelCompositeModel() {
    return this.to('UpdateAssetModelCompositeModel');
  }

  /**
   * Grants permission to update an AssetModel property routing
   *
   * Access Level: Write
   */
  public toUpdateAssetModelPropertyRouting() {
    return this.to('UpdateAssetModelPropertyRouting');
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
    Write: [
      'AssociateAssets',
      'AssociateTimeSeriesToAssetProperty',
      'BatchAssociateProjectAssets',
      'BatchDisassociateProjectAssets',
      'BatchPutAssetPropertyValue',
      'CreateAccessPolicy',
      'CreateAsset',
      'CreateAssetModel',
      'CreateAssetModelCompositeModel',
      'CreateBulkImportJob',
      'CreateDashboard',
      'CreateGateway',
      'CreatePortal',
      'CreateProject',
      'DeleteAccessPolicy',
      'DeleteAsset',
      'DeleteAssetModel',
      'DeleteAssetModelCompositeModel',
      'DeleteDashboard',
      'DeleteGateway',
      'DeletePortal',
      'DeleteProject',
      'DeleteTimeSeries',
      'DisassociateAssets',
      'DisassociateTimeSeriesFromAssetProperty',
      'EnableSiteWiseIntegration',
      'ExecuteAction',
      'PutDefaultEncryptionConfiguration',
      'PutLoggingOptions',
      'PutStorageConfiguration',
      'UpdateAccessPolicy',
      'UpdateAsset',
      'UpdateAssetModel',
      'UpdateAssetModelCompositeModel',
      'UpdateAssetModelPropertyRouting',
      'UpdateAssetProperty',
      'UpdateDashboard',
      'UpdateGateway',
      'UpdateGatewayCapabilityConfiguration',
      'UpdatePortal',
      'UpdateProject'
    ],
    Read: [
      'BatchGetAssetPropertyAggregates',
      'BatchGetAssetPropertyValue',
      'BatchGetAssetPropertyValueHistory',
      'DescribeAccessPolicy',
      'DescribeAction',
      'DescribeAsset',
      'DescribeAssetCompositeModel',
      'DescribeAssetModel',
      'DescribeAssetModelCompositeModel',
      'DescribeAssetProperty',
      'DescribeBulkImportJob',
      'DescribeDashboard',
      'DescribeDefaultEncryptionConfiguration',
      'DescribeGateway',
      'DescribeGatewayCapabilityConfiguration',
      'DescribeLoggingOptions',
      'DescribePortal',
      'DescribeProject',
      'DescribeStorageConfiguration',
      'DescribeTimeSeries',
      'ExecuteQuery',
      'GetAssetPropertyAggregates',
      'GetAssetPropertyValue',
      'GetAssetPropertyValueHistory',
      'GetInterpolatedAssetPropertyValues',
      'ListTagsForResource'
    ],
    List: [
      'ListAccessPolicies',
      'ListActions',
      'ListAssetModelCompositeModels',
      'ListAssetModelProperties',
      'ListAssetModels',
      'ListAssetProperties',
      'ListAssetRelationships',
      'ListAssets',
      'ListAssociatedAssets',
      'ListBulkImportJobs',
      'ListCompositionRelationships',
      'ListDashboards',
      'ListGateways',
      'ListPortals',
      'ListProjectAssets',
      'ListProjects',
      'ListTimeSeries'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type asset to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   *
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAsset(assetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:asset/${ assetId }`);
  }

  /**
   * Adds a resource of type asset-model to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   *
   * @param assetModelId - Identifier for the assetModelId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssetModel(assetModelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:asset-model/${ assetModelId }`);
  }

  /**
   * Adds a resource of type time-series to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTimeSeries.html
   *
   * @param timeSeriesId - Identifier for the timeSeriesId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTimeSeries(timeSeriesId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:time-series/${ timeSeriesId }`);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }`);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:portal/${ portalId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectId }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dashboard/${ dashboardId }`);
  }

  /**
   * Adds a resource of type access-policy to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   *
   * @param accessPolicyId - Identifier for the accessPolicyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPolicy(accessPolicyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotsitewise:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:access-policy/${ accessPolicyId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccessPolicy()
   * - .toCreateAsset()
   * - .toCreateAssetModel()
   * - .toCreateDashboard()
   * - .toCreateGateway()
   * - .toCreatePortal()
   * - .toCreateProject()
   * - .toDescribeTimeSeries()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   *
   * Applies to resource types:
   * - asset
   * - asset-model
   * - time-series
   * - gateway
   * - portal
   * - project
   * - dashboard
   * - access-policy
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccessPolicy()
   * - .toCreateAsset()
   * - .toCreateAssetModel()
   * - .toCreateDashboard()
   * - .toCreateGateway()
   * - .toCreatePortal()
   * - .toCreateProject()
   * - .toDescribeTimeSeries()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
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
    return this.if(`assetHierarchyPath`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of a child asset being associated whith a parent asset
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChildAssetId(value: string | string[], operator?: Operator | string) {
    return this.if(`childAssetId`, value, operator ?? 'StringLike');
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
    return this.if(`group`, value, operator ?? 'StringLike');
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
    return this.if(`iam`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by data streams associated with or not associated with asset properties
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIsAssociatedWithAssetProperty(value: string | string[], operator?: Operator | string) {
    return this.if(`isAssociatedWithAssetProperty`, value, operator ?? 'StringLike');
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
    return this.if(`portal`, value, operator ?? 'StringLike');
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
    return this.if(`project`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the property alias
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPropertyAlias(value: string | string[], operator?: Operator | string) {
    return this.if(`propertyAlias`, value, operator ?? 'StringLike');
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
    return this.if(`propertyId`, value, operator ?? 'StringLike');
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
    return this.if(`user`, value, operator ?? 'StringLike');
  }
}
