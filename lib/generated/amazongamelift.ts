import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [gamelift](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Gamelift extends PolicyStatement {
  public servicePrefix = 'gamelift';
  protected actionList: Actions = {
    "AcceptMatch": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html",
      "description": "Registers player acceptance or rejection of a proposed FlexMatch match.",
      "accessLevel": "Write"
    },
    "ClaimGameServer": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html",
      "description": "Locates and reserves a game server to host a new game session.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html",
      "description": "Defines a new alias for a fleet.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateBuild": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html",
      "description": "Creates a new game build using files stored in an Amazon S3 bucket.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFleet": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html",
      "description": "Creates a new fleet of computing resources to run your game servers.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameServerGroup.html",
      "description": "Creates a new game server group, sets up a corresponding Auto Scaling group, and launches instances to host game servers.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGameSession": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html",
      "description": "Starts a new game session on a specified fleet.",
      "accessLevel": "Write"
    },
    "CreateGameSessionQueue": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html",
      "description": "Sets up a new queue for processing new game session placement requests.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMatchmakingConfiguration": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html",
      "description": "Creates a new FlexMatch matchmaker.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMatchmakingRuleSet": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html",
      "description": "Creates a new matchmaking rule set for FlexMatch.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePlayerSession": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html",
      "description": "Reserves an available game session slot for a player.",
      "accessLevel": "Write"
    },
    "CreatePlayerSessions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html",
      "description": "Reserves available game session slots for multiple players.",
      "accessLevel": "Write"
    },
    "CreateScript": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html",
      "description": "Creates a new Realtime Servers script.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateVpcPeeringAuthorization": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html",
      "description": "Allows GameLift to create or delete a peering connection between a GameLift fleet VPC and a VPC on another AWS account.",
      "accessLevel": "Write"
    },
    "CreateVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html",
      "description": "Establishes a peering connection between your GameLift fleet VPC and a VPC on another account.",
      "accessLevel": "Write"
    },
    "DeleteAlias": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html",
      "description": "Deletes an alias.",
      "accessLevel": "Write",
      "resourceTypes": {
        "alias": {
          "required": true
        }
      }
    },
    "DeleteBuild": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html",
      "description": "Deletes a game build.",
      "accessLevel": "Write",
      "resourceTypes": {
        "build": {
          "required": true
        }
      }
    },
    "DeleteFleet": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html",
      "description": "Deletes an empty fleet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DeleteGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html",
      "description": "Permanently deletes a game server group and terminates FleetIQ activity for the corresponding Auto Scaling group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "DeleteGameSessionQueue": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html",
      "description": "Deletes an existing game session queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameSessionQueue": {
          "required": true
        }
      }
    },
    "DeleteMatchmakingConfiguration": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html",
      "description": "Deletes an existing FlexMatch matchmaker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "matchmakingConfiguration": {
          "required": true
        }
      }
    },
    "DeleteMatchmakingRuleSet": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html",
      "description": "Deletes an existing FlexMatch matchmaking rule set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "matchmakingRuleSet": {
          "required": true
        }
      }
    },
    "DeleteScalingPolicy": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html",
      "description": "Deletes a set of auto-scaling rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DeleteScript": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html",
      "description": "Deletes a Realtime Servers script.",
      "accessLevel": "Write",
      "resourceTypes": {
        "script": {
          "required": true
        }
      }
    },
    "DeleteVpcPeeringAuthorization": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html",
      "description": "Cancels a VPC peering authorization.",
      "accessLevel": "Write"
    },
    "DeleteVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html",
      "description": "Removes a peering connection between VPCs.",
      "accessLevel": "Write"
    },
    "DeregisterGameServer": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html",
      "description": "Removes a game server from a game server group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "DescribeAlias": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html",
      "description": "Retrieves properties for an alias.",
      "accessLevel": "Read",
      "resourceTypes": {
        "alias": {
          "required": true
        }
      }
    },
    "DescribeBuild": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html",
      "description": "Retrieves properties for a game build.",
      "accessLevel": "Read",
      "resourceTypes": {
        "build": {
          "required": true
        }
      }
    },
    "DescribeEC2InstanceLimits": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html",
      "description": "Retrieves the maximum allowed and current usage for EC2 instance types.",
      "accessLevel": "Read"
    },
    "DescribeFleetAttributes": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html",
      "description": "Retrieves general properties, including status, for fleets.",
      "accessLevel": "Read"
    },
    "DescribeFleetCapacity": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html",
      "description": "Retrieves the current capacity setting for fleets.",
      "accessLevel": "Read"
    },
    "DescribeFleetEvents": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html",
      "description": "Retrieves entries from a fleet's event log.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeFleetPortSettings": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html",
      "description": "Retrieves the inbound connection permissions for a fleet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeFleetUtilization": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html",
      "description": "Retrieves utilization statistics for fleets.",
      "accessLevel": "Read"
    },
    "DescribeGameServer": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html",
      "description": "Retrieves properties for a game server.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "DescribeGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html",
      "description": "Retrieves properties for a game server group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "DescribeGameServerInstances": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html",
      "description": "Retrieves the status of EC2 instances in a game server group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "DescribeGameSessionDetails": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html",
      "description": "Retrieves properties for game sessions in a fleet, including the protection policy.",
      "accessLevel": "Read"
    },
    "DescribeGameSessionPlacement": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html",
      "description": "Retrieves details of a game session placement request.",
      "accessLevel": "Read"
    },
    "DescribeGameSessionQueues": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html",
      "description": "Retrieves properties for game session queues.",
      "accessLevel": "Read"
    },
    "DescribeGameSessions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html",
      "description": "Retrieves properties for game sessions in a fleet.",
      "accessLevel": "Read"
    },
    "DescribeInstances": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html",
      "description": "Retrieves information about instances in a fleet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeMatchmaking": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html",
      "description": "Retrieves details of matchmaking tickets.",
      "accessLevel": "Read"
    },
    "DescribeMatchmakingConfigurations": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html",
      "description": "Retrieves properties for FlexMatch matchmakers.",
      "accessLevel": "Read"
    },
    "DescribeMatchmakingRuleSets": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html",
      "description": "Retrieves properties for FlexMatch matchmaking rule sets.",
      "accessLevel": "Read"
    },
    "DescribePlayerSessions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html",
      "description": "Retrieves properties for player sessions in a game session.",
      "accessLevel": "Read"
    },
    "DescribeRuntimeConfiguration": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html",
      "description": "Retrieves the current runtime configuration for a fleet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeScalingPolicies": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html",
      "description": "Retrieves all scaling policies that are applied to a fleet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeScript": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html",
      "description": "Retrieves properties for a Realtime Servers script.",
      "accessLevel": "Read",
      "resourceTypes": {
        "script": {
          "required": true
        }
      }
    },
    "DescribeVpcPeeringAuthorizations": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html",
      "description": "Retrieves valid VPC peering authorizations.",
      "accessLevel": "Read"
    },
    "DescribeVpcPeeringConnections": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html",
      "description": "Retrieves details on active or pending VPC peering connections.",
      "accessLevel": "Read"
    },
    "GetGameSessionLogUrl": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html",
      "description": "Retrieves the location of stored logs for a game session.",
      "accessLevel": "Read"
    },
    "GetInstanceAccess": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html",
      "description": "Requests remote access to a specified fleet instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListAliases": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html",
      "description": "Retrieves all aliases that are defined in the current region.",
      "accessLevel": "List"
    },
    "ListBuilds": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html",
      "description": "Retrieves all game build in the current region.",
      "accessLevel": "List"
    },
    "ListFleets": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html",
      "description": "Retrieves a list of fleet IDs for all fleets in the current region.",
      "accessLevel": "List"
    },
    "ListGameServerGroups": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html",
      "description": "Retrieves all game server groups that are defined in the current region.",
      "accessLevel": "List"
    },
    "ListGameServers": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html",
      "description": "Retrieves all game servers that are currently running in a game server group.",
      "accessLevel": "List",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "ListScripts": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html",
      "description": "Retrieves properties for all Realtime Servers scripts in the current region.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html",
      "description": "Lists tags for GameLift resources",
      "accessLevel": "List",
      "resourceTypes": {
        "alias": {
          "required": false
        },
        "build": {
          "required": false
        },
        "fleet": {
          "required": false
        },
        "gameServerGroup": {
          "required": false
        },
        "gameSessionQueue": {
          "required": false
        },
        "matchmakingConfiguration": {
          "required": false
        },
        "matchmakingRuleSet": {
          "required": false
        },
        "script": {
          "required": false
        }
      }
    },
    "PutScalingPolicy": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html",
      "description": "Creates or updates a fleet auto-scaling policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "RegisterGameServer": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html",
      "description": "Notifies GameLift FleetIQ when a new game server is ready to host gameplay.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "RequestUploadCredentials": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html",
      "description": "Retrieves fresh upload credentials to use when uploading a new game build.",
      "accessLevel": "Read",
      "resourceTypes": {
        "build": {
          "required": true
        }
      }
    },
    "ResolveAlias": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html",
      "description": "Retrieves the fleet ID associated with an alias.",
      "accessLevel": "Read",
      "resourceTypes": {
        "alias": {
          "required": true
        }
      }
    },
    "ResumeGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html",
      "description": "Reinstates suspended FleetIQ activity for a game server group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "SearchGameSessions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html",
      "description": "Retrieves game sessions that match a set of search criteria.",
      "accessLevel": "Read"
    },
    "StartFleetActions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html",
      "description": "Resumes auto-scaling activity on a fleet after it was suspended with StopFleetActions().",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "StartGameSessionPlacement": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html",
      "description": "Sends a game session placement request to a game session queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameSessionQueue": {
          "required": true
        }
      }
    },
    "StartMatchBackfill": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html",
      "description": "Requests FlexMatch matchmaking to fill available player slots in an existing game session.",
      "accessLevel": "Write"
    },
    "StartMatchmaking": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html",
      "description": "Requests FlexMatch matchmaking for one or a group of players and game session placement for a resulting match.",
      "accessLevel": "Write"
    },
    "StopFleetActions": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html",
      "description": "Suspends auto-scaling activity on a fleet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "StopGameSessionPlacement": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html",
      "description": "Cancels a game session placement request that is in progress.",
      "accessLevel": "Write"
    },
    "StopMatchmaking": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html",
      "description": "Cancels a matchmaking or match backfill request that is in progress.",
      "accessLevel": "Write"
    },
    "SuspendGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html",
      "description": "Temporarily stops FleetIQ activity for a game server group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html",
      "description": "Tags GameLift resources",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "alias": {
          "required": false
        },
        "build": {
          "required": false
        },
        "fleet": {
          "required": false
        },
        "gameServerGroup": {
          "required": false
        },
        "gameSessionQueue": {
          "required": false
        },
        "matchmakingConfiguration": {
          "required": false
        },
        "matchmakingRuleSet": {
          "required": false
        },
        "script": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html",
      "description": "Untags GameLift resources",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "alias": {
          "required": false
        },
        "build": {
          "required": false
        },
        "fleet": {
          "required": false
        },
        "gameServerGroup": {
          "required": false
        },
        "gameSessionQueue": {
          "required": false
        },
        "matchmakingConfiguration": {
          "required": false
        },
        "matchmakingRuleSet": {
          "required": false
        },
        "script": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAlias": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html",
      "description": "Updates the properties of an existing alias.",
      "accessLevel": "Write",
      "resourceTypes": {
        "alias": {
          "required": true
        }
      }
    },
    "UpdateBuild": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html",
      "description": "Updates an existing build's metadata.",
      "accessLevel": "Write",
      "resourceTypes": {
        "build": {
          "required": true
        }
      }
    },
    "UpdateFleetAttributes": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html",
      "description": "Updates the general properties of an existing fleet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateFleetCapacity": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html",
      "description": "Adjusts a fleet's capacity settings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateFleetPortSettings": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html",
      "description": "Adjusts a fleet's port settings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateGameServer": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html",
      "description": "Changes game server properties, health status, or utilization status.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "UpdateGameServerGroup": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html",
      "description": "Updates properties for game server group, including allowed instance types.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameServerGroup": {
          "required": true
        }
      }
    },
    "UpdateGameSession": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html",
      "description": "Updates the properties of an existing game session.",
      "accessLevel": "Write"
    },
    "UpdateGameSessionQueue": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html",
      "description": "Updates properties of an existing game session queue.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gameSessionQueue": {
          "required": true
        }
      }
    },
    "UpdateMatchmakingConfiguration": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html",
      "description": "Updates properties of an existing FlexMatch matchmaking configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "matchmakingConfiguration": {
          "required": true
        }
      }
    },
    "UpdateRuntimeConfiguration": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html",
      "description": "Updates how server processes are configured on instances in an existing fleet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateScript": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html",
      "description": "Updates the metadata and content of an existing Realtime Servers script.",
      "accessLevel": "Write",
      "resourceTypes": {
        "script": {
          "required": true
        }
      }
    },
    "ValidateMatchmakingRuleSet": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html",
      "description": "Validates the syntax of a FlexMatch matchmaking rule set.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "alias": {
      "name": "alias",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Alias.html",
      "arn": "arn:${Partition}:gamelift:${Region}::alias/${AliasId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "build": {
      "name": "build",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Build.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${AccountId}:build/${BuildId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "script": {
      "name": "script",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Script.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${AccountId}:script/${ScriptId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "fleet": {
      "name": "fleet",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_FleetAttributes.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${Account}:fleet/${FleetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "gameSessionQueue": {
      "name": "gameSessionQueue",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameSessionQueue.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${Account}:gamesessionqueue/${GameSessionQueueName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "matchmakingConfiguration": {
      "name": "matchmakingConfiguration",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingConfiguration.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${Account}:matchmakingconfiguration/${MatchmakingConfigurationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "matchmakingRuleSet": {
      "name": "matchmakingRuleSet",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingRuleSet.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${Account}:matchmakingruleset/${MatchmakingRuleSetName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "gameServerGroup": {
      "name": "gameServerGroup",
      "url": "https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameServerGroup.html",
      "arn": "arn:${Partition}:gamelift:${Region}:${Account}:gameservergroup/${GameServerGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
    this.add('gamelift:AcceptMatch');
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
    this.add('gamelift:ClaimGameServer');
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
    this.add('gamelift:CreateAlias');
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
    this.add('gamelift:CreateBuild');
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
    this.add('gamelift:CreateFleet');
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
    this.add('gamelift:CreateGameServerGroup');
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
    this.add('gamelift:CreateGameSession');
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
    this.add('gamelift:CreateGameSessionQueue');
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
    this.add('gamelift:CreateMatchmakingConfiguration');
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
    this.add('gamelift:CreateMatchmakingRuleSet');
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
    this.add('gamelift:CreatePlayerSession');
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
    this.add('gamelift:CreatePlayerSessions');
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
    this.add('gamelift:CreateScript');
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
    this.add('gamelift:CreateVpcPeeringAuthorization');
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
    this.add('gamelift:CreateVpcPeeringConnection');
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
    this.add('gamelift:DeleteAlias');
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
    this.add('gamelift:DeleteBuild');
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
    this.add('gamelift:DeleteFleet');
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
    this.add('gamelift:DeleteGameServerGroup');
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
    this.add('gamelift:DeleteGameSessionQueue');
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
    this.add('gamelift:DeleteMatchmakingConfiguration');
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
    this.add('gamelift:DeleteMatchmakingRuleSet');
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
    this.add('gamelift:DeleteScalingPolicy');
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
    this.add('gamelift:DeleteScript');
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
    this.add('gamelift:DeleteVpcPeeringAuthorization');
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
    this.add('gamelift:DeleteVpcPeeringConnection');
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
    this.add('gamelift:DeregisterGameServer');
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
    this.add('gamelift:DescribeAlias');
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
    this.add('gamelift:DescribeBuild');
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
    this.add('gamelift:DescribeEC2InstanceLimits');
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
    this.add('gamelift:DescribeFleetAttributes');
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
    this.add('gamelift:DescribeFleetCapacity');
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
    this.add('gamelift:DescribeFleetEvents');
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
    this.add('gamelift:DescribeFleetPortSettings');
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
    this.add('gamelift:DescribeFleetUtilization');
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
    this.add('gamelift:DescribeGameServer');
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
    this.add('gamelift:DescribeGameServerGroup');
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
    this.add('gamelift:DescribeGameServerInstances');
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
    this.add('gamelift:DescribeGameSessionDetails');
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
    this.add('gamelift:DescribeGameSessionPlacement');
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
    this.add('gamelift:DescribeGameSessionQueues');
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
    this.add('gamelift:DescribeGameSessions');
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
    this.add('gamelift:DescribeInstances');
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
    this.add('gamelift:DescribeMatchmaking');
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
    this.add('gamelift:DescribeMatchmakingConfigurations');
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
    this.add('gamelift:DescribeMatchmakingRuleSets');
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
    this.add('gamelift:DescribePlayerSessions');
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
    this.add('gamelift:DescribeRuntimeConfiguration');
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
    this.add('gamelift:DescribeScalingPolicies');
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
    this.add('gamelift:DescribeScript');
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
    this.add('gamelift:DescribeVpcPeeringAuthorizations');
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
    this.add('gamelift:DescribeVpcPeeringConnections');
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
    this.add('gamelift:GetGameSessionLogUrl');
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
    this.add('gamelift:GetInstanceAccess');
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
    this.add('gamelift:ListAliases');
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
    this.add('gamelift:ListBuilds');
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
    this.add('gamelift:ListFleets');
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
    this.add('gamelift:ListGameServerGroups');
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
    this.add('gamelift:ListGameServers');
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
    this.add('gamelift:ListScripts');
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
    this.add('gamelift:ListTagsForResource');
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
    this.add('gamelift:PutScalingPolicy');
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
    this.add('gamelift:RegisterGameServer');
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
    this.add('gamelift:RequestUploadCredentials');
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
    this.add('gamelift:ResolveAlias');
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
    this.add('gamelift:ResumeGameServerGroup');
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
    this.add('gamelift:SearchGameSessions');
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
    this.add('gamelift:StartFleetActions');
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
    this.add('gamelift:StartGameSessionPlacement');
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
    this.add('gamelift:StartMatchBackfill');
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
    this.add('gamelift:StartMatchmaking');
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
    this.add('gamelift:StopFleetActions');
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
    this.add('gamelift:StopGameSessionPlacement');
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
    this.add('gamelift:StopMatchmaking');
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
    this.add('gamelift:SuspendGameServerGroup');
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
    this.add('gamelift:TagResource');
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
    this.add('gamelift:UntagResource');
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
    this.add('gamelift:UpdateAlias');
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
    this.add('gamelift:UpdateBuild');
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
    this.add('gamelift:UpdateFleetAttributes');
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
    this.add('gamelift:UpdateFleetCapacity');
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
    this.add('gamelift:UpdateFleetPortSettings');
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
    this.add('gamelift:UpdateGameServer');
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
    this.add('gamelift:UpdateGameServerGroup');
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
    this.add('gamelift:UpdateGameSession');
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
    this.add('gamelift:UpdateGameSessionQueue');
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
    this.add('gamelift:UpdateMatchmakingConfiguration');
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
    this.add('gamelift:UpdateRuntimeConfiguration');
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
    this.add('gamelift:UpdateScript');
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
    this.add('gamelift:ValidateMatchmakingRuleSet');
    return this;
  }

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

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAlias()
   * - .toCreateBuild()
   * - .toCreateFleet()
   * - .toCreateGameServerGroup()
   * - .toCreateGameSessionQueue()
   * - .toCreateMatchmakingConfiguration()
   * - .toCreateMatchmakingRuleSet()
   * - .toCreateScript()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - alias
   * - build
   * - script
   * - fleet
   * - gameSessionQueue
   * - matchmakingConfiguration
   * - matchmakingRuleSet
   * - gameServerGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAlias()
   * - .toCreateBuild()
   * - .toCreateFleet()
   * - .toCreateGameServerGroup()
   * - .toCreateGameSessionQueue()
   * - .toCreateMatchmakingConfiguration()
   * - .toCreateMatchmakingRuleSet()
   * - .toCreateScript()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
