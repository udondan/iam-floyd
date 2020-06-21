import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service savingsplans
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssavingsplans.html
 */
export class Savingsplans extends PolicyStatement {
  public servicePrefix = 'savingsplans';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
    "savingsplan": {
      "name": "savingsplan",
      "url": "https://docs.aws.amazon.com/savingsplans/latest/userguide/API_SavingsPlan.html",
      "arn": "arn:${Partition}:savingsplans:${Region}:${Account}:savingsplan/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service savingsplans
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssavingsplans.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to create a savings plan
   *
   * Access Level: Write
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
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onSavingsplan(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:savingsplans:${Region}:${Account}:savingsplan/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
