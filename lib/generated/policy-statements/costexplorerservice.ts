import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Anomaly Monitor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html
   */
  public toGetAnomalySubscriptions() {
    return this.to('GetAnomalySubscriptions');
  }

  /**
   * Grants permission to retrieve approximate usage record count for the chosen resource, level, and hourly granularity preferences, derived from the past month's usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetApproximateUsageRecords() {
    return this.to('GetApproximateUsageRecords');
  }

  /**
   * Grants permission to view whether existing or fine-grained IAM actions are being used to control authorization to Billing, Cost Management, and Account consoles
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetConsoleActionSetEnforced() {
    return this.to('GetConsoleActionSetEnforced');
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
   * Grants permission to query Cost Catagory names and values for a specified time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostCategories.html
   */
  public toGetCostCategories() {
    return this.to('GetCostCategories');
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
   * Grants permission to retrieve the Savings Plan recommendation details for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlanPurchaseRecommendationDetails.html
   */
  public toGetSavingsPlanPurchaseRecommendationDetails() {
    return this.to('GetSavingsPlanPurchaseRecommendationDetails');
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
   * Grants permission to list Cost Allocation Tags
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostAllocationTags.html
   */
  public toListCostAllocationTags() {
    return this.to('ListCostAllocationTags');
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
   * Grants permission to retrieve a list of your historical recommendation generations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListSavingsPlansPurchaseRecommendationGeneration.html
   */
  public toListSavingsPlansPurchaseRecommendationGeneration() {
    return this.to('ListSavingsPlansPurchaseRecommendationGeneration');
  }

  /**
   * Grants permission to list tags for a Cost Explorer resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Grants permission to request a Savings Plans recommendation generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_StartSavingsPlansPurchaseRecommendationGeneration.html
   */
  public toStartSavingsPlansPurchaseRecommendationGeneration() {
    return this.to('StartSavingsPlansPurchaseRecommendationGeneration');
  }

  /**
   * Grants permission to tag a Cost Explorer resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a Cost Explorer resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing Anomaly Monitor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html
   */
  public toUpdateAnomalySubscription() {
    return this.to('UpdateAnomalySubscription');
  }

  /**
   * Grants permission to change whether existing or fine-grained IAM actions will be used to control authorization to Billing, Cost Management, and Account consoles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdateConsoleActionSetEnforced() {
    return this.to('UpdateConsoleActionSetEnforced');
  }

  /**
   * Grants permission to update existing Cost Allocation Tags status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostAllocationTagsStatus.html
   */
  public toUpdateCostAllocationTagsStatus() {
    return this.to('UpdateCostAllocationTagsStatus');
  }

  /**
   * Grants permission to update an existing Cost Category
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    Write: [
      'CreateAnomalyMonitor',
      'CreateAnomalySubscription',
      'CreateCostCategoryDefinition',
      'CreateNotificationSubscription',
      'CreateReport',
      'DeleteAnomalyMonitor',
      'DeleteAnomalySubscription',
      'DeleteCostCategoryDefinition',
      'DeleteNotificationSubscription',
      'DeleteReport',
      'ProvideAnomalyFeedback',
      'StartSavingsPlansPurchaseRecommendationGeneration',
      'UpdateAnomalyMonitor',
      'UpdateAnomalySubscription',
      'UpdateConsoleActionSetEnforced',
      'UpdateCostAllocationTagsStatus',
      'UpdateCostCategoryDefinition',
      'UpdateNotificationSubscription',
      'UpdatePreferences',
      'UpdateReport'
    ],
    Read: [
      'DescribeCostCategoryDefinition',
      'DescribeNotificationSubscription',
      'DescribeReport',
      'GetAnomalies',
      'GetAnomalyMonitors',
      'GetAnomalySubscriptions',
      'GetApproximateUsageRecords',
      'GetConsoleActionSetEnforced',
      'GetCostAndUsage',
      'GetCostAndUsageWithResources',
      'GetCostCategories',
      'GetCostForecast',
      'GetDimensionValues',
      'GetPreferences',
      'GetReservationCoverage',
      'GetReservationPurchaseRecommendation',
      'GetReservationUtilization',
      'GetRightsizingRecommendation',
      'GetSavingsPlanPurchaseRecommendationDetails',
      'GetSavingsPlansCoverage',
      'GetSavingsPlansPurchaseRecommendation',
      'GetSavingsPlansUtilization',
      'GetSavingsPlansUtilizationDetails',
      'GetTags',
      'GetUsageForecast',
      'ListTagsForResource'
    ],
    List: [
      'ListCostAllocationTags',
      'ListCostCategoryDefinitions',
      'ListSavingsPlansPurchaseRecommendationGeneration'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type anomalysubscription to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnomalysubscription(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ce::${ account ?? this.defaultAccount }:anomalysubscription/${ identifier }`);
  }

  /**
   * Adds a resource of type anomalymonitor to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnomalymonitor(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ce::${ account ?? this.defaultAccount }:anomalymonitor/${ identifier }`);
  }

  /**
   * Adds a resource of type costcategory to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCostcategory(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ce::${ account ?? this.defaultAccount }:costcategory/${ identifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAnomalyMonitor()
   * - .toCreateAnomalySubscription()
   * - .toCreateCostCategoryDefinition()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteAnomalyMonitor()
   * - .toDeleteAnomalySubscription()
   * - .toDeleteCostCategoryDefinition()
   * - .toDescribeCostCategoryDefinition()
   * - .toGetAnomalies()
   * - .toGetAnomalyMonitors()
   * - .toGetAnomalySubscriptions()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAnomalyMonitor()
   * - .toUpdateAnomalySubscription()
   * - .toUpdateCostCategoryDefinition()
   *
   * Applies to resource types:
   * - anomalysubscription
   * - anomalymonitor
   * - costcategory
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAnomalyMonitor()
   * - .toCreateAnomalySubscription()
   * - .toCreateCostCategoryDefinition()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
