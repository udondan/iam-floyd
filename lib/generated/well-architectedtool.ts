import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateLenses.html
   */
  public toAssociateLenses() {
    return this.to('AssociateLenses');
  }

  /**
   * Grants permission to create a new milestone for the specified workload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateMilestone.html
   */
  public toCreateMilestone() {
    return this.to('CreateMilestone');
  }

  /**
   * Grants permission to create a new workload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkloadShare.html
   */
  public toCreateWorkloadShare() {
    return this.to('CreateWorkloadShare');
  }

  /**
   * Grants permission to delete an existing workload
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateLenses.html
   */
  public toDisassociateLenses() {
    return this.to('DisassociateLenses');
  }

  /**
   * Grants permission to retrieve the specified answer from the specified lens review
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetAnswer.html
   */
  public toGetAnswer() {
    return this.to('GetAnswer');
  }

  /**
   * Grants permission to retrieve the specified lens review of the specified workload
   *
   * Access Level: Read
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetMilestone.html
   */
  public toGetMilestone() {
    return this.to('GetMilestone');
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
   * Grants permission to list the answers from the specified lens review
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListAnswers.html
   */
  public toListAnswers() {
    return this.to('ListAnswers');
  }

  /**
   * Grants permission to list the improvements of the specified lens review
   *
   * Access Level: List
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviews.html
   */
  public toListLensReviews() {
    return this.to('ListLensReviews');
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
   * Grants permission to list the workload shares of the specified workload
   *
   * Access Level: List
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateAnswer.html
   */
  public toUpdateAnswer() {
    return this.to('UpdateAnswer');
  }

  /**
   * Grants permission to update properties of the specified lens review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateLensReview.html
   */
  public toUpdateLensReview() {
    return this.to('UpdateLensReview');
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkload.html
   */
  public toUpdateWorkload() {
    return this.to('UpdateWorkload');
  }

  /**
   * Grants permission to update properties of the specified workload
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeLensReview.html
   */
  public toUpgradeLensReview() {
    return this.to('UpgradeLensReview');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateLenses',
      'CreateMilestone',
      'CreateWorkload',
      'CreateWorkloadShare',
      'DeleteWorkload',
      'DeleteWorkloadShare',
      'DisassociateLenses',
      'UpdateAnswer',
      'UpdateLensReview',
      'UpdateShareInvitation',
      'UpdateWorkload',
      'UpdateWorkloadShare',
      'UpgradeLensReview'
    ],
    Read: [
      'GetAnswer',
      'GetLensReview',
      'GetLensReviewReport',
      'GetLensVersionDifference',
      'GetMilestone',
      'GetWorkload',
      'ListTagsForResource'
    ],
    List: [
      'ListAnswers',
      'ListLensReviewImprovements',
      'ListLensReviews',
      'ListLenses',
      'ListMilestones',
      'ListNotifications',
      'ListShareInvitations',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkload(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:wellarchitected:${ region || '*' }:${ account || '*' }:workload/${ resourceId }`);
  }
}
