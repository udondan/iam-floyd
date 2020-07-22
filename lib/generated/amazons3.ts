import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [s3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3 extends PolicyStatement {
  public servicePrefix = 's3';
  protected actionList: Actions = {
    "AbortMultipartUpload": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html",
      "description": "Grants permission to abort a multipart upload",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointArn",
        "s3:DataAccessPointAccount",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "BypassGovernanceRetention": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-managing.html#object-lock-managing-bypass",
      "description": "Grants permission to allow circumvention of governance-mode object retention settings",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:RequestObjectTag/<key>",
        "s3:RequestObjectTagKeys",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-copy-source",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp",
        "s3:x-amz-metadata-directive",
        "s3:x-amz-server-side-encryption",
        "s3:x-amz-server-side-encryption-aws-kms-key-id",
        "s3:x-amz-storage-class",
        "s3:x-amz-website-redirect-location",
        "s3:object-lock-mode",
        "s3:object-lock-retain-until-date",
        "s3:object-lock-remaining-retention-days",
        "s3:object-lock-legal-hold"
      ]
    },
    "CreateAccessPoint": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html",
      "description": "Grants permission to create a new access point",
      "accessLevel": "Write",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:locationconstraint",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256"
      ]
    },
    "CreateBucket": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html",
      "description": "Grants permission to create a new bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:locationconstraint",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp"
      ]
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html",
      "description": "Grants permission to create a new Amazon S3 Batch Operations job",
      "accessLevel": "Write",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:RequestJobPriority",
        "s3:RequestJobOperation",
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteAccessPoint": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html",
      "description": "Grants permission to delete the access point named in the URI",
      "accessLevel": "Write",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointArn",
        "s3:DataAccessPointAccount",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteAccessPointPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html",
      "description": "Grants permission to delete the policy on a specified access point",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointArn",
        "s3:DataAccessPointAccount",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteBucket": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html",
      "description": "Grants permission to delete the bucket named in the URI",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteBucketPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html",
      "description": "Grants permission to delete the policy on a specified bucket",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteBucketWebsite": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html",
      "description": "Grants permission to remove the website configuration for a bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteJobTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html",
      "description": "Grants permission to remove tags from an existing Amazon S3 Batch Operations job",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:ExistingJobPriority",
        "s3:ExistingJobOperation"
      ]
    },
    "DeleteObject": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html",
      "description": "Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteObjectTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html",
      "description": "Grants permission to use the tagging subresource to remove the entire tag set from the specified object",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteObjectVersion": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html",
      "description": "Grants permission to remove a specific version of an object",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "DeleteObjectVersionTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html",
      "description": "Grants permission to remove the entire tag set for a specific version of the object",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "DescribeJob": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html",
      "description": "Grants permission to retrieve the configuration parameters and status for a batch operations job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAccelerateConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html",
      "description": "Grants permission to uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAccessPoint": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html",
      "description": "Grants permission to return configuration information about the specified access point",
      "accessLevel": "Read",
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAccessPointPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html",
      "description": "Grants permission to returns the access point policy associated with the specified access point",
      "accessLevel": "Read",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAccessPointPolicyStatus": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html",
      "description": "Grants permission to return the policy status for a specific access point policy",
      "accessLevel": "Read",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAccountPublicAccessBlock": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html",
      "description": "Grants permission to retrieve the PublicAccessBlock configuration for an AWS account",
      "accessLevel": "Read",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetAnalyticsConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html",
      "description": "Grants permission to get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html",
      "description": "Grants permission to use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketCORS": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html",
      "description": "Grants permission to return the CORS configuration information set for an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketLocation": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html",
      "description": "Grants permission to return the Region that an Amazon S3 bucket resides in",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      }
    },
    "GetBucketLogging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html",
      "description": "Grants permission to return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketNotification": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html",
      "description": "Grants permission to get the notification configuration of an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketObjectLockConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html",
      "description": "Grants permission to get the Object Lock configuration of an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion"
      ]
    },
    "GetBucketPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html",
      "description": "Grants permission to return the policy of the specified bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketPolicyStatus": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html",
      "description": "Grants permission to retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketPublicAccessBlock": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html",
      "description": "Grants permission to retrieve the PublicAccessBlock configuration for an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketRequestPayment": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html",
      "description": "Grants permission to return the request payment configuration for an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html",
      "description": "Grants permission to return the tag set associated with an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketVersioning": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html",
      "description": "Grants permission to return the versioning state of an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetBucketWebsite": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html",
      "description": "Grants permission to return the website configuration for an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetEncryptionConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html",
      "description": "Grants permission to return the default encryption configuration an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetInventoryConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html",
      "description": "Grants permission to return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetJobTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html",
      "description": "Grants permission to return the tag set of an existing Amazon S3 Batch Operations job",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetLifecycleConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html",
      "description": "Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetMetricsConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html",
      "description": "Grants permission to get a metrics configuration from an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObject": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html",
      "description": "Grants permission to retrieve objects from Amazon S3",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html",
      "description": "Grants permission to return the access control list (ACL) of an object",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectLegalHold": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html",
      "description": "Grants permission to get an object's current Legal Hold status",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectRetention": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html",
      "description": "Grants permission to retrieve the retention settings for an object",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html",
      "description": "Grants permission to return the tag set of an object",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectTorrent": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html",
      "description": "Grants permission to return torrent files from an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectVersion": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html",
      "description": "Grants permission to retrieve a specific version of an object",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectVersionAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html",
      "description": "Grants permission to return the access control list (ACL) of a specific object version",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectVersionForReplication": {
      "url": "",
      "description": "Grants permission to replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectVersionTagging": {
      "url": "",
      "description": "Grants permission to return the tag set for a specific version of the object",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetObjectVersionTorrent": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html",
      "description": "Grants permission to get Torrent files about a different version using the versionId subresource",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "GetReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html",
      "description": "Grants permission to get the replication configuration information set on an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListAccessPoints": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html",
      "description": "Grants permission to list access points",
      "accessLevel": "Read",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListAllMyBuckets": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html",
      "description": "Grants permission to list all buckets owned by the authenticated sender of the request",
      "accessLevel": "List",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListBucket": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html",
      "description": "Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)",
      "accessLevel": "List",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:delimiter",
        "s3:max-keys",
        "s3:prefix",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListBucketMultipartUploads": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html",
      "description": "Grants permission to list in-progress multipart uploads",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListBucketVersions": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html",
      "description": "Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket",
      "accessLevel": "Read",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:delimiter",
        "s3:max-keys",
        "s3:prefix",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html",
      "description": "Grants permission to list current jobs and jobs that have ended recently",
      "accessLevel": "Read",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ListMultipartUploadParts": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html",
      "description": "Grants permission to list the parts that have been uploaded for a specific multipart upload",
      "accessLevel": "Read",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ObjectOwnerOverrideToBucketOwner": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html#repl-ownership-add-role-permission",
      "description": "Grants permission to change replica ownership",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutAccelerateConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html",
      "description": "Grants permission to use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutAccessPointPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html",
      "description": "Grants permission to associate an access policy with a specified access point",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "accesspoint": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutAccountPublicAccessBlock": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html",
      "description": "Grants permission to create or modify the PublicAccessBlock configuration for an AWS account",
      "accessLevel": "Permissions management",
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutAnalyticsConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html",
      "description": "Grants permission to set an analytics configuration for the bucket, specified by the analytics configuration ID",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html",
      "description": "Grants permission to set the permissions on an existing bucket using access control lists (ACLs)",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp"
      ]
    },
    "PutBucketCORS": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html",
      "description": "Grants permission to set the CORS configuration for an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketLogging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html",
      "description": "Grants permission to set the logging parameters for an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketNotification": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html",
      "description": "Grants permission to receive notifications when certain events happen in an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketObjectLockConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html",
      "description": "Grants permission to put Object Lock configuration on a specific bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion"
      ]
    },
    "PutBucketPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html",
      "description": "Grants permission to add or replace a bucket policy on a bucket",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketPublicAccessBlock": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html",
      "description": "Grants permission to create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketRequestPayment": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html",
      "description": "Grants permission to set the request payment configuration of a bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html",
      "description": "Grants permission to add a set of tags to an existing Amazon S3 bucket",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketVersioning": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html",
      "description": "Grants permission to set the versioning state of an existing Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutBucketWebsite": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html",
      "description": "Grants permission to set the configuration of the website that is specified in the website subresource",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutEncryptionConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html",
      "description": "Grants permission to set the encryption configuration for an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutInventoryConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html",
      "description": "Grants permission to add an inventory configuration to the bucket, identified by the inventory ID",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutJobTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html",
      "description": "Grants permission to replace tags on an existing Amazon S3 Batch Operations job",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:ExistingJobPriority",
        "s3:ExistingJobOperation",
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "PutLifecycleConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html",
      "description": "Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutMetricsConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html",
      "description": "Grants permission to set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutObject": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html",
      "description": "Grants permission to add an object to a bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:RequestObjectTag/<key>",
        "s3:RequestObjectTagKeys",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-copy-source",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp",
        "s3:x-amz-metadata-directive",
        "s3:x-amz-server-side-encryption",
        "s3:x-amz-server-side-encryption-aws-kms-key-id",
        "s3:x-amz-storage-class",
        "s3:x-amz-website-redirect-location",
        "s3:object-lock-mode",
        "s3:object-lock-retain-until-date",
        "s3:object-lock-remaining-retention-days",
        "s3:object-lock-legal-hold"
      ]
    },
    "PutObjectAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html",
      "description": "Grants permission to set the access control list (ACL) permissions for an object that already exists in a bucket",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp",
        "s3:x-amz-storage-class"
      ]
    },
    "PutObjectLegalHold": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html",
      "description": "Grants permission to apply a Legal Hold configuration to the specified object",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:object-lock-legal-hold"
      ]
    },
    "PutObjectRetention": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html",
      "description": "Grants permission to place an Object Retention configuration on an object",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:object-lock-mode",
        "s3:object-lock-retain-until-date",
        "s3:object-lock-remaining-retention-days"
      ]
    },
    "PutObjectTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html",
      "description": "Grants permission to set the supplied tag-set to an object that already exists in a bucket",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:RequestObjectTag/<key>",
        "s3:RequestObjectTagKeys",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutObjectVersionAcl": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html",
      "description": "Grants permission to use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-acl",
        "s3:x-amz-content-sha256",
        "s3:x-amz-grant-full-control",
        "s3:x-amz-grant-read",
        "s3:x-amz-grant-read-acp",
        "s3:x-amz-grant-write",
        "s3:x-amz-grant-write-acp",
        "s3:x-amz-storage-class"
      ]
    },
    "PutObjectVersionTagging": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html",
      "description": "Grants permission to set the supplied tag-set for a specific version of an object",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:ExistingObjectTag/<key>",
        "s3:RequestObjectTag/<key>",
        "s3:RequestObjectTagKeys",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:versionid",
        "s3:x-amz-content-sha256"
      ]
    },
    "PutReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html",
      "description": "Grants permission to create a new replication configuration or replace an existing one",
      "accessLevel": "Write",
      "resourceTypes": {
        "bucket": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ReplicateDelete": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html",
      "description": "Grants permission to replicate delete markers to the destination bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "ReplicateObject": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html",
      "description": "Grants permission to replicate objects and object tags to the destination bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:x-amz-server-side-encryption",
        "s3:x-amz-server-side-encryption-aws-kms-key-id"
      ]
    },
    "ReplicateTags": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html",
      "description": "Grants permission to replicate object tags to the destination bucket",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "RestoreObject": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html",
      "description": "Grants permission to restore an archived copy of an object back into Amazon S3",
      "accessLevel": "Write",
      "resourceTypes": {
        "object": {
          "required": true
        }
      },
      "conditions": [
        "s3:DataAccessPointAccount",
        "s3:DataAccessPointArn",
        "s3:AccessPointNetworkOrigin",
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256"
      ]
    },
    "UpdateJobPriority": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html",
      "description": "Grants permission to update the priority of an existing job",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:RequestJobPriority",
        "s3:ExistingJobPriority",
        "s3:ExistingJobOperation"
      ]
    },
    "UpdateJobStatus": {
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html",
      "description": "Grants permission to update the status for the specified job",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      },
      "conditions": [
        "s3:authType",
        "s3:signatureAge",
        "s3:signatureversion",
        "s3:x-amz-content-sha256",
        "s3:ExistingJobPriority",
        "s3:ExistingJobOperation",
        "s3:JobSuspendedCause"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "accesspoint": {
      "name": "accesspoint",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html",
      "arn": "arn:${Partition}:s3:${Region}:${Account}:accesspoint/${AccessPointName}",
      "conditionKeys": []
    },
    "bucket": {
      "name": "bucket",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html",
      "arn": "arn:${Partition}:s3:::${BucketName}",
      "conditionKeys": []
    },
    "object": {
      "name": "object",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html",
      "arn": "arn:${Partition}:s3:::${BucketName}/${ObjectName}",
      "conditionKeys": []
    },
    "job": {
      "name": "job",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html",
      "arn": "arn:${Partition}:s3:${Region}:${Account}:job/${JobId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [s3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to abort a multipart upload
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointArn
   * - s3:DataAccessPointAccount
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  public abortMultipartUpload() {
    this.add('s3:AbortMultipartUpload');
    return this;
  }

  /**
   * Grants permission to allow circumvention of governance-mode object retention settings
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:RequestObjectTag/<key>
   * - s3:RequestObjectTagKeys
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-copy-source
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   * - s3:x-amz-metadata-directive
   * - s3:x-amz-server-side-encryption
   * - s3:x-amz-server-side-encryption-aws-kms-key-id
   * - s3:x-amz-storage-class
   * - s3:x-amz-website-redirect-location
   * - s3:object-lock-mode
   * - s3:object-lock-retain-until-date
   * - s3:object-lock-remaining-retention-days
   * - s3:object-lock-legal-hold
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-managing.html#object-lock-managing-bypass
   */
  public bypassGovernanceRetention() {
    this.add('s3:BypassGovernanceRetention');
    return this;
  }

  /**
   * Grants permission to create a new access point
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:locationconstraint
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   */
  public createAccessPoint() {
    this.add('s3:CreateAccessPoint');
    return this;
  }

  /**
   * Grants permission to create a new bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:locationconstraint
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   */
  public createBucket() {
    this.add('s3:CreateBucket');
    return this;
  }

  /**
   * Grants permission to create a new Amazon S3 Batch Operations job
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:RequestJobPriority
   * - s3:RequestJobOperation
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html
   */
  public createJob() {
    this.add('s3:CreateJob');
    return this;
  }

  /**
   * Grants permission to delete the access point named in the URI
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointArn
   * - s3:DataAccessPointAccount
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
   */
  public deleteAccessPoint() {
    this.add('s3:DeleteAccessPoint');
    return this;
  }

  /**
   * Grants permission to delete the policy on a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:DataAccessPointArn
   * - s3:DataAccessPointAccount
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
   */
  public deleteAccessPointPolicy() {
    this.add('s3:DeleteAccessPointPolicy');
    return this;
  }

  /**
   * Grants permission to delete the bucket named in the URI
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
   */
  public deleteBucket() {
    this.add('s3:DeleteBucket');
    return this;
  }

  /**
   * Grants permission to delete the policy on a specified bucket
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
   */
  public deleteBucketPolicy() {
    this.add('s3:DeleteBucketPolicy');
    return this;
  }

  /**
   * Grants permission to remove the website configuration for a bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
   */
  public deleteBucketWebsite() {
    this.add('s3:DeleteBucketWebsite');
    return this;
  }

  /**
   * Grants permission to remove tags from an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:ExistingJobPriority
   * - s3:ExistingJobOperation
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html
   */
  public deleteJobTagging() {
    this.add('s3:DeleteJobTagging');
    return this;
  }

  /**
   * Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public deleteObject() {
    this.add('s3:DeleteObject');
    return this;
  }

  /**
   * Grants permission to use the tagging subresource to remove the entire tag set from the specified object
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public deleteObjectTagging() {
    this.add('s3:DeleteObjectTagging');
    return this;
  }

  /**
   * Grants permission to remove a specific version of an object
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public deleteObjectVersion() {
    this.add('s3:DeleteObjectVersion');
    return this;
  }

  /**
   * Grants permission to remove the entire tag set for a specific version of the object
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public deleteObjectVersionTagging() {
    this.add('s3:DeleteObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to retrieve the configuration parameters and status for a batch operations job.
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html
   */
  public describeJob() {
    this.add('s3:DescribeJob');
    return this;
  }

  /**
   * Grants permission to uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
   */
  public getAccelerateConfiguration() {
    this.add('s3:GetAccelerateConfiguration');
    return this;
  }

  /**
   * Grants permission to return configuration information about the specified access point
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
   */
  public getAccessPoint() {
    this.add('s3:GetAccessPoint');
    return this;
  }

  /**
   * Grants permission to returns the access point policy associated with the specified access point
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
   */
  public getAccessPointPolicy() {
    this.add('s3:GetAccessPointPolicy');
    return this;
  }

  /**
   * Grants permission to return the policy status for a specific access point policy
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html
   */
  public getAccessPointPolicyStatus() {
    this.add('s3:GetAccessPointPolicyStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html
   */
  public getAccountPublicAccessBlock() {
    this.add('s3:GetAccountPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
   */
  public getAnalyticsConfiguration() {
    this.add('s3:GetAnalyticsConfiguration');
    return this;
  }

  /**
   * Grants permission to use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
   */
  public getBucketAcl() {
    this.add('s3:GetBucketAcl');
    return this;
  }

  /**
   * Grants permission to return the CORS configuration information set for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
   */
  public getBucketCORS() {
    this.add('s3:GetBucketCORS');
    return this;
  }

  /**
   * Grants permission to return the Region that an Amazon S3 bucket resides in
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
   */
  public getBucketLocation() {
    this.add('s3:GetBucketLocation');
    return this;
  }

  /**
   * Grants permission to return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
   */
  public getBucketLogging() {
    this.add('s3:GetBucketLogging');
    return this;
  }

  /**
   * Grants permission to get the notification configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
   */
  public getBucketNotification() {
    this.add('s3:GetBucketNotification');
    return this;
  }

  /**
   * Grants permission to get the Object Lock configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
   */
  public getBucketObjectLockConfiguration() {
    this.add('s3:GetBucketObjectLockConfiguration');
    return this;
  }

  /**
   * Grants permission to return the policy of the specified bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
   */
  public getBucketPolicy() {
    this.add('s3:GetBucketPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
   */
  public getBucketPolicyStatus() {
    this.add('s3:GetBucketPolicyStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
   */
  public getBucketPublicAccessBlock() {
    this.add('s3:GetBucketPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to return the request payment configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
   */
  public getBucketRequestPayment() {
    this.add('s3:GetBucketRequestPayment');
    return this;
  }

  /**
   * Grants permission to return the tag set associated with an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
   */
  public getBucketTagging() {
    this.add('s3:GetBucketTagging');
    return this;
  }

  /**
   * Grants permission to return the versioning state of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
   */
  public getBucketVersioning() {
    this.add('s3:GetBucketVersioning');
    return this;
  }

  /**
   * Grants permission to return the website configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
   */
  public getBucketWebsite() {
    this.add('s3:GetBucketWebsite');
    return this;
  }

  /**
   * Grants permission to return the default encryption configuration an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
   */
  public getEncryptionConfiguration() {
    this.add('s3:GetEncryptionConfiguration');
    return this;
  }

  /**
   * Grants permission to return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
   */
  public getInventoryConfiguration() {
    this.add('s3:GetInventoryConfiguration');
    return this;
  }

  /**
   * Grants permission to return the tag set of an existing Amazon S3 Batch Operations job
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html
   */
  public getJobTagging() {
    this.add('s3:GetJobTagging');
    return this;
  }

  /**
   * Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
   */
  public getLifecycleConfiguration() {
    this.add('s3:GetLifecycleConfiguration');
    return this;
  }

  /**
   * Grants permission to get a metrics configuration from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
   */
  public getMetricsConfiguration() {
    this.add('s3:GetMetricsConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve objects from Amazon S3
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public getObject() {
    this.add('s3:GetObject');
    return this;
  }

  /**
   * Grants permission to return the access control list (ACL) of an object
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public getObjectAcl() {
    this.add('s3:GetObjectAcl');
    return this;
  }

  /**
   * Grants permission to get an object's current Legal Hold status
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   */
  public getObjectLegalHold() {
    this.add('s3:GetObjectLegalHold');
    return this;
  }

  /**
   * Grants permission to retrieve the retention settings for an object
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   */
  public getObjectRetention() {
    this.add('s3:GetObjectRetention');
    return this;
  }

  /**
   * Grants permission to return the tag set of an object
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   */
  public getObjectTagging() {
    this.add('s3:GetObjectTagging');
    return this;
  }

  /**
   * Grants permission to return torrent files from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public getObjectTorrent() {
    this.add('s3:GetObjectTorrent');
    return this;
  }

  /**
   * Grants permission to retrieve a specific version of an object
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public getObjectVersion() {
    this.add('s3:GetObjectVersion');
    return this;
  }

  /**
   * Grants permission to return the access control list (ACL) of a specific object version
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public getObjectVersionAcl() {
    this.add('s3:GetObjectVersionAcl');
    return this;
  }

  /**
   * Grants permission to replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   */
  public getObjectVersionForReplication() {
    this.add('s3:GetObjectVersionForReplication');
    return this;
  }

  /**
   * Grants permission to return the tag set for a specific version of the object
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   */
  public getObjectVersionTagging() {
    this.add('s3:GetObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to get Torrent files about a different version using the versionId subresource
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public getObjectVersionTorrent() {
    this.add('s3:GetObjectVersionTorrent');
    return this;
  }

  /**
   * Grants permission to get the replication configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
   */
  public getReplicationConfiguration() {
    this.add('s3:GetReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to list access points
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
   */
  public listAccessPoints() {
    this.add('s3:ListAccessPoints');
    return this;
  }

  /**
   * Grants permission to list all buckets owned by the authenticated sender of the request
   *
   * Access Level: List
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
   */
  public listAllMyBuckets() {
    this.add('s3:ListAllMyBuckets');
    return this;
  }

  /**
   * Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   *
   * Access Level: List
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:delimiter
   * - s3:max-keys
   * - s3:prefix
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   */
  public listBucket() {
    this.add('s3:ListBucket');
    return this;
  }

  /**
   * Grants permission to list in-progress multipart uploads
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   */
  public listBucketMultipartUploads() {
    this.add('s3:ListBucketMultipartUploads');
    return this;
  }

  /**
   * Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:delimiter
   * - s3:max-keys
   * - s3:prefix
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  public listBucketVersions() {
    this.add('s3:ListBucketVersions');
    return this;
  }

  /**
   * Grants permission to list current jobs and jobs that have ended recently
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html
   */
  public listJobs() {
    this.add('s3:ListJobs');
    return this;
  }

  /**
   * Grants permission to list the parts that have been uploaded for a specific multipart upload
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  public listMultipartUploadParts() {
    this.add('s3:ListMultipartUploadParts');
    return this;
  }

  /**
   * Grants permission to change replica ownership
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html#repl-ownership-add-role-permission
   */
  public objectOwnerOverrideToBucketOwner() {
    this.add('s3:ObjectOwnerOverrideToBucketOwner');
    return this;
  }

  /**
   * Grants permission to use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html
   */
  public putAccelerateConfiguration() {
    this.add('s3:PutAccelerateConfiguration');
    return this;
  }

  /**
   * Grants permission to associate an access policy with a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
   */
  public putAccessPointPolicy() {
    this.add('s3:PutAccessPointPolicy');
    return this;
  }

  /**
   * Grants permission to create or modify the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html
   */
  public putAccountPublicAccessBlock() {
    this.add('s3:PutAccountPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to set an analytics configuration for the bucket, specified by the analytics configuration ID
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html
   */
  public putAnalyticsConfiguration() {
    this.add('s3:PutAnalyticsConfiguration');
    return this;
  }

  /**
   * Grants permission to set the permissions on an existing bucket using access control lists (ACLs)
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html
   */
  public putBucketAcl() {
    this.add('s3:PutBucketAcl');
    return this;
  }

  /**
   * Grants permission to set the CORS configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html
   */
  public putBucketCORS() {
    this.add('s3:PutBucketCORS');
    return this;
  }

  /**
   * Grants permission to set the logging parameters for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html
   */
  public putBucketLogging() {
    this.add('s3:PutBucketLogging');
    return this;
  }

  /**
   * Grants permission to receive notifications when certain events happen in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html
   */
  public putBucketNotification() {
    this.add('s3:PutBucketNotification');
    return this;
  }

  /**
   * Grants permission to put Object Lock configuration on a specific bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
   */
  public putBucketObjectLockConfiguration() {
    this.add('s3:PutBucketObjectLockConfiguration');
    return this;
  }

  /**
   * Grants permission to add or replace a bucket policy on a bucket
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html
   */
  public putBucketPolicy() {
    this.add('s3:PutBucketPolicy');
    return this;
  }

  /**
   * Grants permission to create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
   */
  public putBucketPublicAccessBlock() {
    this.add('s3:PutBucketPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to set the request payment configuration of a bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html
   */
  public putBucketRequestPayment() {
    this.add('s3:PutBucketRequestPayment');
    return this;
  }

  /**
   * Grants permission to add a set of tags to an existing Amazon S3 bucket
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
   */
  public putBucketTagging() {
    this.add('s3:PutBucketTagging');
    return this;
  }

  /**
   * Grants permission to set the versioning state of an existing Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
   */
  public putBucketVersioning() {
    this.add('s3:PutBucketVersioning');
    return this;
  }

  /**
   * Grants permission to set the configuration of the website that is specified in the website subresource
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
   */
  public putBucketWebsite() {
    this.add('s3:PutBucketWebsite');
    return this;
  }

  /**
   * Grants permission to set the encryption configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html
   */
  public putEncryptionConfiguration() {
    this.add('s3:PutEncryptionConfiguration');
    return this;
  }

  /**
   * Grants permission to add an inventory configuration to the bucket, identified by the inventory ID
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html
   */
  public putInventoryConfiguration() {
    this.add('s3:PutInventoryConfiguration');
    return this;
  }

  /**
   * Grants permission to replace tags on an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:ExistingJobPriority
   * - s3:ExistingJobOperation
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html
   */
  public putJobTagging() {
    this.add('s3:PutJobTagging');
    return this;
  }

  /**
   * Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html
   */
  public putLifecycleConfiguration() {
    this.add('s3:PutLifecycleConfiguration');
    return this;
  }

  /**
   * Grants permission to set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html
   */
  public putMetricsConfiguration() {
    this.add('s3:PutMetricsConfiguration');
    return this;
  }

  /**
   * Grants permission to add an object to a bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:RequestObjectTag/<key>
   * - s3:RequestObjectTagKeys
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-copy-source
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   * - s3:x-amz-metadata-directive
   * - s3:x-amz-server-side-encryption
   * - s3:x-amz-server-side-encryption-aws-kms-key-id
   * - s3:x-amz-storage-class
   * - s3:x-amz-website-redirect-location
   * - s3:object-lock-mode
   * - s3:object-lock-retain-until-date
   * - s3:object-lock-remaining-retention-days
   * - s3:object-lock-legal-hold
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  public putObject() {
    this.add('s3:PutObject');
    return this;
  }

  /**
   * Grants permission to set the access control list (ACL) permissions for an object that already exists in a bucket
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   * - s3:x-amz-storage-class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public putObjectAcl() {
    this.add('s3:PutObjectAcl');
    return this;
  }

  /**
   * Grants permission to apply a Legal Hold configuration to the specified object
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:object-lock-legal-hold
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   */
  public putObjectLegalHold() {
    this.add('s3:PutObjectLegalHold');
    return this;
  }

  /**
   * Grants permission to place an Object Retention configuration on an object
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:object-lock-mode
   * - s3:object-lock-retain-until-date
   * - s3:object-lock-remaining-retention-days
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   */
  public putObjectRetention() {
    this.add('s3:PutObjectRetention');
    return this;
  }

  /**
   * Grants permission to set the supplied tag-set to an object that already exists in a bucket
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:RequestObjectTag/<key>
   * - s3:RequestObjectTagKeys
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public putObjectTagging() {
    this.add('s3:PutObjectTagging');
    return this;
  }

  /**
   * Grants permission to use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-acl
   * - s3:x-amz-content-sha256
   * - s3:x-amz-grant-full-control
   * - s3:x-amz-grant-read
   * - s3:x-amz-grant-read-acp
   * - s3:x-amz-grant-write
   * - s3:x-amz-grant-write-acp
   * - s3:x-amz-storage-class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public putObjectVersionAcl() {
    this.add('s3:PutObjectVersionAcl');
    return this;
  }

  /**
   * Grants permission to set the supplied tag-set for a specific version of an object
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:ExistingObjectTag/<key>
   * - s3:RequestObjectTag/<key>
   * - s3:RequestObjectTagKeys
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:versionid
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public putObjectVersionTagging() {
    this.add('s3:PutObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to create a new replication configuration or replace an existing one
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html
   */
  public putReplicationConfiguration() {
    this.add('s3:PutReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to replicate delete markers to the destination bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public replicateDelete() {
    this.add('s3:ReplicateDelete');
    return this;
  }

  /**
   * Grants permission to replicate objects and object tags to the destination bucket
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:x-amz-server-side-encryption
   * - s3:x-amz-server-side-encryption-aws-kms-key-id
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public replicateObject() {
    this.add('s3:ReplicateObject');
    return this;
  }

  /**
   * Grants permission to replicate object tags to the destination bucket
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public replicateTags() {
    this.add('s3:ReplicateTags');
    return this;
  }

  /**
   * Grants permission to restore an archived copy of an object back into Amazon S3
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:DataAccessPointAccount
   * - s3:DataAccessPointArn
   * - s3:AccessPointNetworkOrigin
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   */
  public restoreObject() {
    this.add('s3:RestoreObject');
    return this;
  }

  /**
   * Grants permission to update the priority of an existing job
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:RequestJobPriority
   * - s3:ExistingJobPriority
   * - s3:ExistingJobOperation
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html
   */
  public updateJobPriority() {
    this.add('s3:UpdateJobPriority');
    return this;
  }

  /**
   * Grants permission to update the status for the specified job
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - s3:authType
   * - s3:signatureAge
   * - s3:signatureversion
   * - s3:x-amz-content-sha256
   * - s3:ExistingJobPriority
   * - s3:ExistingJobOperation
   * - s3:JobSuspendedCause
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html
   */
  public updateJobStatus() {
    this.add('s3:UpdateJobStatus');
    return this;
  }

  /**
   * Adds a resource of type accesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html
   *
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccesspoint(accessPointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3:${Region}:${Account}:accesspoint/${AccessPointName}';
    arn = arn.replace('${AccessPointName}', accessPointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBucket(bucketName: string, partition?: string) {
    var arn = 'arn:${Partition}:s3:::${BucketName}';
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type object to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param objectName - Identifier for the objectName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onObject(bucketName: string, objectName: string, partition?: string) {
    var arn = 'arn:${Partition}:s3:::${BucketName}/${ObjectName}';
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${ObjectName}', objectName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the network origin (Internet or VPC)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointNetworkOrigin(value: string | string[], operator?: string) {
    return this.if(`s3:AccessPointNetworkOrigin`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS Account ID that owns the access point
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointAccount(value: string | string[], operator?: string) {
    return this.if(`s3:DataAccessPointAccount`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an access point Amazon Resource Name (ARN)
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointArn(value: string | string[], operator?: string) {
    return this.if(`s3:DataAccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access to updating the job priority by operation
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExistingJobOperation(value: string | string[], operator?: string) {
    return this.if(`s3:ExistingJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access to cancelling existing jobs by priority range
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifExistingJobPriority(value: number | number[], operator?: string) {
    return this.if(`s3:ExistingJobPriority`, value, operator || 'NumericEquals');
  }

  /**
   * Requires that an existing object tag has a specific tag key and value.
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExistingObjectTag(key: string, value: string | string[], operator?: string) {
    return this.if(`s3:ExistingObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access to cancelling suspended jobs by a specific job suspended cause (for example, AWAITING_CONFIRMATION)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobSuspendedCause(value: string | string[], operator?: string) {
    return this.if(`s3:JobSuspendedCause`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific Region
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-1
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationConstraint(value: string | string[], operator?: string) {
    return this.if(`s3:LocationConstraint`, value, operator || 'StringLike');
  }

  /**
   * Filters access to creating jobs by operation
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestJobOperation(value: string | string[], operator?: string) {
    return this.if(`s3:RequestJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access to creating new jobs by priority range
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRequestJobPriority(value: number | number[], operator?: string) {
    return this.if(`s3:RequestJobPriority`, value, operator || 'NumericEquals');
  }

  /**
   * Restricts the tag keys and values allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTag(key: string, value: string | string[], operator?: string) {
    return this.if(`s3:RequestObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Restricts the tag keys allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTagKeys(value: string | string[], operator?: string) {
    return this.if(`s3:RequestObjectTagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific object version
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionId(value: string | string[], operator?: string) {
    return this.if(`s3:VersionId`, value, operator || 'StringLike');
  }

  /**
   * Restricts incoming requests to a specific authentication method
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: string) {
    return this.if(`s3:authType`, value, operator || 'StringLike');
  }

  /**
   * Requires the delimiter parameter
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDelimiter(value: string | string[], operator?: string) {
    return this.if(`s3:delimiter`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific Region
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-1
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationconstraint(value: string | string[], operator?: string) {
    return this.if(`s3:locationconstraint`, value, operator || 'StringLike');
  }

  /**
   * Limits the maximum number of keys returned in a ListBucket request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-numeric-condition-operators
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxKeys(value: number | number[], operator?: string) {
    return this.if(`s3:max-keys`, value, operator || 'NumericEquals');
  }

  /**
   * Enables enforcement of the specified object legal hold status
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockLegalHold(value: string | string[], operator?: string) {
    return this.if(`s3:object-lock-legal-hold`, value, operator || 'StringLike');
  }

  /**
   * Enables enforcement of the specified object retention mode (COMPLIANCE or GOVERNANCE)
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockMode(value: string | string[], operator?: string) {
    return this.if(`s3:object-lock-mode`, value, operator || 'StringLike');
  }

  /**
   * Enables enforcement of an object relative to the remaining retention days
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-managing.html#object-lock-managing-retention-limits
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockRemainingRetentionDays(value: string | string[], operator?: string) {
    return this.if(`s3:object-lock-remaining-retention-days`, value, operator || 'StringLike');
  }

  /**
   * Enables enforcement of a specific retain-until-date
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockRetainUntilDate(value: string | string[], operator?: string) {
    return this.if(`s3:object-lock-retain-until-date`, value, operator || 'StringLike');
  }

  /**
   * Filters access by key name prefix
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-2
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrefix(value: string | string[], operator?: string) {
    return this.if(`s3:prefix`, value, operator || 'StringLike');
  }

  /**
   * Identifies the length of time, in milliseconds, that a signature is valid in an authenticated request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: string) {
    return this.if(`s3:signatureAge`, value, operator || 'NumericEquals');
  }

  /**
   * Identifies the version of AWS Signature that is supported for authenticated requests
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSignatureversion(value: string | string[], operator?: string) {
    return this.if(`s3:signatureversion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific object version
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionid(value: string | string[], operator?: string) {
    return this.if(`s3:versionid`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-acl header with a specific canned ACL in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzAcl(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-acl`, value, operator || 'StringLike');
  }

  /**
   * Disallows unsigned content in your bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-content-sha256`, value, operator || 'StringLike');
  }

  /**
   * Restricts the copy source to a specific bucket, prefix, or object
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#putobject-limit-copy-source-3
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzCopySource(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-copy-source`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-grant-full-control (full control) header in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantFullControl(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-grant-full-control`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-grant-read (read access) header in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantRead(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-grant-read`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-grant-read-acp (read permissions for the ACL) header in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantReadAcp(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-grant-read-acp`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-grant-write (write access) header in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantWrite(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-grant-write`, value, operator || 'StringLike');
  }

  /**
   * Requires the x-amz-grant-write-acp (write permissions for the ACL) header in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantWriteAcp(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-grant-write-acp`, value, operator || 'StringLike');
  }

  /**
   * Enables enforcement of object metadata behavior (COPY or REPLACE) when objects are copied
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzMetadataDirective(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-metadata-directive`, value, operator || 'StringLike');
  }

  /**
   * Requires server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryption(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-server-side-encryption`, value, operator || 'StringLike');
  }

  /**
   * Requires a specific AWS KMS customer managed CMK for server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html#require-sse-kms
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryptionAwsKmsKeyId(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-server-side-encryption-aws-kms-key-id`, value, operator || 'StringLike');
  }

  /**
   * Filters access by storage class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzStorageClass(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-storage-class`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific website redirect location for buckets that are configured as static websites
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#page-redirect-using-rest-api
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzWebsiteRedirectLocation(value: string | string[], operator?: string) {
    return this.if(`s3:x-amz-website-redirect-location`, value, operator || 'StringLike');
  }
}
