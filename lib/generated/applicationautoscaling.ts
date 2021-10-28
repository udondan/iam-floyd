import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationautoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationAutoscaling extends PolicyStatement {
  public servicePrefix = 'application-autoscaling';

  /**
   * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationautoscaling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Deletes an Application Auto Scaling scaling policy that was previously created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html
   */
  public toDeleteScalingPolicy() {
    return this.to('DeleteScalingPolicy');
  }

  /**
   * Deletes an Application Auto Scaling scheduled action that was previously created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
  }

  /**
   * Deregisters a scalable target that was previously registered.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html
   */
  public toDeregisterScalableTarget() {
    return this.to('DeregisterScalableTarget');
  }

  /**
   * Provides descriptive information for scalable targets with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html
   */
  public toDescribeScalableTargets() {
    return this.to('DescribeScalableTargets');
  }

  /**
   * Provides descriptive information for scaling activities with a specified service namespace for the previous six weeks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    return this.to('DescribeScalingActivities');
  }

  /**
   * Provides descriptive information for scaling policies with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html
   */
  public toDescribeScalingPolicies() {
    return this.to('DescribeScalingPolicies');
  }

  /**
   * Provides descriptive information for scheduled actions with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    return this.to('DescribeScheduledActions');
  }

  /**
   * Creates or updates a policy for an existing Application Auto Scaling scalable target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    return this.to('PutScalingPolicy');
  }

  /**
   * Creates or updates a scheduled action for an existing Application Auto Scaling scalable target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html
   */
  public toPutScheduledAction() {
    return this.to('PutScheduledAction');
  }

  /**
   * Registers or updates a scalable target. A scalable target is a resource that can be scaled out or in with Application Auto Scaling.
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
