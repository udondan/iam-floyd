import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [acm-pca](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanagerprivatecertificateauthority.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AcmPca extends PolicyStatement {
  public servicePrefix = 'acm-pca';

  /**
   * Statement provider for service [acm-pca](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanagerprivatecertificateauthority.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Creates an ACM Private CA and its associated private key and configuration.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html
   */
  public toCreateCertificateAuthority() {
    return this.to('CreateCertificateAuthority');
  }

  /**
   * Creates an audit report for an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html
   */
  public toCreateCertificateAuthorityAuditReport() {
    return this.to('CreateCertificateAuthorityAuditReport');
  }

  /**
   * Creates a permission for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html
   */
  public toCreatePermission() {
    return this.to('CreatePermission');
  }

  /**
   * Deletes an ACM Private CA and its associated private key and configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html
   */
  public toDeleteCertificateAuthority() {
    return this.to('DeleteCertificateAuthority');
  }

  /**
   * Deletes a permission for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html
   */
  public toDeletePermission() {
    return this.to('DeletePermission');
  }

  /**
   * Deletes the policy for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Returns a list of the configuration and status fields contained in the specified ACM Private CA.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html
   */
  public toDescribeCertificateAuthority() {
    return this.to('DescribeCertificateAuthority');
  }

  /**
   * Returns the status and information about an ACM Private CA audit report.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthorityAuditReport.html
   */
  public toDescribeCertificateAuthorityAuditReport() {
    return this.to('DescribeCertificateAuthorityAuditReport');
  }

  /**
   * Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html
   */
  public toGetCertificate() {
    return this.to('GetCertificate');
  }

  /**
   * Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html
   */
  public toGetCertificateAuthorityCertificate() {
    return this.to('GetCertificateAuthorityCertificate');
  }

  /**
   * Retrieves an ACM Private CA certificate signing request (CSR) for the certificate-authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCsr.html
   */
  public toGetCertificateAuthorityCsr() {
    return this.to('GetCertificateAuthorityCsr');
  }

  /**
   * Retrieves the policy on an ACM Private CA.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Imports an SSL/TLS certificate into ACM Private CA for use as the CA certificate of an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html
   */
  public toImportCertificateAuthorityCertificate() {
    return this.to('ImportCertificateAuthorityCertificate');
  }

  /**
   * Issues an ACM Private CA certificate.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTemplateArn()
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html
   */
  public toIssueCertificate() {
    return this.to('IssueCertificate');
  }

  /**
   * Retrieves a list of the ACM Private CA certificate authority ARNs, and a summary of the status of each CA in the calling account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html
   */
  public toListCertificateAuthorities() {
    return this.to('ListCertificateAuthorities');
  }

  /**
   * Lists the permissions that have been applied to the ACM Private CA certificate authority.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Lists the tags that have been applied to the ACM Private CA certificate authority.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Puts a policy on an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_PutPolicy.html
   */
  public toPutPolicy() {
    return this.to('PutPolicy');
  }

  /**
   * Restores an ACM Private CA from the deleted state to the state it was in when deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html
   */
  public toRestoreCertificateAuthority() {
    return this.to('RestoreCertificateAuthority');
  }

  /**
   * Revokes a certificate issued by an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html
   */
  public toRevokeCertificate() {
    return this.to('RevokeCertificate');
  }

  /**
   * Adds one or more tags to an ACM Private CA.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html
   */
  public toTagCertificateAuthority() {
    return this.to('TagCertificateAuthority');
  }

  /**
   * Remove one or more tags from an ACM Private CA.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html
   */
  public toUntagCertificateAuthority() {
    return this.to('UntagCertificateAuthority');
  }

  /**
   * Updates the configuration of an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html
   */
  public toUpdateCertificateAuthority() {
    return this.to('UpdateCertificateAuthority');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCertificateAuthority',
      'CreateCertificateAuthorityAuditReport',
      'DeleteCertificateAuthority',
      'ImportCertificateAuthorityCertificate',
      'IssueCertificate',
      'RestoreCertificateAuthority',
      'RevokeCertificate',
      'UpdateCertificateAuthority'
    ],
    'Permissions management': [
      'CreatePermission',
      'DeletePermission',
      'DeletePolicy',
      'PutPolicy'
    ],
    Read: [
      'DescribeCertificateAuthority',
      'DescribeCertificateAuthorityAuditReport',
      'GetCertificate',
      'GetCertificateAuthorityCertificate',
      'GetCertificateAuthorityCsr',
      'GetPolicy',
      'ListPermissions',
      'ListTags'
    ],
    List: [
      'ListCertificateAuthorities'
    ],
    Tagging: [
      'TagCertificateAuthority',
      'UntagCertificateAuthority'
    ]
  };

  /**
   * Adds a resource of type certificate-authority to the statement
   *
   * https://docs.aws.amazon.com/acm-pca/latest/userguide/authen-overview.html#acm-pca-resources-operations
   *
   * @param certificateAuthorityId - Identifier for the certificateAuthorityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificateAuthority(certificateAuthorityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AcmPca.defaultPartition }:acm-pca:${ region || '*' }:${ account || '*' }:certificate-authority/${ certificateAuthorityId }`);
  }

  /**
   * Filters issue certificate requests based on the presence of TemplateArn in the request.
   *
   * Applies to actions:
   * - .toIssueCertificate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTemplateArn(value: string | string[], operator?: Operator | string) {
    return this.if(`TemplateArn`, value, operator || 'StringLike');
  }
}
