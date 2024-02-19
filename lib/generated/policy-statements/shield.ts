import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [shield](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Shield extends PolicyStatement {
  public servicePrefix = 'shield';

  /**
   * Statement provider for service [shield](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to authorize the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
   */
  public toAssociateDRTLogBucket() {
    return this.to('AssociateDRTLogBucket');
  }

  /**
   * Grants permission to authorize the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:GetRole
   * - iam:ListAttachedRolePolicies
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
   */
  public toAssociateDRTRole() {
    return this.to('AssociateDRTRole');
  }

  /**
   * Grants permission to add health-based detection to the Shield Advanced protection for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - route53:GetHealthCheck
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateHealthCheck.html
   */
  public toAssociateHealthCheck() {
    return this.to('AssociateHealthCheck');
  }

  /**
   * Grants permission to initialize proactive engagement and set the list of contacts for the DDoS Response Team (DRT) to use
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateProactiveEngagementDetails.html
   */
  public toAssociateProactiveEngagementDetails() {
    return this.to('AssociateProactiveEngagementDetails');
  }

  /**
   * Grants permission to activate DDoS protection service for a given resource ARN
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
   */
  public toCreateProtection() {
    return this.to('CreateProtection');
  }

  /**
   * Grants permission to create a grouping of protected resources so they can be handled as a collective
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtectionGroup.html
   */
  public toCreateProtectionGroup() {
    return this.to('CreateProtectionGroup');
  }

  /**
   * Grants permission to activate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to delete an existing protection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
   */
  public toDeleteProtection() {
    return this.to('DeleteProtection');
  }

  /**
   * Grants permission to remove the specified protection group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtectionGroup.html
   */
  public toDeleteProtectionGroup() {
    return this.to('DeleteProtectionGroup');
  }

  /**
   * Grants permission to deactivate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
   */
  public toDeleteSubscription() {
    return this.to('DeleteSubscription');
  }

  /**
   * Grants permission to get attack details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
   */
  public toDescribeAttack() {
    return this.to('DescribeAttack');
  }

  /**
   * Grants permission to describe information about the number and type of attacks AWS Shield has detected in the last year
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttackStatistics.html
   */
  public toDescribeAttackStatistics() {
    return this.to('DescribeAttackStatistics');
  }

  /**
   * Grants permission to describe the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
   */
  public toDescribeDRTAccess() {
    return this.to('DescribeDRTAccess');
  }

  /**
   * Grants permission to list the email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
   */
  public toDescribeEmergencyContactSettings() {
    return this.to('DescribeEmergencyContactSettings');
  }

  /**
   * Grants permission to get protection details
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
   */
  public toDescribeProtection() {
    return this.to('DescribeProtection');
  }

  /**
   * Grants permission to describe the specification for the specified protection group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtectionGroup.html
   */
  public toDescribeProtectionGroup() {
    return this.to('DescribeProtectionGroup');
  }

  /**
   * Grants permission to get subscription details, such as start time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
   */
  public toDescribeSubscription() {
    return this.to('DescribeSubscription');
  }

  /**
   * Grants permission to disable application layer automatic response for Shield Advanced protection for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableApplicationLayerAutomaticResponse.html
   */
  public toDisableApplicationLayerAutomaticResponse() {
    return this.to('DisableApplicationLayerAutomaticResponse');
  }

  /**
   * Grants permission to remove authorization from the DDoS Response Team (DRT) to notify contacts about escalations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableProactiveEngagement.html
   */
  public toDisableProactiveEngagement() {
    return this.to('DisableProactiveEngagement');
  }

  /**
   * Grants permission to remove the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:DeleteBucketPolicy
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
   */
  public toDisassociateDRTLogBucket() {
    return this.to('DisassociateDRTLogBucket');
  }

  /**
   * Grants permission to remove the DDoS Response team's access to your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
   */
  public toDisassociateDRTRole() {
    return this.to('DisassociateDRTRole');
  }

  /**
   * Grants permission to remove health-based detection from the Shield Advanced protection for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateHealthCheck.html
   */
  public toDisassociateHealthCheck() {
    return this.to('DisassociateHealthCheck');
  }

  /**
   * Grants permission to enable application layer automatic response for Shield Advanced protection for a resource
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudfront:GetDistribution
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableApplicationLayerAutomaticResponse.html
   */
  public toEnableApplicationLayerAutomaticResponse() {
    return this.to('EnableApplicationLayerAutomaticResponse');
  }

  /**
   * Grants permission to authorize the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableProactiveEngagement.html
   */
  public toEnableProactiveEngagement() {
    return this.to('EnableProactiveEngagement');
  }

  /**
   * Grants permission to get subscription state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
   */
  public toGetSubscriptionState() {
    return this.to('GetSubscriptionState');
  }

  /**
   * Grants permission to list all existing attacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
   */
  public toListAttacks() {
    return this.to('ListAttacks');
  }

  /**
   * Grants permission to retrieve the protection groups for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtectionGroups.html
   */
  public toListProtectionGroups() {
    return this.to('ListProtectionGroups');
  }

  /**
   * Grants permission to list all existing protections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
   */
  public toListProtections() {
    return this.to('ListProtections');
  }

  /**
   * Grants permission to retrieve the resources that are included in the protection group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListResourcesInProtectionGroup.html
   */
  public toListResourcesInProtectionGroup() {
    return this.to('ListResourcesInProtectionGroup');
  }

  /**
   * Grants permission to get information about AWS tags for a specified Amazon Resource Name (ARN) in AWS Shield
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add or updates tags for a resource in AWS Shield
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource in AWS Shield
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update application layer automatic response for Shield Advanced protection for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateApplicationLayerAutomaticResponse.html
   */
  public toUpdateApplicationLayerAutomaticResponse() {
    return this.to('UpdateApplicationLayerAutomaticResponse');
  }

  /**
   * Grants permission to update the details of the list of email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
   */
  public toUpdateEmergencyContactSettings() {
    return this.to('UpdateEmergencyContactSettings');
  }

  /**
   * Grants permission to update an existing protection group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateProtectionGroup.html
   */
  public toUpdateProtectionGroup() {
    return this.to('UpdateProtectionGroup');
  }

  /**
   * Grants permission to update the details of an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
   */
  public toUpdateSubscription() {
    return this.to('UpdateSubscription');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateDRTLogBucket',
      'AssociateDRTRole',
      'AssociateHealthCheck',
      'AssociateProactiveEngagementDetails',
      'CreateProtection',
      'CreateProtectionGroup',
      'CreateSubscription',
      'DeleteProtection',
      'DeleteProtectionGroup',
      'DeleteSubscription',
      'DisableApplicationLayerAutomaticResponse',
      'DisableProactiveEngagement',
      'DisassociateDRTLogBucket',
      'DisassociateDRTRole',
      'DisassociateHealthCheck',
      'EnableApplicationLayerAutomaticResponse',
      'EnableProactiveEngagement',
      'UpdateApplicationLayerAutomaticResponse',
      'UpdateEmergencyContactSettings',
      'UpdateProtectionGroup',
      'UpdateSubscription'
    ],
    Read: [
      'DescribeAttack',
      'DescribeAttackStatistics',
      'DescribeDRTAccess',
      'DescribeEmergencyContactSettings',
      'DescribeProtection',
      'DescribeProtectionGroup',
      'DescribeSubscription',
      'GetSubscriptionState',
      'ListTagsForResource'
    ],
    List: [
      'ListAttacks',
      'ListProtectionGroups',
      'ListProtections',
      'ListResourcesInProtectionGroup'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type attack to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AttackDetail.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAttack(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:shield::${ account ?? this.defaultAccount }:attack/${ id }`);
  }

  /**
   * Adds a resource of type protection to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_Protection.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProtection(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:shield::${ account ?? this.defaultAccount }:protection/${ id }`);
  }

  /**
   * Adds a resource of type protection-group to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ProtectionGroup.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProtectionGroup(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:shield::${ account ?? this.defaultAccount }:protection-group/${ id }`);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProtection()
   * - .toCreateProtectionGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateHealthCheck()
   * - .toDeleteProtection()
   * - .toDeleteProtectionGroup()
   * - .toDescribeProtection()
   * - .toDescribeProtectionGroup()
   * - .toDisassociateHealthCheck()
   * - .toUpdateProtectionGroup()
   *
   * Applies to resource types:
   * - protection
   * - protection-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProtection()
   * - .toCreateProtectionGroup()
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
