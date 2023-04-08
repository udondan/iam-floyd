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
   * Grants permission to accept a request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toAcceptConnection() {
    return this.to('AcceptConnection');
  }

  /**
   * Grants permission to associate an IAM role to a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toAssociateIamRoleToConnection() {
    return this.to('AssociateIamRoleToConnection');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to disassociate an IAM role from a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toDisassociateIamRoleFromConnection() {
    return this.to('DisassociateIamRoleFromConnection');
  }

  /**
   * Grants permission to describe the billing authorization for a connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetBillingAuthorization() {
    return this.to('GetBillingAuthorization');
  }

  /**
   * Grants permission to get a connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get a pending request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetPendingConnection() {
    return this.to('GetPendingConnection');
  }

  /**
   * Grants permission to list connections that are not pending
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list IAM roles associated with a connection
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListIamRolesForConnection() {
    return this.to('ListIamRolesForConnection');
  }

  /**
   * Grants permission to list tags for an Amazon CodeCatalyst resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the billing authorization for a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toPutBillingAuthorization() {
    return this.to('PutBillingAuthorization');
  }

  /**
   * Grants permission to reject a request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toRejectConnection() {
    return this.to('RejectConnection');
  }

  /**
   * Grants permission to tag an Amazon CodeCatalyst resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon CodeCatalyst resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
      'GetPendingConnection',
      'ListTagsForResource'
    ],
    List: [
      'ListConnections',
      'ListIamRolesForConnection'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnections(connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:${ region || '*' }:${ account || '*' }:/connections/${ connectionId }`);
  }
}
