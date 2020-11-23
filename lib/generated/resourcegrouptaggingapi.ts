import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [tag](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tag extends PolicyStatement {
  public servicePrefix = 'tag';

  /**
   * Statement provider for service [tag](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Describe the status of the StartReportCreation operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_DescribeReportCreation.html
   */
  public toDescribeReportCreation() {
    this.to('DescribeReportCreation');
    return this;
  }

  /**
   * Get a table that shows counts of resources that are noncompliant with their effective tag policies.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetComplianceSummary.html
   */
  public toGetComplianceSummary() {
    this.to('GetComplianceSummary');
    return this;
  }

  /**
   * Get tagged AWS resources that match the given tag filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html
   */
  public toGetResources() {
    this.to('GetResources');
    return this;
  }

  /**
   * Get all tagKeys for the account in the specific region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagKeys.html
   */
  public toGetTagKeys() {
    this.to('GetTagKeys');
    return this;
  }

  /**
   * Get all tagValues for the account in the specific region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagValues.html
   */
  public toGetTagValues() {
    this.to('GetTagValues');
    return this;
  }

  /**
   * Generate a report that lists all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_StartReportCreation.html
   */
  public toStartReportCreation() {
    this.to('StartReportCreation');
    return this;
  }

  /**
   * Add tags to AWS resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html
   */
  public toTagResources() {
    this.to('TagResources');
    return this;
  }

  /**
   * Remove tags from AWS resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntagResources.html
   */
  public toUntagResources() {
    this.to('UntagResources');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeReportCreation",
      "GetComplianceSummary",
      "GetResources",
      "GetTagKeys",
      "GetTagValues"
    ],
    "Write": [
      "StartReportCreation"
    ],
    "Tagging": [
      "TagResources",
      "UntagResources"
    ]
  };
}
