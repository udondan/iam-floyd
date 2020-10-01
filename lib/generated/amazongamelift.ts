import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [gamelift](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Gamelift extends PolicyStatement {
  public servicePrefix = 'gamelift';

  /**
   * Statement provider for service [gamelift](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html).
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
    this.to('gamelift:AcceptMatch');
    return this;
  }

  /**
   * Locates and reserves a game server to host a new game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html
   */
  public toClaimGameServer() {
    this.to('gamelift:ClaimGameServer');
    return this;
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
    this.to('gamelift:CreateAlias');
    return this;
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
    this.to('gamelift:CreateBuild');
    return this;
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
    this.to('gamelift:CreateFleet');
    return this;
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
    this.to('gamelift:CreateGameServerGroup');
    return this;
  }

  /**
   * Starts a new game session on a specified fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html
   */
  public toCreateGameSession() {
    this.to('gamelift:CreateGameSession');
    return this;
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
    this.to('gamelift:CreateGameSessionQueue');
    return this;
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
    this.to('gamelift:CreateMatchmakingConfiguration');
    return this;
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
    this.to('gamelift:CreateMatchmakingRuleSet');
    return this;
  }

  /**
   * Reserves an available game session slot for a player.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html
   */
  public toCreatePlayerSession() {
    this.to('gamelift:CreatePlayerSession');
    return this;
  }

  /**
   * Reserves available game session slots for multiple players.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html
   */
  public toCreatePlayerSessions() {
    this.to('gamelift:CreatePlayerSessions');
    return this;
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
    this.to('gamelift:CreateScript');
    return this;
  }

  /**
   * Allows GameLift to create or delete a peering connection between a GameLift fleet VPC and a VPC on another AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html
   */
  public toCreateVpcPeeringAuthorization() {
    this.to('gamelift:CreateVpcPeeringAuthorization');
    return this;
  }

  /**
   * Establishes a peering connection between your GameLift fleet VPC and a VPC on another account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html
   */
  public toCreateVpcPeeringConnection() {
    this.to('gamelift:CreateVpcPeeringConnection');
    return this;
  }

  /**
   * Deletes an alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    this.to('gamelift:DeleteAlias');
    return this;
  }

  /**
   * Deletes a game build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html
   */
  public toDeleteBuild() {
    this.to('gamelift:DeleteBuild');
    return this;
  }

  /**
   * Deletes an empty fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    this.to('gamelift:DeleteFleet');
    return this;
  }

  /**
   * Permanently deletes a game server group and terminates FleetIQ activity for the corresponding Auto Scaling group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html
   */
  public toDeleteGameServerGroup() {
    this.to('gamelift:DeleteGameServerGroup');
    return this;
  }

  /**
   * Deletes an existing game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html
   */
  public toDeleteGameSessionQueue() {
    this.to('gamelift:DeleteGameSessionQueue');
    return this;
  }

  /**
   * Deletes an existing FlexMatch matchmaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html
   */
  public toDeleteMatchmakingConfiguration() {
    this.to('gamelift:DeleteMatchmakingConfiguration');
    return this;
  }

  /**
   * Deletes an existing FlexMatch matchmaking rule set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html
   */
  public toDeleteMatchmakingRuleSet() {
    this.to('gamelift:DeleteMatchmakingRuleSet');
    return this;
  }

  /**
   * Deletes a set of auto-scaling rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html
   */
  public toDeleteScalingPolicy() {
    this.to('gamelift:DeleteScalingPolicy');
    return this;
  }

  /**
   * Deletes a Realtime Servers script.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html
   */
  public toDeleteScript() {
    this.to('gamelift:DeleteScript');
    return this;
  }

  /**
   * Cancels a VPC peering authorization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html
   */
  public toDeleteVpcPeeringAuthorization() {
    this.to('gamelift:DeleteVpcPeeringAuthorization');
    return this;
  }

  /**
   * Removes a peering connection between VPCs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html
   */
  public toDeleteVpcPeeringConnection() {
    this.to('gamelift:DeleteVpcPeeringConnection');
    return this;
  }

  /**
   * Removes a game server from a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html
   */
  public toDeregisterGameServer() {
    this.to('gamelift:DeregisterGameServer');
    return this;
  }

  /**
   * Retrieves properties for an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html
   */
  public toDescribeAlias() {
    this.to('gamelift:DescribeAlias');
    return this;
  }

  /**
   * Retrieves properties for a game build.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html
   */
  public toDescribeBuild() {
    this.to('gamelift:DescribeBuild');
    return this;
  }

  /**
   * Retrieves the maximum allowed and current usage for EC2 instance types.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html
   */
  public toDescribeEC2InstanceLimits() {
    this.to('gamelift:DescribeEC2InstanceLimits');
    return this;
  }

  /**
   * Retrieves general properties, including status, for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html
   */
  public toDescribeFleetAttributes() {
    this.to('gamelift:DescribeFleetAttributes');
    return this;
  }

  /**
   * Retrieves the current capacity setting for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html
   */
  public toDescribeFleetCapacity() {
    this.to('gamelift:DescribeFleetCapacity');
    return this;
  }

  /**
   * Retrieves entries from a fleet's event log.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html
   */
  public toDescribeFleetEvents() {
    this.to('gamelift:DescribeFleetEvents');
    return this;
  }

  /**
   * Retrieves the inbound connection permissions for a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html
   */
  public toDescribeFleetPortSettings() {
    this.to('gamelift:DescribeFleetPortSettings');
    return this;
  }

  /**
   * Retrieves utilization statistics for fleets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html
   */
  public toDescribeFleetUtilization() {
    this.to('gamelift:DescribeFleetUtilization');
    return this;
  }

  /**
   * Retrieves properties for a game server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html
   */
  public toDescribeGameServer() {
    this.to('gamelift:DescribeGameServer');
    return this;
  }

  /**
   * Retrieves properties for a game server group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html
   */
  public toDescribeGameServerGroup() {
    this.to('gamelift:DescribeGameServerGroup');
    return this;
  }

  /**
   * Retrieves the status of EC2 instances in a game server group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html
   */
  public toDescribeGameServerInstances() {
    this.to('gamelift:DescribeGameServerInstances');
    return this;
  }

  /**
   * Retrieves properties for game sessions in a fleet, including the protection policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html
   */
  public toDescribeGameSessionDetails() {
    this.to('gamelift:DescribeGameSessionDetails');
    return this;
  }

  /**
   * Retrieves details of a game session placement request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html
   */
  public toDescribeGameSessionPlacement() {
    this.to('gamelift:DescribeGameSessionPlacement');
    return this;
  }

  /**
   * Retrieves properties for game session queues.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html
   */
  public toDescribeGameSessionQueues() {
    this.to('gamelift:DescribeGameSessionQueues');
    return this;
  }

  /**
   * Retrieves properties for game sessions in a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html
   */
  public toDescribeGameSessions() {
    this.to('gamelift:DescribeGameSessions');
    return this;
  }

  /**
   * Retrieves information about instances in a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    this.to('gamelift:DescribeInstances');
    return this;
  }

  /**
   * Retrieves details of matchmaking tickets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html
   */
  public toDescribeMatchmaking() {
    this.to('gamelift:DescribeMatchmaking');
    return this;
  }

  /**
   * Retrieves properties for FlexMatch matchmakers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html
   */
  public toDescribeMatchmakingConfigurations() {
    this.to('gamelift:DescribeMatchmakingConfigurations');
    return this;
  }

  /**
   * Retrieves properties for FlexMatch matchmaking rule sets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html
   */
  public toDescribeMatchmakingRuleSets() {
    this.to('gamelift:DescribeMatchmakingRuleSets');
    return this;
  }

  /**
   * Retrieves properties for player sessions in a game session.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html
   */
  public toDescribePlayerSessions() {
    this.to('gamelift:DescribePlayerSessions');
    return this;
  }

  /**
   * Retrieves the current runtime configuration for a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html
   */
  public toDescribeRuntimeConfiguration() {
    this.to('gamelift:DescribeRuntimeConfiguration');
    return this;
  }

  /**
   * Retrieves all scaling policies that are applied to a fleet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html
   */
  public toDescribeScalingPolicies() {
    this.to('gamelift:DescribeScalingPolicies');
    return this;
  }

  /**
   * Retrieves properties for a Realtime Servers script.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html
   */
  public toDescribeScript() {
    this.to('gamelift:DescribeScript');
    return this;
  }

  /**
   * Retrieves valid VPC peering authorizations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html
   */
  public toDescribeVpcPeeringAuthorizations() {
    this.to('gamelift:DescribeVpcPeeringAuthorizations');
    return this;
  }

  /**
   * Retrieves details on active or pending VPC peering connections.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html
   */
  public toDescribeVpcPeeringConnections() {
    this.to('gamelift:DescribeVpcPeeringConnections');
    return this;
  }

  /**
   * Retrieves the location of stored logs for a game session.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html
   */
  public toGetGameSessionLogUrl() {
    this.to('gamelift:GetGameSessionLogUrl');
    return this;
  }

  /**
   * Requests remote access to a specified fleet instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html
   */
  public toGetInstanceAccess() {
    this.to('gamelift:GetInstanceAccess');
    return this;
  }

  /**
   * Retrieves all aliases that are defined in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html
   */
  public toListAliases() {
    this.to('gamelift:ListAliases');
    return this;
  }

  /**
   * Retrieves all game build in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html
   */
  public toListBuilds() {
    this.to('gamelift:ListBuilds');
    return this;
  }

  /**
   * Retrieves a list of fleet IDs for all fleets in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html
   */
  public toListFleets() {
    this.to('gamelift:ListFleets');
    return this;
  }

  /**
   * Retrieves all game server groups that are defined in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html
   */
  public toListGameServerGroups() {
    this.to('gamelift:ListGameServerGroups');
    return this;
  }

  /**
   * Retrieves all game servers that are currently running in a game server group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html
   */
  public toListGameServers() {
    this.to('gamelift:ListGameServers');
    return this;
  }

  /**
   * Retrieves properties for all Realtime Servers scripts in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html
   */
  public toListScripts() {
    this.to('gamelift:ListScripts');
    return this;
  }

  /**
   * Lists tags for GameLift resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('gamelift:ListTagsForResource');
    return this;
  }

  /**
   * Creates or updates a fleet auto-scaling policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html
   */
  public toPutScalingPolicy() {
    this.to('gamelift:PutScalingPolicy');
    return this;
  }

  /**
   * Notifies GameLift FleetIQ when a new game server is ready to host gameplay.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html
   */
  public toRegisterGameServer() {
    this.to('gamelift:RegisterGameServer');
    return this;
  }

  /**
   * Retrieves fresh upload credentials to use when uploading a new game build.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html
   */
  public toRequestUploadCredentials() {
    this.to('gamelift:RequestUploadCredentials');
    return this;
  }

  /**
   * Retrieves the fleet ID associated with an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html
   */
  public toResolveAlias() {
    this.to('gamelift:ResolveAlias');
    return this;
  }

  /**
   * Reinstates suspended FleetIQ activity for a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html
   */
  public toResumeGameServerGroup() {
    this.to('gamelift:ResumeGameServerGroup');
    return this;
  }

  /**
   * Retrieves game sessions that match a set of search criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html
   */
  public toSearchGameSessions() {
    this.to('gamelift:SearchGameSessions');
    return this;
  }

  /**
   * Resumes auto-scaling activity on a fleet after it was suspended with StopFleetActions().
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html
   */
  public toStartFleetActions() {
    this.to('gamelift:StartFleetActions');
    return this;
  }

  /**
   * Sends a game session placement request to a game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html
   */
  public toStartGameSessionPlacement() {
    this.to('gamelift:StartGameSessionPlacement');
    return this;
  }

  /**
   * Requests FlexMatch matchmaking to fill available player slots in an existing game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html
   */
  public toStartMatchBackfill() {
    this.to('gamelift:StartMatchBackfill');
    return this;
  }

  /**
   * Requests FlexMatch matchmaking for one or a group of players and game session placement for a resulting match.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html
   */
  public toStartMatchmaking() {
    this.to('gamelift:StartMatchmaking');
    return this;
  }

  /**
   * Suspends auto-scaling activity on a fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html
   */
  public toStopFleetActions() {
    this.to('gamelift:StopFleetActions');
    return this;
  }

  /**
   * Cancels a game session placement request that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html
   */
  public toStopGameSessionPlacement() {
    this.to('gamelift:StopGameSessionPlacement');
    return this;
  }

  /**
   * Cancels a matchmaking or match backfill request that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html
   */
  public toStopMatchmaking() {
    this.to('gamelift:StopMatchmaking');
    return this;
  }

  /**
   * Temporarily stops FleetIQ activity for a game server group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html
   */
  public toSuspendGameServerGroup() {
    this.to('gamelift:SuspendGameServerGroup');
    return this;
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
    this.to('gamelift:TagResource');
    return this;
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
    this.to('gamelift:UntagResource');
    return this;
  }

  /**
   * Updates the properties of an existing alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    this.to('gamelift:UpdateAlias');
    return this;
  }

  /**
   * Updates an existing build's metadata.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html
   */
  public toUpdateBuild() {
    this.to('gamelift:UpdateBuild');
    return this;
  }

  /**
   * Updates the general properties of an existing fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html
   */
  public toUpdateFleetAttributes() {
    this.to('gamelift:UpdateFleetAttributes');
    return this;
  }

  /**
   * Adjusts a fleet's capacity settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html
   */
  public toUpdateFleetCapacity() {
    this.to('gamelift:UpdateFleetCapacity');
    return this;
  }

  /**
   * Adjusts a fleet's port settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html
   */
  public toUpdateFleetPortSettings() {
    this.to('gamelift:UpdateFleetPortSettings');
    return this;
  }

  /**
   * Changes game server properties, health status, or utilization status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html
   */
  public toUpdateGameServer() {
    this.to('gamelift:UpdateGameServer');
    return this;
  }

  /**
   * Updates properties for game server group, including allowed instance types.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html
   */
  public toUpdateGameServerGroup() {
    this.to('gamelift:UpdateGameServerGroup');
    return this;
  }

  /**
   * Updates the properties of an existing game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html
   */
  public toUpdateGameSession() {
    this.to('gamelift:UpdateGameSession');
    return this;
  }

  /**
   * Updates properties of an existing game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html
   */
  public toUpdateGameSessionQueue() {
    this.to('gamelift:UpdateGameSessionQueue');
    return this;
  }

  /**
   * Updates properties of an existing FlexMatch matchmaking configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html
   */
  public toUpdateMatchmakingConfiguration() {
    this.to('gamelift:UpdateMatchmakingConfiguration');
    return this;
  }

  /**
   * Updates how server processes are configured on instances in an existing fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html
   */
  public toUpdateRuntimeConfiguration() {
    this.to('gamelift:UpdateRuntimeConfiguration');
    return this;
  }

  /**
   * Updates the metadata and content of an existing Realtime Servers script.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html
   */
  public toUpdateScript() {
    this.to('gamelift:UpdateScript');
    return this;
  }

  /**
   * Validates the syntax of a FlexMatch matchmaking rule set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html
   */
  public toValidateMatchmakingRuleSet() {
    this.to('gamelift:ValidateMatchmakingRuleSet');
    return this;
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
