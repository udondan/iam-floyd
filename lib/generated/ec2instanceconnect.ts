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
   * Grants permission to establish SSH connection to an EC2 instance using EC2 Instance Connect Endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-OpenTunnel
   */
  public toOpenTunnel() {
    return this.to('OpenTunnel');
  }

  /**
   * Grants permission to push an SSH public key to the specified EC2 instance to be used for standard SSH
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
   * Grants permission to push an SSH public key to the specified EC2 instance to be used for serial console SSH
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
      'OpenTunnel',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEc2ResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ec2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type instance-connect-endpoint to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-CreateInstanceConnectEndpoint
   *
   * @param instanceConnectEndpointId - Identifier for the instanceConnectEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEc2ResourceTag()
   */
  public onInstanceConnectEndpoint(instanceConnectEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ec2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:instance-connect-endpoint/${ instanceConnectEndpointId }`);
  }

  /**
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * Applies to resource types:
   * - instance
   * - instance-connect-endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by maximum session duration associated with the instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-OpenTunnel
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxTunnelDuration(value: number | number[], operator?: Operator | string) {
    return this.if(`maxTunnelDuration`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by private IP Address associated with the instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-OpenTunnel
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * @param value The value(s) to check
   * @param operator Works with [ipaddress operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress). **Default:** `IpAddress`
   */
  public ifPrivateIpAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`privateIpAddress`, value, operator || 'IpAddress');
  }

  /**
   * Filters access by port number associated with the instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-OpenTunnel
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRemotePort(value: number | number[], operator?: Operator | string) {
    return this.if(`remotePort`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * Applies to resource types:
   * - instance
   * - instance-connect-endpoint
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
