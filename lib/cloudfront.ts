import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service cloudfront
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudfront.html
 */
export class Cloudfront extends PolicyStatement {
    public servicePrefix = 'cloudfront';
    public actions : Actions = { "CreateCloudFrontOriginAccessIdentity": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateCloudFrontOriginAccessIdentity.html", "description": "This action creates a new CloudFront origin access identity (POST /2019-03-26/origin-access-identity/cloudfront).", "accessLevel": "Write", "resourceTypes": { "origin-access-identity": { "required": true } } }, "CreateDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateDistribution.html", "description": "This action creates a new web distribution (POST /2019-03-26/distribution).", "accessLevel": "Write", "resourceTypes": { "distribution": { "required": true } } }, "CreateDistributionWithTags": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateDistributionWithTags.html", "description": "This action creates a new web distribution with tags (POST /2019-03-26/distribution?WithTags).", "accessLevel": "Tagging", "resourceTypes": { "distribution": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateFieldLevelEncryptionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateFieldLevelEncryptionConfig.html", "description": "This action creates a new field-level encryption configuration. (POST /2019-03-26/field-level-encryption).", "accessLevel": "Write" }, "CreateFieldLevelEncryptionProfile": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateFieldLevelEncryptionProfile.html", "description": "This action creates a field-level encryption profile. (POST /2019-03-26/field-level-encryption-profile).", "accessLevel": "Write" }, "CreateInvalidation": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateInvalidation.html", "description": "This action creates a new invalidation batch request (POST /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation).", "accessLevel": "Write", "resourceTypes": { "distribution": { "required": true } } }, "CreatePublicKey": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreatePublicKey.html", "description": "This action adds a new public key to CloudFront. (POST /2019-03-26/public-key).", "accessLevel": "Write" }, "CreateStreamingDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateStreamingDistribution.html", "description": "This action creates a new RTMP distribution (POST /2019-03-26/streaming-distribution).", "accessLevel": "Write", "resourceTypes": { "streaming-distribution": { "required": true } } }, "CreateStreamingDistributionWithTags": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateStreamingDistributionWithTags.html", "description": "This action creates a new RTMP distribution with tags (POST /2019-03-26/streaming-distribution?WithTags).", "accessLevel": "Tagging", "resourceTypes": { "streaming-distribution": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteCloudFrontOriginAccessIdentity": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteCloudFrontOriginAccessIdentity.html", "description": "This action deletes a CloudFront origin access identity (DELETE /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>).", "accessLevel": "Write", "resourceTypes": { "origin-access-identity": { "required": true } } }, "DeleteDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteDistribution.html", "description": "This action deletes a web distribution (DELETE /2019-03-26/distribution/<DISTRIBUTION_ID>).", "accessLevel": "Write", "resourceTypes": { "distribution": { "required": true } } }, "DeleteFieldLevelEncryptionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteFieldLevelEncryptionConfig.html", "description": "This action deletes a field-level encryption configuration. (DELETE /2019-03-26/field-level-encryption/Id/<Id>).", "accessLevel": "Write" }, "DeleteFieldLevelEncryptionProfile": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteFieldLevelEncryptionProfile.html", "description": "This action deletes a field-level encryption profile. (DELETE /2019-03-26/field-level-encryption-profile/<Id>).", "accessLevel": "Write" }, "DeletePublicKey": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeletePublicKey.html", "description": "This action deletes a public key from CloudFront. (DELETE /2019-03-26/public-key/<Id>).", "accessLevel": "Write" }, "DeleteStreamingDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteStreamingDistribution.html", "description": "This action deletes an RTMP distribution (DELETE /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>).", "accessLevel": "Write", "resourceTypes": { "streaming-distribution": { "required": true } } }, "GetCloudFrontOriginAccessIdentity": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetCloudFrontOriginAccessIdentity.html", "description": "Get the information about a CloudFront origin access identity (GET /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>).", "accessLevel": "Read", "resourceTypes": { "origin-access-identity": { "required": true } } }, "GetCloudFrontOriginAccessIdentityConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetCloudFrontOriginAccessIdentityConfig.html", "description": "Get the configuration information about a Cloudfront origin access identity (GET /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>/config).", "accessLevel": "Read", "resourceTypes": { "origin-access-identity": { "required": true } } }, "GetDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetDistribution.html", "description": "Get the information about a web distribution (GET /2019-03-26/distribution/<DISTRIBUTION_ID>).", "accessLevel": "Read", "resourceTypes": { "distribution": { "required": true } } }, "GetDistributionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetDistributionConfig.html", "description": "Get the configuration information about a distribution (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/config).", "accessLevel": "Read", "resourceTypes": { "distribution": { "required": true } } }, "GetFieldLevelEncryption": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryption.html", "description": "Get the field-level encryption configuration information. (GET /2019-03-26/field-level-encryption/<Id>).", "accessLevel": "Read" }, "GetFieldLevelEncryptionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionConfig.html", "description": "Get the field-level encryption configuration information (GET /2019-03-26/field-level-encryption/<Id>/config).", "accessLevel": "Read" }, "GetFieldLevelEncryptionProfile": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionProfile.html", "description": "Get the field-level encryption configuration information (GET /2019-03-26/field-level-encryption/<Id>/config).", "accessLevel": "Read" }, "GetFieldLevelEncryptionProfileConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionProfileConfig.html", "description": "Get the field-level encryption profile configuration information (GET /2019-03-26/field-level-encryption-profile/<Id>/config).", "accessLevel": "Read" }, "GetInvalidation": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetInvalidation.html", "description": "Get the information about an invalidation (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation/<INVALIDATION_ID>).", "accessLevel": "Read", "resourceTypes": { "distribution": { "required": true } } }, "GetPublicKey": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetPublicKey.html", "description": "Get the public key information (GET /2019-03-26/public-key/<Id>).", "accessLevel": "Read" }, "GetPublicKeyConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetPublicKeyConfig.html", "description": "Get the public key configuration information (GET /2019-03-26/public-key/<Id>/config).", "accessLevel": "Read" }, "GetStreamingDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetStreamingDistribution.html", "description": "Get the information about an RTMP distribution (GET /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>).", "accessLevel": "Read", "resourceTypes": { "streaming-distribution": { "required": true } } }, "GetStreamingDistributionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetStreamingDistributionConfig.html", "description": "Get the configuration information about a streaming distribution (GET /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>/config).", "accessLevel": "Read", "resourceTypes": { "streaming-distribution": { "required": true } } }, "ListCloudFrontOriginAccessIdentities": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListCloudFrontOriginAccessIdentities.html", "description": "List your CloudFront origin access identities (GET /2019-03-26/origin-access-identity/cloudfront?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListDistributions": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListDistributions.html", "description": "List the distributions associated with your AWS account (GET /2019-03-26/distribution?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListDistributionsByLambdaFunction": { "url": "", "description": "List the distributions associated a Lambda function.", "accessLevel": "List" }, "ListDistributionsByWebACLId": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListDistributionsByWebACLId.html", "description": "List the distributions associated with your AWS account with given AWS WAF web ACL (GET /2019-03-26/distributionsByWebACLId/<WEB_ACL_ID>?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListFieldLevelEncryptionConfigs": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListFieldLevelEncryptionConfigs.html", "description": "List all field-level encryption configurations that have been created in CloudFront for this account (GET /2019-03-26/field-level-encryption?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListFieldLevelEncryptionProfiles": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListFieldLevelEncryptionProfiles.html", "description": "List all field-level encryption profiles that have been created in CloudFront for this account. (GET /2019-03-26/field-level-encryption-profile?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListInvalidations": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListInvalidations.html", "description": "List your invalidation batches (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List", "resourceTypes": { "distribution": { "required": true } } }, "ListPublicKeys": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListPublicKeys.html", "description": "List all public keys that have been added to CloudFront for this account. (GET /2019-03-26/public-key?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListStreamingDistributions": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListStreamingDistributions.html", "description": "List your RTMP distributions (GET /2019-03-26/streaming-distribution?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).", "accessLevel": "List" }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListTagsForResource.html", "description": "List tags for a CloudFront resource (GET /2019-03-26/tagging?Resource=<RESOURCE>).", "accessLevel": "Read", "resourceTypes": { "distribution": { "required": false }, "streaming-distribution": { "required": false } } }, "TagResource": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_TagResource.html", "description": "Add tags to a CloudFront resource (POST /2019-03-26/tagging?Operation=Tag?Resource=<RESOURCE>).", "accessLevel": "Tagging", "resourceTypes": { "distribution": { "required": false }, "streaming-distribution": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UntagResource.html", "description": "Remove tags from a CloudFront resource (POST /2019-03-26/tagging?Operation=Untag?Resource=<RESOURCE>).", "accessLevel": "Tagging", "resourceTypes": { "distribution": { "required": false }, "streaming-distribution": { "required": false } }, "conditions": ["aws:TagKeys"] }, "UpdateCloudFrontOriginAccessIdentity": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateCloudFrontOriginAccessIdentity.html", "description": "This action sets the configuration for a CloudFront origin access identity (PUT /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>/config).", "accessLevel": "Write", "resourceTypes": { "origin-access-identity": { "required": true } } }, "UpdateDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateDistribution.html", "description": "This action updates the configuration for a web distribution (PUT /2019-03-26/distribution/<DISTRIBUTION_ID>/config).", "accessLevel": "Write", "resourceTypes": { "distribution": { "required": true } } }, "UpdateFieldLevelEncryptionConfig": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateFieldLevelEncryptionConfig.html", "description": "This action updates a field-level encryption configuration. (PUT /2019-03-26/field-level-encryption/<Id>/config).", "accessLevel": "Write" }, "UpdateFieldLevelEncryptionProfile": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateFieldLevelEncryptionProfile.html", "description": "This action updates a field-level encryption profile. (PUT /2019-03-26/field-level-encryption-profile/<Id>/config).", "accessLevel": "Write" }, "UpdatePublicKey": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdatePublicKey.html", "description": "This action updates public key information. (PUT /2019-03-26/public-key/<Id>/config).", "accessLevel": "Write" }, "UpdateStreamingDistribution": { "url": "https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateStreamingDistribution.html", "description": "This action updates the configuration for an RTMP distribution (PUT /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>/config).", "accessLevel": "Write", "resourceTypes": { "streaming-distribution": { "required": true } } } };

    /**
     * This action creates a new CloudFront origin access identity (POST /2019-03-26/origin-access-identity/cloudfront).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateCloudFrontOriginAccessIdentity.html
     */
    public createCloudFrontOriginAccessIdentity () {
        this.add('cloudfront:CreateCloudFrontOriginAccessIdentity');
        return this;
    }

    /**
     * This action creates a new web distribution (POST /2019-03-26/distribution).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateDistribution.html
     */
    public createDistribution () {
        this.add('cloudfront:CreateDistribution');
        return this;
    }

    /**
     * This action creates a new web distribution with tags (POST /2019-03-26/distribution?WithTags).
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateDistributionWithTags.html
     */
    public createDistributionWithTags () {
        this.add('cloudfront:CreateDistributionWithTags');
        return this;
    }

    /**
     * This action creates a new field-level encryption configuration. (POST /2019-03-26/field-level-encryption).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateFieldLevelEncryptionConfig.html
     */
    public createFieldLevelEncryptionConfig () {
        this.add('cloudfront:CreateFieldLevelEncryptionConfig');
        return this;
    }

    /**
     * This action creates a field-level encryption profile. (POST /2019-03-26/field-level-encryption-profile).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateFieldLevelEncryptionProfile.html
     */
    public createFieldLevelEncryptionProfile () {
        this.add('cloudfront:CreateFieldLevelEncryptionProfile');
        return this;
    }

    /**
     * This action creates a new invalidation batch request (POST /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateInvalidation.html
     */
    public createInvalidation () {
        this.add('cloudfront:CreateInvalidation');
        return this;
    }

    /**
     * This action adds a new public key to CloudFront. (POST /2019-03-26/public-key).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreatePublicKey.html
     */
    public createPublicKey () {
        this.add('cloudfront:CreatePublicKey');
        return this;
    }

    /**
     * This action creates a new RTMP distribution (POST /2019-03-26/streaming-distribution).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateStreamingDistribution.html
     */
    public createStreamingDistribution () {
        this.add('cloudfront:CreateStreamingDistribution');
        return this;
    }

    /**
     * This action creates a new RTMP distribution with tags (POST /2019-03-26/streaming-distribution?WithTags).
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_CreateStreamingDistributionWithTags.html
     */
    public createStreamingDistributionWithTags () {
        this.add('cloudfront:CreateStreamingDistributionWithTags');
        return this;
    }

    /**
     * This action deletes a CloudFront origin access identity (DELETE /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteCloudFrontOriginAccessIdentity.html
     */
    public deleteCloudFrontOriginAccessIdentity () {
        this.add('cloudfront:DeleteCloudFrontOriginAccessIdentity');
        return this;
    }

    /**
     * This action deletes a web distribution (DELETE /2019-03-26/distribution/<DISTRIBUTION_ID>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteDistribution.html
     */
    public deleteDistribution () {
        this.add('cloudfront:DeleteDistribution');
        return this;
    }

    /**
     * This action deletes a field-level encryption configuration. (DELETE /2019-03-26/field-level-encryption/Id/<Id>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteFieldLevelEncryptionConfig.html
     */
    public deleteFieldLevelEncryptionConfig () {
        this.add('cloudfront:DeleteFieldLevelEncryptionConfig');
        return this;
    }

    /**
     * This action deletes a field-level encryption profile. (DELETE /2019-03-26/field-level-encryption-profile/<Id>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteFieldLevelEncryptionProfile.html
     */
    public deleteFieldLevelEncryptionProfile () {
        this.add('cloudfront:DeleteFieldLevelEncryptionProfile');
        return this;
    }

    /**
     * This action deletes a public key from CloudFront. (DELETE /2019-03-26/public-key/<Id>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeletePublicKey.html
     */
    public deletePublicKey () {
        this.add('cloudfront:DeletePublicKey');
        return this;
    }

    /**
     * This action deletes an RTMP distribution (DELETE /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_DeleteStreamingDistribution.html
     */
    public deleteStreamingDistribution () {
        this.add('cloudfront:DeleteStreamingDistribution');
        return this;
    }

    /**
     * Get the information about a CloudFront origin access identity (GET /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetCloudFrontOriginAccessIdentity.html
     */
    public getCloudFrontOriginAccessIdentity () {
        this.add('cloudfront:GetCloudFrontOriginAccessIdentity');
        return this;
    }

    /**
     * Get the configuration information about a Cloudfront origin access identity (GET /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetCloudFrontOriginAccessIdentityConfig.html
     */
    public getCloudFrontOriginAccessIdentityConfig () {
        this.add('cloudfront:GetCloudFrontOriginAccessIdentityConfig');
        return this;
    }

    /**
     * Get the information about a web distribution (GET /2019-03-26/distribution/<DISTRIBUTION_ID>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetDistribution.html
     */
    public getDistribution () {
        this.add('cloudfront:GetDistribution');
        return this;
    }

    /**
     * Get the configuration information about a distribution (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetDistributionConfig.html
     */
    public getDistributionConfig () {
        this.add('cloudfront:GetDistributionConfig');
        return this;
    }

    /**
     * Get the field-level encryption configuration information. (GET /2019-03-26/field-level-encryption/<Id>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryption.html
     */
    public getFieldLevelEncryption () {
        this.add('cloudfront:GetFieldLevelEncryption');
        return this;
    }

    /**
     * Get the field-level encryption configuration information (GET /2019-03-26/field-level-encryption/<Id>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionConfig.html
     */
    public getFieldLevelEncryptionConfig () {
        this.add('cloudfront:GetFieldLevelEncryptionConfig');
        return this;
    }

    /**
     * Get the field-level encryption configuration information (GET /2019-03-26/field-level-encryption/<Id>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionProfile.html
     */
    public getFieldLevelEncryptionProfile () {
        this.add('cloudfront:GetFieldLevelEncryptionProfile');
        return this;
    }

    /**
     * Get the field-level encryption profile configuration information (GET /2019-03-26/field-level-encryption-profile/<Id>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetFieldLevelEncryptionProfileConfig.html
     */
    public getFieldLevelEncryptionProfileConfig () {
        this.add('cloudfront:GetFieldLevelEncryptionProfileConfig');
        return this;
    }

    /**
     * Get the information about an invalidation (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation/<INVALIDATION_ID>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetInvalidation.html
     */
    public getInvalidation () {
        this.add('cloudfront:GetInvalidation');
        return this;
    }

    /**
     * Get the public key information (GET /2019-03-26/public-key/<Id>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetPublicKey.html
     */
    public getPublicKey () {
        this.add('cloudfront:GetPublicKey');
        return this;
    }

    /**
     * Get the public key configuration information (GET /2019-03-26/public-key/<Id>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetPublicKeyConfig.html
     */
    public getPublicKeyConfig () {
        this.add('cloudfront:GetPublicKeyConfig');
        return this;
    }

    /**
     * Get the information about an RTMP distribution (GET /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetStreamingDistribution.html
     */
    public getStreamingDistribution () {
        this.add('cloudfront:GetStreamingDistribution');
        return this;
    }

    /**
     * Get the configuration information about a streaming distribution (GET /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>/config).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_GetStreamingDistributionConfig.html
     */
    public getStreamingDistributionConfig () {
        this.add('cloudfront:GetStreamingDistributionConfig');
        return this;
    }

    /**
     * List your CloudFront origin access identities (GET /2019-03-26/origin-access-identity/cloudfront?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListCloudFrontOriginAccessIdentities.html
     */
    public listCloudFrontOriginAccessIdentities () {
        this.add('cloudfront:ListCloudFrontOriginAccessIdentities');
        return this;
    }

    /**
     * List the distributions associated with your AWS account (GET /2019-03-26/distribution?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListDistributions.html
     */
    public listDistributions () {
        this.add('cloudfront:ListDistributions');
        return this;
    }

    /**
     * List the distributions associated a Lambda function.
     *
     * Access Level: List
     *
     *
     */
    public listDistributionsByLambdaFunction () {
        this.add('cloudfront:ListDistributionsByLambdaFunction');
        return this;
    }

    /**
     * List the distributions associated with your AWS account with given AWS WAF web ACL (GET /2019-03-26/distributionsByWebACLId/<WEB_ACL_ID>?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListDistributionsByWebACLId.html
     */
    public listDistributionsByWebACLId () {
        this.add('cloudfront:ListDistributionsByWebACLId');
        return this;
    }

    /**
     * List all field-level encryption configurations that have been created in CloudFront for this account (GET /2019-03-26/field-level-encryption?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListFieldLevelEncryptionConfigs.html
     */
    public listFieldLevelEncryptionConfigs () {
        this.add('cloudfront:ListFieldLevelEncryptionConfigs');
        return this;
    }

    /**
     * List all field-level encryption profiles that have been created in CloudFront for this account. (GET /2019-03-26/field-level-encryption-profile?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListFieldLevelEncryptionProfiles.html
     */
    public listFieldLevelEncryptionProfiles () {
        this.add('cloudfront:ListFieldLevelEncryptionProfiles');
        return this;
    }

    /**
     * List your invalidation batches (GET /2019-03-26/distribution/<DISTRIBUTION_ID>/invalidation?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListInvalidations.html
     */
    public listInvalidations () {
        this.add('cloudfront:ListInvalidations');
        return this;
    }

    /**
     * List all public keys that have been added to CloudFront for this account. (GET /2019-03-26/public-key?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListPublicKeys.html
     */
    public listPublicKeys () {
        this.add('cloudfront:ListPublicKeys');
        return this;
    }

    /**
     * List your RTMP distributions (GET /2019-03-26/streaming-distribution?Marker=<MARKER>&MaxItems=<MAX_ITEMS>).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListStreamingDistributions.html
     */
    public listStreamingDistributions () {
        this.add('cloudfront:ListStreamingDistributions');
        return this;
    }

    /**
     * List tags for a CloudFront resource (GET /2019-03-26/tagging?Resource=<RESOURCE>).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('cloudfront:ListTagsForResource');
        return this;
    }

    /**
     * Add tags to a CloudFront resource (POST /2019-03-26/tagging?Operation=Tag?Resource=<RESOURCE>).
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_TagResource.html
     */
    public tagResource () {
        this.add('cloudfront:TagResource');
        return this;
    }

    /**
     * Remove tags from a CloudFront resource (POST /2019-03-26/tagging?Operation=Untag?Resource=<RESOURCE>).
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UntagResource.html
     */
    public untagResource () {
        this.add('cloudfront:UntagResource');
        return this;
    }

    /**
     * This action sets the configuration for a CloudFront origin access identity (PUT /2019-03-26/origin-access-identity/cloudfront/<OAI_ID>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateCloudFrontOriginAccessIdentity.html
     */
    public updateCloudFrontOriginAccessIdentity () {
        this.add('cloudfront:UpdateCloudFrontOriginAccessIdentity');
        return this;
    }

    /**
     * This action updates the configuration for a web distribution (PUT /2019-03-26/distribution/<DISTRIBUTION_ID>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateDistribution.html
     */
    public updateDistribution () {
        this.add('cloudfront:UpdateDistribution');
        return this;
    }

    /**
     * This action updates a field-level encryption configuration. (PUT /2019-03-26/field-level-encryption/<Id>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateFieldLevelEncryptionConfig.html
     */
    public updateFieldLevelEncryptionConfig () {
        this.add('cloudfront:UpdateFieldLevelEncryptionConfig');
        return this;
    }

    /**
     * This action updates a field-level encryption profile. (PUT /2019-03-26/field-level-encryption-profile/<Id>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateFieldLevelEncryptionProfile.html
     */
    public updateFieldLevelEncryptionProfile () {
        this.add('cloudfront:UpdateFieldLevelEncryptionProfile');
        return this;
    }

    /**
     * This action updates public key information. (PUT /2019-03-26/public-key/<Id>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdatePublicKey.html
     */
    public updatePublicKey () {
        this.add('cloudfront:UpdatePublicKey');
        return this;
    }

    /**
     * This action updates the configuration for an RTMP distribution (PUT /2019-03-26/streaming-distribution/<DISTRIBUTION_ID>/config).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_Operations.html/API_UpdateStreamingDistribution.html
     */
    public updateStreamingDistribution () {
        this.add('cloudfront:UpdateStreamingDistribution');
        return this;
    }
}
