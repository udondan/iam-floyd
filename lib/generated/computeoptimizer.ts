import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [compute-optimizer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_computeoptimizer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ComputeOptimizer extends PolicyStatement {
  public servicePrefix = 'compute-optimizer';

  /**
   * Statement provider for service [compute-optimizer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_computeoptimizer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the status of recommendation export jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DescribeRecommendationExportJobs.html
   */
  public toDescribeRecommendationExportJobs() {
    this.to('compute-optimizer:DescribeRecommendationExportJobs');
    return this;
  }

  /**
   * Grants permission to export autoscaling group recommendations to S3 for the provided accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportAutoScalingGroupRecommendations.html
   */
  public toExportAutoScalingGroupRecommendations() {
    this.to('compute-optimizer:ExportAutoScalingGroupRecommendations');
    return this;
  }

  /**
   * Grants permission to export EC2 instance recommendations to S3 for the provided accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEC2InstanceRecommendations.html
   */
  public toExportEC2InstanceRecommendations() {
    this.to('compute-optimizer:ExportEC2InstanceRecommendations');
    return this;
  }

  /**
   * Grants permission to get recommendations for the provided autoscaling groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html
   */
  public toGetAutoScalingGroupRecommendations() {
    this.to('compute-optimizer:GetAutoScalingGroupRecommendations');
    return this;
  }

  /**
   * Grants permission to get recommendations for the provided EC2 instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html
   */
  public toGetEC2InstanceRecommendations() {
    this.to('compute-optimizer:GetEC2InstanceRecommendations');
    return this;
  }

  /**
   * Grants permission to get the recommendation projected metrics of the specified instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html
   */
  public toGetEC2RecommendationProjectedMetrics() {
    this.to('compute-optimizer:GetEC2RecommendationProjectedMetrics');
    return this;
  }

  /**
   * Grants permission to get the enrollment status for the specified account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html
   */
  public toGetEnrollmentStatus() {
    this.to('compute-optimizer:GetEnrollmentStatus');
    return this;
  }

  /**
   * Grants permission to get the recommendation summaries for the specified account(s).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html
   */
  public toGetRecommendationSummaries() {
    this.to('compute-optimizer:GetRecommendationSummaries');
    return this;
  }

  /**
   * Grants permission to update the enrollment status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html
   */
  public toUpdateEnrollmentStatus() {
    this.to('compute-optimizer:UpdateEnrollmentStatus');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "List": [
      "DescribeRecommendationExportJobs",
      "GetAutoScalingGroupRecommendations",
      "GetEC2InstanceRecommendations",
      "GetEC2RecommendationProjectedMetrics",
      "GetEnrollmentStatus",
      "GetRecommendationSummaries"
    ],
    "Write": [
      "ExportAutoScalingGroupRecommendations",
      "ExportEC2InstanceRecommendations",
      "UpdateEnrollmentStatus"
    ]
  };
}
