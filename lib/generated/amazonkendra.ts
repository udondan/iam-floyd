import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [kendra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kendra extends PolicyStatement {
  public servicePrefix = 'kendra';

  /**
   * Statement provider for service [kendra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Batch Delete document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
   */
  public toBatchDeleteDocument() {
    this.to('kendra:BatchDeleteDocument');
    return this;
  }

  /**
   * Batch put document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   */
  public toBatchPutDocument() {
    this.to('kendra:BatchPutDocument');
    return this;
  }

  /**
   * Create a data source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    this.to('kendra:CreateDataSource');
    return this;
  }

  /**
   * Create an Faq
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html
   */
  public toCreateFaq() {
    this.to('kendra:CreateFaq');
    return this;
  }

  /**
   * Create an Index
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html
   */
  public toCreateIndex() {
    this.to('kendra:CreateIndex');
    return this;
  }

  /**
   * Delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    this.to('kendra:DeleteDataSource');
    return this;
  }

  /**
   * Delete an Faq
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   */
  public toDeleteFaq() {
    this.to('kendra:DeleteFaq');
    return this;
  }

  /**
   * Delete an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    this.to('kendra:DeleteIndex');
    return this;
  }

  /**
   * Describe a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    this.to('kendra:DescribeDataSource');
    return this;
  }

  /**
   * Describe an Faq
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   */
  public toDescribeFaq() {
    this.to('kendra:DescribeFaq');
    return this;
  }

  /**
   * Describe an Index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    this.to('kendra:DescribeIndex');
    return this;
  }

  /**
   * Get Data Source sync job history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   */
  public toListDataSourceSyncJobs() {
    this.to('kendra:ListDataSourceSyncJobs');
    return this;
  }

  /**
   * List the data sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   */
  public toListDataSources() {
    this.to('kendra:ListDataSources');
    return this;
  }

  /**
   * List the Faqs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   */
  public toListFaqs() {
    this.to('kendra:ListFaqs');
    return this;
  }

  /**
   * List the indexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  public toListIndices() {
    this.to('kendra:ListIndices');
    return this;
  }

  /**
   * Lists tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('kendra:ListTagsForResource');
    return this;
  }

  /**
   * Query documents and Faqs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   */
  public toQuery() {
    this.to('kendra:Query');
    return this;
  }

  /**
   * Start Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   */
  public toStartDataSourceSyncJob() {
    this.to('kendra:StartDataSourceSyncJob');
    return this;
  }

  /**
   * Stop Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   */
  public toStopDataSourceSyncJob() {
    this.to('kendra:StopDataSourceSyncJob');
    return this;
  }

  /**
   * Send feedback about a query results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    this.to('kendra:SubmitFeedback');
    return this;
  }

  /**
   * Tags a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.to('kendra:TagResource');
    return this;
  }

  /**
   * Removes the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('kendra:UntagResource');
    return this;
  }

  /**
   * Update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    this.to('kendra:UpdateDataSource');
    return this;
  }

  /**
   * Update an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    this.to('kendra:UpdateIndex');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDeleteDocument",
      "BatchPutDocument",
      "CreateDataSource",
      "CreateFaq",
      "CreateIndex",
      "DeleteDataSource",
      "DeleteFaq",
      "DeleteIndex",
      "StartDataSourceSyncJob",
      "StopDataSourceSyncJob",
      "SubmitFeedback",
      "UpdateDataSource",
      "UpdateIndex"
    ],
    "Read": [
      "DescribeDataSource",
      "DescribeFaq",
      "DescribeIndex",
      "Query"
    ],
    "List": [
      "ListDataSourceSyncJobs",
      "ListDataSources",
      "ListFaqs",
      "ListIndices",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/index.html
   *
   * @param indexId - Identifier for the indexId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(indexId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type data-source to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/data-source.html
   *
   * @param indexId - Identifier for the indexId.
   * @param dataSourceId - Identifier for the dataSourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(indexId: string, dataSourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/data-source/${DataSourceId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${DataSourceId}', dataSourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type faq to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/faq.html
   *
   * @param indexId - Identifier for the indexId.
   * @param faqId - Identifier for the faqId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFaq(indexId: string, faqId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/faq/${FaqId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${FaqId}', faqId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
