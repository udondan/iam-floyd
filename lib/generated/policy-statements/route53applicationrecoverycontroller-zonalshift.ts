import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [arc-zonal-shift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53applicationrecoverycontroller-zonalshift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ArcZonalShift extends PolicyStatement {
  public servicePrefix = 'arc-zonal-shift';

  /**
   * Statement provider for service [arc-zonal-shift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53applicationrecoverycontroller-zonalshift.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an active zonal shift
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_CancelZonalShift.html
   */
  public toCancelZonalShift() {
    return this.to('CancelZonalShift');
  }

  /**
   * Grants permission to create a practice run configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * Dependent actions:
   * - cloudwatch:DescribeAlarms
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_CreatePracticeRunConfiguration.html
   */
  public toCreatePracticeRunConfiguration() {
    return this.to('CreatePracticeRunConfiguration');
  }

  /**
   * Grants permission to delete a practice run configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_DeletePracticeRunConfiguration.html
   */
  public toDeletePracticeRunConfiguration() {
    return this.to('DeletePracticeRunConfiguration');
  }

  /**
   * Grants permission to get information about a managed resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_GetManagedResource.html
   */
  public toGetManagedResource() {
    return this.to('GetManagedResource');
  }

  /**
   * Grants permission to list active and completed autoshifts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_ListAutoshifts.html
   */
  public toListAutoshifts() {
    return this.to('ListAutoshifts');
  }

  /**
   * Grants permission to list managed resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_ListManagedResources.html
   */
  public toListManagedResources() {
    return this.to('ListManagedResources');
  }

  /**
   * Grants permission to list zonal shifts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_ListZonalShifts.html
   */
  public toListZonalShifts() {
    return this.to('ListZonalShifts');
  }

  /**
   * Grants permission to start a zonal shift
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_StartZonalShift.html
   */
  public toStartZonalShift() {
    return this.to('StartZonalShift');
  }

  /**
   * Grants permission to update a practice run configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * Dependent actions:
   * - cloudwatch:DescribeAlarms
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_UpdatePracticeRunConfiguration.html
   */
  public toUpdatePracticeRunConfiguration() {
    return this.to('UpdatePracticeRunConfiguration');
  }

  /**
   * Grants permission to update a zonal autoshift status
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_UpdateZonalAutoshiftConfiguration.html
   */
  public toUpdateZonalAutoshiftConfiguration() {
    return this.to('UpdateZonalAutoshiftConfiguration');
  }

  /**
   * Grants permission to update an existing zonal shift
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   *
   * https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_UpdateZonalShift.html
   */
  public toUpdateZonalShift() {
    return this.to('UpdateZonalShift');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelZonalShift',
      'CreatePracticeRunConfiguration',
      'DeletePracticeRunConfiguration',
      'StartZonalShift',
      'UpdatePracticeRunConfiguration',
      'UpdateZonalAutoshiftConfiguration',
      'UpdateZonalShift'
    ],
    Read: [
      'GetManagedResource'
    ],
    List: [
      'ListAutoshifts',
      'ListManagedResources',
      'ListZonalShifts'
    ]
  };

  /**
   * Adds a resource of type ALB to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   */
  public onALB(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/app/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type NLB to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifElasticloadbalancingResourceTag()
   */
  public onNLB(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/net/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Filters access by the tags associated with the managed resource
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/load-balancer-authentication-access-control.html#elb-condition-keys
   *
   * Applies to actions:
   * - .toCancelZonalShift()
   * - .toCreatePracticeRunConfiguration()
   * - .toDeletePracticeRunConfiguration()
   * - .toGetManagedResource()
   * - .toStartZonalShift()
   * - .toUpdatePracticeRunConfiguration()
   * - .toUpdateZonalAutoshiftConfiguration()
   * - .toUpdateZonalShift()
   *
   * Applies to resource types:
   * - ALB
   * - NLB
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the managed resource
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/load-balancer-authentication-access-control.html#elb-condition-keys
   *
   * Applies to actions:
   * - .toCancelZonalShift()
   * - .toCreatePracticeRunConfiguration()
   * - .toDeletePracticeRunConfiguration()
   * - .toGetManagedResource()
   * - .toStartZonalShift()
   * - .toUpdatePracticeRunConfiguration()
   * - .toUpdateZonalAutoshiftConfiguration()
   * - .toUpdateZonalShift()
   *
   * Applies to resource types:
   * - ALB
   * - NLB
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifElasticloadbalancingResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`elasticloadbalancing:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
