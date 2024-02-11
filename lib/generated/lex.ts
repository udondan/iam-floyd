import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [lex](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlex.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lex extends PolicyStatement {
  public servicePrefix = 'lex';

  /**
   * Statement provider for service [lex](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlex.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Creates a new version based on the $LATEST version of the specified bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateBotVersion.html
   */
  public toCreateBotVersion() {
    return this.to('CreateBotVersion');
  }

  /**
   * Creates a new version based on the $LATEST version of the specified intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateIntentVersion.html
   */
  public toCreateIntentVersion() {
    return this.to('CreateIntentVersion');
  }

  /**
   * Creates a new version based on the $LATEST version of the specified slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_CreateSlotTypeVersion.html
   */
  public toCreateSlotTypeVersion() {
    return this.to('CreateSlotTypeVersion');
  }

  /**
   * Deletes all versions of a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBot.html
   */
  public toDeleteBot() {
    return this.to('DeleteBot');
  }

  /**
   * Deletes an alias for a specific bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotAlias.html
   */
  public toDeleteBotAlias() {
    return this.to('DeleteBotAlias');
  }

  /**
   * Deletes the association between a Amazon Lex bot alias and a messaging platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotChannelAssociation.html
   */
  public toDeleteBotChannelAssociation() {
    return this.to('DeleteBotChannelAssociation');
  }

  /**
   * Deletes a specific version of a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotVersion.html
   */
  public toDeleteBotVersion() {
    return this.to('DeleteBotVersion');
  }

  /**
   * Deletes all versions of an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntent.html
   */
  public toDeleteIntent() {
    return this.to('DeleteIntent');
  }

  /**
   * Deletes a specific version of an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntentVersion.html
   */
  public toDeleteIntentVersion() {
    return this.to('DeleteIntentVersion');
  }

  /**
   * Removes session information for a specified bot, alias, and user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DeleteSession.html
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Deletes all versions of a slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotType.html
   */
  public toDeleteSlotType() {
    return this.to('DeleteSlotType');
  }

  /**
   * Deletes a specific version of a slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotTypeVersion.html
   */
  public toDeleteSlotTypeVersion() {
    return this.to('DeleteSlotTypeVersion');
  }

  /**
   * Deletes the information Amazon Lex maintains for utterances on a specific bot and userId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_DeleteUtterances.html
   */
  public toDeleteUtterances() {
    return this.to('DeleteUtterances');
  }

  /**
   * Returns information for a specific bot. In addition to the bot name, the bot version or alias is required
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBot.html
   */
  public toGetBot() {
    return this.to('GetBot');
  }

  /**
   * Returns information about a Amazon Lex bot alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAlias.html
   */
  public toGetBotAlias() {
    return this.to('GetBotAlias');
  }

  /**
   * Returns a list of aliases for a given Amazon Lex bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAliases.html
   */
  public toGetBotAliases() {
    return this.to('GetBotAliases');
  }

  /**
   * Returns information about the association between a Amazon Lex bot and a messaging platform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociation.html
   */
  public toGetBotChannelAssociation() {
    return this.to('GetBotChannelAssociation');
  }

  /**
   * Returns a list of all of the channels associated with a single bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociations.html
   */
  public toGetBotChannelAssociations() {
    return this.to('GetBotChannelAssociations');
  }

  /**
   * Returns information for all versions of a specific bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBotVersions.html
   */
  public toGetBotVersions() {
    return this.to('GetBotVersions');
  }

  /**
   * Returns information for the $LATEST version of all bots, subject to filters provided by the client
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBots.html
   */
  public toGetBots() {
    return this.to('GetBots');
  }

  /**
   * Returns information about a built-in intent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntent.html
   */
  public toGetBuiltinIntent() {
    return this.to('GetBuiltinIntent');
  }

  /**
   * Gets a list of built-in intents that meet the specified criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntents.html
   */
  public toGetBuiltinIntents() {
    return this.to('GetBuiltinIntents');
  }

  /**
   * Gets a list of built-in slot types that meet the specified criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinSlotTypes.html
   */
  public toGetBuiltinSlotTypes() {
    return this.to('GetBuiltinSlotTypes');
  }

  /**
   * Exports Amazon Lex Resource in a requested format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetExport.html
   */
  public toGetExport() {
    return this.to('GetExport');
  }

  /**
   * Gets information about an import job started with StartImport
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetImport.html
   */
  public toGetImport() {
    return this.to('GetImport');
  }

  /**
   * Returns information for a specific intent. In addition to the intent name, you must also specify the intent version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntent.html
   */
  public toGetIntent() {
    return this.to('GetIntent');
  }

  /**
   * Returns information for all versions of a specific intent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntentVersions.html
   */
  public toGetIntentVersions() {
    return this.to('GetIntentVersions');
  }

  /**
   * Returns information for the $LATEST version of all intents, subject to filters provided by the client
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetIntents.html
   */
  public toGetIntents() {
    return this.to('GetIntents');
  }

  /**
   * Grants permission to view an ongoing or completed migration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetMigration.html
   */
  public toGetMigration() {
    return this.to('GetMigration');
  }

  /**
   * Grants permission to view list of migrations from Amazon Lex v1 to Amazon Lex v2
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetMigrations.html
   */
  public toGetMigrations() {
    return this.to('GetMigrations');
  }

  /**
   * Returns session information for a specified bot, alias, and user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must also specify the slot type version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotType.html
   */
  public toGetSlotType() {
    return this.to('GetSlotType');
  }

  /**
   * Returns information for all versions of a specific slot type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypeVersions.html
   */
  public toGetSlotTypeVersions() {
    return this.to('GetSlotTypeVersions');
  }

  /**
   * Returns information for the $LATEST version of all slot types, subject to filters provided by the client
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypes.html
   */
  public toGetSlotTypes() {
    return this.to('GetSlotTypes');
  }

  /**
   * Returns a view of aggregate utterance data for versions of a bot for a recent time period
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_GetUtterancesView.html
   */
  public toGetUtterancesView() {
    return this.to('GetUtterancesView');
  }

  /**
   * Lists tags for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Sends user input (text or speech) to Amazon Lex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html
   */
  public toPostContent() {
    return this.to('PostContent');
  }

  /**
   * Sends user input (text-only) to Amazon Lex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html
   */
  public toPostText() {
    return this.to('PostText');
  }

  /**
   * Creates or updates the $LATEST version of a Amazon Lex conversational bot
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
    return this.to('PutBot');
  }

  /**
   * Creates or updates an alias for the specific bot
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
    return this.to('PutBotAlias');
  }

  /**
   * Creates or updates the $LATEST version of an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html
   */
  public toPutIntent() {
    return this.to('PutIntent');
  }

  /**
   * Creates a new session or modifies an existing session with an Amazon Lex bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PutSession.html
   */
  public toPutSession() {
    return this.to('PutSession');
  }

  /**
   * Creates or updates the $LATEST version of a slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutSlotType.html
   */
  public toPutSlotType() {
    return this.to('PutSlotType');
  }

  /**
   * Starts a job to import a resource to Amazon Lex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_StartImport.html
   */
  public toStartImport() {
    return this.to('StartImport');
  }

  /**
   * Grants permission to migrate a bot from Amazon Lex v1 to Amazon Lex v2
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_StartMigration.html
   */
  public toStartMigration() {
    return this.to('StartMigration');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBotVersion',
      'CreateIntentVersion',
      'CreateSlotTypeVersion',
      'DeleteBot',
      'DeleteBotAlias',
      'DeleteBotChannelAssociation',
      'DeleteBotVersion',
      'DeleteIntent',
      'DeleteIntentVersion',
      'DeleteSession',
      'DeleteSlotType',
      'DeleteSlotTypeVersion',
      'DeleteUtterances',
      'PostContent',
      'PostText',
      'PutBot',
      'PutBotAlias',
      'PutIntent',
      'PutSession',
      'PutSlotType',
      'StartImport',
      'StartMigration'
    ],
    Read: [
      'GetBot',
      'GetBotAlias',
      'GetBotChannelAssociation',
      'GetBuiltinIntent',
      'GetBuiltinIntents',
      'GetBuiltinSlotTypes',
      'GetExport',
      'GetImport',
      'GetIntent',
      'GetMigration',
      'GetSession',
      'GetSlotType',
      'ListTagsForResource'
    ],
    List: [
      'GetBotAliases',
      'GetBotChannelAssociations',
      'GetBotVersions',
      'GetBots',
      'GetIntentVersions',
      'GetIntents',
      'GetMigrations',
      'GetSlotTypeVersions',
      'GetSlotTypes',
      'GetUtterancesView'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBot(botName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:bot:${ botName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBotVersion(botName: string, botVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:bot:${ botName }:${ botVersion }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBotAlias(botName: string, botAlias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:bot:${ botName }:${ botAlias }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(botName: string, botAlias: string, channelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:bot-channel:${ botName }:${ botAlias }:${ channelName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIntentVersion(intentName: string, intentVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:intent:${ intentName }:${ intentVersion }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSlottypeVersion(slotName: string, slotVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lex.defaultPartition }:lex:${ region || '*' }:${ account || '*' }:slottype:${ slotName }:${ slotVersion }`);
  }

  /**
   * Filters access based on the tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toPutBot()
   * - .toPutBotAlias()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags attached to a Lex resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - bot
   * - bot version
   * - bot alias
   * - channel
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the set of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toPutBot()
   * - .toPutBotAlias()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the intents included in the request
   *
   * https://docs.aws.amazon.com/lex/latest/dg/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociatedIntents(value: string | string[], operator?: Operator | string) {
    return this.if(`associatedIntents`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the slot types included in the request
   *
   * https://docs.aws.amazon.com/lex/latest/dg/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociatedSlotTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`associatedSlotTypes`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the channel type included in the request
   *
   * https://docs.aws.amazon.com/lex/latest/dg/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChannelType(value: string | string[], operator?: Operator | string) {
    return this.if(`channelType`, value, operator || 'StringLike');
  }
}
