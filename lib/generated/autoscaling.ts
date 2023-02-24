import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html).
 *
 * @param options - Options for the statement
 */
export class AutoscalingPlans extends PolicyStatement {
  public servicePrefix = 'autoscaling-plans';

  /**
   * Statement provider for service [autoscaling-plans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Creates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CreateScalingPlan.html
   */
  public toCreateScalingPlan() {
    return this.to('CreateScalingPlan');
  }

  /**
   * Deletes the specified scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DeleteScalingPlan.html
   */
  public toDeleteScalingPlan() {
    return this.to('DeleteScalingPlan');
  }

  /**
   * Describes the scalable resources in the specified scaling plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlanResources.html
   */
  public toDescribeScalingPlanResources() {
    return this.to('DescribeScalingPlanResources');
  }

  /**
   * Describes the specified scaling plans or all of your scaling plans.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlans.html
   */
  public toDescribeScalingPlans() {
    return this.to('DescribeScalingPlans');
  }

  /**
   * Retrieves the forecast data for a scalable resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_GetScalingPlanResourceForecastData.html
   */
  public toGetScalingPlanResourceForecastData() {
    return this.to('GetScalingPlanResourceForecastData');
  }

  /**
   * Updates a scaling plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_UpdateScalingPlan.html
   */
  public toUpdateScalingPlan() {
    return this.to('UpdateScalingPlan');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateScalingPlan',
      'DeleteScalingPlan',
      'UpdateScalingPlan'
    ],
    Read: [
      'DescribeScalingPlanResources',
      'DescribeScalingPlans',
      'GetScalingPlanResourceForecastData'
    ]
  };
}
