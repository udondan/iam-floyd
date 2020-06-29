import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service acm
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html
 */
export class Acm extends PolicyStatement {
  public servicePrefix = 'acm';
  public actions: Actions = {
    "AddTagsToCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html",
      "description": "Adds one or more tags to a certificate.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html",
      "description": "Deletes a certificate and its associated private key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "DescribeCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html",
      "description": "Returns a list of the fields contained in the specified certificate.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "ExportCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html",
      "description": "Exports a private certificate issued by a private certificate authority (CA) for use anywhere.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "GetCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html",
      "description": "Retrieves a certificate and certificate chain for the certificate specified by an ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "ImportCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html",
      "description": "Imports a 3rd party SSL/TLS certificate into AWS Certificate Manager (ACM).",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ListCertificates": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html",
      "description": "Retrieves a list of the certificate ARNs and the domain name for each ARN.",
      "accessLevel": "List"
    },
    "ListTagsForCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html",
      "description": "Lists the tags that have been applied to the certificate.",
      "accessLevel": "Read"
    },
    "RemoveTagsFromCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html",
      "description": "Remove one or more tags from a certificate. A tag consists of a key-value pair",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RenewCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html",
      "description": "Renews an eligable private certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "RequestCertificate": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html",
      "description": "Requests a public or private certificate.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ResendValidationEmail": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html",
      "description": "Resends an email to request domain ownership validation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    },
    "UpdateCertificateOptions": {
      "url": "https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html",
      "description": "Updates a certificate. Use to specify whether to opt in to or out of certificate transparency logging.",
      "accessLevel": "Write",
      "resourceTypes": {
        "certificate": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "certificate": {
      "name": "certificate",
      "url": "https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html#acm-resources-operations",
      "arn": "arn:${Partition}:acm:${Region}:${Account}:certificate/${CertificateId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service acm
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Adds one or more tags to a certificate.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html
   */
  public addTagsToCertificate() {
    this.add('acm:AddTagsToCertificate');
    return this;
  }

  /**
   * Deletes a certificate and its associated private key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html
   */
  public deleteCertificate() {
    this.add('acm:DeleteCertificate');
    return this;
  }

  /**
   * Returns a list of the fields contained in the specified certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html
   */
  public describeCertificate() {
    this.add('acm:DescribeCertificate');
    return this;
  }

  /**
   * Exports a private certificate issued by a private certificate authority (CA) for use anywhere.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html
   */
  public exportCertificate() {
    this.add('acm:ExportCertificate');
    return this;
  }

  /**
   * Retrieves a certificate and certificate chain for the certificate specified by an ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html
   */
  public getCertificate() {
    this.add('acm:GetCertificate');
    return this;
  }

  /**
   * Imports a 3rd party SSL/TLS certificate into AWS Certificate Manager (ACM).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html
   */
  public importCertificate() {
    this.add('acm:ImportCertificate');
    return this;
  }

  /**
   * Retrieves a list of the certificate ARNs and the domain name for each ARN.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html
   */
  public listCertificates() {
    this.add('acm:ListCertificates');
    return this;
  }

  /**
   * Lists the tags that have been applied to the certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html
   */
  public listTagsForCertificate() {
    this.add('acm:ListTagsForCertificate');
    return this;
  }

  /**
   * Remove one or more tags from a certificate. A tag consists of a key-value pair
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html
   */
  public removeTagsFromCertificate() {
    this.add('acm:RemoveTagsFromCertificate');
    return this;
  }

  /**
   * Renews an eligable private certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html
   */
  public renewCertificate() {
    this.add('acm:RenewCertificate');
    return this;
  }

  /**
   * Requests a public or private certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html
   */
  public requestCertificate() {
    this.add('acm:RequestCertificate');
    return this;
  }

  /**
   * Resends an email to request domain ownership validation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html
   */
  public resendValidationEmail() {
    this.add('acm:ResendValidationEmail');
    return this;
  }

  /**
   * Updates a certificate. Use to specify whether to opt in to or out of certificate transparency logging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html
   */
  public updateCertificateOptions() {
    this.add('acm:UpdateCertificateOptions');
    return this;
  }

  /**
   * Adds a resource of type certificate to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html#acm-resources-operations
   *
   * @param certificateId - Identifier for the certificateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onCertificate(certificateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:acm:${Region}:${Account}:certificate/${CertificateId}';
    arn = arn.replace('${CertificateId}', certificateId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
