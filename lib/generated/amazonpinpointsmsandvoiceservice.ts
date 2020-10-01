import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [sms-voice](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointsmsandvoiceservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SmsVoice extends PolicyStatement {
  public servicePrefix = 'sms-voice';

  /**
   * Statement provider for service [sms-voice](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointsmsandvoiceservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html
   */
  public toCreateConfigurationSet() {
    this.to('sms-voice:CreateConfigurationSet');
    return this;
  }

  /**
   * Create a new event destination in a configuration set.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  public toCreateConfigurationSetEventDestination() {
    this.to('sms-voice:CreateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Deletes an existing configuration set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname.html
   */
  public toDeleteConfigurationSet() {
    this.to('sms-voice:DeleteConfigurationSet');
    return this;
  }

  /**
   * Deletes an event destination in a configuration set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  public toDeleteConfigurationSetEventDestination() {
    this.to('sms-voice:DeleteConfigurationSetEventDestination');
    return this;
  }

  /**
   * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    this.to('sms-voice:GetConfigurationSetEventDestinations');
    return this;
  }

  /**
   * Return a list of configuration sets. This operation only returns the configuration sets that are associated with your account in the current AWS Region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets.html
   */
  public toListConfigurationSets() {
    this.to('sms-voice:ListConfigurationSets');
    return this;
  }

  /**
   * Create a new voice message and send it to a recipient's phone number.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-voice-message.html
   */
  public toSendVoiceMessage() {
    this.to('sms-voice:SendVoiceMessage');
    return this;
  }

  /**
   * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/apireference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  public toUpdateConfigurationSetEventDestination() {
    this.to('sms-voice:UpdateConfigurationSetEventDestination');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateConfigurationSet",
      "CreateConfigurationSetEventDestination",
      "DeleteConfigurationSet",
      "DeleteConfigurationSetEventDestination",
      "SendVoiceMessage",
      "UpdateConfigurationSetEventDestination"
    ],
    "Read": [
      "GetConfigurationSetEventDestinations",
      "ListConfigurationSets"
    ]
  };
}
