import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html).
 *
 * @param options - Options for the statement
 */
export class Ssmmessages extends PolicyStatement {
  public servicePrefix = 'ssmmessages';

  /**
   * Statement provider for service [ssmmessages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to register a control channel for an instance to send control messages to Systems Manager service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSsmSourceInstanceARN()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toCreateControlChannel() {
    return this.to('CreateControlChannel');
  }

  /**
   * Grants permission to register a data channel for an instance to send data messages to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toCreateDataChannel() {
    return this.to('CreateDataChannel');
  }

  /**
   * Grants permission to open a websocket connection for a registered control channel stream from an instance to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toOpenControlChannel() {
    return this.to('OpenControlChannel');
  }

  /**
   * Grants permission to open a websocket connection for a registered data channel stream from an instance to Systems Manager service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  public toOpenDataChannel() {
    return this.to('OpenDataChannel');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateControlChannel',
      'CreateDataChannel',
      'OpenControlChannel',
      'OpenDataChannel'
    ]
  };

  /**
   * Filters access by verifying the Amazon Resource Name (ARN) of the AWS Systems Manager's managed instance from which the request is made. This key is not present when the request comes from the managed instance authenticated with an IAM role associated with EC2 instance profile
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html#awssystemsmanager-policy-keys
   *
   * Applies to actions:
   * - .toCreateControlChannel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSsmSourceInstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:SourceInstanceARN`, value, operator || 'StringLike');
  }
}
