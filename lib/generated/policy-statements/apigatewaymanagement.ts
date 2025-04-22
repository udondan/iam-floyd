import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add certificates for mutual TLS authentication to a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toAddCertificateToDomain() {
    return this.to('AddCertificateToDomain');
  }

  /**
   * Grants permission to create an access association from an access association source to a custom domain name for private APIs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toCreateAccessAssociation() {
    return this.to('CreateAccessAssociation');
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
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toDELETE() {
    return this.to('DELETE');
  }

  /**
   * Grants permission to read a particular resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
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
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
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
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
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
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toPUT() {
    return this.to('PUT');
  }

  /**
   * Grants permission to reject an existing access association owned by another account to a custom domain name for private APIs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toRejectAccessAssociation() {
    return this.to('RejectAccessAssociation');
  }

  /**
   * Grants permission to remove certificates for mutual TLS authentication from a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toRemoveCertificateFromDomain() {
    return this.to('RemoveCertificateFromDomain');
  }

  /**
   * Grants permission to set a WAF access control list (ACL). This is an additional authorization control for managing the Stage resource due to the sensitive nature of WebAcl's
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toSetWebACL() {
    return this.to('SetWebACL');
  }

  /**
   * Grants permission to update the management policy of a custom domain name for private APIs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toUpdateDomainNameManagementPolicy() {
    return this.to('UpdateDomainNameManagementPolicy');
  }

  /**
   * Grants permission to update the invoke policy of a custom domain name for private APIs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toUpdateDomainNamePolicy() {
    return this.to('UpdateDomainNamePolicy');
  }

  /**
   * Grants permission to manage the IAM resource policy for an API. This is an additional authorization control for managing an API due to the sensitive nature of the resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Operations.html
   */
  public toUpdateRestApiPolicy() {
    return this.to('UpdateRestApiPolicy');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AddCertificateToDomain',
      'CreateAccessAssociation',
      'RejectAccessAssociation',
      'RemoveCertificateFromDomain',
      'SetWebACL',
      'UpdateDomainNameManagementPolicy',
      'UpdateDomainNamePolicy',
      'UpdateRestApiPolicy'
    ],
    Write: [
      'DELETE',
      'PATCH',
      'POST',
      'PUT'
    ],
    Read: [
      'GET'
    ]
  };

  /**
   * Adds a resource of type Account to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccount(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/account`);
  }

  /**
   * Adds a resource of type ApiKey to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_ApiKey.html
   *
   * @param apiKeyId - Identifier for the apiKeyId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApiKey(apiKeyId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apikeys/${ apiKeyId }`);
  }

  /**
   * Adds a resource of type ApiKeys to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_ApiKey.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApiKeys(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/apikeys`);
  }

  /**
   * Adds a resource of type Authorizer to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Authorizer.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param authorizerId - Identifier for the authorizerId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifRequestCognitoUserPoolProviderArn()
   * - .ifResourceAuthorizerType()
   * - .ifResourceAuthorizerUri()
   * - .ifResourceCognitoUserPoolProviderArn()
   * - .ifAwsResourceTag()
   */
  public onAuthorizer(restApiId: string, authorizerId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/authorizers/${ authorizerId }`);
  }

  /**
   * Adds a resource of type Authorizers to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Authorizer.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAuthorizerType()
   * - .ifRequestAuthorizerUri()
   * - .ifRequestCognitoUserPoolProviderArn()
   * - .ifAwsResourceTag()
   */
  public onAuthorizers(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/authorizers`);
  }

  /**
   * Adds a resource of type BasePathMapping to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_BasePathMapping.html
   *
   * @param domainName - Identifier for the domainName.
   * @param basePath - Identifier for the basePath.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBasePathMapping(domainName: string, basePath: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }/basepathmappings/${ basePath }`);
  }

  /**
   * Adds a resource of type BasePathMappings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_BasePathMapping.html
   *
   * @param domainName - Identifier for the domainName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBasePathMappings(domainName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }/basepathmappings`);
  }

  /**
   * Adds a resource of type ClientCertificate to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_ClientCertificate.html
   *
   * @param clientCertificateId - Identifier for the clientCertificateId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClientCertificate(clientCertificateId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/clientcertificates/${ clientCertificateId }`);
  }

  /**
   * Adds a resource of type ClientCertificates to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_ClientCertificate.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClientCertificates(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/clientcertificates`);
  }

  /**
   * Adds a resource of type Deployment to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Deployment.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(restApiId: string, deploymentId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/deployments/${ deploymentId }`);
  }

  /**
   * Adds a resource of type Deployments to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Deployment.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestStageName()
   * - .ifAwsResourceTag()
   */
  public onDeployments(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/deployments`);
  }

  /**
   * Adds a resource of type DocumentationPart to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPart.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param documentationPartId - Identifier for the documentationPartId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentationPart(restApiId: string, documentationPartId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/documentation/parts/${ documentationPartId }`);
  }

  /**
   * Adds a resource of type DocumentationParts to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPart.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentationParts(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/documentation/parts`);
  }

  /**
   * Adds a resource of type DocumentationVersion to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationVersion.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param documentationVersionId - Identifier for the documentationVersionId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentationVersion(restApiId: string, documentationVersionId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/documentation/versions/${ documentationVersionId }`);
  }

  /**
   * Adds a resource of type DocumentationVersions to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationVersion.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentationVersions(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/documentation/versions`);
  }

  /**
   * Adds a resource of type DomainName to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DomainName.html
   *
   * @param domainName - Identifier for the domainName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
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
   * - .ifAwsResourceTag()
   */
  public onDomainName(domainName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }`);
  }

  /**
   * Adds a resource of type DomainNames to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DomainName.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestEndpointType()
   * - .ifRequestMtlsTrustStoreUri()
   * - .ifRequestMtlsTrustStoreVersion()
   * - .ifRequestSecurityPolicy()
   * - .ifAwsResourceTag()
   */
  public onDomainNames(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames`);
  }

  /**
   * Adds a resource of type DomainNameAccessAssociation to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DomainNameAccessAssociation.html
   *
   * @param domainName - Identifier for the domainName.
   * @param sourceType - Identifier for the sourceType.
   * @param sourceId - Identifier for the sourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDomainNameAccessAssociation(domainName: string, sourceType: string, sourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/domainnameaccessassociations/domainname/${ domainName }/${ sourceType }/${ sourceId }`);
  }

  /**
   * Adds a resource of type DomainNameAccessAssociations to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DomainNameAccessAssociation.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAccessAssociationSource()
   * - .ifRequestDomainNameArn()
   * - .ifAwsResourceTag()
   */
  public onDomainNameAccessAssociations(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/domainnameaccessassociations`);
  }

  /**
   * Adds a resource of type GatewayResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_GatewayResponse.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param responseType - Identifier for the responseType.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGatewayResponse(restApiId: string, responseType: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/gatewayresponses/${ responseType }`);
  }

  /**
   * Adds a resource of type GatewayResponses to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_GatewayResponse.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGatewayResponses(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/gatewayresponses`);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Integration.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(restApiId: string, resourceId: string, httpMethodType: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources/${ resourceId }/methods/${ httpMethodType }/integration`);
  }

  /**
   * Adds a resource of type IntegrationResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_IntegrationResponse.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param statusCode - Identifier for the statusCode.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrationResponse(restApiId: string, resourceId: string, httpMethodType: string, statusCode: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources/${ resourceId }/methods/${ httpMethodType }/integration/responses/${ statusCode }`);
  }

  /**
   * Adds a resource of type Method to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
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
  public onMethod(restApiId: string, resourceId: string, httpMethodType: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources/${ resourceId }/methods/${ httpMethodType }`);
  }

  /**
   * Adds a resource of type MethodResponse to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_MethodResponse.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param httpMethodType - Identifier for the httpMethodType.
   * @param statusCode - Identifier for the statusCode.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMethodResponse(restApiId: string, resourceId: string, httpMethodType: string, statusCode: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources/${ resourceId }/methods/${ httpMethodType }/responses/${ statusCode }`);
  }

  /**
   * Adds a resource of type Model to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Model.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param modelName - Identifier for the modelName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(restApiId: string, modelName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/models/${ modelName }`);
  }

  /**
   * Adds a resource of type Models to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Model.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModels(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/models`);
  }

  /**
   * Adds a resource of type PrivateBasePathMapping to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_BasePathMapping.html
   *
   * @param domainName - Identifier for the domainName.
   * @param domainIdentifier - Identifier for the domainIdentifier.
   * @param basePath - Identifier for the basePath.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrivateBasePathMapping(domainName: string, domainIdentifier: string, basePath: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }+${ domainIdentifier }/basepathmappings/${ basePath }`);
  }

  /**
   * Adds a resource of type PrivateBasePathMappings to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_BasePathMapping.html
   *
   * @param domainName - Identifier for the domainName.
   * @param domainIdentifier - Identifier for the domainIdentifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrivateBasePathMappings(domainName: string, domainIdentifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/domainnames/${ domainName }+${ domainIdentifier }/basepathmappings`);
  }

  /**
   * Adds a resource of type PrivateDomainName to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_DomainName.html
   *
   * @param domainName - Identifier for the domainName.
   * @param domainIdentifier - Identifier for the domainIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestEndpointType()
   * - .ifResourceEndpointType()
   * - .ifAwsResourceTag()
   */
  public onPrivateDomainName(domainName: string, domainIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/domainnames/${ domainName }+${ domainIdentifier }`);
  }

  /**
   * Adds a resource of type RequestValidator to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_RequestValidator.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param requestValidatorId - Identifier for the requestValidatorId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRequestValidator(restApiId: string, requestValidatorId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/requestvalidators/${ requestValidatorId }`);
  }

  /**
   * Adds a resource of type RequestValidators to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_RequestValidator.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRequestValidators(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/requestvalidators`);
  }

  /**
   * Adds a resource of type Resource to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Resource.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResource(restApiId: string, resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources/${ resourceId }`);
  }

  /**
   * Adds a resource of type Resources to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Resource.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResources(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/resources`);
  }

  /**
   * Adds a resource of type RestApi to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_RestApi.html
   *
   * @param restApiId - Identifier for the restApiId.
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
  public onRestApi(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }`);
  }

  /**
   * Adds a resource of type RestApis to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_RestApi.html
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
  public onRestApis(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis`);
  }

  /**
   * Adds a resource of type Sdk to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param stageName - Identifier for the stageName.
   * @param sdkType - Identifier for the sdkType.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSdk(restApiId: string, stageName: string, sdkType: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/stages/${ stageName }/sdks/${ sdkType }`);
  }

  /**
   * Adds a resource of type Stage to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Stage.html
   *
   * @param restApiId - Identifier for the restApiId.
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
  public onStage(restApiId: string, stageName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/stages/${ stageName }`);
  }

  /**
   * Adds a resource of type Stages to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_Stage.html
   *
   * @param restApiId - Identifier for the restApiId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifRequestAccessLoggingDestination()
   * - .ifRequestAccessLoggingFormat()
   * - .ifAwsResourceTag()
   */
  public onStages(restApiId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/${ restApiId }/stages`);
  }

  /**
   * Adds a resource of type Template to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param modelName - Identifier for the modelName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(modelName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/restapis/models/${ modelName }/template`);
  }

  /**
   * Adds a resource of type UsagePlan to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_UsagePlan.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsagePlan(usagePlanId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/usageplans/${ usagePlanId }`);
  }

  /**
   * Adds a resource of type UsagePlans to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_UsagePlan.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsagePlans(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/usageplans`);
  }

  /**
   * Adds a resource of type UsagePlanKey to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_UsagePlanKey.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param id - Identifier for the id.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsagePlanKey(usagePlanId: string, id: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/usageplans/${ usagePlanId }/keys/${ id }`);
  }

  /**
   * Adds a resource of type UsagePlanKeys to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_UsagePlanKey.html
   *
   * @param usagePlanId - Identifier for the usagePlanId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsagePlanKeys(usagePlanId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/usageplans/${ usagePlanId }/keys`);
  }

  /**
   * Adds a resource of type VpcLink to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/api/API_VpcLink.html
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
   * https://docs.aws.amazon.com/apigateway/latest/api/API_VpcLink.html
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
   * Adds a resource of type Tags to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html
   *
   * @param urlEncodedResourceARN - Identifier for the urlEncodedResourceARN.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTags(urlEncodedResourceARN: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apigateway:${ region ?? this.defaultRegion }::/tags/${ urlEncodedResourceARN }`);
  }

  /**
   * Filters access by access association source. Available during the CreateDomainNameAccessAssociation operation
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainNameAccessAssociations
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAccessAssociationSource(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/AccessAssociationSource`, value, operator ?? 'StringLike');
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
   * Filters access by whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport
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
    return this.if(`Request/ApiName`, value, operator ?? 'StringLike');
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
    return this.if(`Request/AuthorizerType`, value, operator ?? 'StringLike');
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
    return this.if(`Request/AuthorizerUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Cognito user pool provider ARN. Available during CreateAuthorizer and UpdateAuthorizer
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   * - Authorizers
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequestCognitoUserPoolProviderArn(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/CognitoUserPoolProviderArn`, value, operator ?? 'ArnLike');
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
   * Filters access by domain name ARN. Available during the CreateDomainNameAccessAssociation operation
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainNameAccessAssociations
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequestDomainNameArn(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/DomainNameArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   * - PrivateDomainName
   * - RestApi
   * - RestApis
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
   * Applies to resource types:
   * - DomainName
   * - DomainNames
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
   * Applies to resource types:
   * - DomainName
   * - DomainNames
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMtlsTrustStoreVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`Request/MtlsTrustStoreVersion`, value, operator ?? 'StringLike');
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
    return this.if(`Request/RouteAuthorizationType`, value, operator ?? 'StringLike');
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
   * Filters access by whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport
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
    return this.if(`Resource/ApiName`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/AuthorizerType`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/AuthorizerUri`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Cognito user pool provider ARN. Available during CreateAuthorizer and UpdateAuthorizer
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Authorizer
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifResourceCognitoUserPoolProviderArn(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/CognitoUserPoolProviderArn`, value, operator ?? 'ArnLike');
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
   * - PrivateDomainName
   * - RestApi
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceEndpointType(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource/EndpointType`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/MtlsTrustStoreUri`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/MtlsTrustStoreVersion`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/RouteAuthorizationType`, value, operator ?? 'StringLike');
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
    return this.if(`Resource/SecurityPolicy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs in the request
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
   * Filters access by the tags attached to the resource
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html
   *
   * Applies to resource types:
   * - ApiKey
   * - ApiKeys
   * - Authorizer
   * - Authorizers
   * - BasePathMapping
   * - BasePathMappings
   * - ClientCertificate
   * - ClientCertificates
   * - Deployment
   * - Deployments
   * - DocumentationPart
   * - DocumentationParts
   * - DocumentationVersion
   * - DocumentationVersions
   * - DomainName
   * - DomainNames
   * - DomainNameAccessAssociations
   * - GatewayResponse
   * - GatewayResponses
   * - Integration
   * - IntegrationResponse
   * - Method
   * - MethodResponse
   * - Model
   * - Models
   * - PrivateBasePathMapping
   * - PrivateBasePathMappings
   * - PrivateDomainName
   * - RequestValidator
   * - RequestValidators
   * - Resource
   * - Resources
   * - RestApi
   * - RestApis
   * - Sdk
   * - Stage
   * - Stages
   * - Template
   * - UsagePlan
   * - UsagePlans
   * - UsagePlanKey
   * - UsagePlanKeys
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
   * Filters access by the tag keys in the request
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
