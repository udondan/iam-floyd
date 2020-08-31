import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [acm-pca](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanagerprivatecertificateauthority.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AcmPca extends PolicyStatement {
  public servicePrefix = 'acm-pca';
  protected actionList: Actions = {
    "CreateCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html",
      "description": "Creates an ACM Private CA and its associated private key and configuration.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCertificateAuthorityAuditReport": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html",
      "description": "Creates an audit report for an ACM Private CA.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "CreatePermission": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html",
      "description": "Creates a permission for an ACM Private CA.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "DeleteCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html",
      "description": "Deletes an ACM Private CA and its associated private key and configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "DeletePermission": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html",
      "description": "Deletes a permission for an ACM Private CA.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "DeletePolicy": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePolicy.html",
      "description": "Deletes the policy for an ACM Private CA.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "DescribeCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html",
      "description": "Returns a list of the configuration and status fields contained in the specified ACM Private CA.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "DescribeCertificateAuthorityAuditReport": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthorityAuditReport.html",
      "description": "Returns the status and information about an ACM Private CA audit report.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "GetCertificate": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html",
      "description": "Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "GetCertificateAuthorityCertificate": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html",
      "description": "Retrieves an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "GetCertificateAuthorityCsr": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCsr.html",
      "description": "Retrieves an ACM Private CA certificate signing request (CSR) for the certificate-authority specified by an ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetPolicy.html",
      "description": "Retrieves the policy on an ACM Private CA.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "ImportCertificateAuthorityCertificate": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html",
      "description": "Imports an SSL/TLS certificate into ACM Private CA for use as the CA certificate of an ACM Private CA.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "IssueCertificate": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html",
      "description": "Issues an ACM Private CA certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      },
      "conditions": [
        "acm-pca:TemplateArn"
      ]
    },
    "ListCertificateAuthorities": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html",
      "description": "Retrieves a list of the ACM Private CA certificate authority ARNs, and a summary of the status of each CA in the calling account.",
      "accessLevel": "List"
    },
    "ListPermissions": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html",
      "description": "Lists the permissions that have been applied to the ACM Private CA certificate authority.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html",
      "description": "Lists the tags that have been applied to the ACM Private CA certificate authority.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "PutPolicy": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_PutPolicy.html",
      "description": "Puts a policy on an ACM Private CA.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "RestoreCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html",
      "description": "Restores an ACM Private CA from the deleted state to the state it was in when deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "RevokeCertificate": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html",
      "description": "Revokes a certificate issued by an ACM Private CA.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    },
    "TagCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html",
      "description": "Adds one or more tags to an ACM Private CA.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html",
      "description": "Remove one or more tags from an ACM Private CA.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html",
      "description": "Updates the configuration of an ACM Private CA.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate-authority": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "certificate-authority": {
      "name": "certificate-authority",
      "url": "https://docs.aws.amazon.com/acm-pca/latest/userguide/authen-overview.html#acm-pca-resources-operations",
      "arn": "arn:${Partition}:acm-pca:${Region}:${Account}:certificate-authority/${CertificateAuthorityId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [acm-pca](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanagerprivatecertificateauthority.html).
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
    this.add('acm-pca:CreateCertificateAuthority');
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
    this.add('acm-pca:CreateCertificateAuthorityAuditReport');
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
    this.add('acm-pca:CreatePermission');
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
    this.add('acm-pca:DeleteCertificateAuthority');
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
    this.add('acm-pca:DeletePermission');
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
    this.add('acm-pca:DeletePolicy');
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
    this.add('acm-pca:DescribeCertificateAuthority');
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
    this.add('acm-pca:DescribeCertificateAuthorityAuditReport');
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
    this.add('acm-pca:GetCertificate');
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
    this.add('acm-pca:GetCertificateAuthorityCertificate');
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
    this.add('acm-pca:GetCertificateAuthorityCsr');
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
    this.add('acm-pca:GetPolicy');
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
    this.add('acm-pca:ImportCertificateAuthorityCertificate');
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
    this.add('acm-pca:IssueCertificate');
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
    this.add('acm-pca:ListCertificateAuthorities');
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
    this.add('acm-pca:ListPermissions');
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
    this.add('acm-pca:ListTags');
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
    this.add('acm-pca:PutPolicy');
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
    this.add('acm-pca:RestoreCertificateAuthority');
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
    this.add('acm-pca:RevokeCertificate');
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
    this.add('acm-pca:TagCertificateAuthority');
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
    this.add('acm-pca:UntagCertificateAuthority');
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
    this.add('acm-pca:UpdateCertificateAuthority');
    return this;
  }

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
  public ifTemplateArn(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`acm-pca:TemplateArn`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the allowed set of values for each of the tags.
   *
   * Applies to actions:
   * - .toCreateCertificateAuthority()
   * - .toTagCertificateAuthority()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * Applies to resource types:
   * - certificate-authority
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the presence of mandatory tags in the request.
   *
   * Applies to actions:
   * - .toCreateCertificateAuthority()
   * - .toTagCertificateAuthority()
   * - .toUntagCertificateAuthority()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
