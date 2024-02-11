import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cost-optimization-hub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostoptimizationhub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CostOptimizationHub extends PolicyStatement {
  public servicePrefix = 'cost-optimization-hub';

  /**
   * Statement provider for service [cost-optimization-hub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostoptimizationhub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_GetPreferences.html
   */
  public toGetPreferences() {
    return this.to('GetPreferences');
  }

  /**
   * Grants permission to get resource configuration and estimated cost impact for a recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_GetRecommendation.html
   */
  public toGetRecommendation() {
    return this.to('GetRecommendation');
  }

  /**
   * Grants permission to list enrollment statuses for the specified account or all members under a management account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_ListEnrollmentStatuses.html
   */
  public toListEnrollmentStatuses() {
    return this.to('ListEnrollmentStatuses');
  }

  /**
   * Grants permission to list recommendation summaries by group
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cost-optimization-hub:GetRecommendation
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_ListRecommendationSummaries.html
   */
  public toListRecommendationSummaries() {
    return this.to('ListRecommendationSummaries');
  }

  /**
   * Grants permission to list summary view of recommendations
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cost-optimization-hub:GetRecommendation
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_ListRecommendations.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to update the enrollment status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_UpdateEnrollmentStatus.html
   */
  public toUpdateEnrollmentStatus() {
    return this.to('UpdateEnrollmentStatus');
  }

  /**
   * Grants permission to update preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostOptimizationHub_UpdateEnrollmentStatus.html
   */
  public toUpdatePreferences() {
    return this.to('UpdatePreferences');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetPreferences',
      'GetRecommendation'
    ],
    List: [
      'ListEnrollmentStatuses',
      'ListRecommendationSummaries',
      'ListRecommendations'
    ],
    Write: [
      'UpdateEnrollmentStatus',
      'UpdatePreferences'
    ]
  };
}
