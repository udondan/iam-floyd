import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [transfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transfer extends PolicyStatement {
  public servicePrefix = 'transfer';

  /**
   * Statement provider for service [transfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add an access associated with a server
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateAccess.html
   */
  public toCreateAccess() {
    return this.to('CreateAccess');
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
    return this.to('CreateServer');
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
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateWorkflow.html
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to delete access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteAccess.html
   */
  public toDeleteAccess() {
    return this.to('DeleteAccess');
  }

  /**
   * Grants permission to delete a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html
   */
  public toDeleteServer() {
    return this.to('DeleteServer');
  }

  /**
   * Grants permission to delete an SSH public key from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html
   */
  public toDeleteSshPublicKey() {
    return this.to('DeleteSshPublicKey');
  }

  /**
   * Grants permission to delete a user associated with a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to describe an access assigned to a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeAccess.html
   */
  public toDescribeAccess() {
    return this.to('DescribeAccess');
  }

  /**
   * Grants permission to describe an execution associated with a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeExecution.html
   */
  public toDescribeExecution() {
    return this.to('DescribeExecution');
  }

  /**
   * Grants permission to describe a security policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeSecurityPolicy.html
   */
  public toDescribeSecurityPolicy() {
    return this.to('DescribeSecurityPolicy');
  }

  /**
   * Grants permission to describe a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html
   */
  public toDescribeServer() {
    return this.to('DescribeServer');
  }

  /**
   * Grants permission to describe a user associated with a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to describe a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeWorkflow.html
   */
  public toDescribeWorkflow() {
    return this.to('DescribeWorkflow');
  }

  /**
   * Grants permission to add an SSH public key to a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html
   */
  public toImportSshPublicKey() {
    return this.to('ImportSshPublicKey');
  }

  /**
   * Grants permission to list accesses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListAccesses.html
   */
  public toListAccesses() {
    return this.to('ListAccesses');
  }

  /**
   * Grants permission to list executions associated with a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list security policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListSecurityPolicies.html
   */
  public toListSecurityPolicies() {
    return this.to('ListSecurityPolicies');
  }

  /**
   * Grants permission to list servers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html
   */
  public toListServers() {
    return this.to('ListServers');
  }

  /**
   * Grants permission to list tags for a server, a user, or a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list users associated with a server
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to list workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to send a callback for asynchronous custom steps
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_SendWorkflowStepState.html
   */
  public toSendWorkflowStepState() {
    return this.to('SendWorkflowStepState');
  }

  /**
   * Grants permission to start a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html
   */
  public toStartServer() {
    return this.to('StartServer');
  }

  /**
   * Grants permission to stop a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html
   */
  public toStopServer() {
    return this.to('StopServer');
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to test a server's custom identity provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html
   */
  public toTestIdentityProvider() {
    return this.to('TestIdentityProvider');
  }

  /**
   * Grants permission to untag a server, a user, or a workflow
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update access
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateAccess.html
   */
  public toUpdateAccess() {
    return this.to('UpdateAccess');
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
    return this.to('UpdateServer');
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
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccess',
      'CreateServer',
      'CreateUser',
      'CreateWorkflow',
      'DeleteAccess',
      'DeleteServer',
      'DeleteSshPublicKey',
      'DeleteUser',
      'DeleteWorkflow',
      'ImportSshPublicKey',
      'SendWorkflowStepState',
      'StartServer',
      'StopServer',
      'UpdateAccess',
      'UpdateServer',
      'UpdateUser'
    ],
    Read: [
      'DescribeAccess',
      'DescribeExecution',
      'DescribeSecurityPolicy',
      'DescribeServer',
      'DescribeUser',
      'DescribeWorkflow',
      'ListAccesses',
      'ListExecutions',
      'ListTagsForResource',
      'TestIdentityProvider'
    ],
    List: [
      'ListSecurityPolicies',
      'ListServers',
      'ListUsers',
      'ListWorkflows'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/create-user.html
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
    return this.on(`arn:${ partition || 'aws' }:transfer:${ region || '*' }:${ account || '*' }:user/${ serverId }/${ username }`);
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
    return this.on(`arn:${ partition || 'aws' }:transfer:${ region || '*' }:${ account || '*' }:server/${ serverId }`);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/transfer-workflows.html
   *
   * @param workflowId - Identifier for the workflowId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:transfer:${ region || '*' }:${ account || '*' }:workflow/${ workflowId }`);
  }
}
