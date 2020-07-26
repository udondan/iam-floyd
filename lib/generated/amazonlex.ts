import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [lex](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lex extends PolicyStatement {
  public servicePrefix = 'lex';
  protected actionList: Actions = {
    "CreateBotVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_CreateBotVersion.html",
      "description": "Creates a new version based on the $LATEST version of the specified bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "CreateIntentVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_CreateIntentVersion.html",
      "description": "Creates a new version based on the $LATEST version of the specified intent.",
      "accessLevel": "Write",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "CreateSlotTypeVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_CreateSlotTypeVersion.html",
      "description": "Creates a new version based on the $LATEST version of the specified slot type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "DeleteBot": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBot.html",
      "description": "Deletes all versions of a bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "DeleteBotAlias": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotAlias.html",
      "description": "Deletes an alias for a specific bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": true
        }
      }
    },
    "DeleteBotChannelAssociation": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotChannelAssociation.html",
      "description": "Deletes the association between a Amazon Lex bot alias and a messaging platform.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DeleteBotVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotVersion.html",
      "description": "Deletes a specific version of a bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "DeleteIntent": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntent.html",
      "description": "Deletes all versions of an intent.",
      "accessLevel": "Write",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "DeleteIntentVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntentVersion.html",
      "description": "Deletes a specific version of an intent.",
      "accessLevel": "Write",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "DeleteSession": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DeleteSession.html",
      "description": "Removes session information for a specified bot, alias, and user ID.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "DeleteSlotType": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotType.html",
      "description": "Deletes all versions of a slot type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "DeleteSlotTypeVersion": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotTypeVersion.html",
      "description": "Deletes a specific version of a slot type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "DeleteUtterances": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_DeleteUtterances.html",
      "description": "Deletes the information Amazon Lex maintains for utterances on a specific bot and userId.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "GetBot": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBot.html",
      "description": "Returns information for a specific bot. In addition to the bot name, the bot version or alias is required.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "GetBotAlias": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAlias.html",
      "description": "Returns information about a Amazon Lex bot alias.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bot alias": {
          "required": true
        }
      }
    },
    "GetBotAliases": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAliases.html",
      "description": "Returns a list of aliases for a given Amazon Lex bot.",
      "accessLevel": "List"
    },
    "GetBotChannelAssociation": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociation.html",
      "description": "Returns information about the association between a Amazon Lex bot and a messaging platform.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "GetBotChannelAssociations": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociations.html",
      "description": "Returns a list of all of the channels associated with a single bot.",
      "accessLevel": "List",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "GetBotVersions": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBotVersions.html",
      "description": "Returns information for all versions of a specific bot.",
      "accessLevel": "List",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "GetBots": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBots.html",
      "description": "Returns information for the $LATEST version of all bots, subject to filters provided by the client.",
      "accessLevel": "List"
    },
    "GetBuiltinIntent": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntent.html",
      "description": "Returns information about a built-in intent.",
      "accessLevel": "Read"
    },
    "GetBuiltinIntents": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntents.html",
      "description": "Gets a list of built-in intents that meet the specified criteria.",
      "accessLevel": "Read"
    },
    "GetBuiltinSlotTypes": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinSlotTypes.html",
      "description": "Gets a list of built-in slot types that meet the specified criteria.",
      "accessLevel": "Read"
    },
    "GetExport": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetExport.html",
      "description": "Exports Amazon Lex Resource in a requested format.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "GetImport": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetImport.html",
      "description": "Gets information about an import job started with StartImport.",
      "accessLevel": "Read"
    },
    "GetIntent": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetIntent.html",
      "description": "Returns information for a specific intent. In addition to the intent name, you must also specify the intent version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "GetIntentVersions": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetIntentVersions.html",
      "description": "Returns information for all versions of a specific intent.",
      "accessLevel": "List",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "GetIntents": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetIntents.html",
      "description": "Returns information for the $LATEST version of all intents, subject to filters provided by the client.",
      "accessLevel": "List"
    },
    "GetSession": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html",
      "description": "Returns session information for a specified bot, alias, and user ID.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "GetSlotType": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotType.html",
      "description": "Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must also specify the slot type version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "GetSlotTypeVersions": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypeVersions.html",
      "description": "Returns information for all versions of a specific slot type.",
      "accessLevel": "List",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "GetSlotTypes": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypes.html",
      "description": "Returns information for the $LATEST version of all slot types, subject to filters provided by the client.",
      "accessLevel": "List"
    },
    "GetUtterancesView": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_GetUtterancesView.html",
      "description": "Returns a view of aggregate utterance data for versions of a bot for a recent time period.",
      "accessLevel": "List",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_ListTagsForResource.html",
      "description": "Lists tags for a Lex resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "bot": {
          "required": false
        },
        "bot alias": {
          "required": false
        },
        "channel": {
          "required": false
        }
      }
    },
    "PostContent": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html",
      "description": "Sends user input (text or speech) to Amazon Lex.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "PostText": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html",
      "description": "Sends user input (text-only) to Amazon Lex.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "PutBot": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html",
      "description": "Creates or updates the $LATEST version of a Amazon Lex conversational bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot version": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "PutBotAlias": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_PutBotAlias.html",
      "description": "Creates or updates an alias for the specific bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "PutIntent": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html",
      "description": "Creates or updates the $LATEST version of an intent.",
      "accessLevel": "Write",
      "resourceTypes": {
        "intent version": {
          "required": true
        }
      }
    },
    "PutSession": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PutSession.html",
      "description": "Creates a new session or modifies an existing session with an Amazon Lex bot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bot alias": {
          "required": false
        },
        "bot version": {
          "required": false
        }
      }
    },
    "PutSlotType": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_PutSlotType.html",
      "description": "Creates or updates the $LATEST version of a slot type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "slottype version": {
          "required": true
        }
      }
    },
    "StartImport": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_StartImport.html",
      "description": "Starts a job to import a resource to Amazon Lex.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_TagResource.html",
      "description": "Adds or overwrites tags to a Lex resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "bot": {
          "required": false
        },
        "bot alias": {
          "required": false
        },
        "channel": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_UntagResource.html",
      "description": "Removes tags from a Lex resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "bot": {
          "required": false
        },
        "bot alias": {
          "required": false
        },
        "channel": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "bot": {
      "name": "bot",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "bot version": {
      "name": "bot version",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}:${BotVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "bot alias": {
      "name": "bot alias",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_BotAliasMetadata.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}:${BotAlias}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "channel": {
      "name": "channel",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_BotChannelAssociation.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:bot-channel:${BotName}:${BotAlias}:${ChannelName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "intent version": {
      "name": "intent version",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_Intent.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:intent:${IntentName}:${IntentVersion}",
      "conditionKeys": []
    },
    "slottype version": {
      "name": "slottype version",
      "url": "https://docs.aws.amazon.com/lex/latest/dg/API_SlotTypeMetadata.html",
      "arn": "arn:${Partition}:lex:${Region}:${Account}:slottype:${SlotName}:${SlotVersion}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [lex](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new version based on the $LATEST version of the specified bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateBotVersion.html
   */
  public createBotVersion() {
    this.add('lex:CreateBotVersion');
    return this;
  }

  /**
   * Creates a new version based on the $LATEST version of the specified intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateIntentVersion.html
   */
  public createIntentVersion() {
    this.add('lex:CreateIntentVersion');
    return this;
  }

  /**
   * Creates a new version based on the $LATEST version of the specified slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateSlotTypeVersion.html
   */
  public createSlotTypeVersion() {
    this.add('lex:CreateSlotTypeVersion');
    return this;
  }

  /**
   * Deletes all versions of a bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBot.html
   */
  public deleteBot() {
    this.add('lex:DeleteBot');
    return this;
  }

  /**
   * Deletes an alias for a specific bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotAlias.html
   */
  public deleteBotAlias() {
    this.add('lex:DeleteBotAlias');
    return this;
  }

  /**
   * Deletes the association between a Amazon Lex bot alias and a messaging platform.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotChannelAssociation.html
   */
  public deleteBotChannelAssociation() {
    this.add('lex:DeleteBotChannelAssociation');
    return this;
  }

  /**
   * Deletes a specific version of a bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotVersion.html
   */
  public deleteBotVersion() {
    this.add('lex:DeleteBotVersion');
    return this;
  }

  /**
   * Deletes all versions of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntent.html
   */
  public deleteIntent() {
    this.add('lex:DeleteIntent');
    return this;
  }

  /**
   * Deletes a specific version of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntentVersion.html
   */
  public deleteIntentVersion() {
    this.add('lex:DeleteIntentVersion');
    return this;
  }

  /**
   * Removes session information for a specified bot, alias, and user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DeleteSession.html
   */
  public deleteSession() {
    this.add('lex:DeleteSession');
    return this;
  }

  /**
   * Deletes all versions of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotType.html
   */
  public deleteSlotType() {
    this.add('lex:DeleteSlotType');
    return this;
  }

  /**
   * Deletes a specific version of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotTypeVersion.html
   */
  public deleteSlotTypeVersion() {
    this.add('lex:DeleteSlotTypeVersion');
    return this;
  }

  /**
   * Deletes the information Amazon Lex maintains for utterances on a specific bot and userId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteUtterances.html
   */
  public deleteUtterances() {
    this.add('lex:DeleteUtterances');
    return this;
  }

  /**
   * Returns information for a specific bot. In addition to the bot name, the bot version or alias is required.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBot.html
   */
  public getBot() {
    this.add('lex:GetBot');
    return this;
  }

  /**
   * Returns information about a Amazon Lex bot alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAlias.html
   */
  public getBotAlias() {
    this.add('lex:GetBotAlias');
    return this;
  }

  /**
   * Returns a list of aliases for a given Amazon Lex bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAliases.html
   */
  public getBotAliases() {
    this.add('lex:GetBotAliases');
    return this;
  }

  /**
   * Returns information about the association between a Amazon Lex bot and a messaging platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociation.html
   */
  public getBotChannelAssociation() {
    this.add('lex:GetBotChannelAssociation');
    return this;
  }

  /**
   * Returns a list of all of the channels associated with a single bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociations.html
   */
  public getBotChannelAssociations() {
    this.add('lex:GetBotChannelAssociations');
    return this;
  }

  /**
   * Returns information for all versions of a specific bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotVersions.html
   */
  public getBotVersions() {
    this.add('lex:GetBotVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all bots, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBots.html
   */
  public getBots() {
    this.add('lex:GetBots');
    return this;
  }

  /**
   * Returns information about a built-in intent.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntent.html
   */
  public getBuiltinIntent() {
    this.add('lex:GetBuiltinIntent');
    return this;
  }

  /**
   * Gets a list of built-in intents that meet the specified criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntents.html
   */
  public getBuiltinIntents() {
    this.add('lex:GetBuiltinIntents');
    return this;
  }

  /**
   * Gets a list of built-in slot types that meet the specified criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinSlotTypes.html
   */
  public getBuiltinSlotTypes() {
    this.add('lex:GetBuiltinSlotTypes');
    return this;
  }

  /**
   * Exports Amazon Lex Resource in a requested format.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetExport.html
   */
  public getExport() {
    this.add('lex:GetExport');
    return this;
  }

  /**
   * Gets information about an import job started with StartImport.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetImport.html
   */
  public getImport() {
    this.add('lex:GetImport');
    return this;
  }

  /**
   * Returns information for a specific intent. In addition to the intent name, you must also specify the intent version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntent.html
   */
  public getIntent() {
    this.add('lex:GetIntent');
    return this;
  }

  /**
   * Returns information for all versions of a specific intent.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntentVersions.html
   */
  public getIntentVersions() {
    this.add('lex:GetIntentVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all intents, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntents.html
   */
  public getIntents() {
    this.add('lex:GetIntents');
    return this;
  }

  /**
   * Returns session information for a specified bot, alias, and user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html
   */
  public getSession() {
    this.add('lex:GetSession');
    return this;
  }

  /**
   * Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must also specify the slot type version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotType.html
   */
  public getSlotType() {
    this.add('lex:GetSlotType');
    return this;
  }

  /**
   * Returns information for all versions of a specific slot type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypeVersions.html
   */
  public getSlotTypeVersions() {
    this.add('lex:GetSlotTypeVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all slot types, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypes.html
   */
  public getSlotTypes() {
    this.add('lex:GetSlotTypes');
    return this;
  }

  /**
   * Returns a view of aggregate utterance data for versions of a bot for a recent time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetUtterancesView.html
   */
  public getUtterancesView() {
    this.add('lex:GetUtterancesView');
    return this;
  }

  /**
   * Lists tags for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('lex:ListTagsForResource');
    return this;
  }

  /**
   * Sends user input (text or speech) to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html
   */
  public postContent() {
    this.add('lex:PostContent');
    return this;
  }

  /**
   * Sends user input (text-only) to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html
   */
  public postText() {
    this.add('lex:PostText');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of a Amazon Lex conversational bot.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html
   */
  public putBot() {
    this.add('lex:PutBot');
    return this;
  }

  /**
   * Creates or updates an alias for the specific bot.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutBotAlias.html
   */
  public putBotAlias() {
    this.add('lex:PutBotAlias');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html
   */
  public putIntent() {
    this.add('lex:PutIntent');
    return this;
  }

  /**
   * Creates a new session or modifies an existing session with an Amazon Lex bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PutSession.html
   */
  public putSession() {
    this.add('lex:PutSession');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutSlotType.html
   */
  public putSlotType() {
    this.add('lex:PutSlotType');
    return this;
  }

  /**
   * Starts a job to import a resource to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_StartImport.html
   */
  public startImport() {
    this.add('lex:StartImport');
    return this;
  }

  /**
   * Adds or overwrites tags to a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_TagResource.html
   */
  public tagResource() {
    this.add('lex:TagResource');
    return this;
  }

  /**
   * Removes tags from a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_UntagResource.html
   */
  public untagResource() {
    this.add('lex:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type bot to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html
   *
   * @param botName - Identifier for the botName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onBot(botName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}';
    arn = arn.replace('${BotName}', botName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bot version to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html
   *
   * @param botName - Identifier for the botName.
   * @param botVersion - Identifier for the botVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onBotVersion(botName: string, botVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}:${BotVersion}';
    arn = arn.replace('${BotName}', botName);
    arn = arn.replace('${BotVersion}', botVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bot alias to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_BotAliasMetadata.html
   *
   * @param botName - Identifier for the botName.
   * @param botAlias - Identifier for the botAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onBotAlias(botName: string, botAlias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot:${BotName}:${BotAlias}';
    arn = arn.replace('${BotName}', botName);
    arn = arn.replace('${BotAlias}', botAlias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_BotChannelAssociation.html
   *
   * @param botName - Identifier for the botName.
   * @param botAlias - Identifier for the botAlias.
   * @param channelName - Identifier for the channelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onChannel(botName: string, botAlias: string, channelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot-channel:${BotName}:${BotAlias}:${ChannelName}';
    arn = arn.replace('${BotName}', botName);
    arn = arn.replace('${BotAlias}', botAlias);
    arn = arn.replace('${ChannelName}', channelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type intent version to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_Intent.html
   *
   * @param intentName - Identifier for the intentName.
   * @param intentVersion - Identifier for the intentVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIntentVersion(intentName: string, intentVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:intent:${IntentName}:${IntentVersion}';
    arn = arn.replace('${IntentName}', intentName);
    arn = arn.replace('${IntentVersion}', intentVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type slottype version to the statement
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_SlotTypeMetadata.html
   *
   * @param slotName - Identifier for the slotName.
   * @param slotVersion - Identifier for the slotVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSlottypeVersion(slotName: string, slotVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:slottype:${SlotName}:${SlotVersion}';
    arn = arn.replace('${SlotName}', slotName);
    arn = arn.replace('${SlotVersion}', slotVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Enables you to control access based on the intents included in the request.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociatedIntents(value: string | string[], operator?: string) {
    return this.if(`lex:associatedIntents`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the slot types included in the request.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociatedSlotTypes(value: string | string[], operator?: string) {
    return this.if(`lex:associatedSlotTypes`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the channel type included in the request.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChannelType(value: string | string[], operator?: string) {
    return this.if(`lex:channelType`, value, operator || 'StringLike');
  }
}
