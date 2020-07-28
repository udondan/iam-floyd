import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [fms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsfirewallmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fms extends PolicyStatement {
  public servicePrefix = 'fms';
  protected actionList: Actions = {
    "AssociateAdminAccount": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html",
      "description": "Sets the AWS Firewall Manager administrator account and enables the service in all organization accounts",
      "accessLevel": "Write"
    },
    "DeleteNotificationChannel": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html",
      "description": "Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to notify the FM administrator about major FM events and errors across the organization.",
      "accessLevel": "Write"
    },
    "DeletePolicy": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html",
      "description": "Permanently deletes an AWS Firewall Manager policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DisassociateAdminAccount": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html",
      "description": "Disassociates the account that has been set as the AWS Firewall Manager administrator account and and disables the service in all organization accounts",
      "accessLevel": "Write"
    },
    "GetAdminAccount": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html",
      "description": "Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.",
      "accessLevel": "Read"
    },
    "GetComplianceDetail": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html",
      "description": "Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetNotificationChannel": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html",
      "description": "Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.",
      "accessLevel": "Read"
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html",
      "description": "Returns information about the specified AWS Firewall Manager policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetProtectionStatus": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html",
      "description": "Returns policy-level attack summary information in the event of a potential DDoS attack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListComplianceStatus": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html",
      "description": "Returns an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy.",
      "accessLevel": "List",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListMemberAccounts": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html",
      "description": "Returns an array of member account ids if the caller is FMS admin account.",
      "accessLevel": "List"
    },
    "ListPolicies": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html",
      "description": "Returns an array of PolicySummary objects in the response.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html",
      "description": "Lists the Tags for a given resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "PutNotificationChannel": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html",
      "description": "Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM administrator about major FM events and errors across the organization.",
      "accessLevel": "Write"
    },
    "PutPolicy": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutPolicy.html",
      "description": "Creates an AWS Firewall Manager policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_TagResource.html",
      "description": "Adds a Tag to a given resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html",
      "description": "Removes a Tag from a given resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "policy": {
      "name": "policy",
      "url": "https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html",
      "arn": "arn:${Partition}:fms:${Region}:${Account}:policy/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [fms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsfirewallmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Sets the AWS Firewall Manager administrator account and enables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html
   */
  public associateAdminAccount() {
    this.add('fms:AssociateAdminAccount');
    return this;
  }

  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to notify the FM administrator about major FM events and errors across the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html
   */
  public deleteNotificationChannel() {
    this.add('fms:DeleteNotificationChannel');
    return this;
  }

  /**
   * Permanently deletes an AWS Firewall Manager policy.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html
   */
  public deletePolicy() {
    this.add('fms:DeletePolicy');
    return this;
  }

  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account and and disables the service in all organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html
   */
  public disassociateAdminAccount() {
    this.add('fms:DisassociateAdminAccount');
    return this;
  }

  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html
   */
  public getAdminAccount() {
    this.add('fms:GetAdminAccount');
    return this;
  }

  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html
   */
  public getComplianceDetail() {
    this.add('fms:GetComplianceDetail');
    return this;
  }

  /**
   * Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html
   */
  public getNotificationChannel() {
    this.add('fms:GetNotificationChannel');
    return this;
  }

  /**
   * Returns information about the specified AWS Firewall Manager policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html
   */
  public getPolicy() {
    this.add('fms:GetPolicy');
    return this;
  }

  /**
   * Returns policy-level attack summary information in the event of a potential DDoS attack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html
   */
  public getProtectionStatus() {
    this.add('fms:GetProtectionStatus');
    return this;
  }

  /**
   * Returns an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html
   */
  public listComplianceStatus() {
    this.add('fms:ListComplianceStatus');
    return this;
  }

  /**
   * Returns an array of member account ids if the caller is FMS admin account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html
   */
  public listMemberAccounts() {
    this.add('fms:ListMemberAccounts');
    return this;
  }

  /**
   * Returns an array of PolicySummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html
   */
  public listPolicies() {
    this.add('fms:ListPolicies');
    return this;
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('fms:ListTagsForResource');
    return this;
  }

  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM administrator about major FM events and errors across the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html
   */
  public putNotificationChannel() {
    this.add('fms:PutNotificationChannel');
    return this;
  }

  /**
   * Creates an AWS Firewall Manager policy.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutPolicy.html
   */
  public putPolicy() {
    this.add('fms:PutPolicy');
    return this;
  }

  /**
   * Adds a Tag to a given resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('fms:TagResource');
    return this;
  }

  /**
   * Removes a Tag from a given resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('fms:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fms:${Region}:${Account}:policy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .putPolicy()
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
   * - .deletePolicy()
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
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .putPolicy()
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
