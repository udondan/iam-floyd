import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [gamelift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Gamelift extends PolicyStatement {
  public servicePrefix = 'gamelift';

  /**
   * Statement provider for service [gamelift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Registers player acceptance or rejection of a proposed FlexMatch match.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html
   */
  public toAcceptMatch() {
    return this.to('AcceptMatch');
  }

  /**
   * Locates and reserves a game server to host a new game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html
   */
  public toClaimGameServer() {
    return this.to('ClaimGameServer');
  }

  /**
   * Defines a new alias for a fleet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Creates a new game build using files stored in an Amazon S3 bucket.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html
   */
  public toCreateBuild() {
    return this.to('CreateBuild');
  }

  /**
   * Creates a new fleet of computing resources to run your game servers.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Creates a new game server group, sets up a corresponding Auto Scaling group, and launches instances to host game servers.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameServerGroup.html
   */
  public toCreateGameServerGroup() {
    return this.to('CreateGameServerGroup');
  }

  /**
   * Starts a new game session on a specified fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html
   */
  public toCreateGameSession() {
    return this.to('CreateGameSession');
  }

  /**
   * Sets up a new queue for processing new game session placement requests.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html
   */
  public toCreateGameSessionQueue() {
    return this.to('CreateGameSessionQueue');
  }

  /**
   * Creates a new FlexMatch matchmaker.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html
   */
  public toCreateMatchmakingConfiguration() {
    return this.to('CreateMatchmakingConfiguration');
  }

  /**
   * Creates a new matchmaking rule set for FlexMatch.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html
   */
  public toCreateMatchmakingRuleSet() {
    return this.to('CreateMatchmakingRuleSet');
  }

  /**
   * Reserves an available game session slot for a player.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html
   */
  public toCreatePlayerSession() {
    return this.to('CreatePlayerSession');
  }

  /**
   * Reserves available game session slots for multiple players.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html
   */
  public toCreatePlayerSessions() {
    return this.to('CreatePlayerSessions');
  }

  /**
   * Creates a new Realtime Servers script.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html
   */
  public toCreateScript() {
    return this.to('CreateScript');
  }

  /**
   * Allows GameLift to create or delete a peering connection between a GameLift fleet VPC and a VPC on another AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html
   */
  public toCreateVpcPeeringAuthorization() {
    return this.to('CreateVpcPeeringAuthorization');
  }

  /**
   * Establishes a peering connection between your GameLift fleet VPC and a VPC on another account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html
   */
  public toCreateVpcPeeringConnection() {
    return this.to('CreateVpcPeeringConnection');
  }

  /**
   * Deletes an alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Deletes a game build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html
   */
  public toDeleteBuild() {
    return this.to('DeleteBuild');
  }

  /**
   * Deletes an empty fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Permanently deletes a game server group and terminates FleetIQ activity for the corresponding Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html
   */
  public toDeleteGameServerGroup() {
    return this.to('DeleteGameServerGroup');
  }

  /**
   * Deletes an existing game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html
   */
  public toDeleteGameSessionQueue() {
    return this.to('DeleteGameSessionQueue');
  }

  /**
   * Deletes an existing FlexMatch matchmaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html
   */
  public toDeleteMatchmakingConfiguration() {
    return this.to('DeleteMatchmakingConfiguration');
  }

  /**
   * Deletes an existing FlexMatch matchmaking rule set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html
   */
  public toDeleteMatchmakingRuleSet() {
    return this.to('DeleteMatchmakingRuleSet');
  }

  /**
   * Deletes a set of auto-scaling rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html
   */
  public toDeleteScalingPolicy() {
    return this.to('DeleteScalingPolicy');
  }

  /**
   * Deletes a Realtime Servers script.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html
   */
  public toDeleteScript() {
    return this.to('DeleteScript');
  }

  /**
   * Cancels a VPC peering authorization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html
   */
  public toDeleteVpcPeeringAuthorization() {
    return this.to('DeleteVpcPeeringAuthorization');
  }

  /**
   * Removes a peering connection between VPCs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html
   */
  public toDeleteVpcPeeringConnection() {
    return this.to('DeleteVpcPeeringConnection');
  }

  /**
   * Removes a game server from a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html
   */
  public toDeregisterGameServer() {
    return this.to('DeregisterGameServer');
  }

  /**
   * Retrieves properties for an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html
   */
  public toDescribeAlias() {
    return this.to('DescribeAlias');
  }

  /**
   * Retrieves properties for a game build.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html
   */
  public toDescribeBuild() {
    return this.to('DescribeBuild');
  }

  /**
   * Retrieves the maximum allowed and current usage for EC2 instance types.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html
   */
  public toDescribeEC2InstanceLimits() {
    return this.to('DescribeEC2InstanceLimits');
  }

  /**
   * Retrieves general properties, including status, for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html
   */
  public toDescribeFleetAttributes() {
    return this.to('DescribeFleetAttributes');
  }

  /**
   * Retrieves the current capacity setting for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html
   */
  public toDescribeFleetCapacity() {
    return this.to('DescribeFleetCapacity');
  }

  /**
   * Retrieves entries from a fleet's event log.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html
   */
  public toDescribeFleetEvents() {
    return this.to('DescribeFleetEvents');
  }

  /**
   * Retrieves the inbound connection permissions for a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html
   */
  public toDescribeFleetPortSettings() {
    return this.to('DescribeFleetPortSettings');
  }

  /**
   * Retrieves utilization statistics for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html
   */
  public toDescribeFleetUtilization() {
    return this.to('DescribeFleetUtilization');
  }

  /**
   * Retrieves properties for a game server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html
   */
  public toDescribeGameServer() {
    return this.to('DescribeGameServer');
  }

  /**
   * Retrieves properties for a game server group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html
   */
  public toDescribeGameServerGroup() {
    return this.to('DescribeGameServerGroup');
  }

  /**
   * Retrieves the status of EC2 instances in a game server group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html
   */
  public toDescribeGameServerInstances() {
    return this.to('DescribeGameServerInstances');
  }

  /**
   * Retrieves properties for game sessions in a fleet, including the protection policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html
   */
  public toDescribeGameSessionDetails() {
    return this.to('DescribeGameSessionDetails');
  }

  /**
   * Retrieves details of a game session placement request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html
   */
  public toDescribeGameSessionPlacement() {
    return this.to('DescribeGameSessionPlacement');
  }

  /**
   * Retrieves properties for game session queues.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html
   */
  public toDescribeGameSessionQueues() {
    return this.to('DescribeGameSessionQueues');
  }

  /**
   * Retrieves properties for game sessions in a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html
   */
  public toDescribeGameSessions() {
    return this.to('DescribeGameSessions');
  }

  /**
   * Retrieves information about instances in a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    return this.to('DescribeInstances');
  }

  /**
   * Retrieves details of matchmaking tickets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html
   */
  public toDescribeMatchmaking() {
    return this.to('DescribeMatchmaking');
  }

  /**
   * Retrieves properties for FlexMatch matchmakers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html
   */
  public toDescribeMatchmakingConfigurations() {
    return this.to('DescribeMatchmakingConfigurations');
  }

  /**
   * Retrieves properties for FlexMatch matchmaking rule sets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html
   */
  public toDescribeMatchmakingRuleSets() {
    return this.to('DescribeMatchmakingRuleSets');
  }

  /**
   * Retrieves properties for player sessions in a game session.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html
   */
  public toDescribePlayerSessions() {
    return this.to('DescribePlayerSessions');
  }

  /**
   * Retrieves the current runtime configuration for a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html
   */
  public toDescribeRuntimeConfiguration() {
    return this.to('DescribeRuntimeConfiguration');
  }

  /**
   * Retrieves all scaling policies that are applied to a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html
   */
  public toDescribeScalingPolicies() {
    return this.to('DescribeScalingPolicies');
  }

  /**
   * Retrieves properties for a Realtime Servers script.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html
   */
  public toDescribeScript() {
    return this.to('DescribeScript');
  }

  /**
   * Retrieves valid VPC peering authorizations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html
   */
  public toDescribeVpcPeeringAuthorizations() {
    return this.to('DescribeVpcPeeringAuthorizations');
  }

  /**
   * Retrieves details on active or pending VPC peering connections.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html
   */
  public toDescribeVpcPeeringConnections() {
    return this.to('DescribeVpcPeeringConnections');
  }

  /**
   * Retrieves the location of stored logs for a game session.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html
   */
  public toGetGameSessionLogUrl() {
    return this.to('GetGameSessionLogUrl');
  }

  /**
   * Requests remote access to a specified fleet instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html
   */
  public toGetInstanceAccess() {
    return this.to('GetInstanceAccess');
  }

  /**
   * Retrieves all aliases that are defined in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Retrieves all game build in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html
   */
  public toListBuilds() {
    return this.to('ListBuilds');
  }

  /**
   * Retrieves a list of fleet IDs for all fleets in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
  }

  /**
   * Retrieves all game server groups that are defined in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html
   */
  public toListGameServerGroups() {
    return this.to('ListGameServerGroups');
  }

  /**
   * Retrieves all game servers that are currently running in a game server group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html
   */
  public toListGameServers() {
    return this.to('ListGameServers');
  }

  /**
   * Retrieves properties for all Realtime Servers scripts in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html
   */
  public toListScripts() {
    return this.to('ListScripts');
  }

  /**
   * Lists tags for GameLift resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Creates or updates a fleet auto-scaling policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    return this.to('PutScalingPolicy');
  }

  /**
   * Notifies GameLift FleetIQ when a new game server is ready to host gameplay.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html
   */
  public toRegisterGameServer() {
    return this.to('RegisterGameServer');
  }

  /**
   * Retrieves fresh upload credentials to use when uploading a new game build.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html
   */
  public toRequestUploadCredentials() {
    return this.to('RequestUploadCredentials');
  }

  /**
   * Retrieves the fleet ID associated with an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html
   */
  public toResolveAlias() {
    return this.to('ResolveAlias');
  }

  /**
   * Reinstates suspended FleetIQ activity for a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html
   */
  public toResumeGameServerGroup() {
    return this.to('ResumeGameServerGroup');
  }

  /**
   * Retrieves game sessions that match a set of search criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html
   */
  public toSearchGameSessions() {
    return this.to('SearchGameSessions');
  }

  /**
   * Resumes auto-scaling activity on a fleet after it was suspended with StopFleetActions().
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html
   */
  public toStartFleetActions() {
    return this.to('StartFleetActions');
  }

  /**
   * Sends a game session placement request to a game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html
   */
  public toStartGameSessionPlacement() {
    return this.to('StartGameSessionPlacement');
  }

  /**
   * Requests FlexMatch matchmaking to fill available player slots in an existing game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html
   */
  public toStartMatchBackfill() {
    return this.to('StartMatchBackfill');
  }

  /**
   * Requests FlexMatch matchmaking for one or a group of players and game session placement for a resulting match.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html
   */
  public toStartMatchmaking() {
    return this.to('StartMatchmaking');
  }

  /**
   * Suspends auto-scaling activity on a fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html
   */
  public toStopFleetActions() {
    return this.to('StopFleetActions');
  }

  /**
   * Cancels a game session placement request that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html
   */
  public toStopGameSessionPlacement() {
    return this.to('StopGameSessionPlacement');
  }

  /**
   * Cancels a matchmaking or match backfill request that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html
   */
  public toStopMatchmaking() {
    return this.to('StopMatchmaking');
  }

  /**
   * Temporarily stops FleetIQ activity for a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html
   */
  public toSuspendGameServerGroup() {
    return this.to('SuspendGameServerGroup');
  }

  /**
   * Tags GameLift resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Untags GameLift resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates the properties of an existing alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    return this.to('UpdateAlias');
  }

  /**
   * Updates an existing build's metadata.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html
   */
  public toUpdateBuild() {
    return this.to('UpdateBuild');
  }

  /**
   * Updates the general properties of an existing fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html
   */
  public toUpdateFleetAttributes() {
    return this.to('UpdateFleetAttributes');
  }

  /**
   * Adjusts a fleet's capacity settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html
   */
  public toUpdateFleetCapacity() {
    return this.to('UpdateFleetCapacity');
  }

  /**
   * Adjusts a fleet's port settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html
   */
  public toUpdateFleetPortSettings() {
    return this.to('UpdateFleetPortSettings');
  }

  /**
   * Changes game server properties, health status, or utilization status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html
   */
  public toUpdateGameServer() {
    return this.to('UpdateGameServer');
  }

  /**
   * Updates properties for game server group, including allowed instance types.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html
   */
  public toUpdateGameServerGroup() {
    return this.to('UpdateGameServerGroup');
  }

  /**
   * Updates the properties of an existing game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html
   */
  public toUpdateGameSession() {
    return this.to('UpdateGameSession');
  }

  /**
   * Updates properties of an existing game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html
   */
  public toUpdateGameSessionQueue() {
    return this.to('UpdateGameSessionQueue');
  }

  /**
   * Updates properties of an existing FlexMatch matchmaking configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html
   */
  public toUpdateMatchmakingConfiguration() {
    return this.to('UpdateMatchmakingConfiguration');
  }

  /**
   * Updates how server processes are configured on instances in an existing fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html
   */
  public toUpdateRuntimeConfiguration() {
    return this.to('UpdateRuntimeConfiguration');
  }

  /**
   * Updates the metadata and content of an existing Realtime Servers script.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html
   */
  public toUpdateScript() {
    return this.to('UpdateScript');
  }

  /**
   * Validates the syntax of a FlexMatch matchmaking rule set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html
   */
  public toValidateMatchmakingRuleSet() {
    return this.to('ValidateMatchmakingRuleSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptMatch",
      "ClaimGameServer",
      "CreateAlias",
      "CreateBuild",
      "CreateFleet",
      "CreateGameServerGroup",
      "CreateGameSession",
      "CreateGameSessionQueue",
      "CreateMatchmakingConfiguration",
      "CreateMatchmakingRuleSet",
      "CreatePlayerSession",
      "CreatePlayerSessions",
      "CreateScript",
      "CreateVpcPeeringAuthorization",
      "CreateVpcPeeringConnection",
      "DeleteAlias",
      "DeleteBuild",
      "DeleteFleet",
      "DeleteGameServerGroup",
      "DeleteGameSessionQueue",
      "DeleteMatchmakingConfiguration",
      "DeleteMatchmakingRuleSet",
      "DeleteScalingPolicy",
      "DeleteScript",
      "DeleteVpcPeeringAuthorization",
      "DeleteVpcPeeringConnection",
      "DeregisterGameServer",
      "PutScalingPolicy",
      "RegisterGameServer",
      "ResumeGameServerGroup",
      "StartFleetActions",
      "StartGameSessionPlacement",
      "StartMatchBackfill",
      "StartMatchmaking",
      "StopFleetActions",
      "StopGameSessionPlacement",
      "StopMatchmaking",
      "SuspendGameServerGroup",
      "UpdateAlias",
      "UpdateBuild",
      "UpdateFleetAttributes",
      "UpdateFleetCapacity",
      "UpdateFleetPortSettings",
      "UpdateGameServer",
      "UpdateGameServerGroup",
      "UpdateGameSession",
      "UpdateGameSessionQueue",
      "UpdateMatchmakingConfiguration",
      "UpdateRuntimeConfiguration",
      "UpdateScript"
    ],
    "Read": [
      "DescribeAlias",
      "DescribeBuild",
      "DescribeEC2InstanceLimits",
      "DescribeFleetAttributes",
      "DescribeFleetCapacity",
      "DescribeFleetEvents",
      "DescribeFleetPortSettings",
      "DescribeFleetUtilization",
      "DescribeGameServer",
      "DescribeGameServerGroup",
      "DescribeGameServerInstances",
      "DescribeGameSessionDetails",
      "DescribeGameSessionPlacement",
      "DescribeGameSessionQueues",
      "DescribeGameSessions",
      "DescribeInstances",
      "DescribeMatchmaking",
      "DescribeMatchmakingConfigurations",
      "DescribeMatchmakingRuleSets",
      "DescribePlayerSessions",
      "DescribeRuntimeConfiguration",
      "DescribeScalingPolicies",
      "DescribeScript",
      "DescribeVpcPeeringAuthorizations",
      "DescribeVpcPeeringConnections",
      "GetGameSessionLogUrl",
      "GetInstanceAccess",
      "RequestUploadCredentials",
      "ResolveAlias",
      "SearchGameSessions",
      "ValidateMatchmakingRuleSet"
    ],
    "List": [
      "ListAliases",
      "ListBuilds",
      "ListFleets",
      "ListGameServerGroups",
      "ListGameServers",
      "ListScripts",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type alias to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Alias.html
   *
   * @param aliasId - Identifier for the aliasId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlias(aliasId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}::alias/${AliasId}';
    arn = arn.replace('${AliasId}', aliasId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type build to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Build.html
   *
   * @param buildId - Identifier for the buildId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBuild(buildId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${AccountId}:build/${BuildId}';
    arn = arn.replace('${BuildId}', buildId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type script to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Script.html
   *
   * @param scriptId - Identifier for the scriptId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScript(scriptId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${AccountId}:script/${ScriptId}';
    arn = arn.replace('${ScriptId}', scriptId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_FleetAttributes.html
   *
   * @param fleetId - Identifier for the fleetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${Account}:fleet/${FleetId}';
    arn = arn.replace('${FleetId}', fleetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gameSessionQueue to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameSessionQueue.html
   *
   * @param gameSessionQueueName - Identifier for the gameSessionQueueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGameSessionQueue(gameSessionQueueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${Account}:gamesessionqueue/${GameSessionQueueName}';
    arn = arn.replace('${GameSessionQueueName}', gameSessionQueueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type matchmakingConfiguration to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingConfiguration.html
   *
   * @param matchmakingConfigurationName - Identifier for the matchmakingConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMatchmakingConfiguration(matchmakingConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${Account}:matchmakingconfiguration/${MatchmakingConfigurationName}';
    arn = arn.replace('${MatchmakingConfigurationName}', matchmakingConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type matchmakingRuleSet to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingRuleSet.html
   *
   * @param matchmakingRuleSetName - Identifier for the matchmakingRuleSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMatchmakingRuleSet(matchmakingRuleSetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${Account}:matchmakingruleset/${MatchmakingRuleSetName}';
    arn = arn.replace('${MatchmakingRuleSetName}', matchmakingRuleSetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gameServerGroup to the statement
   *
   * https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameServerGroup.html
   *
   * @param gameServerGroupName - Identifier for the gameServerGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGameServerGroup(gameServerGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:gamelift:${Region}:${Account}:gameservergroup/${GameServerGroupName}';
    arn = arn.replace('${GameServerGroupName}', gameServerGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
