import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elementalactivations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalActivations extends PolicyStatement {
  public servicePrefix = 'elemental-activations';
  protected actionList: Actions = {
    "DownloadSoftware": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "Download the Software files for AWS Elemental Appliances and Software Purchases",
      "accessLevel": "List"
    },
    "GenerateLicenses": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "Generate Software Licenses for AWS Elemental Appliances and Software Purchases",
      "accessLevel": "List"
    },
    "GetActivation": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "Describe an activation",
      "accessLevel": "Read",
      "resourceTypes": {
        "activation": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "This action lists tags for an AWS Elemental Activations resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "activation": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "This action adds a tag for an AWS Elemental Activations resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "activation": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "description": "This action removes a tag from an AWS Elemental Activations resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "activation": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "activation": {
      "name": "activation",
      "url": "https://docs.aws.amazon.com/elemental-appliances-software/",
      "arn": "arn:${Partition}:elemental-activations:${Region}:${Account}:activation/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elementalactivations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Download the Software files for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public downloadSoftware() {
    this.add('elemental-activations:DownloadSoftware');
    return this;
  }

  /**
   * Generate Software Licenses for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public generateLicenses() {
    this.add('elemental-activations:GenerateLicenses');
    return this;
  }

  /**
   * Describe an activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public getActivation() {
    this.add('elemental-activations:GetActivation');
    return this;
  }

  /**
   * This action lists tags for an AWS Elemental Activations resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public listTagsForResource() {
    this.add('elemental-activations:ListTagsForResource');
    return this;
  }

  /**
   * This action adds a tag for an AWS Elemental Activations resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public tagResource() {
    this.add('elemental-activations:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Elemental Activations resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public untagResource() {
    this.add('elemental-activations:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type activation to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivation(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elemental-activations:${Region}:${Account}:activation/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'ArnEquals');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - activation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
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
