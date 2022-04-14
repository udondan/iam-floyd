import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [rbin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_recyclebin.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rbin extends PolicyStatement {
  public servicePrefix = 'rbin';

  /**
   * Statement provider for service [rbin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_recyclebin.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Recycle Bin retention rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
  }

  /**
   * Grants permission to delete a Recycle Bin retention rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to get detailed information about a Recycle Bin retention rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Grants permission to list the Recycle Bin retention rules in the Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to list the tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add or update tags of a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing Recycle Bin retention rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateRule',
      'DeleteRule',
      'UpdateRule'
    ],
    Read: [
      'GetRule',
      'ListRules',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html#recycle-bin-concepts
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rbin.defaultPartition }:rbin:${ region || '*' }:${ account || '*' }:rule/${ resourceName }`);
  }
}
