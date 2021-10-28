import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [ec2-instance-connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2InstanceConnect extends PolicyStatement {
  public servicePrefix = 'ec2-instance-connect';

  /**
   * Statement provider for service [ec2-instance-connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants access to push an SSH public key to the specified EC2 instance to be used for standard SSH
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEc2Osuser()
   *
   * https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html
   */
  public toSendSSHPublicKey() {
    return this.to('SendSSHPublicKey');
  }

  /**
   * Grants access to push an SSH public key to the specified EC2 instance to be used for serial console SSH
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSerialConsoleSSHPublicKey.html
   */
  public toSendSerialConsoleSSHPublicKey() {
    return this.to('SendSerialConsoleSSHPublicKey');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'SendSSHPublicKey',
      'SendSerialConsoleSSHPublicKey'
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEc2ResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:instance/${ instanceId }`);
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - instance
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEc2ResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by specifying the default user name for the AMI that you used to launch your instance
   *
   * https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html
   *
   * Applies to actions:
   * - .toSendSSHPublicKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEc2Osuser(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:osuser`, value, operator || 'StringLike');
  }
}
