import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [ec2messages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2messages extends PolicyStatement {
  public servicePrefix = 'ec2messages';

  /**
   * Statement provider for service [ec2messages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to acknowledge a message, ensuring it will not be delivered again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toAcknowledgeMessage() {
    return this.to('AcknowledgeMessage');
  }

  /**
   * Grants permission to delete a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDeleteMessage() {
    return this.to('DeleteMessage');
  }

  /**
   * Grants permission to fail a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toFailMessage() {
    return this.to('FailMessage');
  }

  /**
   * Grants permission to route traffic to the correct endpoint based on the given destination for the messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toGetEndpoint() {
    return this.to('GetEndpoint');
  }

  /**
   * Grants permission to deliver messages to clients/instances using long polling
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSsmSourceInstanceARN()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toGetMessages() {
    return this.to('GetMessages');
  }

  /**
   * Grants permission to send replies from clients/instances to upstream service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSsmSourceInstanceARN()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toSendReply() {
    return this.to('SendReply');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcknowledgeMessage',
      'DeleteMessage',
      'FailMessage',
      'SendReply'
    ],
    Read: [
      'GetEndpoint',
      'GetMessages'
    ]
  };

  /**
   * Filters access by verifying the Amazon Resource Name (ARN) of the AWS Systems Manager's managed instance from which the request is made. This key is not present when the request comes from the managed instance authenticated with an IAM role associated with EC2 instance profile
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html#awssystemsmanager-policy-keys
   *
   * Applies to actions:
   * - .toGetMessages()
   * - .toSendReply()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSsmSourceInstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:SourceInstanceARN`, value, operator || 'StringLike');
  }
}
