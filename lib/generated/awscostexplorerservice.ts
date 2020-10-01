import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [ce](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ce extends PolicyStatement {
  public servicePrefix = 'ce';

  /**
   * Statement provider for service [ce](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Anomaly Monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalyMonitor.html
   */
  public toCreateAnomalyMonitor() {
    this.to('ce:CreateAnomalyMonitor');
    return this;
  }

  /**
   * Grants permission to create a new Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalySubscription.html
   */
  public toCreateAnomalySubscription() {
    this.to('ce:CreateAnomalySubscription');
    return this;
  }

  /**
   * Grants permission to create a new Cost Category with the requested name and rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateCostCategoryDefinition.html
   */
  public toCreateCostCategoryDefinition() {
    this.to('ce:CreateCostCategoryDefinition');
    return this;
  }

  /**
   * Grants permission to delete an Anomaly Monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalyMonitor.html
   */
  public toDeleteAnomalyMonitor() {
    this.to('ce:DeleteAnomalyMonitor');
    return this;
  }

  /**
   * Grants permission to delete an Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalySubscription.html
   */
  public toDeleteAnomalySubscription() {
    this.to('ce:DeleteAnomalySubscription');
    return this;
  }

  /**
   * Grants permission to delete a Cost Category
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteCostCategoryDefinition.html
   */
  public toDeleteCostCategoryDefinition() {
    this.to('ce:DeleteCostCategoryDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve descriptions such as the name, ARN, rules, definition, and effective dates of a Cost Category
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeCostCategoryDefinition.html
   */
  public toDescribeCostCategoryDefinition() {
    this.to('ce:DescribeCostCategoryDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve anomalies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html
   */
  public toGetAnomalies() {
    this.to('ce:GetAnomalies');
    return this;
  }

  /**
   * Grants permission to query Anomaly Monitors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalyMonitors.html
   */
  public toGetAnomalyMonitors() {
    this.to('ce:GetAnomalyMonitors');
    return this;
  }

  /**
   * Grants permission to query Anomaly Subscriptions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html
   */
  public toGetAnomalySubscriptions() {
    this.to('ce:GetAnomalySubscriptions');
    return this;
  }

  /**
   * Grants permission to retrieve the cost and usage metrics for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html
   */
  public toGetCostAndUsage() {
    this.to('ce:GetCostAndUsage');
    return this;
  }

  /**
   * Grants permission to retrieve the cost and usage metrics with resources for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsageWithResources.html
   */
  public toGetCostAndUsageWithResources() {
    this.to('ce:GetCostAndUsageWithResources');
    return this;
  }

  /**
   * Grants permission to retrieve a cost forecast for a forecast time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html
   */
  public toGetCostForecast() {
    this.to('ce:GetCostForecast');
    return this;
  }

  /**
   * Grants permission to retrieve all available filter values for a filter for a period of time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html
   */
  public toGetDimensionValues() {
    this.to('ce:GetDimensionValues');
    return this;
  }

  /**
   * Grants permission to retrieve the reservation coverage for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationCoverage.html
   */
  public toGetReservationCoverage() {
    this.to('ce:GetReservationCoverage');
    return this;
  }

  /**
   * Grants permission to retrieve the reservation recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationPurchaseRecommendation.html
   */
  public toGetReservationPurchaseRecommendation() {
    this.to('ce:GetReservationPurchaseRecommendation');
    return this;
  }

  /**
   * Grants permission to retrieve the reservation utilization for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationUtilization.html
   */
  public toGetReservationUtilization() {
    this.to('ce:GetReservationUtilization');
    return this;
  }

  /**
   * Grants permission to retrieve the rightsizing recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetRightsizingRecommendation.html
   */
  public toGetRightsizingRecommendation() {
    this.to('ce:GetRightsizingRecommendation');
    return this;
  }

  /**
   * Grants permission to retrieve the Savings Plans coverage for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansCoverage.html
   */
  public toGetSavingsPlansCoverage() {
    this.to('ce:GetSavingsPlansCoverage');
    return this;
  }

  /**
   * Grants permission to retrieve the Savings Plans recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansPurchaseRecommendation.html
   */
  public toGetSavingsPlansPurchaseRecommendation() {
    this.to('ce:GetSavingsPlansPurchaseRecommendation');
    return this;
  }

  /**
   * Grants permission to retrieve the Savings Plans utilization for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilization.html
   */
  public toGetSavingsPlansUtilization() {
    this.to('ce:GetSavingsPlansUtilization');
    return this;
  }

  /**
   * Grants permission to retrieve the Savings Plans utilization details for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilizationDetails.html
   */
  public toGetSavingsPlansUtilizationDetails() {
    this.to('ce:GetSavingsPlansUtilizationDetails');
    return this;
  }

  /**
   * Grants permission to query tags for a specified time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTags.html
   */
  public toGetTags() {
    this.to('ce:GetTags');
    return this;
  }

  /**
   * Grants permission to retrieve a usage forecast for a forecast time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetUsageForecast.html
   */
  public toGetUsageForecast() {
    this.to('ce:GetUsageForecast');
    return this;
  }

  /**
   * Grants permission to retrieve names, ARN, and effective dates for all Cost Categories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostCategoryDefinitions.html
   */
  public toListCostCategoryDefinitions() {
    this.to('ce:ListCostCategoryDefinitions');
    return this;
  }

  /**
   * Grants permission to provide feedback on detected anomalies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProvideAnomalyFeedback.html
   */
  public toProvideAnomalyFeedback() {
    this.to('ce:ProvideAnomalyFeedback');
    return this;
  }

  /**
   * Grants permission to update an existing Anomaly Monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalyMonitor.html
   */
  public toUpdateAnomalyMonitor() {
    this.to('ce:UpdateAnomalyMonitor');
    return this;
  }

  /**
   * Grants permission to update an existing Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html
   */
  public toUpdateAnomalySubscription() {
    this.to('ce:UpdateAnomalySubscription');
    return this;
  }

  /**
   * Grants permission to update an existing Cost Category
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostCategoryDefinition.html
   */
  public toUpdateCostCategoryDefinition() {
    this.to('ce:UpdateCostCategoryDefinition');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateAnomalyMonitor",
      "CreateAnomalySubscription",
      "CreateCostCategoryDefinition",
      "DeleteAnomalyMonitor",
      "DeleteAnomalySubscription",
      "DeleteCostCategoryDefinition",
      "ProvideAnomalyFeedback",
      "UpdateAnomalyMonitor",
      "UpdateAnomalySubscription",
      "UpdateCostCategoryDefinition"
    ],
    "Read": [
      "DescribeCostCategoryDefinition",
      "GetAnomalies",
      "GetAnomalyMonitors",
      "GetAnomalySubscriptions",
      "GetCostAndUsage",
      "GetCostAndUsageWithResources",
      "GetCostForecast",
      "GetDimensionValues",
      "GetReservationCoverage",
      "GetReservationPurchaseRecommendation",
      "GetReservationUtilization",
      "GetRightsizingRecommendation",
      "GetSavingsPlansCoverage",
      "GetSavingsPlansPurchaseRecommendation",
      "GetSavingsPlansUtilization",
      "GetSavingsPlansUtilizationDetails",
      "GetTags",
      "GetUsageForecast"
    ],
    "List": [
      "ListCostCategoryDefinitions"
    ]
  };
}
