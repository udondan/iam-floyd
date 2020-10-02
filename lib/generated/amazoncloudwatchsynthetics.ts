import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [synthetics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchsynthetics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Synthetics extends PolicyStatement {
  public servicePrefix = 'synthetics';

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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCanary",
      "DeleteCanary",
      "StartCanary",
      "StopCanary",
      "TagResource",
      "UntagResource",
      "UpdateCanary"
    ],
    "Read": [
      "DescribeCanaries",
      "DescribeCanariesLastRun",
      "GetCanaryRuns",
      "ListTagsForResource"
    ]
  };

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
