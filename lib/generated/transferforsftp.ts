import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [transfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferforsftp.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transfer extends PolicyStatement {
  public servicePrefix = 'transfer';

  /**
   * Statement provider for service [transfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferforsftp.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateServer.html
   */
  public toCreateServer() {
    this.to('transfer:CreateServer');
    return this;
  }

  /**
   * Grants permission to add a user associated with a server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('transfer:CreateUser');
    return this;
  }

  /**
   * Grants permission to delete a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html
   */
  public toDeleteServer() {
    this.to('transfer:DeleteServer');
    return this;
  }

  /**
   * Grants permission to delete an SSH public key from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html
   */
  public toDeleteSshPublicKey() {
    this.to('transfer:DeleteSshPublicKey');
    return this;
  }

  /**
   * Grants permission to delete a user associated with a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('transfer:DeleteUser');
    return this;
  }

  /**
   * Grants permission to describe a security policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeSecurityPolicy.html
   */
  public toDescribeSecurityPolicy() {
    this.to('transfer:DescribeSecurityPolicy');
    return this;
  }

  /**
   * Grants permission to describe a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html
   */
  public toDescribeServer() {
    this.to('transfer:DescribeServer');
    return this;
  }

  /**
   * Grants permission to describe a user associated with a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('transfer:DescribeUser');
    return this;
  }

  /**
   * Grants permission to add an SSH public key to a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html
   */
  public toImportSshPublicKey() {
    this.to('transfer:ImportSshPublicKey');
    return this;
  }

  /**
   * Grants permission to list security policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListSecurityPolicies.html
   */
  public toListSecurityPolicies() {
    this.to('transfer:ListSecurityPolicies');
    return this;
  }

  /**
   * Grants permission to list servers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html
   */
  public toListServers() {
    this.to('transfer:ListServers');
    return this;
  }

  /**
   * Grants permission to list tags for a server or a user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('transfer:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list users associated with a server
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html
   */
  public toListUsers() {
    this.to('transfer:ListUsers');
    return this;
  }

  /**
   * Grants permission to start a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html
   */
  public toStartServer() {
    this.to('transfer:StartServer');
    return this;
  }

  /**
   * Grants permission to stop a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html
   */
  public toStopServer() {
    this.to('transfer:StopServer');
    return this;
  }

  /**
   * Grants permission to tag a server or a user
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TagResource.html
   */
  public toTagResource() {
    this.to('transfer:TagResource');
    return this;
  }

  /**
   * Grants permission to test a server's custom identity provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html
   */
  public toTestIdentityProvider() {
    this.to('transfer:TestIdentityProvider');
    return this;
  }

  /**
   * Grants permission to untag a server or a user
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('transfer:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the configuration of a server
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html
   */
  public toUpdateServer() {
    this.to('transfer:UpdateServer');
    return this;
  }

  /**
   * Grants permission to update the configuration of a user
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateUser.html
   */
  public toUpdateUser() {
    this.to('transfer:UpdateUser');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateServer",
      "CreateUser",
      "DeleteServer",
      "DeleteSshPublicKey",
      "DeleteUser",
      "ImportSshPublicKey",
      "StartServer",
      "StopServer",
      "UpdateServer",
      "UpdateUser"
    ],
    "Read": [
      "DescribeSecurityPolicy",
      "DescribeServer",
      "DescribeUser",
      "ListTagsForResource",
      "TestIdentityProvider"
    ],
    "List": [
      "ListSecurityPolicies",
      "ListServers",
      "ListUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/users.html
   *
   * @param serverId - Identifier for the serverId.
   * @param username - Identifier for the username.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(serverId: string, username: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:transfer:${Region}:${Account}:user/${ServerId}/${Username}';
    arn = arn.replace('${ServerId}', serverId);
    arn = arn.replace('${Username}', username);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type server to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html
   *
   * @param serverId - Identifier for the serverId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServer(serverId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:transfer:${Region}:${Account}:server/${ServerId}';
    arn = arn.replace('${ServerId}', serverId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type TransferActionsWrite = 'CreateServer' | 'CreateUser' | 'DeleteServer' | 'DeleteSshPublicKey' | 'DeleteUser' | 'ImportSshPublicKey' | 'StartServer' | 'StopServer' | 'UpdateServer' | 'UpdateUser';
export type TransferActionsRead = 'DescribeSecurityPolicy' | 'DescribeServer' | 'DescribeUser' | 'ListTagsForResource' | 'TestIdentityProvider';
export type TransferActionsList = 'ListSecurityPolicies' | 'ListServers' | 'ListUsers';
export type TransferActionsTagging = 'TagResource' | 'UntagResource';
export type TransferActions = TransferActionsWrite | TransferActionsRead | TransferActionsList | TransferActionsTagging;
