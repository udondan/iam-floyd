import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sms-voice](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsandvoiceservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SmsVoice extends PolicyStatement {
  public servicePrefix = 'sms-voice';

  /**
   * Statement provider for service [sms-voice](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsandvoiceservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets.html
   */
  public toCreateConfigurationSet() {
    return this.to('CreateConfigurationSet');
  }

  /**
   * Create a new event destination in a configuration set.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  public toCreateConfigurationSetEventDestination() {
    return this.to('CreateConfigurationSetEventDestination');
  }

  /**
   * Deletes an existing configuration set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Deletes an event destination in a configuration set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  public toDeleteConfigurationSetEventDestination() {
    return this.to('DeleteConfigurationSetEventDestination');
  }

  /**
   * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    return this.to('GetConfigurationSetEventDestinations');
  }

  /**
   * Return a list of configuration sets. This operation only returns the configuration sets that are associated with your account in the current AWS Region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets.html
   */
  public toListConfigurationSets() {
    return this.to('ListConfigurationSets');
  }

  /**
   * Create a new voice message and send it to a recipient's phone number.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-voice-message.html
   */
  public toSendVoiceMessage() {
    return this.to('SendVoiceMessage');
  }

  /**
   * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  public toUpdateConfigurationSetEventDestination() {
    return this.to('UpdateConfigurationSetEventDestination');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConfigurationSet',
      'CreateConfigurationSetEventDestination',
      'DeleteConfigurationSet',
      'DeleteConfigurationSetEventDestination',
      'SendVoiceMessage',
      'UpdateConfigurationSetEventDestination'
    ],
    Read: [
      'GetConfigurationSetEventDestinations',
      'ListConfigurationSets'
    ]
  };
}
