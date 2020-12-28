import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [compute-optimizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ComputeOptimizer extends PolicyStatement {
  public servicePrefix = 'compute-optimizer';

  /**
   * Statement provider for service [compute-optimizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the status of recommendation export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DescribeRecommendationExportJobs.html
   */
  public toDescribeRecommendationExportJobs() {
    return this.to('DescribeRecommendationExportJobs');
  }

  /**
   * Grants permission to export autoscaling group recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - autoscaling:DescribeAutoScalingGroups
   * - compute-optimizer:GetAutoScalingGroupRecommendations
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportAutoScalingGroupRecommendations.html
   */
  public toExportAutoScalingGroupRecommendations() {
    return this.to('ExportAutoScalingGroupRecommendations');
  }

  /**
   * Grants permission to export EC2 instance recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetEC2InstanceRecommendations
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEC2InstanceRecommendations.html
   */
  public toExportEC2InstanceRecommendations() {
    return this.to('ExportEC2InstanceRecommendations');
  }

  /**
   * Grants permission to get recommendations for the provided autoscaling groups
   *
   * Access Level: List
   *
   * Dependent actions:
   * - autoscaling:DescribeAutoScalingGroups
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html
   */
  public toGetAutoScalingGroupRecommendations() {
    return this.to('GetAutoScalingGroupRecommendations');
  }

  /**
   * Grants permission to get recommendations for the provided ebs volumes
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEBSVolumeRecommendations.html
   */
  public toGetEBSVolumeRecommendations() {
    return this.to('GetEBSVolumeRecommendations');
  }

  /**
   * Grants permission to get recommendations for the provided EC2 instances
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html
   */
  public toGetEC2InstanceRecommendations() {
    return this.to('GetEC2InstanceRecommendations');
  }

  /**
   * Grants permission to get the recommendation projected metrics of the specified instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html
   */
  public toGetEC2RecommendationProjectedMetrics() {
    return this.to('GetEC2RecommendationProjectedMetrics');
  }

  /**
   * Grants permission to get the enrollment status for the specified account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html
   */
  public toGetEnrollmentStatus() {
    return this.to('GetEnrollmentStatus');
  }

  /**
   * Grants permission to get recommendations for the provided lambda functions
   *
   * Access Level: List
   *
   * Dependent actions:
   * - lambda:ListFunctions
   * - lambda:ListProvisionedConcurrencyConfigs
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetLambdaFunctionRecommendations.html
   */
  public toGetLambdaFunctionRecommendations() {
    return this.to('GetLambdaFunctionRecommendations');
  }

  /**
   * Grants permission to get the recommendation summaries for the specified account(s)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html
   */
  public toGetRecommendationSummaries() {
    return this.to('GetRecommendationSummaries');
  }

  /**
   * Grants permission to update the enrollment status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html
   */
  public toUpdateEnrollmentStatus() {
    return this.to('UpdateEnrollmentStatus');
  }

  protected accessLevelList: AccessLevelList = {
    "List": [
      "DescribeRecommendationExportJobs",
      "GetAutoScalingGroupRecommendations",
      "GetEBSVolumeRecommendations",
      "GetEC2InstanceRecommendations",
      "GetEC2RecommendationProjectedMetrics",
      "GetEnrollmentStatus",
      "GetLambdaFunctionRecommendations",
      "GetRecommendationSummaries"
    ],
    "Write": [
      "ExportAutoScalingGroupRecommendations",
      "ExportEC2InstanceRecommendations",
      "UpdateEnrollmentStatus"
    ]
  };
}
