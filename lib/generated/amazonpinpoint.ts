import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mobiletargeting](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobiletargeting extends PolicyStatement {
  public servicePrefix = 'mobiletargeting';
  protected actionList: Actions = {
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods",
      "description": "Create an app.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateCampaign": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods",
      "description": "Create a campaign for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateEmailTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods",
      "description": "Create an email template.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateExportJob": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods",
      "description": "Create an export job that exports endpoint definitions to Amazon S3.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "CreateImportJob": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods",
      "description": "Import endpoint definitions from to create a segment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "CreateJourney": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods",
      "description": "Create a Journey for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreatePushTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods",
      "description": "Create a push notification template.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateRecommenderConfiguration": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration",
      "description": "Create an Amazon Pinpoint configuration for a recommender model.",
      "accessLevel": "Write"
    },
    "CreateSegment": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods",
      "description": "Create a segment that is based on endpoint data reported to Pinpoint by your app. To allow a user to create a segment by importing endpoint data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob action.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateSmsTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods",
      "description": "Create an sms message template.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateVoiceTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods",
      "description": "Create a voice message template.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteAdmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods",
      "description": "Delete the ADM channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteApnsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods",
      "description": "Delete the APNs channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteApnsSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods",
      "description": "Delete the APNs sandbox channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteApnsVoipChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods",
      "description": "Delete the APNs VoIP channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteApnsVoipSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods",
      "description": "Delete the APNs VoIP sandbox channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods",
      "description": "Delete a specific campaign.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteBaiduChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods",
      "description": "Delete the Baidu channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteCampaign": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods",
      "description": "Delete a specific campaign.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      }
    },
    "DeleteEmailChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods",
      "description": "Delete the email channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteEmailTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods",
      "description": "Delete an email template or an email template version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "DeleteEndpoint": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods",
      "description": "Delete an endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteEventStream": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods",
      "description": "Delete the event stream for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteGcmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods",
      "description": "Delete the GCM channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteJourney": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods",
      "description": "Delete a specific journey.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "journeys": {
          "required": true
        }
      }
    },
    "DeletePushTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods",
      "description": "Delete a push notification template or a push notification template version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "DeleteRecommenderConfiguration": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration",
      "description": "Delete an Amazon Pinpoint configuration for a recommender model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recommenders": {
          "required": true
        }
      }
    },
    "DeleteSegment": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods",
      "description": "Delete a specific segment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "DeleteSmsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods",
      "description": "Delete the SMS channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteSmsTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods",
      "description": "Delete an sms message template or an sms message template version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "DeleteUserEndpoints": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods",
      "description": "Delete all of the endpoints that are associated with a user ID.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteVoiceChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods",
      "description": "Delete the Voice channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteVoiceTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods",
      "description": "Delete a voice message template or a voice message template version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "GetAdmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods",
      "description": "Retrieve information about the Amazon Device Messaging (ADM) channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApnsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods",
      "description": "Retrieve information about the APNs channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApnsSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods",
      "description": "Retrieve information about the APNs sandbox channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApnsVoipChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods",
      "description": "Retrieve information about the APNs VoIP channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApnsVoipSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods",
      "description": "Retrieve information about the APNs VoIP sandbox channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApp": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods",
      "description": "Retrieve information about a specific app in your Amazon Pinpoint account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApplicationSettings": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods",
      "description": "Retrieve the default settings for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApps": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods",
      "description": "Retrieve a list of apps in your Amazon Pinpoint account.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetBaiduChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods",
      "description": "Retrieve information about the Baidu channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetCampaign": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods",
      "description": "Retrieve information about a specific campaign.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      }
    },
    "GetCampaignActivities": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods",
      "description": "Retrieve information about the activities performed by a campaign.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      }
    },
    "GetCampaignVersion": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods",
      "description": "Retrieve information about a specific campaign version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      }
    },
    "GetCampaignVersions": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods",
      "description": "Retrieve information about the current and prior versions of a campaign.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      }
    },
    "GetCampaigns": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods",
      "description": "Retrieve information about all campaigns for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetChannels": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods",
      "description": "Get all channels information for your app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetEmailChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods",
      "description": "Obtain information about the email channel in an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetEmailTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods",
      "description": "Retrieve information about a specific or the active version of an email template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "GetEndpoint": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods",
      "description": "Retrieve information about a specific endpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetEventStream": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods",
      "description": "Retrieve information about the event stream for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetExportJob": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods",
      "description": "Obtain information about a specific export job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetExportJobs": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods",
      "description": "Retrieve a list of all of the export jobs for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetGcmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods",
      "description": "Retrieve information about the GCM channel for an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetImportJob": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods",
      "description": "Retrieve information about a specific import job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetImportJobs": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods",
      "description": "Retrieve information about all import jobs for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetJourney": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods",
      "description": "Retrieve information about a specific journey.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "journeys": {
          "required": true
        }
      }
    },
    "GetPushTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods",
      "description": "Retrieve information about a specific or the active version of an push notification template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "GetRecommenderConfiguration": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration",
      "description": "Retrieve information about an Amazon Pinpoint configuration for a recommender model.",
      "accessLevel": "Read",
      "resourceTypes": {
        "recommenders": {
          "required": true
        }
      }
    },
    "GetRecommenderConfigurations": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations",
      "description": "Retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account.",
      "accessLevel": "List"
    },
    "GetSegment": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods",
      "description": "Retrieve information about a specific segment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "GetSegmentExportJobs": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods",
      "description": "Retrieve information about jobs that export endpoint definitions from segments to Amazon S3.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "GetSegmentImportJobs": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods",
      "description": "Retrieve information about jobs that create segments by importing endpoint definitions from .",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "GetSegmentVersion": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods",
      "description": "Retrieve information about a specific segment version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "GetSegmentVersions": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods",
      "description": "Retrieve information about the current and prior versions of a segment.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      }
    },
    "GetSegments": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods",
      "description": "Retrieve information about the segments for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetSmsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods",
      "description": "Obtain information about the SMS channel in an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetSmsTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods",
      "description": "Retrieve information about a specific or the active version of an sms message template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "GetUserEndpoints": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods",
      "description": "Retrieve information about the endpoints that are associated with a user ID.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetVoiceChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods",
      "description": "Obtain information about the Voice channel in an app.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetVoiceTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods",
      "description": "Retrieve information about a specific or the active version of a voice message template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "ListJourneys": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods",
      "description": "Retrieve information about all journeys for an app.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get",
      "description": "List tags for a resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": false
        },
        "campaigns": {
          "required": false
        },
        "segments": {
          "required": false
        }
      }
    },
    "ListTemplateVersions": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods",
      "description": "Retrieve all versions about a specific template.",
      "accessLevel": "List",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "ListTemplates": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods",
      "description": "Retrieve metadata about the queried templates.",
      "accessLevel": "List",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "PhoneNumberValidate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods",
      "description": "Obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "PutEventStream": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods",
      "description": "Create or update an event stream for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "PutEvents": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods",
      "description": "Create or update events for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "RemoveAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods",
      "description": "Used to remove the attributes for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "SendMessages": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods",
      "description": "Send an SMS message or push notification to specific endpoints.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "SendUsersMessages": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods",
      "description": "Send an SMS message or push notification to all endpoints that are associated with a specific user ID.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-post",
      "description": "Adds tags to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "apps": {
          "required": false
        },
        "campaigns": {
          "required": false
        },
        "segments": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-delete",
      "description": "Removes tags from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "apps": {
          "required": false
        },
        "campaigns": {
          "required": false
        },
        "segments": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateAdmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods",
      "description": "Update the Amazon Device Messaging (ADM) channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateApnsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods",
      "description": "Update the Apple Push Notification service (APNs) channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateApnsSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods",
      "description": "Update the Apple Push Notification service (APNs) sandbox channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateApnsVoipChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods",
      "description": "Update the Apple Push Notification service (APNs) VoIP channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateApnsVoipSandboxChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods",
      "description": "Update the Apple Push Notification service (APNs) VoIP sandbox channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateApplicationSettings": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods",
      "description": "Update the default settings for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateBaiduChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods",
      "description": "Update the Baidu channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateCampaign": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods",
      "description": "Update a specific campaign.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "campaigns": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateEmailChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods",
      "description": "Update the email channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateEmailTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods",
      "description": "Update a specific email template under the same version or generate a new version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateEndpoint": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods",
      "description": "Create an endpoint or update the information for an endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateEndpointsBatch": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods",
      "description": "Create or update endpoints as a batch operation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateGcmChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods",
      "description": "Update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateJourney": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods",
      "description": "Update a specific journey.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "journeys": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateJourneyState": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#apps-application-id-journeys-journey-id-state-http-methods",
      "description": "Update a specific journey state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "journeys": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdatePushTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods",
      "description": "Update a specific push notification template under the same version or generate a new version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateRecommenderConfiguration": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration",
      "description": "Update an Amazon Pinpoint configuration for a recommender model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recommenders": {
          "required": true
        }
      }
    },
    "UpdateSegment": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods",
      "description": "Update a specific segment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        },
        "segments": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateSmsChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods",
      "description": "Update the SMS channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateSmsTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods",
      "description": "Update a specific sms message template under the same version or generate a new version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateTemplateActiveVersion": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods",
      "description": "Upate the active version parameter of a specific template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      }
    },
    "UpdateVoiceChannel": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods",
      "description": "Update the Voice channel for an app.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateVoiceTemplate": {
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods",
      "description": "Update a specific voice message template under the same version or generate a new version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "templates": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "apps": {
      "name": "apps",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/developerguide/gettingstarted.html#gettingstarted-addapp",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "campaigns": {
      "name": "campaigns",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/campaigns/${CampaignId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "journeys": {
      "name": "journeys",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/journeys/${JourneyId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "segments": {
      "name": "segments",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:apps/${AppId}/segments/${SegmentId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "templates": {
      "name": "templates",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/${ChannelType}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "recommenders": {
      "name": "recommenders",
      "url": "https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html",
      "arn": "arn:${Partition}:mobiletargeting:${Region}:${Account}:recommenders/${RecommenderId}",
      "conditionKeys": []
    }
  };

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
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public createApp() {
    this.add('mobiletargeting:CreateApp');
    return this;
  }

  /**
   * Create a campaign for an app.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   */
  public createCampaign() {
    this.add('mobiletargeting:CreateCampaign');
    return this;
  }

  /**
   * Create an email template.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public createEmailTemplate() {
    this.add('mobiletargeting:CreateEmailTemplate');
    return this;
  }

  /**
   * Create an export job that exports endpoint definitions to Amazon S3.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public createExportJob() {
    this.add('mobiletargeting:CreateExportJob');
    return this;
  }

  /**
   * Import endpoint definitions from to create a segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public createImportJob() {
    this.add('mobiletargeting:CreateImportJob');
    return this;
  }

  /**
   * Create a Journey for an app.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public createJourney() {
    this.add('mobiletargeting:CreateJourney');
    return this;
  }

  /**
   * Create a push notification template.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public createPushTemplate() {
    this.add('mobiletargeting:CreatePushTemplate');
    return this;
  }

  /**
   * Create an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  public createRecommenderConfiguration() {
    this.add('mobiletargeting:CreateRecommenderConfiguration');
    return this;
  }

  /**
   * Create a segment that is based on endpoint data reported to Pinpoint by your app. To allow a user to create a segment by importing endpoint data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob action.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   */
  public createSegment() {
    this.add('mobiletargeting:CreateSegment');
    return this;
  }

  /**
   * Create an sms message template.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public createSmsTemplate() {
    this.add('mobiletargeting:CreateSmsTemplate');
    return this;
  }

  /**
   * Create a voice message template.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public createVoiceTemplate() {
    this.add('mobiletargeting:CreateVoiceTemplate');
    return this;
  }

  /**
   * Delete the ADM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public deleteAdmChannel() {
    this.add('mobiletargeting:DeleteAdmChannel');
    return this;
  }

  /**
   * Delete the APNs channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public deleteApnsChannel() {
    this.add('mobiletargeting:DeleteApnsChannel');
    return this;
  }

  /**
   * Delete the APNs sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public deleteApnsSandboxChannel() {
    this.add('mobiletargeting:DeleteApnsSandboxChannel');
    return this;
  }

  /**
   * Delete the APNs VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public deleteApnsVoipChannel() {
    this.add('mobiletargeting:DeleteApnsVoipChannel');
    return this;
  }

  /**
   * Delete the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public deleteApnsVoipSandboxChannel() {
    this.add('mobiletargeting:DeleteApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public deleteApp() {
    this.add('mobiletargeting:DeleteApp');
    return this;
  }

  /**
   * Delete the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public deleteBaiduChannel() {
    this.add('mobiletargeting:DeleteBaiduChannel');
    return this;
  }

  /**
   * Delete a specific campaign.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public deleteCampaign() {
    this.add('mobiletargeting:DeleteCampaign');
    return this;
  }

  /**
   * Delete the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public deleteEmailChannel() {
    this.add('mobiletargeting:DeleteEmailChannel');
    return this;
  }

  /**
   * Delete an email template or an email template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public deleteEmailTemplate() {
    this.add('mobiletargeting:DeleteEmailTemplate');
    return this;
  }

  /**
   * Delete an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public deleteEndpoint() {
    this.add('mobiletargeting:DeleteEndpoint');
    return this;
  }

  /**
   * Delete the event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public deleteEventStream() {
    this.add('mobiletargeting:DeleteEventStream');
    return this;
  }

  /**
   * Delete the GCM channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public deleteGcmChannel() {
    this.add('mobiletargeting:DeleteGcmChannel');
    return this;
  }

  /**
   * Delete a specific journey.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public deleteJourney() {
    this.add('mobiletargeting:DeleteJourney');
    return this;
  }

  /**
   * Delete a push notification template or a push notification template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public deletePushTemplate() {
    this.add('mobiletargeting:DeletePushTemplate');
    return this;
  }

  /**
   * Delete an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   */
  public deleteRecommenderConfiguration() {
    this.add('mobiletargeting:DeleteRecommenderConfiguration');
    return this;
  }

  /**
   * Delete a specific segment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public deleteSegment() {
    this.add('mobiletargeting:DeleteSegment');
    return this;
  }

  /**
   * Delete the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public deleteSmsChannel() {
    this.add('mobiletargeting:DeleteSmsChannel');
    return this;
  }

  /**
   * Delete an sms message template or an sms message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public deleteSmsTemplate() {
    this.add('mobiletargeting:DeleteSmsTemplate');
    return this;
  }

  /**
   * Delete all of the endpoints that are associated with a user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public deleteUserEndpoints() {
    this.add('mobiletargeting:DeleteUserEndpoints');
    return this;
  }

  /**
   * Delete the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public deleteVoiceChannel() {
    this.add('mobiletargeting:DeleteVoiceChannel');
    return this;
  }

  /**
   * Delete a voice message template or a voice message template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public deleteVoiceTemplate() {
    this.add('mobiletargeting:DeleteVoiceTemplate');
    return this;
  }

  /**
   * Retrieve information about the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public getAdmChannel() {
    this.add('mobiletargeting:GetAdmChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public getApnsChannel() {
    this.add('mobiletargeting:GetApnsChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public getApnsSandboxChannel() {
    this.add('mobiletargeting:GetApnsSandboxChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs VoIP channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public getApnsVoipChannel() {
    this.add('mobiletargeting:GetApnsVoipChannel');
    return this;
  }

  /**
   * Retrieve information about the APNs VoIP sandbox channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public getApnsVoipSandboxChannel() {
    this.add('mobiletargeting:GetApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Retrieve information about a specific app in your Amazon Pinpoint account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public getApp() {
    this.add('mobiletargeting:GetApp');
    return this;
  }

  /**
   * Retrieve the default settings for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public getApplicationSettings() {
    this.add('mobiletargeting:GetApplicationSettings');
    return this;
  }

  /**
   * Retrieve a list of apps in your Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods
   */
  public getApps() {
    this.add('mobiletargeting:GetApps');
    return this;
  }

  /**
   * Retrieve information about the Baidu channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public getBaiduChannel() {
    this.add('mobiletargeting:GetBaiduChannel');
    return this;
  }

  /**
   * Retrieve information about a specific campaign.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public getCampaign() {
    this.add('mobiletargeting:GetCampaign');
    return this;
  }

  /**
   * Retrieve information about the activities performed by a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods
   */
  public getCampaignActivities() {
    this.add('mobiletargeting:GetCampaignActivities');
    return this;
  }

  /**
   * Retrieve information about a specific campaign version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods
   */
  public getCampaignVersion() {
    this.add('mobiletargeting:GetCampaignVersion');
    return this;
  }

  /**
   * Retrieve information about the current and prior versions of a campaign.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods
   */
  public getCampaignVersions() {
    this.add('mobiletargeting:GetCampaignVersions');
    return this;
  }

  /**
   * Retrieve information about all campaigns for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   */
  public getCampaigns() {
    this.add('mobiletargeting:GetCampaigns');
    return this;
  }

  /**
   * Get all channels information for your app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods
   */
  public getChannels() {
    this.add('mobiletargeting:GetChannels');
    return this;
  }

  /**
   * Obtain information about the email channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public getEmailChannel() {
    this.add('mobiletargeting:GetEmailChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an email template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public getEmailTemplate() {
    this.add('mobiletargeting:GetEmailTemplate');
    return this;
  }

  /**
   * Retrieve information about a specific endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public getEndpoint() {
    this.add('mobiletargeting:GetEndpoint');
    return this;
  }

  /**
   * Retrieve information about the event stream for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public getEventStream() {
    this.add('mobiletargeting:GetEventStream');
    return this;
  }

  /**
   * Obtain information about a specific export job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public getExportJob() {
    this.add('mobiletargeting:GetExportJob');
    return this;
  }

  /**
   * Retrieve a list of all of the export jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public getExportJobs() {
    this.add('mobiletargeting:GetExportJobs');
    return this;
  }

  /**
   * Retrieve information about the GCM channel for an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public getGcmChannel() {
    this.add('mobiletargeting:GetGcmChannel');
    return this;
  }

  /**
   * Retrieve information about a specific import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods
   */
  public getImportJob() {
    this.add('mobiletargeting:GetImportJob');
    return this;
  }

  /**
   * Retrieve information about all import jobs for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public getImportJobs() {
    this.add('mobiletargeting:GetImportJobs');
    return this;
  }

  /**
   * Retrieve information about a specific journey.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public getJourney() {
    this.add('mobiletargeting:GetJourney');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an push notification template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public getPushTemplate() {
    this.add('mobiletargeting:GetPushTemplate');
    return this;
  }

  /**
   * Retrieve information about an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   */
  public getRecommenderConfiguration() {
    this.add('mobiletargeting:GetRecommenderConfiguration');
    return this;
  }

  /**
   * Retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  public getRecommenderConfigurations() {
    this.add('mobiletargeting:GetRecommenderConfigurations');
    return this;
  }

  /**
   * Retrieve information about a specific segment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public getSegment() {
    this.add('mobiletargeting:GetSegment');
    return this;
  }

  /**
   * Retrieve information about jobs that export endpoint definitions from segments to Amazon S3.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   */
  public getSegmentExportJobs() {
    this.add('mobiletargeting:GetSegmentExportJobs');
    return this;
  }

  /**
   * Retrieve information about jobs that create segments by importing endpoint definitions from .
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   */
  public getSegmentImportJobs() {
    this.add('mobiletargeting:GetSegmentImportJobs');
    return this;
  }

  /**
   * Retrieve information about a specific segment version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods
   */
  public getSegmentVersion() {
    this.add('mobiletargeting:GetSegmentVersion');
    return this;
  }

  /**
   * Retrieve information about the current and prior versions of a segment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods
   */
  public getSegmentVersions() {
    this.add('mobiletargeting:GetSegmentVersions');
    return this;
  }

  /**
   * Retrieve information about the segments for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   */
  public getSegments() {
    this.add('mobiletargeting:GetSegments');
    return this;
  }

  /**
   * Obtain information about the SMS channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public getSmsChannel() {
    this.add('mobiletargeting:GetSmsChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of an sms message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public getSmsTemplate() {
    this.add('mobiletargeting:GetSmsTemplate');
    return this;
  }

  /**
   * Retrieve information about the endpoints that are associated with a user ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   */
  public getUserEndpoints() {
    this.add('mobiletargeting:GetUserEndpoints');
    return this;
  }

  /**
   * Obtain information about the Voice channel in an app.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public getVoiceChannel() {
    this.add('mobiletargeting:GetVoiceChannel');
    return this;
  }

  /**
   * Retrieve information about a specific or the active version of a voice message template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public getVoiceTemplate() {
    this.add('mobiletargeting:GetVoiceTemplate');
    return this;
  }

  /**
   * Retrieve information about all journeys for an app.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods
   */
  public listJourneys() {
    this.add('mobiletargeting:ListJourneys');
    return this;
  }

  /**
   * List tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public listTagsForResource() {
    this.add('mobiletargeting:ListTagsForResource');
    return this;
  }

  /**
   * Retrieve all versions about a specific template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public listTemplateVersions() {
    this.add('mobiletargeting:ListTemplateVersions');
    return this;
  }

  /**
   * Retrieve metadata about the queried templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods
   */
  public listTemplates() {
    this.add('mobiletargeting:ListTemplates');
    return this;
  }

  /**
   * Obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods
   */
  public phoneNumberValidate() {
    this.add('mobiletargeting:PhoneNumberValidate');
    return this;
  }

  /**
   * Create or update an event stream for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   */
  public putEventStream() {
    this.add('mobiletargeting:PutEventStream');
    return this;
  }

  /**
   * Create or update events for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods
   */
  public putEvents() {
    this.add('mobiletargeting:PutEvents');
    return this;
  }

  /**
   * Used to remove the attributes for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   */
  public removeAttributes() {
    this.add('mobiletargeting:RemoveAttributes');
    return this;
  }

  /**
   * Send an SMS message or push notification to specific endpoints.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods
   */
  public sendMessages() {
    this.add('mobiletargeting:SendMessages');
    return this;
  }

  /**
   * Send an SMS message or push notification to all endpoints that are associated with a specific user ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods
   */
  public sendUsersMessages() {
    this.add('mobiletargeting:SendUsersMessages');
    return this;
  }

  /**
   * Adds tags to a resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-post
   */
  public tagResource() {
    this.add('mobiletargeting:TagResource');
    return this;
  }

  /**
   * Removes tags from a resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  public untagResource() {
    this.add('mobiletargeting:UntagResource');
    return this;
  }

  /**
   * Update the Amazon Device Messaging (ADM) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   */
  public updateAdmChannel() {
    this.add('mobiletargeting:UpdateAdmChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   */
  public updateApnsChannel() {
    this.add('mobiletargeting:UpdateApnsChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   */
  public updateApnsSandboxChannel() {
    this.add('mobiletargeting:UpdateApnsSandboxChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   */
  public updateApnsVoipChannel() {
    this.add('mobiletargeting:UpdateApnsVoipChannel');
    return this;
  }

  /**
   * Update the Apple Push Notification service (APNs) VoIP sandbox channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   */
  public updateApnsVoipSandboxChannel() {
    this.add('mobiletargeting:UpdateApnsVoipSandboxChannel');
    return this;
  }

  /**
   * Update the default settings for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   */
  public updateApplicationSettings() {
    this.add('mobiletargeting:UpdateApplicationSettings');
    return this;
  }

  /**
   * Update the Baidu channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   */
  public updateBaiduChannel() {
    this.add('mobiletargeting:UpdateBaiduChannel');
    return this;
  }

  /**
   * Update a specific campaign.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   */
  public updateCampaign() {
    this.add('mobiletargeting:UpdateCampaign');
    return this;
  }

  /**
   * Update the email channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   */
  public updateEmailChannel() {
    this.add('mobiletargeting:UpdateEmailChannel');
    return this;
  }

  /**
   * Update a specific email template under the same version or generate a new version.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   */
  public updateEmailTemplate() {
    this.add('mobiletargeting:UpdateEmailTemplate');
    return this;
  }

  /**
   * Create an endpoint or update the information for an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   */
  public updateEndpoint() {
    this.add('mobiletargeting:UpdateEndpoint');
    return this;
  }

  /**
   * Create or update endpoints as a batch operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods
   */
  public updateEndpointsBatch() {
    this.add('mobiletargeting:UpdateEndpointsBatch');
    return this;
  }

  /**
   * Update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   */
  public updateGcmChannel() {
    this.add('mobiletargeting:UpdateGcmChannel');
    return this;
  }

  /**
   * Update a specific journey.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   */
  public updateJourney() {
    this.add('mobiletargeting:UpdateJourney');
    return this;
  }

  /**
   * Update a specific journey state.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#apps-application-id-journeys-journey-id-state-http-methods
   */
  public updateJourneyState() {
    this.add('mobiletargeting:UpdateJourneyState');
    return this;
  }

  /**
   * Update a specific push notification template under the same version or generate a new version.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   */
  public updatePushTemplate() {
    this.add('mobiletargeting:UpdatePushTemplate');
    return this;
  }

  /**
   * Update an Amazon Pinpoint configuration for a recommender model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   */
  public updateRecommenderConfiguration() {
    this.add('mobiletargeting:UpdateRecommenderConfiguration');
    return this;
  }

  /**
   * Update a specific segment.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   */
  public updateSegment() {
    this.add('mobiletargeting:UpdateSegment');
    return this;
  }

  /**
   * Update the SMS channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   */
  public updateSmsChannel() {
    this.add('mobiletargeting:UpdateSmsChannel');
    return this;
  }

  /**
   * Update a specific sms message template under the same version or generate a new version.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   */
  public updateSmsTemplate() {
    this.add('mobiletargeting:UpdateSmsTemplate');
    return this;
  }

  /**
   * Upate the active version parameter of a specific template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   */
  public updateTemplateActiveVersion() {
    this.add('mobiletargeting:UpdateTemplateActiveVersion');
    return this;
  }

  /**
   * Update the Voice channel for an app.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   */
  public updateVoiceChannel() {
    this.add('mobiletargeting:UpdateVoiceChannel');
    return this;
  }

  /**
   * Update a specific voice message template under the same version or generate a new version.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   */
  public updateVoiceTemplate() {
    this.add('mobiletargeting:UpdateVoiceTemplate');
    return this;
  }

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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
