import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [dlm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondatalifecyclemanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dlm extends PolicyStatement {
  public servicePrefix = 'dlm';
  protected actionList: Actions = {
    "CreateLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_CreateLifecyclePolicy.html",
      "description": "Create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html",
      "description": "Delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetLifecyclePolicies": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html",
      "description": "Returns a list of summary descriptions of data lifecycle policies.",
      "accessLevel": "List"
    },
    "GetLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html",
      "description": "Returns a complete description of a single data lifecycle policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags associated with a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add or update tags of a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove associated with a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "UpdateLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html",
      "description": "Updates an existing data lifecycle policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "policy": {
      "name": "policy",
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_LifecyclePolicy.html",
      "arn": "arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [dlm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondatalifecyclemanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_CreateLifecyclePolicy.html
   */
  public toCreateLifecyclePolicy() {
    this.add('dlm:CreateLifecyclePolicy');
    return this;
  }

  /**
   * Delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    this.add('dlm:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Returns a list of summary descriptions of data lifecycle policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html
   */
  public toGetLifecyclePolicies() {
    this.add('dlm:GetLifecyclePolicies');
    return this;
  }

  /**
   * Returns a complete description of a single data lifecycle policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    this.add('dlm:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to list the tags associated with a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('dlm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add or update tags of a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('dlm:TagResource');
    return this;
  }

  /**
   * Grants permission to remove associated with a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('dlm:UntagResource');
    return this;
  }

  /**
   * Updates an existing data lifecycle policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  public toUpdateLifecyclePolicy() {
    this.add('dlm:UpdateLifecyclePolicy');
    return this;
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_LifecyclePolicy.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateLifecyclePolicy()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - policy
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateLifecyclePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
