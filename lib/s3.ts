import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service s3
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
 */
export class S3 extends PolicyStatement {
    public servicePrefix = 's3';
    public actions : Actions = {
        "AbortMultipartUpload": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html",
            "description": "Aborts a multipart upload.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "BypassGovernanceRetention": {
            "url": "",
            "description": "Allows circumvention of governance-mode object retention settings",
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
                "s3:authtype",
                "s3:signatureage",
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
            "description": "Creates a new access point.",
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
                "s3:authtype",
                "s3:locationconstraint",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-acl",
                "s3:x-amz-content-sha256"
            ]
        },
        "CreateBucket": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html",
            "description": "Creates a new bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:locationconstraint",
                "s3:signatureage",
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
            "description": "Creates a new Amazon S3 Batch Operations job.",
            "accessLevel": "Write",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:RequestJobPriority",
                "s3:RequestJobOperation"
            ]
        },
        "DeleteAccessPoint": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html",
            "description": "Deletes the access point named in the URI",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteAccessPointPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html",
            "description": "Delete the policy on a specified access point",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteBucket": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html",
            "description": "Deletes the bucket named in the URI",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteBucketPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html",
            "description": "Delete the policy on a specified bucket",
            "accessLevel": "Permissions management",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteBucketWebsite": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html",
            "description": "Removes the website configuration for a bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteObject": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html",
            "description": "Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the current version of the object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteObjectTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html",
            "description": "This implementation of the DELETE operation uses the tagging subresource to remove the entire tag set from the specified object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteObjectVersion": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html",
            "description": "To remove a specific version of a object, you must be the bucket owner and you must use the versionId subresource.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "DeleteObjectVersionTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html",
            "description": "DELETE Object tagging (for a Specific Version of the Object)",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "DescribeJob": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html",
            "description": "Retrieves the configuration parameters and status for an Amazon S3 batch operations job.",
            "accessLevel": "Read",
            "resourceTypes": {
                "job": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAccelerateConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html",
            "description": "This implementation of the GET operation uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAccessPoint": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html",
            "description": "Retrieve access point metadata",
            "accessLevel": "Read",
            "conditions": [
                "s3:DataAccessPointAccount",
                "s3:DataAccessPointArn",
                "s3:AccessPointNetworkOrigin",
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAccessPointPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html",
            "description": "Return the policy of a specified access point.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAccessPointPolicyStatus": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html",
            "description": "Retrieve the policy status for an specific access point's policy",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAccountPublicAccessBlock": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html",
            "description": "Retrieve the PublicAccessBlock configuration for an AWS account",
            "accessLevel": "Read",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetAnalyticsConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html",
            "description": "This implementation of the GET operation returns an analytics configuration (identified by the analytics configuration ID) from the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketAcl": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html",
            "description": "Return the access control list (ACL) of a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketCORS": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html",
            "description": "Returns the CORS configuration information set for the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketLocation": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html",
            "description": "Return a bucket's region.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            }
        },
        "GetBucketLogging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html",
            "description": "Return the logging status of a bucket and the permissions users have to view and modify that status.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketNotification": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html",
            "description": "Return the notification configuration of a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketObjectLockConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html",
            "description": "GET Object Lock configuration for a specific bucket",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion"
            ]
        },
        "GetBucketPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html",
            "description": "Return the policy of a specified bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketPolicyStatus": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html",
            "description": "Retrieve the policy status for an specific S3 bucket, indicating whether the bucket is public.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketPublicAccessBlock": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html",
            "description": "Retrieve the PublicAccessBlock configuration for a specific S3 bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketRequestPayment": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html",
            "description": "Return the request payment configuration of a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html",
            "description": "Return the tag set associated with the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketVersioning": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html",
            "description": "Return the versioning state of a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetBucketWebsite": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html",
            "description": "Returns the website configuration associated with a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetEncryptionConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html",
            "description": "Returns the encryption configuration information set on the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetInventoryConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html",
            "description": "This implementation of the GET operation returns an inventory configuration (identified by the inventory configuration ID) from the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetLifecycleConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html",
            "description": "Returns the lifecycle configuration information set on the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetMetricsConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html",
            "description": "Gets a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObject": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html",
            "description": "Retrieves objects from Amazon S3.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectAcl": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html",
            "description": "Return the access control list (ACL) of an object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectLegalHold": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html",
            "description": "GET Object Legal Hold for a specific object",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectRetention": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html",
            "description": "GET Object Legal Hold for a specific object",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html",
            "description": "This implementation of the GET operation returns the tags associated with an object. You send the GET request against the tagging subresource associated with the object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectTorrent": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html",
            "description": "return torrent files from a bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectVersion": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html",
            "description": "To return a different version, use the versionId subresource.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectVersionAcl": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html",
            "description": "To return ACL information about a different version, use the versionId subresource.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectVersionForReplication": {
            "url": "",
            "description": "Permission exercised by S3 replication",
            "accessLevel": "Read",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectVersionTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html",
            "description": "GET Object tagging (for a Specific Version of the Object)",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetObjectVersionTorrent": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html",
            "description": "To return Torrent files about a different version, use the versionId subresource.",
            "accessLevel": "Read",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "GetReplicationConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html",
            "description": "Returns the replication configuration information set on the bucket.",
            "accessLevel": "Read",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListAccessPoints": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html",
            "description": "Lists access points.",
            "accessLevel": "Read",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListAllMyBuckets": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html",
            "description": "Returns a list of all buckets owned by the authenticated sender of the request.",
            "accessLevel": "List",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListBucket": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html",
            "description": "Returns some or all (up to 1000) of the objects in a bucket.",
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
                "s3:authtype",
                "s3:delimiter",
                "s3:max-keys",
                "s3:prefix",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListBucketMultipartUploads": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html",
            "description": "Lists in-progress multipart uploads.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListBucketVersions": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html",
            "description": "Use the versions subresource to list metadata about all of the versions of objects in a bucket.",
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
                "s3:authtype",
                "s3:delimiter",
                "s3:max-keys",
                "s3:prefix",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListJobs": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html",
            "description": "Lists current jobs and jobs that have ended recently.",
            "accessLevel": "Read",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ListMultipartUploadParts": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html",
            "description": "Lists the parts that have been uploaded for a specific multipart upload.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ObjectOwnerOverrideToBucketOwner": {
            "url": "",
            "description": "Permission exercised by S3 replication",
            "accessLevel": "Permissions management",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutAccelerateConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html",
            "description": "This implementation of the PUT operation uses the accelerate subresource to set the Transfer Acceleration state of an existing bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutAccessPointPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html",
            "description": "Add to or replace a data policy on a access point.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutAccountPublicAccessBlock": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html",
            "description": "Create or modify the PublicAccessBlock configuration for an AWS account.",
            "accessLevel": "Permissions management",
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutAnalyticsConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html",
            "description": "This implementation of the PUT operation adds an analytics configuration (identified by the analytics ID) to the bucket. You can have up to 1,000 analytics configurations per bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketAcl": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html",
            "description": "Set the permissions on an existing bucket using access control lists (ACL).",
            "accessLevel": "Permissions management",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
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
            "description": "Sets the CORS configuration for your bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketLogging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html",
            "description": "Set the logging parameters for a bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketNotification": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html",
            "description": "Enables you to receive notifications when certain events happen in your bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketObjectLockConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html",
            "description": "PUT Object Lock configuration on a specific bucket",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion"
            ]
        },
        "PutBucketPolicy": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html",
            "description": "Add to or replace a policy on a bucket.",
            "accessLevel": "Permissions management",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketPublicAccessBlock": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html",
            "description": "Create or modify the PublicAccessBlock configuration for an specific S3 bucket.",
            "accessLevel": "Permissions management",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketRequestPayment": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html",
            "description": "Set the request payment configuration of a bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html",
            "description": "Add a set of tags to an existing bucket.",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketVersioning": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html",
            "description": "Set the versioning state of an existing bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutBucketWebsite": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html",
            "description": "Sets the configuration of the website that is specified in the website subresource.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutEncryptionConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html",
            "description": "Sets the encryption configuration for the bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutInventoryConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html",
            "description": "This implementation of the PUT operation adds an inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutLifecycleConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html",
            "description": "Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutMetricsConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html",
            "description": "Sets or updates a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from the bucket.",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutObject": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html",
            "description": "Adds an object to a bucket.",
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
                "s3:authtype",
                "s3:signatureage",
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
            "description": "Set the access control list (ACL) permissions for an object that already exists in a bucket.",
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
                "s3:authtype",
                "s3:signatureage",
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
            "description": "PUT Object Legal Hold on a specific object",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:object-lock-legal-hold"
            ]
        },
        "PutObjectRetention": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html",
            "description": "PUT Object Retention on a specific object",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:object-lock-mode",
                "s3:object-lock-retain-until-date",
                "s3:object-lock-remaining-retention-days"
            ]
        },
        "PutObjectTagging": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html",
            "description": "This implementation of the PUT operation uses the tagging subresource to add a set of tags to an existing object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutObjectVersionAcl": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html",
            "description": "The ACL of an object is set at the object version level.",
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
                "s3:authtype",
                "s3:signatureage",
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
            "description": "PUT Object tagging (for a Specific Version of the Object)",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:versionid",
                "s3:x-amz-content-sha256"
            ]
        },
        "PutReplicationConfiguration": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html",
            "description": "In a versioning-enabled bucket, this operation creates a new replication configuration (or replaces an existing one, if present).",
            "accessLevel": "Write",
            "resourceTypes": {
                "bucket": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ReplicateDelete": {
            "url": "",
            "description": "Permission exercised by S3 replication",
            "accessLevel": "Write",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "ReplicateObject": {
            "url": "",
            "description": "Permission exercised by S3 replication",
            "accessLevel": "Write",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:x-amz-server-side-encryption",
                "s3:x-amz-server-side-encryption-aws-kms-key-id"
            ]
        },
        "ReplicateTags": {
            "url": "",
            "description": "Permission exercised by S3 replication",
            "accessLevel": "Tagging",
            "resourceTypes": {
                "object": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "RestoreObject": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html",
            "description": "Restores a temporary copy of an archived object.",
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
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256"
            ]
        },
        "UpdateJobPriority": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html",
            "description": "Updates an existing job's priority.",
            "accessLevel": "Write",
            "resourceTypes": {
                "job": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:RequestJobPriority",
                "s3:ExistingJobPriority",
                "s3:ExistingJobOperation"
            ]
        },
        "UpdateJobStatus": {
            "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html",
            "description": "Updates the status for the specified job.",
            "accessLevel": "Write",
            "resourceTypes": {
                "job": {
                    "required": true
                }
            },
            "conditions": [
                "s3:authtype",
                "s3:signatureage",
                "s3:signatureversion",
                "s3:x-amz-content-sha256",
                "s3:ExistingJobPriority",
                "s3:ExistingJobOperation",
                "s3:JobSuspendedCause"
            ]
        }
    };

    /**
     * Aborts a multipart upload.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
     */
    public abortMultipartUpload () {
        this.add('s3:AbortMultipartUpload');
        return this;
    }

    /**
     * Allows circumvention of governance-mode object retention settings
     *
     * Access Level: Permissions management
     *
     *
     */
    public bypassGovernanceRetention () {
        this.add('s3:BypassGovernanceRetention');
        return this;
    }

    /**
     * Creates a new access point.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
     */
    public createAccessPoint () {
        this.add('s3:CreateAccessPoint');
        return this;
    }

    /**
     * Creates a new bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
     */
    public createBucket () {
        this.add('s3:CreateBucket');
        return this;
    }

    /**
     * Creates a new Amazon S3 Batch Operations job.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html
     */
    public createJob () {
        this.add('s3:CreateJob');
        return this;
    }

    /**
     * Deletes the access point named in the URI
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
     */
    public deleteAccessPoint () {
        this.add('s3:DeleteAccessPoint');
        return this;
    }

    /**
     * Delete the policy on a specified access point
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
     */
    public deleteAccessPointPolicy () {
        this.add('s3:DeleteAccessPointPolicy');
        return this;
    }

    /**
     * Deletes the bucket named in the URI
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
     */
    public deleteBucket () {
        this.add('s3:DeleteBucket');
        return this;
    }

    /**
     * Delete the policy on a specified bucket
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
     */
    public deleteBucketPolicy () {
        this.add('s3:DeleteBucketPolicy');
        return this;
    }

    /**
     * Removes the website configuration for a bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
     */
    public deleteBucketWebsite () {
        this.add('s3:DeleteBucketWebsite');
        return this;
    }

    /**
     * Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the current version of the object.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
     */
    public deleteObject () {
        this.add('s3:DeleteObject');
        return this;
    }

    /**
     * This implementation of the DELETE operation uses the tagging subresource to remove the entire tag set from the specified object.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
     */
    public deleteObjectTagging () {
        this.add('s3:DeleteObjectTagging');
        return this;
    }

    /**
     * To remove a specific version of a object, you must be the bucket owner and you must use the versionId subresource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
     */
    public deleteObjectVersion () {
        this.add('s3:DeleteObjectVersion');
        return this;
    }

    /**
     * DELETE Object tagging (for a Specific Version of the Object)
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
     */
    public deleteObjectVersionTagging () {
        this.add('s3:DeleteObjectVersionTagging');
        return this;
    }

    /**
     * Retrieves the configuration parameters and status for an Amazon S3 batch operations job.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html
     */
    public describeJob () {
        this.add('s3:DescribeJob');
        return this;
    }

    /**
     * This implementation of the GET operation uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
     */
    public getAccelerateConfiguration () {
        this.add('s3:GetAccelerateConfiguration');
        return this;
    }

    /**
     * Retrieve access point metadata
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
     */
    public getAccessPoint () {
        this.add('s3:GetAccessPoint');
        return this;
    }

    /**
     * Return the policy of a specified access point.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
     */
    public getAccessPointPolicy () {
        this.add('s3:GetAccessPointPolicy');
        return this;
    }

    /**
     * Retrieve the policy status for an specific access point's policy
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html
     */
    public getAccessPointPolicyStatus () {
        this.add('s3:GetAccessPointPolicyStatus');
        return this;
    }

    /**
     * Retrieve the PublicAccessBlock configuration for an AWS account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html
     */
    public getAccountPublicAccessBlock () {
        this.add('s3:GetAccountPublicAccessBlock');
        return this;
    }

    /**
     * This implementation of the GET operation returns an analytics configuration (identified by the analytics configuration ID) from the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
     */
    public getAnalyticsConfiguration () {
        this.add('s3:GetAnalyticsConfiguration');
        return this;
    }

    /**
     * Return the access control list (ACL) of a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
     */
    public getBucketAcl () {
        this.add('s3:GetBucketAcl');
        return this;
    }

    /**
     * Returns the CORS configuration information set for the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
     */
    public getBucketCORS () {
        this.add('s3:GetBucketCORS');
        return this;
    }

    /**
     * Return a bucket's region.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
     */
    public getBucketLocation () {
        this.add('s3:GetBucketLocation');
        return this;
    }

    /**
     * Return the logging status of a bucket and the permissions users have to view and modify that status.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
     */
    public getBucketLogging () {
        this.add('s3:GetBucketLogging');
        return this;
    }

    /**
     * Return the notification configuration of a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
     */
    public getBucketNotification () {
        this.add('s3:GetBucketNotification');
        return this;
    }

    /**
     * GET Object Lock configuration for a specific bucket
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
     */
    public getBucketObjectLockConfiguration () {
        this.add('s3:GetBucketObjectLockConfiguration');
        return this;
    }

    /**
     * Return the policy of a specified bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
     */
    public getBucketPolicy () {
        this.add('s3:GetBucketPolicy');
        return this;
    }

    /**
     * Retrieve the policy status for an specific S3 bucket, indicating whether the bucket is public.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
     */
    public getBucketPolicyStatus () {
        this.add('s3:GetBucketPolicyStatus');
        return this;
    }

    /**
     * Retrieve the PublicAccessBlock configuration for a specific S3 bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
     */
    public getBucketPublicAccessBlock () {
        this.add('s3:GetBucketPublicAccessBlock');
        return this;
    }

    /**
     * Return the request payment configuration of a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
     */
    public getBucketRequestPayment () {
        this.add('s3:GetBucketRequestPayment');
        return this;
    }

    /**
     * Return the tag set associated with the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
     */
    public getBucketTagging () {
        this.add('s3:GetBucketTagging');
        return this;
    }

    /**
     * Return the versioning state of a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
     */
    public getBucketVersioning () {
        this.add('s3:GetBucketVersioning');
        return this;
    }

    /**
     * Returns the website configuration associated with a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
     */
    public getBucketWebsite () {
        this.add('s3:GetBucketWebsite');
        return this;
    }

    /**
     * Returns the encryption configuration information set on the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
     */
    public getEncryptionConfiguration () {
        this.add('s3:GetEncryptionConfiguration');
        return this;
    }

    /**
     * This implementation of the GET operation returns an inventory configuration (identified by the inventory configuration ID) from the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
     */
    public getInventoryConfiguration () {
        this.add('s3:GetInventoryConfiguration');
        return this;
    }

    /**
     * Returns the lifecycle configuration information set on the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
     */
    public getLifecycleConfiguration () {
        this.add('s3:GetLifecycleConfiguration');
        return this;
    }

    /**
     * Gets a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
     */
    public getMetricsConfiguration () {
        this.add('s3:GetMetricsConfiguration');
        return this;
    }

    /**
     * Retrieves objects from Amazon S3.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
     */
    public getObject () {
        this.add('s3:GetObject');
        return this;
    }

    /**
     * Return the access control list (ACL) of an object.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
     */
    public getObjectAcl () {
        this.add('s3:GetObjectAcl');
        return this;
    }

    /**
     * GET Object Legal Hold for a specific object
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
     */
    public getObjectLegalHold () {
        this.add('s3:GetObjectLegalHold');
        return this;
    }

    /**
     * GET Object Legal Hold for a specific object
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
     */
    public getObjectRetention () {
        this.add('s3:GetObjectRetention');
        return this;
    }

    /**
     * This implementation of the GET operation returns the tags associated with an object. You send the GET request against the tagging subresource associated with the object.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
     */
    public getObjectTagging () {
        this.add('s3:GetObjectTagging');
        return this;
    }

    /**
     * return torrent files from a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
     */
    public getObjectTorrent () {
        this.add('s3:GetObjectTorrent');
        return this;
    }

    /**
     * To return a different version, use the versionId subresource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
     */
    public getObjectVersion () {
        this.add('s3:GetObjectVersion');
        return this;
    }

    /**
     * To return ACL information about a different version, use the versionId subresource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
     */
    public getObjectVersionAcl () {
        this.add('s3:GetObjectVersionAcl');
        return this;
    }

    /**
     * Permission exercised by S3 replication
     *
     * Access Level: Read
     *
     *
     */
    public getObjectVersionForReplication () {
        this.add('s3:GetObjectVersionForReplication');
        return this;
    }

    /**
     * GET Object tagging (for a Specific Version of the Object)
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
     */
    public getObjectVersionTagging () {
        this.add('s3:GetObjectVersionTagging');
        return this;
    }

    /**
     * To return Torrent files about a different version, use the versionId subresource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
     */
    public getObjectVersionTorrent () {
        this.add('s3:GetObjectVersionTorrent');
        return this;
    }

    /**
     * Returns the replication configuration information set on the bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
     */
    public getReplicationConfiguration () {
        this.add('s3:GetReplicationConfiguration');
        return this;
    }

    /**
     * Lists access points.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
     */
    public listAccessPoints () {
        this.add('s3:ListAccessPoints');
        return this;
    }

    /**
     * Returns a list of all buckets owned by the authenticated sender of the request.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
     */
    public listAllMyBuckets () {
        this.add('s3:ListAllMyBuckets');
        return this;
    }

    /**
     * Returns some or all (up to 1000) of the objects in a bucket.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
     */
    public listBucket () {
        this.add('s3:ListBucket');
        return this;
    }

    /**
     * Lists in-progress multipart uploads.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
     */
    public listBucketMultipartUploads () {
        this.add('s3:ListBucketMultipartUploads');
        return this;
    }

    /**
     * Use the versions subresource to list metadata about all of the versions of objects in a bucket.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
     */
    public listBucketVersions () {
        this.add('s3:ListBucketVersions');
        return this;
    }

    /**
     * Lists current jobs and jobs that have ended recently.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html
     */
    public listJobs () {
        this.add('s3:ListJobs');
        return this;
    }

    /**
     * Lists the parts that have been uploaded for a specific multipart upload.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
     */
    public listMultipartUploadParts () {
        this.add('s3:ListMultipartUploadParts');
        return this;
    }

    /**
     * Permission exercised by S3 replication
     *
     * Access Level: Permissions management
     *
     *
     */
    public objectOwnerOverrideToBucketOwner () {
        this.add('s3:ObjectOwnerOverrideToBucketOwner');
        return this;
    }

    /**
     * This implementation of the PUT operation uses the accelerate subresource to set the Transfer Acceleration state of an existing bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html
     */
    public putAccelerateConfiguration () {
        this.add('s3:PutAccelerateConfiguration');
        return this;
    }

    /**
     * Add to or replace a data policy on a access point.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
     */
    public putAccessPointPolicy () {
        this.add('s3:PutAccessPointPolicy');
        return this;
    }

    /**
     * Create or modify the PublicAccessBlock configuration for an AWS account.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html
     */
    public putAccountPublicAccessBlock () {
        this.add('s3:PutAccountPublicAccessBlock');
        return this;
    }

    /**
     * This implementation of the PUT operation adds an analytics configuration (identified by the analytics ID) to the bucket. You can have up to 1,000 analytics configurations per bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html
     */
    public putAnalyticsConfiguration () {
        this.add('s3:PutAnalyticsConfiguration');
        return this;
    }

    /**
     * Set the permissions on an existing bucket using access control lists (ACL).
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html
     */
    public putBucketAcl () {
        this.add('s3:PutBucketAcl');
        return this;
    }

    /**
     * Sets the CORS configuration for your bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html
     */
    public putBucketCORS () {
        this.add('s3:PutBucketCORS');
        return this;
    }

    /**
     * Set the logging parameters for a bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html
     */
    public putBucketLogging () {
        this.add('s3:PutBucketLogging');
        return this;
    }

    /**
     * Enables you to receive notifications when certain events happen in your bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html
     */
    public putBucketNotification () {
        this.add('s3:PutBucketNotification');
        return this;
    }

    /**
     * PUT Object Lock configuration on a specific bucket
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
     */
    public putBucketObjectLockConfiguration () {
        this.add('s3:PutBucketObjectLockConfiguration');
        return this;
    }

    /**
     * Add to or replace a policy on a bucket.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html
     */
    public putBucketPolicy () {
        this.add('s3:PutBucketPolicy');
        return this;
    }

    /**
     * Create or modify the PublicAccessBlock configuration for an specific S3 bucket.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
     */
    public putBucketPublicAccessBlock () {
        this.add('s3:PutBucketPublicAccessBlock');
        return this;
    }

    /**
     * Set the request payment configuration of a bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html
     */
    public putBucketRequestPayment () {
        this.add('s3:PutBucketRequestPayment');
        return this;
    }

    /**
     * Add a set of tags to an existing bucket.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
     */
    public putBucketTagging () {
        this.add('s3:PutBucketTagging');
        return this;
    }

    /**
     * Set the versioning state of an existing bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
     */
    public putBucketVersioning () {
        this.add('s3:PutBucketVersioning');
        return this;
    }

    /**
     * Sets the configuration of the website that is specified in the website subresource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
     */
    public putBucketWebsite () {
        this.add('s3:PutBucketWebsite');
        return this;
    }

    /**
     * Sets the encryption configuration for the bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html
     */
    public putEncryptionConfiguration () {
        this.add('s3:PutEncryptionConfiguration');
        return this;
    }

    /**
     * This implementation of the PUT operation adds an inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html
     */
    public putInventoryConfiguration () {
        this.add('s3:PutInventoryConfiguration');
        return this;
    }

    /**
     * Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html
     */
    public putLifecycleConfiguration () {
        this.add('s3:PutLifecycleConfiguration');
        return this;
    }

    /**
     * Sets or updates a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from the bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html
     */
    public putMetricsConfiguration () {
        this.add('s3:PutMetricsConfiguration');
        return this;
    }

    /**
     * Adds an object to a bucket.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
     */
    public putObject () {
        this.add('s3:PutObject');
        return this;
    }

    /**
     * Set the access control list (ACL) permissions for an object that already exists in a bucket.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
     */
    public putObjectAcl () {
        this.add('s3:PutObjectAcl');
        return this;
    }

    /**
     * PUT Object Legal Hold on a specific object
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
     */
    public putObjectLegalHold () {
        this.add('s3:PutObjectLegalHold');
        return this;
    }

    /**
     * PUT Object Retention on a specific object
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
     */
    public putObjectRetention () {
        this.add('s3:PutObjectRetention');
        return this;
    }

    /**
     * This implementation of the PUT operation uses the tagging subresource to add a set of tags to an existing object.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
     */
    public putObjectTagging () {
        this.add('s3:PutObjectTagging');
        return this;
    }

    /**
     * The ACL of an object is set at the object version level.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
     */
    public putObjectVersionAcl () {
        this.add('s3:PutObjectVersionAcl');
        return this;
    }

    /**
     * PUT Object tagging (for a Specific Version of the Object)
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
     */
    public putObjectVersionTagging () {
        this.add('s3:PutObjectVersionTagging');
        return this;
    }

    /**
     * In a versioning-enabled bucket, this operation creates a new replication configuration (or replaces an existing one, if present).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html
     */
    public putReplicationConfiguration () {
        this.add('s3:PutReplicationConfiguration');
        return this;
    }

    /**
     * Permission exercised by S3 replication
     *
     * Access Level: Write
     *
     *
     */
    public replicateDelete () {
        this.add('s3:ReplicateDelete');
        return this;
    }

    /**
     * Permission exercised by S3 replication
     *
     * Access Level: Write
     *
     *
     */
    public replicateObject () {
        this.add('s3:ReplicateObject');
        return this;
    }

    /**
     * Permission exercised by S3 replication
     *
     * Access Level: Tagging
     *
     *
     */
    public replicateTags () {
        this.add('s3:ReplicateTags');
        return this;
    }

    /**
     * Restores a temporary copy of an archived object.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
     */
    public restoreObject () {
        this.add('s3:RestoreObject');
        return this;
    }

    /**
     * Updates an existing job's priority.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html
     */
    public updateJobPriority () {
        this.add('s3:UpdateJobPriority');
        return this;
    }

    /**
     * Updates the status for the specified job.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html
     */
    public updateJobStatus () {
        this.add('s3:UpdateJobStatus');
        return this;
    }
}
