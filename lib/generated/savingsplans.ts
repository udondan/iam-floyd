import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [savingsplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssavingsplans.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Savingsplans extends PolicyStatement {
  public servicePrefix = 'savingsplans';

  /**
   * Statement provider for service [savingsplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssavingsplans.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a savings plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_CreateSavingsPlan.html
   */
  public toCreateSavingsPlan() {
    return this.to('CreateSavingsPlan');
  }

  /**
   * Grants permission to delete the queued savings plan associated with customers account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DeleteQueuedSavingsPlan.html
   */
  public toDeleteQueuedSavingsPlan() {
    return this.to('DeleteQueuedSavingsPlan');
  }

  /**
   * Grants permission to describe the rates associated with customers savings plan
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlanRates.html
   */
  public toDescribeSavingsPlanRates() {
    return this.to('DescribeSavingsPlanRates');
  }

  /**
   * Grants permission to describe the savings plans associated with customers account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlans.html
   */
  public toDescribeSavingsPlans() {
    return this.to('DescribeSavingsPlans');
  }

  /**
   * Grants permission to describe the rates assciated with savings plans offerings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferingRates.html
   */
  public toDescribeSavingsPlansOfferingRates() {
    return this.to('DescribeSavingsPlansOfferingRates');
  }

  /**
   * Grants permission to describe the savings plans offerings that customer is eligible to purchase
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferings.html
   */
  public toDescribeSavingsPlansOfferings() {
    return this.to('DescribeSavingsPlansOfferings');
  }

  /**
   * Grants permission to list tags for a savings plan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a savings plan
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a savings plan
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSavingsPlan',
      'DeleteQueuedSavingsPlan'
    ],
    Read: [
      'DescribeSavingsPlanRates',
      'DescribeSavingsPlans',
      'DescribeSavingsPlansOfferingRates',
      'DescribeSavingsPlansOfferings'
    ],
    List: [
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type savingsplan to the statement
   *
   * https://docs.aws.amazon.com/savingsplans/latest/userguide/API_SavingsPlan.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSavingsplan(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Savingsplans.defaultPartition }:savingsplans::${ account || '*' }:savingsplan/${ resourceId }`);
  }
}
