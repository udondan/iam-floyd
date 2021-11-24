import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toCreateEmailTemplate() {
    return this.to('CreateEmailTemplate');
  }

  /**
   * Grants permission to create an export job that exports endpoint definitions to Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toCreateExportJob() {
    return this.to('CreateExportJob');
  }

  /**
   * Grants permission to import endpoint definitions from to create a segment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toCreateImportJob() {
    return this.to('CreateImportJob');
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toCreateVoiceTemplate() {
    return this.to('CreateVoiceTemplate');
  }

  /**
   * Grants permission to delete the ADM channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toDeleteAdmChannel() {
    return this.to('DeleteAdmChannel');
  }

  /**
   * Grants permission to delete the APNs channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toDeleteApnsChannel() {
    return this.to('DeleteApnsChannel');
  }

  /**
   * Grants permission to delete the APNs sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toDeleteApnsSandboxChannel() {
    return this.to('DeleteApnsSandboxChannel');
  }

  /**
   * Grants permission to delete the APNs VoIP channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toDeleteApnsVoipChannel() {
    return this.to('DeleteApnsVoipChannel');
  }

  /**
   * Grants permission to delete the APNs VoIP sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toDeleteApnsVoipSandboxChannel() {
    return this.to('DeleteApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to delete a specific campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete the Baidu channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toDeleteBaiduChannel() {
    return this.to('DeleteBaiduChannel');
  }

  /**
   * Grants permission to delete a specific campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to delete the email channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toDeleteEmailChannel() {
    return this.to('DeleteEmailChannel');
  }

  /**
   * Grants permission to delete an email template or an email template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toDeleteEmailTemplate() {
    return this.to('DeleteEmailTemplate');
  }

  /**
   * Grants permission to delete an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete the event stream for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toDeleteEventStream() {
    return this.to('DeleteEventStream');
  }

  /**
   * Grants permission to delete the GCM channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toDeleteGcmChannel() {
    return this.to('DeleteGcmChannel');
  }

  /**
   * Grants permission to delete a specific journey
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public toDeleteJourney() {
    return this.to('DeleteJourney');
  }

  /**
   * Grants permission to delete a push notification template or a push notification template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toDeleteSegment() {
    return this.to('DeleteSegment');
  }

  /**
   * Grants permission to delete the SMS channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toDeleteSmsChannel() {
    return this.to('DeleteSmsChannel');
  }

  /**
   * Grants permission to delete an sms message template or an sms message template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toDeleteSmsTemplate() {
    return this.to('DeleteSmsTemplate');
  }

  /**
   * Grants permission to delete all of the endpoints that are associated with a user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toDeleteUserEndpoints() {
    return this.to('DeleteUserEndpoints');
  }

  /**
   * Grants permission to delete the Voice channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toDeleteVoiceChannel() {
    return this.to('DeleteVoiceChannel');
  }

  /**
   * Grants permission to delete a voice message template or a voice message template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toDeleteVoiceTemplate() {
    return this.to('DeleteVoiceTemplate');
  }

  /**
   * Grants permission to retrieve information about the Amazon Device Messaging (ADM) channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toGetAdmChannel() {
    return this.to('GetAdmChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toGetApnsChannel() {
    return this.to('GetApnsChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs sandbox channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toGetApnsSandboxChannel() {
    return this.to('GetApnsSandboxChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs VoIP channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toGetApnsVoipChannel() {
    return this.to('GetApnsVoipChannel');
  }

  /**
   * Grants permission to retrieve information about the APNs VoIP sandbox channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toGetApnsVoipSandboxChannel() {
    return this.to('GetApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to retrieve information about a specific app in your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toGetApplicationSettings() {
    return this.to('GetApplicationSettings');
  }

  /**
   * Grants permission to retrieve a list of apps in your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods
   */
  public toGetApps() {
    return this.to('GetApps');
  }

  /**
   * Grants permission to retrieve information about the Baidu channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toGetBaiduChannel() {
    return this.to('GetBaiduChannel');
  }

  /**
   * Grants permission to retrieve information about a specific campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Grants permission to retrieve information about the activities performed by a campaign
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods
   */
  public toGetCampaignVersion() {
    return this.to('GetCampaignVersion');
  }

  /**
   * Grants permission to retrieve information about the current and prior versions of a campaign
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods
   */
  public toGetCampaignVersions() {
    return this.to('GetCampaignVersions');
  }

  /**
   * Grants permission to retrieve information about all campaigns for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   */
  public toGetCampaigns() {
    return this.to('GetCampaigns');
  }

  /**
   * Grants permission to get all channels information for your app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods
   */
  public toGetChannels() {
    return this.to('GetChannels');
  }

  /**
   * Grants permission to obtain information about the email channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toGetEmailChannel() {
    return this.to('GetEmailChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an email template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toGetEmailTemplate() {
    return this.to('GetEmailTemplate');
  }

  /**
   * Grants permission to retrieve information about a specific endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Grants permission to retrieve information about the event stream for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toGetEventStream() {
    return this.to('GetEventStream');
  }

  /**
   * Grants permission to obtain information about a specific export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJob() {
    return this.to('GetExportJob');
  }

  /**
   * Grants permission to retrieve a list of all of the export jobs for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJobs() {
    return this.to('GetExportJobs');
  }

  /**
   * Grants permission to retrieve information about the GCM channel for an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toGetGcmChannel() {
    return this.to('GetGcmChannel');
  }

  /**
   * Grants permission to retrieve information about a specific import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods
   */
  public toGetImportJob() {
    return this.to('GetImportJob');
  }

  /**
   * Grants permission to retrieve information about all import jobs for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetImportJobs() {
    return this.to('GetImportJobs');
  }

  /**
   * Grants permission to retrive in-app messages for the given endpoint id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id-inappmessages.html
   */
  public toGetInAppMessages() {
    return this.to('GetInAppMessages');
  }

  /**
   * Grants permission to retrieve information about a specific journey
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
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
   * Grants permission to retrieve information about a specific or the active version of an push notification template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toGetSegment() {
    return this.to('GetSegment');
  }

  /**
   * Grants permission to retrieve information about jobs that export endpoint definitions from segments to Amazon S3
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetSegmentExportJobs() {
    return this.to('GetSegmentExportJobs');
  }

  /**
   * Grants permission to retrieve information about jobs that create segments by importing endpoint definitions from
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetSegmentImportJobs() {
    return this.to('GetSegmentImportJobs');
  }

  /**
   * Grants permission to retrieve information about a specific segment version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods
   */
  public toGetSegmentVersion() {
    return this.to('GetSegmentVersion');
  }

  /**
   * Grants permission to retrieve information about the current and prior versions of a segment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods
   */
  public toGetSegmentVersions() {
    return this.to('GetSegmentVersions');
  }

  /**
   * Grants permission to retrieve information about the segments for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   */
  public toGetSegments() {
    return this.to('GetSegments');
  }

  /**
   * Grants permission to obtain information about the SMS channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toGetSmsChannel() {
    return this.to('GetSmsChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of an sms message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toGetSmsTemplate() {
    return this.to('GetSmsTemplate');
  }

  /**
   * Grants permission to retrieve information about the endpoints that are associated with a user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toGetUserEndpoints() {
    return this.to('GetUserEndpoints');
  }

  /**
   * Grants permission to obtain information about the Voice channel in an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toGetVoiceChannel() {
    return this.to('GetVoiceChannel');
  }

  /**
   * Grants permission to retrieve information about a specific or the active version of a voice message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toGetVoiceTemplate() {
    return this.to('GetVoiceTemplate');
  }

  /**
   * Grants permission to retrieve information about all journeys for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods
   */
  public toListJourneys() {
    return this.to('ListJourneys');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve all versions about a specific template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toListTemplateVersions() {
    return this.to('ListTemplateVersions');
  }

  /**
   * Grants permission to retrieve metadata about the queried templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods
   */
  public toPhoneNumberValidate() {
    return this.to('PhoneNumberValidate');
  }

  /**
   * Grants permission to create or update an event stream for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toPutEventStream() {
    return this.to('PutEventStream');
  }

  /**
   * Grants permission to create or update events for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  /**
   * Grants permission to remove the attributes for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toRemoveAttributes() {
    return this.to('RemoveAttributes');
  }

  /**
   * Grants permission to send an SMS message or push notification to specific endpoints
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods
   */
  public toSendMessages() {
    return this.to('SendMessages');
  }

  /**
   * Grants permission to send an SMS message or push notification to all endpoints that are associated with a specific user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-post
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the Amazon Device Messaging (ADM) channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toUpdateAdmChannel() {
    return this.to('UpdateAdmChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toUpdateApnsChannel() {
    return this.to('UpdateApnsChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toUpdateApnsSandboxChannel() {
    return this.to('UpdateApnsSandboxChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toUpdateApnsVoipChannel() {
    return this.to('UpdateApnsVoipChannel');
  }

  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP sandbox channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toUpdateApnsVoipSandboxChannel() {
    return this.to('UpdateApnsVoipSandboxChannel');
  }

  /**
   * Grants permission to update the default settings for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toUpdateApplicationSettings() {
    return this.to('UpdateApplicationSettings');
  }

  /**
   * Grants permission to update the Baidu channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  /**
   * Grants permission to update the email channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toUpdateEmailTemplate() {
    return this.to('UpdateEmailTemplate');
  }

  /**
   * Grants permission to create an endpoint or update the information for an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Grants permission to create or update endpoints as a batch operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods
   */
  public toUpdateEndpointsBatch() {
    return this.to('UpdateEndpointsBatch');
  }

  /**
   * Grants permission to update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toUpdateGcmChannel() {
    return this.to('UpdateGcmChannel');
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#apps-application-id-journeys-journey-id-state-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toUpdateSegment() {
    return this.to('UpdateSegment');
  }

  /**
   * Grants permission to update the SMS channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toUpdateSmsTemplate() {
    return this.to('UpdateSmsTemplate');
  }

  /**
   * Grants permission to update the active version parameter of a specific template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toUpdateTemplateActiveVersion() {
    return this.to('UpdateTemplateActiveVersion');
  }

  /**
   * Grants permission to update the Voice channel for an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
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
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toUpdateVoiceTemplate() {
    return this.to('UpdateVoiceTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApp',
      'CreateCampaign',
      'CreateEmailTemplate',
      'CreateExportJob',
      'CreateImportJob',
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
      'UpdateJourney',
      'UpdateJourneyState',
      'UpdatePushTemplate',
      'UpdateRecommenderConfiguration',
      'UpdateSegment',
      'UpdateSmsChannel',
      'UpdateSmsTemplate',
      'UpdateTemplateActiveVersion',
      'UpdateVoiceChannel',
      'UpdateVoiceTemplate'
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
      'GetJourney',
      'GetJourneyDateRangeKpi',
      'GetJourneyExecutionActivityMetrics',
      'GetJourneyExecutionMetrics',
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
   * Adds a resource of type apps to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/developerguide/gettingstarted.html#gettingstarted-addapp
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApps(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:apps/${ appId }`);
  }

  /**
   * Adds a resource of type campaigns to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html
   *
   * @param appId - Identifier for the appId.
   * @param campaignId - Identifier for the campaignId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCampaigns(appId: string, campaignId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:apps/${ appId }/campaigns/${ campaignId }`);
  }

  /**
   * Adds a resource of type journeys to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html
   *
   * @param appId - Identifier for the appId.
   * @param journeyId - Identifier for the journeyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJourneys(appId: string, journeyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:apps/${ appId }/journeys/${ journeyId }`);
  }

  /**
   * Adds a resource of type segments to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html
   *
   * @param appId - Identifier for the appId.
   * @param segmentId - Identifier for the segmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSegments(appId: string, segmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:apps/${ appId }/segments/${ segmentId }`);
  }

  /**
   * Adds a resource of type templates to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param channelType - Identifier for the channelType.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplates(templateName: string, channelType: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:templates/${ templateName }/${ channelType }`);
  }

  /**
   * Adds a resource of type recommenders to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html
   *
   * @param recommenderId - Identifier for the recommenderId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRecommenders(recommenderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:recommenders/${ recommenderId }`);
  }

  /**
   * Adds a resource of type phone-number-validate to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPhoneNumberValidate(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobiletargeting:${ region || '*' }:${ account || '*' }:phone/number/validate`);
  }
}
