import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [dataexchange](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dataexchange extends PolicyStatement {
  public servicePrefix = 'dataexchange';

  /**
   * Statement provider for service [dataexchange](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to cancel a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CancelJob
   */
  public toCancelJob() {
    this.to('dataexchange:CancelJob');
    return this;
  }

  /**
   * Grants permission to create an asset (for example, in a Job).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateAsset
   */
  public toCreateAsset() {
    this.to('dataexchange:CreateAsset');
    return this;
  }

  /**
   * Grants permission to create a data set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#CreateDataSet
   */
  public toCreateDataSet() {
    this.to('dataexchange:CreateDataSet');
    return this;
  }

  /**
   * Grants permissions to create a job to import or export assets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CreateJob
   */
  public toCreateJob() {
    this.to('dataexchange:CreateJob');
    return this;
  }

  /**
   * Grants permission to create a revision.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateRevision
   */
  public toCreateRevision() {
    this.to('dataexchange:CreateRevision');
    return this;
  }

  /**
   * Grants permissions to delete an asset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset
   */
  public toDeleteAsset() {
    this.to('dataexchange:DeleteAsset');
    return this;
  }

  /**
   * Grants permissions to delete a data set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#DeleteDataSet
   */
  public toDeleteDataSet() {
    this.to('dataexchange:DeleteDataSet');
    return this;
  }

  /**
   * Grants permissions to delete a revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision
   */
  public toDeleteRevision() {
    this.to('dataexchange:DeleteRevision');
    return this;
  }

  /**
   * Grants permissions to get information about an asset and to export it (for example, in a Job).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset
   */
  public toGetAsset() {
    this.to('dataexchange:GetAsset');
    return this;
  }

  /**
   * Grants permission to get information about a data set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#GetDataSet
   */
  public toGetDataSet() {
    this.to('dataexchange:GetDataSet');
    return this;
  }

  /**
   * Grants permissions to get information about a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#GetJob
   */
  public toGetJob() {
    this.to('dataexchange:GetJob');
    return this;
  }

  /**
   * Grants permission to get information about a revision.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision
   */
  public toGetRevision() {
    this.to('dataexchange:GetRevision');
    return this;
  }

  /**
   * Grants permissions to list the revisions of a data set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions
   */
  public toListDataSetRevisions() {
    this.to('dataexchange:ListDataSetRevisions');
    return this;
  }

  /**
   * Grants permission to list data sets for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#ListDataSets
   */
  public toListDataSets() {
    this.to('dataexchange:ListDataSets');
    return this;
  }

  /**
   * Grants permissions to list jobs for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#ListJobs
   */
  public toListJobs() {
    this.to('dataexchange:ListJobs');
    return this;
  }

  /**
   * Grants permissions to get list the assets of a revision.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets
   */
  public toListRevisionAssets() {
    this.to('dataexchange:ListRevisionAssets');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    this.to('dataexchange:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to start a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#StartJob
   */
  public toStartJob() {
    this.to('dataexchange:StartJob');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#TagResource
   */
  public toTagResource() {
    this.to('dataexchange:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#UntagResource
   */
  public toUntagResource() {
    this.to('dataexchange:UntagResource');
    return this;
  }

  /**
   * Grants permissions to get update information about an asset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset
   */
  public toUpdateAsset() {
    this.to('dataexchange:UpdateAsset');
    return this;
  }

  /**
   * Grants permissions to update information about a data set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#UpdateDataSet
   */
  public toUpdateDataSet() {
    this.to('dataexchange:UpdateDataSet');
    return this;
  }

  /**
   * Grants permissions to update information about a revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision
   */
  public toUpdateRevision() {
    this.to('dataexchange:UpdateRevision');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelJob",
      "CreateAsset",
      "CreateDataSet",
      "CreateJob",
      "CreateRevision",
      "DeleteAsset",
      "DeleteDataSet",
      "DeleteRevision",
      "GetJob",
      "StartJob",
      "UpdateAsset",
      "UpdateDataSet",
      "UpdateRevision"
    ],
    "Read": [
      "GetAsset",
      "GetDataSet",
      "GetRevision",
      "ListTagsForResource"
    ],
    "List": [
      "ListDataSetRevisions",
      "ListDataSets",
      "ListJobs",
      "ListRevisionAssets"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type jobs to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifJobType()
   */
  public onJobs(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type data-sets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataSets(dataSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type revisions to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#revisions
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRevisions(dataSetId: string, revisionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${RevisionId}', revisionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#assets
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssets(dataSetId: string, revisionId: string, assetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}/assets/${AssetId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${RevisionId}', revisionId);
    arn = arn.replace('${AssetId}', assetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Indicates that the action can only be performed on the specified job type.
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/access-control.html
   *
   * Applies to resource types:
   * - jobs
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobType(value: string | string[], operator?: string) {
    return this.if(`dataexchange:JobType`, value, operator || 'StringLike');
  }
}
