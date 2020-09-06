import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ec2-instance-connect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2instanceconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2InstanceConnect extends PolicyStatement {
  public servicePrefix = 'ec2-instance-connect';
  protected actionList: Actions = {
    "SendSSHPublicKey": {
      "url": "https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html",
      "description": "Grants permission to push the SSH public key to the instance metadata where it remains for 60 seconds.",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      },
      "conditions": [
        "ec2:osuser"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "instance": {
      "name": "instance",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ec2:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ec2-instance-connect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2instanceconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to push the SSH public key to the instance metadata where it remains for 60 seconds.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOsuser()
   *
   * https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html
   */
  public toSendSSHPublicKey() {
    this.add('ec2-instance-connect:SendSSHPublicKey');
    return this;
  }

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
   * - .ifResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the tags associated with the resource
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
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
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
  public ifOsuser(value: string | string[], operator?: string) {
    return this.if(`ec2:osuser`, value, operator || 'StringLike');
  }
}
