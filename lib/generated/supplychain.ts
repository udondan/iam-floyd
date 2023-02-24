import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';
import { aws_iam as iam } from "aws-cdk-lib";

/**
 * Statement provider for service [scn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html).
 *
 * @param options - Options for the statement
 */
export class Scn extends PolicyStatement {
  public servicePrefix = 'scn';

  /**
   * Grants permission to add AWS Supply Chain administrator permission to federated user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toAssignAdminPermissionsToUser() {
    return this.to('AssignAdminPermissionsToUser');
  }

  /**
   * Grants permission to create a new AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to create IAM Identity Center application for a AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateSSOApplication() {
    return this.to('CreateSSOApplication');
  }

  /**
   * Grants permission to delete an AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete IAM Identity Center application of the AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteSSOApplication() {
    return this.to('DeleteSSOApplication');
  }

  /**
   * Grants permission to view details of an AWS Supply Chain instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDescribeInstance() {
    return this.to('DescribeInstance');
  }

  /**
   * Grants permission to list AWS Supply Chain administrators of an instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListAdminUsers() {
    return this.to('ListAdminUsers');
  }

  /**
   * Grants permission to view the AWS Supply Chain instances associated with an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to remove AWS Supply Chain administrator permission from federated user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toRemoveAdminPermissionsForUser() {
    return this.to('RemoveAdminPermissionsForUser');
  }

  /**
   * Grants permission to update an AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUpdateInstance() {
    return this.to('UpdateInstance');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssignAdminPermissionsToUser',
      'CreateInstance',
      'CreateSSOApplication',
      'DeleteInstance',
      'DeleteSSOApplication',
      'RemoveAdminPermissionsForUser',
      'UpdateInstance'
    ],
    Read: [
      'DescribeInstance'
    ],
    List: [
      'ListAdminUsers',
      'ListInstances'
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:scn:${ region || '*' }:${ account || '*' }:instance/${ instanceId }`);
  }

  /**
   * Statement provider for service [scn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html).
   *
   */
  constructor(props?: iam.PolicyStatementProps) {
    super(props);
  }
}
