import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [sagemaker-geospatial](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakergeospatialcapabilities.html).
 *
 * @param options - Options for the statement
 */
export class SagemakerGeospatial extends PolicyStatement {
  public servicePrefix = 'sagemaker-geospatial';

  /**
   * Statement provider for service [sagemaker-geospatial](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakergeospatialcapabilities.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to the DeleteEarthObservationJob operation which deletes an existing earth observation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_DeleteEarthObservationJob.html
   */
  public toDeleteEarthObservationJob() {
    return this.to('DeleteEarthObservationJob');
  }

  /**
   * Grants permission to the DeleteVectorEnrichmentJob operation which deletes an existing vector enrichment job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_DeleteVectorEnrichmentJob.html
   */
  public toDeleteVectorEnrichmentJob() {
    return this.to('DeleteVectorEnrichmentJob');
  }

  /**
   * Grants permission to copy results of an earth observation job to an S3 location
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ExportEarthObservationJob.html
   */
  public toExportEarthObservationJob() {
    return this.to('ExportEarthObservationJob');
  }

  /**
   * Grants permission to copy results of an VectorEnrichmentJob to an S3 location
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ExportVectorEnrichmentJob.html
   */
  public toExportVectorEnrichmentJob() {
    return this.to('ExportVectorEnrichmentJob');
  }

  /**
   * Grants permission to return details about the earth observation job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetEarthObservationJob.html
   */
  public toGetEarthObservationJob() {
    return this.to('GetEarthObservationJob');
  }

  /**
   * Grants permission to return details about the raster data collection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetRasterDataCollection.html
   */
  public toGetRasterDataCollection() {
    return this.to('GetRasterDataCollection');
  }

  /**
   * Grants permission to get the tile of an earth observation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetTile.html
   */
  public toGetTile() {
    return this.to('GetTile');
  }

  /**
   * Grants permission to return details about the vector enrichment job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetVectorEnrichmentJob.html
   */
  public toGetVectorEnrichmentJob() {
    return this.to('GetVectorEnrichmentJob');
  }

  /**
   * Grants permission to return an array of earth observation jobs associated with the current account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListEarthObservationJobs.html
   */
  public toListEarthObservationJobs() {
    return this.to('ListEarthObservationJobs');
  }

  /**
   * Grants permission to return an array of aster data collections associated with the given model name
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListRasterDataCollections.html
   */
  public toListRasterDataCollections() {
    return this.to('ListRasterDataCollections');
  }

  /**
   * Grants permission to lists tag for an SageMaker Geospatial resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to return an array of vector enrichment jobs associated with the current account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListVectorEnrichmentJobs.html
   */
  public toListVectorEnrichmentJobs() {
    return this.to('ListVectorEnrichmentJobs');
  }

  /**
   * Grants permission to query raster data collections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_SearchRasterDataCollection.html
   */
  public toSearchRasterDataCollection() {
    return this.to('SearchRasterDataCollection');
  }

  /**
   * Grants permission to the StartEarthObservationJob operation which starts a new earth observation job to your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StartEarthObservationJob.html
   */
  public toStartEarthObservationJob() {
    return this.to('StartEarthObservationJob');
  }

  /**
   * Grants permission to the StartVectorEnrichmentJob operation which starts a new vector enrichment job to your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StartVectorEnrichmentJob.html
   */
  public toStartVectorEnrichmentJob() {
    return this.to('StartVectorEnrichmentJob');
  }

  /**
   * Grants permission to the StopEarthObservationJob operation which stops an existing earth observation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StopEarthObservationJob.html
   */
  public toStopEarthObservationJob() {
    return this.to('StopEarthObservationJob');
  }

  /**
   * Grants permission to the StopVectorEnrichmentJob operation which stops an existing vector enrichment job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StopVectorEnrichmentJob.html
   */
  public toStopVectorEnrichmentJob() {
    return this.to('StopVectorEnrichmentJob');
  }

  /**
   * Grants permission to tag an SageMaker Geospatial resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an SageMaker Geospatial resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteEarthObservationJob',
      'DeleteVectorEnrichmentJob',
      'ExportEarthObservationJob',
      'ExportVectorEnrichmentJob',
      'StartEarthObservationJob',
      'StartVectorEnrichmentJob',
      'StopEarthObservationJob',
      'StopVectorEnrichmentJob'
    ],
    Read: [
      'GetEarthObservationJob',
      'GetRasterDataCollection',
      'GetTile',
      'GetVectorEnrichmentJob',
      'SearchRasterDataCollection'
    ],
    List: [
      'ListEarthObservationJobs',
      'ListRasterDataCollections',
      'ListTagsForResource',
      'ListVectorEnrichmentJobs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type EarthObservationJob to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/geospatial-eoj.html
   *
   * @param jobID - Identifier for the jobID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEarthObservationJob(jobID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:sagemaker-geospatial:${ region || '*' }:${ account || '*' }:earth-observation-job/${ jobID }`);
  }

  /**
   * Adds a resource of type RasterDataCollection to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/geospatial-rdc.html
   *
   * @param collectionID - Identifier for the collectionID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRasterDataCollection(collectionID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:sagemaker-geospatial:${ region || '*' }:${ account || '*' }:raster-data-collection/${ collectionID }`);
  }

  /**
   * Adds a resource of type VectorEnrichmentJob to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/geospatial-vej.html
   *
   * @param jobID - Identifier for the jobID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVectorEnrichmentJob(jobID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:sagemaker-geospatial:${ region || '*' }:${ account || '*' }:vector-enrichment-job/${ jobID }`);
  }
}
