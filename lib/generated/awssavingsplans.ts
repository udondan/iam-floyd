import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [savingsplans](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssavingsplans.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Savingsplans extends PolicyStatement {
  public servicePrefix = 'savingsplans';
  protected actionList: Actions = {
    "CreateSavingsPlan": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_CreateSavingsPlan.html",
      "description": "Grants permission to create a savings plan",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeSavingsPlanRates": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlanRates.html",
      "description": "Grants permission to describe the rates associated with customers savings plan",
      "accessLevel": "Read",
      "resourceTypes": {
        "savingsplan": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeSavingsPlans": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlans.html",
      "description": "Grants permission to describe the savings plans associated with customers account",
      "accessLevel": "Read",
      "resourceTypes": {
        "savingsplan": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DescribeSavingsPlansOfferingRates": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferingRates.html",
      "description": "Grants permission to describe the rates assciated with savings plans offerings",
      "accessLevel": "Read"
    },
    "DescribeSavingsPlansOfferings": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferings.html",
      "description": "Grants permission to describe the savings plans offerings that customer is eligible to purchase",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a savings plan",
      "accessLevel": "List",
      "resourceTypes": {
        "savingsplan": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a savings plan",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "savingsplan": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag a savings plan",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "savingsplan": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "savingsplan": {
      "name": "savingsplan",
      "url": "https://docs.aws.amazon.com/savingsplans/latest/userguide/API_SavingsPlan.html",
      "arn": "arn:${Partition}:savingsplans::${Account}:savingsplan/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [savingsplans](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssavingsplans.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
  public createSavingsPlan() {
    this.add('savingsplans:CreateSavingsPlan');
    return this;
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
  public describeSavingsPlanRates() {
    this.add('savingsplans:DescribeSavingsPlanRates');
    return this;
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
  public describeSavingsPlans() {
    this.add('savingsplans:DescribeSavingsPlans');
    return this;
  }

  /**
   * Grants permission to describe the rates assciated with savings plans offerings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferingRates.html
   */
  public describeSavingsPlansOfferingRates() {
    this.add('savingsplans:DescribeSavingsPlansOfferingRates');
    return this;
  }

  /**
   * Grants permission to describe the savings plans offerings that customer is eligible to purchase
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferings.html
   */
  public describeSavingsPlansOfferings() {
    this.add('savingsplans:DescribeSavingsPlansOfferings');
    return this;
  }

  /**
   * Grants permission to list tags for a savings plan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('savingsplans:ListTagsForResource');
    return this;
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
  public tagResource() {
    this.add('savingsplans:TagResource');
    return this;
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
  public untagResource() {
    this.add('savingsplans:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type savingsplan to the statement
   *
   * https://docs.aws.amazon.com/savingsplans/latest/userguide/API_SavingsPlan.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSavingsplan(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:savingsplans::${Account}:savingsplan/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .createSavingsPlan()
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .describeSavingsPlanRates()
   * - .describeSavingsPlans()
   *
   * Applies to resource types:
   * - savingsplan
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .createSavingsPlan()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
