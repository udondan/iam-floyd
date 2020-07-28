import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codeguru-reviewer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruReviewer extends PolicyStatement {
  public servicePrefix = 'codeguru-reviewer';
  protected actionList: Actions = {
    "AssociateRepository": {
      "url": "",
      "description": "Grants permission to associates a repository with Amazon CodeGuru Reviewer.",
      "accessLevel": "Write",
      "dependentActions": [
        "codecommit:ListRepositories",
        "codecommit:TagResource",
        "events:PutRule",
        "events:PutTargets",
        "iam:CreateServiceLinkedRole"
      ],
      "resourceTypes": {
        "repository": {
          "required": false
        }
      }
    },
    "CreateConnectionToken": {
      "url": "",
      "description": "Grants permission to perform webbased oauth handshake for 3rd party providers.",
      "accessLevel": "Read"
    },
    "DescribeCodeReview": {
      "url": "",
      "description": "Grants permission to describe a code review.",
      "accessLevel": "Read",
      "resourceTypes": {
        "codereview": {
          "required": true
        }
      }
    },
    "DescribeRecommendationFeedback": {
      "url": "",
      "description": "Grants permission to describe a recommendation feedback on a code review.",
      "accessLevel": "Read",
      "resourceTypes": {
        "codereview": {
          "required": true
        }
      }
    },
    "DescribeRepositoryAssociation": {
      "url": "",
      "description": "Grants permission to describe a repository association.",
      "accessLevel": "Read",
      "resourceTypes": {
        "association": {
          "required": true
        }
      }
    },
    "DisassociateRepository": {
      "url": "",
      "description": "Grants permission to disassociate a repository with Amazon CodeGuru Reviewer.",
      "accessLevel": "Write",
      "dependentActions": [
        "codecommit:UntagResource",
        "events:DeleteRule",
        "events:RemoveTargets"
      ],
      "resourceTypes": {
        "association": {
          "required": true
        }
      }
    },
    "GetMetricsData": {
      "url": "",
      "description": "Grants permission to view pull request metrics in console.",
      "accessLevel": "Read"
    },
    "ListCodeReviews": {
      "url": "",
      "description": "Grants permission to list summary of code reviews.",
      "accessLevel": "List"
    },
    "ListRecommendationFeedback": {
      "url": "",
      "description": "Grants permission to list summary of recommendation feedback on a code review.",
      "accessLevel": "List",
      "resourceTypes": {
        "codereview": {
          "required": true
        }
      }
    },
    "ListRecommendations": {
      "url": "",
      "description": "Grants permission to list summary of recommendations on a code review",
      "accessLevel": "List",
      "resourceTypes": {
        "codereview": {
          "required": true
        }
      }
    },
    "ListRepositoryAssociations": {
      "url": "",
      "description": "Grants permission to list summary of repository associations.",
      "accessLevel": "List"
    },
    "ListThirdPartyRepositories": {
      "url": "",
      "description": "Grants permission to list 3rd party providers repositories in console.",
      "accessLevel": "Read"
    },
    "PutRecommendationFeedback": {
      "url": "",
      "description": "Grants permission to put feedback for a recommendation on a code review.",
      "accessLevel": "Write",
      "resourceTypes": {
        "codereview": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "association": {
      "name": "association",
      "url": "",
      "arn": "arn:${Partition}:codeguru-reviewer::${Account}:association:${ResourceId}",
      "conditionKeys": []
    },
    "codereview": {
      "name": "codereview",
      "url": "",
      "arn": "arn:${Partition}:codeguru-reviewer:${Region}:${Account}:code-review:${CodeReviewUuid}",
      "conditionKeys": []
    },
    "repository": {
      "name": "repository",
      "url": "https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codecommit:${Region}:${Account}:${RepositoryName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [codeguru-reviewer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associates a repository with Amazon CodeGuru Reviewer.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - codecommit:ListRepositories
   * - codecommit:TagResource
   * - events:PutRule
   * - events:PutTargets
   * - iam:CreateServiceLinkedRole
   */
  public associateRepository() {
    this.add('codeguru-reviewer:AssociateRepository');
    return this;
  }

  /**
   * Grants permission to perform webbased oauth handshake for 3rd party providers.
   *
   * Access Level: Read
   */
  public createConnectionToken() {
    this.add('codeguru-reviewer:CreateConnectionToken');
    return this;
  }

  /**
   * Grants permission to describe a code review.
   *
   * Access Level: Read
   */
  public describeCodeReview() {
    this.add('codeguru-reviewer:DescribeCodeReview');
    return this;
  }

  /**
   * Grants permission to describe a recommendation feedback on a code review.
   *
   * Access Level: Read
   */
  public describeRecommendationFeedback() {
    this.add('codeguru-reviewer:DescribeRecommendationFeedback');
    return this;
  }

  /**
   * Grants permission to describe a repository association.
   *
   * Access Level: Read
   */
  public describeRepositoryAssociation() {
    this.add('codeguru-reviewer:DescribeRepositoryAssociation');
    return this;
  }

  /**
   * Grants permission to disassociate a repository with Amazon CodeGuru Reviewer.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - codecommit:UntagResource
   * - events:DeleteRule
   * - events:RemoveTargets
   */
  public disassociateRepository() {
    this.add('codeguru-reviewer:DisassociateRepository');
    return this;
  }

  /**
   * Grants permission to view pull request metrics in console.
   *
   * Access Level: Read
   */
  public getMetricsData() {
    this.add('codeguru-reviewer:GetMetricsData');
    return this;
  }

  /**
   * Grants permission to list summary of code reviews.
   *
   * Access Level: List
   */
  public listCodeReviews() {
    this.add('codeguru-reviewer:ListCodeReviews');
    return this;
  }

  /**
   * Grants permission to list summary of recommendation feedback on a code review.
   *
   * Access Level: List
   */
  public listRecommendationFeedback() {
    this.add('codeguru-reviewer:ListRecommendationFeedback');
    return this;
  }

  /**
   * Grants permission to list summary of recommendations on a code review
   *
   * Access Level: List
   */
  public listRecommendations() {
    this.add('codeguru-reviewer:ListRecommendations');
    return this;
  }

  /**
   * Grants permission to list summary of repository associations.
   *
   * Access Level: List
   */
  public listRepositoryAssociations() {
    this.add('codeguru-reviewer:ListRepositoryAssociations');
    return this;
  }

  /**
   * Grants permission to list 3rd party providers repositories in console.
   *
   * Access Level: Read
   */
  public listThirdPartyRepositories() {
    this.add('codeguru-reviewer:ListThirdPartyRepositories');
    return this;
  }

  /**
   * Grants permission to put feedback for a recommendation on a code review.
   *
   * Access Level: Write
   */
  public putRecommendationFeedback() {
    this.add('codeguru-reviewer:PutRecommendationFeedback');
    return this;
  }

  /**
   * Adds a resource of type association to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssociation(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeguru-reviewer::${Account}:association:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type codereview to the statement
   *
   * @param codeReviewUuid - Identifier for the codeReviewUuid.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCodereview(codeReviewUuid: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeguru-reviewer:${Region}:${Account}:code-review:${CodeReviewUuid}';
    arn = arn.replace('${CodeReviewUuid}', codeReviewUuid);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
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
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - repository
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
