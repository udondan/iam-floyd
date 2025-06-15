import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [workspaces-instances](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsworkspacesmanagedinstances.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WorkspacesInstances extends PolicyStatement {
  public servicePrefix = 'workspaces-instances';

  /**
   * Statement provider for service [workspaces-instances](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsworkspacesmanagedinstances.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a workspace managed volume to a workspace managed instance in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AttachVolume
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateVolume.html
   */
  public toAssociateVolume() {
    return this.to('AssociateVolume');
  }

  /**
   * Grants permission to create a workspace managed volume in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateVolume
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateVolume.html
   */
  public toCreateVolume() {
    return this.to('CreateVolume');
  }

  /**
   * Grants permission to create a workspace managed instance in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   * - ec2:RunInstances
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceInstance.html
   */
  public toCreateWorkspaceInstance() {
    return this.to('CreateWorkspaceInstance');
  }

  /**
   * Grants permission to delete a workspace managed volume in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteVolume
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    return this.to('DeleteVolume');
  }

  /**
   * Grants permission to delete a workspace managed instance in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:TerminateInstances
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceInstance.html
   */
  public toDeleteWorkspaceInstance() {
    return this.to('DeleteWorkspaceInstance');
  }

  /**
   * Grants permission to disassociate a workspace managed volume from a workspace managed instance in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVolumes
   * - ec2:DetachVolume
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateVolume.html
   */
  public toDisassociateVolume() {
    return this.to('DisassociateVolume');
  }

  /**
   * Grants permission to get details for a specific workspace managed instance in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_GetWorkspaceInstance.html
   */
  public toGetWorkspaceInstance() {
    return this.to('GetWorkspaceInstance');
  }

  /**
   * Grants permission to list all supported instance types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListInstanceTypes.html
   */
  public toListInstanceTypes() {
    return this.to('ListInstanceTypes');
  }

  /**
   * Grants permission to list all supported AWS regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListRegions.html
   */
  public toListRegions() {
    return this.to('ListRegions');
  }

  /**
   * Grants permission to list user tags for resources in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list workspace managed instances in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_ListWorkspaceInstances.html
   */
  public toListWorkspaceInstances() {
    return this.to('ListWorkspaceInstances');
  }

  /**
   * Grants permission to add user tags to resources in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove user tags from resources in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateVolume',
      'CreateVolume',
      'CreateWorkspaceInstance',
      'DeleteVolume',
      'DeleteWorkspaceInstance',
      'DisassociateVolume'
    ],
    Read: [
      'GetWorkspaceInstance'
    ],
    List: [
      'ListInstanceTypes',
      'ListRegions',
      'ListTagsForResource',
      'ListWorkspaceInstances'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type WorkspaceInstanceId to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/managed-workspaces-instances.html
   *
   * @param workspaceInstanceId - Identifier for the workspaceInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspaceInstanceId(workspaceInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:workspaces-instances:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspaceinstance/${ workspaceInstanceId }`);
  }

  /**
   * Adds a resource of type VolumeId to the statement
   *
   * https://docs.aws.amazon.com/workspaces/latest/api/managed-workspaces-volumes.html
   *
   * @param volumeId - Identifier for the volumeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVolumeId(volumeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ec2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:volume/${ volumeId }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateWorkspaceInstance()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - WorkspaceInstanceId
   * - VolumeId
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateWorkspaceInstance()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
