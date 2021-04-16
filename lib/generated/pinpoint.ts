import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create an app.
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
   * Create a campaign for an app.
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
   * Create an email template.
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
   * Create an export job that exports endpoint definitions to Amazon S3.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toCreateExportJob() {
    return this.to('CreateExportJob');
  }

  /**
   * Import endpoint definitions from to create a segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toCreateImportJob() {
    return this.to('CreateImportJob');
  }

  /**
   * Create a Journey for an app.
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
   * Create a push notification template.
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
   * Create an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  public toCreateRecommenderConfiguration() {
    return this.to('CreateRecommenderConfiguration');
  }

  /**
   * Create a segment that is based on endpoint data reported to Pinpoint by your app. To allow a user to create a segment by importing endpoint data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob action.
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
   * Create an sms message template.
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
   * Create a voice message template.
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
   * Delete the ADM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toDeleteAdmChannel() {
    return this.to('DeleteAdmChannel');
  }

  /**
   * Delete the APNs channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toDeleteApnsChannel() {
    return this.to('DeleteApnsChannel');
  }

  /**
   * Delete the APNs sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toDeleteApnsSandboxChannel() {
    return this.to('DeleteApnsSandboxChannel');
  }

  /**
   * Delete the APNs VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toDeleteApnsVoipChannel() {
    return this.to('DeleteApnsVoipChannel');
  }

  /**
   * Delete the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toDeleteApnsVoipSandboxChannel() {
    return this.to('DeleteApnsVoipSandboxChannel');
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Delete the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toDeleteBaiduChannel() {
    return this.to('DeleteBaiduChannel');
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Delete the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toDeleteEmailChannel() {
    return this.to('DeleteEmailChannel');
  }

  /**
   * Delete an email template or an email template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toDeleteEmailTemplate() {
    return this.to('DeleteEmailTemplate');
  }

  /**
   * Delete an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Delete the event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toDeleteEventStream() {
    return this.to('DeleteEventStream');
  }

  /**
   * Delete the GCM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toDeleteGcmChannel() {
    return this.to('DeleteGcmChannel');
  }

  /**
   * Delete a specific journey.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public toDeleteJourney() {
    return this.to('DeleteJourney');
  }

  /**
   * Delete a push notification template or a push notification template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public toDeletePushTemplate() {
    return this.to('DeletePushTemplate');
  }

  /**
   * Delete an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   */
  public toDeleteRecommenderConfiguration() {
    return this.to('DeleteRecommenderConfiguration');
  }

  /**
   * Delete a specific segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toDeleteSegment() {
    return this.to('DeleteSegment');
  }

  /**
   * Delete the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toDeleteSmsChannel() {
    return this.to('DeleteSmsChannel');
  }

  /**
   * Delete an sms message template or an sms message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toDeleteSmsTemplate() {
    return this.to('DeleteSmsTemplate');
  }

  /**
   * Delete all of the endpoints that are associated with a user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toDeleteUserEndpoints() {
    return this.to('DeleteUserEndpoints');
  }

  /**
   * Delete the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toDeleteVoiceChannel() {
    return this.to('DeleteVoiceChannel');
  }

  /**
   * Delete a voice message template or a voice message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toDeleteVoiceTemplate() {
    return this.to('DeleteVoiceTemplate');
  }

  /**
   * Retrieve information about the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toGetAdmChannel() {
    return this.to('GetAdmChannel');
  }

  /**
   * Retrieve information about the APNs channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toGetApnsChannel() {
    return this.to('GetApnsChannel');
  }

  /**
   * Retrieve information about the APNs sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toGetApnsSandboxChannel() {
    return this.to('GetApnsSandboxChannel');
  }

  /**
   * Retrieve information about the APNs VoIP channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toGetApnsVoipChannel() {
    return this.to('GetApnsVoipChannel');
  }

  /**
   * Retrieve information about the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toGetApnsVoipSandboxChannel() {
    return this.to('GetApnsVoipSandboxChannel');
  }

  /**
   * Retrieve information about a specific app in your Amazon Pinpoint account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toGetApp() {
    return this.to('GetApp');
  }

  /**
   * Retrieve the default settings for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toGetApplicationSettings() {
    return this.to('GetApplicationSettings');
  }

  /**
   * Retrieve a list of apps in your Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods
   */
  public toGetApps() {
    return this.to('GetApps');
  }

  /**
   * Retrieve information about the Baidu channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toGetBaiduChannel() {
    return this.to('GetBaiduChannel');
  }

  /**
   * Retrieve information about a specific campaign.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Retrieve information about the activities performed by a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods
   */
  public toGetCampaignActivities() {
    return this.to('GetCampaignActivities');
  }

  /**
   * Retrieve information about a specific campaign version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods
   */
  public toGetCampaignVersion() {
    return this.to('GetCampaignVersion');
  }

  /**
   * Retrieve information about the current and prior versions of a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods
   */
  public toGetCampaignVersions() {
    return this.to('GetCampaignVersions');
  }

  /**
   * Retrieve information about all campaigns for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   */
  public toGetCampaigns() {
    return this.to('GetCampaigns');
  }

  /**
   * Get all channels information for your app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods
   */
  public toGetChannels() {
    return this.to('GetChannels');
  }

  /**
   * Obtain information about the email channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toGetEmailChannel() {
    return this.to('GetEmailChannel');
  }

  /**
   * Retrieve information about a specific or the active version of an email template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toGetEmailTemplate() {
    return this.to('GetEmailTemplate');
  }

  /**
   * Retrieve information about a specific endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Retrieve information about the event stream for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toGetEventStream() {
    return this.to('GetEventStream');
  }

  /**
   * Obtain information about a specific export job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJob() {
    return this.to('GetExportJob');
  }

  /**
   * Retrieve a list of all of the export jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJobs() {
    return this.to('GetExportJobs');
  }

  /**
   * Retrieve information about the GCM channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toGetGcmChannel() {
    return this.to('GetGcmChannel');
  }

  /**
   * Retrieve information about a specific import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods
   */
  public toGetImportJob() {
    return this.to('GetImportJob');
  }

  /**
   * Retrieve information about all import jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetImportJobs() {
    return this.to('GetImportJobs');
  }

  /**
   * Retrieve information about a specific journey.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public toGetJourney() {
    return this.to('GetJourney');
  }

  /**
   * Retrieve information about a specific or the active version of an push notification template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public toGetPushTemplate() {
    return this.to('GetPushTemplate');
  }

  /**
   * Retrieve information about an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   */
  public toGetRecommenderConfiguration() {
    return this.to('GetRecommenderConfiguration');
  }

  /**
   * Retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  public toGetRecommenderConfigurations() {
    return this.to('GetRecommenderConfigurations');
  }

  /**
   * Retrieve information about a specific segment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toGetSegment() {
    return this.to('GetSegment');
  }

  /**
   * Retrieve information about jobs that export endpoint definitions from segments to Amazon S3.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetSegmentExportJobs() {
    return this.to('GetSegmentExportJobs');
  }

  /**
   * Retrieve information about jobs that create segments by importing endpoint definitions from .
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetSegmentImportJobs() {
    return this.to('GetSegmentImportJobs');
  }

  /**
   * Retrieve information about a specific segment version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods
   */
  public toGetSegmentVersion() {
    return this.to('GetSegmentVersion');
  }

  /**
   * Retrieve information about the current and prior versions of a segment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods
   */
  public toGetSegmentVersions() {
    return this.to('GetSegmentVersions');
  }

  /**
   * Retrieve information about the segments for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   */
  public toGetSegments() {
    return this.to('GetSegments');
  }

  /**
   * Obtain information about the SMS channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toGetSmsChannel() {
    return this.to('GetSmsChannel');
  }

  /**
   * Retrieve information about a specific or the active version of an sms message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toGetSmsTemplate() {
    return this.to('GetSmsTemplate');
  }

  /**
   * Retrieve information about the endpoints that are associated with a user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toGetUserEndpoints() {
    return this.to('GetUserEndpoints');
  }

  /**
   * Obtain information about the Voice channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toGetVoiceChannel() {
    return this.to('GetVoiceChannel');
  }

  /**
   * Retrieve information about a specific or the active version of a voice message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toGetVoiceTemplate() {
    return this.to('GetVoiceTemplate');
  }

  /**
   * Retrieve information about all journeys for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods
   */
  public toListJourneys() {
    return this.to('ListJourneys');
  }

  /**
   * List tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Retrieve all versions about a specific template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toListTemplateVersions() {
    return this.to('ListTemplateVersions');
  }

  /**
   * Retrieve metadata about the queried templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods
   */
  public toPhoneNumberValidate() {
    return this.to('PhoneNumberValidate');
  }

  /**
   * Create or update an event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toPutEventStream() {
    return this.to('PutEventStream');
  }

  /**
   * Create or update events for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  /**
   * Used to remove the attributes for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toRemoveAttributes() {
    return this.to('RemoveAttributes');
  }

  /**
   * Send an SMS message or push notification to specific endpoints.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods
   */
  public toSendMessages() {
    return this.to('SendMessages');
  }

  /**
   * Send an SMS message or push notification to all endpoints that are associated with a specific user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods
   */
  public toSendUsersMessages() {
    return this.to('SendUsersMessages');
  }

  /**
   * Adds tags to a resource.
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
   * Removes tags from a resource.
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
   * Update the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toUpdateAdmChannel() {
    return this.to('UpdateAdmChannel');
  }

  /**
   * Update the Apple Push Notification service (APNs) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toUpdateApnsChannel() {
    return this.to('UpdateApnsChannel');
  }

  /**
   * Update the Apple Push Notification service (APNs) sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toUpdateApnsSandboxChannel() {
    return this.to('UpdateApnsSandboxChannel');
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toUpdateApnsVoipChannel() {
    return this.to('UpdateApnsVoipChannel');
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toUpdateApnsVoipSandboxChannel() {
    return this.to('UpdateApnsVoipSandboxChannel');
  }

  /**
   * Update the default settings for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toUpdateApplicationSettings() {
    return this.to('UpdateApplicationSettings');
  }

  /**
   * Update the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toUpdateBaiduChannel() {
    return this.to('UpdateBaiduChannel');
  }

  /**
   * Update a specific campaign.
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
   * Update the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toUpdateEmailChannel() {
    return this.to('UpdateEmailChannel');
  }

  /**
   * Update a specific email template under the same version or generate a new version.
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
   * Create an endpoint or update the information for an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Create or update endpoints as a batch operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods
   */
  public toUpdateEndpointsBatch() {
    return this.to('UpdateEndpointsBatch');
  }

  /**
   * Update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toUpdateGcmChannel() {
    return this.to('UpdateGcmChannel');
  }

  /**
   * Update a specific journey.
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
   * Update a specific journey state.
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
   * Update a specific push notification template under the same version or generate a new version.
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
   * Update an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   */
  public toUpdateRecommenderConfiguration() {
    return this.to('UpdateRecommenderConfiguration');
  }

  /**
   * Update a specific segment.
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
   * Update the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toUpdateSmsChannel() {
    return this.to('UpdateSmsChannel');
  }

  /**
   * Update a specific sms message template under the same version or generate a new version.
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
   * Upate the active version parameter of a specific template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toUpdateTemplateActiveVersion() {
    return this.to('UpdateTemplateActiveVersion');
  }

  /**
   * Update the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toUpdateVoiceChannel() {
    return this.to('UpdateVoiceChannel');
  }

  /**
   * Update a specific voice message template under the same version or generate a new version.
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
    "Write": [
      "CreateApp",
      "CreateCampaign",
      "CreateEmailTemplate",
      "CreateExportJob",
      "CreateImportJob",
      "CreateJourney",
      "CreatePushTemplate",
      "CreateRecommenderConfiguration",
      "CreateSegment",
      "CreateSmsTemplate",
      "CreateVoiceTemplate",
      "DeleteAdmChannel",
      "DeleteApnsChannel",
      "DeleteApnsSandboxChannel",
      "DeleteApnsVoipChannel",
      "DeleteApnsVoipSandboxChannel",
      "DeleteApp",
      "DeleteBaiduChannel",
      "DeleteCampaign",
      "DeleteEmailChannel",
      "DeleteEmailTemplate",
      "DeleteEndpoint",
      "DeleteEventStream",
      "DeleteGcmChannel",
      "DeleteJourney",
      "DeletePushTemplate",
      "DeleteRecommenderConfiguration",
      "DeleteSegment",
      "DeleteSmsChannel",
      "DeleteSmsTemplate",
      "DeleteUserEndpoints",
      "DeleteVoiceChannel",
      "DeleteVoiceTemplate",
      "PutEventStream",
      "PutEvents",
      "RemoveAttributes",
      "SendMessages",
      "SendUsersMessages",
      "UpdateAdmChannel",
      "UpdateApnsChannel",
      "UpdateApnsSandboxChannel",
      "UpdateApnsVoipChannel",
      "UpdateApnsVoipSandboxChannel",
      "UpdateApplicationSettings",
      "UpdateBaiduChannel",
      "UpdateCampaign",
      "UpdateEmailChannel",
      "UpdateEmailTemplate",
      "UpdateEndpoint",
      "UpdateEndpointsBatch",
      "UpdateGcmChannel",
      "UpdateJourney",
      "UpdateJourneyState",
      "UpdatePushTemplate",
      "UpdateRecommenderConfiguration",
      "UpdateSegment",
      "UpdateSmsChannel",
      "UpdateSmsTemplate",
      "UpdateTemplateActiveVersion",
      "UpdateVoiceChannel",
      "UpdateVoiceTemplate"
    ],
    "Read": [
      "GetAdmChannel",
      "GetApnsChannel",
      "GetApnsSandboxChannel",
      "GetApnsVoipChannel",
      "GetApnsVoipSandboxChannel",
      "GetApp",
      "GetBaiduChannel",
      "GetCampaign",
      "GetCampaignVersion",
      "GetEmailChannel",
      "GetEmailTemplate",
      "GetEndpoint",
      "GetEventStream",
      "GetExportJob",
      "GetGcmChannel",
      "GetImportJob",
      "GetJourney",
      "GetPushTemplate",
      "GetRecommenderConfiguration",
      "GetSegment",
      "GetSegmentVersion",
      "GetSmsChannel",
      "GetSmsTemplate",
      "GetUserEndpoints",
      "GetVoiceChannel",
      "GetVoiceTemplate",
      "PhoneNumberValidate"
    ],
    "List": [
      "GetApplicationSettings",
      "GetApps",
      "GetCampaignActivities",
      "GetCampaignVersions",
      "GetCampaigns",
      "GetChannels",
      "GetExportJobs",
      "GetImportJobs",
      "GetRecommenderConfigurations",
      "GetSegmentExportJobs",
      "GetSegmentImportJobs",
      "GetSegmentVersions",
      "GetSegments",
      "ListJourneys",
      "ListTagsForResource",
      "ListTemplateVersions",
      "ListTemplates"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/campaigns/${CampaignId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${CampaignId}', campaignId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/journeys/${JourneyId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${JourneyId}', journeyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/segments/${SegmentId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${SegmentId}', segmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/${ChannelType}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${ChannelType}', channelType);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:recommenders/${RecommenderId}';
    arn = arn.replace('${RecommenderId}', recommenderId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mobiletargeting:${Region}:${Account}:phone/number/validate';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
