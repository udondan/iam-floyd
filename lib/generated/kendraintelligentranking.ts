import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [kendra-ranking](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendraintelligentranking.html).
 *
 * @param options - Options for the statement
 */
export class KendraRanking extends PolicyStatement {
  public servicePrefix = 'kendra-ranking';

  /**
   * Statement provider for service [kendra-ranking](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendraintelligentranking.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a RescoreExecutionPlan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_CreateRescoreExecutionPlan.html
   */
  public toCreateRescoreExecutionPlan() {
    return this.to('CreateRescoreExecutionPlan');
  }

  /**
   * Grants permission to delete a RescoreExecutionPlan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_DeleteRescoreExecutionPlan.html
   */
  public toDeleteRescoreExecutionPlan() {
    return this.to('DeleteRescoreExecutionPlan');
  }

  /**
   * Grants permission to describe a RescoreExecutionPlan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_DescribeRescoreExecutionPlan.html
   */
  public toDescribeRescoreExecutionPlan() {
    return this.to('DescribeRescoreExecutionPlan');
  }

  /**
   * Grants permission to list all RescoreExecutionPlans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_ListRescoreExecutionPlans.html
   */
  public toListRescoreExecutionPlans() {
    return this.to('ListRescoreExecutionPlans');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to Rescore documents with Kendra Intelligent Ranking
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_Rescore.html
   */
  public toRescore() {
    return this.to('Rescore');
  }

  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a RescoreExecutionPlan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Ranking_UpdateRescoreExecutionPlan.html
   */
  public toUpdateRescoreExecutionPlan() {
    return this.to('UpdateRescoreExecutionPlan');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateRescoreExecutionPlan',
      'DeleteRescoreExecutionPlan',
      'UpdateRescoreExecutionPlan'
    ],
    Read: [
      'DescribeRescoreExecutionPlan',
      'ListTagsForResource',
      'Rescore'
    ],
    List: [
      'ListRescoreExecutionPlans'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type rescore-execution-plan to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html
   *
   * @param rescoreExecutionPlanId - Identifier for the rescoreExecutionPlanId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRescoreExecutionPlan(rescoreExecutionPlanId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kendra-ranking:${ region || '*' }:${ account || '*' }:rescore-execution-plan/${ rescoreExecutionPlanId }`);
  }
}
