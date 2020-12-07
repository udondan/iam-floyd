import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AutoscalingPlans extends PolicyStatement {
  public servicePrefix = 'autoscaling-plans';

  /**
   * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html).
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateScalingPlan",
      "DeleteScalingPlan",
      "UpdateScalingPlan"
    ],
    "Read": [
      "DescribeScalingPlanResources",
      "DescribeScalingPlans",
      "GetScalingPlanResourceForecastData"
    ]
  };
}

export type AutoscalingPlansActionsWrite = 'CreateScalingPlan' | 'DeleteScalingPlan' | 'UpdateScalingPlan';
export type AutoscalingPlansActionsRead = 'DescribeScalingPlanResources' | 'DescribeScalingPlans' | 'GetScalingPlanResourceForecastData';
export type AutoscalingPlansActions = AutoscalingPlansActionsWrite | AutoscalingPlansActionsRead;
