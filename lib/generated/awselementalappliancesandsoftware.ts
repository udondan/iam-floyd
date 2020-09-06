import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [elemental-appliances-software](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalappliancesandsoftware.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalAppliancesSoftware extends PolicyStatement {
  public servicePrefix = 'elemental-appliances-software';
  protected actionList: Actions = {
    "CreateQuote": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "Create a quote",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "quote": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GetQuote": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "Describe a quote",
      "accessLevel": "Read",
      "resourceTypes": {
        "quote": {
          "required": true
        }
      }
    },
    "ListQuotes": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "List the quotes in the user account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "This action lists tags for an AWS Elemental Appliances and Software resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "quote": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "This action tags an AWS Elemental Appliances and Software resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "quote": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "This action removes a tag from an AWS Elemental Appliances and Software resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "quote": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateQuote": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "description": "Modify a quote",
      "accessLevel": "Write",
      "resourceTypes": {
        "quote": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "quote": {
      "name": "quote",
      "url": "https://docs.aws.amazon.com/elemental-appliances-software",
      "arn": "arn:${Partition}:elemental-appliances-software:${Region}:${Account}:quote/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [elemental-appliances-software](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalappliancesandsoftware.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a quote
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateQuote() {
    this.add('elemental-appliances-software:CreateQuote');
    return this;
  }

  /**
   * Describe a quote
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetQuote() {
    this.add('elemental-appliances-software:GetQuote');
    return this;
  }

  /**
   * List the quotes in the user account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListQuotes() {
    this.add('elemental-appliances-software:ListQuotes');
    return this;
  }

  /**
   * This action lists tags for an AWS Elemental Appliances and Software resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListTagsForResource() {
    this.add('elemental-appliances-software:ListTagsForResource');
    return this;
  }

  /**
   * This action tags an AWS Elemental Appliances and Software resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toTagResource() {
    this.add('elemental-appliances-software:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Elemental Appliances and Software resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUntagResource() {
    this.add('elemental-appliances-software:UntagResource');
    return this;
  }

  /**
   * Modify a quote
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateQuote() {
    this.add('elemental-appliances-software:UpdateQuote');
    return this;
  }

  /**
   * Adds a resource of type quote to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuote(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elemental-appliances-software:${Region}:${Account}:quote/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
