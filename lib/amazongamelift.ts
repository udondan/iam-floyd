import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service gamelift
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html
 */
export class Gamelift extends PolicyStatement {
  public servicePrefix = 'gamelift';
  public actions : Actions = {
    "AcceptMatch": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html",
      "description": "Registers player acceptance or rejection of a proposed FlexMatch match.",
      "accessLevel": "Write"
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
    "ListScripts": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html",
      "description": "Retrieves properties for all Realtime Servers scripts in the current region.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html",
      "description": "List Tags for GameLift Resource",
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
    "TagResource": {
      "url": "https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html",
      "description": "Tags GameLift Resources",
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
      "description": "Untagging GameLift Resources",
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

  /**
   * Registers player acceptance or rejection of a proposed FlexMatch match.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html
   */
  public acceptMatch () {
    this.add('gamelift:AcceptMatch');
    return this;
  }

  /**
   * Defines a new alias for a fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html
   */
  public createAlias () {
    this.add('gamelift:CreateAlias');
    return this;
  }

  /**
   * Creates a new game build using files stored in an Amazon S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html
   */
  public createBuild () {
    this.add('gamelift:CreateBuild');
    return this;
  }

  /**
   * Creates a new fleet of computing resources to run your game servers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html
   */
  public createFleet () {
    this.add('gamelift:CreateFleet');
    return this;
  }

  /**
   * Starts a new game session on a specified fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html
   */
  public createGameSession () {
    this.add('gamelift:CreateGameSession');
    return this;
  }

  /**
   * Sets up a new queue for processing new game session placement requests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html
   */
  public createGameSessionQueue () {
    this.add('gamelift:CreateGameSessionQueue');
    return this;
  }

  /**
   * Creates a new FlexMatch matchmaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html
   */
  public createMatchmakingConfiguration () {
    this.add('gamelift:CreateMatchmakingConfiguration');
    return this;
  }

  /**
   * Creates a new matchmaking rule set for FlexMatch.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html
   */
  public createMatchmakingRuleSet () {
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
  public createPlayerSession () {
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
  public createPlayerSessions () {
    this.add('gamelift:CreatePlayerSessions');
    return this;
  }

  /**
   * Creates a new Realtime Servers script.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html
   */
  public createScript () {
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
  public createVpcPeeringAuthorization () {
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
  public createVpcPeeringConnection () {
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
  public deleteAlias () {
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
  public deleteBuild () {
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
  public deleteFleet () {
    this.add('gamelift:DeleteFleet');
    return this;
  }

  /**
   * Deletes an existing game session queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html
   */
  public deleteGameSessionQueue () {
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
  public deleteMatchmakingConfiguration () {
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
  public deleteMatchmakingRuleSet () {
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
  public deleteScalingPolicy () {
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
  public deleteScript () {
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
  public deleteVpcPeeringAuthorization () {
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
  public deleteVpcPeeringConnection () {
    this.add('gamelift:DeleteVpcPeeringConnection');
    return this;
  }

  /**
   * Retrieves properties for an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html
   */
  public describeAlias () {
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
  public describeBuild () {
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
  public describeEC2InstanceLimits () {
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
  public describeFleetAttributes () {
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
  public describeFleetCapacity () {
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
  public describeFleetEvents () {
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
  public describeFleetPortSettings () {
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
  public describeFleetUtilization () {
    this.add('gamelift:DescribeFleetUtilization');
    return this;
  }

  /**
   * Retrieves properties for game sessions in a fleet, including the protection policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html
   */
  public describeGameSessionDetails () {
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
  public describeGameSessionPlacement () {
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
  public describeGameSessionQueues () {
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
  public describeGameSessions () {
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
  public describeInstances () {
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
  public describeMatchmaking () {
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
  public describeMatchmakingConfigurations () {
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
  public describeMatchmakingRuleSets () {
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
  public describePlayerSessions () {
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
  public describeRuntimeConfiguration () {
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
  public describeScalingPolicies () {
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
  public describeScript () {
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
  public describeVpcPeeringAuthorizations () {
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
  public describeVpcPeeringConnections () {
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
  public getGameSessionLogUrl () {
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
  public getInstanceAccess () {
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
  public listAliases () {
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
  public listBuilds () {
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
  public listFleets () {
    this.add('gamelift:ListFleets');
    return this;
  }

  /**
   * Retrieves properties for all Realtime Servers scripts in the current region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html
   */
  public listScripts () {
    this.add('gamelift:ListScripts');
    return this;
  }

  /**
   * List Tags for GameLift Resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
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
  public putScalingPolicy () {
    this.add('gamelift:PutScalingPolicy');
    return this;
  }

  /**
   * Retrieves fresh upload credentials to use when uploading a new game build.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html
   */
  public requestUploadCredentials () {
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
  public resolveAlias () {
    this.add('gamelift:ResolveAlias');
    return this;
  }

  /**
   * Retrieves game sessions that match a set of search criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html
   */
  public searchGameSessions () {
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
  public startFleetActions () {
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
  public startGameSessionPlacement () {
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
  public startMatchBackfill () {
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
  public startMatchmaking () {
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
  public stopFleetActions () {
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
  public stopGameSessionPlacement () {
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
  public stopMatchmaking () {
    this.add('gamelift:StopMatchmaking');
    return this;
  }

  /**
   * Tags GameLift Resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html
   */
  public tagResource () {
    this.add('gamelift:TagResource');
    return this;
  }

  /**
   * Untagging GameLift Resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html
   */
  public untagResource () {
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
  public updateAlias () {
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
  public updateBuild () {
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
  public updateFleetAttributes () {
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
  public updateFleetCapacity () {
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
  public updateFleetPortSettings () {
    this.add('gamelift:UpdateFleetPortSettings');
    return this;
  }

  /**
   * Updates the properties of an existing game session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html
   */
  public updateGameSession () {
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
  public updateGameSessionQueue () {
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
  public updateMatchmakingConfiguration () {
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
  public updateRuntimeConfiguration () {
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
  public updateScript () {
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
  public validateMatchmakingRuleSet () {
    this.add('gamelift:ValidateMatchmakingRuleSet');
    return this;
  }
}
