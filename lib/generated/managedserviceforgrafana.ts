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
   * Grants permission to create a workspace
   *
   * Access Level: Write
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to delete a workspace
   *
   * Access Level: Write
   */
  public toDeleteWorkspace() {
    return this.to('DeleteWorkspace');
  }

  /**
   * Grants permission to describe a workspace
   *
   * Access Level: Read
   */
  public toDescribeWorkspace() {
    return this.to('DescribeWorkspace');
  }

  /**
   * Grants permission to list the permissions on a wokspace
   *
   * Access Level: List
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Grants permission to list workspaces
   *
   * Access Level: List
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to modify the permissions on a workspace
   *
   * Access Level: Permissions management
   */
  public toUpdatePermissions() {
    return this.to('UpdatePermissions');
  }

  /**
   * Grants permission to modify a workspace
   *
   * Access Level: Write
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateWorkspace",
      "DeleteWorkspace",
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
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkspace(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:grafana::${Region}:${Account}:workspaces/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
