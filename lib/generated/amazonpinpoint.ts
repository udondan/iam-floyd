import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mobiletargeting](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobiletargeting extends PolicyStatement {
  public servicePrefix = 'mobiletargeting';

  /**
   * Statement provider for service [mobiletargeting](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html).
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
    this.to('mobiletargeting:CreateApp');
    return this;
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
    this.to('mobiletargeting:CreateCampaign');
    return this;
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
    this.to('mobiletargeting:CreateEmailTemplate');
    return this;
  }

  /**
   * Create an export job that exports endpoint definitions to Amazon S3.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toCreateExportJob() {
    this.to('mobiletargeting:CreateExportJob');
    return this;
  }

  /**
   * Import endpoint definitions from to create a segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toCreateImportJob() {
    this.to('mobiletargeting:CreateImportJob');
    return this;
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
    this.to('mobiletargeting:CreateJourney');
    return this;
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
    this.to('mobiletargeting:CreatePushTemplate');
    return this;
  }

  /**
   * Create an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  public toCreateRecommenderConfiguration() {
    this.to('mobiletargeting:CreateRecommenderConfiguration');
    return this;
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
    this.to('mobiletargeting:CreateSegment');
    return this;
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
    this.to('mobiletargeting:CreateSmsTemplate');
    return this;
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
    this.to('mobiletargeting:CreateVoiceTemplate');
    return this;
  }

  /**
   * Delete the ADM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toDeleteAdmChannel() {
    this.to('mobiletargeting:DeleteAdmChannel');
    return this;
  }

  /**
   * Delete the APNs channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toDeleteApnsChannel() {
    this.to('mobiletargeting:DeleteApnsChannel');
    return this;
  }

  /**
   * Delete the APNs sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toDeleteApnsSandboxChannel() {
    this.to('mobiletargeting:DeleteApnsSandboxChannel');
    return this;
  }

  /**
   * Delete the APNs VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toDeleteApnsVoipChannel() {
    this.to('mobiletargeting:DeleteApnsVoipChannel');
    return this;
  }

  /**
   * Delete the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toDeleteApnsVoipSandboxChannel() {
    this.to('mobiletargeting:DeleteApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toDeleteApp() {
    this.to('mobiletargeting:DeleteApp');
    return this;
  }

  /**
   * Delete the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toDeleteBaiduChannel() {
    this.to('mobiletargeting:DeleteBaiduChannel');
    return this;
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toDeleteCampaign() {
    this.to('mobiletargeting:DeleteCampaign');
    return this;
  }

  /**
   * Delete the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toDeleteEmailChannel() {
    this.to('mobiletargeting:DeleteEmailChannel');
    return this;
  }

  /**
   * Delete an email template or an email template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toDeleteEmailTemplate() {
    this.to('mobiletargeting:DeleteEmailTemplate');
    return this;
  }

  /**
   * Delete an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toDeleteEndpoint() {
    this.to('mobiletargeting:DeleteEndpoint');
    return this;
  }

  /**
   * Delete the event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toDeleteEventStream() {
    this.to('mobiletargeting:DeleteEventStream');
    return this;
  }

  /**
   * Delete the GCM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toDeleteGcmChannel() {
    this.to('mobiletargeting:DeleteGcmChannel');
    return this;
  }

  /**
   * Delete a specific journey.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public toDeleteJourney() {
    this.to('mobiletargeting:DeleteJourney');
    return this;
  }

  /**
   * Delete a push notification template or a push notification template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public toDeletePushTemplate() {
    this.to('mobiletargeting:DeletePushTemplate');
    return this;
  }

  /**
   * Delete an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   */
  public toDeleteRecommenderConfiguration() {
    this.to('mobiletargeting:DeleteRecommenderConfiguration');
    return this;
  }

  /**
   * Delete a specific segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toDeleteSegment() {
    this.to('mobiletargeting:DeleteSegment');
    return this;
  }

  /**
   * Delete the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toDeleteSmsChannel() {
    this.to('mobiletargeting:DeleteSmsChannel');
    return this;
  }

  /**
   * Delete an sms message template or an sms message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toDeleteSmsTemplate() {
    this.to('mobiletargeting:DeleteSmsTemplate');
    return this;
  }

  /**
   * Delete all of the endpoints that are associated with a user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toDeleteUserEndpoints() {
    this.to('mobiletargeting:DeleteUserEndpoints');
    return this;
  }

  /**
   * Delete the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toDeleteVoiceChannel() {
    this.to('mobiletargeting:DeleteVoiceChannel');
    return this;
  }

  /**
   * Delete a voice message template or a voice message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toDeleteVoiceTemplate() {
    this.to('mobiletargeting:DeleteVoiceTemplate');
    return this;
  }

  /**
   * Retrieve information about the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toGetAdmChannel() {
    this.to('mobiletargeting:GetAdmChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toGetApnsChannel() {
    this.to('mobiletargeting:GetApnsChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toGetApnsSandboxChannel() {
    this.to('mobiletargeting:GetApnsSandboxChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs VoIP channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toGetApnsVoipChannel() {
    this.to('mobiletargeting:GetApnsVoipChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toGetApnsVoipSandboxChannel() {
    this.to('mobiletargeting:GetApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Retrieve information about a specific app in your Amazon Pinpoint account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toGetApp() {
    this.to('mobiletargeting:GetApp');
    return this;
  }

  /**
   * Retrieve the default settings for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toGetApplicationSettings() {
    this.to('mobiletargeting:GetApplicationSettings');
    return this;
  }

  /**
   * Retrieve a list of apps in your Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods
   */
  public toGetApps() {
    this.to('mobiletargeting:GetApps');
    return this;
  }

  /**
   * Retrieve information about the Baidu channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toGetBaiduChannel() {
    this.to('mobiletargeting:GetBaiduChannel');
    return this;
  }

  /**
   * Retrieve information about a specific campaign.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public toGetCampaign() {
    this.to('mobiletargeting:GetCampaign');
    return this;
  }

  /**
   * Retrieve information about the activities performed by a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods
   */
  public toGetCampaignActivities() {
    this.to('mobiletargeting:GetCampaignActivities');
    return this;
  }

  /**
   * Retrieve information about a specific campaign version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods
   */
  public toGetCampaignVersion() {
    this.to('mobiletargeting:GetCampaignVersion');
    return this;
  }

  /**
   * Retrieve information about the current and prior versions of a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods
   */
  public toGetCampaignVersions() {
    this.to('mobiletargeting:GetCampaignVersions');
    return this;
  }

  /**
   * Retrieve information about all campaigns for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   */
  public toGetCampaigns() {
    this.to('mobiletargeting:GetCampaigns');
    return this;
  }

  /**
   * Get all channels information for your app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods
   */
  public toGetChannels() {
    this.to('mobiletargeting:GetChannels');
    return this;
  }

  /**
   * Obtain information about the email channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toGetEmailChannel() {
    this.to('mobiletargeting:GetEmailChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an email template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public toGetEmailTemplate() {
    this.to('mobiletargeting:GetEmailTemplate');
    return this;
  }

  /**
   * Retrieve information about a specific endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toGetEndpoint() {
    this.to('mobiletargeting:GetEndpoint');
    return this;
  }

  /**
   * Retrieve information about the event stream for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toGetEventStream() {
    this.to('mobiletargeting:GetEventStream');
    return this;
  }

  /**
   * Obtain information about a specific export job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJob() {
    this.to('mobiletargeting:GetExportJob');
    return this;
  }

  /**
   * Retrieve a list of all of the export jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetExportJobs() {
    this.to('mobiletargeting:GetExportJobs');
    return this;
  }

  /**
   * Retrieve information about the GCM channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toGetGcmChannel() {
    this.to('mobiletargeting:GetGcmChannel');
    return this;
  }

  /**
   * Retrieve information about a specific import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods
   */
  public toGetImportJob() {
    this.to('mobiletargeting:GetImportJob');
    return this;
  }

  /**
   * Retrieve information about all import jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetImportJobs() {
    this.to('mobiletargeting:GetImportJobs');
    return this;
  }

  /**
   * Retrieve information about a specific journey.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public toGetJourney() {
    this.to('mobiletargeting:GetJourney');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an push notification template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public toGetPushTemplate() {
    this.to('mobiletargeting:GetPushTemplate');
    return this;
  }

  /**
   * Retrieve information about an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   */
  public toGetRecommenderConfiguration() {
    this.to('mobiletargeting:GetRecommenderConfiguration');
    return this;
  }

  /**
   * Retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  public toGetRecommenderConfigurations() {
    this.to('mobiletargeting:GetRecommenderConfigurations');
    return this;
  }

  /**
   * Retrieve information about a specific segment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public toGetSegment() {
    this.to('mobiletargeting:GetSegment');
    return this;
  }

  /**
   * Retrieve information about jobs that export endpoint definitions from segments to Amazon S3.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public toGetSegmentExportJobs() {
    this.to('mobiletargeting:GetSegmentExportJobs');
    return this;
  }

  /**
   * Retrieve information about jobs that create segments by importing endpoint definitions from .
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public toGetSegmentImportJobs() {
    this.to('mobiletargeting:GetSegmentImportJobs');
    return this;
  }

  /**
   * Retrieve information about a specific segment version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods
   */
  public toGetSegmentVersion() {
    this.to('mobiletargeting:GetSegmentVersion');
    return this;
  }

  /**
   * Retrieve information about the current and prior versions of a segment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods
   */
  public toGetSegmentVersions() {
    this.to('mobiletargeting:GetSegmentVersions');
    return this;
  }

  /**
   * Retrieve information about the segments for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   */
  public toGetSegments() {
    this.to('mobiletargeting:GetSegments');
    return this;
  }

  /**
   * Obtain information about the SMS channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toGetSmsChannel() {
    this.to('mobiletargeting:GetSmsChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an sms message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public toGetSmsTemplate() {
    this.to('mobiletargeting:GetSmsTemplate');
    return this;
  }

  /**
   * Retrieve information about the endpoints that are associated with a user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public toGetUserEndpoints() {
    this.to('mobiletargeting:GetUserEndpoints');
    return this;
  }

  /**
   * Obtain information about the Voice channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toGetVoiceChannel() {
    this.to('mobiletargeting:GetVoiceChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of a voice message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public toGetVoiceTemplate() {
    this.to('mobiletargeting:GetVoiceTemplate');
    return this;
  }

  /**
   * Retrieve information about all journeys for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods
   */
  public toListJourneys() {
    this.to('mobiletargeting:ListJourneys');
    return this;
  }

  /**
   * List tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public toListTagsForResource() {
    this.to('mobiletargeting:ListTagsForResource');
    return this;
  }

  /**
   * Retrieve all versions about a specific template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toListTemplateVersions() {
    this.to('mobiletargeting:ListTemplateVersions');
    return this;
  }

  /**
   * Retrieve metadata about the queried templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods
   */
  public toListTemplates() {
    this.to('mobiletargeting:ListTemplates');
    return this;
  }

  /**
   * Obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods
   */
  public toPhoneNumberValidate() {
    this.to('mobiletargeting:PhoneNumberValidate');
    return this;
  }

  /**
   * Create or update an event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public toPutEventStream() {
    this.to('mobiletargeting:PutEventStream');
    return this;
  }

  /**
   * Create or update events for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods
   */
  public toPutEvents() {
    this.to('mobiletargeting:PutEvents');
    return this;
  }

  /**
   * Used to remove the attributes for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public toRemoveAttributes() {
    this.to('mobiletargeting:RemoveAttributes');
    return this;
  }

  /**
   * Send an SMS message or push notification to specific endpoints.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods
   */
  public toSendMessages() {
    this.to('mobiletargeting:SendMessages');
    return this;
  }

  /**
   * Send an SMS message or push notification to all endpoints that are associated with a specific user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods
   */
  public toSendUsersMessages() {
    this.to('mobiletargeting:SendUsersMessages');
    return this;
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
    this.to('mobiletargeting:TagResource');
    return this;
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
    this.to('mobiletargeting:UntagResource');
    return this;
  }

  /**
   * Update the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public toUpdateAdmChannel() {
    this.to('mobiletargeting:UpdateAdmChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public toUpdateApnsChannel() {
    this.to('mobiletargeting:UpdateApnsChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public toUpdateApnsSandboxChannel() {
    this.to('mobiletargeting:UpdateApnsSandboxChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public toUpdateApnsVoipChannel() {
    this.to('mobiletargeting:UpdateApnsVoipChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public toUpdateApnsVoipSandboxChannel() {
    this.to('mobiletargeting:UpdateApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Update the default settings for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public toUpdateApplicationSettings() {
    this.to('mobiletargeting:UpdateApplicationSettings');
    return this;
  }

  /**
   * Update the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public toUpdateBaiduChannel() {
    this.to('mobiletargeting:UpdateBaiduChannel');
    return this;
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
    this.to('mobiletargeting:UpdateCampaign');
    return this;
  }

  /**
   * Update the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public toUpdateEmailChannel() {
    this.to('mobiletargeting:UpdateEmailChannel');
    return this;
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
    this.to('mobiletargeting:UpdateEmailTemplate');
    return this;
  }

  /**
   * Create an endpoint or update the information for an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public toUpdateEndpoint() {
    this.to('mobiletargeting:UpdateEndpoint');
    return this;
  }

  /**
   * Create or update endpoints as a batch operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods
   */
  public toUpdateEndpointsBatch() {
    this.to('mobiletargeting:UpdateEndpointsBatch');
    return this;
  }

  /**
   * Update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public toUpdateGcmChannel() {
    this.to('mobiletargeting:UpdateGcmChannel');
    return this;
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
    this.to('mobiletargeting:UpdateJourney');
    return this;
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
    this.to('mobiletargeting:UpdateJourneyState');
    return this;
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
    this.to('mobiletargeting:UpdatePushTemplate');
    return this;
  }

  /**
   * Update an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   */
  public toUpdateRecommenderConfiguration() {
    this.to('mobiletargeting:UpdateRecommenderConfiguration');
    return this;
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
    this.to('mobiletargeting:UpdateSegment');
    return this;
  }

  /**
   * Update the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public toUpdateSmsChannel() {
    this.to('mobiletargeting:UpdateSmsChannel');
    return this;
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
    this.to('mobiletargeting:UpdateSmsTemplate');
    return this;
  }

  /**
   * Upate the active version parameter of a specific template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public toUpdateTemplateActiveVersion() {
    this.to('mobiletargeting:UpdateTemplateActiveVersion');
    return this;
  }

  /**
   * Update the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public toUpdateVoiceChannel() {
    this.to('mobiletargeting:UpdateVoiceChannel');
    return this;
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
    this.to('mobiletargeting:UpdateVoiceTemplate');
    return this;
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
}
