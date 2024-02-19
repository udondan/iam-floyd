import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [codestar](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codestar extends PolicyStatement {
  public servicePrefix = 'codestar';

  /**
   * Statement provider for service [codestar](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a user to the team for an AWS CodeStar project
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html
   */
  public toAssociateTeamMember() {
    return this.to('AssociateTeamMember');
  }

  /**
   * Grants permission to create a project with minimal structure, customer policies, and no resources
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to create a profile for a user that includes user preferences, display name, and email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to extended delete APIs
   *
   * Access Level: Write
   */
  public toDeleteExtendedAccess() {
    return this.to('DeleteExtendedAccess');
  }

  /**
   * Grants permission to delete a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    return this.to('DeleteUserProfile');
  }

  /**
   * Grants permission to describe a project and its resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to describe a user in AWS CodeStar and the user attributes across all projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    return this.to('DescribeUserProfile');
  }

  /**
   * Grants permission to remove a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
   */
  public toDisassociateTeamMember() {
    return this.to('DisassociateTeamMember');
  }

  /**
   * Grants permission to extended read APIs
   *
   * Access Level: Read
   */
  public toGetExtendedAccess() {
    return this.to('GetExtendedAccess');
  }

  /**
   * Grants permission to list all projects in CodeStar associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list all resources associated with a project in CodeStar
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to list the tags associated with a project in CodeStar
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
   */
  public toListTagsForProject() {
    return this.to('ListTagsForProject');
  }

  /**
   * Grants permission to list all team members associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
   */
  public toListTeamMembers() {
    return this.to('ListTeamMembers');
  }

  /**
   * Grants permission to list user profiles in AWS CodeStar
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    return this.to('ListUserProfiles');
  }

  /**
   * Grants permission to extended write APIs
   *
   * Access Level: Write
   */
  public toPutExtendedAccess() {
    return this.to('PutExtendedAccess');
  }

  /**
   * Grants permission to add tags to a project in CodeStar
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html
   */
  public toTagProject() {
    return this.to('TagProject');
  }

  /**
   * Grants permission to remove tags from a project in CodeStar
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html
   */
  public toUntagProject() {
    return this.to('UntagProject');
  }

  /**
   * Grants permission to update a project in CodeStar
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to update team member attributes within a CodeStar project
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
   */
  public toUpdateTeamMember() {
    return this.to('UpdateTeamMember');
  }

  /**
   * Grants permission to update a profile for a user that includes user preferences, display name, and email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to verify whether the AWS CodeStar service role exists in the customer's account
   *
   * Access Level: List
   */
  public toVerifyServiceRole() {
    return this.to('VerifyServiceRole');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AssociateTeamMember',
      'CreateProject',
      'DeleteProject',
      'DisassociateTeamMember',
      'UpdateTeamMember'
    ],
    Write: [
      'CreateUserProfile',
      'DeleteExtendedAccess',
      'DeleteUserProfile',
      'PutExtendedAccess',
      'UpdateProject',
      'UpdateUserProfile'
    ],
    Read: [
      'DescribeProject',
      'DescribeUserProfile',
      'GetExtendedAccess'
    ],
    List: [
      'ListProjects',
      'ListResources',
      'ListTagsForProject',
      'ListTeamMembers',
      'ListUserProfiles',
      'VerifyServiceRole'
    ],
    Tagging: [
      'TagProject',
      'UntagProject'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codestar/latest/userguide/working-with-projects.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codestar:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/codestar/latest/userguide/working-with-user-info.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifIamResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:user/${ userNameWithPath }`);
  }

  /**
   * Filters access by requests based on the allowed set of values for each of the tags
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toTagProject()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on tag-value associated with the resource
   *
   * Applies to resource types:
   * - project
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by requests based on the presence of mandatory tags in the request
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toTagProject()
   * - .toUntagProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on tag-value associated with the resource
   *
   * Applies to resource types:
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIamResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
