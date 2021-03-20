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
   * Grants permission to lists all FHIR datastores that are in the user’s account, regardless of datastore status
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
      "ReadResource",
      "SearchWithGet",
      "SearchWithPost"
    ],
    "List": [
      "ListFHIRDatastores"
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
   */
  public onDatastore(datastoreId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:healthlake:${Region}:${AccountId}:datastore/fhir/${DatastoreId}';
    arn = arn.replace('${DatastoreId}', datastoreId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
