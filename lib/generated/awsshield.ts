import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [shield](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Shield extends PolicyStatement {
  public servicePrefix = 'shield';
  protected actionList: Actions = {
    "AssociateDRTLogBucket": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html",
      "description": "Authorizes the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:GetBucketPolicy",
        "s3:PutBucketPolicy"
      ]
    },
    "AssociateDRTRole": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html",
      "description": "Authorizes the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:GetRole",
        "iam:ListAttachedRolePolicies",
        "iam:PassRole"
      ]
    },
    "CreateProtection": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html",
      "description": "Activate DDoS protection service for a given resource ARN",
      "accessLevel": "Write",
      "resourceTypes": {
        "protection": {
          "required": true
        }
      }
    },
    "CreateSubscription": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html",
      "description": "Activate subscription",
      "accessLevel": "Write"
    },
    "DeleteProtection": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html",
      "description": "Delete an existing protection",
      "accessLevel": "Write",
      "resourceTypes": {
        "protection": {
          "required": true
        }
      }
    },
    "DeleteSubscription": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html",
      "description": "Deactivate subscription",
      "accessLevel": "Write"
    },
    "DescribeAttack": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html",
      "description": "Get attack details",
      "accessLevel": "Read",
      "resourceTypes": {
        "attack": {
          "required": true
        }
      }
    },
    "DescribeDRTAccess": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html",
      "description": "Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation",
      "accessLevel": "Read"
    },
    "DescribeEmergencyContactSettings": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html",
      "description": "Lists the email addresses that the DRT can use to contact you during a suspected attack",
      "accessLevel": "Read"
    },
    "DescribeProtection": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html",
      "description": "Get protection details",
      "accessLevel": "Read",
      "resourceTypes": {
        "protection": {
          "required": true
        }
      }
    },
    "DescribeSubscription": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html",
      "description": "Get subscription details, such as start time",
      "accessLevel": "Read"
    },
    "DisassociateDRTLogBucket": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html",
      "description": "Removes the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:DeleteBucketPolicy",
        "s3:GetBucketPolicy",
        "s3:PutBucketPolicy"
      ]
    },
    "DisassociateDRTRole": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html",
      "description": "Removes the DDoS Response team's access to your AWS account",
      "accessLevel": "Write"
    },
    "GetSubscriptionState": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html",
      "description": "Get subscription state",
      "accessLevel": "Read"
    },
    "ListAttacks": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html",
      "description": "List all existing attacks",
      "accessLevel": "List"
    },
    "ListProtections": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html",
      "description": "List all existing protections",
      "accessLevel": "List"
    },
    "UpdateEmergencyContactSettings": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html",
      "description": "Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack",
      "accessLevel": "Write"
    },
    "UpdateSubscription": {
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html",
      "description": "Updates the details of an existing subscription",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "attack": {
      "name": "attack",
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AttackDetail.html",
      "arn": "arn:${Partition}:shield::${Account}:attack/${Id}",
      "conditionKeys": []
    },
    "protection": {
      "name": "protection",
      "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_Protection.html",
      "arn": "arn:${Partition}:shield::${Account}:protection/${Id}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [shield](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Authorizes the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
   */
  public toAssociateDRTLogBucket() {
    this.add('shield:AssociateDRTLogBucket');
    return this;
  }

  /**
   * Authorizes the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:GetRole
   * - iam:ListAttachedRolePolicies
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
   */
  public toAssociateDRTRole() {
    this.add('shield:AssociateDRTRole');
    return this;
  }

  /**
   * Activate DDoS protection service for a given resource ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
   */
  public toCreateProtection() {
    this.add('shield:CreateProtection');
    return this;
  }

  /**
   * Activate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
   */
  public toCreateSubscription() {
    this.add('shield:CreateSubscription');
    return this;
  }

  /**
   * Delete an existing protection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
   */
  public toDeleteProtection() {
    this.add('shield:DeleteProtection');
    return this;
  }

  /**
   * Deactivate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
   */
  public toDeleteSubscription() {
    this.add('shield:DeleteSubscription');
    return this;
  }

  /**
   * Get attack details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
   */
  public toDescribeAttack() {
    this.add('shield:DescribeAttack');
    return this;
  }

  /**
   * Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
   */
  public toDescribeDRTAccess() {
    this.add('shield:DescribeDRTAccess');
    return this;
  }

  /**
   * Lists the email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
   */
  public toDescribeEmergencyContactSettings() {
    this.add('shield:DescribeEmergencyContactSettings');
    return this;
  }

  /**
   * Get protection details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
   */
  public toDescribeProtection() {
    this.add('shield:DescribeProtection');
    return this;
  }

  /**
   * Get subscription details, such as start time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
   */
  public toDescribeSubscription() {
    this.add('shield:DescribeSubscription');
    return this;
  }

  /**
   * Removes the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:DeleteBucketPolicy
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
   */
  public toDisassociateDRTLogBucket() {
    this.add('shield:DisassociateDRTLogBucket');
    return this;
  }

  /**
   * Removes the DDoS Response team's access to your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
   */
  public toDisassociateDRTRole() {
    this.add('shield:DisassociateDRTRole');
    return this;
  }

  /**
   * Get subscription state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
   */
  public toGetSubscriptionState() {
    this.add('shield:GetSubscriptionState');
    return this;
  }

  /**
   * List all existing attacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
   */
  public toListAttacks() {
    this.add('shield:ListAttacks');
    return this;
  }

  /**
   * List all existing protections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
   */
  public toListProtections() {
    this.add('shield:ListProtections');
    return this;
  }

  /**
   * Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
   */
  public toUpdateEmergencyContactSettings() {
    this.add('shield:UpdateEmergencyContactSettings');
    return this;
  }

  /**
   * Updates the details of an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
   */
  public toUpdateSubscription() {
    this.add('shield:UpdateSubscription');
    return this;
  }

  /**
   * Adds a resource of type attack to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AttackDetail.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAttack(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:shield::${Account}:attack/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type protection to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_Protection.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProtection(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:shield::${Account}:protection/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
