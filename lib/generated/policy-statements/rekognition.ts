import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to associate multiple individual faces with a single user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_AssociateFaces.html
   */
  public toAssociateFaces() {
    return this.to('AssociateFaces');
  }

  /**
   * Grants permission to compare faces in the source input image with each face detected in the target input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CompareFaces.html
   */
  public toCompareFaces() {
    return this.to('CompareFaces');
  }

  /**
   * Grants permission to copy an existing model version to a new model version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CopyProjectVersion.html
   */
  public toCopyProjectVersion() {
    return this.to('CopyProjectVersion');
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
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateCollection.html
   */
  public toCreateCollection() {
    return this.to('CreateCollection');
  }

  /**
   * Grants permission to create a new Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create a face liveness session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html
   */
  public toCreateFaceLivenessSession() {
    return this.to('CreateFaceLivenessSession');
  }

  /**
   * Grants permission to create an Amazon Rekognition Custom Labels project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProject.html
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
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProjectVersion.html
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
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html
   */
  public toCreateStreamProcessor() {
    return this.to('CreateStreamProcessor');
  }

  /**
   * Grants permission to create a new user in a collection using a unique user ID you provide
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete the specified collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteCollection.html
   */
  public toDeleteCollection() {
    return this.to('DeleteCollection');
  }

  /**
   * Grants permission to delete an existing Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete faces from a collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteFaces.html
   */
  public toDeleteFaces() {
    return this.to('DeleteFaces');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a resource policy attached to a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectPolicy.html
   */
  public toDeleteProjectPolicy() {
    return this.to('DeleteProjectPolicy');
  }

  /**
   * Grants permission to delete a model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectVersion.html
   */
  public toDeleteProjectVersion() {
    return this.to('DeleteProjectVersion');
  }

  /**
   * Grants permission to delete the specified stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteStreamProcessor.html
   */
  public toDeleteStreamProcessor() {
    return this.to('DeleteStreamProcessor');
  }

  /**
   * Grants permission to delete a user from a collection based on the provided user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to read details about a collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeCollection.html
   */
  public toDescribeCollection() {
    return this.to('DescribeCollection');
  }

  /**
   * Grants permission to describe an Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to list the versions of a model in an Amazon Rekognition Custom Labels project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjectVersions.html
   */
  public toDescribeProjectVersions() {
    return this.to('DescribeProjectVersions');
  }

  /**
   * Grants permission to list Amazon Rekognition Custom Labels projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjects.html
   */
  public toDescribeProjects() {
    return this.to('DescribeProjects');
  }

  /**
   * Grants permission to get information about the specified stream processor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeStreamProcessor.html
   */
  public toDescribeStreamProcessor() {
    return this.to('DescribeStreamProcessor');
  }

  /**
   * Grants permission to detect custom labels in a supplied image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectCustomLabels.html
   */
  public toDetectCustomLabels() {
    return this.to('DetectCustomLabels');
  }

  /**
   * Grants permission to detect human faces within an image provided as input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html
   */
  public toDetectFaces() {
    return this.to('DetectFaces');
  }

  /**
   * Grants permission to detect instances of real-world labels within an image provided as input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectLabels.html
   */
  public toDetectLabels() {
    return this.to('DetectLabels');
  }

  /**
   * Grants permission to detect moderation labels within the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html
   */
  public toDetectModerationLabels() {
    return this.to('DetectModerationLabels');
  }

  /**
   * Grants permission to detect Personal Protective Equipment in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectProtectiveEquipment.html
   */
  public toDetectProtectiveEquipment() {
    return this.to('DetectProtectiveEquipment');
  }

  /**
   * Grants permission to detect text in the input image and convert it into machine-readable text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html
   */
  public toDetectText() {
    return this.to('DetectText');
  }

  /**
   * Grants permission to remove the association between a user ID and a face ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DisassociateFaces.html
   */
  public toDisassociateFaces() {
    return this.to('DisassociateFaces');
  }

  /**
   * Grants permission to distribute the entries in a training dataset across the training dataset and the test dataset for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DistributeDatasetEntries.html
   */
  public toDistributeDatasetEntries() {
    return this.to('DistributeDatasetEntries');
  }

  /**
   * Grants permission to read the name, and additional information, of a celebrity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityInfo.html
   */
  public toGetCelebrityInfo() {
    return this.to('GetCelebrityInfo');
  }

  /**
   * Grants permission to read the celebrity recognition results found in a stored video by an asynchronous celebrity recognition job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityRecognition.html
   */
  public toGetCelebrityRecognition() {
    return this.to('GetCelebrityRecognition');
  }

  /**
   * Grants permission to read the content moderation analysis results found in a stored video by an asynchronous content moderation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetContentModeration.html
   */
  public toGetContentModeration() {
    return this.to('GetContentModeration');
  }

  /**
   * Grants permission to read the faces detection results found in a stored video by an asynchronous face detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html
   */
  public toGetFaceDetection() {
    return this.to('GetFaceDetection');
  }

  /**
   * Grants permission to get results of a face liveness session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html
   */
  public toGetFaceLivenessSessionResults() {
    return this.to('GetFaceLivenessSessionResults');
  }

  /**
   * Grants permission to read the matching collection faces found in a stored video by an asynchronous face search job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceSearch.html
   */
  public toGetFaceSearch() {
    return this.to('GetFaceSearch');
  }

  /**
   * Grants permission to read the label detected resuls found in a stored video by an asynchronous label detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetLabelDetection.html
   */
  public toGetLabelDetection() {
    return this.to('GetLabelDetection');
  }

  /**
   * Grants permission to read the reference to job results in S3 and additional information about a media analysis job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetMediaAnalysisJob.html
   */
  public toGetMediaAnalysisJob() {
    return this.to('GetMediaAnalysisJob');
  }

  /**
   * Grants permission to read the list of persons detected in a stored video by an asynchronous person tracking job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetPersonTracking.html
   */
  public toGetPersonTracking() {
    return this.to('GetPersonTracking');
  }

  /**
   * Grants permission to get the vdeo segments found in a stored video by an asynchronous segment detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetSegmentDetection.html
   */
  public toGetSegmentDetection() {
    return this.to('GetSegmentDetection');
  }

  /**
   * Grants permission to get the text found in a stored video by an asynchronous text detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetTextDetection.html
   */
  public toGetTextDetection() {
    return this.to('GetTextDetection');
  }

  /**
   * Grants permission to update an existing collection with faces detected in the input image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html
   */
  public toIndexFaces() {
    return this.to('IndexFaces');
  }

  /**
   * Grants permission to read the collection Id's in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListCollections.html
   */
  public toListCollections() {
    return this.to('ListCollections');
  }

  /**
   * Grants permission to list the dataset entries in an existing Amazon Rekognition Custom Labels dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetEntries.html
   */
  public toListDatasetEntries() {
    return this.to('ListDatasetEntries');
  }

  /**
   * Grants permission to list the labels in a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetLabels.html
   */
  public toListDatasetLabels() {
    return this.to('ListDatasetLabels');
  }

  /**
   * Grants permission to read metadata for faces in the specificed collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html
   */
  public toListFaces() {
    return this.to('ListFaces');
  }

  /**
   * Grants permission to read the list of media analysis jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListMediaAnalysisJobs.html
   */
  public toListMediaAnalysisJobs() {
    return this.to('ListMediaAnalysisJobs');
  }

  /**
   * Grants permission to list the resource policies attached to a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListProjectPolicies.html
   */
  public toListProjectPolicies() {
    return this.to('ListProjectPolicies');
  }

  /**
   * Grants permission to get a list of your stream processors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListStreamProcessors.html
   */
  public toListStreamProcessors() {
    return this.to('ListStreamProcessors');
  }

  /**
   * Grants permission to return a list of tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list UserIds and the UserStatus
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to attach a resource policy to a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_PutProjectPolicy.html
   */
  public toPutProjectPolicy() {
    return this.to('PutProjectPolicy');
  }

  /**
   * Grants permission to detect celebrities in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RecognizeCelebrities.html
   */
  public toRecognizeCelebrities() {
    return this.to('RecognizeCelebrities');
  }

  /**
   * Grants permission to search the specificed collection for the supplied face ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFaces.html
   */
  public toSearchFaces() {
    return this.to('SearchFaces');
  }

  /**
   * Grants permission to search the specificed collection for the largest face in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html
   */
  public toSearchFacesByImage() {
    return this.to('SearchFacesByImage');
  }

  /**
   * Grants permission to search the specificed collection for user match result with given either face ID or user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to search the specificed collection for user match result by using the largest face in the input image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsersByImage.html
   */
  public toSearchUsersByImage() {
    return this.to('SearchUsersByImage');
  }

  /**
   * Grants permission to start the asynchronous recognition of celebrities in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartCelebrityRecognition.html
   */
  public toStartCelebrityRecognition() {
    return this.to('StartCelebrityRecognition');
  }

  /**
   * Grants permission to start asynchronous detection of explicit or suggestive adult content in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartContentModeration.html
   */
  public toStartContentModeration() {
    return this.to('StartContentModeration');
  }

  /**
   * Grants permission to start asynchronous detection of faces in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html
   */
  public toStartFaceDetection() {
    return this.to('StartFaceDetection');
  }

  /**
   * Grants permission to start streaming video for a face liveness session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html
   */
  public toStartFaceLivenessSession() {
    return this.to('StartFaceLivenessSession');
  }

  /**
   * Grants permission to start an asynchronous search for faces in a collection that match the faces of persons detected in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceSearch.html
   */
  public toStartFaceSearch() {
    return this.to('StartFaceSearch');
  }

  /**
   * Grants permission to start asynchronous detection of labels in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartLabelDetection.html
   */
  public toStartLabelDetection() {
    return this.to('StartLabelDetection');
  }

  /**
   * Grants permission to start a media analysis job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartMediaAnalysisJob.html
   */
  public toStartMediaAnalysisJob() {
    return this.to('StartMediaAnalysisJob');
  }

  /**
   * Grants permission to start the asynchronous tracking of persons in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartPersonTracking.html
   */
  public toStartPersonTracking() {
    return this.to('StartPersonTracking');
  }

  /**
   * Grants permission to start running a model version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartProjectVersion.html
   */
  public toStartProjectVersion() {
    return this.to('StartProjectVersion');
  }

  /**
   * Grants permission to start the asynchronous detection of segments in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartSegmentDetection.html
   */
  public toStartSegmentDetection() {
    return this.to('StartSegmentDetection');
  }

  /**
   * Grants permission to start running a stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartStreamProcessor.html
   */
  public toStartStreamProcessor() {
    return this.to('StartStreamProcessor');
  }

  /**
   * Grants permission to start the asynchronous detection of text in a stored video
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html
   */
  public toStartTextDetection() {
    return this.to('StartTextDetection');
  }

  /**
   * Grants permission to stop a running model version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopProjectVersion.html
   */
  public toStopProjectVersion() {
    return this.to('StopProjectVersion');
  }

  /**
   * Grants permission to stop a running stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopStreamProcessor.html
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
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to add or update one or more JSON Lines (entries) in a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateDatasetEntries.html
   */
  public toUpdateDatasetEntries() {
    return this.to('UpdateDatasetEntries');
  }

  /**
   * Grants permission to modify properties for a stream processor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateStreamProcessor.html
   */
  public toUpdateStreamProcessor() {
    return this.to('UpdateStreamProcessor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFaces',
      'CopyProjectVersion',
      'CreateCollection',
      'CreateDataset',
      'CreateFaceLivenessSession',
      'CreateProject',
      'CreateProjectVersion',
      'CreateStreamProcessor',
      'CreateUser',
      'DeleteCollection',
      'DeleteDataset',
      'DeleteFaces',
      'DeleteProject',
      'DeleteProjectPolicy',
      'DeleteProjectVersion',
      'DeleteStreamProcessor',
      'DeleteUser',
      'DisassociateFaces',
      'DistributeDatasetEntries',
      'IndexFaces',
      'PutProjectPolicy',
      'StartCelebrityRecognition',
      'StartContentModeration',
      'StartFaceDetection',
      'StartFaceLivenessSession',
      'StartFaceSearch',
      'StartLabelDetection',
      'StartMediaAnalysisJob',
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
      'GetFaceLivenessSessionResults',
      'GetFaceSearch',
      'GetLabelDetection',
      'GetMediaAnalysisJob',
      'GetPersonTracking',
      'GetSegmentDetection',
      'GetTextDetection',
      'ListCollections',
      'ListDatasetEntries',
      'ListDatasetLabels',
      'ListFaces',
      'ListMediaAnalysisJobs',
      'ListProjectPolicies',
      'ListTagsForResource',
      'ListUsers',
      'RecognizeCelebrities',
      'SearchFaces',
      'SearchFacesByImage',
      'SearchUsers',
      'SearchUsersByImage'
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
   * https://docs.aws.amazon.com/rekognition/latest/dg/collections.html
   *
   * @param collectionId - Identifier for the collectionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rekognition:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:collection/${ collectionId }`);
  }

  /**
   * Adds a resource of type streamprocessor to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video.html
   *
   * @param streamprocessorId - Identifier for the streamprocessorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamprocessor(streamprocessorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rekognition:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:streamprocessor/${ streamprocessorId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/mp-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProject(projectName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rekognition:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectName }/${ creationTimestamp }`);
  }

  /**
   * Adds a resource of type projectversion to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/training-model.html
   *
   * @param projectName - Identifier for the projectName.
   * @param versionName - Identifier for the versionName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProjectversion(projectName: string, versionName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rekognition:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectName }/version/${ versionName }/${ creationTimestamp }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/creating-datasets.html
   *
   * @param projectName - Identifier for the projectName.
   * @param datasetType - Identifier for the datasetType.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataset(projectName: string, datasetType: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rekognition:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectName }/dataset/${ datasetType }/${ creationTimestamp }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyProjectVersion()
   * - .toCreateCollection()
   * - .toCreateProjectVersion()
   * - .toCreateStreamProcessor()
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - collection
   * - streamprocessor
   * - projectversion
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCopyProjectVersion()
   * - .toCreateCollection()
   * - .toCreateProjectVersion()
   * - .toCreateStreamProcessor()
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
