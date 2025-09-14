import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ivs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ivs extends PolicyStatement {
  public servicePrefix = 'ivs';

  /**
   * Statement provider for service [ivs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get multiple channels simultaneously by channel ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetChannel.html
   */
  public toBatchGetChannel() {
    return this.to('BatchGetChannel');
  }

  /**
   * Grants permission to get multiple stream keys simultaneously by stream key ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetStreamKey.html
   */
  public toBatchGetStreamKey() {
    return this.to('BatchGetStreamKey');
  }

  /**
   * Grants permission to perform StartViewerSessionRevocation on multiple channel ARN and viewer ID pairs simultaneously
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchStartViewerSessionRevocation.html
   */
  public toBatchStartViewerSessionRevocation() {
    return this.to('BatchStartViewerSessionRevocation');
  }

  /**
   * Grants permission to create a new channel and an associated stream key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to create a new encoder configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateEncoderConfiguration.html
   */
  public toCreateEncoderConfiguration() {
    return this.to('CreateEncoderConfiguration');
  }

  /**
   * Grants permission to create a new ingest configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateIngestConfiguration.html
   */
  public toCreateIngestConfiguration() {
    return this.to('CreateIngestConfiguration');
  }

  /**
   * Grants permission to create a participant token
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateParticipantToken.html
   */
  public toCreateParticipantToken() {
    return this.to('CreateParticipantToken');
  }

  /**
   * Grants permission to create a playback restriction policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreatePlaybackRestrictionPolicy.html
   */
  public toCreatePlaybackRestrictionPolicy() {
    return this.to('CreatePlaybackRestrictionPolicy');
  }

  /**
   * Grants permission to create a a new recording configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateRecordingConfiguration.html
   */
  public toCreateRecordingConfiguration() {
    return this.to('CreateRecordingConfiguration');
  }

  /**
   * Grants permission to create a stage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStage.html
   */
  public toCreateStage() {
    return this.to('CreateStage');
  }

  /**
   * Grants permission to create a new storage configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStorageConfiguration.html
   */
  public toCreateStorageConfiguration() {
    return this.to('CreateStorageConfiguration');
  }

  /**
   * Grants permission to create a stream key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateStreamKey.html
   */
  public toCreateStreamKey() {
    return this.to('CreateStreamKey');
  }

  /**
   * Grants permission to delete a channel and channel's stream keys
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to delete an encoder configuration for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteEncoderConfiguration.html
   */
  public toDeleteEncoderConfiguration() {
    return this.to('DeleteEncoderConfiguration');
  }

  /**
   * Grants permission to delete an ingest configuration for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteIngestConfiguration.html
   */
  public toDeleteIngestConfiguration() {
    return this.to('DeleteIngestConfiguration');
  }

  /**
   * Grants permission to delete the playback key pair for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackKeyPair.html
   */
  public toDeletePlaybackKeyPair() {
    return this.to('DeletePlaybackKeyPair');
  }

  /**
   * Grants permission to delete the playback restriction policy for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackRestrictionPolicy.html
   */
  public toDeletePlaybackRestrictionPolicy() {
    return this.to('DeletePlaybackRestrictionPolicy');
  }

  /**
   * Grants permission to delete the public key for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeletePublicKey.html
   */
  public toDeletePublicKey() {
    return this.to('DeletePublicKey');
  }

  /**
   * Grants permission to delete a recording configuration for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteRecordingConfiguration.html
   */
  public toDeleteRecordingConfiguration() {
    return this.to('DeleteRecordingConfiguration');
  }

  /**
   * Grants permission to delete the stage for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStage.html
   */
  public toDeleteStage() {
    return this.to('DeleteStage');
  }

  /**
   * Grants permission to delete an storage configuration for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStorageConfiguration.html
   */
  public toDeleteStorageConfiguration() {
    return this.to('DeleteStorageConfiguration');
  }

  /**
   * Grants permission to delete the stream key for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteStreamKey.html
   */
  public toDeleteStreamKey() {
    return this.to('DeleteStreamKey');
  }

  /**
   * Grants permission to disconnect a participant from for the specified stage ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DisconnectParticipant.html
   */
  public toDisconnectParticipant() {
    return this.to('DisconnectParticipant');
  }

  /**
   * Grants permission to get the channel configuration for a specified channel ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetChannel.html
   */
  public toGetChannel() {
    return this.to('GetChannel');
  }

  /**
   * Grants permission to get the composition for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetComposition.html
   */
  public toGetComposition() {
    return this.to('GetComposition');
  }

  /**
   * Grants permission to get the encoder configuration for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetEncoderConfiguration.html
   */
  public toGetEncoderConfiguration() {
    return this.to('GetEncoderConfiguration');
  }

  /**
   * Grants permission to get the ingest configuration for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetIngestConfiguration.html
   */
  public toGetIngestConfiguration() {
    return this.to('GetIngestConfiguration');
  }

  /**
   * Grants permission to get participant information for a specified stage ARN, session, and participant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetParticipant.html
   */
  public toGetParticipant() {
    return this.to('GetParticipant');
  }

  /**
   * Grants permission to get the playback keypair information for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackKeyPair.html
   */
  public toGetPlaybackKeyPair() {
    return this.to('GetPlaybackKeyPair');
  }

  /**
   * Grants permission to get the playback restriction policy for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackRestrictionPolicy.html
   */
  public toGetPlaybackRestrictionPolicy() {
    return this.to('GetPlaybackRestrictionPolicy');
  }

  /**
   * Grants permission to get the public key for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    return this.to('GetPublicKey');
  }

  /**
   * Grants permission to get the recording configuration for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetRecordingConfiguration.html
   */
  public toGetRecordingConfiguration() {
    return this.to('GetRecordingConfiguration');
  }

  /**
   * Grants permission to get stage information for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStage.html
   */
  public toGetStage() {
    return this.to('GetStage');
  }

  /**
   * Grants permission to get stage session information for a specified stage ARN and session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStageSession.html
   */
  public toGetStageSession() {
    return this.to('GetStageSession');
  }

  /**
   * Grants permission to get the storage configuration for the specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStorageConfiguration.html
   */
  public toGetStorageConfiguration() {
    return this.to('GetStorageConfiguration');
  }

  /**
   * Grants permission to get information about the active (live) stream on a specified channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStream.html
   */
  public toGetStream() {
    return this.to('GetStream');
  }

  /**
   * Grants permission to get stream-key information for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamKey.html
   */
  public toGetStreamKey() {
    return this.to('GetStreamKey');
  }

  /**
   * Grants permission to get information about the stream session on a specified channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamSession.html
   */
  public toGetStreamSession() {
    return this.to('GetStreamSession');
  }

  /**
   * Grants permission to import the public key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ImportPlaybackKeyPair.html
   */
  public toImportPlaybackKeyPair() {
    return this.to('ImportPlaybackKeyPair');
  }

  /**
   * Grants permission to import a public key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ImportPublicKey.html
   */
  public toImportPublicKey() {
    return this.to('ImportPublicKey');
  }

  /**
   * Grants permission to get summary information about channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to get summary information about compositions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListCompositions.html
   */
  public toListCompositions() {
    return this.to('ListCompositions');
  }

  /**
   * Grants permission to get summary information about encoder configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListEncoderConfigurations.html
   */
  public toListEncoderConfigurations() {
    return this.to('ListEncoderConfigurations');
  }

  /**
   * Grants permission to get summary information about ingest configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListIngestConfigurations.html
   */
  public toListIngestConfigurations() {
    return this.to('ListIngestConfigurations');
  }

  /**
   * Grants permission to list participant events for a specified stage ARN, session, and participant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipantEvents.html
   */
  public toListParticipantEvents() {
    return this.to('ListParticipantEvents');
  }

  /**
   * Grants permission to get summary information about participant replicas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipantReplicas.html
   */
  public toListParticipantReplicas() {
    return this.to('ListParticipantReplicas');
  }

  /**
   * Grants permission to list participants for a specified stage ARN and session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipants.html
   */
  public toListParticipants() {
    return this.to('ListParticipants');
  }

  /**
   * Grants permission to get summary information about playback key pairs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListPlaybackKeyPairs.html
   */
  public toListPlaybackKeyPairs() {
    return this.to('ListPlaybackKeyPairs');
  }

  /**
   * Grants permission to get summary information about playback restriction policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListPlaybackRestrictionPolicies.html
   */
  public toListPlaybackRestrictionPolicies() {
    return this.to('ListPlaybackRestrictionPolicies');
  }

  /**
   * Grants permission to get summary information about public keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    return this.to('ListPublicKeys');
  }

  /**
   * Grants permission to get summary information about recording configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListRecordingConfigurations.html
   */
  public toListRecordingConfigurations() {
    return this.to('ListRecordingConfigurations');
  }

  /**
   * Grants permission to list stage sessions for a specified stage ARN
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStageSessions.html
   */
  public toListStageSessions() {
    return this.to('ListStageSessions');
  }

  /**
   * Grants permission to get summary information about stages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStages.html
   */
  public toListStages() {
    return this.to('ListStages');
  }

  /**
   * Grants permission to get summary information about storage configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStorageConfigurations.html
   */
  public toListStorageConfigurations() {
    return this.to('ListStorageConfigurations');
  }

  /**
   * Grants permission to get summary information about stream keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamKeys.html
   */
  public toListStreamKeys() {
    return this.to('ListStreamKeys');
  }

  /**
   * Grants permission to get summary information about streams sessions on a specified channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamSessions.html
   */
  public toListStreamSessions() {
    return this.to('ListStreamSessions');
  }

  /**
   * Grants permission to get summary information about live streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to insert metadata into an RTMP stream for a specified channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_PutMetadata.html
   */
  public toPutMetadata() {
    return this.to('PutMetadata');
  }

  /**
   * Grants permission to start a new composition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StartComposition.html
   */
  public toStartComposition() {
    return this.to('StartComposition');
  }

  /**
   * Grants permission to start a new participant replication
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StartParticipantReplication.html
   */
  public toStartParticipantReplication() {
    return this.to('StartParticipantReplication');
  }

  /**
   * Grants permission to start the process of revoking the viewer session associated with a specified channel ARN and viewer ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StartViewerSessionRevocation.html
   */
  public toStartViewerSessionRevocation() {
    return this.to('StartViewerSessionRevocation');
  }

  /**
   * Grants permission to stop the composition for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StopComposition.html
   */
  public toStopComposition() {
    return this.to('StopComposition');
  }

  /**
   * Grants permission to stop the participant replication for the specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StopParticipantReplication.html
   */
  public toStopParticipantReplication() {
    return this.to('StopParticipantReplication');
  }

  /**
   * Grants permission to disconnect a streamer on a specified channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StopStream.html
   */
  public toStopStream() {
    return this.to('StopStream');
  }

  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a channel's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update ingest configuration for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_UpdateIngestConfiguration.html
   */
  public toUpdateIngestConfiguration() {
    return this.to('UpdateIngestConfiguration');
  }

  /**
   * Grants permission to update a playback restriction policy for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdatePlaybackRestrictionPolicy.html
   */
  public toUpdatePlaybackRestrictionPolicy() {
    return this.to('UpdatePlaybackRestrictionPolicy');
  }

  /**
   * Grants permission to update a stage's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_UpdateStage.html
   */
  public toUpdateStage() {
    return this.to('UpdateStage');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetChannel',
      'BatchGetStreamKey',
      'GetChannel',
      'GetComposition',
      'GetEncoderConfiguration',
      'GetIngestConfiguration',
      'GetParticipant',
      'GetPlaybackKeyPair',
      'GetPlaybackRestrictionPolicy',
      'GetPublicKey',
      'GetRecordingConfiguration',
      'GetStage',
      'GetStageSession',
      'GetStorageConfiguration',
      'GetStream',
      'GetStreamKey',
      'GetStreamSession',
      'ListTagsForResource'
    ],
    Write: [
      'BatchStartViewerSessionRevocation',
      'CreateChannel',
      'CreateEncoderConfiguration',
      'CreateIngestConfiguration',
      'CreateParticipantToken',
      'CreatePlaybackRestrictionPolicy',
      'CreateRecordingConfiguration',
      'CreateStage',
      'CreateStorageConfiguration',
      'CreateStreamKey',
      'DeleteChannel',
      'DeleteEncoderConfiguration',
      'DeleteIngestConfiguration',
      'DeletePlaybackKeyPair',
      'DeletePlaybackRestrictionPolicy',
      'DeletePublicKey',
      'DeleteRecordingConfiguration',
      'DeleteStage',
      'DeleteStorageConfiguration',
      'DeleteStreamKey',
      'DisconnectParticipant',
      'ImportPlaybackKeyPair',
      'ImportPublicKey',
      'PutMetadata',
      'StartComposition',
      'StartParticipantReplication',
      'StartViewerSessionRevocation',
      'StopComposition',
      'StopParticipantReplication',
      'StopStream',
      'UpdateChannel',
      'UpdateIngestConfiguration',
      'UpdatePlaybackRestrictionPolicy',
      'UpdateStage'
    ],
    List: [
      'ListChannels',
      'ListCompositions',
      'ListEncoderConfigurations',
      'ListIngestConfigurations',
      'ListParticipantEvents',
      'ListParticipantReplicas',
      'ListParticipants',
      'ListPlaybackKeyPairs',
      'ListPlaybackRestrictionPolicies',
      'ListPublicKeys',
      'ListRecordingConfigurations',
      'ListStageSessions',
      'ListStages',
      'ListStorageConfigurations',
      'ListStreamKeys',
      'ListStreamSessions',
      'ListStreams'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Channel to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_Channel.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channel/${ resourceId }`);
  }

  /**
   * Adds a resource of type Stream-Key to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StreamKey.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamKey(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stream-key/${ resourceId }`);
  }

  /**
   * Adds a resource of type Playback-Key-Pair to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_PlaybackKeyPair.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaybackKeyPair(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:playback-key/${ resourceId }`);
  }

  /**
   * Adds a resource of type Playback-Restriction-Policy to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_PlaybackRestrictionPolicy.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaybackRestrictionPolicy(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:playback-restriction-policy/${ resourceId }`);
  }

  /**
   * Adds a resource of type Recording-Configuration to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_RecordingConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecordingConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recording-configuration/${ resourceId }`);
  }

  /**
   * Adds a resource of type Stage to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_Stage.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStage(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stage/${ resourceId }`);
  }

  /**
   * Adds a resource of type Composition to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_Composition.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComposition(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:composition/${ resourceId }`);
  }

  /**
   * Adds a resource of type Encoder-Configuration to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_EncoderConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEncoderConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:encoder-configuration/${ resourceId }`);
  }

  /**
   * Adds a resource of type Storage-Configuration to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StorageConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStorageConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:storage-configuration/${ resourceId }`);
  }

  /**
   * Adds a resource of type Public-Key to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_PublicKey.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPublicKey(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:public-key/${ resourceId }`);
  }

  /**
   * Adds a resource of type Ingest-Configuration to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_IngestConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ivs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ingest-configuration/${ resourceId }`);
  }

  /**
   * Filters access by the tags associated with the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateEncoderConfiguration()
   * - .toCreateIngestConfiguration()
   * - .toCreateParticipantToken()
   * - .toCreatePlaybackRestrictionPolicy()
   * - .toCreateRecordingConfiguration()
   * - .toCreateStage()
   * - .toCreateStorageConfiguration()
   * - .toCreateStreamKey()
   * - .toImportPlaybackKeyPair()
   * - .toImportPublicKey()
   * - .toListTagsForResource()
   * - .toStartComposition()
   * - .toStartParticipantReplication()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Channel
   * - Stream-Key
   * - Playback-Key-Pair
   * - Playback-Restriction-Policy
   * - Recording-Configuration
   * - Stage
   * - Composition
   * - Encoder-Configuration
   * - Storage-Configuration
   * - Public-Key
   * - Ingest-Configuration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateEncoderConfiguration()
   * - .toCreateIngestConfiguration()
   * - .toCreateParticipantToken()
   * - .toCreatePlaybackRestrictionPolicy()
   * - .toCreateRecordingConfiguration()
   * - .toCreateStage()
   * - .toCreateStorageConfiguration()
   * - .toCreateStreamKey()
   * - .toImportPlaybackKeyPair()
   * - .toImportPublicKey()
   * - .toListTagsForResource()
   * - .toStartComposition()
   * - .toStartParticipantReplication()
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
