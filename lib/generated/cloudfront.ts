import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cloudfront](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudfront extends PolicyStatement {
  public servicePrefix = 'cloudfront';

  /**
   * Statement provider for service [cloudfront](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * This action adds a new cache policy to CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html
   */
  public toCreateCachePolicy() {
    this.to('cloudfront:CreateCachePolicy');
    return this;
  }

  /**
   * This action creates a new CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html
   */
  public toCreateCloudFrontOriginAccessIdentity() {
    this.to('cloudfront:CreateCloudFrontOriginAccessIdentity');
    return this;
  }

  /**
   * This action creates a new web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html
   */
  public toCreateDistribution() {
    this.to('cloudfront:CreateDistribution');
    return this;
  }

  /**
   * This action creates a new web distribution with tags.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistributionWithTags.html
   */
  public toCreateDistributionWithTags() {
    this.to('cloudfront:CreateDistributionWithTags');
    return this;
  }

  /**
   * This action creates a new field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html
   */
  public toCreateFieldLevelEncryptionConfig() {
    this.to('cloudfront:CreateFieldLevelEncryptionConfig');
    return this;
  }

  /**
   * This action creates a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html
   */
  public toCreateFieldLevelEncryptionProfile() {
    this.to('cloudfront:CreateFieldLevelEncryptionProfile');
    return this;
  }

  /**
   * This action creates a new invalidation batch request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html
   */
  public toCreateInvalidation() {
    this.to('cloudfront:CreateInvalidation');
    return this;
  }

  /**
   * This action adds a new origin request policy to CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html
   */
  public toCreateOriginRequestPolicy() {
    this.to('cloudfront:CreateOriginRequestPolicy');
    return this;
  }

  /**
   * This action adds a new public key to CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html
   */
  public toCreatePublicKey() {
    this.to('cloudfront:CreatePublicKey');
    return this;
  }

  /**
   * This action creates a new RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html
   */
  public toCreateStreamingDistribution() {
    this.to('cloudfront:CreateStreamingDistribution');
    return this;
  }

  /**
   * This action creates a new RTMP distribution with tags.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html
   */
  public toCreateStreamingDistributionWithTags() {
    this.to('cloudfront:CreateStreamingDistributionWithTags');
    return this;
  }

  /**
   * This action deletes a cache policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html
   */
  public toDeleteCachePolicy() {
    this.to('cloudfront:DeleteCachePolicy');
    return this;
  }

  /**
   * This action deletes a CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html
   */
  public toDeleteCloudFrontOriginAccessIdentity() {
    this.to('cloudfront:DeleteCloudFrontOriginAccessIdentity');
    return this;
  }

  /**
   * This action deletes a web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html
   */
  public toDeleteDistribution() {
    this.to('cloudfront:DeleteDistribution');
    return this;
  }

  /**
   * This action deletes a field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html
   */
  public toDeleteFieldLevelEncryptionConfig() {
    this.to('cloudfront:DeleteFieldLevelEncryptionConfig');
    return this;
  }

  /**
   * This action deletes a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html
   */
  public toDeleteFieldLevelEncryptionProfile() {
    this.to('cloudfront:DeleteFieldLevelEncryptionProfile');
    return this;
  }

  /**
   * This action deletes an origin request policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html
   */
  public toDeleteOriginRequestPolicy() {
    this.to('cloudfront:DeleteOriginRequestPolicy');
    return this;
  }

  /**
   * This action deletes a public key from CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html
   */
  public toDeletePublicKey() {
    this.to('cloudfront:DeletePublicKey');
    return this;
  }

  /**
   * This action deletes an RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html
   */
  public toDeleteStreamingDistribution() {
    this.to('cloudfront:DeleteStreamingDistribution');
    return this;
  }

  /**
   * Get the cache policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html
   */
  public toGetCachePolicy() {
    this.to('cloudfront:GetCachePolicy');
    return this;
  }

  /**
   * Get the cache policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html
   */
  public toGetCachePolicyConfig() {
    this.to('cloudfront:GetCachePolicyConfig');
    return this;
  }

  /**
   * Get the information about a CloudFront origin access identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html
   */
  public toGetCloudFrontOriginAccessIdentity() {
    this.to('cloudfront:GetCloudFrontOriginAccessIdentity');
    return this;
  }

  /**
   * Get the configuration information about a Cloudfront origin access identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html
   */
  public toGetCloudFrontOriginAccessIdentityConfig() {
    this.to('cloudfront:GetCloudFrontOriginAccessIdentityConfig');
    return this;
  }

  /**
   * Get the information about a web distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html
   */
  public toGetDistribution() {
    this.to('cloudfront:GetDistribution');
    return this;
  }

  /**
   * Get the configuration information about a distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html
   */
  public toGetDistributionConfig() {
    this.to('cloudfront:GetDistributionConfig');
    return this;
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html
   */
  public toGetFieldLevelEncryption() {
    this.to('cloudfront:GetFieldLevelEncryption');
    return this;
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html
   */
  public toGetFieldLevelEncryptionConfig() {
    this.to('cloudfront:GetFieldLevelEncryptionConfig');
    return this;
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html
   */
  public toGetFieldLevelEncryptionProfile() {
    this.to('cloudfront:GetFieldLevelEncryptionProfile');
    return this;
  }

  /**
   * Get the field-level encryption profile configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html
   */
  public toGetFieldLevelEncryptionProfileConfig() {
    this.to('cloudfront:GetFieldLevelEncryptionProfileConfig');
    return this;
  }

  /**
   * Get the information about an invalidation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html
   */
  public toGetInvalidation() {
    this.to('cloudfront:GetInvalidation');
    return this;
  }

  /**
   * Get the origin request policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html
   */
  public toGetOriginRequestPolicy() {
    this.to('cloudfront:GetOriginRequestPolicy');
    return this;
  }

  /**
   * Get the origin request policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html
   */
  public toGetOriginRequestPolicyConfig() {
    this.to('cloudfront:GetOriginRequestPolicyConfig');
    return this;
  }

  /**
   * Get the public key information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    this.to('cloudfront:GetPublicKey');
    return this;
  }

  /**
   * Get the public key configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html
   */
  public toGetPublicKeyConfig() {
    this.to('cloudfront:GetPublicKeyConfig');
    return this;
  }

  /**
   * Get the information about an RTMP distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html
   */
  public toGetStreamingDistribution() {
    this.to('cloudfront:GetStreamingDistribution');
    return this;
  }

  /**
   * Get the configuration information about a streaming distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html
   */
  public toGetStreamingDistributionConfig() {
    this.to('cloudfront:GetStreamingDistributionConfig');
    return this;
  }

  /**
   * List all cache policies that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html
   */
  public toListCachePolicies() {
    this.to('cloudfront:ListCachePolicies');
    return this;
  }

  /**
   * List your CloudFront origin access identities.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html
   */
  public toListCloudFrontOriginAccessIdentities() {
    this.to('cloudfront:ListCloudFrontOriginAccessIdentities');
    return this;
  }

  /**
   * List the distributions associated with your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html
   */
  public toListDistributions() {
    this.to('cloudfront:ListDistributions');
    return this;
  }

  /**
   * List distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html
   */
  public toListDistributionsByCachePolicyId() {
    this.to('cloudfront:ListDistributionsByCachePolicyId');
    return this;
  }

  /**
   * List distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html
   */
  public toListDistributionsByOriginRequestPolicyId() {
    this.to('cloudfront:ListDistributionsByOriginRequestPolicyId');
    return this;
  }

  /**
   * List the distributions associated with your AWS account with given AWS WAF web ACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html
   */
  public toListDistributionsByWebACLId() {
    this.to('cloudfront:ListDistributionsByWebACLId');
    return this;
  }

  /**
   * List all field-level encryption configurations that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html
   */
  public toListFieldLevelEncryptionConfigs() {
    this.to('cloudfront:ListFieldLevelEncryptionConfigs');
    return this;
  }

  /**
   * List all field-level encryption profiles that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html
   */
  public toListFieldLevelEncryptionProfiles() {
    this.to('cloudfront:ListFieldLevelEncryptionProfiles');
    return this;
  }

  /**
   * List your invalidation batches.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html
   */
  public toListInvalidations() {
    this.to('cloudfront:ListInvalidations');
    return this;
  }

  /**
   * List all origin request policies that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html
   */
  public toListOriginRequestPolicies() {
    this.to('cloudfront:ListOriginRequestPolicies');
    return this;
  }

  /**
   * List all public keys that have been added to CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    this.to('cloudfront:ListPublicKeys');
    return this;
  }

  /**
   * List your RTMP distributions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html
   */
  public toListStreamingDistributions() {
    this.to('cloudfront:ListStreamingDistributions');
    return this;
  }

  /**
   * List tags for a CloudFront resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('cloudfront:ListTagsForResource');
    return this;
  }

  /**
   * Add tags to a CloudFront resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('cloudfront:TagResource');
    return this;
  }

  /**
   * Remove tags from a CloudFront resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('cloudfront:UntagResource');
    return this;
  }

  /**
   * This action updates a cache policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html
   */
  public toUpdateCachePolicy() {
    this.to('cloudfront:UpdateCachePolicy');
    return this;
  }

  /**
   * This action sets the configuration for a CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html
   */
  public toUpdateCloudFrontOriginAccessIdentity() {
    this.to('cloudfront:UpdateCloudFrontOriginAccessIdentity');
    return this;
  }

  /**
   * This action updates the configuration for a web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html
   */
  public toUpdateDistribution() {
    this.to('cloudfront:UpdateDistribution');
    return this;
  }

  /**
   * This action updates a field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html
   */
  public toUpdateFieldLevelEncryptionConfig() {
    this.to('cloudfront:UpdateFieldLevelEncryptionConfig');
    return this;
  }

  /**
   * This action updates a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html
   */
  public toUpdateFieldLevelEncryptionProfile() {
    this.to('cloudfront:UpdateFieldLevelEncryptionProfile');
    return this;
  }

  /**
   * This action updates an origin request policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html
   */
  public toUpdateOriginRequestPolicy() {
    this.to('cloudfront:UpdateOriginRequestPolicy');
    return this;
  }

  /**
   * This action updates public key information.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html
   */
  public toUpdatePublicKey() {
    this.to('cloudfront:UpdatePublicKey');
    return this;
  }

  /**
   * This action updates the configuration for an RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html
   */
  public toUpdateStreamingDistribution() {
    this.to('cloudfront:UpdateStreamingDistribution');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCachePolicy",
      "CreateCloudFrontOriginAccessIdentity",
      "CreateDistribution",
      "CreateFieldLevelEncryptionConfig",
      "CreateFieldLevelEncryptionProfile",
      "CreateInvalidation",
      "CreateOriginRequestPolicy",
      "CreatePublicKey",
      "CreateStreamingDistribution",
      "DeleteCachePolicy",
      "DeleteCloudFrontOriginAccessIdentity",
      "DeleteDistribution",
      "DeleteFieldLevelEncryptionConfig",
      "DeleteFieldLevelEncryptionProfile",
      "DeleteOriginRequestPolicy",
      "DeletePublicKey",
      "DeleteStreamingDistribution",
      "UpdateCachePolicy",
      "UpdateCloudFrontOriginAccessIdentity",
      "UpdateDistribution",
      "UpdateFieldLevelEncryptionConfig",
      "UpdateFieldLevelEncryptionProfile",
      "UpdateOriginRequestPolicy",
      "UpdatePublicKey",
      "UpdateStreamingDistribution"
    ],
    "Tagging": [
      "CreateDistributionWithTags",
      "CreateStreamingDistributionWithTags",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetCachePolicy",
      "GetCachePolicyConfig",
      "GetCloudFrontOriginAccessIdentity",
      "GetCloudFrontOriginAccessIdentityConfig",
      "GetDistribution",
      "GetDistributionConfig",
      "GetFieldLevelEncryption",
      "GetFieldLevelEncryptionConfig",
      "GetFieldLevelEncryptionProfile",
      "GetFieldLevelEncryptionProfileConfig",
      "GetInvalidation",
      "GetOriginRequestPolicy",
      "GetOriginRequestPolicyConfig",
      "GetPublicKey",
      "GetPublicKeyConfig",
      "GetStreamingDistribution",
      "GetStreamingDistributionConfig",
      "ListTagsForResource"
    ],
    "List": [
      "ListCachePolicies",
      "ListCloudFrontOriginAccessIdentities",
      "ListDistributions",
      "ListDistributionsByCachePolicyId",
      "ListDistributionsByOriginRequestPolicyId",
      "ListDistributionsByWebACLId",
      "ListFieldLevelEncryptionConfigs",
      "ListFieldLevelEncryptionProfiles",
      "ListInvalidations",
      "ListOriginRequestPolicies",
      "ListPublicKeys",
      "ListStreamingDistributions"
    ]
  };

  /**
   * Adds a resource of type distribution to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   *
   * @param distributionId - Identifier for the distributionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDistribution(distributionId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:distribution/${DistributionId}';
    arn = arn.replace('${DistributionId}', distributionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type streaming-distribution to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   *
   * @param distributionId - Identifier for the distributionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamingDistribution(distributionId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:streaming-distribution/${DistributionId}';
    arn = arn.replace('${DistributionId}', distributionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type origin-access-identity to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-overview
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOriginAccessIdentity(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:origin-access-identity/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type field-level-encryption to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFieldLevelEncryption(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:field-level-encryption/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type field-level-encryption-profile to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFieldLevelEncryptionProfile(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:field-level-encryption-profile/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cache-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCachePolicy(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:cache-policy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type origin-request-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOriginRequestPolicy(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:origin-request-policy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
