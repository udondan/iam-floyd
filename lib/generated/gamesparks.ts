import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [gamesparks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamesparks.html).
 *
 * @param options - Options for the statement
 */
export class Gamesparks extends PolicyStatement {
  public servicePrefix = 'gamesparks';

  /**
   * Statement provider for service [gamesparks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamesparks.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateGame.html
   */
  public toCreateGame() {
    return this.to('CreateGame');
  }

  /**
   * Grants permission to create a snapshot of a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create a stage in a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateStage.html
   */
  public toCreateStage() {
    return this.to('CreateStage');
  }

  /**
   * Grants permission to delete a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DeleteGame.html
   */
  public toDeleteGame() {
    return this.to('DeleteGame');
  }

  /**
   * Grants permission to delete a stage from a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DeleteStage.html
   */
  public toDeleteStage() {
    return this.to('DeleteStage');
  }

  /**
   * Grants permission to disconnect a player from the game runtime
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DisconnectPlayer.html
   */
  public toDisconnectPlayer() {
    return this.to('DisconnectPlayer');
  }

  /**
   * Grants permission to export a snapshot of the game configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ExportSnapshot.html
   */
  public toExportSnapshot() {
    return this.to('ExportSnapshot');
  }

  /**
   * Grants permission to get details about an extension
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetExtension.html
   */
  public toGetExtension() {
    return this.to('GetExtension');
  }

  /**
   * Grants permission to get details about an extension version
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetExtensionVersion.html
   */
  public toGetExtensionVersion() {
    return this.to('GetExtensionVersion');
  }

  /**
   * Grants permission to get details about a game
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGame.html
   */
  public toGetGame() {
    return this.to('GetGame');
  }

  /**
   * Grants permission to get the configuration for the game
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGameConfiguration.html
   */
  public toGetGameConfiguration() {
    return this.to('GetGameConfiguration');
  }

  /**
   * Grants permission to get details about a job that is generating code for a snapshot
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGeneratedCodeJob.html
   */
  public toGetGeneratedCodeJob() {
    return this.to('GetGeneratedCodeJob');
  }

  /**
   * Grants permission to get the status of a player connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetPlayerConnectionStatus.html
   */
  public toGetPlayerConnectionStatus() {
    return this.to('GetPlayerConnectionStatus');
  }

  /**
   * Grants permission to get a snapshot of the game
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetSnapshot.html
   */
  public toGetSnapshot() {
    return this.to('GetSnapshot');
  }

  /**
   * Grants permission to gets information about a stage
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetStage.html
   */
  public toGetStage() {
    return this.to('GetStage');
  }

  /**
   * Grants permission to get information about a stage deployment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetStageDeployment.html
   */
  public toGetStageDeployment() {
    return this.to('GetStageDeployment');
  }

  /**
   * Grants permission to import a snapshot of a game configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ImportGameConfiguration.html
   */
  public toImportGameConfiguration() {
    return this.to('ImportGameConfiguration');
  }

  /**
   * Grants permission to invoke backend services for a specific game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-stage-roles.html
   */
  public toInvokeBackend() {
    return this.to('InvokeBackend');
  }

  /**
   * Grants permission to list the extension versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListExtensionVersions.html
   */
  public toListExtensionVersions() {
    return this.to('ListExtensionVersions');
  }

  /**
   * Grants permission to list the extensions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListExtensions.html
   */
  public toListExtensions() {
    return this.to('ListExtensions');
  }

  /**
   * Grants permission to list the games
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListGames.html
   */
  public toListGames() {
    return this.to('ListGames');
  }

  /**
   * Grants permission to get a list of code generation jobs for a snapshot
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListGeneratedCodeJobs.html
   */
  public toListGeneratedCodeJobs() {
    return this.to('ListGeneratedCodeJobs');
  }

  /**
   * Grants permission to get a list of snapshot summaries for a game
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListSnapshots.html
   */
  public toListSnapshots() {
    return this.to('ListSnapshots');
  }

  /**
   * Grants permission to get a list of stage deployment summaries for a game
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListStageDeployments.html
   */
  public toListStageDeployments() {
    return this.to('ListStageDeployments');
  }

  /**
   * Grants permission to get a list of stage summaries for a game
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListStages.html
   */
  public toListStages() {
    return this.to('ListStages');
  }

  /**
   * Grants permission to list the tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start an asynchronous process that generates client code for system-defined and custom messages
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_StartGeneratedCodeJob.html
   */
  public toStartGeneratedCodeJob() {
    return this.to('StartGeneratedCodeJob');
  }

  /**
   * Grants permission to deploy a snapshot to a stage and creates a new game runtime
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_StartStageDeployment.html
   */
  public toStartStageDeployment() {
    return this.to('StartStageDeployment');
  }

  /**
   * Grants permission to adds tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change the metadata of a game
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateGame.html
   */
  public toUpdateGame() {
    return this.to('UpdateGame');
  }

  /**
   * Grants permission to change the working copy of the game configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateGameConfiguration.html
   */
  public toUpdateGameConfiguration() {
    return this.to('UpdateGameConfiguration');
  }

  /**
   * Grants permission to update the metadata of a snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateSnapshot.html
   */
  public toUpdateSnapshot() {
    return this.to('UpdateSnapshot');
  }

  /**
   * Grants permission to update the metadata of a stage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateStage.html
   */
  public toUpdateStage() {
    return this.to('UpdateStage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateGame',
      'CreateSnapshot',
      'CreateStage',
      'DeleteGame',
      'DeleteStage',
      'DisconnectPlayer',
      'ExportSnapshot',
      'ImportGameConfiguration',
      'InvokeBackend',
      'StartGeneratedCodeJob',
      'StartStageDeployment',
      'UpdateGame',
      'UpdateGameConfiguration',
      'UpdateSnapshot',
      'UpdateStage'
    ],
    Read: [
      'GetExtension',
      'GetExtensionVersion',
      'GetGame',
      'GetGameConfiguration',
      'GetGeneratedCodeJob',
      'GetPlayerConnectionStatus',
      'GetSnapshot',
      'GetStage',
      'GetStageDeployment',
      'ListTagsForResource'
    ],
    List: [
      'ListExtensionVersions',
      'ListExtensions',
      'ListGames',
      'ListGeneratedCodeJobs',
      'ListSnapshots',
      'ListStageDeployments',
      'ListStages'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type game to the statement
   *
   * https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-resources
   *
   * @param gameId - Identifier for the gameId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGame(gameId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:gamesparks:${ region || '*' }:${ account || '*' }:game/${ gameId }`);
  }

  /**
   * Adds a resource of type stage to the statement
   *
   * https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-resources
   *
   * @param gameId - Identifier for the gameId.
   * @param stageName - Identifier for the stageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStage(gameId: string, stageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:gamesparks:${ region || '*' }:${ account || '*' }:game/${ gameId }/stage/${ stageName }`);
  }
}
