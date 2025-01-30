import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [deadline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeadlinecloud.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Deadline extends PolicyStatement {
  public servicePrefix = 'deadline';

  /**
   * Statement provider for service [deadline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeadlinecloud.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a member to a farm
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   * - .ifMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToFarm.html
   */
  public toAssociateMemberToFarm() {
    return this.to('AssociateMemberToFarm');
  }

  /**
   * Grants permission to associate a member to a fleet
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   * - .ifMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToFleet.html
   */
  public toAssociateMemberToFleet() {
    return this.to('AssociateMemberToFleet');
  }

  /**
   * Grants permission to associate a member to a job
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   * - .ifMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToJob.html
   */
  public toAssociateMemberToJob() {
    return this.to('AssociateMemberToJob');
  }

  /**
   * Grants permission to associate a member to a queue
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   * - .ifMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToQueue.html
   */
  public toAssociateMemberToQueue() {
    return this.to('AssociateMemberToQueue');
  }

  /**
   * Grants permission to assume a fleet role for read-only access
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeFleetRoleForRead.html
   */
  public toAssumeFleetRoleForRead() {
    return this.to('AssumeFleetRoleForRead');
  }

  /**
   * Grants permission to assume a fleet role for a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeFleetRoleForWorker.html
   */
  public toAssumeFleetRoleForWorker() {
    return this.to('AssumeFleetRoleForWorker');
  }

  /**
   * Grants permission to assume a queue role for read-only access
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForRead.html
   */
  public toAssumeQueueRoleForRead() {
    return this.to('AssumeQueueRoleForRead');
  }

  /**
   * Grants permission to assume a queue role for a user
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForUser.html
   */
  public toAssumeQueueRoleForUser() {
    return this.to('AssumeQueueRoleForUser');
  }

  /**
   * Grants permission to assume a queue role for a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForWorker.html
   */
  public toAssumeQueueRoleForWorker() {
    return this.to('AssumeQueueRoleForWorker');
  }

  /**
   * Grants permission to get a job entity for a worker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_BatchGetJobEntity.html
   */
  public toBatchGetJobEntity() {
    return this.to('BatchGetJobEntity');
  }

  /**
   * Grants permission to copy a job template to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CopyJobTemplate.html
   */
  public toCopyJobTemplate() {
    return this.to('CopyJobTemplate');
  }

  /**
   * Grants permission to create a budget
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateBudget.html
   */
  public toCreateBudget() {
    return this.to('CreateBudget');
  }

  /**
   * Grants permission to create a farm
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - deadline:TagResource
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateFarm.html
   */
  public toCreateFarm() {
    return this.to('CreateFarm');
  }

  /**
   * Grants permission to create a fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - deadline:TagResource
   * - iam:PassRole
   * - identitystore:ListGroupMembershipsForMember
   * - logs:CreateLogGroup
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - deadline:GetJobTemplate
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create a license endpoint for licensed software or products
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - deadline:TagResource
   * - ec2:CreateTags
   * - ec2:CreateVpcEndpoint
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateLicenseEndpoint.html
   */
  public toCreateLicenseEndpoint() {
    return this.to('CreateLicenseEndpoint');
  }

  /**
   * Grants permission to create a limit for a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateLimit.html
   */
  public toCreateLimit() {
    return this.to('CreateLimit');
  }

  /**
   * Grants permission to create a monitor
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - sso:CreateApplication
   * - sso:DeleteApplication
   * - sso:PutApplicationAssignmentConfiguration
   * - sso:PutApplicationAuthenticationMethod
   * - sso:PutApplicationGrant
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateMonitor.html
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
  }

  /**
   * Grants permission to create a queue
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - deadline:TagResource
   * - iam:PassRole
   * - identitystore:ListGroupMembershipsForMember
   * - logs:CreateLogGroup
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Grants permission to create a queue environment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueEnvironment.html
   */
  public toCreateQueueEnvironment() {
    return this.to('CreateQueueEnvironment');
  }

  /**
   * Grants permission to create a queue-fleet association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueFleetAssociation.html
   */
  public toCreateQueueFleetAssociation() {
    return this.to('CreateQueueFleetAssociation');
  }

  /**
   * Grants permission to create a queue-limit association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueLimitAssociation.html
   */
  public toCreateQueueLimitAssociation() {
    return this.to('CreateQueueLimitAssociation');
  }

  /**
   * Grants permission to create a storage profile for a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateStorageProfile.html
   */
  public toCreateStorageProfile() {
    return this.to('CreateStorageProfile');
  }

  /**
   * Grants permission to create a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateWorker.html
   */
  public toCreateWorker() {
    return this.to('CreateWorker');
  }

  /**
   * Grants permission to delete a budget
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteBudget.html
   */
  public toDeleteBudget() {
    return this.to('DeleteBudget');
  }

  /**
   * Grants permission to delete a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteFarm.html
   */
  public toDeleteFarm() {
    return this.to('DeleteFarm');
  }

  /**
   * Grants permission to delete a fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Grants permission to delete a license endpoint
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteLicenseEndpoint.html
   */
  public toDeleteLicenseEndpoint() {
    return this.to('DeleteLicenseEndpoint');
  }

  /**
   * Grants permission to delete a limit
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteLimit.html
   */
  public toDeleteLimit() {
    return this.to('DeleteLimit');
  }

  /**
   * Grants permission to delete a metered product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteMeteredProduct.html
   */
  public toDeleteMeteredProduct() {
    return this.to('DeleteMeteredProduct');
  }

  /**
   * Grants permission to delete a monitor
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteApplication
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteMonitor.html
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
  }

  /**
   * Grants permission to delete a queue
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Grants permission to delete a queue environment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueEnvironment.html
   */
  public toDeleteQueueEnvironment() {
    return this.to('DeleteQueueEnvironment');
  }

  /**
   * Grants permission to delete a queue-fleet association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueFleetAssociation.html
   */
  public toDeleteQueueFleetAssociation() {
    return this.to('DeleteQueueFleetAssociation');
  }

  /**
   * Grants permission to delete a queue-limit association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueLimitAssociation.html
   */
  public toDeleteQueueLimitAssociation() {
    return this.to('DeleteQueueLimitAssociation');
  }

  /**
   * Grants permission to delete a storage profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteStorageProfile.html
   */
  public toDeleteStorageProfile() {
    return this.to('DeleteStorageProfile');
  }

  /**
   * Grants permission to delete a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteWorker.html
   */
  public toDeleteWorker() {
    return this.to('DeleteWorker');
  }

  /**
   * Grants permission to disassociate a member from a farm
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromFarm.html
   */
  public toDisassociateMemberFromFarm() {
    return this.to('DisassociateMemberFromFarm');
  }

  /**
   * Grants permission to disassociate a member from a fleet
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromFleet.html
   */
  public toDisassociateMemberFromFleet() {
    return this.to('DisassociateMemberFromFleet');
  }

  /**
   * Grants permission to disassociate a member from a job
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromJob.html
   */
  public toDisassociateMemberFromJob() {
    return this.to('DisassociateMemberFromJob');
  }

  /**
   * Grants permission to disassociate a member from a queue
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAssociatedMembershipLevel()
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromQueue.html
   */
  public toDisassociateMemberFromQueue() {
    return this.to('DisassociateMemberFromQueue');
  }

  /**
   * Grants permission to get the latest version of an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetApplicationVersion.html
   */
  public toGetApplicationVersion() {
    return this.to('GetApplicationVersion');
  }

  /**
   * Grants permission to get a budget
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetBudget.html
   */
  public toGetBudget() {
    return this.to('GetBudget');
  }

  /**
   * Grants permission to get a farm
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetFarm.html
   */
  public toGetFarm() {
    return this.to('GetFarm');
  }

  /**
   * Grants permission to get a fleet
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetFleet.html
   */
  public toGetFleet() {
    return this.to('GetFleet');
  }

  /**
   * Grants permission to get a job
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetJob.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to read job template
   *
   * Access Level: Read
   */
  public toGetJobTemplate() {
    return this.to('GetJobTemplate');
  }

  /**
   * Grants permission to get a license endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetLicenseEndpoint.html
   */
  public toGetLicenseEndpoint() {
    return this.to('GetLicenseEndpoint');
  }

  /**
   * Grants permission to get a limit
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetLimit.html
   */
  public toGetLimit() {
    return this.to('GetLimit');
  }

  /**
   * Grants permission to get a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetMonitor.html
   */
  public toGetMonitor() {
    return this.to('GetMonitor');
  }

  /**
   * Grants permission to get a queue
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueue.html
   */
  public toGetQueue() {
    return this.to('GetQueue');
  }

  /**
   * Grants permission to get a queue environment
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueEnvironment.html
   */
  public toGetQueueEnvironment() {
    return this.to('GetQueueEnvironment');
  }

  /**
   * Grants permission to get a queue-fleet association
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueFleetAssociation.html
   */
  public toGetQueueFleetAssociation() {
    return this.to('GetQueueFleetAssociation');
  }

  /**
   * Grants permission to get a queue-limit association
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueLimitAssociation.html
   */
  public toGetQueueLimitAssociation() {
    return this.to('GetQueueLimitAssociation');
  }

  /**
   * Grants permission to get a session for a job
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to get a session action for a job
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSessionAction.html
   */
  public toGetSessionAction() {
    return this.to('GetSessionAction');
  }

  /**
   * Grants permission to get all collected statistics for sessions
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSessionsStatisticsAggregation.html
   */
  public toGetSessionsStatisticsAggregation() {
    return this.to('GetSessionsStatisticsAggregation');
  }

  /**
   * Grants permission to get a step in a job
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStep.html
   */
  public toGetStep() {
    return this.to('GetStep');
  }

  /**
   * Grants permission to get a storage profile
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStorageProfile.html
   */
  public toGetStorageProfile() {
    return this.to('GetStorageProfile');
  }

  /**
   * Grants permission to get a storage profile for a queue
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStorageProfileForQueue.html
   */
  public toGetStorageProfileForQueue() {
    return this.to('GetStorageProfileForQueue');
  }

  /**
   * Grants permission to get a job task
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetTask.html
   */
  public toGetTask() {
    return this.to('GetTask');
  }

  /**
   * Grants permission to get a worker
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetWorker.html
   */
  public toGetWorker() {
    return this.to('GetWorker');
  }

  /**
   * Grants permission to list all available metered products within a license endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListAvailableMeteredProducts.html
   */
  public toListAvailableMeteredProducts() {
    return this.to('ListAvailableMeteredProducts');
  }

  /**
   * Grants permission to list all budgets for a farm
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListBudgets.html
   */
  public toListBudgets() {
    return this.to('ListBudgets');
  }

  /**
   * Grants permission to list all members of a farm
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFarmMembers.html
   */
  public toListFarmMembers() {
    return this.to('ListFarmMembers');
  }

  /**
   * Grants permission to list all farms
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPrincipalId()
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFarms.html
   */
  public toListFarms() {
    return this.to('ListFarms');
  }

  /**
   * Grants permission to list all members of a fleet
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFleetMembers.html
   */
  public toListFleetMembers() {
    return this.to('ListFleetMembers');
  }

  /**
   * Grants permission to list all fleets
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPrincipalId()
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
  }

  /**
   * Grants permission to list all members of a job
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobMembers.html
   */
  public toListJobMembers() {
    return this.to('ListJobMembers');
  }

  /**
   * Grants permission to get a job's parameter definitions in the job template
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobParameterDefinitions.html
   */
  public toListJobParameterDefinitions() {
    return this.to('ListJobParameterDefinitions');
  }

  /**
   * Grants permission to list all jobs in a queue
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPrincipalId()
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list all license endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListLicenseEndpoints.html
   */
  public toListLicenseEndpoints() {
    return this.to('ListLicenseEndpoints');
  }

  /**
   * Grants permission to list all limits in a farm
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListLimits.html
   */
  public toListLimits() {
    return this.to('ListLimits');
  }

  /**
   * Grants permission to list all metered products in a license endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListMeteredProducts.html
   */
  public toListMeteredProducts() {
    return this.to('ListMeteredProducts');
  }

  /**
   * Grants permission to list all monitors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListMonitors.html
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Grants permission to list all queue environments to which a queue is associated
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueEnvironments.html
   */
  public toListQueueEnvironments() {
    return this.to('ListQueueEnvironments');
  }

  /**
   * Grants permission to list all queue-fleet associations
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueFleetAssociations.html
   */
  public toListQueueFleetAssociations() {
    return this.to('ListQueueFleetAssociations');
  }

  /**
   * Grants permission to list all queue-limit associations
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueLimitAssociations.html
   */
  public toListQueueLimitAssociations() {
    return this.to('ListQueueLimitAssociations');
  }

  /**
   * Grants permission to list all members in a queue
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueMembers.html
   */
  public toListQueueMembers() {
    return this.to('ListQueueMembers');
  }

  /**
   * Grants permission to list all queues on a farm
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPrincipalId()
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - identitystore:DescribeGroup
   * - identitystore:DescribeUser
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permission to list all session actions for a job
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessionActions.html
   */
  public toListSessionActions() {
    return this.to('ListSessionActions');
  }

  /**
   * Grants permission to list all sessions for a job
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list all sessions for a worker
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessionsForWorker.html
   */
  public toListSessionsForWorker() {
    return this.to('ListSessionsForWorker');
  }

  /**
   * Grants permission to list the step consumers for a job step
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStepConsumers.html
   */
  public toListStepConsumers() {
    return this.to('ListStepConsumers');
  }

  /**
   * Grants permission to list dependencies for a job step
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStepDependencies.html
   */
  public toListStepDependencies() {
    return this.to('ListStepDependencies');
  }

  /**
   * Grants permission to list all steps for a job
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSteps.html
   */
  public toListSteps() {
    return this.to('ListSteps');
  }

  /**
   * Grants permission to list all storage profiles in a farm
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStorageProfiles.html
   */
  public toListStorageProfiles() {
    return this.to('ListStorageProfiles');
  }

  /**
   * Grants permission to list all storage profiles in a queue
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStorageProfilesForQueue.html
   */
  public toListStorageProfilesForQueue() {
    return this.to('ListStorageProfilesForQueue');
  }

  /**
   * Grants permission to list all tags on specified Deadline Cloud resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all tasks for a job
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to list all workers in a fleet
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListWorkers.html
   */
  public toListWorkers() {
    return this.to('ListWorkers');
  }

  /**
   * Grants permission to add a metered product to a license endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_PutMeteredProduct.html
   */
  public toPutMeteredProduct() {
    return this.to('PutMeteredProduct');
  }

  /**
   * Grants permission to search for jobs in multiple queues
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchJobs.html
   */
  public toSearchJobs() {
    return this.to('SearchJobs');
  }

  /**
   * Grants permission to search the steps within a single job or to search the steps for multiple queues
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchSteps.html
   */
  public toSearchSteps() {
    return this.to('SearchSteps');
  }

  /**
   * Grants permission to search the tasks within a single job or to search the tasks for multiple queues
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchTasks.html
   */
  public toSearchTasks() {
    return this.to('SearchTasks');
  }

  /**
   * Grants permission to search for workers in multiple fleets
   *
   * Access Level: List
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchWorkers.html
   */
  public toSearchWorkers() {
    return this.to('SearchWorkers');
  }

  /**
   * Grants permission to get all collected statistics for sessions
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_StartSessionsStatisticsAggregation.html
   */
  public toStartSessionsStatisticsAggregation() {
    return this.to('StartSessionsStatisticsAggregation');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified Deadline Cloud resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate one or more tags from the specified Deadline Cloud resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a budget
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateBudget.html
   */
  public toUpdateBudget() {
    return this.to('UpdateBudget');
  }

  /**
   * Grants permission to update a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateFarm.html
   */
  public toUpdateFarm() {
    return this.to('UpdateFarm');
  }

  /**
   * Grants permission to update a fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateFleet.html
   */
  public toUpdateFleet() {
    return this.to('UpdateFleet');
  }

  /**
   * Grants permission to update a job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateJob.html
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  /**
   * Grants permission to update a limit for a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateLimit.html
   */
  public toUpdateLimit() {
    return this.to('UpdateLimit');
  }

  /**
   * Grants permission to update a monitor
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - sso:PutApplicationGrant
   * - sso:UpdateApplication
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateMonitor.html
   */
  public toUpdateMonitor() {
    return this.to('UpdateMonitor');
  }

  /**
   * Grants permission to update a queue
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueue.html
   */
  public toUpdateQueue() {
    return this.to('UpdateQueue');
  }

  /**
   * Grants permission to update a queue environment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueEnvironment.html
   */
  public toUpdateQueueEnvironment() {
    return this.to('UpdateQueueEnvironment');
  }

  /**
   * Grants permission to update a queue-fleet association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueFleetAssociation.html
   */
  public toUpdateQueueFleetAssociation() {
    return this.to('UpdateQueueFleetAssociation');
  }

  /**
   * Grants permission to update a queue-limit association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueLimitAssociation.html
   */
  public toUpdateQueueLimitAssociation() {
    return this.to('UpdateQueueLimitAssociation');
  }

  /**
   * Grants permission to update a session for a job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateSession.html
   */
  public toUpdateSession() {
    return this.to('UpdateSession');
  }

  /**
   * Grants permission to update a step for a job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateStep.html
   */
  public toUpdateStep() {
    return this.to('UpdateStep');
  }

  /**
   * Grants permission to update a storage profile for a farm
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateStorageProfile.html
   */
  public toUpdateStorageProfile() {
    return this.to('UpdateStorageProfile');
  }

  /**
   * Grants permission to update a task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - identitystore:ListGroupMembershipsForMember
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateTask.html
   */
  public toUpdateTask() {
    return this.to('UpdateTask');
  }

  /**
   * Grants permission to update a worker
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:CreateLogStream
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateWorker.html
   */
  public toUpdateWorker() {
    return this.to('UpdateWorker');
  }

  /**
   * Grants permission to update the schedule for a worker
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:CreateLogStream
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateWorkerSchedule.html
   */
  public toUpdateWorkerSchedule() {
    return this.to('UpdateWorkerSchedule');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AssociateMemberToFarm',
      'AssociateMemberToFleet',
      'AssociateMemberToJob',
      'AssociateMemberToQueue',
      'DisassociateMemberFromFarm',
      'DisassociateMemberFromFleet',
      'DisassociateMemberFromJob',
      'DisassociateMemberFromQueue'
    ],
    Write: [
      'AssumeFleetRoleForRead',
      'AssumeFleetRoleForWorker',
      'AssumeQueueRoleForRead',
      'AssumeQueueRoleForUser',
      'AssumeQueueRoleForWorker',
      'CopyJobTemplate',
      'CreateBudget',
      'CreateFarm',
      'CreateFleet',
      'CreateJob',
      'CreateLicenseEndpoint',
      'CreateLimit',
      'CreateMonitor',
      'CreateQueue',
      'CreateQueueEnvironment',
      'CreateQueueFleetAssociation',
      'CreateQueueLimitAssociation',
      'CreateStorageProfile',
      'CreateWorker',
      'DeleteBudget',
      'DeleteFarm',
      'DeleteFleet',
      'DeleteLicenseEndpoint',
      'DeleteLimit',
      'DeleteMeteredProduct',
      'DeleteMonitor',
      'DeleteQueue',
      'DeleteQueueEnvironment',
      'DeleteQueueFleetAssociation',
      'DeleteQueueLimitAssociation',
      'DeleteStorageProfile',
      'DeleteWorker',
      'PutMeteredProduct',
      'UpdateBudget',
      'UpdateFarm',
      'UpdateFleet',
      'UpdateJob',
      'UpdateLimit',
      'UpdateMonitor',
      'UpdateQueue',
      'UpdateQueueEnvironment',
      'UpdateQueueFleetAssociation',
      'UpdateQueueLimitAssociation',
      'UpdateSession',
      'UpdateStep',
      'UpdateStorageProfile',
      'UpdateTask',
      'UpdateWorker',
      'UpdateWorkerSchedule'
    ],
    Read: [
      'BatchGetJobEntity',
      'GetApplicationVersion',
      'GetBudget',
      'GetFarm',
      'GetFleet',
      'GetJob',
      'GetJobTemplate',
      'GetLicenseEndpoint',
      'GetLimit',
      'GetMonitor',
      'GetQueue',
      'GetQueueEnvironment',
      'GetQueueFleetAssociation',
      'GetQueueLimitAssociation',
      'GetSession',
      'GetSessionAction',
      'GetSessionsStatisticsAggregation',
      'GetStep',
      'GetStorageProfile',
      'GetStorageProfileForQueue',
      'GetTask',
      'GetWorker',
      'StartSessionsStatisticsAggregation'
    ],
    List: [
      'ListAvailableMeteredProducts',
      'ListBudgets',
      'ListFarmMembers',
      'ListFarms',
      'ListFleetMembers',
      'ListFleets',
      'ListJobMembers',
      'ListJobParameterDefinitions',
      'ListJobs',
      'ListLicenseEndpoints',
      'ListLimits',
      'ListMeteredProducts',
      'ListMonitors',
      'ListQueueEnvironments',
      'ListQueueFleetAssociations',
      'ListQueueLimitAssociations',
      'ListQueueMembers',
      'ListQueues',
      'ListSessionActions',
      'ListSessions',
      'ListSessionsForWorker',
      'ListStepConsumers',
      'ListStepDependencies',
      'ListSteps',
      'ListStorageProfiles',
      'ListStorageProfilesForQueue',
      'ListTagsForResource',
      'ListTasks',
      'ListWorkers',
      'SearchJobs',
      'SearchSteps',
      'SearchTasks',
      'SearchWorkers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type budget to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/manage-costs.html
   *
   * @param farmId - Identifier for the farmId.
   * @param budgetId - Identifier for the budgetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifFarmMembershipLevels()
   */
  public onBudget(farmId: string, budgetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }/budget/${ budgetId }`);
  }

  /**
   * Adds a resource of type farm to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/farms.html
   *
   * @param farmId - Identifier for the farmId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifFarmMembershipLevels()
   */
  public onFarm(farmId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }`);
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/manage-fleets.html
   *
   * @param farmId - Identifier for the farmId.
   * @param fleetId - Identifier for the fleetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifFarmMembershipLevels()
   * - .ifFleetMembershipLevels()
   */
  public onFleet(farmId: string, fleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }/fleet/${ fleetId }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/deadline-cloud-jobs.html
   *
   * @param farmId - Identifier for the farmId.
   * @param queueId - Identifier for the queueId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifFarmMembershipLevels()
   * - .ifJobMembershipLevels()
   * - .ifQueueMembershipLevels()
   */
  public onJob(farmId: string, queueId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }/queue/${ queueId }/job/${ jobId }`);
  }

  /**
   * Adds a resource of type license-endpoint to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/cmf-ubl.html
   *
   * @param licenseEndpointId - Identifier for the licenseEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLicenseEndpoint(licenseEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:license-endpoint/${ licenseEndpointId }`);
  }

  /**
   * Adds a resource of type metered-product to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/cmf-ubl.html
   *
   * @param licenseEndpointId - Identifier for the licenseEndpointId.
   * @param productId - Identifier for the productId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMeteredProduct(licenseEndpointId: string, productId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:license-endpoint/${ licenseEndpointId }/metered-product/${ productId }`);
  }

  /**
   * Adds a resource of type monitor to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/working-with-deadline-monitor.html
   *
   * @param monitorId - Identifier for the monitorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMonitor(monitorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:monitor/${ monitorId }`);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/queues.html
   *
   * @param farmId - Identifier for the farmId.
   * @param queueId - Identifier for the queueId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifFarmMembershipLevels()
   * - .ifQueueMembershipLevels()
   */
  public onQueue(farmId: string, queueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }/queue/${ queueId }`);
  }

  /**
   * Adds a resource of type worker to the statement
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam.html
   *
   * @param farmId - Identifier for the farmId.
   * @param fleetId - Identifier for the fleetId.
   * @param workerId - Identifier for the workerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifFarmMembershipLevels()
   * - .ifFleetMembershipLevels()
   */
  public onWorker(farmId: string, fleetId: string, workerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:deadline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:farm/${ farmId }/fleet/${ fleetId }/worker/${ workerId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateFarm()
   * - .toCreateFleet()
   * - .toCreateLicenseEndpoint()
   * - .toCreateQueue()
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
   * - farm
   * - fleet
   * - license-endpoint
   * - queue
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
   * - .toCreateFarm()
   * - .toCreateFleet()
   * - .toCreateLicenseEndpoint()
   * - .toCreateQueue()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the associated membership level of the principal provided in the request
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateMemberToFarm()
   * - .toAssociateMemberToFleet()
   * - .toAssociateMemberToJob()
   * - .toAssociateMemberToQueue()
   * - .toDisassociateMemberFromFarm()
   * - .toDisassociateMemberFromFleet()
   * - .toDisassociateMemberFromJob()
   * - .toDisassociateMemberFromQueue()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociatedMembershipLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`AssociatedMembershipLevel`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by membership levels on the farm
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to resource types:
   * - budget
   * - farm
   * - fleet
   * - job
   * - queue
   * - worker
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFarmMembershipLevels(value: string | string[], operator?: Operator | string) {
    return this.if(`FarmMembershipLevels`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by membership levels on the fleet
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to resource types:
   * - fleet
   * - worker
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFleetMembershipLevels(value: string | string[], operator?: Operator | string) {
    return this.if(`FleetMembershipLevels`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by membership levels on the job
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to resource types:
   * - job
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobMembershipLevels(value: string | string[], operator?: Operator | string) {
    return this.if(`JobMembershipLevels`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the membership level passed in the request
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateMemberToFarm()
   * - .toAssociateMemberToFleet()
   * - .toAssociateMemberToJob()
   * - .toAssociateMemberToQueue()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMembershipLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`MembershipLevel`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the principle ID provided in the request
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toListFarms()
   * - .toListFleets()
   * - .toListJobs()
   * - .toListQueues()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipalId(value: string | string[], operator?: Operator | string) {
    return this.if(`PrincipalId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by membership levels on the queue
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to resource types:
   * - job
   * - queue
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifQueueMembershipLevels(value: string | string[], operator?: Operator | string) {
    return this.if(`QueueMembershipLevels`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the user calling the Deadline Cloud API
   *
   * https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toListFarms()
   * - .toListFleets()
   * - .toListJobs()
   * - .toListQueues()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequesterPrincipalId(value: string | string[], operator?: Operator | string) {
    return this.if(`RequesterPrincipalId`, value, operator ?? 'StringLike');
  }
}
