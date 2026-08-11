import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [acm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Acm extends PolicyStatement {
  public servicePrefix = 'acm';

  /**
   * Statement provider for service [acm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more tags to a certificate
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCertificateKeyPairOrigin()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html
   */
  public toAddTagsToCertificate() {
    return this.to('AddTagsToCertificate');
  }

  /**
   * Grants permission to create an ACME domain validation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - route53:ChangeResourceRecordSets
   * - route53:GetHostedZone
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_CreateAcmeDomainValidation.html
   */
  public toCreateAcmeDomainValidation() {
    return this.to('CreateAcmeDomainValidation');
  }

  /**
   * Grants permission to create an ACME endpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_CreateAcmeEndpoint.html
   */
  public toCreateAcmeEndpoint() {
    return this.to('CreateAcmeEndpoint');
  }

  /**
   * Grants permission to create an ACME external account binding
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_CreateAcmeExternalAccountBinding.html
   */
  public toCreateAcmeExternalAccountBinding() {
    return this.to('CreateAcmeExternalAccountBinding');
  }

  /**
   * Grants permission to delete an ACME domain validation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - route53:ChangeResourceRecordSets
   * - route53:GetChange
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteAcmeDomainValidation.html
   */
  public toDeleteAcmeDomainValidation() {
    return this.to('DeleteAcmeDomainValidation');
  }

  /**
   * Grants permission to delete an ACME endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteAcmeEndpoint.html
   */
  public toDeleteAcmeEndpoint() {
    return this.to('DeleteAcmeEndpoint');
  }

  /**
   * Grants permission to delete an ACME external account binding
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteAcmeExternalAccountBinding.html
   */
  public toDeleteAcmeExternalAccountBinding() {
    return this.to('DeleteAcmeExternalAccountBinding');
  }

  /**
   * Grants permission to delete a certificate and its associated private key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCertificateKeyPairOrigin()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Grants permission to retrieve details of an ACME account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeAcmeAccount.html
   */
  public toDescribeAcmeAccount() {
    return this.to('DescribeAcmeAccount');
  }

  /**
   * Grants permission to retrieve details of an ACME domain validation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeAcmeDomainValidation.html
   */
  public toDescribeAcmeDomainValidation() {
    return this.to('DescribeAcmeDomainValidation');
  }

  /**
   * Grants permission to retrieve details of an ACME endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeAcmeEndpoint.html
   */
  public toDescribeAcmeEndpoint() {
    return this.to('DescribeAcmeEndpoint');
  }

  /**
   * Grants permission to retrieve details of an ACME external account binding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeAcmeExternalAccountBinding.html
   */
  public toDescribeAcmeExternalAccountBinding() {
    return this.to('DescribeAcmeExternalAccountBinding');
  }

  /**
   * Grants permission to retreive a certificates and its metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Grants permission to export an exportable certificate for use anywhere
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDomainNames()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html
   */
  public toExportCertificate() {
    return this.to('ExportCertificate');
  }

  /**
   * Grants permission to retrieve account level configuration from AWS Certificate Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAccountConfiguration.html
   */
  public toGetAccountConfiguration() {
    return this.to('GetAccountConfiguration');
  }

  /**
   * Grants permission to retrieve credentials for an ACME external account binding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAcmeExternalAccountBindingCredentials.html
   */
  public toGetAcmeExternalAccountBindingCredentials() {
    return this.to('GetAcmeExternalAccountBindingCredentials');
  }

  /**
   * Grants permission to retrieve a certificate and certificate chain for a certificate ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html
   */
  public toGetCertificate() {
    return this.to('GetCertificate');
  }

  /**
   * Grants permission to import a 3rd party certificate into AWS Certificate Manager (ACM)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html
   */
  public toImportCertificate() {
    return this.to('ImportCertificate');
  }

  /**
   * Grants permission to list ACME accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListAcmeAccounts.html
   */
  public toListAcmeAccounts() {
    return this.to('ListAcmeAccounts');
  }

  /**
   * Grants permission to list ACME domain validations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListAcmeDomainValidations.html
   */
  public toListAcmeDomainValidations() {
    return this.to('ListAcmeDomainValidations');
  }

  /**
   * Grants permission to list ACME endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListAcmeEndpoints.html
   */
  public toListAcmeEndpoints() {
    return this.to('ListAcmeEndpoints');
  }

  /**
   * Grants permission to list ACME external account bindings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListAcmeExternalAccountBindings.html
   */
  public toListAcmeExternalAccountBindings() {
    return this.to('ListAcmeExternalAccountBindings');
  }

  /**
   * Grants permission to retrieve a list of certificates for specific certificate parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * Grants permission to lists the tags that have been associated with a certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html
   */
  public toListTagsForCertificate() {
    return this.to('ListTagsForCertificate');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update account level configuration in AWS Certificate Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_PutAccountConfiguration.html
   */
  public toPutAccountConfiguration() {
    return this.to('PutAccountConfiguration');
  }

  /**
   * Grants permission to remove one or more tags from a certificate
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html
   */
  public toRemoveTagsFromCertificate() {
    return this.to('RemoveTagsFromCertificate');
  }

  /**
   * Grants permission to renew an eligible private certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html
   */
  public toRenewCertificate() {
    return this.to('RenewCertificate');
  }

  /**
   * Grants permission to requests a public or private certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifDomainNames()
   * - .ifCertificateTransparencyLogging()
   * - .ifValidationMethod()
   * - .ifKeyAlgorithm()
   * - .ifCertificateAuthority()
   * - .ifExport()
   * - .ifCertificateKeyPairOrigin()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html
   */
  public toRequestCertificate() {
    return this.to('RequestCertificate');
  }

  /**
   * Grants permission to resend an email to request domain ownership validation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html
   */
  public toResendValidationEmail() {
    return this.to('ResendValidationEmail');
  }

  /**
   * Grants permission to revoke an ACME account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RevokeAcmeAccount.html
   */
  public toRevokeAcmeAccount() {
    return this.to('RevokeAcmeAccount');
  }

  /**
   * Grants permission to revoke an ACME external account binding
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RevokeAcmeExternalAccountBinding.html
   */
  public toRevokeAcmeExternalAccountBinding() {
    return this.to('RevokeAcmeExternalAccountBinding');
  }

  /**
   * Grants permission to revoke an exportable certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDomainNames()
   * - .ifCertificateKeyPairOrigin()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RevokeCertificate.html
   */
  public toRevokeCertificate() {
    return this.to('RevokeCertificate');
  }

  /**
   * Grants permission to retrieve a list of certificates matching search criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_SearchCertificates.html
   */
  public toSearchCertificates() {
    return this.to('SearchCertificates');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an ACME domain validation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateAcmeDomainValidation.html
   */
  public toUpdateAcmeDomainValidation() {
    return this.to('UpdateAcmeDomainValidation');
  }

  /**
   * Grants permission to update an ACME endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateAcmeEndpoint.html
   */
  public toUpdateAcmeEndpoint() {
    return this.to('UpdateAcmeEndpoint');
  }

  /**
   * Grants permission to update a certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCertificateKeyPairOrigin()
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificate.html
   */
  public toUpdateCertificate() {
    return this.to('UpdateCertificate');
  }

  /**
   * Grants permission to update a certificate configuration. Use this to specify whether to opt in to or out of certificate transparency logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html
   */
  public toUpdateCertificateOptions() {
    return this.to('UpdateCertificateOptions');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTagsToCertificate',
      'RemoveTagsFromCertificate',
      'TagResource',
      'UntagResource'
    ],
    Write: [
      'CreateAcmeDomainValidation',
      'CreateAcmeEndpoint',
      'CreateAcmeExternalAccountBinding',
      'DeleteAcmeDomainValidation',
      'DeleteAcmeEndpoint',
      'DeleteAcmeExternalAccountBinding',
      'DeleteCertificate',
      'ImportCertificate',
      'PutAccountConfiguration',
      'RenewCertificate',
      'RequestCertificate',
      'ResendValidationEmail',
      'RevokeAcmeAccount',
      'RevokeAcmeExternalAccountBinding',
      'RevokeCertificate',
      'UpdateAcmeDomainValidation',
      'UpdateAcmeEndpoint',
      'UpdateCertificate',
      'UpdateCertificateOptions'
    ],
    Read: [
      'DescribeAcmeAccount',
      'DescribeAcmeDomainValidation',
      'DescribeAcmeEndpoint',
      'DescribeAcmeExternalAccountBinding',
      'DescribeCertificate',
      'ExportCertificate',
      'GetAccountConfiguration',
      'GetAcmeExternalAccountBindingCredentials',
      'GetCertificate',
      'ListTagsForCertificate',
      'ListTagsForResource'
    ],
    List: [
      'ListAcmeAccounts',
      'ListAcmeDomainValidations',
      'ListAcmeEndpoints',
      'ListAcmeExternalAccountBindings',
      'ListCertificates',
      'SearchCertificates'
    ]
  };

  /**
   * Adds a resource of type certificate to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-acm-cert
   *
   * @param certificateId - Identifier for the certificateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificate(certificateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:acm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:certificate/${ certificateId }`);
  }

  /**
   * Adds a resource of type acme-endpoint to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/acm-acme-endpoints.html
   *
   * @param acmeEndpointId - Identifier for the acmeEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAcmeEndpoint(acmeEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:acm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:acme-endpoint/${ acmeEndpointId }`);
  }

  /**
   * Adds a resource of type acme-domain-validation to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/acm-acme-domain-validation.html
   *
   * @param acmeEndpointId - Identifier for the acmeEndpointId.
   * @param acmeDomainValidationId - Identifier for the acmeDomainValidationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAcmeDomainValidation(acmeEndpointId: string, acmeDomainValidationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:acm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:acme-endpoint/${ acmeEndpointId }/acme-domain-validation/${ acmeDomainValidationId }`);
  }

  /**
   * Adds a resource of type acme-external-account-binding to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/acm-acme-eab.html
   *
   * @param acmeEndpointId - Identifier for the acmeEndpointId.
   * @param externalAccountBindingId - Identifier for the externalAccountBindingId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAcmeExternalAccountBinding(acmeEndpointId: string, externalAccountBindingId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:acm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:acme-endpoint/${ acmeEndpointId }/acme-external-account-binding/${ externalAccountBindingId }`);
  }

  /**
   * Filters access by certificateAuthority in the request. Can be used to restrict which Certificate Authorites certificates can be issued from
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertificateAuthority(value: string | string[], operator?: Operator | string) {
    return this.if(`CertificateAuthority`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by certificateKeyPairOrigin in the request. Can be used to restrict which certificate provisioning paths are permitted
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toAddTagsToCertificate()
   * - .toDeleteCertificate()
   * - .toRequestCertificate()
   * - .toRevokeCertificate()
   * - .toUpdateCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertificateKeyPairOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`CertificateKeyPairOrigin`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by certificateTransparencyLogging option in the request. Default 'ENABLED' if no key is present in the request
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertificateTransparencyLogging(value: string | string[], operator?: Operator | string) {
    return this.if(`CertificateTransparencyLogging`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by domainNames in the request. This key can be used to restrict which domains can be in certificate requests
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toExportCertificate()
   * - .toRequestCertificate()
   * - .toRevokeCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDomainNames(value: string | string[], operator?: Operator | string) {
    return this.if(`DomainNames`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the export option in the request. Can be used to restrict creation of certificates that can be exported
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExport(value: string | string[], operator?: Operator | string) {
    return this.if(`Export`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by keyAlgorithm in the request
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyAlgorithm`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by validationMethod in the request. Default 'EMAIL' if no key is present in the request
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifValidationMethod(value: string | string[], operator?: Operator | string) {
    return this.if(`ValidationMethod`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTagsToCertificate()
   * - .toCreateAcmeDomainValidation()
   * - .toCreateAcmeEndpoint()
   * - .toCreateAcmeExternalAccountBinding()
   * - .toImportCertificate()
   * - .toRemoveTagsFromCertificate()
   * - .toRequestCertificate()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAcmeDomainValidation()
   * - .toCreateAcmeExternalAccountBinding()
   * - .toDeleteAcmeDomainValidation()
   * - .toDeleteAcmeEndpoint()
   * - .toDeleteAcmeExternalAccountBinding()
   * - .toDescribeAcmeAccount()
   * - .toDescribeAcmeDomainValidation()
   * - .toDescribeAcmeEndpoint()
   * - .toDescribeAcmeExternalAccountBinding()
   * - .toGetAcmeExternalAccountBindingCredentials()
   * - .toListAcmeAccounts()
   * - .toListAcmeDomainValidations()
   * - .toListAcmeExternalAccountBindings()
   * - .toListTagsForResource()
   * - .toRevokeAcmeAccount()
   * - .toRevokeAcmeExternalAccountBinding()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAcmeDomainValidation()
   * - .toUpdateAcmeEndpoint()
   *
   * Applies to resource types:
   * - certificate
   * - acme-endpoint
   * - acme-domain-validation
   * - acme-external-account-binding
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTagsToCertificate()
   * - .toCreateAcmeDomainValidation()
   * - .toCreateAcmeEndpoint()
   * - .toCreateAcmeExternalAccountBinding()
   * - .toImportCertificate()
   * - .toRemoveTagsFromCertificate()
   * - .toRequestCertificate()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
