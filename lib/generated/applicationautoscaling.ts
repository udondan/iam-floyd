import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationautoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationAutoscaling extends PolicyStatement {
  public servicePrefix = 'application-autoscaling';
  protected actionList: Actions = {
    "DeleteScalingPolicy": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html",
      "description": "Deletes an Application Auto Scaling scaling policy that was previously created.",
      "accessLevel": "Write"
    },
    "DeleteScheduledAction": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html",
      "description": "Deletes an Application Auto Scaling scheduled action that was previously created.",
      "accessLevel": "Write"
    },
    "DeregisterScalableTarget": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html",
      "description": "Deregisters a scalable target that was previously registered.",
      "accessLevel": "Write"
    },
    "DescribeScalableTargets": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html",
      "description": "Provides descriptive information for scalable targets with a specified service namespace.",
      "accessLevel": "Read"
    },
    "DescribeScalingActivities": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html",
      "description": "Provides descriptive information for scaling activities with a specified service namespace for the previous six weeks.",
      "accessLevel": "Read"
    },
    "DescribeScalingPolicies": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html",
      "description": "Provides descriptive information for scaling policies with a specified service namespace.",
      "accessLevel": "Read"
    },
    "DescribeScheduledActions": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html",
      "description": "Provides descriptive information for scheduled actions with a specified service namespace.",
      "accessLevel": "Read"
    },
    "PutScalingPolicy": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html",
      "description": "Creates or updates a policy for an existing Application Auto Scaling scalable target.",
      "accessLevel": "Write"
    },
    "PutScheduledAction": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html",
      "description": "Creates or updates a scheduled action for an existing Application Auto Scaling scalable target.",
      "accessLevel": "Write"
    },
    "RegisterScalableTarget": {
      "url": "https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html",
      "description": "Registers or updates a scalable target. A scalable target is a resource that can be scaled out or in with Application Auto Scaling.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [application-autoscaling](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationautoscaling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.add('application-autoscaling:DeleteScalingPolicy');
    return this;
  }

  /**
   * Deletes an Application Auto Scaling scheduled action that was previously created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    this.add('application-autoscaling:DeleteScheduledAction');
    return this;
  }

  /**
   * Deregisters a scalable target that was previously registered.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html
   */
  public toDeregisterScalableTarget() {
    this.add('application-autoscaling:DeregisterScalableTarget');
    return this;
  }

  /**
   * Provides descriptive information for scalable targets with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html
   */
  public toDescribeScalableTargets() {
    this.add('application-autoscaling:DescribeScalableTargets');
    return this;
  }

  /**
   * Provides descriptive information for scaling activities with a specified service namespace for the previous six weeks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html
   */
  public toDescribeScalingActivities() {
    this.add('application-autoscaling:DescribeScalingActivities');
    return this;
  }

  /**
   * Provides descriptive information for scaling policies with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html
   */
  public toDescribeScalingPolicies() {
    this.add('application-autoscaling:DescribeScalingPolicies');
    return this;
  }

  /**
   * Provides descriptive information for scheduled actions with a specified service namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html
   */
  public toDescribeScheduledActions() {
    this.add('application-autoscaling:DescribeScheduledActions');
    return this;
  }

  /**
   * Creates or updates a policy for an existing Application Auto Scaling scalable target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    this.add('application-autoscaling:PutScalingPolicy');
    return this;
  }

  /**
   * Creates or updates a scheduled action for an existing Application Auto Scaling scalable target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html
   */
  public toPutScheduledAction() {
    this.add('application-autoscaling:PutScheduledAction');
    return this;
  }

  /**
   * Registers or updates a scalable target. A scalable target is a resource that can be scaled out or in with Application Auto Scaling.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html
   */
  public toRegisterScalableTarget() {
    this.add('application-autoscaling:RegisterScalableTarget');
    return this;
  }
}
