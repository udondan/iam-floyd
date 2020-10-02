import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codeguru-reviewer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruReviewer extends PolicyStatement {
  public servicePrefix = 'codeguru-reviewer';

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
  public toAssociateRepository() {
    this.to('codeguru-reviewer:AssociateRepository');
    return this;
  }

  /**
   * Grants permission to perform webbased oauth handshake for 3rd party providers.
   *
   * Access Level: Read
   */
  public toCreateConnectionToken() {
    this.to('codeguru-reviewer:CreateConnectionToken');
    return this;
  }

  /**
   * Grants permission to describe a code review.
   *
   * Access Level: Read
   */
  public toDescribeCodeReview() {
    this.to('codeguru-reviewer:DescribeCodeReview');
    return this;
  }

  /**
   * Grants permission to describe a recommendation feedback on a code review.
   *
   * Access Level: Read
   */
  public toDescribeRecommendationFeedback() {
    this.to('codeguru-reviewer:DescribeRecommendationFeedback');
    return this;
  }

  /**
   * Grants permission to describe a repository association.
   *
   * Access Level: Read
   */
  public toDescribeRepositoryAssociation() {
    this.to('codeguru-reviewer:DescribeRepositoryAssociation');
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
  public toDisassociateRepository() {
    this.to('codeguru-reviewer:DisassociateRepository');
    return this;
  }

  /**
   * Grants permission to view pull request metrics in console.
   *
   * Access Level: Read
   */
  public toGetMetricsData() {
    this.to('codeguru-reviewer:GetMetricsData');
    return this;
  }

  /**
   * Grants permission to list summary of code reviews.
   *
   * Access Level: List
   */
  public toListCodeReviews() {
    this.to('codeguru-reviewer:ListCodeReviews');
    return this;
  }

  /**
   * Grants permission to list summary of recommendation feedback on a code review.
   *
   * Access Level: List
   */
  public toListRecommendationFeedback() {
    this.to('codeguru-reviewer:ListRecommendationFeedback');
    return this;
  }

  /**
   * Grants permission to list summary of recommendations on a code review
   *
   * Access Level: List
   */
  public toListRecommendations() {
    this.to('codeguru-reviewer:ListRecommendations');
    return this;
  }

  /**
   * Grants permission to list summary of repository associations.
   *
   * Access Level: List
   */
  public toListRepositoryAssociations() {
    this.to('codeguru-reviewer:ListRepositoryAssociations');
    return this;
  }

  /**
   * Grants permission to list 3rd party providers repositories in console.
   *
   * Access Level: Read
   */
  public toListThirdPartyRepositories() {
    this.to('codeguru-reviewer:ListThirdPartyRepositories');
    return this;
  }

  /**
   * Grants permission to put feedback for a recommendation on a code review.
   *
   * Access Level: Write
   */
  public toPutRecommendationFeedback() {
    this.to('codeguru-reviewer:PutRecommendationFeedback');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateRepository",
      "DisassociateRepository",
      "PutRecommendationFeedback"
    ],
    "Read": [
      "CreateConnectionToken",
      "DescribeCodeReview",
      "DescribeRecommendationFeedback",
      "DescribeRepositoryAssociation",
      "GetMetricsData",
      "ListThirdPartyRepositories"
    ],
    "List": [
      "ListCodeReviews",
      "ListRecommendationFeedback",
      "ListRecommendations",
      "ListRepositoryAssociations"
    ]
  };

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
}
