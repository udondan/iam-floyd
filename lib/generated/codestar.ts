import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds a user to the team for an AWS CodeStar project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html
   */
  public toAssociateTeamMember() {
    return this.to('AssociateTeamMember');
  }

  /**
   * Creates a project with minimal structure, customer policies, and no resources.
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
   * Creates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants access to extended delete APIs.
   *
   * Access Level: Write
   */
  public toDeleteExtendedAccess() {
    return this.to('DeleteExtendedAccess');
  }

  /**
   * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    return this.to('DeleteUserProfile');
  }

  /**
   * Describes a project and its resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Describes a user in AWS CodeStar and the user attributes across all projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    return this.to('DescribeUserProfile');
  }

  /**
   * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
   */
  public toDisassociateTeamMember() {
    return this.to('DisassociateTeamMember');
  }

  /**
   * Grants access to extended read APIs.
   *
   * Access Level: Read
   */
  public toGetExtendedAccess() {
    return this.to('GetExtendedAccess');
  }

  /**
   * Lists all projects in CodeStar associated with your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Lists all resources associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Lists the tags associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
   */
  public toListTagsForProject() {
    return this.to('ListTagsForProject');
  }

  /**
   * Lists all team members associated with a project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
   */
  public toListTeamMembers() {
    return this.to('ListTeamMembers');
  }

  /**
   * Lists user profiles in AWS CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    return this.to('ListUserProfiles');
  }

  /**
   * Grants access to extended write APIs.
   *
   * Access Level: Write
   */
  public toPutExtendedAccess() {
    return this.to('PutExtendedAccess');
  }

  /**
   * Adds tags to a project in CodeStar.
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
   * Removes tags from a project in CodeStar.
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
   * Updates a project in CodeStar.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Updates team member attributes within a CodeStar project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
   */
  public toUpdateTeamMember() {
    return this.to('UpdateTeamMember');
  }

  /**
   * Updates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Verifies whether the AWS CodeStar service role exists in the customer's account.
   *
   * Access Level: List
   */
  public toVerifyServiceRole() {
    return this.to('VerifyServiceRole');
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AssociateTeamMember",
      "CreateProject",
      "DeleteProject",
      "DisassociateTeamMember",
      "UpdateTeamMember"
    ],
    "Write": [
      "CreateUserProfile",
      "DeleteExtendedAccess",
      "DeleteUserProfile",
      "PutExtendedAccess",
      "UpdateProject",
      "UpdateUserProfile"
    ],
    "Read": [
      "DescribeProject",
      "DescribeUserProfile",
      "GetExtendedAccess"
    ],
    "List": [
      "ListProjects",
      "ListResources",
      "ListTagsForProject",
      "ListTeamMembers",
      "ListUserProfiles",
      "VerifyServiceRole"
    ],
    "Tagging": [
      "TagProject",
      "UntagProject"
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codestar/latest/userguide/working-with-projects.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codestar:${ region || '*' }:${ account || '*' }:project/${ projectId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifIamResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iam:${ region || '*' }:${ account || '*' }:user/${ userNameWithPath }`);
  }

  /**
   * Applies to resource types:
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIamResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
