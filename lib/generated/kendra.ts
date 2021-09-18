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
   * Grants permission to batch delete document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
   */
  public toBatchDeleteDocument() {
    return this.to('BatchDeleteDocument');
  }

  /**
   * Grants permission to do batch get document status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html
   */
  public toBatchGetDocumentStatus() {
    return this.to('BatchGetDocumentStatus');
  }

  /**
   * Grants permission to batch put document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   */
  public toBatchPutDocument() {
    return this.to('BatchPutDocument');
  }

  /**
   * Grants permission to clear out the suggestions for a given index, generated so far
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ClearQuerySuggestions.html
   */
  public toClearQuerySuggestions() {
    return this.to('ClearQuerySuggestions');
  }

  /**
   * Grants permission to create a data source
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
   * Grants permission to create an Faq
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
   * Grants permission to create an Index
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
   * Grants permission to create a QuerySuggestions BlockList
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateQuerySuggestionsBlockList.html
   */
  public toCreateQuerySuggestionsBlockList() {
    return this.to('CreateQuerySuggestionsBlockList');
  }

  /**
   * Grants permission to create a Thesaurus
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
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete an Faq
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   */
  public toDeleteFaq() {
    return this.to('DeleteFaq');
  }

  /**
   * Grants permission to delete an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grants permission to delete principal mapping from index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeletePrincipalMapping.html
   */
  public toDeletePrincipalMapping() {
    return this.to('DeletePrincipalMapping');
  }

  /**
   * Grants permission to delete a QuerySuggestions BlockList
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteQuerySuggestionsBlockList.html
   */
  public toDeleteQuerySuggestionsBlockList() {
    return this.to('DeleteQuerySuggestionsBlockList');
  }

  /**
   * Grants permission to delete a Thesaurus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html
   */
  public toDeleteThesaurus() {
    return this.to('DeleteThesaurus');
  }

  /**
   * Grants permission to describe a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    return this.to('DescribeDataSource');
  }

  /**
   * Grants permission to describe an Faq
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   */
  public toDescribeFaq() {
    return this.to('DescribeFaq');
  }

  /**
   * Grants permission to describe an Index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    return this.to('DescribeIndex');
  }

  /**
   * Grants permission to describe principal mapping from index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribePrincipalMapping.html
   */
  public toDescribePrincipalMapping() {
    return this.to('DescribePrincipalMapping');
  }

  /**
   * Grants permission to describe a QuerySuggestions BlockList
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsBlockList.html
   */
  public toDescribeQuerySuggestionsBlockList() {
    return this.to('DescribeQuerySuggestionsBlockList');
  }

  /**
   * Grants permission to describe the query suggestions configuration for an index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsConfig.html
   */
  public toDescribeQuerySuggestionsConfig() {
    return this.to('DescribeQuerySuggestionsConfig');
  }

  /**
   * Grants permission to describe a Thesaurus
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   */
  public toDescribeThesaurus() {
    return this.to('DescribeThesaurus');
  }

  /**
   * Grants permission to get suggestions for a query prefix
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html
   */
  public toGetQuerySuggestions() {
    return this.to('GetQuerySuggestions');
  }

  /**
   * Grants permission to get Data Source sync job history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   */
  public toListDataSourceSyncJobs() {
    return this.to('ListDataSourceSyncJobs');
  }

  /**
   * Grants permission to list the data sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to list the Faqs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   */
  public toListFaqs() {
    return this.to('ListFaqs');
  }

  /**
   * Grants permission to list groups that are older than an ordering id
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListGroupsOlderThanOrderingId.html
   */
  public toListGroupsOlderThanOrderingId() {
    return this.to('ListGroupsOlderThanOrderingId');
  }

  /**
   * Grants permission to list the indexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Grants permission to list the QuerySuggestions BlockLists
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListQuerySuggestionsBlockLists.html
   */
  public toListQuerySuggestionsBlockLists() {
    return this.to('ListQuerySuggestionsBlockLists');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the Thesauri
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html
   */
  public toListThesauri() {
    return this.to('ListThesauri');
  }

  /**
   * Grants permission to put principal mapping in index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html
   */
  public toPutPrincipalMapping() {
    return this.to('PutPrincipalMapping');
  }

  /**
   * Grants permission to query documents and faqs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   */
  public toQuery() {
    return this.to('Query');
  }

  /**
   * Grants permission to start Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   */
  public toStartDataSourceSyncJob() {
    return this.to('StartDataSourceSyncJob');
  }

  /**
   * Grants permission to stop Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   */
  public toStopDataSourceSyncJob() {
    return this.to('StopDataSourceSyncJob');
  }

  /**
   * Grants permission to send feedback about a query results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    return this.to('SubmitFeedback');
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
   * https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
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
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    return this.to('UpdateIndex');
  }

  /**
   * Grants permission to update a QuerySuggestions BlockList
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsBlockList.html
   */
  public toUpdateQuerySuggestionsBlockList() {
    return this.to('UpdateQuerySuggestionsBlockList');
  }

  /**
   * Grants permission to update the query suggestions configuration for an index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html
   */
  public toUpdateQuerySuggestionsConfig() {
    return this.to('UpdateQuerySuggestionsConfig');
  }

  /**
   * Grants permission to update a thesaurus
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
      "ClearQuerySuggestions",
      "CreateDataSource",
      "CreateFaq",
      "CreateIndex",
      "CreateQuerySuggestionsBlockList",
      "CreateThesaurus",
      "DeleteDataSource",
      "DeleteFaq",
      "DeleteIndex",
      "DeletePrincipalMapping",
      "DeleteQuerySuggestionsBlockList",
      "DeleteThesaurus",
      "PutPrincipalMapping",
      "StartDataSourceSyncJob",
      "StopDataSourceSyncJob",
      "SubmitFeedback",
      "UpdateDataSource",
      "UpdateIndex",
      "UpdateQuerySuggestionsBlockList",
      "UpdateQuerySuggestionsConfig",
      "UpdateThesaurus"
    ],
    "Read": [
      "BatchGetDocumentStatus",
      "DescribeDataSource",
      "DescribeFaq",
      "DescribeIndex",
      "DescribePrincipalMapping",
      "DescribeQuerySuggestionsBlockList",
      "DescribeQuerySuggestionsConfig",
      "DescribeThesaurus",
      "GetQuerySuggestions",
      "ListTagsForResource",
      "Query"
    ],
    "List": [
      "ListDataSourceSyncJobs",
      "ListDataSources",
      "ListFaqs",
      "ListGroupsOlderThanOrderingId",
      "ListIndices",
      "ListQuerySuggestionsBlockLists",
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

  /**
   * Adds a resource of type query-suggestions-block-list to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions-block-list.html
   *
   * @param indexId - Identifier for the indexId.
   * @param querySuggestionsBlockListId - Identifier for the querySuggestionsBlockListId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuerySuggestionsBlockList(indexId: string, querySuggestionsBlockListId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/query-suggestions-block-list/${QuerySuggestionsBlockListId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${QuerySuggestionsBlockListId}', querySuggestionsBlockListId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
