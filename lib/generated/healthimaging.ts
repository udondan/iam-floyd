import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [medical-imaging](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthimaging.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class MedicalImaging extends PolicyStatement {
  public servicePrefix = 'medical-imaging';

  /**
   * Statement provider for service [medical-imaging](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthimaging.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to copy an image set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_CopyImageSet.html
   */
  public toCopyImageSet() {
    return this.to('CopyImageSet');
  }

  /**
   * Grants permission to create a data store to ingest imaging data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_CreateDatastore.html
   */
  public toCreateDatastore() {
    return this.to('CreateDatastore');
  }

  /**
   * Grants permission to delete a data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_DeleteDatastore.html
   */
  public toDeleteDatastore() {
    return this.to('DeleteDatastore');
  }

  /**
   * Grants permission to delete an image set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_DeleteImageSet.html
   */
  public toDeleteImageSet() {
    return this.to('DeleteImageSet');
  }

  /**
   * Grants permission to get an import job's properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDICOMImportJob.html
   */
  public toGetDICOMImportJob() {
    return this.to('GetDICOMImportJob');
  }

  /**
   * Grants permission to get data store properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDatastore.html
   */
  public toGetDatastore() {
    return this.to('GetDatastore');
  }

  /**
   * Grants permission to get image frame properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageFrame.html
   */
  public toGetImageFrame() {
    return this.to('GetImageFrame');
  }

  /**
   * Grants permission to get image set properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSet.html
   */
  public toGetImageSet() {
    return this.to('GetImageSet');
  }

  /**
   * Grants permission to get image set metadata properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSetMetadata.html
   */
  public toGetImageSetMetadata() {
    return this.to('GetImageSetMetadata');
  }

  /**
   * Grants permission to list import jobs for a data store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDICOMImportJobs.html
   */
  public toListDICOMImportJobs() {
    return this.to('ListDICOMImportJobs');
  }

  /**
   * Grants permission to list data stores
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDatastores.html
   */
  public toListDatastores() {
    return this.to('ListDatastores');
  }

  /**
   * Grants permission to list versions of an image set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_ListImageSetVersions.html
   */
  public toListImageSetVersions() {
    return this.to('ListImageSetVersions');
  }

  /**
   * Grants permission to list tags for a medical imaging resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to search image sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_SearchImageSets.html
   */
  public toSearchImageSets() {
    return this.to('SearchImageSets');
  }

  /**
   * Grants permission to start a DICOM import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_StartDICOMImportJob.html
   */
  public toStartDICOMImportJob() {
    return this.to('StartDICOMImportJob');
  }

  /**
   * Grants permission to add tags to a medical imaging resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a medical imaging resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update image set metadata properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_UpdateImageSetMetadata.html
   */
  public toUpdateImageSetMetadata() {
    return this.to('UpdateImageSetMetadata');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CopyImageSet',
      'CreateDatastore',
      'DeleteDatastore',
      'DeleteImageSet',
      'StartDICOMImportJob',
      'UpdateImageSetMetadata'
    ],
    Read: [
      'GetDICOMImportJob',
      'GetDatastore',
      'GetImageFrame',
      'GetImageSet',
      'GetImageSetMetadata',
      'SearchImageSets'
    ],
    List: [
      'ListDICOMImportJobs',
      'ListDatastores',
      'ListImageSetVersions',
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
   * https://docs.aws.amazon.com/healthimaging/latest/devguide/API_DatastoreProperties.html
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
    return this.on(`arn:${ partition || this.defaultPartition }:medical-imaging:${ region || this.defaultRegion }:${ account || this.defaultAccount }:datastore/${ datastoreId }`);
  }

  /**
   * Adds a resource of type imageset to the statement
   *
   * https://docs.aws.amazon.com/healthimaging/latest/devguide/API_ImageSetProperties.html
   *
   * @param datastoreId - Identifier for the datastoreId.
   * @param imageSetId - Identifier for the imageSetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageset(datastoreId: string, imageSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:medical-imaging:${ region || this.defaultRegion }:${ account || this.defaultAccount }:datastore/${ datastoreId }/imageset/${ imageSetId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDatastore()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * Applies to resource types:
   * - datastore
   * - imageset
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDatastore()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
