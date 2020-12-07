import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
   * - sso:ListDirectoryAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toAssociateProjectAdminUser() {
    this.to('monitron:AssociateProjectAdminUser');
    return this;
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
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toCreateProject() {
    this.to('monitron:CreateProject');
    return this;
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toDeleteProject() {
    this.to('monitron:DeleteProject');
    return this;
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
   * - sso:ListDirectoryAssociations
   * - sso:ListProfiles
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toDisassociateProjectAdminUser() {
    this.to('monitron:DisassociateProjectAdminUser');
    return this;
  }

  /**
   * Grants permission to get information about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toGetProject() {
    this.to('monitron:GetProject');
    return this;
  }

  /**
   * Grants permission to describe an administrator who is associated with the project
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   * - sso:GetManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toGetProjectAdminUser() {
    this.to('monitron:GetProjectAdminUser');
    return this;
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
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toListProjectAdminUsers() {
    this.to('monitron:ListProjectAdminUsers');
    return this;
  }

  /**
   * Grants permission to list all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toListProjects() {
    this.to('monitron:ListProjects');
    return this;
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toListTagsForResource() {
    this.to('monitron:ListTagsForResource');
    return this;
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
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toTagResource() {
    this.to('monitron:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toUntagResource() {
    this.to('monitron:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/Monitron/latest/admin-guide/monitron-api-permissions-ref.html
   */
  public toUpdateProject() {
    this.to('monitron:UpdateProject');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AssociateProjectAdminUser",
      "DisassociateProjectAdminUser",
      "ListProjectAdminUsers"
    ],
    "Write": [
      "CreateProject",
      "DeleteProject",
      "UpdateProject"
    ],
    "Read": [
      "GetProject",
      "GetProjectAdminUser",
      "ListTagsForResource"
    ],
    "List": [
      "ListProjects"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:monitron:${Region}:${Account}:project/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type MonitronActionsPermissionsManagement = 'AssociateProjectAdminUser' | 'DisassociateProjectAdminUser' | 'ListProjectAdminUsers';
export type MonitronActionsWrite = 'CreateProject' | 'DeleteProject' | 'UpdateProject';
export type MonitronActionsRead = 'GetProject' | 'GetProjectAdminUser' | 'ListTagsForResource';
export type MonitronActionsList = 'ListProjects';
export type MonitronActionsTagging = 'TagResource' | 'UntagResource';
export type MonitronActions = MonitronActionsPermissionsManagement | MonitronActionsWrite | MonitronActionsRead | MonitronActionsList | MonitronActionsTagging;
