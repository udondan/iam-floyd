import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [codecatalyst](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codecatalyst extends PolicyStatement {
  public servicePrefix = 'codecatalyst';

  /**
   * Statement provider for service [codecatalyst](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a request to connect this account to a CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toAcceptConnection() {
    return this.to('AcceptConnection');
  }

  /**
   * Grants permission to associate an IAM role to a connection
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toAssociateIamRoleToConnection() {
    return this.to('AssociateIamRoleToConnection');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to disassociate an IAM role from a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toDisassociateIamRoleFromConnection() {
    return this.to('DisassociateIamRoleFromConnection');
  }

  /**
   * Grants permission to describe the billing authorization for a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toGetBillingAuthorization() {
    return this.to('GetBillingAuthorization');
  }

  /**
   * Grants permission to get a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get a pending request to connect this account to a CodeCatalyst space
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toGetPendingConnection() {
    return this.to('GetPendingConnection');
  }

  /**
   * Grants permission to list connections which are not pending
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list IAM roles associated with a connection
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toListIamRolesForConnection() {
    return this.to('ListIamRolesForConnection');
  }

  /**
   * Grants permission to creates or update the billing authorization for a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toPutBillingAuthorization() {
    return this.to('PutBillingAuthorization');
  }

  /**
   * Grants permission to reject a request to connect this account to a CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   */
  public toRejectConnection() {
    return this.to('RejectConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptConnection',
      'AssociateIamRoleToConnection',
      'DeleteConnection',
      'DisassociateIamRoleFromConnection',
      'PutBillingAuthorization',
      'RejectConnection'
    ],
    Read: [
      'GetBillingAuthorization',
      'GetConnection',
      'GetPendingConnection'
    ],
    List: [
      'ListConnections',
      'ListIamRolesForConnection'
    ]
  };

  /**
   * Adds a resource of type connections to the statement
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnections(connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:${ region || '*' }:${ account || '*' }:/connections/${ connectionId }`);
  }
}
