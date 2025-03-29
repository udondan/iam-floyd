import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthlake.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Healthlake extends PolicyStatement {
  public servicePrefix = 'healthlake';

  /**
   * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthlake.html).
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
   * Grants permission to create a datastore that can ingest and export FHIR data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
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
   * Grants permission to add tags to a datastore
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags associated with a datastore
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
      'CreateFHIRDatastore',
      'CreateResource',
      'DeleteFHIRDatastore',
      'DeleteResource',
      'ProcessBundle',
      'StartFHIRExportJob',
      'StartFHIRExportJobWithGet',
      'StartFHIRExportJobWithPost',
      'StartFHIRImportJob',
      'UpdateResource'
    ],
    Read: [
      'DescribeFHIRDatastore',
      'DescribeFHIRExportJob',
      'DescribeFHIRExportJobWithGet',
      'DescribeFHIRImportJob',
      'GetCapabilities',
      'GetExportedFile',
      'GetHistoryByResourceId',
      'ReadResource',
      'SearchEverything',
      'SearchWithGet',
      'SearchWithPost',
      'VersionReadResource'
    ],
    List: [
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
   * - .toTagResource()
   *
   * Applies to resource types:
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
