import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [dlm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatalifecyclemanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dlm extends PolicyStatement {
  public servicePrefix = 'dlm';

  /**
   * Statement provider for service [dlm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatalifecyclemanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies
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
    return this.to('CreateLifecyclePolicy');
  }

  /**
   * Grants permission to delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    return this.to('DeleteLifecyclePolicy');
  }

  /**
   * Grants permission to returns a list of summary descriptions of data lifecycle policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html
   */
  public toGetLifecyclePolicies() {
    return this.to('GetLifecyclePolicies');
  }

  /**
   * Grants permission to return a complete description of a single data lifecycle policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    return this.to('GetLifecyclePolicy');
  }

  /**
   * Grants permission to list the tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html
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
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing data lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  public toUpdateLifecyclePolicy() {
    return this.to('UpdateLifecyclePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateLifecyclePolicy',
      'DeleteLifecyclePolicy',
      'UpdateLifecyclePolicy'
    ],
    List: [
      'GetLifecyclePolicies'
    ],
    Read: [
      'GetLifecyclePolicy',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_LifecyclePolicy.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dlm.defaultPartition }:dlm:${ region || '*' }:${ account || '*' }:policy/${ resourceName }`);
  }
}
