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
    return this.to('CreateCachePolicy');
  }

  /**
   * This action creates a new CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html
   */
  public toCreateCloudFrontOriginAccessIdentity() {
    return this.to('CreateCloudFrontOriginAccessIdentity');
  }

  /**
   * This action creates a new web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html
   */
  public toCreateDistribution() {
    return this.to('CreateDistribution');
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
    return this.to('CreateDistributionWithTags');
  }

  /**
   * This action creates a new field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html
   */
  public toCreateFieldLevelEncryptionConfig() {
    return this.to('CreateFieldLevelEncryptionConfig');
  }

  /**
   * This action creates a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html
   */
  public toCreateFieldLevelEncryptionProfile() {
    return this.to('CreateFieldLevelEncryptionProfile');
  }

  /**
   * This action creates a new invalidation batch request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html
   */
  public toCreateInvalidation() {
    return this.to('CreateInvalidation');
  }

  /**
   * This action adds a new key group to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html
   */
  public toCreateKeyGroup() {
    return this.to('CreateKeyGroup');
  }

  /**
   * This action enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html
   */
  public toCreateMonitoringSubscription() {
    return this.to('CreateMonitoringSubscription');
  }

  /**
   * This action adds a new origin request policy to CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html
   */
  public toCreateOriginRequestPolicy() {
    return this.to('CreateOriginRequestPolicy');
  }

  /**
   * This action adds a new public key to CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html
   */
  public toCreatePublicKey() {
    return this.to('CreatePublicKey');
  }

  /**
   * This action creates a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html
   */
  public toCreateRealtimeLogConfig() {
    return this.to('CreateRealtimeLogConfig');
  }

  /**
   * This action creates a new RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html
   */
  public toCreateStreamingDistribution() {
    return this.to('CreateStreamingDistribution');
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
    return this.to('CreateStreamingDistributionWithTags');
  }

  /**
   * This action deletes a cache policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html
   */
  public toDeleteCachePolicy() {
    return this.to('DeleteCachePolicy');
  }

  /**
   * This action deletes a CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html
   */
  public toDeleteCloudFrontOriginAccessIdentity() {
    return this.to('DeleteCloudFrontOriginAccessIdentity');
  }

  /**
   * This action deletes a web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html
   */
  public toDeleteDistribution() {
    return this.to('DeleteDistribution');
  }

  /**
   * This action deletes a field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html
   */
  public toDeleteFieldLevelEncryptionConfig() {
    return this.to('DeleteFieldLevelEncryptionConfig');
  }

  /**
   * This action deletes a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html
   */
  public toDeleteFieldLevelEncryptionProfile() {
    return this.to('DeleteFieldLevelEncryptionProfile');
  }

  /**
   * This action deletes a key group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html
   */
  public toDeleteKeyGroup() {
    return this.to('DeleteKeyGroup');
  }

  /**
   * This action disables additional CloudWatch metrics for the specified CloudFront distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html
   */
  public toDeleteMonitoringSubscription() {
    return this.to('DeleteMonitoringSubscription');
  }

  /**
   * This action deletes an origin request policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html
   */
  public toDeleteOriginRequestPolicy() {
    return this.to('DeleteOriginRequestPolicy');
  }

  /**
   * This action deletes a public key from CloudFront.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html
   */
  public toDeletePublicKey() {
    return this.to('DeletePublicKey');
  }

  /**
   * This action deletes a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html
   */
  public toDeleteRealtimeLogConfig() {
    return this.to('DeleteRealtimeLogConfig');
  }

  /**
   * This action deletes an RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html
   */
  public toDeleteStreamingDistribution() {
    return this.to('DeleteStreamingDistribution');
  }

  /**
   * Get the cache policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html
   */
  public toGetCachePolicy() {
    return this.to('GetCachePolicy');
  }

  /**
   * Get the cache policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html
   */
  public toGetCachePolicyConfig() {
    return this.to('GetCachePolicyConfig');
  }

  /**
   * Get the information about a CloudFront origin access identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html
   */
  public toGetCloudFrontOriginAccessIdentity() {
    return this.to('GetCloudFrontOriginAccessIdentity');
  }

  /**
   * Get the configuration information about a Cloudfront origin access identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html
   */
  public toGetCloudFrontOriginAccessIdentityConfig() {
    return this.to('GetCloudFrontOriginAccessIdentityConfig');
  }

  /**
   * Get the information about a web distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html
   */
  public toGetDistribution() {
    return this.to('GetDistribution');
  }

  /**
   * Get the configuration information about a distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html
   */
  public toGetDistributionConfig() {
    return this.to('GetDistributionConfig');
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html
   */
  public toGetFieldLevelEncryption() {
    return this.to('GetFieldLevelEncryption');
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html
   */
  public toGetFieldLevelEncryptionConfig() {
    return this.to('GetFieldLevelEncryptionConfig');
  }

  /**
   * Get the field-level encryption configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html
   */
  public toGetFieldLevelEncryptionProfile() {
    return this.to('GetFieldLevelEncryptionProfile');
  }

  /**
   * Get the field-level encryption profile configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html
   */
  public toGetFieldLevelEncryptionProfileConfig() {
    return this.to('GetFieldLevelEncryptionProfileConfig');
  }

  /**
   * Get the information about an invalidation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html
   */
  public toGetInvalidation() {
    return this.to('GetInvalidation');
  }

  /**
   * This action gets a key group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html
   */
  public toGetKeyGroup() {
    return this.to('GetKeyGroup');
  }

  /**
   * This action gets a key group configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html
   */
  public toGetKeyGroupConfig() {
    return this.to('GetKeyGroupConfig');
  }

  /**
   * This action gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html
   */
  public toGetMonitoringSubscription() {
    return this.to('GetMonitoringSubscription');
  }

  /**
   * Get the origin request policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html
   */
  public toGetOriginRequestPolicy() {
    return this.to('GetOriginRequestPolicy');
  }

  /**
   * Get the origin request policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html
   */
  public toGetOriginRequestPolicyConfig() {
    return this.to('GetOriginRequestPolicyConfig');
  }

  /**
   * Get the public key information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    return this.to('GetPublicKey');
  }

  /**
   * Get the public key configuration information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html
   */
  public toGetPublicKeyConfig() {
    return this.to('GetPublicKeyConfig');
  }

  /**
   * This action gets a real-time log configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html
   */
  public toGetRealtimeLogConfig() {
    return this.to('GetRealtimeLogConfig');
  }

  /**
   * Get the information about an RTMP distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html
   */
  public toGetStreamingDistribution() {
    return this.to('GetStreamingDistribution');
  }

  /**
   * Get the configuration information about a streaming distribution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html
   */
  public toGetStreamingDistributionConfig() {
    return this.to('GetStreamingDistributionConfig');
  }

  /**
   * List all cache policies that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html
   */
  public toListCachePolicies() {
    return this.to('ListCachePolicies');
  }

  /**
   * List your CloudFront origin access identities.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html
   */
  public toListCloudFrontOriginAccessIdentities() {
    return this.to('ListCloudFrontOriginAccessIdentities');
  }

  /**
   * List the distributions associated with your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html
   */
  public toListDistributions() {
    return this.to('ListDistributions');
  }

  /**
   * List distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html
   */
  public toListDistributionsByCachePolicyId() {
    return this.to('ListDistributionsByCachePolicyId');
  }

  /**
   * This action lists distribution IDs for distributions that have a cache behavior that's associated with the specified key group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html
   */
  public toListDistributionsByKeyGroup() {
    return this.to('ListDistributionsByKeyGroup');
  }

  /**
   * List distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html
   */
  public toListDistributionsByOriginRequestPolicyId() {
    return this.to('ListDistributionsByOriginRequestPolicyId');
  }

  /**
   * This action gets a list of distributions that have a cache behavior that’s associated with the specified real-time log configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html
   */
  public toListDistributionsByRealtimeLogConfig() {
    return this.to('ListDistributionsByRealtimeLogConfig');
  }

  /**
   * List the distributions associated with your AWS account with given AWS WAF web ACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html
   */
  public toListDistributionsByWebACLId() {
    return this.to('ListDistributionsByWebACLId');
  }

  /**
   * List all field-level encryption configurations that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html
   */
  public toListFieldLevelEncryptionConfigs() {
    return this.to('ListFieldLevelEncryptionConfigs');
  }

  /**
   * List all field-level encryption profiles that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html
   */
  public toListFieldLevelEncryptionProfiles() {
    return this.to('ListFieldLevelEncryptionProfiles');
  }

  /**
   * List your invalidation batches.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html
   */
  public toListInvalidations() {
    return this.to('ListInvalidations');
  }

  /**
   * This action lists all key groups that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html
   */
  public toListKeyGroups() {
    return this.to('ListKeyGroups');
  }

  /**
   * List all origin request policies that have been created in CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html
   */
  public toListOriginRequestPolicies() {
    return this.to('ListOriginRequestPolicies');
  }

  /**
   * List all public keys that have been added to CloudFront for this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    return this.to('ListPublicKeys');
  }

  /**
   * This action gets a list of real-time log configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html
   */
  public toListRealtimeLogConfigs() {
    return this.to('ListRealtimeLogConfigs');
  }

  /**
   * List your RTMP distributions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html
   */
  public toListStreamingDistributions() {
    return this.to('ListStreamingDistributions');
  }

  /**
   * List tags for a CloudFront resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * This action updates a cache policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html
   */
  public toUpdateCachePolicy() {
    return this.to('UpdateCachePolicy');
  }

  /**
   * This action sets the configuration for a CloudFront origin access identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html
   */
  public toUpdateCloudFrontOriginAccessIdentity() {
    return this.to('UpdateCloudFrontOriginAccessIdentity');
  }

  /**
   * This action updates the configuration for a web distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html
   */
  public toUpdateDistribution() {
    return this.to('UpdateDistribution');
  }

  /**
   * This action updates a field-level encryption configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html
   */
  public toUpdateFieldLevelEncryptionConfig() {
    return this.to('UpdateFieldLevelEncryptionConfig');
  }

  /**
   * This action updates a field-level encryption profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html
   */
  public toUpdateFieldLevelEncryptionProfile() {
    return this.to('UpdateFieldLevelEncryptionProfile');
  }

  /**
   * This action updates a key group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html
   */
  public toUpdateKeyGroup() {
    return this.to('UpdateKeyGroup');
  }

  /**
   * This action updates an origin request policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html
   */
  public toUpdateOriginRequestPolicy() {
    return this.to('UpdateOriginRequestPolicy');
  }

  /**
   * This action updates public key information.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html
   */
  public toUpdatePublicKey() {
    return this.to('UpdatePublicKey');
  }

  /**
   * This action updates a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html
   */
  public toUpdateRealtimeLogConfig() {
    return this.to('UpdateRealtimeLogConfig');
  }

  /**
   * This action updates the configuration for an RTMP distribution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html
   */
  public toUpdateStreamingDistribution() {
    return this.to('UpdateStreamingDistribution');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCachePolicy",
      "CreateCloudFrontOriginAccessIdentity",
      "CreateDistribution",
      "CreateFieldLevelEncryptionConfig",
      "CreateFieldLevelEncryptionProfile",
      "CreateInvalidation",
      "CreateKeyGroup",
      "CreateMonitoringSubscription",
      "CreateOriginRequestPolicy",
      "CreatePublicKey",
      "CreateRealtimeLogConfig",
      "CreateStreamingDistribution",
      "DeleteCachePolicy",
      "DeleteCloudFrontOriginAccessIdentity",
      "DeleteDistribution",
      "DeleteFieldLevelEncryptionConfig",
      "DeleteFieldLevelEncryptionProfile",
      "DeleteKeyGroup",
      "DeleteMonitoringSubscription",
      "DeleteOriginRequestPolicy",
      "DeletePublicKey",
      "DeleteRealtimeLogConfig",
      "DeleteStreamingDistribution",
      "UpdateCachePolicy",
      "UpdateCloudFrontOriginAccessIdentity",
      "UpdateDistribution",
      "UpdateFieldLevelEncryptionConfig",
      "UpdateFieldLevelEncryptionProfile",
      "UpdateKeyGroup",
      "UpdateOriginRequestPolicy",
      "UpdatePublicKey",
      "UpdateRealtimeLogConfig",
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
      "GetKeyGroup",
      "GetKeyGroupConfig",
      "GetMonitoringSubscription",
      "GetOriginRequestPolicy",
      "GetOriginRequestPolicyConfig",
      "GetPublicKey",
      "GetPublicKeyConfig",
      "GetRealtimeLogConfig",
      "GetStreamingDistribution",
      "GetStreamingDistributionConfig",
      "ListTagsForResource"
    ],
    "List": [
      "ListCachePolicies",
      "ListCloudFrontOriginAccessIdentities",
      "ListDistributions",
      "ListDistributionsByCachePolicyId",
      "ListDistributionsByKeyGroup",
      "ListDistributionsByOriginRequestPolicyId",
      "ListDistributionsByRealtimeLogConfig",
      "ListDistributionsByWebACLId",
      "ListFieldLevelEncryptionConfigs",
      "ListFieldLevelEncryptionProfiles",
      "ListInvalidations",
      "ListKeyGroups",
      "ListOriginRequestPolicies",
      "ListPublicKeys",
      "ListRealtimeLogConfigs",
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

  /**
   * Adds a resource of type realtime-log-config to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRealtimeLogConfig(name: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:realtime-log-config/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
