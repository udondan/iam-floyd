import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [lex-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class LexV2 extends PolicyStatement {
  public servicePrefix = 'lex';

  /**
   * Statement provider for service [lex-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to build an existing bot locale in a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_BuildBotLocale.html
   */
  public toBuildBotLocale() {
    return this.to('BuildBotLocale');
  }

  /**
   * Grants permission to create a new bot and a test bot alias pointing to the DRAFT bot version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBot.html
   */
  public toCreateBot() {
    return this.to('CreateBot');
  }

  /**
   * Grants permission to create a new bot alias in a bot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBotAlias.html
   */
  public toCreateBotAlias() {
    return this.to('CreateBotAlias');
  }

  /**
   * Grants permission to create a bot channel in an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   */
  public toCreateBotChannel() {
    return this.to('CreateBotChannel');
  }

  /**
   * Grants permission to create a new bot locale in an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBotLocale.html
   */
  public toCreateBotLocale() {
    return this.to('CreateBotLocale');
  }

  /**
   * Grants permission to create a new version of an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBotVersion.html
   */
  public toCreateBotVersion() {
    return this.to('CreateBotVersion');
  }

  /**
   * Grants permission to create a new intent in an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateIntent.html
   */
  public toCreateIntent() {
    return this.to('CreateIntent');
  }

  /**
   * Grants permission to create a new slot in an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateSlot.html
   */
  public toCreateSlot() {
    return this.to('CreateSlot');
  }

  /**
   * Grants permission to create a new slot type in an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateSlotType.html
   */
  public toCreateSlotType() {
    return this.to('CreateSlotType');
  }

  /**
   * Grants permission to delete an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBot.html
   */
  public toDeleteBot() {
    return this.to('DeleteBot');
  }

  /**
   * Grants permission to delete an existing bot alias in a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBotAlias.html
   */
  public toDeleteBotAlias() {
    return this.to('DeleteBotAlias');
  }

  /**
   * Grants permission to delete an existing bot channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   */
  public toDeleteBotChannel() {
    return this.to('DeleteBotChannel');
  }

  /**
   * Grants permission to delete an existing bot locale in a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBotLocale.html
   */
  public toDeleteBotLocale() {
    return this.to('DeleteBotLocale');
  }

  /**
   * Grants permission to delete an existing bot version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBotVersion.html
   */
  public toDeleteBotVersion() {
    return this.to('DeleteBotVersion');
  }

  /**
   * Grants permission to delete an existing intent in a bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteIntent.html
   */
  public toDeleteIntent() {
    return this.to('DeleteIntent');
  }

  /**
   * Grants permission to delete session information for a bot alias and user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DeleteSession.html
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Grants permission to delete an existing slot in an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteSlot.html
   */
  public toDeleteSlot() {
    return this.to('DeleteSlot');
  }

  /**
   * Grants permission to delete an existing slot type in a bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteSlotType.html
   */
  public toDeleteSlotType() {
    return this.to('DeleteSlotType');
  }

  /**
   * Grants permission to retrieve an existing bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBot.html
   */
  public toDescribeBot() {
    return this.to('DescribeBot');
  }

  /**
   * Grants permission to retrieve an existing bot alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotAlias.html
   */
  public toDescribeBotAlias() {
    return this.to('DescribeBotAlias');
  }

  /**
   * Grants permission to retrieve an existing bot channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   */
  public toDescribeBotChannel() {
    return this.to('DescribeBotChannel');
  }

  /**
   * Grants permission to retrieve an existing bot locale
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotLocale.html
   */
  public toDescribeBotLocale() {
    return this.to('DescribeBotLocale');
  }

  /**
   * Grants permission to retrieve an existing bot version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotVersion.html
   */
  public toDescribeBotVersion() {
    return this.to('DescribeBotVersion');
  }

  /**
   * Grants permission to retrieve an existing intent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeIntent.html
   */
  public toDescribeIntent() {
    return this.to('DescribeIntent');
  }

  /**
   * Grants permission to retrieve an existing slot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeSlot.html
   */
  public toDescribeSlot() {
    return this.to('DescribeSlot');
  }

  /**
   * Grants permission to retrieve an existing slot type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeSlotType.html
   */
  public toDescribeSlotType() {
    return this.to('DescribeSlotType');
  }

  /**
   * Grants permission to list built-in intents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_GetBuiltinIntents.html
   */
  public toGetBuiltinIntents() {
    return this.to('GetBuiltinIntents');
  }

  /**
   * Grants permission to list built-in slot types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_GetBuiltinSlotTypes.html
   */
  public toGetBuiltinSlotTypes() {
    return this.to('GetBuiltinSlotTypes');
  }

  /**
   * Grants permission to retrieve session information for a bot alias and user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to list bot aliases in an bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotAliases.html
   */
  public toListBotAliases() {
    return this.to('ListBotAliases');
  }

  /**
   * Grants permission to list bot channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   */
  public toListBotChannels() {
    return this.to('ListBotChannels');
  }

  /**
   * Grants permission to list bot locales in a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotLocales.html
   */
  public toListBotLocales() {
    return this.to('ListBotLocales');
  }

  /**
   * Grants permission to list existing bot versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotVersions.html
   */
  public toListBotVersions() {
    return this.to('ListBotVersions');
  }

  /**
   * Grants permission to list existing bots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBots.html
   */
  public toListBots() {
    return this.to('ListBots');
  }

  /**
   * Grants permission to list intents in a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListIntents.html
   */
  public toListIntents() {
    return this.to('ListIntents');
  }

  /**
   * Grants permission to list slot types in a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListSlotTypes.html
   */
  public toListSlotTypes() {
    return this.to('ListSlotTypes');
  }

  /**
   * Grants permission to list slots in an intent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListSlots.html
   */
  public toListSlots() {
    return this.to('ListSlots');
  }

  /**
   * Grants permission to lists tags for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create a new session or modify an existing session for a bot alias and user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_PutSession.html
   */
  public toPutSession() {
    return this.to('PutSession');
  }

  /**
   * Grants permission to send user input (text or speech) to an bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeSpeech.html
   */
  public toRecognizeSpeech() {
    return this.to('RecognizeSpeech');
  }

  /**
   * Grants permission to send user input (text-only) to an bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeText.html
   */
  public toRecognizeText() {
    return this.to('RecognizeText');
  }

  /**
   * Grants permission to stream user input (speech/text/DTMF) to a bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_StartConversation.html
   */
  public toStartConversation() {
    return this.to('StartConversation');
  }

  /**
   * Grants permission to add or overwrite tags of a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a Lex resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBot.html
   */
  public toUpdateBot() {
    return this.to('UpdateBot');
  }

  /**
   * Grants permission to update an existing bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotAlias.html
   */
  public toUpdateBotAlias() {
    return this.to('UpdateBotAlias');
  }

  /**
   * Grants permission to update an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotLocale.html
   */
  public toUpdateBotLocale() {
    return this.to('UpdateBotLocale');
  }

  /**
   * Grants permission to update an existing intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateIntent.html
   */
  public toUpdateIntent() {
    return this.to('UpdateIntent');
  }

  /**
   * Grants permission to update an existing slot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateSlot.html
   */
  public toUpdateSlot() {
    return this.to('UpdateSlot');
  }

  /**
   * Grants permission to update an existing slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateSlotType.html
   */
  public toUpdateSlotType() {
    return this.to('UpdateSlotType');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BuildBotLocale",
      "CreateBot",
      "CreateBotAlias",
      "CreateBotChannel",
      "CreateBotLocale",
      "CreateBotVersion",
      "CreateIntent",
      "CreateSlot",
      "CreateSlotType",
      "DeleteBot",
      "DeleteBotAlias",
      "DeleteBotChannel",
      "DeleteBotLocale",
      "DeleteBotVersion",
      "DeleteIntent",
      "DeleteSession",
      "DeleteSlot",
      "DeleteSlotType",
      "PutSession",
      "RecognizeSpeech",
      "RecognizeText",
      "StartConversation",
      "UpdateBot",
      "UpdateBotAlias",
      "UpdateBotLocale",
      "UpdateIntent",
      "UpdateSlot",
      "UpdateSlotType"
    ],
    "Read": [
      "DescribeBot",
      "DescribeBotAlias",
      "DescribeBotChannel",
      "DescribeBotLocale",
      "DescribeBotVersion",
      "DescribeIntent",
      "DescribeSlot",
      "DescribeSlotType",
      "GetSession",
      "ListTagsForResource"
    ],
    "List": [
      "GetBuiltinIntents",
      "GetBuiltinSlotTypes",
      "ListBotAliases",
      "ListBotChannels",
      "ListBotLocales",
      "ListBotVersions",
      "ListBots",
      "ListIntents",
      "ListSlotTypes",
      "ListSlots"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type bot to the statement
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/how-it-works.html
   *
   * @param botId - Identifier for the botId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBot(botId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot/${BotId}';
    arn = arn.replace('${BotId}', botId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bot alias to the statement
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/how-it-works.html
   *
   * @param botId - Identifier for the botId.
   * @param botAliasId - Identifier for the botAliasId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBotAlias(botId: string, botAliasId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lex:${Region}:${Account}:bot-alias/${BotId}/${BotAliasId}';
    arn = arn.replace('${BotId}', botId);
    arn = arn.replace('${BotAliasId}', botAliasId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
