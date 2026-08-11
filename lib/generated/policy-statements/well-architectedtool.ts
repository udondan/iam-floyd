import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wellarchitected extends PolicyStatement {
  public servicePrefix = 'wellarchitected';

  /**
   * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a lens to the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateLenses.html
   */
  public toAssociateLenses() {
    return this.to('AssociateLenses');
  }

  /**
   * Grants permission to associate a profile to the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateProfiles.html
   */
  public toAssociateProfiles() {
    return this.to('AssociateProfiles');
  }

  /**
   * Grants permission to configure the integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/setting-up-jira.html
   */
  public toConfigureIntegration() {
    return this.to('ConfigureIntegration');
  }

  /**
   * Grants permission to an owner of a lens to share with other AWS accounts and IAM users
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensShare.html
   */
  public toCreateLensShare() {
    return this.to('CreateLensShare');
  }

  /**
   * Grants permission to create a new lens version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensVersion.html
   */
  public toCreateLensVersion() {
    return this.to('CreateLensVersion');
  }

  /**
   * Grants permission to create a new milestone for the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateMilestone.html
   */
  public toCreateMilestone() {
    return this.to('CreateMilestone');
  }

  /**
   * Grants permission to create a new profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to an owner of a profile to share with other AWS accounts and IAM users
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfileShare.html
   */
  public toCreateProfileShare() {
    return this.to('CreateProfileShare');
  }

  /**
   * Grants permission to create a new review template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateReviewTemplate.html
   */
  public toCreateReviewTemplate() {
    return this.to('CreateReviewTemplate');
  }

  /**
   * Grants permission to an owner of a review template to share with other AWS accounts and IAM users
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateTemplateShare.html
   */
  public toCreateTemplateShare() {
    return this.to('CreateTemplateShare');
  }

  /**
   * Grants permission to create a new workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifJiraProjectKey()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkload.html
   */
  public toCreateWorkload() {
    return this.to('CreateWorkload');
  }

  /**
   * Grants permission to share a workload with another account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkloadShare.html
   */
  public toCreateWorkloadShare() {
    return this.to('CreateWorkloadShare');
  }

  /**
   * Grants permission to delete a lens
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLens.html
   */
  public toDeleteLens() {
    return this.to('DeleteLens');
  }

  /**
   * Grants permission to delete an existing lens share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   */
  public toDeleteLensShare() {
    return this.to('DeleteLensShare');
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete an existing profile share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfileShare.html
   */
  public toDeleteProfileShare() {
    return this.to('DeleteProfileShare');
  }

  /**
   * Grants permission to delete an existing review template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteReviewTemplate.html
   */
  public toDeleteReviewTemplate() {
    return this.to('DeleteReviewTemplate');
  }

  /**
   * Grants permission to delete an existing review template share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteTemplateShare.html
   */
  public toDeleteTemplateShare() {
    return this.to('DeleteTemplateShare');
  }

  /**
   * Grants permission to delete an existing workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkload.html
   */
  public toDeleteWorkload() {
    return this.to('DeleteWorkload');
  }

  /**
   * Grants permission to delete an existing workload share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkloadShare.html
   */
  public toDeleteWorkloadShare() {
    return this.to('DeleteWorkloadShare');
  }

  /**
   * Grants permission to disassociate a lens from the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateLenses.html
   */
  public toDisassociateLenses() {
    return this.to('DisassociateLenses');
  }

  /**
   * Grants permission to disassociate a profile from the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateProfiles.html
   */
  public toDisassociateProfiles() {
    return this.to('DisassociateProfiles');
  }

  /**
   * Grants permission to export an existing lens
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ExportLens.html
   */
  public toExportLens() {
    return this.to('ExportLens');
  }

  /**
   * Grants permission to retrieve the specified answer from the specified lens review
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetAnswer.html
   */
  public toGetAnswer() {
    return this.to('GetAnswer');
  }

  /**
   * Grants permission to get consolidated report metrics or to generate the consolidated report PDF in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetConsolidatedReport.html
   */
  public toGetConsolidatedReport() {
    return this.to('GetConsolidatedReport');
  }

  /**
   * Grants permission to get all settings for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetGlobalSettings.html
   */
  public toGetGlobalSettings() {
    return this.to('GetGlobalSettings');
  }

  /**
   * Grants permission to get an existing lens
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   */
  public toGetLens() {
    return this.to('GetLens');
  }

  /**
   * Grants permission to retrieve the specified lens review of the specified workload
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReview.html
   */
  public toGetLensReview() {
    return this.to('GetLensReview');
  }

  /**
   * Grants permission to retrieve the report for the specified lens review
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReviewReport.html
   */
  public toGetLensReviewReport() {
    return this.to('GetLensReviewReport');
  }

  /**
   * Grants permission to get the difference between the specified lens version and latest available lens version
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensVersionDifference.html
   */
  public toGetLensVersionDifference() {
    return this.to('GetLensVersionDifference');
  }

  /**
   * Grants permission to retrieve the specified milestone of the specified workload
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetMilestone.html
   */
  public toGetMilestone() {
    return this.to('GetMilestone');
  }

  /**
   * Grants permission to retrieve the specified profile
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to retrieve the specified profile template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfileTemplate.html
   */
  public toGetProfileTemplate() {
    return this.to('GetProfileTemplate');
  }

  /**
   * Grants permission to retrieve the specified review template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplate.html
   */
  public toGetReviewTemplate() {
    return this.to('GetReviewTemplate');
  }

  /**
   * Grants permission to retrieve the specified answer from the specified review template lens review
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateAnswer.html
   */
  public toGetReviewTemplateAnswer() {
    return this.to('GetReviewTemplateAnswer');
  }

  /**
   * Grants permission to retrieve the specified lens review of the specified review template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateLensReview.html
   */
  public toGetReviewTemplateLensReview() {
    return this.to('GetReviewTemplateLensReview');
  }

  /**
   * Grants permission to retrieve the specified workload
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetWorkload.html
   */
  public toGetWorkload() {
    return this.to('GetWorkload');
  }

  /**
   * Grants permission to import a new lens
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ImportLens.html
   */
  public toImportLens() {
    return this.to('ImportLens');
  }

  /**
   * Grants permission to list the answers from the specified lens review
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListAnswers.html
   */
  public toListAnswers() {
    return this.to('ListAnswers');
  }

  /**
   * Grants permission to list the check-details for the workload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckDetails.html
   */
  public toListCheckDetails() {
    return this.to('ListCheckDetails');
  }

  /**
   * Grants permission to list the check-summaries for the workload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckSummaries.html
   */
  public toListCheckSummaries() {
    return this.to('ListCheckSummaries');
  }

  /**
   * Grants permission to list the improvements of the specified lens review
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviewImprovements.html
   */
  public toListLensReviewImprovements() {
    return this.to('ListLensReviewImprovements');
  }

  /**
   * Grants permission to list the lens reviews of the specified workload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviews.html
   */
  public toListLensReviews() {
    return this.to('ListLensReviews');
  }

  /**
   * Grants permission to list all shares created for a lens
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensShares.html
   */
  public toListLensShares() {
    return this.to('ListLensShares');
  }

  /**
   * Grants permission to list the lenses available to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLenses.html
   */
  public toListLenses() {
    return this.to('ListLenses');
  }

  /**
   * Grants permission to list the milestones of the specified workload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListMilestones.html
   */
  public toListMilestones() {
    return this.to('ListMilestones');
  }

  /**
   * Grants permission to list notifications related to the account or specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListNotifications.html
   */
  public toListNotifications() {
    return this.to('ListNotifications');
  }

  /**
   * Grants permission to list profile notifications related to specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileNotifications.html
   */
  public toListProfileNotifications() {
    return this.to('ListProfileNotifications');
  }

  /**
   * Grants permission to list all shares created for a profile
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileShares.html
   */
  public toListProfileShares() {
    return this.to('ListProfileShares');
  }

  /**
   * Grants permission to list the profiles available to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list the answers from the specified review template lens review
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplateAnswers.html
   */
  public toListReviewTemplateAnswers() {
    return this.to('ListReviewTemplateAnswers');
  }

  /**
   * Grants permission to list the review templates available to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplates.html
   */
  public toListReviewTemplates() {
    return this.to('ListReviewTemplates');
  }

  /**
   * Grants permission to list the workload share invitations of the specified account or user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListShareInvitations.html
   */
  public toListShareInvitations() {
    return this.to('ListShareInvitations');
  }

  /**
   * Grants permission to list tags for a Well-Architected resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all shares created for a review template
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTemplateShares.html
   */
  public toListTemplateShares() {
    return this.to('ListTemplateShares');
  }

  /**
   * Grants permission to list the workload shares of the specified workload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloadShares.html
   */
  public toListWorkloadShares() {
    return this.to('ListWorkloadShares');
  }

  /**
   * Grants permission to list the workloads in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloads.html
   */
  public toListWorkloads() {
    return this.to('ListWorkloads');
  }

  /**
   * Grants permission to tag a Well-Architected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Well-Architected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update properties of the specified answer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateAnswer.html
   */
  public toUpdateAnswer() {
    return this.to('UpdateAnswer');
  }

  /**
   * Grants permission to manage all settings for the account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifJiraProjectKey()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateGlobalSettings.html
   */
  public toUpdateGlobalSettings() {
    return this.to('UpdateGlobalSettings');
  }

  /**
   * Grants permission to update properties of the integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateIntegration.html
   */
  public toUpdateIntegration() {
    return this.to('UpdateIntegration');
  }

  /**
   * Grants permission to update properties of the specified lens review
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateLensReview.html
   */
  public toUpdateLensReview() {
    return this.to('UpdateLensReview');
  }

  /**
   * Grants permission to update properties of the specified profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Grants permission to update properties of the specified review template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplate.html
   */
  public toUpdateReviewTemplate() {
    return this.to('UpdateReviewTemplate');
  }

  /**
   * Grants permission to update properties of the specified review template answer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateAnswer.html
   */
  public toUpdateReviewTemplateAnswer() {
    return this.to('UpdateReviewTemplateAnswer');
  }

  /**
   * Grants permission to update properties of the specified review template lens review
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateLensReview.html
   */
  public toUpdateReviewTemplateLensReview() {
    return this.to('UpdateReviewTemplateLensReview');
  }

  /**
   * Grants permission to update status of the specified workload share invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateShareInvitation.html
   */
  public toUpdateShareInvitation() {
    return this.to('UpdateShareInvitation');
  }

  /**
   * Grants permission to update properties of the specified workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifJiraProjectKey()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkload.html
   */
  public toUpdateWorkload() {
    return this.to('UpdateWorkload');
  }

  /**
   * Grants permission to update properties of the specified workload share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkloadShare.html
   */
  public toUpdateWorkloadShare() {
    return this.to('UpdateWorkloadShare');
  }

  /**
   * Grants permission to upgrade the specified lens review to use the latest version of the associated lens
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeLensReview.html
   */
  public toUpgradeLensReview() {
    return this.to('UpgradeLensReview');
  }

  /**
   * Grants permission to upgrade the specified workload to use the latest version of the associated profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeProfileVersion.html
   */
  public toUpgradeProfileVersion() {
    return this.to('UpgradeProfileVersion');
  }

  /**
   * Grants permission to upgrade the specified lens review of the specified review template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeReviewTemplateLensReview.html
   */
  public toUpgradeReviewTemplateLensReview() {
    return this.to('UpgradeReviewTemplateLensReview');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateLenses',
      'AssociateProfiles',
      'ConfigureIntegration',
      'CreateLensShare',
      'CreateLensVersion',
      'CreateMilestone',
      'CreateProfile',
      'CreateProfileShare',
      'CreateReviewTemplate',
      'CreateTemplateShare',
      'CreateWorkload',
      'CreateWorkloadShare',
      'DeleteLens',
      'DeleteLensShare',
      'DeleteProfile',
      'DeleteProfileShare',
      'DeleteReviewTemplate',
      'DeleteTemplateShare',
      'DeleteWorkload',
      'DeleteWorkloadShare',
      'DisassociateLenses',
      'DisassociateProfiles',
      'ImportLens',
      'UpdateAnswer',
      'UpdateGlobalSettings',
      'UpdateIntegration',
      'UpdateLensReview',
      'UpdateProfile',
      'UpdateReviewTemplate',
      'UpdateReviewTemplateAnswer',
      'UpdateReviewTemplateLensReview',
      'UpdateShareInvitation',
      'UpdateWorkload',
      'UpdateWorkloadShare',
      'UpgradeLensReview',
      'UpgradeProfileVersion',
      'UpgradeReviewTemplateLensReview'
    ],
    Read: [
      'ExportLens',
      'GetAnswer',
      'GetConsolidatedReport',
      'GetGlobalSettings',
      'GetLens',
      'GetLensReview',
      'GetLensReviewReport',
      'GetLensVersionDifference',
      'GetMilestone',
      'GetProfile',
      'GetProfileTemplate',
      'GetReviewTemplate',
      'GetReviewTemplateAnswer',
      'GetReviewTemplateLensReview',
      'GetWorkload',
      'ListTagsForResource'
    ],
    List: [
      'ListAnswers',
      'ListCheckDetails',
      'ListCheckSummaries',
      'ListLensReviewImprovements',
      'ListLensReviews',
      'ListLensShares',
      'ListLenses',
      'ListMilestones',
      'ListNotifications',
      'ListProfileNotifications',
      'ListProfileShares',
      'ListProfiles',
      'ListReviewTemplateAnswers',
      'ListReviewTemplates',
      'ListShareInvitations',
      'ListTemplateShares',
      'ListWorkloadShares',
      'ListWorkloads'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type workload to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_Workload.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkload(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wellarchitected:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workload/${ resourceId }`);
  }

  /**
   * Adds a resource of type lens to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_Lens.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLens(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wellarchitected:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:lens/${ resourceId }`);
  }

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_Profile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wellarchitected:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ resourceId }`);
  }

  /**
   * Adds a resource of type review-template to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ReviewTemplate.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReviewTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wellarchitected:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:review-template/${ resourceId }`);
  }

  /**
   * Filters access by tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProfile()
   * - .toCreateReviewTemplate()
   * - .toCreateWorkload()
   * - .toImportLens()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateLenses()
   * - .toAssociateProfiles()
   * - .toCreateLensShare()
   * - .toCreateLensVersion()
   * - .toCreateMilestone()
   * - .toCreateProfileShare()
   * - .toCreateTemplateShare()
   * - .toCreateWorkloadShare()
   * - .toDeleteLens()
   * - .toDeleteLensShare()
   * - .toDeleteProfile()
   * - .toDeleteProfileShare()
   * - .toDeleteReviewTemplate()
   * - .toDeleteTemplateShare()
   * - .toDeleteWorkload()
   * - .toDeleteWorkloadShare()
   * - .toDisassociateLenses()
   * - .toDisassociateProfiles()
   * - .toExportLens()
   * - .toGetAnswer()
   * - .toGetLens()
   * - .toGetLensReview()
   * - .toGetLensReviewReport()
   * - .toGetLensVersionDifference()
   * - .toGetMilestone()
   * - .toGetProfile()
   * - .toGetReviewTemplate()
   * - .toGetReviewTemplateAnswer()
   * - .toGetReviewTemplateLensReview()
   * - .toGetWorkload()
   * - .toListAnswers()
   * - .toListCheckDetails()
   * - .toListCheckSummaries()
   * - .toListLensReviewImprovements()
   * - .toListLensReviews()
   * - .toListLensShares()
   * - .toListMilestones()
   * - .toListProfileShares()
   * - .toListReviewTemplateAnswers()
   * - .toListTagsForResource()
   * - .toListTemplateShares()
   * - .toListWorkloadShares()
   * - .toUpdateAnswer()
   * - .toUpdateIntegration()
   * - .toUpdateLensReview()
   * - .toUpdateProfile()
   * - .toUpdateReviewTemplate()
   * - .toUpdateReviewTemplateAnswer()
   * - .toUpdateReviewTemplateLensReview()
   * - .toUpdateWorkload()
   * - .toUpdateWorkloadShare()
   * - .toUpgradeLensReview()
   * - .toUpgradeProfileVersion()
   * - .toUpgradeReviewTemplateLensReview()
   *
   * Applies to resource types:
   * - workload
   * - lens
   * - profile
   * - review-template
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProfile()
   * - .toCreateReviewTemplate()
   * - .toCreateWorkload()
   * - .toImportLens()
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
   * Filters access by project key
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/security_iam_id-based-policy-examples.html
   *
   * Applies to actions:
   * - .toCreateWorkload()
   * - .toUpdateGlobalSettings()
   * - .toUpdateWorkload()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJiraProjectKey(value: string | string[], operator?: Operator | string) {
    return this.if(`JiraProjectKey`, value, operator ?? 'StringLike');
  }
}
