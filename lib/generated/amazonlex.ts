import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [lex](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lex extends PolicyStatement {
  public servicePrefix = 'lex';

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
  public toCreateBotVersion() {
    this.to('lex:CreateBotVersion');
    return this;
  }

  /**
   * Creates a new version based on the $LATEST version of the specified intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateIntentVersion.html
   */
  public toCreateIntentVersion() {
    this.to('lex:CreateIntentVersion');
    return this;
  }

  /**
   * Creates a new version based on the $LATEST version of the specified slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateSlotTypeVersion.html
   */
  public toCreateSlotTypeVersion() {
    this.to('lex:CreateSlotTypeVersion');
    return this;
  }

  /**
   * Deletes all versions of a bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBot.html
   */
  public toDeleteBot() {
    this.to('lex:DeleteBot');
    return this;
  }

  /**
   * Deletes an alias for a specific bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotAlias.html
   */
  public toDeleteBotAlias() {
    this.to('lex:DeleteBotAlias');
    return this;
  }

  /**
   * Deletes the association between a Amazon Lex bot alias and a messaging platform.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotChannelAssociation.html
   */
  public toDeleteBotChannelAssociation() {
    this.to('lex:DeleteBotChannelAssociation');
    return this;
  }

  /**
   * Deletes a specific version of a bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotVersion.html
   */
  public toDeleteBotVersion() {
    this.to('lex:DeleteBotVersion');
    return this;
  }

  /**
   * Deletes all versions of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntent.html
   */
  public toDeleteIntent() {
    this.to('lex:DeleteIntent');
    return this;
  }

  /**
   * Deletes a specific version of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntentVersion.html
   */
  public toDeleteIntentVersion() {
    this.to('lex:DeleteIntentVersion');
    return this;
  }

  /**
   * Removes session information for a specified bot, alias, and user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DeleteSession.html
   */
  public toDeleteSession() {
    this.to('lex:DeleteSession');
    return this;
  }

  /**
   * Deletes all versions of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotType.html
   */
  public toDeleteSlotType() {
    this.to('lex:DeleteSlotType');
    return this;
  }

  /**
   * Deletes a specific version of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotTypeVersion.html
   */
  public toDeleteSlotTypeVersion() {
    this.to('lex:DeleteSlotTypeVersion');
    return this;
  }

  /**
   * Deletes the information Amazon Lex maintains for utterances on a specific bot and userId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteUtterances.html
   */
  public toDeleteUtterances() {
    this.to('lex:DeleteUtterances');
    return this;
  }

  /**
   * Returns information for a specific bot. In addition to the bot name, the bot version or alias is required.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBot.html
   */
  public toGetBot() {
    this.to('lex:GetBot');
    return this;
  }

  /**
   * Returns information about a Amazon Lex bot alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAlias.html
   */
  public toGetBotAlias() {
    this.to('lex:GetBotAlias');
    return this;
  }

  /**
   * Returns a list of aliases for a given Amazon Lex bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAliases.html
   */
  public toGetBotAliases() {
    this.to('lex:GetBotAliases');
    return this;
  }

  /**
   * Returns information about the association between a Amazon Lex bot and a messaging platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociation.html
   */
  public toGetBotChannelAssociation() {
    this.to('lex:GetBotChannelAssociation');
    return this;
  }

  /**
   * Returns a list of all of the channels associated with a single bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociations.html
   */
  public toGetBotChannelAssociations() {
    this.to('lex:GetBotChannelAssociations');
    return this;
  }

  /**
   * Returns information for all versions of a specific bot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotVersions.html
   */
  public toGetBotVersions() {
    this.to('lex:GetBotVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all bots, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBots.html
   */
  public toGetBots() {
    this.to('lex:GetBots');
    return this;
  }

  /**
   * Returns information about a built-in intent.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntent.html
   */
  public toGetBuiltinIntent() {
    this.to('lex:GetBuiltinIntent');
    return this;
  }

  /**
   * Gets a list of built-in intents that meet the specified criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntents.html
   */
  public toGetBuiltinIntents() {
    this.to('lex:GetBuiltinIntents');
    return this;
  }

  /**
   * Gets a list of built-in slot types that meet the specified criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinSlotTypes.html
   */
  public toGetBuiltinSlotTypes() {
    this.to('lex:GetBuiltinSlotTypes');
    return this;
  }

  /**
   * Exports Amazon Lex Resource in a requested format.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetExport.html
   */
  public toGetExport() {
    this.to('lex:GetExport');
    return this;
  }

  /**
   * Gets information about an import job started with StartImport.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetImport.html
   */
  public toGetImport() {
    this.to('lex:GetImport');
    return this;
  }

  /**
   * Returns information for a specific intent. In addition to the intent name, you must also specify the intent version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntent.html
   */
  public toGetIntent() {
    this.to('lex:GetIntent');
    return this;
  }

  /**
   * Returns information for all versions of a specific intent.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntentVersions.html
   */
  public toGetIntentVersions() {
    this.to('lex:GetIntentVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all intents, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntents.html
   */
  public toGetIntents() {
    this.to('lex:GetIntents');
    return this;
  }

  /**
   * Returns session information for a specified bot, alias, and user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html
   */
  public toGetSession() {
    this.to('lex:GetSession');
    return this;
  }

  /**
   * Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must also specify the slot type version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotType.html
   */
  public toGetSlotType() {
    this.to('lex:GetSlotType');
    return this;
  }

  /**
   * Returns information for all versions of a specific slot type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypeVersions.html
   */
  public toGetSlotTypeVersions() {
    this.to('lex:GetSlotTypeVersions');
    return this;
  }

  /**
   * Returns information for the $LATEST version of all slot types, subject to filters provided by the client.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypes.html
   */
  public toGetSlotTypes() {
    this.to('lex:GetSlotTypes');
    return this;
  }

  /**
   * Returns a view of aggregate utterance data for versions of a bot for a recent time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetUtterancesView.html
   */
  public toGetUtterancesView() {
    this.to('lex:GetUtterancesView');
    return this;
  }

  /**
   * Lists tags for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('lex:ListTagsForResource');
    return this;
  }

  /**
   * Sends user input (text or speech) to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html
   */
  public toPostContent() {
    this.to('lex:PostContent');
    return this;
  }

  /**
   * Sends user input (text-only) to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html
   */
  public toPostText() {
    this.to('lex:PostText');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of a Amazon Lex conversational bot.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html
   */
  public toPutBot() {
    this.to('lex:PutBot');
    return this;
  }

  /**
   * Creates or updates an alias for the specific bot.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutBotAlias.html
   */
  public toPutBotAlias() {
    this.to('lex:PutBotAlias');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of an intent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html
   */
  public toPutIntent() {
    this.to('lex:PutIntent');
    return this;
  }

  /**
   * Creates a new session or modifies an existing session with an Amazon Lex bot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PutSession.html
   */
  public toPutSession() {
    this.to('lex:PutSession');
    return this;
  }

  /**
   * Creates or updates the $LATEST version of a slot type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutSlotType.html
   */
  public toPutSlotType() {
    this.to('lex:PutSlotType');
    return this;
  }

  /**
   * Starts a job to import a resource to Amazon Lex.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_StartImport.html
   */
  public toStartImport() {
    this.to('lex:StartImport');
    return this;
  }

  /**
   * Adds or overwrites tags to a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.to('lex:TagResource');
    return this;
  }

  /**
   * Removes tags from a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('lex:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateBotVersion",
      "CreateIntentVersion",
      "CreateSlotTypeVersion",
      "DeleteBot",
      "DeleteBotAlias",
      "DeleteBotChannelAssociation",
      "DeleteBotVersion",
      "DeleteIntent",
      "DeleteIntentVersion",
      "DeleteSession",
      "DeleteSlotType",
      "DeleteSlotTypeVersion",
      "DeleteUtterances",
      "PostContent",
      "PostText",
      "PutBot",
      "PutBotAlias",
      "PutIntent",
      "PutSession",
      "PutSlotType",
      "StartImport"
    ],
    "Read": [
      "GetBot",
      "GetBotAlias",
      "GetBotChannelAssociation",
      "GetBuiltinIntent",
      "GetBuiltinIntents",
      "GetBuiltinSlotTypes",
      "GetExport",
      "GetImport",
      "GetIntent",
      "GetSession",
      "GetSlotType",
      "ListTagsForResource"
    ],
    "List": [
      "GetBotAliases",
      "GetBotChannelAssociations",
      "GetBotVersions",
      "GetBots",
      "GetIntentVersions",
      "GetIntents",
      "GetSlotTypeVersions",
      "GetSlotTypes",
      "GetUtterancesView"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
