import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('rekognition:CompareFaces');
    return this;
  }

  /**
   * Creates a collection in an AWS region. You can then add faces to the collection using the IndexFaces API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html
   */
  public toCreateCollection() {
    this.to('rekognition:CreateCollection');
    return this;
  }

  /**
   * Creates a new Amazon Rekognition Custom Labels project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    this.to('rekognition:CreateProject');
    return this;
  }

  /**
   * Creates a new version of a model and begins training.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   */
  public toCreateProjectVersion() {
    this.to('rekognition:CreateProjectVersion');
    return this;
  }

  /**
   * Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html
   */
  public toCreateStreamProcessor() {
    this.to('rekognition:CreateStreamProcessor');
    return this;
  }

  /**
   * Deletes the specified collection. Note that this operation removes all faces in the collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html
   */
  public toDeleteCollection() {
    this.to('rekognition:DeleteCollection');
    return this;
  }

  /**
   * Deletes faces from a collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html
   */
  public toDeleteFaces() {
    this.to('rekognition:DeleteFaces');
    return this;
  }

  /**
   * Deletes a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('rekognition:DeleteProject');
    return this;
  }

  /**
   * Deletes a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html
   */
  public toDeleteProjectVersion() {
    this.to('rekognition:DeleteProjectVersion');
    return this;
  }

  /**
   * Deletes the stream processor identified by Name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html
   */
  public toDeleteStreamProcessor() {
    this.to('rekognition:DeleteStreamProcessor');
    return this;
  }

  /**
   * Describes the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html
   */
  public toDescribeCollection() {
    this.to('rekognition:DescribeCollection');
    return this;
  }

  /**
   * Lists and describes the model versions in an Amazon Rekognition Custom Labels project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html
   */
  public toDescribeProjectVersions() {
    this.to('rekognition:DescribeProjectVersions');
    return this;
  }

  /**
   * Lists and gets information about your Amazon Rekognition Custom Labels projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html
   */
  public toDescribeProjects() {
    this.to('rekognition:DescribeProjects');
    return this;
  }

  /**
   * Provides information about a stream processor created by CreateStreamProcessor.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessorh.html
   */
  public toDescribeStreamProcessor() {
    this.to('rekognition:DescribeStreamProcessor');
    return this;
  }

  /**
   * Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html
   */
  public toDetectCustomLabels() {
    this.to('rekognition:DetectCustomLabels');
    return this;
  }

  /**
   * Detects human faces within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html
   */
  public toDetectFaces() {
    this.to('rekognition:DetectFaces');
    return this;
  }

  /**
   * Detects instances of real-world labels within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html
   */
  public toDetectLabels() {
    this.to('rekognition:DetectLabels');
    return this;
  }

  /**
   * Detects moderation labels within input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html
   */
  public toDetectModerationLabels() {
    this.to('rekognition:DetectModerationLabels');
    return this;
  }

  /**
   * Detects Protective Equipment in the input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectProtectiveEquipment.html
   */
  public toDetectProtectiveEquipment() {
    this.to('rekognition:DetectProtectiveEquipment');
    return this;
  }

  /**
   * Detects text in the input image and converts it into machine-readable text.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html
   */
  public toDetectText() {
    this.to('rekognition:DetectText');
    return this;
  }

  /**
   * Gets the name and additional information about a celebrity based on his or her Rekognition ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html
   */
  public toGetCelebrityInfo() {
    this.to('rekognition:GetCelebrityInfo');
    return this;
  }

  /**
   * Gets the celebrity recognition results for a Rekognition Video analysis started by StartCelebrityRecognition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html
   */
  public toGetCelebrityRecognition() {
    this.to('rekognition:GetCelebrityRecognition');
    return this;
  }

  /**
   * Gets the content moderation analysis results for a Rekognition Video analysis started by StartContentModeration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html
   */
  public toGetContentModeration() {
    this.to('rekognition:GetContentModeration');
    return this;
  }

  /**
   * Gets face detection results for a Rekognition Video analysis started by StartFaceDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html
   */
  public toGetFaceDetection() {
    this.to('rekognition:GetFaceDetection');
    return this;
  }

  /**
   * Gets the face search results for Rekognition Video face search started by StartFaceSearch.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html
   */
  public toGetFaceSearch() {
    this.to('rekognition:GetFaceSearch');
    return this;
  }

  /**
   * Gets the label detection results of a Rekognition Video analysis started by StartLabelDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html
   */
  public toGetLabelDetection() {
    this.to('rekognition:GetLabelDetection');
    return this;
  }

  /**
   * Gets information about people detected within a video.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html
   */
  public toGetPersonTracking() {
    this.to('rekognition:GetPersonTracking');
    return this;
  }

  /**
   * Gets segment detection results for a Rekognition Video analysis started by StartSegmentDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html
   */
  public toGetSegmentDetection() {
    this.to('rekognition:GetSegmentDetection');
    return this;
  }

  /**
   * Gets text detection results for a Rekognition Video analysis started by StartTextDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html
   */
  public toGetTextDetection() {
    this.to('rekognition:GetTextDetection');
    return this;
  }

  /**
   * Detects faces in the input image and adds them to the specified collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html
   */
  public toIndexFaces() {
    this.to('rekognition:IndexFaces');
    return this;
  }

  /**
   * Returns a list of collection IDs in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html
   */
  public toListCollections() {
    this.to('rekognition:ListCollections');
    return this;
  }

  /**
   * Returns metadata for faces in the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html
   */
  public toListFaces() {
    this.to('rekognition:ListFaces');
    return this;
  }

  /**
   * Gets a list of stream processors that you have created with CreateStreamProcessor.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html
   */
  public toListStreamProcessors() {
    this.to('rekognition:ListStreamProcessors');
    return this;
  }

  /**
   * Returns an array of celebrities recognized in the input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html
   */
  public toRecognizeCelebrities() {
    this.to('rekognition:RecognizeCelebrities');
    return this;
  }

  /**
   * For a given input face ID, searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html
   */
  public toSearchFaces() {
    this.to('rekognition:SearchFaces');
    return this;
  }

  /**
   * For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html
   */
  public toSearchFacesByImage() {
    this.to('rekognition:SearchFacesByImage');
    return this;
  }

  /**
   * Starts asynchronous recognition of celebrities in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html
   */
  public toStartCelebrityRecognition() {
    this.to('rekognition:StartCelebrityRecognition');
    return this;
  }

  /**
   * Starts asynchronous detection of explicit or suggestive adult content in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html
   */
  public toStartContentModeration() {
    this.to('rekognition:StartContentModeration');
    return this;
  }

  /**
   * Starts asynchronous detection of faces in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html
   */
  public toStartFaceDetection() {
    this.to('rekognition:StartFaceDetection');
    return this;
  }

  /**
   * Starts the asynchronous search for faces in a collection that match the faces of persons detected in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html
   */
  public toStartFaceSearch() {
    this.to('rekognition:StartFaceSearch');
    return this;
  }

  /**
   * Starts asynchronous detection of labels in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html
   */
  public toStartLabelDetection() {
    this.to('rekognition:StartLabelDetection');
    return this;
  }

  /**
   * Starts the asynchronous tracking of persons in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html
   */
  public toStartPersonTracking() {
    this.to('rekognition:StartPersonTracking');
    return this;
  }

  /**
   * Starts the deployment of a model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html
   */
  public toStartProjectVersion() {
    this.to('rekognition:StartProjectVersion');
    return this;
  }

  /**
   * Starts asynchronous detection of segments in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html
   */
  public toStartSegmentDetection() {
    this.to('rekognition:StartSegmentDetection');
    return this;
  }

  /**
   * Starts processing a stream processor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html
   */
  public toStartStreamProcessor() {
    this.to('rekognition:StartStreamProcessor');
    return this;
  }

  /**
   * Starts asynchronous detection of text in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html
   */
  public toStartTextDetection() {
    this.to('rekognition:StartTextDetection');
    return this;
  }

  /**
   * Stops a deployed model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html
   */
  public toStopProjectVersion() {
    this.to('rekognition:StopProjectVersion');
    return this;
  }

  /**
   * Stops a running stream processor that was created by CreateStreamProcessor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html
   */
  public toStopStreamProcessor() {
    this.to('rekognition:StopStreamProcessor');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "CompareFaces",
      "DescribeCollection",
      "DescribeProjectVersions",
      "DescribeProjects",
      "DescribeStreamProcessor",
      "DetectCustomLabels",
      "DetectFaces",
      "DetectLabels",
      "DetectModerationLabels",
      "DetectProtectiveEquipment",
      "DetectText",
      "GetCelebrityInfo",
      "GetCelebrityRecognition",
      "GetContentModeration",
      "GetFaceDetection",
      "GetFaceSearch",
      "GetLabelDetection",
      "GetPersonTracking",
      "GetSegmentDetection",
      "GetTextDetection",
      "ListCollections",
      "ListFaces",
      "RecognizeCelebrities",
      "SearchFaces",
      "SearchFacesByImage"
    ],
    "Write": [
      "CreateCollection",
      "CreateProject",
      "CreateProjectVersion",
      "CreateStreamProcessor",
      "DeleteCollection",
      "DeleteFaces",
      "DeleteProject",
      "DeleteProjectVersion",
      "DeleteStreamProcessor",
      "IndexFaces",
      "StartCelebrityRecognition",
      "StartContentModeration",
      "StartFaceDetection",
      "StartFaceSearch",
      "StartLabelDetection",
      "StartPersonTracking",
      "StartProjectVersion",
      "StartSegmentDetection",
      "StartStreamProcessor",
      "StartTextDetection",
      "StopProjectVersion",
      "StopStreamProcessor"
    ],
    "List": [
      "ListStreamProcessors"
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
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:collection/${CollectionId}';
    arn = arn.replace('${CollectionId}', collectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}';
    arn = arn.replace('${StreamprocessorId}', streamprocessorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/${CreationTimestamp}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${CreationTimestamp}', creationTimestamp);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/version/${VersionName}/${CreationTimestamp}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${VersionName}', versionName);
    arn = arn.replace('${CreationTimestamp}', creationTimestamp);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type RekognitionActionsRead = 'CompareFaces' | 'DescribeCollection' | 'DescribeProjectVersions' | 'DescribeProjects' | 'DescribeStreamProcessor' | 'DetectCustomLabels' | 'DetectFaces' | 'DetectLabels' | 'DetectModerationLabels' | 'DetectProtectiveEquipment' | 'DetectText' | 'GetCelebrityInfo' | 'GetCelebrityRecognition' | 'GetContentModeration' | 'GetFaceDetection' | 'GetFaceSearch' | 'GetLabelDetection' | 'GetPersonTracking' | 'GetSegmentDetection' | 'GetTextDetection' | 'ListCollections' | 'ListFaces' | 'RecognizeCelebrities' | 'SearchFaces' | 'SearchFacesByImage';
export type RekognitionActionsWrite = 'CreateCollection' | 'CreateProject' | 'CreateProjectVersion' | 'CreateStreamProcessor' | 'DeleteCollection' | 'DeleteFaces' | 'DeleteProject' | 'DeleteProjectVersion' | 'DeleteStreamProcessor' | 'IndexFaces' | 'StartCelebrityRecognition' | 'StartContentModeration' | 'StartFaceDetection' | 'StartFaceSearch' | 'StartLabelDetection' | 'StartPersonTracking' | 'StartProjectVersion' | 'StartSegmentDetection' | 'StartStreamProcessor' | 'StartTextDetection' | 'StopProjectVersion' | 'StopStreamProcessor';
export type RekognitionActionsList = 'ListStreamProcessors';
export type RekognitionActions = RekognitionActionsRead | RekognitionActionsWrite | RekognitionActionsList;
