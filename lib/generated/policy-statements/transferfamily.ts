import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to add an agreement associated with a server
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
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateAgreement.html
   */
  public toCreateAgreement() {
    return this.to('CreateAgreement');
  }

  /**
   * Grants permission to create a connector
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
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateConnector.html
   */
  public toCreateConnector() {
    return this.to('CreateConnector');
  }

  /**
   * Grants permission to create a profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
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
   * Grants permission to create a webapp
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
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateWebApp.html
   */
  public toCreateWebApp() {
    return this.to('CreateWebApp');
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
   * Grants permission to delete agreement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteAgreement.html
   */
  public toDeleteAgreement() {
    return this.to('DeleteAgreement');
  }

  /**
   * Grants permission to delete certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Grants permission to delete connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteConnector.html
   */
  public toDeleteConnector() {
    return this.to('DeleteConnector');
  }

  /**
   * Grants permission to delete a host key associated with a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteHostKey.html
   */
  public toDeleteHostKey() {
    return this.to('DeleteHostKey');
  }

  /**
   * Grants permission to delete profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
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
   * Grants permission to delete webapp
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteWebApp.html
   */
  public toDeleteWebApp() {
    return this.to('DeleteWebApp');
  }

  /**
   * Grants permission to delete webapp customization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteWebAppCustomization.html
   */
  public toDeleteWebAppCustomization() {
    return this.to('DeleteWebAppCustomization');
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
   * Grants permission to describe an agreement assigned to a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeAgreement.html
   */
  public toDescribeAgreement() {
    return this.to('DescribeAgreement');
  }

  /**
   * Grants permission to describe a certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Grants permission to describe a connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeConnector.html
   */
  public toDescribeConnector() {
    return this.to('DescribeConnector');
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
   * Grants permission to describe a host key associated with a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeHostKey.html
   */
  public toDescribeHostKey() {
    return this.to('DescribeHostKey');
  }

  /**
   * Grants permission to describe a profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeProfile.html
   */
  public toDescribeProfile() {
    return this.to('DescribeProfile');
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
   * Grants permission to describe a webapp
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeWebApp.html
   */
  public toDescribeWebApp() {
    return this.to('DescribeWebApp');
  }

  /**
   * Grants permission to describe a webapp customization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeWebAppCustomization.html
   */
  public toDescribeWebAppCustomization() {
    return this.to('DescribeWebAppCustomization');
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
   * Grants permission to add a certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportCertificate.html
   */
  public toImportCertificate() {
    return this.to('ImportCertificate');
  }

  /**
   * Grants permission to add a host key to a server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportHostKey.html
   */
  public toImportHostKey() {
    return this.to('ImportHostKey');
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
   * Grants permission to list agreements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListAgreements.html
   */
  public toListAgreements() {
    return this.to('ListAgreements');
  }

  /**
   * Grants permission to list certificates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * Grants permission to list connectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListConnectors.html
   */
  public toListConnectors() {
    return this.to('ListConnectors');
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
   * Grants permission to list file transfer statuses for connectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListFileTransferResults.html
   */
  public toListFileTransferResults() {
    return this.to('ListFileTransferResults');
  }

  /**
   * Grants permission to list host keys associated with a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListHostKeys.html
   */
  public toListHostKeys() {
    return this.to('ListHostKeys');
  }

  /**
   * Grants permission to list profiles
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
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
   * Grants permission to list tags for an AWS Transfer Family resource
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
   * Grants permission to list webapps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_ListWebApps.html
   */
  public toListWebApps() {
    return this.to('ListWebApps');
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
   * Grants permission to initiate a list operation on a remote server using a connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartDirectoryListing.html
   */
  public toStartDirectoryListing() {
    return this.to('StartDirectoryListing');
  }

  /**
   * Grants permission to initiate a connector file transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartFileTransfer.html
   */
  public toStartFileTransfer() {
    return this.to('StartFileTransfer');
  }

  /**
   * Grants permission to initiate a connector delete operation on remote server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartRemoteDelete.html
   */
  public toStartRemoteDelete() {
    return this.to('StartRemoteDelete');
  }

  /**
   * Grants permission to initiate a connector move operation on remote server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_StartRemoteMove.html
   */
  public toStartRemoteMove() {
    return this.to('StartRemoteMove');
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
   * Grants permission to tag an AWS Transfer Family resource
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
   * Grants permission to test a connector's connection to remote server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_TestConnection.html
   */
  public toTestConnection() {
    return this.to('TestConnection');
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
   * Grants permission to untag an AWS Transfer Family resource
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
   * Grants permission to update an agreement
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateAgreement.html
   */
  public toUpdateAgreement() {
    return this.to('UpdateAgreement');
  }

  /**
   * Grants permission to update a certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateCertificate.html
   */
  public toUpdateCertificate() {
    return this.to('UpdateCertificate');
  }

  /**
   * Grants permission to update a connector
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateConnector.html
   */
  public toUpdateConnector() {
    return this.to('UpdateConnector');
  }

  /**
   * Grants permission to update a host key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateHostKey.html
   */
  public toUpdateHostKey() {
    return this.to('UpdateHostKey');
  }

  /**
   * Grants permission to update a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
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

  /**
   * Grants permission to update the configuration of a webapp
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateWebApp.html
   */
  public toUpdateWebApp() {
    return this.to('UpdateWebApp');
  }

  /**
   * Grants permission to update the configuration of a webapp cutomization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateWebAppCustomization.html
   */
  public toUpdateWebAppCustomization() {
    return this.to('UpdateWebAppCustomization');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccess',
      'CreateAgreement',
      'CreateConnector',
      'CreateProfile',
      'CreateServer',
      'CreateUser',
      'CreateWebApp',
      'CreateWorkflow',
      'DeleteAccess',
      'DeleteAgreement',
      'DeleteCertificate',
      'DeleteConnector',
      'DeleteHostKey',
      'DeleteProfile',
      'DeleteServer',
      'DeleteSshPublicKey',
      'DeleteUser',
      'DeleteWebApp',
      'DeleteWebAppCustomization',
      'DeleteWorkflow',
      'ImportCertificate',
      'ImportHostKey',
      'ImportSshPublicKey',
      'SendWorkflowStepState',
      'StartDirectoryListing',
      'StartFileTransfer',
      'StartRemoteDelete',
      'StartRemoteMove',
      'StartServer',
      'StopServer',
      'TestConnection',
      'UpdateAccess',
      'UpdateAgreement',
      'UpdateCertificate',
      'UpdateConnector',
      'UpdateHostKey',
      'UpdateProfile',
      'UpdateServer',
      'UpdateUser',
      'UpdateWebApp',
      'UpdateWebAppCustomization'
    ],
    Read: [
      'DescribeAccess',
      'DescribeAgreement',
      'DescribeCertificate',
      'DescribeConnector',
      'DescribeExecution',
      'DescribeHostKey',
      'DescribeProfile',
      'DescribeSecurityPolicy',
      'DescribeServer',
      'DescribeUser',
      'DescribeWebApp',
      'DescribeWebAppCustomization',
      'DescribeWorkflow',
      'ListAccesses',
      'ListAgreements',
      'ListCertificates',
      'ListConnectors',
      'ListExecutions',
      'ListFileTransferResults',
      'ListHostKeys',
      'ListProfiles',
      'ListTagsForResource',
      'TestIdentityProvider'
    ],
    List: [
      'ListSecurityPolicies',
      'ListServers',
      'ListUsers',
      'ListWebApps',
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
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(serverId: string, userName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:user/${ serverId }/${ userName }`);
  }

  /**
   * Adds a resource of type server to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html
   *
   * @param serverId - Identifier for the serverId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServer(serverId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:server/${ serverId }`);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/transfer-workflows.html
   *
   * @param workflowId - Identifier for the workflowId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow/${ workflowId }`);
  }

  /**
   * Adds a resource of type certificate to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html
   *
   * @param certificateId - Identifier for the certificateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificate(certificateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:certificate/${ certificateId }`);
  }

  /**
   * Adds a resource of type connector to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnector(connectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connector/${ connectorId }`);
  }

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ profileId }`);
  }

  /**
   * Adds a resource of type agreement to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html
   *
   * @param serverId - Identifier for the serverId.
   * @param agreementId - Identifier for the agreementId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgreement(serverId: string, agreementId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agreement/${ serverId }/${ agreementId }`);
  }

  /**
   * Adds a resource of type host-key to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html
   *
   * @param serverId - Identifier for the serverId.
   * @param hostKeyId - Identifier for the hostKeyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHostKey(serverId: string, hostKeyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:host-key/${ serverId }/${ hostKeyId }`);
  }

  /**
   * Adds a resource of type webapp to the statement
   *
   * https://docs.aws.amazon.com/transfer/latest/userguide/web-app.html
   *
   * @param webAppId - Identifier for the webAppId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebapp(webAppId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transfer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:webapp/${ webAppId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAgreement()
   * - .toCreateConnector()
   * - .toCreateProfile()
   * - .toCreateServer()
   * - .toCreateUser()
   * - .toCreateWebApp()
   * - .toCreateWorkflow()
   * - .toImportCertificate()
   * - .toImportHostKey()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - user
   * - server
   * - workflow
   * - certificate
   * - connector
   * - profile
   * - agreement
   * - host-key
   * - webapp
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAgreement()
   * - .toCreateConnector()
   * - .toCreateProfile()
   * - .toCreateServer()
   * - .toCreateUser()
   * - .toCreateWebApp()
   * - .toCreateWorkflow()
   * - .toImportCertificate()
   * - .toImportHostKey()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
