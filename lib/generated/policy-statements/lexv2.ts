import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create new items in an existing custom vocabulary
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchCreateCustomVocabularyItem.html
   */
  public toBatchCreateCustomVocabularyItem() {
    return this.to('BatchCreateCustomVocabularyItem');
  }

  /**
   * Grants permission to delete existing items in an existing custom vocabulary
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchDeleteCustomVocabularyItem.html
   */
  public toBatchDeleteCustomVocabularyItem() {
    return this.to('BatchDeleteCustomVocabularyItem');
  }

  /**
   * Grants permission to update existing items in an existing custom vocabulary
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchUpdateCustomVocabularyItem.html
   */
  public toBatchUpdateCustomVocabularyItem() {
    return this.to('BatchUpdateCustomVocabularyItem');
  }

  /**
   * Grants permission to build an existing bot locale in a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BuildBotLocale.html
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotAlias.html
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotLocale.html
   */
  public toCreateBotLocale() {
    return this.to('CreateBotLocale');
  }

  /**
   * Grants permission to create bot replica for a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotReplica.html
   */
  public toCreateBotReplica() {
    return this.to('CreateBotReplica');
  }

  /**
   * Grants permission to create a new version of an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotVersion.html
   */
  public toCreateBotVersion() {
    return this.to('CreateBotVersion');
  }

  /**
   * Grants permission to create a new custom vocabulary in an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   */
  public toCreateCustomVocabulary() {
    return this.to('CreateCustomVocabulary');
  }

  /**
   * Grants permission to create an export for an existing resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateExport.html
   */
  public toCreateExport() {
    return this.to('CreateExport');
  }

  /**
   * Grants permission to create a new intent in an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html
   */
  public toCreateIntent() {
    return this.to('CreateIntent');
  }

  /**
   * Grants permission to create a new resource policy for a Lex resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateResourcePolicy.html
   */
  public toCreateResourcePolicy() {
    return this.to('CreateResourcePolicy');
  }

  /**
   * Grants permission to create a new slot in an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateSlot.html
   */
  public toCreateSlot() {
    return this.to('CreateSlot');
  }

  /**
   * Grants permission to create a new slot type in an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateSlotType.html
   */
  public toCreateSlotType() {
    return this.to('CreateSlotType');
  }

  /**
   * Grants permission to import a new test-set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/create-test-set-from-CSV.html
   */
  public toCreateTestSet() {
    return this.to('CreateTestSet');
  }

  /**
   * Grants permission to create a test set discrepancy report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateTestSetDiscrepancyReport.html
   */
  public toCreateTestSetDiscrepancyReport() {
    return this.to('CreateTestSetDiscrepancyReport');
  }

  /**
   * Grants permission to create an upload url for import file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html
   */
  public toCreateUploadUrl() {
    return this.to('CreateUploadUrl');
  }

  /**
   * Grants permission to delete an existing bot
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - lex:DeleteBotAlias
   * - lex:DeleteBotChannel
   * - lex:DeleteBotLocale
   * - lex:DeleteBotVersion
   * - lex:DeleteIntent
   * - lex:DeleteSlot
   * - lex:DeleteSlotType
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html
   */
  public toDeleteBot() {
    return this.to('DeleteBot');
  }

  /**
   * Grants permission to delete an existing bot alias in a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotAlias.html
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
   * Dependent actions:
   * - lex:DeleteIntent
   * - lex:DeleteSlot
   * - lex:DeleteSlotType
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotLocale.html
   */
  public toDeleteBotLocale() {
    return this.to('DeleteBotLocale');
  }

  /**
   * Grants permission to delete an existing bot replica
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotReplica.html
   */
  public toDeleteBotReplica() {
    return this.to('DeleteBotReplica');
  }

  /**
   * Grants permission to delete an existing bot version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotVersion.html
   */
  public toDeleteBotVersion() {
    return this.to('DeleteBotVersion');
  }

  /**
   * Grants permission to delete an existing custom vocabulary in a bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteCustomVocabulary.html
   */
  public toDeleteCustomVocabulary() {
    return this.to('DeleteCustomVocabulary');
  }

  /**
   * Grants permission to delete an existing export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteExport.html
   */
  public toDeleteExport() {
    return this.to('DeleteExport');
  }

  /**
   * Grants permission to delete an existing import
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteImport.html
   */
  public toDeleteImport() {
    return this.to('DeleteImport');
  }

  /**
   * Grants permission to delete an existing intent in a bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteIntent.html
   */
  public toDeleteIntent() {
    return this.to('DeleteIntent');
  }

  /**
   * Grants permission to delete an existing resource policy for a Lex resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete session information for a bot alias and user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_DeleteSession.html
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Grants permission to delete an existing slot in an intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteSlot.html
   */
  public toDeleteSlot() {
    return this.to('DeleteSlot');
  }

  /**
   * Grants permission to delete an existing slot type in a bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteSlotType.html
   */
  public toDeleteSlotType() {
    return this.to('DeleteSlotType');
  }

  /**
   * Grants permission to delete an existing test set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteTestSet.html
   */
  public toDeleteTestSet() {
    return this.to('DeleteTestSet');
  }

  /**
   * Grants permission to delete utterance data for a bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteUtterances.html
   */
  public toDeleteUtterances() {
    return this.to('DeleteUtterances');
  }

  /**
   * Grants permission to retrieve an existing bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html
   */
  public toDescribeBot() {
    return this.to('DescribeBot');
  }

  /**
   * Grants permission to retrieve an existing bot alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotLocale.html
   */
  public toDescribeBotLocale() {
    return this.to('DescribeBotLocale');
  }

  /**
   * Grants permission to retrieve metadata information about a bot recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotRecommendation.html
   */
  public toDescribeBotRecommendation() {
    return this.to('DescribeBotRecommendation');
  }

  /**
   * Grants permission to retrieve an existing bot replica
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotReplica.html
   */
  public toDescribeBotReplica() {
    return this.to('DescribeBotReplica');
  }

  /**
   * Grants permission to retrieve metadata information for a bot resource generation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotResourceGeneration.html
   */
  public toDescribeBotResourceGeneration() {
    return this.to('DescribeBotResourceGeneration');
  }

  /**
   * Grants permission to retrieve an existing bot version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotVersion.html
   */
  public toDescribeBotVersion() {
    return this.to('DescribeBotVersion');
  }

  /**
   * Grants permission to retrieve an existing custom vocabulary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   */
  public toDescribeCustomVocabulary() {
    return this.to('DescribeCustomVocabulary');
  }

  /**
   * Grants permission to retrieve metadata of an existing custom vocabulary
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeCustomVocabularyMetadata.html
   */
  public toDescribeCustomVocabularyMetadata() {
    return this.to('DescribeCustomVocabularyMetadata');
  }

  /**
   * Grants permission to retrieve an existing export
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lex:DescribeBot
   * - lex:DescribeBotLocale
   * - lex:DescribeIntent
   * - lex:DescribeSlot
   * - lex:DescribeSlotType
   * - lex:ListBotLocales
   * - lex:ListIntents
   * - lex:ListSlotTypes
   * - lex:ListSlots
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html
   */
  public toDescribeExport() {
    return this.to('DescribeExport');
  }

  /**
   * Grants permission to retrieve an existing import
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html
   */
  public toDescribeImport() {
    return this.to('DescribeImport');
  }

  /**
   * Grants permission to retrieve an existing intent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeIntent.html
   */
  public toDescribeIntent() {
    return this.to('DescribeIntent');
  }

  /**
   * Grants permission to retrieve an existing resource policy for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    return this.to('DescribeResourcePolicy');
  }

  /**
   * Grants permission to retrieve an existing slot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeSlot.html
   */
  public toDescribeSlot() {
    return this.to('DescribeSlot');
  }

  /**
   * Grants permission to retrieve an existing slot type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeSlotType.html
   */
  public toDescribeSlotType() {
    return this.to('DescribeSlotType');
  }

  /**
   * Grants permission to retrieve test execution metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestExecution.html
   */
  public toDescribeTestExecution() {
    return this.to('DescribeTestExecution');
  }

  /**
   * Grants permission to retrieve an existing test set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSet.html
   */
  public toDescribeTestSet() {
    return this.to('DescribeTestSet');
  }

  /**
   * Grants permission to retrieve test set discrepancy report metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSetDiscrepancyReport.html
   */
  public toDescribeTestSetDiscrepancyReport() {
    return this.to('DescribeTestSetDiscrepancyReport');
  }

  /**
   * Grants permission to retrieve test set generation metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSetGeneration.html
   */
  public toDescribeTestSetGeneration() {
    return this.to('DescribeTestSetGeneration');
  }

  /**
   * Grants permission to generate supported fields or elements for a bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_GenerateBotElement.html
   */
  public toGenerateBotElement() {
    return this.to('GenerateBotElement');
  }

  /**
   * Grants permission to retrieve session information for a bot alias and user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to retrieve artifacts URL for a test execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_GetTestExecutionArtifactsUrl.html
   */
  public toGetTestExecutionArtifactsUrl() {
    return this.to('GetTestExecutionArtifactsUrl');
  }

  /**
   * Grants permission to list utterances and statistics for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html
   */
  public toListAggregatedUtterances() {
    return this.to('ListAggregatedUtterances');
  }

  /**
   * Grants permission to list alias replicas in a bot replica
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliasReplicas.html
   */
  public toListBotAliasReplicas() {
    return this.to('ListBotAliasReplicas');
  }

  /**
   * Grants permission to list bot aliases in an bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html
   */
  public toListBotLocales() {
    return this.to('ListBotLocales');
  }

  /**
   * Grants permission to get a list of bot recommendations that meet the specified criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotRecommendations.html
   */
  public toListBotRecommendations() {
    return this.to('ListBotRecommendations');
  }

  /**
   * Grants permission to list replicas of a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotReplicas.html
   */
  public toListBotReplicas() {
    return this.to('ListBotReplicas');
  }

  /**
   * Grants permission to list the resource generations for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotResourceGenerations.html
   */
  public toListBotResourceGenerations() {
    return this.to('ListBotResourceGenerations');
  }

  /**
   * Grants permission to list version replicas in a bot replica
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersionReplicas.html
   */
  public toListBotVersionReplicas() {
    return this.to('ListBotVersionReplicas');
  }

  /**
   * Grants permission to list existing bot versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html
   */
  public toListBotVersions() {
    return this.to('ListBotVersions');
  }

  /**
   * Grants permission to list existing bots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html
   */
  public toListBots() {
    return this.to('ListBots');
  }

  /**
   * Grants permission to list built-in intents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html
   */
  public toListBuiltInIntents() {
    return this.to('ListBuiltInIntents');
  }

  /**
   * Grants permission to list built-in slot types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html
   */
  public toListBuiltInSlotTypes() {
    return this.to('ListBuiltInSlotTypes');
  }

  /**
   * Grants permission to list items of an existing custom vocabulary
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListCustomVocabularyItems.html
   */
  public toListCustomVocabularyItems() {
    return this.to('ListCustomVocabularyItems');
  }

  /**
   * Grants permission to list existing exports
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to list existing imports
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    return this.to('ListImports');
  }

  /**
   * Grants permission to list intent analytics metrics for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentMetrics.html
   */
  public toListIntentMetrics() {
    return this.to('ListIntentMetrics');
  }

  /**
   * Grants permission to list intent path analytics for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentPaths.html
   */
  public toListIntentPaths() {
    return this.to('ListIntentPaths');
  }

  /**
   * Grants permission to list intentStage analytics metrics for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentStageMetrics.html
   */
  public toListIntentStageMetrics() {
    return this.to('ListIntentStageMetrics');
  }

  /**
   * Grants permission to list intents in a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntents.html
   */
  public toListIntents() {
    return this.to('ListIntents');
  }

  /**
   * Grants permission to get a list of recommended intents provided by the bot recommendation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListRecommendedIntents.html
   */
  public toListRecommendedIntents() {
    return this.to('ListRecommendedIntents');
  }

  /**
   * Grants permission to list session analytics data for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSessionAnalyticsData.html
   */
  public toListSessionAnalyticsData() {
    return this.to('ListSessionAnalyticsData');
  }

  /**
   * Grants permission to list session analytics metrics for a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSessionMetrics.html
   */
  public toListSessionMetrics() {
    return this.to('ListSessionMetrics');
  }

  /**
   * Grants permission to list slot types in a bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSlotTypes.html
   */
  public toListSlotTypes() {
    return this.to('ListSlotTypes');
  }

  /**
   * Grants permission to list slots in an intent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSlots.html
   */
  public toListSlots() {
    return this.to('ListSlots');
  }

  /**
   * Grants permission to lists tags for a Lex resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve test results data for a test execution
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - lex:ListTestSetRecords
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestExecutionResultItems.html
   */
  public toListTestExecutionResultItems() {
    return this.to('ListTestExecutionResultItems');
  }

  /**
   * Grants permission to list test executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestExecutions.html
   */
  public toListTestExecutions() {
    return this.to('ListTestExecutions');
  }

  /**
   * Grants permission to retrieve records inside an existing test set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestSetRecords.html
   */
  public toListTestSetRecords() {
    return this.to('ListTestSetRecords');
  }

  /**
   * Grants permission to list test sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestSets.html
   */
  public toListTestSets() {
    return this.to('ListTestSets');
  }

  /**
   * Grants permission to create a new session or modify an existing session for a bot alias and user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_PutSession.html
   */
  public toPutSession() {
    return this.to('PutSession');
  }

  /**
   * Grants permission to send user input (text-only) to an bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html
   */
  public toRecognizeText() {
    return this.to('RecognizeText');
  }

  /**
   * Grants permission to send user input (text or speech) to an bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html
   */
  public toRecognizeUtterance() {
    return this.to('RecognizeUtterance');
  }

  /**
   * Grants permission to search for associated transcripts that meet the specified criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_SearchAssociatedTranscripts.html
   */
  public toSearchAssociatedTranscripts() {
    return this.to('SearchAssociatedTranscripts');
  }

  /**
   * Grants permission to start a bot recommendation for an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartBotRecommendation.html
   */
  public toStartBotRecommendation() {
    return this.to('StartBotRecommendation');
  }

  /**
   * Grants permission to start a resource generation for an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartBotResourceGeneration.html
   */
  public toStartBotResourceGeneration() {
    return this.to('StartBotResourceGeneration');
  }

  /**
   * Grants permission to stream user input (speech/text/DTMF) to a bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_StartConversation.html
   */
  public toStartConversation() {
    return this.to('StartConversation');
  }

  /**
   * Grants permission to start a new import with the uploaded import file
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - lex:CreateBot
   * - lex:CreateBotLocale
   * - lex:CreateCustomVocabulary
   * - lex:CreateIntent
   * - lex:CreateSlot
   * - lex:CreateSlotType
   * - lex:CreateTestSet
   * - lex:DeleteBotLocale
   * - lex:DeleteCustomVocabulary
   * - lex:DeleteIntent
   * - lex:DeleteSlot
   * - lex:DeleteSlotType
   * - lex:UpdateBot
   * - lex:UpdateBotLocale
   * - lex:UpdateCustomVocabulary
   * - lex:UpdateIntent
   * - lex:UpdateSlot
   * - lex:UpdateSlotType
   * - lex:UpdateTestSet
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html
   */
  public toStartImport() {
    return this.to('StartImport');
  }

  /**
   * Grants permission to start a test execution using a test set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartTestExecution.html
   */
  public toStartTestExecution() {
    return this.to('StartTestExecution');
  }

  /**
   * Grants permission to generate a test set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartTestSetGeneration.html
   */
  public toStartTestSetGeneration() {
    return this.to('StartTestSetGeneration');
  }

  /**
   * Grants permission to stop a bot recommendation for an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StopBotRecommendation.html
   */
  public toStopBotRecommendation() {
    return this.to('StopBotRecommendation');
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
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_TagResource.html
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
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBot.html
   */
  public toUpdateBot() {
    return this.to('UpdateBot');
  }

  /**
   * Grants permission to update an existing bot alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html
   */
  public toUpdateBotAlias() {
    return this.to('UpdateBotAlias');
  }

  /**
   * Grants permission to update an existing bot locale
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotLocale.html
   */
  public toUpdateBotLocale() {
    return this.to('UpdateBotLocale');
  }

  /**
   * Grants permission to update an existing bot recommendation request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotRecommendation.html
   */
  public toUpdateBotRecommendation() {
    return this.to('UpdateBotRecommendation');
  }

  /**
   * Grants permission to update an existing custom vocabulary
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   */
  public toUpdateCustomVocabulary() {
    return this.to('UpdateCustomVocabulary');
  }

  /**
   * Grants permission to update an existing export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateExport.html
   */
  public toUpdateExport() {
    return this.to('UpdateExport');
  }

  /**
   * Grants permission to update an existing intent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateIntent.html
   */
  public toUpdateIntent() {
    return this.to('UpdateIntent');
  }

  /**
   * Grants permission to update an existing resource policy for a Lex resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateResourcePolicy.html
   */
  public toUpdateResourcePolicy() {
    return this.to('UpdateResourcePolicy');
  }

  /**
   * Grants permission to update an existing slot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateSlot.html
   */
  public toUpdateSlot() {
    return this.to('UpdateSlot');
  }

  /**
   * Grants permission to update an existing slot type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateSlotType.html
   */
  public toUpdateSlotType() {
    return this.to('UpdateSlotType');
  }

  /**
   * Grants permission to update an existing test set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateTestSet.html
   */
  public toUpdateTestSet() {
    return this.to('UpdateTestSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchCreateCustomVocabularyItem',
      'BatchDeleteCustomVocabularyItem',
      'BatchUpdateCustomVocabularyItem',
      'BuildBotLocale',
      'CreateBot',
      'CreateBotAlias',
      'CreateBotChannel',
      'CreateBotLocale',
      'CreateBotReplica',
      'CreateBotVersion',
      'CreateCustomVocabulary',
      'CreateExport',
      'CreateIntent',
      'CreateResourcePolicy',
      'CreateSlot',
      'CreateSlotType',
      'CreateTestSet',
      'CreateTestSetDiscrepancyReport',
      'CreateUploadUrl',
      'DeleteBot',
      'DeleteBotAlias',
      'DeleteBotChannel',
      'DeleteBotLocale',
      'DeleteBotReplica',
      'DeleteBotVersion',
      'DeleteCustomVocabulary',
      'DeleteExport',
      'DeleteImport',
      'DeleteIntent',
      'DeleteResourcePolicy',
      'DeleteSession',
      'DeleteSlot',
      'DeleteSlotType',
      'DeleteTestSet',
      'DeleteUtterances',
      'PutSession',
      'RecognizeText',
      'RecognizeUtterance',
      'StartBotRecommendation',
      'StartBotResourceGeneration',
      'StartConversation',
      'StartImport',
      'StartTestExecution',
      'StartTestSetGeneration',
      'StopBotRecommendation',
      'UpdateBot',
      'UpdateBotAlias',
      'UpdateBotLocale',
      'UpdateBotRecommendation',
      'UpdateCustomVocabulary',
      'UpdateExport',
      'UpdateIntent',
      'UpdateResourcePolicy',
      'UpdateSlot',
      'UpdateSlotType',
      'UpdateTestSet'
    ],
    Read: [
      'DescribeBot',
      'DescribeBotAlias',
      'DescribeBotChannel',
      'DescribeBotLocale',
      'DescribeBotRecommendation',
      'DescribeBotReplica',
      'DescribeBotResourceGeneration',
      'DescribeBotVersion',
      'DescribeCustomVocabulary',
      'DescribeCustomVocabularyMetadata',
      'DescribeExport',
      'DescribeImport',
      'DescribeIntent',
      'DescribeResourcePolicy',
      'DescribeSlot',
      'DescribeSlotType',
      'DescribeTestExecution',
      'DescribeTestSet',
      'DescribeTestSetDiscrepancyReport',
      'DescribeTestSetGeneration',
      'GenerateBotElement',
      'GetSession',
      'GetTestExecutionArtifactsUrl',
      'ListTagsForResource',
      'ListTestExecutionResultItems',
      'ListTestSetRecords'
    ],
    List: [
      'ListAggregatedUtterances',
      'ListBotAliasReplicas',
      'ListBotAliases',
      'ListBotChannels',
      'ListBotLocales',
      'ListBotRecommendations',
      'ListBotReplicas',
      'ListBotResourceGenerations',
      'ListBotVersionReplicas',
      'ListBotVersions',
      'ListBots',
      'ListBuiltInIntents',
      'ListBuiltInSlotTypes',
      'ListCustomVocabularyItems',
      'ListExports',
      'ListImports',
      'ListIntentMetrics',
      'ListIntentPaths',
      'ListIntentStageMetrics',
      'ListIntents',
      'ListRecommendedIntents',
      'ListSessionAnalyticsData',
      'ListSessionMetrics',
      'ListSlotTypes',
      'ListSlots',
      'ListTestExecutions',
      'ListTestSets',
      'SearchAssociatedTranscripts'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type bot to the statement
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/how-it-works.html
   *
   * @param botId - Identifier for the botId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBot(botId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lex:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bot/${ botId }`);
  }

  /**
   * Adds a resource of type bot alias to the statement
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/how-it-works.html
   *
   * @param botId - Identifier for the botId.
   * @param botAliasId - Identifier for the botAliasId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBotAlias(botId: string, botAliasId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lex:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bot-alias/${ botId }/${ botAliasId }`);
  }

  /**
   * Adds a resource of type test set to the statement
   *
   * https://docs.aws.amazon.com/lexv2/latest/dg/test-workbench.html
   *
   * @param testSetId - Identifier for the testSetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestSet(testSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lex:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:test-set/${ testSetId }`);
  }

  /**
   * Filters access by the tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBot()
   * - .toCreateBotAlias()
   * - .toStartImport()
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
   * Filters access by the tags attached to a Lex resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - bot
   * - bot alias
   * - test set
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the set of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateBot()
   * - .toCreateBotAlias()
   * - .toStartImport()
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
