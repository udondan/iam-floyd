import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an ACM Private CA and its associated private key and configuration.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html
   */
  public toCreateCertificateAuthority() {
    this.to('acm-pca:CreateCertificateAuthority');
    return this;
  }

  /**
   * Creates an audit report for an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html
   */
  public toCreateCertificateAuthorityAuditReport() {
    this.to('acm-pca:CreateCertificateAuthorityAuditReport');
    return this;
  }

  /**
   * Creates a permission for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html
   */
  public toCreatePermission() {
    this.to('acm-pca:CreatePermission');
    return this;
  }

  /**
   * Deletes an ACM Private CA and its associated private key and configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html
   */
  public toDeleteCertificateAuthority() {
    this.to('acm-pca:DeleteCertificateAuthority');
    return this;
  }

  /**
   * Deletes a permission for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html
   */
  public toDeletePermission() {
    this.to('acm-pca:DeletePermission');
    return this;
  }

  /**
   * Deletes the policy for an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('acm-pca:DeletePolicy');
    return this;
  }

  /**
   * Returns a list of the configuration and status fields contained in the specified ACM Private CA.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html
   */
  public toDescribeCertificateAuthority() {
    this.to('acm-pca:DescribeCertificateAuthority');
    return this;
  }

  /**
   * Returns the status and information about an ACM Private CA audit report.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthorityAuditReport.html
   */
  public toDescribeCertificateAuthorityAuditReport() {
    this.to('acm-pca:DescribeCertificateAuthorityAuditReport');
    return this;
  }

  /**
   * Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html
   */
  public toGetCertificate() {
    this.to('acm-pca:GetCertificate');
    return this;
  }

  /**
   * Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html
   */
  public toGetCertificateAuthorityCertificate() {
    this.to('acm-pca:GetCertificateAuthorityCertificate');
    return this;
  }

  /**
   * Retrieves an ACM Private CA certificate signing request (CSR) for the certificate-authority specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCsr.html
   */
  public toGetCertificateAuthorityCsr() {
    this.to('acm-pca:GetCertificateAuthorityCsr');
    return this;
  }

  /**
   * Retrieves the policy on an ACM Private CA.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('acm-pca:GetPolicy');
    return this;
  }

  /**
   * Imports an SSL/TLS certificate into ACM Private CA for use as the CA certificate of an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html
   */
  public toImportCertificateAuthorityCertificate() {
    this.to('acm-pca:ImportCertificateAuthorityCertificate');
    return this;
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
    this.to('acm-pca:IssueCertificate');
    return this;
  }

  /**
   * Retrieves a list of the ACM Private CA certificate authority ARNs, and a summary of the status of each CA in the calling account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html
   */
  public toListCertificateAuthorities() {
    this.to('acm-pca:ListCertificateAuthorities');
    return this;
  }

  /**
   * Lists the permissions that have been applied to the ACM Private CA certificate authority.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html
   */
  public toListPermissions() {
    this.to('acm-pca:ListPermissions');
    return this;
  }

  /**
   * Lists the tags that have been applied to the ACM Private CA certificate authority.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.to('acm-pca:ListTags');
    return this;
  }

  /**
   * Puts a policy on an ACM Private CA.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_PutPolicy.html
   */
  public toPutPolicy() {
    this.to('acm-pca:PutPolicy');
    return this;
  }

  /**
   * Restores an ACM Private CA from the deleted state to the state it was in when deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html
   */
  public toRestoreCertificateAuthority() {
    this.to('acm-pca:RestoreCertificateAuthority');
    return this;
  }

  /**
   * Revokes a certificate issued by an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html
   */
  public toRevokeCertificate() {
    this.to('acm-pca:RevokeCertificate');
    return this;
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
    this.to('acm-pca:TagCertificateAuthority');
    return this;
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
    this.to('acm-pca:UntagCertificateAuthority');
    return this;
  }

  /**
   * Updates the configuration of an ACM Private CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html
   */
  public toUpdateCertificateAuthority() {
    this.to('acm-pca:UpdateCertificateAuthority');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "CreateCertificateAuthority",
      "TagCertificateAuthority",
      "UntagCertificateAuthority"
    ],
    "Write": [
      "CreateCertificateAuthorityAuditReport",
      "DeleteCertificateAuthority",
      "ImportCertificateAuthorityCertificate",
      "IssueCertificate",
      "RestoreCertificateAuthority",
      "RevokeCertificate",
      "UpdateCertificateAuthority"
    ],
    "Permissions management": [
      "CreatePermission",
      "DeletePermission",
      "DeletePolicy",
      "PutPolicy"
    ],
    "Read": [
      "DescribeCertificateAuthority",
      "DescribeCertificateAuthorityAuditReport",
      "GetCertificate",
      "GetCertificateAuthorityCertificate",
      "GetCertificateAuthorityCsr",
      "GetPolicy",
      "ListPermissions",
      "ListTags"
    ],
    "List": [
      "ListCertificateAuthorities"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificateAuthority(certificateAuthorityId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:acm-pca:${Region}:${Account}:certificate-authority/${CertificateAuthorityId}';
    arn = arn.replace('${CertificateAuthorityId}', certificateAuthorityId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`acm-pca:TemplateArn`, value, operator || 'StringLike');
  }
}
