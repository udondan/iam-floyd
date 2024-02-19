import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [grafana](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Grafana extends PolicyStatement {
  public servicePrefix = 'grafana';

  /**
   * Statement provider for service [grafana](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to upgrade a workspace with a license
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - aws-marketplace:ViewSubscriptions
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toAssociateLicense() {
    return this.to('AssociateLicense');
  }

  /**
   * Grants permission to create a workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:GetManagedPrefixListEntries
   * - iam:CreateServiceLinkedRole
   * - organizations:DescribeOrganization
   * - sso:CreateManagedApplicationInstance
   * - sso:DescribeRegisteredRegions
   * - sso:GetSharedSsoConfiguration
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to create API keys for a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toCreateWorkspaceApiKey() {
    return this.to('CreateWorkspaceApiKey');
  }

  /**
   * Grants permission to delete a workspace
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toDeleteWorkspace() {
    return this.to('DeleteWorkspace');
  }

  /**
   * Grants permission to delete API keys from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toDeleteWorkspaceApiKey() {
    return this.to('DeleteWorkspaceApiKey');
  }

  /**
   * Grants permission to describe a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toDescribeWorkspace() {
    return this.to('DescribeWorkspace');
  }

  /**
   * Grants permission to describe authentication providers on a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toDescribeWorkspaceAuthentication() {
    return this.to('DescribeWorkspaceAuthentication');
  }

  /**
   * Grants permission to describe the current configuration string for the given workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_DescribeWorkspaceConfiguration.html
   */
  public toDescribeWorkspaceConfiguration() {
    return this.to('DescribeWorkspaceConfiguration');
  }

  /**
   * Grants permission to remove a license from a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toDisassociateLicense() {
    return this.to('DisassociateLicense');
  }

  /**
   * Grants permission to list the permissions on a wokspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Grants permission to list tags associated with a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all available supported Grafana versions. Optionally, include a workspace to list the versions to which it can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html
   */
  public toListVersions() {
    return this.to('ListVersions');
  }

  /**
   * Grants permission to list workspaces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to add tags to, or update tag values of, a workspace
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a workspace
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify the permissions on a workspace
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toUpdatePermissions() {
    return this.to('UpdatePermissions');
  }

  /**
   * Grants permission to modify a workspace
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:GetManagedPrefixListEntries
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  /**
   * Grants permission to modify authentication providers on a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toUpdateWorkspaceAuthentication() {
    return this.to('UpdateWorkspaceAuthentication');
  }

  /**
   * Grants permission to update the configuration string for the given workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceConfiguration.html
   */
  public toUpdateWorkspaceConfiguration() {
    return this.to('UpdateWorkspaceConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateLicense',
      'CreateWorkspace',
      'CreateWorkspaceApiKey',
      'DeleteWorkspace',
      'DeleteWorkspaceApiKey',
      'DisassociateLicense',
      'UpdateWorkspace',
      'UpdateWorkspaceAuthentication',
      'UpdateWorkspaceConfiguration'
    ],
    Read: [
      'DescribeWorkspace',
      'DescribeWorkspaceAuthentication',
      'DescribeWorkspaceConfiguration',
      'ListTagsForResource',
      'ListWorkspaces'
    ],
    List: [
      'ListPermissions',
      'ListVersions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ],
    'Permissions management': [
      'UpdatePermissions'
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/security-iam.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:grafana:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/workspaces/${ resourceId }`);
  }

  /**
   * Filters access by actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to actions:
   * - .toCreateWorkspace()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to resource types:
   * - workspace
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to actions:
   * - .toCreateWorkspace()
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
