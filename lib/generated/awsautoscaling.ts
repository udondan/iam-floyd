import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsautoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AutoscalingPlans extends PolicyStatement {
  public servicePrefix = 'autoscaling-plans';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsautoscaling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CreateScalingPlan.html
   */
  public toCreateScalingPlan() {
    this.to('autoscaling-plans:CreateScalingPlan');
    return this;
  }

  /**
   * Deletes the specified scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DeleteScalingPlan.html
   */
  public toDeleteScalingPlan() {
    this.to('autoscaling-plans:DeleteScalingPlan');
    return this;
  }

  /**
   * Describes the scalable resources in the specified scaling plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlanResources.html
   */
  public toDescribeScalingPlanResources() {
    this.to('autoscaling-plans:DescribeScalingPlanResources');
    return this;
  }

  /**
   * Describes the specified scaling plans or all of your scaling plans.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlans.html
   */
  public toDescribeScalingPlans() {
    this.to('autoscaling-plans:DescribeScalingPlans');
    return this;
  }

  /**
   * Retrieves the forecast data for a scalable resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_GetScalingPlanResourceForecastData.html
   */
  public toGetScalingPlanResourceForecastData() {
    this.to('autoscaling-plans:GetScalingPlanResourceForecastData');
    return this;
  }

  /**
   * Updates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_UpdateScalingPlan.html
   */
  public toUpdateScalingPlan() {
    this.to('autoscaling-plans:UpdateScalingPlan');
    return this;
  }
}
