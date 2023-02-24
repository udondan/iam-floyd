import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html).
 *
 * @param options - Options for the statement
 */
export class ApplicationAutoscaling extends PolicyStatement {
  public servicePrefix = 'application-autoscaling';

  /**
   * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to delete a scaling policy
   *
   * Access Level: Write
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
   * Grants permission to create and update a scaling policy for a scalable target
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html
   */
  public toRegisterScalableTarget() {
    return this.to('RegisterScalableTarget');
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
      'DescribeScheduledActions'
    ]
  };
}
