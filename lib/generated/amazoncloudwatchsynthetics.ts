import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [synthetics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchsynthetics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Synthetics extends PolicyStatement {
  public servicePrefix = 'synthetics';
  protected actionList: Actions = {
    "CreateCanary": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html",
      "description": "Create a canary.",
      "accessLevel": "Write"
    },
    "DeleteCanary": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html",
      "description": "Deletes a canary. Amazon Synthetics deletes all the resources except for the Lambda function and the CloudWatch Alarms if you created one.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": true
        }
      }
    },
    "DescribeCanaries": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html",
      "description": "Returns information of all canaries.",
      "accessLevel": "Read"
    },
    "DescribeCanariesLastRun": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html",
      "description": "Returns information about the last test run associated with all canaries.",
      "accessLevel": "Read"
    },
    "GetCanaryRuns": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html",
      "description": "Returns information about all the test runs associated with a canary.",
      "accessLevel": "Read",
      "resourceTypes": {
        "canary": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html",
      "description": "Returns a list of all tags and values associated with a canary.",
      "accessLevel": "Read",
      "resourceTypes": {
        "canary": {
          "required": false
        }
      }
    },
    "StartCanary": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html",
      "description": "Starts a canary, so that Amazon Synthetics starts monitoring a website.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": true
        }
      }
    },
    "StopCanary": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html",
      "description": "Stops a canary.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html",
      "description": "Adds one or more tags to a canary.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": false
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html",
      "description": "Removes one or more tags from a canary.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": false
        }
      }
    },
    "UpdateCanary": {
      "url": "https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html",
      "description": "Updates a canary.",
      "accessLevel": "Write",
      "resourceTypes": {
        "canary": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "canary": {
      "name": "canary",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
      "arn": "arn:${Partition}:synthetics::${Account}:canary:${CanaryName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [synthetics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchsynthetics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a canary.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html
   */
  public toCreateCanary() {
    this.to('synthetics:CreateCanary');
    return this;
  }

  /**
   * Deletes a canary. Amazon Synthetics deletes all the resources except for the Lambda function and the CloudWatch Alarms if you created one.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html
   */
  public toDeleteCanary() {
    this.to('synthetics:DeleteCanary');
    return this;
  }

  /**
   * Returns information of all canaries.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html
   */
  public toDescribeCanaries() {
    this.to('synthetics:DescribeCanaries');
    return this;
  }

  /**
   * Returns information about the last test run associated with all canaries.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html
   */
  public toDescribeCanariesLastRun() {
    this.to('synthetics:DescribeCanariesLastRun');
    return this;
  }

  /**
   * Returns information about all the test runs associated with a canary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html
   */
  public toGetCanaryRuns() {
    this.to('synthetics:GetCanaryRuns');
    return this;
  }

  /**
   * Returns a list of all tags and values associated with a canary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('synthetics:ListTagsForResource');
    return this;
  }

  /**
   * Starts a canary, so that Amazon Synthetics starts monitoring a website.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html
   */
  public toStartCanary() {
    this.to('synthetics:StartCanary');
    return this;
  }

  /**
   * Stops a canary.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html
   */
  public toStopCanary() {
    this.to('synthetics:StopCanary');
    return this;
  }

  /**
   * Adds one or more tags to a canary.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('synthetics:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from a canary.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('synthetics:UntagResource');
    return this;
  }

  /**
   * Updates a canary.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html
   */
  public toUpdateCanary() {
    this.to('synthetics:UpdateCanary');
    return this;
  }

  /**
   * Adds a resource of type canary to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html
   *
   * @param canaryName - Identifier for the canaryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCanary(canaryName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:synthetics::${Account}:canary:${CanaryName}';
    arn = arn.replace('${CanaryName}', canaryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
