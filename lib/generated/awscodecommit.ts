import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codecommit](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codecommit extends PolicyStatement {
  public servicePrefix = 'codecommit';
  protected actionList: Actions = {
    "AssociateApprovalRuleTemplateWithRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_AssociateApprovalRuleTemplateWithRepository.html",
      "description": "Grants permission to associate an approval rule template with a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchAssociateApprovalRuleTemplateWithRepositories": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchAssociateApprovalRuleTemplateWithRepositories.html",
      "description": "Grants permission to associate an approval rule template with multiple repositories in a single operation",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchDescribeMergeConflicts": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDescribeMergeConflicts.html",
      "description": "Grants permission to get information about multiple merge conflicts when attempting to merge two commits using either the three-way merge or the squash merge option",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchDisassociateApprovalRuleTemplateFromRepositories": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDisassociateApprovalRuleTemplateFromRepositories.html",
      "description": "Grants permission to remove the association between an approval rule template and multiple repositories in a single operation",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchGetCommits": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetCommits.html",
      "description": "Grants permission to get return information about one or more commits in an AWS CodeCommit repository.",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchGetPullRequests": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr",
      "description": "Grants permission to return information about one or more pull requests in an AWS CodeCommit repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchGetRepositories": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetRepositories.html",
      "description": "Grants permission to get information about multiple repositories",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CancelUploadArchive": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp",
      "description": "Grants permission to cancel the uploading of an archive to a pipeline in AWS CodePipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CreateApprovalRuleTemplate": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateApprovalRuleTemplate.html",
      "description": "Grants permission to create an approval rule template that will automatically create approval rules in pull requests that match the conditions defined in the template; does not grant permission to create approval rules for individual pull requests",
      "accessLevel": "Write"
    },
    "CreateBranch": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateBranch.html",
      "description": "Grants permission to create a branch in an AWS CodeCommit repository with this API; does not control Git create branch actions",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "CreateCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateCommit.html",
      "description": "Grants permission to add, copy, move or update single or multiple files in a branch in an AWS CodeCommit repository, and generate a commit for the changes in the specified branch.",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "CreatePullRequest": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequest.html",
      "description": "Grants permission to create a pull request in the specified repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CreatePullRequestApprovalRule": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequestApprovalRule.html",
      "description": "Grants permission to create an approval rule specific to an individual pull request; does not grant permission to create approval rule templates",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CreateRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateRepository.html",
      "description": "Grants permission to create an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUnreferencedMergeCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateUnreferencedMergeCommit.html",
      "description": "Grants permission to create an unreferenced commit that contains the result of merging two commits using either the three-way or the squash merge option; does not control Git merge actions",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "DeleteApprovalRuleTemplate": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteApprovalRuleTemplate.html",
      "description": "Grants permission to delete an approval rule template",
      "accessLevel": "Write"
    },
    "DeleteBranch": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteBranch.html",
      "description": "Grants permission to delete a branch in an AWS CodeCommit repository with this API; does not control Git delete branch actions",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "DeleteCommentContent": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteCommentContent.html",
      "description": "Grants permission to delete the content of a comment made on a change, file, or commit in a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DeleteFile": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteFile.html",
      "description": "Grants permission to delete a specified file from a specified branch",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "DeletePullRequestApprovalRule": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeletePullRequestApprovalRule.html",
      "description": "Grants permission to delete approval rule created for a pull request if the rule was not created by an approval rule template",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DeleteRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteRepository.html",
      "description": "Grants permission to delete an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DescribeMergeConflicts": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribeMergeConflicts.html",
      "description": "Grants permission to get information about specific merge conflicts when attempting to merge two commits using either the three-way or the squash merge option",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DescribePullRequestEvents": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribePullRequestEvents.html",
      "description": "Grants permission to return information about one or more pull request events",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DisassociateApprovalRuleTemplateFromRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DisassociateApprovalRuleTemplateFromRepository.html",
      "description": "Grants permission to remove the association between an approval rule template and a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "EvaluatePullRequestApprovalRules": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_EvaluatePullRequestApprovalRules.html",
      "description": "Grants permission to evaluate whether a pull request is mergable based on its current approval state and approval rule requirements",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetApprovalRuleTemplate": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetApprovalRuleTemplate.html",
      "description": "Grants permission to return information about an approval rule template",
      "accessLevel": "Read"
    },
    "GetBlob": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBlob.html",
      "description": "Grants permission to view the encoded content of an individual file in an AWS CodeCommit repository from the AWS CodeCommit console",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetBranch": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBranch.html",
      "description": "Grants permission to get details about a branch in an AWS CodeCommit repository with this API; does not control Git branch actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetComment": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetComment.html",
      "description": "Grants permission to get the content of a comment made on a change, file, or commit in a repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommentReactions": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentReactions.html",
      "description": "Grants permission to get the reactions on a comment",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommentsForComparedCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForComparedCommit.html",
      "description": "Grants permission to get information about comments made on the comparison between two commits",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommentsForPullRequest": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForPullRequest.html",
      "description": "Grants permission to get comments made on a pull request",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommit.html",
      "description": "Grants permission to return information about a commit, including commit message and committer information, with this API; does not control Git log actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommitHistory": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code",
      "description": "Grants permission to get information about the history of commits in a repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetCommitsFromMergeBase": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr",
      "description": "Grants permission to get information about the difference between commits in the context of a potential merge",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetDifferences": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetDifferences.html",
      "description": "Grants permission to view information about the differences between valid commit specifiers such as a branch, tag, HEAD, commit ID, or other fully qualified reference",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetFile": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFile.html",
      "description": "Grants permission to return the base-64 encoded contents of a specified file and its metadata",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetFolder": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFolder.html",
      "description": "Grants permission to return the contents of a specified folder in a repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetMergeCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeCommit.html",
      "description": "Grants permission to get information about a merge commit created by one of the merge options for pull requests that creates merge commits. Not all merge options create merge commits. This permission does not control Git merge actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "GetMergeConflicts": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeConflicts.html",
      "description": "Grants permission to get information about merge conflicts between the before and after commit IDs for a pull request in a repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetMergeOptions": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeOptions.html",
      "description": "Grants permission to get information about merge options for pull requests that can be used to merge two commits; does not control Git merge actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetObjectIdentifier": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code",
      "description": "Grants permission to resolve blobs, trees, and commits to their identifier",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetPullRequest": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequest.html",
      "description": "Grants permission to get information about a pull request in a specified repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetPullRequestApprovalStates": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestApprovalStates.html",
      "description": "Grants permission to retrieve the current approvals on an inputted pull request",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetPullRequestOverrideState": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestOverrideState.html",
      "description": "Grants permission to retrieve the current override state of a given pull request",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetReferences": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code",
      "description": "Grants permission to get details about references in an AWS CodeCommit repository; does not control Git reference actions",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html",
      "description": "Grants permission to get information about an AWS CodeCommit repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetRepositoryTriggers": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepositoryTriggers.html",
      "description": "Grants permission to get information about triggers configured for a repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetTree": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code",
      "description": "Grants permission to view the contents of a specified tree in an AWS CodeCommit repository from the AWS CodeCommit console",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetUploadArchiveStatus": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp",
      "description": "Grants permission to get status information about an archive upload to a pipeline in AWS CodePipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GitPull": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git",
      "description": "Grants permission to pull information from an AWS CodeCommit repository to a local repo",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GitPush": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git",
      "description": "Grants permission to push information from a local repo to an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "ListApprovalRuleTemplates": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListApprovalRuleTemplates.html",
      "description": "Grants permission to list all approval rule templates in an AWS Region for the AWS account",
      "accessLevel": "List"
    },
    "ListAssociatedApprovalRuleTemplatesForRepository": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListAssociatedApprovalRuleTemplatesForRepository.html",
      "description": "Grants permission to list approval rule templates that are associated with a repository",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "ListBranches": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListBranches.html",
      "description": "Grants permission to list branches for an AWS CodeCommit repository with this API; does not control Git branch actions",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "ListPullRequests": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListPullRequests.html",
      "description": "Grants permission to list pull requests for a specified repository",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "ListRepositories": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositories.html",
      "description": "Grants permission to list information about AWS CodeCommit repositories in the current Region for your AWS account",
      "accessLevel": "List"
    },
    "ListRepositoriesForApprovalRuleTemplate": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositoriesForApprovalRuleTemplate.html",
      "description": "Grants permission to list repositories that are associated with an approval rule template",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the resource attached to a CodeCommit resource ARN",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": false
        }
      }
    },
    "MergeBranchesByFastForward": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByFastForward.html",
      "description": "Grants permission to merge two commits into the specified destination branch using the fast-forward merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "MergeBranchesBySquash": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesBySquash.html",
      "description": "Grants permission to merge two commits into the specified destination branch using the squash merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "MergeBranchesByThreeWay": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByThreeWay.html",
      "description": "Grants permission to merge two commits into the specified destination branch using the three-way merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "MergePullRequestByFastForward": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByFastForward.html",
      "description": "Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the fast-forward merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "MergePullRequestBySquash": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestBySquash.html",
      "description": "Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the squash merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "MergePullRequestByThreeWay": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByThreeWay.html",
      "description": "Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the three-way merge option",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "OverridePullRequestApprovalRules": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_OverridePullRequestApprovalRules.html",
      "description": "Grants permission to override all approval rules for a pull request, including approval rules created by a template",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PostCommentForComparedCommit": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForComparedCommit.html",
      "description": "Grants permission to post a comment on the comparison between two commits",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PostCommentForPullRequest": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForPullRequest.html",
      "description": "Grants permission to post a comment on a pull request",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PostCommentReply": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentReply.html",
      "description": "Grants permission to post a comment in reply to a comment on a comparison between commits or a pull request",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutCommentReaction": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutCommentReaction.html",
      "description": "Grants permission to post a reaction on a comment",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutFile": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutFile.html",
      "description": "Grants permission to add or update a file in a branch in an AWS CodeCommit repository, and generate a commit for the addition in the specified branch",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "codecommit:References"
      ]
    },
    "PutRepositoryTriggers": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutRepositoryTriggers.html",
      "description": "Grants permission to create, update, or delete triggers for a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to attach resource tags to a CodeCommit resource ARN",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TestRepositoryTriggers": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TestRepositoryTriggers.html",
      "description": "Grants permission to test the functionality of repository triggers by sending information to the trigger target",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to disassociate resource tags from a CodeCommit resource ARN",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApprovalRuleTemplateContent": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateContent.html",
      "description": "Grants permission to update the content of approval rule templates; does not grant permission to update content of approval rules created specifically for pull requests",
      "accessLevel": "Write"
    },
    "UpdateApprovalRuleTemplateDescription": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateDescription.html",
      "description": "Grants permission to update the description of approval rule templates",
      "accessLevel": "Write"
    },
    "UpdateApprovalRuleTemplateName": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateName.html",
      "description": "Grants permission to update the name of approval rule templates",
      "accessLevel": "Write"
    },
    "UpdateComment": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateComment.html",
      "description": "Grants permission to update the contents of a comment if the identity matches the identity used to create the comment",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdateDefaultBranch": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateDefaultBranch.html",
      "description": "Grants permission to change the default branch in an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdatePullRequestApprovalRuleContent": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalRuleContent.html",
      "description": "Grants permission to update the content for approval rules created for a specific pull requests; does not grant permission to update approval rule content for rules created with an approval rule template",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdatePullRequestApprovalState": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalState.html",
      "description": "Grants permission to update the approval state for pull requests",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdatePullRequestDescription": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestDescription.html",
      "description": "Grants permission to update the description of a pull request",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdatePullRequestStatus": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestStatus.html",
      "description": "Grants permission to update the status of a pull request",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdatePullRequestTitle": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestTitle.html",
      "description": "Grants permission to update the title of a pull request",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdateRepositoryDescription": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryDescription.html",
      "description": "Grants permission to change the description of an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UpdateRepositoryName": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryName.html",
      "description": "Grants permission to change the name of an AWS CodeCommit repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UploadArchive": {
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp",
      "description": "Grants permission to the service role for AWS CodePipeline to upload repository changes into a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "repository": {
      "name": "repository",
      "url": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codecommit:${Region}:${Account}:${RepositoryName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
    this.add('codecommit:AssociateApprovalRuleTemplateWithRepository');
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
    this.add('codecommit:BatchAssociateApprovalRuleTemplateWithRepositories');
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
    this.add('codecommit:BatchDescribeMergeConflicts');
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
    this.add('codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories');
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
    this.add('codecommit:BatchGetCommits');
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
    this.add('codecommit:BatchGetPullRequests');
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
    this.add('codecommit:BatchGetRepositories');
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
    this.add('codecommit:CancelUploadArchive');
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
    this.add('codecommit:CreateApprovalRuleTemplate');
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
    this.add('codecommit:CreateBranch');
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
    this.add('codecommit:CreateCommit');
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
    this.add('codecommit:CreatePullRequest');
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
    this.add('codecommit:CreatePullRequestApprovalRule');
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
    this.add('codecommit:CreateRepository');
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
    this.add('codecommit:CreateUnreferencedMergeCommit');
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
    this.add('codecommit:DeleteApprovalRuleTemplate');
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
    this.add('codecommit:DeleteBranch');
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
    this.add('codecommit:DeleteCommentContent');
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
    this.add('codecommit:DeleteFile');
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
    this.add('codecommit:DeletePullRequestApprovalRule');
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
    this.add('codecommit:DeleteRepository');
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
    this.add('codecommit:DescribeMergeConflicts');
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
    this.add('codecommit:DescribePullRequestEvents');
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
    this.add('codecommit:DisassociateApprovalRuleTemplateFromRepository');
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
    this.add('codecommit:EvaluatePullRequestApprovalRules');
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
    this.add('codecommit:GetApprovalRuleTemplate');
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
    this.add('codecommit:GetBlob');
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
    this.add('codecommit:GetBranch');
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
    this.add('codecommit:GetComment');
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
    this.add('codecommit:GetCommentReactions');
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
    this.add('codecommit:GetCommentsForComparedCommit');
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
    this.add('codecommit:GetCommentsForPullRequest');
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
    this.add('codecommit:GetCommit');
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
    this.add('codecommit:GetCommitHistory');
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
    this.add('codecommit:GetCommitsFromMergeBase');
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
    this.add('codecommit:GetDifferences');
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
    this.add('codecommit:GetFile');
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
    this.add('codecommit:GetFolder');
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
    this.add('codecommit:GetMergeCommit');
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
    this.add('codecommit:GetMergeConflicts');
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
    this.add('codecommit:GetMergeOptions');
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
    this.add('codecommit:GetObjectIdentifier');
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
    this.add('codecommit:GetPullRequest');
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
    this.add('codecommit:GetPullRequestApprovalStates');
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
    this.add('codecommit:GetPullRequestOverrideState');
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
    this.add('codecommit:GetReferences');
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
    this.add('codecommit:GetRepository');
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
    this.add('codecommit:GetRepositoryTriggers');
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
    this.add('codecommit:GetTree');
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
    this.add('codecommit:GetUploadArchiveStatus');
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
    this.add('codecommit:GitPull');
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
    this.add('codecommit:GitPush');
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
    this.add('codecommit:ListApprovalRuleTemplates');
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
    this.add('codecommit:ListAssociatedApprovalRuleTemplatesForRepository');
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
    this.add('codecommit:ListBranches');
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
    this.add('codecommit:ListPullRequests');
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
    this.add('codecommit:ListRepositories');
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
    this.add('codecommit:ListRepositoriesForApprovalRuleTemplate');
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
    this.add('codecommit:ListTagsForResource');
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
    this.add('codecommit:MergeBranchesByFastForward');
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
    this.add('codecommit:MergeBranchesBySquash');
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
    this.add('codecommit:MergeBranchesByThreeWay');
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
    this.add('codecommit:MergePullRequestByFastForward');
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
    this.add('codecommit:MergePullRequestBySquash');
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
    this.add('codecommit:MergePullRequestByThreeWay');
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
    this.add('codecommit:OverridePullRequestApprovalRules');
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
    this.add('codecommit:PostCommentForComparedCommit');
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
    this.add('codecommit:PostCommentForPullRequest');
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
    this.add('codecommit:PostCommentReply');
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
    this.add('codecommit:PutCommentReaction');
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
    this.add('codecommit:PutFile');
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
    this.add('codecommit:PutRepositoryTriggers');
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
    this.add('codecommit:TagResource');
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
    this.add('codecommit:TestRepositoryTriggers');
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
    this.add('codecommit:UntagResource');
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
    this.add('codecommit:UpdateApprovalRuleTemplateContent');
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
    this.add('codecommit:UpdateApprovalRuleTemplateDescription');
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
    this.add('codecommit:UpdateApprovalRuleTemplateName');
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
    this.add('codecommit:UpdateComment');
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
    this.add('codecommit:UpdateDefaultBranch');
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
    this.add('codecommit:UpdatePullRequestApprovalRuleContent');
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
    this.add('codecommit:UpdatePullRequestApprovalState');
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
    this.add('codecommit:UpdatePullRequestDescription');
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
    this.add('codecommit:UpdatePullRequestStatus');
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
    this.add('codecommit:UpdatePullRequestTitle');
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
    this.add('codecommit:UpdateRepositoryDescription');
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
    this.add('codecommit:UpdateRepositoryName');
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
    this.add('codecommit:UploadArchive');
    return this;
  }

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
  public ifReferences(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`codecommit:References`, value, operator || 'StringLike');
  }
}
