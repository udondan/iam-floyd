import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [omics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthomics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Omics extends PolicyStatement {
  public servicePrefix = 'omics';

  /**
   * Statement provider for service [omics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthomics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to abort multipart read set uploads
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_AbortMultipartReadSetUpload.html
   */
  public toAbortMultipartReadSetUpload() {
    return this.to('AbortMultipartReadSetUpload');
  }

  /**
   * Grants permission to accept a share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_AcceptShare.html
   */
  public toAcceptShare() {
    return this.to('AcceptShare');
  }

  /**
   * Grants permission to batch delete Read Sets in the given Sequence Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_BatchDeleteReadSet.html
   */
  public toBatchDeleteReadSet() {
    return this.to('BatchDeleteReadSet');
  }

  /**
   * Grants permission to cancel an Annotation Import Job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CancelAnnotationImportJob.html
   */
  public toCancelAnnotationImportJob() {
    return this.to('CancelAnnotationImportJob');
  }

  /**
   * Grants permission to cancel a workflow run and stop all workflow tasks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CancelRun.html
   */
  public toCancelRun() {
    return this.to('CancelRun');
  }

  /**
   * Grants permission to cancel a Variant Import Job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CancelVariantImportJob.html
   */
  public toCancelVariantImportJob() {
    return this.to('CancelVariantImportJob');
  }

  /**
   * Grants permission to complete a multipart read set upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CompleteMultipartReadSetUpload.html
   */
  public toCompleteMultipartReadSetUpload() {
    return this.to('CompleteMultipartReadSetUpload');
  }

  /**
   * Grants permission to create an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateAnnotationStore.html
   */
  public toCreateAnnotationStore() {
    return this.to('CreateAnnotationStore');
  }

  /**
   * Grants permission to create a Version in an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateAnnotationStoreVersion.html
   */
  public toCreateAnnotationStoreVersion() {
    return this.to('CreateAnnotationStoreVersion');
  }

  /**
   * Grants permission to create a multipart read set upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateMultipartReadSetUpload.html
   */
  public toCreateMultipartReadSetUpload() {
    return this.to('CreateMultipartReadSetUpload');
  }

  /**
   * Grants permission to create a Reference Store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateReferenceStore.html
   */
  public toCreateReferenceStore() {
    return this.to('CreateReferenceStore');
  }

  /**
   * Grants permission to create a new workflow run group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateRunGroup.html
   */
  public toCreateRunGroup() {
    return this.to('CreateRunGroup');
  }

  /**
   * Grants permission to create a Sequence Store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateSequenceStore.html
   */
  public toCreateSequenceStore() {
    return this.to('CreateSequenceStore');
  }

  /**
   * Grants permission to create a share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateShare.html
   */
  public toCreateShare() {
    return this.to('CreateShare');
  }

  /**
   * Grants permission to create a Variant Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateVariantStore.html
   */
  public toCreateVariantStore() {
    return this.to('CreateVariantStore');
  }

  /**
   * Grants permission to create a new workflow with a workflow definition and template of workflow parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_CreateWorkflow.html
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to delete an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteAnnotationStore.html
   */
  public toDeleteAnnotationStore() {
    return this.to('DeleteAnnotationStore');
  }

  /**
   * Grants permission to delete Versions in an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteAnnotationStoreVersions.html
   */
  public toDeleteAnnotationStoreVersions() {
    return this.to('DeleteAnnotationStoreVersions');
  }

  /**
   * Grants permission to delete a Reference in the given Reference Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteReference.html
   */
  public toDeleteReference() {
    return this.to('DeleteReference');
  }

  /**
   * Grants permission to delete a Reference Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteReferenceStore.html
   */
  public toDeleteReferenceStore() {
    return this.to('DeleteReferenceStore');
  }

  /**
   * Grants permission to delete a workflow run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteRun.html
   */
  public toDeleteRun() {
    return this.to('DeleteRun');
  }

  /**
   * Grants permission to delete a workflow run group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteRunGroup.html
   */
  public toDeleteRunGroup() {
    return this.to('DeleteRunGroup');
  }

  /**
   * Grants permission to delete a Sequence Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteSequenceStore.html
   */
  public toDeleteSequenceStore() {
    return this.to('DeleteSequenceStore');
  }

  /**
   * Grants permission to delete a share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteShare.html
   */
  public toDeleteShare() {
    return this.to('DeleteShare');
  }

  /**
   * Grants permission to delete a Variant Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteVariantStore.html
   */
  public toDeleteVariantStore() {
    return this.to('DeleteVariantStore');
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to get the status of an Annotation Import Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationImportJob.html
   */
  public toGetAnnotationImportJob() {
    return this.to('GetAnnotationImportJob');
  }

  /**
   * Grants permission to get detailed information about an Annotation Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationStore.html
   */
  public toGetAnnotationStore() {
    return this.to('GetAnnotationStore');
  }

  /**
   * Grants permission to get detailed information about a version in an Annotation Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationStoreVersion.html
   */
  public toGetAnnotationStoreVersion() {
    return this.to('GetAnnotationStoreVersion');
  }

  /**
   * Grants permission to get a Read Set in the given Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReadSet.html
   */
  public toGetReadSet() {
    return this.to('GetReadSet');
  }

  /**
   * Grants permission to get details about a Read Set activation job for the given Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetActivationJob.html
   */
  public toGetReadSetActivationJob() {
    return this.to('GetReadSetActivationJob');
  }

  /**
   * Grants permission to get details about a Read Set export job for the given Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetExportJob.html
   */
  public toGetReadSetExportJob() {
    return this.to('GetReadSetExportJob');
  }

  /**
   * Grants permission to get details about a Read Set import job for the given Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetImportJob.html
   */
  public toGetReadSetImportJob() {
    return this.to('GetReadSetImportJob');
  }

  /**
   * Grants permission to get details about a Read Set in the given Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetMetadata.html
   */
  public toGetReadSetMetadata() {
    return this.to('GetReadSetMetadata');
  }

  /**
   * Grants permission to get a Reference in the given Reference Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReference.html
   */
  public toGetReference() {
    return this.to('GetReference');
  }

  /**
   * Grants permission to get details about a Reference import job for the given Reference Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceImportJob.html
   */
  public toGetReferenceImportJob() {
    return this.to('GetReferenceImportJob');
  }

  /**
   * Grants permission to get details about a Reference in the given Reference Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceMetadata.html
   */
  public toGetReferenceMetadata() {
    return this.to('GetReferenceMetadata');
  }

  /**
   * Grants permission to get details about a Reference Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceStore.html
   */
  public toGetReferenceStore() {
    return this.to('GetReferenceStore');
  }

  /**
   * Grants permission to retrieve workflow run details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetRun.html
   */
  public toGetRun() {
    return this.to('GetRun');
  }

  /**
   * Grants permission to retrieve workflow run group details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetRunGroup.html
   */
  public toGetRunGroup() {
    return this.to('GetRunGroup');
  }

  /**
   * Grants permission to retrieve workflow task details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetRunTask.html
   */
  public toGetRunTask() {
    return this.to('GetRunTask');
  }

  /**
   * Grants permission to get details about a Sequence Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetSequenceStore.html
   */
  public toGetSequenceStore() {
    return this.to('GetSequenceStore');
  }

  /**
   * Grants permission to get detailed information about a Share
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetShare.html
   */
  public toGetShare() {
    return this.to('GetShare');
  }

  /**
   * Grants permission to get the status of a Variant Import Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetVariantImportJob.html
   */
  public toGetVariantImportJob() {
    return this.to('GetVariantImportJob');
  }

  /**
   * Grants permission to get detailed information about a Variant Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetVariantStore.html
   */
  public toGetVariantStore() {
    return this.to('GetVariantStore');
  }

  /**
   * Grants permission to retrieve workflow details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_GetWorkflow.html
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to get a list of Annotation Import Jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationImportJobs.html
   */
  public toListAnnotationImportJobs() {
    return this.to('ListAnnotationImportJobs');
  }

  /**
   * Grants permission to retrieve a list of information about Versions in an Annotation Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationStoreVersions.html
   */
  public toListAnnotationStoreVersions() {
    return this.to('ListAnnotationStoreVersions');
  }

  /**
   * Grants permission to retrieve a list of information about Annotation Stores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationStores.html
   */
  public toListAnnotationStores() {
    return this.to('ListAnnotationStores');
  }

  /**
   * Grants permission to list multipart read set uploads
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListMultipartReadSetUploads.html
   */
  public toListMultipartReadSetUploads() {
    return this.to('ListMultipartReadSetUploads');
  }

  /**
   * Grants permission to list Read Set activation jobs for the given Sequence Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetActivationJobs.html
   */
  public toListReadSetActivationJobs() {
    return this.to('ListReadSetActivationJobs');
  }

  /**
   * Grants permission to list Read Set export jobs for the given Sequence Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetExportJobs.html
   */
  public toListReadSetExportJobs() {
    return this.to('ListReadSetExportJobs');
  }

  /**
   * Grants permission to list Read Set import jobs for the given Sequence Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetImportJobs.html
   */
  public toListReadSetImportJobs() {
    return this.to('ListReadSetImportJobs');
  }

  /**
   * Grants permission to list read set upload parts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetUploadParts.html
   */
  public toListReadSetUploadParts() {
    return this.to('ListReadSetUploadParts');
  }

  /**
   * Grants permission to list Read Sets in the given Sequence Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReadSets.html
   */
  public toListReadSets() {
    return this.to('ListReadSets');
  }

  /**
   * Grants permission to list Reference import jobs for the given Reference Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReferenceImportJobs.html
   */
  public toListReferenceImportJobs() {
    return this.to('ListReferenceImportJobs');
  }

  /**
   * Grants permission to list Reference Stores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReferenceStores.html
   */
  public toListReferenceStores() {
    return this.to('ListReferenceStores');
  }

  /**
   * Grants permission to list References in the given Reference Store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListReferences.html
   */
  public toListReferences() {
    return this.to('ListReferences');
  }

  /**
   * Grants permission to retrieve a list of workflow run groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListRunGroups.html
   */
  public toListRunGroups() {
    return this.to('ListRunGroups');
  }

  /**
   * Grants permission to retrieve a list of tasks for a workflow run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListRunTasks.html
   */
  public toListRunTasks() {
    return this.to('ListRunTasks');
  }

  /**
   * Grants permission to retrieve a list of workflow runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListRuns.html
   */
  public toListRuns() {
    return this.to('ListRuns');
  }

  /**
   * Grants permission to list Sequence Stores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListSequenceStores.html
   */
  public toListSequenceStores() {
    return this.to('ListSequenceStores');
  }

  /**
   * Grants permission to retrieve a list of information about shares
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListShares.html
   */
  public toListShares() {
    return this.to('ListShares');
  }

  /**
   * Grants permission to retrieve a list of resource AWS tags
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to get a list of Variant Import Jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListVariantImportJobs.html
   */
  public toListVariantImportJobs() {
    return this.to('ListVariantImportJobs');
  }

  /**
   * Grants permission to retrieve a list of metadata for Variant Stores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListVariantStores.html
   */
  public toListVariantStores() {
    return this.to('ListVariantStores');
  }

  /**
   * Grants permission to retrieve a list of available workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to import a list of Annotation files to an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartAnnotationImportJob.html
   */
  public toStartAnnotationImportJob() {
    return this.to('StartAnnotationImportJob');
  }

  /**
   * Grants permission to start a Read Set activation job from the given Sequence Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetActivationJob.html
   */
  public toStartReadSetActivationJob() {
    return this.to('StartReadSetActivationJob');
  }

  /**
   * Grants permission to start a Read Set export job from the given Sequence Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetExportJob.html
   */
  public toStartReadSetExportJob() {
    return this.to('StartReadSetExportJob');
  }

  /**
   * Grants permission to start a Read Set import job into the given Sequence Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetImportJob.html
   */
  public toStartReadSetImportJob() {
    return this.to('StartReadSetImportJob');
  }

  /**
   * Grants permission to start a Reference import job into the given Reference Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartReferenceImportJob.html
   */
  public toStartReferenceImportJob() {
    return this.to('StartReferenceImportJob');
  }

  /**
   * Grants permission to start a workflow run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartRun.html
   */
  public toStartRun() {
    return this.to('StartRun');
  }

  /**
   * Grants permission to import a list of variant files to an Variant Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_StartVariantImportJob.html
   */
  public toStartVariantImportJob() {
    return this.to('StartVariantImportJob');
  }

  /**
   * Grants permission to add AWS tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove resource AWS tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update information about the Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UpdateAnnotationStore.html
   */
  public toUpdateAnnotationStore() {
    return this.to('UpdateAnnotationStore');
  }

  /**
   * Grants permission to update information about the Version in an Annotation Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UpdateAnnotationStoreVersion.html
   */
  public toUpdateAnnotationStoreVersion() {
    return this.to('UpdateAnnotationStoreVersion');
  }

  /**
   * Grants permission to update a workflow run group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UpdateRunGroup.html
   */
  public toUpdateRunGroup() {
    return this.to('UpdateRunGroup');
  }

  /**
   * Grants permission to update metadata about the Variant Store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UpdateVariantStore.html
   */
  public toUpdateVariantStore() {
    return this.to('UpdateVariantStore');
  }

  /**
   * Grants permission to update workflow details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UpdateWorkflow.html
   */
  public toUpdateWorkflow() {
    return this.to('UpdateWorkflow');
  }

  /**
   * Grants permission to upload read set parts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_UploadReadSetPart.html
   */
  public toUploadReadSetPart() {
    return this.to('UploadReadSetPart');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AbortMultipartReadSetUpload',
      'AcceptShare',
      'BatchDeleteReadSet',
      'CancelAnnotationImportJob',
      'CancelRun',
      'CancelVariantImportJob',
      'CompleteMultipartReadSetUpload',
      'CreateAnnotationStore',
      'CreateAnnotationStoreVersion',
      'CreateMultipartReadSetUpload',
      'CreateReferenceStore',
      'CreateRunGroup',
      'CreateSequenceStore',
      'CreateShare',
      'CreateVariantStore',
      'CreateWorkflow',
      'DeleteAnnotationStore',
      'DeleteAnnotationStoreVersions',
      'DeleteReference',
      'DeleteReferenceStore',
      'DeleteRun',
      'DeleteRunGroup',
      'DeleteSequenceStore',
      'DeleteShare',
      'DeleteVariantStore',
      'DeleteWorkflow',
      'StartAnnotationImportJob',
      'StartReadSetActivationJob',
      'StartReadSetExportJob',
      'StartReadSetImportJob',
      'StartReferenceImportJob',
      'StartRun',
      'StartVariantImportJob',
      'UpdateAnnotationStore',
      'UpdateAnnotationStoreVersion',
      'UpdateRunGroup',
      'UpdateVariantStore',
      'UpdateWorkflow',
      'UploadReadSetPart'
    ],
    Read: [
      'GetAnnotationImportJob',
      'GetAnnotationStore',
      'GetAnnotationStoreVersion',
      'GetReadSet',
      'GetReadSetActivationJob',
      'GetReadSetExportJob',
      'GetReadSetImportJob',
      'GetReadSetMetadata',
      'GetReference',
      'GetReferenceImportJob',
      'GetReferenceMetadata',
      'GetReferenceStore',
      'GetRun',
      'GetRunGroup',
      'GetRunTask',
      'GetSequenceStore',
      'GetShare',
      'GetVariantImportJob',
      'GetVariantStore',
      'GetWorkflow'
    ],
    List: [
      'ListAnnotationImportJobs',
      'ListAnnotationStoreVersions',
      'ListAnnotationStores',
      'ListMultipartReadSetUploads',
      'ListReadSetActivationJobs',
      'ListReadSetExportJobs',
      'ListReadSetImportJobs',
      'ListReadSetUploadParts',
      'ListReadSets',
      'ListReferenceImportJobs',
      'ListReferenceStores',
      'ListReferences',
      'ListRunGroups',
      'ListRunTasks',
      'ListRuns',
      'ListSequenceStores',
      'ListShares',
      'ListTagsForResource',
      'ListVariantImportJobs',
      'ListVariantStores',
      'ListWorkflows'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AnnotationImportJob to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_AnnotationImportJobItem.html
   *
   * @param annotationImportJobId - Identifier for the annotationImportJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAnnotationImportJobJobId()
   */
  public onAnnotationImportJob(annotationImportJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:annotationImportJob/${ annotationImportJobId }`);
  }

  /**
   * Adds a resource of type AnnotationStore to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_AnnotationStoreItem.html
   *
   * @param annotationStoreId - Identifier for the annotationStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAnnotationStoreName()
   */
  public onAnnotationStore(annotationStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:annotationStore/${ annotationStoreId }`);
  }

  /**
   * Adds a resource of type AnnotationStoreVersion to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_AnnotationStoreVersionItem.html
   *
   * @param annotationStoreName - Identifier for the annotationStoreName.
   * @param annotationStoreVersionName - Identifier for the annotationStoreVersionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAnnotationStoreVersionName()
   */
  public onAnnotationStoreVersion(annotationStoreName: string, annotationStoreVersionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:annotationStore/${ annotationStoreName }/version/${ annotationStoreVersionName }`);
  }

  /**
   * Adds a resource of type readSet to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ReadSetFiles.html
   *
   * @param sequenceStoreId - Identifier for the sequenceStoreId.
   * @param readSetId - Identifier for the readSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReadSet(sequenceStoreId: string, readSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:sequenceStore/${ sequenceStoreId }/readSet/${ readSetId }`);
  }

  /**
   * Adds a resource of type reference to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ReferenceFiles.html
   *
   * @param referenceStoreId - Identifier for the referenceStoreId.
   * @param referenceId - Identifier for the referenceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReference(referenceStoreId: string, referenceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:referenceStore/${ referenceStoreId }/reference/${ referenceId }`);
  }

  /**
   * Adds a resource of type referenceStore to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_ReferenceStoreDetail.html
   *
   * @param referenceStoreId - Identifier for the referenceStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReferenceStore(referenceStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:referenceStore/${ referenceStoreId }`);
  }

  /**
   * Adds a resource of type run to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_RunListItem.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRun(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:run/${ id }`);
  }

  /**
   * Adds a resource of type runGroup to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_RunGroupListItem.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRunGroup(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:runGroup/${ id }`);
  }

  /**
   * Adds a resource of type sequenceStore to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_SequenceStoreDetail.html
   *
   * @param sequenceStoreId - Identifier for the sequenceStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSequenceStore(sequenceStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:sequenceStore/${ sequenceStoreId }`);
  }

  /**
   * Adds a resource of type TaggingResource to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_TagResource.html
   *
   * @param tagKey - Identifier for the tagKey.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTaggingResource(tagKey: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:tag/${ tagKey }`);
  }

  /**
   * Adds a resource of type TaskResource to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_TaskListItem.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTaskResource(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:task/${ id }`);
  }

  /**
   * Adds a resource of type VariantImportJob to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_VariantImportJobItem.html
   *
   * @param variantImportJobId - Identifier for the variantImportJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifVariantImportJobJobId()
   */
  public onVariantImportJob(variantImportJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:variantImportJob/${ variantImportJobId }`);
  }

  /**
   * Adds a resource of type VariantStore to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_VariantStoreItem.html
   *
   * @param variantStoreId - Identifier for the variantStoreId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifVariantStoreName()
   */
  public onVariantStore(variantStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:variantStore/${ variantStoreId }`);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/omics/latest/api/API_WorkflowListItem.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Omics.defaultPartition }:omics:${ region || '*' }:${ account || '*' }:workflow/${ id }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateReferenceStore()
   * - .toCreateRunGroup()
   * - .toCreateSequenceStore()
   * - .toCreateWorkflow()
   * - .toStartRun()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - readSet
   * - reference
   * - referenceStore
   * - run
   * - runGroup
   * - sequenceStore
   * - workflow
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateReferenceStore()
   * - .toCreateRunGroup()
   * - .toCreateSequenceStore()
   * - .toCreateWorkflow()
   * - .toStartRun()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a unique resource identifier
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-annotation-import-job-id
   *
   * Applies to resource types:
   * - AnnotationImportJob
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAnnotationImportJobJobId(value: string | string[], operator?: Operator | string) {
    return this.if(`AnnotationImportJobJobId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of the store
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-annotation-store-name
   *
   * Applies to resource types:
   * - AnnotationStore
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAnnotationStoreName(value: string | string[], operator?: Operator | string) {
    return this.if(`AnnotationStoreName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of the annotation store version
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-annotation-store-version-name
   *
   * Applies to resource types:
   * - AnnotationStoreVersion
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAnnotationStoreVersionName(value: string | string[], operator?: Operator | string) {
    return this.if(`AnnotationStoreVersionName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a unique resource identifier
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-variant-import-job-id
   *
   * Applies to resource types:
   * - VariantImportJob
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVariantImportJobJobId(value: string | string[], operator?: Operator | string) {
    return this.if(`VariantImportJobJobId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of the store
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-variant-store-name
   *
   * Applies to resource types:
   * - VariantStore
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVariantStoreName(value: string | string[], operator?: Operator | string) {
    return this.if(`VariantStoreName`, value, operator || 'StringLike');
  }
}
