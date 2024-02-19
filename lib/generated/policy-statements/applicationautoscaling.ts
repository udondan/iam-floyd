import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationAutoscaling extends PolicyStatement {
  public servicePrefix = 'application-autoscaling';

  /**
   * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete a scaling policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html
   */
  public toDeleteScalingPolicy() {
    return this.to('DeleteScalingPolicy');
  }

  /**
   * Grants permission to delete a scheduled action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
  }

  /**
   * Grants permission to deregister a scalable target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html
   */
  public toDeregisterScalableTarget() {
    return this.to('DeregisterScalableTarget');
  }

  /**
   * Grants permission to describe one or more scalable targets in the specified namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html
   */
  public toDescribeScalableTargets() {
    return this.to('DescribeScalableTargets');
  }

  /**
   * Grants permission to describe a set of scaling activities or all scaling activities in the specified namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    return this.to('DescribeScalingActivities');
  }

  /**
   * Grants permission to describe a set of scaling policies or all scaling policies in the specified namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html
   */
  public toDescribeScalingPolicies() {
    return this.to('DescribeScalingPolicies');
  }

  /**
   * Grants permission to describe a set of scheduled actions or all scheduled actions in the specified namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    return this.to('DescribeScheduledActions');
  }

  /**
   * Grants permission to list tags for a scalable target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create and update a scaling policy for a scalable target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    return this.to('PutScalingPolicy');
  }

  /**
   * Grants permission to create and update a scheduled action for a scalable target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html
   */
  public toPutScheduledAction() {
    return this.to('PutScheduledAction');
  }

  /**
   * Grants permission to register AWS or custom resources as scalable targets with Application Auto Scaling and to update configuration parameters used to manage a scalable target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifServiceNamespace()
   * - .ifScalableDimension()
   *
   * Dependent actions:
   * - application-autoscaling:TagResource
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html
   */
  public toRegisterScalableTarget() {
    return this.to('RegisterScalableTarget');
  }

  /**
   * Grants permission to tag a scalable target
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a scalable target
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteScalingPolicy',
      'DeleteScheduledAction',
      'DeregisterScalableTarget',
      'PutScalingPolicy',
      'PutScheduledAction',
      'RegisterScalableTarget'
    ],
    Read: [
      'DescribeScalableTargets',
      'DescribeScalingActivities',
      'DescribeScalingPolicies',
      'DescribeScheduledActions',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ScalableTarget to the statement
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScalableTarget(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:application-autoscaling:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scalable-target/${ resourceId }`);
  }

  /**
   * Filters access by the scalable dimension that is passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDeleteScalingPolicy()
   * - .toDeleteScheduledAction()
   * - .toDeregisterScalableTarget()
   * - .toPutScalingPolicy()
   * - .toPutScheduledAction()
   * - .toRegisterScalableTarget()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifScalableDimension(value: string | string[], operator?: Operator | string) {
    return this.if(`scalable-dimension`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the service namespace that is passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDeleteScalingPolicy()
   * - .toDeleteScheduledAction()
   * - .toDeregisterScalableTarget()
   * - .toPutScalingPolicy()
   * - .toPutScheduledAction()
   * - .toRegisterScalableTarget()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceNamespace(value: string | string[], operator?: Operator | string) {
    return this.if(`service-namespace`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toRegisterScalableTarget()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to resource types:
   * - ScalableTarget
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toRegisterScalableTarget()
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
