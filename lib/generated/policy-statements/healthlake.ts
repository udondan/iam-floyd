import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_healthlake.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Healthlake extends PolicyStatement {
  public servicePrefix = 'healthlake';

  /**
   * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_healthlake.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an on going FHIR Export job with Delete
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/export-datastore-rest.html
   */
  public toCancelFHIRExportJobWithDelete() {
    return this.to('CancelFHIRExportJobWithDelete');
  }

  /**
   * Grants permission to allow customers to indicate to a Producer that the Consumer does not have any more changes to be made to the Attribution List
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-confirm-attribution-list.html
   */
  public toConfirmAttributionList() {
    return this.to('ConfirmAttributionList');
  }

  /**
   * Grants permission to create a data transformation profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_CreateDataTransformationProfile.html
   */
  public toCreateDataTransformationProfile() {
    return this.to('CreateDataTransformationProfile');
  }

  /**
   * Grants permission to create a datastore that can ingest and export FHIR data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_CreateFHIRDatastore.html
   */
  public toCreateFHIRDatastore() {
    return this.to('CreateFHIRDatastore');
  }

  /**
   * Grants permission to create resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toCreateResource() {
    return this.to('CreateResource');
  }

  /**
   * Grants permission to delete a data transformation profile and all its versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DeleteDataTransformationProfile.html
   */
  public toDeleteDataTransformationProfile() {
    return this.to('DeleteDataTransformationProfile');
  }

  /**
   * Grants permission to delete a datastore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DeleteFHIRDatastore.html
   */
  public toDeleteFHIRDatastore() {
    return this.to('DeleteFHIRDatastore');
  }

  /**
   * Grants permission to delete resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toDeleteResource() {
    return this.to('DeleteResource');
  }

  /**
   * Grants permission to describe a data transformation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeDataTransformationJob.html
   */
  public toDescribeDataTransformationJob() {
    return this.to('DescribeDataTransformationJob');
  }

  /**
   * Grants permission to describe a FHIR Bulk Delete Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-bulk-delete.html
   */
  public toDescribeFHIRBulkDeleteJob() {
    return this.to('DescribeFHIRBulkDeleteJob');
  }

  /**
   * Grants permission to describe a FHIR Bulk Member Match Job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-bulk-member-match.html
   */
  public toDescribeFHIRBulkMemberMatchJob() {
    return this.to('DescribeFHIRBulkMemberMatchJob');
  }

  /**
   * Grants permission to get the properties associated with the FHIR datastore, including the datastore ID, datastore ARN, datastore name, datastore status, created at, datastore type version, and datastore endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRDatastore.html
   */
  public toDescribeFHIRDatastore() {
    return this.to('DescribeFHIRDatastore');
  }

  /**
   * Grants permission to display the properties of a FHIR export job, including the ID, ARN, name, and the status of the datastore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRExportJob.html
   */
  public toDescribeFHIRExportJob() {
    return this.to('DescribeFHIRExportJob');
  }

  /**
   * Grants permission to display the properties of a FHIR export job, including the ID, ARN, name, and the status of the datastore with Get
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/export-datastore-rest.html
   */
  public toDescribeFHIRExportJobWithGet() {
    return this.to('DescribeFHIRExportJobWithGet');
  }

  /**
   * Grants permission to display the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRImportJob.html
   */
  public toDescribeFHIRImportJob() {
    return this.to('DescribeFHIRImportJob');
  }

  /**
   * Grants permission to search and expand ValueSet resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-expand.html
   */
  public toExpandValueSetWithGet() {
    return this.to('ExpandValueSetWithGet');
  }

  /**
   * Grants permission to search and expand ValueSet resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-expand.html
   */
  public toExpandValueSetWithPost() {
    return this.to('ExpandValueSetWithPost');
  }

  /**
   * Grants permission to generate a clinical document resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-document.html
   */
  public toGenerateDocumentWithGet() {
    return this.to('GenerateDocumentWithGet');
  }

  /**
   * Grants permission to generate a clinical document resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-document.html
   */
  public toGenerateDocumentWithPost() {
    return this.to('GenerateDocumentWithPost');
  }

  /**
   * Grants permission to get the capabilities of a FHIR datastore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toGetCapabilities() {
    return this.to('GetCapabilities');
  }

  /**
   * Grants permission to retrieve a data transformation profile and its content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_GetDataTransformationProfile.html
   */
  public toGetDataTransformationProfile() {
    return this.to('GetDataTransformationProfile');
  }

  /**
   * Grants permission to access exported files from a FHIR Export job initiated with Get
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/export-datastore-rest.html
   */
  public toGetExportedFile() {
    return this.to('GetExportedFile');
  }

  /**
   * Grants permission to read resource history
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toGetHistoryByResourceId() {
    return this.to('GetHistoryByResourceId');
  }

  /**
   * Grants permission to inquire about the status of a prior authorization Claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-inquire.html
   */
  public toInquirePreAuthClaim() {
    return this.to('InquirePreAuthClaim');
  }

  /**
   * Grants permission to list data transformation jobs in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListDataTransformationJobs.html
   */
  public toListDataTransformationJobs() {
    return this.to('ListDataTransformationJobs');
  }

  /**
   * Grants permission to list all versions of a data transformation profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListDataTransformationProfileVersions.html
   */
  public toListDataTransformationProfileVersions() {
    return this.to('ListDataTransformationProfileVersions');
  }

  /**
   * Grants permission to list data transformation profiles in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListDataTransformationProfiles.html
   */
  public toListDataTransformationProfiles() {
    return this.to('ListDataTransformationProfiles');
  }

  /**
   * Grants permission to list all FHIR datastores that are in the user's account, regardless of datastore status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRDatastores.html
   */
  public toListFHIRDatastores() {
    return this.to('ListFHIRDatastores');
  }

  /**
   * Grants permission to get a list of export jobs for the specified datastore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRExportJobs.html
   */
  public toListFHIRExportJobs() {
    return this.to('ListFHIRExportJobs');
  }

  /**
   * Grants permission to get a list of import jobs for the specified datastore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRImportJobs.html
   */
  public toListFHIRImportJobs() {
    return this.to('ListFHIRImportJobs');
  }

  /**
   * Grants permission to get a list of tags for the specified datastore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve Codes for a CodeSystem resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-lookup.html
   */
  public toLookupCodeSystemWithGet() {
    return this.to('LookupCodeSystemWithGet');
  }

  /**
   * Grants permission to retrieve Codes for a CodeSystem resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-lookup.html
   */
  public toLookupCodeSystemWithPost() {
    return this.to('LookupCodeSystemWithPost');
  }

  /**
   * Grants permission to attribute a member with a specific provider group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-member-add.html
   */
  public toMemberAdd() {
    return this.to('MemberAdd');
  }

  /**
   * Grants permission to enable cross-system patient matching
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-member-match.html
   */
  public toMemberMatch() {
    return this.to('MemberMatch');
  }

  /**
   * Grants permission to remove a member from a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-member-remove.html
   */
  public toMemberRemove() {
    return this.to('MemberRemove');
  }

  /**
   * Grants permission to patch a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/managing-fhir-resources-patch.html
   */
  public toPatchResource() {
    return this.to('PatchResource');
  }

  /**
   * Grants permission to bundle multiple resource operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toProcessBundle() {
    return this.to('ProcessBundle');
  }

  /**
   * Grants permission to publish a new immutable version of a data transformation profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_PublishDataTransformationProfile.html
   */
  public toPublishDataTransformationProfile() {
    return this.to('PublishDataTransformationProfile');
  }

  /**
   * Grants permission to retrieve Questionnaire packages with dependency Library and ValueSet resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-questionnaire-package.html
   */
  public toQuestionnairePackage() {
    return this.to('QuestionnairePackage');
  }

  /**
   * Grants permission to read resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toReadResource() {
    return this.to('ReadResource');
  }

  /**
   * Grants permission to retrieve member attribution status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-attribution-status.html
   */
  public toRetrieveAttributionStatus() {
    return this.to('RetrieveAttributionStatus');
  }

  /**
   * Grants permission to search all resources related to a patient
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html
   */
  public toSearchEverything() {
    return this.to('SearchEverything');
  }

  /**
   * Grants permission to search resources with GET method
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html
   */
  public toSearchWithGet() {
    return this.to('SearchWithGet');
  }

  /**
   * Grants permission to search resources with POST method
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html
   */
  public toSearchWithPost() {
    return this.to('SearchWithPost');
  }

  /**
   * Grants permission to start an asynchronous data transformation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartDataTransformationJob.html
   */
  public toStartDataTransformationJob() {
    return this.to('StartDataTransformationJob');
  }

  /**
   * Grants permission to begin a FHIR Bulk Delete Job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-bulk-delete.html
   */
  public toStartFHIRBulkDeleteJob() {
    return this.to('StartFHIRBulkDeleteJob');
  }

  /**
   * Grants permission to begin a FHIR Bulk Member Match Job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-bulk-member-match.html
   */
  public toStartFHIRBulkMemberMatchJob() {
    return this.to('StartFHIRBulkMemberMatchJob');
  }

  /**
   * Grants permission to begin a FHIR Export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRExportJob.html
   */
  public toStartFHIRExportJob() {
    return this.to('StartFHIRExportJob');
  }

  /**
   * Grants permission to begin a FHIR Export job with Get
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/export-datastore-rest.html
   */
  public toStartFHIRExportJobWithGet() {
    return this.to('StartFHIRExportJobWithGet');
  }

  /**
   * Grants permission to begin a FHIR Export job with Post
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/export-datastore-rest.html
   */
  public toStartFHIRExportJobWithPost() {
    return this.to('StartFHIRExportJobWithPost');
  }

  /**
   * Grants permission to begin a FHIR Import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRImportJob.html
   */
  public toStartFHIRImportJob() {
    return this.to('StartFHIRImportJob');
  }

  /**
   * Grants permission to submit a prior authorization Claim request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-submit.html
   */
  public toSubmitPreAuthClaim() {
    return this.to('SubmitPreAuthClaim');
  }

  /**
   * Grants permission to add tags to a datastore
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to perform a synchronous data transformation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/data-transformation-getting-started-sdk.html
   */
  public toTransformData() {
    return this.to('TransformData');
  }

  /**
   * Grants permission to translate a code from one value set to another using a ConceptMap resource with GET method
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-translate.html
   */
  public toTranslateConceptMapWithGet() {
    return this.to('TranslateConceptMapWithGet');
  }

  /**
   * Grants permission to translate a code from one value set to another using a ConceptMap resource with POST method
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-translate.html
   */
  public toTranslateConceptMapWithPost() {
    return this.to('TranslateConceptMapWithPost');
  }

  /**
   * Grants permission to remove tags associated with a datastore
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the draft version of a data transformation profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UpdateDataTransformationProfile.html
   */
  public toUpdateDataTransformationProfile() {
    return this.to('UpdateDataTransformationProfile');
  }

  /**
   * Grants permission to update the configuration of a datastore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UpdateFHIRDatastore.html
   */
  public toUpdateFHIRDatastore() {
    return this.to('UpdateFHIRDatastore');
  }

  /**
   * Grants permission to update a data transformation profile using the AI agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UpdateProfileWithAgent.html
   */
  public toUpdateProfileWithAgent() {
    return this.to('UpdateProfileWithAgent');
  }

  /**
   * Grants permission to update resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  /**
   * Grants permission to validate a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/reference-fhir-operations-validate.html
   */
  public toValidateResource() {
    return this.to('ValidateResource');
  }

  /**
   * Grants permission to validate source data against format specifications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/data-transformation-features.html
   */
  public toValidateSource() {
    return this.to('ValidateSource');
  }

  /**
   * Grants permission to read version of a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   */
  public toVersionReadResource() {
    return this.to('VersionReadResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelFHIRExportJobWithDelete',
      'ConfirmAttributionList',
      'CreateDataTransformationProfile',
      'CreateFHIRDatastore',
      'CreateResource',
      'DeleteDataTransformationProfile',
      'DeleteFHIRDatastore',
      'DeleteResource',
      'GenerateDocumentWithGet',
      'GenerateDocumentWithPost',
      'MemberAdd',
      'MemberMatch',
      'MemberRemove',
      'PatchResource',
      'ProcessBundle',
      'PublishDataTransformationProfile',
      'RetrieveAttributionStatus',
      'StartDataTransformationJob',
      'StartFHIRBulkDeleteJob',
      'StartFHIRBulkMemberMatchJob',
      'StartFHIRExportJob',
      'StartFHIRExportJobWithGet',
      'StartFHIRExportJobWithPost',
      'StartFHIRImportJob',
      'SubmitPreAuthClaim',
      'TagResource',
      'TransformData',
      'UntagResource',
      'UpdateDataTransformationProfile',
      'UpdateFHIRDatastore',
      'UpdateProfileWithAgent',
      'UpdateResource'
    ],
    Read: [
      'DescribeDataTransformationJob',
      'DescribeFHIRBulkDeleteJob',
      'DescribeFHIRBulkMemberMatchJob',
      'DescribeFHIRDatastore',
      'DescribeFHIRExportJob',
      'DescribeFHIRExportJobWithGet',
      'DescribeFHIRImportJob',
      'ExpandValueSetWithGet',
      'ExpandValueSetWithPost',
      'GetCapabilities',
      'GetDataTransformationProfile',
      'GetExportedFile',
      'GetHistoryByResourceId',
      'InquirePreAuthClaim',
      'LookupCodeSystemWithGet',
      'LookupCodeSystemWithPost',
      'QuestionnairePackage',
      'ReadResource',
      'SearchEverything',
      'SearchWithGet',
      'SearchWithPost',
      'TranslateConceptMapWithGet',
      'TranslateConceptMapWithPost',
      'ValidateResource',
      'ValidateSource',
      'VersionReadResource'
    ],
    List: [
      'ListDataTransformationJobs',
      'ListDataTransformationProfileVersions',
      'ListDataTransformationProfiles',
      'ListFHIRDatastores',
      'ListFHIRExportJobs',
      'ListFHIRImportJobs',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type dataTransformationProfile to the statement
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DataTransformationProfileSummary.html
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataTransformationProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:healthlake:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dataTransformationProfile/${ profileId }`);
  }

  /**
   * Adds a resource of type datastore to the statement
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DatastoreProperties.html
   *
   * @param datastoreId - Identifier for the datastoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatastore(datastoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:healthlake:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:datastore/fhir/${ datastoreId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDataTransformationProfile()
   * - .toCreateFHIRDatastore()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCancelFHIRExportJobWithDelete()
   * - .toConfirmAttributionList()
   * - .toCreateDataTransformationProfile()
   * - .toCreateFHIRDatastore()
   * - .toCreateResource()
   * - .toDeleteDataTransformationProfile()
   * - .toDeleteFHIRDatastore()
   * - .toDeleteResource()
   * - .toDescribeFHIRBulkDeleteJob()
   * - .toDescribeFHIRBulkMemberMatchJob()
   * - .toDescribeFHIRDatastore()
   * - .toDescribeFHIRExportJob()
   * - .toDescribeFHIRExportJobWithGet()
   * - .toDescribeFHIRImportJob()
   * - .toExpandValueSetWithGet()
   * - .toExpandValueSetWithPost()
   * - .toGenerateDocumentWithGet()
   * - .toGenerateDocumentWithPost()
   * - .toGetCapabilities()
   * - .toGetDataTransformationProfile()
   * - .toGetExportedFile()
   * - .toGetHistoryByResourceId()
   * - .toInquirePreAuthClaim()
   * - .toListDataTransformationProfileVersions()
   * - .toListFHIRExportJobs()
   * - .toListFHIRImportJobs()
   * - .toListTagsForResource()
   * - .toLookupCodeSystemWithGet()
   * - .toLookupCodeSystemWithPost()
   * - .toMemberAdd()
   * - .toMemberMatch()
   * - .toMemberRemove()
   * - .toPatchResource()
   * - .toProcessBundle()
   * - .toPublishDataTransformationProfile()
   * - .toQuestionnairePackage()
   * - .toReadResource()
   * - .toRetrieveAttributionStatus()
   * - .toSearchEverything()
   * - .toSearchWithGet()
   * - .toSearchWithPost()
   * - .toStartDataTransformationJob()
   * - .toStartFHIRBulkDeleteJob()
   * - .toStartFHIRBulkMemberMatchJob()
   * - .toStartFHIRExportJob()
   * - .toStartFHIRExportJobWithGet()
   * - .toStartFHIRExportJobWithPost()
   * - .toStartFHIRImportJob()
   * - .toSubmitPreAuthClaim()
   * - .toTagResource()
   * - .toTransformData()
   * - .toTranslateConceptMapWithGet()
   * - .toTranslateConceptMapWithPost()
   * - .toUntagResource()
   * - .toUpdateDataTransformationProfile()
   * - .toUpdateFHIRDatastore()
   * - .toUpdateProfileWithAgent()
   * - .toUpdateResource()
   * - .toValidateResource()
   * - .toVersionReadResource()
   *
   * Applies to resource types:
   * - dataTransformationProfile
   * - datastore
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDataTransformationProfile()
   * - .toCreateFHIRDatastore()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
