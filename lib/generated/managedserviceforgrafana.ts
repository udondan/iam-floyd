import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [grafana](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforgrafana.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Grafana extends PolicyStatement {
  public servicePrefix = 'grafana';

  /**
   * Statement provider for service [grafana](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforgrafana.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
   * Dependent actions:
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
   * Grants permission to list workspaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
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
   * https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateLicense",
      "CreateWorkspace",
      "DeleteWorkspace",
      "DisassociateLicense",
      "UpdateWorkspace"
    ],
    "Read": [
      "DescribeWorkspace"
    ],
    "List": [
      "ListPermissions",
      "ListWorkspaces"
    ],
    "Permissions management": [
      "UpdatePermissions"
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/grafana/latest/userguide/security-iam.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:grafana::${Region}:${Account}:/workspaces/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
