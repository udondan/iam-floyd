import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service sms-voice
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointsmsandvoiceservice.html
 */
export class SmsVoice extends PolicyStatement {
    public servicePrefix = 'sms-voice';
    public actions : Actions = {
        "CreateConfigurationSet": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html",
            "description": "Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.",
            "accessLevel": "Write"
        },
        "CreateConfigurationSetEventDestination": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html",
            "description": "Create a new event destination in a configuration set.",
            "accessLevel": "Write"
        },
        "DeleteConfigurationSet": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname.html",
            "description": "Deletes an existing configuration set.",
            "accessLevel": "Write"
        },
        "DeleteConfigurationSetEventDestination": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html",
            "description": "Deletes an event destination in a configuration set.",
            "accessLevel": "Write"
        },
        "GetConfigurationSetEventDestinations": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html",
            "description": "Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.",
            "accessLevel": "Read"
        },
        "ListConfigurationSets": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html",
            "description": "Return a list of configuration sets. This operation only returns the configuration sets that are associated with your account in the current AWS Region.",
            "accessLevel": "Read"
        },
        "SendVoiceMessage": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-voice-message.html",
            "description": "Create a new voice message and send it to a recipient's phone number.",
            "accessLevel": "Write"
        },
        "UpdateConfigurationSetEventDestination": {
            "url": "https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html",
            "description": "Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.",
            "accessLevel": "Write"
        }
    };

    /**
     * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html
     */
    public createConfigurationSet () {
        this.add('sms-voice:CreateConfigurationSet');
        return this;
    }

    /**
     * Create a new event destination in a configuration set.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
     */
    public createConfigurationSetEventDestination () {
        this.add('sms-voice:CreateConfigurationSetEventDestination');
        return this;
    }

    /**
     * Deletes an existing configuration set.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname.html
     */
    public deleteConfigurationSet () {
        this.add('sms-voice:DeleteConfigurationSet');
        return this;
    }

    /**
     * Deletes an event destination in a configuration set.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
     */
    public deleteConfigurationSetEventDestination () {
        this.add('sms-voice:DeleteConfigurationSetEventDestination');
        return this;
    }

    /**
     * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
     */
    public getConfigurationSetEventDestinations () {
        this.add('sms-voice:GetConfigurationSetEventDestinations');
        return this;
    }

    /**
     * Return a list of configuration sets. This operation only returns the configuration sets that are associated with your account in the current AWS Region.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html
     */
    public listConfigurationSets () {
        this.add('sms-voice:ListConfigurationSets');
        return this;
    }

    /**
     * Create a new voice message and send it to a recipient's phone number.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-voice-message.html
     */
    public sendVoiceMessage () {
        this.add('sms-voice:SendVoiceMessage');
        return this;
    }

    /**
     * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
     */
    public updateConfigurationSetEventDestination () {
        this.add('sms-voice:UpdateConfigurationSetEventDestination');
        return this;
    }
}
