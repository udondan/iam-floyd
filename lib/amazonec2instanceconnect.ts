import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service ec2-instance-connect
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2instanceconnect.html
 */
export class Ec2InstanceConnect extends PolicyStatement {
  public servicePrefix = 'ec2-instance-connect';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "instance": {
      "name": "instance",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ec2:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Grants permission to push the SSH public key to the instance metadata where it remains for 60 seconds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html
   */
  public sendSSHPublicKey () {
    this.add('ec2-instance-connect:SendSSHPublicKey');
    return this;
  }
}
