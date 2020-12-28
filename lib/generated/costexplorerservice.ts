import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ce extends PolicyStatement {
  public servicePrefix = 'ce';

  /**
   * Statement provider for service [ce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html).
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
    return this.to('CreateAnomalyMonitor');
  }

  /**
   * Grants permission to create a new Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalySubscription.html
   */
  public toCreateAnomalySubscription() {
    return this.to('CreateAnomalySubscription');
  }

  /**
   * Grants permission to create a new Cost Category with the requested name and rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateCostCategoryDefinition.html
   */
  public toCreateCostCategoryDefinition() {
    return this.to('CreateCostCategoryDefinition');
  }

  /**
   * Grants permission to create Reservation expiration alerts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toCreateNotificationSubscription() {
    return this.to('CreateNotificationSubscription');
  }

  /**
   * Grants permission to create Cost Explorer Reports
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toCreateReport() {
    return this.to('CreateReport');
  }

  /**
   * Grants permission to delete an Anomaly Monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalyMonitor.html
   */
  public toDeleteAnomalyMonitor() {
    return this.to('DeleteAnomalyMonitor');
  }

  /**
   * Grants permission to delete an Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalySubscription.html
   */
  public toDeleteAnomalySubscription() {
    return this.to('DeleteAnomalySubscription');
  }

  /**
   * Grants permission to delete a Cost Category
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteCostCategoryDefinition.html
   */
  public toDeleteCostCategoryDefinition() {
    return this.to('DeleteCostCategoryDefinition');
  }

  /**
   * Grants permission to delete Reservation expiration alerts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDeleteNotificationSubscription() {
    return this.to('DeleteNotificationSubscription');
  }

  /**
   * Grants permission to delete Cost Explorer Reports
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDeleteReport() {
    return this.to('DeleteReport');
  }

  /**
   * Grants permission to retrieve descriptions such as the name, ARN, rules, definition, and effective dates of a Cost Category
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeCostCategoryDefinition.html
   */
  public toDescribeCostCategoryDefinition() {
    return this.to('DescribeCostCategoryDefinition');
  }

  /**
   * Grants permission to view Reservation expiration alerts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDescribeNotificationSubscription() {
    return this.to('DescribeNotificationSubscription');
  }

  /**
   * Grants permission to view Cost Explorer Reports page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDescribeReport() {
    return this.to('DescribeReport');
  }

  /**
   * Grants permission to retrieve anomalies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html
   */
  public toGetAnomalies() {
    return this.to('GetAnomalies');
  }

  /**
   * Grants permission to query Anomaly Monitors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalyMonitors.html
   */
  public toGetAnomalyMonitors() {
    return this.to('GetAnomalyMonitors');
  }

  /**
   * Grants permission to query Anomaly Subscriptions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html
   */
  public toGetAnomalySubscriptions() {
    return this.to('GetAnomalySubscriptions');
  }

  /**
   * Grants permission to retrieve the cost and usage metrics for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html
   */
  public toGetCostAndUsage() {
    return this.to('GetCostAndUsage');
  }

  /**
   * Grants permission to retrieve the cost and usage metrics with resources for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsageWithResources.html
   */
  public toGetCostAndUsageWithResources() {
    return this.to('GetCostAndUsageWithResources');
  }

  /**
   * Grants permission to retrieve a cost forecast for a forecast time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html
   */
  public toGetCostForecast() {
    return this.to('GetCostForecast');
  }

  /**
   * Grants permission to retrieve all available filter values for a filter for a period of time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html
   */
  public toGetDimensionValues() {
    return this.to('GetDimensionValues');
  }

  /**
   * Grants permission to view Cost Explorer Preferences page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetPreferences() {
    return this.to('GetPreferences');
  }

  /**
   * Grants permission to retrieve the reservation coverage for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationCoverage.html
   */
  public toGetReservationCoverage() {
    return this.to('GetReservationCoverage');
  }

  /**
   * Grants permission to retrieve the reservation recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationPurchaseRecommendation.html
   */
  public toGetReservationPurchaseRecommendation() {
    return this.to('GetReservationPurchaseRecommendation');
  }

  /**
   * Grants permission to retrieve the reservation utilization for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationUtilization.html
   */
  public toGetReservationUtilization() {
    return this.to('GetReservationUtilization');
  }

  /**
   * Grants permission to retrieve the rightsizing recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetRightsizingRecommendation.html
   */
  public toGetRightsizingRecommendation() {
    return this.to('GetRightsizingRecommendation');
  }

  /**
   * Grants permission to retrieve the Savings Plans coverage for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansCoverage.html
   */
  public toGetSavingsPlansCoverage() {
    return this.to('GetSavingsPlansCoverage');
  }

  /**
   * Grants permission to retrieve the Savings Plans recommendations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansPurchaseRecommendation.html
   */
  public toGetSavingsPlansPurchaseRecommendation() {
    return this.to('GetSavingsPlansPurchaseRecommendation');
  }

  /**
   * Grants permission to retrieve the Savings Plans utilization for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilization.html
   */
  public toGetSavingsPlansUtilization() {
    return this.to('GetSavingsPlansUtilization');
  }

  /**
   * Grants permission to retrieve the Savings Plans utilization details for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilizationDetails.html
   */
  public toGetSavingsPlansUtilizationDetails() {
    return this.to('GetSavingsPlansUtilizationDetails');
  }

  /**
   * Grants permission to query tags for a specified time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTags.html
   */
  public toGetTags() {
    return this.to('GetTags');
  }

  /**
   * Grants permission to retrieve a usage forecast for a forecast time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetUsageForecast.html
   */
  public toGetUsageForecast() {
    return this.to('GetUsageForecast');
  }

  /**
   * Grants permission to retrieve names, ARN, and effective dates for all Cost Categories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostCategoryDefinitions.html
   */
  public toListCostCategoryDefinitions() {
    return this.to('ListCostCategoryDefinitions');
  }

  /**
   * Grants permission to provide feedback on detected anomalies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProvideAnomalyFeedback.html
   */
  public toProvideAnomalyFeedback() {
    return this.to('ProvideAnomalyFeedback');
  }

  /**
   * Grants permission to update an existing Anomaly Monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalyMonitor.html
   */
  public toUpdateAnomalyMonitor() {
    return this.to('UpdateAnomalyMonitor');
  }

  /**
   * Grants permission to update an existing Anomaly Subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html
   */
  public toUpdateAnomalySubscription() {
    return this.to('UpdateAnomalySubscription');
  }

  /**
   * Grants permission to update an existing Cost Category
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostCategoryDefinition.html
   */
  public toUpdateCostCategoryDefinition() {
    return this.to('UpdateCostCategoryDefinition');
  }

  /**
   * Grants permission to update Reservation expiration alerts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdateNotificationSubscription() {
    return this.to('UpdateNotificationSubscription');
  }

  /**
   * Grants permission to edit Cost Explorer Preferences page
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdatePreferences() {
    return this.to('UpdatePreferences');
  }

  /**
   * Grants permission to update Cost Explorer Reports
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdateReport() {
    return this.to('UpdateReport');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateAnomalyMonitor",
      "CreateAnomalySubscription",
      "CreateCostCategoryDefinition",
      "CreateNotificationSubscription",
      "CreateReport",
      "DeleteAnomalyMonitor",
      "DeleteAnomalySubscription",
      "DeleteCostCategoryDefinition",
      "DeleteNotificationSubscription",
      "DeleteReport",
      "ProvideAnomalyFeedback",
      "UpdateAnomalyMonitor",
      "UpdateAnomalySubscription",
      "UpdateCostCategoryDefinition",
      "UpdateNotificationSubscription",
      "UpdatePreferences",
      "UpdateReport"
    ],
    "Read": [
      "DescribeCostCategoryDefinition",
      "DescribeNotificationSubscription",
      "DescribeReport",
      "GetAnomalies",
      "GetAnomalyMonitors",
      "GetAnomalySubscriptions",
      "GetCostAndUsage",
      "GetCostAndUsageWithResources",
      "GetCostForecast",
      "GetDimensionValues",
      "GetPreferences",
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
