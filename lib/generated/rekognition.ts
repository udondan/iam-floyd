import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [rekognition](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rekognition extends PolicyStatement {
  public servicePrefix = 'rekognition';

  /**
   * Statement provider for service [rekognition](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to compare faces in the source input image with each face detected in the target input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html
   */
  public toCompareFaces() {
    return this.to('CompareFaces');
  }

  /**
   * Grants permission to create a collection in an AWS Region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html
   */
  public toCreateCollection() {
    return this.to('CreateCollection');
  }

  /**
   * Grants permission to create a new Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create an Amazon Rekognition Custom Labels project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to begin training a new version of a model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   */
  public toCreateProjectVersion() {
    return this.to('CreateProjectVersion');
  }

  /**
   * Grants permission to create an Amazon Rekognition stream processor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html
   */
  public toCreateStreamProcessor() {
    return this.to('CreateStreamProcessor');
  }

  /**
   * Grants permission to delete the specified collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html
   */
  public toDeleteCollection() {
    return this.to('DeleteCollection');
  }

  /**
   * Grants permission to delete an existing Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete faces from a collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html
   */
  public toDeleteFaces() {
    return this.to('DeleteFaces');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html
   */
  public toDeleteProjectVersion() {
    return this.to('DeleteProjectVersion');
  }

  /**
   * Grants permission to delete the specified stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html
   */
  public toDeleteStreamProcessor() {
    return this.to('DeleteStreamProcessor');
  }

  /**
   * Grants permission to read details about a collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html
   */
  public toDescribeCollection() {
    return this.to('DescribeCollection');
  }

  /**
   * Grants permission to describe an Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to list the versions of a model in an Amazon Rekognition Custom Labels project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html
   */
  public toDescribeProjectVersions() {
    return this.to('DescribeProjectVersions');
  }

  /**
   * Grants permission to list Amazon Rekognition Custom Labels projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html
   */
  public toDescribeProjects() {
    return this.to('DescribeProjects');
  }

  /**
   * Grants permission to get information about the specified stream processor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessor.html
   */
  public toDescribeStreamProcessor() {
    return this.to('DescribeStreamProcessor');
  }

  /**
   * Grants permission to detect custom labels in a supplied image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html
   */
  public toDetectCustomLabels() {
    return this.to('DetectCustomLabels');
  }

  /**
   * Grants permission to detect human faces within an image provided as input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html
   */
  public toDetectFaces() {
    return this.to('DetectFaces');
  }

  /**
   * Grants permission to detect instances of real-world labels within an image provided as input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html
   */
  public toDetectLabels() {
    return this.to('DetectLabels');
  }

  /**
   * Grants permission to detect moderation labels within the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html
   */
  public toDetectModerationLabels() {
    return this.to('DetectModerationLabels');
  }

  /**
   * Grants permission to detect Personal Protective Equipment in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectProtectiveEquipment.html
   */
  public toDetectProtectiveEquipment() {
    return this.to('DetectProtectiveEquipment');
  }

  /**
   * Grants permission to detect text in the input image and convert it into machine-readable text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html
   */
  public toDetectText() {
    return this.to('DetectText');
  }

  /**
   * Grants permission to distribute the entries in a training dataset across the training dataset and the test dataset for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DistributeDatasetEntries.html
   */
  public toDistributeDatasetEntries() {
    return this.to('DistributeDatasetEntries');
  }

  /**
   * Grants permission to read the name, and additional information, of a celebrity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html
   */
  public toGetCelebrityInfo() {
    return this.to('GetCelebrityInfo');
  }

  /**
   * Grants permission to read the celebrity recognition results found in a stored video by an asynchronous celebrity recognition job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html
   */
  public toGetCelebrityRecognition() {
    return this.to('GetCelebrityRecognition');
  }

  /**
   * Grants permission to read the content moderation analysis results found in a stored video by an asynchronous content moderation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html
   */
  public toGetContentModeration() {
    return this.to('GetContentModeration');
  }

  /**
   * Grants permission to read the faces detection results found in a stored video by an asynchronous face detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html
   */
  public toGetFaceDetection() {
    return this.to('GetFaceDetection');
  }

  /**
   * Grants permission to read the matching collection faces found in a stored video by an asynchronous face search job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html
   */
  public toGetFaceSearch() {
    return this.to('GetFaceSearch');
  }

  /**
   * Grants permission to read the label detected resuls found in a stored video by an asynchronous label detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html
   */
  public toGetLabelDetection() {
    return this.to('GetLabelDetection');
  }

  /**
   * Grants permission to read the list of persons detected in a stored video by an asynchronous person tracking job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html
   */
  public toGetPersonTracking() {
    return this.to('GetPersonTracking');
  }

  /**
   * Grants permission to get the vdeo segments found in a stored video by an asynchronous segment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html
   */
  public toGetSegmentDetection() {
    return this.to('GetSegmentDetection');
  }

  /**
   * Grants permission to get the text found in a stored video by an asynchronous text detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html
   */
  public toGetTextDetection() {
    return this.to('GetTextDetection');
  }

  /**
   * Grants permission to update an existing collection with faces detected in the input image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html
   */
  public toIndexFaces() {
    return this.to('IndexFaces');
  }

  /**
   * Grants permission to read the collection Id's in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html
   */
  public toListCollections() {
    return this.to('ListCollections');
  }

  /**
   * Grants permission to list the dataset entries in an existing Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListDatasetEntries.html
   */
  public toListDatasetEntries() {
    return this.to('ListDatasetEntries');
  }

  /**
   * Grants permission to list the labels in a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListDatasetLabels.html
   */
  public toListDatasetLabels() {
    return this.to('ListDatasetLabels');
  }

  /**
   * Grants permission to read metadata for faces in the specificed collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html
   */
  public toListFaces() {
    return this.to('ListFaces');
  }

  /**
   * Grants permission to get a list of your stream processors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html
   */
  public toListStreamProcessors() {
    return this.to('ListStreamProcessors');
  }

  /**
   * Grants permission to return a list of tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to detect celebrities in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html
   */
  public toRecognizeCelebrities() {
    return this.to('RecognizeCelebrities');
  }

  /**
   * Grants permission to search the specificed collection for the supplied face ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html
   */
  public toSearchFaces() {
    return this.to('SearchFaces');
  }

  /**
   * Grants permission to search the specificed collection for the largest face in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html
   */
  public toSearchFacesByImage() {
    return this.to('SearchFacesByImage');
  }

  /**
   * Grants permission to start the asynchronous recognition of celebrities in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html
   */
  public toStartCelebrityRecognition() {
    return this.to('StartCelebrityRecognition');
  }

  /**
   * Grants permission to start asynchronous detection of explicit or suggestive adult content in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html
   */
  public toStartContentModeration() {
    return this.to('StartContentModeration');
  }

  /**
   * Grants permission to start asynchronous detection of faces in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html
   */
  public toStartFaceDetection() {
    return this.to('StartFaceDetection');
  }

  /**
   * Grants permission to start an asynchronous search for faces in a collection that match the faces of persons detected in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html
   */
  public toStartFaceSearch() {
    return this.to('StartFaceSearch');
  }

  /**
   * Grants permission to start asynchronous detection of labels in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html
   */
  public toStartLabelDetection() {
    return this.to('StartLabelDetection');
  }

  /**
   * Grants permission to start the asynchronous tracking of persons in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html
   */
  public toStartPersonTracking() {
    return this.to('StartPersonTracking');
  }

  /**
   * Grants permission to start running a model version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html
   */
  public toStartProjectVersion() {
    return this.to('StartProjectVersion');
  }

  /**
   * Grants permission to start the asynchronous detection of segments in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html
   */
  public toStartSegmentDetection() {
    return this.to('StartSegmentDetection');
  }

  /**
   * Grants permission to start running a stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html
   */
  public toStartStreamProcessor() {
    return this.to('StartStreamProcessor');
  }

  /**
   * Grants permission to start the asynchronous detection of text in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html
   */
  public toStartTextDetection() {
    return this.to('StartTextDetection');
  }

  /**
   * Grants permission to stop a running model version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html
   */
  public toStopProjectVersion() {
    return this.to('StopProjectVersion');
  }

  /**
   * Grants permission to stop a running stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html
   */
  public toStopStreamProcessor() {
    return this.to('StopStreamProcessor');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to add or update one or more JSON Lines (entries) in a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_UpdateDatasetEntries.html
   */
  public toUpdateDatasetEntries() {
    return this.to('UpdateDatasetEntries');
  }

  /**
   * Grants permission to modify properties for a stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_UpdateStreamProcessor.html
   */
  public toUpdateStreamProcessor() {
    return this.to('UpdateStreamProcessor');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CompareFaces',
      'DescribeCollection',
      'DescribeDataset',
      'DescribeProjectVersions',
      'DescribeProjects',
      'DescribeStreamProcessor',
      'DetectCustomLabels',
      'DetectFaces',
      'DetectLabels',
      'DetectModerationLabels',
      'DetectProtectiveEquipment',
      'DetectText',
      'GetCelebrityInfo',
      'GetCelebrityRecognition',
      'GetContentModeration',
      'GetFaceDetection',
      'GetFaceSearch',
      'GetLabelDetection',
      'GetPersonTracking',
      'GetSegmentDetection',
      'GetTextDetection',
      'ListCollections',
      'ListDatasetEntries',
      'ListDatasetLabels',
      'ListFaces',
      'ListTagsForResource',
      'RecognizeCelebrities',
      'SearchFaces',
      'SearchFacesByImage'
    ],
    Write: [
      'CreateCollection',
      'CreateDataset',
      'CreateProject',
      'CreateProjectVersion',
      'CreateStreamProcessor',
      'DeleteCollection',
      'DeleteDataset',
      'DeleteFaces',
      'DeleteProject',
      'DeleteProjectVersion',
      'DeleteStreamProcessor',
      'DistributeDatasetEntries',
      'IndexFaces',
      'StartCelebrityRecognition',
      'StartContentModeration',
      'StartFaceDetection',
      'StartFaceSearch',
      'StartLabelDetection',
      'StartPersonTracking',
      'StartProjectVersion',
      'StartSegmentDetection',
      'StartStreamProcessor',
      'StartTextDetection',
      'StopProjectVersion',
      'StopStreamProcessor',
      'UpdateDatasetEntries',
      'UpdateStreamProcessor'
    ],
    List: [
      'ListStreamProcessors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type collection to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/howitworks-collection.html
   *
   * @param collectionId - Identifier for the collectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rekognition.defaultPartition }:rekognition:${ region || '*' }:${ account || '*' }:collection/${ collectionId }`);
  }

  /**
   * Adds a resource of type streamprocessor to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/using-rekognition-video-stream-processor.html
   *
   * @param streamprocessorId - Identifier for the streamprocessorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamprocessor(streamprocessorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rekognition.defaultPartition }:rekognition:${ region || '*' }:${ account || '*' }:streamprocessor/${ streamprocessorId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/cp-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProject(projectName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rekognition.defaultPartition }:rekognition:${ region || '*' }:${ account || '*' }:project/${ projectName }/${ creationTimestamp }`);
  }

  /**
   * Adds a resource of type projectversion to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   *
   * @param projectName - Identifier for the projectName.
   * @param versionName - Identifier for the versionName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProjectversion(projectName: string, versionName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rekognition.defaultPartition }:rekognition:${ region || '*' }:${ account || '*' }:project/${ projectName }/version/${ versionName }/${ creationTimestamp }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/cd-create-dataset.html
   *
   * @param projectName - Identifier for the projectName.
   * @param datasetType - Identifier for the datasetType.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataset(projectName: string, datasetType: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Rekognition.defaultPartition }:rekognition:${ region || '*' }:${ account || '*' }:project/${ projectName }/dataset/${ datasetType }/${ creationTimestamp }`);
  }
}
