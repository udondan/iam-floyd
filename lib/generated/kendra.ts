import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kendra](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kendra extends PolicyStatement {
  public servicePrefix = 'kendra';

  /**
   * Statement provider for service [kendra](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grant permission to batch delete document
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
   * Grant permission to batch put document
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
   * Grant permission to create a data source
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
   * Grant permission to create an Faq
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
   * Grant permission to create an Index
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
   * Grant permission to create a Thesaurus
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateThesaurus.html
   */
  public toCreateThesaurus() {
    this.to('kendra:CreateThesaurus');
    return this;
  }

  /**
   * Grant permission to delete a data source
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
   * Grant permission to delete an Faq
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
   * Grant permission to delete an Index
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
   * Grant permission to delete a Thesaurus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html
   */
  public toDeleteThesaurus() {
    this.to('kendra:DeleteThesaurus');
    return this;
  }

  /**
   * Grant permission to describe a data source
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
   * Grant permission to describe an Faq
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
   * Grant permission to describe an Index
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
   * Grant permission to describe a Thesaurus
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   */
  public toDescribeThesaurus() {
    this.to('kendra:DescribeThesaurus');
    return this;
  }

  /**
   * Grant permission to get Data Source sync job history
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
   * Grant permission to list the data sources
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
   * Grant permission to list the Faqs
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
   * Grant permission to list the indexes
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
   * Grant permission to list tags for a resource
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
   * Grant permission to list the Thesauri
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html
   */
  public toListThesauri() {
    this.to('kendra:ListThesauri');
    return this;
  }

  /**
   * Grant permission to query documents and faqs
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
   * Grant permission to start Data Source sync job
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
   * Grant permission to stop Data Source sync job
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
   * Grant permission to send feedback about a query results
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
   * Grant permission to tag a resource with given key value pairs
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
   * Grant permission to remove the tag with the given key from a resource
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
   * Grant permission to update a data source
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
   * Grant permission to update an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    this.to('kendra:UpdateIndex');
    return this;
  }

  /**
   * Grant permission to update a thesaurus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateThesaurus.html
   */
  public toUpdateThesaurus() {
    this.to('kendra:UpdateThesaurus');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDeleteDocument",
      "BatchPutDocument",
      "CreateDataSource",
      "CreateFaq",
      "CreateIndex",
      "CreateThesaurus",
      "DeleteDataSource",
      "DeleteFaq",
      "DeleteIndex",
      "DeleteThesaurus",
      "StartDataSourceSyncJob",
      "StopDataSourceSyncJob",
      "SubmitFeedback",
      "UpdateDataSource",
      "UpdateIndex",
      "UpdateThesaurus"
    ],
    "Read": [
      "DescribeDataSource",
      "DescribeFaq",
      "DescribeIndex",
      "DescribeThesaurus",
      "Query"
    ],
    "List": [
      "ListDataSourceSyncJobs",
      "ListDataSources",
      "ListFaqs",
      "ListIndices",
      "ListTagsForResource",
      "ListThesauri"
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

  /**
   * Adds a resource of type thesaurus to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/thesaurus.html
   *
   * @param indexId - Identifier for the indexId.
   * @param thesaurusId - Identifier for the thesaurusId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThesaurus(indexId: string, thesaurusId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/thesaurus/${ThesaurusId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${ThesaurusId}', thesaurusId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
