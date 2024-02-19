import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to describe the status of the StartReportCreation operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_DescribeReportCreation.html
   */
  public toDescribeReportCreation() {
    return this.to('DescribeReportCreation');
  }

  /**
   * Grants permission to retrieve a summary of how many resources are noncompliant with their effective tag policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetComplianceSummary.html
   */
  public toGetComplianceSummary() {
    return this.to('GetComplianceSummary');
  }

  /**
   * Grants permission to return tagged or previously tagged resources in the specified AWS Region for the calling account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html
   */
  public toGetResources() {
    return this.to('GetResources');
  }

  /**
   * Grants permission to returns tag keys currently in use in the specified AWS Region for the calling account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagKeys.html
   */
  public toGetTagKeys() {
    return this.to('GetTagKeys');
  }

  /**
   * Grants permission to return tag values for the specified key that are used in the specified AWS Region for the calling account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagValues.html
   */
  public toGetTagValues() {
    return this.to('GetTagValues');
  }

  /**
   * Grants permission to start generating a report listing all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_StartReportCreation.html
   */
  public toStartReportCreation() {
    return this.to('StartReportCreation');
  }

  /**
   * Grants permission to apply one or more tags to the specified resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html
   */
  public toTagResources() {
    return this.to('TagResources');
  }

  /**
   * Grants permission to remove the specified tags from the specified resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntagResources.html
   */
  public toUntagResources() {
    return this.to('UntagResources');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeReportCreation',
      'GetComplianceSummary',
      'GetResources',
      'GetTagKeys',
      'GetTagValues'
    ],
    Write: [
      'StartReportCreation'
    ],
    Tagging: [
      'TagResources',
      'UntagResources'
    ]
  };
}
