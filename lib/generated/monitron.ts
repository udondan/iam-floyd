import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [monitron](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Monitron extends PolicyStatement {
  public servicePrefix = 'monitron';

  /**
   * Statement provider for service [monitron](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a user with the project as an administrator
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:AssociateProfile
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfileAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html
   */
  public toAssociateProjectAdminUser() {
    return this.to('AssociateProjectAdminUser');
  }

  /**
   * Grants permission to create a project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - sso:CreateManagedApplicationInstance
   * - sso:DeleteManagedApplicationInstance
   * - sso:DescribeRegisteredRegions
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-creating-project.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to associate a user with the project
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:AssociateProfile
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfileAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/adding-user.html
   */
  public toCreateProjectUserAssociation() {
    return this.to('CreateProjectUserAssociation');
  }

  /**
   * Grants permission to associate an access role with the user
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfileAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/adding-user.html
   */
  public toCreateUserAccessRoleAssociation() {
    return this.to('CreateUserAccessRoleAssociation');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-delete-project.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to disassociate a user from the project
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:DisassociateProfile
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/deleting-user.html
   */
  public toDeleteProjectUserAssociation() {
    return this.to('DeleteProjectUserAssociation');
  }

  /**
   * Grants permission to disassociate an access role from the user
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/deleting-user.html
   */
  public toDeleteUserAccessRoleAssociation() {
    return this.to('DeleteUserAccessRoleAssociation');
  }

  /**
   * Grants permission to disassociate an administrator from the project
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:DisassociateProfile
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mu-remove-project-admin.html
   */
  public toDisassociateProjectAdminUser() {
    return this.to('DisassociateProjectAdminUser');
  }

  /**
   * Grants permission to get information about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to describe an administrator who is associated with the project
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:GetManagedApplicationInstance
   * - sso:ListProfileAssociations
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html
   */
  public toGetProjectAdminUser() {
    return this.to('GetProjectAdminUser');
  }

  /**
   * Grants permission to list all administrators associated with the project
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:GetManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html
   */
  public toListProjectAdminUsers() {
    return this.to('ListProjectAdminUsers');
  }

  /**
   * Grants permission to list all users associated with the project
   *
   * Access Level: List
   *
   * Dependent actions:
   * - sso:GetManagedApplicationInstance
   * - sso:GetProfile
   * - sso:ListDirectoryAssociations
   * - sso:ListProfileAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html
   */
  public toListProjectUserAssociations() {
    return this.to('ListProjectUserAssociations');
  }

  /**
   * Grants permission to list all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all access roles associated with the user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html
   */
  public toListUserAccessRoleAssociations() {
    return this.to('ListUserAccessRoleAssociations');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html#modify-tag-1
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-updating-project.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AssociateProjectAdminUser',
      'CreateProjectUserAssociation',
      'CreateUserAccessRoleAssociation',
      'DeleteProjectUserAssociation',
      'DeleteUserAccessRoleAssociation',
      'DisassociateProjectAdminUser',
      'ListProjectAdminUsers'
    ],
    Write: [
      'CreateProject',
      'DeleteProject',
      'UpdateProject'
    ],
    Read: [
      'GetProject',
      'GetProjectAdminUser',
      'ListTagsForResource'
    ],
    List: [
      'ListProjectUserAssociations',
      'ListProjects',
      'ListUserAccessRoleAssociations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/Monitron/latest/user-guide/projects-chapter.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:monitron:${ region || this.defaultRegion }:${ account || this.defaultAccount }:project/${ resourceId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - project
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
