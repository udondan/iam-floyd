import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [codecommit](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codecommit extends PolicyStatement {
  public servicePrefix = 'codecommit';

  /**
   * Statement provider for service [codecommit](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an approval rule template with a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_AssociateApprovalRuleTemplateWithRepository.html
   */
  public toAssociateApprovalRuleTemplateWithRepository() {
    this.to('codecommit:AssociateApprovalRuleTemplateWithRepository');
    return this;
  }

  /**
   * Grants permission to associate an approval rule template with multiple repositories in a single operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchAssociateApprovalRuleTemplateWithRepositories.html
   */
  public toBatchAssociateApprovalRuleTemplateWithRepositories() {
    this.to('codecommit:BatchAssociateApprovalRuleTemplateWithRepositories');
    return this;
  }

  /**
   * Grants permission to get information about multiple merge conflicts when attempting to merge two commits using either the three-way merge or the squash merge option
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDescribeMergeConflicts.html
   */
  public toBatchDescribeMergeConflicts() {
    this.to('codecommit:BatchDescribeMergeConflicts');
    return this;
  }

  /**
   * Grants permission to remove the association between an approval rule template and multiple repositories in a single operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDisassociateApprovalRuleTemplateFromRepositories.html
   */
  public toBatchDisassociateApprovalRuleTemplateFromRepositories() {
    this.to('codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories');
    return this;
  }

  /**
   * Grants permission to get return information about one or more commits in an AWS CodeCommit repository.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetCommits.html
   */
  public toBatchGetCommits() {
    this.to('codecommit:BatchGetCommits');
    return this;
  }

  /**
   * Grants permission to return information about one or more pull requests in an AWS CodeCommit repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr
   */
  public toBatchGetPullRequests() {
    this.to('codecommit:BatchGetPullRequests');
    return this;
  }

  /**
   * Grants permission to get information about multiple repositories
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetRepositories.html
   */
  public toBatchGetRepositories() {
    this.to('codecommit:BatchGetRepositories');
    return this;
  }

  /**
   * Grants permission to cancel the uploading of an archive to a pipeline in AWS CodePipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   */
  public toCancelUploadArchive() {
    this.to('codecommit:CancelUploadArchive');
    return this;
  }

  /**
   * Grants permission to create an approval rule template that will automatically create approval rules in pull requests that match the conditions defined in the template; does not grant permission to create approval rules for individual pull requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateApprovalRuleTemplate.html
   */
  public toCreateApprovalRuleTemplate() {
    this.to('codecommit:CreateApprovalRuleTemplate');
    return this;
  }

  /**
   * Grants permission to create a branch in an AWS CodeCommit repository with this API; does not control Git create branch actions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateBranch.html
   */
  public toCreateBranch() {
    this.to('codecommit:CreateBranch');
    return this;
  }

  /**
   * Grants permission to add, copy, move or update single or multiple files in a branch in an AWS CodeCommit repository, and generate a commit for the changes in the specified branch.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateCommit.html
   */
  public toCreateCommit() {
    this.to('codecommit:CreateCommit');
    return this;
  }

  /**
   * Grants permission to create a pull request in the specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequest.html
   */
  public toCreatePullRequest() {
    this.to('codecommit:CreatePullRequest');
    return this;
  }

  /**
   * Grants permission to create an approval rule specific to an individual pull request; does not grant permission to create approval rule templates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequestApprovalRule.html
   */
  public toCreatePullRequestApprovalRule() {
    this.to('codecommit:CreatePullRequestApprovalRule');
    return this;
  }

  /**
   * Grants permission to create an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    this.to('codecommit:CreateRepository');
    return this;
  }

  /**
   * Grants permission to create an unreferenced commit that contains the result of merging two commits using either the three-way or the squash merge option; does not control Git merge actions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateUnreferencedMergeCommit.html
   */
  public toCreateUnreferencedMergeCommit() {
    this.to('codecommit:CreateUnreferencedMergeCommit');
    return this;
  }

  /**
   * Grants permission to delete an approval rule template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteApprovalRuleTemplate.html
   */
  public toDeleteApprovalRuleTemplate() {
    this.to('codecommit:DeleteApprovalRuleTemplate');
    return this;
  }

  /**
   * Grants permission to delete a branch in an AWS CodeCommit repository with this API; does not control Git delete branch actions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteBranch.html
   */
  public toDeleteBranch() {
    this.to('codecommit:DeleteBranch');
    return this;
  }

  /**
   * Grants permission to delete the content of a comment made on a change, file, or commit in a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteCommentContent.html
   */
  public toDeleteCommentContent() {
    this.to('codecommit:DeleteCommentContent');
    return this;
  }

  /**
   * Grants permission to delete a specified file from a specified branch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteFile.html
   */
  public toDeleteFile() {
    this.to('codecommit:DeleteFile');
    return this;
  }

  /**
   * Grants permission to delete approval rule created for a pull request if the rule was not created by an approval rule template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeletePullRequestApprovalRule.html
   */
  public toDeletePullRequestApprovalRule() {
    this.to('codecommit:DeletePullRequestApprovalRule');
    return this;
  }

  /**
   * Grants permission to delete an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    this.to('codecommit:DeleteRepository');
    return this;
  }

  /**
   * Grants permission to get information about specific merge conflicts when attempting to merge two commits using either the three-way or the squash merge option
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribeMergeConflicts.html
   */
  public toDescribeMergeConflicts() {
    this.to('codecommit:DescribeMergeConflicts');
    return this;
  }

  /**
   * Grants permission to return information about one or more pull request events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribePullRequestEvents.html
   */
  public toDescribePullRequestEvents() {
    this.to('codecommit:DescribePullRequestEvents');
    return this;
  }

  /**
   * Grants permission to remove the association between an approval rule template and a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DisassociateApprovalRuleTemplateFromRepository.html
   */
  public toDisassociateApprovalRuleTemplateFromRepository() {
    this.to('codecommit:DisassociateApprovalRuleTemplateFromRepository');
    return this;
  }

  /**
   * Grants permission to evaluate whether a pull request is mergable based on its current approval state and approval rule requirements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_EvaluatePullRequestApprovalRules.html
   */
  public toEvaluatePullRequestApprovalRules() {
    this.to('codecommit:EvaluatePullRequestApprovalRules');
    return this;
  }

  /**
   * Grants permission to return information about an approval rule template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetApprovalRuleTemplate.html
   */
  public toGetApprovalRuleTemplate() {
    this.to('codecommit:GetApprovalRuleTemplate');
    return this;
  }

  /**
   * Grants permission to view the encoded content of an individual file in an AWS CodeCommit repository from the AWS CodeCommit console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBlob.html
   */
  public toGetBlob() {
    this.to('codecommit:GetBlob');
    return this;
  }

  /**
   * Grants permission to get details about a branch in an AWS CodeCommit repository with this API; does not control Git branch actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBranch.html
   */
  public toGetBranch() {
    this.to('codecommit:GetBranch');
    return this;
  }

  /**
   * Grants permission to get the content of a comment made on a change, file, or commit in a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetComment.html
   */
  public toGetComment() {
    this.to('codecommit:GetComment');
    return this;
  }

  /**
   * Grants permission to get the reactions on a comment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentReactions.html
   */
  public toGetCommentReactions() {
    this.to('codecommit:GetCommentReactions');
    return this;
  }

  /**
   * Grants permission to get information about comments made on the comparison between two commits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForComparedCommit.html
   */
  public toGetCommentsForComparedCommit() {
    this.to('codecommit:GetCommentsForComparedCommit');
    return this;
  }

  /**
   * Grants permission to get comments made on a pull request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForPullRequest.html
   */
  public toGetCommentsForPullRequest() {
    this.to('codecommit:GetCommentsForPullRequest');
    return this;
  }

  /**
   * Grants permission to return information about a commit, including commit message and committer information, with this API; does not control Git log actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommit.html
   */
  public toGetCommit() {
    this.to('codecommit:GetCommit');
    return this;
  }

  /**
   * Grants permission to get information about the history of commits in a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   */
  public toGetCommitHistory() {
    this.to('codecommit:GetCommitHistory');
    return this;
  }

  /**
   * Grants permission to get information about the difference between commits in the context of a potential merge
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr
   */
  public toGetCommitsFromMergeBase() {
    this.to('codecommit:GetCommitsFromMergeBase');
    return this;
  }

  /**
   * Grants permission to view information about the differences between valid commit specifiers such as a branch, tag, HEAD, commit ID, or other fully qualified reference
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetDifferences.html
   */
  public toGetDifferences() {
    this.to('codecommit:GetDifferences');
    return this;
  }

  /**
   * Grants permission to return the base-64 encoded contents of a specified file and its metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFile.html
   */
  public toGetFile() {
    this.to('codecommit:GetFile');
    return this;
  }

  /**
   * Grants permission to return the contents of a specified folder in a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFolder.html
   */
  public toGetFolder() {
    this.to('codecommit:GetFolder');
    return this;
  }

  /**
   * Grants permission to get information about a merge commit created by one of the merge options for pull requests that creates merge commits. Not all merge options create merge commits. This permission does not control Git merge actions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeCommit.html
   */
  public toGetMergeCommit() {
    this.to('codecommit:GetMergeCommit');
    return this;
  }

  /**
   * Grants permission to get information about merge conflicts between the before and after commit IDs for a pull request in a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeConflicts.html
   */
  public toGetMergeConflicts() {
    this.to('codecommit:GetMergeConflicts');
    return this;
  }

  /**
   * Grants permission to get information about merge options for pull requests that can be used to merge two commits; does not control Git merge actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeOptions.html
   */
  public toGetMergeOptions() {
    this.to('codecommit:GetMergeOptions');
    return this;
  }

  /**
   * Grants permission to resolve blobs, trees, and commits to their identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   */
  public toGetObjectIdentifier() {
    this.to('codecommit:GetObjectIdentifier');
    return this;
  }

  /**
   * Grants permission to get information about a pull request in a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequest.html
   */
  public toGetPullRequest() {
    this.to('codecommit:GetPullRequest');
    return this;
  }

  /**
   * Grants permission to retrieve the current approvals on an inputted pull request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestApprovalStates.html
   */
  public toGetPullRequestApprovalStates() {
    this.to('codecommit:GetPullRequestApprovalStates');
    return this;
  }

  /**
   * Grants permission to retrieve the current override state of a given pull request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestOverrideState.html
   */
  public toGetPullRequestOverrideState() {
    this.to('codecommit:GetPullRequestOverrideState');
    return this;
  }

  /**
   * Grants permission to get details about references in an AWS CodeCommit repository; does not control Git reference actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   */
  public toGetReferences() {
    this.to('codecommit:GetReferences');
    return this;
  }

  /**
   * Grants permission to get information about an AWS CodeCommit repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html
   */
  public toGetRepository() {
    this.to('codecommit:GetRepository');
    return this;
  }

  /**
   * Grants permission to get information about triggers configured for a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepositoryTriggers.html
   */
  public toGetRepositoryTriggers() {
    this.to('codecommit:GetRepositoryTriggers');
    return this;
  }

  /**
   * Grants permission to view the contents of a specified tree in an AWS CodeCommit repository from the AWS CodeCommit console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   */
  public toGetTree() {
    this.to('codecommit:GetTree');
    return this;
  }

  /**
   * Grants permission to get status information about an archive upload to a pipeline in AWS CodePipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   */
  public toGetUploadArchiveStatus() {
    this.to('codecommit:GetUploadArchiveStatus');
    return this;
  }

  /**
   * Grants permission to pull information from an AWS CodeCommit repository to a local repo
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git
   */
  public toGitPull() {
    this.to('codecommit:GitPull');
    return this;
  }

  /**
   * Grants permission to push information from a local repo to an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git
   */
  public toGitPush() {
    this.to('codecommit:GitPush');
    return this;
  }

  /**
   * Grants permission to list all approval rule templates in an AWS Region for the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListApprovalRuleTemplates.html
   */
  public toListApprovalRuleTemplates() {
    this.to('codecommit:ListApprovalRuleTemplates');
    return this;
  }

  /**
   * Grants permission to list approval rule templates that are associated with a repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListAssociatedApprovalRuleTemplatesForRepository.html
   */
  public toListAssociatedApprovalRuleTemplatesForRepository() {
    this.to('codecommit:ListAssociatedApprovalRuleTemplatesForRepository');
    return this;
  }

  /**
   * Grants permission to list branches for an AWS CodeCommit repository with this API; does not control Git branch actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListBranches.html
   */
  public toListBranches() {
    this.to('codecommit:ListBranches');
    return this;
  }

  /**
   * Grants permission to list pull requests for a specified repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListPullRequests.html
   */
  public toListPullRequests() {
    this.to('codecommit:ListPullRequests');
    return this;
  }

  /**
   * Grants permission to list information about AWS CodeCommit repositories in the current Region for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositories.html
   */
  public toListRepositories() {
    this.to('codecommit:ListRepositories');
    return this;
  }

  /**
   * Grants permission to list repositories that are associated with an approval rule template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositoriesForApprovalRuleTemplate.html
   */
  public toListRepositoriesForApprovalRuleTemplate() {
    this.to('codecommit:ListRepositoriesForApprovalRuleTemplate');
    return this;
  }

  /**
   * Grants permission to list the resource attached to a CodeCommit resource ARN
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('codecommit:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to merge two commits into the specified destination branch using the fast-forward merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByFastForward.html
   */
  public toMergeBranchesByFastForward() {
    this.to('codecommit:MergeBranchesByFastForward');
    return this;
  }

  /**
   * Grants permission to merge two commits into the specified destination branch using the squash merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesBySquash.html
   */
  public toMergeBranchesBySquash() {
    this.to('codecommit:MergeBranchesBySquash');
    return this;
  }

  /**
   * Grants permission to merge two commits into the specified destination branch using the three-way merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByThreeWay.html
   */
  public toMergeBranchesByThreeWay() {
    this.to('codecommit:MergeBranchesByThreeWay');
    return this;
  }

  /**
   * Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the fast-forward merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByFastForward.html
   */
  public toMergePullRequestByFastForward() {
    this.to('codecommit:MergePullRequestByFastForward');
    return this;
  }

  /**
   * Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the squash merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestBySquash.html
   */
  public toMergePullRequestBySquash() {
    this.to('codecommit:MergePullRequestBySquash');
    return this;
  }

  /**
   * Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the three-way merge option
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByThreeWay.html
   */
  public toMergePullRequestByThreeWay() {
    this.to('codecommit:MergePullRequestByThreeWay');
    return this;
  }

  /**
   * Grants permission to override all approval rules for a pull request, including approval rules created by a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_OverridePullRequestApprovalRules.html
   */
  public toOverridePullRequestApprovalRules() {
    this.to('codecommit:OverridePullRequestApprovalRules');
    return this;
  }

  /**
   * Grants permission to post a comment on the comparison between two commits
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForComparedCommit.html
   */
  public toPostCommentForComparedCommit() {
    this.to('codecommit:PostCommentForComparedCommit');
    return this;
  }

  /**
   * Grants permission to post a comment on a pull request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForPullRequest.html
   */
  public toPostCommentForPullRequest() {
    this.to('codecommit:PostCommentForPullRequest');
    return this;
  }

  /**
   * Grants permission to post a comment in reply to a comment on a comparison between commits or a pull request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentReply.html
   */
  public toPostCommentReply() {
    this.to('codecommit:PostCommentReply');
    return this;
  }

  /**
   * Grants permission to post a reaction on a comment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutCommentReaction.html
   */
  public toPutCommentReaction() {
    this.to('codecommit:PutCommentReaction');
    return this;
  }

  /**
   * Grants permission to add or update a file in a branch in an AWS CodeCommit repository, and generate a commit for the addition in the specified branch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifReferences()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutFile.html
   */
  public toPutFile() {
    this.to('codecommit:PutFile');
    return this;
  }

  /**
   * Grants permission to create, update, or delete triggers for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutRepositoryTriggers.html
   */
  public toPutRepositoryTriggers() {
    this.to('codecommit:PutRepositoryTriggers');
    return this;
  }

  /**
   * Grants permission to attach resource tags to a CodeCommit resource ARN
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('codecommit:TagResource');
    return this;
  }

  /**
   * Grants permission to test the functionality of repository triggers by sending information to the trigger target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TestRepositoryTriggers.html
   */
  public toTestRepositoryTriggers() {
    this.to('codecommit:TestRepositoryTriggers');
    return this;
  }

  /**
   * Grants permission to disassociate resource tags from a CodeCommit resource ARN
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('codecommit:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the content of approval rule templates; does not grant permission to update content of approval rules created specifically for pull requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateContent.html
   */
  public toUpdateApprovalRuleTemplateContent() {
    this.to('codecommit:UpdateApprovalRuleTemplateContent');
    return this;
  }

  /**
   * Grants permission to update the description of approval rule templates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateDescription.html
   */
  public toUpdateApprovalRuleTemplateDescription() {
    this.to('codecommit:UpdateApprovalRuleTemplateDescription');
    return this;
  }

  /**
   * Grants permission to update the name of approval rule templates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateName.html
   */
  public toUpdateApprovalRuleTemplateName() {
    this.to('codecommit:UpdateApprovalRuleTemplateName');
    return this;
  }

  /**
   * Grants permission to update the contents of a comment if the identity matches the identity used to create the comment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateComment.html
   */
  public toUpdateComment() {
    this.to('codecommit:UpdateComment');
    return this;
  }

  /**
   * Grants permission to change the default branch in an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateDefaultBranch.html
   */
  public toUpdateDefaultBranch() {
    this.to('codecommit:UpdateDefaultBranch');
    return this;
  }

  /**
   * Grants permission to update the content for approval rules created for a specific pull requests; does not grant permission to update approval rule content for rules created with an approval rule template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalRuleContent.html
   */
  public toUpdatePullRequestApprovalRuleContent() {
    this.to('codecommit:UpdatePullRequestApprovalRuleContent');
    return this;
  }

  /**
   * Grants permission to update the approval state for pull requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalState.html
   */
  public toUpdatePullRequestApprovalState() {
    this.to('codecommit:UpdatePullRequestApprovalState');
    return this;
  }

  /**
   * Grants permission to update the description of a pull request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestDescription.html
   */
  public toUpdatePullRequestDescription() {
    this.to('codecommit:UpdatePullRequestDescription');
    return this;
  }

  /**
   * Grants permission to update the status of a pull request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestStatus.html
   */
  public toUpdatePullRequestStatus() {
    this.to('codecommit:UpdatePullRequestStatus');
    return this;
  }

  /**
   * Grants permission to update the title of a pull request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestTitle.html
   */
  public toUpdatePullRequestTitle() {
    this.to('codecommit:UpdatePullRequestTitle');
    return this;
  }

  /**
   * Grants permission to change the description of an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryDescription.html
   */
  public toUpdateRepositoryDescription() {
    this.to('codecommit:UpdateRepositoryDescription');
    return this;
  }

  /**
   * Grants permission to change the name of an AWS CodeCommit repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryName.html
   */
  public toUpdateRepositoryName() {
    this.to('codecommit:UpdateRepositoryName');
    return this;
  }

  /**
   * Grants permission to the service role for AWS CodePipeline to upload repository changes into a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   */
  public toUploadArchive() {
    this.to('codecommit:UploadArchive');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateApprovalRuleTemplateWithRepository",
      "BatchAssociateApprovalRuleTemplateWithRepositories",
      "BatchDisassociateApprovalRuleTemplateFromRepositories",
      "CreateApprovalRuleTemplate",
      "CreateBranch",
      "CreateCommit",
      "CreatePullRequest",
      "CreatePullRequestApprovalRule",
      "CreateRepository",
      "CreateUnreferencedMergeCommit",
      "DeleteApprovalRuleTemplate",
      "DeleteBranch",
      "DeleteCommentContent",
      "DeleteFile",
      "DeletePullRequestApprovalRule",
      "DeleteRepository",
      "DisassociateApprovalRuleTemplateFromRepository",
      "GitPush",
      "MergeBranchesByFastForward",
      "MergeBranchesBySquash",
      "MergeBranchesByThreeWay",
      "MergePullRequestByFastForward",
      "MergePullRequestBySquash",
      "MergePullRequestByThreeWay",
      "OverridePullRequestApprovalRules",
      "PostCommentForComparedCommit",
      "PostCommentForPullRequest",
      "PostCommentReply",
      "PutCommentReaction",
      "PutFile",
      "PutRepositoryTriggers",
      "TagResource",
      "TestRepositoryTriggers",
      "UntagResource",
      "UpdateApprovalRuleTemplateContent",
      "UpdateApprovalRuleTemplateDescription",
      "UpdateApprovalRuleTemplateName",
      "UpdateComment",
      "UpdateDefaultBranch",
      "UpdatePullRequestApprovalRuleContent",
      "UpdatePullRequestApprovalState",
      "UpdatePullRequestDescription",
      "UpdatePullRequestStatus",
      "UpdatePullRequestTitle",
      "UpdateRepositoryDescription",
      "UpdateRepositoryName",
      "UploadArchive"
    ],
    "Read": [
      "BatchDescribeMergeConflicts",
      "BatchGetCommits",
      "BatchGetPullRequests",
      "BatchGetRepositories",
      "CancelUploadArchive",
      "DescribeMergeConflicts",
      "DescribePullRequestEvents",
      "EvaluatePullRequestApprovalRules",
      "GetApprovalRuleTemplate",
      "GetBlob",
      "GetBranch",
      "GetComment",
      "GetCommentReactions",
      "GetCommentsForComparedCommit",
      "GetCommentsForPullRequest",
      "GetCommit",
      "GetCommitHistory",
      "GetCommitsFromMergeBase",
      "GetDifferences",
      "GetFile",
      "GetFolder",
      "GetMergeCommit",
      "GetMergeConflicts",
      "GetMergeOptions",
      "GetObjectIdentifier",
      "GetPullRequest",
      "GetPullRequestApprovalStates",
      "GetPullRequestOverrideState",
      "GetReferences",
      "GetRepository",
      "GetRepositoryTriggers",
      "GetTree",
      "GetUploadArchiveStatus",
      "GitPull"
    ],
    "List": [
      "ListApprovalRuleTemplates",
      "ListAssociatedApprovalRuleTemplatesForRepository",
      "ListBranches",
      "ListPullRequests",
      "ListRepositories",
      "ListRepositoriesForApprovalRuleTemplate",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param repositoryName - Identifier for the repositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRepository(repositoryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codecommit:${Region}:${Account}:${RepositoryName}';
    arn = arn.replace('${RepositoryName}', repositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by Git reference to specified AWS CodeCommit actions
   *
   * https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html
   *
   * Applies to actions:
   * - .toCreateBranch()
   * - .toCreateCommit()
   * - .toCreateUnreferencedMergeCommit()
   * - .toDeleteBranch()
   * - .toDeleteFile()
   * - .toGetMergeCommit()
   * - .toGitPush()
   * - .toMergeBranchesByFastForward()
   * - .toMergeBranchesBySquash()
   * - .toMergeBranchesByThreeWay()
   * - .toMergePullRequestByFastForward()
   * - .toMergePullRequestBySquash()
   * - .toMergePullRequestByThreeWay()
   * - .toPutFile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReferences(value: string | string[], operator?: string) {
    return this.if(`codecommit:References`, value, operator || 'StringLike');
  }
}
