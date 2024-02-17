import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html
   */
  public toAddTagsToCertificate() {
    return this.to('AddTagsToCertificate');
  }

  /**
   * Grants permission to delete a certificate and its associated private key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
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
   * Grants permission to export a private certificate issued by a private certificate authority (CA) for use anywhere
   *
   * Access Level: Read
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
   * Grants permission to retrieve a list of the certificate ARNs and the domain name for each ARN
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
      'RemoveTagsFromCertificate'
    ],
    Write: [
      'DeleteCertificate',
      'ImportCertificate',
      'PutAccountConfiguration',
      'RenewCertificate',
      'RequestCertificate',
      'ResendValidationEmail',
      'UpdateCertificateOptions'
    ],
    Read: [
      'DescribeCertificate',
      'ExportCertificate',
      'GetAccountConfiguration',
      'GetCertificate',
      'ListTagsForCertificate'
    ],
    List: [
      'ListCertificates'
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
    return this.on(`arn:${ partition || this.defaultPartition }:acm:${ region || this.defaultRegion }:${ account || this.defaultAccount }:certificate/${ certificateId }`);
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
    return this.if(`CertificateAuthority`, value, operator || 'StringLike');
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
    return this.if(`CertificateTransparencyLogging`, value, operator || 'StringLike');
  }

  /**
   * Filters access by domainNames in the request. This key can be used to restrict which domains can be in certificate requests
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/security-iam.html
   *
   * Applies to actions:
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDomainNames(value: string | string[], operator?: Operator | string) {
    return this.if(`DomainNames`, value, operator || 'StringLike');
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
    return this.if(`KeyAlgorithm`, value, operator || 'StringLike');
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
    return this.if(`ValidationMethod`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTagsToCertificate()
   * - .toImportCertificate()
   * - .toRemoveTagsFromCertificate()
   * - .toRequestCertificate()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - certificate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTagsToCertificate()
   * - .toImportCertificate()
   * - .toRemoveTagsFromCertificate()
   * - .toRequestCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
