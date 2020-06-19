import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service autoscaling-plans
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsautoscaling.html
 */
export class AutoscalingPlans extends PolicyStatement {
  public servicePrefix = 'autoscaling-plans';
  public actions: Actions = {
    "CreateScalingPlan": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CreateScalingPlan.html",
      "description": "Creates a scaling plan.",
      "accessLevel": "Write"
    },
    "DeleteScalingPlan": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DeleteScalingPlan.html",
      "description": "Deletes the specified scaling plan.",
      "accessLevel": "Write"
    },
    "DescribeScalingPlanResources": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlanResources.html",
      "description": "Describes the scalable resources in the specified scaling plan.",
      "accessLevel": "Read"
    },
    "DescribeScalingPlans": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlans.html",
      "description": "Describes the specified scaling plans or all of your scaling plans.",
      "accessLevel": "Read"
    },
    "GetScalingPlanResourceForecastData": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_GetScalingPlanResourceForecastData.html",
      "description": "Retrieves the forecast data for a scalable resource.",
      "accessLevel": "Read"
    },
    "UpdateScalingPlan": {
      "url": "https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_UpdateScalingPlan.html",
      "description": "Updates a scaling plan.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Creates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CreateScalingPlan.html
   */
  public createScalingPlan() {
    this.add('autoscaling-plans:CreateScalingPlan');
    return this;
  }

  /**
   * Deletes the specified scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DeleteScalingPlan.html
   */
  public deleteScalingPlan() {
    this.add('autoscaling-plans:DeleteScalingPlan');
    return this;
  }

  /**
   * Describes the scalable resources in the specified scaling plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlanResources.html
   */
  public describeScalingPlanResources() {
    this.add('autoscaling-plans:DescribeScalingPlanResources');
    return this;
  }

  /**
   * Describes the specified scaling plans or all of your scaling plans.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlans.html
   */
  public describeScalingPlans() {
    this.add('autoscaling-plans:DescribeScalingPlans');
    return this;
  }

  /**
   * Retrieves the forecast data for a scalable resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_GetScalingPlanResourceForecastData.html
   */
  public getScalingPlanResourceForecastData() {
    this.add('autoscaling-plans:GetScalingPlanResourceForecastData');
    return this;
  }

  /**
   * Updates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_UpdateScalingPlan.html
   */
  public updateScalingPlan() {
    this.add('autoscaling-plans:UpdateScalingPlan');
    return this;
  }
}
