import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [mobiletargeting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobiletargeting extends PolicyStatement {
  public servicePrefix = 'mobiletargeting';

  /**
   * Statement provider for service [mobiletargeting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an app
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#CreateApp
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to create a campaign for an app
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#CreateCampaign
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to create an email template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#CreateEmailTemplate
   */
  public toCreateEmailTemplate() {
    return this.to('CreateEmailTemplate');
  }

  /**
   * Grants permission to create an export job that exports endpoint definitions to Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#CreateExportJob
   */
  public toCreateExportJob() {
    return this.to('CreateExportJob');
  }

  /**
   * Grants permission to import endpoint definitions from to create a segment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#CreateImportJob
   */
  public toCreateImportJob() {
    return this.to('CreateImportJob');
  }

  /**
   * Grants permission to create an in-app message template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#CreateInAppTemplate
   */
  public toCreateInAppTemplate() {
    return this.to('CreateInAppTemplate');
  }

  /**
   * Grants permission to create a Journey for an app
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#CreateJourney
   */
  public toCreateJourney() {
    return this.to('CreateJourney');
  }

  /**
   * Grants permission to create a push notification template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#CreatePushTemplate
   */
  public toCreatePushTemplate() {
    return this.to('CreatePushTemplate');
  }

  /**
   * Grants permission to create an Amazon Pinpoint configuration for a recommender model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  public toCreateRecommenderConfiguration() {
    return this.to('CreateRecommenderConfiguration');
  }

  /**
   * Grants permission to create a segment that is based on endpoint data reported to Pinpoint by your app. To allow a user to create a segment by importing endpoint data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#CreateSegment
   */
  public toCreateSegment() {
    return this.to('CreateSegment');
  }

  /**
   * Grants permission to create an sms message template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#CreateSmsTemplate
   */
  public toCreateSmsTemplate() {
    return this.to('CreateSmsTemplate');
  }

  /**
   * Grants permission to create a voice message template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#CreateVoiceTemplate
   */
  public toCreateVoiceTemplate() {
    return this.to('CreateVoiceTemplate');
  }

  /**
   * Grants permission to delete the ADM channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#DeleteAdmChannel
   */
  public toDeleteAdmChannel() {
    return this.to('DeleteAdmChannel');
  }

  /**
   * Grants permission to delete the APNs channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#DeleteApnsChannel
   */
  public toDeleteApnsChannel() {
    return this.to('DeleteApnsChannel');
  }

  /**
   * Grants permission to delete the APNs sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#DeleteApnsSandboxChannel
   */
  public toDeleteApnsSandboxChannel() {
    return this.to('DeleteApnsSandboxChannel');
  }

  /**
   * Grants permission to delete the APNs VoIP channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#DeleteApnsVoipChannel
   */
  public toDeleteApnsVoipChannel() {
    return this.to('DeleteApnsVoipChannel');
  }

  /**
   * Grants permission to delete the APNs VoIP sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#DeleteApnsVoipSandboxChannel
   */
  public toDeleteApnsVoipSandboxChannel() {
    return this.to('DeleteApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to delete a specific campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#DeleteApp
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete the Baidu channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#DeleteBaiduChannel
   */
  public toDeleteBaiduChannel() {
    return this.to('DeleteBaiduChannel');
  }

  /**
   * Grants permission to delete a specific campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#DeleteCampaign
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to delete the email channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#DeleteEmailChannel
   */
  public toDeleteEmailChannel() {
    return this.to('DeleteEmailChannel');
  }

  /**
   * Grants permission to delete an email template or an email template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#DeleteEmailTemplate
   */
  public toDeleteEmailTemplate() {
    return this.to('DeleteEmailTemplate');
  }

  /**
   * Grants permission to delete an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#DeleteEndpoint
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete the event stream for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#DeleteEventStream
   */
  public toDeleteEventStream() {
    return this.to('DeleteEventStream');
  }

  /**
   * Grants permission to delete the GCM channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#DeleteGcmChannel
   */
  public toDeleteGcmChannel() {
    return this.to('DeleteGcmChannel');
  }

  /**
   * Grants permission to delete an in-app message template or an in-app message template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#DeleteInAppTemplate
   */
  public toDeleteInAppTemplate() {
    return this.to('DeleteInAppTemplate');
  }

  /**
   * Grants permission to delete a specific journey
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#DeleteJourney
   */
  public toDeleteJourney() {
    return this.to('DeleteJourney');
  }

  /**
   * Grants permission to delete a push notification template or a push notification template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#DeletePushTemplate
   */
  public toDeletePushTemplate() {
    return this.to('DeletePushTemplate');
  }

  /**
   * Grants permission to delete an Amazon Pinpoint configuration for a recommender model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   */
  public toDeleteRecommenderConfiguration() {
    return this.to('DeleteRecommenderConfiguration');
  }

  /**
   * Grants permission to delete a specific segment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#DeleteSegment
   */
  public toDeleteSegment() {
    return this.to('DeleteSegment');
  }

  /**
   * Grants permission to delete the SMS channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#DeleteSmsChannel
   */
  public toDeleteSmsChannel() {
    return this.to('DeleteSmsChannel');
  }

  /**
   * Grants permission to delete an sms message template or an sms message template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#DeleteSmsTemplate
   */
  public toDeleteSmsTemplate() {
    return this.to('DeleteSmsTemplate');
  }

  /**
   * Grants permission to delete all of the endpoints that are associated with a user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#DeleteUserEndpoints
   */
  public toDeleteUserEndpoints() {
    return this.to('DeleteUserEndpoints');
  }

  /**
   * Grants permission to delete the Voice channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#DeleteVoiceChannel
   */
  public toDeleteVoiceChannel() {
    return this.to('DeleteVoiceChannel');
  }

  /**
   * Grants permission to delete a voice message template or a voice message template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#DeleteVoiceTemplate
   */
  public toDeleteVoiceTemplate() {
    return this.to('DeleteVoiceTemplate');
  }

  /**
   * Grants permission to retrieve information about the Amazon Device Messaging (ADM) channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#GetAdmChannel
   */
  public toGetAdmChannel() {
    return this.to('GetAdmChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#GetApnsChannel
   */
  public toGetApnsChannel() {
    return this.to('GetApnsChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs sandbox channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#GetApnsSandboxChannel
   */
  public toGetApnsSandboxChannel() {
    return this.to('GetApnsSandboxChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs VoIP channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#GetApnsVoipChannel
   */
  public toGetApnsVoipChannel() {
    return this.to('GetApnsVoipChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs VoIP sandbox channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#GetApnsVoipSandboxChannel
   */
  public toGetApnsVoipSandboxChannel() {
    return this.to('GetApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to retrieve information about a specific app in your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#GetApp
   */
  public toGetApp() {
    return this.to('GetApp');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard metric that applies to an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-kpis-daterange-kpi-name.html#GetApplicationDateRangeKpi
   */
  public toGetApplicationDateRangeKpi() {
    return this.to('GetApplicationDateRangeKpi');
  }

  /**
   * Grants permission to retrieve the default settings for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#GetApplicationSettings
   */
  public toGetApplicationSettings() {
    return this.to('GetApplicationSettings');
  }

  /**
   * Grants permission to retrieve a list of apps in your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#GetApps
   */
  public toGetApps() {
    return this.to('GetApps');
  }

  /**
   * Grants permission to retrieve information about the Baidu channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#GetBaiduChannel
   */
  public toGetBaiduChannel() {
    return this.to('GetBaiduChannel');
  }

  /**
   * Grants permission to retrieve information about a specific campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#GetCampaign
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Grants permission to retrieve information about the activities performed by a campaign
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-activities.html#GetCampaignActivities
   */
  public toGetCampaignActivities() {
    return this.to('GetCampaignActivities');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard metric that applies to a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-kpis-daterange-kpi-name.html#GetCampaignDateRangeKpi
   */
  public toGetCampaignDateRangeKpi() {
    return this.to('GetCampaignDateRangeKpi');
  }

  /**
   * Grants permission to retrieve information about a specific campaign version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions-version.html#GetCampaignVersion
   */
  public toGetCampaignVersion() {
    return this.to('GetCampaignVersion');
  }

  /**
   * Grants permission to retrieve information about the current and prior versions of a campaign
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions.html#GetCampaignVersions
   */
  public toGetCampaignVersions() {
    return this.to('GetCampaignVersions');
  }

  /**
   * Grants permission to retrieve information about all campaigns for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#GetCampaigns
   */
  public toGetCampaigns() {
    return this.to('GetCampaigns');
  }

  /**
   * Grants permission to get all channels information for your app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels.html#GetChannels
   */
  public toGetChannels() {
    return this.to('GetChannels');
  }

  /**
   * Grants permission to obtain information about the email channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#GetEmailChannel
   */
  public toGetEmailChannel() {
    return this.to('GetEmailChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an email template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#GetEmailTemplate
   */
  public toGetEmailTemplate() {
    return this.to('GetEmailTemplate');
  }

  /**
   * Grants permission to retrieve information about a specific endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#GetEndpoint
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Grants permission to retrieve information about the event stream for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#GetEventStream
   */
  public toGetEventStream() {
    return this.to('GetEventStream');
  }

  /**
   * Grants permission to obtain information about a specific export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export-job-id.html#GetExportJob
   */
  public toGetExportJob() {
    return this.to('GetExportJob');
  }

  /**
   * Grants permission to retrieve a list of all of the export jobs for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#GetExportJobs
   */
  public toGetExportJobs() {
    return this.to('GetExportJobs');
  }

  /**
   * Grants permission to retrieve information about the GCM channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#GetGcmChannel
   */
  public toGetGcmChannel() {
    return this.to('GetGcmChannel');
  }

  /**
   * Grants permission to retrieve information about a specific import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import-job-id.html#GetImportJob
   */
  public toGetImportJob() {
    return this.to('GetImportJob');
  }

  /**
   * Grants permission to retrieve information about all import jobs for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#GetImportJobs
   */
  public toGetImportJobs() {
    return this.to('GetImportJobs');
  }

  /**
   * Grants permission to retrive in-app messages for the given endpoint id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id-inappmessages.html#GetInAppMessages
   */
  public toGetInAppMessages() {
    return this.to('GetInAppMessages');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an in-app message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#GetInAppTemplate
   */
  public toGetInAppTemplate() {
    return this.to('GetInAppTemplate');
  }

  /**
   * Grants permission to retrieve information about a specific journey
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#GetJourney
   */
  public toGetJourney() {
    return this.to('GetJourney');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard engagement metric that applies to a journey
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-kpis-daterange-kpi-name.html#GetJourneyDateRangeKpi
   */
  public toGetJourneyDateRangeKpi() {
    return this.to('GetJourneyDateRangeKpi');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-activities-journey-activity-id-execution-metrics.html#GetJourneyExecutionActivityMetrics
   */
  public toGetJourneyExecutionActivityMetrics() {
    return this.to('GetJourneyExecutionActivityMetrics');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-execution-metrics.html#GetJourneyExecutionMetrics
   */
  public toGetJourneyExecutionMetrics() {
    return this.to('GetJourneyExecutionMetrics');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey activity for a single journey run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-activities-journey-activity-id-execution-metrics.html#GetJourneyRunExecutionActivityMetrics
   */
  public toGetJourneyRunExecutionActivityMetrics() {
    return this.to('GetJourneyRunExecutionActivityMetrics');
  }

  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey for a single journey run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-execution-metrics.html#GetJourneyRunExecutionMetrics
   */
  public toGetJourneyRunExecutionMetrics() {
    return this.to('GetJourneyRunExecutionMetrics');
  }

  /**
   * Grants permission to retrieve information about all journey runs for a journey
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs.html
   */
  public toGetJourneyRuns() {
    return this.to('GetJourneyRuns');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an push notification template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#GetPushTemplate
   */
  public toGetPushTemplate() {
    return this.to('GetPushTemplate');
  }

  /**
   * Grants permission to retrieve information about an Amazon Pinpoint configuration for a recommender model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   */
  public toGetRecommenderConfiguration() {
    return this.to('GetRecommenderConfiguration');
  }

  /**
   * Grants permission to retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  public toGetRecommenderConfigurations() {
    return this.to('GetRecommenderConfigurations');
  }

  /**
   * Grants permission to mobiletargeting:GetReports
   *
   * Access Level: Read
   */
  public toGetReports() {
    return this.to('GetReports');
  }

  /**
   * Grants permission to retrieve information about a specific segment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#GetSegment
   */
  public toGetSegment() {
    return this.to('GetSegment');
  }

  /**
   * Grants permission to retrieve information about jobs that export endpoint definitions from segments to Amazon S3
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-export.html#GetSegmentExportJobs
   */
  public toGetSegmentExportJobs() {
    return this.to('GetSegmentExportJobs');
  }

  /**
   * Grants permission to retrieve information about jobs that create segments by importing endpoint definitions from
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-import.html#GetSegmentImportJobs
   */
  public toGetSegmentImportJobs() {
    return this.to('GetSegmentImportJobs');
  }

  /**
   * Grants permission to retrieve information about a specific segment version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions-version.html#GetSegmentVersion
   */
  public toGetSegmentVersion() {
    return this.to('GetSegmentVersion');
  }

  /**
   * Grants permission to retrieve information about the current and prior versions of a segment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions.html#GetSegmentVersions
   */
  public toGetSegmentVersions() {
    return this.to('GetSegmentVersions');
  }

  /**
   * Grants permission to retrieve information about the segments for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#GetSegments
   */
  public toGetSegments() {
    return this.to('GetSegments');
  }

  /**
   * Grants permission to obtain information about the SMS channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#GetSmsChannel
   */
  public toGetSmsChannel() {
    return this.to('GetSmsChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an sms message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#GetSmsTemplate
   */
  public toGetSmsTemplate() {
    return this.to('GetSmsTemplate');
  }

  /**
   * Grants permission to retrieve information about the endpoints that are associated with a user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#GetUserEndpoints
   */
  public toGetUserEndpoints() {
    return this.to('GetUserEndpoints');
  }

  /**
   * Grants permission to obtain information about the Voice channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#GetVoiceChannel
   */
  public toGetVoiceChannel() {
    return this.to('GetVoiceChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of a voice message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#GetVoiceTemplate
   */
  public toGetVoiceTemplate() {
    return this.to('GetVoiceTemplate');
  }

  /**
   * Grants permission to retrieve information about all journeys for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#ListJourneys
   */
  public toListJourneys() {
    return this.to('ListJourneys');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve all versions about a specific template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#ListTemplateVersions
   */
  public toListTemplateVersions() {
    return this.to('ListTemplateVersions');
  }

  /**
   * Grants permission to retrieve metadata about the queried templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#ListTemplates
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html#PhoneNumberValidate
   */
  public toPhoneNumberValidate() {
    return this.to('PhoneNumberValidate');
  }

  /**
   * Grants permission to create or update an event stream for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#PutEventStream
   */
  public toPutEventStream() {
    return this.to('PutEventStream');
  }

  /**
   * Grants permission to create or update events for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-events.html#PutEvents
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  /**
   * Grants permission to remove the attributes for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-attributes-attribute-type.html#RemoveAttributes
   */
  public toRemoveAttributes() {
    return this.to('RemoveAttributes');
  }

  /**
   * Grants permission to send an SMS message or push notification to specific endpoints
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#SendMessages
   */
  public toSendMessages() {
    return this.to('SendMessages');
  }

  /**
   * Grants permission to send an OTP code to a user of your application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-otp.html#SendOTPMessage
   */
  public toSendOTPMessage() {
    return this.to('SendOTPMessage');
  }

  /**
   * Grants permission to send an SMS message or push notification to all endpoints that are associated with a specific user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-messages.html#SendUsersMessages
   */
  public toSendUsersMessages() {
    return this.to('SendUsersMessages');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#TagResource
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the Amazon Device Messaging (ADM) channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#UpdateAdmChannel
   */
  public toUpdateAdmChannel() {
    return this.to('UpdateAdmChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#UpdateApnsChannel
   */
  public toUpdateApnsChannel() {
    return this.to('UpdateApnsChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#UpdateApnsSandboxChannel
   */
  public toUpdateApnsSandboxChannel() {
    return this.to('UpdateApnsSandboxChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#UpdateApnsVoipChannel
   */
  public toUpdateApnsVoipChannel() {
    return this.to('UpdateApnsVoipChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#UpdateApnsVoipSandboxChannel
   */
  public toUpdateApnsVoipSandboxChannel() {
    return this.to('UpdateApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to update the default settings for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#UpdateApplicationSettings
   */
  public toUpdateApplicationSettings() {
    return this.to('UpdateApplicationSettings');
  }

  /**
   * Grants permission to update the Baidu channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#UpdateBaiduChannel
   */
  public toUpdateBaiduChannel() {
    return this.to('UpdateBaiduChannel');
  }

  /**
   * Grants permission to update a specific campaign
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#UpdateCampaign
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  /**
   * Grants permission to update the email channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#UpdateEmailChannel
   */
  public toUpdateEmailChannel() {
    return this.to('UpdateEmailChannel');
  }

  /**
   * Grants permission to update a specific email template under the same version or generate a new version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#UpdateEmailTemplate
   */
  public toUpdateEmailTemplate() {
    return this.to('UpdateEmailTemplate');
  }

  /**
   * Grants permission to create an endpoint or update the information for an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#UpdateEndpoint
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Grants permission to create or update endpoints as a batch operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html#UpdateEndpointsBatch
   */
  public toUpdateEndpointsBatch() {
    return this.to('UpdateEndpointsBatch');
  }

  /**
   * Grants permission to update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#UpdateGcmChannel
   */
  public toUpdateGcmChannel() {
    return this.to('UpdateGcmChannel');
  }

  /**
   * Grants permission to update a specific in-app message template under the same version or generate a new version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#UpdateInAppTemplate
   */
  public toUpdateInAppTemplate() {
    return this.to('UpdateInAppTemplate');
  }

  /**
   * Grants permission to update a specific journey
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#UpdateJourney
   */
  public toUpdateJourney() {
    return this.to('UpdateJourney');
  }

  /**
   * Grants permission to update a specific journey state
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#UpdateJourneyState
   */
  public toUpdateJourneyState() {
    return this.to('UpdateJourneyState');
  }

  /**
   * Grants permission to update a specific push notification template under the same version or generate a new version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#UpdatePushTemplate
   */
  public toUpdatePushTemplate() {
    return this.to('UpdatePushTemplate');
  }

  /**
   * Grants permission to update an Amazon Pinpoint configuration for a recommender model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   */
  public toUpdateRecommenderConfiguration() {
    return this.to('UpdateRecommenderConfiguration');
  }

  /**
   * Grants permission to update a specific segment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#UpdateSegment
   */
  public toUpdateSegment() {
    return this.to('UpdateSegment');
  }

  /**
   * Grants permission to update the SMS channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#UpdateSmsChannel
   */
  public toUpdateSmsChannel() {
    return this.to('UpdateSmsChannel');
  }

  /**
   * Grants permission to update a specific sms message template under the same version or generate a new version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#UpdateSmsTemplate
   */
  public toUpdateSmsTemplate() {
    return this.to('UpdateSmsTemplate');
  }

  /**
   * Grants permission to update the active version parameter of a specific template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-active-version.html#UpdateTemplateActiveVersion
   */
  public toUpdateTemplateActiveVersion() {
    return this.to('UpdateTemplateActiveVersion');
  }

  /**
   * Grants permission to update the Voice channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#UpdateVoiceChannel
   */
  public toUpdateVoiceChannel() {
    return this.to('UpdateVoiceChannel');
  }

  /**
   * Grants permission to update a specific voice message template under the same version or generate a new version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#UpdateVoiceTemplate
   */
  public toUpdateVoiceTemplate() {
    return this.to('UpdateVoiceTemplate');
  }

  /**
   * Grants permission to check the validity of One-Time Passwords (OTPs)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html#VerifyOTPMessage
   */
  public toVerifyOTPMessage() {
    return this.to('VerifyOTPMessage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApp',
      'CreateCampaign',
      'CreateEmailTemplate',
      'CreateExportJob',
      'CreateImportJob',
      'CreateInAppTemplate',
      'CreateJourney',
      'CreatePushTemplate',
      'CreateRecommenderConfiguration',
      'CreateSegment',
      'CreateSmsTemplate',
      'CreateVoiceTemplate',
      'DeleteAdmChannel',
      'DeleteApnsChannel',
      'DeleteApnsSandboxChannel',
      'DeleteApnsVoipChannel',
      'DeleteApnsVoipSandboxChannel',
      'DeleteApp',
      'DeleteBaiduChannel',
      'DeleteCampaign',
      'DeleteEmailChannel',
      'DeleteEmailTemplate',
      'DeleteEndpoint',
      'DeleteEventStream',
      'DeleteGcmChannel',
      'DeleteInAppTemplate',
      'DeleteJourney',
      'DeletePushTemplate',
      'DeleteRecommenderConfiguration',
      'DeleteSegment',
      'DeleteSmsChannel',
      'DeleteSmsTemplate',
      'DeleteUserEndpoints',
      'DeleteVoiceChannel',
      'DeleteVoiceTemplate',
      'PutEventStream',
      'PutEvents',
      'RemoveAttributes',
      'SendMessages',
      'SendOTPMessage',
      'SendUsersMessages',
      'UpdateAdmChannel',
      'UpdateApnsChannel',
      'UpdateApnsSandboxChannel',
      'UpdateApnsVoipChannel',
      'UpdateApnsVoipSandboxChannel',
      'UpdateApplicationSettings',
      'UpdateBaiduChannel',
      'UpdateCampaign',
      'UpdateEmailChannel',
      'UpdateEmailTemplate',
      'UpdateEndpoint',
      'UpdateEndpointsBatch',
      'UpdateGcmChannel',
      'UpdateInAppTemplate',
      'UpdateJourney',
      'UpdateJourneyState',
      'UpdatePushTemplate',
      'UpdateRecommenderConfiguration',
      'UpdateSegment',
      'UpdateSmsChannel',
      'UpdateSmsTemplate',
      'UpdateTemplateActiveVersion',
      'UpdateVoiceChannel',
      'UpdateVoiceTemplate',
      'VerifyOTPMessage'
    ],
    Read: [
      'GetAdmChannel',
      'GetApnsChannel',
      'GetApnsSandboxChannel',
      'GetApnsVoipChannel',
      'GetApnsVoipSandboxChannel',
      'GetApp',
      'GetApplicationDateRangeKpi',
      'GetApps',
      'GetBaiduChannel',
      'GetCampaign',
      'GetCampaignDateRangeKpi',
      'GetCampaignVersion',
      'GetEmailChannel',
      'GetEmailTemplate',
      'GetEndpoint',
      'GetEventStream',
      'GetExportJob',
      'GetGcmChannel',
      'GetImportJob',
      'GetInAppMessages',
      'GetInAppTemplate',
      'GetJourney',
      'GetJourneyDateRangeKpi',
      'GetJourneyExecutionActivityMetrics',
      'GetJourneyExecutionMetrics',
      'GetJourneyRunExecutionActivityMetrics',
      'GetJourneyRunExecutionMetrics',
      'GetPushTemplate',
      'GetRecommenderConfiguration',
      'GetReports',
      'GetSegment',
      'GetSegmentVersion',
      'GetSmsChannel',
      'GetSmsTemplate',
      'GetUserEndpoints',
      'GetVoiceChannel',
      'GetVoiceTemplate',
      'ListTagsForResource',
      'PhoneNumberValidate'
    ],
    List: [
      'GetApplicationSettings',
      'GetCampaignActivities',
      'GetCampaignVersions',
      'GetCampaigns',
      'GetChannels',
      'GetExportJobs',
      'GetImportJobs',
      'GetJourneyRuns',
      'GetRecommenderConfigurations',
      'GetSegmentExportJobs',
      'GetSegmentImportJobs',
      'GetSegmentVersions',
      'GetSegments',
      'ListJourneys',
      'ListTemplateVersions',
      'ListTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type app to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApp(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }`);
  }

  /**
   * Adds a resource of type apps to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApps(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ resourceName }`);
  }

  /**
   * Adds a resource of type campaign to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html
   *
   * @param appId - Identifier for the appId.
   * @param campaignId - Identifier for the campaignId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCampaign(appId: string, campaignId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/campaigns/${ campaignId }`);
  }

  /**
   * Adds a resource of type journey to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html
   *
   * @param appId - Identifier for the appId.
   * @param journeyId - Identifier for the journeyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJourney(appId: string, journeyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/journeys/${ journeyId }`);
  }

  /**
   * Adds a resource of type journeys to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJourneys(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/journeys`);
  }

  /**
   * Adds a resource of type segment to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html
   *
   * @param appId - Identifier for the appId.
   * @param segmentId - Identifier for the segmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSegment(appId: string, segmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/segments/${ segmentId }`);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param templateType - Identifier for the templateType.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(templateName: string, templateType: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:templates/${ templateName }/${ templateType }`);
  }

  /**
   * Adds a resource of type templates to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTemplates(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:templates`);
  }

  /**
   * Adds a resource of type recommender to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html
   *
   * @param recommenderId - Identifier for the recommenderId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRecommender(recommenderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recommenders/${ recommenderId }`);
  }

  /**
   * Adds a resource of type recommenders to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRecommenders(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recommenders/${ resourceName }`);
  }

  /**
   * Adds a resource of type phone-number-validate to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPhoneNumberValidate(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:phone/number/validate`);
  }

  /**
   * Adds a resource of type channels to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChannels(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/channels`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels.html
   *
   * @param appId - Identifier for the appId.
   * @param channelType - Identifier for the channelType.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChannel(appId: string, channelType: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/channels/${ channelType }`);
  }

  /**
   * Adds a resource of type event-stream to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEventStream(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/eventstream`);
  }

  /**
   * Adds a resource of type events to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-events.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEvents(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/events`);
  }

  /**
   * Adds a resource of type messages to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMessages(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/messages`);
  }

  /**
   * Adds a resource of type verify-otp to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVerifyOtp(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/verify-otp`);
  }

  /**
   * Adds a resource of type otp to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOtp(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/otp`);
  }

  /**
   * Adds a resource of type attribute to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-attributes-attribute-type.html
   *
   * @param appId - Identifier for the appId.
   * @param attributeType - Identifier for the attributeType.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAttribute(appId: string, attributeType: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/attributes/${ attributeType }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html
   *
   * @param appId - Identifier for the appId.
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUser(appId: string, userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/users/${ userId }`);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html
   *
   * @param appId - Identifier for the appId.
   * @param endpointId - Identifier for the endpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEndpoint(appId: string, endpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/endpoints/${ endpointId }`);
  }

  /**
   * Adds a resource of type import-job to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import-job-id.html
   *
   * @param appId - Identifier for the appId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onImportJob(appId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/jobs/import/${ jobId }`);
  }

  /**
   * Adds a resource of type export-job to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export-job-id.html
   *
   * @param appId - Identifier for the appId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExportJob(appId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/jobs/export/${ jobId }`);
  }

  /**
   * Adds a resource of type application-metrics to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-kpis-daterange-kpi-name.html
   *
   * @param appId - Identifier for the appId.
   * @param kpiName - Identifier for the kpiName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplicationMetrics(appId: string, kpiName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/kpis/daterange/${ kpiName }`);
  }

  /**
   * Adds a resource of type campaign-metrics to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-kpis-daterange-kpi-name.html
   *
   * @param appId - Identifier for the appId.
   * @param campaignId - Identifier for the campaignId.
   * @param kpiName - Identifier for the kpiName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCampaignMetrics(appId: string, campaignId: string, kpiName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/campaigns/${ campaignId }/kpis/daterange/${ kpiName }`);
  }

  /**
   * Adds a resource of type journey-metrics to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-kpis-daterange-kpi-name.html
   *
   * @param appId - Identifier for the appId.
   * @param journeyId - Identifier for the journeyId.
   * @param kpiName - Identifier for the kpiName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJourneyMetrics(appId: string, journeyId: string, kpiName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/journeys/${ journeyId }/kpis/daterange/${ kpiName }`);
  }

  /**
   * Adds a resource of type journey-execution-metrics to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-execution-metrics.html
   *
   * @param appId - Identifier for the appId.
   * @param journeyId - Identifier for the journeyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJourneyExecutionMetrics(appId: string, journeyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/journeys/${ journeyId }/execution-metrics`);
  }

  /**
   * Adds a resource of type journey-execution-activity-metrics to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-activities-journey-activity-id-execution-metrics.html
   *
   * @param appId - Identifier for the appId.
   * @param journeyId - Identifier for the journeyId.
   * @param journeyActivityId - Identifier for the journeyActivityId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJourneyExecutionActivityMetrics(appId: string, journeyId: string, journeyActivityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:apps/${ appId }/journeys/${ journeyId }/activities/${ journeyActivityId }/execution-metrics`);
  }

  /**
   * Adds a resource of type reports to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/reports.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReports(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mobiletargeting:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:reports`);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the pinpoint service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateCampaign()
   * - .toCreateEmailTemplate()
   * - .toCreateInAppTemplate()
   * - .toCreateJourney()
   * - .toCreatePushTemplate()
   * - .toCreateSegment()
   * - .toCreateSmsTemplate()
   * - .toCreateVoiceTemplate()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCampaign()
   * - .toUpdateEmailTemplate()
   * - .toUpdateInAppTemplate()
   * - .toUpdateJourney()
   * - .toUpdateJourneyState()
   * - .toUpdatePushTemplate()
   * - .toUpdateSegment()
   * - .toUpdateSmsTemplate()
   * - .toUpdateVoiceTemplate()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateCampaign()
   * - .toCreateEmailTemplate()
   * - .toCreateInAppTemplate()
   * - .toCreateJourney()
   * - .toCreatePushTemplate()
   * - .toCreateSegment()
   * - .toCreateSmsTemplate()
   * - .toCreateVoiceTemplate()
   *
   * Applies to resource types:
   * - app
   * - campaign
   * - journey
   * - segment
   * - template
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateCampaign()
   * - .toCreateEmailTemplate()
   * - .toCreateInAppTemplate()
   * - .toCreateJourney()
   * - .toCreatePushTemplate()
   * - .toCreateSegment()
   * - .toCreateSmsTemplate()
   * - .toCreateVoiceTemplate()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCampaign()
   * - .toUpdateEmailTemplate()
   * - .toUpdateInAppTemplate()
   * - .toUpdateJourney()
   * - .toUpdateJourneyState()
   * - .toUpdatePushTemplate()
   * - .toUpdateSegment()
   * - .toUpdateSmsTemplate()
   * - .toUpdateVoiceTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
