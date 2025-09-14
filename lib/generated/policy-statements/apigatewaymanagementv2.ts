import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [apigateway-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagementv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApigatewayV2 extends PolicyStatement {
  public servicePrefix = 'apigateway';

  /**
   * Statement provider for service [apigateway-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagementv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a routing rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequestPriority()
   * - .ifRequestConditionBasePaths()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-routingrules.html#domainnames-domainname-routingrulespost
   */
  public toCreateRoutingRule() {
    return this.to('CreateRoutingRule');
  }

  /**
   * Grants permission to delete a particular resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/api-reference.html
   */
  public toDELETE() {
    return this.to('DELETE');
  }

  /**
   * Grants permission to delete a routing rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourcePriority()
   * - .ifResourceConditionBasePaths()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-routingrules-routingruleid.html#domainnames-domainname-routingrules-routingruleiddelete
   */
  public toDeleteRoutingRule() {
    return this.to('DeleteRoutingRule');
  }

  /**
   * Grants permission to read a particular resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/api-reference.html
   */
  public toGET() {
    return this.to('GET');
  }

  /**
   * Grants permission to read a routing rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-routingrules-routingruleid.html#domainnames-domainname-routingrules-routingruleidget
   */
  public toGetRoutingRule() {
    return this.to('GetRoutingRule');
  }

  /**
   * Grants permission to list routing rules under a domain name
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-routingrules.html#domainnames-domainname-routingrulesget
   */
  public toListRoutingRules() {
    return this.to('ListRoutingRules');
  }

  /**
   * Grants permission to update a particular resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/api-reference.html
   */
  public toPATCH() {
    return this.to('PATCH');
  }

  /**
   * Grants permission to create a particular resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/api-reference.html
   */
  public toPOST() {
    return this.to('POST');
  }

  /**
   * Grants permission to update a particular resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/api-reference.html
   */
  public toPUT() {
    return this.to('PUT');
  }

  /**
   * Grants permission to update a routing rule using the PutRoutingRule API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequestPriority()
   * - .ifRequestConditionBasePaths()
   * - .ifResourcePriority()
   * - .ifResourceConditionBasePaths()
   *
   * https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-routingrules-routingruleid.html#domainnames-domainname-routingrules-routingruleidput
   */
  public toUpdateRoutingRule() {
    return this.to('UpdateRoutingRule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateRoutingRule',
      'DELETE',
      'DeleteRoutingRule',
      'PATCH',
      'POST',
      'PUT',
      'UpdateRoutingRule'
    ],
    Read: [
      'GET',
      'GetRoutingRule'
    ],
    List: [
      'ListRoutingRules'
    ]
  };

  /**
   * Adds a resource of type AccessLogSettings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessLogSettings(apiId: string, stageName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/stages/${ stageName }/accesslogsettings`);
  }

  /**
   * Adds a resource of type Api to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestApiName()
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifRequestDisableExecuteApiEndpoint()
   * - .ifRequestEndpointType()
   * - .ifRequestRouteAuthorizationType()
   * - .ifResourceApiKeyRequired()
   * - .ifResourceApiName()
   * - .ifResourceAuthorizerType()
   * - .ifResourceAuthorizerUri()
   * - .ifResourceDisableExecuteApiEndpoint()
   * - .ifResourceEndpointType()
   * - .ifResourceRouteAuthorizationType()
   * - .ifAwsResourceTag()
   */
  public onApi(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }`);
  }

  /**
   * Adds a resource of type Apis to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestApiName()
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifRequestDisableExecuteApiEndpoint()
   * - .ifRequestEndpointType()
   * - .ifRequestRouteAuthorizationType()
   * - .ifAwsResourceTag()
   */
  public onApis(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis`);
  }

  /**
   * Adds a resource of type ApiMapping to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param apiMappingId - Identifier for the apiMappingId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApiMapping(domainName: string, apiMappingId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }/apimappings/${ apiMappingId }`);
  }

  /**
   * Adds a resource of type ApiMappings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApiMappings(domainName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }/apimappings`);
  }

  /**
   * Adds a resource of type Authorizer to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param authorizerId - Identifier for the authorizerId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifResourceAuthorizerType()
   * - .ifResourceAuthorizerUri()
   * - .ifAwsResourceTag()
   */
  public onAuthorizer(apiId: string, authorizerId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/authorizers/${ authorizerId }`);
  }

  /**
   * Adds a resource of type Authorizers to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifAwsResourceTag()
   */
  public onAuthorizers(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/authorizers`);
  }

  /**
   * Adds a resource of type AuthorizersCache to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAuthorizersCache(apiId: string, stageName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/stages/${ stageName }/cache/authorizers`);
  }

  /**
   * Adds a resource of type Cors to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCors(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/cors`);
  }

  /**
   * Adds a resource of type Deployment to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(apiId: string, deploymentId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/deployments/${ deploymentId }`);
  }

  /**
   * Adds a resource of type Deployments to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestStageName()
   * - .ifAwsResourceTag()
   */
  public onDeployments(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/deployments`);
  }

  /**
   * Adds a resource of type ExportedAPI to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param specification - Identifier for the specification.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExportedAPI(apiId: string, specification: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/exports/${ specification }`);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param integrationId - Identifier for the integrationId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(apiId: string, integrationId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/integrations/${ integrationId }`);
  }

  /**
   * Adds a resource of type Integrations to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrations(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/integrations`);
  }

  /**
   * Adds a resource of type IntegrationResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param integrationId - Identifier for the integrationId.
   * @param integrationResponseId - Identifier for the integrationResponseId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/integrations/${ integrationId }/integrationresponses/${ integrationResponseId }`);
  }

  /**
   * Adds a resource of type IntegrationResponses to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param integrationId - Identifier for the integrationId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrationResponses(apiId: string, integrationId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/integrations/${ integrationId }/integrationresponses`);
  }

  /**
   * Adds a resource of type Model to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param modelId - Identifier for the modelId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(apiId: string, modelId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/models/${ modelId }`);
  }

  /**
   * Adds a resource of type Models to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModels(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/models`);
  }

  /**
   * Adds a resource of type ModelTemplate to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param modelId - Identifier for the modelId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelTemplate(apiId: string, modelId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/models/${ modelId }/template`);
  }

  /**
   * Adds a resource of type Route to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param routeId - Identifier for the routeId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestRouteAuthorizationType()
   * - .ifResourceApiKeyRequired()
   * - .ifResourceRouteAuthorizationType()
   * - .ifAwsResourceTag()
   */
  public onRoute(apiId: string, routeId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/routes/${ routeId }`);
  }

  /**
   * Adds a resource of type Routes to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestRouteAuthorizationType()
   * - .ifAwsResourceTag()
   */
  public onRoutes(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/routes`);
  }

  /**
   * Adds a resource of type RouteResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param routeId - Identifier for the routeId.
   * @param routeResponseId - Identifier for the routeResponseId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRouteResponse(apiId: string, routeId: string, routeResponseId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/routes/${ routeId }/routeresponses/${ routeResponseId }`);
  }

  /**
   * Adds a resource of type RouteResponses to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param routeId - Identifier for the routeId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRouteResponses(apiId: string, routeId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/routes/${ routeId }/routeresponses`);
  }

  /**
   * Adds a resource of type RouteRequestParameter to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param routeId - Identifier for the routeId.
   * @param requestParameterKey - Identifier for the requestParameterKey.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRouteRequestParameter(apiId: string, routeId: string, requestParameterKey: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/routes/${ routeId }/requestparameters/${ requestParameterKey }`);
  }

  /**
   * Adds a resource of type RouteSettings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param routeKey - Identifier for the routeKey.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRouteSettings(apiId: string, stageName: string, routeKey: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/stages/${ stageName }/routesettings/${ routeKey }`);
  }

  /**
   * Adds a resource of type RoutingRule to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param routingRuleId - Identifier for the routingRuleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceConditionBasePaths()
   * - .ifResourcePriority()
   * - .ifAwsResourceTag()
   */
  public onRoutingRule(domainName: string, routingRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/domainnames/${ domainName }/routingrules/${ routingRuleId }`);
  }

  /**
   * Adds a resource of type Stage to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAccessLoggingDestination()
   * - .ifRequestAccessLoggingFormat()
   * - .ifResourceAccessLoggingDestination()
   * - .ifResourceAccessLoggingFormat()
   * - .ifAwsResourceTag()
   */
  public onStage(apiId: string, stageName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/stages/${ stageName }`);
  }

  /**
   * Adds a resource of type Stages to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAccessLoggingDestination()
   * - .ifRequestAccessLoggingFormat()
   * - .ifAwsResourceTag()
   */
  public onStages(apiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apis/${ apiId }/stages`);
  }

  /**
   * Adds a resource of type VpcLink to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param vpcLinkId - Identifier for the vpcLinkId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcLink(vpcLinkId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/vpclinks/${ vpcLinkId }`);
  }

  /**
   * Adds a resource of type VpcLinks to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcLinks(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/vpclinks`);
  }

  /**
   * Filters access by access log destination. Available during the CreateStage and UpdateStage operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Stage
   * - Stages
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAccessLoggingDestination(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AccessLoggingDestination`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by access log format. Available during the CreateStage and UpdateStage operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Stage
   * - Stages
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAccessLoggingFormat(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AccessLoggingFormat`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the requirement of API. Available during the CreateRoute and UpdateRoute operations. Also available as a collection during import and reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   * - Route
   * - Routes
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestApiKeyRequired(value?: boolean) {
    return this.if(`Request/ApiKeyRequired`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by API name. Available during the CreateApi and UpdateApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestApiName(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/ApiName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by type of authorizer in the request, for example REQUEST or JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   * - Authorizer
   * - Authorizers
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAuthorizerType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AuthorizerType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   * - Authorizer
   * - Authorizers
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAuthorizerUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AuthorizerUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by base paths defined on the condition of a routing rule. Available during the CreateRoutingRule and UpdateRoutingRule operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * Applies to actions:
   * - .toCreateRoutingRule()
   * - .toUpdateRoutingRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestConditionBasePaths(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/ConditionBasePaths`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by status of the default execute-api endpoint. Available during the CreateApi and UpdateApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestDisableExecuteApiEndpoint(value?: boolean) {
    return this.if(`Request/DisableExecuteApiEndpoint`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateApi, and UpdateApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/EndpointType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by URI of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMtlsTrustStoreUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/MtlsTrustStoreUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by version of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMtlsTrustStoreVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/MtlsTrustStoreVersion`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by priority of the routing rule. Available during the CreateRoutingRule and UpdateRoutingRule operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * Applies to actions:
   * - .toCreateRoutingRule()
   * - .toUpdateRoutingRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRequestPriority(value: number | number[], operator?: Operator | string) {
    return this.if(`Request/Priority`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT. Available during the CreateRoute and UpdateRoute operations. Also available as a collection during import
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Apis
   * - Route
   * - Routes
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestRouteAuthorizationType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/RouteAuthorizationType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by routing mode of the domain name. Available during the CreateDomainName and UpdateDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestRoutingMode(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/RoutingMode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by TLS version. Available during the CreateDomain and UpdateDomain operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestSecurityPolicy(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/SecurityPolicy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by stage name of the deployment that you attempt to create. Available during the CreateDeployment operation
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Deployments
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestStageName(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/StageName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by access log destination of the current Stage resource. Available during the UpdateStage and DeleteStage operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Stage
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAccessLoggingDestination(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AccessLoggingDestination`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by access log format of the current Stage resource. Available during the UpdateStage and DeleteStage operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Stage
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAccessLoggingFormat(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AccessLoggingFormat`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the requirement of API key for the existing Route resource. Available during the UpdateRoute and DeleteRoute operations. Also available as a collection during reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Route
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifResourceApiKeyRequired(value?: boolean) {
    return this.if(`Resource/ApiKeyRequired`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by API name. Available during the UpdateApi and DeleteApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceApiName(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/ApiName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the current type of authorizer, for example REQUEST or JWT. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during import and reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Authorizer
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAuthorizerType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AuthorizerType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the URI of the current Lambda authorizer associated with the current API. Available during UpdateAuthorizer and DeleteAuthorizer. Also available as a collection during reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Authorizer
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAuthorizerUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AuthorizerUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by base paths defined on the condition of the existing routing rule. Available during the UpdateRoutingRule and DeleteRoutingRule operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * Applies to actions:
   * - .toDeleteRoutingRule()
   * - .toUpdateRoutingRule()
   *
   * Applies to resource types:
   * - RoutingRule
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceConditionBasePaths(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/ConditionBasePaths`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by status of the default execute-api endpoint. Available during the UpdateApi and DeleteApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifResourceDisableExecuteApiEndpoint(value?: boolean) {
    return this.if(`Resource/DisableExecuteApiEndpoint`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by endpoint type. Available during the UpdateDomainName, DeleteDomainName, UpdateApi, and DeleteApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/EndpointType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by URI of the truststore used for mutual TLS authentication. Available during the UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceMtlsTrustStoreUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/MtlsTrustStoreUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by version of the truststore used for mutual TLS authentication. Available during the UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceMtlsTrustStoreVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/MtlsTrustStoreVersion`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by priority of the existing routing rule. Available during the UpdateRoutingRule and DeleteRoutingRule operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * Applies to actions:
   * - .toDeleteRoutingRule()
   * - .toUpdateRoutingRule()
   *
   * Applies to resource types:
   * - RoutingRule
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifResourcePriority(value: number | number[], operator?: Operator | string) {
    return this.if(`Resource/Priority`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by authorization type of the existing Route resource, for example NONE, AWS_IAM, CUSTOM. Available during the UpdateRoute and DeleteRoute operations. Also available as a collection during reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Api
   * - Route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceRouteAuthorizationType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/RouteAuthorizationType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by routing mode of the existing domain name. Available during the UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-routing-mode
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceRoutingMode(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/RoutingMode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by TLS version. Available during the UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceSecurityPolicy(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/SecurityPolicy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html
   *
   * Applies to actions:
   * - .toDELETE()
   * - .toPATCH()
   * - .toPOST()
   * - .toPUT()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html
   *
   * Applies to actions:
   * - .toCreateRoutingRule()
   * - .toDeleteRoutingRule()
   * - .toGetRoutingRule()
   * - .toListRoutingRules()
   * - .toUpdateRoutingRule()
   *
   * Applies to resource types:
   * - AccessLogSettings
   * - Api
   * - Apis
   * - ApiMapping
   * - ApiMappings
   * - Authorizer
   * - Authorizers
   * - AuthorizersCache
   * - Cors
   * - Deployment
   * - Deployments
   * - ExportedAPI
   * - Integration
   * - Integrations
   * - IntegrationResponse
   * - IntegrationResponses
   * - Model
   * - Models
   * - ModelTemplate
   * - Route
   * - Routes
   * - RouteResponse
   * - RouteResponses
   * - RouteRequestParameter
   * - RouteSettings
   * - RoutingRule
   * - Stage
   * - Stages
   * - VpcLink
   * - VpcLinks
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html
   *
   * Applies to actions:
   * - .toDELETE()
   * - .toPATCH()
   * - .toPOST()
   * - .toPUT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
