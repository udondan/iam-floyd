import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies.
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
    this.to('dlm:CreateLifecyclePolicy');
    return this;
  }

  /**
   * Delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    this.to('dlm:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Returns a list of summary descriptions of data lifecycle policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html
   */
  public toGetLifecyclePolicies() {
    this.to('dlm:GetLifecyclePolicies');
    return this;
  }

  /**
   * Returns a complete description of a single data lifecycle policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    this.to('dlm:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to list the tags associated with a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('dlm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add or update tags of a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('dlm:TagResource');
    return this;
  }

  /**
   * Grants permission to remove associated with a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('dlm:UntagResource');
    return this;
  }

  /**
   * Updates an existing data lifecycle policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  public toUpdateLifecyclePolicy() {
    this.to('dlm:UpdateLifecyclePolicy');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateLifecyclePolicy",
      "DeleteLifecyclePolicy",
      "UpdateLifecyclePolicy"
    ],
    "List": [
      "GetLifecyclePolicies"
    ],
    "Read": [
      "GetLifecyclePolicy",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
