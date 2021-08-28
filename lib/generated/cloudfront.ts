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
   * Grants permission to associate an alias to a CloudFront distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html
   */
  public toAssociateAlias() {
    return this.to('AssociateAlias');
  }

  /**
   * Grants permission to add a new cache policy to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html
   */
  public toCreateCachePolicy() {
    return this.to('CreateCachePolicy');
  }

  /**
   * Grants permission to create a new CloudFront origin access identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html
   */
  public toCreateCloudFrontOriginAccessIdentity() {
    return this.to('CreateCloudFrontOriginAccessIdentity');
  }

  /**
   * Grants permission to create a new web distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html
   */
  public toCreateDistribution() {
    return this.to('CreateDistribution');
  }

  /**
   * Grants permission to create a new web distribution with tags
   *
   * Access Level: Write
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
   * Grants permission to create a new field-level encryption configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html
   */
  public toCreateFieldLevelEncryptionConfig() {
    return this.to('CreateFieldLevelEncryptionConfig');
  }

  /**
   * Grants permission to create a field-level encryption profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html
   */
  public toCreateFieldLevelEncryptionProfile() {
    return this.to('CreateFieldLevelEncryptionProfile');
  }

  /**
   * Grants permission to create a CloudFront function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html
   */
  public toCreateFunction() {
    return this.to('CreateFunction');
  }

  /**
   * Grants permission to create a new invalidation batch request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html
   */
  public toCreateInvalidation() {
    return this.to('CreateInvalidation');
  }

  /**
   * Grants permission to add a new key group to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html
   */
  public toCreateKeyGroup() {
    return this.to('CreateKeyGroup');
  }

  /**
   * Grants permission to enable additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html
   */
  public toCreateMonitoringSubscription() {
    return this.to('CreateMonitoringSubscription');
  }

  /**
   * Grants permission to add a new origin request policy to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html
   */
  public toCreateOriginRequestPolicy() {
    return this.to('CreateOriginRequestPolicy');
  }

  /**
   * Grants permission to add a new public key to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html
   */
  public toCreatePublicKey() {
    return this.to('CreatePublicKey');
  }

  /**
   * Grants permission to create a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html
   */
  public toCreateRealtimeLogConfig() {
    return this.to('CreateRealtimeLogConfig');
  }

  /**
   * Grants permission to create a new RTMP distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html
   */
  public toCreateStreamingDistribution() {
    return this.to('CreateStreamingDistribution');
  }

  /**
   * Grants permission to create a new RTMP distribution with tags
   *
   * Access Level: Write
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
   * Grants permission to delete a cache policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html
   */
  public toDeleteCachePolicy() {
    return this.to('DeleteCachePolicy');
  }

  /**
   * Grants permission to delete a CloudFront origin access identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html
   */
  public toDeleteCloudFrontOriginAccessIdentity() {
    return this.to('DeleteCloudFrontOriginAccessIdentity');
  }

  /**
   * Grants permission to delete a web distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html
   */
  public toDeleteDistribution() {
    return this.to('DeleteDistribution');
  }

  /**
   * Grants permission to delete a field-level encryption configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html
   */
  public toDeleteFieldLevelEncryptionConfig() {
    return this.to('DeleteFieldLevelEncryptionConfig');
  }

  /**
   * Grants permission to delete a field-level encryption profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html
   */
  public toDeleteFieldLevelEncryptionProfile() {
    return this.to('DeleteFieldLevelEncryptionProfile');
  }

  /**
   * Grants permission to delete a CloudFront function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html
   */
  public toDeleteFunction() {
    return this.to('DeleteFunction');
  }

  /**
   * Grants permission to delete a key group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html
   */
  public toDeleteKeyGroup() {
    return this.to('DeleteKeyGroup');
  }

  /**
   * Grants permission to disable additional CloudWatch metrics for the specified CloudFront distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html
   */
  public toDeleteMonitoringSubscription() {
    return this.to('DeleteMonitoringSubscription');
  }

  /**
   * Grants permission to delete an origin request policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html
   */
  public toDeleteOriginRequestPolicy() {
    return this.to('DeleteOriginRequestPolicy');
  }

  /**
   * Grants permission to delete a public key from CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html
   */
  public toDeletePublicKey() {
    return this.to('DeletePublicKey');
  }

  /**
   * Grants permission to delete a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html
   */
  public toDeleteRealtimeLogConfig() {
    return this.to('DeleteRealtimeLogConfig');
  }

  /**
   * Grants permission to delete an RTMP distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html
   */
  public toDeleteStreamingDistribution() {
    return this.to('DeleteStreamingDistribution');
  }

  /**
   * Grants permission to get a CloudFront function summary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html
   */
  public toDescribeFunction() {
    return this.to('DescribeFunction');
  }

  /**
   * Grants permission to get the cache policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html
   */
  public toGetCachePolicy() {
    return this.to('GetCachePolicy');
  }

  /**
   * Grants permission to get the cache policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html
   */
  public toGetCachePolicyConfig() {
    return this.to('GetCachePolicyConfig');
  }

  /**
   * Grants permission to get the information about a CloudFront origin access identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html
   */
  public toGetCloudFrontOriginAccessIdentity() {
    return this.to('GetCloudFrontOriginAccessIdentity');
  }

  /**
   * Grants permission to get the configuration information about a Cloudfront origin access identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html
   */
  public toGetCloudFrontOriginAccessIdentityConfig() {
    return this.to('GetCloudFrontOriginAccessIdentityConfig');
  }

  /**
   * Grants permission to get the information about a web distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html
   */
  public toGetDistribution() {
    return this.to('GetDistribution');
  }

  /**
   * Grants permission to get the configuration information about a distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html
   */
  public toGetDistributionConfig() {
    return this.to('GetDistributionConfig');
  }

  /**
   * Grants permission to get the field-level encryption configuration information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html
   */
  public toGetFieldLevelEncryption() {
    return this.to('GetFieldLevelEncryption');
  }

  /**
   * Grants permission to get the field-level encryption configuration information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html
   */
  public toGetFieldLevelEncryptionConfig() {
    return this.to('GetFieldLevelEncryptionConfig');
  }

  /**
   * Grants permission to get the field-level encryption configuration information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html
   */
  public toGetFieldLevelEncryptionProfile() {
    return this.to('GetFieldLevelEncryptionProfile');
  }

  /**
   * Grants permission to get the field-level encryption profile configuration information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html
   */
  public toGetFieldLevelEncryptionProfileConfig() {
    return this.to('GetFieldLevelEncryptionProfileConfig');
  }

  /**
   * Grants permission to get a CloudFront function's code
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html
   */
  public toGetFunction() {
    return this.to('GetFunction');
  }

  /**
   * Grants permission to get the information about an invalidation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html
   */
  public toGetInvalidation() {
    return this.to('GetInvalidation');
  }

  /**
   * Grants permission to get a key group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html
   */
  public toGetKeyGroup() {
    return this.to('GetKeyGroup');
  }

  /**
   * Grants permission to get a key group configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html
   */
  public toGetKeyGroupConfig() {
    return this.to('GetKeyGroupConfig');
  }

  /**
   * Grants permission to get information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html
   */
  public toGetMonitoringSubscription() {
    return this.to('GetMonitoringSubscription');
  }

  /**
   * Grants permission to get the origin request policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html
   */
  public toGetOriginRequestPolicy() {
    return this.to('GetOriginRequestPolicy');
  }

  /**
   * Grants permission to get the origin request policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html
   */
  public toGetOriginRequestPolicyConfig() {
    return this.to('GetOriginRequestPolicyConfig');
  }

  /**
   * Grants permission to get the public key information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    return this.to('GetPublicKey');
  }

  /**
   * Grants permission to get the public key configuration information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html
   */
  public toGetPublicKeyConfig() {
    return this.to('GetPublicKeyConfig');
  }

  /**
   * Grants permission to get a real-time log configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html
   */
  public toGetRealtimeLogConfig() {
    return this.to('GetRealtimeLogConfig');
  }

  /**
   * Grants permission to get the information about an RTMP distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html
   */
  public toGetStreamingDistribution() {
    return this.to('GetStreamingDistribution');
  }

  /**
   * Grants permission to get the configuration information about a streaming distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html
   */
  public toGetStreamingDistributionConfig() {
    return this.to('GetStreamingDistributionConfig');
  }

  /**
   * Grants permission to list all cache policies that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html
   */
  public toListCachePolicies() {
    return this.to('ListCachePolicies');
  }

  /**
   * Grants permission to list your CloudFront origin access identities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html
   */
  public toListCloudFrontOriginAccessIdentities() {
    return this.to('ListCloudFrontOriginAccessIdentities');
  }

  /**
   * Grants permission to list all aliases that conflict with the given alias in CloudFront
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html
   */
  public toListConflictingAliases() {
    return this.to('ListConflictingAliases');
  }

  /**
   * Grants permission to list the distributions associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html
   */
  public toListDistributions() {
    return this.to('ListDistributions');
  }

  /**
   * Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html
   */
  public toListDistributionsByCachePolicyId() {
    return this.to('ListDistributionsByCachePolicyId');
  }

  /**
   * Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified key group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html
   */
  public toListDistributionsByKeyGroup() {
    return this.to('ListDistributionsByKeyGroup');
  }

  /**
   * Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html
   */
  public toListDistributionsByOriginRequestPolicyId() {
    return this.to('ListDistributionsByOriginRequestPolicyId');
  }

  /**
   * Grants permission to get a list of distributions that have a cache behavior that’s associated with the specified real-time log configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html
   */
  public toListDistributionsByRealtimeLogConfig() {
    return this.to('ListDistributionsByRealtimeLogConfig');
  }

  /**
   * Grants permission to list the distributions associated with your AWS account with given AWS WAF web ACL
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html
   */
  public toListDistributionsByWebACLId() {
    return this.to('ListDistributionsByWebACLId');
  }

  /**
   * Grants permission to list all field-level encryption configurations that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html
   */
  public toListFieldLevelEncryptionConfigs() {
    return this.to('ListFieldLevelEncryptionConfigs');
  }

  /**
   * Grants permission to list all field-level encryption profiles that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html
   */
  public toListFieldLevelEncryptionProfiles() {
    return this.to('ListFieldLevelEncryptionProfiles');
  }

  /**
   * Grants permission to get a list of CloudFront functions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html
   */
  public toListFunctions() {
    return this.to('ListFunctions');
  }

  /**
   * Grants permission to list your invalidation batches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html
   */
  public toListInvalidations() {
    return this.to('ListInvalidations');
  }

  /**
   * Grants permission to list all key groups that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html
   */
  public toListKeyGroups() {
    return this.to('ListKeyGroups');
  }

  /**
   * Grants permission to list all origin request policies that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html
   */
  public toListOriginRequestPolicies() {
    return this.to('ListOriginRequestPolicies');
  }

  /**
   * Grants permission to list all public keys that have been added to CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    return this.to('ListPublicKeys');
  }

  /**
   * Grants permission to get a list of real-time log configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html
   */
  public toListRealtimeLogConfigs() {
    return this.to('ListRealtimeLogConfigs');
  }

  /**
   * Grants permission to list your RTMP distributions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html
   */
  public toListStreamingDistributions() {
    return this.to('ListStreamingDistributions');
  }

  /**
   * Grants permission to list tags for a CloudFront resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish a CloudFront function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html
   */
  public toPublishFunction() {
    return this.to('PublishFunction');
  }

  /**
   * Grants permission to add tags to a CloudFront resource
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
   * Grants permission to test a CloudFront function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html
   */
  public toTestFunction() {
    return this.to('TestFunction');
  }

  /**
   * Grants permission to remove tags from a CloudFront resource
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
   * Grants permission to update a cache policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html
   */
  public toUpdateCachePolicy() {
    return this.to('UpdateCachePolicy');
  }

  /**
   * Grants permission to set the configuration for a CloudFront origin access identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html
   */
  public toUpdateCloudFrontOriginAccessIdentity() {
    return this.to('UpdateCloudFrontOriginAccessIdentity');
  }

  /**
   * Grants permission to update the configuration for a web distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html
   */
  public toUpdateDistribution() {
    return this.to('UpdateDistribution');
  }

  /**
   * Grants permission to update a field-level encryption configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html
   */
  public toUpdateFieldLevelEncryptionConfig() {
    return this.to('UpdateFieldLevelEncryptionConfig');
  }

  /**
   * Grants permission to update a field-level encryption profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html
   */
  public toUpdateFieldLevelEncryptionProfile() {
    return this.to('UpdateFieldLevelEncryptionProfile');
  }

  /**
   * Grants permission to update a CloudFront function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html
   */
  public toUpdateFunction() {
    return this.to('UpdateFunction');
  }

  /**
   * Grants permission to update a key group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html
   */
  public toUpdateKeyGroup() {
    return this.to('UpdateKeyGroup');
  }

  /**
   * Grants permission to update an origin request policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html
   */
  public toUpdateOriginRequestPolicy() {
    return this.to('UpdateOriginRequestPolicy');
  }

  /**
   * Grants permission to update public key information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html
   */
  public toUpdatePublicKey() {
    return this.to('UpdatePublicKey');
  }

  /**
   * Grants permission to update a real-time log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html
   */
  public toUpdateRealtimeLogConfig() {
    return this.to('UpdateRealtimeLogConfig');
  }

  /**
   * Grants permission to update the configuration for an RTMP distribution
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
      "AssociateAlias",
      "CreateCachePolicy",
      "CreateCloudFrontOriginAccessIdentity",
      "CreateDistribution",
      "CreateDistributionWithTags",
      "CreateFieldLevelEncryptionConfig",
      "CreateFieldLevelEncryptionProfile",
      "CreateFunction",
      "CreateInvalidation",
      "CreateKeyGroup",
      "CreateMonitoringSubscription",
      "CreateOriginRequestPolicy",
      "CreatePublicKey",
      "CreateRealtimeLogConfig",
      "CreateStreamingDistribution",
      "CreateStreamingDistributionWithTags",
      "DeleteCachePolicy",
      "DeleteCloudFrontOriginAccessIdentity",
      "DeleteDistribution",
      "DeleteFieldLevelEncryptionConfig",
      "DeleteFieldLevelEncryptionProfile",
      "DeleteFunction",
      "DeleteKeyGroup",
      "DeleteMonitoringSubscription",
      "DeleteOriginRequestPolicy",
      "DeletePublicKey",
      "DeleteRealtimeLogConfig",
      "DeleteStreamingDistribution",
      "PublishFunction",
      "TestFunction",
      "UpdateCachePolicy",
      "UpdateCloudFrontOriginAccessIdentity",
      "UpdateDistribution",
      "UpdateFieldLevelEncryptionConfig",
      "UpdateFieldLevelEncryptionProfile",
      "UpdateFunction",
      "UpdateKeyGroup",
      "UpdateOriginRequestPolicy",
      "UpdatePublicKey",
      "UpdateRealtimeLogConfig",
      "UpdateStreamingDistribution"
    ],
    "Read": [
      "DescribeFunction",
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
      "GetFunction",
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
      "ListConflictingAliases",
      "ListDistributions",
      "ListDistributionsByCachePolicyId",
      "ListDistributionsByKeyGroup",
      "ListDistributionsByOriginRequestPolicyId",
      "ListDistributionsByRealtimeLogConfig",
      "ListDistributionsByWebACLId",
      "ListFieldLevelEncryptionConfigs",
      "ListFieldLevelEncryptionProfiles",
      "ListFunctions",
      "ListInvalidations",
      "ListKeyGroups",
      "ListOriginRequestPolicies",
      "ListPublicKeys",
      "ListRealtimeLogConfigs",
      "ListStreamingDistributions"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunction(name: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudfront::${Account}:function/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
