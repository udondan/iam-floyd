import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [apigateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Apigateway extends PolicyStatement {
  public servicePrefix = 'apigateway';

  /**
   * Statement provider for service [apigateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add certificates for mutual TLS authentication to a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/ADD_CERTIFICATE_TO_DOMAIN.html
   */
  public toAddCertificateToDomain() {
    return this.to('AddCertificateToDomain');
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
   * https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html
   */
  public toDELETE() {
    return this.to('DELETE');
  }

  /**
   * Grants permission to read a particular resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html
   */
  public toGET() {
    return this.to('GET');
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
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html
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
   * https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html
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
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html
   */
  public toPUT() {
    return this.to('PUT');
  }

  /**
   * Grants permission to remove certificates for mutual TLS authentication from a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/REMOVE_CERTIFICATE_FROM_DOMAIN.html
   */
  public toRemoveCertificateFromDomain() {
    return this.to('RemoveCertificateFromDomain');
  }

  /**
   * Grants permission set a WAF access control list (ACL). This is an additional authorization control for managing the Stage resource due to the sensitive nature of WebAcl's
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html
   */
  public toSetWebACL() {
    return this.to('SetWebACL');
  }

  /**
   * Grants permission to manage the IAM resource policy for an API. This is an additional authorization control for managing an API due to the sensitive nature of the resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/UPDATE_REST_API_POLICY.html
   */
  public toUpdateRestApiPolicy() {
    return this.to('UpdateRestApiPolicy');
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AddCertificateToDomain",
      "RemoveCertificateFromDomain",
      "SetWebACL",
      "UpdateRestApiPolicy"
    ],
    "Write": [
      "DELETE",
      "PATCH",
      "POST",
      "PUT"
    ],
    "Read": [
      "GET"
    ]
  };

  /**
   * Adds a resource of type Account to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccount(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/account/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ApiKey to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiKeyId - Identifier for the apiKeyId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApiKey(apiKeyId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/apikeys/${ApiKeyId}/';
    arn = arn.replace('${ApiKeyId}', apiKeyId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ApiKeys to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApiKeys(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/apikeys/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Authorizer to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param authorizerId - Identifier for the authorizerId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifResourceAuthorizerType()
   * - .ifResourceAuthorizerUri()
   */
  public onAuthorizer(restApiId: string, authorizerId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/authorizers/${AuthorizerId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${AuthorizerId}', authorizerId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Authorizers to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   */
  public onAuthorizers(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/authorizers/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type BasePathMapping to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param basePath - Identifier for the basePath.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBasePathMapping(domainName: string, basePath: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/domainnames/${DomainName}/basepathmappings/${BasePath}/';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${BasePath}', basePath);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type BasePathMappings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBasePathMappings(domainName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/domainnames/${DomainName}/basepathmappings/';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ClientCertificate to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param clientCertificateId - Identifier for the clientCertificateId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onClientCertificate(clientCertificateId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/clientcertificates/${ClientCertificateId}/';
    arn = arn.replace('${ClientCertificateId}', clientCertificateId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ClientCertificates to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onClientCertificates(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/clientcertificates/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Deployment to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeployment(restApiId: string, deploymentId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/deployments/${DeploymentId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${DeploymentId}', deploymentId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Deployments to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestStageName()
   */
  public onDeployments(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/deployments/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DocumentationPart to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param documentationPartId - Identifier for the documentationPartId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDocumentationPart(restApiId: string, documentationPartId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/documentation/parts/${DocumentationPartId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${DocumentationPartId}', documentationPartId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DocumentationParts to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDocumentationParts(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/documentation/parts/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DocumentationVersion to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param documentationVersionId - Identifier for the documentationVersionId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDocumentationVersion(restApiId: string, documentationVersionId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/documentation/versions/${DocumentationVersionId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${DocumentationVersionId}', documentationVersionId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DocumentationVersions to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDocumentationVersions(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/documentation/versions/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DomainName to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestEndpointType()
   * - .ifRequestMtlsTrustStoreUri()
   * - .ifRequestMtlsTrustStoreVersion()
   * - .ifRequestSecurityPolicy()
   * - .ifResourceEndpointType()
   * - .ifResourceMtlsTrustStoreUri()
   * - .ifResourceMtlsTrustStoreVersion()
   * - .ifResourceSecurityPolicy()
   */
  public onDomainName(domainName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/domainnames/${DomainName}/';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DomainNames to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestEndpointType()
   * - .ifRequestMtlsTrustStoreUri()
   * - .ifRequestMtlsTrustStoreVersion()
   * - .ifRequestSecurityPolicy()
   */
  public onDomainNames(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/domainnames/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type GatewayResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param responseType - Identifier for the responseType.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGatewayResponse(restApiId: string, responseType: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/gatewayresponses/${ResponseType}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResponseType}', responseType);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type GatewayResponses to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGatewayResponses(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/gatewayresponses/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIntegration(restApiId: string, resourceId: string, httpMethodType: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/${ResourceId}/methods/${HttpMethodType}/integration/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${HttpMethodType}', httpMethodType);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type IntegrationResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param statusCode - Identifier for the statusCode.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIntegrationResponse(restApiId: string, resourceId: string, httpMethodType: string, statusCode: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/${ResourceId}/methods/${HttpMethodType}/integration/responses/${StatusCode}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${HttpMethodType}', httpMethodType);
    arn = arn.replace('${StatusCode}', statusCode);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Method to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestRouteAuthorizationType()
   * - .ifResourceApiKeyRequired()
   * - .ifResourceRouteAuthorizationType()
   */
  public onMethod(restApiId: string, resourceId: string, httpMethodType: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/${ResourceId}/methods/${HttpMethodType}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${HttpMethodType}', httpMethodType);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type MethodResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param statusCode - Identifier for the statusCode.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMethodResponse(restApiId: string, resourceId: string, httpMethodType: string, statusCode: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/${ResourceId}/methods/${HttpMethodType}/responses/${StatusCode}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${HttpMethodType}', httpMethodType);
    arn = arn.replace('${StatusCode}', statusCode);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Model to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param modelName - Identifier for the modelName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModel(restApiId: string, modelName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/models/${ModelName}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Models to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModels(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/models/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RequestValidator to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param requestValidatorId - Identifier for the requestValidatorId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRequestValidator(restApiId: string, requestValidatorId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/requestvalidators/${RequestValidatorId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${RequestValidatorId}', requestValidatorId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RequestValidators to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRequestValidators(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/requestvalidators/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Resource to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResource(restApiId: string, resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/${ResourceId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Resources to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResources(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/resources/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RestApi to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
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
   */
  public onRestApi(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RestApis to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestApiKeyRequired()
   * - .ifRequestApiName()
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifRequestDisableExecuteApiEndpoint()
   * - .ifRequestEndpointType()
   * - .ifRequestRouteAuthorizationType()
   */
  public onRestApis(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Sdk to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param stageName - Identifier for the stageName.
   * @param sdkType - Identifier for the sdkType.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSdk(restApiId: string, stageName: string, sdkType: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/stages/${StageName}/sdks/${SdkType}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${StageName}', stageName);
    arn = arn.replace('${SdkType}', sdkType);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Stage to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param stageName - Identifier for the stageName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestAccessLoggingDestination()
   * - .ifRequestAccessLoggingFormat()
   * - .ifResourceAccessLoggingDestination()
   * - .ifResourceAccessLoggingFormat()
   */
  public onStage(restApiId: string, stageName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/stages/${StageName}/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${StageName}', stageName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Stages to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRequestAccessLoggingDestination()
   * - .ifRequestAccessLoggingFormat()
   */
  public onStages(restApiId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/${RestApiId}/stages/';
    arn = arn.replace('${RestApiId}', restApiId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Template to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param modelName - Identifier for the modelName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTemplate(modelName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/restapis/models/${ModelName}/template/';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type UsagePlan to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUsagePlan(usagePlanId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/usageplans/${UsagePlanId}/';
    arn = arn.replace('${UsagePlanId}', usagePlanId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type UsagePlans to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUsagePlans(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/usageplans/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type UsagePlanKey to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param id - Identifier for the id.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUsagePlanKey(usagePlanId: string, id: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/usageplans/${UsagePlanId}/keys/${Id}/';
    arn = arn.replace('${UsagePlanId}', usagePlanId);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type UsagePlanKeys to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUsagePlanKeys(usagePlanId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/usageplans/${UsagePlanId}/keys/';
    arn = arn.replace('${UsagePlanId}', usagePlanId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type VpcLink to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param vpcLinkId - Identifier for the vpcLinkId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVpcLink(vpcLinkId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/vpclinks/${VpcLinkId}/';
    arn = arn.replace('${VpcLinkId}', vpcLinkId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type VpcLinks to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVpcLinks(region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::/vpclinks/';
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`Request/AccessLoggingDestination`, value, operator || 'StringLike');
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
    return this.if(`Request/AccessLoggingFormat`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Method
   * - RestApi
   * - RestApis
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestApiKeyRequired(value?: boolean) {
    return this.if(`Request/ApiKeyRequired`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by API name. Available during the CreateRestApi and UpdateRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - RestApi
   * - RestApis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestApiName(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/ApiName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   * - Authorizers
   * - RestApi
   * - RestApis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAuthorizerType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AuthorizerType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   * - Authorizers
   * - RestApi
   * - RestApis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAuthorizerUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AuthorizerUri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by status of the default execute-api endpoint. Available during the CreateRestApi and DeleteRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - RestApi
   * - RestApis
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestDisableExecuteApiEndpoint(value?: boolean) {
    return this.if(`Request/DisableExecuteApiEndpoint`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   * - RestApi
   * - RestApis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/EndpointType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by URI of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMtlsTrustStoreUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/MtlsTrustStoreUri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by version of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMtlsTrustStoreVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/MtlsTrustStoreVersion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Method
   * - RestApi
   * - RestApis
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestRouteAuthorizationType(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/RouteAuthorizationType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by TLS version. Available during the CreateDomain and UpdateDomain operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestSecurityPolicy(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/SecurityPolicy`, value, operator || 'StringLike');
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
    return this.if(`Request/StageName`, value, operator || 'StringLike');
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
    return this.if(`Resource/AccessLoggingDestination`, value, operator || 'StringLike');
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
    return this.if(`Resource/AccessLoggingFormat`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Method
   * - RestApi
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifResourceApiKeyRequired(value?: boolean) {
    return this.if(`Resource/ApiKeyRequired`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by API name of the existing RestApi resource. Available during UpdateRestApi and DeleteRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceApiName(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/ApiName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the current type of authorizer, for example TOKEN, REQUEST, JWT. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAuthorizerType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AuthorizerType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by URI of a Lambda authorizer function. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAuthorizerUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/AuthorizerUri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by status of the default execute-api endpoint of the current RestApi resource. Available during UpdateRestApi and DeleteRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - RestApi
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifResourceDisableExecuteApiEndpoint(value?: boolean) {
    return this.if(`Resource/DisableExecuteApiEndpoint`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by endpoint type. Available during the UpdateDomainName, DeleteDomainName, UpdateRestApi, and DeleteRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/EndpointType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by URI of the truststore used for mutual TLS authentication. Available during UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceMtlsTrustStoreUri(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/MtlsTrustStoreUri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by version of the truststore used for mutual TLS authentication. Available during UpdateDomainName and DeleteDomainName operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceMtlsTrustStoreVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/MtlsTrustStoreVersion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by authorization type of the existing Method resource, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Method
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceRouteAuthorizationType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/RouteAuthorizationType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by TLS version. Available during UpdateDomain and DeleteDomain operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceSecurityPolicy(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/SecurityPolicy`, value, operator || 'StringLike');
  }
}
