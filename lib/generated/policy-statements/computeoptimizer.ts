import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete recommendation preferences
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceType()
   *
   * Dependent actions:
   * - autoscaling:DescribeAutoScalingGroups
   * - ec2:DescribeInstances
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DeleteRecommendationPreferences.html
   */
  public toDeleteRecommendationPreferences() {
    return this.to('DeleteRecommendationPreferences');
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
   * Grants permission to export AutoScaling group recommendations to S3 for the provided accounts
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
   * Grants permission to export EBS volume recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetEBSVolumeRecommendations
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEBSVolumeRecommendations.html
   */
  public toExportEBSVolumeRecommendations() {
    return this.to('ExportEBSVolumeRecommendations');
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
   * Grants permission to export ECS service recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetECSServiceRecommendations
   * - ecs:ListClusters
   * - ecs:ListServices
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportECSServiceRecommendations.html
   */
  public toExportECSServiceRecommendations() {
    return this.to('ExportECSServiceRecommendations');
  }

  /**
   * Grants permission to export idle recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetIdleRecommendations
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportIdleRecommendations.html
   */
  public toExportIdleRecommendations() {
    return this.to('ExportIdleRecommendations');
  }

  /**
   * Grants permission to export Lambda function recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetLambdaFunctionRecommendations
   * - lambda:ListFunctions
   * - lambda:ListProvisionedConcurrencyConfigs
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLambdaFunctionRecommendations.html
   */
  public toExportLambdaFunctionRecommendations() {
    return this.to('ExportLambdaFunctionRecommendations');
  }

  /**
   * Grants permission to export license recommendations to S3 for the provided account(s)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetLicenseRecommendations
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLicenseRecommendations.html
   */
  public toExportLicenseRecommendations() {
    return this.to('ExportLicenseRecommendations');
  }

  /**
   * Grants permission to export rds recommendations to S3 for the provided accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - compute-optimizer:GetRDSDatabaseRecommendations
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportRDSDatabaseRecommendations.html
   */
  public toExportRDSDatabaseRecommendations() {
    return this.to('ExportRDSDatabaseRecommendations');
  }

  /**
   * Grants permission to get recommendations for the provided AutoScaling groups
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
   * Grants permission to get recommendations for the provided EBS volumes
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
   * Grants permission to get the recommendation projected metrics of the specified ECS service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetECSServiceRecommendationProjectedMetrics.html
   */
  public toGetECSServiceRecommendationProjectedMetrics() {
    return this.to('GetECSServiceRecommendationProjectedMetrics');
  }

  /**
   * Grants permission to get recommendations for the provided ECS services
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ecs:ListClusters
   * - ecs:ListServices
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetECSServiceRecommendations.html
   */
  public toGetECSServiceRecommendations() {
    return this.to('GetECSServiceRecommendations');
  }

  /**
   * Grants permission to get recommendation preferences that are in effect
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifResourceType()
   *
   * Dependent actions:
   * - autoscaling:DescribeAutoScalingGroups
   * - autoscaling:DescribeAutoScalingInstances
   * - ec2:DescribeInstances
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEffectiveRecommendationPreferences.html
   */
  public toGetEffectiveRecommendationPreferences() {
    return this.to('GetEffectiveRecommendationPreferences');
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
   * Grants permission to get the enrollment statuses for member accounts of the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatusesForOrganization.html
   */
  public toGetEnrollmentStatusesForOrganization() {
    return this.to('GetEnrollmentStatusesForOrganization');
  }

  /**
   * Grants permission to get idle recommendations for the specified account(s)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetIdleRecommendations.html
   */
  public toGetIdleRecommendations() {
    return this.to('GetIdleRecommendations');
  }

  /**
   * Grants permission to get recommendations for the provided Lambda functions
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
   * Grants permission to get license recommendations for the specified account(s)
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetLicenseRecommendations.html
   */
  public toGetLicenseRecommendations() {
    return this.to('GetLicenseRecommendations');
  }

  /**
   * Grants permission to get the recommendation projected metrics of the specified instance
   *
   * Access Level: List
   *
   * Dependent actions:
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRDSDatabaseRecommendationProjectedMetrics.html
   */
  public toGetRDSDatabaseRecommendationProjectedMetrics() {
    return this.to('GetRDSDatabaseRecommendationProjectedMetrics');
  }

  /**
   * Grants permission to get rds recommendations for the specified account(s)
   *
   * Access Level: List
   *
   * Dependent actions:
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRDSDatabaseRecommendations.html
   */
  public toGetRDSDatabaseRecommendations() {
    return this.to('GetRDSDatabaseRecommendations');
  }

  /**
   * Grants permission to get recommendation preferences
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifResourceType()
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationPreferences.html
   */
  public toGetRecommendationPreferences() {
    return this.to('GetRecommendationPreferences');
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
   * Grants permission to put recommendation preferences
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceType()
   *
   * Dependent actions:
   * - autoscaling:DescribeAutoScalingGroups
   * - autoscaling:DescribeAutoScalingInstances
   * - ec2:DescribeInstances
   * - rds:DescribeDBClusters
   * - rds:DescribeDBInstances
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_PutRecommendationPreferences.html
   */
  public toPutRecommendationPreferences() {
    return this.to('PutRecommendationPreferences');
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
    Write: [
      'DeleteRecommendationPreferences',
      'ExportAutoScalingGroupRecommendations',
      'ExportEBSVolumeRecommendations',
      'ExportEC2InstanceRecommendations',
      'ExportECSServiceRecommendations',
      'ExportIdleRecommendations',
      'ExportLambdaFunctionRecommendations',
      'ExportLicenseRecommendations',
      'ExportRDSDatabaseRecommendations',
      'PutRecommendationPreferences',
      'UpdateEnrollmentStatus'
    ],
    List: [
      'DescribeRecommendationExportJobs',
      'GetAutoScalingGroupRecommendations',
      'GetEBSVolumeRecommendations',
      'GetEC2InstanceRecommendations',
      'GetEC2RecommendationProjectedMetrics',
      'GetECSServiceRecommendationProjectedMetrics',
      'GetECSServiceRecommendations',
      'GetEnrollmentStatus',
      'GetEnrollmentStatusesForOrganization',
      'GetIdleRecommendations',
      'GetLambdaFunctionRecommendations',
      'GetLicenseRecommendations',
      'GetRDSDatabaseRecommendationProjectedMetrics',
      'GetRDSDatabaseRecommendations',
      'GetRecommendationSummaries'
    ],
    Read: [
      'GetEffectiveRecommendationPreferences',
      'GetRecommendationPreferences'
    ]
  };

  /**
   * Filters access by the resource type
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html
   *
   * Applies to actions:
   * - .toDeleteRecommendationPreferences()
   * - .toGetEffectiveRecommendationPreferences()
   * - .toGetRecommendationPreferences()
   * - .toPutRecommendationPreferences()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceType`, value, operator ?? 'StringLike');
  }
}
