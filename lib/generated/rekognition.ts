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
   * Compares a face in source input image with each face detected in the target input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html
   */
  public toCompareFaces() {
    return this.to('CompareFaces');
  }

  /**
   * Creates a collection in an AWS region. You can then add faces to the collection using the IndexFaces API.
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
   * Creates a new Amazon Rekognition Custom Labels project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Creates a new version of a model and begins training.
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
   * Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.
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
   * Deletes the specified collection. Note that this operation removes all faces in the collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html
   */
  public toDeleteCollection() {
    return this.to('DeleteCollection');
  }

  /**
   * Deletes faces from a collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html
   */
  public toDeleteFaces() {
    return this.to('DeleteFaces');
  }

  /**
   * Deletes a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Deletes a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html
   */
  public toDeleteProjectVersion() {
    return this.to('DeleteProjectVersion');
  }

  /**
   * Deletes the stream processor identified by Name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html
   */
  public toDeleteStreamProcessor() {
    return this.to('DeleteStreamProcessor');
  }

  /**
   * Describes the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html
   */
  public toDescribeCollection() {
    return this.to('DescribeCollection');
  }

  /**
   * Lists and describes the model versions in an Amazon Rekognition Custom Labels project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html
   */
  public toDescribeProjectVersions() {
    return this.to('DescribeProjectVersions');
  }

  /**
   * Lists and gets information about your Amazon Rekognition Custom Labels projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html
   */
  public toDescribeProjects() {
    return this.to('DescribeProjects');
  }

  /**
   * Provides information about a stream processor created by CreateStreamProcessor.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessorh.html
   */
  public toDescribeStreamProcessor() {
    return this.to('DescribeStreamProcessor');
  }

  /**
   * Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html
   */
  public toDetectCustomLabels() {
    return this.to('DetectCustomLabels');
  }

  /**
   * Detects human faces within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html
   */
  public toDetectFaces() {
    return this.to('DetectFaces');
  }

  /**
   * Detects instances of real-world labels within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html
   */
  public toDetectLabels() {
    return this.to('DetectLabels');
  }

  /**
   * Detects moderation labels within input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html
   */
  public toDetectModerationLabels() {
    return this.to('DetectModerationLabels');
  }

  /**
   * Detects Protective Equipment in the input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectProtectiveEquipment.html
   */
  public toDetectProtectiveEquipment() {
    return this.to('DetectProtectiveEquipment');
  }

  /**
   * Detects text in the input image and converts it into machine-readable text.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html
   */
  public toDetectText() {
    return this.to('DetectText');
  }

  /**
   * Gets the name and additional information about a celebrity based on his or her Rekognition ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html
   */
  public toGetCelebrityInfo() {
    return this.to('GetCelebrityInfo');
  }

  /**
   * Gets the celebrity recognition results for a Rekognition Video analysis started by StartCelebrityRecognition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html
   */
  public toGetCelebrityRecognition() {
    return this.to('GetCelebrityRecognition');
  }

  /**
   * Gets the content moderation analysis results for a Rekognition Video analysis started by StartContentModeration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html
   */
  public toGetContentModeration() {
    return this.to('GetContentModeration');
  }

  /**
   * Gets face detection results for a Rekognition Video analysis started by StartFaceDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html
   */
  public toGetFaceDetection() {
    return this.to('GetFaceDetection');
  }

  /**
   * Gets the face search results for Rekognition Video face search started by StartFaceSearch.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html
   */
  public toGetFaceSearch() {
    return this.to('GetFaceSearch');
  }

  /**
   * Gets the label detection results of a Rekognition Video analysis started by StartLabelDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html
   */
  public toGetLabelDetection() {
    return this.to('GetLabelDetection');
  }

  /**
   * Gets information about people detected within a video.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html
   */
  public toGetPersonTracking() {
    return this.to('GetPersonTracking');
  }

  /**
   * Gets segment detection results for a Rekognition Video analysis started by StartSegmentDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html
   */
  public toGetSegmentDetection() {
    return this.to('GetSegmentDetection');
  }

  /**
   * Gets text detection results for a Rekognition Video analysis started by StartTextDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html
   */
  public toGetTextDetection() {
    return this.to('GetTextDetection');
  }

  /**
   * Detects faces in the input image and adds them to the specified collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html
   */
  public toIndexFaces() {
    return this.to('IndexFaces');
  }

  /**
   * Returns a list of collection IDs in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html
   */
  public toListCollections() {
    return this.to('ListCollections');
  }

  /**
   * Returns metadata for faces in the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html
   */
  public toListFaces() {
    return this.to('ListFaces');
  }

  /**
   * Gets a list of stream processors that you have created with CreateStreamProcessor.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html
   */
  public toListStreamProcessors() {
    return this.to('ListStreamProcessors');
  }

  /**
   * Returns a list of tags associated with a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns an array of celebrities recognized in the input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html
   */
  public toRecognizeCelebrities() {
    return this.to('RecognizeCelebrities');
  }

  /**
   * For a given input face ID, searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html
   */
  public toSearchFaces() {
    return this.to('SearchFaces');
  }

  /**
   * For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html
   */
  public toSearchFacesByImage() {
    return this.to('SearchFacesByImage');
  }

  /**
   * Starts asynchronous recognition of celebrities in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html
   */
  public toStartCelebrityRecognition() {
    return this.to('StartCelebrityRecognition');
  }

  /**
   * Starts asynchronous detection of explicit or suggestive adult content in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html
   */
  public toStartContentModeration() {
    return this.to('StartContentModeration');
  }

  /**
   * Starts asynchronous detection of faces in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html
   */
  public toStartFaceDetection() {
    return this.to('StartFaceDetection');
  }

  /**
   * Starts the asynchronous search for faces in a collection that match the faces of persons detected in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html
   */
  public toStartFaceSearch() {
    return this.to('StartFaceSearch');
  }

  /**
   * Starts asynchronous detection of labels in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html
   */
  public toStartLabelDetection() {
    return this.to('StartLabelDetection');
  }

  /**
   * Starts the asynchronous tracking of persons in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html
   */
  public toStartPersonTracking() {
    return this.to('StartPersonTracking');
  }

  /**
   * Starts the deployment of a model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html
   */
  public toStartProjectVersion() {
    return this.to('StartProjectVersion');
  }

  /**
   * Starts asynchronous detection of segments in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html
   */
  public toStartSegmentDetection() {
    return this.to('StartSegmentDetection');
  }

  /**
   * Starts processing a stream processor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html
   */
  public toStartStreamProcessor() {
    return this.to('StartStreamProcessor');
  }

  /**
   * Starts asynchronous detection of text in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html
   */
  public toStartTextDetection() {
    return this.to('StartTextDetection');
  }

  /**
   * Stops a deployed model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html
   */
  public toStopProjectVersion() {
    return this.to('StopProjectVersion');
  }

  /**
   * Stops a running stream processor that was created by CreateStreamProcessor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html
   */
  public toStopStreamProcessor() {
    return this.to('StopStreamProcessor');
  }

  /**
   * Adds one or more tags to a resource.
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
   * Removes one or more tags from a resource.
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

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CompareFaces',
      'DescribeCollection',
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
      'ListFaces',
      'ListTagsForResource',
      'RecognizeCelebrities',
      'SearchFaces',
      'SearchFacesByImage'
    ],
    Write: [
      'CreateCollection',
      'CreateProject',
      'CreateProjectVersion',
      'CreateStreamProcessor',
      'DeleteCollection',
      'DeleteFaces',
      'DeleteProject',
      'DeleteProjectVersion',
      'DeleteStreamProcessor',
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
      'StopStreamProcessor'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rekognition:${ region || '*' }:${ account || '*' }:collection/${ collectionId }`);
  }

  /**
   * Adds a resource of type streamprocessor to the statement
   *
   * @param streamprocessorId - Identifier for the streamprocessorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStreamprocessor(streamprocessorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rekognition:${ region || '*' }:${ account || '*' }:streamprocessor/${ streamprocessorId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rekognition:${ region || '*' }:${ account || '*' }:project/${ projectName }/${ creationTimestamp }`);
  }

  /**
   * Adds a resource of type projectversion to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param versionName - Identifier for the versionName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProjectversion(projectName: string, versionName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rekognition:${ region || '*' }:${ account || '*' }:project/${ projectName }/version/${ versionName }/${ creationTimestamp }`);
  }
}
