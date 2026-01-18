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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_AcceptChannelHandshake.html
   */
  public toAcceptChannelHandshake() {
    return this.to('AcceptChannelHandshake');
  }

  /**
   * Grants permission to accept connection invitations in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_AcceptConnectionInvitation.html
   */
  public toAcceptConnectionInvitation() {
    return this.to('AcceptConnectionInvitation');
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
   * Grants permission to amend benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_AmendBenefitApplication.html
   */
  public toAmendBenefitApplication() {
    return this.to('AmendBenefitApplication');
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
   * Grants permission to associate AWS Training and Certification email domains in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_AssociateAwsTrainingCertificationEmailDomain.html
   */
  public toAssociateAwsTrainingCertificationEmailDomain() {
    return this.to('AssociateAwsTrainingCertificationEmailDomain');
  }

  /**
   * Grants permission to associate benefit application resources in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_AssociateBenefitApplicationResource.html
   */
  public toAssociateBenefitApplicationResource() {
    return this.to('AssociateBenefitApplicationResource');
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
   * Grants permission to cancel benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_CancelBenefitApplication.html
   */
  public toCancelBenefitApplication() {
    return this.to('CancelBenefitApplication');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_CancelChannelHandshake.html
   */
  public toCancelChannelHandshake() {
    return this.to('CancelChannelHandshake');
  }

  /**
   * Grants permission to cancel connections in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_CancelConnection.html
   */
  public toCancelConnection() {
    return this.to('CancelConnection');
  }

  /**
   * Grants permission to cancel connection invitations in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_CancelConnectionInvitation.html
   */
  public toCancelConnectionInvitation() {
    return this.to('CancelConnectionInvitation');
  }

  /**
   * Grants permission to cancel profile update tasks in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_CancelProfileUpdateTask.html
   */
  public toCancelProfileUpdateTask() {
    return this.to('CancelProfileUpdateTask');
  }

  /**
   * Grants permission to create benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_CreateBenefitApplication.html
   */
  public toCreateBenefitApplication() {
    return this.to('CreateBenefitApplication');
  }

  /**
   * Grants permission to create business plans in AWS Partner Central
   *
   * Access Level: Write
   */
  public toCreateBusinessPlan() {
    return this.to('CreateBusinessPlan');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_CreateChannelHandshake.html
   */
  public toCreateChannelHandshake() {
    return this.to('CreateChannelHandshake');
  }

  /**
   * Grants permission to create collaboration channel members in AWS Partner Central
   *
   * Access Level: Write
   */
  public toCreateCollaborationChannelMembers() {
    return this.to('CreateCollaborationChannelMembers');
  }

  /**
   * Grants permission to create collaboration channel requests in AWS Partner Central
   *
   * Access Level: Write
   */
  public toCreateCollaborationChannelRequest() {
    return this.to('CreateCollaborationChannelRequest');
  }

  /**
   * Grants permission to create connection invitations in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_CreateConnectionInvitation.html
   */
  public toCreateConnectionInvitation() {
    return this.to('CreateConnectionInvitation');
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
   * Grants permission to create engagement contexts in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_CreateEngagementContext.html
   */
  public toCreateEngagementContext() {
    return this.to('CreateEngagementContext');
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
   * Grants permission to create partners in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_CreatePartner.html
   */
  public toCreatePartner() {
    return this.to('CreatePartner');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_CreateProgramManagementAccount.html
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_CreateRelationship.html
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_DeleteProgramManagementAccount.html
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_DeleteRelationship.html
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
   * Grants permission to disassociate AWS Training and Certification email domains in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_DisassociateAwsTrainingCertificationEmailDomain.html
   */
  public toDisassociateAwsTrainingCertificationEmailDomain() {
    return this.to('DisassociateAwsTrainingCertificationEmailDomain');
  }

  /**
   * Grants permission to disassociate benefit application resources in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_DisassociateBenefitApplicationResource.html
   */
  public toDisassociateBenefitApplicationResource() {
    return this.to('DisassociateBenefitApplicationResource');
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
   * Grants permission to enroll in partner paths in AWS Partner Central
   *
   * Access Level: Write
   */
  public toEnrollInPartnerPath() {
    return this.to('EnrollInPartnerPath');
  }

  /**
   * Grants permission to retrieve alliance lead contact information in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetAllianceLeadContact.html
   */
  public toGetAllianceLeadContact() {
    return this.to('GetAllianceLeadContact');
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
   * Grants permission to retrieve benefit details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_GetBenefit.html
   */
  public toGetBenefit() {
    return this.to('GetBenefit');
  }

  /**
   * Grants permission to retrieve benefit allocation details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_GetBenefitAllocation.html
   */
  public toGetBenefitAllocation() {
    return this.to('GetBenefitAllocation');
  }

  /**
   * Grants permission to retrieve benefit application details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_GetBenefitApplication.html
   */
  public toGetBenefitApplication() {
    return this.to('GetBenefitApplication');
  }

  /**
   * Grants permission to retrieve business plan details in AWS Partner Central
   *
   * Access Level: Read
   */
  public toGetBusinessPlan() {
    return this.to('GetBusinessPlan');
  }

  /**
   * Grants permission to retrieve collaboration channel details in AWS Partner Central
   *
   * Access Level: Read
   */
  public toGetCollaborationChannel() {
    return this.to('GetCollaborationChannel');
  }

  /**
   * Grants permission to retrieve connection details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetConnection.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to retrieve connection invitation details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetConnectionInvitation.html
   */
  public toGetConnectionInvitation() {
    return this.to('GetConnectionInvitation');
  }

  /**
   * Grants permission to retrieve connection preferences in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetConnectionPreferences.html
   */
  public toGetConnectionPreferences() {
    return this.to('GetConnectionPreferences');
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
   * Grants permission to retrieve partner details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetPartner.html
   */
  public toGetPartner() {
    return this.to('GetPartner');
  }

  /**
   * Grants permission to retrieve partner dashboard information in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   */
  public toGetPartnerDashboard() {
    return this.to('GetPartnerDashboard');
  }

  /**
   * Grants permission to retrieve public partner profile details in AWS Partner Central
   *
   * Access Level: Read
   */
  public toGetPartnerProfile() {
    return this.to('GetPartnerProfile');
  }

  /**
   * Grants permission to retrieve profile update task details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetProfileUpdateTask.html
   */
  public toGetProfileUpdateTask() {
    return this.to('GetProfileUpdateTask');
  }

  /**
   * Grants permission to retrieve profile visibility settings in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetProfileVisibility.html
   */
  public toGetProfileVisibility() {
    return this.to('GetProfileVisibility');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_GetRelationship.html
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
   * Grants permission to retrieve verification details in AWS Partner Central
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifVerificationType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_GetVerification.html
   */
  public toGetVerification() {
    return this.to('GetVerification');
  }

  /**
   * Grants permission to list benefit allocations in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_ListBenefitAllocations.html
   */
  public toListBenefitAllocations() {
    return this.to('ListBenefitAllocations');
  }

  /**
   * Grants permission to list benefit applications in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_ListBenefitApplications.html
   */
  public toListBenefitApplications() {
    return this.to('ListBenefitApplications');
  }

  /**
   * Grants permission to list benefits in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_ListBenefits.html
   */
  public toListBenefits() {
    return this.to('ListBenefits');
  }

  /**
   * Grants permission to list business plans in AWS Partner Central
   *
   * Access Level: List
   */
  public toListBusinessPlans() {
    return this.to('ListBusinessPlans');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_ListChannelHandshakes.html
   */
  public toListChannelHandshakes() {
    return this.to('ListChannelHandshakes');
  }

  /**
   * Grants permission to list collaboration channels in AWS Partner Central
   *
   * Access Level: List
   */
  public toListCollaborationChannels() {
    return this.to('ListCollaborationChannels');
  }

  /**
   * Grants permission to list connection invitations in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_ListConnectionInvitations.html
   */
  public toListConnectionInvitations() {
    return this.to('ListConnectionInvitations');
  }

  /**
   * Grants permission to list connections in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
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
   * Grants permission to list opportunity from engagement tasks in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListOpportunityFromEngagementTasks.html
   */
  public toListOpportunityFromEngagementTasks() {
    return this.to('ListOpportunityFromEngagementTasks');
  }

  /**
   * Grants permission to list partner paths in AWS Partner Central
   *
   * Access Level: List
   */
  public toListPartnerPaths() {
    return this.to('ListPartnerPaths');
  }

  /**
   * Grants permission to list partners in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_ListPartners.html
   */
  public toListPartners() {
    return this.to('ListPartners');
  }

  /**
   * Grants permission to list program management accounts in AWS Partner Central
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_ListProgramManagementAccounts.html
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_ListRelationships.html
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
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to set alliance lead contact information in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_PutAllianceLeadContact.html
   */
  public toPutAllianceLeadContact() {
    return this.to('PutAllianceLeadContact');
  }

  /**
   * Grants permission to update business plans in AWS Partner Central
   *
   * Access Level: Write
   */
  public toPutBusinessPlan() {
    return this.to('PutBusinessPlan');
  }

  /**
   * Grants permission to set profile visibility in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_PutProfileVisibility.html
   */
  public toPutProfileVisibility() {
    return this.to('PutProfileVisibility');
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
   * Grants permission to recall benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_RecallBenefitApplication.html
   */
  public toRecallBenefitApplication() {
    return this.to('RecallBenefitApplication');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_RejectChannelHandshake.html
   */
  public toRejectChannelHandshake() {
    return this.to('RejectChannelHandshake');
  }

  /**
   * Grants permission to reject connection invitations in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_RejectConnectionInvitation.html
   */
  public toRejectConnectionInvitation() {
    return this.to('RejectConnectionInvitation');
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
   * Grants permission to search public partner profiles in AWS Partner Central
   *
   * Access Level: List
   */
  public toSearchPartnerProfiles() {
    return this.to('SearchPartnerProfiles');
  }

  /**
   * Grants permission to send email verification codes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_SendEmailVerificationCode.html
   */
  public toSendEmailVerificationCode() {
    return this.to('SendEmailVerificationCode');
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
   * Grants permission to initiate tasks that start Opportunities from Engagements on AWS Partner Central
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
   * - partnercentral:CreateEngagementContext
   * - partnercentral:CreateOpportunity
   * - partnercentral:CreateResourceSnapshot
   * - partnercentral:CreateResourceSnapshotJob
   * - partnercentral:GetEngagement
   * - partnercentral:StartResourceSnapshotJob
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_StartOpportunityFromEngagementTask.html
   */
  public toStartOpportunityFromEngagementTask() {
    return this.to('StartOpportunityFromEngagementTask');
  }

  /**
   * Grants permission to start profile update tasks in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_StartProfileUpdateTask.html
   */
  public toStartProfileUpdateTask() {
    return this.to('StartProfileUpdateTask');
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
   * Grants permission to start verification processes in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   * - .ifVerificationType()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_StartVerification.html
   */
  public toStartVerification() {
    return this.to('StartVerification');
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
   * Grants permission to submit benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_SubmitBenefitApplication.html
   */
  public toSubmitBenefitApplication() {
    return this.to('SubmitBenefitApplication');
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
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
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
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update benefit applications in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalog()
   * - .ifFulfillmentTypes()
   * - .ifPrograms()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_benefits_UpdateBenefitApplication.html
   */
  public toUpdateBenefitApplication() {
    return this.to('UpdateBenefitApplication');
  }

  /**
   * Grants permission to update connection preferences in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_account_UpdateConnectionPreferences.html
   */
  public toUpdateConnectionPreferences() {
    return this.to('UpdateConnectionPreferences');
  }

  /**
   * Grants permission to update engagement contexts in AWS Partner Central
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalog()
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_UpdateEngagementContext.html
   */
  public toUpdateEngagementContext() {
    return this.to('UpdateEngagementContext');
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_UpdateProgramManagementAccount.html
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
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/API_channel_UpdateRelationship.html
   */
  public toUpdateRelationship() {
    return this.to('UpdateRelationship');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptChannelHandshake',
      'AcceptConnectionInvitation',
      'AcceptEngagementInvitation',
      'AmendBenefitApplication',
      'AssignOpportunity',
      'AssociateAwsTrainingCertificationEmailDomain',
      'AssociateBenefitApplicationResource',
      'AssociateOpportunity',
      'CancelBenefitApplication',
      'CancelChannelHandshake',
      'CancelConnection',
      'CancelConnectionInvitation',
      'CancelProfileUpdateTask',
      'CreateBenefitApplication',
      'CreateBusinessPlan',
      'CreateChannelHandshake',
      'CreateCollaborationChannelMembers',
      'CreateCollaborationChannelRequest',
      'CreateConnectionInvitation',
      'CreateEngagement',
      'CreateEngagementContext',
      'CreateEngagementInvitation',
      'CreateOpportunity',
      'CreatePartner',
      'CreateProgramManagementAccount',
      'CreateRelationship',
      'CreateResourceSnapshot',
      'CreateResourceSnapshotJob',
      'DeleteProgramManagementAccount',
      'DeleteRelationship',
      'DeleteResourceSnapshotJob',
      'DisassociateAwsTrainingCertificationEmailDomain',
      'DisassociateBenefitApplicationResource',
      'DisassociateOpportunity',
      'EnrollInPartnerPath',
      'PutAllianceLeadContact',
      'PutBusinessPlan',
      'PutProfileVisibility',
      'PutSellingSystemSettings',
      'RecallBenefitApplication',
      'RejectChannelHandshake',
      'RejectConnectionInvitation',
      'RejectEngagementInvitation',
      'SendEmailVerificationCode',
      'StartEngagementByAcceptingInvitationTask',
      'StartEngagementFromOpportunityTask',
      'StartOpportunityFromEngagementTask',
      'StartProfileUpdateTask',
      'StartResourceSnapshotJob',
      'StartVerification',
      'StopResourceSnapshotJob',
      'SubmitBenefitApplication',
      'SubmitOpportunity',
      'UpdateBenefitApplication',
      'UpdateConnectionPreferences',
      'UpdateEngagementContext',
      'UpdateOpportunity',
      'UpdateProgramManagementAccount',
      'UpdateRelationship'
    ],
    Read: [
      'GetAllianceLeadContact',
      'GetAwsOpportunitySummary',
      'GetBenefit',
      'GetBenefitAllocation',
      'GetBenefitApplication',
      'GetBusinessPlan',
      'GetCollaborationChannel',
      'GetConnection',
      'GetConnectionInvitation',
      'GetConnectionPreferences',
      'GetEngagement',
      'GetEngagementInvitation',
      'GetOpportunity',
      'GetPartner',
      'GetPartnerDashboard',
      'GetPartnerProfile',
      'GetProfileUpdateTask',
      'GetProfileVisibility',
      'GetProgramManagementAccount',
      'GetRelationship',
      'GetResourceSnapshot',
      'GetResourceSnapshotJob',
      'GetSellingSystemSettings',
      'GetVerification',
      'ListEngagementMembers',
      'ListEngagementResourceAssociations',
      'ListTagsForResource'
    ],
    List: [
      'ListBenefitAllocations',
      'ListBenefitApplications',
      'ListBenefits',
      'ListBusinessPlans',
      'ListChannelHandshakes',
      'ListCollaborationChannels',
      'ListConnectionInvitations',
      'ListConnections',
      'ListEngagementByAcceptingInvitationTasks',
      'ListEngagementFromOpportunityTasks',
      'ListEngagementInvitations',
      'ListEngagements',
      'ListOpportunities',
      'ListOpportunityFromEngagementTasks',
      'ListPartnerPaths',
      'ListPartners',
      'ListProgramManagementAccounts',
      'ListRelationships',
      'ListResourceSnapshotJobs',
      'ListResourceSnapshots',
      'ListSolutions',
      'SearchPartnerProfiles'
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
   * Adds a resource of type Partner to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-partner-registration.html
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
  public onPartner(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/partner/${ identifier }`);
  }

  /**
   * Adds a resource of type Connection to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-account-connections.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnection(catalog: string, identifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/connection/${ identifier }`);
  }

  /**
   * Adds a resource of type ConnectionInvitation to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-account-connections.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnectionInvitation(catalog: string, identifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/connection-invitation/${ identifier }`);
  }

  /**
   * Adds a resource of type ConnectionPreferences to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-account-connections.html
   *
   * @param catalog - Identifier for the catalog.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnectionPreferences(catalog: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/connection-preferences`);
  }

  /**
   * Adds a resource of type OpportunityFromEngagementTask to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-multi-partner-opportunities.html
   *
   * @param catalog - Identifier for the catalog.
   * @param taskId - Identifier for the taskId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOpportunityFromEngagementTask(catalog: string, taskId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/opportunity-from-engagement-task/${ taskId }`);
  }

  /**
   * Adds a resource of type Benefit to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/using-the-benefits-api.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBenefit(catalog: string, identifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }::catalog/${ catalog }/benefit/${ identifier }`);
  }

  /**
   * Adds a resource of type BenefitAllocation to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-benefit-allocations.html
   *
   * @param catalog - Identifier for the catalog.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBenefitAllocation(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/benefit-allocation/${ identifier }`);
  }

  /**
   * Adds a resource of type BenefitApplication to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/APIReference/working-with-benefit-applications.html
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
  public onBenefitApplication(catalog: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/benefit-application/${ identifier }`);
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
   * Adds a resource of type Dashboard to the statement
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/partner-analytics.html
   *
   * @param catalog - Identifier for the catalog.
   * @param tableId - Identifier for the tableId.
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDashboard(catalog: string, tableId: string, dashboardId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:partnercentral::${ account ?? this.defaultAccount }:catalog/${ catalog }/ReportingData/${ tableId }/Dashboard/${ dashboardId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBenefitApplication()
   * - .toCreateChannelHandshake()
   * - .toCreateOpportunity()
   * - .toCreatePartner()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshotJob()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toStartOpportunityFromEngagementTask()
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
   * - .toAmendBenefitApplication()
   * - .toAssociateAwsTrainingCertificationEmailDomain()
   * - .toAssociateBenefitApplicationResource()
   * - .toCancelBenefitApplication()
   * - .toCancelChannelHandshake()
   * - .toCancelProfileUpdateTask()
   * - .toCreateBenefitApplication()
   * - .toCreateChannelHandshake()
   * - .toCreatePartner()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toDeleteProgramManagementAccount()
   * - .toDeleteRelationship()
   * - .toDisassociateAwsTrainingCertificationEmailDomain()
   * - .toDisassociateBenefitApplicationResource()
   * - .toGetAllianceLeadContact()
   * - .toGetBenefit()
   * - .toGetBenefitAllocation()
   * - .toGetBenefitApplication()
   * - .toGetPartner()
   * - .toGetProfileUpdateTask()
   * - .toGetProfileVisibility()
   * - .toGetRelationship()
   * - .toListTagsForResource()
   * - .toPutAllianceLeadContact()
   * - .toPutProfileVisibility()
   * - .toRecallBenefitApplication()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toStartOpportunityFromEngagementTask()
   * - .toStartProfileUpdateTask()
   * - .toSubmitBenefitApplication()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateBenefitApplication()
   * - .toUpdateProgramManagementAccount()
   * - .toUpdateRelationship()
   *
   * Applies to resource types:
   * - Opportunity
   * - resource-snapshot-job
   * - Partner
   * - BenefitApplication
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
   * - .toCreateBenefitApplication()
   * - .toCreateChannelHandshake()
   * - .toCreateOpportunity()
   * - .toCreatePartner()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshotJob()
   * - .toListTagsForResource()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toStartOpportunityFromEngagementTask()
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
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
   *
   * Applies to actions:
   * - .toAcceptChannelHandshake()
   * - .toAcceptConnectionInvitation()
   * - .toAcceptEngagementInvitation()
   * - .toAmendBenefitApplication()
   * - .toAssignOpportunity()
   * - .toAssociateAwsTrainingCertificationEmailDomain()
   * - .toAssociateBenefitApplicationResource()
   * - .toAssociateOpportunity()
   * - .toCancelBenefitApplication()
   * - .toCancelChannelHandshake()
   * - .toCancelConnection()
   * - .toCancelConnectionInvitation()
   * - .toCancelProfileUpdateTask()
   * - .toCreateBenefitApplication()
   * - .toCreateChannelHandshake()
   * - .toCreateConnectionInvitation()
   * - .toCreateEngagement()
   * - .toCreateEngagementContext()
   * - .toCreateEngagementInvitation()
   * - .toCreateOpportunity()
   * - .toCreatePartner()
   * - .toCreateProgramManagementAccount()
   * - .toCreateRelationship()
   * - .toCreateResourceSnapshot()
   * - .toCreateResourceSnapshotJob()
   * - .toDeleteProgramManagementAccount()
   * - .toDeleteRelationship()
   * - .toDeleteResourceSnapshotJob()
   * - .toDisassociateAwsTrainingCertificationEmailDomain()
   * - .toDisassociateBenefitApplicationResource()
   * - .toDisassociateOpportunity()
   * - .toGetAllianceLeadContact()
   * - .toGetAwsOpportunitySummary()
   * - .toGetBenefit()
   * - .toGetBenefitAllocation()
   * - .toGetBenefitApplication()
   * - .toGetConnection()
   * - .toGetConnectionInvitation()
   * - .toGetConnectionPreferences()
   * - .toGetEngagement()
   * - .toGetEngagementInvitation()
   * - .toGetOpportunity()
   * - .toGetPartner()
   * - .toGetPartnerDashboard()
   * - .toGetProfileUpdateTask()
   * - .toGetProfileVisibility()
   * - .toGetProgramManagementAccount()
   * - .toGetRelationship()
   * - .toGetResourceSnapshot()
   * - .toGetResourceSnapshotJob()
   * - .toGetSellingSystemSettings()
   * - .toGetVerification()
   * - .toListBenefitAllocations()
   * - .toListBenefitApplications()
   * - .toListBenefits()
   * - .toListChannelHandshakes()
   * - .toListConnectionInvitations()
   * - .toListConnections()
   * - .toListEngagementByAcceptingInvitationTasks()
   * - .toListEngagementFromOpportunityTasks()
   * - .toListEngagementInvitations()
   * - .toListEngagementMembers()
   * - .toListEngagementResourceAssociations()
   * - .toListEngagements()
   * - .toListOpportunities()
   * - .toListOpportunityFromEngagementTasks()
   * - .toListPartners()
   * - .toListProgramManagementAccounts()
   * - .toListRelationships()
   * - .toListResourceSnapshotJobs()
   * - .toListResourceSnapshots()
   * - .toListSolutions()
   * - .toListTagsForResource()
   * - .toPutAllianceLeadContact()
   * - .toPutProfileVisibility()
   * - .toRecallBenefitApplication()
   * - .toRejectChannelHandshake()
   * - .toRejectConnectionInvitation()
   * - .toRejectEngagementInvitation()
   * - .toSendEmailVerificationCode()
   * - .toStartEngagementByAcceptingInvitationTask()
   * - .toStartEngagementFromOpportunityTask()
   * - .toStartOpportunityFromEngagementTask()
   * - .toStartProfileUpdateTask()
   * - .toStartResourceSnapshotJob()
   * - .toStartVerification()
   * - .toStopResourceSnapshotJob()
   * - .toSubmitBenefitApplication()
   * - .toSubmitOpportunity()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateBenefitApplication()
   * - .toUpdateConnectionPreferences()
   * - .toUpdateEngagementContext()
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
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
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
   * Filters access by benefit fulfillment types
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
   *
   * Applies to actions:
   * - .toAmendBenefitApplication()
   * - .toAssociateBenefitApplicationResource()
   * - .toCancelBenefitApplication()
   * - .toCreateBenefitApplication()
   * - .toDisassociateBenefitApplicationResource()
   * - .toGetBenefit()
   * - .toGetBenefitAllocation()
   * - .toGetBenefitApplication()
   * - .toListBenefitAllocations()
   * - .toListBenefitApplications()
   * - .toListBenefits()
   * - .toListTagsForResource()
   * - .toRecallBenefitApplication()
   * - .toSubmitBenefitApplication()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateBenefitApplication()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFulfillmentTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`FulfillmentTypes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by program
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
   *
   * Applies to actions:
   * - .toAmendBenefitApplication()
   * - .toAssociateBenefitApplicationResource()
   * - .toCancelBenefitApplication()
   * - .toCreateBenefitApplication()
   * - .toDisassociateBenefitApplicationResource()
   * - .toGetBenefit()
   * - .toGetBenefitApplication()
   * - .toListBenefitApplications()
   * - .toListBenefits()
   * - .toListTagsForResource()
   * - .toRecallBenefitApplication()
   * - .toSubmitBenefitApplication()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateBenefitApplication()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrograms(value: string | string[], operator?: Operator | string) {
    return this.if(`Programs`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by entity types for Opportunity association
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
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

  /**
   * Filters access by the type of verification being performed
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-aws-partner-central.html#condition-keys-for-aws-partner-central
   *
   * Applies to actions:
   * - .toGetVerification()
   * - .toStartVerification()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVerificationType(value: string | string[], operator?: Operator | string) {
    return this.if(`VerificationType`, value, operator ?? 'StringLike');
  }
}
