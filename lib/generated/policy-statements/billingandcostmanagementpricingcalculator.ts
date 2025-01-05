import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [bcm-pricing-calculator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementpricingcalculator.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BcmPricingCalculator extends PolicyStatement {
  public servicePrefix = 'bcm-pricing-calculator';

  /**
   * Statement provider for service [bcm-pricing-calculator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementpricingcalculator.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new bill estimate. Charge is incurred for successful bill estimates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_CreateBillEstimate.html
   */
  public toCreateBillEstimate() {
    return this.to('CreateBillEstimate');
  }

  /**
   * Grants permission to create a new bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_CreateBillScenario.html
   */
  public toCreateBillScenario() {
    return this.to('CreateBillScenario');
  }

  /**
   * Grants permission to create new commitments or remove existing commitment from a specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchCreateBillScenarioCommitmentModification.html
   */
  public toCreateBillScenarioCommitmentModification() {
    return this.to('CreateBillScenarioCommitmentModification');
  }

  /**
   * Grants permission to create usage in the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchCreateBillScenarioUsageModification.html
   */
  public toCreateBillScenarioUsageModification() {
    return this.to('CreateBillScenarioUsageModification');
  }

  /**
   * Grants permission to create a new Workload estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_CreateWorkloadEstimate.html
   */
  public toCreateWorkloadEstimate() {
    return this.to('CreateWorkloadEstimate');
  }

  /**
   * Grants permission to create usage in the specified workload estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchCreateWorkloadEstimateUsage.html
   */
  public toCreateWorkloadEstimateUsage() {
    return this.to('CreateWorkloadEstimateUsage');
  }

  /**
   * Grants permission to delete bill estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_DeleteBillEstimate.html
   */
  public toDeleteBillEstimate() {
    return this.to('DeleteBillEstimate');
  }

  /**
   * Grants permission to delete a bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_DeleteBillScenario.html
   */
  public toDeleteBillScenario() {
    return this.to('DeleteBillScenario');
  }

  /**
   * Grants permission to delete newly added commitments from the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchDeleteBillScenarioCommitmentModification.html
   */
  public toDeleteBillScenarioCommitmentModification() {
    return this.to('DeleteBillScenarioCommitmentModification');
  }

  /**
   * Grants permission to delete newly added usage from the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchDeleteBillScenarioUsageModification.html
   */
  public toDeleteBillScenarioUsageModification() {
    return this.to('DeleteBillScenarioUsageModification');
  }

  /**
   * Grants permission to delete the specified workload estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_DeleteWorkloadEstimate.html
   */
  public toDeleteWorkloadEstimate() {
    return this.to('DeleteWorkloadEstimate');
  }

  /**
   * Grants permission to delete newly added usage from the specified workload estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchDeleteWorkloadEstimateUsage.html
   */
  public toDeleteWorkloadEstimateUsage() {
    return this.to('DeleteWorkloadEstimateUsage');
  }

  /**
   * Grants permission to retrieve details of a bill estimate including estimated cost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_GetBillEstimate.html
   */
  public toGetBillEstimate() {
    return this.to('GetBillEstimate');
  }

  /**
   * Grants permission to retrieve information associated with a bill scenario
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_GetBillScenario.html
   */
  public toGetBillScenario() {
    return this.to('GetBillScenario');
  }

  /**
   * Grants permission to retrieve applicable rate type preferences for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_GetPreferences.html
   */
  public toGetPreferences() {
    return this.to('GetPreferences');
  }

  /**
   * Grants permission to retrieve information associated with a workload estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_GetWorkloadEstimate.html
   */
  public toGetWorkloadEstimate() {
    return this.to('GetWorkloadEstimate');
  }

  /**
   * Grants permission to list commitments associated with the specified bill estimate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillEstimateCommitments.html
   */
  public toListBillEstimateCommitments() {
    return this.to('ListBillEstimateCommitments');
  }

  /**
   * Grants permission to list added or removed commitments for a specified bill estimate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillEstimateInputCommitmentModifications.html
   */
  public toListBillEstimateInputCommitmentModifications() {
    return this.to('ListBillEstimateInputCommitmentModifications');
  }

  /**
   * Grants permission to list added or modified usage for a specified bill estimate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillEstimateInputUsageModifications.html
   */
  public toListBillEstimateInputUsageModifications() {
    return this.to('ListBillEstimateInputUsageModifications');
  }

  /**
   * Grants permission to list result line items for a specified bill estimate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillEstimateLineItems.html
   */
  public toListBillEstimateLineItems() {
    return this.to('ListBillEstimateLineItems');
  }

  /**
   * Grants permission to list bill estimates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillEstimates.html
   */
  public toListBillEstimates() {
    return this.to('ListBillEstimates');
  }

  /**
   * Grants permission to list commitments included in a bill scenario
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillScenarioCommitmentModifications.html
   */
  public toListBillScenarioCommitmentModifications() {
    return this.to('ListBillScenarioCommitmentModifications');
  }

  /**
   * Grants permission to list usage lines of a specified bill scenario
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillScenarioUsageModifications.html
   */
  public toListBillScenarioUsageModifications() {
    return this.to('ListBillScenarioUsageModifications');
  }

  /**
   * Grants permission to list bill scenarios
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListBillScenarios.html
   */
  public toListBillScenarios() {
    return this.to('ListBillScenarios');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list usage lines for the specified workload estimate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListWorkloadEstimateUsage.html
   */
  public toListWorkloadEstimateUsage() {
    return this.to('ListWorkloadEstimateUsage');
  }

  /**
   * Grants permission to list workload estimates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_ListWorkloadEstimates.html
   */
  public toListWorkloadEstimates() {
    return this.to('ListWorkloadEstimates');
  }

  /**
   * Grants permission to add a tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update bill estimate name and expiration date time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_UpdateBillEstimate.html
   */
  public toUpdateBillEstimate() {
    return this.to('UpdateBillEstimate');
  }

  /**
   * Grants permission to update name and expiration date time of the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_UpdateBillScenario.html
   */
  public toUpdateBillScenario() {
    return this.to('UpdateBillScenario');
  }

  /**
   * Grants permission to update commitment group of commitments in the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateBillScenarioCommitmentModification.html
   */
  public toUpdateBillScenarioCommitmentModification() {
    return this.to('UpdateBillScenarioCommitmentModification');
  }

  /**
   * Grants permission to update usage amount, usage hour, and usage group in the specified bill scenario
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateBillScenarioUsageModification.html
   */
  public toUpdateBillScenarioUsageModification() {
    return this.to('UpdateBillScenarioUsageModification');
  }

  /**
   * Grants permission to update rate type preferences for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_UpdatePreferences.html
   */
  public toUpdatePreferences() {
    return this.to('UpdatePreferences');
  }

  /**
   * Grants permission to update name and expiration date time of the specified workload estimate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_UpdateWorkloadEstimate.html
   */
  public toUpdateWorkloadEstimate() {
    return this.to('UpdateWorkloadEstimate');
  }

  /**
   * Grants permission to update usage amount and usage group in the specified workload estimate based on the usage id
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateWorkloadEstimateUsage.html
   */
  public toUpdateWorkloadEstimateUsage() {
    return this.to('UpdateWorkloadEstimateUsage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBillEstimate',
      'CreateBillScenario',
      'CreateBillScenarioCommitmentModification',
      'CreateBillScenarioUsageModification',
      'CreateWorkloadEstimate',
      'CreateWorkloadEstimateUsage',
      'DeleteBillEstimate',
      'DeleteBillScenario',
      'DeleteBillScenarioCommitmentModification',
      'DeleteBillScenarioUsageModification',
      'DeleteWorkloadEstimate',
      'DeleteWorkloadEstimateUsage',
      'UpdateBillEstimate',
      'UpdateBillScenario',
      'UpdateBillScenarioCommitmentModification',
      'UpdateBillScenarioUsageModification',
      'UpdatePreferences',
      'UpdateWorkloadEstimate',
      'UpdateWorkloadEstimateUsage'
    ],
    Read: [
      'GetBillEstimate',
      'GetBillScenario',
      'GetPreferences',
      'GetWorkloadEstimate'
    ],
    List: [
      'ListBillEstimateCommitments',
      'ListBillEstimateInputCommitmentModifications',
      'ListBillEstimateInputUsageModifications',
      'ListBillEstimateLineItems',
      'ListBillEstimates',
      'ListBillScenarioCommitmentModifications',
      'ListBillScenarioUsageModifications',
      'ListBillScenarios',
      'ListWorkloadEstimateUsage',
      'ListWorkloadEstimates'
    ],
    Tagging: [
      'ListTagsForResource',
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type bill-estimate to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/pc-bill-estimate.html
   *
   * @param billEstimateId - Identifier for the billEstimateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBillEstimate(billEstimateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-pricing-calculator:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bill-estimate/${ billEstimateId }`);
  }

  /**
   * Adds a resource of type bill-scenario to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/pc-bill-scenario.html
   *
   * @param billScenarioId - Identifier for the billScenarioId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBillScenario(billScenarioId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-pricing-calculator:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bill-scenario/${ billScenarioId }`);
  }

  /**
   * Adds a resource of type workload-estimate to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/pc-workload-estimate.html
   *
   * @param workloadEstimateId - Identifier for the workloadEstimateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkloadEstimate(workloadEstimateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-pricing-calculator:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workload-estimate/${ workloadEstimateId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
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
