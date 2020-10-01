import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [codestar](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codestar extends PolicyStatement {
  public servicePrefix = 'codestar';

  /**
   * Statement provider for service [codestar](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html).
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
    this.to('codestar:AssociateTeamMember');
    return this;
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
    this.to('codestar:CreateProject');
    return this;
  }

  /**
   * Creates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    this.to('codestar:CreateUserProfile');
    return this;
  }

  /**
   * Grants access to extended delete APIs.
   *
   * Access Level: Write
   */
  public toDeleteExtendedAccess() {
    this.to('codestar:DeleteExtendedAccess');
    return this;
  }

  /**
   * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('codestar:DeleteProject');
    return this;
  }

  /**
   * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    this.to('codestar:DeleteUserProfile');
    return this;
  }

  /**
   * Describes a project and its resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.to('codestar:DescribeProject');
    return this;
  }

  /**
   * Describes a user in AWS CodeStar and the user attributes across all projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    this.to('codestar:DescribeUserProfile');
    return this;
  }

  /**
   * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
   */
  public toDisassociateTeamMember() {
    this.to('codestar:DisassociateTeamMember');
    return this;
  }

  /**
   * Grants access to extended read APIs.
   *
   * Access Level: Read
   */
  public toGetExtendedAccess() {
    this.to('codestar:GetExtendedAccess');
    return this;
  }

  /**
   * Lists all projects in CodeStar associated with your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('codestar:ListProjects');
    return this;
  }

  /**
   * Lists all resources associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    this.to('codestar:ListResources');
    return this;
  }

  /**
   * Lists the tags associated with a project in CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
   */
  public toListTagsForProject() {
    this.to('codestar:ListTagsForProject');
    return this;
  }

  /**
   * Lists all team members associated with a project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
   */
  public toListTeamMembers() {
    this.to('codestar:ListTeamMembers');
    return this;
  }

  /**
   * Lists user profiles in AWS CodeStar.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    this.to('codestar:ListUserProfiles');
    return this;
  }

  /**
   * Grants access to extended write APIs.
   *
   * Access Level: Write
   */
  public toPutExtendedAccess() {
    this.to('codestar:PutExtendedAccess');
    return this;
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
    this.to('codestar:TagProject');
    return this;
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
    this.to('codestar:UntagProject');
    return this;
  }

  /**
   * Updates a project in CodeStar.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.to('codestar:UpdateProject');
    return this;
  }

  /**
   * Updates team member attributes within a CodeStar project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
   */
  public toUpdateTeamMember() {
    this.to('codestar:UpdateTeamMember');
    return this;
  }

  /**
   * Updates a profile for a user that includes user preferences, display name, and email.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    this.to('codestar:UpdateUserProfile');
    return this;
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
      "ListUserProfiles"
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
    var arn = 'arn:${Partition}:codestar:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * - .ifResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Applies to resource types:
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
