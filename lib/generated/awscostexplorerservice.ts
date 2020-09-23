import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ce](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ce extends PolicyStatement {
  public servicePrefix = 'ce';
  protected actionList: Actions = {
    "CreateAnomalyMonitor": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalyMonitor.html",
      "description": "Grants permission to create a new Anomaly Monitor",
      "accessLevel": "Write"
    },
    "CreateAnomalySubscription": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalySubscription.html",
      "description": "Grants permission to create a new Anomaly Subscription",
      "accessLevel": "Write"
    },
    "CreateCostCategoryDefinition": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateCostCategoryDefinition.html",
      "description": "Grants permission to create a new Cost Category with the requested name and rules",
      "accessLevel": "Write"
    },
    "DeleteAnomalyMonitor": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalyMonitor.html",
      "description": "Grants permission to delete an Anomaly Monitor",
      "accessLevel": "Write"
    },
    "DeleteAnomalySubscription": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalySubscription.html",
      "description": "Grants permission to delete an Anomaly Subscription",
      "accessLevel": "Write"
    },
    "DeleteCostCategoryDefinition": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteCostCategoryDefinition.html",
      "description": "Grants permission to delete a Cost Category",
      "accessLevel": "Write"
    },
    "DescribeCostCategoryDefinition": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeCostCategoryDefinition.html",
      "description": "Grants permission to retrieve descriptions such as the name, ARN, rules, definition, and effective dates of a Cost Category",
      "accessLevel": "Read"
    },
    "GetAnomalies": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html",
      "description": "Grants permission to retrieve anomalies",
      "accessLevel": "Read"
    },
    "GetAnomalyMonitors": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalyMonitors.html",
      "description": "Grants permission to query Anomaly Monitors",
      "accessLevel": "Read"
    },
    "GetAnomalySubscriptions": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html",
      "description": "Grants permission to query Anomaly Subscriptions",
      "accessLevel": "Read"
    },
    "GetCostAndUsage": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html",
      "description": "Grants permission to retrieve the cost and usage metrics for your account",
      "accessLevel": "Read"
    },
    "GetCostAndUsageWithResources": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsageWithResources.html",
      "description": "Grants permission to retrieve the cost and usage metrics with resources for your account",
      "accessLevel": "Read"
    },
    "GetCostForecast": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html",
      "description": "Grants permission to retrieve a cost forecast for a forecast time period",
      "accessLevel": "Read"
    },
    "GetDimensionValues": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html",
      "description": "Grants permission to retrieve all available filter values for a filter for a period of time",
      "accessLevel": "Read"
    },
    "GetReservationCoverage": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationCoverage.html",
      "description": "Grants permission to retrieve the reservation coverage for your account",
      "accessLevel": "Read"
    },
    "GetReservationPurchaseRecommendation": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationPurchaseRecommendation.html",
      "description": "Grants permission to retrieve the reservation recommendations for your account",
      "accessLevel": "Read"
    },
    "GetReservationUtilization": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationUtilization.html",
      "description": "Grants permission to retrieve the reservation utilization for your account",
      "accessLevel": "Read"
    },
    "GetRightsizingRecommendation": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetRightsizingRecommendation.html",
      "description": "Grants permission to retrieve the rightsizing recommendations for your account",
      "accessLevel": "Read"
    },
    "GetSavingsPlansCoverage": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansCoverage.html",
      "description": "Grants permission to retrieve the Savings Plans coverage for your account",
      "accessLevel": "Read"
    },
    "GetSavingsPlansPurchaseRecommendation": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansPurchaseRecommendation.html",
      "description": "Grants permission to retrieve the Savings Plans recommendations for your account",
      "accessLevel": "Read"
    },
    "GetSavingsPlansUtilization": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilization.html",
      "description": "Grants permission to retrieve the Savings Plans utilization for your account",
      "accessLevel": "Read"
    },
    "GetSavingsPlansUtilizationDetails": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilizationDetails.html",
      "description": "Grants permission to retrieve the Savings Plans utilization details for your account",
      "accessLevel": "Read"
    },
    "GetTags": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTags.html",
      "description": "Grants permission to query tags for a specified time period",
      "accessLevel": "Read"
    },
    "GetUsageForecast": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetUsageForecast.html",
      "description": "Grants permission to retrieve a usage forecast for a forecast time period",
      "accessLevel": "Read"
    },
    "ListCostCategoryDefinitions": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostCategoryDefinitions.html",
      "description": "Grants permission to retrieve names, ARN, and effective dates for all Cost Categories",
      "accessLevel": "List"
    },
    "ProvideAnomalyFeedback": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProvideAnomalyFeedback.html",
      "description": "Grants permission to provide feedback on detected anomalies",
      "accessLevel": "Write"
    },
    "UpdateAnomalyMonitor": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalyMonitor.html",
      "description": "Grants permission to update an existing Anomaly Monitor",
      "accessLevel": "Write"
    },
    "UpdateAnomalySubscription": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html",
      "description": "Grants permission to update an existing Anomaly Subscription",
      "accessLevel": "Write"
    },
    "UpdateCostCategoryDefinition": {
      "url": "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostCategoryDefinition.html",
      "description": "Grants permission to update an existing Cost Category",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
    this.add('ce:CreateAnomalyMonitor');
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
    this.add('ce:CreateAnomalySubscription');
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
    this.add('ce:CreateCostCategoryDefinition');
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
    this.add('ce:DeleteAnomalyMonitor');
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
    this.add('ce:DeleteAnomalySubscription');
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
    this.add('ce:DeleteCostCategoryDefinition');
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
    this.add('ce:DescribeCostCategoryDefinition');
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
    this.add('ce:GetAnomalies');
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
    this.add('ce:GetAnomalyMonitors');
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
    this.add('ce:GetAnomalySubscriptions');
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
    this.add('ce:GetCostAndUsage');
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
    this.add('ce:GetCostAndUsageWithResources');
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
    this.add('ce:GetCostForecast');
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
    this.add('ce:GetDimensionValues');
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
    this.add('ce:GetReservationCoverage');
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
    this.add('ce:GetReservationPurchaseRecommendation');
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
    this.add('ce:GetReservationUtilization');
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
    this.add('ce:GetRightsizingRecommendation');
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
    this.add('ce:GetSavingsPlansCoverage');
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
    this.add('ce:GetSavingsPlansPurchaseRecommendation');
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
    this.add('ce:GetSavingsPlansUtilization');
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
    this.add('ce:GetSavingsPlansUtilizationDetails');
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
    this.add('ce:GetTags');
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
    this.add('ce:GetUsageForecast');
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
    this.add('ce:ListCostCategoryDefinitions');
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
    this.add('ce:ProvideAnomalyFeedback');
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
    this.add('ce:UpdateAnomalyMonitor');
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
    this.add('ce:UpdateAnomalySubscription');
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
    this.add('ce:UpdateCostCategoryDefinition');
    return this;
  }
}
