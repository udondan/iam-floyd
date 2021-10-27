import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhealthlake.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Healthlake extends PolicyStatement {
  public servicePrefix = 'healthlake';

  /**
   * Statement provider for service [healthlake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhealthlake.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
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
   * Grants permission to list all FHIR datastores that are in the user’s account, regardless of datastore status
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
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateFHIRDatastore",
      "CreateResource",
      "DeleteFHIRDatastore",
      "DeleteResource",
      "StartFHIRExportJob",
      "StartFHIRImportJob",
      "UpdateResource"
    ],
    "Read": [
      "DescribeFHIRDatastore",
      "DescribeFHIRExportJob",
      "DescribeFHIRImportJob",
      "GetCapabilities",
      "ListTagsForResource",
      "ReadResource",
      "SearchWithGet",
      "SearchWithPost"
    ],
    "List": [
      "ListFHIRDatastores",
      "ListFHIRExportJobs",
      "ListFHIRImportJobs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type datastore to the statement
   *
   * https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DatastoreProperties.html
   *
   * @param datastoreId - Identifier for the datastoreId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatastore(datastoreId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:healthlake:${ region || '*' }:${ accountId || '*' }:datastore/fhir/${ datastoreId }`);
  }
}
