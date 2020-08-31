import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [signer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Signer extends PolicyStatement {
  public servicePrefix = 'signer';
  protected actionList: Actions = {
    "CancelSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html",
      "description": "Cancels a signing profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "DescribeSigningJob": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html",
      "description": "Describe a signing job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "signing-job": {
          "required": true
        }
      }
    },
    "GetSigningPlatform": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html",
      "description": "Retrieves a signing platform.",
      "accessLevel": "Read"
    },
    "GetSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html",
      "description": "Retrieves a signing profile.",
      "accessLevel": "Read",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "ListSigningJobs": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html",
      "description": "List signing jobs.",
      "accessLevel": "List"
    },
    "ListSigningPlatforms": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html",
      "description": "List all signing platforms.",
      "accessLevel": "List"
    },
    "ListSigningProfiles": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html",
      "description": "List all signing profile associated with the account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html",
      "description": "Lists the tags associated with the Signing Profile resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "PutSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html",
      "description": "Creates a new signing profile if not exists.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartSigningJob": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html",
      "description": "Starts a code signing request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html",
      "description": "Adds one or more tags to an Signing Profile resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html",
      "description": "Removes one or more tags from an Signing Profile resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "signing-profile": {
      "name": "signing-profile",
      "url": "https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html",
      "arn": "arn:${Partition}:signer:${Region}::/signing-profiles/${ProfileName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "signing-job": {
      "name": "signing-job",
      "url": "https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html",
      "arn": "arn:${Partition}:signer:${Region}::/signing-jobs/${JobId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [signer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels a signing profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html
   */
  public toCancelSigningProfile() {
    this.add('signer:CancelSigningProfile');
    return this;
  }

  /**
   * Describe a signing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   */
  public toDescribeSigningJob() {
    this.add('signer:DescribeSigningJob');
    return this;
  }

  /**
   * Retrieves a signing platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  public toGetSigningPlatform() {
    this.add('signer:GetSigningPlatform');
    return this;
  }

  /**
   * Retrieves a signing profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html
   */
  public toGetSigningProfile() {
    this.add('signer:GetSigningProfile');
    return this;
  }

  /**
   * List signing jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  public toListSigningJobs() {
    this.add('signer:ListSigningJobs');
    return this;
  }

  /**
   * List all signing platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  public toListSigningPlatforms() {
    this.add('signer:ListSigningPlatforms');
    return this;
  }

  /**
   * List all signing profile associated with the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  public toListSigningProfiles() {
    this.add('signer:ListSigningProfiles');
    return this;
  }

  /**
   * Lists the tags associated with the Signing Profile resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('signer:ListTagsForResource');
    return this;
  }

  /**
   * Creates a new signing profile if not exists.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html
   */
  public toPutSigningProfile() {
    this.add('signer:PutSigningProfile');
    return this;
  }

  /**
   * Starts a code signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html
   */
  public toStartSigningJob() {
    this.add('signer:StartSigningJob');
    return this;
  }

  /**
   * Adds one or more tags to an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.add('signer:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('signer:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type signing-profile to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html
   *
   * @param profileName - Identifier for the profileName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSigningProfile(profileName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}::/signing-profiles/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type signing-job to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html
   *
   * @param jobId - Identifier for the jobId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSigningJob(jobId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}::/signing-jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters create requests based on the allowed set of values for each of the tags.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toPutSigningProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - signing-profile
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the presence of mandatory tags in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toPutSigningProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
