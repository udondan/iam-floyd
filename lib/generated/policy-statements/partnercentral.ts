import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [partnercentral](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspartnercentral.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Partnercentral extends PolicyStatement {
  public servicePrefix = 'partnercentral';

  /**
   * Statement provider for service [partnercentral](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspartnercentral.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept channel handshakes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifChannelHandshakeType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_AcceptChannelHandshake.html
   */
  public toAcceptChannelHandshake() {
    return this.to('AcceptChannelHandshake');
  }

  /**
   * Grants permission to accept Engagement Invitations on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_AcceptEngagementInvitation.html
   */
  public toAcceptEngagementInvitation() {
    return this.to('AcceptEngagementInvitation');
  }

  /**
   * Grants permission to assign Opportunities on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_AssignOpportunity.html
   */
  public toAssignOpportunity() {
    return this.to('AssignOpportunity');
  }

  /**
   * Grants permission to associate Opportunities on AWS Partner Central with other entities
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifRelatedEntityType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_AssociateOpportunity.html
   */
  public toAssociateOpportunity() {
    return this.to('AssociateOpportunity');
  }

  /**
   * Grants permission to cancel channel handshakes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifChannelHandshakeType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CancelChannelHandshake.html
   */
  public toCancelChannelHandshake() {
    return this.to('CancelChannelHandshake');
  }

  /**
   * Grants permission to create channel handshakes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   * - .ifChannelHandshakeType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateChannelHandshake.html
   */
  public toCreateChannelHandshake() {
    return this.to('CreateChannelHandshake');
  }

  /**
   * Grants permission to creating engagements in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateEngagement.html
   */
  public toCreateEngagement() {
    return this.to('CreateEngagement');
  }

  /**
   * Grants permission to creating engagement invitations in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateEngagementInvitation.html
   */
  public toCreateEngagementInvitation() {
    return this.to('CreateEngagementInvitation');
  }

  /**
   * Grants permission to create new Opportunities on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateOpportunity.html
   */
  public toCreateOpportunity() {
    return this.to('CreateOpportunity');
  }

  /**
   * Grants permission to create program management accounts in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateProgramManagementAccount.html
   */
  public toCreateProgramManagementAccount() {
    return this.to('CreateProgramManagementAccount');
  }

  /**
   * Grants permission to create relationships in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateRelationship.html
   */
  public toCreateRelationship() {
    return this.to('CreateRelationship');
  }

  /**
   * Grants permission to creating resource snapshots in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateResourceSnapshot.html
   */
  public toCreateResourceSnapshot() {
    return this.to('CreateResourceSnapshot');
  }

  /**
   * Grants permission to creating resource snapshot jobs in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateResourceSnapshotJob.html
   */
  public toCreateResourceSnapshotJob() {
    return this.to('CreateResourceSnapshotJob');
  }

  /**
   * Grants permission to delete program management accounts in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_DeleteProgramManagementAccount.html
   */
  public toDeleteProgramManagementAccount() {
    return this.to('DeleteProgramManagementAccount');
  }

  /**
   * Grants permission to delete relationships in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_DeleteRelationship.html
   */
  public toDeleteRelationship() {
    return this.to('DeleteRelationship');
  }

  /**
   * Grants permission to deleting resource snapshot jobs on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_DeleteResourceSnapshotJob.html
   */
  public toDeleteResourceSnapshotJob() {
    return this.to('DeleteResourceSnapshotJob');
  }

  /**
   * Grants permission to disassociate Opportunities on AWS Partner Central from other entities
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifRelatedEntityType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_DisassociateOpportunity.html
   */
  public toDisassociateOpportunity() {
    return this.to('DisassociateOpportunity');
  }

  /**
   * Grants permission to retrieve AWS Opportunity Summaries for Opportunities on AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetAwsOpportunitySummary.html
   */
  public toGetAwsOpportunitySummary() {
    return this.to('GetAwsOpportunitySummary');
  }

  /**
   * Grants permission to retrieval of engagement details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetEngagement.html
   */
  public toGetEngagement() {
    return this.to('GetEngagement');
  }

  /**
   * Grants permission to retrieve details of Engagement Invitations on AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetEngagementInvitation.html
   */
  public toGetEngagementInvitation() {
    return this.to('GetEngagementInvitation');
  }

  /**
   * Grants permission to retrieve details of Opportunities on AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetOpportunity.html
   */
  public toGetOpportunity() {
    return this.to('GetOpportunity');
  }

  /**
   * Grants permission to retrieve program management account details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   */
  public toGetProgramManagementAccount() {
    return this.to('GetProgramManagementAccount');
  }

  /**
   * Grants permission to retrieve relationship details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetRelationship.html
   */
  public toGetRelationship() {
    return this.to('GetRelationship');
  }

  /**
   * Grants permission to retrieving resource snapshot details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetResourceSnapshot.html
   */
  public toGetResourceSnapshot() {
    return this.to('GetResourceSnapshot');
  }

  /**
   * Grants permission to retrieving resource snapshot job details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetResourceSnapshotJob.html
   */
  public toGetResourceSnapshotJob() {
    return this.to('GetResourceSnapshotJob');
  }

  /**
   * Grants permission to retrieving selling system settings in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_GetSellingSystemSettings.html
   */
  public toGetSellingSystemSettings() {
    return this.to('GetSellingSystemSettings');
  }

  /**
   * Grants permission to list channel handshakes in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifChannelHandshakeType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListChannelHandshakes.html
   */
  public toListChannelHandshakes() {
    return this.to('ListChannelHandshakes');
  }

  /**
   * Grants permission to listing engagements by accepting invitation tasks in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagementByAcceptingInvitationTasks.html
   */
  public toListEngagementByAcceptingInvitationTasks() {
    return this.to('ListEngagementByAcceptingInvitationTasks');
  }

  /**
   * Grants permission to listing engagements from opportunity tasks in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagementFromOpportunityTasks.html
   */
  public toListEngagementFromOpportunityTasks() {
    return this.to('ListEngagementFromOpportunityTasks');
  }

  /**
   * Grants permission to list Engagement Invitations on AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagementInvitations.html
   */
  public toListEngagementInvitations() {
    return this.to('ListEngagementInvitations');
  }

  /**
   * Grants permission to listing engagement members in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagementMembers.html
   */
  public toListEngagementMembers() {
    return this.to('ListEngagementMembers');
  }

  /**
   * Grants permission to listing engagement resource associations in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagementResourceAssociations.html
   */
  public toListEngagementResourceAssociations() {
    return this.to('ListEngagementResourceAssociations');
  }

  /**
   * Grants permission to listing engagements in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListEngagements.html
   */
  public toListEngagements() {
    return this.to('ListEngagements');
  }

  /**
   * Grants permission to list Opportunities on AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListOpportunities.html
   */
  public toListOpportunities() {
    return this.to('ListOpportunities');
  }

  /**
   * Grants permission to list program management accounts in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListProgramManagementAccounts.html
   */
  public toListProgramManagementAccounts() {
    return this.to('ListProgramManagementAccounts');
  }

  /**
   * Grants permission to list relationships in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListRelationships.html
   */
  public toListRelationships() {
    return this.to('ListRelationships');
  }

  /**
   * Grants permission to listing resource snapshot jobs in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListResourceSnapshotJobs.html
   */
  public toListResourceSnapshotJobs() {
    return this.to('ListResourceSnapshotJobs');
  }

  /**
   * Grants permission to listing resource snapshots in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListResourceSnapshots.html
   */
  public toListResourceSnapshots() {
    return this.to('ListResourceSnapshots');
  }

  /**
   * Grants permission to list Solutions on AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListSolutions.html
   */
  public toListSolutions() {
    return this.to('ListSolutions');
  }

  /**
   * Grants permission to add lists tags to a resource. Supported resource: ResourceSnapshotJob
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put selling system settings in AWS Partner Central
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_PutSellingSystemSettings.html
   */
  public toPutSellingSystemSettings() {
    return this.to('PutSellingSystemSettings');
  }

  /**
   * Grants permission to reject channel handshakes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifChannelHandshakeType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_RejectChannelHandshake.html
   */
  public toRejectChannelHandshake() {
    return this.to('RejectChannelHandshake');
  }

  /**
   * Grants permission to reject Engagement Invitations on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_RejectEngagementInvitation.html
   */
  public toRejectEngagementInvitation() {
    return this.to('RejectEngagementInvitation');
  }

  /**
   * Grants permission to initiate tasks that start Engagements on AWS Partner Central by accepting an Engagement Invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * Dependent actions:
   * - partnercentral:AcceptEngagementInvitation
   * - partnercentral:CreateOpportunity
   * - partnercentral:CreateResourceSnapshotJob
   * - partnercentral:GetEngagementInvitation
   * - partnercentral:StartResourceSnapshotJob
   * - partnercentral:SubmitOpportunity
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_StartEngagementByAcceptingInvitationTask.html
   */
  public toStartEngagementByAcceptingInvitationTask() {
    return this.to('StartEngagementByAcceptingInvitationTask');
  }

  /**
   * Grants permission to initiate tasks that start Engagements from Opportunities on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * Dependent actions:
   * - partnercentral:CreateEngagement
   * - partnercentral:CreateEngagementInvitation
   * - partnercentral:CreateResourceSnapshotJob
   * - partnercentral:GetOpportunity
   * - partnercentral:StartResourceSnapshotJob
   * - partnercentral:SubmitOpportunity
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_StartEngagementFromOpportunityTask.html
   */
  public toStartEngagementFromOpportunityTask() {
    return this.to('StartEngagementFromOpportunityTask');
  }

  /**
   * Grants permission to starting resource snapshot jobs in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_StartResourceSnapshotJob.html
   */
  public toStartResourceSnapshotJob() {
    return this.to('StartResourceSnapshotJob');
  }

  /**
   * Grants permission to stopping resource snapshot jobs in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_StopResourceSnapshotJob.html
   */
  public toStopResourceSnapshotJob() {
    return this.to('StopResourceSnapshotJob');
  }

  /**
   * Grants permission to submit Opportunities on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_SubmitOpportunity.html
   */
  public toSubmitOpportunity() {
    return this.to('SubmitOpportunity');
  }

  /**
   * Grants permission to add new tags to a resource. Supported resource: ResourceSnapshotJob
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource. Supported resource: ResourceSnapshotJob
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update Opportunities on AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UpdateOpportunity.html
   */
  public toUpdateOpportunity() {
    return this.to('UpdateOpportunity');
  }

  /**
   * Grants permission to update program management accounts in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UpdateProgramManagementAccount.html
   */
  public toUpdateProgramManagementAccount() {
    return this.to('UpdateProgramManagementAccount');
  }

  /**
   * Grants permission to update relationships in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UpdateRelationship.html
   */
  public toUpdateRelationship() {
    return this.to('UpdateRelationship');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptChannelHandshake',
      'AcceptEngagementInvitation',
      'AssignOpportunity',
      'AssociateOpportunity',
      'CancelChannelHandshake',
      'CreateChannelHandshake',
      'CreateEngagement',
      'CreateEngagementInvitation',
      'CreateOpportunity',
      'CreateProgramManagementAccount',
      'CreateRelationship',
      'CreateResourceSnapshot',
      'CreateResourceSnapshotJob',
      'DeleteProgramManagementAccount',
      'DeleteRelationship',
      'DeleteResourceSnapshotJob',
      'DisassociateOpportunity',
      'PutSellingSystemSettings',
      'RejectChannelHandshake',
      'RejectEngagementInvitation',
      'StartEngagementByAcceptingInvitationTask',
      'StartEngagementFromOpportunityTask',
      'StartResourceSnapshotJob',
      'StopResourceSnapshotJob',
      'SubmitOpportunity',
      'UpdateOpportunity',
      'UpdateProgramManagementAccount',
      'UpdateRelationship'
    ],
    Read: [
      'GetAwsOpportunitySummary',
      'GetEngagement',
      'GetEngagementInvitation',
      'GetOpportunity',
      'GetProgramManagementAccount',
      'GetRelationship',
      'GetResourceSnapshot',
      'GetResourceSnapshotJob',
      'GetSellingSystemSettings',
      'ListEngagementMembers',
      'ListEngagementResourceAssociations',
      'ListTagsForResource'
    ],
    List: [
      'ListChannelHandshakes',
      'ListEngagementByAcceptingInvitationTasks',
      'ListEngagementFromOpportunityTasks',
      'ListEngagementInvitations',
      'ListEngagements',
      'ListOpportunities',
      'ListProgramManagementAccounts',
      'ListRelationships',
      'ListResourceSnapshotJobs',
      'ListResourceSnapshots',
      'ListSolutions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Engagement to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEngagement(catalog: string, identifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/engagement/${ identifier }`);
  }

  /**
   * Adds a resource of type engagement-by-accepting-invitation-task to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param taskId - Identifier for the taskId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEngagementByAcceptingInvitationTask(catalog: string, taskId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/engagement-by-accepting-invitation-task/${ taskId }`);
  }

  /**
   * Adds a resource of type engagement-from-opportunity-task to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param taskId - Identifier for the taskId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEngagementFromOpportunityTask(catalog: string, taskId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/engagement-from-opportunity-task/${ taskId }`);
  }

  /**
   * Adds a resource of type engagement-invitation to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEngagementInvitation(catalog: string, identifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/engagement-invitation/${ identifier }`);
  }

  /**
   * Adds a resource of type Opportunity to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-your-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOpportunity(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/opportunity/${ identifier }`);
  }

  /**
   * Adds a resource of type resource-snapshot-job to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourceSnapshotJob(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/resource-snapshot-job/${ identifier }`);
  }

  /**
   * Adds a resource of type ResourceSnapshot to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param engagementIdentifier - Identifier for the engagementIdentifier.
   * @param resourceType - Identifier for the resourceType.
   * @param resourceIdentifier - Identifier for the resourceIdentifier.
   * @param templateIdentifier - Identifier for the templateIdentifier.
   * @param snapshotRevision - Identifier for the snapshotRevision.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResourceSnapshot(catalog: string, engagementIdentifier: string, resourceType: string, resourceIdentifier: string, templateIdentifier: string, snapshotRevision: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/engagement/${ engagementIdentifier }/resource/${ resourceType }/${ resourceIdentifier }/template/${ templateIdentifier }/resource-snapshot/${ snapshotRevision }`);
  }

  /**
   * Adds a resource of type Solution to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListSolutions.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSolution(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/solution/${ identifier }`);
  }

  /**
   * Adds a resource of type ProgramManagementAccount to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-channel-management.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProgramManagementAccount(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/program-management-account/${ identifier }`);
  }

  /**
   * Adds a resource of type Relationship to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-channel-management.html
   *
   * @param catalog - Identifier for the catalog.
   * @param programManagementAccountId - Identifier for the programManagementAccountId.
   * @param relationshipId - Identifier for the relationshipId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelationship(catalog: string, programManagementAccountId: string, relationshipId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/program-management-account/${ programManagementAccountId }/relationship/${ relationshipId }`);
  }

  /**
   * Adds a resource of type ChannelHandshake to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-channel-management.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannelHandshake(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/channel-handshake/${ identifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateChannelHandshake()
   * - .toCreateOpportunity()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshotJob()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
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
   * Applies to actions:
   * - .toCancelChannelHandshake()
   * - .toCreateChannelHandshake()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toDeleteProgramManagementAccount()
   * - .toDeleteRelationship()
   * - .toGetRelationship()
   * - .toListTagsForResource()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateProgramManagementAccount()
   * - .toUpdateRelationship()
   *
   * Applies to resource types:
   * - Opportunity
   * - resource-snapshot-job
   * - ProgramManagementAccount
   * - Relationship
   * - ChannelHandshake
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
   * - .toCreateChannelHandshake()
   * - .toCreateOpportunity()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshotJob()
   * - .toListTagsForResource()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
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
   * Filters access by a specific Catalog
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/access-control.html#managing-permissions-with-condition-keys
   *
   * Applies to actions:
   * - .toAcceptChannelHandshake()
   * - .toAcceptEngagementInvitation()
   * - .toAssignOpportunity()
   * - .toAssociateOpportunity()
   * - .toCancelChannelHandshake()
   * - .toCreateChannelHandshake()
   * - .toCreateEngagement()
   * - .toCreateEngagementInvitation()
   * - .toCreateOpportunity()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshot()
   * - .toCreateResourceSnapshotJob()
   * - .toDeleteProgramManagementAccount()
   * - .toDeleteRelationship()
   * - .toDeleteResourceSnapshotJob()
   * - .toDisassociateOpportunity()
   * - .toGetAwsOpportunitySummary()
   * - .toGetEngagement()
   * - .toGetEngagementInvitation()
   * - .toGetOpportunity()
   * - .toGetProgramManagementAccount()
   * - .toGetRelationship()
   * - .toGetResourceSnapshot()
   * - .toGetResourceSnapshotJob()
   * - .toGetSellingSystemSettings()
   * - .toListChannelHandshakes()
   * - .toListEngagementByAcceptingInvitationTasks()
   * - .toListEngagementFromOpportunityTasks()
   * - .toListEngagementInvitations()
   * - .toListEngagementMembers()
   * - .toListEngagementResourceAssociations()
   * - .toListEngagements()
   * - .toListOpportunities()
   * - .toListProgramManagementAccounts()
   * - .toListRelationships()
   * - .toListResourceSnapshotJobs()
   * - .toListResourceSnapshots()
   * - .toListSolutions()
   * - .toListTagsForResource()
   * - .toRejectChannelHandshake()
   * - .toRejectEngagementInvitation()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toStartResourceSnapshotJob()
   * - .toStopResourceSnapshotJob()
   * - .toSubmitOpportunity()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateOpportunity()
   * - .toUpdateProgramManagementAccount()
   * - .toUpdateRelationship()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCatalog(value: string | string[], operator?: Operator | string) {
    return this.if(`Catalog`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by channel handshake types
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/access-control.html#managing-permissions-with-condition-keys
   *
   * Applies to actions:
   * - .toAcceptChannelHandshake()
   * - .toCancelChannelHandshake()
   * - .toCreateChannelHandshake()
   * - .toListChannelHandshakes()
   * - .toRejectChannelHandshake()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChannelHandshakeType(value: string | string[], operator?: Operator | string) {
    return this.if(`ChannelHandshakeType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by entity types for Opportunity association
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/access-control.html#managing-permissions-with-condition-keys
   *
   * Applies to actions:
   * - .toAssociateOpportunity()
   * - .toDisassociateOpportunity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRelatedEntityType(value: string | string[], operator?: Operator | string) {
    return this.if(`RelatedEntityType`, value, operator ?? 'StringLike');
  }
}
