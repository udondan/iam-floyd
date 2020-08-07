import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [tag](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tag extends PolicyStatement {
  public servicePrefix = 'tag';
  protected actionList: Actions = {
    "DescribeReportCreation": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_DescribeReportCreation.html",
      "description": "Describe the status of the StartReportCreation operation.",
      "accessLevel": "Read"
    },
    "GetComplianceSummary": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetComplianceSummary.html",
      "description": "Get a table that shows counts of resources that are noncompliant with their effective tag policies.",
      "accessLevel": "Read"
    },
    "GetResources": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html",
      "description": "Get tagged AWS resources that match the given tag filters",
      "accessLevel": "Read"
    },
    "GetTagKeys": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagKeys.html",
      "description": "Get all tagKeys for the account in the specific region",
      "accessLevel": "Read"
    },
    "GetTagValues": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagValues.html",
      "description": "Get all tagValues for the account in the specific region",
      "accessLevel": "Read"
    },
    "StartReportCreation": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_StartReportCreation.html",
      "description": "Generate a report that lists all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy.",
      "accessLevel": "Write"
    },
    "TagResources": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html",
      "description": "Add tags to AWS resources",
      "accessLevel": "Tagging"
    },
    "UntagResources": {
      "url": "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntagResources.html",
      "description": "Remove tags from AWS resources",
      "accessLevel": "Tagging"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [tag](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html).
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
    this.add('tag:DescribeReportCreation');
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
    this.add('tag:GetComplianceSummary');
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
    this.add('tag:GetResources');
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
    this.add('tag:GetTagKeys');
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
    this.add('tag:GetTagValues');
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
    this.add('tag:StartReportCreation');
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
    this.add('tag:TagResources');
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
    this.add('tag:UntagResources');
    return this;
  }
}
