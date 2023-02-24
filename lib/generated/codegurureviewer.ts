import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [codeguru-reviewer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html).
 *
 * @param options - Options for the statement
 */
export class CodeguruReviewer extends PolicyStatement {
  public servicePrefix = 'codeguru-reviewer';

  /**
   * Statement provider for service [codeguru-reviewer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associates a repository with Amazon CodeGuru Reviewer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - codecommit:GetRepository
   * - codecommit:ListRepositories
   * - codecommit:TagResource
   * - codestar-connections:PassConnection
   * - events:PutRule
   * - events:PutTargets
   * - iam:CreateServiceLinkedRole
   * - s3:CreateBucket
   * - s3:ListBucket
   * - s3:PutBucketPolicy
   * - s3:PutLifecycleConfiguration
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_AssociateRepository.html
   */
  public toAssociateRepository() {
    return this.to('AssociateRepository');
  }

  /**
   * Grants permission to create a code review
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview.html
   */
  public toCreateCodeReview() {
    return this.to('CreateCodeReview');
  }

  /**
   * Grants permission to perform webbased oauth handshake for 3rd party providers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html
   */
  public toCreateConnectionToken() {
    return this.to('CreateConnectionToken');
  }

  /**
   * Grants permission to describe a code review
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeCodeReview.html
   */
  public toDescribeCodeReview() {
    return this.to('DescribeCodeReview');
  }

  /**
   * Grants permission to describe a recommendation feedback on a code review
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRecommendationFeedback.html
   */
  public toDescribeRecommendationFeedback() {
    return this.to('DescribeRecommendationFeedback');
  }

  /**
   * Grants permission to describe a repository association
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html
   */
  public toDescribeRepositoryAssociation() {
    return this.to('DescribeRepositoryAssociation');
  }

  /**
   * Grants permission to disassociate a repository with Amazon CodeGuru Reviewer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - codecommit:UntagResource
   * - events:DeleteRule
   * - events:RemoveTargets
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DisassociateRepository.html
   */
  public toDisassociateRepository() {
    return this.to('DisassociateRepository');
  }

  /**
   * Grants permission to view pull request metrics in console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html
   */
  public toGetMetricsData() {
    return this.to('GetMetricsData');
  }

  /**
   * Grants permission to list summary of code reviews
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListCodeReviews.html
   */
  public toListCodeReviews() {
    return this.to('ListCodeReviews');
  }

  /**
   * Grants permission to list summary of recommendation feedback on a code review
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendationFeedback.html
   */
  public toListRecommendationFeedback() {
    return this.to('ListRecommendationFeedback');
  }

  /**
   * Grants permission to list summary of recommendations on a code review
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendations.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to list summary of repository associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html
   */
  public toListRepositoryAssociations() {
    return this.to('ListRepositoryAssociations');
  }

  /**
   * Grants permission to list the resource attached to a associated repository ARN
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list 3rd party providers repositories in console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html
   */
  public toListThirdPartyRepositories() {
    return this.to('ListThirdPartyRepositories');
  }

  /**
   * Grants permission to put feedback for a recommendation on a code review
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_PutRecommendationFeedback.html
   */
  public toPutRecommendationFeedback() {
    return this.to('PutRecommendationFeedback');
  }

  /**
   * Grants permission to attach resource tags to an associated repository ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate resource tags from an associated repository ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_UntagResource.html
   */
  public toUnTagResource() {
    return this.to('UnTagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateRepository',
      'CreateCodeReview',
      'DisassociateRepository',
      'PutRecommendationFeedback'
    ],
    Read: [
      'CreateConnectionToken',
      'DescribeCodeReview',
      'DescribeRecommendationFeedback',
      'DescribeRepositoryAssociation',
      'GetMetricsData',
      'ListThirdPartyRepositories'
    ],
    List: [
      'ListCodeReviews',
      'ListRecommendationFeedback',
      'ListRecommendations',
      'ListRepositoryAssociations',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UnTagResource'
    ]
  };

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-repositories.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssociation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:codeguru-reviewer:${ region || '*' }:${ account || '*' }:association:${ resourceId }`);
  }

  /**
   * Adds a resource of type codereview to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/code-reviews.html
   *
   * @param codeReviewUuid - Identifier for the codeReviewUuid.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCodereview(codeReviewUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:codeguru-reviewer:${ region || '*' }:${ account || '*' }:code-review:${ codeReviewUuid }`);
  }
}
