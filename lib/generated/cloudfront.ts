import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to copy an existing distribution and create a new web distribution
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudfront:CopyDistribution
   * - cloudfront:CreateDistribution
   * - cloudfront:GetDistribution
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html
   */
  public toCopyDistribution() {
    return this.to('CopyDistribution');
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
   * Grants permission to add a new continuous-deployment policy to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html
   */
  public toCreateContinuousDeploymentPolicy() {
    return this.to('CreateContinuousDeploymentPolicy');
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
   * Grants permission to create a CloudFront KeyValueStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyValueStore.html
   */
  public toCreateKeyValueStore() {
    return this.to('CreateKeyValueStore');
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
   * Grants permission to create a new origin access control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html
   */
  public toCreateOriginAccessControl() {
    return this.to('CreateOriginAccessControl');
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
   * Grants permission to add a new response headers policy to CloudFront
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html
   */
  public toCreateResponseHeadersPolicy() {
    return this.to('CreateResponseHeadersPolicy');
  }

  /**
   * Grants permission to create a new savings plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toCreateSavingsPlan() {
    return this.to('CreateSavingsPlan');
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
   * Grants permission to delete a continuous-deployment policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html
   */
  public toDeleteContinuousDeploymentPolicy() {
    return this.to('DeleteContinuousDeploymentPolicy');
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
   * Grants permission to delete a CloudFront KeyValueStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html
   */
  public toDeleteKeyValueStore() {
    return this.to('DeleteKeyValueStore');
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
   * Grants permission to delete an origin access control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html
   */
  public toDeleteOriginAccessControl() {
    return this.to('DeleteOriginAccessControl');
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
   * Grants permission to delete a response headers policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html
   */
  public toDeleteResponseHeadersPolicy() {
    return this.to('DeleteResponseHeadersPolicy');
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
   * Grants permission to get a CloudFront KeyValueStore summary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeKeyValueStore.html
   */
  public toDescribeKeyValueStore() {
    return this.to('DescribeKeyValueStore');
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
   * Grants permission to get the continuous-deployment policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html
   */
  public toGetContinuousDeploymentPolicy() {
    return this.to('GetContinuousDeploymentPolicy');
  }

  /**
   * Grants permission to get the continuous-deployment policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html
   */
  public toGetContinuousDeploymentPolicyConfig() {
    return this.to('GetContinuousDeploymentPolicyConfig');
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
   * Grants permission to get the origin access control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html
   */
  public toGetOriginAccessControl() {
    return this.to('GetOriginAccessControl');
  }

  /**
   * Grants permission to get the origin access control configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html
   */
  public toGetOriginAccessControlConfig() {
    return this.to('GetOriginAccessControlConfig');
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
   * Grants permission to get the response headers policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html
   */
  public toGetResponseHeadersPolicy() {
    return this.to('GetResponseHeadersPolicy');
  }

  /**
   * Grants permission to get the response headers policy configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html
   */
  public toGetResponseHeadersPolicyConfig() {
    return this.to('GetResponseHeadersPolicyConfig');
  }

  /**
   * Grants permission to get a savings plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toGetSavingsPlan() {
    return this.to('GetSavingsPlan');
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
   * Grants permission to list all continuous-deployment policies in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html
   */
  public toListContinuousDeploymentPolicies() {
    return this.to('ListContinuousDeploymentPolicies');
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
   * Grants permission to list the distributions associated a Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toListDistributionsByLambdaFunction() {
    return this.to('ListDistributionsByLambdaFunction');
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
   * Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html
   */
  public toListDistributionsByResponseHeadersPolicyId() {
    return this.to('ListDistributionsByResponseHeadersPolicyId');
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
   * Grants permission to get a list of CloudFront KeyValueStores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyValueStores.html
   */
  public toListKeyValueStores() {
    return this.to('ListKeyValueStores');
  }

  /**
   * Grants permission to list all origin access controls in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html
   */
  public toListOriginAccessControls() {
    return this.to('ListOriginAccessControls');
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
   * Grants permission to list CloudFront rate cards for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toListRateCards() {
    return this.to('ListRateCards');
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
   * Grants permission to list all response headers policies that have been created in CloudFront for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html
   */
  public toListResponseHeadersPolicies() {
    return this.to('ListResponseHeadersPolicies');
  }

  /**
   * Grants permission to list savings plans in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toListSavingsPlans() {
    return this.to('ListSavingsPlans');
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
   * Grants permission to list CloudFront usage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toListUsages() {
    return this.to('ListUsages');
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
   * Grants permission to update a continuous-deployment policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html
   */
  public toUpdateContinuousDeploymentPolicy() {
    return this.to('UpdateContinuousDeploymentPolicy');
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
   * Grants permission to update a CloudFront KeyValueStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html
   */
  public toUpdateKeyValueStore() {
    return this.to('UpdateKeyValueStore');
  }

  /**
   * Grants permission to update an origin access control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html
   */
  public toUpdateOriginAccessControl() {
    return this.to('UpdateOriginAccessControl');
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
   * Grants permission to update a response headers policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html
   */
  public toUpdateResponseHeadersPolicy() {
    return this.to('UpdateResponseHeadersPolicy');
  }

  /**
   * Grants permission to update a savings plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html
   */
  public toUpdateSavingsPlan() {
    return this.to('UpdateSavingsPlan');
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
    Write: [
      'AssociateAlias',
      'CopyDistribution',
      'CreateCachePolicy',
      'CreateCloudFrontOriginAccessIdentity',
      'CreateContinuousDeploymentPolicy',
      'CreateDistribution',
      'CreateFieldLevelEncryptionConfig',
      'CreateFieldLevelEncryptionProfile',
      'CreateFunction',
      'CreateInvalidation',
      'CreateKeyGroup',
      'CreateKeyValueStore',
      'CreateMonitoringSubscription',
      'CreateOriginAccessControl',
      'CreateOriginRequestPolicy',
      'CreatePublicKey',
      'CreateRealtimeLogConfig',
      'CreateResponseHeadersPolicy',
      'CreateSavingsPlan',
      'CreateStreamingDistribution',
      'CreateStreamingDistributionWithTags',
      'DeleteCachePolicy',
      'DeleteCloudFrontOriginAccessIdentity',
      'DeleteContinuousDeploymentPolicy',
      'DeleteDistribution',
      'DeleteFieldLevelEncryptionConfig',
      'DeleteFieldLevelEncryptionProfile',
      'DeleteFunction',
      'DeleteKeyGroup',
      'DeleteKeyValueStore',
      'DeleteMonitoringSubscription',
      'DeleteOriginAccessControl',
      'DeleteOriginRequestPolicy',
      'DeletePublicKey',
      'DeleteRealtimeLogConfig',
      'DeleteResponseHeadersPolicy',
      'DeleteStreamingDistribution',
      'PublishFunction',
      'TestFunction',
      'UpdateCachePolicy',
      'UpdateCloudFrontOriginAccessIdentity',
      'UpdateContinuousDeploymentPolicy',
      'UpdateDistribution',
      'UpdateFieldLevelEncryptionConfig',
      'UpdateFieldLevelEncryptionProfile',
      'UpdateFunction',
      'UpdateKeyGroup',
      'UpdateKeyValueStore',
      'UpdateOriginAccessControl',
      'UpdateOriginRequestPolicy',
      'UpdatePublicKey',
      'UpdateRealtimeLogConfig',
      'UpdateResponseHeadersPolicy',
      'UpdateSavingsPlan',
      'UpdateStreamingDistribution'
    ],
    Read: [
      'DescribeFunction',
      'DescribeKeyValueStore',
      'GetCachePolicy',
      'GetCachePolicyConfig',
      'GetCloudFrontOriginAccessIdentity',
      'GetCloudFrontOriginAccessIdentityConfig',
      'GetContinuousDeploymentPolicy',
      'GetContinuousDeploymentPolicyConfig',
      'GetDistribution',
      'GetDistributionConfig',
      'GetFieldLevelEncryption',
      'GetFieldLevelEncryptionConfig',
      'GetFieldLevelEncryptionProfile',
      'GetFieldLevelEncryptionProfileConfig',
      'GetFunction',
      'GetInvalidation',
      'GetKeyGroup',
      'GetKeyGroupConfig',
      'GetMonitoringSubscription',
      'GetOriginAccessControl',
      'GetOriginAccessControlConfig',
      'GetOriginRequestPolicy',
      'GetOriginRequestPolicyConfig',
      'GetPublicKey',
      'GetPublicKeyConfig',
      'GetRealtimeLogConfig',
      'GetResponseHeadersPolicy',
      'GetResponseHeadersPolicyConfig',
      'GetSavingsPlan',
      'GetStreamingDistribution',
      'GetStreamingDistributionConfig',
      'ListTagsForResource'
    ],
    List: [
      'ListCachePolicies',
      'ListCloudFrontOriginAccessIdentities',
      'ListConflictingAliases',
      'ListContinuousDeploymentPolicies',
      'ListDistributions',
      'ListDistributionsByCachePolicyId',
      'ListDistributionsByKeyGroup',
      'ListDistributionsByLambdaFunction',
      'ListDistributionsByOriginRequestPolicyId',
      'ListDistributionsByRealtimeLogConfig',
      'ListDistributionsByResponseHeadersPolicyId',
      'ListDistributionsByWebACLId',
      'ListFieldLevelEncryptionConfigs',
      'ListFieldLevelEncryptionProfiles',
      'ListFunctions',
      'ListInvalidations',
      'ListKeyGroups',
      'ListKeyValueStores',
      'ListOriginAccessControls',
      'ListOriginRequestPolicies',
      'ListPublicKeys',
      'ListRateCards',
      'ListRealtimeLogConfigs',
      'ListResponseHeadersPolicies',
      'ListSavingsPlans',
      'ListStreamingDistributions',
      'ListUsages'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type distribution to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   *
   * @param distributionId - Identifier for the distributionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDistribution(distributionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:distribution/${ distributionId }`);
  }

  /**
   * Adds a resource of type streaming-distribution to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   *
   * @param distributionId - Identifier for the distributionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamingDistribution(distributionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:streaming-distribution/${ distributionId }`);
  }

  /**
   * Adds a resource of type origin-access-identity to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-overview
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOriginAccessIdentity(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:origin-access-identity/${ id }`);
  }

  /**
   * Adds a resource of type field-level-encryption-config to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFieldLevelEncryptionConfig(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:field-level-encryption-config/${ id }`);
  }

  /**
   * Adds a resource of type field-level-encryption-profile to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFieldLevelEncryptionProfile(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:field-level-encryption-profile/${ id }`);
  }

  /**
   * Adds a resource of type cache-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCachePolicy(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:cache-policy/${ id }`);
  }

  /**
   * Adds a resource of type origin-request-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOriginRequestPolicy(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:origin-request-policy/${ id }`);
  }

  /**
   * Adds a resource of type realtime-log-config to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRealtimeLogConfig(name: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:realtime-log-config/${ name }`);
  }

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFunction(name: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:function/${ name }`);
  }

  /**
   * Adds a resource of type key-value-store to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKeyValueStore(name: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:key-value-store/${ name }`);
  }

  /**
   * Adds a resource of type response-headers-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResponseHeadersPolicy(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:response-headers-policy/${ id }`);
  }

  /**
   * Adds a resource of type origin-access-control to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOriginAccessControl(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:origin-access-control/${ id }`);
  }

  /**
   * Adds a resource of type continuous-deployment-policy to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onContinuousDeploymentPolicy(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:continuous-deployment-policy/${ id }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateStreamingDistributionWithTags()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - distribution
   * - streaming-distribution
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateStreamingDistributionWithTags()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
