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
    return this.to('BatchDeleteDocument');
  }

  /**
   * Grant permission to batch put document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   */
  public toBatchPutDocument() {
    return this.to('BatchPutDocument');
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
    return this.to('CreateDataSource');
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
    return this.to('CreateFaq');
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
    return this.to('CreateIndex');
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
    return this.to('CreateThesaurus');
  }

  /**
   * Grant permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grant permission to delete an Faq
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   */
  public toDeleteFaq() {
    return this.to('DeleteFaq');
  }

  /**
   * Grant permission to delete an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grant permission to delete a Thesaurus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html
   */
  public toDeleteThesaurus() {
    return this.to('DeleteThesaurus');
  }

  /**
   * Grant permission to describe a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    return this.to('DescribeDataSource');
  }

  /**
   * Grant permission to describe an Faq
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   */
  public toDescribeFaq() {
    return this.to('DescribeFaq');
  }

  /**
   * Grant permission to describe an Index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    return this.to('DescribeIndex');
  }

  /**
   * Grant permission to describe a Thesaurus
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   */
  public toDescribeThesaurus() {
    return this.to('DescribeThesaurus');
  }

  /**
   * Grant permission to get Data Source sync job history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   */
  public toListDataSourceSyncJobs() {
    return this.to('ListDataSourceSyncJobs');
  }

  /**
   * Grant permission to list the data sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grant permission to list the Faqs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   */
  public toListFaqs() {
    return this.to('ListFaqs');
  }

  /**
   * Grant permission to list the indexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Grant permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grant permission to list the Thesauri
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html
   */
  public toListThesauri() {
    return this.to('ListThesauri');
  }

  /**
   * Grant permission to query documents and faqs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   */
  public toQuery() {
    return this.to('Query');
  }

  /**
   * Grant permission to start Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   */
  public toStartDataSourceSyncJob() {
    return this.to('StartDataSourceSyncJob');
  }

  /**
   * Grant permission to stop Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   */
  public toStopDataSourceSyncJob() {
    return this.to('StopDataSourceSyncJob');
  }

  /**
   * Grant permission to send feedback about a query results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    return this.to('SubmitFeedback');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grant permission to update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grant permission to update an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    return this.to('UpdateIndex');
  }

  /**
   * Grant permission to update a thesaurus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateThesaurus.html
   */
  public toUpdateThesaurus() {
    return this.to('UpdateThesaurus');
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
