import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [dataexchange](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dataexchange extends PolicyStatement {
  public servicePrefix = 'dataexchange';

  /**
   * Statement provider for service [dataexchange](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Grants permission to create an asset (for example, in a Job)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permissions-ref.html
   */
  public toCreateAsset() {
    return this.to('CreateAsset');
  }

  /**
   * Grants permission to create a data set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateDataSet.html
   */
  public toCreateDataSet() {
    return this.to('CreateDataSet');
  }

  /**
   * Grants permission to create an event action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateEventAction.html
   */
  public toCreateEventAction() {
    return this.to('CreateEventAction');
  }

  /**
   * Grants permission to create a job to import or export assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create a revision
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateRevision.html
   */
  public toCreateRevision() {
    return this.to('CreateRevision');
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteAsset.html
   */
  public toDeleteAsset() {
    return this.to('DeleteAsset');
  }

  /**
   * Grants permission to delete a data set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteDataSet.html
   */
  public toDeleteDataSet() {
    return this.to('DeleteDataSet');
  }

  /**
   * Grants permission to delete an event action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteEventAction.html
   */
  public toDeleteEventAction() {
    return this.to('DeleteEventAction');
  }

  /**
   * Grants permission to delete a revision
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteRevision.html
   */
  public toDeleteRevision() {
    return this.to('DeleteRevision');
  }

  /**
   * Grants permission to get information about an asset and to export it (for example, in a Job)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetAsset.html
   */
  public toGetAsset() {
    return this.to('GetAsset');
  }

  /**
   * Grants permission to get information about a data set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetDataSet.html
   */
  public toGetDataSet() {
    return this.to('GetDataSet');
  }

  /**
   * Grants permission to get an event action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetEventAction.html
   */
  public toGetEventAction() {
    return this.to('GetEventAction');
  }

  /**
   * Grants permission to get information about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetJob.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to get information about a revision
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetRevision.html
   */
  public toGetRevision() {
    return this.to('GetRevision');
  }

  /**
   * Grants permission to list the revisions of a data set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListDataSetRevisions.html
   */
  public toListDataSetRevisions() {
    return this.to('ListDataSetRevisions');
  }

  /**
   * Grants permission to list data sets for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListDataSets.html
   */
  public toListDataSets() {
    return this.to('ListDataSets');
  }

  /**
   * Grants permission to list event actions for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListEventActions.html
   */
  public toListEventActions() {
    return this.to('ListEventActions');
  }

  /**
   * Grants permission to list jobs for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to get list the assets of a revision
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListRevisionAssets.html
   */
  public toListRevisionAssets() {
    return this.to('ListRevisionAssets');
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish a data set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permissions-ref.html
   */
  public toPublishDataSet() {
    return this.to('PublishDataSet');
  }

  /**
   * Grants permission to revoke subscriber access to a revision
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_RevokeRevision.html
   */
  public toRevokeRevision() {
    return this.to('RevokeRevision');
  }

  /**
   * Grants permission to send a request to an API asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_SendApiAsset.html
   */
  public toSendApiAsset() {
    return this.to('SendApiAsset');
  }

  /**
   * Grants permission to start a job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dataexchange:CreateAsset
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_StartJob.html
   */
  public toStartJob() {
    return this.to('StartJob');
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to get update information about an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateAsset.html
   */
  public toUpdateAsset() {
    return this.to('UpdateAsset');
  }

  /**
   * Grants permission to update information about a data set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateDataSet.html
   */
  public toUpdateDataSet() {
    return this.to('UpdateDataSet');
  }

  /**
   * Grants permission to update information for an event action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateEventAction.html
   */
  public toUpdateEventAction() {
    return this.to('UpdateEventAction');
  }

  /**
   * Grants permission to update information about a revision
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dataexchange:PublishDataSet
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateRevision.html
   */
  public toUpdateRevision() {
    return this.to('UpdateRevision');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJob',
      'CreateAsset',
      'CreateDataSet',
      'CreateEventAction',
      'CreateJob',
      'CreateRevision',
      'DeleteAsset',
      'DeleteDataSet',
      'DeleteEventAction',
      'DeleteRevision',
      'PublishDataSet',
      'RevokeRevision',
      'SendApiAsset',
      'StartJob',
      'UpdateAsset',
      'UpdateDataSet',
      'UpdateEventAction',
      'UpdateRevision'
    ],
    Read: [
      'GetAsset',
      'GetDataSet',
      'GetEventAction',
      'GetJob',
      'GetRevision'
    ],
    List: [
      'ListDataSetRevisions',
      'ListDataSets',
      'ListEventActions',
      'ListJobs',
      'ListRevisionAssets',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifJobType()
   */
  public onJobs(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }:${ account || '*' }:jobs/${ jobId }`);
  }

  /**
   * Adds a resource of type data-sets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSets(dataSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }:${ account || '*' }:data-sets/${ dataSetId }`);
  }

  /**
   * Adds a resource of type entitled-data-sets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEntitledDataSets(dataSetId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }::data-sets/${ dataSetId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRevisions(dataSetId: string, revisionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }:${ account || '*' }:data-sets/${ dataSetId }/revisions/${ revisionId }`);
  }

  /**
   * Adds a resource of type entitled-revisions to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#revisions
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEntitledRevisions(dataSetId: string, revisionId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }::data-sets/${ dataSetId }/revisions/${ revisionId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssets(dataSetId: string, revisionId: string, assetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }:${ account || '*' }:data-sets/${ dataSetId }/revisions/${ revisionId }/assets/${ assetId }`);
  }

  /**
   * Adds a resource of type entitled-assets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#assets
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param assetId - Identifier for the assetId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEntitledAssets(dataSetId: string, revisionId: string, assetId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }::data-sets/${ dataSetId }/revisions/${ revisionId }/assets/${ assetId }`);
  }

  /**
   * Adds a resource of type event-actions to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   *
   * @param eventActionId - Identifier for the eventActionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEventActions(eventActionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Dataexchange.defaultPartition }:dataexchange:${ region || '*' }:${ account || '*' }:event-actions/${ eventActionId }`);
  }

  /**
   * Filters access by the specified job type
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/access-control.html
   *
   * Applies to resource types:
   * - jobs
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobType(value: string | string[], operator?: Operator | string) {
    return this.if(`JobType`, value, operator || 'StringLike');
  }
}
